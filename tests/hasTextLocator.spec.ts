import{test,expect} from '@playwright/test';

test(" has TExt ",async ({page}) =>{
   
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('.form-group').filter({ hasText: 'Name:' }).locator('#name').fill('AMeya');

    await page.locator('ul>li').filter({hasText:'List item 1'}).hover();
    await page.waitForTimeout(1000);
    await page.close();
})



test(" has TExt practice ",async ({page}) =>{
await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
await page.locator('ul>li').filter({hasText:'List item 1'}).hover();
await page.waitForTimeout(1000);
await page.close();
})