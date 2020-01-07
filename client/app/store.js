import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger'
import loggingMiddleware from 'redux-logger'
import rootReducer from "./reducers";
// import thunk from 'redux-thunk'
import thunkMiddleware from 'redux-thunk'


// const store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(logger, thunk))
// )
export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      loggingMiddleware
    ))
  )

// export default store;