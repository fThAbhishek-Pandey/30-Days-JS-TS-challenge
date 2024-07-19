// Activity 1 
//  function declration 
//  task 1
function isEven(  x){
    return x%2==0;
}
if(isEven(10)){
    console.log("it is even");
}
else {
    console.log("it is odd");
}
//  task 2 
function sqr (x){
    return x*x;
}
console.log(sqr(3));
//  Activity 2
//  function expretion 
// task 3
// 
function maxInTwo (x,y){
    if(x>y) return x;
    return y;
}
console.log(maxInTwo(10,8));
//  task 4
function conCate(x,y) {
       return x+y;
}
console.log(conCate("Abhi"+"shek"));
//  Activity 3
//  Arrow function
//  task 5
const AddtoNum = (x,y)=> x+y ;
console.log(AddtoNum(10,7));
//  task 6
//  
const checkChar = (x,y)=>{
   const n= x.length;
   for(let i=0;i<n;i++){
       if(x[i]===y) return true;
   }
   return false;
}
if(checkChar ("Abhishek",'k')){
    console.log("char is present");
}
else {
    console.log("Charector is not present");
}
// Activity 4
// Function Paramenter and default value
// tASK 7
function Product (x,y=6){
    return x*y;
}
console.log("6x8 =",Product(8));
//  task 8
// 
function greet ( name, age=18){
    if(age<18)
     console.log(`welcome my child ${name}`);
    else {
        console.log(`hello, ${name} Bro`);
    }
}
greet("Pandey ji",8);
greet("Shukla ji");
//  Activity 5 highter order function 
function loves (n){
    while(n--){
        greet("royel Pandit");
    }
}
loves (5);
//  task 10 
function sum80  (x){ return  80+x};
const pro5 = (x) => x*5;
console.log(typeof sum80);
 console.log(typeof pro5);
function hof (val){
         console.log(typeof sum80);
         console.log(typeof pro5);
        val = sum80(val);
        val = pro5 (val);
        return val;
}

console.log(hof(0));