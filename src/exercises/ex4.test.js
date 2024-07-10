// ex4.test.js

// Importer jsdom pour simuler le DOM
const { JSDOM } = require('jsdom');

// Configuration de jsdom
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

// Importer les fonctions à tester depuis ex4.js
const { fetchData, formatWeatherData, toggleWeatherData } = require('./ex4');

// Mock des données de l'API pour les tests
const mockWeatherData = {
  name: 'Mock City',
  weather: [{ description: 'Mock weather' }],
  main: { temp: 25, humidity: 70, pressure: 1013 },
  wind: { speed: 5 },
};

// Mock de la fonction fetch pour simuler l'appel à l'API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockWeatherData),
  })
);

describe('fetchData function', () => {
  test('fetchData should fetch weather data from API', async () => {
    const data = await fetchData('MockCity');
    expect(data).toEqual(mockWeatherData);
  });

  test('fetchData should handle fetch errors', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('API is down'))
    );
    const data = await fetchData('MockCity');
    expect(data).toBeNull();
  });
});

describe('formatWeatherData function', () => {
  test('formatWeatherData should format weather data correctly', () => {
    const formattedData = formatWeatherData(mockWeatherData);
    const expectedOutput = `
      Weather in Mock City: Mock weather
      Temperature: 25 K
      Humidity: 70%
      Pressure: 1013 hPa
      Wind Speed: 5 m/s
    `;
    expect(formattedData).toEqual(expectedOutput.trim());
  });
});

describe('toggleWeatherData function', () => {
  test('toggleWeatherData should show weather data when paragraph is empty', async () => {
    const paragraph = document.createElement('p');
    paragraph.id = 'paragraph';
    document.body.appendChild(paragraph);

    await toggleWeatherData();

    expect(paragraph.textContent).not.toBe('');
  });

  test('toggleWeatherData should hide weather data when paragraph is not empty', async () => {
    const paragraph = document.createElement('p');
    paragraph.id = 'paragraph';
    paragraph.textContent = 'Weather info';
    document.body.appendChild(paragraph);

    await toggleWeatherData();

    expect(paragraph.textContent).toBe('');
  });
});
