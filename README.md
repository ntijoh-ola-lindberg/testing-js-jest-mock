# Testning i JavaScript med Jest 

Testramverket heter [jest](https://jestjs.io/) med ett tillägg [jest-fetch-mock](https://github.com/jefflau/jest-fetch-mock ).

## Kom igång

Installera: `yarn install`
Köra: `yarn test`

## Grunder 

Filerna `math.js` och `math.test.js` innehåller grundläggande metoder.

Läs: https://jestjs.io/docs/using-matchers

## Asynkrona metoder och *mocks*

För att slippa göra riktiga API-anrop i tester används *mocks*. Man skapar då ett *dummie-objekt* med som automatiskt ersätts vid anrop till `fetch()`.

Filerna `api.js` + `api.test.js` innehåller ett exepel för att mocka `fetch()`. Filen `setupJest.js` sätter igång mocks för alla fetch-anrop. Vill du köra några som riktiga anrop går det att välja vilka.

Läs: https://jestjs.io/docs/asynchronous & https://github.com/jefflau/jest-fetch-mock#examples Det går att *mocka* utan `jest-fetch-mock` (se jest-dokumentationen).
