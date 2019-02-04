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

On the initial load of a page, we can then simple have the following displayed.
