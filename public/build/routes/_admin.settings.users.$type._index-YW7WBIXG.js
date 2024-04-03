import {
  TextWordBreak,
  require_AccountCheckIcon,
  require_TrashIcon
} from "/build/_shared/chunk-6PIMX75I.js";
import {
  SearchField,
  useSearchField
} from "/build/_shared/chunk-55WOQGXG.js";
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
  settings
} from "/build/_shared/chunk-YMMPBFHU.js";
import "/build/_shared/chunk-JJ4SMVFI.js";
import "/build/_shared/chunk-LKDVMBGW.js";
import {
  SettingsFormHeading,
  promiseBasedToast,
  useAppResources
} from "/build/_shared/chunk-KG6KY45K.js";
import {
  CommonCard
} from "/build/_shared/chunk-5N5J5Z6Z.js";
import {
  require_AccountCancelIcon
} from "/build/_shared/chunk-FO6D3CQX.js";
import "/build/_shared/chunk-MQDBQWEI.js";
import {
  AlertDialog,
  AlertDialogContent,
  Box,
  Button,
  CANCEL,
  DELETE,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  IconButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  URL_SETTINGS_PATH,
  VStack,
  pathParamsToUrl,
  resolveUserStatusColor,
  useDisclosure,
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
  __commonJS,
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/AccountPlusIcon.js
var require_AccountPlusIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/AccountPlusIcon.js"(exports, module) {
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
    var AccountPlusIcon2 = function AccountPlusIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" })
      );
    };
    var AccountPlusIcon$1 = React.memo ? React.memo(AccountPlusIcon2) : AccountPlusIcon2;
    module.exports = AccountPlusIcon$1;
  }
});

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/PencilIcon.js
var require_PencilIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/PencilIcon.js"(exports, module) {
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
    var PencilIcon2 = function PencilIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" })
      );
    };
    var PencilIcon$1 = React.memo ? React.memo(PencilIcon2) : PencilIcon2;
    module.exports = PencilIcon$1;
  }
});

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/ChevronLeftIcon.js
var require_ChevronLeftIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/ChevronLeftIcon.js"(exports, module) {
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
    var ChevronLeftIcon2 = function ChevronLeftIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" })
      );
    };
    var ChevronLeftIcon$1 = React.memo ? React.memo(ChevronLeftIcon2) : ChevronLeftIcon2;
    module.exports = ChevronLeftIcon$1;
  }
});

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/ChevronRightIcon.js
var require_ChevronRightIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/ChevronRightIcon.js"(exports, module) {
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
    var ChevronRightIcon2 = function ChevronRightIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" })
      );
    };
    var ChevronRightIcon$1 = React.memo ? React.memo(ChevronRightIcon2) : ChevronRightIcon2;
    module.exports = ChevronRightIcon$1;
  }
});

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/DotsHorizontalIcon.js
var require_DotsHorizontalIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/DotsHorizontalIcon.js"(exports, module) {
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
    var DotsHorizontalIcon2 = function DotsHorizontalIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" })
      );
    };
    var DotsHorizontalIcon$1 = React.memo ? React.memo(DotsHorizontalIcon2) : DotsHorizontalIcon2;
    module.exports = DotsHorizontalIcon$1;
  }
});

// browser-route-module:routes/_admin.settings.users.$type._index/route.tsx?browser
init_Buffer();

// src/app/routes/_admin.settings.users.$type._index/route.tsx
init_Buffer();
var import_AccountPlusIcon = __toESM(require_AccountPlusIcon(), 1);

// src/app/routes/_admin.settings.users.$type._index/components/index.tsx
init_Buffer();

