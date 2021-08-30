import { FINISH_FETCH, START_FETCH } from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: false,
  productsList: [],
  outraChave: 'aqui',
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCH:
      return { ...state, loading: true };

    case FINISH_FETCH:
      const { productsList } = action;
      return {
        ...state,
        productsList,
        loading: false,
      };

    default:
      return state;
  }
};

export default productsReducer;
