/** @type {import('@remix-run/dev').AppConfig} */

export default {
  ignoredRouteFiles: ['**/.*'],
  appDirectory: 'src/app',
  watchPaths: ['src/**'], // hot reload for every file inside the src directory
  extends: '@remix-run/eslint-config',
  browserNodeBuiltinsPolyfill: {
    modules: {
      events: true,
      stream: true,
      zlib: true,
      url: true,
      fs: true,
      buffer: true,
      path: true,
    },
    globals: {
      Buffer: true,
    },
  },
  serverDependenciesToBundle: [/^validator.* /],
};
