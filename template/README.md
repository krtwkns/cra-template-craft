# Craft

craft is CRA template powered by [Create React App](https://github.com/facebook/create-react-app).

## Development

### Project Setup

```
git clone <repo-url>

yarn install
```

### Local Development

```
yarn start
```

### Test

```
yarn test
```

### Build for Production

```
yarn build
```

## Project Structure

```
src/
  ├── components/
  ├── constants/
  ├── containers/
  ├── pages/
  ├── redux/
      ├── actions/
      ├── reducers/
      ├── sagas/
      ├── types/
  ├── styles/
  └── utils/
```

`/src/components` React Components

`/src/constants` Constants which used in this project

`/src/containers` For fetch and redux logic

`/src/pages` Pages of each routes

`/src/redux` Redux Folder (Action, Reducer, Type and Saga)

`/src/styles` Basic styles (normalize, etc) for this App

`/src/utils` Utils Helpers
