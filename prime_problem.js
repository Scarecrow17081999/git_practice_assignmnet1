let number=11;
function checkprime(number){
    let count=0
   for(var y=1;y<=number;y++){
       if(number%y==0){
           count++
       }
   }  
   
   if( count==2){
     return true;
   }else{
     return false;
   }
     
   
   }
   
  checkprime(number)==true?console.log("True"):console.log("False")
      
      
  
      
  