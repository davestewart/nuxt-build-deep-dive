// Nitro routes type declarations.
// Defines internal API route types for Nuxt error handling, islands, and content.

import type { Serialize, Simplify } from "nitropack/types";

declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T

  // Internal API route handlers and their return types
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/nitro-server/dist/runtime/handlers/renderer').default>>>>
    }
    '/__nuxt_island/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/#internal/nuxt/island-renderer').default>>>>
    }
    '/__nuxt_content/content/sql_dump.txt': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/presets/node/database-handler').default>>>>
    }
    '/__nuxt_content/info/sql_dump.txt': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/presets/node/database-handler').default>>>>
    }
    '/__nuxt_content/content/query': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/api/query.post').default>>>>
    }
    '/__nuxt_content/info/query': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/api/query.post').default>>>>
    }
  }
}
export {}