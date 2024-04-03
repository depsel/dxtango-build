import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-C6PYO3SA.js";
import {
  createHotContext
} from "/build/_shared/chunk-Z5QATG7W.js";
import {
  require_react
} from "/build/_shared/chunk-MIDFM7PG.js";
import {
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// src/app/components/ClientOnly.tsx
init_Buffer();

// src/code.client/hooks/useHydrated.ts
init_Buffer();
var import_react = __toESM(require_react(), 1);
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return (0, import_react.useSyncExternalStore)(
    subscribe,
    () => true,
    () => false
  );
}

// src/app/components/ClientOnly.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/ClientOnly.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/ClientOnly.tsx"
  );
  import.meta.hot.lastModified = "1711947452192.917";
}
function ClientOnly({
  children,
  fallback = null
}) {
  _s();
  return useHydrated() ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
    fileName: "src/app/components/ClientOnly.tsx",
    lineNumber: 43,
    columnNumber: 26
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: fallback }, void 0, false, {
    fileName: "src/app/components/ClientOnly.tsx",
    lineNumber: 43,
    columnNumber: 44
  }, this);
}
_s(ClientOnly, "C0k0BFxzCOs2/7WvjhO8H2Jzc4g=", false, function() {
  return [useHydrated];
});
_c = ClientOnly;
var _c;
$RefreshReg$(_c, "ClientOnly");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ClientOnly
};
//# sourceMappingURL=/build/_shared/chunk-RPM5OM45.js.map
