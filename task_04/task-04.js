async function concurrentRequests() {
    try {
      const [response1, response2] = await Promise.all([
        fetch('https://api.thecatapi.com/v1/images/search'),
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      ]);
      const data1 = await response1.json();
      const data2 = await response2.json();
      console.log('Données 1 :', data1);
      console.log('Données 2 :', data2);
    } catch (error) {
      console.error('Échec de la récupération des données :', error.message);
    }
  }
  
  // Utilisation d'exemple:
  concurrentRequests();
  