
const testdata= JSON.parse(JSON.stringify(require("../testdata.json")))

export class LoginPage {
    constructor(page) {
        this.page = page
        this.usernameField = page.getByPlaceholder('Username')
        this.passwordField = page.getByPlaceholder('Password')
        this.loginButton = page.locator("[name='login-button']")
    }

    async loginWithUser() {
        await this.usernameField.fill(testdata.username)
        await this.passwordField.fill(testdata.password)
        await this.loginButton.click()
    }
}