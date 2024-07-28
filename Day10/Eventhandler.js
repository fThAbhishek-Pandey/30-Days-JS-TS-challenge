//  Activity 1
//  Basic event handleing
//  task 1
const para = document.querySelector(".task1para");
const button = document.querySelector(".task1buttun");
button.addEventListener('click',function (){
        para.innerHTML = 'love is life';
});
//  task 2
const imgTask2 = document.querySelector(".task2img");
const task2btn = document.querySelector(".task2btn");
task2btn.addEventListener ('click',function (){
    console.log("i am clicked");
    imgTask2.style.borderRadius = "50%";
});
//  acivity 2
//  Mouse event
//  task 3
const para3 = document.querySelector(".task3para");
const task3btn = document.querySelector(".task3btn");
task3btn.addEventListener("mouseover",function (){
           para3.style.backgroundColor = "red";
});
//  task 4 
task3btn.addEventListener('mouseout',function(){
       para3.style.backgroundColor = "yellow";
})
//  Activity 3
//  keyboard event
//  task 5
const task5inp = document.querySelector(".task5inp");
task5inp.addEventListener('keydown',function(e){
          console.log(e);
          console.log(typeof e);

});
//  task 6
task5inp.addEventListener('keyup', function(e){
        console.log(e);
        console.log(typeof e);
});
//  Activity 4
//  from events
//  task 7
const task7user = document.querySelector(".task7user");
const task7password= document.querySelector(".task7password");
const form= document.querySelector(".form");
const  task7submit = document.querySelector(".task7submit");
form.addEventListener('submit',function (e){
     e.preventDefault();
     console.log("i am submit");
     console.log("task7user",task7user.placeholder);
     task7user.placeholder = "Abhishek";
     console.log("task7password",task7password.placeholder);
     task7password.placeholder= "12345678";

});
//  task 8
const cars = document.querySelector("#cars");
const selectedCars = document.querySelector(".selectedCars");
console.log(cars);
cars.addEventListener('change',function(evt){
        console.log(evt);
        console.log(typeof evt);
        selectedCars.innerHTML =`you are like ${evt.target.value}`;
})
//  Activity 5
//  Event Delegation 
//  task 9
const task9ul = document.querySelector(".task9ul");
const task9Btn = document.querySelector(".task9Btn");
task9ul.addEventListener("click", function(evt){
        console.log("evt",evt.currentTarget);

})
//  task 10
const  task10form = document.querySelector(".task10form");
const task10input = document.querySelector(".task10input");
const task10Btn = document.querySelector(".task10Btn");
const  task10ul = document.querySelector(".task10ul");
task10form.addEventListener('submit',function(){
     const task10InputTxt= task10input.value;
     console.log(task10InputTxt);
     const myNewElement=0 ;
     task10ul.appendChild(myNewElement); 

})
