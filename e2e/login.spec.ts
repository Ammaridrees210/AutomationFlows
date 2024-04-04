import { login, loginSelectors } from "../support/loginPO/login.page"
import test from "../Fixture/dataPage"
import { expect } from "@playwright/test";

test.describe('Login Tests',() => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });
    test('User should able to sucessfully login with valid credentials', async ({ page }) => {
        test.slow();
        await login(process.env.EMAIL, process.env.PASSWORD, page);
        await page.click(loginSelectors.userAccountDropdownSelector());
        await page.click(loginSelectors.navBarprofileIconSelector());
        expect(await page.textContent(loginSelectors.activeUserNameEmailverifySelector())).toBe(process.env.EMAIL);
    });
    
    test('User should not able to login with wrong Credentials', async ({ page }) => {
        test.slow();
        await login(process.env.EMAIL, '12345', page);
        const CurrentUserMail = await page.textContent(loginSelectors.wrongCredentialAlterMassage());
        expect(CurrentUserMail).toBe('The Username/Password is not correct.');
    });
    
    test('User should Able to access the Forget Password', async ({ page }) => {
        test.slow();
        await login(process.env.EMAIL, '12345', page);
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