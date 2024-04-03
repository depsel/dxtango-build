import {
  ApiErrors
} from "/build/_shared/chunk-CI32EJ2Q.js";
import {
  useDXTApiFetch
} from "/build/_shared/chunk-MQDBQWEI.js";
import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Skeleton,
  URL_SETTINGS_ARTICULOS_PRINT,
  URL_SETTINGS_ARTICULOS_SCREEN,
  URL_SETTINGS_COMPANY_PATH,
  URL_SETTINGS_CUSTOMERS_PATH,
  URL_SETTINGS_MISC_PATH,
  URL_SETTINGS_TANGO_PATH,
  URL_SETTINGS_VENDORS_PATH,
  VStack,
  apiPath
} from "/build/_shared/chunk-47TYDRZU.js";
import "/build/_shared/chunk-5GPU2JBT.js";
import "/build/_shared/chunk-X3JSFDBC.js";
import "/build/_shared/chunk-KYMAS5G7.js";
import {
  useNavigate
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
  __commonJS,
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/CheckCircleIcon.js
var require_CheckCircleIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/CheckCircleIcon.js"(exports, module) {
    "use strict";
    init_Buffer();
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var React = _interopDefault(require_react());
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var objectWithoutProperties = function(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    };
    var CheckCircleIcon2 = function CheckCircleIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" })
      );
    };
    var CheckCircleIcon$1 = React.memo ? React.memo(CheckCircleIcon2) : CheckCircleIcon2;
    module.exports = CheckCircleIcon$1;
  }
});

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/CloseCircleIcon.js
var require_CloseCircleIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/CloseCircleIcon.js"(exports, module) {
    "use strict";
    init_Buffer();
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var React = _interopDefault(require_react());
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var objectWithoutProperties = function(obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0)
          continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i))
          continue;
        target[i] = obj[i];
      }
      return target;
    };
    var CloseCircleIcon2 = function CloseCircleIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" })
      );
    };
    var CloseCircleIcon$1 = React.memo ? React.memo(CloseCircleIcon2) : CloseCircleIcon2;
    module.exports = CloseCircleIcon$1;
  }
});

// browser-route-module:routes/_admin.settings._index/route.tsx?browser
init_Buffer();

// src/app/routes/_admin.settings._index/route.tsx
init_Buffer();

// src/app/routes/_admin.settings._index/components/index.tsx
init_Buffer();

// src/api-client/admin/paths.ts
init_Buffer();
var API_ADMIN_STATUS = apiPath("/admin/status");

