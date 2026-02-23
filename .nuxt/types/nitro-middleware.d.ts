// Nitro middleware type declarations.
// Defines middleware keys available for Nitro route configuration.

// Union type of all registered middleware keys
export type MiddlewareKey = never

// Extend Nitro route config with middleware configuration
declare module 'nitropack/types' {
  interface NitroRouteConfig {
    appMiddleware?: MiddlewareKey | MiddlewareKey[] | Record<MiddlewareKey, boolean>
  }
}

declare module 'nitropack' {
  interface NitroRouteConfig {
    appMiddleware?: MiddlewareKey | MiddlewareKey[] | Record<MiddlewareKey, boolean>
  }
}