import { describe, test, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('server test', async () => {
  await setup({
    server: true
  })

  test('should render index page', async () => {
    const html = await $fetch('/')

    expect(html).toContain('<div>Welcome to Nuxt 3 Starter Template</div>')
  })
})
