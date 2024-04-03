import {
  AuthGuard,
  Navbar
} from "/build/_shared/chunk-NHVMKIAG.js";
import "/build/_shared/chunk-LZIBTVFB.js";
import {
  ClientOnly
} from "/build/_shared/chunk-RPM5OM45.js";
import {
  Container
} from "/build/_shared/chunk-47TYDRZU.js";
import "/build/_shared/chunk-5GPU2JBT.js";
import "/build/_shared/chunk-X3JSFDBC.js";
import "/build/_shared/chunk-KYMAS5G7.js";
import {
  Outlet
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
import "/build/_shared/chunk-MIDFM7PG.js";
import {
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// browser-route-module:routes/_authorized/route.tsx?browser
init_Buffer();

// src/app/routes/_authorized/route.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized/route.tsx"
  );
  import.meta.hot.lastModified = "1712028233652.8486";
}
function AuthorizedLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthGuard, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "src/app/routes/_authorized/route.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { maxW: "6xl", sx: {
      my: 4
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "src/app/routes/_authorized/route.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized/route.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_authorized/route.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized/route.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = AuthorizedLayout;
var _c;
$RefreshReg$(_c, "AuthorizedLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AuthorizedLayout as default
};
//# sourceMappingURL=/build/routes/_authorized-Q4MZSW2W.js.map
