import {
  Card,
  CardBody,
  useColorModeValue
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

// src/app/components/CommonCard.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/CommonCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/CommonCard.tsx"
  );
  import.meta.hot.lastModified = "1711474084150.9744";
}
var CommonCard = (props) => {
  _s();
  const {
    children,
    cardProps,
    cardBodyProps
  } = props;
  const borderColor = useColorModeValue("gray.200", "white.200");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { boxShadow: "lg", sx: {
    mb: 4
  }, borderColor, ...cardProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, { ...cardBodyProps, children }, void 0, false, {
    fileName: "src/app/components/CommonCard.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/components/CommonCard.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(CommonCard, "ejAb6DCgJK6XIN3vzvNZeq/5PSk=", false, function() {
  return [useColorModeValue];
});
_c = CommonCard;
var _c;
$RefreshReg$(_c, "CommonCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CommonCard
};
//# sourceMappingURL=/build/_shared/chunk-5N5J5Z6Z.js.map
