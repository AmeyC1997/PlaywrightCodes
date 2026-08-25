import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs'; // Required to check physical file existence on disk

test('Downloading a File', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  let [downloadwindow] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: 'sample-upload.txt' }).click()
  ]);

  // --- ASSERTION 1: Verify the downloaded file name ---
  expect(downloadwindow.suggestedFilename()).toBe('sample-upload.txt');

  let filepath = path.join('./testdata', downloadwindow.suggestedFilename());
  await downloadwindow.saveAs(filepath);

  // --- ASSERTION 2: Verify the file exists on the system ---
  expect(fs.existsSync(filepath)).toBeTruthy();
});