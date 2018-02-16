'use strict'

const test = require('ava')

const topSites = require('..')

test('list is generated', t => {
  t.is(topSites.length > 0, true)
})
