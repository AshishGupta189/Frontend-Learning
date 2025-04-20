let name = prompt("Enter your name");
let age=+(prompt("Enter your age"));
age>18?console.log(`hello ${name} you can vote`):`hello ${name} you can't vote`;

let arr=[5, 10, 20, 35, 50];
let ans = arr.map((i)=>i*2);
console.log(ans)

let ans2=arr.filter((i)=> i%2==1);
console.log(ans2);

arr.sort();
console.log(arr[arr.length-1]);

let person={
    name:"Ash",
    age:22,
    city:"LKO"
}
Object.defineProperty(person,salary,{
    value:50000,
    enumerable:false
})

console.log(person)

console.log(isNaN("dost"))

var arrow= (a,b) => a+b;

console.log(arrow(2,5))

function abcd(){
    console.log("hello from timeout");
}

setTimeout(abcd,2000);

function truncate(str){
    if(str.length>10){
        console.log(str.substring(0,11)+"...");
    }else{
        console.log(str)
    }

}

truncate("JavaScript is Awesome");



// MCQ

// i - c
// ii - b
// iii - b
// iv - d 
// v- b
// vi - b 
// vii- b 