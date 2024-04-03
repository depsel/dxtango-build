import {
  ControlledTextarea
} from "/build/_shared/chunk-22PGUOAG.js";
import {
  ResponsiveIconButton,
  TextPrice,
  TextPriceNative,
  require_PlusIcon
} from "/build/_shared/chunk-LZHR6XN2.js";
import {
  ControlledSelect
} from "/build/_shared/chunk-32KCEIU6.js";
import "/build/_shared/chunk-5RUXSYXT.js";
import {
  ControlledInput
} from "/build/_shared/chunk-SGTX3IAW.js";
import {
  FormErrors
} from "/build/_shared/chunk-G3GG5NMP.js";
import {
  FormProvider,
  create$3,
  create$5,
  create$6,
  o,
  useForm,
  useFormContext,
  useWatch
} from "/build/_shared/chunk-FAFMUYJN.js";
import {
  FixedSizeList
} from "/build/_shared/chunk-GMH2WCGQ.js";
import "/build/_shared/chunk-X2BW3OCG.js";
import {
  SearchField,
  require_CloseIcon,
  useSearchField
} from "/build/_shared/chunk-55WOQGXG.js";
import {
  ApiErrors
} from "/build/_shared/chunk-CI32EJ2Q.js";
import {
  API_TANGO_AUXILIARES
} from "/build/_shared/chunk-JJ4SMVFI.js";
import {
  buildSelectOptions
} from "/build/_shared/chunk-LKDVMBGW.js";
import {
  CommonCard
} from "/build/_shared/chunk-5N5J5Z6Z.js";
import {
  useDXTApiFetch
} from "/build/_shared/chunk-MQDBQWEI.js";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Badge,
  Box,
  Collapse,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  URL_PEDIDOS_PATH,
  require_lodash,
  useBreakpointValue,
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

// node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/FormatListCheckboxIcon.js
var require_FormatListCheckboxIcon = __commonJS({
  "node_modules/.pnpm/mdi-react@9.4.0_react@18.2.0/node_modules/mdi-react/FormatListCheckboxIcon.js"(exports, module) {
    "use strict";
    init_Buffer();
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var React3 = _interopDefault(require_react());
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
    var FormatListCheckboxIcon2 = function FormatListCheckboxIcon3(_ref) {
      var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, children = _ref.children, props = objectWithoutProperties(_ref, ["color", "size", "children"]);
      var className = "mdi-icon " + (props.className || "");
      return React3.createElement(
        "svg",
        _extends({}, props, { className, width: size, height: size, fill: color, viewBox: "0 0 24 24" }),
        React3.createElement("path", { d: "M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z" })
      );
    };
    var FormatListCheckboxIcon$1 = React3.memo ? React3.memo(FormatListCheckboxIcon2) : FormatListCheckboxIcon2;
    module.exports = FormatListCheckboxIcon$1;
  }
});

// browser-route-module:routes/_authorized.orders.$client.add/route.tsx?browser
init_Buffer();

// src/app/routes/_authorized.orders.$client.add/route.tsx
init_Buffer();

// src/app/routes/_authorized.orders.$client.add/components/loading.tsx
init_Buffer();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders.$client.add/components/loading.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders.$client.add/components/loading.tsx"
  );
  import.meta.hot.lastModified = "1711495766952.2822";
}
var Loading = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: "Loading Skeletons here" }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/loading.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
};
_c = Loading;
var _c;
$RefreshReg$(_c, "Loading");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders.$client.add/components/success.tsx
init_Buffer();
var import_react9 = __toESM(require_react(), 1);
var import_lodash3 = __toESM(require_lodash(), 1);

