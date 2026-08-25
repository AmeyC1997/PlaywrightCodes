import {test,expect} from '@playwright/test';

test('Single File Upload',async ({page}) =>
{
   await page.goto("https://testautomationpractice.blogspot.com/");
   const chooseFile = page.locator('form#singleFileForm>[type="file"]');
   await chooseFile.scrollIntoViewIfNeeded();
   await chooseFile.setInputFiles('C:/Users/chand/Downloads/command.txt');
 // await expect(chooseFile).to('command.txt');

})

test('Single File Upload & Assertion',async ({page}) =>
{
   await page.goto("https://the-internet.herokuapp.com/upload");
   await page.locator('#file-upload').setInputFiles('tests/DialogHandling.spec.js');
   await page.getByRole('button',{name:'Upload',exact:true}).click();
   expect(page.getByRole('heading',{name:'File Uploaded!',exact:true})).toBeVisible();
   
})

test('MultiFile Upload & Assertion',async ({page}) =>
{
   await page.goto("https://testautomationpractice.blogspot.com/");
   const chooseFile = page.locator('form#multipleFilesForm>[type="file"]');
   await chooseFile.scrollIntoViewIfNeeded();
   await chooseFile.setInputFiles(['tests/DialogHandling.spec.js','tests/DropDownHandling.spec.js']);
})


test('Single File Upload using FileChoosesr',async ({page}) =>
{
 await page.goto("https://testautomationpractice.blogspot.com/");
   const [fileChooserapproach] = await Promise.all([
   page.waitForEvent('filechooser'),
   page.locator('form#singleFileForm>[type="file"]').click()]);
   //Single-File Upload by FileChooser
   await fileChooserapproach.setFiles('tests/parabank.spec.ts');
})


test('Multi File Upload using FileChoosesr ',async ({page}) =>
{
   await page.goto("https://testautomationpractice.blogspot.com/");
   const [fileChooserapproach] = await Promise.all([
   page.waitForEvent('filechooser'),
   page.locator('form#multipleFilesForm>[type="file"]').click()]);
   //Multi-File Upload by FileChooser
   await fileChooserapproach.setFiles(['tests/parabank.spec.ts','tests/DropDownHandling.spec.js']);
   
   
})