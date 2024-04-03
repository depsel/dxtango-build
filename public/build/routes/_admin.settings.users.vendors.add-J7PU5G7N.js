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
  URL_SETTINGS_VENDORS_PATH,
  require_lodash,
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

// browser-route-module:routes/_admin.settings.users.vendors.add/route.tsx?browser
init_Buffer();

// src/app/routes/_admin.settings.users.vendors.add/route.tsx
init_Buffer();

// src/app/routes/_admin.settings.users.vendors.add/components/index.tsx
init_Buffer();

// src/app/routes/_admin.settings.users.vendors.add/components/success.tsx
init_Buffer();
var import_react2 = __toESM(require_react(), 1);

// src/app/routes/_admin.settings.users.vendors.add/validation.ts
init_Buffer();
var import_react = __toESM(require_react(), 1);
var import_lodash = __toESM(require_lodash(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.vendors.add/validation.ts"
  );
  import.meta.hot.lastModified = "1711474084157.3088";
}
var useCustomValidationSchema = () => {
  const [passwordStatus, setPasswordStatus] = (0, import_react.useState)(null);
  const customValidationSchema = create$3({
    password: create$6().required("Ingrese una contrase\xF1a").test("password", "Formato de contrase\xF1a no v\xE1lido", (v) => {
      if (v != "" && v != null) {
        let newPasswordStatus = dxtPasswordStatus(v);
        if (!import_lodash.default.isEqual(passwordStatus, newPasswordStatus))
          setPasswordStatus(newPasswordStatus);
        return yupVOValidation(VODXTPassword, v);
      }
      return true;
    }),
    password_repeat: create$6().required("Repita la contrase\xF1a").test(
      "passwords-match",
      "Las contrase\xF1as no coinciden",
      function(value) {
        return this.parent.password === value;
      }
    )
  }).required();
  const yupValidationSchema = commonValidationSchema.concat(customValidationSchema);
  return { yupValidationSchema, passwordStatus };
};

