const removeFromArray = function(Array, ...otherArgs) {

    // I looped backwards because the splice method 
      // changes indices everytime it removes an element.
      // We'd end up skipping the iteration of some elements.
      for (i=Array.length; i>=0; i--) { 
      
        for (let j=0; j<otherArgs.length; j++) {
          if (Array[i]=== otherArgs[j]) {
            Array.splice(i,1);
          }  
        }
      }
      
      return Array;

};

// Do not edit below this line
module.exports = removeFromArray;
