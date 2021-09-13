import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";

import Task from './task';

describe('Task', function() {
    const onClick = jest.fn();
    it('renders a task component', function() {
        act(() => {
            render(<Provider><Task id={"abc123"} text="Hello World!" isComplete={false} isImportant={false} onClick={onClick}/></Provider>)
        });
    });
});