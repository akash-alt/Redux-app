import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(reducers,
    {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;

// 5th step
// here we create store for storing all data