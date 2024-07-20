// Activity 1
// Template litral
//  task 1
const name = "Abhishek Pandey";
const age = 35;
const litralString = `I am ${name} and I am ${age} Year Old`;
console.log(litralString);
// task 2 
const hero = "abhishek";
const energyLevel = "high";
const nature = "attacker and defender";
const litralString2 = `there is a hero,${hero} and his energy Level is high .their nature is ${nature}`; 
console.log(litralString2);
//  Activity 2
//  Destructruring 
//  task 3
const arr = [5,6,7,3,4,6];
console.log(arr);
const [ele1,ele2] = [ ...arr];
console.log(ele1);
console.log(ele2);
//  task 4
const create = {
       title : "Loves of abhishek",
       author : 'Abhishek Pandey',
}
console.log(create);
console.log(create.title," --> ",create.author);
const {title, author} = {...create};
console.log(title, " --> ",author);
//  Activity 3
//  spread and Rest operator
//  task 5
const arr1 = [1,2,3,4,5];
const arr2 = [11,22,33,...arr1,44,55,66];
console.log(arr2);
//  task 6
const [first, ...rest] = [2,3,4,5,6,7];
console.log(first);
console.log(rest);
//  Activity 4
//  Default Parameter
//  task 7
function product(a,b=7){
       return a*b;
}
console.log(product(5));
//  Activity 5
//  Enhanced Object Litrals
//  task 8
const myLove ={
       name : "Abhishek Pandey",
       age :16,
       desp : function (){
              retrun `I love with ${name} ,till class 10th at the age of ${age}`;
       }
}
console.log(myLove.desp ());
//  task 9




