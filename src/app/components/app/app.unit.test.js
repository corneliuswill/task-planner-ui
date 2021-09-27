import React from 'react';
import { render } from "@testing-library/react";
import { Provider } from 'react-redux'
import configureStore from "redux-mock-store";

import App from './app';


let store;

describe('<App/>', function() {
  beforeEach(() => {
    const mockStore = configureStore();
    let initialState = {};
    store = mockStore(initialState);
  });

  it('Renders App componnent correctly', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  });

});

