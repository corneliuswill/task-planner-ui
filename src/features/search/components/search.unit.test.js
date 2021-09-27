import React from 'react';
import { render, screen, userEvent } from '@testing-library/react';

import Search from './search';

describe(("<Search/>"), () => {
    it("Renders Search component correctly.", () => {
        render(<Search/>);
        screen.getByRole('search', { name: /searchbox/i });
    });
});