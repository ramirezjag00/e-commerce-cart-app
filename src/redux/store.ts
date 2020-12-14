import { createStore, applyMiddleware, Middleware } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '@store/reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares: Middleware[] = [thunk]

if (__DEV__) {
  middlewares.push(logger)
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store as never)

export { store, persistor }
