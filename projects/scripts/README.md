# Script

scripts used across Projects Monorepo

## build package

```
  "scripts": {
    "build": "npm run clean && mkdir build && ts-node node_modules/scripts/build-package",
    "clean": "rimraf ./build",
  }
```
