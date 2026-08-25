import {test} from '@playwright/test';


test('File Upload or Send',async ({page}) =>{

   await page.goto('https://the-internet.herokuapp.com/upload');
   let chooseFile = page.locator('#file-upload');
   let File = page.getByRole('button',{name:'file'});
     await chooseFile.scrollIntoViewIfNeeded();
   //  await chooseFile.setInputFiles('testdata/sample-upload.txt');
     await File.setInputFiles('testdata/sample-upload.txt');




} )
