import { render, screen } from "@testing-library/react";

import Header from './header';

describe("<Header/>", () => {
    it("Renders Header component correctly", () => {
        render(<Header title="Task Planner" />);
        expect(screen.getByText("Task Planner")).toBeInTheDocument();
    });
});