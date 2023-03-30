# Web-palvelinohjelmointi sovelluskehyksellä TTC8430-3002

## Tehvävätilanne 24.3.2023

Tehtäviä tehty tehtäväsarjat 1-7.

Kokonaispisteitä voi saada 153. Tällä hetkellä tehty 90/153 pistettä eli 51,63 %.

--------------------------------------------------------------------------------------------------------------------------------------

Harjoitukset 1 - Johdanto ja Node.js -perusteet

https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/tree/main/EX-01

Tehtävä 1: 3/3 pistettä - Pitäisi toimia oikein.

Tehtävä 2: 3/3 pistettä - Toimii niin kuin pitää, os.uptime() palauttaa käytettävyyden sekunteina ja os.totalmem() -menetelmä palauttaa muistin kokonaismäärän tavuina.

Tehtävä 3: 4/4 pistettä - Pitäisi käsitykseni mukaan toimia oikein, oli vähän vaikeuksia välillä ja piti visual studiokin ladata uudestaan.

Tehtävä 4: 0/4 pistettä - Yritin, en saanut toimimaan/osannut saamaan sitä niin kun oli tarkoitus.

Harjoitus 1 pisteitä : 10/14

--------------------------------------------------------------------------------------------------------------------------------------

Harjoitukset 2 - Express -middleware ja -reititin, sovelluksen rakenne

https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/tree/main/EX-02

Tehtävä 1: 4/4 pistettä - Pitäisi toimia oikein kun kokeilin.

Tehtävä 2: 0/4 pistettä - En saanut toimimaan, ei meinaa löytää välillä localhostia tai se kaatuu. Kyselen asiaan apua tunnilla et mikä on vikana, yritin googletella apua.

Tehtävä 3: 3/3 pistettä - Toimii, palauttaa itselleni "Unauthorized".

Tehtävä 4: 3/4 pistettä - Toimii, mutta en ole ihan varma että puuttuuko jotain niin vähensin yhden pisteen.

Harjoitus 2 pisteitä : 10/15

--------------------------------------------------------------------------------------------------------------------------------------

Harjoitukset 3 - Sovelluksen toiminta tietokannan kanssa, MongoDB

https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/tree/main/EX-03

1. Klusteri tehty ja se toimii, 1/1 pistettä.
[Kuva klusterista](https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/raw/main/EX-03/1/klusteri-valmis.png.png?inline=false)

2. Tietokantaan lisätty materiaalia ja se toimii 2/2 pistettä.
[Kuva tietokannasta](https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/raw/main/EX-03/2/tietokanta.png.png?inline=false)

3. Mongodb_names tehty. Teimme kaverin kanssa yhdessä tehtäviä että saadaan toimimaan. 4/4
[tehtävä 3-3 koodi](https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/raw/main/EX-03/3/mongodb_names.js?inline=false)

4. Kokeiltiin, mutta ei olikein tiedetty mistä lähddttäisiin oikein kunnolla liikkeelle. 1/6
[teht-4 kokeilu ](https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/raw/main/EX-03/4/4-kokeilu.png?inline=false)

Harjoitus 3: Antaisin pisteitä 8/13.

--------------------------------------------------------------------------------------------------------------------------------------

Harjoitukset 4 - MongoDB jatkuu, validointi, Node.js debuggaus

https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/tree/main/EX-04

1. [kuva eslintistä](https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/raw/main/EX-04/4-teht1/eslint-tehty.png?inline=false) ESLint saatu asennettua ja virheet korjattu 3/3 pistettä.

2. Toimii mielestäni ihan hyvin jos ei sitten jotain vahingossa unohtunut. 3/3 pistettä.

3. Toimii niin kuin pitää. Käytety suomalaisten kilpien muotoa. 4/4 pistettä.

Tein tehtäviä kaverin kanssa yhdessä ja saatiin kaikki tehtävät mielestäni hyvin toimimaan. Antaisin pisteitä 10/10.

--------------------------------------------------------------------------------------------------------------------------------------

Harjoitukset 5 - APIn suunnittelu, hakujen suodatus, rajaus.
Tehtävien pisteytys ja omat ehdotukset pisteille tehtävänannon lopussa.

1.Toteuta albumitietojen lajittelu eri kenttien mukaan.
- Mielestäni tämä onnistui ehkä sovitulla tavalla tai näin ainakin kaverin kanssa ymmärrettiin, kun tehtiin yhdessä tehtäviä. [2/2]

2. Lisää sovellukseen numeerinen suodatus julkaisuvuoden mukaan. [2/2p]
- Toimii, tässä kuvakaappaus Postmanistä:
https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/raw/main/EX-05/5-2/get-postman.png?inline=false

3. Lisää kentät-suodatin, jossa palvelin vastaa vain asiakkaan pyytämillä kentillä. Voit käyttää Mongoosesta löytyvää Query.prototype.select()-funktiota. [3/3p]
- Toimii mielestäni oikein. tässä kuvakaappaus Postmänistä:
https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/raw/main/EX-05/5-3/get-postman-teht3.png?inline=false

