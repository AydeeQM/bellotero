import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import customers from '../redux/modules/customers'
import calculator from '../redux/modules/calculator'
import range from '../redux/modules/calculator/rangeCalculator'

const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const rootReducer = combineReducers({
  customers,
  calculator,
  range
})

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
