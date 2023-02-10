import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../redux/configure';
import Home from '../pages/Home/Home';

describe('Testing page deployment', () => {
  test('Test For Home Page to check if it is rendering or not', () => {
    const output = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(output).toMatchSnapshot();
  });
});
