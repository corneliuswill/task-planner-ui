import { render, screen } from '@testing-library/react';

import { MenuItem } from '../../index';

describe('MenuItem component tests', function() {
    test('component renders without crashing', () => {
        render(<MenuItem>Hello World!</MenuItem>);
        let text = screen.getByText(/Hello World!/i);
        expect(text).toBeInTheDocument();
    });
});