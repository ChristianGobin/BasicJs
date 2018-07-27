//Print even numbers between 1 and 100
for(x = 1 ; x <= 100 ; x += 1){
  if(x % 2 === 0){
    console.log(x); }
}

var x = 1;
while(x <= 100){
  if (x % 2 === 0){
    console.log(x) }
  x += 1
}

//---------------------------------------------------------------------------------------------------------------------------
//numbers between 1 and 350, that are divisible by 7 and 12 
for(x = 1; x <= 350 ; x+=1){
  if(x % 7 === 0 && x % 12 === 0){
    console.log(x) }
}

var x = 1;
while(x <= 350){
  if(x % 7 === 0 && x % 12 === 0){
    console.log(x); }
  x+=1
}
