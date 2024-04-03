import {
  Badge
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

// src/app/components/InlineError.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/InlineError.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/InlineError.tsx"
  );
  import.meta.hot.lastModified = "1708907589584.1802";
}
var InlineError = ({
  error
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { colorScheme: "red", sx: {
    mt: 2,
    p: 2,
    whiteSpace: "normal"
  }, children: error }, void 0, false, {
    fileName: "src/app/components/InlineError.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c = InlineError;
var _c;
$RefreshReg$(_c, "InlineError");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  InlineError
};
//# sourceMappingURL=/build/_shared/chunk-Y2FO4O2S.js.map
