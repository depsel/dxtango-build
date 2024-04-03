import {
  ControlledTextarea
} from "/build/_shared/chunk-22PGUOAG.js";
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
import {
  CommonErrors
} from "/build/_shared/chunk-7ABW2NQY.js";
import {
  FormInputSkeleton,
  FormTextareaSkeleton
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
  Text,
  URL_SETTINGS_PATH,
  apiPath,
  dxtApiRequest,
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
import "/build/_shared/chunk-MIDFM7PG.js";
import {
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// browser-route-module:routes/_admin.settings.lists.$type/route.tsx?browser
init_Buffer();

// src/app/routes/_admin.settings.lists.$type/route.tsx
init_Buffer();

// src/code.client/crud_configs/lists.tsx
init_Buffer();

// src/api-client/dxt/pedido/paths.ts
init_Buffer();
var API_DXT_PEDIDO_PRODUCT_PRINT = apiPath("/dxt/pedido/articulos/print_list");
var API_DXT_PEDIDO_PRODUCT_SCREEN = apiPath("/dxt/pedido/articulos/screen_list");
var API_DXT_PEDIDO_PRODUCT_PRINT_IDS = apiPath("/dxt/pedido/articulos/print_ids");

// src/api-client/dxt/pedido/requests.ts
init_Buffer();
var dxtPedidoArticulosPrintUpdateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      url: API_DXT_PEDIDO_PRODUCT_PRINT,
      data: input,
      method: "POST",
      silent: true
    },
    app
  );
};
var dxtPedidoArticulosScreenUpdateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      url: API_DXT_PEDIDO_PRODUCT_SCREEN,
      data: input,
      method: "POST",
      silent: true
    },
    app
  );
};

// src/code.client/crud_configs/lists.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var settings = {
  screen: {
    api: {
      getAll: () => {
        return useDXTApiFetch({
          url: API_DXT_PEDIDO_PRODUCT_SCREEN,
          silent: true
        });
      },
      post: async (input, app) => {
        return dxtPedidoArticulosScreenUpdateRequest(input, app);
      }
    },
    title: "Lista de Art\xEDculos para Visualizaci\xF3n",
    description: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      "Ingrese en la lista los c\xF3digos de art\xEDculo en el \xF3rden en quedesea que aparezcan durante la creaci\xF3n o edici\xF3n de un pedido.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/code.client/crud_configs/lists.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/code.client/crud_configs/lists.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      "Cualquier l\xEDnea que ingrese, que no contenga ning\xFAn c\xF3digo de art\xEDculo, ser\xE1 considerada como t\xEDtulo de grupo."
    ] }, void 0, true, {
      fileName: "src/code.client/crud_configs/lists.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  },
  print: {
    api: {
      getAll: () => {
        return useDXTApiFetch({
          url: API_DXT_PEDIDO_PRODUCT_PRINT,
          silent: true
        });
      },
      post: async (input, app) => {
        return dxtPedidoArticulosPrintUpdateRequest(input, app);
      }
    },
    title: "Lista de Art\xEDculos para Impresi\xF3n",
    description: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      "Ingrese en la lista los c\xF3digos de art\xEDculo en el \xF3rden en que desea que aparezcan durante la impresi\xF3n de un pedido.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/code.client/crud_configs/lists.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/code.client/crud_configs/lists.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      "Cualquier l\xEDnea que ingrese, que no contenga ning\xFAn c\xF3digo de art\xEDculo, ser\xE1 considerada como t\xEDtulo de grupo."
    ] }, void 0, true, {
      fileName: "src/code.client/crud_configs/lists.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  }
};

// src/app/routes/_admin.settings.lists.$type/components/index.tsx
init_Buffer();

