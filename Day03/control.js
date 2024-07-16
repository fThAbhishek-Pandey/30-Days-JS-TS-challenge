// Activity 1
// if -else statement
// task 1
let vari= 5;
if(vari===0) {
    console.log("Zero",vari);
}
else if(vari>0) console.log("+ve ",vari);
else console.log("-ve ",vari);
// task 2 
let vari2 = 18;
if(vari>=18)
console.log("eligible to vote");
else console.log("No eligible to vote");
// Activity 2
//  Nest if else statement
//  task 3
let vari3=9, vari4=10, vari5=4;
if(vari3>vari4){
    if(vari3> vari5){
          console.log("greatest number is : ",vari3);
    }
    else {
        console.log("greatest number is : ",vari5);
    }
}
else {
    if(vari4 > vari5){
        console.log("greatest number is : ",vari4);
  }
  else {
      console.log("greatest number is : ",vari5);
  }
}
//  Activity 3
//  switch case 
let day =6;
switch (day){
    case 1: {
        console.log("Mondey");
        break;
    }case 2: {
        console.log("tuesday");
        break;
    }
    case 3: {
        console.log("wednusday");
        break;
    }
    case 4: {
        console.log("thursday");
        break;
    }
    case 5: {
        console.log("friday");
        break;
    }
    case 6: {
        console.log("sunday");
        break;
    }
    default : {
        console.log("Out of Days : ");
    }
}
//  task 5
let grade = 99;
switch (grade){
    case grade >90 : 
         console.log("grade : A");
         break;
    
    case (grade <90 && grade >= 70) : {
        console.log("grade : B");
        break;
   }
    case (grade <80 && grade >=40) : {
    console.log("grade : C");
    break;
   }
   case (grade <40) : {
       console.log("grade : F ", grade);
       break;
  } 
   default : {
      console.log("I think You are fail : ",grade);
      break;
   }
}
//  activity 4
//  Conditional operater 
//  task 6
let vari6 = 8;
vari6 %2 ? console.log("odd : ",vari6) : console.log("even : ",vari6);
//  Activity 5
//   comining condition 
//  task 7
let year = 1776;
if ( year %400==0 || (year%4 == 0 && year%100 !=0 )){
    console.log("leap year",year);
}
else {
    console.log("it is not leap year : ",year);
}