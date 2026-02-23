// App config type declarations.
// Defines the merged app configuration type from inline config and user-defined custom config.

import type { AppConfigInput, CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'

// Global defineAppConfig helper
declare global {
  const defineAppConfig: <C extends AppConfigInput> (config: C) => C
}

// Inline app configuration
declare const inlineConfig = {
  "nuxt": {}
}

// Resolved config type after applying defaults
type ResolvedAppConfig = Defu<typeof inlineConfig, []>

// Utility type to check if type is any
type IsAny<T> = 0 extends 1 & T ? true : false

// Deep merge type for app config (custom config overrides resolved config)
type MergedAppConfig<Resolved extends Record<string, unknown>, Custom extends Record<string, unknown>> = {
  [K in keyof (Resolved & Custom)]: K extends keyof Custom
    ? unknown extends Custom[K]
      ? Resolved[K]
      : IsAny<Custom[K]> extends true
        ? Resolved[K]
        : Custom[K] extends Record<string, any>
            ? Resolved[K] extends Record<string, any>
              ? MergedAppConfig<Resolved[K], Custom[K]>
              : Exclude<Custom[K], undefined>
            : Exclude<Custom[K], undefined>
    : Resolved[K]
}

// Extend AppConfig in both nuxt/schema and @nuxt/schema modules
declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}

declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
