function sum(a,b){
    console.log(a+b)
}
sum(10,20)

var sum=()=>{
    var a=10;
    var b=20;
    console.log(a+b)
}
sum();
var marks=[90,95,96,100,99];
var[m1,m2,m3,m4,m5]=marks;
console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)



var a="10";
var b=10;

var num=2;
var result=num%2===0? "even":"odd"
console.log(result)

var mark=34;
var result=(mark>=80)?"0":(mark>=60)? "A+":(mark>=35)?"p" :"F"
console.log(result)

let arr=[10,20,30,40];
let arr2=[...arr,50,60,70]
console.log(arr)
console.log(arr2)


console.log(a==b); //true
console.log(a==b) //false
console.log(a!=b); //false
console.log(a!==b); //true