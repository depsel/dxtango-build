import {
  API_SETTINGS_DB,
  DB_CONNECTION_TIMEOUT_MAX_SECONDS,
  DB_CONNECTION_TIMEOUT_MIN_SECONDS,
  VOTCPPort,
  settingsDBUpdateRequest
} from "/build/_shared/chunk-UAH53UTH.js";
import {
  yupVOValidation
} from "/build/_shared/chunk-WNBLH7AI.js";
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
  create$5,
  create$6,
  o,
  useForm
} from "/build/_shared/chunk-FAFMUYJN.js";
import {
  FormInputSkeleton
} from "/build/_shared/chunk-SS7UHKN2.js";
import {
  ApiErrors
} from "/build/_shared/chunk-CI32EJ2Q.js";
import {
  SettingsFormHeading,
  promiseBasedToast,
  useAppResources
} from "/build/_shared/chunk-KG6KY45K.js";
import {
  CommonCard
} from "/build/_shared/chunk-5N5J5Z6Z.js";
import {
  useDXTApiFetch
} from "/build/_shared/chunk-MQDBQWEI.js";
import {
  Box,
  Grid,
  GridItem,
  URL_SETTINGS_PATH,
  ValueObject,
  useToast
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
import "/build/_shared/chunk-MIDFM7PG.js";
import {
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// browser-route-module:routes/_admin.settings.tango/route.tsx?browser
init_Buffer();

// src/app/routes/_admin.settings.tango/route.tsx
init_Buffer();

// src/app/routes/_admin.settings.tango/components/index.tsx
init_Buffer();

// src/app/routes/_admin.settings.tango/components/loading.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.tango/components/loading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.tango/components/loading.tsx"
  );
  import.meta.hot.lastModified = "1708552390247.2717";
}
var Loading = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "full", sx: {
  mt: 8,
  mb: 4
}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { templateColumns: {
  base: "1fr",
  md: "repeat(2,1fr)"
}, alignItems: "center", gap: 4, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 44,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
  lineNumber: 27,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "src/app/routes/_admin.settings.tango/components/loading.tsx",
  lineNumber: 23,
  columnNumber: 30
}, this);
_c = Loading;
var _c;
$RefreshReg$(_c, "Loading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.tango/components/success.tsx
init_Buffer();

// src/app/routes/_admin.settings.tango/validation.ts
init_Buffer();

// src/domain/db/value_objects/vo_mssql_db_name.ts
init_Buffer();

// src/domain/db/validation/index.ts
init_Buffer();
function isMSSqlName(v) {
  if (typeof v !== "string")
    return false;
  if (v.length < 1)
    return false;
  const firstChar = v[0];
  if (firstChar >= "0" && firstChar <= "9")
    return false;
  return /^[A-Za-z0-9_]*$/.test(v);
}
function isMSSqlDBName(v) {
  if (!isMSSqlName(v))
    return false;
  return typeof v === "string" && v[0] !== "_";
}

// src/domain/db/value_objects/vo_mssql_db_name.ts
var VOMSSqlDBName = class extends ValueObject {
  validate(rawValue) {
    if (typeof rawValue === "string") {
      const value = rawValue.trim();
      if (isMSSqlDBName(rawValue))
        return value;
    }
    this.throwError(rawValue);
  }
};

// src/app/routes/_admin.settings.tango/validation.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.tango/validation.ts"
  );
  import.meta.hot.lastModified = "1711935402018.4014";
}
var yupValidationSchema = create$3({
  db_host: create$6().required("Ingrese el host de la base de datos"),
  db_port: create$5().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido").test(
    "is-port",
    "Ingrese un puerto v\xE1lido",
    (v) => yupVOValidation(VOTCPPort, v)
  ),
  db_user: create$6().required("Ingrese el usuario de la base de datos"),
  db_password: create$6().required("Ingrese la contrase\xF1a de la base de datos"),
  tango_dictionary: create$6().required("Ingrese el diccionario base de Tango").test(
    "mssql-db-name",
    "Ingrese un nombre de Diccionario base v\xE1lido",
    (v) => yupVOValidation(VOMSSqlDBName, v)
  ),
  db_connection_timeout_seconds: create$5().min(
    DB_CONNECTION_TIMEOUT_MIN_SECONDS,
    `El tiempo de espera debe ser mayor a ${DB_CONNECTION_TIMEOUT_MIN_SECONDS} segundos`
  ).max(
    DB_CONNECTION_TIMEOUT_MAX_SECONDS,
    `El tiempo de espera debe ser menor a ${DB_CONNECTION_TIMEOUT_MAX_SECONDS} segundos`
  ).required("Ingrese el tiempo de espera de la conexi\xF3n a la base de datos").typeError(
    "Ingrese el tiempo de espera de la conexi\xF3n a la base de datos"
  )
}).required();

