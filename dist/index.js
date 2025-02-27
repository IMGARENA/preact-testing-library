'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _pure = require('./pure')

Object.keys(_pure).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return
  if (key in exports && exports[key] === _pure[key]) return
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pure[key]
    }
  })
})

// If we're running in a test runner that supports afterEach
// or teardown then we'll automatically run cleanup afterEach test
// this ensures that tests run in isolation from each other.
// If you don't like this then either import the `pure` module
// or set the PTL_SKIP_AUTO_CLEANUP env variable to 'true'.
if (!process.env.PTL_SKIP_AUTO_CLEANUP) {
  if (typeof afterEach === 'function') {
    afterEach(async () => {
      await (0, _pure.cleanup)()
    })
  } else if (typeof teardown === 'function') {
    // eslint-disable-next-line no-undef
    teardown(async () => {
      await (0, _pure.cleanup)()
    })
  }
}
