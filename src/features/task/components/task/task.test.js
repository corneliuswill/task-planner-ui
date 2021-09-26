import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";

import Task from './task';
import { createTestStore } from '../../../../utils/test-utils';

let store;

describe('Task', function() {
    beforeEach(() => {
        store = createTestStore();
    });

    const onClick = jest.fn();
    it('renders a task component', function() {
        act(() => {
            render(<Provider store={store}><Task id={"abc123"} text="Hello World!" isComplete={false} isImportant={false} onClick={onClick}/></Provider>)
        });
    });
});