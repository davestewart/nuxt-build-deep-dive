# Nuxt Build Directory

This directory contains all build artifacts and generated files for your Nuxt application. 

During development and build, Nuxt core and installed modules automatically generate optimized runtime code, pre-compiled assets, type definitions, and configuration.

The TypeScript configuration files are particularly critical - they define your project's type system structure and enable your IDE and compiler to understand what's available in each context (client, server, shared).

This build-time generation enables features like type-safe APIs, IntelliSense for auto-imports, and fast content queries without additional runtime processing.

> [!NOTE]
> Note that it is a dynamic environment - files are regenerated on every build, and development server start, so they should never be manually edited or committed to version control. Instead, they serve as the output of Nuxt's build process and provide the necessary types and runtime code for your application to function correctly.

## Project TypeScript Configuration Files

TypeScript compiler configurations for different build contexts. These files are referenced directly from your root `tsconfig.json`.

> **How they work together:** Each config uses `include` to specify which files belong to that context and `paths` to define module resolution aliases (like `#app`, `#imports`, `#components`). This creates isolated TypeScript environments - for example, client code can't accidentally import server-only modules, and server code has access to Node.js types that aren't available in the browser. The configs reference common files where needed to share types across boundaries.

### **[tsconfig.app.json](./tsconfig.app.json)**
TypeScript configuration for client-side application code. Includes your `app/` directory (with all subdirectories like pages, components, composables), module runtime code, shared code, and root type definitions. Excludes server-only code.

### **[tsconfig.server.json](./tsconfig.server.json)**
TypeScript configuration for server-side code. Includes your `server/` directory, Nitro server runtime, shared code, and Content collection types.

### **[tsconfig.shared.json](./tsconfig.shared.json)**
TypeScript configuration for code shared between client and server contexts. Includes your `shared/` directory, module shared code, and root type definitions.

## Project Aggregate Exports

These files are accessible via TypeScript path aliases (configured in the tsconfig files) and provide convenient imports for components and composables.

### **[imports.d.ts](./imports.d.ts)**
Aggregated exports of all auto-imported composables and utilities, accessible via the `#imports` path alias.

Contains every function that Nuxt auto-imports globally - from Vue core (reactivity, lifecycle, component APIs), Vue Router, Nuxt's built-in composables, and all installed modules.

> **Why it exists:** Enables explicit imports when you prefer them (e.g., `import { ref, computed } from '#imports'`), when you need tree-shaking, or when auto-imports are disabled. The type-only version in [`types/imports.d.ts`](./types/imports.d.ts) provides global type declarations for when these are used without imports.

### **[components.d.ts](./components.d.ts)**
Aggregated type definitions for all auto-imported components, accessible via the `#components` path alias.

Contains types for every component Nuxt auto-imports globally - from your `components/` directory and installed modules - including type utilities for lazy loading and hydration strategies (like `LazyComponent` and `IslandComponent`).

> **Why it exists:** Enables explicit component type imports when you need them (e.g., `import type { Counter } from '#components'`) for type-only operations. The detailed, commented version in [`types/components.d.ts`](./types/components.d.ts) provides global type declarations for template usage.

## Project Type Reference Files

Type reference aggregator files that use triple-slash directives (`/// <reference path="..." />`) to pull in all type definitions from the `types/` directory. These act as entry points for TypeScript to discover all generated types.

### **[nuxt.d.ts](./nuxt.d.ts)**
Main type reference entry point for your application code. References all app-side, shared, and build-related type declarations from the `types/` directory.

> **Why it exists:** Your root `tsconfig.json` includes this file, which then brings in all auto-import types, component types, and configuration types, giving you IntelliSense for everything Nuxt provides globally.

### **[nuxt.shared.d.ts](./nuxt.shared.d.ts)**
Type reference entry point for shared code. References types available in both client and server contexts (like `useRuntimeConfig`, `useAppConfig`, etc.).

> **Why it exists:** Provides types for utilities that work universally, ensuring type safety for code that runs in both environments.

## Project Type Declarations Directory

### **[types/](./types/)**
Comprehensive directory containing all type declaration files organized by purpose. Includes auto-imports, components, configuration, plugins, middleware, layouts, build, and Nitro types. See [types/README.md](./types/README.md) for detailed documentation.

## Nuxt Content Module Files

The Nuxt Content module provides file-based CMS capabilities, allowing you to query and render markdown, YAML, CSV, and JSON files as content. It automatically installs and configures the MDC (Markdown Components) module for rich markdown rendering.

### **[content/](./content/)**
Generated files for the Nuxt Content module. Contains a compiled database of your content files with full-text search capabilities.

