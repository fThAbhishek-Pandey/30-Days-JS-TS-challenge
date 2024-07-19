//  Activity 1 
//  object creation and Access
//  task 1
const Book = {
    title : "Loves of Abhishek",
    author : "Abhishek Pandey",
    year : 2024, 
}
console.log(Book);
//  task 2
console.log(Book.title);
console.log(Book.author);
//  Activity 2
//  Object method 
const Book2 = {
    title : "Loves of Abhishek",
    author : "Abhishek Pandey",
    year : 2024, 
    getAuthor : function (){
        return this.author;
    },
    getTitle : function (){
        return this.title;
    }
}
console.log(Book2);
console.log(Book2.getAuthor)
console.log(Book2.getAuthor())
console.log(Book2.getTitle)
console.log(Book2.getTitle())
//  task 4 
const Book3 = {
    title : "Loves of Abhishek",
    author : "Abhishek Pandey",
    year : 2024, 
    updateYear : function (year){
        this.year = year;
    },
}
console.log(Book3);
console.log(Book3.updateYear(2032));
console.log(Book3);
//  Activity 3 
//  Nested Object
//  task 5
const library = {
   book1 :  {
        title : "love with Abhishek",
        author : "Abhishek Pandey",
        year : 2011,
    },
    book2 :  {
        title : "love with Royel Pandit",
        author : "Abhishek Pandey",
        year : 2011,
    },
}
console.log(library);

//  task 6 
console.log(library.book1.title);
console.log(library.book1.author);
console.log(library.book2.title);
console.log(library.book2.author);
//  Activity 4
//  this keyword
//  
const Book4 = {
    title : "Loves of Abhishek",
    author : "Abhishek Pandey",
    year : 2024, 
    yourBook : function (){
       const yoursBook = {
          title : this.title,
          Author : this.author,
          years : this.year,
       }
    },
}
console.log(Book4.yourBook());
//  activity 5
//  Object itretion 
//  task 8
    for( const i in Book4 ){
        console.log(i);
    }
//  task 9
const objKeys = Object.keys(Book4);
console.log(objKeys);
const objValue = Object.values(Book4);
console.log(objValue);