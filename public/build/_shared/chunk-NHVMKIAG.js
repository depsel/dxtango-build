import {
  ColorModeSelector,
  LogoImage
} from "/build/_shared/chunk-LZIBTVFB.js";
import {
  AuthAction,
  AuthActionLogout,
  AuthStateDisconnected,
  AuthStateLoggedIn,
  Box,
  DXTException,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  URL_PEDIDOS_PATH,
  URL_SETTINGS_PATH,
  getStoredToken,
  isTokenError,
  redirectLoginWithReturnUrl,
  useAuth,
  useColorModeValue,
  userAuthConnectRequest
} from "/build/_shared/chunk-47TYDRZU.js";
import {
  useLocation,
  useNavigate
} from "/build/_shared/chunk-W7WA2KNM.js";
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
  __commonJS,
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/LogoutIcon.js
var require_LogoutIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/LogoutIcon.js"(exports, module) {
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
    var LogoutIcon2 = function LogoutIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12M4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" })
      );
    };
    var LogoutIcon$1 = React.memo ? React.memo(LogoutIcon2) : LogoutIcon2;
    module.exports = LogoutIcon$1;
  }
});

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/MenuIcon.js
var require_MenuIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/MenuIcon.js"(exports, module) {
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
    var MenuIcon2 = function MenuIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" })
      );
    };
    var MenuIcon$1 = React.memo ? React.memo(MenuIcon2) : MenuIcon2;
    module.exports = MenuIcon$1;
  }
});

// src/code.client/auth/AuthGuard.tsx
init_Buffer();
var import_react = __toESM(require_react(), 1);

// src/code.client/auth/auth_context/actions/refresh_all.ts
init_Buffer();
var AuthActionRefreshAll = class extends AuthAction {
  constructor(currentUserInfo, errorCallback) {
    super();
    this.currentUserInfo = currentUserInfo;
    this.errorCallback = errorCallback;
  }
  async run(authState, setAuthState, app, onRetryCallback) {
    if (!(authState instanceof AuthStateLoggedIn))
      throw new DXTException(899e3 /* INTERNAL_SERVER_ERROR */, "Must be logged in");
    const storedToken = getStoredToken();
    if (storedToken == null || authState.authToken !== storedToken) {
      setAuthState(new AuthStateDisconnected());
      return;
    }
    const response = await userAuthConnectRequest(authState.authToken, app, true);
    response.map({
      error: (errorState) => {
        const apiError = errorState.error;
        if (isTokenError(apiError.status)) {
          setAuthState(new AuthStateDisconnected());
        }
      },
      success: (success) => {
        const currentUser = authState.userInfo;
        const currentAuthToken = authState.authToken;
        const newUser = success.data.user;
        const newAuthToken = success.data.auth_token;
        if (currentAuthToken !== newAuthToken || currentUser.timestamp_modificacion !== newUser.timestamp_modificacion) {
          setAuthState(
            new AuthStateLoggedIn(newAuthToken, newUser)
          );
        }
      }
    });
  }
};

// src/code.client/auth/AuthGuard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var AuthGuard = (props) => {
  const { children } = props;
  const { state: authState, dispatch: authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  (0, import_react.useEffect)(() => {
    if (authState instanceof AuthStateLoggedIn) {
      (async () => {
        await authDispatch(new AuthActionRefreshAll(authState.userInfo));
      })().catch((_) => {
      });
    } else {
      if (authState.isDisconnectedAndNotRedirecting()) {
        redirectLoginWithReturnUrl(navigate);
      }
    }
  }, [location, authState.constructor.name]);
  if (authState.isLoggedIn()) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
      fileName: "src/code.client/auth/AuthGuard.tsx",
      lineNumber: 36,
      columnNumber: 12
    }, this);
  }
};

// src/app/components/Navbar.tsx
init_Buffer();
var import_LogoutIcon = __toESM(require_LogoutIcon(), 1);
var import_MenuIcon = __toESM(require_MenuIcon(), 1);

// src/domain/user/utils/index.ts
init_Buffer();

// src/texts/users.ts
init_Buffer();
var USER_ROLE_CUSTOMER = "Cliente";
var USER_ROLE_VENDOR = "Vendedor";
var USER_ROLE_ADMIN = "Administrador";

// src/domain/user/utils/index.ts
function getUserRoleText(role) {
  switch (role) {
    case 0 /* customer */:
      return USER_ROLE_CUSTOMER;
    case 1 /* vendor */:
      return USER_ROLE_VENDOR;
    default:
      return USER_ROLE_ADMIN;
  }
}

// src/app/components/Navbar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/Navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/Navbar.tsx"
  );
  import.meta.hot.lastModified = "1711990455712.7417";
}
var Navbar = () => {
  _s();
  const {
    state: authState,
    dispatch: authDispatch
  } = useAuth();
  const navigate = useNavigate();
  const user = authState.userOrNull();
  const userRoleText = user?.role != null ? getUserRoleText(user?.role) : "";
  const _username = user?.screen_name.trim() ?? "";
  const userLabel = user?.role === 2 /* admin */ ? _username : `${userRoleText} ${_username}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { bg: useColorModeValue("gray.100", "gray.900"), sx: {
    px: 4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { spacing: 4, alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Menu, { isLazy: true, id: "menu", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MenuButton, { as: IconButton, "aria-label": "Options", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_MenuIcon.default, {}, void 0, false, {
          fileName: "src/app/components/Navbar.tsx",
          lineNumber: 49,
          columnNumber: 68
        }, this), variant: "outline" }, void 0, false, {
          fileName: "src/app/components/Navbar.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MenuList, { rootProps: {
          zIndex: 2e3
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MenuItem, { onClick: () => {
            navigate(URL_PEDIDOS_PATH);
          }, children: "Pedidos" }, void 0, false, {
            fileName: "src/app/components/Navbar.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MenuItem, { onClick: () => {
            navigate(URL_SETTINGS_PATH);
          }, children: "Configuraciones" }, void 0, false, {
            fileName: "src/app/components/Navbar.tsx",
            lineNumber: 58,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/components/Navbar.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/components/Navbar.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LogoImage, { width: "80px", alt: "" }, void 0, false, {
        fileName: "src/app/components/Navbar.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "src/app/components/Navbar.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/Navbar.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { alignItems: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { spacing: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { display: {
        base: "none",
        md: "block"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: userLabel }, void 0, false, {
        fileName: "src/app/components/Navbar.tsx",
        lineNumber: 75,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/components/Navbar.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconButton, { "aria-label": "Desconectarse", onClick: async () => {
        await authDispatch(new AuthActionLogout());
      }, isRound: true, icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { as: import_LogoutIcon.default }, void 0, false, {
        fileName: "src/app/components/Navbar.tsx",
        lineNumber: 79,
        columnNumber: 28
      }, this) }, void 0, false, {
        fileName: "src/app/components/Navbar.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ColorModeSelector, {}, void 0, false, {
        fileName: "src/app/components/Navbar.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/Navbar.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/components/Navbar.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/Navbar.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/components/Navbar.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_s(Navbar, "/V2xbXvImdQ68l3pqiWDsGmeZhI=", false, function() {
  return [useAuth, useNavigate, useColorModeValue];
});
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AuthGuard,
  Navbar
};
//# sourceMappingURL=/build/_shared/chunk-NHVMKIAG.js.map
