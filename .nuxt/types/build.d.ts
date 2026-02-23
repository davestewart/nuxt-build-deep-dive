// Module declarations for Nuxt build virtual modules.
// Accessible via #build/* imports.

// App core
declare module "#build/app-component.mjs";
declare module "#build/root-component.mjs";
declare module "#build/error-component.mjs";
declare module "#build/test-component-wrapper.mjs";

// App configuration
declare module "#build/nuxt.config.mjs";
declare module "#build/paths.mjs";

// Client runtime
declare module "#build/nitro.client.mjs";
declare module "#build/fetch.mjs";
declare module "#build/global-polyfills.mjs";

// Plugins
declare module "#build/plugins.client.mjs";
declare module "#build/plugins.server.mjs";

// Routing
declare module "#build/routes.mjs";
declare module "#build/pages.mjs";
declare module "#build/router.options.mjs";
declare module "#build/route-rules.mjs";
declare module "#build/middleware.mjs";

// Layouts
declare module "#build/layouts.mjs";

// Styling
declare module "#build/css.mjs";

// Head management
declare module "#build/unhead-options.mjs";
declare module "#build/unhead.config.mjs";

// Components
declare module "#build/components.plugin.mjs";
declare module "#build/component-names.mjs";
declare module "#build/components.islands.mjs";
declare module "#build/component-chunk.mjs";
