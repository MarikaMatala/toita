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

