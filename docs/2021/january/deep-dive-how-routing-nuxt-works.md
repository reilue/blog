# How does routing works in Nuxt?.

By default Nuxt underneath the hood is using `vue-router` an a convention, wherever you build your project, looks through your pages folder and generates the routes into the `.nuxt` folder. Let’s look a simple example.

![Image folder .nuxt route](http://i.imgflip.com/4tfukk.jpg)

We care most about is the import, by default Nuxt uses Webpack to lazy-load the pages for you, this is a huge performance gain, because the browser doesn’t need to load the entire site on the first hit.

Now let's create our homepage in our `pages` folder. And also we can create dynamic routes to pass data to our components using the prefix `_` just like this.

Let’s look at our `route.js` file inside the `.nuxt` folder

![Image folder .nuxt dynamic params](http://i.imgflip.com/4tfv4a.jpg)

Just by creating a file in the `pages` folder, Nuxt automatically re-generates the `router.js` file.
In the image below we look at the parameter generated.

![Image folder .nuxt dynamic segment](http://i.imgflip.com/4tfynu.jpg)

If you want to look how to [get the parameters](https://nuxtjs.org/examples/routing-dynamic-pages), check their docs.
