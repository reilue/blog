# Last interview job task 2 (Part 2)

Previously we set up the workflow for node.js with typescript, which is totally awesome use the JS features of the future in our development.

OK, then let's get thing done.

## 2. Data Design

Create a two files which will contains the models and define it with interfaces.

./src/models/location.ts

```Typescript
interface Location {
    locationName: string;
    postalCode: string;
}
```

./src/models/forecast.ts

```Typescript
interface Forecast {
    currentTime: string;
    weather: string;
}
```

## 3. Connect with the Openweather API

So here comes the geek exciting part.

I've create a folder & models for req and res from [Open Weather API](https://openweathermap.org/current#cities)

./src/models/req/weatherZipCode.ts

```Typescript
export interface ReqWeatherZipCode {
  zipCode: string;
  countryCode: string;
}
```

and in our component forecast.ts

```Typescript
import { Location } from "../models/location";
import { Forecast } from "../models/forecast";
import { ReqWeatherZipCode } from "../models/req/weatherZipCode";
import { get } from "https";
import { IncomingMessage } from "http";

function kelvinToCelsius(temp: string) {
  return (parseInt(temp, 10) - 273.15).toString();
}

const getWeatherByZipCode = async (code: ReqWeatherZipCode) => {
  return new Promise((resolve, reject) => {
    const req = get(
      `https://samples.openweathermap.org/data/2.5/weather?zip=${
        code.zipCode
      },${code.countryCode}&appid=b6907d289e10d714a6e88b30761fae22`,
      (res: IncomingMessage) => {
        if (res.statusCode) {
          if (res.statusCode < 200 || res.statusCode >= 300) {
            return reject(new Error("error " + res.statusCode));
          }
        }
        let body: any = {};
        res.on("data", data => {
          body = JSON.parse(Buffer.from(data).toString());
        });
        res.on("end", function() {
          return resolve(body);
        });
      }
    );
    req.on("error", function(err) {
      reject(err);
    });
    req.end();
  });
};

export async function getForecast(location?: Location): Promise<Forecast> {
  return await getWeatherByZipCode({
    zipCode: "94040",
    countryCode: "us"
  }).then((data: any) => {
    const forecast: Forecast = {
      currentTime: Date.now().toString(),
      weather: kelvinToCelsius(data.main.temp)
    };
    return forecast;
  });
}
```

By doing this i've make sure to have all things you need (dependencies) in **one single file**, which make them **easy** to **debug**, **test**, **maintain** and **improved**. Also following the [uncle-bob](https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html) and [i0natan](https://github.com/i0natan/nodebestpractices/blob/master/sections/projectstructre/breakintcomponents.md#blog-quote-so-what-does-the-architecture-of-your-application-scream) Architecture post.

> ...if you were looking at the architecture of a library, you’d likely see a grand entrance, an area
> for check-in-out clerks, reading areas, small conference rooms, and gallery after gallery capable of
> holding bookshelves for all the books in the library. That architecture would scream: Library.

**TL;DR:**

- Transform `request.get()` method to Promise-based
- Main workflow when using `request.get()` is

  - ```typescript
    res.on("data", data => {
      // data from the cable comes in and HEX array
      body = JSON.parse(Buffer.from(data).toString());
    });
    ```

  - ```typescript
    res.on("end", function() {
      return resolve(body);
    });
    ```

  - ```typescript
    req.on("error", function(err) {
      reject(err);
    });
    ```

  - ```typescript
    req.end();
    ```

In the next post i'll connect with Timezone Google Service API.
