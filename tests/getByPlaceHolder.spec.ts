import {test,expect} from '@playwright/test';


//these getByPlaceHolder is used for helper text
test("Locator getByPlaceHolder",async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");
    await page.getByPlaceholder("Enter your full name").fill('Ameya');
    await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill('8888672552');
    await page.getByPlaceholder("Type your message here...").fill('Playwright Programming');
    await page.getByPlaceholder("Search products...").fill('Playwright Programming');
    await page.getByRole('button',{name:'Search'}).click();
    await page.waitForTimeout(3000);
    await page.close();
})