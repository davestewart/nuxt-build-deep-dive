// Auto-import type declarations for shared utilities.
// These are available in both client and server contexts without explicit imports.

export {}

declare global {
  // Nuxt configuration
  const useRuntimeConfig: (event?: import('h3').H3Event) => import('nuxt/schema').RuntimeConfig
  const useAppConfig: () => import('nuxt/schema').AppConfig
  const defineAppConfig: <C extends import('nuxt/schema').AppConfigInput>(config: C) => C

  // H3 utilities
  const createError: typeof import('h3')['createError']
  const setResponseStatus: typeof import('h3')['setResponseStatus']

  // MDC module
  const parseMarkdown: typeof import('../../node_modules/@nuxtjs/mdc/dist/runtime/parser').parseMarkdown
  const stringifyMarkdown: typeof import('../../node_modules/@nuxtjs/mdc/dist/runtime/stringify').stringifyMarkdown
}