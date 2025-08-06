//qn ) Write a function groupBy that takes an array of objects and a property name (as a string), and returns an object where the keys are the unique values of the specified property, and the values are arrays of objects that have that property value.

// Example 1:

/* const users= [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 30 },
{name: 'Charlie', age: 25 }]

groupBy(users, 'age');

 Output: {
 '25': [{ name: 'Alice', age: 25}, { name: 'Charl' , age: 25}],
 '30': [{ name: 'Bob', age: 30}] } */



function groupBy(arr, key) {
    
    let ob = {}

    let d = arr.map((i) => {
       let agekey = i[key]
        if (!ob[agekey]) {
            ob[agekey]=[]
        }
        ob[agekey].push(i)
    })

    console.log(ob)
    return ob
    
}
groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
],'age');