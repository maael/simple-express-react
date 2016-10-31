# simple-express-react


[![Build Status](https://img.shields.io/travis/maael/simple-express-react.svg?style=flat-square)](https://travis-ci.org/maael/simple-express-react)
[![Code Climate](https://img.shields.io/codeclimate/github/maael/simple-express-react.svg?style=flat-square)](https://codeclimate.com/github/maael/simple-express-react)

This project is a template containing -
  - [express](https://www.npmjs.com/package/express)
    - [body-parser](https://www.npmjs.com/package/body-parser)
    - [cors](https://www.npmjs.com/package/cors)
    - [dotenv](https://www.npmjs.com/package/dotenv)
    - [morgan](https://www.npmjs.com/package/morgan)
  - [babel](https://www.npmjs.com/package/babel-core)
    - [es2015](https://www.npmjs.com/package/babel-preset-es2015)
    - [react](https://www.npmjs.com/package/babel-preset-react)
  - [webpack](https://www.npmjs.com/package/webpack)
    - [hot-reloading dev config](https://www.npmjs.com/package/webpack-dev-server)
    - minimized prod config using `webpack.optimize.UglifyJsPlugin`
  - [react](https://www.npmjs.com/package/react)
    - [react-router](https://www.npmjs.com/package/react-router)
  - [standard linting](https://www.npmjs.com/package/standard)
    - [snazzy output](https://www.npmjs.com/package/snazzy)
  - [husky](https://www.npmjs.com/package/standard) to run linting and tests prepush

## Included modules

### 8 Dependencies
```
  "dependencies": {
    "body-parser": "^1.15.2",
    "cors": "^2.8.1",
    "dotenv": "^2.0.0",
    "express": "^4.14.0",
    "morgan": "^1.7.0",
    "react": "^15.3.1",
    "react-dom": "^15.3.1",
    "react-router": "^2.8.1"
  }
```

### 10 Dev dependencies
```
  "devDependencies": {
    "babel-core": "^6.14.0",
    "babel-loader": "^6.2.5",
    "babel-preset-es2015": "^6.14.0",
    "babel-preset-react": "^6.11.1",
    "eslint": "^3.5.0",
    "http-proxy": "^1.15.1",
    "husky": "^0.11.7",
    "snazzy": "^5.0.0",
    "webpack": "^1.13.2",
    "webpack-dev-server": "^1.15.2"
  }
```

## Setup
1. Clone the project with `git clone https://github.com/maael/simple-express-react.git`
2. Check node version is 6.0.0+. If not swap node version.
3. Check npm version is 2+. 3 can be a bit slow. (TODO: Yarn?)
4. `npm install`

You should now be able to run `npm start` and see *Main Application* at `http://localhost:4242/` in your browser.

## Included npm scripts
- `npm start` - Start the server and webpack dev server if in development.
- `npm run lint` - Lint the code with snazzy (a pretty standard linter).
- `npm run build` - Generate the development webpack bundle.
- `npm run build-prod` - Generate the production webpack bundle and source map.
- `npm run clean` - Remove any webpack bundle and source maps.
