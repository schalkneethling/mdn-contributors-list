# mdn-contributors-list

The contributors list as a React component

## Thoughts on the component

A while back Kadir had a look at some of the reasons wiki pages was performing so poorly, even after some of the performance work we have done. One piece that seemed to really have an affect on some pages was the "Contributors to this page" section.

On a page such as the (Array page)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array] this can add up to a 133 HTML nodes that needs to be rendered during the initial load. There really is no user benefit to this list other that curiosity perhaps.

This made me wonder whether we could make this a use case for code splitting/lazy loading. Surely there is an end point we can call that will return a JSON `Array` of the users in a form such as:

```
[
  {
    "name": "urty5656",
    "url": "/en-US/profiles/urty5656"
  },
  {
    "name": "ramiy",
    "url": "/en-US/profiles/ramiy"
  }
  ...
]
```

On the initial load of a page, we can then simply display the following:

![screenshot of initial load of contributors list](https://duaw26jehqd4r.cloudfront.net/items/400E1s2f2B1D0E333h0m/Screenshot%202019-02-04%20at%2019.00.14.png?X-CloudApp-Visitor-Id=3059136&v=ffe2233c)

Only when a user clicks on the button, do we load the data, HTML and JS required to show the full contributors list.

![screenshot of contributors list](https://duaw26jehqd4r.cloudfront.net/items/2o2i0p1R2E3H291W072e/Screenshot%202019-02-05%20at%2015.49.39.png?X-CloudApp-Visitor-Id=3059136&v=00569beb)

While in this case it might not add that much benefit, for other more complicated components, we can even ofload the required CSS(using Emotion), until the rest of the component is rendered. This will further improve the initial load.
