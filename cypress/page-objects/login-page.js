// Add this code in cypress/page-objects/Logiage.js

class LoginPage {

	static usernameInput = '#user_login'
	static passwordInput = '#user_password'
	static submitButton = 'input[name="submit"]'

	static visit(url) {
		cy.visit(url)
	}

	static fillUsername(username) {
		cy.get(this.usernameInput).type(username)
	}

	static fillPassword(password) {
		cy.get(this.passwordInput).type(password)
	}

	static clickSubmit() {
		cy.get(this.submitButton).click()
	}
}
module.exports = { LoginPage };