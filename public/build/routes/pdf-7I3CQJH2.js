import {
  ClientOnly
} from "/build/_shared/chunk-RPM5OM45.js";
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

// browser-route-module:routes/pdf/route.tsx?browser
init_Buffer();

// src/app/routes/pdf/route.tsx
init_Buffer();
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/pdf/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/pdf/route.tsx"
  );
  import.meta.hot.lastModified = "1711947775419.0823";
}
var PDFRenderer = (0, import_react.lazy)(_c = () => {
  return import("/build/_shared/PDFRenderer.client-H7KJZIOZ.js");
});
_c2 = PDFRenderer;
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
    fileName: "src/app/routes/pdf/route.tsx",
    lineNumber: 29,
    columnNumber: 27
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PDFRenderer, {}, void 0, false, {
    fileName: "src/app/routes/pdf/route.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/pdf/route.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/pdf/route.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c3 = Index;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "PDFRenderer$lazy");
$RefreshReg$(_c2, "PDFRenderer");
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/pdf-7I3CQJH2.js.map
