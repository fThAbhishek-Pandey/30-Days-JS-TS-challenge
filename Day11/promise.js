//  Activity 1
//  Understanding Promises
//  task 1
let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
    console.log("I am before 2 second");
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => {
        console.log("hi, I am promise");
        resolve("done");
        
    }, 2000);
       console.log("I am after 2 second");
  });
//    TASK 2
let promise2 = new Promise ( function(resolve, reject){
    console.log("I am before 2 second");
    try {
        setTimeout(()=>{
            console.log("I am promise");
            reject("error");
      });
    }catch(error){
        console.log("there is a error : ",error);
    }
    
    console.log("I am before 2 second");
});
