# Harjoitukset

Käytä harjoitusten dokumentointiin myös ruutukaappauksia osoittamaan ratkaisusi toiminta. Ohjeet harjoitusten palauttamiseen sekä palautuslaatikot löytyvät [Moodle-työtilasta](https://moodle.jamk.fi/course/view.php?id=7228&section=1#tabs-tree-start).

### Harjoitukset 1 - Johdanto, Node.JS, työkalut, Express-intro

1. Selvitä käyttöjärjestelmäsi nykyinen käyttäjä käyttämällä console.log()-metodia globaalin prosessimuuttujan tulostamiseen. [3p]
2. Selvitä järjestelmän käynnissäoloaika (uptime) ja kokonaismuistin määrä käyttämällä Node.JS:n sisäänrakennettua `os`-moduulia. [3p]
3. Luo yksinkertainen web-palvelin käyttämällä ainoastaan Node.JS:ää (materiaalin ja annettujen esimerkkien perusteella). Web-palvelimen tulee lähettää vastauksena `index.html`-tiedosto, kun sille tehdään GET-pyyntö osoitteeseen `/`. Sovelluksen tulee myös lähettää takaisin seuraavat json-tiedot GET-pyynnössä osoitteeseen `/data`. Saatat joutua käyttämään tässä JSON.stringify()-metodia. Huomioi myös vastauksen sisällön tyyppi (content-type). [4p]
```js
const jsondata = { count: 35, message: 'Welcome' }
```
4. Lataa [annettu albumikokoelman esimerkkidata](01_exercises/albums.json) ja asenna npm:n avulla `json-server` -niminen paketti. Käynnistä json-server tarjoamaan esimerkkidataa. Kokeile HTTP-pyyntöjen lähettämistä Postman -sovelluksella tai VS Code REST Client -laajennuksella json-serverille. Testaa tietojen hakemista, luomista, poistamista ja päivittämistä. [4p]

---
### Harjoitukset 2 - Express reititin, sovelluksen rakenne, middleware

1. Toteuta albumikokoelmasovellus Express-sovelluskehyksellä kurssimateriaalin sekä luentojen esimerkkien perusteella. [4p]
2. Muokkaa albumikokoelmasovellus käyttämään Express-reititintä esimerkeissä kuvatun tiedosto- ja hakemistorakenteen kanssa. Etene pienin askelin ja tee commit mieluummin liian usein, jotta voit helposti palata toimivaan tilaan. [4p]
3. Luo yksinkertaistettu pääsynhallinta-middleware, joka kohdistuu tiettyyn reittiin ja tutkii tietyn kyselymerkkijonon (query string) olemassaolon. Jos kyselymerkkijonoa ei ole annettu pyynnön yhteydessä, lähetä takaisin vastaus "Unauthorized". [3p]
4. Luo `index.html`-tiedosto ja sijoita se hakemistoon `./public`. Määritä Express näyttämään public-hakemiston sisältö `express.static()` -funktiolla. Sivun latauksen yhteydessä (`http://localhost:port`) sivulla listataan kaikki nykyisen albumikokoelman albumit. Tiedot sivulle saadaan API-kyselyllä. Riittää, että listaat vain muutaman ominaisuuden jokaiselle albumille. Alla on skripti, jota voit käyttää hyväksi. [4p]
    
```js title="script.js"
const result = document.querySelector('.result')
const baseUrl = `${window.location.origin}/api`
const fetchVehicles = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/vehicles`)

    const vehicles = data.data.map((vehicle) => {
      return `<ul><li>${vehicle.make}</li><li>${vehicle.model}</li><li>${vehicle.type}</li></ul>`
    })
    result.innerHTML = vehicles.join('')
  } catch (error) {
    console.log(error)
    result.innerHTML = `<div class="alert alert-danger">Could not fetch data</div>`
  }
}
fetchVehicles()
```
Ylläoleva skripti käyttää `axios` -kirjastoa, jonka saat käyttöösi lisäämällä html-tiedostoon seuraavan tagin:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.27.2/axios.min.js" integrity="sha512-odNmoc1XJy5x1TMVMdC7EMs3IVdItLPlCeL5vSUPN2llYKMJ2eByTTAIiiuqLg+GdNr9hF6z81p27DArRFKT7A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
``` 

