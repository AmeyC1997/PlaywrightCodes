
import { test, expect } from '@playwright/test';

test("frames handling ", async ({ page }) => {
    await page.goto("https://www.selenium.dev/selenium/web/iframes.html");

    const switchFrame = await page.frameLocator("#iframe1");
    await switchFrame.locator("input#checky").check();
    const options = page.getByRole('combobox', { name: 'selectomatic' }).getByRole('option');

    // To get all texts:
    const allTexts = await options.allInnerTexts();

    const frames = page.frames();
    console.log(frames.length);

    frames.forEach(frame => {
        console.log(frame.url());
    });

})


test("W3School frame", async ({ page }) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');

    // 1. Fixed camelCase on frameLocator
    // 2. Used exact iframe selector inside the TryIt editor
    const outerframe = page.frameLocator('#iframeResult');
    const innerFrame =outerframe.frameLocator('[src="https://www.w3schools.com"]');
       await innerFrame.locator('[title="JavaScript Tutorial"]').hover();
    const frames = page.frames();
    console.log(frames.length);
         
    await frames.forEach(frame => { console.log(frame.url())});
    await page.waitForTimeout(3000);
});