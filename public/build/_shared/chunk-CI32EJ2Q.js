import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  HStack
} from "/build/_shared/chunk-47TYDRZU.js";
import {
  useNavigate
} from "/build/_shared/chunk-W7WA2KNM.js";
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

// src/app/components/ApiErrors.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/ApiErrors.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/ApiErrors.tsx"
  );
  import.meta.hot.lastModified = "1708552390245.1768";
}
var ApiErrors = ({
  error,
  retry,
  cancelAndNavigateTo
}) => {
  _s();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "full", sx: {
    mt: 6
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { status: "error", variant: "subtle", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", height: "200px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertIcon, { boxSize: "40px", sx: {
      mr: 0,
      mb: 4
    } }, void 0, false, {
      fileName: "src/app/components/ApiErrors.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    !error.message_to_user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDescription, { maxWidth: "sm", children: error.error }, void 0, false, {
      fileName: "src/app/components/ApiErrors.tsx",
      lineNumber: 39,
      columnNumber: 35
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertTitle, { mt: 4, mb: 1, fontSize: "lg", children: error.message_to_user?.title }, void 0, false, {
        fileName: "src/app/components/ApiErrors.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AlertDescription, { maxWidth: "sm", children: error.message_to_user?.content }, void 0, false, {
        fileName: "src/app/components/ApiErrors.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/ApiErrors.tsx",
      lineNumber: 39,
      columnNumber: 102
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { sx: {
      mt: 4
    }, spacing: 4, children: [
      retry && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: retry, colorScheme: "green", children: "Reintentar" }, void 0, false, {
        fileName: "src/app/components/ApiErrors.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      cancelAndNavigateTo != null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: () => {
        navigate(cancelAndNavigateTo);
      }, colorScheme: "red", children: "Cancelar" }, void 0, false, {
        fileName: "src/app/components/ApiErrors.tsx",
        lineNumber: 53,
        columnNumber: 43
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/ApiErrors.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/ApiErrors.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/components/ApiErrors.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(ApiErrors, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c = ApiErrors;
var _c;
$RefreshReg$(_c, "ApiErrors");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ApiErrors
};
//# sourceMappingURL=/build/_shared/chunk-CI32EJ2Q.js.map
