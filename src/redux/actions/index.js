import searchProductByText from '../../service/API';
import { FINISH_FETCH, LOGIN_ACTION, START_FETCH } from './actionTypes';

export const loginAction = (username) => ({
  type: LOGIN_ACTION,
  username,
});

export const startFetch = () => ({
  type: START_FETCH,
});

export const finishFetch = (productsList) => ({
  type: FINISH_FETCH,
  productsList,
});

export const fetchAction = (searchText) => async (dispatch) => {
  dispatch(startFetch());
  const { results } = await searchProductByText(searchText);
  dispatch(finishFetch(results));
};
