var john = {
    billValues:[124,48,268,180,42], tipCalc: function(){
        this.totals = [];
        this.tips=[];
        for(var i = 0; i<this.billValues.length ; i++){
            var bill = this.billValues[i];
            if(bill<50){
                percentage = .2;
            }
            else if (bill > 50 && bill<200){
                percentage = .15;
            }
            else{
                percentage = .10;
            }
            this.tips[i] = bill * percentage;
            this.totals[i] = bill + (bill*percentage);
        }
    }
}