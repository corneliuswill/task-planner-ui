import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from "redux-mock-store";

import TasksPanel from  './tasks-panel';

let store;
let initialState = {};
let list, tasks;

describe("<TasksPanel/>", () => {
    beforeEach(() => {
        const mockStore = configureStore();
        store = mockStore(initialState);
        list = {
            id: 1,
            name: "Today"
        };
        tasks=[];
    })

    it("Renders TasksPanel component correctly.", () => {
        render(<Provider store={store}><TasksPanel list={list} tasks={tasks}/></Provider>);
        expect(screen.getByText("Today")).toBeInTheDocument();
    });
});