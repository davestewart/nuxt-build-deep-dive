// Nitro layouts type declarations.
// Defines layout keys available for Nitro route configuration.

// Union type of all layout keys
export type LayoutKey = string

// Extend Nitro route config and rules with layout configuration
declare module 'nitropack' {
  interface NitroRouteConfig {
    appLayout?: LayoutKey | false
  }
  interface NitroRouteRules {
    appLayout?: LayoutKey | false
  }
}

declare module 'nitropack/types' {
  interface NitroRouteConfig {
    appLayout?: LayoutKey | false
  }
  interface NitroRouteRules {
    appLayout?: LayoutKey | false
  }
}