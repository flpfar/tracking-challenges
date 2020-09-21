import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {
  render, screen, cleanup, act,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Profile from '../containers/Profile';

const mockStore = configureStore([]);
const initialReduxState = {
  userData: {
    user: {
      name: 'User',
      email: 'user@user.com',
      daily_goal: 4,
      total_working_days: 6,
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

  test('shows dates and daily totals', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('user@user.com')).toBeInTheDocument();
    expect(screen.getByText('log out')).toBeInTheDocument();
    expect(screen.getByText('Days worked:')).toBeInTheDocument();
    expect(screen.getByText(/^6$/)).toBeInTheDocument();
    expect(screen.getByText('Daily goal:')).toBeInTheDocument();
    expect(screen.getByText(/^4$/)).toBeInTheDocument();
    expect(screen.getByText('Total challenges:')).toBeInTheDocument();
    expect(screen.getByText(/^22$/)).toBeInTheDocument();
    expect(screen.getByText('Set goal')).toBeDisabled();
  });

  test('increases daily goal by pressing +', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );
    const plusBtn = screen.getByText('+');

    act(() => {
      userEvent.click(plusBtn);
    });
    act(() => {
      userEvent.click(plusBtn);
    });
    act(() => {
      userEvent.click(plusBtn);
    });

    expect(screen.getByDisplayValue(/^7$/)).toBeInTheDocument();
    expect(screen.getByText('Set goal')).toBeEnabled();
  });

  test('decreases daily goal by pressing - and disables it when daily goal is 1', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );
    const subBtn = screen.getByText('-');

    act(() => {
      userEvent.click(subBtn);
    });
    act(() => {
      userEvent.click(subBtn);
    });
    act(() => {
      userEvent.click(subBtn);
    });

    expect(screen.getByDisplayValue(/^1$/)).toBeInTheDocument();
    expect(screen.getByText('Set goal')).toBeEnabled();
    expect(subBtn).toBeDisabled();
  });
});
