# Vue-test-utils best practices for DOM finding & Events 

When writing unit test, is helpful to imagine how the actual end user is gonna interact with our component and then we can design the test to replicate that behaviour.

How do we find DOM elements for testing our component?, here are some of the best practices from [VueMastery](https://www.vuemastery.com) when finding it.

Imagine that we use an Id or Class attribute to find a DOM element, but then down the road a designer or developer changes the id or the class of that element, so there’s a better, more future proof way to find elements.

A solution looks like this, for example with a button

In our component
```html
<button data-test-id=”name-button” … ></button>
```

Give our element a test specific, ID. Now in order to find that we’ll use this.

In our spec file
```ts
const button = wrapper.find(‘[data-test-id=”name-button”]’)
```

Setting things up this way helps us to decouple the test from the implementation details of that component.

Now we don’t need to worry about refactoring our test, just because a designer changes some class name around.
This is a recommended practice for production level tests.

Ok, but what about trigger events?. Again good practices from VueMastery, is by using this.

```ts
wrapper.trigger(‘submit’)
```
Writing in this way allow us to decouple the test from the implementation component’s detail. Again future-proofing our test. 