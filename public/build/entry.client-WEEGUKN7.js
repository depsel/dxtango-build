import {
  require_client
} from "/build/_shared/chunk-7VTVVVU3.js";
import {
  CacheProvider,
  createCache
} from "/build/_shared/chunk-KYMAS5G7.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-W7WA2KNM.js";
import "/build/_shared/chunk-QF44Z2NU.js";
import "/build/_shared/chunk-IZBLBPV4.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-C6PYO3SA.js";
import {
  createHotContext
} from "/build/_shared/chunk-Z5QATG7W.js";
import "/build/_shared/chunk-NPWDTVBI.js";
import {
  require_react
} from "/build/_shared/chunk-MIDFM7PG.js";
import {
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// src/app/entry.client.tsx
init_Buffer();
var import_react = __toESM(require_react(), 1);
var import_client = __toESM(require_client(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1709227636823.0742";
}
var hydrate = () => {
  const emotionCache = createCache({ key: "css" });
  (0, import_react.startTransition)(() => {
    (0, import_client.hydrateRoot)(
      document,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheProvider, { value: emotionCache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "src/app/entry.client.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/app/entry.client.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "src/app/entry.client.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    );
  });
};
if (typeof requestIdleCallback === "function") {
  requestIdleCallback(hydrate);
} else {
  setTimeout(hydrate, 1);
}
//# sourceMappingURL=/build/entry.client-WEEGUKN7.js.map
