// ex4.js

const apiKey = '08cb792ca8906ae401dad848ccb6410d';
const latitude = 44.83; // Exemple de latitude (Bordeaux)
const longitude = -0.57; // Exemple de longitude (Bordeaux)
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

const fetchData = async () => {
  try {
    let response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

// Fonction pour afficher les données
const displayData = async () => {
  try {
    let data = await fetchData();
    if (data) {
      console.log(data); // Affiche les données dans la console du navigateur
      // Ici, vous pouvez mettre à jour votre interface utilisateur avec les données récupérées
    }
  } catch (error) {
    console.error('Error displaying data:', error);
  }
};

// Écouteur d'événement pour charger le DOM
document.addEventListener('DOMContentLoaded', displayData);
