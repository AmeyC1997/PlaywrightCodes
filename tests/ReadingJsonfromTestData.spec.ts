import  customerProducts from '../testdata/customerProducts.json';
import {test,expect} from '@playwright/test';
for(let cus of customerProducts)
{
    console.log(cus);
}

for(let {productname} of customerProducts)
{
    console.log(productname);
}

const credentials = {
  userN: 'standard_user',
  password: 'secret_sauce',
  url: 'https://www.saucedemo.com/'
};

const { userN, password, url } = credentials;

for (let item of customerProducts) {
  test(`Validates productss: ${item.productname}`, async ({ page }) => {
    // Locators
    const userNameInput = page.getByPlaceholder('Username');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Login' });

    // Scope element to item.productname
    const productCard = page.locator('.inventory_item').filter({ hasText: item.productname });
    const productPrice = productCard.locator('[data-test="inventory-item-price"]');

    // Actions
    await page.goto(url);
    await userNameInput.fill(userN);
    await passwordInput.fill(password);
    await loginButton.click();

    // Assertions
    await expect(productCard).toBeVisible();
    await expect(productPrice).toHaveText(item.price);
  });
}


//Reading Data from FileSystem   FS