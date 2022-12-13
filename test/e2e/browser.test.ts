import { describe, test, expect } from 'vitest'
import { setup, createPage } from '@nuxt/test-utils'

describe('browser test', async () => {
  await setup({
    browser: true
  })

  test('should render page', async () => {
    const page = await createPage('/')
    const body = await page.innerHTML('body')

    expect(body).toContain('Welcome to Nuxt 3 Starter Template')
  })
})
