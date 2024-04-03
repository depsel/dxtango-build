import {
  InlineError
} from "/build/_shared/chunk-Y2FO4O2S.js";
import {
  ControlledSelect
} from "/build/_shared/chunk-32KCEIU6.js";
import "/build/_shared/chunk-5RUXSYXT.js";
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
import {
  FetchStateError,
  FetchStateLoading,
  FetchStateSuccess
} from "/build/_shared/chunk-MQDBQWEI.js";
import {
  Box,
  Grid,
  GridItem,
  URL_SETTINGS_PATH,
  apiPath,
  dxtApiRequest,
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
import {
  require_react
} from "/build/_shared/chunk-MIDFM7PG.js";
import {
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// browser-route-module:routes/_admin.settings.company/route.tsx?browser
init_Buffer();

// src/app/routes/_admin.settings.company/route.tsx
init_Buffer();

// src/app/routes/_admin.settings.company/components/index.tsx
init_Buffer();

// src/app/routes/_admin.settings.company/components/success.tsx
init_Buffer();
var import_react = __toESM(require_react(), 1);

// src/api-client/company/paths.ts
init_Buffer();
var API_DICTIONARY = apiPath("/dictionary");
var API_ACTIVE_COMPANY = apiPath("/dictionary/active_company");

// src/api-client/company/requests.tsx
init_Buffer();
var companyUpdateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      url: API_ACTIVE_COMPANY,
      params: input,
      method: "POST",
      silent: true
    },
    app
  );
};

// src/app/routes/_admin.settings.company/validation.ts
init_Buffer();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.company/validation.ts"
  );
  import.meta.hot.lastModified = "1711474084153.3284";
}
var yupValidationSchema = create$3({
  company: create$6().required("Seleccione una empresa activa")
}).required();

// src/app/routes/_admin.settings.company/components/success.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.company/components/success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.company/components/success.tsx"
  );
  import.meta.hot.lastModified = "1711639369237.8188";
}
var Success = () => {
  _s();
  const app = useAppResources();
  const toast = useToast();
  const {
    state: stateDictionary,
    result: resultDictionary
  } = useTangoList({
    url: API_DICTIONARY,
    fieldsMap: {
      label: "name",
      value: "db_name",
      isActive: "is_active"
    }
  });
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
    defaultValues: {
      company: ""
    },
    resolver: o(yupValidationSchema)
  });
  const disableForm = isSubmitSuccessful || isSubmitting;
  (0, import_react.useEffect)(() => {
    if (stateDictionary instanceof FetchStateSuccess) {
      const selectedIndex = resultDictionary.findIndex((x) => x.isActive === true);
      if (selectedIndex >= 0) {
        reset({
          company: resultDictionary[selectedIndex].value
        });
      }
    }
  }, [stateDictionary]);
  const onSubmit = async (data) => {
    const input = {
      company: data.company
    };
    const result = await companyUpdateRequest(input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: {
          title: "Empresa actualizada"
        },
        error: {
          title: "Ha ocurrido un error"
        },
        loading: {
          title: "Actualizando empresa"
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormErrors, { errors }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.company/components/success.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, alignItems: "center", gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledSelect, { fieldProps: {
          name: "company",
          placeholder: "Seleccione una empresa",
          options: resultDictionary,
          noOptionsMessage(obj) {
            return "No hay empresas disponibles";
          },
          selectedOptionStyle: "check",
          isLoading: stateDictionary instanceof FetchStateLoading
        }, formControlProps: {
          isDisabled: disableForm || !(stateDictionary instanceof FetchStateSuccess)
        }, formControlInnerProps: {
          label: "Empresa activa"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.company/components/success.tsx",
          lineNumber: 118,
          columnNumber: 15
        }, this),
        stateDictionary instanceof FetchStateError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineError, { error: stateDictionary.errorOrNull().error }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.company/components/success.tsx",
          lineNumber: 132,
          columnNumber: 62
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_admin.settings.company/components/success.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.company/components/success.tsx",
        lineNumber: 134,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.company/components/success.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.company/components/success.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsFormsButtons, { isLoading: disableForm }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.company/components/success.tsx",
      lineNumber: 138,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.company/components/success.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.company/components/success.tsx",
    lineNumber: 110,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.company/components/success.tsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
};
_s(Success, "z/JpWR+xvjeib9Jush9S0xXKkIE=", false, function() {
  return [useAppResources, useToast, useTangoList, useForm];
});
_c = Success;
var _c;
$RefreshReg$(_c, "Success");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.company/components/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.company/components/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.company/components/index.tsx"
  );
  import.meta.hot.lastModified = "1711474084152.74";
}
var FormCompany = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Success, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.company/components/index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c2 = FormCompany;
var _c2;
$RefreshReg$(_c2, "FormCompany");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.company/route.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.company/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.company/route.tsx"
  );
  import.meta.hot.lastModified = "1711474084153.158";
}
function Company() {
  _s2();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SettingsFormHeading, { title: "Empresa", actionButton: {
      label: "Cancelar",
      buttonProps: {
        colorScheme: "gray",
        onClick: () => {
          navigate(URL_SETTINGS_PATH);
        }
      }
    } }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.company/route.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FormCompany, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.company/route.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.company/route.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s2(Company, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c3 = Company;
var _c3;
$RefreshReg$(_c3, "Company");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Company as default
};
//# sourceMappingURL=/build/routes/_admin.settings.company-LPM6QMJT.js.map
