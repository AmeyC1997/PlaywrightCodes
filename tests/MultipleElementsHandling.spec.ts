import { test, expect } from '@playwright/test';

test('MultiElements Handling', async ({ page }) => {

    await page.goto("https://practice-automation.com/form-fields/");
    let username = page.getByRole('textbox', { name: 'Name' });
    let userPassword = page.getByRole('textbox', { name: 'Password ' });
    await username.focus();
    await page.waitForTimeout(0.5000);
    await username.fill('ameya');
    console.log(await username.inputValue());
    await userPassword.fill('123456');
    console.log(await userPassword.inputValue());
    console.log(await page.locator('//input[@type="checkbox"]').allTextContents());
    console.log(await page.locator('//input[@type="checkbox"]').count());
    console.log(await page.locator('//input[@type="checkbox"]').first().check());
    console.log(await page.locator('//input[@type="checkbox"]').last().check());
    console.log(await page.locator('//input[@type="checkbox"]').nth(2).check());
    console.log(await page.locator('//input[@type="checkbox"]').first().uncheck());
    console.log(await page.locator('//input[@type="checkbox"]').last().uncheck());
    console.log(await page.locator('//input[@type="checkbox"]').nth(2).uncheck());
    const labels = await page.locator('input[type="checkbox"] + label, label:has(input[type="checkbox"])').allTextContents();
    console.log(labels);

})

test('Button Handling Actions', async ({ page }) => {
    await page.goto("https://demoqa.com/buttons");
    await page.getByRole('button', { name: 'Click Me', exact: true }).click();
    await expect(page.locator('p#dynamicClickMessage')).toHaveText('You have done a dynamic click');
    await page.getByRole('button', { name: 'Right Click Me', exact: true }).click({ button: 'right' });
    await expect(page.locator('p#rightClickMessage')).toHaveText('You have done a right click');
    await page.getByRole('button', { name: 'Double Click Me', exact: true }).dblclick();
    await expect(page.locator('p#doubleClickMessage')).toHaveText('You have done a double click');
})

test('Radio Button Action Handling', async ({ page }) => {
    await page.goto("https://practice-automation.com/form-fields/");
    await expect(page).toHaveURL(/practice-automation.com/);
    await expect(page).toHaveTitle(/Practice Automation/);
    await page.getByRole('radio', { name: 'Blue' }).check();
    await page.getByRole('radio', { name: 'Green' }).check();
})