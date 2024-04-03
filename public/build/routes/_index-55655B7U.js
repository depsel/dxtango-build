import {
  ColorModeSelector,
  LogoImage
} from "/build/_shared/chunk-LZIBTVFB.js";
import {
  yupVOValidation
} from "/build/_shared/chunk-WNBLH7AI.js";
import {
  ControlledInput
} from "/build/_shared/chunk-SGTX3IAW.js";
import {
  create$3,
  create$6,
  o,
  useForm
} from "/build/_shared/chunk-FAFMUYJN.js";
import {
  Alert,
  AuthAction,
  AuthStateDisconnected,
  AuthStateLoading,
  AuthStateLoggedIn,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
  Icon,
  InputLeftElement,
  ListItem,
  UnorderedList,
  VStack,
  ValueObject,
  useAuth,
  userLoginRequest
} from "/build/_shared/chunk-47TYDRZU.js";
import "/build/_shared/chunk-5GPU2JBT.js";
import "/build/_shared/chunk-X3JSFDBC.js";
import "/build/_shared/chunk-KYMAS5G7.js";
import "/build/_shared/chunk-W7WA2KNM.js";
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

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/AccountIcon.js
var require_AccountIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/AccountIcon.js"(exports, module) {
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
    var AccountIcon2 = function AccountIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" })
      );
    };
    var AccountIcon$1 = React.memo ? React.memo(AccountIcon2) : AccountIcon2;
    module.exports = AccountIcon$1;
  }
});

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/LockIcon.js
var require_LockIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/LockIcon.js"(exports, module) {
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
    var LockIcon2 = function LockIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" })
      );
    };
    var LockIcon$1 = React.memo ? React.memo(LockIcon2) : LockIcon2;
    module.exports = LockIcon$1;
  }
});

// browser-route-module:routes/_index/route.tsx?browser
init_Buffer();

// src/app/routes/_index/route.tsx
init_Buffer();

// src/code.client/auth/auth_context/actions/login.ts
init_Buffer();
var AuthActionLogin = class extends AuthAction {
  constructor(params, errorCallback) {
    super();
    this.params = params;
    this.errorCallback = errorCallback;
  }
  async run(authState, setAuthState, app, onRetryCallback) {
    setAuthState(new AuthStateLoading());
    const response = await userLoginRequest(this.params, app);
    void response.map({
      success: async (successState) => {
        const { user, auth_token } = successState.data;
        setAuthState(new AuthStateLoggedIn(auth_token, user));
      },
      error: async (errorState) => {
        const apiError = errorState.error;
        setAuthState(new AuthStateDisconnected(apiError));
        if (this.errorCallback)
          this.errorCallback(apiError);
      }
    });
  }
};

// src/app/routes/_index/route.tsx
var import_AccountIcon = __toESM(require_AccountIcon(), 1);
var import_LockIcon = __toESM(require_LockIcon(), 1);

// src/domain/user/value_objects/vo_user_name.ts
init_Buffer();

// src/domain/user/validation/index.ts
init_Buffer();
var USER_NAME_MIN_LENGTH = 2;
var USER_NAME_MAX_LENGTH = 60;
function isUserName(value) {
  const re = /^[a-zA-Z0-9_]+$/iu;
  return typeof value === "string" && value.length >= USER_NAME_MIN_LENGTH && value.length <= USER_NAME_MAX_LENGTH && re.test(value);
}

// src/domain/user/value_objects/vo_user_name.ts
var VOUserName = class extends ValueObject {
  validate(rawValue) {
    if (typeof rawValue === "string") {
      const value = rawValue.trim();
      if (isUserName(value))
        return value;
    }
    this.throwError(rawValue);
  }
};

// src/texts/app.ts
init_Buffer();
var appTexts = {
  welcome: "Bienvenido al sistema de pedidos de Sorbalok Pinturas."
};

