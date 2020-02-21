// Libs
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import reducer from './rootReducer';
import saga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware, logger));
    }
    return applyMiddleware(...middleware);
};

const configureStore = () => {
    const store = createStore(reducer, bindMiddleware([sagaMiddleware]));
    store.sagaTask = sagaMiddleware.run(saga);
    return store;
};

export default configureStore();
