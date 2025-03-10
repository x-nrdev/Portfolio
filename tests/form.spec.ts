import { test, expect } from '@playwright/test'

const URL = 'http://localhost:4321/contact-me'

test('Form is rendered', async ({ page }) => {
  await page.goto(URL)
  await expect(page.getByRole('heading', { name: 'Contact Me' })).toBeVisible()
})

test('Form is working properly', async ({ page }) => {
  await page.goto(URL)
  await page.locator('#name').fill('John Doe')
  await page.locator('#email').fill('john@doe.com')
  await page.locator('#message').fill('Testing form from Playwright')
  await page.locator('button[type="submit"]').click()
  await expect(page).toHaveURL(`${URL}?_action=send`)
})

test("Email sended message", async ({ page }) => {
  await page.goto(`${URL}?_action=send`)
  await expect(page.getByText('Thank you! Your message has been sent.')).toBeVisible()
  await expect(page.locator('svg.ft-green-tick')).toBeVisible()
})