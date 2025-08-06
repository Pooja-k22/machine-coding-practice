//reverseString("hello");    // ➞ "olleh"


let s='hello'

let p=""
for(let i=s.length-1;i>=0;i--){
    p+=s[i]
}
console.log(p);
