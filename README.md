# Testning i JavaScript

## Kom igång

Installera: ```yarn install```

Köra: ```yarn test```

## Grunder 

Filen math.js innehåller enkla matte-metoder. Filen math.test.js innehåller några enkla test för respektive metod. 

Läs: https://jestjs.io/docs/using-matchers

## Asynkrona metoder / mocks

För att tex. slippa göra riktiga API-anrop från tester används "mocks". Man skapar då ett dummie-objekt som automatiskt ersätts när tex. metoden fetch() körs.

https://github.com/jefflau/jest-fetch-mock#examples 


