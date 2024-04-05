import { expect } from "@playwright/test";
import { scheduleSelector } from "../support/schedulePO/schedule.page";
import { login } from "../support/loginPO/login.page";
import test from "../Fixture/dataPage";
import data from "../Fixture/data.json";

test.describe('Schedule and dispatch a job in OT', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test('User should be able to schedule a job', async ({ page }) => {
        await login(process.env.EMAIL, process.env.PASSWORD, page);
        expect(await page.textContent(scheduleSelector.leftSideEmployeeButtonSelector())).toBe('Employees');
        await page.click(scheduleSelector.navBarScheduleSelector());
        await page.waitForTimeout(5000);
        expect(await page.textContent(scheduleSelector.timelineDayTabVisibilitySelector())).toBe('Day');
        await page.click(scheduleSelector.actionButtonDropDownSelector());
        await page.click(scheduleSelector.selectAddUnAssignedJob());
        expect(await page.textContent(scheduleSelector.navBarVerifyOfAddUnAssignedJob())).toBe('Add New Job');
        await page.click(scheduleSelector.clickCustomerBox());
        await page.click(scheduleSelector.selectCustomerInAddUnassignedJob());
        await page.fill(scheduleSelector.addJobDescription(), data.JobDescription);
        await page.fill(scheduleSelector.addJobNumber(), data.JobNumber);
        await page.click(scheduleSelector.selectEmployee());
        expect(await page.textContent(scheduleSelector.AddCrewTitleVerify())).toBe('Add Crew');
        await page.click(scheduleSelector.clickOnAddCrewBox());
        await page.fill(scheduleSelector.clickOnCrewBoxFilter(), data.name);
        await page.click(scheduleSelector.SearchedCrewMemberByName());
        await page.click(scheduleSelector.clickOnDispatchNow());
    });
});
