import {test,expect,chromium} from '@playwright/test';



console.log(null == 'Defined');

//No fixtures used
test("first playwright test",async () =>{
          const browser= await chromium.launch();
          const browserContext = await browser.newContext();
          const page =await browserContext.newPage();
          await page.goto("https://google.com");
  

})

test("first playwright test with fixture",async ({page}) =>{
        /*  const browser= await chromium.launch();
          const browserContext = await browser.newContext();
          const page =await browserContext.newPage(); */
          await page.goBack();
         // await page.goto("https://www.linkedin.com/mynetwork/grow/");
         // await page.goBack();
  
})
/* By using page fixture bydefault following actions happen in background
/*  const browser= await chromium.launch();
          const browserContext = await browser.newContext();
          const page =await browserContext.newPage(); */

