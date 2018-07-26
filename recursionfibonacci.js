function fib(num){
	if (num == 0){
		return(0);
	}
	if(num == 1){
		return(1);
	}
	return fib(num - 1) + fib(num - 2);
}
// replace # with nth position of sequence you are looking for. ex the 3rd position = console.log(3));
console.log(fib(#));
