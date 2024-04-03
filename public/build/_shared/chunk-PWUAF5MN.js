import {
  create$3,
  create$5,
  create$6,
  create$7,
  useController
} from "/build/_shared/chunk-FAFMUYJN.js";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  ValueObject,
  random
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

// src/app/components/form_elements/ControlledRadio.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/form_elements/ControlledRadio.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/form_elements/ControlledRadio.tsx"
  );
  import.meta.hot.lastModified = "1709679141871.0945";
}
var ControlledRadio = (props) => {
  _s();
  const {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    stackProps,
    radioProps,
    control
  } = props;
  const {
    name
  } = fieldProps;
  const {
    helperText
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { ...formControlProps, isInvalid: invalid, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RadioGroup, { ...fieldProps, onChange, value: value.toString(), ref, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, { direction: "row", spacing: 4, ...stackProps, children: fieldProps.options.map((option, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Radio, { value: option.value.toString(), ...radioProps, children: option.label }, `${name}-option-${index}`, false, {
      fileName: "src/app/components/form_elements/ControlledRadio.tsx",
      lineNumber: 59,
      columnNumber: 54
    }, this)) }, void 0, false, {
      fileName: "src/app/components/form_elements/ControlledRadio.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/components/form_elements/ControlledRadio.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    helperText != null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormHelperText, { children: helperText }, void 0, false, {
      fileName: "src/app/components/form_elements/ControlledRadio.tsx",
      lineNumber: 64,
      columnNumber: 30
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/form_elements/ControlledRadio.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
};
_s(ControlledRadio, "uRgZyAx1xb4ZgjH2sncQ3yv6Uxk=", false, function() {
  return [useController];
});
_c = ControlledRadio;
var _c;
$RefreshReg$(_c, "ControlledRadio");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/components/form_elements/ControlledSwitch.tsx
init_Buffer();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/form_elements/ControlledSwitch.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/form_elements/ControlledSwitch.tsx"
  );
  import.meta.hot.lastModified = "1709679141871.3062";
}
var ControlledSwitch = (props) => {
  _s2();
  const {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    control,
    watch
  } = props;
  const {
    label
  } = formControlInnerProps || {};
  const {
    field: {
      ref,
      onChange,
      onBlur,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { display: "flex", alignItems: "center", ...formControlProps, isInvalid: invalid, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Switch, { ...fieldProps, ...watch, isChecked: value, onChange: (e) => onChange(e.target.checked), onBlur, ref }, void 0, false, {
      fileName: "src/app/components/form_elements/ControlledSwitch.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    label != null && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormLabel, { htmlFor: fieldProps.id, sx: {
      mb: 0,
      ms: 4
    }, cursor: "pointer", children: label }, void 0, false, {
      fileName: "src/app/components/form_elements/ControlledSwitch.tsx",
      lineNumber: 55,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/form_elements/ControlledSwitch.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
};
_s2(ControlledSwitch, "VIBggnfBTi4HPXy3F7JaQsAKWCU=", false, function() {
  return [useController];
});
_c2 = ControlledSwitch;
var _c2;
$RefreshReg$(_c2, "ControlledSwitch");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/code.client/crud_configs/users/validation.ts
init_Buffer();

// src/domain/dxt/consts/index.ts
init_Buffer();
var DIAS_DE_ENTREGA_MIN_DAYS = 0;
var DIAS_DE_ENTREGA_MAX_DAYS = 365;

// src/code.client/crud_configs/users/validation.ts
var commonValidationSchema = create$3({
  tango_id: create$5().integer().required("Seleccione un cliente de Tango").typeError("Seleccione un cliente de Tango"),
  username: create$6().required("Ingrese un nombre de usuario"),
  email: create$6().email("Ingrese un correo electr\xF3nico v\xE1lido"),
  perfil_facturacion_id: create$5().integer().required("Seleccione un perfil de facturaci\xF3n").typeError("Seleccione un perfil de facturaci\xF3n"),
  dia_de_entrega: create$5().integer(
    `El tiempo de entrega de pedidos debe ser un un n\xFAmero entero entre ${DIAS_DE_ENTREGA_MIN_DAYS} y ${DIAS_DE_ENTREGA_MAX_DAYS}`
  ).min(
    DIAS_DE_ENTREGA_MIN_DAYS,
    `El tiempo de entrega de pedidos debe ser mayor o igual a ${DIAS_DE_ENTREGA_MIN_DAYS} d\xEDas`
  ).max(
    DIAS_DE_ENTREGA_MAX_DAYS,
    `El tiempo de entrega de pedidos no puede superar los ${DIAS_DE_ENTREGA_MAX_DAYS} d\xEDas`
  ).required("Ingrese el n\xFAmero de d\xEDas para entrega de pedidos").typeError("Ingrese el n\xFAmero de d\xEDas para entrega de pedidos"),
  habilitado_en_dxt: create$7().required(),
  puede_crear_pedido: create$7().required(),
  puede_editar_pedido: create$7().required(),
  ver_pedidos_cumplidos: create$7().required(),
  ver_sin_precio: create$7().required(),
  mostrar_mensaje_de_advertencia: create$7().required(),
  puede_anular_pedido: create$7().required(),
  borrar_pedido_al_anular: create$7().required(),
  aprobar_pedido_al_crear: create$7().required()
}).required();

// src/domain/shared/validation/utils.ts
init_Buffer();
var DXT_PASSWORD_MIN_LENGTH = 4;
var DXT_PASSWORD_MAX_LENGTH = 16;
var DXT_PASSWORD_SPECIAL_CHARS = `!@#$%^&*()-_=+,.;?'"\\|/:{}<>[]`;
var DXT_PASSWORD_LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz\xF1\xE7\xE1\xE9\xED\xF3\xFA\xE0\xE8\xEC\xF2\xF9\xE2\xEA\xEE\xF4\xFB\xE3\xF5\xE4\xEB\xEF\xF6\xFC";
var DXT_PASSWORD_UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ\xD1\xC7\xC1\xC9\xCD\xD3\xDA\xC0\xC8\xCC\xD2\xD9\xC2\xCA\xCE\xD4\xDB\xC3\xD5\xC4\xCB\xCF\xD6\xDC";
var DXT_PASSWORD_NUMERIC_CHARS = "0123456789";
function dxtPasswordStatus(value) {
  let invalidVariableType = true;
  let invalidCharsPresent = false;
  let lowercaseMissing = true;
  let uppercaseMissing = true;
  let numbersMissing = true;
  let specialCharsMissing = true;
  let tooShort = false;
  let tooLong = false;
  if (typeof value === "string") {
    invalidVariableType = false;
    tooShort = value.length < DXT_PASSWORD_MIN_LENGTH;
    tooLong = !tooShort && value.length > DXT_PASSWORD_MAX_LENGTH;
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (DXT_PASSWORD_LOWERCASE_CHARS.includes(char)) {
        lowercaseMissing = false;
      } else if (DXT_PASSWORD_UPPERCASE_CHARS.includes(char)) {
        uppercaseMissing = false;
      } else if (char >= "0" && char <= "9") {
        numbersMissing = false;
      } else if (DXT_PASSWORD_SPECIAL_CHARS.includes(char)) {
        specialCharsMissing = false;
      } else {
        invalidCharsPresent = true;
      }
    }
  }
  const passwordIsValid = !(invalidVariableType || tooShort || tooLong || invalidCharsPresent);
  return {
    invalidVariableType,
    passwordIsValid,
    tooShort,
    tooLong,
    invalidCharsPresent
    // lowercaseMissing,
    // uppercaseMissing,
    // numbersMissing,
    // specialCharsMissing,
  };
}
function isDXTPassword(value) {
  if (typeof value !== "string")
    return false;
  return dxtPasswordStatus(value).passwordIsValid;
}
function _getRandomChars(collection, length) {
  let result = "";
  for (let i = 0; i < length; i++)
    result += collection[random(0, collection.length - 1)];
  return result;
}
function generateRandomPassword() {
  const length = random(DXT_PASSWORD_MIN_LENGTH, DXT_PASSWORD_MAX_LENGTH);
  const chunkLength = Math.floor(length / 4);
  const chunksLength = [
    chunkLength,
    chunkLength,
    chunkLength,
    length - chunkLength * 3
  ];
  for (let i = 0; i < 10; i++) {
    const c1 = random(0, 3);
    const c2 = random(0, 3);
    if (chunksLength[c1] > 1) {
      chunksLength[c1]--;
      chunksLength[c2]++;
    }
  }
  let sourceString = _getRandomChars(DXT_PASSWORD_SPECIAL_CHARS, chunksLength[0]) + _getRandomChars(DXT_PASSWORD_LOWERCASE_CHARS, chunksLength[1]) + _getRandomChars(DXT_PASSWORD_UPPERCASE_CHARS, chunksLength[2]) + _getRandomChars(DXT_PASSWORD_NUMERIC_CHARS, chunksLength[3]);
  let newString = "";
  while (sourceString !== "") {
    const pos = random(0, sourceString.length - 1);
    newString += sourceString[pos];
    sourceString = sourceString.substring(0, pos) + sourceString.substring(pos + 1);
  }
  return newString;
}

// src/domain/shared/value_objects/vo_dxt_password.ts
init_Buffer();
var VODXTPassword = class extends ValueObject {
  validate(value) {
    if (typeof value === "string" && isDXTPassword(value))
      return value;
    this.throwError(value);
  }
  static random() {
    return new VODXTPassword(generateRandomPassword());
  }
};

export {
  ControlledRadio,
  ControlledSwitch,
  commonValidationSchema,
  dxtPasswordStatus,
  VODXTPassword
};
//# sourceMappingURL=/build/_shared/chunk-PWUAF5MN.js.map