// src/app/routes/_admin.settings.lists.$type/components/loading.tsx
init_Buffer();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.lists.$type/components/loading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.lists.$type/components/loading.tsx"
  );
  import.meta.hot.lastModified = "1709181069776.1223";
}
var Loading = (props) => {
  const {
    typeSettings
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { width: "full", sx: {
    mt: 8,
    mb: 4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Grid, { templateColumns: {
    base: "1fr",
    md: "repeat(2,1fr)"
  }, alignItems: "start", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormTextareaSkeleton, { height: "380px" }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/loading.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/loading.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { fontSize: "sm", children: typeSettings.description }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/loading.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/loading.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/loading.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/loading.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/loading.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/loading.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.lists.$type/components/loading.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.lists.$type/components/loading.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c = Loading;
var _c;
$RefreshReg$(_c, "Loading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.lists.$type/components/success.tsx
init_Buffer();

// src/app/routes/_admin.settings.lists.$type/validation.ts
init_Buffer();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.lists.$type/validation.ts"
  );
  import.meta.hot.lastModified = "1711474084153.7979";
}
var yupValidationSchema = create$3({
  list: create$6().required("Debe ingresar al menos un c\xF3digo de art\xEDculo")
}).required();

// src/app/routes/_admin.settings.lists.$type/components/success.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.lists.$type/components/success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.lists.$type/components/success.tsx"
  );
  import.meta.hot.lastModified = "1712107964107.401";
}
var Success = (props) => {
  _s();
  const {
    stateData,
    typeSettings
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
    defaultValues: {
      list: stateData?.join("\r\n") || ""
    },
    resolver: o(yupValidationSchema)
  });
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const input = {
      data: dataUnsafe.list.split("\n")
    };
    const result = await typeSettings.api.post(input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: {
          title: "Lista actualizada"
        },
        error: {
          title: "Ha ocurrido un error"
        },
        loading: {
          title: "Actualizando lista"
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FormErrors, { errors }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/success.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, alignItems: "start", gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledTextarea, { fieldProps: {
        name: "list",
        id: "list",
        rows: 20,
        fontSize: "sm"
      }, formControlProps: {
        isDisabled: disableForm
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.lists.$type/components/success.tsx",
        lineNumber: 94,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.lists.$type/components/success.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text, { fontSize: "sm", children: typeSettings.description }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.lists.$type/components/success.tsx",
        lineNumber: 104,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.lists.$type/components/success.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/success.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/success.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SettingsFormsButtons, { isLoading: disableForm }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/success.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/success.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.lists.$type/components/success.tsx",
    lineNumber: 86,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.lists.$type/components/success.tsx",
    lineNumber: 85,
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

// src/app/routes/_admin.settings.lists.$type/components/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.lists.$type/components/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.lists.$type/components/index.tsx"
  );
  import.meta.hot.lastModified = "1711474084153.4624";
}
var FormLists = (props) => {
  const {
    typeSettings
  } = props;
  const {
    state,
    retry
  } = typeSettings.api.getAll();
  return state.map({
    loading: (_) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Loading, { typeSettings }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/index.tsx",
      lineNumber: 34,
      columnNumber: 19
    }, this),
    error: ({
      error
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ApiErrors, { error, retry, cancelAndNavigateTo: URL_SETTINGS_PATH }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/index.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this),
    success: (state2) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Success, { stateData: state2.data, typeSettings }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.lists.$type/components/index.tsx",
      lineNumber: 38,
      columnNumber: 23
    }, this)
  });
};
_c3 = FormLists;
var _c3;
$RefreshReg$(_c3, "FormLists");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.lists.$type/route.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.lists.$type/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.lists.$type/route.tsx"
  );
  import.meta.hot.lastModified = "1711474084153.6936";
}
function Lists() {
  _s2();
  const navigate = useNavigate();
  const {
    type
  } = useParams();
  const typeSettings = settings[type];
  if (type != null && typeSettings != null) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SettingsFormHeading, { title: typeSettings.title, actionButton: {
        label: "Cancelar",
        buttonProps: {
          colorScheme: "gray",
          onClick: () => {
            navigate(URL_SETTINGS_PATH);
          }
        }
      } }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.lists.$type/route.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormLists, { typeSettings }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.lists.$type/route.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.lists.$type/route.tsx",
      lineNumber: 36,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(CommonErrors, { error: "Tipo de lista no v\xE1lida", buttonProps: {
    label: "Volver a Configuraci\xF3n",
    colorScheme: "green",
    onClick: () => {
      navigate(URL_SETTINGS_PATH);
    }
  } }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.lists.$type/route.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s2(Lists, "tf5w/uSNWXjxl+d/PNRyRmNfUR4=", false, function() {
  return [useNavigate, useParams];
});
_c4 = Lists;
var _c4;
$RefreshReg$(_c4, "Lists");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Lists as default
};
//# sourceMappingURL=/build/routes/_admin.settings.lists.$type-5F7746VE.js.map
