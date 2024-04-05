import { expect, Page } from "@playwright/test"

export const loginSelectors = {
    loginPageVerificationSelector: (page) => { return page.getByText('Login to Account')},
    emailPlaceholderSelector: () => { return '[placeholder="Email or Username"]'},
    passwordPlaceholderSelector: () => { return '[placeholder="Your password"]'},
    loginButtonSelector: () => { return 'span:has-text("LOGIN")'},
    userAccountDropdownSelector: () => { return 'i[class="far fa-user-circle"]'},
    navBarProfileIconSelector: () => { return '[class="far fa-user-circle"]'},
    activeUserNameEmailVerifySelector: () =>{ return 'a[title="Profile"] strong'},
    logoutCurrentUserAccount: () => { return 'a[title="LogOut"]'},
    wrongCredentialAlterMassage: () => { return 'span[class="ng-star-inserted"]'},
    ForgetPasswordHyperlink: () => { return 'a[class="pull-left"]'},
    forgetPasswordSelector: () => { return 'h3'},
    forgetPasswordPlaceholder: () => { return '[placeholder="Your e-mail address or username"]'},
    emailForgetPasswordSelector: () => { return '[placeholder="Your e-mail address or username"]'},
    ClickOnResetLinkButtonSelector: () => { return 'span.mat-button-wrapper'},
    verificationMassageOfEmailSend: () => { return 'h3:has-text("Please Check Your Inbox")'},
    clickOnLoginHyperLinkSelector: () => { return 'a:has-text("Login")'}
}

export async function login(email: any, password: any, page: Page) {
    await expect(loginSelectors.loginPageVerificationSelector(page)).toBeVisible();
    await page.fill(loginSelectors.emailPlaceholderSelector(), email);
    await page.fill(loginSelectors.passwordPlaceholderSelector(), password);
    await page.click(loginSelectors.loginButtonSelector());
}

export async function logout(page: Page) {
    await page.click(loginSelectors.navBarProfileIconSelector());
    await page.click(loginSelectors.logoutCurrentUserAccount());
}



