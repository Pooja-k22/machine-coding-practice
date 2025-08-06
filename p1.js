// logest string
let s='hello pooja welcome'

let a = s.split(" ")
console.log(a);

// method 1

// let l=""
// for(let i of a){

//     if(i.length> l.length){
//         l= i
//     }
// }
// console.log(l);

// method 2

// word = a.sort((n1,n2)=> n2.length - n1.length)
// console.log(word[0]);

// method 3
word = a.reduce((acc,cur)=> cur.length>acc.length? cur:acc)
console.log(word);


