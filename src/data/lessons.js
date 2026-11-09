// One authored lesson per roadmap topic. Code is displayed, never executed by the site.
const lesson = (explanation, language, code, walkthrough, exercise) => ({ explanation, language, code, walkthrough, exercise });
export const phaseLessons = {
1: [
lesson('براوسەر Client ـە و داواکاری HTTP دەنێرێت؛ Server وەڵام دەداتەوە. DNS ناوی دۆمەین دەگۆڕێت بۆ ناونیشانی IP، Hosting شوێنی ڕاگرتنی فایلەکانە. HTTPS هەمان HTTP ـە بە پەیوەندییەکی کۆدکراو. وەک داواکردنی خواردن، داواکاری و وەڵام دوو هەنگاوی جیاوازن.', 'http', `GET /courses HTTP/1.1
Host: example.com
Accept: text/html

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

<h1>PHP course</h1>`, 'GET جۆری داواکارییەکەیە؛ /courses ڕێڕەوەکەیە. Host دۆمەین دیاری دەکات. 200 سەرکەوتنە؛ 404 واتە سەرچاوەکە نەدۆزرایەوە. ئەم بلۆکە دوو پەیامی نموونەیی پیشان دەدات، فایلی PHP نییە.', 'لە DevTools → Network پەیجێک Reload بکە؛ URL، method، status و Content-Type ـی یەک داواکاری بنووسە.'),
lesson('HTML پێکهاتە و واتای ناوەڕۆک دیاری دەکات. header بۆ سەرپەڕە، nav بۆ گواستنەوە، main بۆ ناوەڕۆکی سەرەکی و article بۆ ناوەڕۆکی سەربەخۆیە. بەکارهێنانی ئەم تاگانە خوێندنەوەی پەڕەکە بۆ مرۆڤ و screen reader ئاسان دەکات.', 'html', `<!doctype html>
<html lang="ckb" dir="rtl">
<head><meta charset="utf-8"><title>کۆرسی PHP</title></head>
<body>
<header><nav><a href="#course">کۆرس</a></nav></header>
<main id="course"><article>
<h1>فێربوونی PHP</h1><p>یەکەم هەنگاو بۆ بەکئەند.</p>
</article></main>
<footer>٢٠٢٦</footer>
</body></html>`, 'lang و dir زمان و ئاراستە دیاری دەکەن. لینکەکە بۆ id ـی course دەچێت. تەنها یەک h1 بەکار هاتووە بۆ ناونیشانی سەرەکی.', 'ئەمە وەک index.html پاشەکەوت بکە و بیکەرەوە؛ بەشی دەربارە و لینکێکی ناوخۆیی بۆی زیاد بکە.'),
lesson('CSS ڕەنگ، قەبارە و ڕیزبەندی توخمەکان دیاری دەکات. Flexbox بۆ ڕیزکردنی توخمەکان لە یەک ئاراستەدا بەسوودە. gap بۆشایی دروست دەکات و flex-wrap ڕێگە دەدات توخمەکان لە شاشەی بچووکدا بچنە ڕیزی داهاتوو.', 'html', `<style>
.tools { display: flex; flex-wrap: wrap; gap: 12px; }
.tools span { padding: 12px; border: 1px solid #bbb; border-radius: 8px; }
</style>
<div class="tools"><span>PHP</span><span>MySQL</span><span>Git</span></div>`, 'display:flex دایکەکە دەکاتە flex container. ڕێکخستنەکە بەپێی dir ـی پەڕەکە ئاراستە وەردەگرێت؛ بۆیە بۆ RTL پێویست بە گۆڕینی ڕیزبەندی HTML نییە.', 'پەڕەکە لە 375px و 1024px تاقی بکەرەوە؛ دڵنیابە هیچ ناوێک لە دەرەوەی شاشە نەمێنێت.'),
lesson('PHP لەسەر سێرڤەر کار دەکات، نەک بە کردنەوەی فایل لە براوسەردا. XAMPP یان Laragon ژینگەی لۆکاڵ پێکدەهێنن؛ VS Code نووسەری کۆدەکەتە. بۆ دەستپێک دەتوانیت سێرڤەری ناوخۆیی PHP بەکاربهێنیت؛ ئەمە تەنها بۆ پەرەپێدانە.', 'php', `<?php
// index.php
$name = 'Azad';
echo 'Hello, ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
// لە تێرمیناڵی هەمان فۆڵدەردا: php -S localhost:8000
// لە براوسەردا: http://localhost:8000`, 'دوای دامەزراندن php -v وەشانەکە پیشان دەدات. فەرمانی php -S لە فۆڵدەری پڕۆژەکە جێبەجێ بکە؛ localhost:8000 دەبێت Hello, Azad پیشان بدات.', 'فایلی index.php دروست بکە، سێرڤەرەکە هەڵبکە و ناوەکە بگۆڕە. ئەگەر php نەناسرا، ڕێڕەوی php.exe یان Terminal ـی Laragon بەکاربهێنە.'),
lesson('Terminal ڕێگەی کارکردنە بە فۆڵدەر و فایل لە ڕێی فەرمانەوە. pwd شوێنی ئێستات پیشان دەدات؛ cd شوێن دەگۆڕێت؛ mkdir فۆڵدەر دروست دەکات. پێش هەر فەرمانێک بزانە لە کام فۆڵدەردایت.', 'powershell', `pwd
mkdir php-practice
cd php-practice
New-Item index.php -ItemType File
Get-ChildItem
php -v`, 'ئەم فەرمانانە بۆ PowerShell ـن. لە Linux/macOS جێگرەوەی New-Item بریتییە لە touch index.php و جێگرەوەی Get-ChildItem بریتییە لە ls.', 'فۆڵدەری practice دروست بکە، بچۆ ناوی و فایلێک زیاد بکە؛ پاشان بە cd .. بگەڕێوە.'),
lesson('Git مێژووی گۆڕانکارییەکان هەڵدەگرێت. Working tree فایلەکانی ئێستاتە، staging ئەو گۆڕانکارییانەن کە بۆ commit هەڵت بژاردوون. GitHub شوێنی هاوبەشکردنی repository ـە، جێگرەوەی Git نییە.', 'bash', `git init
 git add index.php
 git commit -m "Add first PHP page"
 git branch -M main
 git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
 git push -u origin main`, 'ناوی user و repo بە زانیاری خۆت بگۆڕە. commit وێنەیەکی ناوخۆیی لە فایلە stage کراوەکان هەڵدەگرێت؛ push ئەو commit ـانە دەنێرێت بۆ remote. هەرگیز .env و پاسۆرد commit مەکە.', 'دەقێک بگۆڕە، git diff ببینە و commit ـێکی دووەم دروست بکە؛ git log --oneline دەبێت هەردووکی پیشان بدات.')
],
2: [
lesson('Variable ناوێکە بۆ نرخێک لە بیرگەدا و بە $ دەست پێدەکات. string دەقە، int ژمارەی تەواوە، float ژمارەی کەرتییە و bool ڕاست یان هەڵەیە. = نرخ دادەنێت؛ === هەم نرخ و هەم جۆر بەراورد دەکات. PHP جۆری نرخەکە دەزانێت، بەڵام ناوی ڕوون هەڵە کەم دەکات.', 'php', `<?php
$name = 'Dilan';
$price = 12000;
$quantity = 3;
$isStudent = true;
$total = $price * $quantity;
echo "$name: $total"; // Dilan: 36000
var_dump($price === '12000'); // bool(false)`, 'ضەربکردن پێش echo ئەنجام دەدرێت. $price ژمارەیە بەڵام ئەو نرخی ناو کوتیشنە دەقە؛ بۆیە بەراوردی توند false دەداتەوە.', 'نرخی 25000 و بڕی 2 دابنێ؛ داشکاندنی 10% حیساب بکە. ئەنجامی چاوەڕوانکراو 45000 ـە.'),
lesson('if بەپێی مەرج بڕیار دەدات و foreach لەسەر ئەندامەکانی array دەسووڕێتەوە. بۆ ژمارەی دیاریکراوی دووبارەکردنەوە for بەکاربهێنە. مەرجەکە دەبێت کۆتایی هەبێت، وگرنە loop ـەکە وەستانی نابێت.', 'php', `<?php
$scores = [45, 80, 60];
foreach ($scores as $score) {
    if ($score >= 50) {
        echo "$score: pass\n";
    } else {
        echo "$score: retry\n";
    }
}`, 'هەر جار $score نرخی ئەندامێک وەردەگرێت. 45 دەچێتە else؛ 80 و 60 دەچنە لقەی pass. >= واتە گەورەتر یان یەکسان.', 'ژمارەی خوێندکارانی سەرکەوتوو بە counter حیساب بکە؛ بۆ ئەم array ـە ئەنجامەکە 2 دەبێت.'),
lesson('Function کارێکی دیاریکراو کۆدەکاتەوە و دەتوانرێت دووبارە بەکاربهێنرێت. Parameter زانیاری وەردەگرێت و return ئەنجام دەداتەوە. Array کۆمەڵە نرخێکە؛ associative array بە کلیلی ناودار نرخەکان هەڵدەگرێت.', 'php', `<?php
declare(strict_types=1);
function total(array $prices): float {
    return (float) array_sum($prices);
}
$product = ['name' => 'Book', 'price' => 15];
echo $product['name'] . ': ' . total([15, 20, 5]);`, 'array_sum کۆی ژمارەکان دەداتەوە؛ بۆیە ئەنجام Book: 40 ـە. return لە echo جیاوازە: return ئەنجام دەگەڕێنێتەوە بۆ بانگکەر، echo چاپی دەکات.', 'function ـێک بنووسە کە تێکرای ژمارەکان بداتەوە؛ بۆ array ـی بەتاڵ پێش دابەشکردن بڕیارێکی ڕوون دابنێ.'),
lesson('GET زانیاری لە query string ـی URL وەردەگرێت؛ POST زانیاری لە body ـی داواکاری وەردەگرێت. هەردووکیان input ـی ناپشتڕاستکراوەن. پێش بەکارهێنان validation بکە و کاتی چاپکردن لە HTML ـدا escaping بکە. ئەم فۆڕمە تەنها نرخ دەخوێنێتەوە و هیچ داتایەک ناگۆڕێت.', 'php', `<?php
$name = trim((string) ($_GET['name'] ?? ''));
if (strlen($name) > 80) {
    http_response_code(422);
    exit('Name too long');
}
?>
<form method="get"><label>Name <input name="name" maxlength="80"></label><button>Show</button></form>
<p><?= htmlspecialchars($name, ENT_QUOTES, 'UTF-8') ?></p>`, '?? نرخی بنەڕەت دادەنێت کاتێک key بوونی نییە. htmlspecialchars وا دەکات <script> وەک دەق پیشان بدرێت. بۆ POST ـی گۆڕینی داتا CSRF token ـیش پێویستە.', 'ناوێک و دەقێکی HTML بنێرە؛ هەردووکیان دەبێت وەک دەق پیشان بدرێن و هیچ script ـێک جێبەجێ نەبێت.'),
lesson('Session زانیاری لەسەر سێرڤەر هەڵدەگرێت و براوسەر تەنها ناسنامەکەی هەڵدەگرێت. Cookie لە براوسەرە و نابێت متمانەی پێ بکرێت. فایل بۆ داتای سادە بەسوودە، بەڵام ڕێڕەوی فایل نابێت ڕاستەوخۆ لە input وەربگیرێت.', 'php', `<?php
session_start();
$_SESSION['visits'] = ($_SESSION['visits'] ?? 0) + 1;
setcookie('language', 'ckb', [
    'expires' => time() + 86400,
    'httponly' => true,
    'samesite' => 'Lax',
]);
file_put_contents(__DIR__ . '/visits.txt', (string) $_SESSION['visits'], LOCK_EX);
echo 'Visits: ' . $_SESSION['visits'];`, 'session_start و setcookie پێش هەر output ـێک بنووسە. لە HTTPS ـی production ـدا secure=true بۆ cookie دابنێ. LOCK_EX نووسینی هاوکات ڕێکدەخات؛ ئەمە جێگرەوەی transaction ـی داتابەیس نییە.', 'پەڕەکە سێ جار نوێ بکەرەوە و نرخەکە ببینە؛ بە session ـێکی نوێ ژمێرەرەکە لە 1 دەست پێدەکات.'),
lesson('Exception هەواڵی شکستێکی چاوەڕوانکراو دەگەیەنێت. try کۆدی ئەگەری شکست لەخۆدەگرێت، catch چارەسەری دەکات. لە production وردەکارییەکان لە log بنووسە و پەیامی گشتی بۆ بەکارهێنەر پیشان بدە؛ stack trace دەتوانێت ڕێڕەو و زانیاری ناوخۆیی ئاشکرا بکات.', 'php', `<?php
function divide(float $a, float $b): float {
    if ($b === 0.0) {
        throw new InvalidArgumentException('Divisor must not be zero');
    }
    return $a / $b;
}
try {
    echo divide(10, 0);
} catch (InvalidArgumentException $error) {
    error_log($error->getMessage());
    echo 'Please choose a non-zero divisor.';
}`, 'throw جێبەجێکردنی function دەوەستێنێت و دەچێتە catch ـی گونجاو. مەرجی سفر پێش دابەشکردن پشکنراوە.', 'بانگکردن بە 10 و 2 تاقی بکەرەوە؛ ئەنجام 5 دەبێت. پاشان بە سفر تاقی بکە و دڵنیابە پەیامی گشتی دەردەکەوێت.')
],
3: [
lesson('RDBMS داتا لە خشتەی پەیوەندیدار هەڵدەگرێت. هەر ڕیز تۆمارێکە و هەر ستوون تایبەتمەندییەکە. phpMyAdmin ڕووکارێکی بەڕێوەبردنە؛ خۆی داتابەیس نییە. جۆری گونجاوی ستوون پشکنینی داتا و بەکارهێنانی بیرگە باشتر دەکات.', 'sql', `CREATE DATABASE course_lab CHARACTER SET utf8mb4;
USE course_lab;
CREATE TABLE students (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(190) NOT NULL UNIQUE
);
SHOW TABLES;`, 'کۆدەکە لە SQL tab ـی phpMyAdmin یان MySQL client جێبەجێ بکە. PRIMARY KEY ناسنامەی یەکتایە؛ UNIQUE ڕێگە بە دووبارەبوونەوەی email نادات.', 'دوو خوێندکار زیاد بکە؛ هەوڵی دووبارەکردنەوەی هەمان email بدە و پەیامی constraint تێبگە.'),
lesson('CRUD واتە زیادکردن، خوێندنەوە، نوێکردنەوە و سڕینەوە. INSERT ڕیز زیاد دەکات؛ SELECT دەیخوێنێتەوە؛ UPDATE و DELETE تۆمار دەگۆڕن. پێش گۆڕانکاری WHERE بپشکنە، چونکە بەبێ ئەوە هەموو ڕیزەکان دەگۆڕدرێن.', 'sql', `USE course_lab;
INSERT INTO students (name, email) VALUES ('Dilan', 'dilan@example.com');
SELECT id, name FROM students WHERE email = 'dilan@example.com';
UPDATE students SET name = 'Dilan Ali' WHERE email = 'dilan@example.com';
SELECT name FROM students WHERE email = 'dilan@example.com';
DELETE FROM students WHERE email = 'dilan@example.com';`, 'ئەم نموونەیە لە داتابەیسی ڕاهێنان جێبەجێ بکە. ئەو SELECT ـەی پێش DELETE ـە یارمەتیت دەدات بزانیت کام ڕیز دیاری دەکەیت.', 'تۆمارێکی تاقیکردنەوە زیاد بکە و ناوەکەی نوێ بکەرەوە؛ تەنها هەمان ڕیز بسڕەوە.'),
lesson('Primary key ڕیزێک دەناسێنێت. Foreign key پەیوەندیی نێوان خشتەکان پارێزراو دەکات. لە پەیوەندی one-to-many ـدا یەک خوێندکار دەتوانێت چەند تۆمارێکی تۆمارکردنی کۆرسی هەبێت، بەڵام هەر تۆمارێک بۆ یەک خوێندکارە.', 'sql', `USE course_lab;
CREATE TABLE enrollments (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_id INT UNSIGNED NOT NULL,
    course_name VARCHAR(100) NOT NULL,
    FOREIGN KEY (student_id) REFERENCES students(id)
);`, 'جۆری student_id لەگەڵ students.id یەکسانە. ئەگەر id ـی خوێندکار بوونی نەبێت، داتابەیس INSERT ـەکە ڕەت دەکاتەوە؛ ئەمە orphan record ڕادەگرێت.', 'خوێندکارێک زیاد بکە و دوو enrollment بۆی بنووسە؛ پاشان student_id ـێکی نەبوو تاقی بکەرەوە.'),
lesson('JOIN داتای خشتەکان بە پەیوەندییەکەیان پێکەوە دەبەستێت. GROUP BY ڕیزەکان دەکاتە گرووپ؛ COUNT، SUM و AVG ئەنجامی کۆکراوە دەدەنەوە. LEFT JOIN خوێندکارانی بێ enrollment ـیش دەهێڵێتەوە.', 'sql', `USE course_lab;
SELECT s.id, s.name, COUNT(e.id) AS course_count
FROM students AS s
LEFT JOIN enrollments AS e ON e.student_id = s.id
GROUP BY s.id, s.name
ORDER BY course_count DESC;`, 'COUNT(e.id) تەنها تۆمارە نەبەتاڵەکان دەژمێرێت؛ بۆ خوێندکاری بێ enrollment ئەنجام 0 ـە. COUNT(*) لەم حاڵەتەدا دەتوانێت ئەنجامی جیاواز بدات.', 'خوێندکارێکی بێ کۆرس و یەکێک بە دوو کۆرس دروست بکە؛ ئەنجامەکان دەبێت 0 و 2 بن.'),
lesson('Normalization دووبارەبوونەوەی داتا و ناکۆکی کەم دەکات. ناوی کڕیار لە هەموو داواکارییەکدا هەڵمەگرە؛ لە خشتەی customers هەڵیبگرە و بە customer_id ئاماژەی پێ بکە. گۆڕینی ناو تەنها لە یەک شوێن ئەنجام دەدرێت.', 'sql', `USE course_lab;
CREATE TABLE customers (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
CREATE TABLE orders (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    customer_id INT UNSIGNED NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);`, 'DECIMAL بۆ بڕی دارایی وردترە لە FLOAT. پەیوەندییەکە ناوی کڕیار لە orders دووبارە ناکاتەوە؛ بۆ پیشاندانی ناو JOIN بەکاربهێنە.', 'یەک کڕیار بە سێ داواکاری دروست بکە و ناوی بگۆڕە؛ هەموو داواکارییەکان دەبێت بە هەمان ناسنامە بەستراو بمێننەوە.')
],
};
Object.assign(phaseLessons, {
4: [
lesson('PDO ڕووکارێکی یەکگرتووە بۆ پەیوەندی بە داتابەیس. Prepared statement کۆدی SQL لە نرخەکان جیا دەکاتەوە، بۆیە input ناتوانێت ببێتە بەشێک لە فەرمانی SQL. لە نموونەکانی ئەم قۆناغەدا پەیوەندی لە db.php هەڵدەگیرێت؛ ژینگەکەت DB_USER و DB_PASSWORD دیاری بکات.', 'php', `<?php
// db.php — course_lab و خشتەی students لە قۆناغی ٣ دروست کراون
$pdo = new PDO(
    'mysql:host=127.0.0.1;dbname=course_lab;charset=utf8mb4',
    getenv('DB_USER'), getenv('DB_PASSWORD'),
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
     PDO::ATTR_EMULATE_PREPARES => false]
);
$stmt = $pdo->prepare('SELECT id, name FROM students WHERE email = ?');
$stmt->execute(['dilan@example.com']);
var_dump($stmt->fetch(PDO::FETCH_ASSOC));`, 'نرخی email بە execute دەدرێت، نەک بە لکاندن بە SQL. ئەگەر تۆمار نەبێت fetch نرخی false دەداتەوە. exception ـی پەیوەندی لە production مەخەرە بەردەم بەکارهێنەر.', 'email ـێکی هەبوو و نەبوو تاقی بکەرەوە؛ ناوێک کە کوتیشنی تێدایە نابێت SQL ـەکە بشکێنێت.'),
lesson('CRUD لە PHP ـدا بە prepared statement جێبەجێ بکە. لەم نموونەیەی CLI ـدا زیادکردن، خوێندنەوە، گۆڕین و سڕینەوە لە transaction ـێکدان؛ rollback داتا تاقیکارییەکە هەڵدەوەشێنێتەوە. لە وێبدا هەموو گۆڕانکارییەک پێویستی بە authentication، authorization و CSRF هەیە.', 'php', `<?php
require __DIR__ . '/db.php';
$pdo->beginTransaction();
try {
    $pdo->prepare('INSERT INTO students (name,email) VALUES (?,?)')
        ->execute(['Test', 'test-' . bin2hex(random_bytes(4)) . '@example.com']);
    $id = (int) $pdo->lastInsertId();
    $pdo->prepare('UPDATE students SET name = ? WHERE id = ?')->execute(['Updated', $id]);
    $read = $pdo->prepare('SELECT name FROM students WHERE id = ?');
    $read->execute([$id]);
    echo $read->fetchColumn();
    $pdo->prepare('DELETE FROM students WHERE id = ?')->execute([$id]);
} finally {
    $pdo->rollBack();
}`, 'ئەنجام Updated ـە. WHERE id تەنها تۆمارێک دیاری دەکات. finally لە سەرکەوتن و شکستدا rollback دەکات، بۆیە داتای تاقیکردنەوە نامێنێت.', 'گۆڕینی email ـیش زیاد بکە؛ دوای جێبەجێکردن دڵنیابە هیچ تۆماری تاقیکردنەوە نەماوە.'),
lesson('Pagination داتا بە پەڕەی بچووک دابەش دەکات. OFFSET ژمارەی تۆمارە تێپەڕێنراوەکانە؛ LIMIT ژمارەی تۆمارە داواکراوەکانە. search بە LIKE جێبەجێ دەکرێت و نرخی گەڕان هەر بە parameter دەنێردرێت.', 'php', `<?php
require __DIR__ . '/db.php';
$page = max(1, min(1000, (int) ($_GET['page'] ?? 1)));
$query = substr((string) ($_GET['q'] ?? ''), 0, 100);
$stmt = $pdo->prepare('SELECT id,name FROM students WHERE name LIKE ? ORDER BY id LIMIT ? OFFSET ?');
$stmt->bindValue(1, '%' . $query . '%', PDO::PARAM_STR);
$stmt->bindValue(2, 10, PDO::PARAM_INT);
$stmt->bindValue(3, ($page - 1) * 10, PDO::PARAM_INT);
$stmt->execute();
foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
    echo htmlspecialchars($row['name'], ENT_QUOTES, 'UTF-8') . '<br>';
}`, 'بۆ پەڕەی 2، OFFSET دەبێتە 10. ORDER BY id ڕیزبەندییەکی جێگیر دابین دەکات. % و _ لە LIKE واتای تایبەت هەیە؛ ئەم نموونەیە ڕێگە بە wildcard دەدات.', '21 خوێندکار زیاد بکە؛ پەڕەکان دەبێت 10، 10 و 1 تۆمار پیشان بدەن. page ـی نەرێنی دەبێت بگەڕێتەوە بۆ 1.'),
lesson('File upload تەنها وەرگرتنی ناوی فایل نییە. قەبارە، MIME ـی ناوەڕۆک و هەڵەی upload بپشکنە؛ ناوێکی هەڕەمەکی دابنێ و فایل لە دەرەوەی public web root هەڵبگرە. ئەم پارچەکۆدە بۆ handler ـێکی POST ـە؛ پێش بانگکردنی دەبێت مۆڵەت و CSRF پشتڕاست کرابنەوە.', 'php', `<?php
// پێشمەرج: authentication، authorization و CSRF لە middleware پشکنراون
$file = $_FILES['image'] ?? null;
if (!$file || $file['error'] !== UPLOAD_ERR_OK || $file['size'] > 2 * 1024 * 1024) {
    http_response_code(422); exit('Invalid upload');
}
$mime = (new finfo(FILEINFO_MIME_TYPE))->file($file['tmp_name']);
$extensions = ['image/jpeg' => 'jpg', 'image/png' => 'png'];
if (!isset($extensions[$mime])) { http_response_code(422); exit('Unsupported type'); }
$directory = getenv('PRIVATE_UPLOAD_DIR');
if (!$directory || !is_dir($directory)) { throw new RuntimeException('Configure private storage'); }
$path = $directory . '/' . bin2hex(random_bytes(16)) . '.' . $extensions[$mime];
if (!move_uploaded_file($file['tmp_name'], $path)) { throw new RuntimeException('Upload failed'); }
echo 'Uploaded';`, 'ناوی نێردراوی بەکارهێنەر بەکار نایەت. PRIVATE_UPLOAD_DIR دەبێت فۆڵدەرێکی نووسینپێکراو لە دەرەوەی public بێت. ئەم کۆدە UI و middleware ـەکەی تێدا نییە و نابێت وەک endpoint ـێکی کراوە دابنرێت.', 'لە ژینگەی ڕاهێنان JPEG ـێکی بچووک، فایلێکی دەق و وێنەیەکی گەورەتر لە 2MB تاقی بکەرەوە؛ تەنها یەکەم بپەسێنە.')
],
5: [
lesson('Class قاڵبی تەنێکە؛ object نموونەیەکی ئەو قاڵبەیە. Constructor کاتی دروستبوونی object بانگ دەکرێت. Encapsulation واتە داتای ناوخۆیی بە ڕێگەی method ـە ڕوونەکان بەڕێوەببەیت، نەک هەموو شتێک public بکەیت.', 'php', `<?php
class Student {
    public function __construct(private string $name) {}
    public function greeting(): string {
        return 'Hello, ' . $this->name;
    }
}
$student = new Student('Dilan');
echo $student->greeting();`, '$this ئاماژە بە object ـی ئێستا دەکات. private ڕێگە بە دەستکاریی ڕاستەوخۆی name لە دەرەوەی class نادات. ئەنجام Hello, Dilan ـە.', 'method ـێکی rename زیاد بکە کە ناوی بەتاڵ ڕەت بکاتەوە؛ پاشان greeting بە ناوی نوێ تاقی بکەرەوە.'),
lesson('Interface گرێبەستی method ـەکان دیاری دەکات؛ abstract class دەتوانێت کۆدی هاوبەش هەبێت. Inheritance پەیوەندیی جۆرێکە لە جۆرێکی تر پیشان دەدات. بۆ نموونە FileLogger جۆرێک لە Logger ـە، بەڵام نابێت تەنها بۆ کەمکردنی دووبارەکۆد هەر پەیوەندییەک بە inheritance دروست بکەیت.', 'php', `<?php
interface Logger { public function log(string $message): void; }
abstract class BaseLogger implements Logger {
    protected function format(string $message): string { return '[app] ' . $message; }
}
class ConsoleLogger extends BaseLogger {
    public function log(string $message): void { echo $this->format($message); }
}
(new ConsoleLogger())->log('Started');`, 'implements گرێبەستەکە پەیڕەو دەکات و extends کۆدی BaseLogger وەردەگرێت. protected ڕێگە بە بەکارهێنان لە class ـی میراتگر دەدات؛ ئەنجام [app] Started ـە.', 'MemoryLogger بنووسە کە پەیامەکان لە array هەڵبگرێت و هەمان interface جێبەجێ بکات.'),
lesson('Namespace ناوی class ـەکان لە پڕۆژەی گەورەدا ڕێکدەخات. Trait method ـی هاوبەش بە class ـەکان دەدات بەبێ inheritance. Trait داتای هاوبەشی گشتی نییە؛ کۆدەکەی دەچێتە ناو هەر class ـێکی بەکارهێنەر.', 'php', `<?php
namespace Course;
trait HasLabel {
    public function label(): string { return static::class; }
}
class Student { use HasLabel; }
echo (new Student())->label();`, 'namespace دەبێت لە سەرەتای فایلدا بێت. static::class ناوی تەواوی class دەداتەوە؛ لێرە Course\\Student چاپ دەکرێت.', 'class ـێکی Teacher زیاد بکە کە هەمان trait بەکاربهێنێت؛ label ـی هەردووکیان بەراورد بکە.'),
lesson('Magic method لەلایەن PHP لە کاتی دیاریکراودا بانگ دەکرێت؛ __toString کاتی گۆڕینی object بۆ دەق کار دەکات. Custom exception شکستێکی تایبەت ناودار دەکات تا catch ـی گونجاوی بۆ بنووسیت.', 'php', `<?php
class InvalidPrice extends DomainException {}
class Price {
    public function __construct(private int $amount) {
        if ($amount < 0) { throw new InvalidPrice('Negative price'); }
    }
    public function __toString(): string { return $this->amount . ' IQD'; }
}
try { echo new Price(12000); }
catch (InvalidPrice $error) { echo 'Invalid amount'; }`, 'نرخی دارایی بە ژمارەی تەواو هەڵگیراوە. __toString دەبێت string بگەڕێنێتەوە؛ ئەنجام 12000 IQD ـە. بە نرخی نەرێنی constructor شکست دەهێنێت.', 'نرخی -1 تاقی بکەرەوە؛ پاشان currency ـێکی دیاریکراو وەک parameter زیاد بکە.')
],
6: [
lesson('Composer پاکێج و dependency بەڕێوەدەبات؛ PSR-4 ناوی namespace دەبەستێتەوە بە ڕێڕەوی فایل. بەجێی require بۆ هەر class، تەنها vendor/autoload.php بار دەکەیت. composer.lock وەشانی dependency جێگیر دەکات و دەبێت commit بکرێت.', 'json', `{
    "name": "course/demo",
    "autoload": { "psr-4": { "App\\\\": "src/" } }
}`, 'لە composer.json ـدا backslash ـی JSON دەبێت escape بکرێت: mapping ـەکە بۆ App\\ ـە. composer dump-autoload جێبەجێ بکە؛ class ـی App\\Student لە src/Student.php دابنێ و لە entry file بە require vendor/autoload.php باری بکە.', 'class ـێکی App\\Greeting لە فایلە گونجاوەکە دروست بکە؛ بەبێ require ـی ڕاستەوخۆی فایلەکە object ـێکی لێ دروست بکە.'),
lesson('MVC کارەکان جیا دەکاتەوە: Controller داواکاری وەردەگرێت، Model داتا بەڕێوەدەبات و View HTML پیشان دەدات. Dependency injection واتە وابەستەییەک بە constructor بدرێت، بۆ ئەوەی تاقیکردنەوە و گۆڕینی جێبەجێکردن ئاسان بێت.', 'php', `<?php
interface StudentStore { public function names(): array; }
class MemoryStore implements StudentStore {
    public function names(): array { return ['Dilan', 'Azad']; }
}
class StudentController {
    public function __construct(private StudentStore $store) {}
    public function index(): string {
        return implode(', ', $this->store->names());
    }
}
echo (new StudentController(new MemoryStore()))->index();`, 'Controller نازانێت داتا لە MySQL دێت یان بیرگە؛ تەنها گرێبەستی StudentStore دەزانێت. ئەم نموونەیە دەرچوونی دەقی هەیە؛ لە View ـی HTML escaping پێویستە.', 'store ـێکی دووەم زیاد بکە کە array ـێکی جیاواز بگەڕێنێتەوە، بەبێ گۆڕینی Controller.'),
lesson('SQL Injection بە parameter binding ڕادەگیرێت؛ XSS بە escaping ـی گونجاوی شوێنی output کەم دەکرێتەوە؛ CSRF بە token و پشکنینی session ڕادەگیرێت. پاسۆرد بە hash هەڵبگرە؛ encryption یان hash ـی خێرا وەک MD5 بۆ پاسۆرد بەکارمەهێنە.', 'php', `<?php
session_start();
$_SESSION['csrf'] ??= bin2hex(random_bytes(32));
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!hash_equals($_SESSION['csrf'], (string) ($_POST['csrf'] ?? ''))) {
        http_response_code(403); exit('Invalid CSRF token');
    }
    $password = (string) ($_POST['password'] ?? '');
    if (strlen($password) < 12) { http_response_code(422); exit('Use 12+ characters'); }
    $hash = password_hash($password, PASSWORD_DEFAULT);
    echo password_verify($password, $hash) ? 'Verified' : 'Rejected';
}
?>
<form method="post">
<input type="hidden" name="csrf" value="<?= htmlspecialchars($_SESSION['csrf'], ENT_QUOTES, 'UTF-8') ?>">
<label>Password <input type="password" name="password" minlength="12" required></label>
<button>Test hashing</button></form>`, 'ئەم پەڕەیە hash تاقی دەکاتەوە و هەژمار دروست ناکات. token ـی ناو session لەگەڵ نرخی POST بە شێوەی timing-safe بەراورد دەکرێت. hash هەر جار دەگۆڕێت بەهۆی salt ـەوە، بەڵام verify سەرکەوتووە.', 'token ـەکە لە DevTools بگۆڕە؛ دەبێت 403 وەربگریت. بە token ـی دروست و پاسۆردی گونجاو Verified پیشان بدرێت.'),
lesson('REST API سەرچاوەکان بە URL و method دیاری دەکات و زۆرجار JSON دەگەڕێنێتەوە. JWT تۆکنێکی واژۆکراوە؛ payload ـەکە شاردراوە نییە. تۆکن هەرگیز تەنها decode مەکە و بە ڕاستی مەزانە؛ signature، algorithm، issuer، audience و expiry پشتڕاست بکەرەوە.', 'php', `<?php
// composer require firebase/php-jwt
require __DIR__ . '/vendor/autoload.php';
use Firebase\\JWT\\JWT;
use Firebase\\JWT\\Key;
$key = getenv('JWT_SECRET');
if (!$key || strlen($key) < 32) { throw new RuntimeException('Configure a strong secret'); }
$payload = ['iss' => 'course-api', 'aud' => 'course-client',
    'sub' => '42', 'iat' => time(), 'exp' => time() + 300];
$token = JWT::encode($payload, $key, 'HS256');
$claims = JWT::decode($token, new Key($key, 'HS256'));
if ($claims->iss !== 'course-api' || $claims->aud !== 'course-client') {
    throw new RuntimeException('Invalid token context');
}
echo $claims->sub;`, 'ئەمە demo ـی CLI ـە و 42 چاپ دەکات. secret لە ژینگە وەردەگیرێت و لە frontend دانانرێت. لە API ـی ڕاستەقینەدا middleware هەڵەی تۆکن دەگرێت و 401 دەگەڕێنێتەوە؛ role و مۆڵەتی سەرچاوەش جیا بپشکنە.', 'key ـەکە بگۆڕە یان exp بۆ کاتی ڕابردوو دابنێ؛ decode دەبێت exception بدات، نەک دەستگەیشتن.')
],
});
Object.assign(phaseLessons, {
7: [
lesson('لە Laravel ـدا Route URL دەبەستێتەوە بە Controller؛ Controller داتا بۆ View دەنێرێت و Blade HTML دروست دەکات. ئەم سێ فایلە لە پڕۆژەی Laravel دابنێ؛ escape ـی {{ }} داتای دەقی لە HTML پارێزراو پیشان دەدات.', 'php', `<?php
// routes/web.php
namespace {
use App\\Http\\Controllers\\CourseController;
use Illuminate\\Support\\Facades\\Route;
Route::get('/course', [CourseController::class, 'show']);

}
// app/Http/Controllers/CourseController.php — فایلی جیاواز
namespace App\\Http\\Controllers {
class CourseController extends Controller {
    public function show() { return view('course', ['name' => 'PHP']); }
}
}
// resources/views/course.blade.php — ناوەڕۆکی فایل: <h1>{{ $name }}</h1>`, 'Route داواکاری GET ـی /course وەردەگرێت. show ناوی view و داتاکە دەنێرێت؛ resources/views/course.blade.php ناوی PHP لە h1 پیشان دەدات. فایلەکان بەیەکەوە مەلکێنە.', 'route ـێکی /about و View ـی تایبەتی خۆی دروست بکە؛ ناو لە Controller بۆ View بنێرە.'),
lesson('Migration مێژووی پێکهاتەی داتابەیسە؛ Eloquent هەر خشتەیەک بە Model دەنوێنێت. Relationship پەیوەندیی Model ـەکان دیاری دەکات. نموونەکە کۆدی up ـی migration ـە؛ پێش جێبەجێکردنی DB ـی پڕۆژەکە ڕێکبخە.', 'php', `<?php
// لە up() ـی migration ـدا؛ users ـی بنەڕەت پێشتر دروست بێت
use Illuminate\\Database\\Schema\\Blueprint;
use Illuminate\\Support\\Facades\\Schema;
Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained();
    $table->string('title');
    $table->timestamps();
});
// لە App\\Models\\Post ـدا:
// public function user() { return $this->belongsTo(User::class); }
// بەکارهێنان: Post::with('user')->get();`, 'foreignId پەیوەندی بە users.id دروست دەکات. with پەیوەندی پێشوەخت بار دەکات و کێشەی N+1 query کەم دەکات. down ـی migration بە Schema::dropIfExists بنووسە.', 'Model و migration ـی Post دروست بکە؛ دوو post بە یەک user ببەستەوە و ناوی خاوەنەکەیان بخوێنەوە.'),
lesson('Middleware پێش یان دوای Controller کار دەکات؛ auth دڵنیایی لە چوونەژوورەوە دەکاتەوە. Validation شێوەی input دەپشکنێت؛ authorization دیاری دەکات کێ مافی ئەنجامدانی کارێکی هەیە. هیچکام جێگرەوەی ئەوی تر نییە.', 'php', `<?php
// routes/web.php — users و ژینگەی auth پێشتر ئامادە بن
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Route;
Route::post('/profile', function (Request $request) {
    $data = $request->validate(['name' => ['required', 'string', 'max:100']]);
    $user = $request->user();
    $user->name = $data['name'];
    $user->save();
    return back()->with('status', 'Saved');
})->middleware('auth');
// لە فۆڕمی Blade ـدا: @csrf و <input name="name"> زیاد بکە.`, 'تەنها هەژماری خۆی نوێ دەکرێتەوە چونکە user لە session وەردەگیرێت. بۆ گۆڕینی تۆماری کەسێکی تر policy ـێکی دیاریکراو پێویستە. هەڵەی validation لە web route دەگەڕێتەوە بۆ فۆڕم.', 'ناوی بەتاڵ و ناوی درێژتر لە 100 پیت تاقی بکەرەوە؛ نابێت داتا پاشەکەوت بکرێت.'),
lesson('Authentication ناسنامەی بەکارهێنەر پشتڕاست دەکاتەوە. Starter kit ـەکانی Laravel ڕێڕەوی login/register دابین دەکەن؛ Breeze لە پڕۆژە کۆنترەکاندا دەبینرێت. Sanctum بۆ API token و SPA authentication بەکاردێت. نموونەکە بۆ پڕۆژەیەکە کە install:api و login ـی هەیە.', 'php', `<?php
// routes/api.php
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Route;
Route::get('/me', function (Request $request) {
    return ['id' => $request->user()->id, 'name' => $request->user()->name];
})->middleware('auth:sanctum');
// دوای پشتڕاستکردنەوەی login، token لە سێرڤەر دروست دەکرێت:
// $token = $user->createToken('learning-client', ['posts:read'])->plainTextToken;
// Authorization: Bearer <token>`, 'تۆکن لە frontend code یان repository دانانرێت. abilities تەنها کاتی پشکنینیان کاریگەرن؛ policy ـی تۆمارەکەش جیا بپشکنە. بۆ SPA ـی خۆت session/cookie flow ـی Sanctum بپەیڕەوە.', 'بەبێ تۆکن /api/me بانگ بکە و 401 ببینە؛ بە تۆکنی دروست تەنها داتای هەژماری خۆت وەربگرە.'),
lesson('API لە Laravel ـدا دەتوانێت JSON لە Model بگەڕێنێتەوە، بەڵام Resource کۆنترۆڵی field ـە پیشاندراوەکان باشتر دەکات. نموونەکە خوێندنەوەی post ـی بەکارهێنەری چووەژوورەوە سنووردار دەکات و pagination زیاد دەکات.', 'php', `<?php
// routes/api.php — Model ـی Post لە وانەی پێشوو
use App\\Models\\Post;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Route;
Route::get('/posts', function (Request $request) {
    return Post::query()
        ->where('user_id', $request->user()->id)
        ->select('id', 'title', 'created_at')
        ->orderByDesc('id')->paginate(10);
})->middleware('auth:sanctum');`, 'query builder نرخەکان bind دەکات. select ڕێگە نادات field ـی ناپێویست ئاشکرا بێت. paginate metadata ـی گواستنەوە لەگەڵ data دەگەڕێنێتەوە.', 'دوو user بە post ـی جیاواز دروست بکە؛ هەر user تەنها post ـەکانی خۆی ببینێت.'),
lesson('Artisan فەرمانەکانی پەرەپێدان کۆدەکاتەوە؛ Testing دڵنیایی لە ڕەفتاری ئەپ دەکات. Feature test داواکاری HTTP وەک بەکارهێنەر تاقی دەکاتەوە. پێش تاقیکردنەوەی داتابەیس ژینگەی testing ـێکی جیاواز ڕێکبخە؛ داتابەیسی production بەکارمەهێنە.', 'php', `<?php
// tests/Feature/CourseTest.php
namespace Tests\\Feature;
use Tests\\TestCase;
class CourseTest extends TestCase {
    public function test_course_page_shows_php(): void {
        $this->get('/course')->assertOk()->assertSee('PHP');
    }
}
// جێبەجێکردن لە تێرمیناڵ: php artisan test
// دروستکردنی test: php artisan make:test CourseTest`, 'test ـەکە پشت بە route ـی /course لە وانەی یەکەم دەبەستێت. assertOk کۆدی 200 دەپشکنێت و assertSee ناوەڕۆک دەپشکنێت.', 'ناوی ناو View بگۆڕە بۆ MySQL؛ test دەبێت شکست بهێنێت. دووبارە PHP دابنێ و سەرکەوتنی ببینە.')
],
8: [
lesson('Transaction چەند گۆڕانکاری وەک یەک کار بەڕێوەدەبات. ACID بریتییە لە atomicity، consistency، isolation و durability. لەم تاقیکردنەوەیەدا rollback گۆڕانکاری هەڵدەوەشێنێتەوە؛ بۆ گۆڕانکاریی هەمیشەیی تەنها دوای پشکنین COMMIT بەکاربهێنە.', 'sql', `USE course_lab;
START TRANSACTION;
INSERT INTO customers (name) VALUES ('Transaction test');
SELECT id, name FROM customers WHERE name = 'Transaction test';
ROLLBACK;
SELECT id, name FROM customers WHERE name = 'Transaction test';`, 'SELECT ـی یەکەم ڕیزەکە دەبینێت؛ دووەم نابینێت. خشتەکان دەبێت engine ـی transaction ـدار وەک InnoDB بەکاربهێنن. فەرمانەکانی DDL زۆرجار implicit commit دەکەن.', 'دوو INSERT لە transaction ـێکدا بکە و rollback بکە؛ هیچکامیان نابێت بمێننەوە.'),
lesson('View query ـێکی ناودارە؛ Stored procedure کۆمەڵە فەرمانێکە لە داتابەیس. Trigger لە کاتی INSERT/UPDATE/DELETE بانگ دەکرێت. Trigger زۆر بەئاگاداری بەکاربهێنە چونکە ڕەفتاری شاراوە زیاد دەکات.', 'sql', `USE course_lab;
CREATE VIEW student_names AS SELECT id, name FROM students;
DELIMITER //
CREATE PROCEDURE count_students()
BEGIN
    SELECT COUNT(*) AS total FROM students;
END//
CREATE TRIGGER trim_student_name BEFORE INSERT ON students
FOR EACH ROW SET NEW.name = TRIM(NEW.name)//
DELIMITER ;
CALL count_students();
SELECT * FROM student_names;`, 'DELIMITER فەرمانی MySQL client ـە، بەشێک لە SQL ـی سێرڤەر نییە. procedure ژمارەی خوێندکاران دەگەڕێنێتەوە؛ trigger بۆشایی سەرەتا و کۆتایی ناو دەسڕێتەوە.', 'تۆمارێک بە ناوی بۆشایی‌دار زیاد بکە؛ درێژی ناوی پاشەکەوتکراو بپشکنە. لە دووبارەکردنەوەدا object ـە کۆنەکان ڕێکبخە یان ناوی نوێ بەکاربهێنە.'),
lesson('Index وەک پێڕستی کتێب گەڕان خێرا دەکات، بەڵام شوێن دەگرێت و نووسینی داتا قورستر دەکات. Composite index بەپێی ڕیزی ستوونەکان کاریگەرە. EXPLAIN پلانی query پیشان دەدات؛ بوونی index بە تەنها بەڵگەی خێرایی نییە.', 'sql', `USE course_lab;
CREATE INDEX idx_enrollments_student_course
ON enrollments (student_id, course_name);
EXPLAIN SELECT course_name FROM enrollments WHERE student_id = 1;
EXPLAIN ANALYZE SELECT course_name FROM enrollments WHERE student_id = 1;`, 'EXPLAIN ANALYZE query ـەکە بەڕاستی جێبەجێ دەکات؛ لێرە تەنها SELECT ـە. لە خشتەی زۆر بچووکدا optimizer ڕەنگە full scan هەڵبژێرێت چونکە هەر ئەوە کەم‌تێچووترە.', 'بە داتای ڕاهێنانی زیاتر پلانی پێش و دوای index بەراورد بکە؛ rows و actual time تۆمار بکە.'),
lesson('Backup تەنها دروستکردنی فایل نییە؛ دەبێت restore ـیش تاقی بکرێتەوە. mysqldump داتابەیس بۆ SQL هەناردە دەکات. --single-transaction بۆ خشتەکانی InnoDB snapshot ـێکی گونجاو دەدات؛ گۆڕینی schema لە کاتی backup دووربخەرەوە.', 'bash', `# لە terminal ـدا؛ پاسۆرد لە prompt بنووسە، نەک لە command
mysqldump -u YOUR_USER -p --single-transaction course_lab > course_lab.sql
mysql -u YOUR_USER -p -e "CREATE DATABASE course_restore CHARACTER SET utf8mb4"
mysql -u YOUR_USER -p course_restore < course_lab.sql
mysql -u YOUR_USER -p course_restore -e "SELECT COUNT(*) FROM students"`, 'Restore بۆ داتابەیسێکی نوێ دەکرێت تا داتای سەرەکی نەگۆڕێت. فایلەکە ڕەنگە داتای هەستیار هەبێت؛ پارێزراو و بە دەستگەیشتنی سنووردار هەڵیبگرە.', 'ژمارەی تۆمارەکانی course_lab و course_restore بەراورد بکە؛ هەندێک تۆماری نموونەش پشکنە.')
],
9: [
lesson('Branch ڕێگایەکی جیاوازە بۆ کارکردن لەسەر گۆڕانکاری. Merge گۆڕانکارییەکان پێکەوە دەبەستێت؛ Pull Request بۆ پشکنینی گۆڕانکاری لە GitHub ـە. پێش merge پشکنین و test ـەکان جێبەجێ بکە.', 'bash', `git switch -c feature/course-page
# گۆڕانکارییەکانت بنووسە
 git add index.php
 git commit -m "Add course page"
 git push -u origin feature/course-page
# لە GitHub: Pull Request بۆ main دروست بکە
# دوای review و merge:
 git switch main
 git pull --ff-only`, 'switch -c branch دروست دەکات و دەچێتە سەری. --ff-only ڕێگە نادات pull بەبێ ئاگاداری merge commit دروست بکات. پێش switch دڵنیابە گۆڕانکارییەکانت پارێزراون.', 'دوو branch بە گۆڕانکاریی جیاواز دروست بکە؛ diff ـی هەر یەک لەگەڵ main ببینە.'),
lesson('Linux command line بنەمای بەڕێوەبردنی سێرڤەرە. pwd شوێن، ls فایلەکان و permissions پیشان دەدەن. grep/rg بۆ دۆزینەوەی دەق بەکاردێن؛ tail بۆ خوێندنەوەی کۆتایی log ـە. هەمیشە کەمترین مۆڵەتی پێویست بدە، chmod 777 چارەسەری گشتی نییە.', 'bash', `pwd
ls -la
mkdir -p course-lab
cd course-lab
printf 'PHP ready\n' > app.log
cat app.log
tail -n 5 app.log
chmod 600 app.log
ls -l app.log`, 'chmod 600 واتە تەنها خاوەن فایل مافی خوێندنەوە و نووسینی هەیە. بۆ فایلێکی وێب دەبێت خاوەن و گرووپ بە پێی service ـەکە ڕێکبخرێت.', 'log ـێکی تاقیکردنەوە دروست بکە و سێ دێڕی کۆتایی بخوێنەوە؛ مۆڵەتەکانی پێش و دوای chmod بەراورد بکە.'),
lesson('Docker ئەپ و dependency ـەکانی لە container ـێک جیا دەکاتەوە. Image قاڵبە، container جێبەجێکراوی ئەو قاڵبەیە. ئەم Dockerfile ـە تەنها بۆ فێربوونی لۆکاڵە؛ سێرڤەری php -S بۆ production گونجاو نییە.', 'dockerfile', `FROM php:8.3-cli
WORKDIR /app
COPY . /app
EXPOSE 8000
CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
# پێشمەرج: public/index.php دروست بکە
# docker build -t course-lab .
# docker run --rm -p 127.0.0.1:8000:8000 course-lab`, 'پۆرتەکە تەنها بە localhost ـی host دەبەسترێتەوە. .dockerignore بۆ .env، .git و فایلە هەستیارەکان زیاد بکە. extension ـی MySQL لەم image ـەدا بەخۆکار ئامادە نییە.', 'public/index.php بە echo دروست بکە، image بسازە و localhost:8000 ببینە؛ فایلە هەستیارەکان نابێت لە image بن.'),
lesson('Deployment واتە ئامادەکردنی کۆد، dependency، ژینگە، داتابەیس و web server. Domain دەبێت بە DNS بۆ VPS ئاماژە بکات و SSL پەیوەندی HTTPS بپارێزێت. Document root ـی Laravel دەبێت public بێت تا .env دەستڕاگەیشتوو نەبێت.', 'bash', `# لە release directory ـی ئامادەکراودا
composer install --no-dev --prefer-dist --optimize-autoloader
php artisan config:cache
php artisan route:cache
php artisan view:cache
# تەنها دوای backup و پشکنینی migration:
php artisan migrate --force
# .env: APP_ENV=production و APP_DEBUG=false
# Nginx root: /var/www/course/current/public`, 'ئەم فەرمانانە پلانی تەواوی VPS نین؛ PHP-FPM، مۆڵەتەکان، DNS، certificate و queue worker دەبێت پێشتر ڕێکخرابن. app key بۆ هەر deploy مەگۆڕە چونکە داتای encrypted و session کاریگەری وەردەگرن.', 'لە staging ـدا deploy بکە، /up و login تاقی بکەرەوە؛ دڵنیابە /.env و فایلە ناوخۆییەکان 404 یان 403 دەدەنەوە.')
],
10: [
lesson('Clean Code ناو و بەرپرسیارییەتییەکان ڕوون دەکات. SOLID یارمەتیدەرە بۆ کۆدی گۆڕان‌پەسەند: هەر class کارێکی دیاریکراو بکات و وابەستەیی بە گرێبەست بێت. نموونەکە ڕێگە دەدات ناردنی ئاگاداری بەبێ گۆڕینی سرویس بگۆڕدرێت.', 'php', `<?php
interface Notifier { public function send(string $message): void; }
class ConsoleNotifier implements Notifier {
    public function send(string $message): void { echo $message; }
}
class EnrollmentService {
    public function __construct(private Notifier $notifier) {}
    public function enroll(string $name): void {
        $this->notifier->send('Enrolled: ' . $name);
    }
}
(new EnrollmentService(new ConsoleNotifier()))->enroll('Dilan');`, 'سرویس پشتی بە Notifier بەستووە، نەک بە email provider ـێکی دیاریکراو. ئەمە dependency inversion و single responsibility بە نموونە پیشان دەدات؛ هەموو SOLID لە یەک snippet ـدا ناگونجێت.', 'FakeNotifier بنووسە کە پەیامەکان هەڵبگرێت؛ بپشکنە enroll تەنها یەک پەیام دەنێرێت.'),
lesson('پڕۆژەی پۆرتفۆلیۆ دەبێت کێشەیەکی ڕوون چارەسەر بکات و بەڵگەی کارکردنی هەبێت. بۆ سێ پڕۆژە دەتوانیت سیستەمی خوێندکاران، API ـی تۆدۆ و فرۆشگای بچووک هەڵبژێریت. Acceptance criteria پێش کۆدنووسین بنووسە تا بزانیت کەی تەواوە.', 'php', `<?php
// نموونەی یاسای کار بۆ تۆدۆ؛ لە tests ـدا بانگی بکە
function canEditTask(int $ownerId, int $actorId): bool {
    return $ownerId === $actorId;
}
$cases = [[7, 7, true], [7, 8, false]];
foreach ($cases as [$owner, $actor, $expected]) {
    if (canEditTask($owner, $actor) !== $expected) {
        throw new RuntimeException('Ownership test failed');
    }
}
echo '2 checks passed';`, 'نموونەکە تەنها یاسای ownership تاقی دەکاتەوە، ئەپێکی تەواو نییە. لە endpoint ـی ڕاستەقینەدا owner لە داتابەیس و actor لە session/token وەربگرە، نەک هەردووکیان لە input.', 'یەک پڕۆژە هەڵبژێرە؛ 5 پێوەری سەرکەوتن، schema، route ـەکان و test ـی unauthorized access بۆی بنووسە.'),
lesson('CV پوختەی تواناکانە و پەڕەی پۆرتفۆلیۆ بەڵگەی ئەو توانایانە پیشان دەدات. هەر پڕۆژەیەک بە کێشە، ڕۆڵی خۆت، تەکنەلۆژیا، screenshot، لینک و فەرمانی هەڵکردن بناسێنە. ئەزموونی ساختە یان ئاماری ناپشتڕاستکراو مەنووسە.', 'html', `<article lang="ckb" dir="rtl">
<h2>سیستەمی خوێندکاران</h2>
<p>بەڕێوەبردنی خوێندکاران بە PHP، PDO و MySQL.</p>
<ul><li>CRUD و validation</li><li>پشکنینی مۆڵەت و CSRF</li></ul>
<a href="https://github.com/YOUR-USER/student-manager">کۆدی پڕۆژە</a>
</article>`, 'YOUR-USER بە هەژماری خۆت بگۆڕە. لینکەکە دەبێت بۆ repository ـێکی ڕاستەقینە بێت. README ـی پڕۆژە ژینگە، دامەزراندن و چۆنیەتی تاقیکردنەوە ڕوون بکاتەوە.', 'بۆ یەک پڕۆژە README و کارتی پێشکەشکردن دروست بکە؛ کەسێکی تر بە ڕێنماییەکەت بتوانێت لۆکاڵ هەڵیبکات.'),
lesson('لە interview ـدا ڕێگای بیرکردنەوەت و ڕوونکردنەوەی trade-off گرنگە. پێش چارەسەرکردن input، output و edge case دیاری بکە. ئەم نموونەیە frequency map بەکاردهێنێت بۆ ژماردنی وشە؛ کاتی کارکردنی نزیکەی O(n) ـە بەپێی ژمارەی وشەکان.', 'php', `<?php
function frequencies(array $words): array {
    $counts = [];
    foreach ($words as $word) {
        $counts[$word] = ($counts[$word] ?? 0) + 1;
    }
    return $counts;
}
print_r(frequencies(['php', 'sql', 'php']));
// php => 2, sql => 1`, 'لە هەر هەنگاوێکدا کلیلی وشەکە نوێ دەکرێتەوە. کۆدی بەتاڵ array ـی بەتاڵ دەگەڕێنێتەوە. ئەم version ـە پیتی گەورە و بچووک جیا دەکاتەوە.', 'چارەسەرەکە بە دەنگی بەرز ڕوون بکەرەوە؛ بۆ input ـی بەتاڵ و وشەی دووبارە test بنووسە و بیرگەی پێویست هەڵبسەنگێنە.')
],
});

export const lessonUi = {
 overview: 'پێڕستی بابەتەکان', explanation: 'ڕوونکردنەوە', example: 'نموونەی کۆد',
 walkthrough: 'کۆدەکە چۆن کار دەکات؟', exercise: 'ڕاهێنانی کرداری',
 note: 'نموونەکان لە ژینگەی ڕاهێنانی خۆت جێبەجێ بکە. ئەم ماڵپەڕە کۆدی PHP و SQL جێبەجێ ناکات؛ فایل و ژینگەی پێویست لە هەر وانەیەکدا باس کراون.',
};
