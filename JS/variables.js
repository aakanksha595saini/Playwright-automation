// VAR keyword
//var has functioned scopped, or globally scoped and can be re-declared and updated
function var1(){
    var a =1;
    if (true){
        var a =20; 
        var a =4545; //re-declaration inside the same scope
        console.log("a inside if ="+a);
    }
     console.log("a inside function ="+a);
}
var1();
//  console.log("outside fun ="+var1()+"a ="+var1.a);
 
//Let is block- scoped and can be updated (re-assigned) but not re-declared with in the same scope
function letr1(){
    let b =1;
    if (true){
        let b =20;
        // let b = 2332; // can not re declare again
        b = 56; //re-assign is allowed
        console.log("let b inside if ="+b);
    }
     console.log("let b inside function ="+b);
}
letr1();

//const is block- scoped and can not be updated (re-assigned) or re-declared.
function const1(){
    const c =1;
    if (true){
        const c =20;
        // let c = 2332; // can not re declare again
        c = 56; //re-assign is allowed
        console.log("let c inside if ="+c);
    }
     console.log("let c inside function ="+c);
}
const1();

