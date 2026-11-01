/* eslint-disable */
// Usage: node merge-ex.cjs <code> <batch.json> <startIndex>
// Batch = [[english, example], ...] in base order from <startIndex>. Replaces ONLY element [1] (example); keeps gloss [0] and any [2].
const fs=require('fs');
function load(p,v){let s=fs.readFileSync(p,'utf8');if(s.charCodeAt(0)===0xfeff)s=s.slice(1);const i=s.indexOf('const '+v);const e=s.indexOf('=',i);return eval('('+s.slice(e+1).replace(/;\s*$/,'')+')');}
const R=__dirname+'/../../data/words-data/';
const [code,bp,st]=process.argv.slice(2);const a=+st;
// startIndex "keys": sparse fix — entries may be any headwords, in any order (each must exist in W and in the bank).
const sparse=st==='keys';
const f=R+'words_'+code+'.js';
const W=load(R+'words.js','W');const P=load(f,'W_'+code.toUpperCase());
const b=JSON.parse(fs.readFileSync(bp,'utf8'));
// Map any Unicode decimal digit (Bengali ১২০, Devanagari, Arabic-Indic, fullwidth…) to ASCII so the digit check compares values, not scripts.
const isNd=c=>/\p{Nd}/u.test(c);
const normDigits=s=>[...s].map(c=>{if(c<='9'&&c>='0'||!isNd(c))return c;let cp=c.codePointAt(0),z=cp;while(isNd(String.fromCodePoint(z-1)))z--;return String((cp-z)%10);}).join('');
let bad=0;
const byKey=new Map(W.map(e=>[e[0],e]));
b.forEach((t,i)=>{
 const w=sparse?byKey.get(t[0]):W[a+i];
 if(t.length!==2){console.log('shape',t[0]);bad++}
 if(!w||t[0]!==w[0]){console.log('mismatch',i,t[0],'want',w&&w[0]);bad++}
 if(!t[1]||!String(t[1]).trim()){console.log('empty',t[0]);bad++}
 if(!P[t[0]]){console.log('nokey',t[0]);bad++}
 if(w){const ed=w[2].match(/\d+/g);if(ed&&!ed.every(d=>normDigits(t[1]).includes(d)))console.log('digits?',t[0],'|',t[1]);}
});
if(bad){console.log('BAD',bad);process.exit(1);}
const src=fs.readFileSync(f,'utf8');
// One-entry-per-line files (the hand-formatted small banks): rewrite only the touched lines, keep everything else byte-for-byte.
if(src.split('\n').length>Object.keys(P).length){
 const nb=new Map(b.map(t=>[t[0],t[1]]));let n=0;
 const lines=src.split('\n').map(l=>{const m=l.match(/^(\s*)("(?:[^"\\]|\\.)*"):\s*(\[.*\])(,?)\s*$/);if(!m)return l;const k=JSON.parse(m[2]);if(!nb.has(k))return l;const arr=JSON.parse(m[3]);arr[1]=nb.get(k);n++;return m[1]+m[2]+': ['+arr.map(x=>JSON.stringify(x)).join(', ')+']'+m[4];});
 if(n!==b.length){console.log('line-mode matched',n,'of',b.length);process.exit(1);}
 fs.writeFileSync(f,lines.join('\n'),'utf8');console.log('redone',n,'(line mode)',sparse?'(sparse)':'next '+(a+b.length));process.exit(0);
}
for(const t of b){P[t[0]]=[P[t[0]][0],t[1],...P[t[0]].slice(2)];}
const hi=src.indexOf('export const');const head=src.slice(0,src.indexOf('=',hi)+1)+' ';
const ordered={};for(const e of W)if(e[0] in P)ordered[e[0]]=P[e[0]];
fs.writeFileSync(f,head+JSON.stringify(ordered)+';\n','utf8');
console.log('redone',b.length,'total',Object.keys(ordered).length,sparse?'(sparse)':'next '+(a+b.length));
