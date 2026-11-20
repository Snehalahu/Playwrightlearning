
import { test, expect } from '@playwright/test';
 
test('test', async ({ page }) => {

  await page.goto('https://thedappled.com/testing/ui-automation/login?a=GrYU92vHBe3Y');

  await page.getByTestId('login-email').click();


  await page.getByTestId('login-email').fill('Test@1234');

  await page.getByTestId('login-email').fill('demo@thedappled.com');

  await page.getByTestId('login-email').click();

  await page.locator('div').filter({ hasText: 'Practice pageSign inWelcome' }).nth(4).click();

  await page.getByTestId('login-email').click();
 
  await page.getByTestId('login-email').fill('demo@thedappled.com');

  await page.getByTestId('login-password').click();

  await page.getByTestId('login-password').fill('Test@1234');

  await page.getByTestId('login-toggle-password').click();

  await page.getByTestId('login-remember').check();

  await page.getByTestId('login-submit').click();

  await page.getByTestId('login-success').click();

  await page.getByTestId('login-password').click();

  await page.getByTestId('login-password').fill('Test@1235');

  await page.getByTestId('login-submit').click();

  await page.getByTestId('login-error').click();	

});