import {
  ResponsiveIconButton,
  TextPrice,
  TextPriceNative,
  require_PlusIcon
} from "/build/_shared/chunk-LZHR6XN2.js";
import {
  FixedSizeList
} from "/build/_shared/chunk-GMH2WCGQ.js";
import "/build/_shared/chunk-X2BW3OCG.js";
import {
  TextWordBreak,
  require_AccountCheckIcon,
  require_TrashIcon
} from "/build/_shared/chunk-6PIMX75I.js";
import {
  SearchField,
  require_MagnifyIcon,
  useSearchField
} from "/build/_shared/chunk-55WOQGXG.js";
import {
  FormInputSkeleton,
  FormTextareaSkeleton
} from "/build/_shared/chunk-SS7UHKN2.js";
import {
  ApiErrors
} from "/build/_shared/chunk-CI32EJ2Q.js";
import {
  API_DXT_VENDOR_CUSTOMERS,
  require_AccountCancelIcon
} from "/build/_shared/chunk-FO6D3CQX.js";
import {
  useDXTApiFetch
} from "/build/_shared/chunk-MQDBQWEI.js";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Badge,
  Box,
  Checkbox,
  Collapse,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  NONE_M,
  Skeleton,
  Table,
  TableContainer,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  URL_PEDIDOS_ADD_PATH,
  URL_PEDIDOS_PATH,
  URL_SETTINGS_PATH,
  VStack,
  apiPath,
  dateToLocale,
  pathParamsToUrl,
  useColorModeValue,
  useDisclosure
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
  __commonJS,
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/PrinterIcon.js
var require_PrinterIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/PrinterIcon.js"(exports, module) {
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
    var PrinterIcon2 = function PrinterIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React.createElement("path", { d: "M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" })
      );
    };
    var PrinterIcon$1 = React.memo ? React.memo(PrinterIcon2) : PrinterIcon2;
    module.exports = PrinterIcon$1;
  }
});

// browser-route-module:routes/_authorized.orders._index/route.tsx?browser
init_Buffer();

// src/app/routes/_authorized.orders._index/route.tsx
init_Buffer();

// src/api-client/pedido/paths.ts
init_Buffer();
var API_PEDIDO_GET_ALL = apiPath("/pedido");
var API_PEDIDO_GET_ONE = apiPath("/pedido/:id");
var API_PEDIDO_GET_ALL_ROWS = apiPath("/pedido/renglones");

