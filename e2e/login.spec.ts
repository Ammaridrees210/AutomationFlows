import { login, loginSelectors } from "../support/loginPO/login.page"
import test from "../Fixture/dataPage"
import { expect } from "@playwright/test";

test.describe('Login Tests',() => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });
    test('User should able to successfully log-in with valid credentials', async ({ page }) => {
        test.slow();
        await login(process.env.EMAIL, process.env.PASSWORD, page);
        await page.click(loginSelectors.userAccountDropdownSelector());
        await page.click(loginSelectors.navBarProfileIconSelector());
        expect(await page.textContent(loginSelectors.activeUserNameEmailVerifySelector())).toBe(process.env.EMAIL);
    });
    
    test('User should not be able to login with wrong credentials', async ({ page }) => {
        test.slow();
        await login(process.env.EMAIL, process.env.PASSWORD1, page);
        const CurrentUserMail = await page.textContent(loginSelectors.wrongCredentialAlterMassage());
        expect(CurrentUserMail).toBe('The Username/Password is not correct.');
    });
    
    test('User should be able to send forget password email', async ({ page }) => {
        test.slow();
        await login(process.env.EMAIL, process.env.PASSWORD1, page);
        expect(await page.textContent(loginSelectors.wrongCredentialAlterMassage())).toBe('The Username/Password is not correct.');
        await page.click(loginSelectors.ForgetPasswordHyperlink());
        expect(await page.textContent(loginSelectors.forgetPasswordSelector())).toBe('Forgot Password');
        //@ts-ignore
        await page.fill(loginSelectors.emailForgetPasswordSelector(), process.env.EMAIL);
        await page.click(loginSelectors.ClickOnResetLinkButtonSelector());
        expect(await page.textContent(loginSelectors.verificationMassageOfEmailSend())).toBe('Please Check Your Inbox');
        await page.click(loginSelectors.clickOnLoginHyperLinkSelector());
    })
    
});