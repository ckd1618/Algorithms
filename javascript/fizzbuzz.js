function fizzbuzz(){
    for (var i=1; i<101; i++){
        var x = '';
        if (i%3 ==0){
            x+="fizz";
        }
        if(i%5 ==0){
            x+="buzz";
        }
        if(x != '') console.log(x);
    }
}
fizzbuzz();