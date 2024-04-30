async function awaitCall() {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Échec de la récupération des données :', error.message);
    }
  }
  
  // Utilisation d'exemple:
  awaitCall();
  