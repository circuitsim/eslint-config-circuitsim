#  eslint-config-circuitsim
[![npm](https://img.shields.io/npm/v/eslint-config-circuitsim.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-circuitsim)
[![David](https://img.shields.io/david/dev/circuitsim/eslint-config-circuitsim.svg?style=flat-square)](https://david-dm.org/circuitsim/eslint-config-circuitsim#info=peerDependencies)

ESLint settings for CircuitSim

## How to use

`package.json`
```json
{
  "devDependencies": {
    "eslint": "^1.1.0",
    "eslint-plugin-react": "^3",
    "eslint-config-circuitsim": "^0"
  }
}
```

`.eslintrc`
```json
{
  "extends": "circuitsim/react"
}
```

See [ESLint Shareable Config docs](http://eslint.org/docs/developer-guide/shareable-configs.html).
