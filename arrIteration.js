//find max number in array.
function max(arr){
  var x = arr[0];
  for(i = 1; i < arr.length; i++){
    if(x < arr[i]){
      x = arr[i]; }
   }
   return x; 
}

//sum of an array
function sumArr(arr){
   var total = 0;
   arr.forEach(function(x){
   	total+=x;
   });
	return(total);
}

//find if array is uniform
function isUniform (arr){
	var x = arr[0];
	for(i=1;i<arr.length;i++){
		if(x == i){
			console.log(true);
		} if(x!=i){
			console.log(false);
		}
	}
}
