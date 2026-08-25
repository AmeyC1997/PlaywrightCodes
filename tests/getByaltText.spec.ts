//getbyAltText used to identify images and maps to alt attribute

//<img alt="logo image" src="https://playwright.dev/img/playwright-logo.svg">

//exact match
//partial match
//regular expression
//case sensitive
//extract true

import{test,expect} from '@playwright/test';

test("getByAlttext ",async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");
    await expect(page.getByAltText('logo image')).toBeVisible();
    await page.close();
})