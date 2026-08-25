import { test, expect } from '@playwright/test';


test('Drop Down Handling', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    let colours = await page.locator('#colors');
    const options = colours.locator('option');
    console.log(await options.count());              //total options 
    await colours.selectOption(['Red', 'Green']);
      await expect(colours).toHaveValues(['red','green'])
})

test('Handle custom multi-select dropdown', async ({ page }) => {
  await page.goto('https://coreui.io/bootstrap/docs/forms/multi-select/');
/*
  await page.locator('.form-multi-select').first().click();
  await page.locator('.form-multi-select-option', { hasText: 'Angular' }).first().click();
  await page.locator('.form-multi-select-option', { hasText: 'React.js' }).first().click();
  await expect(page.locator('.form-multi-select').first()).toContainText('Angular');
  await expect(page.locator('.form-multi-select').first()).toContainText('React.js');  */
   const firstD = page.locator('.form-multi-select-search');
  await firstD.first().click();
   await firstD.getByRole('option', { name: 'Angular' }).first().check();

});



test('Handle dynamic dropdown', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  //await page.getByRole('combobox',{name:'From'}).click();
  await page.locator('input#srcinput').fill('Pune');
  await page.locator('div.leftListCont___f5993d',{hasText:'Nigdi'}).click();
});


test.only('AutoSuggestion for Google',async ({page})=>{
await page.goto('https://www.google.com/');
await page.locator('textarea#APjFqb').focus();
await page.locator('textarea#APjFqb').fill('Playwright');
await page.locator('[data-view-type="1"]',{hasText:'playwright vs selenium'}).click();
await page.locator('div.recaptcha-checkbox-border').click();

})