a = [
  {
    Name: "john",
    Age: "25",
  },
  {
    Name: "john",
    Age: "25",
  },
  {
    Name: "Sarah",
    Age: "29",
  },
];


let  ar=[]
for(let i=0;i<a.length;i++){
 let isDup = false
  for(let j=0 ; j<ar.length;j++){
     if(a[i].Name === ar[j].Name && a[i].Age === ar[j].Age){
      isDup = true
      break
     }
  }
  !isDup && ar.push(a[i]) 
}
console.log(ar);

