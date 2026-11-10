import {e} from './classroom.js'

// Match plain text before escaping: markup and code examples stay untouched.
const terms=/\b(File → Open Folder|Open Folder|New File|Ctrl\+S|XAMPP Control Panel|Visual Studio Code|VS Code|XAMPP|Apache Friends|Apache|MySQL|PHP|htdocs|index\.php(?:\.txt)?|localhost|db\.php|echo|Connection refused|404|parse error|variables?|arrays?|strings?|booleans?|integers?|functions?|loops?|conditions?|prepared statements?|sessions?|cookies?|GET|POST|SELECT|WHERE|INSERT|UPDATE|DELETE)\b/g
export function lessonText(value){
 const source=String(value);let result='',start=0
 for(const match of source.matchAll(terms)){
  result+=e(source.slice(start,match.index))+`<mark class="lesson-highlight">${e(match[0])}</mark>`
  start=match.index+match[0].length
 }
 return result+e(source.slice(start))
}
