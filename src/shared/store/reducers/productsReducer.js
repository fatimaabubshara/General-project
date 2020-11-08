import { GET_PRODUCTS, REMOVE_CONTACT } from "../actions/productsAction";
import { getProducts } from "../selectors/productsSelector";

const initState = {
  data: [],
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:

      debugger;
      //debugger;

      return {
        ...state,
        data: action.payload,
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        data: alert(';;;;;;;'),
      };
      //return [...state.filter(a=>a.id !== id)]


    default:
      return state;
  }
};

export default productsReducer;
