import {
  Alert,
  Box,
  ListItem,
  UnorderedList
} from "/build/_shared/chunk-47TYDRZU.js";
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

// src/app/components/form_elements/FormErrors.tsx
init_Buffer();
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/form_elements/FormErrors.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/form_elements/FormErrors.tsx"
  );
  import.meta.hot.lastModified = "1711474084152.613";
}
var FormErrors = ({
  errors
}) => {
  _s();
  const formErrorsRef = (0, import_react.useRef)(null);
  return Object.keys(errors).length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "full", sx: {
    mb: 4
  }, ref: formErrorsRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { status: "error", variant: "left-accent", sx: {
    p: 4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnorderedList, { fontSize: "sm", styleType: "none", sx: {
    m: 0
  }, children: Object.values(errors).map((error, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, { children: error?.message?.toString() }, key, false, {
    fileName: "src/app/components/form_elements/FormErrors.tsx",
    lineNumber: 38,
    columnNumber: 54
  }, this)) }, void 0, false, {
    fileName: "src/app/components/form_elements/FormErrors.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/components/form_elements/FormErrors.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/components/form_elements/FormErrors.tsx",
    lineNumber: 29,
    columnNumber: 39
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
    fileName: "src/app/components/form_elements/FormErrors.tsx",
    lineNumber: 41,
    columnNumber: 14
  }, this);
};
_s(FormErrors, "ZERNP3LrqMkg4PeIxCIwyC4GKgI=");
_c = FormErrors;
var _c;
$RefreshReg$(_c, "FormErrors");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  FormErrors
};
//# sourceMappingURL=/build/_shared/chunk-G3GG5NMP.js.map
