import {
  Skeleton
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

// src/app/components/form_elements/FormSkeletons.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/form_elements/FormSkeletons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/form_elements/FormSkeletons.tsx"
  );
  import.meta.hot.lastModified = "1708453660123.4019";
}
var FormInputSkeleton = ({
  height
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { width: "full", height: height ?? "36px", borderRadius: "md" }, void 0, false, {
  fileName: "src/app/components/form_elements/FormSkeletons.tsx",
  lineNumber: 24,
  columnNumber: 7
}, this);
_c = FormInputSkeleton;
var FormTextareaSkeleton = ({
  height
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { width: "full", height: height ?? "80px", borderRadius: "md" }, void 0, false, {
  fileName: "src/app/components/form_elements/FormSkeletons.tsx",
  lineNumber: 28,
  columnNumber: 7
}, this);
_c2 = FormTextareaSkeleton;
var _c;
var _c2;
$RefreshReg$(_c, "FormInputSkeleton");
$RefreshReg$(_c2, "FormTextareaSkeleton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  FormInputSkeleton,
  FormTextareaSkeleton
};
//# sourceMappingURL=/build/_shared/chunk-SS7UHKN2.js.map
