// Auto-import type declarations for Nitro server-side utilities.
// These are globally available in server/ routes and middleware without explicit imports.
declare global {
  // H3 core types
  const H3Error: typeof import('../../node_modules/h3').H3Error
  const H3Event: typeof import('../../node_modules/h3').H3Event

  // H3 request - Headers
  const getHeader: typeof import('../../node_modules/h3').getHeader
  const getHeaders: typeof import('../../node_modules/h3').getHeaders
  const getRequestHeader: typeof import('../../node_modules/h3').getRequestHeader
  const getRequestHeaders: typeof import('../../node_modules/h3').getRequestHeaders
  const appendHeader: typeof import('../../node_modules/h3').appendHeader
  const appendHeaders: typeof import('../../node_modules/h3').appendHeaders
  const setHeader: typeof import('../../node_modules/h3').setHeader
  const setHeaders: typeof import('../../node_modules/h3').setHeaders

  // H3 request - Request info
  const getMethod: typeof import('../../node_modules/h3').getMethod
  const getRequestHost: typeof import('../../node_modules/h3').getRequestHost
  const getRequestIP: typeof import('../../node_modules/h3').getRequestIP
  const getRequestPath: typeof import('../../node_modules/h3').getRequestPath
  const getRequestProtocol: typeof import('../../node_modules/h3').getRequestProtocol
  const getRequestURL: typeof import('../../node_modules/h3').getRequestURL
  const getRequestFingerprint: typeof import('../../node_modules/h3').getRequestFingerprint
  const getRequestWebStream: typeof import('../../node_modules/h3').getRequestWebStream

  // H3 request - Query and params
  const getQuery: typeof import('../../node_modules/h3').getQuery
  const getValidatedQuery: typeof import('../../node_modules/h3').getValidatedQuery
  const getRouterParam: typeof import('../../node_modules/h3').getRouterParam
  const getRouterParams: typeof import('../../node_modules/h3').getRouterParams
  const getValidatedRouterParams: typeof import('../../node_modules/h3').getValidatedRouterParams

  // H3 request - Body
  const readBody: typeof import('../../node_modules/h3').readBody
  const readValidatedBody: typeof import('../../node_modules/h3').readValidatedBody
  const readRawBody: typeof import('../../node_modules/h3').readRawBody
  const readFormData: typeof import('../../node_modules/h3').readFormData
  const readMultipartFormData: typeof import('../../node_modules/h3').readMultipartFormData

  // H3 request - Cookies
  const getCookie: typeof import('../../node_modules/h3').getCookie
  const parseCookies: typeof import('../../node_modules/h3').parseCookies
  const setCookie: typeof import('../../node_modules/h3').setCookie
  const deleteCookie: typeof import('../../node_modules/h3').deleteCookie
  const splitCookiesString: typeof import('../../node_modules/h3').splitCookiesString

  // H3 request - Session
  const getSession: typeof import('../../node_modules/h3').getSession
  const useSession: typeof import('../../node_modules/h3').useSession
  const updateSession: typeof import('../../node_modules/h3').updateSession
  const clearSession: typeof import('../../node_modules/h3').clearSession
  const sealSession: typeof import('../../node_modules/h3').sealSession
  const unsealSession: typeof import('../../node_modules/h3').unsealSession

  // H3 response - Headers
  const getResponseHeader: typeof import('../../node_modules/h3').getResponseHeader
  const getResponseHeaders: typeof import('../../node_modules/h3').getResponseHeaders
  const appendResponseHeader: typeof import('../../node_modules/h3').appendResponseHeader
  const appendResponseHeaders: typeof import('../../node_modules/h3').appendResponseHeaders
  const setResponseHeader: typeof import('../../node_modules/h3').setResponseHeader
  const setResponseHeaders: typeof import('../../node_modules/h3').setResponseHeaders
  const removeResponseHeader: typeof import('../../node_modules/h3').removeResponseHeader
  const clearResponseHeaders: typeof import('../../node_modules/h3').clearResponseHeaders

  // H3 response - Status
  const getResponseStatus: typeof import('../../node_modules/h3').getResponseStatus
  const getResponseStatusText: typeof import('../../node_modules/h3').getResponseStatusText
  const setResponseStatus: typeof import('../../node_modules/h3').setResponseStatus
  const sanitizeStatusCode: typeof import('../../node_modules/h3').sanitizeStatusCode
  const sanitizeStatusMessage: typeof import('../../node_modules/h3').sanitizeStatusMessage

  // H3 response - Send
  const send: typeof import('../../node_modules/h3').send
  const sendNoContent: typeof import('../../node_modules/h3').sendNoContent
  const sendRedirect: typeof import('../../node_modules/h3').sendRedirect
  const sendStream: typeof import('../../node_modules/h3').sendStream
  const sendIterable: typeof import('../../node_modules/h3').sendIterable
  const sendWebResponse: typeof import('../../node_modules/h3').sendWebResponse
  const sendError: typeof import('../../node_modules/h3').sendError
  const sendProxy: typeof import('../../node_modules/h3').sendProxy

  // H3 - Error handling
  const createError: typeof import('../../node_modules/h3').createError
  const isError: typeof import('../../node_modules/h3').isError

  // H3 - Event handlers
  const defineEventHandler: typeof import('../../node_modules/h3').defineEventHandler
  const eventHandler: typeof import('../../node_modules/h3').eventHandler
  const defineLazyEventHandler: typeof import('../../node_modules/h3').defineLazyEventHandler
  const lazyEventHandler: typeof import('../../node_modules/h3').lazyEventHandler
  const dynamicEventHandler: typeof import('../../node_modules/h3').dynamicEventHandler
  const toEventHandler: typeof import('../../node_modules/h3').toEventHandler
  const isEventHandler: typeof import('../../node_modules/h3').isEventHandler

  // H3 - Event and app
  const createEvent: typeof import('../../node_modules/h3').createEvent
  const isEvent: typeof import('../../node_modules/h3').isEvent
  const createApp: typeof import('../../node_modules/h3').createApp
  const createAppEventHandler: typeof import('../../node_modules/h3').createAppEventHandler
  const createRouter: typeof import('../../node_modules/h3').createRouter
  const useBase: typeof import('../../node_modules/h3').useBase

  // H3 - Middleware
  const defineRequestMiddleware: typeof import('../../node_modules/h3').defineRequestMiddleware
  const defineResponseMiddleware: typeof import('../../node_modules/h3').defineResponseMiddleware

  // H3 - Node.js adapters
  const defineNodeListener: typeof import('../../node_modules/h3').defineNodeListener
  const defineNodeMiddleware: typeof import('../../node_modules/h3').defineNodeMiddleware
  const callNodeListener: typeof import('../../node_modules/h3').callNodeListener
  const fromNodeMiddleware: typeof import('../../node_modules/h3').fromNodeMiddleware
  const promisifyNodeListener: typeof import('../../node_modules/h3').promisifyNodeListener
  const toNodeListener: typeof import('../../node_modules/h3').toNodeListener

  // H3 - Web standard adapters
  const fromWebHandler: typeof import('../../node_modules/h3').fromWebHandler
  const toWebHandler: typeof import('../../node_modules/h3').toWebHandler
  const fromPlainHandler: typeof import('../../node_modules/h3').fromPlainHandler
  const toPlainHandler: typeof import('../../node_modules/h3').toPlainHandler
  const toWebRequest: typeof import('../../node_modules/h3').toWebRequest
  const isWebResponse: typeof import('../../node_modules/h3').isWebResponse

  // H3 - WebSocket
  const defineWebSocket: typeof import('../../node_modules/h3').defineWebSocket
  const defineWebSocketHandler: typeof import('../../node_modules/h3').defineWebSocketHandler

  // H3 - Streaming
  const createEventStream: typeof import('../../node_modules/h3').createEventStream
  const isStream: typeof import('../../node_modules/h3').isStream

  // H3 - CORS
  const handleCors: typeof import('../../node_modules/h3').handleCors
  const isCorsOriginAllowed: typeof import('../../node_modules/h3').isCorsOriginAllowed
  const appendCorsHeaders: typeof import('../../node_modules/h3').appendCorsHeaders
  const appendCorsPreflightHeaders: typeof import('../../node_modules/h3').appendCorsPreflightHeaders
  const isPreflightRequest: typeof import('../../node_modules/h3').isPreflightRequest

  // H3 - Caching
  const handleCacheHeaders: typeof import('../../node_modules/h3').handleCacheHeaders

  // H3 - Proxy
  const proxyRequest: typeof import('../../node_modules/h3').proxyRequest
  const fetchWithEvent: typeof import('../../node_modules/h3').fetchWithEvent
  const getProxyRequestHeaders: typeof import('../../node_modules/h3').getProxyRequestHeaders

  // H3 - Static files
  const serveStatic: typeof import('../../node_modules/h3').serveStatic

  // H3 - Utilities
  const assertMethod: typeof import('../../node_modules/h3').assertMethod
  const isMethod: typeof import('../../node_modules/h3').isMethod
  const defaultContentType: typeof import('../../node_modules/h3').defaultContentType
  const writeEarlyHints: typeof import('../../node_modules/h3').writeEarlyHints

  // Nitro - App and config
  const useNitroApp: typeof import('../../node_modules/nitropack/dist/runtime/internal/app').useNitroApp
  const useRuntimeConfig: typeof import('../../node_modules/nitropack/dist/runtime/internal/config').useRuntimeConfig
  const useAppConfig: typeof import('../../node_modules/nitropack/dist/runtime/internal/config').useAppConfig
  const defineAppConfig: typeof import('../../node_modules/@nuxt/nitro-server/dist/runtime/utils/config').defineAppConfig

  // Nitro - Event context
  const useEvent: typeof import('../../node_modules/nitropack/dist/runtime/internal/context').useEvent

  // Nitro - Storage
  const useStorage: typeof import('../../node_modules/nitropack/dist/runtime/internal/storage').useStorage

  // Nitro - Caching
  const cachedFunction: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').cachedFunction
  const defineCachedFunction: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').defineCachedFunction
  const cachedEventHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').cachedEventHandler
  const defineCachedEventHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache').defineCachedEventHandler

  // Nitro - Plugins
  const defineNitroPlugin: typeof import('../../node_modules/nitropack/dist/runtime/internal/plugin').defineNitroPlugin
  const nitroPlugin: typeof import('../../node_modules/nitropack/dist/runtime/internal/plugin').nitroPlugin

  // Nitro - Error handling
  const defineNitroErrorHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/error/utils').defineNitroErrorHandler

  // Nitro - Rendering
  const defineRenderHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/renderer').defineRenderHandler

  // Nitro - Route rules and metadata
  const getRouteRules: typeof import('../../node_modules/nitropack/dist/runtime/internal/route-rules').getRouteRules
  const defineRouteMeta: typeof import('../../node_modules/nitropack/dist/runtime/internal/meta').defineRouteMeta

  // Nitro - Tasks
  const defineTask: typeof import('../../node_modules/nitropack/dist/runtime/internal/task').defineTask
  const runTask: typeof import('../../node_modules/nitropack/dist/runtime/internal/task').runTask

  // Nuxt - Asset URLs
  const __buildAssetsURL: typeof import('../../node_modules/@nuxt/nitro-server/dist/runtime/utils/paths').buildAssetsURL
  const __publicAssetsURL: typeof import('../../node_modules/@nuxt/nitro-server/dist/runtime/utils/paths').publicAssetsURL

  // Nuxt Content module
  const queryCollection: typeof import('../../node_modules/@nuxt/content/dist/runtime/nitro').queryCollection
  const queryCollectionItemSurroundings: typeof import('../../node_modules/@nuxt/content/dist/runtime/nitro').queryCollectionItemSurroundings
  const queryCollectionNavigation: typeof import('../../node_modules/@nuxt/content/dist/runtime/nitro').queryCollectionNavigation
  const queryCollectionSearchSections: typeof import('../../node_modules/@nuxt/content/dist/runtime/nitro').queryCollectionSearchSections

  // MDC module
  const parseMarkdown: typeof import('../../node_modules/@nuxtjs/mdc/dist/runtime/parser').parseMarkdown
  const stringifyMarkdown: typeof import('../../node_modules/@nuxtjs/mdc/dist/runtime/stringify').stringifyMarkdown
}
// for type re-export
declare global {
  // @ts-ignore
  export type { EventHandler, EventHandlerRequest, EventHandlerResponse, EventHandlerObject, H3EventContext } from '../../node_modules/h3'
  import('../../node_modules/h3')
}
export { H3Event, H3Error, appendCorsHeaders, appendCorsPreflightHeaders, appendHeader, appendHeaders, appendResponseHeader, appendResponseHeaders, assertMethod, callNodeListener, clearResponseHeaders, clearSession, createApp, createAppEventHandler, createError, createEvent, createEventStream, createRouter, defaultContentType, defineEventHandler, defineLazyEventHandler, defineNodeListener, defineNodeMiddleware, defineRequestMiddleware, defineResponseMiddleware, defineWebSocket, defineWebSocketHandler, deleteCookie, dynamicEventHandler, eventHandler, fetchWithEvent, fromNodeMiddleware, fromPlainHandler, fromWebHandler, getCookie, getHeader, getHeaders, getMethod, getProxyRequestHeaders, getQuery, getRequestFingerprint, getRequestHeader, getRequestHeaders, getRequestHost, getRequestIP, getRequestPath, getRequestProtocol, getRequestURL, getRequestWebStream, getResponseHeader, getResponseHeaders, getResponseStatus, getResponseStatusText, getRouterParam, getRouterParams, getSession, getValidatedQuery, getValidatedRouterParams, handleCacheHeaders, handleCors, isCorsOriginAllowed, isError, isEvent, isEventHandler, isMethod, isPreflightRequest, isStream, isWebResponse, lazyEventHandler, parseCookies, promisifyNodeListener, proxyRequest, readBody, readFormData, readMultipartFormData, readRawBody, readValidatedBody, removeResponseHeader, sanitizeStatusCode, sanitizeStatusMessage, sealSession, send, sendError, sendIterable, sendNoContent, sendProxy, sendRedirect, sendStream, sendWebResponse, serveStatic, setCookie, setHeader, setHeaders, setResponseHeader, setResponseHeaders, setResponseStatus, splitCookiesString, toEventHandler, toNodeListener, toPlainHandler, toWebHandler, toWebRequest, unsealSession, updateSession, useBase, useSession, writeEarlyHints } from 'h3';
export { useNitroApp } from 'nitropack/runtime/internal/app';
export { useRuntimeConfig, useAppConfig } from 'nitropack/runtime/internal/config';
export { defineNitroPlugin, nitroPlugin } from 'nitropack/runtime/internal/plugin';
export { defineCachedFunction, defineCachedEventHandler, cachedFunction, cachedEventHandler } from 'nitropack/runtime/internal/cache';
export { useStorage } from 'nitropack/runtime/internal/storage';
export { defineRenderHandler } from 'nitropack/runtime/internal/renderer';
export { defineRouteMeta } from 'nitropack/runtime/internal/meta';
export { getRouteRules } from 'nitropack/runtime/internal/route-rules';
export { useEvent } from 'nitropack/runtime/internal/context';
export { defineTask, runTask } from 'nitropack/runtime/internal/task';
export { defineNitroErrorHandler } from 'nitropack/runtime/internal/error/utils';
export { buildAssetsURL as __buildAssetsURL, publicAssetsURL as __publicAssetsURL } from '../../node_modules/@nuxt/nitro-server/dist/runtime/utils/paths';
export { defineAppConfig } from '../../node_modules/@nuxt/nitro-server/dist/runtime/utils/config';
export { queryCollection, queryCollectionSearchSections, queryCollectionNavigation, queryCollectionItemSurroundings } from '../../node_modules/@nuxt/content/dist/runtime/nitro';
export { parseMarkdown } from '../../node_modules/@nuxtjs/mdc/dist/runtime/parser';
export { stringifyMarkdown } from '../../node_modules/@nuxtjs/mdc/dist/runtime/stringify';
