import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {
  render, screen, cleanup, waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import api from '../api';

import Progress from '../containers/Progress';

jest.mock('../api');

api.get.mockResolvedValue({
  data: {
    days: [
      {
        date: '2020-09-21',
        reviewed: 12,
        learned: 2,
      },
      {
        date: '2020-09-20',
        reviewed: 4,
        learned: 5,
      },
    ],
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

describe('Progress Page', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialReduxState);
  });

  afterAll(cleanup);

  test('shows dates and daily totals', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Progress />
        </BrowserRouter>
      </Provider>,
    );

    await waitForElement(() => screen.getByText('Last activity'));
    expect(screen.getByText('21 September 2020')).toBeInTheDocument();
    expect(screen.getByText(/Learned: 2$/)).toBeInTheDocument();
    expect(screen.getByText(/Reviewed: 12$/)).toBeInTheDocument();
    expect(screen.getByText(/^14$/)).toBeInTheDocument();
    expect(screen.getByText('20 September 2020')).toBeInTheDocument();
    expect(screen.getByText(/Learned: 5$/)).toBeInTheDocument();
    expect(screen.getByText(/Reviewed: 4$/)).toBeInTheDocument();
    expect(screen.getByText(/^9$/)).toBeInTheDocument();
  });
});
