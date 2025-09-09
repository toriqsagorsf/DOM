//Parent - Child relation
// let grandparent = document.querySelector('.todo-list');
// let children = grandparent.children;
// console.log(children);


function add(x,y){
    return x+y;
}
function mul(x,y){
    return x*y;
}

function calculate(a,b,callback){
    callback(a,b)
}
console.log(calculate(5,10, add))

let a = 5;
let b = 10;
console.log(a+b); 

//Process array

function printSquare(num){
    return (num*num)
}

function processArray(arr, callback){
    let results = [];
    for(let i=0; i < arr.length; i++){
        results.push(callback(arr[i]))
    }
    return results
}

console.log(processArray([1,2,3,4,5], printSquare))


// Practice
fetch()
.then(response => response.json())
.then(data => {
    console.log('Users => ' + data);
}) 