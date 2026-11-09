import rawLessons from './beginner.json' with { type: 'json' }
import { examples } from './beginner-examples.js'
export const modules = [
 {id:1,title:'Start here',range:[1,1],description:'Set up your workspace and run your first PHP page.',ku:'ژینگەکەت ئامادە بکە و یەکەم پەڕەی PHP هەڵبکە.',icon:'01'},
 {id:2,title:'Values & expressions',range:[2,3],description:'Understand variables, strings, types and operators.',ku:'گۆڕاو، دەق، جۆری داتا و کردارەکان تێبگە.',icon:'02'},
 {id:3,title:'Decisions & repetition',range:[4,6],description:'Trace conditions and loops, then pause to rebuild.',ku:'مەرج و لووپ هەنگاو بە هەنگاو بخوێنەوە؛ پاشان خۆت بینووسەوە.',icon:'03'},
 {id:4,title:'Functions that make sense',range:[7,7],description:'Name a task, pass inputs and return a useful result.',ku:'کارێک ناوبنێ، input وەربگرە و ئەنجام بگەڕێنەوە.',icon:'04'},
 {id:5,title:'Arrays into useful pages',range:[8,9],description:'Organise records and build a small device registry.',ku:'تۆمارەکان ڕێکبخە و لیستێکی ئامێر دروست بکە.',icon:'05'},
 {id:6,title:'Forms & trustworthy input',range:[10,11],description:'Follow GET and POST through validation and safe output.',ku:'ڕێڕەوی GET و POST، validation و output ـی پارێزراو بناسە.',icon:'06'},
 {id:7,title:'State, sessions & files',range:[12,14],description:'Remember preferences, protect pages and handle files carefully.',ku:'هەڵبژاردەکان هەڵبگرە، پەڕەکان بپارێزە و بە فایل بەئاگاداری کار بکە.',icon:'07'},
 {id:8,title:'Meet MySQL & PDO',range:[15,17],description:'Build a schema, bind values and debug database requests.',ku:'خشتە دروست بکە، نرخەکان bind بکە و هەڵەی query بدۆزەوە.',icon:'08'},
 {id:9,title:'Student records, safely',range:[18,20],description:'Create, read, update and delete with clear security checks.',ku:'CRUD بە پشکنینی ڕوونی پاراستن جێبەجێ بکە.',icon:'09'},
 {id:10,title:'Build it yourself',range:[21,25],description:'Organise plain PHP, revisit difficult ideas and finish a local project.',ku:'PHP ـی سادە ڕێکبخە، پێداچوونەوە بکە و پڕۆژەیەکی لۆکاڵ تەواو بکە.',icon:'10'}
];
const sessionTitles = [
 ['Check your local server','Run your first PHP page'],
 ['Variables & scalar types','Quotes, strings & names'],
 ['Calculate a total','Compare values carefully'],
 ['Choose with if and else','Handle choices with switch'],
 ['Trace for and while loops','Explore foreach, break & continue'],
 ['Rebuild a small calculator','Find and repair loop mistakes'],
 ['Write a reusable function','Parameters, return & scope'],
 ['Create indexed & named arrays','Sort records without mixing them up'],
 ['Build a device registry','Filter records & show summaries'],
 ['Read a GET form','Submit a POST form'],
 ['Validate fields on the server','Keep form values & escape output'],
 ['Save a cookie preference','Inspect, change & remove cookies'],
 ['Sessions & flash messages','A simple protected login'],
 ['Read and write a local file','Handle an image upload safely'],
 ['Create your first database tables','Connect PHP with PDO'],
 ['Bind values in prepared statements','Search, sort & limit records'],
 ['Rebuild a form-to-database flow','Debug common database failures'],
 ['Insert a validated student record','List, search & paginate records'],
 ['Load and update one student','Delete with confirmation & CSRF'],
 ['Password hashes & safe HTML','Test session permissions & CSRF'],
 ['Share helpers and page fragments','Rebuild shared page fragments'],
 ['Validate a fresh registration form','Repair malformed form input'],
 ['Rebuild a flash-message flow','Test ownership and logout'],
 ['Assemble your student records app','Peer review & repair your app'],
 ['Build independently from a brief','Explain your code & reflect']
];
export const lessons=rawLessons.map(l=>({...l,title:sessionTitles[l.week-1][l.part==='A'?0:1],code:examples[l.id]||l.code,module:modules.find(m=>l.week>=m.range[0]&&l.week<=m.range[1]).id}));
export const moduleLessons=id=>lessons.filter(l=>l.module===id);
export const labels={done:'Mark as practised',undo:'Practised — undo',search:'Find a lesson',resume:'Pick up where you left off',memory:'Progress stays in this browser. Practise before marking a lesson complete.',blocked:'Saving is unavailable. Progress will last only while this page stays open.'};
