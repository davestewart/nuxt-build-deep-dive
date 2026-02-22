// Vue core
export { isVue2, isVue3 } from 'vue-demi';
export { withCtx, withDirectives, withKeys, withMemo, withModifiers, withScopeId, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, computed, customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, watch, watchEffect, watchPostEffect, watchSyncEffect, onWatcherCleanup, isShallow, effect, effectScope, getCurrentScope, onScopeDispose, defineComponent, defineAsyncComponent, resolveComponent, getCurrentInstance, h, inject, hasInjectionContext, nextTick, provide, toValue, useModel, useAttrs, useCssModule, useCssVars, useSlots, useTransitionState, useId, useTemplateRef, useShadowRoot, Component, ComponentPublicInstance, ComputedRef, DirectiveBinding, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, MaybeRef, MaybeRefOrGetter, VNode, WritableComputedRef } from 'vue';

// Vue Router
export { onBeforeRouteLeave, onBeforeRouteUpdate, useLink } from 'vue-router';

// Nuxt app core
export { useNuxtApp, tryUseNuxtApp, defineNuxtPlugin, definePayloadPlugin, useRuntimeConfig, defineAppConfig } from '#app/nuxt';
export { useAppConfig, updateAppConfig } from '#app/config';

// Components
export { defineNuxtLink } from '#app/components/nuxt-link';
export { defineNuxtComponent } from '#app/composables/component';
export { defineLazyHydrationComponent } from '#app/composables/lazy-hydration';

// Routing & navigation
export { abortNavigation, addRouteMiddleware, defineNuxtRouteMiddleware, setPageLayout, navigateTo, useRoute, useRouter } from '#app/composables/router';
export { definePageMeta } from '../node_modules/nuxt/dist/pages/runtime/composables';

// Data fetching
export { useAsyncData, useLazyAsyncData, useNuxtData, refreshNuxtData, clearNuxtData } from '#app/composables/asyncData';
export { useFetch, useLazyFetch } from '#app/composables/fetch';

// State management
export { useState, clearNuxtState } from '#app/composables/state';
export { useCookie, refreshCookie } from '#app/composables/cookie';

// Error handling
export { clearError, createError, isNuxtError, showError, useError } from '#app/composables/error';

// SSR & prerendering
export { onPrehydrate, prerenderRoutes, useRequestHeader, useRequestHeaders, useResponseHeader, useRequestEvent, useRequestFetch, setResponseStatus } from '#app/composables/ssr';
export { useHydration } from '#app/composables/hydrate';
export { isPrerendered, loadPayload, preloadPayload, definePayloadReducer, definePayloadReviver } from '#app/composables/payload';

// Head management
export { useHead, useHeadSafe, useServerHeadSafe, useServerHead, useSeoMeta, useServerSeoMeta, injectHead } from '#app/composables/head';

// Performance & loading
export { preloadComponents, prefetchComponents, preloadRouteComponents } from '#app/composables/preload';
export { useLoadingIndicator } from '#app/composables/loading-indicator';
export { reloadNuxtApp } from '#app/composables/chunk';

// Lifecycle & utilities
export { callOnce } from '#app/composables/once';
export { onNuxtReady } from '#app/composables/ready';
export { useRequestURL } from '#app/composables/url';
export { usePreviewMode } from '#app/composables/preview';
export { useRouteAnnouncer } from '#app/composables/route-announcer';
export { useRuntimeHook } from '#app/composables/runtime-hook';
export { getAppManifest, getRouteRules } from '#app/composables/manifest';

// Compatibility polyfills
export { requestIdleCallback, cancelIdleCallback } from '#app/compat/idle-callback';
export { setInterval } from '#app/compat/interval';

// Third-party scripts
export { useScriptTriggerConsent, useScriptEventPage, useScriptTriggerElement, useScript, useScriptGoogleAnalytics, useScriptPlausibleAnalytics, useScriptCrisp, useScriptClarity, useScriptCloudflareWebAnalytics, useScriptFathomAnalytics, useScriptMatomoAnalytics, useScriptGoogleTagManager, useScriptGoogleAdsense, useScriptSegment, useScriptMetaPixel, useScriptXPixel, useScriptIntercom, useScriptHotjar, useScriptStripe, useScriptLemonSqueezy, useScriptVimeoPlayer, useScriptYouTubePlayer, useScriptGoogleMaps, useScriptNpm, useScriptUmamiAnalytics, useScriptSnapchatPixel, useScriptRybbitAnalytics, useScriptDatabuddyAnalytics, useScriptRedditPixel, useScriptPayPal } from '#app/composables/script-stubs';

// Content module
export { queryCollection, queryCollectionSearchSections, queryCollectionNavigation, queryCollectionItemSurroundings } from '../node_modules/@nuxt/content/dist/runtime/client';

// MDC (Markdown Components)
export { flatUnwrap as unwrapSlot } from '../node_modules/@nuxtjs/mdc/dist/runtime/utils/node';
export { parseMarkdown } from '../node_modules/@nuxtjs/mdc/dist/runtime/parser';
export { stringifyMarkdown } from '../node_modules/@nuxtjs/mdc/dist/runtime/stringify';
