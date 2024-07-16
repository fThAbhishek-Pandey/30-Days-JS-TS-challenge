// Activities
//  for loops
//  task 1
for (let i =1;i<=10;i++){
    console.log(i," ");
}
//  task2
 for(let i=1;i<=10;i++){
    console.log ("5 X ",i," = ",i*5);
 }
//   Activity 2
//  while loop
//  task 3
let sum =0;
let i=0;
while (i<=10){
    sum += i;
    i++;
}
console.log("sum = ",sum);
//  task 4
let k=10;
while (k--){
    console.log(k," ");
}
// activity 3 
//  Do while loops
//  task 5
i=1;
 do {
    console.log(i++)
 } while (i<=5);
//   task 6
i=1;
let facto= 2;
do {
    i++;
   facto = facto* (facto-1);
   console.log(facto , " ");

} while (i<=10);
//  Activity 4
//  Nested loop
// task 7
//  *
//  *  *
//  *  *  *
//  *  *  *  *
for ( i=1;i<5;i++){
      for(let j= 1;j<=i;j++){
        console.log("* ");
      }
      console.log("\n");
}
//  Activity 5
//  loop controle statement
// task 8
for (let a = 1;a<=10;a++){
     if (a===5) continue;
     console.log(a," ");
}
//  task 9
for (let a = 1;a<=10;a++){
    if (a===7) break;
    console.log(a," ");
}