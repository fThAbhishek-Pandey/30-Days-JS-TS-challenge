// Activity 1
//  Selecting and manipulating Element
//  task 1;
const love = document.querySelector("#love");
love.innerHTML= "love is blind";
// task 2
const mylove = document.querySelector(".myLove");
console.log(mylove);
mylove.style.background= "red";
//  Activity 2
//  Creating and appending Elements
//  task 3
const address = document.createElement("div");
address.append("Shastri Nagar Lalgang");
love.appendChild(address);
//  task 4
const myList = document.createElement("ul");
const Node = document.createTextNode("My love is great")
myList.appendChild(Node);
const node2 = document.createTextNode("My love is Pavitra");
myList.appendChild(node2);
love.appendChild(myList);
//  Activity 3
//  Removing element
//  task 5
myList.removeChild(Node);
//  task 6
myList.removeChild(myList.lastChild);
//  Activity 4
//  Modifying Attributes and classes 
//  task 7
  const img = document.querySelector(".img");
  console.log(img);
  img.src = "../assets/Abhishek.jpg"
//    task 8
  img.classList.add("appendClass");
  img.classList.remove("myimg");
//    Activity 5
//    Event handling
//    task 9
const myButon= document.querySelector(".myButon");
myButon.addEventListener('click', ()=>{
        myList.innerHTML = "Abhishek is fall in love since 2019";
});
myButon.addEventListener('mouseover',()=>{
    myButon.style.color = "yellow";
    img.style.borderRadius= "40%";
});