// src/app/routes/_admin.settings.users.vendors.add/components/success.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.users.vendors.add/components/success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx"
  );
  import.meta.hot.lastModified = "1712028233686.8345";
}
var Success = (props) => {
  _s();
  const {
    typeSettings
  } = props;
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
    setError,
    resetField,
    watch,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful
    }
  } = useForm({
    defaultValues: {
      habilitado_en_dxt: true,
      puede_crear_pedido: true,
      puede_editar_pedido: true,
      ver_pedidos_cumplidos: true,
      ver_sin_precio: false,
      mostrar_mensaje_de_advertencia: false,
      puede_anular_pedido: false,
      borrar_pedido_al_anular: false,
      aprobar_pedido_al_crear: false
    },
    resolver: o(yupValidationSchema)
  });
  const watchPuedeAnularPedido = watch("puede_anular_pedido");
  (0, import_react2.useEffect)(() => {
    if (watchPuedeAnularPedido === false)
      resetField("borrar_pedido_al_anular", {
        defaultValue: false
      });
  }, [watchPuedeAnularPedido]);
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const {
      password_repeat,
      ...data
    } = dataUnsafe;
    if (data.email === "")
      delete data.email;
    const input = data;
    const result = await typeSettings.api.post(input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: {
          title: "Usuario creado"
        },
        error: {
          title: "Ha ocurrido un error"
        },
        loading: {
          title: "Creando usuario"
        }
      }
    }).then(() => {
      app.navigate(URL_SETTINGS_VENDORS_PATH);
    }).catch((e) => {
      setError("root", {
        message: e
      });
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormErrors, { errors }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, alignItems: "center", gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { size: "sm", textTransform: "uppercase", children: "Informaci\xF3n del Vendedor" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 145,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 142,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledSelect, { fieldProps: {
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
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this),
        stateRelationship instanceof FetchStateError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineError, { error: stateRelationship.errorOrNull().error }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 167,
          columnNumber: 64
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledInput, { fieldProps: {
        name: "username",
        id: "username",
        type: "text"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Nombre de Usuario"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 170,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 169,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledInput, { fieldProps: {
        name: "email",
        id: "email",
        type: "text",
        inputMode: "email"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Correo electr\xF3nico"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 181,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 180,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledInput, { fieldProps: {
        name: "password",
        id: "password",
        type: "password"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Contrase\xF1a"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 193,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 192,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledInput, { fieldProps: {
        name: "password_repeat",
        id: "password_repeat",
        type: "password"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Confirmaci\xF3n de Contrase\xF1a"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 204,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 203,
        columnNumber: 13
      }, this),
      passwordStatus != null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: [
        passwordStatus.tooShort && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { colorScheme: "red", children: "Contrase\xF1a muy corta" }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 217,
          columnNumber: 45
        }, this),
        passwordStatus.tooLong && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { colorScheme: "red", children: "Contrase\xF1a muy larga" }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 218,
          columnNumber: 44
        }, this),
        passwordStatus.invalidCharsPresent && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { colorScheme: "red", children: "Evite caracteres no v\xE1lidos" }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 219,
          columnNumber: 56
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 214,
        columnNumber: 40
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 224,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 221,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledSelect, { fieldProps: {
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
        }, formControlInnerProps: {
          label: "Perfil de facturaci\xF3n"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 229,
          columnNumber: 15
        }, this),
        statePerfiles instanceof FetchStateError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineError, { error: statePerfiles.errorOrNull().error }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 243,
          columnNumber: 60
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 226,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 248,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 245,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { size: "sm", textTransform: "uppercase", children: "Estado" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 253,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 250,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledRadio, { fieldProps: {
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
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 260,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 257,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 281,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 278,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 286,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 283,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledSwitch, { fieldProps: {
        name: "mostrar_mensaje_de_advertencia",
        id: "mostrar_mensaje_de_advertencia"
      }, formControlProps: {
        width: "auto",
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Mostrar mensaje de advertencia"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 291,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 290,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
      lineNumber: 138,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, alignItems: "center", gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { size: "sm", textTransform: "uppercase", children: "Pedidos" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 311,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 308,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { spacing: 4, direction: {
        base: "column"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "puede_crear_pedido",
          id: "puede_crear_pedido"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Puede crear pedidos"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 322,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 321,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "puede_editar_pedido",
          id: "puede_editar_pedido"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Puede editar pedidos"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 333,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 332,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "puede_anular_pedido",
          id: "puede_anular_pedido"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Puede anular pedidos"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 344,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 343,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledSwitch, { fieldProps: {
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
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 355,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 354,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "aprobar_pedido_al_crear",
          id: "aprobar_pedido_al_crear"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Los pedidos se aprueban al crearlos"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 371,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 370,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "ver_pedidos_cumplidos",
          id: "ver_pedidos_cumplidos"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Puede ver los pedidos cumplidos"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 382,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 381,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HStack, { spacing: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledSwitch, { fieldProps: {
          name: "ver_sin_precio",
          id: "ver_sin_precio"
        }, formControlProps: {
          width: "auto",
          isDisabled: disableForm
        }, formControlInnerProps: {
          label: "Puede ver art\xEDculos sin precios"
        }, control }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 393,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
          lineNumber: 392,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 318,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 315,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 408,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 405,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ControlledInput, { fieldProps: {
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
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 411,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 410,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
        lineNumber: 423,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
      lineNumber: 304,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
      lineNumber: 303,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SettingsFormsButtons, { buttonActionText: "Guardar", isLoading: disableForm, buttonCancelUrl: typeSettings.cancelButtonNavigateTo }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
      lineNumber: 427,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
      lineNumber: 426,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
    lineNumber: 135,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.vendors.add/components/success.tsx",
    lineNumber: 134,
    columnNumber: 10
  }, this);
};
_s(Success, "n/kxgH64ze6RPZkCJmJwc7CYp1Y=", false, function() {
  return [useAppResources, useToast, useCustomValidationSchema, useTangoList, useForm];
});
_c = Success;
var _c;
$RefreshReg$(_c, "Success");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.users.vendors.add/components/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.users.vendors.add/components/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.vendors.add/components/index.tsx"
  );
  import.meta.hot.lastModified = "1711474084157.0525";
}
var Form = (props) => {
  const {
    typeSettings
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Success, { typeSettings }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.vendors.add/components/index.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c2 = Form;
var _c2;
$RefreshReg$(_c2, "Form");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.users.vendors.add/route.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.users.vendors.add/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.vendors.add/route.tsx"
  );
  import.meta.hot.lastModified = "1711474084157.2166";
}
function Add() {
  _s2();
  const typeSettings = settings.vendors;
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SettingsFormHeading, { title: typeSettings.titles.create, actionButton: {
      label: "Cancelar",
      buttonProps: {
        colorScheme: "gray",
        onClick: () => {
          navigate(URL_SETTINGS_VENDORS_PATH);
        }
      }
    } }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.vendors.add/route.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { typeSettings }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.vendors.add/route.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.users.vendors.add/route.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s2(Add, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c3 = Add;
var _c3;
$RefreshReg$(_c3, "Add");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Add as default
};
//# sourceMappingURL=/build/routes/_admin.settings.users.vendors.add-J7PU5G7N.js.map
