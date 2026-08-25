import {test,expect} from '@playwright/test';

test("Locator getByRole",async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");
    await expect(page.getByRole('heading',{name:'PlaywrightPractice'})).toBeVisible();

    await page.getByRole('button',{name:'Primary Action'}).hover();
    await expect(page.getByRole('button',{name:'Primary Action'})).toBeVisible();
    await expect (page.getByRole('menuitem', { name: 'Home' })).toBeVisible();
    await expect (page.getByRole('menuitem', { name: 'Products' })).toBeVisible();
    await expect (page.getByRole('menuitem', { name: 'Contact' })).toBeVisible();
    await page.getByRole('textbox',{name:'Username:'}).fill("Ameya");
    await page.getByRole('checkbox',{name:' Accept terms'}).click();
    await page.getByRole('textbox',{name:'Email Address:'}).fill('Chaudhari');
    await page.waitForTimeout(1000);
    

    await page.close();
})