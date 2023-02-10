import Reducer, { allCoins } from '../redux/home-reducer';

describe('Test for Coin Reducer and actions', () => {
  it('Test for default initial states ', () => {
    expect(Reducer(undefined, allCoins)).toEqual([]);
  });

  it('Test for all coins states ', () => {
    expect(Reducer([1, 2, 3, 4, 5], allCoins())).toEqual([1, 2, 3, 4, 5]);
  });
});