// src/app/routes/_admin.settings.users.$type._index/components/loading.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.users.$type._index/components/loading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.$type._index/components/loading.tsx"
  );
  import.meta.hot.lastModified = "1708748711738.032";
}
var Loading = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "full", sx: {
    mt: 8,
    mb: 4
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { templateColumns: "1fr", gap: {
    base: 2,
    md: 4
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/loading.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/loading.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/loading.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/loading.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormTextareaSkeleton, { height: "400px" }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/loading.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/loading.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/loading.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/loading.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.users.$type._index/components/loading.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.$type._index/components/loading.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c = Loading;
var _c;
$RefreshReg$(_c, "Loading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.users.$type._index/components/success.tsx
init_Buffer();
var import_react6 = __toESM(require_react(), 1);
var import_AccountCancelIcon = __toESM(require_AccountCancelIcon(), 1);
var import_AccountCheckIcon = __toESM(require_AccountCheckIcon(), 1);
var import_PencilIcon = __toESM(require_PencilIcon(), 1);
var import_TrashIcon = __toESM(require_TrashIcon(), 1);

// src/app/components/DeleteDialog.tsx
init_Buffer();
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/DeleteDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/DeleteDialog.tsx"
  );
  import.meta.hot.lastModified = "1709181069775.3071";
}
var DeleteDialog = ({
  isOpen,
  onClose,
  handleDeletion,
  message
}) => {
  _s();
  const cancelRef = (0, import_react2.useRef)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDialog, { isOpen, leastDestructiveRef: cancelRef, onClose, motionPreset: "slideInBottom", isCentered: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalOverlay, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AlertDialogContent, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalHeader, { fontSize: "lg", fontWeight: "bold", children: message.title }, void 0, false, {
      fileName: "src/app/components/DeleteDialog.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalBody, { children: message.body }, void 0, false, {
      fileName: "src/app/components/DeleteDialog.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalFooter, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { ref: cancelRef, onClick: onClose, children: CANCEL }, void 0, false, {
        fileName: "src/app/components/DeleteDialog.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { colorScheme: "red", onClick: handleDeletion, ml: 3, children: DELETE }, void 0, false, {
        fileName: "src/app/components/DeleteDialog.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/DeleteDialog.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/DeleteDialog.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/components/DeleteDialog.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/components/DeleteDialog.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_s(DeleteDialog, "/ucEj35uWebutGLFGhq6kFjkH3Y=");
_c2 = DeleteDialog;
var _c2;
$RefreshReg$(_c2, "DeleteDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/components/Pagination.tsx
init_Buffer();

// src/code.client/hooks/usePagination.ts
init_Buffer();
var import_react4 = __toESM(require_react(), 1);
var DOTS_LEFT = "{left}";
var DOTS_RIGHT = "{right}";
var range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
var usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
  const paginationRange = (0, import_react4.useMemo)(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS_LEFT, totalPageCount];
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS_RIGHT, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS_LEFT, ...middleRange, DOTS_RIGHT, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};

// src/app/components/Pagination.tsx
var import_ChevronLeftIcon = __toESM(require_ChevronLeftIcon(), 1);
var import_ChevronRightIcon = __toESM(require_ChevronRightIcon(), 1);
var import_DotsHorizontalIcon = __toESM(require_DotsHorizontalIcon(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/Pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/Pagination.tsx"
  );
  import.meta.hot.lastModified = "1708552390245.298";
}
var Pagination = (props) => {
  _s2();
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
  if (!paginationRange)
    return null;
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(VStack, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HStack, { spacing: 1, wrap: "wrap", justifyContent: "center", children: paginationRange.map((pageNumber) => {
      if (pageNumber === DOTS_LEFT || pageNumber === DOTS_RIGHT) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { as: import_DotsHorizontalIcon.default, boxSize: 3 }, `page-${pageNumber}`, false, {
          fileName: "src/app/components/Pagination.tsx",
          lineNumber: 57,
          columnNumber: 18
        }, this);
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { colorScheme: pageNumber === currentPage ? "blue" : "gray", size: {
        base: "sm",
        md: "md"
      }, onClick: () => onPageChange(pageNumber), children: pageNumber }, `button-${pageNumber}`, false, {
        fileName: "src/app/components/Pagination.tsx",
        lineNumber: 59,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "src/app/components/Pagination.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HStack, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconButton, { "aria-label": "Anterior", size: {
        base: "sm",
        md: "md"
      }, onClick: onPrevious, isDisabled: currentPage === 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { as: import_ChevronLeftIcon.default }, void 0, false, {
        fileName: "src/app/components/Pagination.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/app/components/Pagination.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconButton, { "aria-label": "Siguiente", size: {
        base: "sm",
        md: "md"
      }, onClick: onNext, isDisabled: currentPage === lastPage, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { as: import_ChevronRightIcon.default }, void 0, false, {
        fileName: "src/app/components/Pagination.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/app/components/Pagination.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/Pagination.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/Pagination.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
};
_s2(Pagination, "19HqfiXoIUMweeBbakf/FHNBwW4=", false, function() {
  return [usePagination];
});
_c3 = Pagination;
var _c3;
$RefreshReg$(_c3, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.users.$type._index/components/success.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.users.$type._index/components/success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.$type._index/components/success.tsx"
  );
  import.meta.hot.lastModified = "1711495766951.6787";
}
var Success = (props) => {
  _s3();
  const {
    stateData,
    retry,
    typeSettings
  } = props;
  const app = useAppResources();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const toast = useToast();
  const selectedUser = (0, import_react6.useRef)(null);
  const {
    filteredData,
    handleSearchInputChange
  } = useSearchField(stateData, ["screen_name", "username"]);
  const [currentPage, setCurrentPage] = (0, import_react6.useState)(1);
  const PageSize = 10;
  const currentTableData = (0, import_react6.useMemo)(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData]);
  const handleDeleteDialog = (id, username) => () => {
    selectedUser.current = {
      id,
      username
    };
    onOpen();
  };
  const handleEdit = (id) => () => {
    app.navigate(pathParamsToUrl(typeSettings.editButtonNavigateTo, {
      id
    }));
  };
  const handleDeletion = async () => {
    if (selectedUser.current != null) {
      const {
        id,
        username
      } = selectedUser.current;
      selectedUser.current = null;
      const result = await typeSettings.api.delete(id, {
        username
      }, app);
      const finalResult = await promiseBasedToast({
        toast,
        result,
        messages: {
          success: {
            title: "Usuario eliminado"
          },
          error: {
            title: "Error al eliminar usuario"
          },
          loading: {
            title: "Eliminando usuario"
          }
        }
      }).then(() => {
        stateData.splice(stateData.findIndex((object) => {
          return object.id === id;
        }), 1);
        handleSearchInputChange();
      }).catch((e) => {
      });
      onClose();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DeleteDialog, { isOpen, onClose, handleDeletion, message: {
      title: "Eliminar usuario",
      body: "\xBFEst\xE1 seguro que desea eliminar este usuario? Esta acci\xF3n no se puede deshacer."
    } }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommonCard, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { sx: {
        pb: 4
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SearchField, { handleSearchInputChange }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Table, { variant: "grayOverCard", size: "md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Thead, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tr, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Th, { sx: {
          p: {
            base: 2,
            md: 4
          }
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Grid, { templateColumns: {
          base: "3fr 1fr 2fr",
          md: "3fr 3fr 1fr 2fr"
        }, gap: {
          base: 2,
          md: 4
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, { children: "Nombre completo" }, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 142,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, { sx: {
            display: {
              base: "none",
              md: "block"
            }
          }, children: "Nombre de usuario" }, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 143,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, { textAlign: "center", children: "Estado" }, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 151,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, {}, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 152,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
          lineNumber: 135,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tbody, { children: currentTableData.length > 0 && currentTableData.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tr, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Td, { sx: {
          p: {
            base: 2,
            md: 4
          }
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Grid, { templateColumns: {
          base: "3fr 1fr 2fr",
          md: "3fr 3fr 1fr 2fr"
        }, gap: {
          base: 2,
          md: 4
        }, alignItems: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextWordBreak, { breakType: "normal", children: user.screen_name }, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 173,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 172,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, { sx: {
            display: {
              base: "none",
              md: "block"
            }
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextWordBreak, { breakType: "normal", children: user.username }, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 183,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 177,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, { textAlign: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { as: user.habilitado_en_dxt && user.usuario_tango_existe && user.habilitado_en_tango === true ? import_AccountCheckIcon.default : import_AccountCancelIcon.default, boxSize: 6, color: resolveUserStatusColor(user) }, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 188,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 187,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HStack, { justifyContent: "center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconButton, { "aria-label": "Eliminar", size: "sm", colorScheme: "red", onClick: handleDeleteDialog(user.id, user.username), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { as: import_TrashIcon.default, boxSize: 4 }, void 0, false, {
              fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
              lineNumber: 193,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
              lineNumber: 192,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(IconButton, { "aria-label": "Editar", size: "sm", colorScheme: "blue", onClick: handleEdit(user.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Icon, { as: import_PencilIcon.default, boxSize: 4 }, void 0, false, {
              fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
              lineNumber: 196,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
              lineNumber: 195,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 191,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
            lineNumber: 190,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
          lineNumber: 165,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
          lineNumber: 159,
          columnNumber: 21
        }, this) }, `row_${user.id}`, false, {
          fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
          lineNumber: 158,
          columnNumber: 76
        }, this)) }, void 0, false, {
          fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
        lineNumber: 126,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { sx: {
        pt: 4,
        justifyContent: "center"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Pagination, { currentPage, totalCount: filteredData.length, pageSize: PageSize, onPageChange: (page) => setCurrentPage(page) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
        lineNumber: 210,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
        lineNumber: 206,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_admin.settings.users.$type._index/components/success.tsx",
    lineNumber: 114,
    columnNumber: 10
  }, this);
};
_s3(Success, "x2KDix+jeNfAY7go/aWLK5FumaM=", false, function() {
  return [useAppResources, useDisclosure, useToast, useSearchField];
});
_c4 = Success;
var _c4;
$RefreshReg$(_c4, "Success");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.users.$type._index/components/index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.users.$type._index/components/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.$type._index/components/index.tsx"
  );
  import.meta.hot.lastModified = "1711474084155.0771";
}
var ListsUsers = (props) => {
  const {
    typeSettings
  } = props;
  const {
    state,
    retry
  } = typeSettings.api.getAll();
  return state.map({
    loading: (_) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Loading, {}, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/index.tsx",
      lineNumber: 34,
      columnNumber: 19
    }, this),
    error: ({
      error
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ApiErrors, { error, retry, cancelAndNavigateTo: URL_SETTINGS_PATH }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/index.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this),
    success: (state2) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Success, { stateData: state2.data, retry, typeSettings }, void 0, false, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/components/index.tsx",
      lineNumber: 38,
      columnNumber: 23
    }, this)
  });
};
_c5 = ListsUsers;
var _c5;
$RefreshReg$(_c5, "ListsUsers");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_admin.settings.users.$type._index/route.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_admin.settings.users.$type._index/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_admin.settings.users.$type._index/route.tsx"
  );
  import.meta.hot.lastModified = "1711474084155.4824";
}
function Lists() {
  _s4();
  const navigate = useNavigate();
  const {
    type
  } = useParams();
  const typeSettings = settings[type];
  if (type != null && typeSettings != null) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SettingsFormHeading, { title: typeSettings.titles.common, actionButton: {
        label: typeSettings.titles.create,
        buttonProps: {
          leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { as: import_AccountPlusIcon.default }, void 0, false, {
            fileName: "src/app/routes/_admin.settings.users.$type._index/route.tsx",
            lineNumber: 42,
            columnNumber: 21
          }, this),
          onClick: () => {
            if (typeSettings.actionButtonNavigateTo != null)
              navigate(typeSettings.actionButtonNavigateTo);
          }
        }
      } }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.$type._index/route.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ListsUsers, { typeSettings }, void 0, false, {
        fileName: "src/app/routes/_admin.settings.users.$type._index/route.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_admin.settings.users.$type._index/route.tsx",
      lineNumber: 38,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CommonErrors, { error: "Tipo de lista no v\xE1lida", buttonProps: {
    label: "Volver a Configuraci\xF3n",
    colorScheme: "green",
    onClick: () => {
      navigate(URL_SETTINGS_PATH);
    }
  } }, void 0, false, {
    fileName: "src/app/routes/_admin.settings.users.$type._index/route.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s4(Lists, "tf5w/uSNWXjxl+d/PNRyRmNfUR4=", false, function() {
  return [useNavigate, useParams];
});
_c6 = Lists;
var _c6;
$RefreshReg$(_c6, "Lists");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Lists as default
};
//# sourceMappingURL=/build/routes/_admin.settings.users.$type._index-YW7WBIXG.js.map
