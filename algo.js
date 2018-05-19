var strStr = function(haystack, needle) {

    var length = needle.length;
    
    if(length == 0){
        return 0;
    }
    if(haystack.length >= 1000){
        return -1;
    }
   for(x in haystack){
       var index = 0;
       var counter = 0;
       if(haystack[x] == needle[0]){
           index = x;
           
           for(y in needle){
               
               intx = parseInt(x);
               inty = parseInt(y);
               var test = intx+inty;
            
              
               if(needle[y] == haystack[test]){
                  
                   counter ++;
                   
               }
               
           }
          if(counter == length){
              break;
          }
       }
   }
    //console.log(counter ,length);
    if(counter == length){
        return parseInt(index);
    }
    else{
        return -1;
    }