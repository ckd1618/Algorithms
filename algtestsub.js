function a(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = "Coding"; console.log("kek")
      }
      else if(x[i] < 0){
           x[i] = "Dojo"
      }
  }
}
console.log(a([5,7,-1,4]))