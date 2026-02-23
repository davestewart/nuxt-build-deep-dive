// Nitro app config type declarations.
// Defines the app configuration type available in Nitro context.

import type { Defu } from 'defu'

// User-defined app config (merged with defaults)
type UserAppConfig = Defu<{}, []>

// Extend Nitro's AppConfig with user configuration
declare module "nitropack/types" {
  interface AppConfig extends UserAppConfig {}
}
export {}