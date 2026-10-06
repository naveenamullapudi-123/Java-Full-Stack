/* let var const
var a=20;            (can be re-declared & updated anywhere)
var a=30;
console.log(a);

let b=30;
b=29;                (can be updated but not re-declared)
console.log(b);

const c=5;
c=6;                 (cannot be re-assigned or re-declared)
console.log(c);
*/

//Comparison
let a=5;
let b="5";
if(a==b){
    console.log("true");
}
else{
    console.log("false");
}