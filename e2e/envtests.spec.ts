import { test, expect } from '@playwright/test';
import { env } from "../utils/env";

test.describe("first test block ", ()=>{
    test.beforeEach( async ({page})=>{ 
       await page.goto(env.baseUrl);

    })
    test('Sign in with the credentials from your .env file', async ({ page }) => {
        
          await page.getByTestId('env-email').click();
          await page.getByTestId('env-email').fill(env.email);
          await page.getByTestId('env-password').click();
          await page.getByTestId('env-password').fill(env.password);
          await page.getByTestId('env-submit').click();
          await expect(page.getByRole('status').first()).toBeVisible();
    });
    test('Wrong password shows the error (same config)', async ({ page }) => {
        
          await page.getByTestId('env-email').click();
          await page.getByTestId('env-email').fill('8mwsgdkf@thedappled.test');
          await page.getByTestId('env-password').click();
          await page.getByTestId('env-password').fill('DpLb22gBt!');
          await page.getByTestId('env-submit').click();
          await expect(page.getByRole('alert').first()).toBeVisible();
    });

  
 })


  
