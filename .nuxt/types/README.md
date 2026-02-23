# Nuxt Type Declarations

This directory contains auto-generated TypeScript type declaration files that provide type safety and IntelliSense for your Nuxt application. These files are generated during build and should not be edited manually.

## Auto-Import Type Declarations

Type declarations for globally available functions and utilities that don't require explicit imports.

### **[imports.d.ts](./imports.d.ts)**
App-side auto-imports for Nuxt composables and utilities. Includes Vue core APIs (reactivity, lifecycle, watchers), Nuxt features (routing, data fetching, state management, error handling, head management, SSR), and module utilities (Content, MDC, third-party scripts).

### **[nitro-imports.d.ts](./nitro-imports.d.ts)**
Server-side auto-imports for Nitro and H3 utilities. Available in `server/` routes and middleware. Includes H3 request/response handling, event handlers, middleware, adapters, WebSocket support, CORS, caching, proxying, and Nitro-specific features (app context, storage, plugins, tasks, error handling).

### **[shared-imports.d.ts](./shared-imports.d.ts)**
Auto-imports available in both client and server contexts. Includes `useRuntimeConfig`, `useAppConfig`, `defineAppConfig`, and basic H3 utilities like `createError` and `setResponseStatus`.

## Component Type Declarations

### **[components.d.ts](./components.d.ts)**
Global component type declarations for all auto-imported components. Registers app components, MDC Prose components (markdown rendering), Nuxt core components, image stubs, pages, head components, Content renderer, MDC components, and their lazy-loaded variants with hydration strategies.

## Configuration Type Declarations

### **[app.config.d.ts](./app.config.d.ts)**
App configuration type declarations. Defines the merged app config type from inline config and user-defined custom config. Provides the global `defineAppConfig` helper and deep merge types.

### **[runtime-config.d.ts](./runtime-config.d.ts)**
Runtime configuration structure available via `useRuntimeConfig()`. Includes shared runtime config (private, server-side only) and shared public runtime config (accessible on both client and server). Extends Nuxt schema modules and makes config available in Vue components via `$config`.

### **[modules.d.ts](./modules.d.ts)**
Type-safe configuration interfaces for installed Nuxt modules. Defines module dependencies, resolved options (after defaults), and user-provided configuration (partial options) for modules like `@nuxt/content`, `@nuxt/devtools`, `@nuxt/telemetry`, and `@nuxtjs/mdc`.

## Plugin and Middleware Type Declarations

### **[plugins.d.ts](./plugins.d.ts)**
Plugin injection type declarations. Defines injections provided by Nuxt plugins to the app context and Vue components. Organizes client-side, server-side, and universal plugins with utility types to add `$` prefix to injections.

### **[middleware.d.ts](./middleware.d.ts)**
Route middleware type declarations. Defines available middleware keys for use in page meta. Extends `PageMeta` interface to accept middleware configuration.

### **[layouts.d.ts](./layouts.d.ts)**
Layout type declarations for use in page meta. Defines the map of registered layouts, union type of layout keys, and extends `PageMeta` to accept layout configuration.

## Build and Environment Type Declarations

### **[build.d.ts](./build.d.ts)**
Module declarations for Nuxt build virtual modules accessible via `#build/*` imports. Groups modules by purpose: app core, app configuration, client runtime, plugins, routing, layouts, styling, head management, and components.

### **[builder-env.d.ts](./builder-env.d.ts)**
Builder environment type declarations. Imports Vite client types for build-time environment support.

### **[vue-shim.d.ts](./vue-shim.d.ts)**
Vue shim file (empty placeholder for potential future Vue-specific type augmentations).

## Nitro Type Declarations

Type declarations for Nitro, Nuxt's server engine.

### **[nitro.d.ts](./nitro.d.ts)**
Nitro type aggregator. References all Nitro-related type declaration files (`nitro-routes.d.ts`, `nitro-config.d.ts`, `nitro-imports.d.ts`).

### **[nitro-nuxt.d.ts](./nitro-nuxt.d.ts)**
Nitro-Nuxt integration type declarations. Extends Nitro types with Nuxt-specific configuration, hooks, and features. Includes runtime config app settings, route config/rules (SSR, noScripts, appMiddleware, appLayout), and Nuxt runtime hooks (dev:ssr-logs, render:html, render:island).

### **[nitro-routes.d.ts](./nitro-routes.d.ts)**
Internal API route type declarations. Defines types for Nuxt error handling (`/__nuxt_error`), island rendering (`/__nuxt_island/**`), and Content API routes (`/__nuxt_content/**`).

### **[nitro-config.d.ts](./nitro-config.d.ts)**
Nitro app config type declarations. Defines the app configuration type available in Nitro context by extending Nitro's `AppConfig` interface with user configuration.

### **[nitro-middleware.d.ts](./nitro-middleware.d.ts)**
Nitro middleware type declarations. Defines middleware keys available for Nitro route configuration. Extends `NitroRouteConfig` to accept middleware arrays or records.

### **[nitro-layouts.d.ts](./nitro-layouts.d.ts)**
Nitro layouts type declarations. Defines layout keys available for Nitro route configuration. Extends `NitroRouteConfig` and `NitroRouteRules` to accept layout configuration.

## Usage

These type declarations are automatically referenced by your TypeScript configuration and provide:

- **IntelliSense** - Auto-completion in your IDE for all auto-imported functions and components
- **Type Safety** - Compile-time type checking for composables, utilities, and configuration
- **Documentation** - Inline documentation for available APIs and their signatures

The types are regenerated whenever you run `nuxt dev` or `nuxt build`, so they always reflect your current project configuration and installed modules.
