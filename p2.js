// hash tag generator
let s='my name is pooja'
let a=s.split(' ')
console.log(a);

let w=a.map((i)=>i[0].toUpperCase()+i.slice(1))
console.log(w);
console.log('#'+w.join(""));

