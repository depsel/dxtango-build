import {
  Icon,
  IconButton,
  Image,
  useColorMode,
  useColorModeValue
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

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/MoonWaningCrescentIcon.js
var require_MoonWaningCrescentIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/MoonWaningCrescentIcon.js"(exports, module) {
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
    var MoonWaningCrescentIcon2 = function MoonWaningCrescentIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" })
      );
    };
    var MoonWaningCrescentIcon$1 = React.memo ? React.memo(MoonWaningCrescentIcon2) : MoonWaningCrescentIcon2;
    module.exports = MoonWaningCrescentIcon$1;
  }
});

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/WeatherSunnyIcon.js
var require_WeatherSunnyIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/WeatherSunnyIcon.js"(exports, module) {
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
    var WeatherSunnyIcon2 = function WeatherSunnyIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" })
      );
    };
    var WeatherSunnyIcon$1 = React.memo ? React.memo(WeatherSunnyIcon2) : WeatherSunnyIcon2;
    module.exports = WeatherSunnyIcon$1;
  }
});

// src/app/components/ColorModeSelector.tsx
init_Buffer();
var import_MoonWaningCrescentIcon = __toESM(require_MoonWaningCrescentIcon(), 1);
var import_WeatherSunnyIcon = __toESM(require_WeatherSunnyIcon(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/ColorModeSelector.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/ColorModeSelector.tsx"
  );
  import.meta.hot.lastModified = "1708222052908.2163";
}
var ColorModeSelector = () => {
  _s();
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconButton, { "aria-label": "Cambiar modo de color", onClick: toggleColorMode, isRound: true, icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { as: colorMode === "light" ? import_MoonWaningCrescentIcon.default : import_WeatherSunnyIcon.default }, void 0, false, {
    fileName: "src/app/components/ColorModeSelector.tsx",
    lineNumber: 31,
    columnNumber: 99
  }, this) }, void 0, false, {
    fileName: "src/app/components/ColorModeSelector.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(ColorModeSelector, "uURyIwMgIfFLStF4nJMrxbb6o/4=", false, function() {
  return [useColorMode];
});
_c = ColorModeSelector;
var _c;
$RefreshReg$(_c, "ColorModeSelector");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/components/LogoImage.tsx
init_Buffer();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/LogoImage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/LogoImage.tsx"
  );
  import.meta.hot.lastModified = "1708222052908.4639";
}
var LogoImage = (props) => {
  _s2();
  const logo = useColorModeValue("/logo-light.svg", "/logo-dark.svg");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Image, { src: logo, ...props }, void 0, false, {
    fileName: "src/app/components/LogoImage.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_s2(LogoImage, "jP0i616xv8UjROJLyLMIMXmIxwA=", false, function() {
  return [useColorModeValue];
});
_c2 = LogoImage;
var _c2;
$RefreshReg$(_c2, "LogoImage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ColorModeSelector,
  LogoImage
};
//# sourceMappingURL=/build/_shared/chunk-LZIBTVFB.js.map
