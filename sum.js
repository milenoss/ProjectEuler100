// Project euler

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const multiples = (number) =>  { 
  let total = 0; 
 for( let i = 0; i < 1000 ; i ++ ){ 
   let r3 = i % 3; 
   let r5 = i % 5; 
   if( r3 == 0 || r5 == 0){ 
     total += i
     
   }
   console.log( total);
 }
}
multiples(100)

const multiples = (number) => { 
  let total = 0;
  for(let i = 0; i<= 1000; i ++){ 
     if( i % 3 || i % 5){ 
     total += i
     
   }
  }
  return total;
}
multiples()