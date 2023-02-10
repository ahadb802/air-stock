import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../redux/configure';
import Details from '../pages/Detail/Details';
import { BrowserRouter } from 'react-router-dom';


describe('Testing page deployment', () => {
  test('Test For Detail Page to check if it is rendering or not', () => {
    const output = render(
      <Provider store={store}>
        <BrowserRouter>
        <Details />
        </BrowserRouter>
      </Provider>,
    );
    expect(output).toMatchSnapshot();
  });
});
