'use strict'

const nrExternals = require('newrelic/load-externals')

module.exports = {
  serverExternalPackages: ['newrelic'],

  torbopack: (config) => {
    nrExternals(config)
    return config
  }
}
