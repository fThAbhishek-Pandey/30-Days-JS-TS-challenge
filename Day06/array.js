// Activity 1
//  Array creation and access
// task 1
const arr = [1,2,3,4,5];
console.log(arr);
//  task 2
console.log(arr[0]);
console.log(arr[4]);
//  Activity 2 
//  basic method basic
//  task 3
arr.push(6);
console.log(arr);
//  task 4
arr.pop();
console.log(arr);
//  task 5
arr.shift();
console.log(arr);
//  task 6
arr.unshift(9);
console.log(arr);

//  Activity 3 
//  Array method (intermediate)
//  task 7
 
const newArr = arr.map((x)=>{
      return x*2;
});
console.log(newArr);
//  task 8
const newArr2 = arr.filter ((x)=> x%2==0);
console.log(newArr2);
//  task 9 
const sum = arr.reduce((x,y)=>{
      return x+=y;
});
console.log(sum);
// Activity 4 array itretion 
// Array itrretion 
//  task 10
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//  task 11
arr.forEach ((x)=>{
     console.log(x," ");
})