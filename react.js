module.exports = {
    "parser": "babel-eslint",
    "extends": "./index.js",
    "rules": {
      "react/jsx-boolean-value": 1,
      "jsx-quotes": [1, "prefer-single"],
      "react/jsx-no-undef": 1,
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1,
      "react/no-did-mount-set-state": 1,
      "react/no-did-update-set-state": 1,
      "react/no-multi-comp": 1,
      "react/no-unknown-property": 1,
      "react/prop-types": 1,
      "react/react-in-jsx-scope": 1,
      "react/self-closing-comp": 1,
      "react/wrap-multilines": 1
    },
    "ecmaFeatures": {
        "jsx": true,
        "spread": true,
        "restParams": true
    },
    "plugins": [
        "react"
    ]
};