4. Lisää artistien ja albumien nimien hakutoiminto käyttäen säännönmukaisia lausekkeita, jotta albumien ja esittäjien nimet voidaan suodattaa näistä kentistä osittaisilla hakutermeillä (esim. hakutermi "tot" vastaa artistin nimeä "Toto"). [4/4p]
- Tämäkin toimii mielestäni oikein. tässä kuvakaappaus Postmänistä:
https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/raw/main/EX-05/5-4/postman-kuva-4.png?inline=false



5. Muuta virheenkäsittelyä siten, että voit poistaa try...catch -lohkot kontrolleri-funktioiden yhteydestä. [2/3p]
Tästä en ole ihan varma, että ymmärrettiinkö porukalla tehtäviä tehdessä asia oikein. Pyysin kaverilta neuvoa, että tulisi oikein.


6. Asenna npm-paketti http-status-codes ja muokkaa virheenkäsittelylogiikka käyttämään tekstipohjaisia koodeja numeeristen koodien sijaan. [2/2p]
- Asennus onnistui ja pitäisi toimia oikein. Kuvakaappauksia:
https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/raw/main/EX-05/5-5-5-6/get-6.png?inline=false

https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/raw/main/EX-05/5-5-5-6/http-status-codes-kuva.png?inline=false

Pisteitä voi saada tehtäväpaketista 5 yhteensä 15 ja antaisin itselleni ehkä 14 pistettä (tai jotain 10-14 väliltä), jotain virheitä voi löytyä.

--------------------------------------------------------------------------------------------------------------------------------------

Harjoitukset 6 - Käyttäjien hallinta, kirjautuminen ja tunnistaminen (JSON Web Token)

https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/tree/main/EX-06

1. Mielestäni onnistui miten pitää ja toimii. Kirjaston asennus onnistui mallikkaasti. 4/4 pistettä.

2. Toimii. 3/3 pistettä.

3. Mielestäni toimii ihan ok, erroria tuli visual studio codessa eli jotain on varmaan väärin vielä. 3/4 pistettä.

4. Tässä tuli ainakin Visual Studion kautta erroria eli jotain en osannut oikein. 2/4 pistettä.

Pisteitä antaisin näistä tehtävistä 12/15. 

--------------------------------------------------------------------------------------------------------------------------------------

Harjoitukset 7 - Istuntopohjainen kirjautuminen, evästeet

[Linkki harjoituksiin EX-07]https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/tree/main/EX-07()

1. Muokkaa albumikokoelmasovellus hyödyntämään istuntoja kirjautumisessa (ja uloskirjautumisessa). Voit käyttää passport-local -toiminnallisuutta kuten esimerkeissä tai rakentaa toisen toteutuksen.
- Tein tehtäviä kaverin kanssa yhdessä. Alussa ei meinannut onnistua, mutta kaverin avustuksella piäisi toimia niin kuin pitää eli 7/7 pistettä [7p]

2. Lisää sovellukseen käyttäjäroolit, jotta pääkäyttäjä voi suorittaa CRUD-operaatioita kaikille lisätyille albumeille ja käyttäjille. Tavallisten käyttäjien tulisi nähdä ainoastaan omat albumit (myös luoda ja poistaa), joten jonkinlainen omistajuuden tarkistus (accessed resource userID vs request userID) on todennäköisesti tarpeen. [8p]
- Tässä kanssa sama homma kuin edellisessä, piti tehdä pari kertaa uudestaan että sain toimimaan ja äkkäsin että mitä pitää muutella että toimii. Tarkistin kaverin kanssa, niin pitäisi olla ok. 8/8 pistettä.

Harjoituksista 7 yhteensä 15/15 pistettä.


Kaikki tehdyt pisteet muokattu tämän tiedoston alkuun.

--------------------------------------------------------------------------------------------------------------------------------------
Harjoitukset 8 - Testaus, sovelluksen julkaisu
https://gitlab.labranet.jamk.fi/AA4495/ttc8430-3002/-/tree/main/EX-08

Kirjoita GET-metodille testi kohteeseen "/api/albums", joka tarkistaa tietokannassasi olevien albumien tarkan määrän. Alusta testitietokanta ensin testidatalla ja muista käyttää testitietokantaa tuotantotietokannan sijaan. [3p]

- Tämä mielestäni toimii niin kuin pitää, 3pistettä.

Kirjoita testi varmistaaksesi, että POST-metodin sisältämän albumin lisääminen toimii odotetulla tavalla. Albumien määrän pitäisi kasvaa ainakin yhdellä. [4p]

- tämä toimii, gitin tehtävän kansiossa kuvakaappauksia. 4 pistettä.

Lisää testi albumin poistolle, joka tarkistaa poiston onnistumisen. [4p]

- tämä toimii, gitissä myös tästä kuvakaappauksia. 4 pistettä.

Julkaise sovellus valitsemassasi palvelussa. Voit hyödyntää mitä tahansa opintojaksolla käsiteltyä palvelua, voit myös valita käyttämäsi palvelun. [8p]

- tämän tehtävän jätin tekemättä, koska aika ei riittänyt ja olen sairaana. 0 pistettä.



Näistä tehtävistä tehty 11/19 pistettä. Koko kurssilta tehty 90/153 eli 58,82%.

