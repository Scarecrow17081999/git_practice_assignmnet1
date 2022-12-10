let num=25;
function checkprime(num){
    let count=0
   for(var x=1;x<=num;x++){
       if(num%x==0){
           count++
       }
   }  
   
    if(count==2){
       return true
   }else{
      return false
   }
   }
   
  if(checkprime(num)){
      console.log("True")
  }else{
      console.log("False")
  }