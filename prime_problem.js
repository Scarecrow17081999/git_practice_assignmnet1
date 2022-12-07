let num
function checkprime(num){
    let count=0
   for(var x=1;x<num;x++){
       if(num%x==1){
           count++
       }
   }  
   
    if(count==2){
       return true
   }else{
      return false
   }
   }
   
  if(checkprime(a)){
      console.log("True")
  }else{
      console.log("False")
  }