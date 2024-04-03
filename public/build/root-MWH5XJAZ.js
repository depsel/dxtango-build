import {
  AuthProvider,
  ChakraProvider,
  DXTException,
  ModalProvider,
  cookieStorageManagerSSR,
  enumToString,
  getDXTErrorDescription,
  isNavigator,
  isNode,
  localStorageManager,
  stringToEnum,
  theme,
  useConst
} from "/build/_shared/chunk-47TYDRZU.js";
import {
  exports
} from "/build/_shared/chunk-5GPU2JBT.js";
import "/build/_shared/chunk-X3JSFDBC.js";
import {
  withEmotionCache
} from "/build/_shared/chunk-KYMAS5G7.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
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

// browser-route-module:root.tsx?browser
init_Buffer();

// src/app/root.tsx
init_Buffer();
var import_react5 = __toESM(require_react(), 1);

// css-bundle-plugin-ns:@remix-run/css-bundle
init_Buffer();
var cssBundleHref = "/build/css-bundle-RWB3XPLB.css";

// src/environment/index.ts
init_Buffer();
var ExecutionMode = /* @__PURE__ */ ((ExecutionMode2) => {
  ExecutionMode2[ExecutionMode2["development"] = 0] = "development";
  ExecutionMode2[ExecutionMode2["test"] = 1] = "test";
  ExecutionMode2[ExecutionMode2["beta"] = 2] = "beta";
  ExecutionMode2[ExecutionMode2["production"] = 3] = "production";
  return ExecutionMode2;
})(ExecutionMode || {});
var _executionMode;
function _initEnvironmentConfig() {
  if (isNavigator()) {
    const executionModeString = window?.dxTangoExecutionMode;
    if (!executionModeString)
      return;
    _executionMode = stringToEnum(ExecutionMode, executionModeString);
  }
  if (!isNode())
    return;
  const nodeEnv = "development";
  if (nodeEnv === "development") {
    _executionMode = 0 /* development */;
    return;
  }
  if (nodeEnv === "test") {
    _executionMode = 1 /* test */;
    return;
  }
  const currentDirectory = exports.basename(process?.cwd?.() ?? "").toLowerCase();
  const isBeta = currentDirectory === "beta";
  if (isBeta) {
    _executionMode = 2 /* beta */;
    return;
  }
  _executionMode = 3 /* production */;
}
function _throwEnvironmentFatalError() {
  if (isNode()) {
    const errorCode = 899104 /* FATAL_SERVER_INITIALIZATION_ERROR */;
    console.error(getDXTErrorDescription(errorCode));
    process.exit(errorCode);
  }
  throw new DXTException(899105 /* FATAL_CLIENT_INITIALIZATION_ERROR */);
}
function getExecutionMode() {
  if (_executionMode === void 0) {
    _initEnvironmentConfig();
    if (_executionMode === void 0)
      _throwEnvironmentFatalError();
  }
  return _executionMode;
}
function getExecutionModeString() {
  const executionMode = getExecutionMode();
  return enumToString(ExecutionMode, executionMode);
}

// src/app/RootDocument.tsx
init_Buffer();
var import_react2 = __toESM(require_react(), 1);

// src/code.client/contexts/ServerStyleContext.tsx
init_Buffer();
var import_react = __toESM(require_react(), 1);
var ServerStyleContext = (0, import_react.createContext)(null);
var ClientStyleContext = (0, import_react.createContext)(
  null
);

// src/app/RootDocument.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/RootDocument.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/RootDocument.tsx"
  );
  import.meta.hot.lastModified = "1708453660122.2415";
}
var RootDocument = _s(withEmotionCache(_c = _s(({
  children,
  colorMode
}, emotionCache) => {
  _s();
  const serverStyleData = (0, import_react2.useContext)(ServerStyleContext);
  const clientStyleData = (0, import_react2.useContext)(ClientStyleContext);
  (0, import_react2.useEffect)(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData?.reset();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "es", ...colorMode != null && {
    "data-theme": colorMode,
    style: {
      colorScheme: colorMode
    }
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "src/app/RootDocument.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "src/app/RootDocument.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      serverStyleData?.map(({
        key,
        ids,
        css
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { "data-emotion": `${key} ${ids.join(" ")}`, dangerouslySetInnerHTML: {
        __html: css
      } }, key, false, {
        fileName: "src/app/RootDocument.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this))
    ] }, void 0, true, {
      fileName: "src/app/RootDocument.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { ...colorMode != null && {
      className: `chakra-ui-${colorMode}`
    }, children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "src/app/RootDocument.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "src/app/RootDocument.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "src/app/RootDocument.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/RootDocument.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/RootDocument.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}, "vFrPjx9OU/CyW6kig5dfFtYNdnQ=")), "vFrPjx9OU/CyW6kig5dfFtYNdnQ=");
_c2 = RootDocument;
var _c;
var _c2;
$RefreshReg$(_c, "RootDocument$withEmotionCache");
$RefreshReg$(_c2, "RootDocument");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/root.tsx"
  );
}
var links = () => {
  return [...cssBundleHref != null ? [{
    rel: "stylesheet",
    href: cssBundleHref
  }] : []];
};
var meta = () => [{
  charset: "utf-8"
}, {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0, interactive-widget=resizes-content"
}, {
  title: getExecutionModeString()
}];
function App() {
  _s2();
  function getColorMode(cookies2) {
    const match = cookies2.match(new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`));
    return match == null ? void 0 : match[2];
  }
  const DEFAULT_COLOR_MODE = theme.config.initialColorMode;
  const CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode";
  let cookies = useLoaderData();
  if (typeof document !== "undefined") {
    cookies = document.cookie;
  }
  const colorMode = (0, import_react5.useMemo)(() => {
    let color = getColorMode(cookies);
    if (color == null && DEFAULT_COLOR_MODE) {
      cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`;
      color = DEFAULT_COLOR_MODE;
    }
    return color;
  }, [cookies]);
  const cookieManager = useConst(cookieStorageManagerSSR(cookies));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RootDocument, { colorMode, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChakraProvider, { theme, colorModeManager: typeof cookies === "string" ? cookieManager : localStorageManager, toastOptions: {
    defaultOptions: {
      position: "bottom",
      duration: 2500,
      isClosable: true
    }
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "src/app/root.tsx",
    lineNumber: 99,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "src/app/root.tsx",
    lineNumber: 98,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "src/app/root.tsx",
    lineNumber: 97,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/root.tsx",
    lineNumber: 89,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/root.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s2(App, "77jD1pvO266PhhrpHT48ttogFwU=", false, function() {
  return [useLoaderData, useConst];
});
_c3 = App;
var _c3;
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-MWH5XJAZ.js.map
