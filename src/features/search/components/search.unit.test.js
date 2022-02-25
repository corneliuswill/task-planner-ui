// import dependencies
import React from 'react';

// import react-testing methods
import { render, screen } from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// the component to test
import Search from './search';

describe(("<Search/>"), () => {
    it("Renders Search component correctly.", () => {
        render(<Search/>);
        expect(screen.getByRole('search')).toBeInTheDocument();
    });
});