import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button
} from "/build/_shared/chunk-47TYDRZU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-C6PYO3SA.js";
import {
  createHotContext
} from "/build/_shared/chunk-Z5QATG7W.js";
import {
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// src/app/components/CommonErrors.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/CommonErrors.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/CommonErrors.tsx"
  );
  import.meta.hot.lastModified = "1708453660122.4875";
}
var CommonErrors = ({
  error,
  buttonProps
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "full", sx: {
    mt: 6
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { status: "error", variant: "subtle", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", height: "200px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertIcon, { boxSize: "40px", sx: {
      mr: 0,
      mb: 4
    } }, void 0, false, {
      fileName: "src/app/components/CommonErrors.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDescription, { maxWidth: "sm", children: error }, void 0, false, {
      fileName: "src/app/components/CommonErrors.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    buttonProps != null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { ...buttonProps, sx: {
      mt: 4
    }, children: buttonProps.label }, void 0, false, {
      fileName: "src/app/components/CommonErrors.tsx",
      lineNumber: 35,
      columnNumber: 33
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/CommonErrors.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/components/CommonErrors.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = CommonErrors;
var _c;
$RefreshReg$(_c, "CommonErrors");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CommonErrors
};
//# sourceMappingURL=/build/_shared/chunk-7ABW2NQY.js.map