// src/app/routes/_admin.settings.tango/components/success.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.tango/components/success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.tango/components/success.tsx"
  );
  import.meta.hot.lastModified = "1711639369392.7114";
}
var Success = (props) => {
  _s();
  const {
    stateData
  } = props;
  const app = useAppResources();
  const toast = useToast();
  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful
    }
  } = useForm({
    defaultValues: stateData,
    resolver: o(yupValidationSchema)
  });
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const input = dataUnsafe;
    const result = await settingsDBUpdateRequest(input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: {
          title: "Conexi\xF3n a Tango actualizada"
        },
        error: {
          title: "Ha ocurrido un error"
        },
        loading: {
          title: "Actualizando conexi\xF3n a Tango"
        }
      }
    }).then(() => {
      app.navigate(URL_SETTINGS_PATH);
    }).catch((e) => {
      setError("root", {
        message: e
      });
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormErrors, { errors }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, alignItems: "center", gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledInput, { fieldProps: {
        name: "db_host",
        id: "db_host",
        type: "text"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Host"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 90,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledInput, { fieldProps: {
        name: "db_port",
        id: "db_port",
        type: "number",
        inputMode: "tel",
        htmlSize: 5,
        width: "auto"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Puerto"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 101,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledInput, { fieldProps: {
        name: "db_user",
        id: "db_user",
        type: "text"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Usuario SQL"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 115,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledInput, { fieldProps: {
        name: "db_password",
        id: "db_password",
        type: "password"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Contrase\xF1a SQL"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 126,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledInput, { fieldProps: {
        name: "tango_dictionary",
        id: "tango_dictionary",
        type: "text"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Diccionario base"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 137,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 136,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ControlledInput, { fieldProps: {
        name: "db_connection_timeout_seconds",
        id: "db_connection_timeout_seconds",
        type: "number",
        inputMode: "tel",
        htmlSize: 5,
        maxLength: 5,
        width: "auto"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Tiempo de espera (segundos)"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 148,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SettingsFormsButtons, { isLoading: disableForm }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
      lineNumber: 165,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
      lineNumber: 164,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
    lineNumber: 82,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.tango/components/success.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
};
_s(Success, "WhTmzRwZ2QzHZIG+8ZTcb2WSDZ8=", false, function() {
  return [useAppResources, useToast, useForm];
});
_c2 = Success;
var _c2;
$RefreshReg$(_c2, "Success");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.tango/components/index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.tango/components/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.tango/components/index.tsx"
  );
  import.meta.hot.lastModified = "1711639369392.731";
}
var FormTango = () => {
  _s2();
  const {
    state,
    retry
  } = useDXTApiFetch({
    url: API_SETTINGS_DB,
    silent: true
  });
  return state.map({
    loading: (_) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Loading, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.tango/components/index.tsx",
      lineNumber: 38,
      columnNumber: 19
    }, this),
    error: ({
      error
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ApiErrors, { error, retry, cancelAndNavigateTo: URL_SETTINGS_PATH }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.tango/components/index.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this),
    success: (state2) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Success, { stateData: state2.data }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.tango/components/index.tsx",
      lineNumber: 42,
      columnNumber: 23
    }, this)
  });
};
_s2(FormTango, "1aHkhAFWgcwHik8/GdJ//FCIL3o=", false, function() {
  return [useDXTApiFetch];
});
_c3 = FormTango;
var _c3;
$RefreshReg$(_c3, "FormTango");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.tango/route.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.tango/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.tango/route.tsx"
  );
  import.meta.hot.lastModified = "1711474084154.8188";
}
function Tango() {
  _s3();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SettingsFormHeading, { title: "Conexi\xF3n a Tango", actionButton: {
      label: "Cancelar",
      buttonProps: {
        colorScheme: "gray",
        onClick: () => {
          navigate(URL_SETTINGS_PATH);
        }
      }
    } }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.tango/route.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FormTango, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.tango/route.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.tango/route.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s3(Tango, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c4 = Tango;
var _c4;
$RefreshReg$(_c4, "Tango");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Tango as default
};
//# sourceMappingURL=/build/routes/_admin.settings.tango-YZ3ESYJ4.js.map
