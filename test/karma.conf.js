const fs = require('fs')
const webpackConfig = require('../webpack.conf')

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = config => {
  config.set({
    files: [ './index.js' ],
    browsers: [ 'ChromeHeadlessWithoutSandbox' ],
    customLaunchers: {
      ChromeHeadlessWithoutSandbox: {
        base: 'ChromeHeadless',
        flags: [ '--no-sandbox' ],
      },
    },
    preprocessors: {
      './index.js': [ 'webpack', 'sourcemap' ],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    frameworks: [ 'jasmine' ],
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'html', subdir: '.' },
        { type: 'text' },
      ],
    },
  })
}