---
### Harjoitukset 3 - MongoDB

1. Tee MongoDB Atlas-palveluun ilmainen klusteri materiaalissa esitettyjen ohjeiden mukaisesti. [1p]
2. Lisää palveluun uusi tietokanta (Database Deployments -> Browse collections -> Create database). Luo tietokantaan myös uusi kokoelma (collection) nimien tallentamista varten. Voit halutessasi lisätä myös muutaman dokumentin Atlas-palvelun kautta. [2p]
3. Toteuta Node.JS:llä CLI-sovellus (tässä tehtävässä ei käytetä Expressiä) nimien lisäämiseksi kokoelmaan. Sovellusta käytetään komentoriviltä. Nimet syötetään komentoriviargumentteina (https://nodejs.org/docs/latest-v8.x/api/process.html#process_process_argv). Ohjelman suorittamiseksi kirjoitetaan komentorivillä `node mongodb_names.js Etunimi Sukunimi`. Jos argumentteja ei ole määritetty, palautetaan tietokantaan tallennettuna oleva nimiluettelo. [4p]
4. Refaktoroi aikaisemmissa harjoituksissa toteutettu albumikokoelmasovellus käyttämään tietokantana MongoDB:tä kurssimateriaalissa olevien esimerkkien avulla. [6p]
   
---
### Harjoitukset 4 - MongoDB

1. Asenna ESLint ja tee määritykset albumikokoelmaprojektiin. Suorita ESLint projektissasi ja korjaa linterin ehdottamat virheet. [3p]
2. Lisää validointi albumikokoelman mallin kenttiin. Artistin nimi sekä albumin nimi vaaditaan, kappalemäärän on oltava > 0, myös julkaisuvuosi vaaditaan ja sen tulee olla tiettyjen rajojen sisällä (esim. 1900 - nyk. vuosi). [3p]
3. Lisää rekisteritunnuksen tiedot **ajoneuvosovellukseen** (löytyy esimerkeistä) ja toteuta [oma validaattori](https://mongoosejs.com/docs/validation.html#custom-validators) rekisteritunnukselle (suomalaisen standardikilven muoto riittää: 3 kirjainta - 3 numeroa). [4p]

---
### Harjoitukset 5 - APIn suunnittelu, hakujen suodatus, rajaus

1. Toteuta albumitietojen lajittelu eri kenttien mukaan. [2p]
2. Lisää sovellukseen numeerinen suodatus julkaisuvuoden mukaan. [2p]
3. Lisää kentät-suodatin, jossa palvelin vastaa vain asiakkaan pyytämillä kentillä. Voit käyttää Mongoosesta löytyvää [Query.prototype.select()](https://mongoosejs.com/docs/api.html#query_Query-select)-funktiota. [3p]
4. Lisää artistien ja albumien nimien hakutoiminto käyttäen säännönmukaisia lausekkeita, jotta albumien ja esittäjien nimet voidaan suodattaa näistä kentistä osittaisilla hakutermeillä (esim. hakutermi "tot" vastaa artistin nimeä "Toto"). [4p]
5. Muuta virheenkäsittelyä siten, että voit poistaa try...catch -lohkot kontrolleri-funktioiden yhteydestä. [3p]
6. Asenna npm-paketti `http-status-codes` ja muokkaa virheenkäsittelylogiikka käyttämään tekstipohjaisia koodeja numeeristen koodien sijaan. [2p]

---
### Harjoitukset 6 - Kirjautuminen ja tunnistautuminen (JSON Web Tokens)

1. Toteuta POST-reitti `/register`, joka tarkistaa, ovatko kaikki vaaditut kentät (nimi, sähköpostiosoite, salasana, salasana (vahvistus)) olemassa ja tallentaa käyttäjätiedot MongoDB-kokoelmaan. Muista käyttää salasanatiivisteitä, jotta tietokantaan ei tallenneta salasanoja plain text -muodossa. Jos sinulla on ongelmia `bcrypt`-kirjaston kanssa Windowsissa, käytä sen sijaan kirjastoa `bcryptjs`. [4p]
2. Toteuta tarkistus (esim. User.findOne()) päällekkäisten sähköpostiosoitteiden varalta. [3p]
3. Refaktoroi sovellus siten, että vain käyttäjät, jotka ovat kirjautuneena sisään (pyynnön mukana on voimassaoleva token) pystyvät luomaan, poistamaan ja päivittämään albumikokoelmaa. Julkisen `/getAllRecords`-reitin tulee silti palauttaa tiedot tallennetuista albumista ilman kirjautumista. [4p]
4. Muodosta erilliset mukautetut virheenkäsittelyluokat `NotFound` (albumia ei löydy id:llä) ja `BadRequest` (albumin luonti ei onnistu, arvoja puuttuu tai ne ovat virheellisiä). Erilliset luokat laajentavat (extends) luokkaa "APIError". Lisää nämä uudet virheet sopiviin paikkoihin kontrollereissa. [4p]
   
---
### Harjoitukset 7 - Pysyvä kirjautuminen istuntojen ja evästeiden avulla

1. Muokkaa albumikokoelmasovellus hyödyntämään istuntoja kirjautumisessa (ja uloskirjautumisessa). Voit käyttää `passport-local` -toiminnallisuutta kuten esimerkeissä tai rakentaa toisen toteutuksen. [7p]
2. Lisää sovellukseen käyttäjäroolit, jotta pääkäyttäjä voi suorittaa CRUD-operaatioita kaikille lisätyille albumeille ja käyttäjille. Tavallisten käyttäjien tulisi nähdä ainoastaan omat albumit (myös luoda ja poistaa), joten jonkinlainen omistajuuden tarkistus (`accessed resource userID` vs `request userID`) on todennäköisesti tarpeen. [8p]
   
---   
### Harjoitukset 8 - Testaus, sovelluksen julkaisu

1. Kirjoita GET-metodille testi kohteeseen "/api/albums", joka tarkistaa tietokannassasi olevien albumien tarkan määrän. Alusta testitietokanta ensin testidatalla ja muista käyttää testitietokantaa tuotantotietokannan sijaan. [3p]
2. Kirjoita testi varmistaaksesi, että POST-metodin sisältämän albumin lisääminen toimii odotetulla tavalla. Albumien määrän pitäisi kasvaa ainakin yhdellä. [4p]
3. Lisää testi albumin poistolle, joka tarkistaa poiston onnistumisen. [4p]
4. Julkaise sovellus valitsemassasi palvelussa. Voit hyödyntää mitä tahansa opintojaksolla käsiteltyä palvelua, voit myös valita käyttämäsi palvelun. [8p]
   
---
### Harjoitukset 9 - GraphQL, Apollo Server

1. Luo GraphQL-palvelin albumien tiedoille. Käytä aluksi taulukkoa mock-datana palvelimelle. Toteuta GraphQL-skeema albumitietojesi perusteella. Kolmesta neljään kenttään riittää tähän tehtävään. [5p]
2. Testaa kyselyjen toimivuus Apollo Playgroundin avulla. [2p]
3. Toteuta mutaatio albumin poistamista varten. Testaa mutaatiota Apollo Playgroundista. [5p]
4. Muuta tietolähde (datasource) käyttämään MongoDB-tietokantaa taulukon sijaan. Testaa, että kyselyt ja mutaatiot toimivat edelleen. [6p]

---
### Harjoitukset 10 - Relaatiotietokannat

1. Luo ajoneuvosovellus annetusta mallista (kurssin esimerkkirepo, 10_examples). Pystytä Postgres-tietokanta joko paikallisesti tai jossain pilviympäristössä. [2p]
2. Lisää käyttäjä-malli tarvittavilla kentillä (id, käyttäjätunnus ja nimi). Toteuta reitit käyttäjien luontia ja hakemista varten. [3p]
3. Lisää suhde ajoneuvojen ja käyttäjien välille. Riittää, että käyttäjällä voi olla useita ajoneuvoja, mutta ajoneuvo voi kuulua vain yhdelle käyttäjälle. Toteuta käyttäjätunnuksen lisääminen ajoneuvon luonnin yhteydessä. [5p]
4. Luo GraphQL-rajapinta (käyttäen REST-datasourcea), joka tekee pyyntöjä relaatiotietokantasovellukseesi sekä mahdollistaa haut ja mutaatiot olemassaolevan REST-rajapinnan kautta. [7p]