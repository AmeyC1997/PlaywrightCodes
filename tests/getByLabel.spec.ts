import{test,expect} from '@playwright/test';

test("getByLabel ",async ({page}) =>{
   
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");

    await page.getByLabel("Email Address:").fill("ameya");
    await page.getByLabel("Password:").fill("chaudhari");
    await page.getByLabel("Your Age:").fill("30");
    await page.waitForTimeout(1000);
    await page.close();
})