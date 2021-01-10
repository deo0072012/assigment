var D={
         "2020-01-01":4,
         "2020-01-02":3,
         "2020-01-03":-2,
         "2020-01-04":-5,
         "2020-01-12":2,
         "2020-01-22":5,
         "2020-01-30":-2

}
function solution(D){
  var y;
  console.log(D);
  console.log("hello world");
  for (const [key, value] of Object.entries(D)) {
  
  var x = Number(key.substr(key.length-2,key.length));
    if(x>7 && x<15){
        y=x-7;
    }
    else if(x>14 && x < 22){
        y=x-14;
    }
    else if(x>21 && x < 29){
        y=x-21;
    }
    else  y=x-28;
    
   if(x==1|| y==1) 
   console.log(' "Mon" :'+value);
   else if (x==2|| y==2) 
   console.log(' "Tue" :'+value);
   else if (x==3|| y==3) 
   console.log(' "Wed" :'+value);
   else if (x==4|| y==4) 
   console.log(' "Thu" :'+value);
   else if (x==5|| y==5) 
   console.log(' "Fri" :'+value);
   else if (x==6|| y==6) 
   console.log(' "Sat" :'+value);
   else if (x==7|| y==7) 
   console.log(' "Sun" :'+value);
  
    
 
 
}
}

solution(D)