// Runtime config type declarations.
// Defines the runtime configuration structure available via useRuntimeConfig().

import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'

// Shared runtime config (private - server-side only)
interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   content: {
      databaseVersion: string,

      version: string,

      database: {
         type: string,

         filename: string,
      },

      localDatabase: {
         type: string,

         filename: string,
      },

      integrityCheck: boolean,
   },
}

// Shared public runtime config (accessible on both client and server)
interface SharedPublicRuntimeConfig {
   mdc: {
      components: {
         prose: boolean,

         map: any,

         customElements: Array<any>,
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },

      highlight: {
         noApiRoute: boolean,

         highlighter: string,

         theme: {
            default: string,

            dark: string,
         },

         shikiEngine: string,

         langs: Array<string>,
      },
   },

   content: {
      wsUrl: string,
   },
}

// Extend @nuxt/schema with user-defined runtime config
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}

// Extend nuxt/schema with shared runtime config
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}

// Make runtime config available in Vue components via $config
declare module 'vue' {
  interface ComponentCustomProperties {
    $config: UserRuntimeConfig
  }
}