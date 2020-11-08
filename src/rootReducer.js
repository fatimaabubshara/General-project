import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import productsReducer from "./shared/store/reducers/productsReducer";

const rootReducer = combineReducers({
  form: formReducer,
  products: productsReducer
});

export default rootReducer;
