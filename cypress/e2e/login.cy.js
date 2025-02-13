
    describe('Проверка авторизации', function () {

        it('Проверка авторизации', function () {
           cy.visit('https://login.qa.studio/');
           cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

           cy.get('#mail').type('german@dolnikov.ru');
           cy.get('#pass').type('iLoveqastudio1');
           cy.wait(500);
           cy.get('#loginButton').click();
           cy.get('#messageHeader').contains('Авторизация прошла успешно');
           cy.get('#messageHeader').should('be.visible');
           cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           })

           

        })
        describe('Проверка авторизации', function () {
    it('Проверка авторизации', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio4');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })
    })
    describe('Проверка', function () {
    it('Проверка, что в логине есть @', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})
describe('Проверка', function () {
it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');

    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
})