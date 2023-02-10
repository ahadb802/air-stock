import fetchData from '../Api/api';

const ALL_COINS = 'ALL_COINS';

const Reducer = (state = [], action) => {
  switch (action.type) {
    case ALL_COINS:
      return action.coins;
    default:
      return state;
  }
};

export const allCoins = () => async (dispatch) => {
  const coins = await fetchData();
  dispatch({
    type: ALL_COINS,
    coins,
  });
};

export default Reducer;
