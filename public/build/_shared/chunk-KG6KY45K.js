import {
  CommonCard
} from "/build/_shared/chunk-5N5J5Z6Z.js";
import {
  AuthStateLoggedIn,
  Button,
  DXTError,
  DXTException,
  Flex,
  Heading,
  Spacer,
  useBasicAppResources
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

// src/app/components/SettingsFormHeading.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/SettingsFormHeading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/SettingsFormHeading.tsx"
  );
  import.meta.hot.lastModified = "1711474084151.4355";
}
var SettingsFormHeading = (props) => {
  const {
    title,
    actionButton
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "row", alignItems: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { size: "md", textTransform: "uppercase", children: title }, void 0, false, {
      fileName: "src/app/components/SettingsFormHeading.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    actionButton && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Spacer, {}, void 0, false, {
        fileName: "src/app/components/SettingsFormHeading.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { size: "sm", colorScheme: "green", ...actionButton.buttonProps, sx: {
        textTransform: "uppercase"
      }, children: actionButton.label }, void 0, false, {
        fileName: "src/app/components/SettingsFormHeading.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/SettingsFormHeading.tsx",
      lineNumber: 33,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/SettingsFormHeading.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/components/SettingsFormHeading.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c = SettingsFormHeading;
var _c;
$RefreshReg$(_c, "SettingsFormHeading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/code.client/app_resources/app_resources.ts
init_Buffer();
function useAppResources() {
  const result = useBasicAppResources();
  if (!(result.authState instanceof AuthStateLoggedIn))
    throw new DXTException(
      new DXTError(799e3 /* INTERNAL_CLIENT_ERROR */, {
        extra: "AuthState is not AuthStateLoggedIn"
      })
    );
  if (typeof result.authDispatch !== "function")
    throw new DXTException(
      new DXTError(799e3 /* INTERNAL_CLIENT_ERROR */, {
        extra: "Invalid authDispath in useAppResources()"
      })
    );
  return result;
}

// src/code.client/utils/promise_based_toast.ts
init_Buffer();
var promiseBasedToast = async (props) => {
  const { toast, result, messages } = props;
  const resultToast = new Promise((resolve, reject) => {
    result.map({
      success: () => {
        resolve(200);
      },
      error: (state) => {
        reject(new Error(state.error.error));
      }
    });
  });
  toast.promise(resultToast, {
    success: { title: messages.success.title },
    error: (e) => {
      return { title: messages.error.title, description: e.message };
    },
    loading: {
      title: messages.loading.title,
      description: "Aguarde unos instantes"
    }
  });
  return resultToast;
};

export {
  SettingsFormHeading,
  useAppResources,
  promiseBasedToast
};
//# sourceMappingURL=/build/_shared/chunk-KG6KY45K.js.map
