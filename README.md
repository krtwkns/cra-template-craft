# cra-template-craft

craft is CRA template powered by [Create React App](https://github.com/facebook/create-react-app).

# Description

Because most engineers are lazy to do the same thing, craft is made to overcome laziness. Just write command and add some code, then the CRA project and their config are ready

# Usage

## Install App

`use yarn`

```
npx create-react-app [App Name] --template craft
```

`use npx`

```
yarn create react-app [App Name] --template craft
```

## Setup Config

Add this config to `package.json`

```
  "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-react-app": "^5.2.0",
    "eslint-plugin-import": "^2.20.1",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.2",
    "eslint-plugin-react": "^7.18.3",
    "eslint-plugin-react-hooks": "^1.7.0",
    "prettier": "^1.19.1",
    "redux-devtools-extension": "^2.13.8"
  }
```

## Install Package

```
yarn install
```

# Poject Structure

```
src/
   ├── assets/
   ├── components/
        ├── common/
        ├── container/
        ├── layout/
        ├── scene/
   ├── constants/
   ├── redux/
        ├── actions/
        ├── reducers/
        ├── sagas/
        ├── types/
   ├── services/
   └── utils/
```

`/src/assets` Project assets

`/src/components/common` Pure React Components

`/src/components/container` React Redux Components

`/src/components/layout` Predefined Layout

`/src/components/scene` Wrap layout and container

`/src/constants` Constants which used in this project

`/src/redux` Redux Folder (Action, Reducer, Type and Saga)

`/src/services` Services which used in this project

`/src/utils` Utils Helpers
