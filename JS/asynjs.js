//statements 1 to 4 (in syncronised manner) will execute 1 after 1 and then 6,7 i.e its still continues with 
// its execution then proceed for the settimeout method

console.log("Hello its statements number :1");
console.log("Hello its statements number :2");
console.log("Hello its statements number :3");
console.log("Hello its statements number :4");
setTimeout(function(){
console.log("Hello its statements number :5"); //will be executed after 2 sec. 
},2000)
//As its still continues to the 6,7 (its Async)
//coz if incase it wait for 5th and then execute the 6,7 (after 5) only then we counld say Syncronised JS
console.log("Hello its statements number :6");
console.log("Hello its statements number :7");
