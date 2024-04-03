import {
  integerValidator
} from "/build/_shared/chunk-LX3JTX4F.js";
import {
  ControlledRadio,
  ControlledSwitch,
  VODXTPassword,
  commonValidationSchema,
  dxtPasswordStatus
} from "/build/_shared/chunk-PWUAF5MN.js";
import {
  InlineError
} from "/build/_shared/chunk-Y2FO4O2S.js";
import {
  yupVOValidation
} from "/build/_shared/chunk-WNBLH7AI.js";
import {
  ControlledSelect
} from "/build/_shared/chunk-32KCEIU6.js";
import "/build/_shared/chunk-5RUXSYXT.js";
import {
  ControlledInput
} from "/build/_shared/chunk-SGTX3IAW.js";
import {
  SettingsFormsButtons
} from "/build/_shared/chunk-WPYMKATS.js";
import {
  FormErrors
} from "/build/_shared/chunk-G3GG5NMP.js";
import {
  create$3,
  create$6,
  o,
  useForm
} from "/build/_shared/chunk-FAFMUYJN.js";
import "/build/_shared/chunk-GMH2WCGQ.js";
import "/build/_shared/chunk-X2BW3OCG.js";
import {
  CommonErrors
} from "/build/_shared/chunk-7ABW2NQY.js";
import {
  FormInputSkeleton
} from "/build/_shared/chunk-SS7UHKN2.js";
import {
  ApiErrors
} from "/build/_shared/chunk-CI32EJ2Q.js";
import {
  settings
} from "/build/_shared/chunk-YMMPBFHU.js";
import {
  API_TANGO_PERFIL
} from "/build/_shared/chunk-JJ4SMVFI.js";
import {
  useTangoList
} from "/build/_shared/chunk-LKDVMBGW.js";
import {
  SettingsFormHeading,
  promiseBasedToast,
  useAppResources
} from "/build/_shared/chunk-KG6KY45K.js";
import {
  CommonCard
} from "/build/_shared/chunk-5N5J5Z6Z.js";
import "/build/_shared/chunk-FO6D3CQX.js";
import {
  FetchStateError,
  FetchStateLoading,
  FetchStateSuccess
} from "/build/_shared/chunk-MQDBQWEI.js";
import {
  Badge,
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Stack,
  URL_SETTINGS_CUSTOMERS_PATH,
  URL_SETTINGS_PATH,
  require_lodash,
  useToast
} from "/build/_shared/chunk-47TYDRZU.js";
import "/build/_shared/chunk-5GPU2JBT.js";
import "/build/_shared/chunk-X3JSFDBC.js";
import "/build/_shared/chunk-KYMAS5G7.js";
import {
  useNavigate,
  useParams
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

// browser-route-module:routes/_admin.settings.users.customers.$id.edit/route.tsx?browser
init_Buffer();

// src/app/routes/_admin.settings.users.customers.$id.edit/route.tsx
init_Buffer();

// src/app/routes/_admin.settings.users.customers.$id.edit/components/index.tsx
init_Buffer();

// src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx"
  );
  import.meta.hot.lastModified = "1711474084155.7349";
}
var Loading = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "full", sx: {
  mt: 8,
  mb: 4
}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { templateColumns: {
  base: "1fr",
  md: "repeat(2,1fr)"
}, alignItems: "center", gap: 4, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 39,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 51,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 61,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 66,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 71,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 73,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 86,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 91,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 88,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: 4, direction: {
    base: "column"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 100,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 99,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 103,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 102,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 105,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 109,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 112,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 115,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 114,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 118,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 117,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 121,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
      lineNumber: 120,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 96,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 128,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 125,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 131,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 130,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 133,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 135,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 134,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 138,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 137,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 141,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 140,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 144,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 143,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 147,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 146,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 150,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 149,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 153,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 152,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 156,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 155,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 159,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
    lineNumber: 158,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
  lineNumber: 27,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx",
  lineNumber: 23,
  columnNumber: 30
}, this);
_c = Loading;
var _c;
$RefreshReg$(_c, "Loading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx
init_Buffer();
var import_react3 = __toESM(require_react(), 1);

// src/app/routes/_admin.settings.users.customers.$id.edit/validation.ts
init_Buffer();
var import_react2 = __toESM(require_react(), 1);
var import_lodash = __toESM(require_lodash(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.customers.$id.edit/validation.ts"
  );
  import.meta.hot.lastModified = "1711474084156.0322";
}
var useCustomValidationSchema = () => {
  const [passwordStatus, setPasswordStatus] = (0, import_react2.useState)(null);
  const customValidationSchema = create$3({
    password: create$6().test("password", "Formato de contrase\xF1a no v\xE1lido", (v) => {
      if (v != null && v != "") {
        let newPasswordStatus = dxtPasswordStatus(v);
        if (!import_lodash.default.isEqual(passwordStatus, newPasswordStatus))
          setPasswordStatus(newPasswordStatus);
        return yupVOValidation(VODXTPassword, v);
      }
      setPasswordStatus(null);
      return true;
    }),
    password_repeat: create$6().when("password", {
      is: (value) => {
        return value != null && value != "";
      },
      then: (schema) => schema.required("Repita la contrase\xF1a")
    }).test(
      "passwords-match",
      "Las contrase\xF1as no coinciden",
      function(value) {
        if (this.parent.password != null && this.parent.password != "") {
          return this.parent.password === value;
        }
        return true;
      }
    )
  }).required();
  const yupValidationSchema = commonValidationSchema.concat(customValidationSchema);
  return { yupValidationSchema, passwordStatus };
};

// src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx"
  );
  import.meta.hot.lastModified = "1711990455713.113";
}
var Success = (props) => {
  _s();
  const {
    stateData,
    typeSettings
  } = props;
  const updateData = {
    ...stateData
  };
  const app = useAppResources();
  const toast = useToast();
  const {
    yupValidationSchema,
    passwordStatus
  } = useCustomValidationSchema();
  const {
    state: statePerfiles,
    result: resultPerfiles
  } = useTangoList({
    url: API_TANGO_PERFIL,
    fieldsMap: {
      label: "name",
      value: "id"
    }
  });
  const {
    state: stateRelationship,
    result: resultRelationship
  } = typeSettings.api.getRelation();
  const {
    handleSubmit,
    control,
    resetField,
    setError,
    watch,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful
    }
  } = useForm({
    defaultValues: {
      username: updateData.username,
      email: updateData.email ?? "",
      habilitado_en_dxt: updateData.habilitado_en_dxt,
      puede_crear_pedido: updateData.puede_crear_pedido,
      puede_editar_pedido: updateData.puede_anular_pedido,
      ver_pedidos_cumplidos: updateData.ver_pedidos_cumplidos,
      ver_sin_precio: updateData.ver_sin_precio,
      mostrar_mensaje_de_advertencia: updateData.mostrar_mensaje_de_advertencia,
      puede_anular_pedido: updateData.puede_anular_pedido,
      borrar_pedido_al_anular: updateData.borrar_pedido_al_anular,
      aprobar_pedido_al_crear: updateData.aprobar_pedido_al_crear,
      dia_de_entrega: updateData.dia_de_entrega
    },
    resolver: o(yupValidationSchema)
  });
  const watchPuedeAnularPedido = watch("puede_anular_pedido");
  (0, import_react3.useEffect)(() => {
    if (watchPuedeAnularPedido === false)
      resetField("borrar_pedido_al_anular", {
        defaultValue: false
      });
  }, [watchPuedeAnularPedido]);
  (0, import_react3.useEffect)(() => {
    if (stateRelationship instanceof FetchStateSuccess) {
      const defaultValue = resultRelationship.find((option) => option.value === updateData.tango_id)?.value ?? void 0;
      resetField("tango_id", {
        defaultValue
      });
    }
    if (statePerfiles instanceof FetchStateSuccess) {
      const defaultValue = resultPerfiles.find((option) => option.value === updateData.perfil_facturacion_id)?.value ?? void 0;
      resetField("perfil_facturacion_id", {
        defaultValue
      });
    }
  }, [stateRelationship, statePerfiles]);
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const {
      password_repeat,
      ...data
    } = dataUnsafe;
    if (data.email === "")
      delete data.email;
    if (data.password === "")
      delete data.password;
    const input = data;
    const result = await typeSettings.api.patch(updateData.id, input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: {
          title: "Usuario actualizado"
        },
        error: {
          title: "Ha ocurrido un error"
        },
        loading: {
          title: "Actualizando usuario"
        }
      }
    }).then(() => {
      app.navigate(URL_SETTINGS_CUSTOMERS_PATH);
    }).catch((e) => {
      setError("root", {
        message: e
      });
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormErrors, { errors }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
      lineNumber: 160,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, alignItems: "center", gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { size: "sm", textTransform: "uppercase", children: "Informaci\xF3n del Cliente" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 169,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledSelect, { fieldProps: {
          name: "tango_id",
          placeholder: typeSettings.tangoRelatedFields?.placeholder,
          options: resultRelationship,
          noOptionsMessage(obj) {
            return typeSettings.tangoRelatedFields?.empty;
          },
          isSearchable: true,
          selectedOptionStyle: "check",
          isLoading: stateRelationship instanceof FetchStateLoading
        }, formControlProps: {
          isDisabled: disableForm || !(stateRelationship instanceof FetchStateSuccess)
        }, formControlInnerProps: {
          label: typeSettings.tangoRelatedFields?.label
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 176,
          columnNumber: 15
        }, this),
        stateRelationship instanceof FetchStateError && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineError, { error: stateRelationship.errorOrNull().error }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 191,
          columnNumber: 64
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 173,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledInput, { fieldProps: {
        name: "username",
        id: "username",
        type: "text"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Nombre de Usuario"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 194,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 193,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledInput, { fieldProps: {
        name: "email",
        id: "email",
        type: "text",
        inputMode: "email"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Correo electr\xF3nico"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 205,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 204,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledInput, { fieldProps: {
        name: "password",
        id: "password",
        type: "password"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Nueva contrase\xF1a"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 217,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledInput, { fieldProps: {
        name: "password_repeat",
        id: "password_repeat",
        type: "password"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Confirmaci\xF3n de Contrase\xF1a"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 228,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 227,
        columnNumber: 13
      }, this),
      passwordStatus != null && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: [
        passwordStatus.tooShort && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { colorScheme: "red", children: "Contrase\xF1a muy corta" }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 241,
          columnNumber: 45
        }, this),
        passwordStatus.tooLong && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { colorScheme: "red", children: "Contrase\xF1a muy larga" }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 242,
          columnNumber: 44
        }, this),
        passwordStatus.invalidCharsPresent && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge, { colorScheme: "red", children: "Evite caracteres no v\xE1lidos" }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 243,
          columnNumber: 56
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 238,
        columnNumber: 40
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 248,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 245,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledSelect, { fieldProps: {
          name: "perfil_facturacion_id",
          placeholder: "Seleccione un perfil",
          options: resultPerfiles,
          noOptionsMessage(obj) {
            return "No hay perfiles disponibles";
          },
          isLoading: statePerfiles instanceof FetchStateLoading,
          selectedOptionStyle: "check"
        }, formControlProps: {
          isDisabled: disableForm || !(statePerfiles instanceof FetchStateSuccess)
        }, control, formControlInnerProps: {
          label: "Perfil de facturaci\xF3n"
        } }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 253,
          columnNumber: 15
        }, this),
        statePerfiles instanceof FetchStateError && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InlineError, { error: statePerfiles.errorOrNull().error }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 267,
          columnNumber: 60
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 250,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 272,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 269,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { size: "sm", textTransform: "uppercase", children: "Estado" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 277,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 274,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledRadio, { fieldProps: {
        name: "habilitado_en_dxt",
        options: [{
          value: true,
          label: "Establecido en Tango"
        }, {
          value: false,
          label: "Deshabilitado"
        }]
      }, formControlProps: {
        isDisabled: disableForm
      }, radioProps: {
        size: {
          base: "sm",
          sm: "md"
        }
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 284,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 281,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 305,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 302,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 310,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 307,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledSwitch, { fieldProps: {
        name: "mostrar_mensaje_de_advertencia",
        id: "mostrar_mensaje_de_advertencia"
      }, formControlProps: {
        width: "auto",
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Mostrar mensaje de advertencia"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 315,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 314,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
      lineNumber: 162,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
      lineNumber: 161,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, alignItems: "center", gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Heading, { size: "sm", textTransform: "uppercase", children: "Pedidos" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 335,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 332,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Stack, { spacing: 4, direction: {
        base: "column"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "puede_crear_pedido",
          id: "puede_crear_pedido"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Puede crear pedidos"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 346,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 345,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "puede_editar_pedido",
          id: "puede_editar_pedido"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Puede editar pedidos"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 357,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 356,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "puede_anular_pedido",
          id: "puede_anular_pedido"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Puede anular pedidos"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 368,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 367,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "borrar_pedido_al_anular",
          id: "borrar_pedido_al_anular"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Borrar pedido al anular"
        }, control, watch: {
          isDisabled: watchPuedeAnularPedido === false,
          ...watchPuedeAnularPedido === false && {
            isChecked: false
          }
        } }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 379,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 378,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "aprobar_pedido_al_crear",
          id: "aprobar_pedido_al_crear"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Los pedidos se aprueban al crearlos"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 395,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 394,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "ver_pedidos_cumplidos",
          id: "ver_pedidos_cumplidos"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Puede ver los pedidos cumplidos"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 406,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 405,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "ver_sin_precio",
          id: "ver_sin_precio"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Puede ver art\xEDculos sin precios"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 417,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
          lineNumber: 416,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 342,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 339,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 432,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 429,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledInput, { fieldProps: {
        name: "dia_de_entrega",
        id: "dia_de_entrega",
        type: "number",
        inputMode: "tel"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Tiempo de entrega de pedidos",
        helperText: "Expresado en d\xEDas"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 435,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 434,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
        lineNumber: 447,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
      lineNumber: 328,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
      lineNumber: 327,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SettingsFormsButtons, { buttonActionText: "Actualizar", isLoading: disableForm }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
      lineNumber: 451,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
      lineNumber: 450,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
    lineNumber: 159,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx",
    lineNumber: 158,
    columnNumber: 10
  }, this);
};
_s(Success, "yVxsSt0gDO/HaTYLVgibgRpWp2o=", false, function() {
  return [useAppResources, useToast, useCustomValidationSchema, useTangoList, useForm];
});
_c2 = Success;
var _c2;
$RefreshReg$(_c2, "Success");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.users.customers.$id.edit/components/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.users.customers.$id.edit/components/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.customers.$id.edit/components/index.tsx"
  );
  import.meta.hot.lastModified = "1711474084155.6519";
}
var FormEdit = (props) => {
  const {
    typeSettings,
    id
  } = props;
  const {
    state,
    retry
  } = typeSettings.api.getOne(id);
  return state.map({
    loading: (_2) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Loading, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/index.tsx",
      lineNumber: 35,
      columnNumber: 19
    }, this),
    error: ({
      error
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ApiErrors, { error, retry, cancelAndNavigateTo: URL_SETTINGS_PATH }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/index.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this),
    success: (state2) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Success, { stateData: state2.data, typeSettings }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/components/index.tsx",
      lineNumber: 39,
      columnNumber: 23
    }, this)
  });
};
_c3 = FormEdit;
var _c3;
$RefreshReg$(_c3, "FormEdit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.users.customers.$id.edit/route.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.users.customers.$id.edit/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.customers.$id.edit/route.tsx"
  );
  import.meta.hot.lastModified = "1711474084155.9294";
}
function Edit() {
  _s2();
  const navigate = useNavigate();
  const {
    id
  } = useParams();
  const typeSettings = settings.customers;
  try {
    if (integerValidator(id)) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SettingsFormHeading, { title: typeSettings.titles.edit, actionButton: {
          label: "Cancelar",
          buttonProps: {
            colorScheme: "gray",
            onClick: () => {
              navigate(URL_SETTINGS_CUSTOMERS_PATH);
            }
          }
        } }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/route.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FormEdit, { typeSettings, id }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/route.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/route.tsx",
        lineNumber: 38,
        columnNumber: 14
      }, this);
    }
  } catch (e) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommonErrors, { error: "Usuario no encontrado", buttonProps: {
      label: "Volver a Configuraci\xF3n",
      colorScheme: "green",
      onClick: () => {
        navigate(URL_SETTINGS_PATH);
      }
    } }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.customers.$id.edit/route.tsx",
      lineNumber: 52,
      columnNumber: 12
    }, this);
  }
}
_s2(Edit, "xqNrWMz2XDR0DYvZC039aFe98pM=", false, function() {
  return [useNavigate, useParams];
});
_c4 = Edit;
var _c4;
$RefreshReg$(_c4, "Edit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Edit as default
};
//# sourceMappingURL=/build/routes/_admin.settings.users.customers.$id.edit-OELDJ633.js.map
