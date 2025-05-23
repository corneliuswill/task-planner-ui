// import dependencies
import React from 'react'

// import react-testing methods
import { render, screen } from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'

// the component to test
import Header from '../header';

describe("<Header/>", () => {
    it("Renders Header component correctly", () => {
        render(<Header title="Task Planner" />);
        expect(screen.getByText("Task Planner")).toBeInTheDocument();
    });
});