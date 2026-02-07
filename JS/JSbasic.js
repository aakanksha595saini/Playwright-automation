let a = 5;
let b =6;
console.log(typeof(a));
// let b=99;  re-delaration is not allowed with let keyword but with var we can
b = 99; //re-assignment is allowed as no keyword used to delare identifire c, it will update the 'c' value
console.log(b);
var d =8;
var d =90909;
console.log('var d :' +d);
const flag =true;
console.log(!flag);
if(!flag){
    console.log('the condition is true');
    console.log(flag);
}
else
{
    console.log('Condition is false');
    console.log(flag);
}