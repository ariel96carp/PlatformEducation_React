import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { persistStore } from "redux-persist"
import appReducer from "./reducers"

const store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)

export default store
