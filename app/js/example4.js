function filter(input, than) {
  for (let i=0;i<input.length;i++){
    if (input[i]>than){
      let array2=[0];
      array2.push(input[i]);
    }
  }
 return array2;
 }
 
 var array = [12, 100, 34, 65, 10];
 var result = filter(array, 60);
 
 console.log(result); // [100, 65];
 
 result = filter(array, 20);
 console.log(result); // [100, 34, 65];
 