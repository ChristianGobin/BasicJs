function fib(num){
	if (num == 0){
		return(0);
	}
	if(num == 1){
		return(1);
	}
	return fib(num - 1) + fib(num - 2);
}
// replace # with nth position of sequence to find value you are looking for. Ex the value of the 3rd position = console.log(3));
console.log(fib(#));
