import { test, expect } from '@playwright/test';

test('Find and select date with lowest price', async ({ page }) => {
  await page.goto('https://www.makemytrip.com/flights/');
  
  // Close initial popup modal if present
 await  page.locator('[data-cy="closeModal"]').click();;

  // Open departure calendar
  await page.locator('label[for="departure"]').click();

  // 1. Explicitly wait for the calendar picker wrapper to be visible
  const calendarPicker = page.locator('.datePickerContainer, .DayPicker-Months');
  await calendarPicker.first().waitFor({ state: 'visible' });

  // 2. Locate active day cells (excluding disabled days)
  const dayCells = page.locator('.DayPicker-Day:not(.DayPicker-Day--disabled)[aria-disabled="false"]');
  
  // Ensure at least one day cell is attached before counting
  await dayCells.first().waitFor({ state: 'visible' });

  const count = await dayCells.count();
  console.log('No of Days found: ' + count);

  let lowestPrice = Infinity;
  let lowestPriceDate = '';
  let lowestPriceElement = null;

  for (let i = 0; i < count; i++) {
    const cell = dayCells.nth(i);
    
    // MakeMyTrip places the price text inside paragraph elements under dateInnerCell
    const priceText = await cell.locator('.dateInnerCell p, p.todayPrice').last().innerText().catch(() => '');

    if (priceText) {
      // Extract numeric price value
      const price = parseInt(priceText.replace(/[^0-9]/g, ''), 10);
      const dateAttr = await cell.getAttribute('aria-label');

      if (!isNaN(price) && price < lowestPrice) {
        lowestPrice = price;
        lowestPriceDate = dateAttr || 'Unknown Date';
        lowestPriceElement = cell;
      }
    }
  }

  console.log(`Lowest Price Found: ₹${lowestPrice} on ${lowestPriceDate}`);

  // Click the date cell with the lowest price
  if (lowestPriceElement) {
    await lowestPriceElement.click();
  }
});