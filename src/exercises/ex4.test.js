// ex4.test.js

// Importer la fonction fetchData à tester
import { fetchData } from './ex4';

// Mock de fetch pour simuler une réponse
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ main: { temp: 289.15 } }) // Exemple de données simulées
  })
);

describe('fetchData function', () => {
  beforeEach(() => {
    fetch.mockClear(); // Efface les appels précédents à fetch
  });

  it('should fetch data from OpenWeatherMap API', async () => {
    const data = await fetchData();

    expect(fetch).toHaveBeenCalledTimes(1); // Vérifie qu'une seule requête fetch a été effectuée
    expect(data).toEqual({ main: { temp: 289.15 } }); // Vérifie que les données retournées sont correctes
  });

  it('should handle fetch error', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));

    const data = await fetchData();

    expect(fetch).toHaveBeenCalledTimes(1); // Vérifie qu'une seule requête fetch a été effectuée
    expect(data).toBeNull(); // Vérifie que fetchData retourne null en cas d'erreur
    expect(console.error).toHaveBeenCalledWith('Fetch error:', 'API is down'); // Vérifie que l'erreur est correctement gérée
  });
});
