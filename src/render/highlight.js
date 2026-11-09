import { e as escape } from './classroom.js'
// Escape every token before wrapping it; source examples can never inject HTML.
export function highlight(code) {
 const token=/((?:\/\/|#|--)[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\$[A-Za-z_][\w]*)|\b(\d+(?:\.\d+)?)\b|\b(class|function|public|private|protected|return|if|else|foreach|as|new|try|catch|throw|namespace|use|interface|extends|implements|SELECT|FROM|WHERE|INSERT|INTO|UPDATE|DELETE|CREATE|TABLE|JOIN|ON|GROUP|BY|ORDER|LIMIT|true|false|null|const|let|import|export)\b/g
 let result='',start=0
 for(const match of code.matchAll(token)){result+=escape(code.slice(start,match.index));const kind=match[1]?'comment':match[2]?'string':match[3]?'variable':match[4]?'number':'keyword';result+=`<span class="syntax-${kind}">${escape(match[0])}</span>`;start=match.index+match[0].length}
 return result+escape(code.slice(start))
}

