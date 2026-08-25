import { test, expect, chromium } from '@playwright/test';


test('New Tab Handling', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('button', { name: 'New Tab' }).click()])
    console.log(await page.title());
    console.log(await newPage.title());
})

test('New Tab Handling with fixtures ', async ({ page, context }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('button', { name: 'New Tab' }).click()]);
    console.log(await page.title());
    console.log(await newPage.title());
})



test('New Browsers Window ', async ({ page, context }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const [newPageWindow] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', { name: 'Popup Windows' }).click()]);
   await newPageWindow.waitForLoadState();
    const pages = context.pages();
    console.log(pages.length);
   // console.log(await page.title());
   // console.log(await newPageWindow.title()); 
    for(let p of pages)
    {
        console.log(await p.title());
    }


})
