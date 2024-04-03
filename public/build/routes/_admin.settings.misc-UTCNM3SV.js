import {
  API_SETTINGS_MISC,
  AUTH_EXPIRATION_MAX_DAYS,
  AUTH_EXPIRATION_MIN_DAYS,
  VOTCPPort,
  settingsMiscUpdateRequest
} from "/build/_shared/chunk-UAH53UTH.js";
import {
  ControlledTextarea
} from "/build/_shared/chunk-22PGUOAG.js";
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
  create$7,
  o,
  useController,
  useForm
} from "/build/_shared/chunk-FAFMUYJN.js";
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
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  Grid,
  GridItem,
  Heading,
  URL_SETTINGS_PATH,
  ValueObject,
  isHost,
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

// browser-route-module:routes/_admin.settings.misc/route.tsx?browser
init_Buffer();

// src/app/routes/_admin.settings.misc/route.tsx
init_Buffer();

// src/app/routes/_admin.settings.misc/components/index.tsx
init_Buffer();

// src/@core/value_objects/vo_host.ts
init_Buffer();
var VOHost = class extends ValueObject {
  validate(input) {
    let value = input;
    if (typeof value === "string") {
      value = value.trim().toLowerCase();
      if (isHost(value))
        return value;
    }
    this.throwError(input);
  }
};

