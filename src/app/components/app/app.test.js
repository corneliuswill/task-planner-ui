import React from 'react';

import { Provider } from 'react-redux'
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";

import App from './app';

const mockStore = configureStore();
let initialState = {};
let store = mockStore(initialState);

configure({ adapter: new Adapter() });

describe('App component tests', function() {

  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  });

});

