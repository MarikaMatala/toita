# WIMMA Lab – Next.js Test

## 🇫🇮 Suomeksi

Tässä kansiossa on WIMMA Lab -projektin yhteydessä tehty Next.js-kehitykseen liittyvä testi ja harjoitustyö.

Työssä on tutustuttu Next.js-sovelluskehitykseen ja sen hyödyntämiseen web-sovellusten toteuttamisessa. Harjoitus liittyy WIMMA Lab -ympäristössä tehtyyn käytännön ohjelmistokehitykseen ja täydentää muuta WIMMA Lab -projektin aikana kertynyttä web-kehityksen osaamista.

Kansio toimii työnäytteenä Next.js- ja web-kehitykseen liittyvästä osaamisestani.

### Teknologiat

- Next.js
- React
- JavaScript
- Web-kehitys
- Git / GitLab

### Osaamista

- Next.js-sovelluskehitys
- React-kehitys
- Frontend-kehitys
- Web-sovellusten toteuttaminen
- Komponenttipohjainen kehitys
- Ohjelmointi
- Git ja versionhallinta

---

## 🇬🇧 English

This folder contains a Next.js development test and exercise completed in connection with the WIMMA Lab project.

The work provided practical experience with Next.js application development and its use in building web applications. The exercise is part of the practical software development experience gained in the WIMMA Lab environment and complements my other web development work from the project.

This folder serves as a work sample demonstrating my experience with Next.js and web development.

### Technologies

- Next.js
- React
- JavaScript
- Web development
- Git / GitLab

### Skills

- Next.js application development
- React development
- Frontend development
- Web application development
- Component-based development
- Programming
- Git and version control



# [https://www.wimmalab.org/](https://www.wimmalab.org/)
![Screenshot of students page](/public/assets/screenshot-students-page.png)

## Next.js With Docker

> This project uses Docker with Next.js based on the [deployment documentation](https://nextjs.org/docs/deployment#docker-image), built on top of [with-docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker).


## Setup

```bash
yarn install
```


## Running locally

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.


## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t nextjs-docker .`.
1. Run your container: `docker run -p 3000:3000 nextjs-docker`.

