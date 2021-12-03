# Aryo's Blog

This project is the result of learning Next.js, Tailwind CSS, GraphQL, and GraphCMS from youtube with the title [Build and Deploy THE BEST Modern Blog App with React | GraphQL, NextJS, Tailwind CSS](https://www.youtube.com/watch?v=HYv55DhgTuA) that was created by [Javascript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A) Channel.

## Demo

https://nextjs-graphcms-blog-by-aryo.vercel.app

## Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [GraphCMS](https://graphcms.com)
- [GraphQL](https://graphql.org)


## How to Use 

### 1. Clone repository then Install Dependencies

- ```bash
  git clone 
  cd nextjs-graphcms-blog
  npm instal # or use yarn 
  cp .env.local.example .env.local 
  ```

### 2. Set GraphCMS Schema and API Endpoint and Key

- Make a new account in GraphCMS (if you haven't made one).
- Create a new blank Project.
- Create the Schema, Model, and etc.
- Get API endpoint and API Key, then add it to `.env.local` file.

> See the [tutorial](https://www.youtube.com/watch?v=HYv55DhgTuA&t=467s) for reference on how to create a new project in GraphCMS.

### 3. Run Locally

- Start the project with ` npm run dev ` then go to http://localhost:3000 

---

This project initialized using [Next.js + Tailwind CSS Example](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss).
