'use strict'

const { keys, forEach } = require('lodash')
const test = require('ava')

const topSites = require('..')

test('list is valid', t => {
  forEach(topSites, topSite => {
    t.deepEqual(keys(topSite), [
      'rank',
      'url',
      'linkingRootDomains',
      'externalLinks',
      'mozRank',
      'mozTrust'
    ])
    t.is(typeof topSite.rank, 'number')
    t.is(typeof topSite.url, 'string')
    t.is(typeof topSite.linkingRootDomains, 'number')
    t.is(typeof topSite.externalLinks, 'number')
    t.is(typeof topSite.mozRank, 'number')
    t.is(typeof topSite.mozTrust, 'number')
  })
})