// src/app/routes/_admin.settings.misc/components/loading.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.misc/components/loading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.misc/components/loading.tsx"
  );
  import.meta.hot.lastModified = "1708552390246.8083";
}
var Loading = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "full", sx: {
  mt: 8,
  mb: 4
}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { templateColumns: {
  base: "1fr",
  md: "repeat(2,1fr)"
}, alignItems: "center", gap: 4, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 49,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 48,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 57,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormTextareaSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 67,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 64,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Divider, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 72,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 69,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 77,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { colSpan: {
    md: 2
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormTextareaSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 82,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 85,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 88,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
    lineNumber: 87,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
  lineNumber: 27,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "src/app/routes/_admin.settings.misc/components/loading.tsx",
  lineNumber: 23,
  columnNumber: 30
}, this);
_c = Loading;
var _c;
$RefreshReg$(_c, "Loading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.misc/components/success.tsx
init_Buffer();

// src/app/components/form_elements/ControlledCheckbox.tsx
init_Buffer();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/form_elements/ControlledCheckbox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/form_elements/ControlledCheckbox.tsx"
  );
  import.meta.hot.lastModified = "1709679141870.8616";
}
var ControlledCheckbox = (props) => {
  _s();
  const {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    control
  } = props;
  const {
    name
  } = fieldProps;
  const {
    text,
    helperText,
    helperAction
  } = formControlInnerProps || {};
  const {
    field: {
      ref,
      onChange,
      value
    },
    fieldState: {
      invalid
    },
    formState: {
      errors
    }
  } = useController({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { ...formControlProps, isInvalid: invalid, ref, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Checkbox, { ...fieldProps, onChange, isChecked: value, children: text }, void 0, false, {
        fileName: "src/app/components/form_elements/ControlledCheckbox.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      helperAction
    ] }, void 0, true, {
      fileName: "src/app/components/form_elements/ControlledCheckbox.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    helperText != null && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormHelperText, { children: helperText }, void 0, false, {
      fileName: "src/app/components/form_elements/ControlledCheckbox.tsx",
      lineNumber: 63,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/form_elements/ControlledCheckbox.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
};
_s(ControlledCheckbox, "uRgZyAx1xb4ZgjH2sncQ3yv6Uxk=", false, function() {
  return [useController];
});
_c2 = ControlledCheckbox;
var _c2;
$RefreshReg$(_c2, "ControlledCheckbox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.misc/validation.ts
init_Buffer();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.misc/validation.ts"
  );
  import.meta.hot.lastModified = "1711474084154.4373";
}
var yupValidationSchema = create$3({
  smtp_host: create$6().required("Ingrese el host SMTP").test(
    "valid-host",
    "Ingrese un host SMTP v\xE1lido",
    (v) => yupVOValidation(VOHost, v)
  ),
  smtp_username: create$6().required("Ingrese el usuario SMTP"),
  smtp_password: create$6().required("Ingrese la contrase\xF1a SMTP"),
  smtp_port: create$5().required("Ingrese el puerto SMTP").typeError("Ingrese un n\xFAmero de puerto SMTP v\xE1lido").test(
    "is-port",
    "Ingrese un puerto SMTP v\xE1lido",
    (v) => yupVOValidation(VOTCPPort, v)
  ),
  smtp_use_tls: create$7().required(),
  auth_expiration_days: create$5().min(
    AUTH_EXPIRATION_MIN_DAYS,
    `El tiempo de espera debe ser mayor a ${AUTH_EXPIRATION_MIN_DAYS}`
  ).max(
    AUTH_EXPIRATION_MAX_DAYS,
    `El tiempo de espera debe ser menor a ${AUTH_EXPIRATION_MAX_DAYS}`
  ).required("Ingrese el tiempo de espera para logout").typeError("Ingrese el tiempo de espera para logout"),
  admin_email: create$6().required("Ingrese el correo electr\xF3nico del Administrador").email("Ingrese un correo electr\xF3nico v\xE1lido"),
  user_warning_message_title: create$6().required("Ingrese el t\xEDtulo del mensaje de advertencia"),
  user_warning_message_content: create$6().required("Ingrese el contenido del mensaje de advertencia"),
  user_disabled_message_title: create$6().required("Ingrese el t\xEDtulo del mensaje de inhabilitaci\xF3n"),
  user_disabled_message_content: create$6().required("Ingrese el contenido del mensaje de inhabilitaci\xF3n")
}).required();

// src/app/routes/_admin.settings.misc/components/success.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.misc/components/success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.misc/components/success.tsx"
  );
  import.meta.hot.lastModified = "1711639369237.808";
}
var Success = (props) => {
  _s2();
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
    const result = await settingsMiscUpdateRequest(input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: {
          title: "Configuraciones actualizadas"
        },
        error: {
          title: "Ha ocurrido un error"
        },
        loading: {
          title: "Actualizando configuraciones"
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
      fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, alignItems: "center", gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledInput, { fieldProps: {
        name: "smtp_host",
        id: "smtp_host",
        type: "text",
        isDisabled: disableForm
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Hostname SMTP"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 92,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledInput, { fieldProps: {
        name: "smtp_username",
        id: "smtp_username",
        type: "text",
        isDisabled: disableForm
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Usuario SMTP"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 104,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledInput, { fieldProps: {
        name: "smtp_password",
        id: "smtp_password",
        type: "text",
        isDisabled: disableForm
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Contrase\xF1a SMTP"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 116,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledInput, { fieldProps: {
        name: "smtp_port",
        id: "smtp_port",
        type: "number",
        inputMode: "tel",
        htmlSize: 5,
        maxLength: 5,
        width: "auto",
        isDisabled: disableForm
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Puerto SMTP"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 128,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledCheckbox, { control, fieldProps: {
        id: "smtp_use_tls",
        name: "smtp_use_tls"
      }, formControlInnerProps: {
        text: "Usar TLS"
      } }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 144,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 154,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledInput, { fieldProps: {
        name: "auth_expiration_days",
        id: "auth_expiration_days",
        type: "number",
        inputMode: "tel",
        htmlSize: 5,
        maxLength: 5,
        width: "auto",
        isDisabled: disableForm
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Tiempo de espera para logout",
        helperText: "Expresado en d\xEDas"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 157,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 156,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledInput, { fieldProps: {
        name: "admin_email",
        id: "admin_email",
        type: "text",
        inputMode: "email",
        htmlSize: 30,
        width: "auto",
        isDisabled: disableForm
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Correo electr\xF3nico Administrador"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 174,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 173,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, alignItems: "center", gap: 4, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Heading, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 198,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 195,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledInput, { fieldProps: {
        name: "user_warning_message_title",
        id: "user_warning_message_title",
        type: "text",
        isDisabled: disableForm
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "T\xEDtulo del mensaje de advertencia"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 205,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 202,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: "Contenido del mensaje de advertencia" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledTextarea, { fieldProps: {
        name: "user_warning_message_content",
        id: "user_warning_message_content",
        isDisabled: disableForm
      }, formControlProps: {
        isDisabled: disableForm
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 224,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 221,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Divider, {}, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 235,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 232,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledInput, { fieldProps: {
        name: "user_disabled_message_title",
        id: "user_disabled_message_title",
        type: "text",
        isDisabled: disableForm
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "T\xEDtulo del mensaje de inhabilitaci\xF3n"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 240,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 237,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: "Contenido del mensaje de inhabilitaci\xF3n" }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 251,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledTextarea, { fieldProps: {
        name: "user_disabled_message_content",
        id: "user_disabled_message_content",
        isDisabled: disableForm
      }, formControlProps: {
        isDisabled: disableForm
      }, control }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 259,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
        lineNumber: 256,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
      lineNumber: 191,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
      lineNumber: 190,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CommonCard, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SettingsFormsButtons, { isLoading: disableForm }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
      lineNumber: 270,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
      lineNumber: 269,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.misc/components/success.tsx",
    lineNumber: 83,
    columnNumber: 10
  }, this);
};
_s2(Success, "WhTmzRwZ2QzHZIG+8ZTcb2WSDZ8=", false, function() {
  return [useAppResources, useToast, useForm];
});
_c3 = Success;
var _c3;
$RefreshReg$(_c3, "Success");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.misc/components/index.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.misc/components/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.misc/components/index.tsx"
  );
  import.meta.hot.lastModified = "1711639369364.184";
}
var FormMisc = () => {
  _s3();
  const {
    state,
    retry
  } = useDXTApiFetch({
    url: API_SETTINGS_MISC,
    silent: true
  });
  return state.map({
    loading: (_) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Loading, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.misc/components/index.tsx",
      lineNumber: 38,
      columnNumber: 19
    }, this),
    error: ({
      error
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ApiErrors, { error, retry, cancelAndNavigateTo: URL_SETTINGS_PATH }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.misc/components/index.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this),
    success: (state2) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Success, { stateData: state2.data }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.misc/components/index.tsx",
      lineNumber: 42,
      columnNumber: 23
    }, this)
  });
};
_s3(FormMisc, "1aHkhAFWgcwHik8/GdJ//FCIL3o=", false, function() {
  return [useDXTApiFetch];
});
_c4 = FormMisc;
var _c4;
$RefreshReg$(_c4, "FormMisc");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.misc/route.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.misc/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.misc/route.tsx"
  );
  import.meta.hot.lastModified = "1711474084154.3225";
}
function Misc() {
  _s4();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SettingsFormHeading, { title: "Correo saliente y sesiones", actionButton: {
      label: "Cancelar",
      buttonProps: {
        colorScheme: "gray",
        onClick: () => {
          navigate(URL_SETTINGS_PATH);
        }
      }
    } }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.misc/route.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormMisc, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.misc/route.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.misc/route.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s4(Misc, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c5 = Misc;
var _c5;
$RefreshReg$(_c5, "Misc");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Misc as default
};
//# sourceMappingURL=/build/routes/_admin.settings.misc-UTCNM3SV.js.map
