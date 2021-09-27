import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";

import Main from './main';
import { Sidebar } from '../../../features/sidebar';
import { TasksPanel } from '../../../features/task'

let store;
let initialState = { loadingBar: {} };

describe("<Main/>", () => {
    beforeEach(() => {
        const mockStore = configureStore();
        store = mockStore(initialState);
    })

    it("Renders Main component correctly", () => {
        const onClick = jest.fn();
        render(<Provider store={store}><Main sidebar={Sidebar} tasksPanel={TasksPanel} onClickCallback={onClick}/></Provider>);
    });
});