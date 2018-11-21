// Javascript Fizzbuzz Function. Numbers 1 - 100
//Original Fizzbuzz hacked together 
function fizzbuzz (){
    for(var i = 0; i <= 100; i++){
        if(i%3===0 && i%5===0){
            console.log('fizzbuzz');}
        else if (i%3===0 && i%5!=0){
            console.log('fizz');}
        else if (i%5===0&&i%3!=0){
            console.log('buzz');}
        else { console.log(i);}
    }
}


//optimized fizzbuzz 
function optibuzz(){
    for(var i=0; i<=100; i++){
        //statement variable used to store strings fizz, buzz or both after conditions are executed.
        var statement = ("");
        if(i % 3 === 0){statement += 'fizz';}
        if(i % 5 === 0){statement += 'buzz';}
        //statement does not have fizz or buzz inside thus it failed the conditional tests and will return the integer
        if(statement == ("")){statement = i;}
		console.log(statement);
    }
}
