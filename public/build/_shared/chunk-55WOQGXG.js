import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  require_lodash
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

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/CloseIcon.js
var require_CloseIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/CloseIcon.js"(exports, module) {
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
    var CloseIcon2 = function CloseIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" })
      );
    };
    var CloseIcon$1 = React.memo ? React.memo(CloseIcon2) : CloseIcon2;
    module.exports = CloseIcon$1;
  }
});

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/MagnifyIcon.js
var require_MagnifyIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/MagnifyIcon.js"(exports, module) {
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
    var MagnifyIcon2 = function MagnifyIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" })
      );
    };
    var MagnifyIcon$1 = React.memo ? React.memo(MagnifyIcon2) : MagnifyIcon2;
    module.exports = MagnifyIcon$1;
  }
});

// src/code.client/hooks/useSearchField.ts
init_Buffer();
var import_lodash = __toESM(require_lodash(), 1);
var import_react = __toESM(require_react(), 1);
function useSearchField(data, fieldsToFilter) {
  const [isFiltering, setIsFiltering] = (0, import_react.useState)(false);
  const [filteredData, setFilteredData] = (0, import_react.useState)(data);
  const handleSearchInputChange = (query) => {
    setIsFiltering(query != null && query !== "");
    if (import_lodash.default.isArray(data)) {
      let filterApplied = [...data];
      if (query != null && Array.isArray(data)) {
        filterApplied = import_lodash.default.filter(data, (obj) => {
          return import_lodash.default.some(fieldsToFilter, (prop) => {
            return String(import_lodash.default.get(obj, prop)).toLowerCase().includes(query.toLowerCase());
          });
        });
      }
      setFilteredData(filterApplied);
      return;
    } else if (import_lodash.default.isObject(data)) {
      const filterApplied = { ...data };
      if (query != null) {
        import_lodash.default.forEach(data, (array, key) => {
          const filteredArray = import_lodash.default.filter(array, (obj) => {
            return import_lodash.default.some(fieldsToFilter, (prop) => {
              return String(import_lodash.default.get(obj, prop)).toLowerCase().includes(query.toLowerCase());
            });
          });
          filterApplied[key] = filteredArray;
        });
      }
      setFilteredData(filterApplied);
      return;
    }
    setFilteredData(data);
  };
  return { filteredData, handleSearchInputChange, isFiltering };
}

// src/app/components/SearchField.tsx
init_Buffer();
var import_react2 = __toESM(require_react(), 1);
var import_CloseIcon = __toESM(require_CloseIcon(), 1);
var import_MagnifyIcon = __toESM(require_MagnifyIcon(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/SearchField.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/SearchField.tsx"
  );
  import.meta.hot.lastModified = "1711994148416.6453";
}
var SearchField = ({
  handleSearchInputChange,
  inputProps
}) => {
  _s();
  const [searchValue, setSearchValue] = (0, import_react2.useState)(null);
  const inputRef = (0, import_react2.useRef)(null);
  const inputChangeRef = (0, import_react2.useRef)();
  const handleSearchReset = () => {
    setSearchValue(null);
    handleSearchInputChange();
    if (inputChangeRef.current)
      clearTimeout(inputChangeRef.current);
    if (inputRef.current)
      inputRef.current.focus();
  };
  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
    if (inputChangeRef.current)
      clearTimeout(inputChangeRef.current);
    inputChangeRef.current = setTimeout(() => {
      handleSearchInputChange(e.target.value);
    }, 1e3);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { as: import_MagnifyIcon.default, boxSize: 4 }, void 0, false, {
      fileName: "src/app/components/SearchField.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/components/SearchField.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { ref: inputRef, type: "text", name: "filter", placeholder: "Filtrar...", value: searchValue ?? "", onChange: handleOnChange, ...inputProps }, void 0, false, {
      fileName: "src/app/components/SearchField.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    searchValue !== "" && searchValue != null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputRightElement, { cursor: "pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { as: import_CloseIcon.default, onClick: handleSearchReset }, void 0, false, {
      fileName: "src/app/components/SearchField.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/components/SearchField.tsx",
      lineNumber: 52,
      columnNumber: 52
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputRightElement, {}, void 0, false, {
      fileName: "src/app/components/SearchField.tsx",
      lineNumber: 54,
      columnNumber: 32
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/SearchField.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s(SearchField, "yghuh53xHjq/HdhQKz6vqoxiFP8=");
_c = SearchField;
var _c;
$RefreshReg$(_c, "SearchField");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  useSearchField,
  require_CloseIcon,
  require_MagnifyIcon,
  SearchField
};
//# sourceMappingURL=/build/_shared/chunk-55WOQGXG.js.map
