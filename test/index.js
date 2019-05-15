'use strict'

const { keys, forEach } = require('lodash')
const test = require('ava')

const topSites = require('..')

test('list is valid', t => {
  forEach(topSites, topSite => {
    t.deepEqual(keys(topSite), [
      'rank',
      'rootDomain',
      'linkingRootDomains',
      'domainAuthority'
    ])
    t.is(typeof topSite.rank, 'number')
    t.is(typeof topSite.rootDomain, 'string')
    t.is(typeof topSite.linkingRootDomains, 'number')
    t.is(typeof topSite.domainAuthority, 'number')
  })
})
