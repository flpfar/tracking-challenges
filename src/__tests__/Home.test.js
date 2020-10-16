import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {
  render, screen, cleanup, waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import api from '../api';

import Home from '../containers/Home';

jest.mock('../api');

api.get.mockResolvedValue({
  data: {
    day: {
      date: '2020-09-21',
      reviewed: 6,
      learned: 1,
    },
    user: {
      total_working_days: 4,
      total_challenges: 22,
    },
  },
});

const mockStore = configureStore([]);
const initialReduxState = {
  userData: {
    user: {
      name: 'user',
      email: 'user@user.com',
      daily_goal: 1,
      total_working_days: 0,
      total_challenges: 22,
    },
    loggedIn: true,
  },
};

describe('Home Page', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialReduxState);
  });

  afterAll(cleanup);

  test('shows date, number of reviewed, learned and total challenges', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    await waitForElement(() => screen.getByText('Track it'));
    expect(screen.getByText(/^1$/)).toBeInTheDocument();
    expect(screen.getByText(/^6$/)).toBeInTheDocument();
    expect(screen.getByText(/^22$/)).toBeInTheDocument();
    expect(screen.getByText('21 September 2020')).toBeInTheDocument();
  });
});