// src/fake_data/edit_order.data.ts
init_Buffer();
var idArticulo = 1;
var fakeData = {
  cabecera: {
    id: 1,
    cliente: "Nombre de cliente",
    bonificacion: 30
  },
  auxiliares: {
    asientos: [
      { id: 1, tipo: "11", name: "Contado" },
      { id: 2, tipo: "1", name: "Cuenta Corriente" }
    ],
    // perfiles: [
    //   { id: 1, name: 'Contado' },
    //   { id: 2, name: 'Cuenta Corriente' },
    // ],
    transportes: [
      { id: 1, name: "Contado" },
      { id: 2, name: "Cuenta Corriente" }
    ],
    depositos: [
      { code: "1", name: "Contado" },
      { code: "2", name: "Cuenta Corriente" }
    ],
    condiciones: [
      { id: 1, name: "Contado" },
      { id: 2, name: "Cuenta Corriente" }
    ],
    talonarios: [
      { code: 1, name: "Contado" },
      { code: 2, name: "Cuenta Corriente" }
    ]
  },
  articulos: {
    latex: [
      { id: idArticulo++, codigo: "01 08 14", nombre: "LATEX ECON. CISNE INT. 4 L.", precio: 5414.7 },
      { id: idArticulo++, codigo: "01 08 16", nombre: "LATEX ECON. CISNE INT. 10 L.", precio: 11264.77 },
      { id: idArticulo++, codigo: "01 08 17", nombre: "LATEX ECON. CISNE INT. 20 L.", precio: 21948.73 },
      { id: idArticulo++, codigo: "01 10 14", nombre: "LATEX YAPEYU INT./EXT. 4 L.", precio: 7383.17 },
      { id: idArticulo++, codigo: "01 10 16", nombre: "LATEX YAPEYU INT./EXT. 10 L.", precio: 15646.97 },
      { id: idArticulo++, codigo: "01 10 17", nombre: "LATEX YAPEYU INT./EXT. 20 L.", precio: 30590.02 },
      { id: idArticulo++, codigo: "01 10 34", nombre: "LATEX YAPEYU INTERIOR 4 L.", precio: 6197.29 },
      { id: idArticulo++, codigo: "01 10 36", nombre: "LATEX YAPEYU INTERIOR 10 L.", precio: 13492.89 },
      { id: idArticulo++, codigo: "01 10 37", nombre: "LATEX YAPEYU INTERIOR 20 L.", precio: 26327.13 },
      { id: idArticulo++, codigo: "01 11 24", nombre: "LAT INTERIOR LAVABLE X 4", precio: 13361.34 },
      { id: idArticulo++, codigo: "01 11 26", nombre: "LAT INTERIOR LAVABLE X 10", precio: 31249.09 },
      { id: idArticulo++, codigo: "01 11 27", nombre: "LAT INTERIOR LAVABLE X 20", precio: 59568.56 },
      { id: idArticulo++, codigo: "01 12 13", nombre: "LATEX FRENTE SORBALOK 1 L.", precio: 4702.86 },
      { id: idArticulo++, codigo: "01 12 14", nombre: "LATEX FRENTE SORBALOK 4 L.", precio: 15822.8 },
      { id: idArticulo++, codigo: "01 12 16", nombre: "LATEX FRENTE SORBALOK 10 L.", precio: 37533.92 },
      { id: idArticulo++, codigo: "01 12 17", nombre: "LATEX FRENTE SORBALOK 20 L.", precio: 73925.88 },
      { id: idArticulo++, codigo: "01 12 313", nombre: "LAT FTE PREMIUM TORINO 1 L.", precio: 6461.21 },
      { id: idArticulo++, codigo: "01 12 314", nombre: "LAT FTE PREMIUM TORINO 4 L.", precio: 19601.95 },
      { id: idArticulo++, codigo: "01 12 316", nombre: "LAT FTE PREMIUM TORINO 10 L.", precio: 46544.19 },
      { id: idArticulo++, codigo: "01 12 353", nombre: "LAT FTE TORINO BASE D 0.94 L.", precio: 5669.52 },
      { id: idArticulo++, codigo: "01 12 354", nombre: "LAT FTE TORINO BASE D 3.76 L.", precio: 17228.61 },
      { id: idArticulo++, codigo: "01 12 356", nombre: "LAT FTE TORINO BASE D 9.4 L.", precio: 40962.49 },
      { id: idArticulo++, codigo: "01 12 357", nombre: "LAT FTE TORINO BASE D 18.80 L.", precio: 80694.2 },
      { id: idArticulo++, codigo: "01 13 3", nombre: "LATEX BASE P PROF I/E 1.25 KG", precio: 63.78 },
      { id: idArticulo++, codigo: "01 13 4", nombre: "LATEX BASE P PROF I/E 5 KG", precio: 181.72 },
      { id: idArticulo++, codigo: "01 13 6", nombre: "LATEX BASE P PROF I/E 12.5 KG", precio: 415.88 },
      { id: idArticulo++, codigo: "01 13 7", nombre: "LATEX BASE P PROF I/E 25 KG", precio: 818.05 },
      { id: idArticulo++, codigo: "01 13 03", nombre: "LATEX BASE T PROF I/E 1.25 KG", precio: 63.78 },
      { id: idArticulo++, codigo: "01 13 04", nombre: "LATEX BASE T PROF I/E 5 KG", precio: 181.72 },
      { id: idArticulo++, codigo: "01 13 06", nombre: "LATEX BASE T PROF I/E 12.5 KG", precio: 415.88 },
      { id: idArticulo++, codigo: "01 13 07", nombre: "LATEX BASE T PROF I/E 25 KG", precio: 818.05 },
      { id: idArticulo++, codigo: "01 13 13", nombre: "LATEX PROFESIONAL I/E 1 L.", precio: 3246.62 },
      { id: idArticulo++, codigo: "01 13 14", nombre: "LATEX PROFESIONAL I/E 4 L.", precio: 9227.36 },
      { id: idArticulo++, codigo: "01 13 16", nombre: "LATEX PROFESIONAL I/E 10 L.", precio: 21102.99 },
      { id: idArticulo++, codigo: "01 13 17", nombre: "LATEX PROFESIONAL I/E 20 L.", precio: 41522.5 },
      { id: idArticulo++, codigo: "01 13 114", nombre: "LATEX EXTERIOR 4 L.", precio: 10416.14 },
      { id: idArticulo++, codigo: "01 13 116", nombre: "LATEX EXTERIOR 10 L.", precio: 23865.64 },
      { id: idArticulo++, codigo: "01 14 13", nombre: "LATEX LACRIL INTERIOR 1 L.", precio: 2680.93 },
      { id: idArticulo++, codigo: "01 14 14", nombre: "LATEX LACRIL INTERIOR 4 L.", precio: 7120.28 },
      { id: idArticulo++, codigo: "01 14 16", nombre: "LATEX LACRIL INTERIOR 10 L.", precio: 15866.49 },
      { id: idArticulo++, codigo: "01 14 17", nombre: "LATEX LACRIL INTERIOR 20 L.", precio: 31073.21 },
      { id: idArticulo++, codigo: "01 16 13", nombre: "LATEX CIELORRASO 1 L.", precio: 3780.01 },
      { id: idArticulo++, codigo: "01 16 14", nombre: "LATEX CIELORRASO 4 L.", precio: 11207.8 },
      { id: idArticulo++, codigo: "01 16 16", nombre: "LATEX CIELORRASO 10 L.", precio: 25403.46 },
      { id: idArticulo++, codigo: "01 16 17", nombre: "LATEX CIELORRASO 20 L.", precio: 48258.3 },
      { id: idArticulo++, codigo: "01 17 03", nombre: "LATEX ANTITERMICA 1 L.", precio: 5801.9 },
      { id: idArticulo++, codigo: "01 17 04", nombre: "LATEX ANTITERMICA 4 L.", precio: 17404.71 },
      { id: idArticulo++, codigo: "01 17 06", nombre: "LATEX ANTITERMICA 10 L.", precio: 41314.17 },
      { id: idArticulo++, codigo: "01 17 07", nombre: "LATEX ANTITERMICA 20 L.", precio: 81308.85 },
      { id: idArticulo++, codigo: "01 15* 3 31", nombre: "LATEX FRENTE CEREZA 1 L. (CEREZA 1)", precio: 5849.89 },
      { id: idArticulo++, codigo: "01 15* 3 32", nombre: "LATEX FRENTE MANZANA 1 L. (VDE MANZANA)", precio: 5849.89 },
      { id: idArticulo++, codigo: "01 15* 3 33", nombre: "LATEX FRENTE AMBAR 1 L. (AM AMBAR)", precio: 5849.89 },
      { id: idArticulo++, codigo: "01 15* 3 34", nombre: "LATEX FRENTE ZAFIRO 1 L. (AZ ZAFIRO)", precio: 5849.89 },
      { id: idArticulo++, codigo: "01 15* 3 35", nombre: "LATEX FRENTE MOSTAZA 1 L. (MOSTAZA)", precio: 5849.89 },
      { id: idArticulo++, codigo: "01 15* 3 36", nombre: "LATEX FRENTE JADE 1 L. (VDE JADE)", precio: 5849.89 },
      { id: idArticulo++, codigo: "01 15* 3 37", nombre: "LATEX FRENTE SALMON 1 L. (SALMON)", precio: 5849.89 },
      { id: idArticulo++, codigo: "01 15* 3 38", nombre: "LATEX FRENTE OXIDO 1 L. (RJ OXIDO)", precio: 5849.89 },
      { id: idArticulo++, codigo: "01 15* 3 39", nombre: "LATEX FRENTE CARDO 1 L. (CARDO)", precio: 5849.89 },
      { id: idArticulo++, codigo: "01 15* 3 40", nombre: "LATEX FRENTE EBANO 1 L. (EBANO)", precio: 5849.89 },
      { id: idArticulo++, codigo: "01 15* 4 31", nombre: "LATEX FRENTE CEREZA 4 L. (CEREZA)", precio: 19531.55 },
      { id: idArticulo++, codigo: "01 15* 4 32", nombre: "LATEX FRENTE MANZANA 4 L. (VDE MANZANA)", precio: 19531.55 },
      { id: idArticulo++, codigo: "01 15* 4 33", nombre: "LATEX FRENTE AMBAR 4 L. (AM AMBAR)", precio: 19531.55 },
      { id: idArticulo++, codigo: "01 15* 4 34", nombre: "LATEX FRENTE ZAFIRO 4 L. (AZ ZAFIRO)", precio: 19531.55 },
      { id: idArticulo++, codigo: "01 15* 4 35", nombre: "LATEX FRENTE MOSTAZA 4 L. (MOSTAZA)", precio: 19531.55 },
      { id: idArticulo++, codigo: "01 15* 4 36", nombre: "LATEX FRENTE JADE 4 L. (VDE JADE)", precio: 19531.55 },
      { id: idArticulo++, codigo: "01 15* 4 37", nombre: "LATEX FRENTE SALMON 4 L. (SALMON)", precio: 19531.55 },
      { id: idArticulo++, codigo: "01 15* 4 38", nombre: "LATEX FRENTE OXIDO 4 L. (RJ OXIDO)", precio: 19531.55 },
      { id: idArticulo++, codigo: "01 15* 4 39", nombre: "LATEX FRENTE CARDO 4 L. (CARDO)", precio: 19531.55 },
      { id: idArticulo++, codigo: "01 15* 4 40", nombre: "LATEX FRENTE EBANO 4 L. (NEGRO)", precio: 19531.55 },
      { id: idArticulo++, codigo: "01 15* 6 25", nombre: "LATEX FRENTE MAPIN 10 L. (AZUL MAPIN)", precio: 50956.78 },
      { id: idArticulo++, codigo: "01 15* 6 27", nombre: "LATEX FRENTE TORCAZA 10 L. (GRIS TORCAZA)", precio: 50956.78 },
      { id: idArticulo++, codigo: "01 15* 6 31", nombre: "LATEX FRENTE CEREZA 10 L. (CEREZA)", precio: 46315.74 },
      { id: idArticulo++, codigo: "01 15* 6 32", nombre: "LATEX FRENTE MANZANA 10 L. (VDE MANZANA)", precio: 46315.74 },
      { id: idArticulo++, codigo: "01 15* 6 33", nombre: "LATEX FRENTE AMBAR 10 L. (AM AMBAR)", precio: 46315.74 },
      { id: idArticulo++, codigo: "01 15* 6 34", nombre: "LATEX FRENTE ZAFIRO 10 L. (AZ ZAFIRO)", precio: 46315.74 },
      { id: idArticulo++, codigo: "01 15* 6 35", nombre: "LATEX FRENTE MOSTAZA 10 L (MOSTAZA)", precio: 46315.74 },
      { id: idArticulo++, codigo: "01 15* 6 36", nombre: "LATEX FRENTE JADE 10 L. (VDE JADE)", precio: 46315.74 },
      { id: idArticulo++, codigo: "01 15* 6 37", nombre: "LATEX FRENTE SALMON 10 L. (SALMON)", precio: 46315.74 },
      { id: idArticulo++, codigo: "01 15* 6 38", nombre: "LATEX FRENTE OXIDO 10 L. (RJ OXIDO)", precio: 46315.74 },
      { id: idArticulo++, codigo: "01 15* 6 39", nombre: "LATEX FRENTE CARDO 10 L. (CARDO)", precio: 46315.74 },
      { id: idArticulo++, codigo: "01 15* 6 40", nombre: "LATEX FRENTE EBANO 10 L. (NEGRO)", precio: 46315.74 },
      { id: idArticulo++, codigo: "01 17* 3 01", nombre: "LAT. PROF PRADO 1 L. (s\xF3lo para INTERIOR)", precio: 5511.37 },
      { id: idArticulo++, codigo: "01 17* 3 02", nombre: "LAT. PROF OCEANO 1 L. (s\xF3lo para INTERIOR)", precio: 5511.37 },
      { id: idArticulo++, codigo: "01 17* 3 03", nombre: "LAT. PROF CANTARO 1 L. (s\xF3lo para INTERIOR)", precio: 5511.37 },
      { id: idArticulo++, codigo: "01 17* 3 04", nombre: "LAT. PROF CIRUELA 1 L. (s\xF3lo para INTERIOR)", precio: 5511.37 },
      { id: idArticulo++, codigo: "01 17* 3 05", nombre: "LAT. PROF TRIGAL 1 L. (s\xF3lo para INTERIOR)", precio: 5511.37 },
      { id: idArticulo++, codigo: "01 17* 3 06", nombre: "LAT. PROF CEIBO 1 L. (s\xF3lo para INTERIOR)", precio: 5511.37 },
      { id: idArticulo++, codigo: "01 17* 4 01", nombre: "LAT. PROF PRADO 4 L. (s\xF3lo para INTERIOR)", precio: 15663.65 },
      { id: idArticulo++, codigo: "01 17* 4 02", nombre: "LAT. PROF OCEANO 4 L. (s\xF3lo para INTERIOR)", precio: 15663.65 },
      { id: idArticulo++, codigo: "01 17* 4 03", nombre: "LAT. PROF CANTARO 4 L. (s\xF3lo para INTERIOR)", precio: 15663.65 },
      { id: idArticulo++, codigo: "01 17* 4 04", nombre: "LAT. PROF CIRUELA 4 L. (s\xF3lo para INTERIOR)", precio: 15663.65 },
      { id: idArticulo++, codigo: "01 17* 4 05", nombre: "LAT. PROF TRIGAL 4 L. (s\xF3lo para INTERIOR)", precio: 15663.65 },
      { id: idArticulo++, codigo: "01 17* 4 06", nombre: "LAT. PROF CEIBO 4 L. (s\xF3lo para INTERIOR)", precio: 15663.65 },
      { id: idArticulo++, codigo: "01 18 13", nombre: "IMP TRANSITAB/TORINO TECHO1 Kg (BLANCO)", precio: 5186.02 },
      { id: idArticulo++, codigo: "01 18 14", nombre: "IMP TRANSITAB/TORINO TECHO4 Kg (BLANCO)", precio: 15514.35 },
      { id: idArticulo++, codigo: "01 18 16", nombre: "IMP TRANSITAB/TORINO TECH10 Kg (BLANCO)", precio: 36874.78 },
      { id: idArticulo++, codigo: "01 18 17", nombre: "IMP TRANSITAB/TORINO TECH20 Kg (BLANCO)", precio: 72826.69 },
      { id: idArticulo++, codigo: "01 18 414", nombre: "IMP TRBLE FIBRADO/TORINO 4 Kg (BLANCO)", precio: 17009.2 },
      { id: idArticulo++, codigo: "01 18 416", nombre: "IMP TRBLE FIBRADO/TORINO 10 Kg (BLANCO)", precio: 40654.8 },
      { id: idArticulo++, codigo: "01 18 417", nombre: "IMP TRBLE FIBRADO/TORINO 20 Kg (BLANCO)", precio: 80781.48 },
      { id: idArticulo++, codigo: "01 18 1013", nombre: "IMP. MEMBRANA GOL 1 Kg (BLANCO)", precio: 4052.54 },
      { id: idArticulo++, codigo: "01 18 1014", nombre: "IMP. MEMBRANA GOL 4 Kg (BLANCO)", precio: 10727.22 },
      { id: idArticulo++, codigo: "01 18 1016", nombre: "IMP. MEMBRANA GOL 10 Kg (BLANCO)", precio: 24966.19 },
      { id: idArticulo++, codigo: "01 18 1017", nombre: "IMP. MEMBRANA GOL 20 Kg (BLANCO)", precio: 48994.45 },
      { id: idArticulo++, codigo: "01 18 1083", nombre: "IMP. MEMBR GOL TEJA 1 Kg (TEJA)", precio: 4052.54 },
      { id: idArticulo++, codigo: "01 18 1084", nombre: "IMP. MEMBR GOL TEJA 4 Kg (TEJA)", precio: 10727.22 },
      { id: idArticulo++, codigo: "01 18 1086", nombre: "IMP. MEMBR GOL TEJA 10 Kg (TEJA)", precio: 24966.19 },
      { id: idArticulo++, codigo: "01 18 1087", nombre: "IMP. MEMBR GOL TEJA 20 Kg (TEJA)", precio: 48994.45 },
      { id: idArticulo++, codigo: "01 19 3", nombre: "IMP. TAPAGOTERAS TRANSP. 1 L.", precio: 4931.11 },
      { id: idArticulo++, codigo: "01 19 4", nombre: "IMP. TAPAGOTERAS TRANSP. 4 L.", precio: 14311.16 },
      { id: idArticulo++, codigo: "01 19 16", nombre: "IMP. TAPAGOTERAS TRANSP. 10 L.", precio: 33551.82 },
      { id: idArticulo++, codigo: "01 19 17", nombre: "IMP. TAPAGOTERAS TRANSP. 20 L.", precio: 63865 },
      { id: idArticulo++, codigo: "01 19 104", nombre: "IMP. TORINO TONO CERAMICO 4 L", precio: 15742.3 },
      { id: idArticulo++, codigo: "01 19 106", nombre: "IMP. TORINO LADRILLOS 10 L.", precio: 36907.19 },
      { id: idArticulo++, codigo: "01 50 1", nombre: "FIJ. LATIZADOR 1/4 L.", precio: 966.77 },
      { id: idArticulo++, codigo: "01 51 3", nombre: "FIJ. SELLADOR 1 L.", precio: 3142.25 },
      { id: idArticulo++, codigo: "01 51 4", nombre: "FIJ. SELLADOR 4 L.", precio: 10008.46 },
      { id: idArticulo++, codigo: "01 51 6", nombre: "FIJ. SELLADOR 10 L.", precio: 20450.79 },
      { id: idArticulo++, codigo: "01 51 7", nombre: "FIJ. SELLADOR 20 L.", precio: 37758.68 },
      { id: idArticulo++, codigo: "01 53 3", nombre: "ENDUIDO PLAST. INTERIOR 1200 G", precio: 2223.82 },
      { id: idArticulo++, codigo: "01 53 4", nombre: "ENDUIDO PLAST. INTERIOR 4 L.", precio: 8074.07 },
      { id: idArticulo++, codigo: "01 53 6", nombre: "ENDUIDO PLAST. INTERIOR 10 L.", precio: 18033.8 }
    ],
    esmaltes: [
      { id: idArticulo++, codigo: "01 22 211", nombre: "ESM. ADRIATICO 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 212", nombre: "ESM. ADRIATICO 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 213", nombre: "ESM. ADRIATICO 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 214", nombre: "ESM. ADRIATICO 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 217", nombre: "ESM. ADRIATICO 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 21 501", nombre: "ESM. ALUMINIO 1/4 L.", precio: 2538.32 },
      { id: idArticulo++, codigo: "01 21 502", nombre: "ESM. ALUMINIO 1/2 L.", precio: 4153.55 },
      { id: idArticulo++, codigo: "01 21 503", nombre: "ESM. ALUMINIO 1 L.", precio: 6784.25 },
      { id: idArticulo++, codigo: "01 21 504", nombre: "ESM. ALUMINIO 4 L.", precio: 26027.31 },
      { id: idArticulo++, codigo: "01 21 507", nombre: "ESM. ALUMINIO 20 L.", precio: 124277.72 },
      { id: idArticulo++, codigo: "01 21 41", nombre: "ESM. AMARILLO CLARO 1/4 L.", precio: 2538.32 },
      { id: idArticulo++, codigo: "01 21 42", nombre: "ESM. AMARILLO CLARO 1/2 L.", precio: 4153.55 },
      { id: idArticulo++, codigo: "01 21 43", nombre: "ESM. AMARILLO CLARO 1 L.", precio: 6784.25 },
      { id: idArticulo++, codigo: "01 21 44", nombre: "ESM. AMARILLO CLARO 4 L.", precio: 26027.31 },
      { id: idArticulo++, codigo: "01 21 47", nombre: "ESM. AMARILLO CLARO 20 L.", precio: 124277.72 },
      { id: idArticulo++, codigo: "01 21 51", nombre: "ESM. AMARILLO MEDIAN0 1/4L", precio: 2538.32 },
      { id: idArticulo++, codigo: "01 21 52", nombre: "ESM. AMARILLO MEDIANO 1/2L", precio: 4153.55 },
      { id: idArticulo++, codigo: "01 21 53", nombre: "ESM. AMARILLO MEDIANO 1 L.", precio: 6784.25 },
      { id: idArticulo++, codigo: "01 21 54", nombre: "ESM. AMARILLO MEDIANO 4 L.", precio: 26027.31 },
      { id: idArticulo++, codigo: "01 21 57", nombre: "ESM. AMARILLO MEDIANO 20 L.", precio: 124277.72 },
      { id: idArticulo++, codigo: "01 22 311", nombre: "ESM. AZULEJO 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 312", nombre: "ESM. AZULEJO 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 313", nombre: "ESM. AZULEJO 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 314", nombre: "ESM. AZULEJO 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 317", nombre: "ESM. AZULEJO 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 22 111", nombre: "ESM. BEIGE 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 112", nombre: "ESM. BEIGE 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 113", nombre: "ESM. BEIGE 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 114", nombre: "ESM. BEIGE 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 117", nombre: "ESM. BEIGE 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 21 161", nombre: "ESM. BERMELLON 1/4 L.", precio: 2538.32 },
      { id: idArticulo++, codigo: "01 21 162", nombre: "ESM. BERMELLON 1/2 L.", precio: 4153.55 },
      { id: idArticulo++, codigo: "01 21 163", nombre: "ESM. BERMELLON 1 L.", precio: 6784.25 },
      { id: idArticulo++, codigo: "01 21 164", nombre: "ESM. BERMELLON 4 L.", precio: 26027.31 },
      { id: idArticulo++, codigo: "01 21 167", nombre: "ESM. BERMELLON 20 L.", precio: 124277.72 },
      { id: idArticulo++, codigo: "01 23 011", nombre: "ESM. BLANCO 1/4 L.", precio: 2538.32 },
      { id: idArticulo++, codigo: "01 23 012", nombre: "ESM. BLANCO 1/2 L.", precio: 4153.55 },
      { id: idArticulo++, codigo: "01 23 013", nombre: "ESM. BLANCO 1 L.", precio: 6784.25 },
      { id: idArticulo++, codigo: "01 23 014", nombre: "ESM. BLANCO 4 L.", precio: 26027.31 },
      { id: idArticulo++, codigo: "01 23 017", nombre: "ESM. BLANCO 20 L.", precio: 124277.72 },
      { id: idArticulo++, codigo: "01 23 211", nombre: "ESM. BLANCO MATE 1/4 L.", precio: 2538.32 },
      { id: idArticulo++, codigo: "01 23 212", nombre: "ESM. BLANCO MATE 1/2 L.", precio: 4153.55 },
      { id: idArticulo++, codigo: "01 23 213", nombre: "ESM. BLANCO MATE 1 L.", precio: 6784.25 },
      { id: idArticulo++, codigo: "01 23 214", nombre: "ESM. BLANCO MATE 4 L.", precio: 26027.31 },
      { id: idArticulo++, codigo: "01 23 217", nombre: "ESM. BLANCO MATE 20 L.", precio: 124277.72 },
      { id: idArticulo++, codigo: "01 23 511", nombre: "ESM. BLANCO SATINADO 1/4 L", precio: 2538.32 },
      { id: idArticulo++, codigo: "01 23 512", nombre: "ESM. BLANCO SATINADO 1/2 L", precio: 4153.55 },
      { id: idArticulo++, codigo: "01 23 513", nombre: "ESM. BLANCO SATINADO 1 L.", precio: 6784.25 },
      { id: idArticulo++, codigo: "01 23 514", nombre: "ESM. BLANCO SATINADO 4 L.", precio: 26027.31 },
      { id: idArticulo++, codigo: "01 23 517", nombre: "ESM. BLANCO SATINADO 20 L.", precio: 124277.72 },
      { id: idArticulo++, codigo: "01 22 121", nombre: "ESM. CAFE 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 122", nombre: "ESM. CAFE 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 123", nombre: "ESM. CAFE 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 124", nombre: "ESM. CAFE 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 127", nombre: "ESM. CAFE 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 22 264", nombre: "ESM. CATERPILLAR 4 L.", precio: 27319.9 },
      { id: idArticulo++, codigo: "01 22 151", nombre: "ESM. CEDRO 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 152", nombre: "ESM. CEDRO 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 153", nombre: "ESM. CEDRO 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 154", nombre: "ESM. CEDRO 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 157", nombre: "ESM. CEDRO 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 22 341", nombre: "ESM. CELESTE 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 342", nombre: "ESM. CELESTE 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 343", nombre: "ESM. CELESTE 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 344", nombre: "ESM. CELESTE 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 347", nombre: "ESM. CELESTE 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 21 900", nombre: "ESM. COLOR N/STAND. (X CANT.)", precio: 5999.43 },
      { id: idArticulo++, codigo: "01 21 901", nombre: "ESM. COLOR N/STAND. 1/4 L.", precio: 2792.01 },
      { id: idArticulo++, codigo: "01 21 902", nombre: "ESM. COLOR N/STAND. 1/2 L.", precio: 4701.15 },
      { id: idArticulo++, codigo: "01 21 903", nombre: "ESM. COLOR N/STAND. 1 L.", precio: 7462.44 },
      { id: idArticulo++, codigo: "01 21 904", nombre: "ESM. COLOR N/STAND. 4 L.", precio: 28630.53 },
      { id: idArticulo++, codigo: "01 21 907", nombre: "ESM. COLOR N/STAND. 20 L.", precio: 136705.88 },
      { id: idArticulo++, codigo: "01 22 21", nombre: "ESM. CREMA 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 22", nombre: "ESM. CREMA 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 23", nombre: "ESM. CREMA 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 24", nombre: "ESM. CREMA 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 27", nombre: "ESM. CREMA 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 21 804", nombre: "ESM. FIAT IVECO 4 L.", precio: 27319.9 },
      { id: idArticulo++, codigo: "01 22 804", nombre: "ESM. GRIS ESCANIA 4 L.", precio: 27319.9 },
      { id: idArticulo++, codigo: "01 22 251", nombre: "ESM. GRIS ESPACIAL 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 252", nombre: "ESM. GRIS ESPACIAL 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 253", nombre: "ESM. GRIS ESPACIAL 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 254", nombre: "ESM. GRIS ESPACIAL 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 257", nombre: "ESM. GRIS ESPACIAL 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 21 271", nombre: "ESM. GRIS HIELO 1/4 L.", precio: 2538.32 },
      { id: idArticulo++, codigo: "01 21 272", nombre: "ESM. GRIS HIELO 1/2 L.", precio: 4153.55 },
      { id: idArticulo++, codigo: "01 21 273", nombre: "ESM. GRIS HIELO 1 L.", precio: 6784.25 },
      { id: idArticulo++, codigo: "01 21 274", nombre: "ESM. GRIS HIELO 4 L.", precio: 26027.31 },
      { id: idArticulo++, codigo: "01 21 277", nombre: "ESM. GRIS HIELO 20 L.", precio: 124277.72 },
      { id: idArticulo++, codigo: "01 22 101", nombre: "ESM. GRIS LONDRES 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 102", nombre: "ESM. GRIS LONDRES 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 103", nombre: "ESM. GRIS LONDRES 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 104", nombre: "ESM. GRIS LONDRES 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 107", nombre: "ESM. GRIS LONDRES 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 22 71", nombre: "ESM. GRIS PERLA 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 72", nombre: "ESM. GRIS PERLA 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 73", nombre: "ESM. GRIS PERLA 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 74", nombre: "ESM. GRIS PERLA 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 77", nombre: "ESM. GRIS PERLA 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 21 354", nombre: "ESM. HELVETICA 4 L.", precio: 27319.9 },
      { id: idArticulo++, codigo: "01 22 321", nombre: "ESM. MARFIL 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 322", nombre: "ESM. MARFIL 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 323", nombre: "ESM. MARFIL 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 324", nombre: "ESM. MARFIL 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 327", nombre: "ESM. MARFIL 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 22 181", nombre: "ESM. MARRON 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 182", nombre: "ESM. MARRON 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 183", nombre: "ESM. MARRON 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 184", nombre: "ESM. MARRON 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 187", nombre: "ESM. MARRON 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 21 141", nombre: "ESM. NARANJA 1/4 L.", precio: 2538.32 },
      { id: idArticulo++, codigo: "01 21 142", nombre: "ESM. NARANJA 1/2 L.", precio: 4153.55 },
      { id: idArticulo++, codigo: "01 21 143", nombre: "ESM. NARANJA 1 L.", precio: 6784.25 },
      { id: idArticulo++, codigo: "01 21 144", nombre: "ESM. NARANJA 4 L.", precio: 26027.31 },
      { id: idArticulo++, codigo: "01 21 147", nombre: "ESM. NARANJA 20 L.", precio: 124277.72 },
      { id: idArticulo++, codigo: "01 22 134", nombre: "ESM. NARANJA FIAT 4 L.", precio: 27319.9 },
      { id: idArticulo++, codigo: "01 22 201", nombre: "ESM. NEGRO 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 202", nombre: "ESM. NEGRO 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 203", nombre: "ESM. NEGRO 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 204", nombre: "ESM. NEGRO 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 207", nombre: "ESM. NEGRO 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 22 701", nombre: "ESM. NEGRO MATE 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 702", nombre: "ESM. NEGRO MATE 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 703", nombre: "ESM. NEGRO MATE 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 704", nombre: "ESM. NEGRO MATE 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 707", nombre: "ESM. NEGRO MATE 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 22 711", nombre: "ESM. NEGRO SATINADO 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 712", nombre: "ESM. NEGRO SATINADO 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 713", nombre: "ESM. NEGRO SATINADO 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 714", nombre: "ESM. NEGRO SATINADO 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 717", nombre: "ESM. NEGRO SATINADO 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 22 221", nombre: "ESM. TRAFUL 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 222", nombre: "ESM. TRAFUL 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 223", nombre: "ESM. TRAFUL 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 224", nombre: "ESM. TRAFUL 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 227", nombre: "ESM. TRAFUL 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 22 371", nombre: "ESM. VERDE CLARO 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 372", nombre: "ESM. VERDE CLARO 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 373", nombre: "ESM. VERDE CLARO 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 374", nombre: "ESM. VERDE CLARO 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 377", nombre: "ESM. VERDE CLARO 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 22 241", nombre: "ESM. VERDE INGLES 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 242", nombre: "ESM. VERDE INGLES 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 243", nombre: "ESM. VERDE INGLES 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 244", nombre: "ESM. VERDE INGLES 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 247", nombre: "ESM. VERDE INGLES 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 22 304", nombre: "ESM. VERDE JOHN DEERE 4 L.", precio: 27319.9 },
      { id: idArticulo++, codigo: "01 22 81", nombre: "ESM. VERDE NOCHE 1/4 L.", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 22 82", nombre: "ESM. VERDE NOCHE 1/2 L.", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 22 83", nombre: "ESM. VERDE NOCHE 1 L.", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 22 84", nombre: "ESM. VERDE NOCHE 4 L.", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 22 87", nombre: "ESM. VERDE NOCHE 20 L.", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 21 171", nombre: "ESM. VIOLETA 1/4 L.", precio: 2538.32 },
      { id: idArticulo++, codigo: "01 21 172", nombre: "ESM. VIOLETA 1/2 L.", precio: 4153.55 },
      { id: idArticulo++, codigo: "01 21 173", nombre: "ESM. VIOLETA 1 L.", precio: 6784.25 },
      { id: idArticulo++, codigo: "01 21 174", nombre: "ESM. VIOLETA 4 L.", precio: 26027.31 }
    ],
    "esmaltes sinteticos especiales": [
      { id: idArticulo++, codigo: "01 28* 201 01", nombre: "ESM. PIZARRON 1/4 L. (NEGRO)", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 28* 201 02", nombre: "ESM. PIZARRON 1/4 L. (VERDE)", precio: 2030.18 },
      { id: idArticulo++, codigo: "01 28* 202 01", nombre: "ESM. PIZARRON 1/2 L. (NEGRO)", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 28* 202 02", nombre: "ESM. PIZARRON 1/2 L. (VERDE)", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 28* 203 01", nombre: "ESM. PIZARRON 1 L. (NEGRO)", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 28* 203 02", nombre: "ESM. PIZARRON 1 L. (VERDE)", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 28* 204 01", nombre: "ESM. PIZARRON 4 L. (NEGRO)", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 28* 204 02", nombre: "ESM. PIZARRON 4 L. (VERDE)", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 28* 207 01", nombre: "ESM. PIZARRON 20 L. (NEGRO)", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 28* 207 02", nombre: "ESM. PIZARRON 20 L. (VERDE)", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 24 4", nombre: "ESM. ELECT. GRUPO 1/3 4 L.", precio: 28612.41 },
      { id: idArticulo++, codigo: "01 24 7", nombre: "ESM. ELECT. GRUPO 1/3 20 L.", precio: 138861.01 },
      { id: idArticulo++, codigo: "01 24 14", nombre: "ESM. ELECT. GRUPO 2 4 L.", precio: 20859.09 },
      { id: idArticulo++, codigo: "01 24 17", nombre: "ESM. ELECT. GRUPO 2 20 L.", precio: 105818.56 },
      { id: idArticulo++, codigo: "01 25 4", nombre: "ESM. SEC. RAP. BLANCO 4 L", precio: 31842.67 },
      { id: idArticulo++, codigo: "01 25 7", nombre: "ESM. SEC. RAP. BLANCO 20 L", precio: 152890.38 },
      { id: idArticulo++, codigo: "01 25 14", nombre: "ESM. SEC. RAP. GRUPO 2 4 L.", precio: 31842.67 },
      { id: idArticulo++, codigo: "01 25 17", nombre: "ESM. SEC. RAP. GRUPO 2 20 L.", precio: 152890.38 }
    ],
    pinturas_especiales: [
      { id: idArticulo++, codigo: "01 29* 3 01", nombre: "EPOXI (A+B) = 1.500 KG. (BLANCO)", precio: 26074.27 },
      { id: idArticulo++, codigo: "01 29* 4 01", nombre: "EPOXI (A+B)-1x4 /1x1= 2.700 KG (BLANCO)", precio: 46610.05 },
      { id: idArticulo++, codigo: "01 29* 7 01", nombre: "EPOXI (A+B)-1x20/1x4=13.000 KG (BLANCO)", precio: 211683.23 },
      { id: idArticulo++, codigo: "01 49 21", nombre: "TRIPLE - BLANCO 1/4 L.", precio: 2768.93 },
      { id: idArticulo++, codigo: "01 49 22", nombre: "TRIPLE - BLANCO 1/2 L.", precio: 4568.79 },
      { id: idArticulo++, codigo: "01 49 23", nombre: "TRIPLE - BLANCO 1 L.", precio: 7752.36 },
      { id: idArticulo++, codigo: "01 49 24", nombre: "TRIPLE - BLANCO 4 L.", precio: 27919.71 },
      { id: idArticulo++, codigo: "01 49 27", nombre: "TRIPLE - BLANCO 20 L.", precio: 134200.32 },
      { id: idArticulo++, codigo: "01 49 41", nombre: "TRIPLE - BERMELLON 1/4 L.", precio: 2768.93 },
      { id: idArticulo++, codigo: "01 49 42", nombre: "TRIPLE - BERMELLON 1/2 L.", precio: 4568.79 },
      { id: idArticulo++, codigo: "01 49 43", nombre: "TRIPLE - BERMELLON 1 L.", precio: 7752.36 },
      { id: idArticulo++, codigo: "01 49 44", nombre: "TRIPLE - BERMELLON 4 L.", precio: 27919.71 },
      { id: idArticulo++, codigo: "01 49 47", nombre: "TRIPLE - BERMELLON 20 L.", precio: 134200.32 },
      { id: idArticulo++, codigo: "01 49 71", nombre: "TRIPLE - VERDE 1/4 L.", precio: 2768.93 },
      { id: idArticulo++, codigo: "01 49 72", nombre: "TRIPLE - VERDE 1/2 L.", precio: 4568.79 },
      { id: idArticulo++, codigo: "01 49 73", nombre: "TRIPLE - VERDE 1 L.", precio: 7752.36 },
      { id: idArticulo++, codigo: "01 49 74", nombre: "TRIPLE - VERDE 4 L.", precio: 27919.71 },
      { id: idArticulo++, codigo: "01 49 77", nombre: "TRIPLE - VERDE 20 L.", precio: 134200.32 },
      { id: idArticulo++, codigo: "01 49 101", nombre: "TRIPLE - NEGRO 1/4 L.", precio: 2768.93 },
      { id: idArticulo++, codigo: "01 49 102", nombre: "TRIPLE - NEGRO 1/2 L.", precio: 4568.79 },
      { id: idArticulo++, codigo: "01 49 103", nombre: "TRIPLE - NEGRO 1 L.", precio: 7752.36 },
      { id: idArticulo++, codigo: "01 49 104", nombre: "TRIPLE - NEGRO 4 L.", precio: 27919.71 },
      { id: idArticulo++, codigo: "01 49 107", nombre: "TRIPLE - NEGRO 20 L.", precio: 134200.32 },
      { id: idArticulo++, codigo: "01 49 171", nombre: "TRIPLE - GRIS CLARO 1/4 L.", precio: 2768.93 },
      { id: idArticulo++, codigo: "01 49 172", nombre: "TRIPLE - GRIS CLARO 1/2 L.", precio: 4568.79 },
      { id: idArticulo++, codigo: "01 49 173", nombre: "TRIPLE - GRIS CLARO 1 L.", precio: 7752.36 },
      { id: idArticulo++, codigo: "01 49 174", nombre: "TRIPLE - GRIS CLARO 4 L.", precio: 27919.71 },
      { id: idArticulo++, codigo: "01 49 177", nombre: "TRIPLE - GRIS CLARO 20 L.", precio: 134200.32 },
      { id: idArticulo++, codigo: "01 49 201", nombre: "TRIPLE - AZUL 1/4 L.", precio: 2768.93 },
      { id: idArticulo++, codigo: "01 49 202", nombre: "TRIPLE - AZUL 1/2 L.", precio: 4568.79 },
      { id: idArticulo++, codigo: "01 49 203", nombre: "TRIPLE - AZUL 1 L.", precio: 7752.36 },
      { id: idArticulo++, codigo: "01 49 204", nombre: "TRIPLE - AZUL 4 L.", precio: 27919.71 },
      { id: idArticulo++, codigo: "01 49 207", nombre: "TRIPLE - AZUL 20 L.", precio: 134200.32 },
      { id: idArticulo++, codigo: "01 49 304", nombre: "TRIPLE - N/STANDARD 4 L.", precio: 27919.71 },
      { id: idArticulo++, codigo: "01 49 307", nombre: "TRIPLE - N/STANDARD 20 L.", precio: 134200.32 },
      { id: idArticulo++, codigo: "01 49 1101", nombre: "TRIPLE - NEGRO SAT 1/4 L.", precio: 2131.67 },
      { id: idArticulo++, codigo: "01 49 1102", nombre: "TRIPLE - NEGRO SAT 1/2 L.", precio: 3392.07 },
      { id: idArticulo++, codigo: "01 49 1103", nombre: "TRIPLE - NEGRO SAT 1 L.", precio: 5814.46 },
      { id: idArticulo++, codigo: "01 49 1104", nombre: "TRIPLE - NEGRO SAT 4 L.", precio: 19915.43 },
      { id: idArticulo++, codigo: "01 58 13", nombre: "ESM. P/PISO GRUPO 2 - 1 L. (CEDRO)", precio: 5537.7 },
      { id: idArticulo++, codigo: "01 58 14", nombre: "ESM. P/PISO GRUPO 2 - 4 L. (CEDRO)", precio: 18967.15 },
      { id: idArticulo++, codigo: "01 58 17", nombre: "ESM. P/PISO GRUPO 2 - 20 L. (CEDRO)", precio: 94235.42 },
      { id: idArticulo++, codigo: "01 60* 14 01", nombre: "CCL. PAVIMENTO BL 4 L. (BLANCA)", precio: 28104.77 },
      { id: idArticulo++, codigo: "01 60* 14 02", nombre: "CCL. PAVIMENTO AM 4 L. (AMARILLA)", precio: 37103.16 },
      { id: idArticulo++, codigo: "01 60* 17 01", nombre: "CCL. PAVIMENTO BL 20 L. (BLANCA)", precio: 135584.22 },
      { id: idArticulo++, codigo: "01 60* 17 02", nombre: "CCL. PAVIMENTO AM 20 L. (AMARILLA)", precio: 178926.63 },
      { id: idArticulo++, codigo: "01 61* 14 01", nombre: "LAT PAVIMENTO AL AGUA BL 4 L. (BLANCA)", precio: 22016.72 },
      { id: idArticulo++, codigo: "01 61* 14 02", nombre: "LAT PAVIMENTO AL AGUA AM 4 L. (AMARILLA)", precio: 22016.72 },
      { id: idArticulo++, codigo: "01 61* 16 01", nombre: "LAT PAVIMENTO AL AGUA BL 10 L. (BLANCA)", precio: 52383.08 },
      { id: idArticulo++, codigo: "01 61* 16 02", nombre: "LAT PAVIMENTO AL AGUA AM 10 L. (AMARILLA)", precio: 52383.08 },
      { id: idArticulo++, codigo: "01 61* 17 01", nombre: "LAT PAVIMENTO AL AGUA BL 20 L. (BLANCA)", precio: 100404.67 },
      { id: idArticulo++, codigo: "01 61* 17 02", nombre: "LAT PAVIMENTO AL AGUA AM 20 L. (AMARILLA)", precio: 100404.67 },
      { id: idArticulo++, codigo: "01 62* 14 01", nombre: "CCL. PILETA CELESTE 4 L. (CELESTE)", precio: 24458.75 },
      { id: idArticulo++, codigo: "01 62* 14 02", nombre: "CCL. PILETA BLANCA 4 L. (BLANCA)", precio: 24458.75 },
      { id: idArticulo++, codigo: "01 62* 17 01", nombre: "CCL. PILETA CELESTE 20 L. (CELESTE)", precio: 115971.39 },
      { id: idArticulo++, codigo: "01 62* 17 02", nombre: "CCL. PILETA BLANCA 20 L. (BLANCA)", precio: 115971.39 },
      { id: idArticulo++, codigo: "01 63* 03 01", nombre: "LATEX CANCHA OXIDO 1 L. (OXIDO)", precio: 5994.9 },
      { id: idArticulo++, codigo: "01 63* 03 02", nombre: "LATEX CANCHA JADE 1 L. (JADE)", precio: 5994.9 },
      { id: idArticulo++, codigo: "01 63* 03 03", nombre: "LATEX CANCHA ZAFIRO 1 L. (ZAFIRO)", precio: 5994.9 },
      { id: idArticulo++, codigo: "01 63* 04 01", nombre: "LATEX CANCHA OXIDO 4 L. (OXIDO)", precio: 20015.21 },
      { id: idArticulo++, codigo: "01 63* 04 02", nombre: "LATEX CANCHA JADE 4 L. (JADE)", precio: 20015.21 },
      { id: idArticulo++, codigo: "01 63* 04 03", nombre: "LATEX CANCHA ZAFIRO 4 L. (ZAFIRO)", precio: 20015.21 },
      { id: idArticulo++, codigo: "01 63* 06 01", nombre: "LATEX CANCHA OXIDO 10 L. (OXIDO)", precio: 47621.18 },
      { id: idArticulo++, codigo: "01 63* 06 02", nombre: "LATEX CANCHA JADE 10 L. (JADE)", precio: 47621.18 },
      { id: idArticulo++, codigo: "01 63* 06 03", nombre: "LATEX CANCHA ZAFIRO 10 L. (ZAFIRO)", precio: 47621.18 },
      { id: idArticulo++, codigo: "01 64 4 01", nombre: "PILETA AL AGUA 4 L. (CELESTE)", precio: 21360.4 },
      { id: idArticulo++, codigo: "01 64 4 02", nombre: "PILETA AL AGUA 4 L. (BLANCO)", precio: 21360.4 },
      { id: idArticulo++, codigo: "01 64 6 01", nombre: "PILETA AL AGUA 10 L. (CELESTE)", precio: 50675.67 },
      { id: idArticulo++, codigo: "01 64 6 02", nombre: "PILETA AL AGUA 10 L. (BLANCO)", precio: 50675.67 },
      { id: idArticulo++, codigo: "01 64 7 01", nombre: "PILETA AL AGUA 20 L. (CELESTE)", precio: 99831.08 },
      { id: idArticulo++, codigo: "01 64 7 02", nombre: "PILETA AL AGUA 20 L. (BLANCO)", precio: 99831.08 }
    ],
    linea_madera: [
      { id: idArticulo++, codigo: "01 30 1", nombre: "BARNIZ INT./EXT 1/4 L.", precio: 1973.22 },
      { id: idArticulo++, codigo: "01 30 2", nombre: "BARNIZ INT./EXT 1/2 L.", precio: 2911 },
      { id: idArticulo++, codigo: "01 30 3", nombre: "BARNIZ INT./EXT 1 L.", precio: 4983.72 },
      { id: idArticulo++, codigo: "01 30 4", nombre: "BARNIZ INT./EXT 4 L.", precio: 16134.77 },
      { id: idArticulo++, codigo: "01 30 7", nombre: "BARNIZ INT./EXT 20 L.", precio: 73813.14 },
      { id: idArticulo++, codigo: "01 30 8", nombre: "BARNIZ INT./EXT 200 L.", precio: 721448.67 },
      { id: idArticulo++, codigo: "01 31 1", nombre: "BARNIZ MARINO 1/4 L.", precio: 2132.03 },
      { id: idArticulo++, codigo: "01 31 2", nombre: "BARNIZ MARINO 1/2 L.", precio: 3249.27 },
      { id: idArticulo++, codigo: "01 31 3", nombre: "BARNIZ MARINO 1 L.", precio: 5635.04 },
      { id: idArticulo++, codigo: "01 31 4", nombre: "BARNIZ MARINO 4 L.", precio: 18579.45 },
      { id: idArticulo++, codigo: "01 31 7", nombre: "BARNIZ MARINO 20 L.", precio: 86094.49 },
      { id: idArticulo++, codigo: "01 34* 2 01", nombre: "IMP. LASUR 1/2 L. CEDRO (CEDRO)", precio: 3834.37 },
      { id: idArticulo++, codigo: "01 34* 2 02", nombre: "IMP LASUR NATURAL 1/2 L (NATURAL)", precio: 3834.37 },
      { id: idArticulo++, codigo: "01 34* 2 03", nombre: "IMP. LASUR 1/2 L. CRISTAL (CRISTAL)", precio: 3834.37 },
      { id: idArticulo++, codigo: "01 34* 2 04", nombre: "IMP. LASUR CAOBA 1/2 L. (CAOBA)", precio: 3834.37 },
      { id: idArticulo++, codigo: "01 34* 2 05", nombre: "IMP. LASUR 1/2 L. NOGAL (NOGAL)", precio: 3834.37 },
      { id: idArticulo++, codigo: "01 34* 2 06", nombre: "IMP LASUR ALGARROBO 1/2 L (ALGARROBO)", precio: 3834.37 },
      { id: idArticulo++, codigo: "01 34* 3 01", nombre: "IMP. LASUR CEDRO 1 L. (CEDRO)", precio: 6562.63 },
      { id: idArticulo++, codigo: "01 34* 3 02", nombre: "IMP. LASUR NATUR 1 L. (NATURAL)", precio: 6562.63 },
      { id: idArticulo++, codigo: "01 34* 3 03", nombre: "IMP. LASUR CRIST 1 L. (CRISTAL)", precio: 6562.63 },
      { id: idArticulo++, codigo: "01 34* 3 04", nombre: "IMP. LASUR CAOBA 1 L. (CAOBA)", precio: 6562.63 },
      { id: idArticulo++, codigo: "01 34* 3 05", nombre: "IMP. LASUR NOGAL 1 L. (NOGAL)", precio: 6562.63 },
      { id: idArticulo++, codigo: "01 34* 3 06", nombre: "IMP. LASUR ALGAR 1 L. (ALGARROBO)", precio: 6562.63 },
      { id: idArticulo++, codigo: "01 34* 4 01", nombre: "IMP. LASUR CEDRO 4 L. (CEDRO)", precio: 22893.53 },
      { id: idArticulo++, codigo: "01 34* 4 02", nombre: "IMP. LASUR NATUR 4 L. (NATURAL)", precio: 22893.53 },
      { id: idArticulo++, codigo: "01 34* 4 03", nombre: "IMP. LASUR CRIST 4 L. (CRISTAL)", precio: 22893.53 },
      { id: idArticulo++, codigo: "01 34* 4 04", nombre: "IMP. LASUR CAOBA 4 L. (CAOBA)", precio: 22893.53 },
      { id: idArticulo++, codigo: "01 34* 4 05", nombre: "IMP. LASUR NOGAL 4 L. (NOGAL)", precio: 22893.53 },
      { id: idArticulo++, codigo: "01 34* 4 06", nombre: "IMP. LASUR ALGAR 4 L. (ALGARROBO)", precio: 22893.53 },
      { id: idArticulo++, codigo: "01 34* 7 01", nombre: "IMP. LASUR CEDRO 20 L. (CEDRO)", precio: 108646.92 },
      { id: idArticulo++, codigo: "01 34* 7 02", nombre: "IMP. LASUR NATUR 20 L. (NATURAL)", precio: 108646.92 },
      { id: idArticulo++, codigo: "01 34* 7 03", nombre: "IMP. LASUR CRIST 20 L. (CRISTAL)", precio: 108646.92 },
      { id: idArticulo++, codigo: "01 34* 7 04", nombre: "IMP. LASUR CAOBA 20 L. (CAOBA)", precio: 108646.92 },
      { id: idArticulo++, codigo: "01 34* 7 05", nombre: "IMP. LASUR NOGAL 20 L. (NOGAL)", precio: 108646.92 },
      { id: idArticulo++, codigo: "01 34* 7 06", nombre: "IMP. LASUR ALGAR 20 L. (ALGARROBO)", precio: 108646.92 },
      { id: idArticulo++, codigo: "01 35 3", nombre: "SELLADOR PARA MADERA 1 L.", precio: 11016.02 },
      { id: idArticulo++, codigo: "01 35 4", nombre: "SELLADOR PARA MADERA 4 L.", precio: 36600.43 },
      { id: idArticulo++, codigo: "01 35 7", nombre: "SELLADOR PARA MADERA 20 L.", precio: 173712.19 },
      { id: idArticulo++, codigo: "01 35 8", nombre: "SELLADOR PARA MADERA 200 L.", precio: 159467975e-2 },
      { id: idArticulo++, codigo: "01 36 12", nombre: "LASUR BRILLANTE CEDRO X 1/2", precio: 4931.39 },
      { id: idArticulo++, codigo: "01 36 13", nombre: "LASUR BRILLANTE CEDRO 1 L", precio: 8439.85 },
      { id: idArticulo++, codigo: "01 36 14", nombre: "LASUR BRILLANTE CEDRO 4 L", precio: 29442.82 },
      { id: idArticulo++, codigo: "01 36 42", nombre: "LASUR BRILLANTE CAOBA X 1/2", precio: 4931.39 },
      { id: idArticulo++, codigo: "01 36 43", nombre: "LASUR BRILLANTE CAOBA X 1", precio: 8439.85 },
      { id: idArticulo++, codigo: "01 36 44", nombre: "LASUR BRILLANTE CAOBA X 4", precio: 29442.82 },
      { id: idArticulo++, codigo: "01 36 62", nombre: "LASUR BRILLANTE ALGARROBO 1/2", precio: 4931.39 },
      { id: idArticulo++, codigo: "01 36 63", nombre: "LASUR BRILLANTE ALGARROBO 1", precio: 8439.85 },
      { id: idArticulo++, codigo: "01 36 64", nombre: "LASUR BRILLANTE ALGARROBO 4", precio: 29442.82 },
      { id: idArticulo++, codigo: "01 37 3", nombre: "LACA POLIURET .1 COMP. 1 L.", precio: 10558.91 },
      { id: idArticulo++, codigo: "01 37 4", nombre: "LACA POLIURET .1 COMP. 4 L.", precio: 38986.13 },
      { id: idArticulo++, codigo: "01 39 4", nombre: "PINTURA RURAL 4 L. (BLANCA)", precio: 23397.02 },
      { id: idArticulo++, codigo: "01 39 20", nombre: "PINTURA RURAL 20 L. (BLANCA)", precio: 111863.89 },
      { id: idArticulo++, codigo: "01 40 511", nombre: "FDO. BLANCO P/MADERA 1/4 L.", precio: 2122.96 },
      { id: idArticulo++, codigo: "01 40 512", nombre: "FDO. BLANCO P/MADERA 1/2 L.", precio: 3369.09 },
      { id: idArticulo++, codigo: "01 40 513", nombre: "FDO. BLANCO P/MADERA 1 L.", precio: 5860.67 },
      { id: idArticulo++, codigo: "01 40 514", nombre: "FDO. BLANCO P/MADERA 4 L.", precio: 19936.38 },
      { id: idArticulo++, codigo: "01 40 517", nombre: "FDO. BLANCO P/MADERA 20 L.", precio: 93312.67 }
    ],
    antioxidos_convertidores: [
      { id: idArticulo++, codigo: "01 41 151", nombre: "FDO. ANTIOXIDO 1/4 L.", precio: 1938.27 },
      { id: idArticulo++, codigo: "01 41 152", nombre: "FDO. ANTIOXIDO 1/2 L.", precio: 2953.09 },
      { id: idArticulo++, codigo: "01 41 153", nombre: "FDO. ANTIOXIDO 1 L.", precio: 4891.87 },
      { id: idArticulo++, codigo: "01 41 154", nombre: "FDO. ANTIOXIDO 4 L.", precio: 15875.06 },
      { id: idArticulo++, codigo: "01 41 157", nombre: "FDO. ANTIOXIDO 20 L.", precio: 72499.27 },
      { id: idArticulo++, codigo: "01 42* 131 01", nombre: "FONDO ANTIOXIDO VERDE 1/4 L. (VERDE)", precio: 1984.96 },
      { id: idArticulo++, codigo: "01 42* 131 03", nombre: "FONDO ANTIOXIDO NEGRO 1/4 L. (NEGRO)", precio: 1984.96 },
      { id: idArticulo++, codigo: "01 42* 131 05", nombre: "FONDO ANTIOXIDO GRIS 1/4 L. (GRIS)", precio: 1984.96 },
      { id: idArticulo++, codigo: "01 42* 132 01", nombre: "FONDO ANTIOXIDO VERDE 1/2 L. (VERDE)", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 42* 132 03", nombre: "FONDO ANTIOXIDO NEGRO 1/2 L. (NEGRO)", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 42* 132 05", nombre: "FONDO ANTIOXIDO GRIS 1/2 L. (GRIS)", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 42* 133 01", nombre: "FONDO ANTIOXIDO VERDE 1 L. (VERDE)", precio: 5076.12 },
      { id: idArticulo++, codigo: "01 42* 133 03", nombre: "FONDO ANTIOXIDO NEGRO 1 L. (NEGRO)", precio: 5076.12 },
      { id: idArticulo++, codigo: "01 42* 133 05", nombre: "FONDO ANTIOXIDO GRIS 1 L. (GRIS)", precio: 5076.12 },
      { id: idArticulo++, codigo: "01 42* 154 01", nombre: "FONDO ANTIOXIDO VERDE 4 L. (VERDE)", precio: 16474.98 },
      { id: idArticulo++, codigo: "01 42* 154 03", nombre: "FONDO ANTIOXIDO NEGRO 4 L. (NEGRO)", precio: 16474.98 },
      { id: idArticulo++, codigo: "01 42* 154 05", nombre: "FONDO ANTIOXIDO GRIS 4 L. (GRIS)", precio: 16474.98 },
      { id: idArticulo++, codigo: "01 42* 157 01", nombre: "FONDO ANTIOXIDO VERDE 20 L. (VERDE)", precio: 77345.3 },
      { id: idArticulo++, codigo: "01 42* 157 03", nombre: "FONDO ANTIOXIDO NEGRO 20 L. (NEGRO)", precio: 77345.3 },
      { id: idArticulo++, codigo: "01 42* 157 05", nombre: "FONDO ANTIOXIDO GRIS 20 L. (GRIS)", precio: 77345.3 },
      { id: idArticulo++, codigo: "01 42* 157 06", nombre: "FONDO ANTIOXIDO COLOR 20 L. (NO STD)", precio: 77345.3 },
      { id: idArticulo++, codigo: "01 42* 131 11", nombre: "FONDO ANTIOXIDO BLANCO 1/4 L. (BLANCO)", precio: 1984.96 },
      { id: idArticulo++, codigo: "01 42* 132 11", nombre: "FONDO ANTIOXIDO BLANCO 1/2 L. (BLANCO)", precio: 3230.26 },
      { id: idArticulo++, codigo: "01 42* 133 11", nombre: "FONDO ANTIOXIDO BLANCO 1 L. (BLANCO)", precio: 5076.12 },
      { id: idArticulo++, codigo: "01 42* 154 11", nombre: "FONDO ANTIOXIDO BLANCO 4 L. (BLANCO)", precio: 16474.98 },
      { id: idArticulo++, codigo: "01 42* 157 11", nombre: "FONDO ANTIOXIDO BLANCO 20 L. (BLANCO)", precio: 77345.3 },
      { id: idArticulo++, codigo: "01 43 21", nombre: "FDO. ANTIOXIDO ALUMINIO 1/4 L.", precio: 2492.17 },
      { id: idArticulo++, codigo: "01 43 22", nombre: "FDO. ANTIOXIDO ALUMINIO 1/2 L.", precio: 4014.66 },
      { id: idArticulo++, codigo: "01 43 23", nombre: "FDO. ANTIOXIDO ALUMINIO 1 L.", precio: 7244.79 },
      { id: idArticulo++, codigo: "01 43 24", nombre: "FDO. ANTIOXIDO ALUMINIO 4 L.", precio: 25058.93 },
      { id: idArticulo++, codigo: "01 43 27", nombre: "FDO. ANTIOXIDO ALUMINIO 20 L.", precio: 117263.64 },
      { id: idArticulo++, codigo: "01 47* 151 01", nombre: "FDO. CONV. ESTAB. 1/4 L. (COLORADO)", precio: 2584.79 },
      { id: idArticulo++, codigo: "01 47* 151 02", nombre: "FDO. CONV. ESTAB. 1/4 L. (BLANCO)", precio: 3184.8 },
      { id: idArticulo++, codigo: "01 47* 151 03", nombre: "FDO. CONV. ESTAB. 1/4 L. (NEGRO)", precio: 3184.8 },
      { id: idArticulo++, codigo: "01 47* 152 01", nombre: "FDO. CONV. ESTAB. 1/2 L. (COLORADO)", precio: 4246.24 },
      { id: idArticulo++, codigo: "01 47* 152 02", nombre: "FDO. CONV. ESTAB. 1/2 L. (BLANCO)", precio: 5122.21 },
      { id: idArticulo++, codigo: "01 47* 152 03", nombre: "FDO. CONV. ESTAB. 1/2 L. (NEGRO)", precio: 5122.21 },
      { id: idArticulo++, codigo: "01 47* 153 01", nombre: "FDO. CONV. ESTAB. 1 L. (COLORADO)", precio: 6830.17 },
      { id: idArticulo++, codigo: "01 47* 153 02", nombre: "FDO. CONV. ESTAB. 1 L. (BLANCO)", precio: 8399.19 },
      { id: idArticulo++, codigo: "01 47* 153 03", nombre: "FDO. CONV. ESTAB. 1 L. (NEGRO)", precio: 8399.19 },
      { id: idArticulo++, codigo: "01 47* 154 01", nombre: "FDO. CONV. ESTAB. 4 L. (COLORADO)", precio: 22658.7 },
      { id: idArticulo++, codigo: "01 47* 154 02", nombre: "FDO. CONV. ESTAB. 4 L. (BLANCO)", precio: 32303.97 },
      { id: idArticulo++, codigo: "01 47* 154 03", nombre: "FDO. CONV. ESTAB. 4 L. (NEGRO)", precio: 32303.97 },
      { id: idArticulo++, codigo: "01 47* 157 01", nombre: "FDO. CONV. ESTAB. 20 L. (COLORADO)", precio: 96173.64 },
      { id: idArticulo++, codigo: "01 47* 157 02", nombre: "FDO. CONV. ESTAB. 20 L. (BLANCO)", precio: 146383.34 },
      { id: idArticulo++, codigo: "01 47* 157 03", nombre: "FDO. CONV. ESTAB. 20 L. (NEGRO)", precio: 146383.34 },
      { id: idArticulo++, codigo: "01 48 4", nombre: "FDO. CONV. EST. ELECT. 4 L", precio: 21597.26 },
      { id: idArticulo++, codigo: "01 48 7", nombre: "FDO. CONV. EST. ELECT. 20 L.", precio: 93588.87 }
    ],
    _: [
      {
        id: idArticulo++,
        codigo: "01 21 178",
        nombre: "VARIOS 1",
        precio: 15
      },
      {
        id: idArticulo++,
        codigo: "01 21 179",
        nombre: "VARIOS 2",
        precio: 20
      }
    ]
  }
};

// src/app/components/orders/OrdersAddNav.tsx
init_Buffer();
var import_CloseIcon = __toESM(require_CloseIcon(), 1);
var import_FormatListCheckboxIcon = __toESM(require_FormatListCheckboxIcon(), 1);
var import_PlusIcon = __toESM(require_PlusIcon(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/components/orders/OrdersAddNav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/components/orders/OrdersAddNav.tsx"
  );
  import.meta.hot.lastModified = "1711992885815.4143";
}
var OrdersAddNav = (props) => {
  _s();
  const navigate = useNavigate();
  const {
    isDisabled,
    ...searchFieldProps
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Box, { bg: useColorModeValue("white", "blue.900"), sx: {
    px: 4,
    position: "sticky",
    zIndex: 1e3,
    top: 0
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HStack, { spacing: {
      base: 2,
      sm: 3
    }, alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResponsiveIconButton, { icon: import_PlusIcon.default, text: "Crear", sharedProps: {
        size: "sm",
        fontWeight: "400",
        colorScheme: "green",
        type: "submit",
        isDisabled
      }, iconProps: {
        boxSize: {
          base: 5,
          md: 4
        }
      } }, void 0, false, {
        fileName: "src/app/components/orders/OrdersAddNav.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResponsiveIconButton, { icon: import_CloseIcon.default, text: "Cancelar", sharedProps: {
        size: "sm",
        fontWeight: "400",
        colorScheme: "red",
        isDisabled,
        onClick: () => {
          navigate(URL_PEDIDOS_PATH);
        }
      }, iconProps: {
        boxSize: {
          base: 5,
          md: 4
        }
      } }, void 0, false, {
        fileName: "src/app/components/orders/OrdersAddNav.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ResponsiveIconButton, { icon: import_FormatListCheckboxIcon.default, text: "Ver resumen", sharedProps: {
        size: "sm",
        fontWeight: "400",
        colorScheme: "blue",
        isDisabled
      }, iconProps: {
        boxSize: {
          base: 5,
          md: 4
        }
      } }, void 0, false, {
        fileName: "src/app/components/orders/OrdersAddNav.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/components/orders/OrdersAddNav.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { alignItems: "center", sx: {
      ms: {
        base: 2,
        sm: 3
      }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SearchField, { ...searchFieldProps }, void 0, false, {
      fileName: "src/app/components/orders/OrdersAddNav.tsx",
      lineNumber: 93,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/components/orders/OrdersAddNav.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/components/orders/OrdersAddNav.tsx",
    lineNumber: 44,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/components/orders/OrdersAddNav.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/components/orders/OrdersAddNav.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_s(OrdersAddNav, "/rJ0qZ4qphBlgl7Lu1PqK3aPn+8=", false, function() {
  return [useNavigate, useColorModeValue];
});
_c2 = OrdersAddNav;
var _c2;
$RefreshReg$(_c2, "OrdersAddNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders.$client.add/validation.ts
init_Buffer();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders.$client.add/validation.ts"
  );
  import.meta.hot.lastModified = "1711495766952.7651";
}
var yupValidationSchema = create$3({
  alta: create$6().required("Ingrese fecha de Alta"),
  entrega: create$6().required(""),
  condicion_venta: create$5().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido"),
  tipo_de_asiento: create$5().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido"),
  transporte: create$5().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido"),
  talonario: create$5().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido"),
  deposito: create$5().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido"),
  bonificacion: create$6(),
  comentarios: create$6(),
  quantities: create$3().required()
}).required();

// src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx
init_Buffer();
var import_lodash = __toESM(require_lodash(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx"
  );
  import.meta.hot.lastModified = "1711935401951.7898";
}
var calculateTotals = (quantities, prices, discount) => {
  let total = 0;
  import_lodash.default.forOwn(quantities, (quantity, id) => {
    total += quantity * prices[id];
  });
  return total - total * discount / 100;
};
var OrderInfo = (props) => {
  _s2();
  const {
    cabecera,
    auxData,
    disableForm,
    prices
  } = props;
  const {
    control,
    formState: {
      isSubmitted,
      isSubmitting
    }
  } = useFormContext();
  const quantitiesWatch = useWatch({
    control,
    name: `quantities`
  });
  const total = calculateTotals(quantitiesWatch, prices, cabecera.bonificacion);
  const transporteOptions = buildSelectOptions({
    data: auxData.transportes,
    fieldsMap: {
      label: "nombre",
      value: "id"
    }
  });
  const condicionVentaOptions = buildSelectOptions({
    data: auxData.condiciones
  });
  const tipoAsientoOptions = buildSelectOptions({
    data: auxData.asientos,
    fieldsMap: {
      value: "tipo"
    }
  });
  const talonarioOptions = buildSelectOptions({
    data: auxData.talonarios
  });
  const depositoOptions = buildSelectOptions({
    data: auxData.depositos
  });
  const {
    isOpen,
    onToggle
  } = useDisclosure({
    defaultIsOpen: true
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CommonCard, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, alignItems: "center", gap: 4, onClick: onToggle, cursor: "pointer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Heading, { size: "xs", children: "Cliente:" }, void 0, false, {
          fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Heading, { size: "md", textTransform: "uppercase", sx: {
          mt: 1
        }, children: cabecera.cliente }, void 0, false, {
          fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
          lineNumber: 105,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { textAlign: {
        md: "end"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Heading, { textTransform: "uppercase", size: "xs", children: [
          "Total (Sin IVA) - Bonif. ",
          cabecera.bonificacion,
          "%"
        ] }, void 0, true, {
          fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TextPrice, { precio: total ?? 0, moneda: "$", textProps: {
          fontSize: "2xl",
          color: "green.400",
          fontWeight: "bolder",
          sx: {
            mt: 1
          }
        } }, void 0, false, {
          fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
          lineNumber: 117,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
      lineNumber: 99,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Collapse, { in: isOpen, animateOpacity: true, style: {
      overflow: "inherit"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Grid, { templateColumns: {
      base: "1fr",
      md: "repeat(2,1fr)"
    }, alignItems: "center", gap: 4, sx: {
      mt: 4
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledInput, { fieldProps: {
        name: "alta",
        id: "alta",
        type: "text"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Alta"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 137,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 136,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledSelect, { fieldProps: {
        name: "condicion_venta",
        id: "condicion_venta",
        placeholder: "Seleccione una condici\xF3n",
        options: condicionVentaOptions,
        noOptionsMessage(obj) {
          return "No hay condiciones disponibles";
        },
        selectedOptionStyle: "check"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Condici\xF3n de venta"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 148,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 147,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledInput, { fieldProps: {
        name: "entrega",
        id: "entrega",
        type: "text"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Entrega"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 164,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 163,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledSelect, { fieldProps: {
        name: "tipo_de_asiento",
        id: "tipo_de_asiento",
        placeholder: "Seleccione un tipo de asiento",
        options: tipoAsientoOptions,
        noOptionsMessage(obj) {
          return "No hay tipos disponibles";
        },
        selectedOptionStyle: "check"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Tipo de asiento"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 175,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 174,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledSelect, { fieldProps: {
        name: "transporte",
        id: "transporte",
        placeholder: "Seleccione un transporte",
        options: transporteOptions,
        noOptionsMessage(obj) {
          return "No hay transportes disponibles";
        },
        selectedOptionStyle: "check"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Transporte"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 191,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 190,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledSelect, { fieldProps: {
        name: "talonario",
        id: "talonario",
        placeholder: "Seleccione un talonario",
        options: talonarioOptions,
        noOptionsMessage(obj) {
          return "No hay talonarios disponibles";
        },
        selectedOptionStyle: "check"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Talonario"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 207,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 206,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledSelect, { fieldProps: {
        name: "deposito",
        id: "deposito",
        placeholder: "Seleccione un dep\xF3sito",
        options: depositoOptions,
        noOptionsMessage(obj) {
          return "No hay dep\xF3sitos disponibles";
        },
        selectedOptionStyle: "check"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Dep\xF3sito"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 223,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 222,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledInput, { fieldProps: {
        name: "bonificacion",
        id: "bonificacion",
        type: "text",
        htmlSize: 5,
        width: "auto",
        isReadOnly: true
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Bonificaci\xF3n"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 239,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 238,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(GridItem, { colSpan: {
        md: 2
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ControlledTextarea, { fieldProps: {
        name: "comentarios",
        id: "comentarios"
      }, formControlProps: {
        isDisabled: disableForm
      }, formControlInnerProps: {
        label: "Comentario"
      }, control }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 255,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
        lineNumber: 252,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
      lineNumber: 130,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
      lineNumber: 127,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
    lineNumber: 98,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
    lineNumber: 97,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
};
_s2(OrderInfo, "X810r5cAi1hi3ytY7nh/rMV+lZc=", false, function() {
  return [useFormContext, useWatch, useDisclosure];
});
_c3 = OrderInfo;
var _c3;
$RefreshReg$(_c3, "OrderInfo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx
init_Buffer();
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);

// node_modules/.pnpm/@use-gesture+react@10.3.1_react@18.2.0/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js
init_Buffer();

// node_modules/.pnpm/@use-gesture+core@10.3.1/node_modules/@use-gesture/core/actions/dist/use-gesture-core-actions.esm.js
init_Buffer();

// node_modules/.pnpm/@use-gesture+core@10.3.1/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js
init_Buffer();

// node_modules/.pnpm/@use-gesture+core@10.3.1/node_modules/@use-gesture/core/dist/maths-0ab39ae9.esm.js
init_Buffer();
function clamp(v, min, max) {
  return Math.max(min, Math.min(v, max));
}
var V = {
  toVector(v, fallback) {
    if (v === void 0)
      v = fallback;
    return Array.isArray(v) ? v : [v, v];
  },
  add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
  },
  sub(v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1]];
  },
  addTo(v1, v2) {
    v1[0] += v2[0];
    v1[1] += v2[1];
  },
  subTo(v1, v2) {
    v1[0] -= v2[0];
    v1[1] -= v2[1];
  }
};
function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity)
    return Math.pow(distance, constant * 5);
  return distance * dimension * constant / (dimension + constant * distance);
}
function rubberbandIfOutOfBounds(position, min, max, constant = 0.15) {
  if (constant === 0)
    return clamp(position, min, max);
  if (position < min)
    return -rubberband(min - position, max - min, constant) + min;
  if (position > max)
    return +rubberband(position - max, max - min, constant) + max;
  return position;
}
function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
  const [[X0, X1], [Y0, Y1]] = bounds;
  return [rubberbandIfOutOfBounds(Vx, X0, X1, Rx), rubberbandIfOutOfBounds(Vy, Y0, Y1, Ry)];
}

// node_modules/.pnpm/@use-gesture+core@10.3.1/node_modules/@use-gesture/core/dist/actions-fe213e88.esm.js
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e);
    r && (o2 = o2.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o2);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var EVENT_TYPE_MAP = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function capitalize(string) {
  if (!string)
    return "";
  return string[0].toUpperCase() + string.slice(1);
}
var actionsWithoutCaptureSupported = ["enter", "leave"];
function hasCapture(capture = false, actionKey) {
  return capture && !actionsWithoutCaptureSupported.includes(actionKey);
}
function toHandlerProp(device, action = "", capture = false) {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return "on" + capitalize(device) + capitalize(actionKey) + (hasCapture(capture, actionKey) ? "Capture" : "");
}
var pointerCaptureEvents = ["gotpointercapture", "lostpointercapture"];
function parseProp(prop) {
  let eventKey = prop.substring(2).toLowerCase();
  const passive = !!~eventKey.indexOf("passive");
  if (passive)
    eventKey = eventKey.replace("passive", "");
  const captureKey = pointerCaptureEvents.includes(eventKey) ? "capturecapture" : "capture";
  const capture = !!~eventKey.indexOf(captureKey);
  if (capture)
    eventKey = eventKey.replace("capture", "");
  return {
    device: eventKey,
    capture,
    passive
  };
}
function toDomEventType(device, action = "") {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return device + actionKey;
}
function isTouch(event) {
  return "touches" in event;
}
function getPointerType(event) {
  if (isTouch(event))
    return "touch";
  if ("pointerType" in event)
    return event.pointerType;
  return "mouse";
}
function getCurrentTargetTouchList(event) {
  return Array.from(event.touches).filter((e) => {
    var _event$currentTarget, _event$currentTarget$;
    return e.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e.target));
  });
}
function touchIds(event) {
  return getCurrentTargetTouchList(event).map((touch) => touch.identifier);
}
function scrollValues(event) {
  var _ref, _ref2;
  const {
    scrollX,
    scrollY,
    scrollLeft,
    scrollTop
  } = event.currentTarget;
  return [(_ref = scrollX !== null && scrollX !== void 0 ? scrollX : scrollLeft) !== null && _ref !== void 0 ? _ref : 0, (_ref2 = scrollY !== null && scrollY !== void 0 ? scrollY : scrollTop) !== null && _ref2 !== void 0 ? _ref2 : 0];
}
function getEventDetails(event) {
  const payload = {};
  if ("buttons" in event)
    payload.buttons = event.buttons;
  if ("shiftKey" in event) {
    const {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    } = event;
    Object.assign(payload, {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    });
  }
  return payload;
}
function call(v, ...args) {
  if (typeof v === "function") {
    return v(...args);
  } else {
    return v;
  }
}
function noop() {
}
function chain(...fns) {
  if (fns.length === 0)
    return noop;
  if (fns.length === 1)
    return fns[0];
  return function() {
    let result;
    for (const fn of fns) {
      result = fn.apply(this, arguments) || result;
    }
    return result;
  };
}
function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {});
}
var BEFORE_LAST_KINEMATICS_DELAY = 32;
var Engine = class {
  constructor(ctrl, args, key) {
    this.ctrl = ctrl;
    this.args = args;
    this.key = key;
    if (!this.state) {
      this.state = {};
      this.computeValues([0, 0]);
      this.computeInitial();
      if (this.init)
        this.init();
      this.reset();
    }
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(state) {
    this.ctrl.state[this.key] = state;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state,
      shared,
      ingKey,
      args
    } = this;
    shared[ingKey] = state._active = state.active = state._blocked = state._force = false;
    state._step = [false, false];
    state.intentional = false;
    state._movement = [0, 0];
    state._distance = [0, 0];
    state._direction = [0, 0];
    state._delta = [0, 0];
    state._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]];
    state.args = args;
    state.axis = void 0;
    state.memo = void 0;
    state.elapsedTime = state.timeDelta = 0;
    state.direction = [0, 0];
    state.distance = [0, 0];
    state.overflow = [0, 0];
    state._movementBound = [false, false];
    state.velocity = [0, 0];
    state.movement = [0, 0];
    state.delta = [0, 0];
    state.timeStamp = 0;
  }
  start(event) {
    const state = this.state;
    const config = this.config;
    if (!state._active) {
      this.reset();
      this.computeInitial();
      state._active = true;
      state.target = event.target;
      state.currentTarget = event.currentTarget;
      state.lastOffset = config.from ? call(config.from, state) : state.offset;
      state.offset = state.lastOffset;
      state.startTime = state.timeStamp = event.timeStamp;
    }
  }
  computeValues(values) {
    const state = this.state;
    state._values = values;
    state.values = this.config.transform(values);
  }
  computeInitial() {
    const state = this.state;
    state._initial = state._values;
    state.initial = state.values;
  }
  compute(event) {
    const {
      state,
      config,
      shared
    } = this;
    state.args = this.args;
    let dt = 0;
    if (event) {
      state.event = event;
      if (config.preventDefault && event.cancelable)
        state.event.preventDefault();
      state.type = event.type;
      shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size;
      shared.locked = !!document.pointerLockElement;
      Object.assign(shared, getEventDetails(event));
      shared.down = shared.pressed = shared.buttons % 2 === 1 || shared.touches > 0;
      dt = event.timeStamp - state.timeStamp;
      state.timeStamp = event.timeStamp;
      state.elapsedTime = state.timeStamp - state.startTime;
    }
    if (state._active) {
      const _absoluteDelta = state._delta.map(Math.abs);
      V.addTo(state._distance, _absoluteDelta);
    }
    if (this.axisIntent)
      this.axisIntent(event);
    const [_m0, _m1] = state._movement;
    const [t0, t1] = config.threshold;
    const {
      _step,
      values
    } = state;
    if (config.hasCustomTransform) {
      if (_step[0] === false)
        _step[0] = Math.abs(_m0) >= t0 && values[0];
      if (_step[1] === false)
        _step[1] = Math.abs(_m1) >= t1 && values[1];
    } else {
      if (_step[0] === false)
        _step[0] = Math.abs(_m0) >= t0 && Math.sign(_m0) * t0;
      if (_step[1] === false)
        _step[1] = Math.abs(_m1) >= t1 && Math.sign(_m1) * t1;
    }
    state.intentional = _step[0] !== false || _step[1] !== false;
    if (!state.intentional)
      return;
    const movement = [0, 0];
    if (config.hasCustomTransform) {
      const [v0, v1] = values;
      movement[0] = _step[0] !== false ? v0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? v1 - _step[1] : 0;
    } else {
      movement[0] = _step[0] !== false ? _m0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? _m1 - _step[1] : 0;
    }
    if (this.restrictToAxis && !state._blocked)
      this.restrictToAxis(movement);
    const previousOffset = state.offset;
    const gestureIsActive = state._active && !state._blocked || state.active;
    if (gestureIsActive) {
      state.first = state._active && !state.active;
      state.last = !state._active && state.active;
      state.active = shared[this.ingKey] = state._active;
      if (event) {
        if (state.first) {
          if ("bounds" in config)
            state._bounds = call(config.bounds, state);
          if (this.setup)
            this.setup();
        }
        state.movement = movement;
        this.computeOffset();
      }
    }
    const [ox, oy] = state.offset;
    const [[x0, x1], [y0, y1]] = state._bounds;
    state.overflow = [ox < x0 ? -1 : ox > x1 ? 1 : 0, oy < y0 ? -1 : oy > y1 ? 1 : 0];
    state._movementBound[0] = state.overflow[0] ? state._movementBound[0] === false ? state._movement[0] : state._movementBound[0] : false;
    state._movementBound[1] = state.overflow[1] ? state._movementBound[1] === false ? state._movement[1] : state._movementBound[1] : false;
    const rubberband2 = state._active ? config.rubberband || [0, 0] : [0, 0];
    state.offset = computeRubberband(state._bounds, state.offset, rubberband2);
    state.delta = V.sub(state.offset, previousOffset);
    this.computeMovement();
    if (gestureIsActive && (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY)) {
      state.delta = V.sub(state.offset, previousOffset);
      const absoluteDelta = state.delta.map(Math.abs);
      V.addTo(state.distance, absoluteDelta);
      state.direction = state.delta.map(Math.sign);
      state._direction = state._delta.map(Math.sign);
      if (!state.first && dt > 0) {
        state.velocity = [absoluteDelta[0] / dt, absoluteDelta[1] / dt];
        state.timeDelta = dt;
      }
    }
  }
  emit() {
    const state = this.state;
    const shared = this.shared;
    const config = this.config;
    if (!state._active)
      this.clean();
    if ((state._blocked || !state.intentional) && !state._force && !config.triggerAllEvents)
      return;
    const memo = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, shared), state), {}, {
      [this.aliasKey]: state.values
    }));
    if (memo !== void 0)
      state.memo = memo;
  }
  clean() {
    this.eventStore.clean();
    this.timeoutStore.clean();
  }
};
function selectAxis([dx, dy], threshold) {
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);
  if (absDx > absDy && absDx > threshold) {
    return "x";
  }
  if (absDy > absDx && absDy > threshold) {
    return "y";
  }
  return void 0;
}
var CoordinatesEngine = class extends Engine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "aliasKey", "xy");
  }
  reset() {
    super.reset();
    this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0];
    this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = V.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = V.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(event) {
    const state = this.state;
    const config = this.config;
    if (!state.axis && event) {
      const threshold = typeof config.axisThreshold === "object" ? config.axisThreshold[getPointerType(event)] : config.axisThreshold;
      state.axis = selectAxis(state._movement, threshold);
    }
    state._blocked = (config.lockDirection || !!config.axis) && !state.axis || !!config.axis && config.axis !== state.axis;
  }
  restrictToAxis(v) {
    if (this.config.axis || this.config.lockDirection) {
      switch (this.state.axis) {
        case "x":
          v[1] = 0;
          break;
        case "y":
          v[0] = 0;
          break;
      }
    }
  }
};
var identity = (v) => v;
var DEFAULT_RUBBERBAND = 0.15;
var commonConfigResolver = {
  enabled(value = true) {
    return value;
  },
  eventOptions(value, _k, config) {
    return _objectSpread2(_objectSpread2({}, config.shared.eventOptions), value);
  },
  preventDefault(value = false) {
    return value;
  },
  triggerAllEvents(value = false) {
    return value;
  },
  rubberband(value = 0) {
    switch (value) {
      case true:
        return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND];
      case false:
        return [0, 0];
      default:
        return V.toVector(value);
    }
  },
  from(value) {
    if (typeof value === "function")
      return value;
    if (value != null)
      return V.toVector(value);
  },
  transform(value, _k, config) {
    const transform = value || config.shared.transform;
    this.hasCustomTransform = !!transform;
    if (true) {
      const originalTransform = transform || identity;
      return (v) => {
        const r = originalTransform(v);
        if (!isFinite(r[0]) || !isFinite(r[1])) {
          console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${r[0]},${[1]}]`);
        }
        return r;
      };
    }
    return transform || identity;
  },
  threshold(value) {
    return V.toVector(value, 0);
  }
};
if (true) {
  Object.assign(commonConfigResolver, {
    domTarget(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
      }
      return NaN;
    },
    lockDirection(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`lockDirection\` option has been merged with \`axis\`. Use it as in \`{ axis: 'lock' }\``);
      }
      return NaN;
    },
    initial(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`initial\` option has been renamed to \`from\`.`);
      }
      return NaN;
    }
  });
}
var DEFAULT_AXIS_THRESHOLD = 0;
var coordinatesConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  axis(_v, _k, {
    axis
  }) {
    this.lockDirection = axis === "lock";
    if (!this.lockDirection)
      return axis;
  },
  axisThreshold(value = DEFAULT_AXIS_THRESHOLD) {
    return value;
  },
  bounds(value = {}) {
    if (typeof value === "function") {
      return (state) => coordinatesConfigResolver.bounds(value(state));
    }
    if ("current" in value) {
      return () => value.current;
    }
    if (typeof HTMLElement === "function" && value instanceof HTMLElement) {
      return value;
    }
    const {
      left = -Infinity,
      right = Infinity,
      top = -Infinity,
      bottom = Infinity
    } = value;
    return [[left, right], [top, bottom]];
  }
});
var isBrowser = typeof window !== "undefined" && window.document && window.document.createElement;
function supportsTouchEvents() {
  return isBrowser && "ontouchstart" in window;
}
function isTouchScreen() {
  return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
}
function supportsPointerEvents() {
  return isBrowser && "onpointerdown" in window;
}
function supportsPointerLock() {
  return isBrowser && "exitPointerLock" in window.document;
}
function supportsGestureEvents() {
  try {
    return "constructor" in GestureEvent;
  } catch (e) {
    return false;
  }
}
var SUPPORT = {
  isBrowser,
  gesture: supportsGestureEvents(),
  touch: supportsTouchEvents(),
  touchscreen: isTouchScreen(),
  pointer: supportsPointerEvents(),
  pointerLock: supportsPointerLock()
};
var DEFAULT_PREVENT_SCROLL_DELAY = 250;
var DEFAULT_DRAG_DELAY = 180;
var DEFAULT_SWIPE_VELOCITY = 0.5;
var DEFAULT_SWIPE_DISTANCE = 50;
var DEFAULT_SWIPE_DURATION = 250;
var DEFAULT_KEYBOARD_DISPLACEMENT = 10;
var DEFAULT_DRAG_AXIS_THRESHOLD = {
  mouse: 0,
  touch: 0,
  pen: 8
};
var dragConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  device(_v, _k, {
    pointer: {
      touch = false,
      lock = false,
      mouse = false
    } = {}
  }) {
    this.pointerLock = lock && SUPPORT.pointerLock;
    if (SUPPORT.touch && touch)
      return "touch";
    if (this.pointerLock)
      return "mouse";
    if (SUPPORT.pointer && !mouse)
      return "pointer";
    if (SUPPORT.touch)
      return "touch";
    return "mouse";
  },
  preventScrollAxis(value, _k, {
    preventScroll
  }) {
    this.preventScrollDelay = typeof preventScroll === "number" ? preventScroll : preventScroll || preventScroll === void 0 && value ? DEFAULT_PREVENT_SCROLL_DELAY : void 0;
    if (!SUPPORT.touchscreen || preventScroll === false)
      return void 0;
    return value ? value : preventScroll !== void 0 ? "y" : void 0;
  },
  pointerCapture(_v, _k, {
    pointer: {
      capture = true,
      buttons = 1,
      keys = true
    } = {}
  }) {
    this.pointerButtons = buttons;
    this.keys = keys;
    return !this.pointerLock && this.device === "pointer" && capture;
  },
  threshold(value, _k, {
    filterTaps = false,
    tapsThreshold = 3,
    axis = void 0
  }) {
    const threshold = V.toVector(value, filterTaps ? tapsThreshold : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    this.tapsThreshold = tapsThreshold;
    return threshold;
  },
  swipe({
    velocity = DEFAULT_SWIPE_VELOCITY,
    distance = DEFAULT_SWIPE_DISTANCE,
    duration = DEFAULT_SWIPE_DURATION
  } = {}) {
    return {
      velocity: this.transform(V.toVector(velocity)),
      distance: this.transform(V.toVector(distance)),
      duration
    };
  },
  delay(value = 0) {
    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;
      case false:
        return 0;
      default:
        return value;
    }
  },
  axisThreshold(value) {
    if (!value)
      return DEFAULT_DRAG_AXIS_THRESHOLD;
    return _objectSpread2(_objectSpread2({}, DEFAULT_DRAG_AXIS_THRESHOLD), value);
  },
  keyboardDisplacement(value = DEFAULT_KEYBOARD_DISPLACEMENT) {
    return value;
  }
});
if (true) {
  Object.assign(dragConfigResolver, {
    useTouch(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`useTouch\` option has been renamed to \`pointer.touch\`. Use it as in \`{ pointer: { touch: true } }\`.`);
      }
      return NaN;
    },
    experimental_preventWindowScrollY(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`experimental_preventWindowScrollY\` option has been renamed to \`preventScroll\`.`);
      }
      return NaN;
    },
    swipeVelocity(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeVelocity\` option has been renamed to \`swipe.velocity\`. Use it as in \`{ swipe: { velocity: 0.5 } }\`.`);
      }
      return NaN;
    },
    swipeDistance(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeDistance\` option has been renamed to \`swipe.distance\`. Use it as in \`{ swipe: { distance: 50 } }\`.`);
      }
      return NaN;
    },
    swipeDuration(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeDuration\` option has been renamed to \`swipe.duration\`. Use it as in \`{ swipe: { duration: 250 } }\`.`);
      }
      return NaN;
    }
  });
}
var pinchConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  device(_v, _k, {
    shared,
    pointer: {
      touch = false
    } = {}
  }) {
    const sharedConfig = shared;
    if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture)
      return "gesture";
    if (SUPPORT.touch && touch)
      return "touch";
    if (SUPPORT.touchscreen) {
      if (SUPPORT.pointer)
        return "pointer";
      if (SUPPORT.touch)
        return "touch";
    }
  },
  bounds(_v, _k, {
    scaleBounds = {},
    angleBounds = {}
  }) {
    const _scaleBounds = (state) => {
      const D = assignDefault(call(scaleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D.min, D.max];
    };
    const _angleBounds = (state) => {
      const A = assignDefault(call(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A.min, A.max];
    };
    if (typeof scaleBounds !== "function" && typeof angleBounds !== "function")
      return [_scaleBounds(), _angleBounds()];
    return (state) => [_scaleBounds(state), _angleBounds(state)];
  },
  threshold(value, _k, config) {
    this.lockDirection = config.axis === "lock";
    const threshold = V.toVector(value, this.lockDirection ? [0.1, 3] : 0);
    return threshold;
  },
  modifierKey(value) {
    if (value === void 0)
      return "ctrlKey";
    return value;
  },
  pinchOnWheel(value = true) {
    return value;
  }
});
var moveConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});
var ScrollEngine = class extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "scrolling");
  }
  scroll(event) {
    if (!this.state._active)
      this.start(event);
    this.scrollChange(event);
    this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(event) {
    if (event.cancelable)
      event.preventDefault();
    const state = this.state;
    const values = scrollValues(event);
    state._delta = V.sub(values, state._values);
    V.addTo(state._movement, state._delta);
    this.computeValues(values);
    this.compute(event);
    this.emit();
  }
  scrollEnd() {
    if (!this.state._active)
      return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("scroll", "", this.scroll.bind(this));
  }
};
var scrollConfigResolver = coordinatesConfigResolver;
var hoverConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});
var EngineMap = /* @__PURE__ */ new Map();
var ConfigResolverMap = /* @__PURE__ */ new Map();
function registerAction(action) {
  EngineMap.set(action.key, action.engine);
  ConfigResolverMap.set(action.key, action.resolver);
}
var scrollAction = {
  key: "scroll",
  engine: ScrollEngine,
  resolver: scrollConfigResolver
};

