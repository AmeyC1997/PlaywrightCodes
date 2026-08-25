import {test,expect} from '@playwright/test';


test('Data Driven Test',async ({page}) =>{

//testdata
let userN ='standard_user';
let password='secret_sauce';
let url ='https://www.saucedemo.com/';


//Array of Data
let products =['Sauce Labs Backpack','Sauce Labs Bike Light','Sauce Labs Bolt T-Shirt','Sauce Labs Fleece Jacket'];

//Locators
const userNameInput =page.getByPlaceholder('Username');
const passwordInput = page.getByPlaceholder('Password');
const loginButton =page.getByRole('button',{name:'Login'});
const productInfo =page.locator('[data-test="inventory-item-name"]');
//Actions
await page.goto(url);
await userNameInput.fill(userN);
await passwordInput.fill(password);
await loginButton.click();

//Assertions
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await expect(page).toHaveTitle('Swag Labs');
console.log(await productInfo.allTextContents())

for (let product of products)
{
    await expect (page.getByText(product).first()).toBeVisible();
}
})