// src/app/routes/_authorized.orders._index/components/loading.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders._index/components/loading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders._index/components/loading.tsx"
  );
  import.meta.hot.lastModified = "1711990455688.5732";
}
var Loading = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { width: "full", sx: {
  mt: 8,
  mb: 4
}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { templateColumns: "1fr", alignItems: "center", gap: 4, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormInputSkeleton, {}, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormTextareaSkeleton, { height: "120px" }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormTextareaSkeleton, { height: "120px" }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormTextareaSkeleton, { height: "120px" }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormTextareaSkeleton, { height: "120px" }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormTextareaSkeleton, { height: "120px" }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 44,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormTextareaSkeleton, { height: "120px" }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
  lineNumber: 27,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "src/app/routes/_authorized.orders._index/components/loading.tsx",
  lineNumber: 23,
  columnNumber: 30
}, this);
_c = Loading;
var _c;
$RefreshReg$(_c, "Loading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders._index/components/success.tsx
init_Buffer();
var import_react15 = __toESM(require_react(), 1);

// src/app/components/orders/OrdersNav.tsx
init_Buffer();
var import_react5 = __toESM(require_react(), 1);
var import_MagnifyIcon = __toESM(require_MagnifyIcon(), 1);
var import_PlusIcon = __toESM(require_PlusIcon(), 1);
var import_PrinterIcon = __toESM(require_PrinterIcon(), 1);
var import_TrashIcon = __toESM(require_TrashIcon(), 1);

// src/app/components/orders/ClientsListModal.tsx
init_Buffer();
var import_react3 = __toESM(require_react(), 1);
var import_AccountCancelIcon = __toESM(require_AccountCancelIcon(), 1);
var import_AccountCheckIcon = __toESM(require_AccountCheckIcon(), 1);

// node_modules/.pnpm/react-virtualized-auto-sizer@1.0.24_react-dom@18.2.0_react@18.2.0/node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js
init_Buffer();
var import_react2 = __toESM(require_react());
var windowObject;
if (typeof window !== "undefined") {
  windowObject = window;
} else if (typeof self !== "undefined") {
  windowObject = self;
} else {
  windowObject = globalThis;
}
var cancelFrame = null;
var requestFrame = null;
var TIMEOUT_DURATION = 20;
var clearTimeoutFn = windowObject.clearTimeout;
var setTimeoutFn = windowObject.setTimeout;
var cancelAnimationFrameFn = windowObject.cancelAnimationFrame || windowObject.mozCancelAnimationFrame || windowObject.webkitCancelAnimationFrame;
var requestAnimationFrameFn = windowObject.requestAnimationFrame || windowObject.mozRequestAnimationFrame || windowObject.webkitRequestAnimationFrame;
if (cancelAnimationFrameFn == null || requestAnimationFrameFn == null) {
  cancelFrame = clearTimeoutFn;
  requestFrame = function requestAnimationFrameViaSetTimeout(callback) {
    return setTimeoutFn(callback, TIMEOUT_DURATION);
  };
} else {
  cancelFrame = function cancelFrame2([animationFrameID, timeoutID]) {
    cancelAnimationFrameFn(animationFrameID);
    clearTimeoutFn(timeoutID);
  };
  requestFrame = function requestAnimationFrameWithSetTimeoutFallback(callback) {
    const animationFrameID = requestAnimationFrameFn(function animationFrameCallback() {
      clearTimeoutFn(timeoutID);
      callback();
    });
    const timeoutID = setTimeoutFn(function timeoutCallback() {
      cancelAnimationFrameFn(animationFrameID);
      callback();
    }, TIMEOUT_DURATION);
    return [animationFrameID, timeoutID];
  };
}
function createDetectElementResize(nonce) {
  let animationKeyframes;
  let animationName;
  let animationStartEvent;
  let animationStyle;
  let checkTriggers;
  let resetTriggers;
  let scrollListener;
  const attachEvent = typeof document !== "undefined" && document.attachEvent;
  if (!attachEvent) {
    resetTriggers = function(element) {
      const triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + "px";
      expandChild.style.height = expand.offsetHeight + 1 + "px";
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };
    checkTriggers = function(element) {
      return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
    };
    scrollListener = function(e) {
      if (e.target.className && typeof e.target.className.indexOf === "function" && e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0) {
        return;
      }
      const element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function animationFrame() {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function forEachResizeListener(fn) {
            fn.call(element, e);
          });
        }
      });
    };
    let animation = false;
    let keyframeprefix = "";
    animationStartEvent = "animationstart";
    const domPrefixes = "Webkit Moz O ms".split(" ");
    let startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");
    let pfx = "";
    {
      const elm = document.createElement("fakeelement");
      if (elm.style.animationName !== void 0) {
        animation = true;
      }
      if (animation === false) {
        for (let i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + "AnimationName"] !== void 0) {
            pfx = domPrefixes[i];
            keyframeprefix = "-" + pfx.toLowerCase() + "-";
            animationStartEvent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    animationName = "resizeanim";
    animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ";
    animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; ";
  }
  const createStyles = function(doc) {
    if (!doc.getElementById("detectElementResize")) {
      const css = (animationKeyframes ? animationKeyframes : "") + ".resize-triggers { " + (animationStyle ? animationStyle : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = doc.head || doc.getElementsByTagName("head")[0], style = doc.createElement("style");
      style.id = "detectElementResize";
      style.type = "text/css";
      if (nonce != null) {
        style.setAttribute("nonce", nonce);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }
      head.appendChild(style);
    }
  };
  const addResizeListener = function(element, fn) {
    if (attachEvent) {
      element.attachEvent("onresize", fn);
    } else {
      if (!element.__resizeTriggers__) {
        const doc = element.ownerDocument;
        const elementStyle = windowObject.getComputedStyle(element);
        if (elementStyle && elementStyle.position === "static") {
          element.style.position = "relative";
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement("div")).className = "resize-triggers";
        const expandTrigger = doc.createElement("div");
        expandTrigger.className = "expand-trigger";
        expandTrigger.appendChild(doc.createElement("div"));
        const contractTrigger = doc.createElement("div");
        contractTrigger.className = "contract-trigger";
        element.__resizeTriggers__.appendChild(expandTrigger);
        element.__resizeTriggers__.appendChild(contractTrigger);
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener("scroll", scrollListener, true);
        if (animationStartEvent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName === animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };
  const removeResizeListener = function(element, fn) {
    if (attachEvent) {
      element.detachEvent("onresize", fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener("scroll", scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
        }
      }
    }
  };
  return {
    addResizeListener,
    removeResizeListener
  };
}
var AutoSizer = class extends import_react2.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      height: this.props.defaultHeight || 0,
      scaledHeight: this.props.defaultHeight || 0,
      scaledWidth: this.props.defaultWidth || 0,
      width: this.props.defaultWidth || 0
    };
    this._autoSizer = null;
    this._detectElementResize = null;
    this._parentNode = null;
    this._resizeObserver = null;
    this._timeoutId = null;
    this._onResize = () => {
      this._timeoutId = null;
      const {
        disableHeight,
        disableWidth,
        onResize
      } = this.props;
      if (this._parentNode) {
        const style = window.getComputedStyle(this._parentNode) || {};
        const paddingLeft = parseFloat(style.paddingLeft || "0");
        const paddingRight = parseFloat(style.paddingRight || "0");
        const paddingTop = parseFloat(style.paddingTop || "0");
        const paddingBottom = parseFloat(style.paddingBottom || "0");
        const rect = this._parentNode.getBoundingClientRect();
        const scaledHeight = rect.height - paddingTop - paddingBottom;
        const scaledWidth = rect.width - paddingLeft - paddingRight;
        const height = this._parentNode.offsetHeight - paddingTop - paddingBottom;
        const width = this._parentNode.offsetWidth - paddingLeft - paddingRight;
        if (!disableHeight && (this.state.height !== height || this.state.scaledHeight !== scaledHeight) || !disableWidth && (this.state.width !== width || this.state.scaledWidth !== scaledWidth)) {
          this.setState({
            height,
            width,
            scaledHeight,
            scaledWidth
          });
          if (typeof onResize === "function") {
            onResize({
              height,
              scaledHeight,
              scaledWidth,
              width
            });
          }
        }
      }
    };
    this._setRef = (autoSizer) => {
      this._autoSizer = autoSizer;
    };
  }
  componentDidMount() {
    const {
      nonce
    } = this.props;
    const parentNode = this._autoSizer ? this._autoSizer.parentNode : null;
    if (parentNode != null && parentNode.ownerDocument && parentNode.ownerDocument.defaultView && parentNode instanceof parentNode.ownerDocument.defaultView.HTMLElement) {
      this._parentNode = parentNode;
      const ResizeObserverInstance = parentNode.ownerDocument.defaultView.ResizeObserver;
      if (ResizeObserverInstance != null) {
        this._resizeObserver = new ResizeObserverInstance(() => {
          this._timeoutId = setTimeout(this._onResize, 0);
        });
        this._resizeObserver.observe(parentNode);
      } else {
        this._detectElementResize = createDetectElementResize(nonce);
        this._detectElementResize.addResizeListener(parentNode, this._onResize);
      }
      this._onResize();
    }
  }
  componentWillUnmount() {
    if (this._parentNode) {
      if (this._detectElementResize) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
      if (this._timeoutId !== null) {
        clearTimeout(this._timeoutId);
      }
      if (this._resizeObserver) {
        this._resizeObserver.disconnect();
      }
    }
  }
  render() {
    const {
      children,
      defaultHeight,
      defaultWidth,
      disableHeight = false,
      disableWidth = false,
      doNotBailOutOnEmptyChildren = false,
      nonce,
      onResize,
      style = {},
      tagName = "div",
      ...rest
    } = this.props;
    const {
      height,
      scaledHeight,
      scaledWidth,
      width
    } = this.state;
    const outerStyle = {
      overflow: "visible"
    };
    const childParams = {};
    let bailoutOnChildren = false;
    if (!disableHeight) {
      if (height === 0) {
        bailoutOnChildren = true;
      }
      outerStyle.height = 0;
      childParams.height = height;
      childParams.scaledHeight = scaledHeight;
    }
    if (!disableWidth) {
      if (width === 0) {
        bailoutOnChildren = true;
      }
      outerStyle.width = 0;
      childParams.width = width;
      childParams.scaledWidth = scaledWidth;
    }
    if (doNotBailOutOnEmptyChildren) {
      bailoutOnChildren = false;
    }
    return (0, import_react2.createElement)(tagName, {
      ref: this._setRef,
      style: {
        ...outerStyle,
        ...style
      },
      ...rest
    }, !bailoutOnChildren && children(childParams));
  }
};

// src/app/components/orders/ClientsListModal.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/orders/ClientsListModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/orders/ClientsListModal.tsx"
  );
  import.meta.hot.lastModified = "1711990455712.8994";
}
var ClientsListModal = (props) => {
  _s2();
  var _s5 = $RefreshSig$();
  const {
    isOpen,
    onClose
  } = props;
  const stateData = (0, import_react3.useRef)();
  const {
    state,
    retry
  } = useDXTApiFetch({
    url: API_DXT_VENDOR_CUSTOMERS,
    silent: true
  });
  const SearchableList = () => {
    _s5();
    const {
      filteredData,
      handleSearchInputChange
    } = useSearchField(stateData.current ?? [], ["screen_name"]);
    const itemHeight = 30;
    const Row = ({
      style,
      index,
      data
    }) => {
      const client = data?.[index];
      return client != null ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ListItem, { style, children: client.habilitado ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { href: pathParamsToUrl(URL_PEDIDOS_ADD_PATH, {
        client: client.id
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ListIcon, { as: import_AccountCheckIcon.default, color: "green.400" }, void 0, false, {
          fileName: "src/app/components/orders/ClientsListModal.tsx",
          lineNumber: 71,
          columnNumber: 19
        }, this),
        client.screen_name
      ] }, void 0, true, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 67,
        columnNumber: 34
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { color: "gray.400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ListIcon, { as: import_AccountCancelIcon.default, color: "red.400" }, void 0, false, {
          fileName: "src/app/components/orders/ClientsListModal.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this),
        client.screen_name
      ] }, void 0, true, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 74,
        columnNumber: 25
      }, this) }, client.id, false, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 65,
        columnNumber: 31
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, {}, void 0, false, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this);
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { sx: {
        pb: 4
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchField, { handleSearchInputChange }, void 0, false, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AutoSizer, { children: ({
        height,
        width
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FixedSizeList, { height: height - 60, itemCount: filteredData.length ?? 0, itemSize: itemHeight, innerElementType: List, width, itemData: filteredData, children: Row }, void 0, false, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 91,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/orders/ClientsListModal.tsx",
      lineNumber: 81,
      columnNumber: 12
    }, this);
  };
  _s5(SearchableList, "Tzx3XdK8GaJdLfsfbxlG6gbgkPI=", false, function() {
    return [useSearchField];
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal, { isCentered: true, isOpen, onClose, scrollBehavior: "inside", size: {
    base: "full",
    sm: "md",
    md: "lg"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalOverlay, {}, void 0, false, {
      fileName: "src/app/components/orders/ClientsListModal.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalContent, { sx: {
      maxHeight: "auto"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalHeader, { children: "Seleccione el cliente" }, void 0, false, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalCloseButton, {}, void 0, false, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalBody, { minHeight: {
        base: "auto",
        sm: "420px !important"
      }, children: state.map({
        loading: (_) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(VStack, { spacing: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Skeleton, { width: "full", height: "36px", borderRadius: "md" }, void 0, false, {
            fileName: "src/app/components/orders/ClientsListModal.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Skeleton, { width: "full", height: "250px", borderRadius: "md" }, void 0, false, {
            fileName: "src/app/components/orders/ClientsListModal.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/components/orders/ClientsListModal.tsx",
          lineNumber: 116,
          columnNumber: 25
        }, this),
        error: ({
          error
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ApiErrors, { error, retry, cancelAndNavigateTo: URL_SETTINGS_PATH }, void 0, false, {
          fileName: "src/app/components/orders/ClientsListModal.tsx",
          lineNumber: 122,
          columnNumber: 17
        }, this),
        success: (state2) => {
          stateData.current = state2.data;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchableList, {}, void 0, false, {
            fileName: "src/app/components/orders/ClientsListModal.tsx",
            lineNumber: 125,
            columnNumber: 20
          }, this);
        }
      }) }, void 0, false, {
        fileName: "src/app/components/orders/ClientsListModal.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/orders/ClientsListModal.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/orders/ClientsListModal.tsx",
    lineNumber: 100,
    columnNumber: 10
  }, this);
};
_s2(ClientsListModal, "NxwroARA6V7w5zy+kyZMcMbCijs=", false, function() {
  return [useDXTApiFetch];
});
_c2 = ClientsListModal;
var _c2;
$RefreshReg$(_c2, "ClientsListModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/components/orders/OrdersNav.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/orders/OrdersNav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/orders/OrdersNav.tsx"
  );
  import.meta.hot.lastModified = "1711990455686.2402";
}
var OrdersNav = ({
  selected
}) => {
  _s();
  const navigate = useNavigate();
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [create, setCreate] = (0, import_react5.useState)(false);
  const handleCreate = () => {
    setCreate(true);
    onOpen();
  };
  const handleOnClose = () => {
    onClose();
    setCreate(false);
  };
  const selectedInfo = selected == null || selected <= 0 ? void 0 : selected == 1 ? "1 seleccionado" : `${selected} seleccionados`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { bg: useColorModeValue("white", "blue.900"), sx: {
      px: 4,
      position: "sticky",
      zIndex: 1e3,
      top: 0
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HStack, { spacing: {
        base: 2,
        sm: 3
      }, alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ResponsiveIconButton, { icon: import_TrashIcon.default, text: "Eliminar", sharedProps: {
          size: "sm",
          fontWeight: "400",
          colorScheme: "red"
        }, iconProps: {
          boxSize: {
            base: 5,
            md: 4
          }
        } }, void 0, false, {
          fileName: "src/app/components/orders/OrdersNav.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ResponsiveIconButton, { icon: import_PrinterIcon.default, text: "Imprimir", sharedProps: {
          size: "sm",
          fontWeight: "400",
          colorScheme: "blue"
        }, iconProps: {
          boxSize: {
            base: 5,
            md: 4
          }
        } }, void 0, false, {
          fileName: "src/app/components/orders/OrdersNav.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ResponsiveIconButton, { icon: import_PlusIcon.default, text: "Crear", sharedProps: {
          size: "sm",
          fontWeight: "400",
          colorScheme: "green",
          onClick: () => {
            handleCreate();
          }
        }, iconProps: {
          boxSize: {
            base: 5,
            md: 4
          }
        } }, void 0, false, {
          fileName: "src/app/components/orders/OrdersNav.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        selectedInfo != null && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tag, { display: {
            base: "none",
            sm: "inherited"
          }, height: 8, borderRadius: 40, size: "md", variant: "solid", colorScheme: "blue", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TagLabel, { marginX: 1, children: selectedInfo }, void 0, false, {
            fileName: "src/app/components/orders/OrdersNav.tsx",
            lineNumber: 102,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "src/app/components/orders/OrdersNav.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tag, { display: {
            base: "inherited",
            sm: "none"
          }, height: 8, borderRadius: 40, size: "md", variant: "solid", colorScheme: "blue", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TagLabel, { marginX: 1, children: selected }, void 0, false, {
            fileName: "src/app/components/orders/OrdersNav.tsx",
            lineNumber: 108,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "src/app/components/orders/OrdersNav.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/components/orders/OrdersNav.tsx",
          lineNumber: 97,
          columnNumber: 38
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/components/orders/OrdersNav.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { alignItems: "center", marginLeft: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HStack, { spacing: {
        base: 2,
        md: 4
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InputGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Icon, { as: import_MagnifyIcon.default }, void 0, false, {
          fileName: "src/app/components/orders/OrdersNav.tsx",
          lineNumber: 120,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "src/app/components/orders/OrdersNav.tsx",
          lineNumber: 119,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Input, { type: "text", placeholder: "Filtrar..." }, void 0, false, {
          fileName: "src/app/components/orders/OrdersNav.tsx",
          lineNumber: 122,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/components/orders/OrdersNav.tsx",
        lineNumber: 118,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/components/orders/OrdersNav.tsx",
        lineNumber: 117,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "src/app/components/orders/OrdersNav.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "src/app/components/orders/OrdersNav.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/orders/OrdersNav.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/components/orders/OrdersNav.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    create && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ClientsListModal, { isOpen, onClose: handleOnClose }, void 0, false, {
      fileName: "src/app/components/orders/OrdersNav.tsx",
      lineNumber: 129,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/orders/OrdersNav.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_s(OrdersNav, "LcwubIC81FyR/36R0eN2KL/FEDY=", false, function() {
  return [useNavigate, useDisclosure, useColorModeValue];
});
_c3 = OrdersNav;
var _c3;
$RefreshReg$(_c3, "OrdersNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx
init_Buffer();
var import_react13 = __toESM(require_react(), 1);

// src/app/components/BadgePedidosEstado.tsx
init_Buffer();

// src/domain/pedido/utils/index.ts
init_Buffer();

// src/texts/pedidos.ts
init_Buffer();
var PEDIDO_INVALIDO = "Inv\xE1lido";
var PEDIDO_INGRESADO = "Ingresado";
var PEDIDO_APROBADO = "Visto";
var PEDIDO_CUMPLIDO = "Cumplido";
var PEDIDO_CERRADO = "Cerrado";
var PEDIDO_ANULADO = "Anulado";

// src/domain/pedido/utils/index.ts
function getEstadoPedidoText(estado) {
  switch (estado) {
    case 1 /* INGRESADO */:
      return PEDIDO_INGRESADO;
    case 2 /* APROBADO */:
      return PEDIDO_APROBADO;
    case 3 /* CUMPLIDO */:
      return PEDIDO_CUMPLIDO;
    case 4 /* CERRADO */:
      return PEDIDO_CERRADO;
    case 5 /* ANULADO */:
      return PEDIDO_ANULADO;
    default:
      return PEDIDO_INVALIDO;
  }
}

// src/app/theme/pedidos/utils.ts
init_Buffer();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/theme/pedidos/utils.ts"
  );
  import.meta.hot.lastModified = "1711943577973.1094";
}
function getEstadoPedidoColor(estado, suffix) {
  let color;
  switch (estado) {
    case 1 /* INGRESADO */:
      color = "blue";
      break;
    case 2 /* APROBADO */:
      color = "purple";
      break;
    case 3 /* CUMPLIDO */:
      color = "green";
      break;
    case 4 /* CERRADO */:
      color = "black";
      break;
    case 5 /* ANULADO */:
      color = "red";
      break;
    default:
      color = "gray";
  }
  if (suffix == null)
    return color;
  return `${color}${suffix}`;
}

// src/app/components/BadgePedidosEstado.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/BadgePedidosEstado.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/BadgePedidosEstado.tsx"
  );
  import.meta.hot.lastModified = "1711943140569.1145";
}
var BadgePedidosEstado = ({
  estado
}) => {
  const name = getEstadoPedidoText(estado);
  const colorScheme = getEstadoPedidoColor(estado);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { fontSize: "1em", variant: "solid", colorScheme, lineHeight: "1.5em", children: name }, void 0, false, {
    fileName: "src/app/components/BadgePedidosEstado.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c4 = BadgePedidosEstado;
var _c4;
$RefreshReg$(_c4, "BadgePedidosEstado");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesEmpty.tsx
init_Buffer();
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesEmpty.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesEmpty.tsx"
  );
  import.meta.hot.lastModified = "1712028233652.3655";
}
var RenglonesEmpty = () => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Alert, { status: "warning", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AlertIcon, {}, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesEmpty.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AlertDescription, { children: "El pedido no cuenta con productos." }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesEmpty.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesEmpty.tsx",
  lineNumber: 22,
  columnNumber: 37
}, this);
_c5 = RenglonesEmpty;
var _c5;
$RefreshReg$(_c5, "RenglonesEmpty");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesError.tsx
init_Buffer();
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesError.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesError.tsx"
  );
  import.meta.hot.lastModified = "1711990455687.8481";
}
var RenglonesError = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Alert, { status: "error", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertIcon, {}, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesError.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AlertDescription, { children: "Ocurri\xF3 un error al cargar los detalles del pedido." }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesError.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesError.tsx",
  lineNumber: 22,
  columnNumber: 37
}, this);
_c6 = RenglonesError;
var _c6;
$RefreshReg$(_c6, "RenglonesError");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx
init_Buffer();
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx"
  );
  import.meta.hot.lastModified = "1711990455687.9849";
}
var RenglonesLoading = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Box, { width: "full", sx: {
  mt: 8,
  mb: 4
}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Grid, { templateColumns: "1fr", alignItems: "center", gap: 2, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FormInputSkeleton, { height: "20px" }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FormInputSkeleton, { height: "20px" }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FormInputSkeleton, { height: "20px" }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FormInputSkeleton, { height: "20px" }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this)
] }, void 0, true, {
  fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx",
  lineNumber: 27,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx",
  lineNumber: 23,
  columnNumber: 39
}, this);
_c7 = RenglonesLoading;
var _c7;
$RefreshReg$(_c7, "RenglonesLoading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx
init_Buffer();

// src/domain/articulo/utils/index.ts
init_Buffer();
function formatNombreArticulo(nombre, descriptionAdicional) {
  const adicional = (descriptionAdicional ?? "").trim();
  let result = nombre.trim();
  if (adicional.length > 0)
    result = `${result} (${adicional})`.trim();
  return result;
}

// src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx"
  );
  import.meta.hot.lastModified = "1712093076788.4905";
}
var RenglonesPedido = ({
  nro_pedido,
  renglones
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TableContainer, { sx: {
    p: 0,
    m: 0
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Table, { variant: "stripedHoverOverCard", colorScheme: "gray", size: "sm", borderWidth: "1px", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Thead, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Tr, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Th, { sx: {
      py: 2
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Grid, { templateColumns: {
      base: "1fr 1fr 1fr",
      md: "4fr 1fr 1fr 1fr"
    }, gap: 6, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Heading, { fontSize: {
        base: "xs",
        md: "sm"
      }, children: "Art\xEDculo" }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 44,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(GridItem, { sx: {
        display: {
          base: "none",
          md: "block"
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Heading, { fontSize: {
        base: "xs",
        md: "sm"
      }, textAlign: "center", children: "Precio" }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 57,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Heading, { fontSize: {
        base: "xs",
        md: "sm"
      }, textAlign: "center", children: "Cantidad" }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 65,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Heading, { fontSize: {
        base: "xs",
        md: "sm"
      }, textAlign: "center", children: "Subtotal" }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 73,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 72,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
      lineNumber: 39,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Tbody, { children: renglones.map(({
      id_articulo,
      nombre_articulo,
      descripcion_adicional,
      precio,
      cantidad,
      subtotal
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Tr, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Td, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Grid, { templateColumns: {
      base: "1fr 1fr 1fr",
      md: "4fr 1fr 1fr 1fr"
    }, gap: 6, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TextWordBreak, { children: formatNombreArticulo(nombre_articulo, descripcion_adicional) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 99,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 98,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(GridItem, { sx: {
        display: {
          base: "none",
          md: "block"
        }
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TextPrice, { precio }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 107,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 101,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Text, { textAlign: "center", children: cantidad }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 110,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 109,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TextPrice, { precio: subtotal, moneda: "$" }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 113,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
        lineNumber: 112,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
      lineNumber: 94,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
      lineNumber: 93,
      columnNumber: 17
    }, this) }, `details-${nro_pedido}-${id_articulo}`, false, {
      fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
      lineNumber: 92,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c8 = RenglonesPedido;
var _c8;
$RefreshReg$(_c8, "RenglonesPedido");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx"
  );
  import.meta.hot.lastModified = "1712095806070.8564";
}
function PedidoList({
  pedidos,
  handleSelect
}) {
  _s22();
  var _s5 = $RefreshSig$();
  const {
    state: stateRenglones
  } = useDXTApiFetch({
    url: API_PEDIDO_GET_ALL_ROWS,
    silent: true,
    transformResponse: (data) => {
      Object.values(data).forEach((rows) => {
        if (!Array.isArray(rows))
          return;
        rows.sort((a, b) => a.renglon - b.renglon);
      });
      return data;
    }
  });
  const [isOpen, setIsOpen] = (0, import_react13.useState)({});
  const handleToggleDetails = (0, import_react13.useCallback)((id) => {
    setIsOpen((prev_state) => ({
      [id]: !prev_state[id]
    }));
  }, [isOpen]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TableContainer, { sx: {
    p: 0,
    m: 0
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Table, { variant: "stripedOverCard", colorScheme: "gray", size: "md", sx: {
    borderCollapse: "separate",
    borderSpacing: "0 1rem"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Tbody, { children: _s5(pedidos.map(_s5(({
    id,
    numero_pedido,
    estado,
    fecha_emision,
    fecha_entrega,
    codigo_cliente,
    codigo_vendedor,
    codigo_transporte,
    nombre_cliente,
    nombre_vendedor,
    nombre_transporte,
    total,
    descuento,
    comentarios
  }) => {
    _s5();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Tr, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Td, { sx: {
      py: 6,
      position: "relative",
      borderTopWidth: {
        base: "3px",
        md: "8px"
      },
      borderTopStyle: "solid",
      borderTopColor: `${getEstadoPedidoColor(estado, ".500 !important")}`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { sx: {
        position: "absolute",
        right: 5,
        top: 5
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Checkbox, { size: "lg", colorScheme: "green", sx: {
        borderColor: useColorModeValue("gray.800", "white")
      }, onChange: (e) => {
        handleSelect(e.target.checked ? 1 : -1);
      } }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
        lineNumber: 105,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
        lineNumber: 100,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Grid, { templateColumns: {
        base: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)"
      }, gap: 6, sx: {
        cursor: "pointer"
      }, onClick: () => {
        handleToggleDetails(id);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(GridItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Heading, { size: "sm", children: "Pedido" }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 120,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Text, { children: numero_pedido }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 121,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 119,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(GridItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Heading, { size: "sm", children: "Estado" }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 124,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BadgePedidosEstado, { estado }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 125,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 123,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(GridItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Heading, { size: "sm", children: "Emisi\xF3n" }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 128,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Text, { children: dateToLocale(fecha_emision) }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 129,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 127,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(GridItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Heading, { size: "sm", children: "Entrega" }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 132,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Text, { children: dateToLocale(fecha_entrega) }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 133,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 131,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(GridItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Heading, { size: "sm", children: "Cliente" }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 136,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TextWordBreak, { children: `${codigo_cliente} - ${nombre_cliente}` }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 137,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 135,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(GridItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Heading, { size: "sm", children: "Vendedor" }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 140,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TextWordBreak, { children: codigo_vendedor != null && nombre_vendedor != null ? `${codigo_vendedor} - ${nombre_vendedor}` : NONE_M }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 141,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 139,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(GridItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Heading, { size: "sm", children: "Transporte" }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 146,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TextWordBreak, { children: codigo_transporte != null && nombre_transporte != null ? `${codigo_transporte} - ${nombre_transporte}` : NONE_M }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 147,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 145,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(GridItem, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Heading, { size: "md", sx: {
            textTransform: "uppercase",
            color: estado === 2 /* APROBADO */ && "green.400"
          }, children: [
            "Total",
            descuento != null && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
              " ",
              `-${descuento}%`
            ] }, void 0, true, {
              fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
              lineNumber: 157,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 152,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Heading, { size: "md", sx: {
            fontWeight: "bolder",
            color: estado === 2 /* APROBADO */ && "green.400"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TextPriceNative, { precio: total, moneda: "$" }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 163,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 159,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 151,
          columnNumber: 23
        }, this),
        comentarios != null && comentarios.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(GridItem, { colSpan: {
          base: 2,
          md: 4
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Alert, { status: "info", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AlertIcon, {}, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 171,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AlertDescription, { children: comentarios }, void 0, false, {
            fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
            lineNumber: 172,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 170,
          columnNumber: 27
        }, this) }, void 0, false, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 166,
          columnNumber: 73
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
        lineNumber: 111,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Collapse, { in: isOpen[id], animateOpacity: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Box, { sx: {
        mt: 6
      }, children: [
        stateRenglones.isLoading() && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(RenglonesLoading, {}, void 0, false, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 181,
          columnNumber: 58
        }, this),
        stateRenglones.isError() && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(RenglonesError, {}, void 0, false, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 182,
          columnNumber: 56
        }, this),
        stateRenglones.isSuccess() && Array.isArray(stateRenglones.data?.[id]) ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(RenglonesPedido, { nro_pedido: numero_pedido, renglones: stateRenglones.data[id] }, void 0, false, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 184,
          columnNumber: 101
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(RenglonesEmpty, {}, void 0, false, {
          fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
          lineNumber: 184,
          columnNumber: 186
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
        lineNumber: 178,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
        lineNumber: 177,
        columnNumber: 23
      }, this) }, `pedido-details-${numero_pedido}`, false, {
        fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
        lineNumber: 176,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
      lineNumber: 90,
      columnNumber: 19
    }, this) }, `pedido-${numero_pedido}`, false, {
      fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
      lineNumber: 89,
      columnNumber: 18
    }, this);
  }, "3skuTHwppfEdh6aKNlffDjyTB8U=", false, function() {
    return [useColorModeValue];
  })), "3skuTHwppfEdh6aKNlffDjyTB8U=", false, function() {
    return [useColorModeValue];
  }) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
    lineNumber: 71,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
_s22(PedidoList, "NzBkAoEcldhThR90oeAOLOGqXg0=", false, function() {
  return [useDXTApiFetch];
});
_c9 = PedidoList;
var _c9;
$RefreshReg$(_c9, "PedidoList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders._index/components/success.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders._index/components/success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders._index/components/success.tsx"
  );
  import.meta.hot.lastModified = "1712094116927.4778";
}
var Success = (props) => {
  _s3();
  const {
    pedidos
  } = props;
  const [selected, setSelected] = (0, import_react15.useState)(0);
  const handleSelect = (operation) => {
    setSelected(selected + operation);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(OrdersNav, { selected }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders._index/components/success.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(PedidoList, { pedidos, handleSelect }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders._index/components/success.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_authorized.orders._index/components/success.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s3(Success, "gGT9ux4E8pnUkSZL1bYkDrfRDO0=");
_c10 = Success;
var _c10;
$RefreshReg$(_c10, "Success");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders._index/route.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders._index/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders._index/route.tsx"
  );
  import.meta.hot.lastModified = "1712094036224.1084";
}
function OrdersList() {
  _s4();
  const {
    state,
    retry
  } = useDXTApiFetch({
    url: API_PEDIDO_GET_ALL,
    silent: true
  });
  return state.map({
    loading: (_) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Loading, {}, void 0, false, {
      fileName: "src/app/routes/_authorized.orders._index/route.tsx",
      lineNumber: 38,
      columnNumber: 19
    }, this),
    error: ({
      error
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ApiErrors, { error, retry, cancelAndNavigateTo: URL_PEDIDOS_PATH }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders._index/route.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this),
    success: (state2) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Success, { pedidos: state2.data }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders._index/route.tsx",
      lineNumber: 42,
      columnNumber: 23
    }, this)
  });
}
_s4(OrdersList, "1aHkhAFWgcwHik8/GdJ//FCIL3o=", false, function() {
  return [useDXTApiFetch];
});
_c11 = OrdersList;
var _c11;
$RefreshReg$(_c11, "OrdersList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OrdersList as default
};
//# sourceMappingURL=/build/routes/_authorized.orders._index-7ITCZVSY.js.map
