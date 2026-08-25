import { test, expect } from '@playwright/test';

// 1. Single Product Data
const product = {
  productname: 'Sauce Labs Backpack',
  price: '$29.99'
};
const { productname, price } = product;

// 2. Login Credentials
const credentials = {
  userN: 'standard_user',
  password: 'secret_sauce',
  url: 'https://www.saucedemo.com/'
};
const { userN, password, url } = credentials;

// 3. Array of Products (Cleaned up duplicate entries)
const products = [
  { productname: 'Sauce Labs Backpack', price: '$29.99' },
  { productname: 'Sauce Labs Bike Light', price: '$9.99' },
  { productname: 'Sauce Labs Bolt T-Shirt', price: '$15.99' },
  { productname: 'Sauce Labs Fleece Jacket', price: '$49.99' }
];

// --- TEST 1: Single Product Verification ---
test('Validate Single Product', async ({ page }) => {
  // Locators
  const userNameInput = page.getByPlaceholder('Username');
  const passwordInput = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });
  
  // Scope element to specific product name
  const productCard = page.locator('.inventory_item').filter({ hasText: productname });
  const productPrice = productCard.locator('[data-test="inventory-item-price"]');

  // Actions
  await page.goto(url);
  await userNameInput.fill(userN);
  await passwordInput.fill(password);
  await loginButton.click();

  // Assertions
  await expect(productCard).toBeVisible();
  await expect(productPrice).toHaveText(price);
});

// --- TEST 2-5: Parameterized Product Verification Loop ---
for (const item of products) {
  test(`Validates product: ${item.productname}`, async ({ page }) => {
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


//Placing test data inside testData Folder