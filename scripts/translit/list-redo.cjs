/* eslint-disable */
// Usage: node list-redo.cjs <startIndex> <n>  — word | UA gloss | EN example (the source to translate)
const fs=require('fs');
function load(p,v){let s=fs.readFileSync(p,'utf8');if(s.charCodeAt(0)===0xfeff)s=s.slice(1);const i=s.indexOf('const '+v);const e=s.indexOf('=',i);return eval('('+s.slice(e+1).replace(/;\s*$/,'')+')');}
const W=load(__dirname+'/../../data/words-data/words.js','W');
const a=+process.argv[2],n=+process.argv[3];
W.slice(a,a+n).forEach(e=>console.log(e[0]+' | '+e[1]+' | '+e[2]));
