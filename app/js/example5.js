function filter(input, than) {
  var array2=[];
  try {
  if (input.length===0) {
    throw new Error('Empty array!');
  };
  for (i=0;i<input.length;i++){
    if (!isFinite(input[i]))
    {
    throw new Error('Not a number in array!');
    }
    else if (input[i]<0){
    throw new Error('Negative number in array!');
    } else 
    {
      if (input[i]>than){
       array2.push(input[i]);
     }
    }
  }
    } catch(e){
      console.log(e.message);
    }
 return array2;
 }
 
 var array = [12, 100, 34, 65, 10,'ssss'];
 var result = filter(array, 60);
 
console.log(result); // [100, 65];
 
 //result = filter(array, 20);
 //console.log(result); // [100, 34, 65];