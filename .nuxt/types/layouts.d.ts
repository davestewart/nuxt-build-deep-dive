// Layout type declarations.
// Defines available layouts for use in page meta.

import type { ComputedRef, MaybeRef } from 'vue'

// Utility type to extract component props
type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

// Extend Nuxt app with layout types
declare module 'nuxt/app' {
  // Map of all registered layouts (empty if no layouts defined)
  interface NuxtLayouts {}

  // Union type of all layout keys
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts

  // Extend PageMeta to accept layout
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}
