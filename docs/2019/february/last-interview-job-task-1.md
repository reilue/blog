# Last interview job task (Part 1)

My last interview job-task was to create such small app using [Typescript](https://www.typescriptlang.org/docs/home.html) (A super-set of JS) in [node.js](https://nodejs.org/en/)

I decide to use the [Typescript Vue Starter](https://github.com/Microsoft/TypeScript-Vue-Starter#typescript-vue-starter)
and document my own workflow process to do it. Thanks to multiple reliable & open source documentation ( my words can not express my huge humble gratitute and in the near future i would like to help aswell ). Such as:

- [Node Best Practices](nodebestpractices#1-project-structure-practices)
- [TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter)
- [Typescript Node.js from basarat](https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html)
- [Open Weather](https://openweathermap.org/current)
- [Timezone API Google Service](https://developers.google.com/maps/documentation/timezone/start)

The app is simple (as every app should be, following the [**KISS**](https://en.wikipedia.org/wiki/KISS_principle) principle ).

Given an array of ( location-name , postal-code ) show current time & weather

## 1. Init project

Create a new repo, [TimeForecast-OBS](https://github.com/reilue/TimeForecast-OBS) in Github.

### Set Git (Global information tracker or Distributed Version Control )

```bash
git init
```

skip this part if you configurate you git

```bash
git config --global user.email "your_email@example.com"
```

optional: define alias to save some keystrokes :+1:

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

add remote repo URL

```bash
git remote add origin git@github.com:reilue/TimeForecast-OBS.git
```

### Set yarn

```bash
yarn init
```

Later add Typescript and @types/node.

```bash
yarn add typescript --dev
yarn add @types/node --dev
npx tsc --init --rootDir src --outDir dist --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
echo "/node_modules" > .gitignore
mkdir ./dist
mkdir -p ./src/components
```

Ok **@types/node** it's just a contract or node API interface to expose and consume it easily.

**npx** is a command to run binary file downloaded, it's super helpful to create in this case tsconfig.json.

add a .gitignore file with "/node_modules" to tell git don't track any in file in it.

### Optional: Live compile & run

```bash
yarn add ts-node --dev
yarn add nodemon --dev
```

**ts-node** is used to live compile & run in node
**nodemon** will invoke **ts-node** whenever a file is changed

and add this snippet to `script` in the package.json.

```json
  "scripts": {
    "start": "yarn run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
  }
```

great one last step create two file

./src/components/forecast.ts

```Typescript
export module Forecast {
  console.log("module Forecast");
}
```

./src/index.ts

```Typescript
import { Forecast } from "./components/forecast/forecast";
console.log(Forecast);
```

in your terminal type `yarn start` and Voilá. You'll see the "module Forecast" message. :sunglasses:

If you follow me, damn dude, you're awesome cause i know it's freaking tedious, bunch of concept to learn, but what i can tell you is, dedicate your time fully focus to:

- **learn** once,
- **automatize**,
- **update** and
- **adapt** your workflow

Repeat

In the next post i'll create this small app.
