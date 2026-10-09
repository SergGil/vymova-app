/* eslint-disable */
// Usage: node merge-ex.cjs <code> <batch.json> <startIndex>
// Batch = [[english, example], ...] in base order from <startIndex>. Replaces ONLY element [1] (example); keeps gloss [0] and any [2].
const fs=require('fs');
function load(p,v){let s=fs.readFileSync(p,'utf8');if(s.charCodeAt(0)===0xfeff)s=s.slice(1);const i=s.indexOf('const '+v);const e=s.indexOf('=',i);return eval('('+s.slice(e+1).replace(/;\s*$/,'')+')');}
const R=__dirname+'/../../data/words-data/';
const [code,bp,st]=process.argv.slice(2);const a=+st;
const f=R+'words_'+code+'.js';
const W=load(R+'words.js','W');const P=load(f,'W_'+code.toUpperCase());
const b=JSON.parse(fs.readFileSync(bp,'utf8'));
let bad=0;
b.forEach((t,i)=>{
 if(t.length!==2){console.log('shape',t[0]);bad++}
 if(!W[a+i]||t[0]!==W[a+i][0]){console.log('mismatch',i,t[0],'want',W[a+i]&&W[a+i][0]);bad++}
 if(!t[1]||!String(t[1]).trim()){console.log('empty',t[0]);bad++}
 if(!P[t[0]]){console.log('nokey',t[0]);bad++}
 if(W[a+i]){const ed=W[a+i][2].match(/\d+/g);if(ed&&!ed.every(d=>t[1].includes(d)))console.log('digits?',t[0],'|',t[1]);}
});
if(bad){console.log('BAD',bad);process.exit(1);}
for(const t of b){P[t[0]]=[P[t[0]][0],t[1],...P[t[0]].slice(2)];}
const src=fs.readFileSync(f,'utf8');const hi=src.indexOf('export const');const head=src.slice(0,src.indexOf('=',hi)+1)+' ';
const ordered={};for(const e of W)if(e[0] in P)ordered[e[0]]=P[e[0]];
fs.writeFileSync(f,head+JSON.stringify(ordered)+';\n','utf8');
console.log('redone',b.length,'total',Object.keys(ordered).length,'next',a+b.length);
