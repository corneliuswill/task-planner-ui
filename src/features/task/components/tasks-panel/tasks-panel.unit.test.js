import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
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
        tasks=[
            {
                "id": "wb3m1rcbu3t98qsb39iv",
                "user": "johndoe",
                "text": "File taxes",
                "timestamp": 1593832839363,
                "lists": [1, 3],
                "isComplete": false,
                "isImportant": true
             }//,
            // {
            //     "id": "fgwr7ihtkgo3tw4rgigjuz",
            //     "user": "johndoe",
            //     "text": "Walk Fluffy",
            //     "timestamp": 1593833276161,
            //     "lists": [1,3],
            //     "isComplete": false,
            //     "isImportant": false
            // },
            // {
            //     "id": "f5cfie6y7crwa6po641uso",
            //     "user": "janedoe",
            //     "text": "Replace broken floor tiles",
            //     "timestamp": 1593833348668,
            //     "lists": [1],
            //     "isComplete": false,
            //     "isImportant": false
            // }
        ];

        render(<Provider store={store}><TasksPanel list={list} tasks={tasks}/></Provider>);
    })

    it('renders TasksPanel component correctly', () => {
        expect(screen.getByText("Today")).toBeInTheDocument();
    });

    it('task is marked as completed', () => {

    });

    it('task is deleted from list', () => {

    });
});