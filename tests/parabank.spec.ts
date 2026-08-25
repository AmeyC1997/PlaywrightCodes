import {test,expect} from '@playwright/test';

test("Locator getByRole",async ({page}) => {

await page.goto("https://parabank.parasoft.com/parabank/register.htm");
//await page.getByRole('cell',{ name:'First Name:'}).getByRole('textbox').fill('ameya');
await page.getByRole('cell', { name: 'First Name:' }).locator('..').getByRole('textbox').fill('ameya');
//await page.getByRole('row', { name: 'First Name:' }).getByRole('textbox').fill('John');
await page.getByRole('row', { name: 'Last Name:' }).getByRole('textbox').fill('Doe');
await page.getByRole('row', { name: 'Address:' }).getByRole('textbox').fill('123 Main St');
await page.getByRole('row', { name: 'City:' }).getByRole('textbox').fill('New York');
await page.getByRole('row', { name: 'State:' }).getByRole('textbox').fill('NY');
await page.getByRole('row', { name: 'Zip Code:' }).getByRole('textbox').fill('10001');
await page.getByRole('row', { name: 'Phone #:' }).getByRole('textbox').fill('1234567890');
await page.getByRole('row', { name: 'SSN:' }).getByRole('textbox').fill('123-45-6789');
await page.getByRole('row', { name: 'Username:' }).getByRole('textbox').fill('johndoe123');
await page.getByRole('row', { name: 'Password:' }).getByRole('textbox').fill('Password123');
await page.getByRole('row', { name: 'Confirm:::' }).getByRole('textbox').fill('Password123');
await page.getByRole('button', { name: 'Register' }).click();
} )
