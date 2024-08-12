# top-sites

![Last version](https://img.shields.io/github/tag/Kikobeats/top-sites.svg?style=flat-square)
[![NPM Status](https://img.shields.io/npm/dm/top-sites.svg?style=flat-square)](https://www.npmjs.org/package/top-sites)

> List of the top 500 domains and pages on the web. Based on [Moz Top 500](https://moz.com/top500).

## Install

```bash
$ npm install top-sites --save
```

## Usage

```js
const topSites = require('top-sites')
console.log(topSites)

// [
//   {
//     "rank": 1,
//     "url": "facebook.com/",
//     "linkingRootDomains": 14262527,
//     "externalLinks": 3737324796,
//     "mozRank": 9.8,
//     "mozTrust": 9.5
//   },
//   {
//     "rank": 2,
//     "url": "twitter.com/",
//     "linkingRootDomains": 9729491,
//     "externalLinks": 5342834850,
//     "mozRank": 9.64,
//     "mozTrust": 9.44
//   },
//   {
//     "rank": 3,
//     "url": "google.com/",
//     "linkingRootDomains": 8080905,
//     "externalLinks": 2262382094,
//     "mozRank": 9.52,
//     "mozTrust": 9.35
//   },
//   …
// ]
```

## Related

- [tranco-list.eu](https://tranco-list.eu) – A Research-Oriented Top Sites Ranking Hardened Against Manipulation.

## License

**top-sites** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/top-sites/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/top-sites/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [@Kiko Beats](https://github.com/Kikobeats) · X [@Kikobeats](https://x.com/Kikobeats)
