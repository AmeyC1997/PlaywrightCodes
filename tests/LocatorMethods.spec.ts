import { test, expect } from '@playwright/test';


//these getByPlaceHolder is used for helper text
test("Locator getByPlaceHolder", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");

    // Target: "Email Address:" input field
    await page.getByLabel('Email Address:').fill('john.doe@example.com');
    await expect(page.getByLabel('Email Address:')).toHaveValue('john.doe@example.com');

    // Target: "Primary Action" button under getByRole section
    await page.getByRole('button', { name: 'Primary Action' }).click();
    // Target: "Accept terms" checkbox
    await page.getByLabel('Accept terms').check();  //Ensure that checkbox or radio element is checked.
    await expect(page.getByLabel('Accept terms')).toBeChecked();
    await page.getByLabel('Accept terms').uncheck();
    await expect(page.getByLabel('Accept terms')).toBeChecked({ checked: false });

    // Target: "This text has a tooltip." element under getByTitle section
    await page.getByRole('button', { name: 'Point Me' }).hover();
    await expect(page.getByRole('button', { name: 'Point Me' })).toBeVisible();


    const emailInput = page.getByLabel('Your Age:');

    // Focuses the element (the cursor starts blinking inside it)
    await emailInput.focus();

    // Verify it is currently focused
    await expect(emailInput).toBeFocused();

    await emailInput.blur();

    // Verify the element is no longer focused
    await expect(emailInput).not.toBeFocused();
    await page.waitForTimeout(5000);
    await page.close();



})