// node_modules/.pnpm/@use-gesture+react@10.3.1_react@18.2.0/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js
var import_react4 = __toESM(require_react());

// node_modules/.pnpm/@use-gesture+core@10.3.1/node_modules/@use-gesture/core/dist/use-gesture-core.esm.js
init_Buffer();
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
var sharedConfigResolver = {
  target(value) {
    if (value) {
      return () => "current" in value ? value.current : value;
    }
    return void 0;
  },
  enabled(value = true) {
    return value;
  },
  window(value = SUPPORT.isBrowser ? window : void 0) {
    return value;
  },
  eventOptions({
    passive = true,
    capture = false
  } = {}) {
    return {
      passive,
      capture
    };
  },
  transform(value) {
    return value;
  }
};
var _excluded = ["target", "eventOptions", "window", "enabled", "transform"];
function resolveWith(config = {}, resolvers) {
  const result = {};
  for (const [key, resolver] of Object.entries(resolvers)) {
    switch (typeof resolver) {
      case "function":
        if (true) {
          const r = resolver.call(result, config[key], key, config);
          if (!Number.isNaN(r))
            result[key] = r;
        } else {
          result[key] = resolver.call(result, config[key], key, config);
        }
        break;
      case "object":
        result[key] = resolveWith(config[key], resolver);
        break;
      case "boolean":
        if (resolver)
          result[key] = config[key];
        break;
    }
  }
  return result;
}
function parse(newConfig, gestureKey, _config = {}) {
  const _ref = newConfig, {
    target,
    eventOptions,
    window: window2,
    enabled,
    transform
  } = _ref, rest = _objectWithoutProperties(_ref, _excluded);
  _config.shared = resolveWith({
    target,
    eventOptions,
    window: window2,
    enabled,
    transform
  }, sharedConfigResolver);
  if (gestureKey) {
    const resolver = ConfigResolverMap.get(gestureKey);
    _config[gestureKey] = resolveWith(_objectSpread2({
      shared: _config.shared
    }, rest), resolver);
  } else {
    for (const key in rest) {
      const resolver = ConfigResolverMap.get(key);
      if (resolver) {
        _config[key] = resolveWith(_objectSpread2({
          shared: _config.shared
        }, rest[key]), resolver);
      } else if (true) {
        if (!["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(key)) {
          if (key === "domTarget") {
            throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
          }
          console.warn(`[@use-gesture]: Unknown config key \`${key}\` was used. Please read the documentation for further information.`);
        }
      }
    }
  }
  return _config;
}
var EventStore = class {
  constructor(ctrl, gestureKey) {
    _defineProperty(this, "_listeners", /* @__PURE__ */ new Set());
    this._ctrl = ctrl;
    this._gestureKey = gestureKey;
  }
  add(element, device, action, handler, options) {
    const listeners = this._listeners;
    const type = toDomEventType(device, action);
    const _options = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {};
    const eventOptions = _objectSpread2(_objectSpread2({}, _options), options);
    element.addEventListener(type, handler, eventOptions);
    const remove = () => {
      element.removeEventListener(type, handler, eventOptions);
      listeners.delete(remove);
    };
    listeners.add(remove);
    return remove;
  }
  clean() {
    this._listeners.forEach((remove) => remove());
    this._listeners.clear();
  }
};
var TimeoutStore = class {
  constructor() {
    _defineProperty(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(key, callback, ms = 140, ...args) {
    this.remove(key);
    this._timeouts.set(key, window.setTimeout(callback, ms, ...args));
  }
  remove(key) {
    const timeout = this._timeouts.get(key);
    if (timeout)
      window.clearTimeout(timeout);
  }
  clean() {
    this._timeouts.forEach((timeout) => void window.clearTimeout(timeout));
    this._timeouts.clear();
  }
};
var Controller = class {
  constructor(handlers) {
    _defineProperty(this, "gestures", /* @__PURE__ */ new Set());
    _defineProperty(this, "_targetEventStore", new EventStore(this));
    _defineProperty(this, "gestureEventStores", {});
    _defineProperty(this, "gestureTimeoutStores", {});
    _defineProperty(this, "handlers", {});
    _defineProperty(this, "config", {});
    _defineProperty(this, "pointerIds", /* @__PURE__ */ new Set());
    _defineProperty(this, "touchIds", /* @__PURE__ */ new Set());
    _defineProperty(this, "state", {
      shared: {
        shiftKey: false,
        metaKey: false,
        ctrlKey: false,
        altKey: false
      }
    });
    resolveGestures(this, handlers);
  }
  setEventIds(event) {
    if (isTouch(event)) {
      this.touchIds = new Set(touchIds(event));
      return this.touchIds;
    } else if ("pointerId" in event) {
      if (event.type === "pointerup" || event.type === "pointercancel")
        this.pointerIds.delete(event.pointerId);
      else if (event.type === "pointerdown")
        this.pointerIds.add(event.pointerId);
      return this.pointerIds;
    }
  }
  applyHandlers(handlers, nativeHandlers) {
    this.handlers = handlers;
    this.nativeHandlers = nativeHandlers;
  }
  applyConfig(config, gestureKey) {
    this.config = parse(config, gestureKey, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const key of this.gestures) {
      this.gestureEventStores[key].clean();
      this.gestureTimeoutStores[key].clean();
    }
  }
  effect() {
    if (this.config.shared.target)
      this.bind();
    return () => this._targetEventStore.clean();
  }
  bind(...args) {
    const sharedConfig = this.config.shared;
    const props = {};
    let target;
    if (sharedConfig.target) {
      target = sharedConfig.target();
      if (!target)
        return;
    }
    if (sharedConfig.enabled) {
      for (const gestureKey of this.gestures) {
        const gestureConfig = this.config[gestureKey];
        const bindFunction = bindToProps(props, gestureConfig.eventOptions, !!target);
        if (gestureConfig.enabled) {
          const Engine2 = EngineMap.get(gestureKey);
          new Engine2(this, args, gestureKey).bind(bindFunction);
        }
      }
      const nativeBindFunction = bindToProps(props, sharedConfig.eventOptions, !!target);
      for (const eventKey in this.nativeHandlers) {
        nativeBindFunction(eventKey, "", (event) => this.nativeHandlers[eventKey](_objectSpread2(_objectSpread2({}, this.state.shared), {}, {
          event,
          args
        })), void 0, true);
      }
    }
    for (const handlerProp in props) {
      props[handlerProp] = chain(...props[handlerProp]);
    }
    if (!target)
      return props;
    for (const handlerProp in props) {
      const {
        device,
        capture,
        passive
      } = parseProp(handlerProp);
      this._targetEventStore.add(target, device, "", props[handlerProp], {
        capture,
        passive
      });
    }
  }
};
function setupGesture(ctrl, gestureKey) {
  ctrl.gestures.add(gestureKey);
  ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl, gestureKey);
  ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore();
}
function resolveGestures(ctrl, internalHandlers) {
  if (internalHandlers.drag)
    setupGesture(ctrl, "drag");
  if (internalHandlers.wheel)
    setupGesture(ctrl, "wheel");
  if (internalHandlers.scroll)
    setupGesture(ctrl, "scroll");
  if (internalHandlers.move)
    setupGesture(ctrl, "move");
  if (internalHandlers.pinch)
    setupGesture(ctrl, "pinch");
  if (internalHandlers.hover)
    setupGesture(ctrl, "hover");
}
var bindToProps = (props, eventOptions, withPassiveOption) => (device, action, handler, options = {}, isNative = false) => {
  var _options$capture, _options$passive;
  const capture = (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
  const passive = (_options$passive = options.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
  let handlerProp = isNative ? device : toHandlerProp(device, action, capture);
  if (withPassiveOption && passive)
    handlerProp += "Passive";
  props[handlerProp] = props[handlerProp] || [];
  props[handlerProp].push(handler);
};

// node_modules/.pnpm/@use-gesture+core@10.3.1/node_modules/@use-gesture/core/utils/dist/use-gesture-core-utils.esm.js
init_Buffer();

// node_modules/.pnpm/@use-gesture+core@10.3.1/node_modules/@use-gesture/core/types/dist/use-gesture-core-types.esm.js
init_Buffer();

// node_modules/.pnpm/@use-gesture+react@10.3.1_react@18.2.0/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js
function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
  const ctrl = import_react4.default.useMemo(() => new Controller(handlers), []);
  ctrl.applyHandlers(handlers, nativeHandlers);
  ctrl.applyConfig(config, gestureKey);
  import_react4.default.useEffect(ctrl.effect.bind(ctrl));
  import_react4.default.useEffect(() => {
    return ctrl.clean.bind(ctrl);
  }, []);
  if (config.target === void 0) {
    return ctrl.bind.bind(ctrl);
  }
  return void 0;
}
function useScroll(handler, config) {
  registerAction(scrollAction);
  return useRecognizers({
    scroll: handler
  }, config || {}, "scroll");
}

// src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx
var import_lodash2 = __toESM(require_lodash(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s22 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
var _s5 = $RefreshSig$();
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx"
  );
  import.meta.hot.lastModified = "1712028233687.0432";
}
var CategoryAccordionButton = (props) => {
  _s22();
  var _s9 = $RefreshSig$();
  const {
    control
  } = useFormContext();
  const {
    categoryName,
    articulos
  } = props;
  const categoryTotal = articulos?.map(_s9(({
    id,
    precio
  }) => {
    _s9();
    const productQuantity = useWatch({
      control,
      name: `quantities.${id}`
    });
    const productSum = productQuantity * precio;
    return productSum;
  }, "8+WBlWZvRplVrvzV5tYHIcCIurQ=", false, function() {
    return [useWatch];
  }));
  const categorySum = import_lodash2.default.sum(categoryTotal);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AccordionButton, { sx: {
    p: 0
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AccordionIcon, { sx: {
      me: 2
    } }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { as: "span", flex: "1", textAlign: "left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Heading, { size: ["sm", "md"], sx: {
      textTransform: "uppercase"
    }, children: categoryName }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    categorySum != 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { variant: "subtle", colorScheme: "yellow", fontSize: "0.9em", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextPriceNative, { precio: categorySum, moneda: "$" }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 75,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 73,
      columnNumber: 28
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
};
_s22(CategoryAccordionButton, "zyAxkz+Wq3InUdCKNlVVi99oElQ=", false, function() {
  return [useFormContext];
});
_c4 = CategoryAccordionButton;
var ProductsRow = (props) => {
  _s3();
  const {
    id,
    codigo,
    nombre,
    precio
  } = props.product;
  const index = props.index;
  const style = props.style;
  const rowColor = useColorModeValue("var(--chakra-colors-yellow-100)", "var(--chakra-colors-green-900)");
  const inputBorderColor = useColorModeValue("var(--chakra-colors-blackAlpha-800)", "var(--chakra-colors-whiteAlpha-300)");
  const {
    control,
    register,
    formState: {
      isSubmitted,
      isSubmitting
    }
  } = useFormContext();
  const productQuantity = useWatch({
    control,
    name: `quantities.${id}`
  });
  const productSum = productQuantity * precio;
  const inputFieldProps = {
    type: "number",
    min: 0,
    inputMode: "tel",
    size: 5,
    onKeyDown: (e) => {
      if (/^(\.|,|-|\+)$/.test(e.key))
        e.preventDefault();
    },
    onChange: (e) => {
      return parseInt(e.target.value);
    },
    onFocus: (e) => {
      e.target.select();
    },
    className: "quantity",
    style: {
      borderColor: inputBorderColor
    },
    disabled: isSubmitted || isSubmitting
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid", style: {
    ...style,
    ...productSum && {
      backgroundColor: rowColor
    }
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "word-break-all", children: [
      codigo,
      " - ",
      nombre
    ] }, void 0, true, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-right hidden-on-base", children: precio != null && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextPriceNative, { precio, moneda: "$" }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 139,
      columnNumber: 28
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { ...inputFieldProps, ...register(`quantities.${id}`) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 142,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-right", children: productSum != null && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextPriceNative, { precio: productSum, moneda: "$" }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 145,
      columnNumber: 32
    }, this) }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 144,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
};
_s3(ProductsRow, "myrOeVlz7rCPqBoPIxX4ZBWc7MM=", false, function() {
  return [useColorModeValue, useColorModeValue, useFormContext, useWatch];
});
_c22 = ProductsRow;
var emptyFunction = () => {
  return;
};
var OuterElement = _s4((0, import_react5.forwardRef)(_c32 = _s4(({
  onScroll,
  children
}, forwardedRef) => {
  _s4();
  const containerRef = (0, import_react5.useRef)(null);
  useScroll(() => {
    if (!(onScroll instanceof Function)) {
      return;
    }
    const {
      clientWidth,
      clientHeight,
      scrollLeft,
      scrollTop,
      scrollHeight,
      scrollWidth
    } = document.documentElement;
    if (onScroll != null) {
      onScroll({
        currentTarget: {
          clientHeight,
          clientWidth,
          scrollLeft,
          addEventListener: emptyFunction,
          removeEventListener: emptyFunction,
          dispatchEvent: () => false,
          scrollTop: scrollTop - (containerRef.current ? containerRef.current.getBoundingClientRect().top + scrollTop : 0),
          scrollHeight,
          scrollWidth
        }
      });
    }
  }, {
    target: window
  });
  if (forwardedRef != null && !(forwardedRef instanceof Function)) {
    forwardedRef.current = document.documentElement;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { ref: containerRef, children }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
    lineNumber: 195,
    columnNumber: 10
  }, this);
}, "xF0ds2gj4KUWLZroHC+3pnxSbWM=", false, function() {
  return [useScroll];
})), "xF0ds2gj4KUWLZroHC+3pnxSbWM=", false, function() {
  return [useScroll];
});
_c42 = OuterElement;
var InnerElement = ({
  children,
  ...rest
}) => {
  _s5();
  const rowColor = useColorModeValue("var(--chakra-colors-gray-200)", "var(--chakra-colors-black)");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid heading", style: {
      backgroundColor: `${rowColor}`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: "Art\xEDculo" }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 214,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 213,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center hidden-on-base", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: "Precio" }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: "Cantidad" }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 220,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 219,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: "Subtotal" }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 223,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 210,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
      position: "relative"
    }, children }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 226,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
    lineNumber: 209,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
    lineNumber: 208,
    columnNumber: 10
  }, this);
};
_s5(InnerElement, "p3nmv/ShEcw8CXPeByJJ6How1cA=", false, function() {
  return [useColorModeValue];
});
_c5 = InnerElement;
var Row = ({
  style,
  index,
  data
}) => {
  const product = data != null ? data[index] : void 0;
  return product && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProductsRow, { index, product, style }, `product-row-${product.id}`, false, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
    lineNumber: 242,
    columnNumber: 21
  }, this);
};
_c6 = Row;
var ProductsTable = (props) => {
  _s6();
  const {
    disableForm,
    unfilteredProducts,
    filteredProducts,
    isFiltering
  } = props;
  const [index, setIndex] = (0, import_react5.useState)(null);
  const ITEM_HEIGHT = useBreakpointValue({
    base: 70,
    md: 46
  }, {
    fallback: "md"
  });
  const totalCategories = import_lodash2.default.keys(filteredProducts).length;
  const filledUpCategories = import_lodash2.default.keys(import_lodash2.default.pickBy(filteredProducts, (value) => Array.isArray(value) && value.length > 0));
  (0, import_react5.useEffect)(() => {
    setIndex(isFiltering ? import_lodash2.default.range(totalCategories) : null);
  }, [isFiltering]);
  if (!filledUpCategories.length) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Alert, { status: "info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AlertIcon, {}, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 269,
        columnNumber: 9
      }, this),
      "La b\xFAsqueda no produjo resultados."
    ] }, void 0, true, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 268,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Accordion, { allowMultiple: true, reduceMotion: true, ...totalCategories === 1 ? {
    defaultIndex: [0]
  } : {}, ...index != null && {
    index
  }, onChange: setIndex, children: import_lodash2.default.map(filteredProducts, (articulos, categoria) => {
    const categoryName = categoria === "_" ? "Varios" : categoria.replace(/_/g, " ");
    return articulos.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AccordionItem, { sx: {
      border: "none"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommonCard, { cardProps: {
      borderWidth: "1px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CategoryAccordionButton, { categoryName, articulos: unfilteredProducts[categoria] }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 286,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AccordionPanel, { sx: {
        p: 0,
        mt: 4
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FixedSizeList, { height: window.innerHeight, outerElementType: OuterElement, innerElementType: InnerElement, overscanCount: 10, itemCount: articulos?.length + 1, itemSize: ITEM_HEIGHT, itemData: articulos, width: window.innerWidth, children: Row }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 291,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
        lineNumber: 287,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 283,
      columnNumber: 13
    }, this) }, `accordion-${categoria}`, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 280,
      columnNumber: 33
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.default.Fragment, {}, `accordion-${categoria}`, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
      lineNumber: 296,
      columnNumber: 30
    }, this);
  }) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx",
    lineNumber: 273,
    columnNumber: 10
  }, this);
};
_s6(ProductsTable, "Yr5J0hzWk8WbxMSc7q5SRsp7Oi8=", false, function() {
  return [useBreakpointValue];
});
_c7 = ProductsTable;
var _c4;
var _c22;
var _c32;
var _c42;
var _c5;
var _c6;
var _c7;
$RefreshReg$(_c4, "CategoryAccordionButton");
$RefreshReg$(_c22, "ProductsRow");
$RefreshReg$(_c32, "OuterElement$forwardRef");
$RefreshReg$(_c42, "OuterElement");
$RefreshReg$(_c5, "InnerElement");
$RefreshReg$(_c6, "Row");
$RefreshReg$(_c7, "ProductsTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders.$client.add/components/success.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders.$client.add/components/success.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders.$client.add/components/success.tsx"
  );
  import.meta.hot.lastModified = "1712028233687.2349";
}
var Success = (props) => {
  _s7();
  const {
    auxData
  } = props;
  const [filteredData, setFilteredData] = (0, import_react9.useState)(fakeData.articulos);
  const quantities = {};
  const prices = {};
  import_lodash3.default.forOwn(fakeData.articulos, (articulos) => {
    articulos.forEach((product) => {
      prices[product.id] = product.precio;
      quantities[product.id] = "";
    });
  });
  const formMethods = useForm({
    defaultValues: {
      alta: "",
      entrega: "",
      bonificacion: "",
      transporte: 0,
      condicion_venta: 0,
      deposito: 0,
      talonario: 0,
      tipo_de_asiento: 0,
      quantities
    },
    resolver: o(yupValidationSchema)
  });
  const {
    handleSubmit,
    control,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful
    }
  } = formMethods;
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    filteredData: filteredProducts,
    handleSearchInputChange,
    isFiltering
  } = useSearchField(fakeData.articulos, ["codigo", "nombre"]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormProvider, { ...formMethods, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(OrdersAddNav, { isDisabled: disableForm, handleSearchInputChange }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/success.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Box, { sx: {
      my: 4
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormErrors, { errors }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/success.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(OrderInfo, { cabecera: fakeData.cabecera, auxData, disableForm, prices }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/success.tsx",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProductsTable, { disableForm, unfilteredProducts: fakeData.articulos, filteredProducts, isFiltering }, void 0, false, {
        fileName: "src/app/routes/_authorized.orders.$client.add/components/success.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "src/app/routes/_authorized.orders.$client.add/components/success.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/success.tsx",
    lineNumber: 84,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/success.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "src/app/routes/_authorized.orders.$client.add/components/success.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
};
_s7(Success, "vobmh2O5+WAT2kqHcTTrxL499sg=", false, function() {
  return [useForm, useSearchField];
});
_c8 = Success;
var _c8;
$RefreshReg$(_c8, "Success");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// src/app/routes/_authorized.orders.$client.add/route.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src/app/routes/_authorized.orders.$client.add/route.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src/app/routes/_authorized.orders.$client.add/route.tsx"
  );
  import.meta.hot.lastModified = "1712093778797.7988";
}
function OrdersAdd() {
  _s8();
  const {
    state,
    retry
  } = useDXTApiFetch({
    url: API_TANGO_AUXILIARES,
    silent: true
  });
  return state.map({
    loading: (_4) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Loading, {}, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/route.tsx",
      lineNumber: 38,
      columnNumber: 19
    }, this),
    error: ({
      error
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ApiErrors, { error, retry, cancelAndNavigateTo: URL_PEDIDOS_PATH }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/route.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this),
    success: (state2) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Success, { auxData: state2.data }, void 0, false, {
      fileName: "src/app/routes/_authorized.orders.$client.add/route.tsx",
      lineNumber: 42,
      columnNumber: 23
    }, this)
  });
}
_s8(OrdersAdd, "1aHkhAFWgcwHik8/GdJ//FCIL3o=", false, function() {
  return [useDXTApiFetch];
});
_c9 = OrdersAdd;
var _c9;
$RefreshReg$(_c9, "OrdersAdd");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OrdersAdd as default
};
//# sourceMappingURL=/build/routes/_authorized.orders.$client.add-X5MCXCZY.js.map
