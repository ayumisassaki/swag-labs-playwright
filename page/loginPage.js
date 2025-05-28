export class LoginPage {
    constructor(page) {
        this.page = page
        this.usernameField = page.getByPlaceholder('Username')
        this.passwordField = page.getByPlaceholder('Password')
        this.loginButton = page.locator("[name='login-button']")
    }

    async loginWithUser() {
        await this.usernameField.fill('standard_user')
        await this.passwordField.fill('secret_sauce')
        await this.loginButton.click()
    }
}