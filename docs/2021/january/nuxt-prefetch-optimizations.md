# Nuxt prefetch optimizations

Since a month ago, i bougth the [Mastery Nuxt](https://masteringnuxt.com/)

Here they're explaining how attribute `prefetch` works in `<nuxt-link>` tag.

Nuxt use `nuxt-link` that allows to navigate in our webapp, one of the features about this, is by **default** prefetch the pages that are **linked** in the **viewport**.

If your app is already pretty busy on first pageview, like if you have a lot of javascript or network traffic, you may want to disable this feature. Don’t worry you have plenty options.

## Locally disabling

If you want to disable prefetching for a given link just add `no-prefetch` on it. 
i.e.
```js
<nuxt-link :to="`/home/${home.objectID}`" no-prefetch>
  <home-card :home="home"/>
</nuxt-link>
```

## Globally disabling

In the `nuxt.config.js` in add a property call `router` which is an object and add `prefetchLinks` to set it false, like this.

```js
router: {
  prefetchLinks: false
}
```

Now you can pick and choose which links to prefetch, this is really handy when it comes to perfomance optimizations
