# top-sites

![Last version](https://img.shields.io/github/tag/Kikobeats/top-sites.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/top-sites/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/top-sites)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/top-sites.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/top-sites)
[![Dependency status](https://img.shields.io/david/Kikobeats/top-sites.svg?style=flat-square)](https://david-dm.org/Kikobeats/top-sites)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/top-sites.svg?style=flat-square)](https://david-dm.org/Kikobeats/top-sites#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/top-sites.svg?style=flat-square)](https://www.npmjs.org/package/top-sites)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

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
//     "Rank": "1",
//     "URL": "facebook.com/",
//     "Linking Root Domains": "13470095",
//     "External Links": "5252559787",
//     "mozRank": "9.76",
//     "mozTrust": "9.45"
//   },
//   {
//     "Rank": "2",
//     "URL": "twitter.com/",
//     "Linking Root Domains": "9254014",
//     "External Links": "7599398722",
//     "mozRank": "9.58",
//     "mozTrust": "9.38"
//   },
//   ...
// ]
```

## License

**top-sites** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/top-sites/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/top-sites/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [@Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
