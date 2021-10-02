describe('Task Planner Test', () => {
    beforeEach(() => {
        
    })

    it('Successfully loads', () => {
        cy.visit('/');
    })

    it('Sets auth in localStorage when logging in via form submission', function() {
        cy.get('input[name=username]').type("janedoe");

        // {enter} causes the form to submit
        cy.get('input[name=password]').type(`fluffy{enter}`);
    })


    it('Important list is displayed', () => {
        cy.contains('Important').click();

        cy.get('.task-list-title').contains('Important');
    })

    it('Task is marked as important', () => {
        cy.get('.important-toggle-button:first').click();
    })

    it('Creates new list', () => {
        cy.get('.new-list-button').click();

        cy.get('.task-list-title').contains('Untitled list');
    })

    it('Add new task to Today list', () => {
        cy.contains('Today').click();

        cy.get('input[name=add_task]').type(`Clean the kitchen{enter}`);

        cy.get('.task-text:last').contains('Clean the kitchen', { matchCase: true });
    })

    it('Delete task from Today list', () => {
        cy.contains('All Tasks').click();

        cy.get('.task-text').contains('Clean the kitchen', { matchCase: true }).parent().parent().get('.delete-task-button:last').click();;
    })

    // axe
    // .run()
    // .then(results => {
    //     if (results.violations.length) {
    //     throw new Error('Accessibility issues found');
    //     }
    // })
    // .catch(err => {
    //     console.error('Something bad happened:', err.message);
    // });
})