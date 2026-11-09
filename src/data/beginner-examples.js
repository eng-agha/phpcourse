// Focused teaching examples. Database examples require the local course schema
// and db.php; protected handlers require a verified classroom session.
export const examples = {
'14A':`<?php
$path = __DIR__ . '/practice-note.txt';
$written = file_put_contents($path, 'My first saved note', LOCK_EX);
if ($written === false) { exit('The note could not be saved.'); }
$text = file_get_contents($path);
if ($text === false) { exit('The note could not be read.'); }
echo htmlspecialchars($text, ENT_QUOTES, 'UTF-8');`,
'14B':`<?php
// Handler excerpt: verify login, permission and CSRF before this block.
$file = $_FILES['photo'] ?? null;
if (!$file || $file['error'] !== UPLOAD_ERR_OK || $file['size'] > 2000000) {
    http_response_code(422); exit('Choose an image smaller than 2 MB.');
}
$type = (new finfo(FILEINFO_MIME_TYPE))->file($file['tmp_name']);
$allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png'];
if (!isset($allowed[$type])) { exit('Only JPEG and PNG are accepted.'); }
$folder = getenv('PRIVATE_UPLOAD_DIR'); // Outside the public document root.
if (!$folder || !is_dir($folder)) { exit('Private storage is unavailable.'); }
$name = bin2hex(random_bytes(16)) . '.' . $allowed[$type];
if (!move_uploaded_file($file['tmp_name'], $folder . '/' . $name)) {
    exit('The upload could not be saved.');
}
echo 'Image saved.';`,
'15A':`CREATE DATABASE php_class CHARACTER SET utf8mb4;
USE php_class;
CREATE TABLE students (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(190) NOT NULL UNIQUE,
    stage TINYINT UNSIGNED NOT NULL
);
INSERT INTO students (name, email, stage)
VALUES ('Agha', 'agha@example.com', 4);
SELECT id, name, stage FROM students;`,
'15B':`<?php
// Save as db.php. Set DB_USER and DB_PASSWORD in your local environment.
try {
    $pdo = new PDO(
        'mysql:host=127.0.0.1;dbname=php_class;charset=utf8mb4',
        getenv('DB_USER'), getenv('DB_PASSWORD'),
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
         PDO::ATTR_EMULATE_PREPARES => false]
    );
} catch (PDOException $error) {
    error_log($error->getMessage());
    http_response_code(500);
    exit('Database connection unavailable.');
}`,
'16A':`<?php
require __DIR__ . '/db.php';
$email = 'agha@example.com';
$query = $pdo->prepare('SELECT id, name FROM students WHERE email = ?');
$query->execute([$email]);
$student = $query->fetch(PDO::FETCH_ASSOC);
echo $student ? htmlspecialchars($student['name'], ENT_QUOTES, 'UTF-8') : 'No student found.';`,
'16B':`<?php
require __DIR__ . '/db.php';
$sorts = ['name' => 'name', 'newest' => 'id'];
$sort = $_GET['sort'] ?? 'name';
$column = is_string($sort) ? ($sorts[$sort] ?? 'name') : 'name';
$term = $_GET['q'] ?? '';
$term = is_string($term) ? substr($term, 0, 100) : '';
$query = $pdo->prepare("SELECT id, name FROM students WHERE name LIKE ? ORDER BY $column LIMIT 20");
$query->execute(['%' . $term . '%']);
foreach ($query->fetchAll(PDO::FETCH_ASSOC) as $row) {
    echo htmlspecialchars($row['name'], ENT_QUOTES, 'UTF-8') . '<br>';
}`,
'17A':`<?php
// Rebuild this flow first, then compare your own implementation.
require __DIR__ . '/db.php';
$value = $_GET['stage'] ?? '4';
$stage = is_string($value) ? filter_var($value, FILTER_VALIDATE_INT) : false;
if ($stage === false || $stage < 1 || $stage > 4) {
    http_response_code(422); exit('Choose a stage from 1 to 4.');
}
$query = $pdo->prepare('SELECT name FROM students WHERE stage = ? ORDER BY id LIMIT 20');
$query->execute([$stage]);
$rows = $query->fetchAll(PDO::FETCH_ASSOC);
if (!$rows) { echo 'No students found.'; }
foreach ($rows as $row) { echo htmlspecialchars($row['name'], ENT_QUOTES, 'UTF-8') . '<br>'; }`,
'17B':`<?php
require __DIR__ . '/db.php';
try {
    $query = $pdo->prepare('SELECT name FROM students WHERE id = ?');
    $query->execute([1]);
    echo $query->fetchColumn() ?: 'No matching record.';
} catch (PDOException $error) {
    error_log($error->getMessage());
    http_response_code(500);
    echo 'The record could not be loaded.';
}
// In the local lab only: change a column name, observe the private log,
// restore the correct name, and repeat the original successful case.`,
'18A':`<?php
// POST handler excerpt; authenticate and verify CSRF before this block.
require __DIR__ . '/db.php';
$name = $_POST['name'] ?? null;
$email = $_POST['email'] ?? null;
if (!is_string($name) || !is_string($email) || trim($name) === '' ||
    strlen($name) > 100 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422); exit('Check the name and email.');
}
try {
    $query = $pdo->prepare('INSERT INTO students (name, email, stage) VALUES (?, ?, ?)');
    $query->execute([trim($name), $email, 4]);
    header('Location: students.php', true, 303); exit;
} catch (PDOException $error) {
    error_log($error->getMessage());
    http_response_code(422); echo 'The student could not be saved. Check for a duplicate email.';
}`,
'18B':`<?php
require __DIR__ . '/db.php';
$page = $_GET['page'] ?? '1';
$page = is_string($page) ? filter_var($page, FILTER_VALIDATE_INT) : false;
$page = max(1, min(1000, $page ?: 1));
$query = $pdo->prepare('SELECT id, name FROM students ORDER BY id LIMIT ? OFFSET ?');
$query->bindValue(1, 10, PDO::PARAM_INT);
$query->bindValue(2, ($page - 1) * 10, PDO::PARAM_INT);
$query->execute();
$rows = $query->fetchAll(PDO::FETCH_ASSOC);
if (!$rows) { echo 'No students on this page.'; }
foreach ($rows as $row) { echo htmlspecialchars($row['name'], ENT_QUOTES, 'UTF-8') . '<br>'; }`,
'19A':`<?php
// POST handler excerpt. Verify authentication, record permission and CSRF first.
require __DIR__ . '/db.php';
$id = $_POST['id'] ?? null;
$name = $_POST['name'] ?? null;
$id = is_string($id) ? filter_var($id, FILTER_VALIDATE_INT) : false;
if (!$id || $id < 1 || !is_string($name) || trim($name) === '' || strlen($name) > 100) {
    http_response_code(422); exit('Invalid record or name.');
}
$find = $pdo->prepare('SELECT id FROM students WHERE id = ?');
$find->execute([$id]);
if (!$find->fetchColumn()) { http_response_code(404); exit('Student not found.'); }
$update = $pdo->prepare('UPDATE students SET name = ? WHERE id = ?');
$update->execute([trim($name), $id]);
echo 'Student updated.';`,
'19B':`<?php
session_start();
require __DIR__ . '/db.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }
if (empty($_SESSION['operator_id'])) { http_response_code(401); exit; }
$sent = $_POST['csrf'] ?? null;
$known = $_SESSION['csrf'] ?? null;
if (!is_string($known) || $known === '' || !is_string($sent) || !hash_equals($known, $sent)) {
    http_response_code(403); exit('Invalid request token.');
}
// Classroom policy: only a verified operator can manage synthetic students.
$id = $_POST['id'] ?? null;
$id = is_string($id) ? filter_var($id, FILTER_VALIDATE_INT) : false;
if (!$id || $id < 1) { http_response_code(422); exit; }
$delete = $pdo->prepare('DELETE FROM students WHERE id = ?');
$delete->execute([$id]);
header('Location: students.php', true, 303); exit;`,
'20B':`<?php
session_start();
$_SESSION['csrf'] ??= bin2hex(random_bytes(32));
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sent = $_POST['csrf'] ?? null;
    if (!is_string($sent) || $sent === '' || !hash_equals($_SESSION['csrf'], $sent)) {
        http_response_code(403); exit('Request rejected. No data changed.');
    }
    if (empty($_SESSION['operator_id'])) { http_response_code(401); exit('Sign in first.'); }
    echo 'Token and session accepted. Check record permission before changing data.';
}
?>
<form method="post">
<input type="hidden" name="csrf" value="<?= htmlspecialchars($_SESSION['csrf'], ENT_QUOTES, 'UTF-8') ?>">
<button>Test protected action</button>
</form>`
};
const reuse={'23B':'20B','24A':'18A','24B':'19A','25A':'17A','25B':'20B'};
for(const [id,source] of Object.entries(reuse))examples[id]=examples[source];

// Simplify lecturer demonstrations that used constructs not taught yet.
examples['02A'] = `<?php
$name = "Agha";
$stage = 4;
$gpa = 3.75;
$active = true;
echo "Name: " . $name . "<br>";
echo "Stage: " . $stage . "<br>";
echo "GPA: " . $gpa . "<br>";
var_dump($active); // bool(true): inspect the value and its type.
`;
examples['05B'] = `<?php
$n = 0;
do {
    echo $n . " ";
    $n++;
} while ($n < 0);
// These are fixed classroom values, not user-submitted input.
$devices = ["core", "skip", "edge", "stop", "extra"];
foreach ($devices as $device) {
    if ($device === "skip") { continue; }
    if ($device === "stop") { break; }
    echo $device . " ";
}
`;
