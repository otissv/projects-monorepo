module.exports = {
  root: true,
  extends: ["custom"],
  "parser": "@typescript-eslint/parser",
  "processor": "disable/disable",
  "plugins": [
    "@typescript-eslint",
    "functional",
    "prettier",
    "disable"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:functional/recommended"
  ],
  "overrides": [
    {
      "files": [
        "**/*.test.js"
      ],
      "settings": {
        "disable/plugins": [
          "functional"
        ]
      }
    }
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {},
      {
        "usePrettierrc": true
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "explicit-module-boundary-types": "off",
    "functional/functional-parameters": "off",
    "functional/no-conditional-statement": [
      "error",
      {
        "allowReturningBranches": true
      }
    ]
  }
}

