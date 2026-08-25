import { test, expect } from '@playwright/test';

test('WEB TABLE HANDLING', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    const table = page.locator('[name="BookTable"]');
    const tableRow = table.locator('tbody>tr');
    const tablecell = tableRow.locator('td');
    const rowCount = await tableRow.count();
    console.log(rowCount);
    console.log(await tableRow.count());
    console.log(await tablecell.count());
    await page.waitForLoadState();
    
    for (let i = 0; i < rowCount; i++) {
        console.log(await tableRow.nth(i).textContent());
    }

});
console.log("==============Only printing rows which contain AMit ===============")
//
test('WEB TABLE HANDLING for AMit', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    //Identify the table
    const table = page.locator('[name="BookTable"]');
    //
    const tableRow = table.locator('tbody>tr');
    const tablecell = tableRow.locator('td');
    const rowCount = await tableRow.count();
    console.log(rowCount);
    console.log(await tableRow.count());
    console.log(await tablecell.count());
    await page.waitForLoadState();
    console.log(await tableRow.nth(2).locator('td').nth(3).textContent());
    console.log(await tableRow.nth(0).textContent());
    console.log(await tablecell.nth(1).textContent());

    console.log("-----------for loop to print Amit only ----------------")
    for (let i = 0; i < rowCount; i++) {
        const rtext = await tableRow.nth(i).textContent();
        if (rtext?.includes('Amit')) {
            console.log(await tableRow.nth(i).textContent());
        }
    }
        console.log("-----------for loop to booksname  only ----------------")
        for (let i = 1; i < rowCount; i++) {
           
            console.log( await tableRow.nth(i).locator('td').nth(0).textContent());

        }
    })