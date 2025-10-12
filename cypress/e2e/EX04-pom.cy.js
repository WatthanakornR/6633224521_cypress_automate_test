// Add this code in cypress/e2e/login.spec.js

const { LoginPage } = require("../page-objects/login-page.js");


describe('Test login menu with valid user',()=>{
	before(()=>{
		LoginPage.visit('http://zero.webappsecurity.com/login.html')
	})
	
	it('Should fill login form',()=>{
		LoginPage.fillUsername('username')
		LoginPage.fillPassword('password')
		LoginPage.clickSubmit()
	
	})
})


describe('Test login menu with invalid user',()=>{
	before(()=>{
		LoginPage.visit('http://zero.webappsecurity.com/login.html')
	})
	
	it('Should fill login form',()=>{
		LoginPage.fillUsername('notusername')
		LoginPage.fillPassword('notpassword')
		LoginPage.clickSubmit()
	
	})
})