// src/app/routes/_admin.settings._index/components/loading.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings._index/components/loading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings._index/components/loading.tsx"
  );
  import.meta.hot.lastModified = "1708297362150.2595";
}
var Loading = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, { spacing: 4, width: "full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { width: "full", height: "70px", borderRadius: "md" }, void 0, false, {
    fileName: "src/app/routes/_admin.settings._index/components/loading.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { width: "full", height: "70px", borderRadius: "md" }, void 0, false, {
    fileName: "src/app/routes/_admin.settings._index/components/loading.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { width: "full", height: "120px", borderRadius: "md" }, void 0, false, {
    fileName: "src/app/routes/_admin.settings._index/components/loading.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Skeleton, { width: "full", height: "70px", borderRadius: "md" }, void 0, false, {
    fileName: "src/app/routes/_admin.settings._index/components/loading.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "src/app/routes/_admin.settings._index/components/loading.tsx",
  lineNumber: 23,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "src/app/routes/_admin.settings._index/components/loading.tsx",
  lineNumber: 22,
  columnNumber: 30
}, this);
_c = Loading;
var _c;
$RefreshReg$(_c, "Loading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings._index/components/success.tsx
init_Buffer();

// src/app/components/SettingsListButton.tsx
init_Buffer();

// src/app/components/SettingsListItem.tsx
init_Buffer();
var import_CheckCircleIcon = __toESM(require_CheckCircleIcon(), 1);
var import_CloseCircleIcon = __toESM(require_CloseCircleIcon(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/SettingsListItem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/SettingsListItem.tsx"
  );
  import.meta.hot.lastModified = "1708551459644.6348";
}
var SettingsListStatus = /* @__PURE__ */ function(SettingsListStatus2) {
  SettingsListStatus2[SettingsListStatus2["error"] = 0] = "error";
  SettingsListStatus2[SettingsListStatus2["success"] = 1] = "success";
  return SettingsListStatus2;
}({});
var SettingsActionButtonState = /* @__PURE__ */ function(SettingsActionButtonState2) {
  SettingsActionButtonState2[SettingsActionButtonState2["enabled"] = 0] = "enabled";
  SettingsActionButtonState2[SettingsActionButtonState2["disabled"] = 1] = "disabled";
  return SettingsActionButtonState2;
}({});
var SettingsListItem = (props) => {
  const {
    status,
    title,
    subtitle,
    actionButtonState,
    actionButtonOnClick
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Grid, { templateColumns: {
    base: "1fr",
    md: "6fr 1fr"
  }, alignItems: "center", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { justifyContent: {
      base: "center",
      md: "start"
    }, children: [
      status != null && (status === SettingsListStatus.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { as: import_CheckCircleIcon.default, color: "green.500", boxSize: 8 }, void 0, false, {
        fileName: "src/app/components/SettingsListItem.tsx",
        lineNumber: 54,
        columnNumber: 75
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { as: import_CloseCircleIcon.default, color: "red.500", boxSize: 8 }, void 0, false, {
        fileName: "src/app/components/SettingsListItem.tsx",
        lineNumber: 54,
        columnNumber: 139
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { size: "md", textTransform: "uppercase", children: title }, void 0, false, {
          fileName: "src/app/components/SettingsListItem.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this),
        subtitle != null && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { colorScheme: "red", children: subtitle }, void 0, false, {
          fileName: "src/app/components/SettingsListItem.tsx",
          lineNumber: 59,
          columnNumber: 38
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/components/SettingsListItem.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/SettingsListItem.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/components/SettingsListItem.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { textAlign: {
      base: "center",
      md: "start"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SettingsListButton, { buttonState: actionButtonState, onClick: actionButtonOnClick, children: "Configurar" }, void 0, false, {
      fileName: "src/app/components/SettingsListItem.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/components/SettingsListItem.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/SettingsListItem.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/components/SettingsListItem.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/components/SettingsListItem.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_c2 = SettingsListItem;
var _c2;
$RefreshReg$(_c2, "SettingsListItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/components/SettingsListButton.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/SettingsListButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/SettingsListButton.tsx"
  );
  import.meta.hot.lastModified = "1711508750789.1606";
}
var SettingsListButton = (props) => {
  const {
    buttonState,
    onClick,
    children
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { onClick, ...buttonState === SettingsActionButtonState.disabled ? {
    isDisabled: true
  } : {
    colorScheme: "blue"
  }, width: "full", children }, void 0, false, {
    fileName: "src/app/components/SettingsListButton.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c3 = SettingsListButton;
var _c3;
$RefreshReg$(_c3, "SettingsListButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings._index/components/success.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings._index/components/success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings._index/components/success.tsx"
  );
  import.meta.hot.lastModified = "1711474077174.8289";
}
var Success = (props) => {
  _s();
  const {
    stateData
  } = props;
  const navigate = useNavigate();
  const configSuccessful = stateData.dictionary_ok && stateData.company_ok;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(VStack, { spacing: 4, width: "full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { width: "full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SettingsListItem, { title: "Conexi\xF3n a Tango", subtitle: stateData.dictionary_error, status: stateData.dictionary_ok ? SettingsListStatus.success : SettingsListStatus.error, actionButtonState: SettingsActionButtonState.enabled, actionButtonOnClick: () => {
      navigate(URL_SETTINGS_TANGO_PATH);
    } }, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { width: "full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SettingsListItem, { title: "Empresa", subtitle: stateData.company_error, status: stateData.company_ok ? SettingsListStatus.success : SettingsListStatus.error, actionButtonState: stateData.dictionary_ok ? SettingsActionButtonState.enabled : SettingsActionButtonState.disabled, actionButtonOnClick: () => {
      navigate(URL_SETTINGS_COMPANY_PATH);
    } }, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { width: "full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, { textAlign: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SettingsListButton, { buttonState: configSuccessful ? SettingsActionButtonState.enabled : SettingsActionButtonState.disabled, onClick: () => {
        navigate(URL_SETTINGS_CUSTOMERS_PATH);
      }, children: "Gesti\xF3n de Clientes" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
        lineNumber: 55,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, { textAlign: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SettingsListButton, { buttonState: configSuccessful ? SettingsActionButtonState.enabled : SettingsActionButtonState.disabled, onClick: () => {
        navigate(URL_SETTINGS_VENDORS_PATH);
      }, children: "Gesti\xF3n de Vendedores" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
        lineNumber: 62,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, { textAlign: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SettingsListButton, { buttonState: configSuccessful ? SettingsActionButtonState.enabled : SettingsActionButtonState.disabled, onClick: () => {
        navigate(URL_SETTINGS_ARTICULOS_SCREEN);
      }, children: "Tablas para Visualizaci\xF3n" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
        lineNumber: 69,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, { textAlign: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SettingsListButton, { buttonState: configSuccessful ? SettingsActionButtonState.enabled : SettingsActionButtonState.disabled, onClick: () => {
        navigate(URL_SETTINGS_ARTICULOS_PRINT);
      }, children: "Tablas para Impresi\xF3n" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
        lineNumber: 76,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
      lineNumber: 50,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { width: "full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SettingsListItem, { title: "Correo Saliente y Sesiones", actionButtonState: SettingsActionButtonState.enabled, actionButtonOnClick: () => {
      navigate(URL_SETTINGS_MISC_PATH);
    } }, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings._index/components/success.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s(Success, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c4 = Success;
var _c4;
$RefreshReg$(_c4, "Success");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings._index/components/index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings._index/components/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings._index/components/index.tsx"
  );
  import.meta.hot.lastModified = "1711639369237.6326";
}
var SettingsHome = () => {
  _s2();
  const {
    state,
    retry
  } = useDXTApiFetch({
    url: API_ADMIN_STATUS,
    silent: true
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: state.map({
    loading: (_) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Loading, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/index.tsx",
      lineNumber: 38,
      columnNumber: 21
    }, this),
    error: ({
      error
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ApiErrors, { error, retry }, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/index.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    success: (state2) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Success, { stateData: state2.data }, void 0, false, {
      fileName: "src/app/routes/_admin.settings._index/components/index.tsx",
      lineNumber: 42,
      columnNumber: 25
    }, this)
  }) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings._index/components/index.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_s2(SettingsHome, "1aHkhAFWgcwHik8/GdJ//FCIL3o=", false, function() {
  return [useDXTApiFetch];
});
_c5 = SettingsHome;
var _c5;
$RefreshReg$(_c5, "SettingsHome");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings._index/route.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings._index/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings._index/route.tsx"
  );
  import.meta.hot.lastModified = "1708297362150.6";
}
function Settings() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SettingsHome, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings._index/route.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c6 = Settings;
var _c6;
$RefreshReg$(_c6, "Settings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Settings as default
};
//# sourceMappingURL=/build/routes/_admin.settings._index-C2FWEYTX.js.map
