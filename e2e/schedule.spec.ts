import { expect } from "@playwright/test";
import { scheduleSelector } from "../support/schedulePO/schedule.page";
import { login } from "../support/loginPO/login.page";
import test from "../Fixture/dataPage";
import data from "../Fixture/data.json";

test.describe('Schedule and dispatch a job in OT', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test.skip('User should able to schedule a job', async ({ page }) => {
        await login(process.env.EMAIL, process.env.PASSWORD, page);
        expect(await page.textContent(scheduleSelector.leftSideEmployeeButtonSelector())).toBe('Employees');
        await page.click(scheduleSelector.navBarScheduleSelector());
        await page.waitForTimeout(5000);
        expect(await page.textContent(scheduleSelector.timelineDayTabvisibilitySelector())).toBe('Day');
        await page.click(scheduleSelector.actionButtonDropDownSelector());
        await page.click(scheduleSelector.selectAddUnAssignedJob());
        expect(await page.textContent(scheduleSelector.navBarVerifyOfAddUnAssignedJob())).toBe('Add New Job');
        await page.click(scheduleSelector.clickCustomerbox());
        await page.click(scheduleSelector.selectCustomerInAddunAssignedJob());
        await page.fill(scheduleSelector.addJobDescription(), data.JobDecription);
        await page.fill(scheduleSelector.addJobNumber(), data.JobNumber);
        await page.click(scheduleSelector.selectEmployee());
        expect(await page.textContent(scheduleSelector.AddCrewTitleVerify())).toBe('Add Crew');
        await page.click(scheduleSelector.clickOnAddCrewBox());
        await page.fill(scheduleSelector.clickOnCrewBoxeFilter(), data.name);
        await page.click(scheduleSelector.SearchedCrewMemeberByName());
        await page.click(scheduleSelector.clickOnDispatchNow());
    });
});
