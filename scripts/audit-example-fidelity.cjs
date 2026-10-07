/* eslint-disable */
const fs=require('fs');
function load(p,v){let s=fs.readFileSync(p,'utf8');if(s.charCodeAt(0)===0xfeff)s=s.slice(1);const i=s.indexOf('const '+v);const e=s.indexOf('=',i);return eval('('+s.slice(e+1).replace(/;\s*$/,'')+')');}
const R='data/words-data/';
const W=load(R+'words.js','W');const idx=new Map(W.map((e,i)=>[e[0],i]));
const normDigits=s=>s.replace(/[٠-٩]/g,c=>String(c.charCodeAt(0)-0x660)).replace(/[०-९]/g,c=>String(c.charCodeAt(0)-0x966)).replace(/[０-９]/g,c=>String(c.charCodeAt(0)-0xFF10));
const med=a=>{if(!a.length)return 0;const b=[...a].sort((x,y)=>x-y);return b[Math.floor(b.length/2)]};
const out=[];
for(const f of fs.readdirSync(R)){
 const m=f.match(/^words_([a-z]+)\.js$/);if(!m||m[1]==='data')continue;const code=m[1];
 let P;try{P=load(R+f,'W_'+code.toUpperCase());}catch(e){continue}
 const ents=[];
 for(const k of Object.keys(P)){const i=idx.get(k);if(i===undefined||!P[k][1])continue;ents.push({i,k,ex:P[k][1],en:W[i][2]});}
 ents.sort((a,b)=>a.i-b.i);
 const n=ents.length;
 // per-bucket (by base index) stats
 const bs=1000;const buckets={};
 let dig=0,digN=0,pn=0,pnN=0;const seen=new Map();let dup=0;
 for(const e of ents){
  const b=Math.floor(e.i/bs);(buckets[b]=buckets[b]||[]).push(e.ex.length/e.en.length);
  const ed=(e.en.match(/\d+/g)||[]);if(ed.length){digN++;const td=normDigits(e.ex);if(!ed.every(d=>td.includes(d)))dig++;}
  // proper nouns: capitalized word not at sentence start, in EN
  const toks=e.en.split(/\s+/).slice(1).map(t=>t.replace(/[^A-Za-z]/g,'')).filter(t=>/^[A-Z][a-z]{3,}$/.test(t)&&!['Monday','Tuesday','Friday','Sunday','Saturday','Wednesday','Thursday'].includes(t));
  if(toks.length&&/[A-Za-z]/.test(e.ex)){pnN++;const lo=e.ex.toLowerCase();if(!toks.some(t=>lo.includes(t.slice(0,4).toLowerCase())))pn++;}
  const key=e.ex;seen.set(key,(seen.get(key)||0)+1);
 }
 for(const v of seen.values())if(v>1)dup+=v-1;
 const early=med((buckets[0]||[]));
 const seq=Object.keys(buckets).map(b=>med(buckets[b]).toFixed(2));
 const late=[].concat(...Object.keys(buckets).filter(b=>b>=1).map(b=>buckets[b]));
 const lateMed=med(late);
 const relShort=late.length?100*late.filter(r=>r<0.6*early).length/late.length:0;
 out.push({code,n,early:early.toFixed(2),late:late.length?lateMed.toFixed(2):'-',relShort:relShort.toFixed(1),dig:digN?(100*dig/digN).toFixed(0):'-',pn:pnN?(100*pn/pnN).toFixed(0):'-',dup:(100*dup/n).toFixed(1),seq:seq.join(' ')});
}
out.sort((a,b)=>b.n-a.n||a.code.localeCompare(b.code));
console.log('code\twords\tearly\tlate\t%<0.6early\t%digMiss\t%pnMiss\t%dup\tratio per 1000-bucket');
for(const o of out)console.log([o.code,o.n,o.early,o.late,o.relShort,o.dig,o.pn,o.dup,o.n>=1000?o.seq:''].join('\t'));
