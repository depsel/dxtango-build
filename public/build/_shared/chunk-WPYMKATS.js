import {
  Button,
  Stack,
  URL_SETTINGS_PATH
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

// src/app/components/SettingsFormButtons.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/SettingsFormButtons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/SettingsFormButtons.tsx"
  );
  import.meta.hot.lastModified = "1711474084151.319";
}
var SettingsFormsButtons = (props) => {
  _s();
  const {
    isLoading,
    buttonActionText,
    buttonCancelUrl
  } = props;
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { direction: {
    base: "column",
    md: "row"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", colorScheme: "blue", width: "full", isLoading, children: buttonActionText ?? "Actualizar" }, void 0, false, {
      fileName: "src/app/components/SettingsFormButtons.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "button", colorScheme: "gray", width: "full", isLoading, onClick: () => navigate(buttonCancelUrl ?? URL_SETTINGS_PATH), children: "Cancelar" }, void 0, false, {
      fileName: "src/app/components/SettingsFormButtons.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/SettingsFormButtons.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/components/SettingsFormButtons.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_s(SettingsFormsButtons, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c = SettingsFormsButtons;
var _c;
$RefreshReg$(_c, "SettingsFormsButtons");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  SettingsFormsButtons
};
//# sourceMappingURL=/build/_shared/chunk-WPYMKATS.js.map
