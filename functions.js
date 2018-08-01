console.log("factorial function");
function factorial(x){
  var result = 1;
  for (var i = 2 ; i <= x ; i++){
    result = i * result; }
  return result;
}
// replace # with desired number to find its factorial
console.log(factorial(#));                
//--------------------------------------------------------------
console.log("Even or Odd Funtion");
function oddEven(y){
  if(y % 2 == 0){
    console.log("Even") }
  else{
    console.log("Odd"); }
}
//replace # with number to be tested
oddEven(#);
//--------------------------------------------------------------
console.log("Replace Characters in a String");
function replacement(str){
               //str.replace(/character to be swap out/g , "character to swap in");
  var newStr = str.replace(/-/g , "_");
  return newStr;
}
console.log(replacement("This-is-a-string");
//output will replace all "-"'s with "_"           
