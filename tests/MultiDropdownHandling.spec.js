import {test,expect} from '@playwright/test';

test('MultiDropDown Handling',async ({page})=>{

     await page.goto("https://demoqa.com/select-menu");
        // 1. Click inside the React-Select container/input to open the menu
  await page.locator('#react-select-4-input').focus();

  // 2. Type the option name and hit Enter (or click it directly)
  await page.locator('#react-select-4-input').fill('Red');
  await page.keyboard.press('Enter');

  // 3. To select another item (since it's a multi-select dropdown)
  await page.locator('#react-select-4-input').pressSequentially('Blue');
  await page.keyboard.press('Enter');

  // Optional assertion: Verify the selected multi-value tags appear
  await expect(page.locator('.css-12jo7m5')).toHaveText(['Red', 'Blue']);

})



test('Handle searchable dropdown', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');

  await page.locator('#country+span').click();

  await page.locator('.select2-search__field').first().fill('India');

  await page.locator('#select2-country-results > li', { hasText: 'India' }).click();

  await expect(page.locator('#select2-country-container')).toHaveText('India');
});




test('Handle auto suggestion dropdown', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.locator('textarea[name="q"]').fill('playwright automation');
  await page.locator('li span', { hasText: 'playwright automation' }).first().click();
  await expect(page).toHaveURL(/search/);
});


//Dynamic dropdowns:



test('Handle dynamic dropdown', async ({ page }) => {
  await page.goto('https://www.redbus.in/');

  await page.locator('#srcinput').fill('Hyderabad');

  await page.locator('[aria-label="Search suggestions list"] div[id*="suggestion"]', { hasText: 'Hyderabad' }).first().click();

  await page.locator('#destinput').fill('Bangalore');
  await page.locator('[aria-label="Search suggestions list"] div[id*="suggestion"]', { hasText: 'Bengaluru' }).first().click();
});



test('Handle Autosuggestion dropdown', async ({ page }) => {
  await page.goto('https://www.redbus.in/');

  await page.locator('#srcinput').fill('Hyderabad');

  await page.locator('[aria-label="Search suggestions list"] div[id*="suggestion"]', { hasText: 'Hyderabad' }).first().click();

  await page.locator('#destinput').fill('Bangalore');
  await page.locator('[aria-label="Search suggestions list"] div[id*="suggestion"]', { hasText: 'Bengaluru' }).first().click();
});