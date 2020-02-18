
# Craft

craft-cra (crafting and building cra for me and other) [Create React App](https://github.com/facebook/create-react-app).

## Development

### Project Setup
```
git clone http://github.com/kretawiweka/craft-cra

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
