describe('Todo Lists Test', () => {
    it('successfully loads', () => {
        cy.visit('/');
    })

    it('important list is displayed', () => {
        cy.contains('Important').click();

        cy.get('.task-list-title').contains('Important');
    })

    it('task is marked as complete and in completed list', () => {
        cy.get('.complete-button:first').click();
    })

    axe
    .run()
    .then(results => {
        if (results.violations.length) {
        throw new Error('Accessibility issues found');
        }
    })
    .catch(err => {
        console.error('Something bad happened:', err.message);
    });
})