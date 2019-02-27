# Nuxt Weather PWA

I decide to use the [Nuxt](https://nuxtjs.org/guide)
and document my own workflow process to do it. Thanks to open source documentation ( my words can not express my huge humble gratitute and in the near future i would like to help aswell ).

The app is simple (as every app should be, following the [**KISS**](https://en.wikipedia.org/wiki/KISS_principle) principle ).

Given an array of ( location-name , postal-code ) and show current time & weather

# 1. User Story

As a **user** i want to **see** the **current time** and **weather** when i click on the map

It's actually pretty simple. I'm gonna label as UserStory #1

# 2. Data Design

Well i know it's overkill, but it also help to define the goal.

```Typescript
interface Location {
    locationName: string;
    postalCode: string;
}

interface Forecast {
    currentTime: string;
    weather: string;
}
```

# 3. UX/UI

I made [UX/UI](https://www.figma.com/proto/FJPtBEA5w9kSvpLdnK8xF7hV/Untitled?node-id=0%3A1&scaling=scale-down&redirected=1) using Figma, a very powerful collaborative tool for designer & developers.
