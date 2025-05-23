import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { Provider } from 'react-redux';

import Task from './task';
import { createTestStore } from '../../../../utils/redux-utils';

let store;

describe('<Task/>', function() {
    beforeEach(() => {
        store = createTestStore();
        const onClick = jest.fn();
        render(<Provider store={store}><Task id={"abc123"} text="Hello World!" isComplete={false} isImportant={false} onClick={onClick}/></Provider>);
    });

    it('renders a Task component', function() {
        expect(screen.getByText('Hello World!')).toBeInTheDocument();
    });

    it('task is unimportant', function() {
        expect(screen.getByTitle('Unimportant')).toBeInTheDocument();
    });

    it('task is incomplete', function() {
        expect(screen.getByLabelText('Complete task')).toBeInTheDocument();
    });
});