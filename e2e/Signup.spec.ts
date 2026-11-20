import { test, expect } from '@playwright/test';

test.describe("first test block ", ()=>{
    test.beforeEach( async ({page})=>{ 
       await page.goto('https://thedappled.com/testing/ui-automation/signup?a=GrYU92vHBe3Y');
    })
    test('Empty form shows all five field errors', async ({ page }) => {
        await page.getByTestId('signup-submit').click();
        await expect(page.getByTestId('signup-error-name')).toBeVisible();
        await expect(page.getByTestId('signup-error-email')).toBeVisible();
        await expect(page.getByTestId('signup-error-password')).toBeVisible();
        await expect(page.getByTestId('signup-error-confirm')).toBeVisible();
        await expect(page.getByTestId('signup-error-terms')).toBeVisible();

    });

    test("Mismatched passwords show an error",async({page})=>{
    await page.getByTestId('signup-name').fill('Sneha');
    await page.getByTestId('signup-email').fill('sneha@gmail.com');
    await page.getByTestId('signup-password').fill('Test@1234');
    await page.getByTestId('signup-confirm').fill('Test@123245');
    await page.getByTestId('signup-terms').check();
   await page.getByTestId('signup-submit').click();
   await expect(page.getByTestId('signup-error-confirm')).toBeVisible();

}); 
test("Valid details + terms show the success message",async({page})=>{
    await page.getByTestId('signup-name').fill('Sneha');
    await page.getByTestId('signup-email').fill('sneha@gmail.com');
    await page.getByTestId('signup-password').fill('Test@1235');
    await page.getByTestId('signup-confirm').fill('Test@12325');
    await page.getByTestId('signup-terms').check();
   await page.getByTestId('signup-submit').click();
   await expect(page.getByRole('status')).toBeVisible();

}); 
 })
