// Middleware type declarations.
// Defines available route middleware for use in page meta.

import type { NavigationGuard } from 'vue-router'

// Union type of all registered middleware keys
export type MiddlewareKey = never

// Extend PageMeta to accept middleware
declare module 'nuxt/app' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}