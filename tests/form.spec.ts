import { test, expect } from '@playwright/test'

test('Form is rendered', async ({ page }) => {
  await page.goto('http://localhost:4321/contact-me')
  await expect(page.getByRole('heading', { name: 'Contact Me' })).toBeVisible()
})

test('Form is working properly', async ({ page }) => {
  await page.goto('http://localhost:4321/contact-me')
  await page.locator('#name').fill('John Doe')
  await page.locator('#email').fill('john@doe.com')
  await page.locator('#message').fill('Testing form from Playwright')
  await page.locator('button[type="submit"]').click()
  await expect(page).toHaveURL('http://localhost:4321/contact-me?_action=send')
})