- **database.compressed.mjs** - Compressed SQLite-like database containing all parsed content from your `content/` directory. This enables fast queries using `queryContent()`.
- **sql_dump.txt** - Human-readable SQL dump of the content database structure for debugging
- **components.ts** - Auto-generated component definitions for content-specific components
- **manifest.ts** - Content collection manifest listing all available content files and their metadata
- **types.d.ts** - TypeScript type declarations for your content collections, providing type-safe content queries

### MDC (Markdown Components) Files

Generated by the `@nuxtjs/mdc` module (installed as a dependency of Nuxt Content). MDC enables Vue components in markdown and provides advanced markdown rendering features like syntax highlighting, custom components, and slots.

### **[mdc-configs.mjs](./mdc-configs.mjs)**
MDC configuration exports defining how markdown should be parsed and rendered, including which Prose components to use.

### **[mdc-highlighter.mjs](./mdc-highlighter.mjs)**
Syntax highlighter bundle for code blocks in markdown. Includes the Shiki highlighter with configured themes and language grammars.

### **[mdc-image-component.mjs](./mdc-image-component.mjs)**
Image component configuration for rendering markdown images, potentially with lazy loading and optimization.

### **[mdc-imports.mjs](./mdc-imports.mjs)**
MDC module import aggregator that exports all MDC utilities like `parseMarkdown()` and `stringifyMarkdown()` for runtime use.

## Build / Internal Files

These files are used internally by Nuxt's build process and should not be modified by users.

### **[tsconfig.node.json](./tsconfig.node.json)**
TypeScript configuration for Nuxt's internal build process and your `nuxt.config.ts` file. **This is managed by Nuxt itself and should never be modified by users.** It's used to type-check the Nuxt build tooling, not your application code.

### **[tsconfig.json](./tsconfig.json)**
Legacy compatibility configuration that references all other configs. **This file exists for backwards compatibility with older tooling and is not necessary for your project.** Modern Nuxt projects should reference the specific context configs (`tsconfig.app.json`, `tsconfig.server.json`, etc.) directly from your root `tsconfig.json` instead.

### **[nuxt.node.d.ts](./nuxt.node.d.ts)**
Internal type reference entry point for Nuxt's build environment. References types for build scripts and `nuxt.config.ts`.

> **Why it exists:** Used internally by Nuxt to provide TypeScript support during the build process and for your Nuxt config file, giving you auto-completion for Nuxt configuration options and build hooks.

### **[app.config.mjs](./app.config.mjs)**
Generated app configuration module built during compilation. Exports the resolved app config with hot module replacement (HMR) support in development. **Note:** This file contains mostly boilerplate because there's no `app.config.ts` file in your project. If you create an `app/app.config.ts` or root `app.config.ts` file, your configuration will be merged into the `inlineConfig` object here and rebuilt.

### **[schema/](./schema/)**
Nuxt configuration schema files that define the valid structure and types for your `nuxt.config.ts`. These enable validation and auto-completion in your Nuxt config.

- **nuxt.schema.json** - [JSON Schema](https://json-schema.org/) definition of all valid Nuxt configuration options. Used by IDEs and validation tools to check your config file and provide IntelliSense. Generated from Nuxt core and all installed modules.
- **nuxt.schema.d.ts** - TypeScript type declarations derived from the JSON schema. Provides compile-time type checking for configuration objects.

> **Why this exists:** When you add modules or change configuration, Nuxt regenerates these schemas to include all available options. This is how your IDE knows what properties are valid in `nuxt.config.ts` and what their types should be. See [Nuxt Kit schema docs](https://nuxt.com/docs/guide/going-further/kit#schema) for more details.

### **[manifest/](./manifest/)**
Build manifest metadata containing information about your application's structure and build artifacts. Used internally by Nuxt for various optimizations.

**What's in here:**
- Route metadata for pre-rendering and route rules
- Component registration and lazy-loading information
- Module build information
- Asset manifest for production deployments

> **Why this exists:** The manifest enables features like automatic route pre-rendering, intelligent code splitting, and optimized production builds. Nuxt and Nitro use this data during both build time and runtime to optimize your application's performance and deployment. See [Nuxt Manifest docs](https://nuxt.com/docs/guide/going-further/internals#manifest) for technical details.

## Usage

This directory is regenerated on every build and development server start. The files within provide:

- **Type Safety** - TypeScript definitions for auto-imports, components, and configuration
- **IDE Support** - IntelliSense and auto-completion in your editor
- **Build Optimization** - Compiled and optimized code for production
- **Module Integration** - Generated files from Nuxt modules (Content, MDC, etc.)

**Important:** Never commit this directory to version control (it should be in `.gitignore`) and never manually edit files within it, as they will be overwritten on the next build.
