/* eslint-disable */
// Usage: node show-lang.cjs <code> <start> <n> [--sk]  — prints base word | UA gloss | EN example || existing target example
const fs=require('fs');
function load(p,v){let s=fs.readFileSync(p,'utf8');if(s.charCodeAt(0)===0xfeff)s=s.slice(1);const i=s.indexOf('const '+v);const e=s.indexOf('=',i);return eval('('+s.slice(e+1).replace(/;\s*$/,'')+')');}
const R=__dirname+'/../../data/words-data/';
const code=process.argv[2],a=+process.argv[3],n=+process.argv[4];
const W=load(R+'words.js','W');const P=load(R+'words_'+code+'.js','W_'+code.toUpperCase());
W.slice(a,a+n).forEach(e=>console.log(e[0]+' | '+e[1]+' | '+e[2]+' || '+(P[e[0]]?P[e[0]][1]:'')));
