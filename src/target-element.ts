const el = document.querySelector('.test-app')

if (!(el instanceof HTMLElement)) {
  throw new Error('target is not found')
}

export const target = el
