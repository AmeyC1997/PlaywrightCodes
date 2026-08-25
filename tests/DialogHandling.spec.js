import { test, expect } from '@playwright/test';

test('Dialog Simple Alert Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    page.on('dialog', async (dialog) => {
        console.log(await dialog.message());
        console.log(await dialog.type());
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toBe('I am an alert box!');
        //
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Simple Alert', exact: true }).click();
    await page.waitForTimeout(3000);

})




test('Dialog Simple Conformation PopUp Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        console.log(dialog.type());
       await expect(dialog.type()).toContain('confirm');
        await expect(dialog.message()).toBe('Press a button!');
        //
        await dialog.dismiss();
    });
    await page.getByRole('button', { name: 'Confirmation Alert', exact: true }).click();
    await page.waitForTimeout(3000);

})


test('Dialog Simple Prompt Alert Handling', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    page.on('dialog', async (dialog) => {
        console.log(await dialog.message());
        console.log(await dialog.type());
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toBe('Please enter your name:');
        console.log(await dialog.defaultValue());
        await page.waitForTimeout(8000);
        await dialog.accept('Ameya Chaudhari');
    });
    await page.getByRole('button', { name: 'Prompt Alert', exact: true }).click();
    //await page.waitForTimeout(3000);
    await expect(page.locator('#demo')).toContainText('Ameya Chaudhari');

})