// src/app/routes/_index/route.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_index/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_index/route.tsx"
  );
  import.meta.hot.lastModified = "1711474084158.6846";
}
var validationSchema = create$3({
  username: create$6().required("Ingrese su nombre de usuario").test("test", "Usuario no valido", (v) => yupVOValidation(VOUserName, v)),
  password: create$6().required("Ingrese su contrase\xF1a")
}).required();
function Index() {
  _s();
  const {
    state: authState,
    dispatch: authDispatch
  } = useAuth();
  const isSubmitting = authState.isLoading();
  const {
    handleSubmit,
    control,
    formState: {
      errors
    }
  } = useForm({
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: o(validationSchema)
  });
  const onSubmit = async (data) => {
    const dataToSubmit = {
      username: data.username,
      password: data.password
    };
    await authDispatch(new AuthActionLogin(dataToSubmit));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { sx: {
      position: "absolute",
      top: 3,
      right: 4
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ColorModeSelector, {}, void 0, false, {
      fileName: "src/app/routes/_index/route.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_index/route.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { sx: {
      display: "flex",
      height: "100vh",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { maxWidth: "sm", sx: {
      alignSelf: "center"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Center, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoImage, { width: "160px", alt: "" }, void 0, false, {
        fileName: "src/app/routes/_index/route.tsx",
        lineNumber: 88,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_index/route.tsx",
        lineNumber: 87,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_index/route.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VStack, { spacing: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { size: "sm", sx: {
          textAlign: "center",
          pb: 2
        }, children: appTexts.welcome }, void 0, false, {
          fileName: "src/app/routes/_index/route.tsx",
          lineNumber: 94,
          columnNumber: 19
        }, this),
        (Object.keys(errors).length || authState.errorOrNull()) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert, { status: "error", variant: "top-accent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UnorderedList, { fontSize: "sm", styleType: "none", sx: {
          m: 0
        }, children: [
          Object.keys(errors).length && Object.values(errors).map((error, key) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, { children: error.message }, key, false, {
            fileName: "src/app/routes/_index/route.tsx",
            lineNumber: 105,
            columnNumber: 100
          }, this)),
          authState.errorOrNull() && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, { children: authState.errorOrNull()?.error }, "api_error", false, {
            fileName: "src/app/routes/_index/route.tsx",
            lineNumber: 106,
            columnNumber: 55
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_index/route.tsx",
          lineNumber: 102,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_index/route.tsx",
          lineNumber: 101,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_index/route.tsx",
          lineNumber: 100,
          columnNumber: 79
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledInput, { formControlInnerProps: {
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { as: import_AccountIcon.default }, void 0, false, {
            fileName: "src/app/routes/_index/route.tsx",
            lineNumber: 114,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "src/app/routes/_index/route.tsx",
            lineNumber: 113,
            columnNumber: 25
          }, this)
        }, fieldProps: {
          name: "username",
          id: "username",
          type: "text",
          placeholder: "Usuario"
        }, formControlProps: {
          isDisabled: isSubmitting
        }, control }, void 0, false, {
          fileName: "src/app/routes/_index/route.tsx",
          lineNumber: 112,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledInput, { formControlInnerProps: {
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { as: import_LockIcon.default }, void 0, false, {
            fileName: "src/app/routes/_index/route.tsx",
            lineNumber: 126,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "src/app/routes/_index/route.tsx",
            lineNumber: 125,
            columnNumber: 25
          }, this)
        }, fieldProps: {
          name: "password",
          id: "password",
          type: "password",
          placeholder: "Contrase\xF1a"
        }, formControlProps: {
          isDisabled: isSubmitting
        }, control }, void 0, false, {
          fileName: "src/app/routes/_index/route.tsx",
          lineNumber: 124,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", width: "full", isLoading: isSubmitting, children: "Ingresar" }, void 0, false, {
          fileName: "src/app/routes/_index/route.tsx",
          lineNumber: 136,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_index/route.tsx",
        lineNumber: 93,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_index/route.tsx",
        lineNumber: 92,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_index/route.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_index/route.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_index/route.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_index/route.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_index/route.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_s(Index, "Mw7Y218sqStMoxxJEF6byKriRCs=", false, function() {
  return [useAuth, useForm];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-55655B7U.js.map
