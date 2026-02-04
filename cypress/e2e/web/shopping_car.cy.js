describe('Shopping car - Demoblaze', ()=>{
    it('Complete shopping item demoblaze flow', () => {
        
        //Go to website
        cy.visit('https://www.demoblaze.com')

        //Find and item and add to shopping cart
        cy.contains('Iphone 6 32gb').click();
        cy.contains('Add to cart').click();
        cy.on('window:alert',(text)=>{
            expect(text).to.contains('Product added');
        })

        //Go back to Home Page
        cy.contains('Home').click();

        //Add new product
        cy.contains('Nexus 6').click();
        cy.contains('Add to cart').click();        
        cy.on('window:alert',(text)=>{
            expect(text).to.contains('Product added');
        })

        //Go to shopping cart
        cy.contains('Cart').click();
        cy.get('#tbodyid tr').should('have.length.at.least', 1);        
        
        //purchase
        cy.contains('Place Order').click();

        //Complete Form customer
        cy.get('#name').type('User Testing');
        cy.get('#country').type('Honduras');
        cy.get('#city').type('San Pedro Sula');
        cy.get('#card').type('99999');
        cy.get('#month').type('02');
        cy.get('#year').type('2026');

        cy.contains('Purchase').click();
        cy.contains('Thank you for your purchase').should('be.visible');

        cy.contains('OK').click();
    });
})