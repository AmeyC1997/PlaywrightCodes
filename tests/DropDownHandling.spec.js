import { test, expect } from '@playwright/test';


test('Drop Down Handling', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const countryDropDown = page.getByLabel('Country:');
    console.log(await countryDropDown.count());
    let totaloptions = await countryDropDown.allInnerTexts();
    console.log(totaloptions);


    //DropDown Handling  for Tagname as select
    // 1.Identify the type of DropDown and then selectOption
    //select By Value
    await countryDropDown.selectOption('japan');
    await page.waitForTimeout(1000);
    //selectBy Visible Text
    await countryDropDown.selectOption('china');
    await expect(countryDropDown).toHaveValue('china');
 //   await expect(countryDropDown).toHaveText(['China']);
    await page.waitForTimeout(1000);
    await countryDropDown.selectOption({ index: 5 });
  
     await expect(countryDropDown).toHaveValue('australia');



})

/*<select class="form-control" id="country">
  <option value="usa">United States</option>
  <option value="canada">Canada</option>
  <option value="uk">United Kingdom</option>
  <option value="germany">Germany</option>
  <option value="france">France</option>
  <option value="australia">Australia</option>
  <option value="japan">Japan</option>
  <option value="china">China</option>
  <option value="brazil">Brazil</option>
  <option value="india">India</option>
</select> */