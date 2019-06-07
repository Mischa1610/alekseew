import { getGreeting } from '../support/app.po';

describe('me', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to me!');
  });
});
