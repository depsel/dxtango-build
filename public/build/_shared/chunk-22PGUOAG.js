import {
  useController
} from "/build/_shared/chunk-FAFMUYJN.js";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Textarea
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

// src/app/components/form_elements/ControlledTextarea.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/form_elements/ControlledTextarea.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/form_elements/ControlledTextarea.tsx"
  );
  import.meta.hot.lastModified = "1711474084152.337";
}
var ControlledTextarea = (props) => {
  _s();
  const {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    control
  } = props;
  const {
    label,
    helperText,
    icon
  } = formControlInnerProps || {};
  const {
    field: {
      ref,
      onChange,
      value
    },
    fieldState: {
      invalid
    },
    formState: {
      errors
    }
  } = useController({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { ...formControlProps, isInvalid: invalid, children: [
    label != null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLabel, { htmlFor: fieldProps.name, sx: fieldProps.variant === "flushed" ? {
      fontSize: "sm",
      mb: 0
    } : {}, children: label }, void 0, false, {
      fileName: "src/app/components/form_elements/ControlledTextarea.tsx",
      lineNumber: 54,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, { ...fieldProps, onChange, value, ref }, void 0, false, {
      fileName: "src/app/components/form_elements/ControlledTextarea.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    helperText != null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormHelperText, { children: helperText }, void 0, false, {
      fileName: "src/app/components/form_elements/ControlledTextarea.tsx",
      lineNumber: 61,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/form_elements/ControlledTextarea.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
};
_s(ControlledTextarea, "uRgZyAx1xb4ZgjH2sncQ3yv6Uxk=", false, function() {
  return [useController];
});
_c = ControlledTextarea;
var _c;
$RefreshReg$(_c, "ControlledTextarea");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ControlledTextarea
};
//# sourceMappingURL=/build/_shared/chunk-22PGUOAG.js.map
