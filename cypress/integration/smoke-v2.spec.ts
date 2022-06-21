import careersPage from '../support/pages/careers.page';
import landingPage from '../support/pages/landing.page';

// Just to demonstrate BDD-oriented approach
// It contains duplicated code, but it's more understandable
describe('Career Page test suite - BDD approach', () => {
  describe('Scenario 1', () => {
    it('When I open 10cloud landing page', () => {
      landingPage.visit();
    });

    it('And I open Careers tab', () => {
      landingPage.navigateToCareers();
      careersPage.waitForLoad();
    });

    it('Then I should see one "Senior QA Automation Engineer" position opened', () => {
      careersPage.goToOpenPositions();
      careersPage.verifyJobOfferAmount('Senior QA Automation Engineer');
    });
  });

  describe('Scenario 2', () => {
    it('When I open 10cloud landing page', () => {
      landingPage.visit();
    });

    it('And I open Careers tab', () => {
      landingPage.navigateToCareers();
      careersPage.waitForLoad();
    });

    it('And I select QA Department', () => {
      careersPage.goToOpenPositions();
      careersPage.selectDepartment('QA');
    });

    it('Then I should see QA positions have valid titles', () => {
      careersPage.verifyPositionsTitles(/QA (Engineer|Automation)/);
    });
  });
});
