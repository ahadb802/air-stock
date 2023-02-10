import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

describe('Testing Navbar', () => {
  test('Test For Navbar to check if it is rendering or not', () => {
    const output = render(
      <BrowserRouter><Navbar /></BrowserRouter>,
    );
    expect(output).toMatchSnapshot();
  });
});
