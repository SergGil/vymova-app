/* eslint-disable */
// Usage: node list-ex.cjs <code> <start> <n>  — prints: word | UA gloss | existing target gloss | EN example
const R=__dirname+'/../../data/words-data/';
function load(p,v){let s=require('fs').readFileSync(p,'utf8');if(s.charCodeAt(0)===0xfeff)s=s.slice(1);const i=s.indexOf('const '+v);const e=s.indexOf('=',i);return eval('('+s.slice(e+1).replace(/;\s*$/,'')+')');}
const [code,st,n]=process.argv.slice(2);
const W=load(R+'words.js','W');const P=load(R+'words_'+code+'.js','W_'+code.toUpperCase());
for(let i=+st;i<Math.min(+st+ +n,W.length);i++){const e=W[i];const t=P[e[0]];console.log(e[0]+' | '+e[1]+' | '+(t?t[0]:'?')+' | '+e[2]);}
