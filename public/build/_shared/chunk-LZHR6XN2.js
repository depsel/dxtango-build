import {
  Button,
  Icon,
  IconButton,
  Text,
  useBreakpointValue
} from "/build/_shared/chunk-47TYDRZU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-C6PYO3SA.js";
import {
  createHotContext
} from "/build/_shared/chunk-Z5QATG7W.js";
import {
  require_react
} from "/build/_shared/chunk-MIDFM7PG.js";
import {
  __commonJS,
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/PlusIcon.js
var require_PlusIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/PlusIcon.js"(exports, module) {
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
    var PlusIcon = function PlusIcon2(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" })
      );
    };
    var PlusIcon$1 = React.memo ? React.memo(PlusIcon) : PlusIcon;
    module.exports = PlusIcon$1;
  }
});

// src/app/components/ResponsiveIconButton.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/ResponsiveIconButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/ResponsiveIconButton.tsx"
  );
  import.meta.hot.lastModified = "1711939687162.381";
}
var ResponsiveIconButton = (props) => {
  _s();
  const {
    text,
    icon,
    iconProps,
    sharedProps,
    buttonProps,
    iconButtonProps
  } = props;
  const buttonInjection = useBreakpointValue({
    base: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { "aria-label": text, ...sharedProps, ...iconButtonProps, icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { as: icon, ...iconProps }, void 0, false, {
      fileName: "src/app/components/ResponsiveIconButton.tsx",
      lineNumber: 34,
      columnNumber: 85
    }, this) }, void 0, false, {
      fileName: "src/app/components/ResponsiveIconButton.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this),
    md: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { ...sharedProps, ...buttonProps, ...icon && {
      leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { as: icon, ...iconProps }, void 0, false, {
        fileName: "src/app/components/ResponsiveIconButton.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this)
    }, children: text }, void 0, false, {
      fileName: "src/app/components/ResponsiveIconButton.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: buttonInjection }, void 0, false, {
    fileName: "src/app/components/ResponsiveIconButton.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_s(ResponsiveIconButton, "tY06rMmEPAvcgKZsG6ZImS1Ei9E=", false, function() {
  return [useBreakpointValue];
});
_c = ResponsiveIconButton;
var _c;
$RefreshReg$(_c, "ResponsiveIconButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/components/TextPrice.tsx
init_Buffer();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/TextPrice.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/TextPrice.tsx"
  );
  import.meta.hot.lastModified = "1711935401950.009";
}
function formatNumber(num) {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
var TextPrice = ({
  precio,
  moneda,
  textProps
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { textAlign: "right", ...textProps, children: [
    moneda != null && moneda + " ",
    formatNumber(precio)
  ] }, void 0, true, {
    fileName: "src/app/components/TextPrice.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_c2 = TextPrice;
var TextPriceNative = ({
  precio,
  moneda,
  textProps
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    moneda != null && moneda + " ",
    formatNumber(precio)
  ] }, void 0, true, {
    fileName: "src/app/components/TextPrice.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
};
_c22 = TextPriceNative;
var _c2;
var _c22;
$RefreshReg$(_c2, "TextPrice");
$RefreshReg$(_c22, "TextPriceNative");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_PlusIcon,
  ResponsiveIconButton,
  TextPrice,
  TextPriceNative
};
//# sourceMappingURL=/build/_shared/chunk-LZHR6XN2.js.map
