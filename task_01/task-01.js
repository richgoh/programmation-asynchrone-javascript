async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      console.log(value);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // Utilisation d'exemple:
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);
  