var _a, _b;
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import "dotenv/config";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, useLocation, useNavigate, Meta, Links, ScrollRestoration, Scripts, useLoaderData, Outlet, useRouteError, useParams } from "@remix-run/react";
import { CacheProvider, withEmotionCache } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { PassThrough } from "stream";
import { renderToPipeableStream } from "react-dom/server";
import Buffer from "vite-plugin-node-polyfills/shims/buffer";
import validator from "validator";
import createCache from "@emotion/cache";
import { cssBundleHref } from "@remix-run/css-bundle";
import "@leichtgewicht/ip-codec";
import React, { useState, useCallback, useEffect, useRef, createContext, useMemo, useContext, memo, Children, Fragment as Fragment$1, lazy, Suspense, useSyncExternalStore } from "react";
import md5 from "md5";
import _ from "lodash";
import Nanobus from "nanobus";
import { useModal, ModalProvider } from "react-hooks-async-modal";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, createMultiStyleConfigHelpers, defineStyle, defineStyleConfig, extendTheme, useConst, cookieStorageManagerSSR, localStorageManager, ChakraProvider, VStack, Heading, Text, Icon, Box, Alert, AlertIcon, AlertDescription, useColorModeValue, Card, CardBody, useBreakpointValue, IconButton, Flex, Spacer, HStack, Skeleton, Grid, GridItem, Divider, Stack, FormControl, FormLabel, InputGroup, Input, FormHelperText, RadioGroup, Radio, useMultiStyleConfig, useTheme, Switch, UnorderedList, ListItem, InputRightElement, Badge, useToast, Textarea, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, InputLeftElement, useDisclosure, Table, Thead, Tr, Th, Tbody, Td, SimpleGrid, Portal, Popover, PopoverTrigger, PopoverAnchor, PopoverContent, PopoverBody, Collapse, AccordionPanel, Accordion, AccordionItem, AccordionButton, AccordionIcon, Container, List, Link, ListIcon, Tag, TagLabel, Menu, MenuButton, MenuList, MenuItem, MenuDivider, TableContainer, Checkbox, useColorMode, Image, AlertTitle, CardHeader, Center } from "@chakra-ui/react";
import axios, { AxiosError } from "axios";
import { inputAnatomy, tableAnatomy, alertAnatomy, cardAnatomy, checkboxAnatomy } from "@chakra-ui/anatomy";
import { mode as mode$1, getColorVar } from "@chakra-ui/theme-tools";
import AccountCancelIcon from "mdi-react/AccountCancelIcon.js";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon.js";
import CloseIcon from "mdi-react/CloseIcon.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useController, useForm, useFormContext, useWatch, FormProvider } from "react-hook-form";
import { Select, createFilter, chakraComponents } from "chakra-react-select";
import { FixedSizeList } from "react-window";
import EyeOffOutlineIcon from "mdi-react/EyeOffOutlineIcon.js";
import EyeOutlineIcon from "mdi-react/EyeOutlineIcon.js";
import * as yup from "yup";
import envPaths from "env-paths";
import { readFile, mkdir, writeFile, opendir, stat, unlink, open } from "fs/promises";
import { parse, stringify } from "ini";
import { readFileSync, mkdirSync, writeFileSync } from "fs";
import knex from "knex";
import { TYPES } from "tedious";
import * as crypto from "crypto";
import AccountPlusIcon from "mdi-react/AccountPlusIcon.js";
import AccountCheckIcon from "mdi-react/AccountCheckIcon.js";
import PencilIcon from "mdi-react/PencilIcon.js";
import TrashIcon from "mdi-react/TrashIcon.js";
import ChevronRightIcon from "mdi-react/ChevronRightIcon.js";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon.js";
import MagnifyIcon from "mdi-react/MagnifyIcon.js";
import { isDate, parse as parse$1, format, startOfDay } from "date-fns";
import FormatListCheckboxIcon from "mdi-react/FormatListCheckboxIcon.js";
import PlaylistCheckIcon from "mdi-react/PlaylistCheckIcon.js";
import PlaylistEditIcon from "mdi-react/PlaylistEditIcon.js";
import SendIcon from "mdi-react/SendIcon.js";
import { useDayzed } from "dayzed";
import FocusLock from "react-focus-lock";
import PlusIcon from "mdi-react/PlusIcon.js";
import PrinterIcon from "mdi-react/PrinterIcon.js";
import AutoSizer from "react-virtualized-auto-sizer";
import DotsVerticalIcon from "mdi-react/DotsVerticalIcon.js";
import CheckCircleIcon from "mdi-react/CheckCircleIcon.js";
import CloseCircleIcon from "mdi-react/CloseCircleIcon.js";
import MenuIcon from "mdi-react/MenuIcon.js";
import MoonWaningCrescentIcon from "mdi-react/MoonWaningCrescentIcon.js";
import WeatherSunnyIcon from "mdi-react/WeatherSunnyIcon.js";
import AccountIcon from "mdi-react/AccountIcon.js";
import LockIcon from "mdi-react/LockIcon.js";
import WarningIcon from "mdi-react/AlertOutlineIcon.js";
import ErrorIcon from "mdi-react/CloseOctagonOutlineIcon.js";
import InfoIcon from "mdi-react/InformationVariantCircleOutlineIcon.js";
function isRealObject(value) {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
}
function isObj(value) {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
}
function isNavigator() {
  return typeof window !== "undefined" && isRealObject(window.location);
}
function isNode() {
  var _a2;
  return typeof process !== "undefined" && typeof ((_a2 = process.versions) == null ? void 0 : _a2.node) === "string";
}
function windowOrNull() {
  return typeof window !== "undefined" ? window : null;
}
let _jsonPolyfillsInitialized = false;
function jsonPolyfills() {
  if (_jsonPolyfillsInitialized)
    return;
  BigInt.prototype.toJSON = function() {
    return this.toString();
  };
  _jsonPolyfillsInitialized = true;
}
jsonPolyfills();
function stringifyJSON(value, replacer, space) {
  return JSON.stringify(value, replacer, space);
}
function parseJSON(text, reviver) {
  return JSON.parse(text, reviver);
}
const isStr = (value) => typeof value === "string";
const isNotEmptyStr = (value) => typeof value === "string" && value.length > 0;
function valueToString(value, includeStringQuotes) {
  var _a2;
  if (Array.isArray(value) || isObj(value))
    return stringifyJSON(value);
  if (typeof value === "symbol")
    return value.toString();
  if (typeof value === "string" && (includeStringQuotes ?? false))
    return `'${value}'`;
  if (value === null)
    return "[null]";
  return ((_a2 = value == null ? void 0 : value.toString) == null ? void 0 : _a2.call(value)) ?? "[undefined]";
}
class ValidationException extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationException";
  }
}
class InvalidEnumObjectException extends ValidationException {
  constructor(value) {
    super(`Invalid enum object:  ${valueToString(value)}`);
  }
}
class InvalidEnumNumberException extends ValidationException {
  constructor(value) {
    super(`Invalid enum number:  ${valueToString(value)}`);
  }
}
class InvalidEnumStringException extends ValidationException {
  constructor(value) {
    super(`Invalid enum string: ${valueToString(value)}`);
  }
}
class InvalidBooleanException extends ValidationException {
  constructor(value) {
    super(`Invalid boolean: ${valueToString(value)}`);
  }
}
const MD5_LENGTH = 32;
const INT16_BYTES = 2;
const INT32_BYTES = 4;
const INT64_BYTES = 8;
const INT128_BYTES = 16;
const UINT16_MIN = 0;
const UINT16_MAX = 2 ** (INT16_BYTES * 8) - 1;
const UINT32_MIN = 0;
const UINT32_MAX = 2 ** (INT32_BYTES * 8) - 1;
const UINT64_MIN_VALUE = BigInt(0);
const UINT64_MAX_VALUE = BigInt(`0x${"FF".repeat(INT64_BYTES)}`);
BigInt(0);
BigInt(`0x${"FF".repeat(INT128_BYTES)}`);
const EMAIL_MAX_LENGTH = 512;
const TCP_PORT_MIN_VALUE = 1;
const TCP_PORT_MAX_VALUE = 65535;
function isHost(value) {
  return typeof value === "string" && (validator.isFQDN(value, {}) || validator.isIP(value) || value === "localhost");
}
function isTCPPort(value) {
  return typeof value === "number" && value >= TCP_PORT_MIN_VALUE && value <= TCP_PORT_MAX_VALUE;
}
function isANumber(value) {
  return Number.isFinite(value);
}
function isAnInteger(value) {
  return Number.isSafeInteger(value);
}
function assertEnumType(enumType) {
  if (isRealObject(enumType))
    return;
  throw new InvalidEnumObjectException(enumType);
}
function isValidEnumValue(enumType, value) {
  assertEnumType(enumType);
  if (typeof value !== "number")
    throw new InvalidEnumNumberException(value);
  return typeof enumType[value] === "string";
}
function toBoolean(rawValue, def) {
  let value = rawValue;
  if (typeof value === "boolean")
    return value;
  if (typeof value === "number")
    return value !== 0;
  if (typeof value === "string") {
    value = value.trim().toLowerCase().trim();
    if (value === "1" || value === "true")
      return true;
    if (value === "0" || value === "false")
      return false;
  }
  if (typeof def !== "boolean")
    throw new InvalidBooleanException(rawValue);
  return def;
}
function stringToEnum(enumType, value) {
  if (typeof value !== "string")
    throw new InvalidEnumStringException(value);
  assertEnumType(enumType);
  const result = enumType[value];
  if (typeof result === "undefined")
    throw new InvalidEnumNumberException(result);
  if (typeof result !== "number")
    throw new InvalidEnumNumberException(result);
  return result;
}
function enumToString(enumType, value) {
  if (typeof value !== "number")
    throw new InvalidEnumNumberException(value);
  assertEnumType(enumType);
  const result = enumType[value];
  if (typeof result === "undefined")
    throw new InvalidEnumStringException(result);
  if (typeof result !== "string")
    throw new InvalidEnumStringException(result);
  return result;
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function assertPath(path2) {
  if (typeof path2 !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
  }
}
function normalizeStringPosix(path2, allowAboveRoot) {
  var res = "";
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path2.length; ++i) {
    if (i < path2.length)
      code = path2.charCodeAt(i);
    else if (code === 47)
      break;
    else
      code = 47;
    if (code === 47) {
      if (lastSlash === i - 1 || dots === 1)
        ;
      else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = "";
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += "/..";
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += "/" + path2.slice(lastSlash + 1, i);
        else
          res = path2.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}
var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = "";
    var resolvedAbsolute = false;
    var cwd;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path2;
      if (i >= 0)
        path2 = arguments[i];
      else {
        if (cwd === void 0)
          cwd = process.cwd();
        path2 = cwd;
      }
      assertPath(path2);
      if (path2.length === 0) {
        continue;
      }
      resolvedPath = path2 + "/" + resolvedPath;
      resolvedAbsolute = path2.charCodeAt(0) === 47;
    }
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return "/" + resolvedPath;
      else
        return "/";
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return ".";
    }
  },
  normalize: function normalize(path2) {
    assertPath(path2);
    if (path2.length === 0)
      return ".";
    var isAbsolute2 = path2.charCodeAt(0) === 47;
    var trailingSeparator = path2.charCodeAt(path2.length - 1) === 47;
    path2 = normalizeStringPosix(path2, !isAbsolute2);
    if (path2.length === 0 && !isAbsolute2)
      path2 = ".";
    if (path2.length > 0 && trailingSeparator)
      path2 += "/";
    if (isAbsolute2)
      return "/" + path2;
    return path2;
  },
  isAbsolute: function isAbsolute(path2) {
    assertPath(path2);
    return path2.length > 0 && path2.charCodeAt(0) === 47;
  },
  join: function join() {
    if (arguments.length === 0)
      return ".";
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === void 0)
          joined = arg;
        else
          joined += "/" + arg;
      }
    }
    if (joined === void 0)
      return ".";
    return posix.normalize(joined);
  },
  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to)
      return "";
    from = posix.resolve(from);
    to = posix.resolve(to);
    if (from === to)
      return "";
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47) {
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47) {
            lastCommonSep = i;
          } else if (i === 0) {
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47)
        lastCommonSep = i;
    }
    var out = "";
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47) {
        if (out.length === 0)
          out += "..";
        else
          out += "/..";
      }
    }
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47)
        ++toStart;
      return to.slice(toStart);
    }
  },
  _makeLong: function _makeLong(path2) {
    return path2;
  },
  dirname: function dirname(path2) {
    assertPath(path2);
    if (path2.length === 0)
      return ".";
    var code = path2.charCodeAt(0);
    var hasRoot = code === 47;
    var end = -1;
    var matchedSlash = true;
    for (var i = path2.length - 1; i >= 1; --i) {
      code = path2.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        matchedSlash = false;
      }
    }
    if (end === -1)
      return hasRoot ? "/" : ".";
    if (hasRoot && end === 1)
      return "//";
    return path2.slice(0, end);
  },
  basename: function basename(path2, ext) {
    if (ext !== void 0 && typeof ext !== "string")
      throw new TypeError('"ext" argument must be a string');
    assertPath(path2);
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;
    if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
      if (ext.length === path2.length && ext === path2)
        return "";
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path2.length - 1; i >= 0; --i) {
        var code = path2.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                end = i;
              }
            } else {
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end)
        end = firstNonSlashEnd;
      else if (end === -1)
        end = path2.length;
      return path2.slice(start, end);
    } else {
      for (i = path2.length - 1; i >= 0; --i) {
        if (path2.charCodeAt(i) === 47) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
      }
      if (end === -1)
        return "";
      return path2.slice(start, end);
    }
  },
  extname: function extname(path2) {
    assertPath(path2);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var preDotState = 0;
    for (var i = path2.length - 1; i >= 0; --i) {
      var code = path2.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46) {
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path2.slice(startDot, end);
  },
  format: function format2(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format("/", pathObject);
  },
  parse: function parse2(path2) {
    assertPath(path2);
    var ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path2.length === 0)
      return ret;
    var code = path2.charCodeAt(0);
    var isAbsolute2 = code === 47;
    var start;
    if (isAbsolute2) {
      ret.root = "/";
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path2.length - 1;
    var preDotState = 0;
    for (; i >= start; --i) {
      code = path2.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46) {
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute2)
          ret.base = ret.name = path2.slice(1, end);
        else
          ret.base = ret.name = path2.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute2) {
        ret.name = path2.slice(1, startDot);
        ret.base = path2.slice(1, end);
      } else {
        ret.name = path2.slice(startPart, startDot);
        ret.base = path2.slice(startPart, end);
      }
      ret.ext = path2.slice(startDot, end);
    }
    if (startPart > 0)
      ret.dir = path2.slice(0, startPart - 1);
    else if (isAbsolute2)
      ret.dir = "/";
    return ret;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
posix.posix = posix;
var pathBrowserify = posix;
const path = /* @__PURE__ */ getDefaultExportFromCjs(pathBrowserify);
const HTTP_STATUS_SERVER_ERROR_MIN = 500;
const HTTP_STATUS_SERVER_ERROR_MAX = 599;
function isHttpServerError(status) {
  return status >= HTTP_STATUS_SERVER_ERROR_MIN && status <= HTTP_STATUS_SERVER_ERROR_MAX;
}
var HttpStatus = /* @__PURE__ */ ((HttpStatus2) => {
  HttpStatus2[HttpStatus2["CONTINUE"] = 100] = "CONTINUE";
  HttpStatus2[HttpStatus2["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
  HttpStatus2[HttpStatus2["PROCESSING"] = 102] = "PROCESSING";
  HttpStatus2[HttpStatus2["EARLYHINTS"] = 103] = "EARLYHINTS";
  HttpStatus2[HttpStatus2["OK"] = 200] = "OK";
  HttpStatus2[HttpStatus2["CREATED"] = 201] = "CREATED";
  HttpStatus2[HttpStatus2["ACCEPTED"] = 202] = "ACCEPTED";
  HttpStatus2[HttpStatus2["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
  HttpStatus2[HttpStatus2["NO_CONTENT"] = 204] = "NO_CONTENT";
  HttpStatus2[HttpStatus2["RESET_CONTENT"] = 205] = "RESET_CONTENT";
  HttpStatus2[HttpStatus2["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
  HttpStatus2[HttpStatus2["AMBIGUOUS"] = 300] = "AMBIGUOUS";
  HttpStatus2[HttpStatus2["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
  HttpStatus2[HttpStatus2["FOUND"] = 302] = "FOUND";
  HttpStatus2[HttpStatus2["SEE_OTHER"] = 303] = "SEE_OTHER";
  HttpStatus2[HttpStatus2["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
  HttpStatus2[HttpStatus2["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
  HttpStatus2[HttpStatus2["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
  HttpStatus2[HttpStatus2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  HttpStatus2[HttpStatus2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  HttpStatus2[HttpStatus2["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
  HttpStatus2[HttpStatus2["FORBIDDEN"] = 403] = "FORBIDDEN";
  HttpStatus2[HttpStatus2["NOT_FOUND"] = 404] = "NOT_FOUND";
  HttpStatus2[HttpStatus2["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
  HttpStatus2[HttpStatus2["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
  HttpStatus2[HttpStatus2["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
  HttpStatus2[HttpStatus2["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
  HttpStatus2[HttpStatus2["CONFLICT"] = 409] = "CONFLICT";
  HttpStatus2[HttpStatus2["GONE"] = 410] = "GONE";
  HttpStatus2[HttpStatus2["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
  HttpStatus2[HttpStatus2["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
  HttpStatus2[HttpStatus2["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
  HttpStatus2[HttpStatus2["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
  HttpStatus2[HttpStatus2["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
  HttpStatus2[HttpStatus2["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
  HttpStatus2[HttpStatus2["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
  HttpStatus2[HttpStatus2["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
  HttpStatus2[HttpStatus2["MISDIRECTED"] = 421] = "MISDIRECTED";
  HttpStatus2[HttpStatus2["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
  HttpStatus2[HttpStatus2["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
  HttpStatus2[HttpStatus2["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
  HttpStatus2[HttpStatus2["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
  HttpStatus2[HttpStatus2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
  HttpStatus2[HttpStatus2["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
  HttpStatus2[HttpStatus2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
  HttpStatus2[HttpStatus2["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
  HttpStatus2[HttpStatus2["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
  HttpStatus2[HttpStatus2["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
  return HttpStatus2;
})(HttpStatus || {});
class HttpException extends Error {
  /**
   * Instantiates an `HttpException` Exception.
   *
   * @param statusCode HTTP status code
   * @param message Error message
   *
   * @example
   * `throw new HttpException(403, 'Forbidden')`
   */
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = "HttpException";
  }
}
class BadRequestException extends HttpException {
  /**
   * Instantiates a `BadRequestException` Exception with status code 400.
   *
   * @param message Error message (default: 'Bad Request')
   *
   * @example
   * `throw new BadRequestException()`
   */
  constructor(message = "Bad Request") {
    super(HttpStatus.BAD_REQUEST, message);
    this.name = "BadRequestException";
  }
}
class NotImplementedException extends HttpException {
  constructor(message = "Not implemented") {
    super(HttpStatus.NOT_IMPLEMENTED, message);
    this.name = "NotImplementedException";
  }
}
const HTTP_STATUS_UNAVAILABLE = -1;
var DXTErrorCode = /* @__PURE__ */ ((DXTErrorCode2) => {
  DXTErrorCode2[DXTErrorCode2["UNEXPECTED_ERROR"] = 0] = "UNEXPECTED_ERROR";
  DXTErrorCode2[DXTErrorCode2["BAD_REQUEST"] = 1e4] = "BAD_REQUEST";
  DXTErrorCode2[DXTErrorCode2["INVALID_PARAMETER"] = 10001] = "INVALID_PARAMETER";
  DXTErrorCode2[DXTErrorCode2["INSUFFICIENT_PARAMS"] = 10002] = "INSUFFICIENT_PARAMS";
  DXTErrorCode2[DXTErrorCode2["RESERVED_ARTICLE_GROUP_NAME"] = 10003] = "RESERVED_ARTICLE_GROUP_NAME";
  DXTErrorCode2[DXTErrorCode2["INVALID_OLD_PASSWORD"] = 10004] = "INVALID_OLD_PASSWORD";
  DXTErrorCode2[DXTErrorCode2["INVALID_TRANSPORTE"] = 10005] = "INVALID_TRANSPORTE";
  DXTErrorCode2[DXTErrorCode2["INVALID_DEPOSITO"] = 10006] = "INVALID_DEPOSITO";
  DXTErrorCode2[DXTErrorCode2["INVALID_CONDICION"] = 10007] = "INVALID_CONDICION";
  DXTErrorCode2[DXTErrorCode2["INVALID_ASIENTO"] = 10008] = "INVALID_ASIENTO";
  DXTErrorCode2[DXTErrorCode2["INVALID_TALONARIO"] = 10009] = "INVALID_TALONARIO";
  DXTErrorCode2[DXTErrorCode2["INVALID_DIRECCION"] = 10010] = "INVALID_DIRECCION";
  DXTErrorCode2[DXTErrorCode2["DELIVERY_DATE_IS_EARLIER"] = 10011] = "DELIVERY_DATE_IS_EARLIER";
  DXTErrorCode2[DXTErrorCode2["INVALID_CONSUMIDOR_FINAL_TALONARIO"] = 10012] = "INVALID_CONSUMIDOR_FINAL_TALONARIO";
  DXTErrorCode2[DXTErrorCode2["INACCESIBLE_ORDER_ROW_ARTICLE"] = 10013] = "INACCESIBLE_ORDER_ROW_ARTICLE";
  DXTErrorCode2[DXTErrorCode2["NOT_FOUND"] = 11e3] = "NOT_FOUND";
  DXTErrorCode2[DXTErrorCode2["DXT_CUSTOMER_NOT_FOUND"] = 11001] = "DXT_CUSTOMER_NOT_FOUND";
  DXTErrorCode2[DXTErrorCode2["DXT_VENDOR_NOT_FOUND"] = 11002] = "DXT_VENDOR_NOT_FOUND";
  DXTErrorCode2[DXTErrorCode2["ORDER_NOT_FOUND"] = 11003] = "ORDER_NOT_FOUND";
  DXTErrorCode2[DXTErrorCode2["DRAFT_NOT_FOUND"] = 11004] = "DRAFT_NOT_FOUND";
  DXTErrorCode2[DXTErrorCode2["NOT_IMPLEMENTED"] = 12e3] = "NOT_IMPLEMENTED";
  DXTErrorCode2[DXTErrorCode2["TOO_MANY_REQUESTS"] = 13e3] = "TOO_MANY_REQUESTS";
  DXTErrorCode2[DXTErrorCode2["CONFLICT"] = 14e3] = "CONFLICT";
  DXTErrorCode2[DXTErrorCode2["DUPLICATED_TABLE_RECORD"] = 14001] = "DUPLICATED_TABLE_RECORD";
  DXTErrorCode2[DXTErrorCode2["DUPLICATED_DRAFT_DESCRIPTION"] = 14002] = "DUPLICATED_DRAFT_DESCRIPTION";
  DXTErrorCode2[DXTErrorCode2["PAYLOAD_TOO_LARGE"] = 15e3] = "PAYLOAD_TOO_LARGE";
  DXTErrorCode2[DXTErrorCode2["UNPROCESSABLE_ENTITY"] = 16e3] = "UNPROCESSABLE_ENTITY";
  DXTErrorCode2[DXTErrorCode2["UNKNOWN_TRANSPORTE"] = 16001] = "UNKNOWN_TRANSPORTE";
  DXTErrorCode2[DXTErrorCode2["UNKNOWN_DEPOSITO"] = 16002] = "UNKNOWN_DEPOSITO";
  DXTErrorCode2[DXTErrorCode2["UNKNOWN_CONDICION"] = 16003] = "UNKNOWN_CONDICION";
  DXTErrorCode2[DXTErrorCode2["UNKNOWN_ASIENTO"] = 16004] = "UNKNOWN_ASIENTO";
  DXTErrorCode2[DXTErrorCode2["UNKNOWN_TALONARIO"] = 16005] = "UNKNOWN_TALONARIO";
  DXTErrorCode2[DXTErrorCode2["UNKNOWN_DIRECCION"] = 16006] = "UNKNOWN_DIRECCION";
  DXTErrorCode2[DXTErrorCode2["EMPTY_TRANSPORTE_LIST"] = 16007] = "EMPTY_TRANSPORTE_LIST";
  DXTErrorCode2[DXTErrorCode2["EMPTY_DEPOSITO_LIST"] = 16008] = "EMPTY_DEPOSITO_LIST";
  DXTErrorCode2[DXTErrorCode2["EMPTY_CONDICION_LIST"] = 16009] = "EMPTY_CONDICION_LIST";
  DXTErrorCode2[DXTErrorCode2["EMPTY_ASIENTO_LIST"] = 16010] = "EMPTY_ASIENTO_LIST";
  DXTErrorCode2[DXTErrorCode2["EMPTY_TALONARIO_LIST"] = 16011] = "EMPTY_TALONARIO_LIST";
  DXTErrorCode2[DXTErrorCode2["EMPTY_DIRECCION_LIST"] = 16012] = "EMPTY_DIRECCION_LIST";
  DXTErrorCode2[DXTErrorCode2["UNAUTHORIZED"] = 1e5] = "UNAUTHORIZED";
  DXTErrorCode2[DXTErrorCode2["INVALID_USERNAME_OR_PASSWORD"] = 100001] = "INVALID_USERNAME_OR_PASSWORD";
  DXTErrorCode2[DXTErrorCode2["INVALID_AUTH_TOKEN"] = 100002] = "INVALID_AUTH_TOKEN";
  DXTErrorCode2[DXTErrorCode2["EXPIRED_AUTH_TOKEN"] = 100003] = "EXPIRED_AUTH_TOKEN";
  DXTErrorCode2[DXTErrorCode2["MISSING_AUTH_TOKEN"] = 100004] = "MISSING_AUTH_TOKEN";
  DXTErrorCode2[DXTErrorCode2["DXT_USER_DISABLED"] = 100005] = "DXT_USER_DISABLED";
  DXTErrorCode2[DXTErrorCode2["TANGO_USER_DISABLED"] = 100006] = "TANGO_USER_DISABLED";
  DXTErrorCode2[DXTErrorCode2["FORBIDDEN"] = 101e3] = "FORBIDDEN";
  DXTErrorCode2[DXTErrorCode2["CUSTOMER_ROLE_REQUIRED"] = 101001] = "CUSTOMER_ROLE_REQUIRED";
  DXTErrorCode2[DXTErrorCode2["VENDOR_ROLE_REQUIRED"] = 101002] = "VENDOR_ROLE_REQUIRED";
  DXTErrorCode2[DXTErrorCode2["ADMIN_ROLE_REQUIRED"] = 101003] = "ADMIN_ROLE_REQUIRED";
  DXTErrorCode2[DXTErrorCode2["CUSTOMER_OR_VENDOR_ROLE_REQUIRED"] = 101004] = "CUSTOMER_OR_VENDOR_ROLE_REQUIRED";
  DXTErrorCode2[DXTErrorCode2["INSUFFICIENT_PRIVILEGES"] = 101005] = "INSUFFICIENT_PRIVILEGES";
  DXTErrorCode2[DXTErrorCode2["CUSTOMER_DOES_NOT_BELONGS_TO_VENDOR"] = 101006] = "CUSTOMER_DOES_NOT_BELONGS_TO_VENDOR";
  DXTErrorCode2[DXTErrorCode2["ORDER_DOES_NOT_BELONGS_TO_VENDOR"] = 101007] = "ORDER_DOES_NOT_BELONGS_TO_VENDOR";
  DXTErrorCode2[DXTErrorCode2["ORDER_DOES_NOT_BELONGS_TO_CUSTOMER"] = 101008] = "ORDER_DOES_NOT_BELONGS_TO_CUSTOMER";
  DXTErrorCode2[DXTErrorCode2["USER_CANNOT_CREATE_ORDERS"] = 101009] = "USER_CANNOT_CREATE_ORDERS";
  DXTErrorCode2[DXTErrorCode2["USER_CANNOT_UPDATE_ORDERS"] = 101010] = "USER_CANNOT_UPDATE_ORDERS";
  DXTErrorCode2[DXTErrorCode2["USER_CANNOT_CANCEL_ORDERS"] = 101011] = "USER_CANNOT_CANCEL_ORDERS";
  DXTErrorCode2[DXTErrorCode2["USER_CANNOT_DELETE_ORDERS"] = 101012] = "USER_CANNOT_DELETE_ORDERS";
  DXTErrorCode2[DXTErrorCode2["USER_CANNOT_UPDATE_ORDER_IN_CURRENT_STATUS"] = 101013] = "USER_CANNOT_UPDATE_ORDER_IN_CURRENT_STATUS";
  DXTErrorCode2[DXTErrorCode2["ORDER_CUSTOMER_DOES_NOT_BELONGS_TO_VENDOR"] = 101014] = "ORDER_CUSTOMER_DOES_NOT_BELONGS_TO_VENDOR";
  DXTErrorCode2[DXTErrorCode2["USER_CANNOT_DELETE_ORDER_IN_CURRENT_STATUS"] = 101015] = "USER_CANNOT_DELETE_ORDER_IN_CURRENT_STATUS";
  DXTErrorCode2[DXTErrorCode2["USER_CANNOT_CANCEL_ORDER_IN_CURRENT_STATUS"] = 101016] = "USER_CANNOT_CANCEL_ORDER_IN_CURRENT_STATUS";
  DXTErrorCode2[DXTErrorCode2["TANGO_ERROR"] = 2e5] = "TANGO_ERROR";
  DXTErrorCode2[DXTErrorCode2["TANGO_DB_ACCESS_ERROR"] = 200001] = "TANGO_DB_ACCESS_ERROR";
  DXTErrorCode2[DXTErrorCode2["TANGO_DB_INVALID_DATA"] = 200002] = "TANGO_DB_INVALID_DATA";
  DXTErrorCode2[DXTErrorCode2["TANGO_DICTIONARY_ACCESS_ERROR"] = 200003] = "TANGO_DICTIONARY_ACCESS_ERROR";
  DXTErrorCode2[DXTErrorCode2["TANGO_DICTIONARY_INITIALIZATION_ERROR"] = 200004] = "TANGO_DICTIONARY_INITIALIZATION_ERROR";
  DXTErrorCode2[DXTErrorCode2["TANGO_COMPANY_NOT_SELECTED"] = 200005] = "TANGO_COMPANY_NOT_SELECTED";
  DXTErrorCode2[DXTErrorCode2["TANGO_COMPANY_NOT_LISTED_IN_DICTIONARY"] = 200006] = "TANGO_COMPANY_NOT_LISTED_IN_DICTIONARY";
  DXTErrorCode2[DXTErrorCode2["TANGO_COMPANY_ACCESS_ERROR"] = 200007] = "TANGO_COMPANY_ACCESS_ERROR";
  DXTErrorCode2[DXTErrorCode2["TANGO_COMPANY_INITIALIZATION_ERROR"] = 200008] = "TANGO_COMPANY_INITIALIZATION_ERROR";
  DXTErrorCode2[DXTErrorCode2["TANGO_CUSTOMER_NO_LONGER_EXISTS"] = 200009] = "TANGO_CUSTOMER_NO_LONGER_EXISTS";
  DXTErrorCode2[DXTErrorCode2["TANGO_VENDOR_NO_LONGER_EXISTS"] = 200010] = "TANGO_VENDOR_NO_LONGER_EXISTS";
  DXTErrorCode2[DXTErrorCode2["TANGO_CLIENTE_DB_DATA_ERROR"] = 200011] = "TANGO_CLIENTE_DB_DATA_ERROR";
  DXTErrorCode2[DXTErrorCode2["TANGO_VENDEDOR_DB_DATA_ERROR"] = 200012] = "TANGO_VENDEDOR_DB_DATA_ERROR";
  DXTErrorCode2[DXTErrorCode2["TANGO_PEDIDO_DB_DATA_ERROR"] = 200013] = "TANGO_PEDIDO_DB_DATA_ERROR";
  DXTErrorCode2[DXTErrorCode2["TANGO_PERFIL_DB_DATA_ERROR"] = 200014] = "TANGO_PERFIL_DB_DATA_ERROR";
  DXTErrorCode2[DXTErrorCode2["CLIENT_CONNECTION_ERROR"] = 7e5] = "CLIENT_CONNECTION_ERROR";
  DXTErrorCode2[DXTErrorCode2["INTERNAL_CLIENT_ERROR"] = 799e3] = "INTERNAL_CLIENT_ERROR";
  DXTErrorCode2[DXTErrorCode2["SERVER_BUSY"] = 8e5] = "SERVER_BUSY";
  DXTErrorCode2[DXTErrorCode2["INTERNAL_SERVER_ERROR"] = 899e3] = "INTERNAL_SERVER_ERROR";
  DXTErrorCode2[DXTErrorCode2["FATAL_MALFORMED_SERVER_RESPONSE"] = 899001] = "FATAL_MALFORMED_SERVER_RESPONSE";
  DXTErrorCode2[DXTErrorCode2["FATAL_DB_QUERY_FAILED"] = 899100] = "FATAL_DB_QUERY_FAILED";
  DXTErrorCode2[DXTErrorCode2["FATAL_UNKNOWN_DB_ERROR"] = 899103] = "FATAL_UNKNOWN_DB_ERROR";
  DXTErrorCode2[DXTErrorCode2["FATAL_SERVER_INITIALIZATION_ERROR"] = 899104] = "FATAL_SERVER_INITIALIZATION_ERROR";
  DXTErrorCode2[DXTErrorCode2["FATAL_CLIENT_INITIALIZATION_ERROR"] = 899105] = "FATAL_CLIENT_INITIALIZATION_ERROR";
  return DXTErrorCode2;
})(DXTErrorCode || {});
const _API_ERROR_MESSAGES = /* @__PURE__ */ new Map([
  [0, "Error inesperado"],
  [1e4, "Petición incorrecta"],
  [10001, "Parámetro inválido"],
  [10002, "Parámetros insuficientes"],
  [10003, "Nombre de grupo reservado"],
  [10004, "La contraseña actual no es correcta"],
  [10005, "Transporte inválido o no permitido"],
  [10006, "Deposito inválido o no permitido"],
  [10007, "Condicion de venta inválida o no permitida"],
  [10008, "Asiento inválido o no permitido"],
  [10009, "Talonario inválido o no permitido"],
  [10010, "Dirección de entrega inválida o no permitida"],
  [10011, "La fecha de entrega debe ser posterior a la fecha de alta"],
  [10012, "No existe un talonario de facturación B o C para asignar al pedido"],
  [10013, "Uno de los artículos ya no existe o es inaccesible para el cliente"],
  [11e3, "No encontrado"],
  [11001, "Cliente DXTango ya no existe"],
  [11002, "Vendedor DXTango ya no existe"],
  [11003, "Pedido no encontrado"],
  [11004, "Borrador no encontrado"],
  [12e3, "Acción no implementada"],
  [13e3, "Demasiadas peticiones"],
  [14e3, "Conflicto"],
  [14001, "Ya existe un registro con los datos que intenta ingresar"],
  [14002, "Ya existe un borrador con el mismo nombre"],
  [15e3, "Paquete de datos demasiado grande"],
  [16e3, "Entidad no procesable"],
  [16001, "El transporte no existe"],
  [16002, "El depósito no existe"],
  [16003, "La condición de venta no existe"],
  [16004, "El tipo de asiento no existe"],
  [16005, "El talonario no existe"],
  [16006, "La dirección de entrega no existe"],
  [16007, "No hay transportes disponibles"],
  [16008, "No hay depositos disponibles"],
  [16009, "No hay condiciones de venta disponibles"],
  [16010, "No hay tipos de asiento disponibles"],
  [16011, "No hay talonarios disponibles"],
  [16012, "No hay direcciones de entrega disponibles"],
  [1e5, "No autorizado"],
  [100001, "Usuario o contraseña incorrectos"],
  [100002, "Token de autorización no válido"],
  [100003, "Token de autorización caducado"],
  [100004, "Falta token de autorización"],
  [100005, `El usuario está inhabilitado en nuestro sistema`],
  [100006, `El usuario está inhabilitado en TANGO`],
  [101e3, "Acceso prohibido"],
  [101001, "Acceso solo para clientes"],
  [101002, "Acceso solo para vendedores"],
  [101004, "Acceso solo para clientes y vendedores"],
  [101003, "Acceso solo para administradores"],
  [101005, "Permisos insuficientes"],
  [101006, "El cliente ya no pertenece al vendedor"],
  [101007, "El pedido o borrador no pertenece al vendedor"],
  [101008, "El pedido o borrador no pertenece al cliente"],
  [101009, "El usuario no puede crear pedidos"],
  [101010, "El usuario no puede modificar pedidos"],
  [101011, "El usuario no puede anular pedidos"],
  [101012, "El usuario no puede eliminar pedidos"],
  [101013, "El usuario no puede modificar un pedido en el estado actual"],
  [101014, "El cliente asociado al pedido o borrador ya no pertenece al vendedor"],
  [101015, "El usuario no puede eliminar un pedido en el estado actual"],
  [101016, "El usuario no puede anular un pedido en el estado actual"],
  [2e5, "Error de acceso a Tango"],
  [200001, "Error de acceso a base de datos de Tango"],
  [200002, "La información en la base de datos de Tango es inconsistente"],
  [200003, "La DB del diccionario no existe o falló la conexión"],
  [200004, "Error al inicializar diccionario"],
  [200005, "Empresa no seleccionada"],
  [200006, "Empresa no listada en diccionario"],
  [200007, "La DB de la Empresa no existe o falló la conexión"],
  [200008, "Error al inicializar empresa"],
  [200009, "El cliente ya no existe en Tango"],
  [200010, "El vendedor ya no existe en Tango"],
  [200011, "Error en DB Tango, tabla de clientes"],
  [200012, "Error en DB Tango, tabla de vendedores"],
  [200013, "Error en DB Tango, tabla de pedidos"],
  [200014, "Error en DB Tango, tabla de perfiles de facturación"],
  [7e5, "No hay acceso a internet. Por favor verifique su conexión"],
  [799e3, "Error desconocido del navegador"],
  [8e5, "Servidor ocupado"],
  [899e3, "Error interno del servidor"],
  [899001, "Error crítico. Datos del servidor con formato inválido"],
  [899100, "Error crítico. Fallo en consulta a base de datos"],
  [899103, "Error crítico. Fallo desconocido en base de datos"],
  [899105, "Error crítico. Fallo al inicializar el cliente"],
  [899104, "Error crítico. Fallo al inicializar el servidor"]
]);
const _HTTP_STATUS_TO_API_ERRORS = /* @__PURE__ */ new Map([
  [
    HttpStatus.BAD_REQUEST,
    1e4
    /* BAD_REQUEST */
  ],
  [
    HttpStatus.NOT_FOUND,
    11e3
    /* NOT_FOUND */
  ],
  [
    HttpStatus.NOT_IMPLEMENTED,
    12e3
    /* NOT_IMPLEMENTED */
  ],
  [
    HttpStatus.CONFLICT,
    14e3
    /* CONFLICT */
  ],
  [
    HttpStatus.PAYLOAD_TOO_LARGE,
    15e3
    /* PAYLOAD_TOO_LARGE */
  ],
  [
    HttpStatus.UNPROCESSABLE_ENTITY,
    16e3
    /* UNPROCESSABLE_ENTITY */
  ],
  [
    HttpStatus.UNAUTHORIZED,
    1e5
    /* UNAUTHORIZED */
  ],
  [
    HttpStatus.FORBIDDEN,
    101e3
    /* FORBIDDEN */
  ],
  [
    HttpStatus.INTERNAL_SERVER_ERROR,
    899e3
    /* INTERNAL_SERVER_ERROR */
  ]
]);
const _API_ERROR_HTTP_STATUS = /* @__PURE__ */ new Map([
  [1e4, HttpStatus.BAD_REQUEST],
  [11e3, HttpStatus.NOT_FOUND],
  [12e3, HttpStatus.NOT_IMPLEMENTED],
  [13e3, HttpStatus.TOO_MANY_REQUESTS],
  [14e3, HttpStatus.CONFLICT],
  [15e3, HttpStatus.PAYLOAD_TOO_LARGE],
  [16e3, HttpStatus.UNPROCESSABLE_ENTITY],
  [1e5, HttpStatus.UNAUTHORIZED],
  [101e3, HttpStatus.FORBIDDEN],
  [2e5, HttpStatus.SERVICE_UNAVAILABLE],
  [200001, HttpStatus.SERVICE_UNAVAILABLE],
  [200002, HttpStatus.INTERNAL_SERVER_ERROR],
  [200003, HttpStatus.INTERNAL_SERVER_ERROR],
  [200004, HttpStatus.INTERNAL_SERVER_ERROR],
  [200006, HttpStatus.INTERNAL_SERVER_ERROR],
  [200007, HttpStatus.INTERNAL_SERVER_ERROR],
  [200008, HttpStatus.INTERNAL_SERVER_ERROR],
  // Unexpected errors (500000 to 999000)
  [7e5, HTTP_STATUS_UNAVAILABLE],
  [799e3, HTTP_STATUS_UNAVAILABLE],
  [8e5, HttpStatus.SERVICE_UNAVAILABLE],
  [899e3, HttpStatus.INTERNAL_SERVER_ERROR]
]);
const _ERRORS_REQUIRING_CONTACTING_ADMIN = [
  0,
  12e3,
  15e3,
  16e3,
  2e5,
  899e3
  /* INTERNAL_SERVER_ERROR */
];
function getGenericErrorCode(errorCode) {
  return errorCode - errorCode % 1e3;
}
function getDXTErrorDescription(errorCode) {
  var _a2, _b2;
  return ((_a2 = _API_ERROR_MESSAGES.get(errorCode)) == null ? void 0 : _a2.toString()) ?? ((_b2 = _API_ERROR_MESSAGES.get(getGenericErrorCode(errorCode))) == null ? void 0 : _b2.toString()) ?? errorCode.toString();
}
function getHttpStatusFromErrorCode(errorCode) {
  return _API_ERROR_HTTP_STATUS.get(errorCode) ?? _API_ERROR_HTTP_STATUS.get(getGenericErrorCode(errorCode)) ?? HttpStatus.INTERNAL_SERVER_ERROR;
}
function getErrorCodeFromHttpStatus(status) {
  return _HTTP_STATUS_TO_API_ERRORS.get(status) ?? 0;
}
function requiresContactingAdmin(errorCode) {
  return _ERRORS_REQUIRING_CONTACTING_ADMIN.includes(errorCode) || _ERRORS_REQUIRING_CONTACTING_ADMIN.includes(getGenericErrorCode(errorCode));
}
class DXTError {
  constructor(error_code, options) {
    this.error_code = error_code;
    this.generic_error_code = getGenericErrorCode(error_code);
    this.error_description = getDXTErrorDescription(error_code);
    this.status = getHttpStatusFromErrorCode(this.error_code);
    this.extra = options == null ? void 0 : options.extra;
    this.is_silent = options == null ? void 0 : options.isSilent;
    this.message_to_user = options == null ? void 0 : options.messageToUser;
  }
}
class DXTApiMalformedResponse extends Error {
  constructor(status) {
    super();
    this.status = status;
  }
}
class DXTException extends Error {
  constructor(error, customMessage) {
    const dxtError = error instanceof DXTError ? error : new DXTError(error, { extra: customMessage });
    super(dxtError.error_description);
    this.name = this.constructor.name.toString();
    this.dxtError = dxtError;
  }
  isUnexpected() {
    return isHttpServerError(this.dxtError.status);
  }
}
const IS_CLIENT_ONLINE_CHECK_URL = "https://one.one.one.one/";
class AxiosRequestPlusError extends Error {
  constructor(originalError, isInternetAlive, message) {
    const resolvedMessage = message ?? (originalError == null ? void 0 : originalError.message);
    super(typeof resolvedMessage === "string" ? resolvedMessage : void 0);
    this.originalError = originalError;
    this.isInternetAlive = isInternetAlive;
    this.name = "AxiosRequestPlusError";
    this.stack = typeof (originalError == null ? void 0 : originalError.stack) === "string" ? originalError == null ? void 0 : originalError.stack : void 0;
  }
}
async function _isInternetAlive() {
  try {
    const response = await fetch(IS_CLIENT_ONLINE_CHECK_URL, {
      method: "HEAD"
    });
    if (response.ok)
      return true;
    return false;
  } catch (_2) {
    return false;
  }
}
async function axiosRequestPlus(config2) {
  try {
    return await axios.request(config2);
  } catch (e) {
    let isInternetAlive = false;
    if (e instanceof AxiosError && e.response) {
      isInternetAlive = true;
    } else {
      try {
        isInternetAlive = await _isInternetAlive();
      } catch (_2) {
      }
    }
    throw new AxiosRequestPlusError(e, isInternetAlive);
  }
}
function isErrorInfo(data) {
  const errorInfo = data;
  if (!isRealObject(errorInfo))
    return false;
  const { status, error_code, error_description } = errorInfo;
  const statusNumber = status && typeof status === "number" ? status : Number.parseInt(status == null ? void 0 : status.toString());
  const errorCodeNumber = error_code && typeof error_code === "number" ? error_code : Number.parseInt(error_code == null ? void 0 : error_code.toString());
  return Number.isInteger(statusNumber) && Number.isInteger(errorCodeNumber) && typeof error_description === "string";
}
function isDXTException(e, errorCode) {
  return e instanceof DXTException && (errorCode == null || e.dxtError.error_code === errorCode || e.dxtError.generic_error_code === errorCode);
}
function isNotFoundException(e) {
  return isDXTException(e, DXTErrorCode.NOT_FOUND);
}
function exceptionToDXTErrorInfo(error) {
  var _a2, _b2, _c;
  const originalErrorInfo = (_b2 = (_a2 = error == null ? void 0 : error.originalError) == null ? void 0 : _a2.response) == null ? void 0 : _b2.data;
  if (isErrorInfo(originalErrorInfo))
    return originalErrorInfo;
  if (error instanceof DXTException)
    return error.dxtError;
  if (error instanceof ValidationException) {
    const statusCode = HttpStatus.BAD_REQUEST;
    const error_code2 = getErrorCodeFromHttpStatus(statusCode);
    return {
      status: statusCode,
      error_description: getDXTErrorDescription(error_code2),
      error_code: error_code2,
      extra: error.message
    };
  }
  if (error instanceof HttpException) {
    const { statusCode } = error;
    const error_code2 = getErrorCodeFromHttpStatus(statusCode);
    return {
      status: statusCode,
      error_description: getDXTErrorDescription(error_code2),
      error_code: error_code2,
      extra: error.message
    };
  }
  let isInternetAlive = null;
  if (error instanceof AxiosRequestPlusError) {
    isInternetAlive = error.isInternetAlive;
    error = error.originalError;
  }
  if (error instanceof DXTApiMalformedResponse) {
    const error_code2 = DXTErrorCode.FATAL_MALFORMED_SERVER_RESPONSE;
    return {
      status: error.status,
      error_description: getDXTErrorDescription(error_code2),
      error_code: error_code2
    };
  }
  if (error instanceof AxiosError) {
    const error_code2 = isInternetAlive ?? false ? DXTErrorCode.INTERNAL_SERVER_ERROR : DXTErrorCode.CLIENT_CONNECTION_ERROR;
    return {
      status: ((_c = error.response) == null ? void 0 : _c.status) ?? getHttpStatusFromErrorCode(error_code2),
      error_description: getDXTErrorDescription(error_code2),
      error_code: error_code2,
      extra: error.message
    };
  }
  const error_code = DXTErrorCode.UNEXPECTED_ERROR;
  return {
    error_code,
    error_description: getDXTErrorDescription(error_code),
    status: getHttpStatusFromErrorCode(error_code),
    extra: error.message
  };
}
var ExecutionMode = /* @__PURE__ */ ((ExecutionMode2) => {
  ExecutionMode2[ExecutionMode2["development"] = 0] = "development";
  ExecutionMode2[ExecutionMode2["test"] = 1] = "test";
  ExecutionMode2[ExecutionMode2["beta"] = 2] = "beta";
  ExecutionMode2[ExecutionMode2["production"] = 3] = "production";
  return ExecutionMode2;
})(ExecutionMode || {});
let _executionMode;
function _initEnvironmentConfig() {
  var _a2;
  if (isNavigator()) {
    const executionModeString = window == null ? void 0 : window.dxTangoExecutionMode;
    if (!executionModeString)
      return;
    _executionMode = stringToEnum(ExecutionMode, executionModeString);
  }
  if (!isNode())
    return;
  const nodeEnv = process.env.NODE_ENV;
  if (nodeEnv === "development") {
    _executionMode = 0;
    return;
  }
  if (nodeEnv === "test") {
    _executionMode = 1;
    return;
  }
  const currentDirectory = path.basename(((_a2 = process == null ? void 0 : process.cwd) == null ? void 0 : _a2.call(process)) ?? "").toLowerCase();
  const isBeta2 = currentDirectory === "beta";
  if (isBeta2) {
    _executionMode = 2;
    return;
  }
  _executionMode = 3;
}
function _throwEnvironmentFatalError() {
  if (isNode()) {
    const errorCode = DXTErrorCode.FATAL_SERVER_INITIALIZATION_ERROR;
    console.error(getDXTErrorDescription(errorCode));
    process.exit(errorCode);
  }
  throw new DXTException(DXTErrorCode.FATAL_CLIENT_INITIALIZATION_ERROR);
}
function getExecutionMode() {
  if (_executionMode === void 0) {
    _initEnvironmentConfig();
    if (_executionMode === void 0)
      _throwEnvironmentFatalError();
  }
  return _executionMode;
}
function getExecutionModeString() {
  const executionMode = getExecutionMode();
  return enumToString(ExecutionMode, executionMode);
}
function isDevelopment() {
  return getExecutionMode() === 0;
}
function isProduction() {
  return getExecutionMode() === 3;
}
function createChakraEmotionCache() {
  return createCache({ key: "cha" });
}
createChakraEmotionCache();
function jsonResponse(body, init) {
  (init == null ? void 0 : init.status) ?? HttpStatus.OK;
  const response = new Response(stringifyJSON(body), init);
  if (response.ok) {
    response.okBodyObject = body;
  } else {
    response.errorBodyObject = body;
  }
  return response;
}
function getDefaultHttpStatusFromMethod(method) {
  if (!method)
    return HttpStatus.OK;
  switch (method) {
    case "POST":
      return HttpStatus.CREATED;
  }
  return HttpStatus.OK;
}
function errorApiResponse(errorCode) {
  const error = new DXTException(errorCode);
  const { status } = error.dxtError;
  return jsonResponse(
    {
      status,
      error_description: error.message
    },
    { status }
  );
}
async function mapEndpoint(request, params, endpoints) {
  const {
    get: getEndpoint,
    post: postEndpoint,
    patch: patchEndpoint,
    put: putEndpoint,
    delete: deleteEndpoint
  } = endpoints;
  switch (request.method) {
    case "GET":
      if (getEndpoint != null)
        return await getEndpoint.get(request, params);
    case "POST":
      if (postEndpoint != null)
        return await postEndpoint.post(request, params);
    case "PATCH":
      if (patchEndpoint != null)
        return await patchEndpoint.patch(request, params);
    case "PUT":
      if (putEndpoint != null)
        return await putEndpoint.put(request, params);
    case "DELETE":
      if (deleteEndpoint != null)
        return await deleteEndpoint.delete(request, params);
  }
  return errorApiResponse(DXTErrorCode.NOT_IMPLEMENTED);
}
const notFoundApiResponse = async () => errorApiResponse(DXTErrorCode.NOT_FOUND);
const unimplementedApiResponse = async () => errorApiResponse(DXTErrorCode.NOT_IMPLEMENTED);
const ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  if (new URL(request.url).pathname.startsWith("/api/")) {
    return await notFoundApiResponse();
  }
  return await handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
async function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return await new Promise((resolve2, reject) => {
    let shellRendered = false;
    const emotionCache = createChakraEmotionCache();
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxs(CacheProvider, { value: emotionCache, children: [
        /* @__PURE__ */ jsx(
          RemixServer,
          {
            context: remixContext,
            url: request.url,
            abortDelay: ABORT_DELAY
          }
        ),
        /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: getEnvScript() } })
      ] }),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const emotionServer = createEmotionServer(emotionCache);
          const bodyWithStyles = emotionServer.renderStylesToNodeStream();
          body.pipe(bodyWithStyles);
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve2(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function getEnvScript() {
  const executionMode = getExecutionModeString();
  return `<script>window.dxTangoExecutionMode="${executionMode}"<\/script>`;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
class ValueObjectException extends ValidationException {
  constructor(message) {
    super(message);
    this.name = "ValueObjectException";
  }
}
class ValueObjectBase {
  toString() {
    if (this.value === void 0) {
      return "undefined";
    } else if (this.value === null) {
      return "null";
    } else {
      return this.value.toString();
    }
  }
  valueOf() {
    return this.value;
  }
  rawValueToErrorString(input) {
    return valueToString(input);
  }
  extraErrorInfo(input) {
    return "";
  }
  getError(input, customMessageBegin) {
    const className = this.constructor.name.toString();
    const rawValueErrorString = "******";
    const extraErrorInfo = this.extraErrorInfo(input);
    const messageBegin = customMessageBegin ?? `Invalid value`;
    const exceptionMessage = `${messageBegin} ${className}(${rawValueErrorString})` + (extraErrorInfo !== "" ? `. ${extraErrorInfo}` : "");
    return new ValueObjectException(exceptionMessage);
  }
  throwError(input, customMessage) {
    throw this.getError(input, customMessage);
  }
}
class ValueObject extends ValueObjectBase {
  constructor(input) {
    super();
    this.value = this.validate(input);
  }
}
class VOInteger extends ValueObject {
  validate(input) {
    let value = input;
    try {
      if (typeof value === "string")
        value = Number.parseInt(value);
      if (typeof value === "number" && Number.isInteger(value))
        return value;
    } catch (_2) {
    }
    this.throwError(input);
  }
}
class VONumberRange extends ValueObjectBase {
  constructor(value, min, max, isInteger) {
    super();
    this.min = min;
    this.max = max;
    this.isInteger = isInteger ?? false;
    this.value = this.validate(value);
  }
  extraErrorInfo(input) {
    return `must to be between ${this.min} and ${this.max}`;
  }
  validate(input) {
    let value = input;
    try {
      if (typeof value === "string")
        value = this.isInteger ? Number.parseInt(value) : Number.parseFloat(value);
      if (value == null || this.isInteger && !Number.isInteger(value) || !this.isInteger && !Number.isFinite(value)) {
        this.throwError(input);
      }
      if ((this.min == null || value >= this.min) && (this.max == null || value <= this.max))
        return value;
    } catch (_2) {
    }
    this.throwError(input);
  }
}
class VOIntegerRange extends VONumberRange {
  constructor(value, min, max) {
    super(value, min, max, true);
  }
}
class VOPositiveNumber extends VONumberRange {
  constructor(value) {
    super(value, 0, void 0, void 0);
  }
}
class VOBigIntRange extends ValueObjectBase {
  constructor(value, min, max) {
    super();
    this.min = min;
    this.max = max;
    this.value = this.validate(value);
  }
  validate(input) {
    let value = input;
    try {
      if (typeof value === "string" || typeof value === "number")
        value = BigInt(value);
      if (typeof value !== "bigint")
        this.throwError(input);
      if ((typeof this.min !== "bigint" || value >= this.min) && (typeof this.max !== "bigint" || value <= this.max))
        return value;
    } catch (_2) {
    }
    this.throwError(input);
  }
}
class VOUInt64 extends VOBigIntRange {
  constructor(value) {
    super(value, UINT64_MIN_VALUE, UINT64_MAX_VALUE);
  }
}
class VOBoolean extends ValueObject {
  validate(input) {
    try {
      return toBoolean(input);
    } catch (_2) {
    }
    this.throwError(input);
  }
}
class VOString extends ValueObject {
  validate(input) {
    if (!isStr(input))
      this.throwError(input);
    return input;
  }
}
class VOTrimmedString extends ValueObject {
  constructor(input, maxLength) {
    super(input);
    this.maxLength = maxLength;
  }
  validate(input) {
    if (!isStr(input))
      this.throwError(input);
    const value = input.trim();
    if (this.maxLength == null || value.length <= this.maxLength)
      return value;
    this.throwError(input);
  }
}
class VONotEmptyString extends ValueObject {
  constructor(input, maxLength) {
    super(input);
    this.maxLength = maxLength;
  }
  validate(input) {
    if (typeof input === "string") {
      const value = input.trim();
      if (value !== "" && (this.maxLength == null || value.length <= this.maxLength))
        return value;
    }
    this.throwError(input);
  }
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
BigInt(1) << BigInt(64);
function limitNumber(value, min, max) {
  min = min ?? Number.NEGATIVE_INFINITY;
  max = max ?? Number.POSITIVE_INFINITY;
  if (min > max) {
    min = max;
    max = min;
  }
  if (value < min)
    return min;
  if (value > max)
    return max;
  return value;
}
const HOUR_IN_MINUTES = 60;
const DAY_IN_MINUTES = HOUR_IN_MINUTES * 24;
const MINUTE_IN_SECONDS = 60;
const DAY_IN_SECONDS = DAY_IN_MINUTES * 60;
const MINUTE_IN_MILLISECONDS = MINUTE_IN_SECONDS * 1e3;
const DAY_IN_MILLISECONDS = DAY_IN_SECONDS * 1e3;
function now() {
  return Date.now();
}
function addDays(date, days) {
  const ts = date.getTime();
  const millis = days * DAY_IN_MILLISECONDS;
  return new Date(ts + millis);
}
function dateToISOStringZ(date) {
  return date.toISOString().substring(0, 19) + "Z";
}
function getDateHHMMSS(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}${minutes}${seconds}`;
}
class VODate extends ValueObject {
  validate(input) {
    if (typeof input !== "string")
      this.throwError(input);
    const value = input.trim();
    if (value.length === 10 && value[4] === "-" && value[7] === "-") {
      try {
        const date = new Date(value);
        if (!Number.isNaN(date.valueOf()))
          return date;
      } catch (e) {
      }
    }
    this.throwError(input);
  }
  toString() {
    return dateToISOStringZ(this.value).substring(0, 10);
  }
}
class VOEmailAddress extends ValueObject {
  throwInvalidAddressError(rawAddress) {
    this.throwError(rawAddress, "Invalid email address");
  }
  validate(input) {
    if (typeof input === "string") {
      const value = input.trim().toLowerCase();
      if (validator.isEmail(value, {
        domain_specific_validation: true
      }))
        return value;
    }
    this.throwError(input);
  }
}
class VOMD5 extends ValueObject {
  constructor(input) {
    if (Buffer.isBuffer(input))
      input = input.toString("hex");
    super(input);
  }
  validate(input) {
    let value;
    if (Buffer.isBuffer(input)) {
      value = input.toString("hex");
    }
    if (typeof input === "string") {
      value = input.trim().toLowerCase();
    }
    if (typeof value === "string" && validator.isMD5(value))
      return value;
    this.throwError(input);
  }
  toBuffer() {
    return Buffer.from(this.value, "hex");
  }
  static random() {
    const randomBytes = Array(16);
    for (let i = 0; i < randomBytes.length; i++)
      randomBytes[i] = random(0, 255);
    return new VOMD5(Buffer.from(randomBytes));
  }
}
class VOUInt16 extends VOIntegerRange {
  constructor(input) {
    super(input, UINT16_MIN, UINT16_MAX);
  }
}
class VOUInt32 extends VOIntegerRange {
  constructor(value) {
    super(value, UINT32_MIN, UINT32_MAX);
  }
}
class VOHexadecimal extends ValueObject {
  validate(input) {
    if (Buffer.isBuffer(input)) {
      return input.toString("hex").toLowerCase();
    }
    if (typeof input === "string") {
      const value = input.trim().toLowerCase();
      if (validator.isHexadecimal(value))
        return value;
    }
    this.throwError(input);
  }
}
class VOSHA1 extends ValueObject {
  validate(input) {
    let value;
    if (Buffer.isBuffer(input)) {
      value = input.toString("hex");
    }
    if (typeof input === "string") {
      value = input.trim().toLowerCase();
    }
    if (typeof value === "string" && validator.isHash(value, "sha1"))
      return value;
    this.throwError(input);
  }
  toBuffer() {
    return Buffer.from(this.value, "hex");
  }
  static random() {
    const randomBytes = Array(20);
    for (let i = 0; i < randomBytes.length; i++)
      randomBytes[i] = random(0, 255);
    return new VOSHA1(Buffer.from(randomBytes));
  }
}
class VOTCPPort extends ValueObject {
  validate(input) {
    let value = input;
    if (typeof value === "string")
      value = Number.parseInt(value);
    if (typeof value === "number" && isTCPPort(value))
      return value;
    this.throwError(input);
  }
}
class VOHost extends ValueObject {
  validate(input) {
    let value = input;
    if (typeof value === "string") {
      value = value.trim().toLowerCase();
      if (isHost(value))
        return value;
    }
    this.throwError(input);
  }
}
function tryVO(toTry, defaultVO) {
  try {
    return toTry();
  } catch (_2) {
  }
  return defaultVO;
}
class VOAuthRandom extends VOUInt64 {
  static generate() {
    const ht = process.hrtime()[1] % 10;
    const result = Math.trunc(
      Math.random() / 10 ** ht / (ht + 1) * Number.MAX_SAFE_INTEGER
    );
    return new VOAuthRandom(BigInt(result));
  }
}
class AuthTokenProps {
  constructor(universalId, userId, random2, roleNumber) {
    this.universalId = new VOHexadecimal(universalId), this.userId = new VOUInt32(userId);
    this.random = new VOAuthRandom(random2);
    this.roleNumber = new VOUInt16(roleNumber);
  }
}
class VOWeakCheckAuthToken extends ValueObject {
  constructor() {
    super(...arguments);
    this._payload = null;
    this._verificationHash = null;
  }
  validate(rawValue) {
    if (rawValue instanceof AuthTokenProps) {
      throw new ValidationException(
        "VOWeakCheckAuthToken does not accept AuthTokenProps as value"
      );
    }
    let value = rawValue;
    try {
      if (typeof value === "string") {
        value = value.trim().toLowerCase();
        const parts = value.split("-");
        if (parts.length === 5) {
          const universalId = parts[0];
          const userId = Number.parseInt("0x" + parts[1]);
          const random2 = BigInt("0x" + parts[2]);
          const roleNumber = Number.parseInt(parts[3]);
          this.verificationHash = new VOSHA1(parts[4]);
          return new AuthTokenProps(
            universalId,
            userId,
            random2,
            roleNumber
          );
        }
      }
    } catch (e) {
      console.error(e);
    }
    this.throwError(rawValue);
  }
  rawValueToErrorString(rawValue) {
    return typeof rawValue === "string" ? rawValue : JSON.stringify(rawValue);
  }
  getVerificationHashString() {
    if (!this.verificationHash)
      throw new DXTException(DXTErrorCode.UNEXPECTED_ERROR, "VOWeakCheckAuthToken.verificationHash == [undefined]");
    return this.verificationHash.toString();
  }
  getPayloadString() {
    const universalId = this.value.universalId.valueOf();
    const userId = this.value.userId.valueOf().toString(16);
    const randomNumber = this.value.random.valueOf().toString(16);
    const roleNumber = this.value.roleNumber.valueOf();
    return `${universalId}-${userId}-${randomNumber}-${roleNumber}`;
  }
  toString() {
    this._payload ?? (this._payload = this.getPayloadString());
    this._verificationHash ?? (this._verificationHash = this.getVerificationHashString());
    return `${this._payload}-${this._verificationHash}`;
  }
}
const _host = isNavigator() ? window.location.host : "";
const _storeKeyHash = md5(_host);
function getStorageKey(base) {
  return `${base}_${_storeKeyHash}`;
}
function getStorage() {
  if (isNavigator())
    return window.localStorage;
  return null;
}
const authConfig = {
  storageAuthTokenKey: getStorageKey("auth_token"),
  storageUserInfoKey: getStorageKey("user_info")
};
const storage = getStorage();
const useTokenExistenceCheck = () => {
  const [tokenExists, setTokenExists] = useState(!(getStoredToken() == null));
  const authTokenKey = authConfig.storageAuthTokenKey;
  const handleTokenExistence = useCallback(
    (event) => {
      if (event.key === authTokenKey) {
        setTokenExists(getStoredToken() != null);
      }
    },
    [authTokenKey, getStoredToken()]
  );
  useEffect(() => {
    if (!storage)
      return;
    window.addEventListener("storage", handleTokenExistence);
    return () => {
      window.removeEventListener("storage", handleTokenExistence);
    };
  }, []);
  return tokenExists;
};
function getStoredToken() {
  if (!storage)
    return null;
  return storage.getItem(authConfig.storageAuthTokenKey);
}
function getStoredUserInfo() {
  if (!storage)
    return null;
  return parseJSON(storage.getItem(authConfig.storageUserInfoKey) ?? "");
}
function setStoredToken(token) {
  if (!storage)
    return;
  if (token !== getStoredToken()) {
    storage.setItem(authConfig.storageAuthTokenKey, token);
    window.dispatchEvent(new Event("storage"));
  }
}
function setStoredUserInfo(userInfo) {
  if (!storage)
    return;
  storage.setItem(authConfig.storageUserInfoKey, JSON.stringify(userInfo));
}
function deleteAuthStoredData() {
  if (!storage)
    return;
  if (storage.getItem(authConfig.storageAuthTokenKey) != null || storage.getItem(authConfig.storageUserInfoKey) != null) {
    storage.removeItem(authConfig.storageAuthTokenKey);
    storage.removeItem(authConfig.storageUserInfoKey);
    window.dispatchEvent(new Event("storage"));
  }
}
var UserRole = /* @__PURE__ */ ((UserRole2) => {
  UserRole2[UserRole2["customer"] = 0] = "customer";
  UserRole2[UserRole2["vendor"] = 1] = "vendor";
  UserRole2[UserRole2["admin"] = 2] = "admin";
  return UserRole2;
})(UserRole || {});
class AuthState {
  mapOrElse(options) {
    const { changingToken, loading, loggedIn, disconnected, orElse } = options;
    if (this instanceof AuthStateLoading && loading)
      return loading(this);
    if (this instanceof AuthStateChangingToken && changingToken)
      return changingToken(this);
    if (this instanceof AuthStateLoggedIn && loggedIn)
      return loggedIn(this);
    if (this instanceof AuthStateDisconnected && disconnected)
      return disconnected(this);
    return orElse(this);
  }
  mapReadyOrNot(options) {
    const { ready, notReady } = options;
    if (this instanceof AuthStateLoggedIn || this instanceof AuthStateDisconnected) {
      return ready(this);
    }
    return notReady(this);
  }
  map(options) {
    const { changingToken, loading, loggedIn, disconnected } = options;
    return this.mapOrElse({
      loading,
      changingToken,
      loggedIn,
      disconnected,
      orElse: (_2) => {
        throw Error("Invalid AuthState");
      }
    });
  }
  isLoading() {
    return this instanceof AuthStateLoading;
  }
  isChangingToken() {
    return this instanceof AuthStateChangingToken;
  }
  isLoggedIn() {
    return this instanceof AuthStateLoggedIn;
  }
  isDisconnected() {
    return this instanceof AuthStateDisconnected;
  }
  isDisconnectedAndNotRedirecting() {
    return this instanceof AuthStateDisconnected && !this.isRedirecting;
  }
  userOrThrow() {
    if (this instanceof AuthStateLoggedIn)
      return this.userInfo;
    throw new DXTException(DXTErrorCode.UNAUTHORIZED);
  }
  userOrNull() {
    return this instanceof AuthStateLoggedIn ? this.userInfo : null;
  }
  isAdmin() {
    var _a2;
    return ((_a2 = this.userOrNull()) == null ? void 0 : _a2.role) === UserRole.admin;
  }
  isVendor() {
    var _a2;
    return ((_a2 = this.userOrNull()) == null ? void 0 : _a2.role) === UserRole.vendor;
  }
  isCustomer() {
    var _a2;
    return ((_a2 = this.userOrNull()) == null ? void 0 : _a2.role) === UserRole.customer;
  }
  getUserId() {
    return this instanceof AuthStateLoggedIn ? this.userInfo.id : null;
  }
  authTokenOrNull() {
    if (this instanceof AuthStateLoggedIn) {
      try {
        return new VOWeakCheckAuthToken(this.authToken);
      } catch (e) {
        console.error(e);
      }
    }
    return null;
  }
  authTokenString() {
    var _a2;
    return (_a2 = this.authTokenOrNull()) == null ? void 0 : _a2.toString();
  }
  errorOrNull() {
    if (this instanceof AuthStateDisconnected)
      return this.error ?? null;
    return null;
  }
  nonSilentErrorOrNull() {
    var _a2, _b2;
    const isDisconnected = this instanceof AuthStateDisconnected;
    const silent = isDisconnected && typeof ((_a2 = this.error) == null ? void 0 : _a2.is_silent) === "boolean" && ((_b2 = this.error) == null ? void 0 : _b2.is_silent);
    if (isDisconnected && !silent)
      return this.error ?? null;
    return null;
  }
}
class AuthStateDisconnected extends AuthState {
  constructor(error, isRedirecting = false) {
    super();
    this.error = error;
    this.isRedirecting = isRedirecting;
    deleteAuthStoredData();
  }
}
class AuthStateChangingToken extends AuthState {
  constructor(newToken) {
    super();
    this.newToken = newToken;
  }
}
class AuthStateLoading extends AuthState {
}
class AuthStateLoggedIn extends AuthState {
  constructor(authToken, userInfo) {
    super();
    this.authToken = authToken;
    this.userInfo = userInfo;
    setStoredToken(authToken);
    setStoredUserInfo(userInfo);
  }
}
class AuthAction {
}
function isBasicAppResources(app) {
  return (app == null ? void 0 : app.navigate) != null && app.location != null && typeof app.retryCallback === "function";
}
const DEFAULT_HOSTNAME = "localhost";
const DEFAULT_PORT = "3000";
const DEFAULT_BASE_URL = `http://${DEFAULT_HOSTNAME}:${DEFAULT_PORT}`;
const baseUrl = (isNode() ? `http://${process.env.HOST ?? DEFAULT_HOSTNAME}:${process.env.PORT ?? DEFAULT_PORT}` : (_b = (_a = windowOrNull()) == null ? void 0 : _a.location) == null ? void 0 : _b.origin) ?? DEFAULT_BASE_URL;
const dxtApiConfig = {
  baseUrl
};
class DXTApiRequestState {
  constructor(originalRequest) {
    this.originalRequest = originalRequest;
  }
  map(options) {
    const { success, error } = options;
    if (this instanceof DXTApiRequestStateSuccess && success)
      return success(this);
    if (this instanceof DXTApiRequestStateError && error)
      return error(this);
    throw Error("Invalid ApiRequestState state");
  }
  isSuccess() {
    return this instanceof DXTApiRequestStateSuccess;
  }
  isError() {
    return this instanceof DXTApiRequestStateError;
  }
  errorInfoOrNull() {
    if (this instanceof DXTApiRequestStateError)
      return this.info;
    return null;
  }
  flat() {
    return this.map({
      error: (errorState) => errorState.info,
      success: (successState) => successState.data
    });
  }
}
class DXTApiRequestStateError extends DXTApiRequestState {
  constructor(info, originalRequest) {
    super(originalRequest);
    this.info = info;
  }
}
class DXTApiRequestStateSuccess extends DXTApiRequestState {
  constructor(data, originalRequest) {
    super(originalRequest);
    this.data = data;
  }
}
function createDXTApiParams(app, options) {
  const {
    headers: originalHeaders,
    transformResponse: originalTransformers,
    pathParams,
    url: originalUrl,
    ...remainingOptions
  } = options ?? {};
  let url = originalUrl;
  if (typeof url === "string" && pathParams != null) {
    Object.entries(pathParams).forEach(([key, value]) => {
      url = url == null ? void 0 : url.replaceAll(`:${key}`, encodeURIComponent(value));
    });
  }
  let newTransformers = [
    (data, headers) => {
      if (typeof data !== "undefined")
        return parseJSON(data);
    }
  ];
  const token = app == null ? void 0 : app.authToken;
  if (Array.isArray(originalTransformers)) {
    newTransformers.push(...originalTransformers);
  } else if (typeof originalTransformers === "function") {
    newTransformers.push(originalTransformers);
  }
  return {
    headers: {
      ...token != null ? { authorization: token } : null,
      ...originalHeaders
    },
    baseURL: dxtApiConfig.baseUrl,
    url,
    ...remainingOptions,
    transformResponse: newTransformers
  };
}
async function dxtApiRequest(params, app) {
  const dxtParams = createDXTApiParams(app, params);
  let retry = true;
  while (retry) {
    try {
      const response = await axiosRequestPlus(dxtParams);
      if (isErrorInfo(response == null ? void 0 : response.data)) {
        const dxtApiError = response == null ? void 0 : response.data;
        throw new DXTException(
          new DXTError(dxtApiError.error_code, {
            extra: dxtApiError.extra,
            isSilent: dxtApiError.is_silent
          })
        );
      }
      if ((response == null ? void 0 : response.data) === void 0)
        throw new DXTApiMalformedResponse(
          (response == null ? void 0 : response.status) ?? HTTP_STATUS_UNAVAILABLE
        );
      const data = response.data;
      return new DXTApiRequestStateSuccess(data, dxtParams);
    } catch (error) {
      const dxtApiError = exceptionToDXTErrorInfo(error);
      const errorState = new DXTApiRequestStateError(
        dxtApiError,
        dxtParams
      );
      if (!app || !isBasicAppResources(app))
        return errorState;
      if ((params == null ? void 0 : params.silent) ?? false)
        return errorState;
      retry = typeof app.retryCallback === "function" && await app.retryCallback({ message: dxtApiError.error_description });
      if (!retry)
        return errorState;
    }
  }
  const impossibleError = exceptionToDXTErrorInfo(new DXTException(DXTErrorCode.INTERNAL_SERVER_ERROR, "Impossible state"));
  const impossibleRequestState = new DXTApiRequestStateError(
    impossibleError,
    dxtParams
  );
  return impossibleRequestState;
}
const API_BASE_PATH = "/api";
function urlJoin(base, ...paths) {
  let result = typeof base === "string" ? base : "/";
  if ((paths == null ? void 0 : paths.length) > 0) {
    for (let path2 of paths) {
      if (typeof path2 !== "string")
        path2 = "";
      const resultLastChar = result.length > 0 ? result[result.length - 1] : "";
      const pathFirstChar = path2.length > 0 ? path2[0] : "";
      if (resultLastChar != "/") {
        if (pathFirstChar != "/")
          result += "/";
      } else {
        if (pathFirstChar == "/")
          path2 = path2.substring(1);
      }
      result += path2;
    }
  }
  return result;
}
function apiEndpoint(path2, method) {
  return {
    url: urlJoin(API_BASE_PATH, path2),
    method
  };
}
const API_AUTH_LOGIN = apiEndpoint("/auth/login", "POST");
const API_AUTH_LOGOUT = apiEndpoint("/auth/logout", "POST");
const API_AUTH_CONNECT = apiEndpoint("/auth/connect", "POST");
const API_AUTH_CHANGE_PASSWORD = apiEndpoint("/auth/password", "PATCH");
const authConnectRequest = async (token, app, silent) => {
  var _a2, _b2;
  const originalUserInfo = token === ((_a2 = app.authState) == null ? void 0 : _a2.authToken) ? (_b2 = app.authState) == null ? void 0 : _b2.userInfo : null;
  const user_info_updated_at = originalUserInfo ? originalUserInfo.timestamp_modificacion : 0;
  const result = await dxtApiRequest(
    {
      ...API_AUTH_CONNECT,
      headers: { authorization: token },
      params: {
        user_info_updated_at
      },
      silent
    },
    app
  );
  return result.map({
    error: (errorState) => {
      return new DXTApiRequestStateError(
        errorState.info,
        errorState.originalRequest
      );
    },
    success: (success) => {
      if (success.data == null && originalUserInfo) {
        return new DXTApiRequestStateSuccess(
          {
            auth_token: token,
            user: originalUserInfo
          },
          success.originalRequest
        );
      }
      return new DXTApiRequestStateSuccess(
        success.data,
        success.originalRequest
      );
    }
  });
};
const authLoginRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      ...API_AUTH_LOGIN,
      data: input,
      silent: true
    },
    app
  );
};
const authLogoutRequest = async (app) => {
  return await dxtApiRequest(
    {
      ...API_AUTH_LOGOUT
    },
    app
  );
};
const authChangePasswordRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      ...API_AUTH_CHANGE_PASSWORD,
      data: input,
      silent: true
    },
    app
  );
};
class AuthActionLogin extends AuthAction {
  constructor(params, errorCallback) {
    super();
    this.params = params;
    this.errorCallback = errorCallback;
  }
  async run(authState, setAuthState, app, onRetryCallback) {
    setAuthState(new AuthStateLoading());
    const response = await authLoginRequest(this.params, app);
    void response.map({
      success: async (successState) => {
        const { user, auth_token } = successState.data;
        setAuthState(new AuthStateLoggedIn(auth_token, user));
      },
      error: async (errorState) => {
        const apiErrorInfo = errorState.info;
        setAuthState(new AuthStateDisconnected(apiErrorInfo));
        if (this.errorCallback)
          this.errorCallback(apiErrorInfo);
      }
    });
  }
}
const RETRY = "Reintentar";
const CANCEL = "Cancelar";
const BACK = "Regresar";
const CLOSE = "Cerrar";
const SAVE_DRAFT = "Guardar borrador";
const UPDATE_DRAFT = "Actualizar borrador";
const CONVERT_TO_DRAFT = "Convertir en Borrador";
const CONVERT_TO_ORDER = "Convertir en Pedido";
const UPDATE = "Actualizar";
const DELETE = "Eliminar";
const PRINT = "Imprimir";
const CREATE_ORDER = "Crear Pedido";
const SEND_ORDER = "Enviar Pedido";
const UPDATE_ORDER = "Actualizar Pedido";
const CREATE_DRAFT = "Crear Borrador";
const PREVIOUS = "Anterior";
const NEXT = "Siguiente";
const FILTER_PLACEHOLDER = "Filtrar...";
const FILTER_NO_RESULTS = "La búsqueda no produjo resultados";
const SUMMARY = "Ver resumen";
const NO_NAME = "Sin nombre";
const NO_DATE = "Sin fecha";
const NONE_F = "Ninguna";
const NONE_M = "Ninguno";
const NONEXISTENT_PRODUCT = "Artículo inexistente";
const PASSWORD_TOO_SHORT = "Contraseña muy corta";
const PASSWORD_TOO_LONG = "Contraseña muy larga";
const PASSWORD_INVALID_CHARS = "Evite caracteres no válidos";
const PASSWORD_CHANGED = "Contraseña modificada";
const AN_ERROR_OCCURRED = "Ha ocurrido un error";
const dateToLocale = (value) => {
  if (value == null)
    return NO_DATE;
  const date = value instanceof Date ? value : new Date(value);
  return date.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
};
function appPath(path2) {
  return urlJoin(URL_ROOT_PATH, path2);
}
function resolveUserStatusColor(user) {
  const { habilitado_en_dxt, habilitado_en_tango, usuario_tango_existe } = user;
  return !habilitado_en_dxt ? "grey.500" : habilitado_en_dxt && !usuario_tango_existe ? "red.400" : habilitado_en_dxt && usuario_tango_existe && habilitado_en_tango === false ? "yellow.400" : "green.400";
}
function pathParamsToUrl(url, pathParams) {
  if (typeof url === "string" && pathParams != null) {
    Object.entries(pathParams).forEach(([key, value]) => {
      url = url == null ? void 0 : url.replaceAll(`:${key}`, encodeURIComponent(value));
    });
  }
  return url;
}
function getSelectedValue(arrayOfObjects, selected, key) {
  if (arrayOfObjects.length === 1)
    return arrayOfObjects[0][key ?? "id"];
  const foundArray = arrayOfObjects.find((arr) => arr[selected ?? "selected"] === true);
  return foundArray == null ? void 0 : foundArray[key ?? "id"];
}
const URL_ROOT_PATH = "/";
urlJoin(URL_ROOT_PATH, "auth");
const URL_AUTH_LOGIN_PATH = appPath("/");
const URL_AUTH_CHANGE_PASSWORD_PATH = appPath("/change_password");
const URL_PEDIDOS_PATH = appPath("/orders");
const URL_BORRADORES_PATH = appPath("/drafts");
const URL_MAIN_PATH = URL_PEDIDOS_PATH;
const URL_PEDIDOS_ADD_PATH = appPath("/orders/:client/add");
const URL_PEDIDOS_CUSTOMER_ADD_PATH = appPath("/orders/add");
const URL_PEDIDOS_EDIT_PATH = appPath("/orders/:id/edit");
const URL_BORRADORES_ADD_PATH = appPath("/drafts/:client/add");
const URL_BORRADORES_CUSTOMER_ADD_PATH = appPath("/drafts/add");
const URL_BORRADORES_EDIT_PATH = appPath("/drafts/:id/edit");
const URL_SETTINGS_PATH = appPath("/settings");
const URL_SETTINGS_TANGO_PATH = appPath("/settings/tango");
const URL_SETTINGS_COMPANY_PATH = appPath("/settings/company");
const URL_SETTINGS_MISC_PATH = appPath("/settings/misc");
const URL_SETTINGS_CUSTOMERS_PATH = appPath("/settings/users/customers");
const URL_SETTINGS_CUSTOMERS_ADD_PATH = appPath("/settings/users/customers/add");
const URL_SETTINGS_CUSTOMERS_EDIT_PATH = appPath("/settings/users/customers/:id/edit");
const URL_SETTINGS_VENDORS_PATH = appPath("/settings/users/vendors");
const URL_SETTINGS_VENDORS_ADD_PATH = appPath("/settings/users/vendors/add");
const URL_SETTINGS_VENDORS_EDIT_PATH = appPath("/settings/users/vendors/:id/edit");
const URL_SETTINGS_ARTICULO_PRINT_LIST = appPath("/settings/product_list/print");
const URL_SETTINGS_ARTICULO_EDIT_LIST = appPath("/settings/product_list/edit");
class AuthActionLogout extends AuthAction {
  // doNotCallAPI: used when user token has already expired or is invalid
  // one less call to the API since user is in fact unauthorized
  constructor(avoidCallingAPI) {
    super();
    this.avoidCallingAPI = avoidCallingAPI ?? false;
  }
  async run(authState, setAuthState, app, onRetryCallback) {
    if (authState instanceof AuthStateLoggedIn && !this.avoidCallingAPI) {
      await authLogoutRequest({
        ...app,
        authState
      });
    }
    setAuthState(new AuthStateDisconnected(void 0, true));
    app.navigate(URL_AUTH_LOGIN_PATH);
  }
}
class AuthActionChangeToken extends AuthAction {
  constructor(newToken, tokenChangedFromApp, errorCallback) {
    super();
    this.newToken = newToken;
    this.tokenChangedFromApp = tokenChangedFromApp;
    this.errorCallback = errorCallback;
  }
  async run(authState, setAuthState, app, onRetryCallback) {
    setAuthState(new AuthStateLoading());
    const { newToken } = this;
    const response = await authConnectRequest(newToken, app, true);
    response.map({
      success: (stateSuccess) => {
        const userInfo = stateSuccess.data.user;
        setAuthState(
          new AuthStateLoggedIn(newToken, userInfo)
        );
      },
      error: (errorState) => {
        const apiErrorInfo = errorState.info;
        setAuthState(new AuthStateDisconnected(apiErrorInfo));
        if (this.errorCallback)
          this.errorCallback(apiErrorInfo);
      }
    });
  }
}
function isTokenError(errorCode) {
  return errorCode === HttpStatus.UNAUTHORIZED || errorCode === HttpStatus.FORBIDDEN;
}
const checkTokenErrorAndRedirect = async (app, status) => {
  var _a2;
  const forceLogin = isTokenError(status);
  if (!forceLogin)
    return false;
  if (app.authState && app.authState instanceof AuthStateLoggedIn) {
    await ((_a2 = app.authDispatch) == null ? void 0 : _a2.call(void 0, new AuthActionLogout(true)));
  }
  redirectLoginWithReturnUrl(app.navigate);
  return true;
};
function redirectLoginWithReturnUrl(navigate) {
  var _a2;
  let returnUrl;
  if (((_a2 = windowOrNull()) == null ? void 0 : _a2.location) != null) {
    const { pathname, search, hash } = window == null ? void 0 : window.location;
    returnUrl = `${pathname}${search}${hash}`;
  } else {
    returnUrl = null;
  }
  const newSearchParams = returnUrl != null ? `?${new URLSearchParams([["returnUrl", returnUrl]]).toString()}` : "";
  navigate(`${URL_ROOT_PATH}${newSearchParams}`);
}
function loggedInRedirect(app) {
  if (app.authState instanceof AuthStateLoggedIn) {
    const searchParams = new URLSearchParams(app.location.search);
    const returnUrl = searchParams.get("returnUrl");
    const redirectURL = returnUrl != null && returnUrl !== "/" ? returnUrl : URL_MAIN_PATH;
    app.navigate(redirectURL, {
      replace: true
    });
  }
}
class AuthActionRefreshAll extends AuthAction {
  constructor(currentUserInfo, errorCallback) {
    super();
    this.currentUserInfo = currentUserInfo;
    this.errorCallback = errorCallback;
  }
  async run(authState, setAuthState, app, onRetryCallback) {
    if (!(authState instanceof AuthStateLoggedIn))
      throw new DXTException(DXTErrorCode.INTERNAL_SERVER_ERROR, "Must be logged in");
    const storedToken = getStoredToken();
    if (storedToken == null || authState.authToken !== storedToken) {
      setAuthState(new AuthStateDisconnected());
      return;
    }
    const response = await authConnectRequest(authState.authToken, app, true);
    response.map({
      error: (errorState) => {
        const apiErrorInfo = errorState.info;
        if (isTokenError(apiErrorInfo.status)) {
          setAuthState(new AuthStateDisconnected());
        }
      },
      success: (success) => {
        const currentUser = authState.userInfo;
        const currentAuthToken = authState.authToken;
        const newUser = success.data.user;
        const newAuthToken = success.data.auth_token;
        if (currentAuthToken !== newAuthToken || currentUser.timestamp_modificacion !== newUser.timestamp_modificacion) {
          setAuthState(
            new AuthStateLoggedIn(newAuthToken, newUser)
          );
        }
      }
    });
  }
}
class BusEvent {
  constructor(name, payload) {
    this.name = name;
    this.payload = payload;
  }
}
const eventBus$1 = new Nanobus();
function emitBusEvent(event) {
  eventBus$1.emit(event.name, event);
}
const VALIDATION_ERROR = "Error de validación de datos";
const ERRORS_FALLBACK = "Error desconocido. Intente nuevamente en unos momentos";
function CustomDialog(props) {
  const {
    isOpen,
    dialogTitle,
    dialogContents,
    dialogSize,
    hideButtons,
    handleCancel,
    handleCancelWording,
    handleAccept,
    handleAcceptWording
  } = props;
  const cancelRef = useRef(null);
  return /* @__PURE__ */ jsxs(
    Modal,
    {
      onClose: handleCancel,
      isOpen,
      closeOnOverlayClick: false,
      size: { base: "sm", sm: "md", md: "lg" },
      isCentered: true,
      children: [
        /* @__PURE__ */ jsx(
          ModalOverlay,
          {
            bg: "blackAlpha.300",
            backdropFilter: "auto",
            backdropInvert: "80%",
            backdropBlur: "2px"
          }
        ),
        /* @__PURE__ */ jsxs(ModalContent, { children: [
          /* @__PURE__ */ jsx(ModalHeader, { children: dialogTitle ?? "" }),
          /* @__PURE__ */ jsx(ModalCloseButton, {}),
          /* @__PURE__ */ jsx(ModalBody, { children: dialogContents }),
          /* @__PURE__ */ jsx(ModalFooter, { children: hideButtons != true && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Button, { ref: cancelRef, onClick: handleCancel, variant: "solid", children: handleCancelWording ?? CANCEL }),
            handleAccept && /* @__PURE__ */ jsx(Button, { variant: "solid", color: "primary", onClick: handleAccept, children: handleAcceptWording ?? RETRY })
          ] }) })
        ] })
      ]
    }
  );
}
const RetryDialog = ({
  message,
  retryable,
  onResolve
}) => {
  retryable = retryable ?? true;
  const handleCancel = () => {
    onResolve(false);
  };
  const handleRetry = () => {
    onResolve(true);
  };
  return /* @__PURE__ */ jsx(
    CustomDialog,
    {
      isOpen: true,
      handleCancel,
      handleAccept: retryable ? handleRetry : void 0,
      dialogContents: message ?? ERRORS_FALLBACK
    }
  );
};
function useRetryDialog() {
  return useModal(RetryDialog);
}
function useBasicAppResources(authStateOverride, authDispatchOverride) {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();
  const authState = authStateOverride ?? auth.state;
  const authDispatch = authDispatchOverride ?? auth.dispatch;
  const retryCallback = useRetryDialog();
  const authToken = authState.authTokenString();
  return {
    authToken,
    location,
    navigate,
    ...authState instanceof AuthStateLoggedIn ? { authState, authDispatch } : {},
    retryCallback
  };
}
const AUTH_NEW_TOKEN_EVENT = "auth_new_token";
const defaultValues = {
  state: _resolveState(),
  dispatch: async (action2) => {
    await Promise.resolve();
  },
  retry: async () => {
    await Promise.resolve();
  }
};
const AuthContext = createContext(defaultValues);
function _resolveState() {
  if (typeof window === "undefined")
    return new AuthStateDisconnected();
  const queryparams = new URLSearchParams(window.location.search);
  const storedToken = getStoredToken();
  const newToken = queryparams.get("at") ?? null;
  if (newToken != null && newToken !== storedToken) {
    return new AuthStateChangingToken(newToken);
  }
  if (storedToken == null) {
    return new AuthStateDisconnected();
  }
  const forceRefresh = queryparams.get("force_refresh") === "1";
  if (forceRefresh) {
    return new AuthStateChangingToken(storedToken);
  }
  const userInfo = getStoredUserInfo();
  if (userInfo)
    return new AuthStateLoggedIn(storedToken, userInfo);
  return new AuthStateChangingToken(storedToken);
}
const AuthProvider = ({ children, onRetry }) => {
  const [authState, setAuthState] = useState(_resolveState());
  const lastAction = useRef(null);
  const app = useBasicAppResources(authState);
  const appRef = useRef(app);
  useRef(false);
  const tokenExistence = useTokenExistenceCheck();
  const dispatch = async (action2) => {
    lastAction.current = action2;
    await action2.run(authState, setAuthState, appRef.current, onRetry);
  };
  eventBus$1.removeAllListeners(AUTH_NEW_TOKEN_EVENT);
  eventBus$1.on(AUTH_NEW_TOKEN_EVENT, (newToken) => {
    (async () => {
      await dispatch(new AuthActionChangeToken(newToken, true));
    })().catch((e) => {
    });
  });
  appRef.current = useBasicAppResources(authState, dispatch);
  const retry = async () => {
    if (lastAction.current)
      await lastAction.current.run(authState, setAuthState, app, onRetry);
  };
  useEffect(() => {
    setTimeout(() => {
      if (authState instanceof AuthStateChangingToken)
        return;
      const newState = _resolveState();
      if (_.isEqual(newState, authState))
        return;
      setAuthState(newState);
    }, 250);
  }, [tokenExistence]);
  useEffect(() => {
    if (authState instanceof AuthStateChangingToken) {
      (async () => {
        await dispatch(new AuthActionChangeToken(authState.newToken, false));
      })().catch((e) => {
      });
    }
  }, []);
  useEffect(() => {
    if (app.location.pathname === URL_AUTH_LOGIN_PATH) {
      loggedInRedirect(app);
    }
  }, [authState, app.location]);
  const values = useMemo(
    () => ({
      state: authState,
      dispatch,
      retry
    }),
    [authState]
  );
  return /* @__PURE__ */ jsx(AuthContext.Provider, { value: values, children });
};
const useAuth = () => useContext(AuthContext);
const ServerStyleContext = createContext(null);
const ClientStyleContext = createContext(null);
const { definePartsStyle: definePartsStyle$4, defineMultiStyleConfig: defineMultiStyleConfig$4 } = createMultiStyleConfigHelpers(inputAnatomy.keys);
const inputBaseStyle = definePartsStyle$4((props) => {
  const { theme: theme2 } = props;
  const ec = mode$1("white", "gray.800")(props);
  return {
    field: {
      backgroundColor: `${getColorVar(theme2, ec)} !important`
    }
  };
});
const variantOutlineStyle = definePartsStyle$4((props) => {
  const { theme: theme2 } = props;
  const ec = mode$1("red.500", "red.300")(props);
  return {
    field: {
      _invalid: {
        borderColor: `${getColorVar(theme2, ec)} !important`,
        boxShadow: `0 0 0 1px ${getColorVar(theme2, ec)} !important`
      }
    }
  };
});
const variants = {
  outline: variantOutlineStyle
};
const inputTheme = defineMultiStyleConfig$4({
  baseStyle: inputBaseStyle,
  variants
});
const { definePartsStyle: definePartsStyle$3, defineMultiStyleConfig: defineMultiStyleConfig$3 } = createMultiStyleConfigHelpers(tableAnatomy.keys);
const variantGray = definePartsStyle$3((props) => {
  const { colorScheme: c, colorMode } = props;
  return {
    thead: {
      tr: {
        th: {
          background: colorMode === "light" ? `${c}.300` : `${c}.900`
        }
      }
    },
    tbody: {
      tr: {
        "&:nth-of-type(even)": {
          td: {
            background: colorMode === "light" ? `${c}.100` : `${c}.800`
          }
        }
      }
    }
  };
});
const variantStripedOverCard = definePartsStyle$3((props) => {
  const { colorScheme: c, colorMode } = props;
  return {
    table: {
      thead: {
        tr: {
          th: {
            background: colorMode === "light" ? `${c}.300` : `${c}.900`
          }
        }
      },
      "tbody > tr:nth-of-type(even)": {
        background: colorMode === "light" ? `${c}.50` : `${c}.800`
      },
      "tbody > tr:nth-of-type(odd)": {
        background: colorMode === "light" ? `${c}.100` : `${c}.700`
      }
    }
  };
});
const variantStripedOverCardWithHover = definePartsStyle$3((props) => {
  const { colorScheme: c, colorMode } = props;
  return {
    table: {
      thead: {
        tr: {
          th: {
            background: colorMode === "light" ? `${c}.300` : `${c}.900`,
            fontSize: "sm"
          }
        }
      },
      "tbody > tr:nth-of-type(even)": {
        background: colorMode === "light" ? `${c}.50` : `${c}.700`
      },
      "tbody > tr:nth-of-type(even):hover": {
        background: colorMode === "light" ? `${c}.200` : `${c}.800`
      },
      "tbody > tr:nth-of-type(odd)": {
        background: colorMode === "light" ? `${c}.100` : `${c}.600`
      },
      "tbody > tr:nth-of-type(odd):hover": {
        background: colorMode === "light" ? `${c}.200` : `${c}.800`
      }
    }
  };
});
const tableTheme = defineMultiStyleConfig$3({
  variants: {
    grayOverCard: variantGray,
    stripedOverCard: variantStripedOverCard,
    stripedHoverOverCard: variantStripedOverCardWithHover
  }
});
const colors = {
  amber: {
    50: "#fff8e1",
    100: "#ffecb3",
    200: "#ffe082",
    300: "#ffd54f",
    400: "#ffca28",
    500: "#ffc107",
    600: "#ffb300",
    700: "#ffa000",
    800: "#ff8f00",
    900: "#ff6f00"
  },
  blue: {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1"
  },
  brown: {
    50: "#efebe9",
    100: "#d7ccc8",
    200: "#bcaaa4",
    300: "#a1887f",
    400: "#8d6e63",
    500: "#795548",
    600: "#6d4c41",
    700: "#5d4037",
    800: "#4e342e",
    900: "#3e2723"
  },
  cyan: {
    50: "#E0F7FA",
    100: "#B2EBF2",
    200: "#80DEEA",
    300: "#4DD0E1",
    400: "#26C6DA",
    500: "#00BCD4",
    600: "#00ACC1",
    700: "#0097A7",
    800: "#00838F",
    900: "#006064"
  },
  deepBlue: {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b"
  },
  deepOrange: {
    50: "#fbe9e7",
    100: "#ffccbc",
    200: "#ffab91",
    300: "#ff8a65",
    400: "#ff7043",
    500: "#ff5722",
    600: "#f4511e",
    700: "#e64a19",
    800: "#d84315",
    900: "#bf360c"
  },
  deepPurple: {
    50: "#EDE7F6",
    100: "#D1C4E9",
    200: "#B39DDB",
    300: "#9575CD",
    400: "#7E57C2",
    500: "#673AB7",
    600: "#5E35B1",
    700: "#512DA8",
    800: "#4527A0",
    900: "#311B92"
  },
  green: {
    50: "#E8F5E9",
    100: "#C8E6C9",
    200: "#A5D6A7",
    300: "#81C784",
    400: "#66BB6A",
    500: "#4CAF50",
    600: "#43A047",
    700: "#388E3C",
    800: "#2E7D32",
    900: "#1B5E20"
  },
  gray: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121"
  },
  indigo: {
    50: "#e8eaf6",
    100: "#c5cae9",
    200: "#9fa8da",
    300: "#7986cb",
    400: "#5c6bc0",
    500: "#3f51b5",
    600: "#3949ab",
    700: "#303f9f",
    800: "#283593",
    900: "#1a237e"
  },
  lightGreen: {
    50: "#F1F8E9",
    100: "#DCEDC8",
    200: "#C5E1A5",
    300: "#AED581",
    400: "#9CCC65",
    500: "#8BC34A",
    600: "#7CB342",
    700: "#689F38",
    800: "#558B2F",
    900: "#33691E"
  },
  lightBlue: {
    50: "#E1F5FE",
    100: "#B3E5FC",
    200: "#81D4FA",
    300: "#4FC3F7",
    400: "#29B6F6",
    500: "#03A9F4",
    600: "#039BE5",
    700: "#0288D1",
    800: "#0277BD",
    900: "#01579B"
  },
  lime: {
    50: "#f9fbe7",
    100: "#f0f4c3",
    200: "#e6ee9c",
    300: "#dce775",
    400: "#d4e157",
    500: "#cddc39",
    600: "#c0ca33",
    700: "#afb42b",
    800: "#9e9d24",
    900: "#827717"
  },
  orange: {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100"
  },
  pink: {
    50: "#fce4ec",
    100: "#f8bbd0",
    200: "#f48fb1",
    300: "#f06292",
    400: "#ec407a",
    500: "#e91e63",
    600: "#d81b60",
    700: "#c2185b",
    800: "#ad1457",
    900: "#880e4f"
  },
  purple: {
    50: "#F3E5F5",
    100: "#E1BEE7",
    200: "#CE93D8",
    300: "#BA68C8",
    400: "#AB47BC",
    500: "#9C27B0",
    600: "#8E24AA",
    700: "#7B1FA2",
    800: "#6A1B9A",
    900: "#4A148C"
  },
  red: {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c"
  },
  yellow: {
    50: "#fffde7",
    100: "#fff9c4",
    200: "#fff59d",
    300: "#fff176",
    400: "#ffee58",
    500: "#ffeb3b",
    600: "#fdd835",
    700: "#fbc02d",
    800: "#f9a825",
    900: "#f57f17"
  },
  teal: {
    50: "#e0f2f1",
    100: "#b2dfdb",
    200: "#80cbc4",
    300: "#4db6ac",
    400: "#26a69a",
    500: "#009688",
    600: "#00897b",
    700: "#00796b",
    800: "#00695c",
    900: "#004d40"
  }
};
const { definePartsStyle: definePartsStyle$2, defineMultiStyleConfig: defineMultiStyleConfig$2 } = createMultiStyleConfigHelpers(alertAnatomy.keys);
const baseStyle$2 = definePartsStyle$2((props) => {
  const { status } = props;
  const successBase = status === "success" && {
    container: {
      background: "green.500",
      color: "white"
    },
    icon: {
      color: "white"
    }
  };
  const warningBase = status === "warning" && {
    container: {
      background: "amber.500",
      color: "black"
    },
    icon: {
      color: "black"
    }
  };
  const errorBase = status === "error" && {
    container: {
      background: "red.700",
      color: "white"
    },
    icon: {
      color: "white"
    }
  };
  const infoBase = status === "info" && {
    container: {
      background: "blue.700",
      color: "white"
    },
    icon: {
      color: "white"
    }
  };
  return {
    ...successBase,
    ...warningBase,
    ...errorBase,
    ...infoBase
  };
});
const alertTheme = defineMultiStyleConfig$2({ baseStyle: baseStyle$2 });
const { definePartsStyle: definePartsStyle$1, defineMultiStyleConfig: defineMultiStyleConfig$1 } = createMultiStyleConfigHelpers(cardAnatomy.keys);
const baseStyle$1 = definePartsStyle$1((props) => {
  const { theme: theme2 } = props;
  const ec = mode$1("brown.50", "gray.700")(props);
  return {
    container: {
      backgroundColor: `${getColorVar(theme2, ec)}`
    }
  };
});
const cardTheme = defineMultiStyleConfig$1({ baseStyle: baseStyle$1 });
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
const sizes = {
  xl: definePartsStyle({
    control: defineStyle({
      boxSize: 8
    }),
    label: defineStyle({
      fontSize: "2xl",
      marginLeft: 6
    })
  })
};
const checkboxTheme = defineMultiStyleConfig({ sizes });
const baseStyle = defineStyle((props) => {
  const { theme: theme2 } = props;
  const ec = mode$1("white", "gray.800")(props);
  return {
    backgroundColor: `${getColorVar(theme2, ec)} !important`
  };
});
const textareaTheme = defineStyleConfig({
  baseStyle
});
const config = extendTheme({
  initialColorMode: "light",
  colors,
  useSystemColorMode: false,
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: props.colorMode === "dark" ? "gray.900" : "gray.900"
      }
    })
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif"
  },
  components: {
    Table: tableTheme,
    Input: inputTheme,
    Textarea: textareaTheme,
    Checkbox: checkboxTheme,
    Alert: alertTheme,
    Card: cardTheme,
    FormLabel: {
      baseStyle: {
        marginBottom: "0.25rem"
      }
    }
  }
});
const theme = extendTheme(config);
const CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode";
const useAppColorManager = (cookies) => {
  const defaultColorMode = theme.config.initialColorMode;
  const colorMode = useMemo(() => {
    let color = getColorMode(cookies);
    if (color == null && defaultColorMode != null) {
      cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${defaultColorMode}`;
      color = defaultColorMode;
    }
    return color;
  }, [cookies]);
  const cookieManager = useConst(cookieStorageManagerSSR(cookies));
  return {
    colorMode,
    colorModeManager: typeof cookies === "string" ? cookieManager : localStorageManager
  };
};
function getColorMode(cookies) {
  const match = cookies == null ? void 0 : cookies.match(
    new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`)
  );
  return match == null ? void 0 : match[2];
}
const RootDocument = withEmotionCache(
  ({ children, cookies }, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);
    const { colorMode, colorModeManager } = useAppColorManager(cookies);
    useEffect(() => {
      emotionCache.sheet.container = document.head;
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      });
      clientStyleData == null ? void 0 : clientStyleData.reset();
    }, []);
    return /* @__PURE__ */ jsxs(
      "html",
      {
        lang: "es",
        ...colorMode != null && {
          "data-theme": colorMode,
          style: { colorScheme: colorMode }
        },
        children: [
          /* @__PURE__ */ jsxs("head", { children: [
            /* @__PURE__ */ jsx(Meta, {}),
            /* @__PURE__ */ jsx(Links, {}),
            serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ jsx(
              "style",
              {
                "data-emotion": `${key} ${ids.join(" ")}`,
                dangerouslySetInnerHTML: { __html: css }
              },
              key
            ))
          ] }),
          /* @__PURE__ */ jsxs(
            "body",
            {
              ...colorMode != null && {
                className: `chakra-ui-${colorMode}`
              },
              children: [
                /* @__PURE__ */ jsx(
                  ChakraProvider,
                  {
                    theme,
                    colorModeManager,
                    toastOptions: {
                      defaultOptions: {
                        position: "bottom",
                        duration: 5e3,
                        isClosable: true
                      }
                    },
                    children
                  }
                ),
                /* @__PURE__ */ jsx(ScrollRestoration, {}),
                /* @__PURE__ */ jsx(Scripts, {})
              ]
            }
          )
        ]
      }
    );
  }
);
const loader$D = async ({ request }) => {
  return request.headers.get("cookie") ?? "";
};
const links = () => {
  return [
    ...cssBundleHref != null ? [{ rel: "stylesheet", href: cssBundleHref }] : []
  ];
};
const meta = () => [
  { charset: "utf-8" },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, interactive-widget=resizes-content"
  },
  { title: getExecutionModeString() }
];
function App() {
  let cookies = useLoaderData();
  if (typeof document !== "undefined") {
    cookies = document.cookie;
  }
  return /* @__PURE__ */ jsx(RootDocument, { cookies, children: /* @__PURE__ */ jsx(ModalProvider, { children: /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) }) }) });
}
function ErrorBoundary() {
  let cookies = "";
  if (typeof document !== "undefined") {
    cookies = document.cookie;
  }
  const error = useRouteError();
  (error == null ? void 0 : error.status) ?? void 0;
  const message = (error == null ? void 0 : error.message) ?? "Unknown error";
  return /* @__PURE__ */ jsx(RootDocument, { cookies, children: /* @__PURE__ */ jsxs(VStack, { h: "100vh", justify: "center", p: 20, children: [
    /* @__PURE__ */ jsx(Heading, { children: "There was an error" }),
    /* @__PURE__ */ jsx(Text, { children: message }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx(Text, { children: "Hey, developer, you should replace this with what you want your users to see." })
  ] }) });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  default: App,
  links,
  loader: loader$D,
  meta
}, Symbol.toStringTag, { value: "Module" }));
class FetchState {
  constructor(originalRequest) {
    this.originalRequest = originalRequest;
  }
  mapOrElse(options) {
    const { loading, success, error, orElse } = options;
    if (this instanceof FetchStateLoading && loading)
      return loading(this);
    if (this instanceof FetchStateSuccess && success)
      return success(this);
    if (this instanceof FetchStateError && error)
      return error(this);
    return orElse(this);
  }
  map(options) {
    const { loading, success, error } = options;
    return this.mapOrElse({
      loading,
      success,
      error,
      orElse: (_2) => {
        throw Error("Invalid useAxiosFetch state");
      }
    });
  }
  isLoading() {
    return this instanceof FetchStateLoading;
  }
  isSuccess() {
    return this instanceof FetchStateSuccess;
  }
  isError() {
    return this instanceof FetchStateError;
  }
  errorOrNull() {
    if (this instanceof FetchStateError)
      return this.error;
    return null;
  }
  callIfLoading(func) {
    return this instanceof FetchStateLoading ? func(this) ?? false : false;
  }
  callIfSuccess(func) {
    return this instanceof FetchStateSuccess ? func(this) ?? false : false;
  }
  callIfError(func) {
    return this instanceof FetchStateError ? func(this) ?? false : false;
  }
}
class FetchStateLoading extends FetchState {
  constructor(originalRequest) {
    super(originalRequest);
  }
}
class FetchStateError extends FetchState {
  constructor(error, originalRequest) {
    super(originalRequest);
    this.error = error;
  }
}
class FetchStateSuccess extends FetchState {
  constructor(data, originalRequest) {
    super(originalRequest);
    this.data = data;
  }
}
function useAxiosFetch(params, ...args) {
  const [fetchState, setFetchState] = useState(
    new FetchStateLoading(params)
  );
  const retry = async () => {
    setFetchState(new FetchStateLoading(fetchState.originalRequest));
    await makeRequest();
  };
  const reload = async () => {
    if (!fetchState.isSuccess()) {
      setFetchState(new FetchStateLoading(fetchState.originalRequest));
    }
    await makeRequest();
  };
  const makeRequest = async () => {
    var _a2;
    const params2 = fetchState.originalRequest;
    try {
      const response = await axiosRequestPlus(params2);
      const data = ((_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2.data) ?? (response == null ? void 0 : response.data);
      setFetchState(new FetchStateSuccess(data, params2));
    } catch (err) {
      if (err instanceof AxiosRequestPlusError) {
        const axiosError = err;
        const [errorParser] = args;
        const parsedError = errorParser ? errorParser(axiosError) : axiosError;
        const stateError = new FetchStateError(parsedError, params2);
        setFetchState(stateError);
      } else {
        throw err;
      }
    }
  };
  useEffect(() => {
    makeRequest();
  }, []);
  return {
    state: fetchState,
    reload,
    retry
  };
}
function useDXTApiFetch(params) {
  const app = useBasicAppResources();
  const retryCallback = app.retryCallback;
  const dxtApiParams = createDXTApiParams(app, params);
  const { state, retry, reload } = useAxiosFetch(
    dxtApiParams,
    (axiosError) => {
      return exceptionToDXTErrorInfo(axiosError);
    }
  );
  useEffect(() => {
    (async () => {
      const isSilent = (params == null ? void 0 : params.silent) ?? false;
      if (isSilent)
        return;
      if (!(state instanceof FetchStateError))
        return;
      const stateError = state.error;
      const isTokenError2 = await checkTokenErrorAndRedirect(app, stateError.status);
      if (isTokenError2)
        return;
      if (retryCallback && await retryCallback({
        message: stateError.error_description
      }))
        retry();
    })();
  }, [state]);
  return {
    state,
    retry,
    reload
  };
}
apiEndpoint("/dxt/usuario/auxiliares", "GET");
const _API_DXT_CUSTOMER = "/dxt/cliente";
const _API_DXT_CUSTOMER_ID = "/dxt/cliente/:id";
const API_DXT_CUSTOMER_GET_ALL = apiEndpoint(_API_DXT_CUSTOMER, "GET");
const API_DXT_CUSTOMER_CREATE = apiEndpoint(_API_DXT_CUSTOMER, "POST");
const API_DXT_CUSTOMER_GET_ONE = apiEndpoint(_API_DXT_CUSTOMER_ID, "GET");
const API_DXT_CUSTOMER_UPDATE = apiEndpoint(_API_DXT_CUSTOMER_ID, "PATCH");
const API_DXT_CUSTOMER_DELETE = apiEndpoint(_API_DXT_CUSTOMER_ID, "DELETE");
const _API_DXT_VENDOR = "/dxt/vendedor";
const _API_DXT_VENDOR_ID = "/dxt/vendedor/:id";
const API_DXT_VENDOR_GET_ALL = apiEndpoint(_API_DXT_VENDOR, "GET");
apiEndpoint(_API_DXT_VENDOR, "POST");
const API_DXT_VENDOR_GET_ONE = apiEndpoint(_API_DXT_VENDOR_ID, "GET");
const API_DXT_VENDOR_UPDATE = apiEndpoint(_API_DXT_VENDOR_ID, "PATCH");
const API_DXT_VENDOR_DELETE = apiEndpoint(_API_DXT_VENDOR_ID, "DELETE");
const API_DXT_VENDOR_CUSTOMERS = apiEndpoint("/dxt/vendedor/cliente", "GET");
function useGetAllDXTCustomers() {
  return useDXTApiFetch({
    ...API_DXT_CUSTOMER_GET_ALL,
    silent: true
  });
}
function useGetOneDXTCustomer(id) {
  return useDXTApiFetch({
    ...API_DXT_CUSTOMER_GET_ONE,
    pathParams: { id },
    silent: true
  });
}
function useGetAllDXTVendors() {
  return useDXTApiFetch({
    ...API_DXT_VENDOR_GET_ALL,
    silent: true
  });
}
function useGetOneDXTVendor(id) {
  return useDXTApiFetch({
    ...API_DXT_VENDOR_GET_ONE,
    pathParams: { id },
    silent: true
  });
}
function useGetDXTVendorCustomers() {
  return useDXTApiFetch({
    ...API_DXT_VENDOR_CUSTOMERS,
    silent: true
  });
}
const buildSelectOptions = (props) => {
  const { data, fieldsMap, disabledIcon } = props;
  const result = [];
  data.length && data.forEach((data2) => {
    const label = Array.isArray(fieldsMap == null ? void 0 : fieldsMap.label) ? fieldsMap.label.map((value) => {
      return data2[value];
    }).join(" - ") : data2[(fieldsMap == null ? void 0 : fieldsMap.label) ?? "name"];
    result.push({
      label,
      value: data2[(fieldsMap == null ? void 0 : fieldsMap.value) ?? "id"],
      ...(fieldsMap == null ? void 0 : fieldsMap.selected) != null && {
        selected: data2[fieldsMap.selected]
      },
      ...(fieldsMap == null ? void 0 : fieldsMap.isEnabled) != null && {
        isDisabled: !data2[fieldsMap.isEnabled]
      },
      ...(fieldsMap == null ? void 0 : fieldsMap.isEnabled) != null && disabledIcon != null && !data2[fieldsMap == null ? void 0 : fieldsMap.isEnabled] && {
        icon: disabledIcon
      }
    });
  });
  return result;
};
function useTangoList(props) {
  const { endpoint, params, fieldsMap, disabledIcon } = props;
  const { state, retry } = useDXTApiFetch({
    ...endpoint,
    silent: true,
    params
  });
  const result = state.mapOrElse({
    success: (state2) => {
      const data = state2.data;
      return buildSelectOptions({ data, fieldsMap, disabledIcon });
    },
    orElse: () => {
      return [];
    }
  });
  return { state, result };
}
const customerCreateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      ...API_DXT_CUSTOMER_CREATE,
      data: input,
      silent: true
    },
    app
  );
};
const customerUpdateRequest = async (id, input, app) => {
  return await dxtApiRequest(
    {
      ...API_DXT_CUSTOMER_UPDATE,
      pathParams: { id },
      data: input,
      silent: true
    },
    app
  );
};
const customerDeleteRequest = async (id, input, app) => await dxtApiRequest(
  {
    ...API_DXT_CUSTOMER_DELETE,
    pathParams: { id },
    data: input,
    silent: true
  },
  app
);
const vendorCreateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      ...API_DXT_CUSTOMER_CREATE,
      data: input,
      silent: true
    },
    app
  );
};
const vendorDeleteRequest = async (id, input, app) => await dxtApiRequest(
  {
    ...API_DXT_VENDOR_DELETE,
    pathParams: { id },
    data: input,
    silent: true
  },
  app
);
const vendorUpdateRequest = async (id, input, app) => {
  return await dxtApiRequest(
    {
      ...API_DXT_VENDOR_UPDATE,
      pathParams: { id },
      data: input,
      silent: true
    },
    app
  );
};
apiEndpoint("/tango/lista", "GET");
const API_TANGO_PERFIL_GET_ALL = apiEndpoint("/tango/perfil", "GET");
const API_TANGO_CLIENTE_GET_ALL = apiEndpoint("/tango/cliente", "GET");
const API_TANGO_VENDEDOR_GET_ALL = apiEndpoint("/tango/vendedor", "GET");
const WELCOME = "Bienvenido al sistema de pedidos de Sorbalok Pinturas.";
const OPTIONS = "Opciones";
const LOGOUT = "Cerrar sesión";
const CHANGE_COLOR_MODE = "Cambiar modo de color";
const CONFIGURE = "Configurar";
const TANGO_CONNECTION = "Conexión a Tango";
const TANGO_CONNECTION_UPDATED = "Conexión a Tango actualizada";
const COMPANY = "Empresa";
const COMPANY_UPDATED = "Empresa actualizada";
const INVALID_LIST_TYPE = "Tipo de lista no válida";
const BACK_TO_SETTINGS = "Volver a Configuración";
const BACK_TO_PEDIDOS = "Volver a Pedidos";
const USER_NOT_FOUND = "Usuario no encontrado";
const NO_PEDIDOS = "No se encontraron pedidos";
const NO_BORRADORES = "El usuario no posee borradores";
const NO_USERS = "No se encontraron usuarios";
const PEDIDOS = "Pedidos";
const BORRADORES = "Borradores";
const ADMINISTRACION = "Administración";
const CHANGE_PASSWORD = "Cambiar contraseña";
const SELECTED_S = " seleccionado";
const SELECTED_P = " seleccionados";
const USER_CREATED = "Usuario creado";
const USER_UPDATED = "Usuario actualizado";
const USER_DELETE = "Eliminar usuario";
const USER_DELETE_CONFIRM = "¿Está seguro que desea eliminar este usuario? Esta acción no se puede deshacer.";
const USER_DELETED = "Usuario eliminado";
const CLIENTS_ADMIN = "Gestión de Clientes";
const CLIENTS_CREATE = "Crear Cliente";
const CLIENTS_UPDATE = "Modificar Cliente";
const CLIENTS_SELECT = "Seleccione un Cliente";
const CLIENTS_LABEL = "Cliente Tango";
const CLIENTS_NO_OPTIONS = "No hay clientes disponibles";
const SELLERS_ADMIN = "Gestión de Vendedores";
const SELLERS_CREATE = "Crear Vendedor";
const SELLERS_UPDATE = "Modificar Vendedor";
const SELLERS_SELECT = "Seleccione un Vendedor";
const SELLERS_LABEL = "Vendedor Tango";
const SELLERS_NO_OPTIONS = "No hay vendedores disponibles";
const PRODUCT_EDIT_LIST = "Lista de artículos para edición";
const PRODUCT_PRINT_LIST = "Lista de artículos para impresión";
const VARIOUS_SETTINGS = "Configuraciones Varias";
const VARIOUS_SETTINGS_UPDATED = "Configuraciones actualizadas";
const LIST_UPDATED = "Lista actualizada";
const DATE_FORMAT = "dd/MM/yyyy";
const DATE_FORMAT_API = "yyyy-MM-dd";
const DATE_DAY_NAMES_SHORT = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
const DATE_MONTH_NAMES_SHORT = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
const ORDER_CREATED = "Pedido creado";
const ORDER_CREATED_NUMBER = "Número de Pedido: {{numero_pedido}}";
const ORDER_UPDATED = "Pedido actualizado";
const ORDER_UPDATED_NUMBER = "Número de Pedido: {{numero_pedido}}";
const DRAFT_CREATED = "Borrador creado";
const DRAFT_CREATED_NUMBER = "Número de Borrador: {{numero_pedido}}";
const DRAFT_UPDATED = "Borrador actualizado";
const DRAFT_UPDATED_NUMBER = "Número de Borrador: {{numero_pedido}}";
const settings$1 = {
  customers: {
    api: {
      getAll: useGetAllDXTCustomers,
      getOne: useGetOneDXTCustomer,
      post: customerCreateRequest,
      patch: customerUpdateRequest,
      delete: customerDeleteRequest,
      getRelation: () => {
        return useTangoList({
          endpoint: API_TANGO_CLIENTE_GET_ALL,
          fieldsMap: {
            label: "screen_name",
            value: "id",
            isEnabled: "habilitado"
          },
          disabledIcon: /* @__PURE__ */ jsx(Icon, { as: AccountCancelIcon, color: "red.400", ml: 2, boxSize: 5 })
        });
      }
    },
    userType: "cliente",
    titles: {
      common: CLIENTS_ADMIN,
      create: CLIENTS_CREATE,
      edit: CLIENTS_UPDATE
    },
    actionButtonNavigateTo: URL_SETTINGS_CUSTOMERS_ADD_PATH,
    cancelButtonNavigateTo: URL_SETTINGS_CUSTOMERS_PATH,
    editButtonNavigateTo: URL_SETTINGS_CUSTOMERS_EDIT_PATH,
    tangoRelatedFields: {
      placeholder: CLIENTS_SELECT,
      label: CLIENTS_LABEL,
      empty: CLIENTS_NO_OPTIONS
    }
  },
  vendors: {
    api: {
      getAll: useGetAllDXTVendors,
      getOne: useGetOneDXTVendor,
      post: vendorCreateRequest,
      patch: vendorUpdateRequest,
      delete: vendorDeleteRequest,
      getRelation: () => {
        return useTangoList({
          endpoint: API_TANGO_VENDEDOR_GET_ALL,
          fieldsMap: {
            label: "screen_name",
            value: "id",
            isEnabled: "habilitado"
          },
          disabledIcon: /* @__PURE__ */ jsx(Icon, { as: AccountCancelIcon, color: "red.400", ml: 2, boxSize: 5 })
        });
      }
    },
    userType: "vendedor",
    titles: {
      common: SELLERS_ADMIN,
      create: SELLERS_CREATE,
      edit: SELLERS_UPDATE
    },
    actionButtonNavigateTo: URL_SETTINGS_VENDORS_ADD_PATH,
    cancelButtonNavigateTo: URL_SETTINGS_VENDORS_PATH,
    editButtonNavigateTo: URL_SETTINGS_VENDORS_EDIT_PATH,
    tangoRelatedFields: {
      placeholder: SELLERS_SELECT,
      label: SELLERS_LABEL,
      empty: SELLERS_NO_OPTIONS
    }
  }
};
const optionalBooleanValidator = (v, def) => v == null ? def : new VOBoolean(v).valueOf();
const integerValidator = (v) => new VOInteger(v).valueOf();
const optionalIntegerValidator = (v, def) => v == null ? def : new VOInteger(v).valueOf();
const stringValidator = (v) => new VONotEmptyString(v).valueOf();
const optionalStringValidator = (v, def) => v == null ? def : new VOString(v).valueOf();
class InvalidValidationSchemaException extends ValidationException {
  constructor(schema) {
    super(`Invalid validation schema: ${schema ?? "{}"}`);
  }
}
class InvalidSchemaValidatorFunctionException extends ValidationException {
  constructor(field) {
    super(`Invalid validator function: ${field}`);
  }
}
class InvalidSchemaValuesException extends ValidationException {
  constructor(invalidValues) {
    super(`Invalid values: ${invalidValues.map(({ field, value }) => field).join(", ")}`);
    this.invalidValues = invalidValues;
  }
}
class UnknownSchemaKeysException extends ValidationException {
  constructor(unknownKeys) {
    super(`Unknown keys: ${unknownKeys.join(", ")}`);
    this.unknownKeys = unknownKeys;
  }
}
function validateSchema(schema, input, options) {
  var _a2, _b2;
  if (!isObj(schema))
    throw new InvalidValidationSchemaException();
  const invalidValues = [];
  const inputIsObject = isObj(input);
  const entries = Object.entries(schema);
  const validatedResult = Array(entries.length);
  if (!isObj(input))
    input = {};
  let i = 0;
  for (const [field, validator2] of entries) {
    const valIsObject = isObj(validator2);
    const fieldName = valIsObject && "n" in validator2 ? validator2.n : field;
    const validatorFuncion = valIsObject && "f" in validator2 ? validator2.f : validator2;
    if (typeof validatorFuncion !== "function")
      throw new InvalidSchemaValidatorFunctionException(fieldName);
    const inputValue = inputIsObject ? input[field] : void 0;
    try {
      let result2 = validatorFuncion(inputValue);
      if (result2 instanceof ValueObjectBase)
        result2 = result2.valueOf();
      if (invalidValues.length === 0) {
        validatedResult[i++] = [
          field,
          result2
        ];
      }
    } catch (_2) {
      invalidValues.push({
        field: fieldName,
        value: valueToString(inputValue, true)
      });
    }
  }
  if (invalidValues.length > 0) {
    const defaultError = new InvalidSchemaValuesException(invalidValues);
    const error = ((_a2 = options == null ? void 0 : options.onInvalidValues) == null ? void 0 : _a2.call(options, invalidValues, defaultError)) ?? defaultError;
    throw error;
  }
  const valuesKeys = Object.keys(input);
  const unknownKeys = [];
  for (const key of valuesKeys) {
    if (!(key in schema))
      unknownKeys.push(key);
  }
  if (unknownKeys.length > 0) {
    const defaultError = new UnknownSchemaKeysException(unknownKeys);
    const error = ((_b2 = options == null ? void 0 : options.onUnknownKeys) == null ? void 0 : _b2.call(options, unknownKeys, defaultError)) ?? defaultError;
    throw error;
  }
  const result = Object.fromEntries(validatedResult);
  const extraValidation = options == null ? void 0 : options.extraValidation;
  if (extraValidation != null) {
    return extraValidation(result);
  }
  return result;
}
const CommonErrors = ({ error, buttonProps }) => {
  return /* @__PURE__ */ jsx(
    Box,
    {
      width: "full",
      sx: {
        mt: 6
      },
      children: /* @__PURE__ */ jsxs(
        Alert,
        {
          status: "error",
          variant: "subtle",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "200px",
          children: [
            /* @__PURE__ */ jsx(AlertIcon, { boxSize: "40px", sx: { mr: 0, mb: 4 } }),
            /* @__PURE__ */ jsx(AlertDescription, { maxWidth: "sm", children: error }),
            buttonProps != null && /* @__PURE__ */ jsx(
              Button,
              {
                ...buttonProps,
                sx: {
                  mt: 4
                },
                children: buttonProps.label
              }
            )
          ]
        }
      )
    }
  );
};
const CommonCard = (props) => {
  const { children, cardProps, cardBodyProps } = props;
  const borderColor = useColorModeValue("gray.200", "white.200");
  return /* @__PURE__ */ jsx(
    Card,
    {
      boxShadow: "lg",
      sx: { mb: 4 },
      borderColor,
      ...cardProps,
      children: /* @__PURE__ */ jsx(CardBody, { ...cardBodyProps, children })
    }
  );
};
const ResponsiveIconButton = (props) => {
  const { text, icon, iconProps, sharedProps, buttonProps, iconButtonProps } = props;
  const buttonInjection = useBreakpointValue({
    base: /* @__PURE__ */ jsx(
      IconButton,
      {
        "aria-label": text,
        ...sharedProps,
        ...iconButtonProps,
        icon: /* @__PURE__ */ jsx(Icon, { as: icon, ...iconProps })
      }
    ),
    md: /* @__PURE__ */ jsx(
      Button,
      {
        ...sharedProps,
        ...buttonProps,
        ...icon && { leftIcon: /* @__PURE__ */ jsx(Icon, { as: icon, ...iconProps }) },
        children: text
      }
    )
  });
  return /* @__PURE__ */ jsx(Fragment, { children: buttonInjection });
};
const SettingsFormHeading = (props) => {
  const { title, actionButton, returnButton } = props;
  return /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(Flex, { direction: "row", alignItems: "center", gap: "2", children: [
    returnButton && /* @__PURE__ */ jsx(
      IconButton,
      {
        "aria-label": BACK,
        icon: /* @__PURE__ */ jsx(ChevronLeftIcon, {}),
        colorScheme: "gray",
        size: "xs",
        variant: "outline",
        ...returnButton.buttonProps
      }
    ),
    /* @__PURE__ */ jsx(Heading, { size: ["sm", "md"], textTransform: "uppercase", children: title }),
    actionButton && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Spacer, {}),
      /* @__PURE__ */ jsx(
        ResponsiveIconButton,
        {
          icon: actionButton.icon,
          text: actionButton.label,
          sharedProps: {
            size: "sm",
            fontWeight: "400",
            colorScheme: "green",
            textTransform: "uppercase",
            ...actionButton.buttonProps
          },
          iconProps: {
            boxSize: {
              base: 5,
              md: 4
            }
          }
        }
      )
    ] })
  ] }) });
};
const ApiErrors = ({
  error,
  retry,
  cancelAndNavigateTo
}) => {
  var _a2, _b2;
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Box, { textAlign: "center", py: 10, px: 6, children: [
    /* @__PURE__ */ jsx(Box, { display: "inline-block", children: /* @__PURE__ */ jsx(
      Flex,
      {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bg: "red.500",
        rounded: "50px",
        w: "55px",
        h: "55px",
        textAlign: "center",
        children: /* @__PURE__ */ jsx(Icon, { as: CloseIcon, boxSize: "40px", color: "white" })
      }
    ) }),
    !error.message_to_user ? /* @__PURE__ */ jsx(Text, { color: "gray.500", mt: 6, children: error.error_description }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Heading, { as: "h2", size: "xl", mt: 6, mb: 2, children: (_a2 = error.message_to_user) == null ? void 0 : _a2.title }),
      /* @__PURE__ */ jsx(Text, { color: "gray.500", children: (_b2 = error.message_to_user) == null ? void 0 : _b2.content })
    ] }),
    /* @__PURE__ */ jsxs(
      HStack,
      {
        sx: {
          mt: 6
        },
        spacing: 4,
        justifyContent: "center",
        children: [
          retry && /* @__PURE__ */ jsx(Button, { onClick: retry, colorScheme: "blue", children: RETRY }),
          cancelAndNavigateTo != null && /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => {
                navigate(cancelAndNavigateTo);
              },
              colorScheme: "gray",
              children: CANCEL
            }
          )
        ]
      }
    )
  ] });
};
const FormInputSkeleton = ({ height }) => /* @__PURE__ */ jsx(Skeleton, { width: "full", height: height ?? "36px", borderRadius: "md" });
const FormTextareaSkeleton = ({ height }) => /* @__PURE__ */ jsx(Skeleton, { width: "full", height: height ?? "80px", borderRadius: "md" });
const Loading$8 = () => /* @__PURE__ */ jsx(
  Box,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs(Stack, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) })
          ] }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, {}),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) })
        ]
      }
    )
  }
);
function useAppResources() {
  const result = useBasicAppResources();
  if (!(result.authState instanceof AuthStateLoggedIn))
    throw new DXTException(
      new DXTError(DXTErrorCode.INTERNAL_CLIENT_ERROR, {
        extra: "AuthState is not AuthStateLoggedIn"
      })
    );
  if (typeof result.authDispatch !== "function")
    throw new DXTException(
      new DXTError(DXTErrorCode.INTERNAL_CLIENT_ERROR, {
        extra: "Invalid authDispath in useAppResources()"
      })
    );
  return result;
}
const ControlledInput = (props) => {
  const { fieldProps, formControlProps, formControlInnerProps, control } = props;
  const {
    field: { ref, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController({
    name: fieldProps.name,
    control
  });
  const { label, helperText, icon, iconEnding } = formControlInnerProps || {};
  return /* @__PURE__ */ jsxs(FormControl, { ...formControlProps, isInvalid: invalid, children: [
    label != null && /* @__PURE__ */ jsx(
      FormLabel,
      {
        htmlFor: fieldProps.name,
        sx: fieldProps.variant === "flushed" ? { fontSize: "sm", mb: 0 } : {},
        children: label
      }
    ),
    /* @__PURE__ */ jsxs(InputGroup, { children: [
      icon,
      /* @__PURE__ */ jsx(
        Input,
        {
          autoComplete: "off",
          ...fieldProps,
          onChange: (e) => {
            fieldProps.onChange && fieldProps.onChange(e);
            onChange(e);
          },
          value,
          ref
        }
      ),
      iconEnding
    ] }),
    helperText != null && /* @__PURE__ */ jsx(FormHelperText, { children: helperText })
  ] });
};
const ControlledRadio = (props) => {
  const {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    stackProps,
    radioProps,
    control
  } = props;
  const { name } = fieldProps;
  const { helperText } = formControlInnerProps || {};
  const {
    field: { ref, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs(FormControl, { ...formControlProps, isInvalid: invalid, children: [
    /* @__PURE__ */ jsx(
      RadioGroup,
      {
        ...fieldProps,
        onChange,
        value: value.toString(),
        ref,
        children: /* @__PURE__ */ jsx(Stack, { direction: "row", spacing: 4, ...stackProps, children: fieldProps.options.map((option, index) => /* @__PURE__ */ jsx(
          Radio,
          {
            value: option.value.toString(),
            ...radioProps,
            children: option.label
          },
          `${name}-option-${index}`
        )) })
      }
    ),
    helperText != null && /* @__PURE__ */ jsx(FormHelperText, { children: helperText })
  ] });
};
const isSize = (size) => {
  const isString = typeof size === "string";
  return isString && ["sm", "md", "lg"].includes(size);
};
const getDefaultSize = (size) => {
  if (isSize(size)) {
    return size;
  }
  if (size === "xs") {
    return "sm";
  }
  if (size === "xl") {
    return "lg";
  }
  return "md";
};
const useSize = (size) => {
  const chakraTheme = useTheme();
  const defaultSize = getDefaultSize(
    chakraTheme.components.Input.defaultProps.size
  );
  const definedSize = size ?? defaultSize;
  const realSize = useBreakpointValue(
    typeof definedSize === "string" ? [definedSize] : definedSize,
    {
      fallback: "md"
    }
  ) || defaultSize;
  return realSize;
};
const ChakraReactSelectCustomMenuList = (props) => {
  var _a2;
  const {
    className,
    cx,
    innerRef,
    children,
    maxHeight,
    isMulti,
    innerProps,
    selectProps: {
      chakraStyles,
      size: sizeProp,
      variant,
      focusBorderColor,
      errorBorderColor
    }
  } = props;
  const menuStyles = useMultiStyleConfig("Menu");
  const size = useSize(sizeProp);
  const inputStyles = useMultiStyleConfig("Input", {
    size,
    variant,
    focusBorderColor,
    errorBorderColor
  });
  const fieldStyles = inputStyles.field;
  const initialSx = {
    ...menuStyles.list,
    minW: "100%",
    // maxHeight: `${maxHeight}px`,
    // overflowY: 'auto',
    // This is hacky, but it works. May be removed in the future
    "--input-border-radius": fieldStyles == null ? void 0 : fieldStyles["--input-border-radius"],
    borderRadius: (fieldStyles == null ? void 0 : fieldStyles.borderRadius) || ((_a2 = menuStyles.list) == null ? void 0 : _a2.borderRadius),
    position: "relative"
    // required for offset[Height, Top] > keyboard scroll
    // WebkitOverflowScrolling: 'touch',
  };
  const sx = (chakraStyles == null ? void 0 : chakraStyles.menuList) ? chakraStyles.menuList(initialSx, props) : initialSx;
  return /* @__PURE__ */ jsx(
    Box,
    {
      role: "listbox",
      ...innerProps,
      className: cx(
        {
          "menu-list": true,
          "menu-list--is-multi": isMulti
        },
        className
      ),
      sx,
      children
    }
  );
};
const VirtualizedMenuList = memo(function(props) {
  const { children, ...restProps } = props;
  const itemHeight = 35;
  const { options, maxHeight, getValue } = props;
  const [value] = getValue();
  const valueIndexOf = options.indexOf(value);
  const itemsPerPage = Math.floor(maxHeight / itemHeight);
  const initialOffset = valueIndexOf > itemsPerPage ? valueIndexOf * itemHeight : 0;
  const minHeight = Math.min(options.length * itemHeight, maxHeight);
  return /* @__PURE__ */ jsx(ChakraReactSelectCustomMenuList, { ...props, children: /* @__PURE__ */ jsx(
    FixedSizeList,
    {
      height: minHeight + 2,
      itemCount: Children.count(children),
      itemSize: itemHeight,
      initialScrollOffset: initialOffset,
      width: "100%",
      outerRef: props.innerRef,
      overscanCount: 20,
      children: ({ index, style }) => /* @__PURE__ */ jsx("div", { style, children: Children.toArray(children)[index] })
    }
  ) });
});
const ControlledSelect = (props) => {
  const {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    control,
    shouldSort
  } = props;
  const { helperText, label } = formControlInnerProps || {};
  function compareByLabel(a, b) {
    return a.label.localeCompare(b.label);
  }
  if (shouldSort ?? false)
    fieldProps.options.sort(compareByLabel);
  const {
    field: { ref, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs(FormControl, { ...formControlProps, isInvalid: invalid, children: [
    /* @__PURE__ */ jsx(
      FormLabel,
      {
        sx: fieldProps.variant === "flushed" ? { fontSize: "sm", mb: 0 } : {},
        children: label
      }
    ),
    /* @__PURE__ */ jsx(
      Select,
      {
        ...fieldProps,
        ref,
        value: fieldProps.options.find((option) => option.value === value),
        filterOption: createFilter({ ignoreAccents: false }),
        onChange: (newValue, actionMeta) => {
          return onChange(newValue.value);
        },
        useBasicStyles: true,
        isSearchable: fieldProps.isSearchable,
        instanceId: fieldProps.name,
        chakraStyles: {
          option: (provided, state) => {
            return {
              ...provided,
              ...fieldProps.virtualized === true && {
                fontSize: { base: "xs", sm: "sm", md: "md" }
              }
            };
          }
        },
        components: {
          ...fieldProps.virtualized === true && {
            MenuList: VirtualizedMenuList
          },
          Option: ({ children, ...props2 }) => {
            if (fieldProps.virtualized === true) {
              delete props2.innerProps.onMouseMove;
              delete props2.innerProps.onMouseOver;
            }
            const propsData = props2.data;
            return /* @__PURE__ */ jsxs(chakraComponents.Option, { ...props2, children: [
              children,
              " ",
              propsData.icon != null && propsData.icon
            ] });
          }
        }
      }
    ),
    helperText != null && /* @__PURE__ */ jsx(FormHelperText, { children: helperText })
  ] });
};
const ControlledSwitch = (props) => {
  const {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    control,
    watch
  } = props;
  const { label } = formControlInnerProps || {};
  const {
    field: { ref, onChange, onBlur, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs(
    FormControl,
    {
      display: "flex",
      alignItems: "center",
      ...formControlProps,
      isInvalid: invalid,
      children: [
        /* @__PURE__ */ jsx(
          Switch,
          {
            ...fieldProps,
            ...watch,
            isChecked: value,
            onChange: (e) => onChange(e.target.checked),
            onBlur,
            ref
          }
        ),
        label != null && /* @__PURE__ */ jsx(
          FormLabel,
          {
            htmlFor: fieldProps.id,
            sx: { mb: 0, ms: 4 },
            cursor: "pointer",
            children: label
          }
        )
      ]
    }
  );
};
const FormErrors = ({ errors }) => {
  const formErrorsRef = useRef(null);
  return Object.keys(errors).length ? /* @__PURE__ */ jsx(
    Box,
    {
      width: "full",
      sx: {
        mb: 4
      },
      ref: formErrorsRef,
      children: /* @__PURE__ */ jsx(Alert, { status: "error", variant: "left-accent", sx: { p: 4 }, children: /* @__PURE__ */ jsx(UnorderedList, { fontSize: "sm", styleType: "none", sx: { m: 0 }, children: Object.values(errors).map((error, key) => {
        var _a2, _b2;
        return /* @__PURE__ */ jsx(ListItem, { children: ((_a2 = error == null ? void 0 : error.message) == null ? void 0 : _a2.toString()) ?? ((_b2 = error == null ? void 0 : error.root) == null ? void 0 : _b2.message.toString()) }, key);
      }) }) })
    }
  ) : /* @__PURE__ */ jsx(Fragment, {});
};
const PasswordWithStatus = (props) => {
  const {
    fieldProps,
    formControlInnerProps,
    passwordStatus,
    disableForm,
    control
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };
  const { label, helperText } = formControlInnerProps || {};
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      ControlledInput,
      {
        fieldProps: {
          ...fieldProps,
          type: !showPassword ? "password" : "text"
        },
        formControlProps: {
          isDisabled: disableForm
        },
        formControlInnerProps: {
          label,
          iconEnding: /* @__PURE__ */ jsx(InputRightElement, { children: /* @__PURE__ */ jsx(
            Icon,
            {
              onClick: handleShowHidePassword,
              sx: { cursor: "pointer" },
              as: showPassword ? EyeOffOutlineIcon : EyeOutlineIcon,
              boxSize: 5
            }
          ) })
        },
        control
      }
    ),
    passwordStatus != null && /* @__PURE__ */ jsxs(Fragment, { children: [
      passwordStatus.tooShort && /* @__PURE__ */ jsx(Badge, { colorScheme: "red", children: PASSWORD_TOO_SHORT }),
      passwordStatus.tooLong && /* @__PURE__ */ jsx(Badge, { colorScheme: "red", children: PASSWORD_TOO_LONG }),
      passwordStatus.invalidCharsPresent && /* @__PURE__ */ jsx(Badge, { colorScheme: "red", children: PASSWORD_INVALID_CHARS })
    ] })
  ] });
};
const InlineError = ({ error }) => {
  return /* @__PURE__ */ jsx(
    Badge,
    {
      colorScheme: "red",
      sx: {
        mt: 2,
        p: 2,
        whiteSpace: "normal"
      },
      children: error
    }
  );
};
const SettingsFormsButtons = (props) => {
  const { isLoading, buttonActionText, buttonCancelUrl } = props;
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Stack, { direction: { base: "column", md: "row" }, children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        type: "submit",
        colorScheme: "blue",
        width: "full",
        isLoading,
        children: buttonActionText ?? UPDATE
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        type: "button",
        colorScheme: "gray",
        width: "full",
        isLoading,
        onClick: () => navigate(buttonCancelUrl ?? URL_SETTINGS_PATH),
        children: CANCEL
      }
    )
  ] }) });
};
function yupVOValidation(VO, value) {
  try {
    new VO(value);
    return true;
  } catch (_2) {
    return false;
  }
}
const DIAS_DE_ENTREGA_MIN_DAYS = 0;
const DIAS_DE_ENTREGA_MAX_DAYS = 365;
const DIAS_DE_ENTREGA_DEFAULT = 30;
const commonValidationSchema = yup.object({
  tango_id: yup.number().integer().required("Seleccione un cliente de Tango").typeError("Seleccione un cliente de Tango"),
  username: yup.string().required("Ingrese un nombre de usuario"),
  email: yup.string().email("Ingrese un correo electrónico válido"),
  perfil_facturacion_id: yup.number().integer().required("Seleccione un perfil de facturación").typeError("Seleccione un perfil de facturación"),
  dia_de_entrega: yup.number().integer(
    `El tiempo de entrega de pedidos debe ser un un número entero entre ${DIAS_DE_ENTREGA_MIN_DAYS} y ${DIAS_DE_ENTREGA_MAX_DAYS}`
  ).min(
    DIAS_DE_ENTREGA_MIN_DAYS,
    `El tiempo de entrega de pedidos debe ser mayor o igual a ${DIAS_DE_ENTREGA_MIN_DAYS} días`
  ).max(
    DIAS_DE_ENTREGA_MAX_DAYS,
    `El tiempo de entrega de pedidos no puede superar los ${DIAS_DE_ENTREGA_MAX_DAYS} días`
  ).required("Ingrese el número de días para entrega de pedidos").typeError("Ingrese el número de días para entrega de pedidos"),
  habilitado_en_dxt: yup.boolean().required(),
  puede_crear_pedido: yup.boolean().required(),
  puede_editar_pedido: yup.boolean().required(),
  ver_pedidos_cumplidos: yup.boolean().required(),
  ver_sin_precio: yup.boolean().required(),
  mostrar_mensaje_de_advertencia: yup.boolean().required(),
  puede_anular_pedido: yup.boolean().required(),
  borrar_pedido_al_anular: yup.boolean().required(),
  aprobar_pedido_al_crear: yup.boolean().required()
}).required();
function validateInput(schema, values, extraValidation) {
  return validateSchema(
    schema,
    values,
    {
      extraValidation,
      onUnknownKeys: (unknownKeys, _2) => {
        return new DXTException(
          new DXTError(
            DXTErrorCode.BAD_REQUEST,
            {
              extra: `Parámetros desconocidos: ${unknownKeys.join(", ")}`
            }
          )
        );
      },
      onInvalidValues: (invalidsValues, _2) => {
        return new DXTException(
          new DXTError(
            DXTErrorCode.BAD_REQUEST,
            {
              extra: `Valores inválidos: ${invalidsValues.map(({ field, value }) => `(${field}=${value})`).join(", ")}`
            }
          )
        );
      }
    }
  );
}
const DXT_PASSWORD_MIN_LENGTH = 4;
const DXT_PASSWORD_MAX_LENGTH = 16;
const DXT_PASSWORD_SPECIAL_CHARS = `!@#$%^&*()-_=+,.;?'"\\|/:{}<>[]`;
const DXT_PASSWORD_LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyzñçáéíóúàèìòùâêîôûãõäëïöü";
const DXT_PASSWORD_UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZÑÇÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜ";
const DXT_PASSWORD_NUMERIC_CHARS = "0123456789";
function dxtPasswordStatus(value) {
  let invalidVariableType = true;
  let invalidCharsPresent = false;
  let tooShort = false;
  let tooLong = false;
  if (typeof value === "string") {
    invalidVariableType = false;
    tooShort = value.length < DXT_PASSWORD_MIN_LENGTH;
    tooLong = !tooShort && value.length > DXT_PASSWORD_MAX_LENGTH;
    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (DXT_PASSWORD_LOWERCASE_CHARS.includes(char))
        ;
      else if (DXT_PASSWORD_UPPERCASE_CHARS.includes(char))
        ;
      else if (char >= "0" && char <= "9")
        ;
      else if (DXT_PASSWORD_SPECIAL_CHARS.includes(char))
        ;
      else {
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
class VODXTPassword extends ValueObject {
  validate(value) {
    if (typeof value === "string" && isDXTPassword(value))
      return value;
    this.throwError(value);
  }
  static random() {
    return new VODXTPassword(generateRandomPassword());
  }
}
class VOStrings extends ValueObject {
  validate(input) {
    if (typeof input === "string")
      return [input];
    if (!Array.isArray(input))
      this.throwError(input);
    return input.map((e) => {
      if (e == null)
        this.throwError(input);
      return e.toString();
    });
  }
}
const useCustomValidationSchema$5 = () => {
  const [passwordStatus, setPasswordStatus] = useState(null);
  const customValidationSchema = yup.object({
    password: yup.string().test("password", "Formato de contraseña no válido", (v) => {
      if (v != null && v != "") {
        let newPasswordStatus = dxtPasswordStatus(v);
        if (!_.isEqual(passwordStatus, newPasswordStatus))
          setPasswordStatus(newPasswordStatus);
        return yupVOValidation(VODXTPassword, v);
      }
      setPasswordStatus(null);
      return true;
    })
  }).required();
  const yupValidationSchema2 = commonValidationSchema.concat(customValidationSchema);
  return { yupValidationSchema: yupValidationSchema2, passwordStatus };
};
const Success$b = (props) => {
  var _a2, _b2;
  const { stateData, typeSettings } = props;
  const updateData = {
    ...stateData
  };
  const app = useAppResources();
  const toast = useToast();
  const { yupValidationSchema: yupValidationSchema2, passwordStatus } = useCustomValidationSchema$5();
  const { state: statePerfiles, result: resultPerfiles } = useTangoList({
    endpoint: API_TANGO_PERFIL_GET_ALL,
    fieldsMap: {
      label: "name",
      value: "id"
    }
  });
  const { state: stateRelationship, result: resultRelationship } = typeSettings.api.getRelation();
  const {
    handleSubmit,
    control,
    resetField,
    setError,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({
    defaultValues: {
      username: updateData.username,
      email: updateData.email ?? "",
      habilitado_en_dxt: updateData.habilitado_en_dxt,
      puede_crear_pedido: updateData.puede_crear_pedido,
      puede_editar_pedido: updateData.puede_anular_pedido,
      ver_pedidos_cumplidos: updateData.ver_pedidos_cumplidos,
      ver_sin_precio: updateData.ver_sin_precio,
      mostrar_mensaje_de_advertencia: updateData.mostrar_mensaje_de_advertencia,
      puede_anular_pedido: updateData.puede_anular_pedido,
      borrar_pedido_al_anular: updateData.borrar_pedido_al_anular,
      aprobar_pedido_al_crear: updateData.aprobar_pedido_al_crear,
      dia_de_entrega: updateData.dia_de_entrega
    },
    resolver: yupResolver(yupValidationSchema2)
  });
  const watchPuedeAnularPedido = watch("puede_anular_pedido");
  useEffect(() => {
    if (watchPuedeAnularPedido === false)
      resetField("borrar_pedido_al_anular", { defaultValue: false });
  }, [watchPuedeAnularPedido]);
  useEffect(() => {
    var _a3, _b3;
    if (stateRelationship instanceof FetchStateSuccess) {
      const defaultValue = ((_a3 = resultRelationship.find((option) => option.value === updateData.tango_id)) == null ? void 0 : _a3.value) ?? void 0;
      resetField("tango_id", { defaultValue });
    }
    if (statePerfiles instanceof FetchStateSuccess) {
      const defaultValue = ((_b3 = resultPerfiles.find((option) => option.value === updateData.perfil_facturacion_id)) == null ? void 0 : _b3.value) ?? void 0;
      resetField("perfil_facturacion_id", { defaultValue });
    }
  }, [stateRelationship, statePerfiles]);
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const { ...data } = dataUnsafe;
    if (data.email === "")
      delete data.email;
    if (data.password === "")
      delete data.password;
    const input = data;
    const result = await typeSettings.api.patch(updateData.id, input, app);
    result.map({
      success: (_2) => {
        toast({
          title: USER_UPDATED,
          status: "success"
        });
        app.navigate(URL_SETTINGS_CUSTOMERS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  return /* @__PURE__ */ jsx("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FormErrors, { errors }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Información del Cliente" }) }),
          /* @__PURE__ */ jsxs(GridItem, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx(
              ControlledSelect,
              {
                fieldProps: {
                  name: "tango_id",
                  placeholder: (_a2 = typeSettings.tangoRelatedFields) == null ? void 0 : _a2.placeholder,
                  options: resultRelationship,
                  noOptionsMessage(obj) {
                    var _a3;
                    return (_a3 = typeSettings.tangoRelatedFields) == null ? void 0 : _a3.empty;
                  },
                  isSearchable: true,
                  selectedOptionStyle: "check",
                  isLoading: stateRelationship instanceof FetchStateLoading,
                  virtualized: true
                },
                formControlProps: {
                  isDisabled: disableForm || !(stateRelationship instanceof FetchStateSuccess)
                },
                formControlInnerProps: {
                  label: (_b2 = typeSettings.tangoRelatedFields) == null ? void 0 : _b2.label
                },
                control
              }
            ),
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "username",
                id: "username",
                type: "text"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Nombre de Usuario"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            PasswordWithStatus,
            {
              fieldProps: {
                name: "password",
                id: "password"
              },
              formControlInnerProps: {
                label: "Contraseña"
              },
              passwordStatus,
              disableForm,
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "email",
                id: "email",
                type: "text",
                inputMode: "email"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Correo electrónico"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsxs(GridItem, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx(
              ControlledSelect,
              {
                fieldProps: {
                  name: "perfil_facturacion_id",
                  placeholder: "Seleccione un perfil",
                  options: resultPerfiles,
                  noOptionsMessage(obj) {
                    return "No hay perfiles disponibles";
                  },
                  isLoading: statePerfiles instanceof FetchStateLoading,
                  selectedOptionStyle: "check"
                },
                formControlProps: {
                  isDisabled: disableForm || !(statePerfiles instanceof FetchStateSuccess)
                },
                control,
                formControlInnerProps: {
                  label: "Perfil de facturación"
                }
              }
            ),
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(
            ControlledRadio,
            {
              fieldProps: {
                name: "habilitado_en_dxt",
                options: [
                  {
                    value: true,
                    label: "Establecido en Tango"
                  },
                  {
                    value: false,
                    label: "Deshabilitado"
                  }
                ]
              },
              formControlProps: {
                isDisabled: disableForm
              },
              radioProps: {
                size: { base: "sm", sm: "md" }
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Comunicación" }) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledSwitch,
            {
              fieldProps: {
                name: "mostrar_mensaje_de_advertencia",
                id: "mostrar_mensaje_de_advertencia"
              },
              formControlProps: {
                width: "auto",
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Mostrar mensaje de advertencia"
              },
              control
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs(Stack, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_crear_pedido",
                  id: "puede_crear_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede crear pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_editar_pedido",
                  id: "puede_editar_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede editar pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_anular_pedido",
                  id: "puede_anular_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede anular pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "borrar_pedido_al_anular",
                  id: "borrar_pedido_al_anular"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Borrar pedido al anular"
                },
                control,
                watch: {
                  isDisabled: watchPuedeAnularPedido === false,
                  ...watchPuedeAnularPedido === false && {
                    isChecked: false
                  }
                }
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "aprobar_pedido_al_crear",
                  id: "aprobar_pedido_al_crear"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Los pedidos se aprueban al crearlos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "ver_pedidos_cumplidos",
                  id: "ver_pedidos_cumplidos"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede ver los pedidos cumplidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "ver_sin_precio",
                  id: "ver_sin_precio"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede ver artículos sin precios"
                },
                control
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "dia_de_entrega",
                id: "dia_de_entrega",
                type: "number",
                inputMode: "tel"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Tiempo de entrega de pedidos",
                helperText: "Expresado en días"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsx(
      SettingsFormsButtons,
      {
        buttonActionText: "Actualizar",
        isLoading: disableForm
      }
    ) })
  ] }) });
};
const FormEdit$1 = (props) => {
  const { typeSettings, id } = props;
  const { state, retry } = typeSettings.api.getOne(id);
  return state.map({
    loading: (_2) => /* @__PURE__ */ jsx(Loading$8, {}),
    error: ({ error }) => /* @__PURE__ */ jsx(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx(Success$b, { stateData: state2.data, typeSettings })
  });
};
function Edit$1() {
  const navigate = useNavigate();
  const { id } = useParams();
  const typeSettings = settings$1.customers;
  try {
    if (integerValidator(id)) {
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          SettingsFormHeading,
          {
            title: typeSettings.titles.edit,
            returnButton: {
              buttonProps: {
                onClick: () => {
                  navigate(URL_SETTINGS_CUSTOMERS_PATH);
                }
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(FormEdit$1, { typeSettings, id })
      ] });
    }
  } catch (e) {
    return /* @__PURE__ */ jsx(
      CommonErrors,
      {
        error: USER_NOT_FOUND,
        buttonProps: {
          label: BACK_TO_SETTINGS,
          colorScheme: "green",
          onClick: () => {
            navigate(URL_SETTINGS_PATH);
          }
        }
      }
    );
  }
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
const Loading$7 = () => /* @__PURE__ */ jsx(
  Box,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs(Stack, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) })
          ] }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, {}),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) })
        ]
      }
    )
  }
);
const useCustomValidationSchema$4 = () => {
  const [passwordStatus, setPasswordStatus] = useState(null);
  const customValidationSchema = yup.object({
    password: yup.string().test("password", "Formato de contraseña no válido", (v) => {
      if (v != null && v != "") {
        let newPasswordStatus = dxtPasswordStatus(v);
        if (!_.isEqual(passwordStatus, newPasswordStatus))
          setPasswordStatus(newPasswordStatus);
        return yupVOValidation(VODXTPassword, v);
      }
      setPasswordStatus(null);
      return true;
    })
  }).required();
  const yupValidationSchema2 = commonValidationSchema.concat(customValidationSchema);
  return { yupValidationSchema: yupValidationSchema2, passwordStatus };
};
const Success$a = (props) => {
  var _a2, _b2;
  const { stateData, typeSettings } = props;
  const updateData = {
    ...stateData
  };
  const app = useAppResources();
  const toast = useToast();
  const { yupValidationSchema: yupValidationSchema2, passwordStatus } = useCustomValidationSchema$4();
  const { state: statePerfiles, result: resultPerfiles } = useTangoList({
    endpoint: API_TANGO_PERFIL_GET_ALL,
    fieldsMap: {
      label: "name",
      value: "id"
    }
  });
  const { state: stateRelationship, result: resultRelationship } = typeSettings.api.getRelation();
  const {
    handleSubmit,
    control,
    resetField,
    setError,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({
    defaultValues: {
      username: updateData.username,
      email: updateData.email ?? "",
      habilitado_en_dxt: updateData.habilitado_en_dxt,
      puede_crear_pedido: updateData.puede_crear_pedido,
      puede_editar_pedido: updateData.puede_anular_pedido,
      ver_pedidos_cumplidos: updateData.ver_pedidos_cumplidos,
      ver_sin_precio: updateData.ver_sin_precio,
      mostrar_mensaje_de_advertencia: updateData.mostrar_mensaje_de_advertencia,
      puede_anular_pedido: updateData.puede_anular_pedido,
      borrar_pedido_al_anular: updateData.borrar_pedido_al_anular,
      aprobar_pedido_al_crear: updateData.aprobar_pedido_al_crear,
      dia_de_entrega: updateData.dia_de_entrega
    },
    resolver: yupResolver(yupValidationSchema2)
  });
  const watchPuedeAnularPedido = watch("puede_anular_pedido");
  useEffect(() => {
    if (watchPuedeAnularPedido === false)
      resetField("borrar_pedido_al_anular", { defaultValue: false });
  }, [watchPuedeAnularPedido]);
  useEffect(() => {
    var _a3, _b3;
    if (stateRelationship instanceof FetchStateSuccess) {
      const defaultValue = ((_a3 = resultRelationship.find((option) => option.value === updateData.tango_id)) == null ? void 0 : _a3.value) ?? void 0;
      resetField("tango_id", { defaultValue });
    }
    if (statePerfiles instanceof FetchStateSuccess) {
      const defaultValue = ((_b3 = resultPerfiles.find((option) => option.value === updateData.perfil_facturacion_id)) == null ? void 0 : _b3.value) ?? void 0;
      resetField("perfil_facturacion_id", { defaultValue });
    }
  }, [stateRelationship, statePerfiles]);
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const { ...data } = dataUnsafe;
    if (data.email === "")
      delete data.email;
    if (data.password === "")
      delete data.password;
    const input = data;
    const result = await typeSettings.api.patch(updateData.id, input, app);
    result.map({
      success: (_2) => {
        toast({
          title: USER_UPDATED,
          status: "success"
        });
        app.navigate(URL_SETTINGS_VENDORS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  return /* @__PURE__ */ jsx("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FormErrors, { errors }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Información del Vendedor" }) }),
          /* @__PURE__ */ jsxs(GridItem, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx(
              ControlledSelect,
              {
                fieldProps: {
                  name: "tango_id",
                  placeholder: (_a2 = typeSettings.tangoRelatedFields) == null ? void 0 : _a2.placeholder,
                  options: resultRelationship,
                  noOptionsMessage(obj) {
                    var _a3;
                    return (_a3 = typeSettings.tangoRelatedFields) == null ? void 0 : _a3.empty;
                  },
                  isSearchable: true,
                  selectedOptionStyle: "check",
                  isLoading: stateRelationship instanceof FetchStateLoading,
                  virtualized: true
                },
                formControlProps: {
                  isDisabled: disableForm || !(stateRelationship instanceof FetchStateSuccess)
                },
                formControlInnerProps: {
                  label: (_b2 = typeSettings.tangoRelatedFields) == null ? void 0 : _b2.label
                },
                control
              }
            ),
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "username",
                id: "username",
                type: "text"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Nombre de Usuario"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            PasswordWithStatus,
            {
              fieldProps: {
                name: "password",
                id: "password"
              },
              formControlInnerProps: {
                label: "Contraseña"
              },
              passwordStatus,
              disableForm,
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "email",
                id: "email",
                type: "text",
                inputMode: "email"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Correo electrónico"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsxs(GridItem, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx(
              ControlledSelect,
              {
                fieldProps: {
                  name: "perfil_facturacion_id",
                  placeholder: "Seleccione un perfil",
                  options: resultPerfiles,
                  noOptionsMessage(obj) {
                    return "No hay perfiles disponibles";
                  },
                  isLoading: statePerfiles instanceof FetchStateLoading,
                  selectedOptionStyle: "check"
                },
                formControlProps: {
                  isDisabled: disableForm || !(statePerfiles instanceof FetchStateSuccess)
                },
                control,
                formControlInnerProps: {
                  label: "Perfil de facturación"
                }
              }
            ),
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(
            ControlledRadio,
            {
              fieldProps: {
                name: "habilitado_en_dxt",
                options: [
                  {
                    value: true,
                    label: "Establecido en Tango"
                  },
                  {
                    value: false,
                    label: "Deshabilitado"
                  }
                ]
              },
              formControlProps: {
                isDisabled: disableForm
              },
              radioProps: {
                size: { base: "sm", sm: "md" }
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Comunicación" }) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledSwitch,
            {
              fieldProps: {
                name: "mostrar_mensaje_de_advertencia",
                id: "mostrar_mensaje_de_advertencia"
              },
              formControlProps: {
                width: "auto",
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Mostrar mensaje de advertencia"
              },
              control
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs(Stack, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_crear_pedido",
                  id: "puede_crear_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede crear pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_editar_pedido",
                  id: "puede_editar_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede editar pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_anular_pedido",
                  id: "puede_anular_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede anular pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "borrar_pedido_al_anular",
                  id: "borrar_pedido_al_anular"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Borrar pedido al anular"
                },
                control,
                watch: {
                  isDisabled: watchPuedeAnularPedido === false,
                  ...watchPuedeAnularPedido === false && {
                    isChecked: false
                  }
                }
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "aprobar_pedido_al_crear",
                  id: "aprobar_pedido_al_crear"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Los pedidos se aprueban al crearlos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "ver_pedidos_cumplidos",
                  id: "ver_pedidos_cumplidos"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede ver los pedidos cumplidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "ver_sin_precio",
                  id: "ver_sin_precio"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede ver artículos sin precios"
                },
                control
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "dia_de_entrega",
                id: "dia_de_entrega",
                type: "number",
                inputMode: "tel"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Tiempo de entrega de pedidos",
                helperText: "Expresado en días"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsx(
      SettingsFormsButtons,
      {
        buttonActionText: "Actualizar",
        isLoading: disableForm
      }
    ) })
  ] }) });
};
const FormEdit = (props) => {
  const { typeSettings, id } = props;
  const { state, retry } = typeSettings.api.getOne(id);
  return state.map({
    loading: (_2) => /* @__PURE__ */ jsx(Loading$7, {}),
    error: ({ error }) => /* @__PURE__ */ jsx(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx(Success$a, { stateData: state2.data, typeSettings })
  });
};
function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const typeSettings = settings$1.vendors;
  try {
    if (integerValidator(id)) {
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          SettingsFormHeading,
          {
            title: typeSettings.titles.edit,
            returnButton: {
              buttonProps: {
                onClick: () => {
                  navigate(URL_SETTINGS_VENDORS_PATH);
                }
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(FormEdit, { typeSettings, id })
      ] });
    }
  } catch (e) {
    return /* @__PURE__ */ jsx(
      CommonErrors,
      {
        error: USER_NOT_FOUND,
        buttonProps: {
          label: BACK_TO_SETTINGS,
          colorScheme: "green",
          onClick: () => {
            navigate(URL_SETTINGS_PATH);
          }
        }
      }
    );
  }
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
class ApiEndpoint {
  constructor(controller, options) {
    this.controller = controller;
    this.options = options;
    this.get = async (req, params) => await this.run(req, { params, method: "GET" });
    this.post = async (req, params) => await this.run(req, { params, method: "POST" });
    this.put = async (req, params) => await this.run(req, { params, method: "PUT" });
    this.patch = async (req, params) => await this.run(req, { params, method: "PATCH" });
    this.delete = async (req, params) => await this.run(req, { params, method: "DELETE" });
    jsonPolyfills();
  }
  async run(req, options) {
    var _a2;
    try {
      const method = options == null ? void 0 : options.method;
      if (method && method !== req.method)
        throw new NotImplementedException();
      const error = await this._prepareRequest(req, options);
      if (error)
        return await this.controller.onError(error, req);
      await this.controller.onRequest(req);
      const data = await this.handle(req);
      const status = ((_a2 = this.options) == null ? void 0 : _a2.status) ?? getDefaultHttpStatusFromMethod(options == null ? void 0 : options.method);
      return jsonResponse(data, {
        status
      });
    } catch (e) {
      return await this.controller.onError(e, req);
    }
  }
  async _streamToString(stream) {
    const chunks = Array();
    for await (const chunk of stream) {
      if (chunk instanceof Uint8Array)
        chunks.push(chunk);
    }
    return Buffer.concat(chunks).toString("utf8");
  }
  async _prepareRequest(req, options) {
    const urlObject = new URL(req.url);
    const params = options == null ? void 0 : options.params;
    req.params = params ?? {};
    req.urlObject = urlObject;
    const { searchParams } = urlObject;
    const queryValues = {};
    searchParams.forEach((v, k) => {
      const current = queryValues[k];
      if (current == null) {
        queryValues[k] = v;
        return;
      }
      if (Array.isArray(current)) {
        current.push(v);
      }
      queryValues[k] = [
        current,
        v
      ];
    });
    req.query = {
      ...queryValues,
      ...options == null ? void 0 : options.query
    };
    try {
      let requestBody = req.body != null ? await this._streamToString(req.body) : null;
      if (typeof requestBody === "string") {
        requestBody = requestBody.trim();
        if (requestBody.length === 0)
          requestBody = "{}";
      }
      req.bodyJson = (options == null ? void 0 : options.body) ?? (requestBody != null ? parseJSON(requestBody) : null);
    } catch (e) {
      return new BadRequestException("Invalid JSON");
    }
    try {
      req.validated = this._validateAllRequestValues(req);
    } catch (e) {
      return e;
    }
    return null;
  }
  _validateAllRequestValues(req) {
    const { options } = this;
    if (options == null)
      return void 0;
    const { validation } = options;
    if (validation == null)
      return void 0;
    const result = {};
    const { body, query, params } = validation;
    if (body != null)
      result.body = this._validateRequestValue(0, "body", req.bodyJson, body);
    if (query != null)
      result.query = this._validateRequestValues(1, req.query, query);
    if (params != null)
      result.params = this._validateRequestValues(2, req.params, params);
    if (result.body === void 0 && result.query === void 0 && result.params === void 0)
      return void 0;
    return result;
  }
  _validateRequestValues(target, values, validators) {
    const result = {};
    Object.entries(validators).forEach(([key, validatorFunction]) => {
      if (typeof validatorFunction !== "function")
        return;
      const validatedValue = this._validateRequestValue(target, key, values[key], validatorFunction);
      result[key] = validatedValue;
    });
    return result;
  }
  _validateRequestValue(target, key, value, validatorFunction) {
    if (typeof validatorFunction !== "function")
      return void 0;
    try {
      return validatorFunction(value);
    } catch (e) {
      let targetString;
      switch (target) {
        case 2:
          targetString = `Invalid param ${key}`;
          break;
        case 0:
          targetString = `Invalid query value ${key}`;
          break;
        default:
          targetString = `Invalid body`;
          break;
      }
      const errorInfo = exceptionToDXTErrorInfo(e);
      throw new BadRequestException(`${targetString}: ${errorInfo.extra ?? "unknown error"}`);
    }
  }
}
function createApiEndpoint(controller, options, handler) {
  return new class extends ApiEndpoint {
    constructor() {
      super(
        controller,
        options
      );
      this.handle = async (req) => await handler(req);
      handler.bind(this);
    }
  }();
}
var EstadoPedido = /* @__PURE__ */ ((EstadoPedido2) => {
  EstadoPedido2[EstadoPedido2["INVALIDO"] = 0] = "INVALIDO";
  EstadoPedido2[EstadoPedido2["INGRESADO"] = 1] = "INGRESADO";
  EstadoPedido2[EstadoPedido2["APROBADO"] = 2] = "APROBADO";
  EstadoPedido2[EstadoPedido2["CUMPLIDO"] = 3] = "CUMPLIDO";
  EstadoPedido2[EstadoPedido2["CERRADO"] = 4] = "CERRADO";
  EstadoPedido2[EstadoPedido2["ANULADO"] = 5] = "ANULADO";
  EstadoPedido2[EstadoPedido2["EN_PROGRESO"] = 100] = "EN_PROGRESO";
  return EstadoPedido2;
})(EstadoPedido || {});
const ARTICULO_TABLE = "STA11";
const ARTICULO_ID_FIELD = "ID_STA11";
const ARTICULO_CODE_FIELD = "COD_ARTICU";
const articuloModelColumns = [
  ARTICULO_ID_FIELD,
  ARTICULO_CODE_FIELD,
  "DESCRIPCIO",
  "DESC_ADIC",
  "DESCUENTO",
  "USA_ESC",
  "PERFIL",
  "COD_IVA",
  "COD_S_IVA",
  "COD_II",
  "COD_S_II",
  "ID_MEDIDA_STOCK",
  "ID_MEDIDA_STOCK_2",
  "ID_MEDIDA_VENTAS"
];
const ARTICULO_NAME_COLUMNS = ["DESCRIPCIO", "DESC_ADIC"];
const LISTA_TABLE = "GVA10";
const LISTA_ID_FIELD = "ID_GVA10";
const LISTA_CODE_FIELD = "NRO_DE_LIS";
const LISTA_CODE2_FIELD = "N_LISTA";
const listaModelColumns = [
  LISTA_ID_FIELD,
  LISTA_CODE_FIELD,
  "NOMBRE_LIS",
  "INCLUY_IMP",
  "INCLUY_IVA",
  "HABILITADA"
];
const PRECIO_TABLE = "GVA17";
const PRECIO_ID_FIELD = "ID_GVA17";
const precioModelColumns = [
  PRECIO_ID_FIELD,
  ARTICULO_CODE_FIELD,
  ARTICULO_ID_FIELD,
  LISTA_CODE_FIELD,
  LISTA_ID_FIELD,
  "PRECIO"
];
const ALICUOTA_TABLE = "GVA41";
const ALICUOTA_ID_FIELD = "ID_GVA41";
const ALICUOTA_CODE_FIELD = "COD_ALICUO";
const alicuotaModelColumns = [
  ALICUOTA_ID_FIELD,
  ALICUOTA_CODE_FIELD,
  "COD_REGIM",
  "DESCRIPCIO",
  "IMPORTE",
  "PORCENTAJE",
  "PROVINCIA",
  "GRUPO",
  "GRUPO_AGIP",
  "COD_SII",
  "GRUPO_MAGNITUDES_SUPERADAS_AGIP",
  "GRUPO_EXENTOS_AGIP",
  "GRUPO_REGIMEN_GENERAL_AGIP",
  "PADRON",
  "GRUPO_PADRON",
  "COD_GVA18",
  "ID_GVA18"
];
const ASIENTO_TABLE = "GVA25";
const ASIENTO_ID_FIELD = "ID_GVA25";
const ASIENTO_CODE_FIELD = "TIPO_ASIEN";
const asientoModelColumns = [
  ASIENTO_ID_FIELD,
  ASIENTO_CODE_FIELD,
  "RENGLON",
  "COD_CUENTA",
  "CONC_ASI",
  "CONC_MOV",
  "DEBE",
  "HABER",
  "COD_IMPUES"
];
const CONDICION_TABLE = "GVA01";
const CONDICION_ID_FIELD = "ID_GVA01";
const CONDICION_CODE_FIELD = "COND_VTA";
const condicionModelColumns = [
  CONDICION_ID_FIELD,
  CONDICION_CODE_FIELD,
  LISTA_ID_FIELD,
  LISTA_CODE_FIELD,
  "ACEPTA_CONTADO",
  "PORC_MIN_CONTADO",
  "ACEPTA_CTA",
  "OBLIGA_CONTADO",
  "DESC_COND",
  "FAC_CREDIT",
  "PAGO_CF",
  "APLICA_MORA",
  "ID_INTERES_POR_MORA",
  "GENERA_FECHAS_ALTERNATIVAS",
  "FECHA_VIGENCIA_DESDE",
  "FECHA_VIGENCIA_HASTA",
  "CONTADO",
  "CALCULA_INTERESES",
  "TIPO_ASIGNACION"
];
const DEPOSITO_TABLE = "STA22";
const DEPOSITO_ID_FIELD = "ID_STA22";
const DEPOSITO_CODE_FIELD = "COD_SUCURS";
const depositoModelColumns = [
  DEPOSITO_ID_FIELD,
  DEPOSITO_CODE_FIELD,
  "ABASTECE",
  "DIR_SUCURS",
  "NOMBRE_SUC",
  "INHABILITA",
  "SUCURSAL_DESTINO",
  "SINCRONIZA_NEXO_PEDIDOS"
];
const PERFIL_TABLE = "GVA51";
const PERFIL_ID_FIELD = "ID_GVA51";
const PERFIL_CODE_FIELD = "COD_PERFIL";
const perfilModelColumns = [
  PERFIL_CODE_FIELD,
  PERFIL_ID_FIELD,
  "COMP_STK",
  "DESCRIPCIO",
  "BONIFIC",
  "BONIF_DEF",
  "D_BONIFIC",
  "FECHA",
  "COND_VENTA",
  "DEPOSITO",
  "TAL_FACTUR",
  "TAL_PEDIDO",
  "TAL_REMITO",
  "TIPO_ASIEN",
  "TRANSPORTE",
  "D_COND_VEN",
  "D_DEPOSITO",
  "D_TAL_FACT",
  "D_TAL_PED",
  "D_TAL_REMI",
  "D_LISTA_PR",
  "D_TRANSPOR",
  "D_TIPO_ASI",
  "EDITA_DIRECCION_ENTREGA",
  "ID_ASIENTO_MODELO_GV"
];
const TALONARIO_TABLE = "GVA43";
const TALONARIO_CODE_FIELD = "TALONARIO";
const TALONARIO_ID_FIELD = "ID_GVA43";
const TALONARIO_ID2_FIELD = "TALON_PED";
const talonarioModelColumns = [
  TALONARIO_CODE_FIELD,
  TALONARIO_ID_FIELD,
  "TIPO",
  "COMPROB",
  "DESCRIP",
  "DESTINO",
  "EDITA_NRO",
  "FECHA_VTO",
  "NRO_DESDE",
  "NRO_HASTA",
  "PROXIMO",
  "RENGLONES",
  "SUCURSAL",
  "EXCLUSIVO",
  "FECH_AVISO",
  "VAL_FECHA",
  "TIPO_TALONARIO"
];
const TRANSPORTE_TABLE = "GVA24";
const TRANSPORTE_ID_FIELD = "ID_GVA24";
const TRANSPORTE_CODE_FIELD = "COD_TRANSP";
const transporteModelColumns = [
  TRANSPORTE_CODE_FIELD,
  TRANSPORTE_ID_FIELD,
  "CATEG_TRAN",
  "CUIT_TRANS",
  "DOM_TRANS",
  "NOMBRE_TRA",
  "PORC_RECAR",
  "COD_POSTAL",
  "LOCALIDAD",
  "COD_PROVIN",
  "TELEFONO",
  "E_MAIL",
  "WEB",
  "COD_GVA18",
  "ID_GVA18"
];
const TRANSPORTE_NAME_COLUMNS = ["NOMBRE_TRA"];
const VENDEDOR_TABLE = "GVA23";
const VENDEDOR_ID_FIELD = "ID_GVA23";
const VENDEDOR_CODE_FIELD = "COD_VENDED";
const vendedorModelColumns = [
  VENDEDOR_ID_FIELD,
  VENDEDOR_CODE_FIELD,
  "NOMBRE_VEN",
  "INHABILITA"
];
const VENDEDOR_NAME_COLUMNS = ["NOMBRE_VEN"];
const CLIENTE_TABLE = "GVA14";
const CLIENTE_ID_FIELD = "ID_GVA14";
const CLIENTE_CODE_FIELD = "COD_CLIENT";
const CLIENTE_CODE2_FIELD = "COD_CLIENTE";
const clienteModelColumns = [
  CLIENTE_ID_FIELD,
  CLIENTE_CODE_FIELD,
  VENDEDOR_ID_FIELD,
  VENDEDOR_CODE_FIELD,
  TRANSPORTE_ID_FIELD,
  TRANSPORTE_CODE_FIELD,
  CONDICION_ID_FIELD,
  CONDICION_CODE_FIELD,
  LISTA_ID_FIELD,
  "NRO_LISTA",
  "II_D",
  "IVA_D",
  "SOBRE_II",
  "SOBRE_IVA",
  "NOM_COM",
  "RAZON_SOCI",
  "HABILITADO",
  "FECHA_INHA",
  "PORC_DESC"
];
const CLIENTE_NAME_COLUMNS = ["RAZON_SOCI", "NOM_COM"];
const DIRECCION_TABLE = "DIRECCION_ENTREGA";
const DIRECCION_ID_FIELD = "ID_DIRECCION_ENTREGA";
const DIRECCION_CODE_FIELD = "COD_DIRECCION_ENTREGA";
const direccionModelColumns = [
  DIRECCION_ID_FIELD,
  DIRECCION_CODE_FIELD,
  CLIENTE_CODE2_FIELD,
  CLIENTE_ID_FIELD,
  "HABITUAL",
  "DIRECCION",
  "LOCALIDAD",
  "CODIGO_POSTAL",
  "TELEFONO1",
  "TELEFONO2",
  "HABILITADO"
];
const PEDIDO_TABLE = "GVA21";
const PEDIDO_ID_FIELD = "ID_GVA21";
const PEDIDO_CODE_FIELD = "NRO_PEDIDO";
const LEYENDA_FIELD_LENGTH = 60;
const pedidoModelColumns = [
  PEDIDO_ID_FIELD,
  PEDIDO_CODE_FIELD,
  "ESTADO",
  CLIENTE_ID_FIELD,
  CLIENTE_CODE_FIELD,
  VENDEDOR_ID_FIELD,
  VENDEDOR_CODE_FIELD,
  DEPOSITO_CODE_FIELD,
  TRANSPORTE_ID_FIELD,
  TRANSPORTE_CODE_FIELD,
  "FECHA_INGRESO",
  "HORA_INGRESO",
  "FECHA_ENTR",
  "FECHA_PEDI",
  "HORA",
  "USUARIO_INGRESO",
  "COMENTARIO",
  "LEYENDA_4",
  "LEYENDA_5",
  "TOTAL_PEDI",
  "PORC_DESC"
];
const extendedPedidoModelColumns = [
  ...pedidoModelColumns,
  TALONARIO_ID2_FIELD,
  TALONARIO_CODE_FIELD,
  CONDICION_ID_FIELD,
  CONDICION_CODE_FIELD,
  LISTA_ID_FIELD,
  LISTA_CODE2_FIELD,
  ASIENTO_CODE_FIELD,
  "COMP_STK",
  "ID_ASIENTO_MODELO_GV"
];
const APP_NAME = "DXTango";
const appPaths = envPaths(APP_NAME.toLowerCase());
const configPath = appPaths.config;
const dataPath = appPaths.data;
appPaths.log;
appPaths.temp;
const cachePath = appPaths.cache;
class DTO {
  constructor(input) {
    this.data = this.validate(input);
  }
}
const DB_CONNECTION_TIMEOUT_MIN_SECONDS = 0;
const DB_CONNECTION_TIMEOUT_MAX_SECONDS = 300;
const AUTH_EXPIRATION_MIN_DAYS = 1;
const AUTH_EXPIRATION_MAX_DAYS = 365;
const DEFAULT_DB_HOST = "localhost";
const DEFAULT_DB_PORT = 1433;
const DEFAULT_DB_USER = "sa";
const DEFAULT_DB_PASSWORD = "Axoft1988";
const DEFAULT_DB_CONNECTION_TIMEOUT_SECONDS = 30;
const DEFAULT_TANGO_DICTIONARY = "Diccionario";
const DEFAULT_SMTP_HOST = "localhost";
const DEFAULT_SMTP_PORT = 587;
const DEFAULT_SMTP_USE_TLS = false;
const DEFAULT_AUTH_EXPIRATION_DAYS = AUTH_EXPIRATION_MAX_DAYS;
const DEFAULT_USER_WARNING_MESSAGE_TITLE = "Atención";
const DEFAULT_USER_WARNING_MESSAGE_CONTENT = "Comuníquese con el administrador";
const DEFAULT_USER_DISABLED_MESSAGE_TITLE = "Atención";
const DEFAULT_USER_DISABLED_MESSAGE_CONTENT = "Usuario deshabilitado. Comuníquese con el administrador";
const DEFAULT_ADMIN_NAME = "Administrador";
const DEFAULT_ADMIN_PASSWORD = "admin";
const DEFAULT_PROGRAM_HOST = "localhost";
const DEFAULT_PROGRAM_PORT = 80;
const DEFAULT_PROGRAM_DISABLE_CACHE = false;
const DEFAULT_PROGRAM_DOWNLOAD_PATH = path.join(dataPath, "downloads");
const DEFAULT_PROGRAM_DISABLE_SYSTEM_FILE = path.join(process.cwd(), "disable_system.txt");
const storedProgramConfigSchema = {
  host: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_PROGRAM_HOST)),
  port: (v) => tryVO(() => new VOTCPPort(v ?? DEFAULT_PROGRAM_PORT), new VOTCPPort(DEFAULT_PROGRAM_PORT)),
  disable_cache: (v) => tryVO(() => new VOBoolean(v ?? DEFAULT_PROGRAM_DISABLE_CACHE), new VOBoolean(DEFAULT_PROGRAM_DISABLE_CACHE)),
  downloads_path: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_PROGRAM_DOWNLOAD_PATH)),
  disable_system_file: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_PROGRAM_DISABLE_SYSTEM_FILE))
};
class StoredProgramConfigDTO extends DTO {
  validate(input) {
    return validateInput(storedProgramConfigSchema, input);
  }
  toUnsafe() {
    return this.data;
  }
}
function isMSSqlName(v) {
  if (typeof v !== "string")
    return false;
  if (v.length < 1)
    return false;
  const firstChar = v[0];
  if (firstChar >= "0" && firstChar <= "9")
    return false;
  return /^[A-Za-z0-9_]*$/.test(v);
}
function isMSSqlDBName(v) {
  if (!isMSSqlName(v))
    return false;
  return typeof v === "string" && v[0] !== "_";
}
class VOMSSqlDBName extends ValueObject {
  validate(rawValue) {
    if (typeof rawValue === "string") {
      const value = rawValue.trim();
      if (isMSSqlDBName(rawValue))
        return value;
    }
    this.throwError(rawValue);
  }
}
const storedDBSettingsSchema = {
  db_host: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_DB_HOST)),
  db_port: (v) => tryVO(() => new VOTCPPort(v ?? DEFAULT_DB_PORT), new VOTCPPort(DEFAULT_DB_PORT)),
  db_user: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_DB_USER)),
  db_password: (v) => tryVO(() => new VOString(v == null ? void 0 : v.trim()), new VOString(DEFAULT_DB_PASSWORD)),
  db_connection_timeout_seconds: (v) => tryVO(
    () => new VOIntegerRange(v, DB_CONNECTION_TIMEOUT_MIN_SECONDS, DB_CONNECTION_TIMEOUT_MAX_SECONDS),
    new VOIntegerRange(DEFAULT_DB_CONNECTION_TIMEOUT_SECONDS, DB_CONNECTION_TIMEOUT_MIN_SECONDS, DB_CONNECTION_TIMEOUT_MAX_SECONDS)
  ),
  tango_dictionary: (v) => tryVO(() => new VOMSSqlDBName(v), new VOMSSqlDBName(DEFAULT_TANGO_DICTIONARY)),
  tango_active_company: (v) => tryVO(() => new VOMSSqlDBName(v), new VOString(""))
};
class StoredDBSettingsDTO extends DTO {
  validate(input) {
    return validateInput(storedDBSettingsSchema, input);
  }
  toUnsafe() {
    return this.data;
  }
}
const ADMIN_USERNAME = "admin";
class Entity {
  constructor(id) {
    this.id = id;
  }
  parentToUnsafe() {
    return {
      id: this.id.valueOf()
    };
  }
}
class RootEntity extends Entity {
}
function userRoleToString(value) {
  try {
    return enumToString(UserRole, value);
  } catch (e) {
    throw new ValidationException(`Invalid user role value: ${value}`);
  }
}
function stringToUserRole(value) {
  try {
    return stringToEnum(UserRole, value);
  } catch (e) {
    throw new ValidationException(`Invalid user role string: ${valueToString(value, true)}`);
  }
}
function userRoleToNumber(role) {
  switch (role) {
    case UserRole.customer:
      return 0;
    case UserRole.vendor:
      return 1;
    case UserRole.admin:
      return 2;
  }
  throw new ValidationException(`Invalid user role: ${valueToString(role, true)}`);
}
function numberToUserRole(value) {
  switch (value) {
    case 0:
      return UserRole.customer;
    case 1:
      return UserRole.vendor;
    case 2:
      return UserRole.admin;
  }
  throw new ValidationException(`Invalid user role number: ${valueToString(value, true)}`);
}
class VOUserRole extends ValueObject {
  validate(value) {
    try {
      if (typeof value === "string")
        return stringToUserRole(value);
      if (isValidEnumValue(UserRole, value))
        return value;
    } catch (_2) {
    }
    this.throwError(value);
  }
  toString() {
    return userRoleToString(this.value);
  }
  isAdmin() {
    return this.value.valueOf() == UserRole.admin;
  }
  isVendor() {
    return this.value.valueOf() == UserRole.vendor;
  }
  isCustomer() {
    return this.value.valueOf() == UserRole.customer;
  }
}
const USER_NAME_MIN_LENGTH = 2;
const USER_NAME_MAX_LENGTH = 60;
function isUserName(value) {
  const re = /^[a-zA-Z0-9_]+$/iu;
  return typeof value === "string" && value.length >= USER_NAME_MIN_LENGTH && value.length <= USER_NAME_MAX_LENGTH && re.test(value);
}
class VOUserName extends ValueObject {
  validate(rawValue) {
    if (typeof rawValue === "string") {
      const value = rawValue.trim();
      if (isUserName(value))
        return value;
    }
    this.throwError(rawValue);
  }
}
class UserEntity extends RootEntity {
  constructor(unsafe) {
    super(new VOInteger(unsafe.id));
    const {
      username,
      tango_id,
      habilitado_en_tango,
      screen_name,
      email,
      password_hash,
      role,
      habilitado_en_dxt,
      puede_crear_pedido,
      puede_editar_pedido,
      puede_anular_pedido,
      borrar_pedido_al_anular,
      perfil_facturacion_id,
      aprobar_pedido_al_crear,
      ver_pedidos_cumplidos,
      dia_de_entrega,
      ver_sin_precio,
      mostrar_mensaje_de_advertencia,
      timestamp_modificacion,
      vendedor_id,
      id_lista_alternativa,
      bonificacion_lista_alternativa,
      universal_id
    } = unsafe;
    this.username = new VOUserName(username);
    this.screenName = new VOString(screen_name);
    if (typeof email === "string") {
      this.email = new VOString(email.trim() !== "" ? new VOEmailAddress(email).valueOf() : "");
    }
    this.passwordHash = new VOMD5(password_hash);
    this.role = new VOUserRole(numberToUserRole(role));
    this.habilitadoEnDXT = new VOBoolean(habilitado_en_dxt);
    this.puedeCrearPedido = new VOBoolean(puede_crear_pedido);
    this.puedeEditarPedido = new VOBoolean(puede_editar_pedido);
    this.puedeAnularPedido = new VOBoolean(puede_anular_pedido);
    this.borrarPedidoAlAnular = new VOBoolean(borrar_pedido_al_anular);
    this.perfilFacturacionId = new VOUInt32(perfil_facturacion_id);
    this.aprobarPedidoAlCrear = new VOBoolean(aprobar_pedido_al_crear);
    this.verPedidosCumplidos = new VOBoolean(ver_pedidos_cumplidos);
    this.diaDeEntrega = new VOInteger(dia_de_entrega);
    this.verSinPrecio = new VOBoolean(ver_sin_precio);
    this.mostrarMensajeDeAdvertencia = new VOBoolean(mostrar_mensaje_de_advertencia);
    this.timestampModificacion = new VOInteger(timestamp_modificacion);
    if (!this.role.isAdmin() && tango_id == null)
      throw new DXTException(
        new DXTError(DXTErrorCode.UNPROCESSABLE_ENTITY, {
          extra: "tango_id missing in UserEntity"
        })
      );
    this.tangoId = tango_id != null ? new VOUInt32(tango_id) : void 0;
    this.habilitadoEnTango = habilitado_en_tango != null ? new VOBoolean(habilitado_en_tango) : void 0;
    this.vendedorId = vendedor_id != null ? new VOUInt32(vendedor_id) : void 0;
    this.idListaAlternativa = id_lista_alternativa != null ? new VOUInt32(id_lista_alternativa) : void 0;
    this.bonificacionListaAlternativa = bonificacion_lista_alternativa != null ? new VOPositiveNumber(bonificacion_lista_alternativa) : void 0;
    this.universalId = new VOHexadecimal(universal_id.replaceAll("-", ""));
  }
  toUnsafe() {
    var _a2, _b2, _c, _d, _e;
    const result = {
      ...this.parentToUnsafe(),
      username: this.username.valueOf(),
      tango_id: (_a2 = this.tangoId) == null ? void 0 : _a2.valueOf(),
      habilitado_en_tango: (_b2 = this.habilitadoEnTango) == null ? void 0 : _b2.valueOf(),
      screen_name: this.screenName.valueOf(),
      email: ((_c = this.email) == null ? void 0 : _c.valueOf()) ?? null,
      password_hash: this.passwordHash.valueOf(),
      role: userRoleToNumber(this.role.valueOf()),
      habilitado_en_dxt: this.habilitadoEnDXT.valueOf(),
      puede_crear_pedido: this.puedeCrearPedido.valueOf(),
      puede_editar_pedido: this.puedeEditarPedido.valueOf(),
      puede_anular_pedido: this.puedeAnularPedido.valueOf(),
      borrar_pedido_al_anular: this.borrarPedidoAlAnular.valueOf(),
      perfil_facturacion_id: this.perfilFacturacionId.valueOf(),
      aprobar_pedido_al_crear: this.aprobarPedidoAlCrear.valueOf(),
      ver_pedidos_cumplidos: this.verPedidosCumplidos.valueOf(),
      dia_de_entrega: this.diaDeEntrega.valueOf(),
      ver_sin_precio: this.verSinPrecio.valueOf(),
      mostrar_mensaje_de_advertencia: this.mostrarMensajeDeAdvertencia.valueOf(),
      timestamp_modificacion: this.timestampModificacion.valueOf(),
      id_lista_alternativa: (_d = this.idListaAlternativa) == null ? void 0 : _d.valueOf(),
      bonificacion_lista_alternativa: (_e = this.bonificacionListaAlternativa) == null ? void 0 : _e.valueOf(),
      universal_id: this.universalId.valueOf()
    };
    return result;
  }
  tangoUserExists() {
    return this.habilitadoEnTango != null;
  }
  habilitado() {
    return this.habilitadoEnDXT.valueOf() && this.habilitadoEnTango != null && this.habilitadoEnTango.valueOf();
  }
  isAdmin() {
    return this.role.isAdmin();
  }
  isCustomer() {
    return this.role.isCustomer();
  }
  isVendor() {
    return this.role.isVendor();
  }
  // fromPublicInfo(
  //   publicInfo: UserPublicInfo,
  //   options?: {
  //     email: string,
  //     password_hash: string,
  //   }
  // ) {
  //   return new UserEntity({
  //     ...publicInfo,
  //     email: options?.email ?? null,
  //     password_hash: options?.password_hash ?? DUMMY_MD5
  //   })
  // }
  hasAdminAccess() {
    return this.role.isAdmin();
  }
}
function createAdminUserEntity(email, passwordHash) {
  return new UserEntity({
    id: 0,
    username: ADMIN_USERNAME,
    puede_crear_pedido: false,
    puede_editar_pedido: false,
    puede_anular_pedido: true,
    borrar_pedido_al_anular: true,
    perfil_facturacion_id: 0,
    aprobar_pedido_al_crear: false,
    ver_pedidos_cumplidos: true,
    dia_de_entrega: 0,
    email,
    ver_sin_precio: true,
    mostrar_mensaje_de_advertencia: false,
    habilitado_en_dxt: true,
    screen_name: DEFAULT_ADMIN_NAME,
    role: userRoleToNumber(UserRole.admin),
    password_hash: passwordHash,
    timestamp_modificacion: 0,
    universal_id: "0"
  });
}
async function resolveUserStateException(user, tangoUserNotFoundErrorCode) {
  var _a2;
  if (!user.tangoUserExists())
    return new DXTException(tangoUserNotFoundErrorCode);
  let errorCode;
  if (((_a2 = user.habilitadoEnTango) == null ? void 0 : _a2.valueOf()) === false) {
    errorCode = DXTErrorCode.TANGO_USER_DISABLED;
  } else {
    if (!user.habilitadoEnDXT.valueOf()) {
      errorCode = DXTErrorCode.DXT_USER_DISABLED;
    }
  }
  if (errorCode != null) {
    const miscSettings = await settingsService.getMiscSettings();
    return new DXTException(
      new DXTError(
        errorCode,
        {
          messageToUser: {
            type: "warning",
            title: miscSettings.user_disabled_message_title,
            content: miscSettings.user_disabled_message_content
          }
        }
      )
    );
  }
  return void 0;
}
function getPasswordHash(password) {
  return md5(password).toLocaleLowerCase();
}
const storedMiscSettingsSchema = {
  smtp_host: (v) => tryVO(() => new VOHost(v), new VOHost(DEFAULT_SMTP_HOST)),
  smtp_username: (v) => new VOString(typeof v === "string" ? v == null ? void 0 : v.trim() : ""),
  smtp_password: (v) => new VOString(typeof v === "string" ? v == null ? void 0 : v.trim() : ""),
  smtp_port: (v) => tryVO(() => new VOTCPPort(v), new VOTCPPort(DEFAULT_SMTP_PORT)),
  smtp_use_tls: (v) => tryVO(() => new VOBoolean(v ?? DEFAULT_SMTP_USE_TLS), new VOBoolean(DEFAULT_SMTP_USE_TLS)),
  auth_expiration_days: (v) => tryVO(
    () => new VOIntegerRange(v, AUTH_EXPIRATION_MIN_DAYS, AUTH_EXPIRATION_MAX_DAYS),
    new VOIntegerRange(DEFAULT_AUTH_EXPIRATION_DAYS, AUTH_EXPIRATION_MIN_DAYS, AUTH_EXPIRATION_MAX_DAYS)
  ),
  user_warning_message_title: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_USER_WARNING_MESSAGE_TITLE)),
  user_warning_message_content: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_USER_WARNING_MESSAGE_CONTENT)),
  user_disabled_message_title: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_USER_DISABLED_MESSAGE_TITLE)),
  user_disabled_message_content: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_USER_DISABLED_MESSAGE_CONTENT)),
  admin_password_hash: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(getPasswordHash(DEFAULT_ADMIN_PASSWORD))),
  admin_email: (v) => tryVO(() => new VOString(new VOEmailAddress(v).valueOf()), new VOString(""))
};
class StoredMiscSettingsDTO extends DTO {
  validate(input) {
    return validateInput(storedMiscSettingsSchema, input);
  }
  toUnsafe() {
    return this.data;
  }
}
const programConfigFilename = path.join(process.cwd(), "dxtango.cfg");
const dbIniFilename = path.join(configPath, "db_settings.ini");
const miscIniFilename = path.join(configPath, "misc_settings.ini");
async function _createDTOFromINI(filename, dtoConstructor) {
  let iniFileContent;
  try {
    iniFileContent = await readFile(filename, { encoding: "utf-8" });
    const settingsInput = parse(iniFileContent);
    return dtoConstructor(settingsInput);
  } catch (e) {
    const settings2 = dtoConstructor({});
    await _saveDTOToINI(filename, settings2);
    return settings2;
  }
}
function _createDTOFromINISync(filename, dtoConstructor) {
  let iniFileContent;
  try {
    iniFileContent = readFileSync(filename, { encoding: "utf-8" });
    const settingsInput = parse(iniFileContent);
    return dtoConstructor(settingsInput);
  } catch (e) {
    const settings2 = dtoConstructor({});
    _saveDTOToINISync(filename, settings2);
    return settings2;
  }
}
async function _saveDTOToINI(filename, dto) {
  const iniFileContent = stringify(dto.toUnsafe());
  await mkdir(path.dirname(filename), { recursive: true });
  await writeFile(filename, iniFileContent, { encoding: "utf-8" });
  return dto;
}
function _saveDTOToINISync(filename, dto) {
  const iniFileContent = stringify(dto.toUnsafe());
  mkdirSync(path.dirname(filename), { recursive: true });
  writeFileSync(filename, iniFileContent, { encoding: "utf-8" });
  return dto;
}
class SettingsService {
  constructor() {
    this._accessError = null;
    this._programConfig = null;
    this._dbSettings = null;
    this._miscSettings = null;
  }
  async init(ignoreCache) {
    await this.getProgramConfig(ignoreCache);
    await this.getDBSettings(ignoreCache);
    await this.getMiscSettings(ignoreCache);
  }
  async getProgramConfig(ignoreCache) {
    if ((ignoreCache ?? false) || this._programConfig == null)
      this._programConfig = await this._loadProgramConfig();
    return this._programConfig.data;
  }
  getProgramConfigSync() {
    return (this._programConfig ?? (this._programConfig = this._loadProgramConfigSync())).data;
  }
  async setProgramConfig(config2) {
    this._programConfig = await this._saveProgramConfig(config2);
    return this._programConfig.data;
  }
  async getDBSettings(ignoreCache) {
    if ((ignoreCache ?? false) || this._dbSettings == null)
      this._dbSettings = await this._loadDBSettings();
    return this._dbSettings.data;
  }
  async setDBSettings(settings2) {
    this._dbSettings = await this._saveDBSettings(settings2);
    return this._dbSettings.data;
  }
  async getMiscSettings(ignoreCache) {
    if ((ignoreCache ?? false) || this._miscSettings == null)
      this._miscSettings = await this._loadMiscSettings();
    return this._miscSettings.data;
  }
  async setMiscSettings(settings2) {
    this._miscSettings = await this._saveMiscSettings(settings2);
    return this._miscSettings.data;
  }
  async _loadProgramConfig() {
    return await _createDTOFromINI(programConfigFilename, (data) => new StoredProgramConfigDTO(data));
  }
  _loadProgramConfigSync() {
    return _createDTOFromINISync(programConfigFilename, (data) => new StoredProgramConfigDTO(data));
  }
  async _loadDBSettings() {
    return await _createDTOFromINI(dbIniFilename, (data) => new StoredDBSettingsDTO(data));
  }
  async _loadMiscSettings() {
    return await _createDTOFromINI(miscIniFilename, (data) => new StoredMiscSettingsDTO(data));
  }
  async _saveProgramConfig(config2) {
    return await _saveDTOToINI(programConfigFilename, config2);
  }
  async _saveDBSettings(settings2) {
    return await _saveDTOToINI(dbIniFilename, settings2);
  }
  async _saveMiscSettings(settings2) {
    return await _saveDTOToINI(miscIniFilename, settings2);
  }
}
const settingsService = new SettingsService();
const _DBSettingsChangedEvent = class _DBSettingsChangedEvent extends BusEvent {
  constructor(payload) {
    super(
      _DBSettingsChangedEvent.NAME,
      payload
    );
  }
};
_DBSettingsChangedEvent.NAME = "DB_SETTINGS_CHANGED";
let DBSettingsChangedEvent = _DBSettingsChangedEvent;
const _MiscSettingsChangedEvent = class _MiscSettingsChangedEvent extends BusEvent {
  constructor(payload) {
    super(
      _MiscSettingsChangedEvent.NAME,
      payload
    );
  }
};
_MiscSettingsChangedEvent.NAME = "DB_SETTINGS_CHANGED";
let MiscSettingsChangedEvent = _MiscSettingsChangedEvent;
var TangoConnectionChangeRequired = /* @__PURE__ */ ((TangoConnectionChangeRequired2) => {
  TangoConnectionChangeRequired2[TangoConnectionChangeRequired2["none"] = 0] = "none";
  TangoConnectionChangeRequired2[TangoConnectionChangeRequired2["passiveRefresh"] = 1] = "passiveRefresh";
  TangoConnectionChangeRequired2[TangoConnectionChangeRequired2["fullReload"] = 2] = "fullReload";
  return TangoConnectionChangeRequired2;
})(TangoConnectionChangeRequired || {});
class TDBProvider {
  constructor() {
    this.connectionChangeRequired = 2;
  }
  cleanConnectionError() {
    this._lastConnectionError = void 0;
  }
  _throwConnectionError(dxErrorCode, error) {
    var _a2;
    this._lastConnectionError = new DXTException(dxErrorCode, error != null ? (_a2 = error == null ? void 0 : error.message) == null ? void 0 : _a2.toString() : void 0);
    throw this._lastConnectionError;
  }
  async initializeKnex(dbName, dbSettings, unknownDBError) {
    var _a2, _b2;
    const originalConnectionChangeRequired = this.connectionChangeRequired;
    this.connectionChangeRequired = 0;
    const preKnexInstance = this._getKnexInstance(dbSettings);
    try {
      const connectionCheck = await preKnexInstance.raw(`select (1+1) as two`);
      const connectionOk = Array.isArray(connectionCheck) && connectionCheck.length > 0 && ((_b2 = (_a2 = connectionCheck[0]) == null ? void 0 : _a2.two) == null ? void 0 : _b2.toString()) === "2";
      if (!connectionOk) {
        this._throwConnectionError(DXTErrorCode.TANGO_DB_ACCESS_ERROR);
      }
    } catch (e) {
      this._throwConnectionError(DXTErrorCode.TANGO_DB_ACCESS_ERROR, e);
    }
    try {
      const result = await preKnexInstance.raw(`use ${dbName}`);
    } catch (e) {
      this._throwConnectionError(unknownDBError, e);
    }
    this.connectionChangeRequired = originalConnectionChangeRequired;
    await preKnexInstance.destroy();
    try {
      return this._getKnexInstance(dbSettings, dbName);
    } catch (e) {
      this._throwConnectionError(unknownDBError, e);
    }
  }
  _getKnexInstance(dbSettings, dbName) {
    const { db_host, db_port, db_user, db_password, db_connection_timeout_seconds } = dbSettings;
    return knex({
      dialect: "mssql",
      client: "mssql",
      connection: {
        server: db_host,
        port: db_port,
        user: db_user,
        password: db_password,
        connectionTimeout: db_connection_timeout_seconds * 1e3,
        requestTimeout: db_connection_timeout_seconds * 1e3,
        database: dbName ?? void 0,
        options: {
          mapBinding: (value) => {
            if (typeof value === "string") {
              return {
                type: TYPES.VarChar,
                value
              };
            }
          }
        }
      },
      pool: {
        min: 50,
        max: 100
      }
    }).on("query-error", function(error, obj) {
      if (isDevelopment()) {
        console.error(stringifyJSON(error));
        console.error(stringifyJSON(obj));
      }
    });
  }
}
function dbErrorToDXTException(e) {
  if (e instanceof DXTException)
    return e;
  if (!isRealObject(e)) {
    return new DXTException(new DXTError(
      DXTErrorCode.UNEXPECTED_ERROR,
      {
        extra: typeof (e == null ? void 0 : e.toString) === "function" ? e == null ? void 0 : e.toString() : void 0
      }
    ));
  }
  const error = e;
  if (error.code !== "EREQUEST") {
    return new DXTException(new DXTError(
      DXTErrorCode.FATAL_UNKNOWN_DB_ERROR,
      {
        extra: error.toString()
      }
    ));
  }
  const sqlServerError = error.number ?? 0;
  let errorCode;
  switch (sqlServerError) {
    case 2627:
      errorCode = DXTErrorCode.DUPLICATED_TABLE_RECORD;
      break;
    default:
      errorCode = DXTErrorCode.FATAL_UNKNOWN_DB_ERROR;
  }
  return new DXTException(new DXTError(
    errorCode,
    {
      extra: `[Sql error=${sqlServerError}] [${error.toString()}]`
    }
  ));
}
const dxtUserTableCreationFieldsSQL = {
  tango_id: `D_ID NOT NULL`,
  username: `varchar(${USER_NAME_MAX_LENGTH}) NOT NULL`,
  puede_crear_pedido: `bit NOT NULL`,
  puede_editar_pedido: `bit NOT NULL`,
  puede_anular_pedido: `bit NOT NULL`,
  borrar_pedido_al_anular: `bit NOT NULL`,
  perfil_facturacion_id: `D_ID NOT NULL`,
  aprobar_pedido_al_crear: `bit NOT NULL`,
  ver_pedidos_cumplidos: `bit NOT NULL`,
  dia_de_entrega: `int NOT NULL`,
  email: `varchar(${EMAIL_MAX_LENGTH})`,
  ver_sin_precio: `bit NOT NULL`,
  mostrar_mensaje_de_advertencia: `bit NOT NULL`,
  habilitado_en_dxt: `bit NOT NULL`,
  timestamp_modificacion: `bigint NOT NULL`,
  id_lista_alternativa: `D_ID NULL`,
  bonificacion_lista_alternativa: `DECIMAL_TG NULL`,
  universal_id: `uniqueidentifier DEFAULT newid() NOT NULL`
};
const DXT_CLIENTE_TABLE = "dxt_cliente";
const DXT_CLIENTE_ID_FIELD = "dxt_cliente_id";
const dxtClienteTableCreationFieldsSQL = {
  dxt_cliente_id: `int IDENTITY(1,1) NOT NULL`,
  password_hash: `varchar(${MD5_LENGTH}) NOT NULL`,
  ...dxtUserTableCreationFieldsSQL
};
const dxtClienteTableCreationIndexesSQL = [
  `CONSTRAINT pk_dxt_cliente_username UNIQUE (username)`,
  `CONSTRAINT pk_dxt_cliente_id PRIMARY KEY (dxt_cliente_id)`
];
const dxtClienteTablePostCommandsSQL = [
  `CREATE INDEX ix_dxt_cliente_tango_id ON dbo.dxt_cliente (tango_id);`
];
const DXT_VENDEDOR_TABLE = "dxt_vendedor";
const DXT_VENDEDOR_ID_FIELD = "dxt_vendedor_id";
const dxtVendedorTableCreationFieldsSQL = {
  dxt_vendedor_id: `int IDENTITY(1,1) NOT NULL`,
  password_hash: `varchar(${MD5_LENGTH}) NOT NULL`,
  ...dxtUserTableCreationFieldsSQL
};
const dxtVendedorTableCreationIndexesSQL = [
  `CONSTRAINT pk_dxt_vendedor_username UNIQUE (username)`,
  `CONSTRAINT pk_dxt_vendedor_id PRIMARY KEY (dxt_vendedor_id)`
];
const _DBTablesChangedEvent = class _DBTablesChangedEvent extends BusEvent {
  constructor(payload) {
    super(
      _DBTablesChangedEvent.NAME,
      payload
    );
  }
};
_DBTablesChangedEvent.NAME = "DB_TABLES_CHANGED";
let DBTablesChangedEvent = _DBTablesChangedEvent;
const isCacheDisabledGlobally = tryVO(() => {
  var _a2;
  return new VOBoolean((_a2 = settingsService.getProgramConfigSync()) == null ? void 0 : _a2.disable_cache);
}, new VOBoolean(false)).valueOf();
class MemoryCache {
  constructor(_cacheOwnerStatus) {
    this._cacheOwnerStatus = _cacheOwnerStatus;
    this._byIdCache = /* @__PURE__ */ new Map();
    this._metadataCache = /* @__PURE__ */ new Map();
    if (!isCacheDisabledGlobally) {
      eventBus$1.on(DBSettingsChangedEvent.NAME, this.onDBSettingsChanged.bind(this));
      eventBus$1.on(DBTablesChangedEvent.NAME, this.onTablesChanged.bind(this));
    }
  }
  _consoleLog(...args) {
    var _a2;
    if (isDevelopment()) {
      const tableName = (_a2 = this._cacheOwnerStatus.getTableName()) == null ? void 0 : _a2.toUpperCase();
      console.info(`[${tableName}] `, ...args);
    }
  }
  onDBSettingsChanged(event) {
    const { newDictionary, newCompany, resetCache } = event.payload;
    if (newDictionary || newCompany || resetCache)
      this.clear();
  }
  onTablesChanged(event) {
    const { payload: tablesChanged } = event;
    const dependencies = this._cacheOwnerStatus.getDependencies();
    const mainTableChanged = tablesChanged.findIndex((table) => dependencies.includes(table)) >= 0;
    if (mainTableChanged)
      this.clear();
  }
  async isEnabled() {
    return !isCacheDisabledGlobally && await this._cacheOwnerStatus.isReady();
  }
  async clear() {
    this._byIdCache.clear();
    this._metadataCache.clear();
    this._consoleLog(`Cache.clear()`);
  }
  async getByIdBuffer() {
    if (!await this.isEnabled())
      return;
    return this._byIdCache;
  }
  async getMetadata(id) {
    if (!await this.isEnabled())
      return;
    const data = this._metadataCache.get(id);
    if (data != null) {
      this._consoleLog(`Cache.getMetadata("${id}")`);
    }
    return data;
  }
  async setMetadata(id, data) {
    if (!await this.isEnabled())
      return;
    this._consoleLog(`Cache.setMetadata("${id}")`);
    this._metadataCache.set(id, data);
  }
  async setById(id, data) {
    if (!await this.isEnabled())
      return;
    this._consoleLog(`Cache.setById("${id}")`);
    this._byIdCache.set(id, data);
  }
  async getById(id) {
    if (!await this.isEnabled())
      return;
    const data = this._byIdCache.get(id);
    if (data != null) {
      this._consoleLog(`Cache.getById("${id}")`);
    }
    return data;
  }
  async invalidateById(id) {
    if (!await this.isEnabled())
      return;
    if (isDevelopment()) {
      console.info(`Cache.invalidateById("${id}")`);
    }
    this._byIdCache.delete(id);
  }
}
const DXT_ARTICULO_PRINT_LIST_TABLE = "dxt_articulo_print_list";
const DXT_LIST_ARTICULO_CODE_FIELD = "codigo_articulo";
const DXT_LIST_ARTICULO_ID_FIELD = "id";
const dxtArticuloListCreationFieldsSQL = {
  [DXT_LIST_ARTICULO_ID_FIELD]: `int IDENTITY(0,1) NOT NULL`,
  [DXT_LIST_ARTICULO_CODE_FIELD]: `varchar(100) COLLATE Latin1_General_BIN NOT NULL`,
  params: `varchar(500) COLLATE Latin1_General_BIN NULL`
};
const dxtArticuloListCreationIndexesSQL = [];
const DXT_ARTICULO_EDIT_LIST_TABLE = "dxt_articulo_edit_list";
const DATASET_TABLE = "Dataset";
const DATASET_ID_FIELD = "IDDataset";
const CAMPO_TABLE = "Campo";
const LONGITUD_MINIMA_PEDIDO_PRECISION = 12;
const LONGITUD_MAXIMA_PEDIDO_PRECISION = 14;
const EMPRESA_TABLE = "Empresa";
class DictionaryRepository extends TDBProvider {
  constructor() {
    super();
    this._tangoCompanies = /* @__PURE__ */ new Map();
    eventBus$1.on(DBSettingsChangedEvent.NAME, this.onDBSettingsChanged.bind(this));
  }
  onDBSettingsChanged(event) {
    const { newDictionary, newCompany, passiveDBChanges } = event.payload;
    if (newDictionary || newCompany) {
      this.connectionChangeRequired = TangoConnectionChangeRequired.fullReload;
    } else {
      if (passiveDBChanges) {
        this.connectionChangeRequired = TangoConnectionChangeRequired.passiveRefresh;
      }
    }
  }
  async getDictionary() {
    if (this.connectionChangeRequired === TangoConnectionChangeRequired.none && this._knexInstance) {
      return this._knexInstance;
    }
    const originalKnexInstance = this._knexInstance;
    this._knexInstance = void 0;
    this._numeroPedidoLongitud = void 0;
    this._numeroPedidoRange = void 0;
    this._tangoCompanies.clear();
    await (originalKnexInstance == null ? void 0 : originalKnexInstance.destroy());
    const settings2 = await settingsService.getDBSettings();
    if (this.connectionChangeRequired === TangoConnectionChangeRequired.fullReload) {
      this.cleanConnectionError();
    }
    const newKnexInstance = await this.initializeKnex(settings2.tango_dictionary, settings2, DXTErrorCode.TANGO_DICTIONARY_ACCESS_ERROR);
    if (this.connectionChangeRequired === TangoConnectionChangeRequired.fullReload) {
      await this._prepareDictionary(newKnexInstance);
    }
    this._knexInstance = newKnexInstance;
    this.connectionChangeRequired = TangoConnectionChangeRequired.none;
    return this._knexInstance;
  }
  async _prepareDictionary(knex2) {
    try {
      await this._prepareNumeroPedido(knex2);
      await this._loadCompaniesFromDictionary(knex2);
    } catch (e) {
      throw new DXTException(DXTErrorCode.TANGO_DICTIONARY_INITIALIZATION_ERROR, e == null ? void 0 : e.message);
    }
  }
  async _prepareNumeroPedido(k) {
    this._numeroPedidoRange = void 0;
    this._numeroPedidoLongitud = void 0;
    const result = await k(DATASET_TABLE).first("*").where({ Dataset: PEDIDO_TABLE });
    if (result == null)
      throw new DXTException(DXTErrorCode.UNEXPECTED_ERROR, "DictionaryProvider._prepareNumeroPedido");
    const datasetId = result[DATASET_ID_FIELD];
    const campos = await k(CAMPO_TABLE).select("*").where({
      [DATASET_ID_FIELD]: datasetId,
      Campo: "N_REMITO"
    });
    if (campos.length === 0)
      throw new Error("Error");
    if (campos.length > 1)
      throw new Error("Error");
    const nroPedidoLongitud = campos[0].Longitud;
    if (nroPedidoLongitud < LONGITUD_MINIMA_PEDIDO_PRECISION) {
      throw new DXTException(
        DXTErrorCode.UNEXPECTED_ERROR,
        `Error en longitud para el número de pedido (${nroPedidoLongitud}), es menor a ${LONGITUD_MINIMA_PEDIDO_PRECISION}.`
      );
    }
    if (nroPedidoLongitud > LONGITUD_MAXIMA_PEDIDO_PRECISION) {
      throw new DXTException(
        DXTErrorCode.UNEXPECTED_ERROR,
        `Error en longitud para el número de pedido (${nroPedidoLongitud}), es mayor a ${LONGITUD_MAXIMA_PEDIDO_PRECISION}.`
      );
    }
    this._numeroPedidoLongitud = nroPedidoLongitud;
    this._numeroPedidoRange = {
      min: 1,
      max: Number(BigInt(10) ** BigInt(nroPedidoLongitud - 1) - BigInt(1))
    };
  }
  async _loadCompaniesFromDictionary(k) {
    this._tangoCompanies.clear();
    const empresas = await k(EMPRESA_TABLE).select("*");
    const settings2 = await settingsService.getDBSettings();
    const currentCompany = settings2.tango_active_company;
    empresas.forEach((empresa) => {
      this._tangoCompanies.set(
        empresa.NombreBD,
        {
          db_name: empresa.NombreBD,
          name: empresa.NombreEmpresa,
          is_active: currentCompany === empresa.NombreBD
        }
      );
    });
  }
  async isReadyOrThrow() {
    await this.getDictionary();
    return true;
  }
  async getCompanies() {
    await this.getDictionary();
    return Array.from(this._tangoCompanies.values());
  }
  async getNumeroPedidoLongitud() {
    await this.getDictionary();
    if (this._numeroPedidoLongitud == null)
      throw new DXTException(DXTErrorCode.UNEXPECTED_ERROR, "DictionaryProvider.getNumeroPedidoLongitud");
    return this._numeroPedidoLongitud;
  }
  async getNumeroPedidoRange() {
    await this.getDictionary();
    if (this._numeroPedidoRange == null)
      throw new DXTException(DXTErrorCode.UNEXPECTED_ERROR, "DictionaryProvider.getNumeroPedidoRange");
    return this._numeroPedidoRange;
  }
  async formatNumeroPedido(id) {
    const idStr = id.toString();
    const longitudMaxima = await this.getNumeroPedidoLongitud() - 1;
    if (idStr.length > longitudMaxima) {
      throw new DXTException(
        DXTErrorCode.UNEXPECTED_ERROR,
        `La longitud del número de pedido (${idStr}) es mayor a ${longitudMaxima}.`
      );
    }
    return ` ${idStr.padStart(longitudMaxima, "0")}`;
  }
}
const dictionaryRepository = new DictionaryRepository();
class VOOrderRows extends ValueObject {
  validate(input) {
    if (!Array.isArray(input))
      this.throwError(input, "Input is not an array");
    return input.map((e) => {
      if (!isObj(e))
        this.throwError(input);
      const { id, quantity } = e;
      if (!isAnInteger(id))
        this.throwError(input, "Id field missing or invalid");
      if (!isANumber(quantity))
        this.throwError(input, "Quantity field missing or invalid");
      return { id, quantity };
    });
  }
}
const COMENTARIOS_MAX_LENGTH = 120;
const DESCRIPCION_MAX_LENGTH = 120;
const baseInputSchema = {
  comentarios: (v) => new VOTrimmedString(v, COMENTARIOS_MAX_LENGTH),
  bonificacion: (v) => new VOUInt32(v),
  id_transporte: (v) => new VOUInt32(v),
  id_deposito: (v) => new VOUInt32(v),
  id_condicion: (v) => new VOUInt32(v),
  id_asiento: (v) => new VOUInt32(v),
  id_talonario: (v) => new VOUInt32(v),
  id_direccion: (v) => new VOUInt32(v),
  renglones: (v) => new VOOrderRows(v)
};
const baseDraftInputSchema = {
  ...baseInputSchema,
  descripcion: (v) => new VONotEmptyString(v, DESCRIPCION_MAX_LENGTH)
};
const baseOrderInputSchema = {
  ...baseInputSchema,
  fecha_alta: (v) => new VODate(v),
  fecha_entrega: (v) => new VODate(v)
};
const updateDraftInputSchema = {
  ...baseDraftInputSchema,
  id_pedido: (v) => new VOUInt32(v)
};
const createDraftInputSchema = {
  ...baseDraftInputSchema,
  id_cliente: (v) => new VOUInt32(v)
};
const updateOrderInputSchema = {
  ...baseOrderInputSchema,
  id_pedido: (v) => new VOUInt32(v)
};
const createOrderInputSchema = {
  ...baseOrderInputSchema,
  id_cliente: (v) => new VOUInt32(v)
};
const validateUpdateDraftInput = (input) => validateInput(updateDraftInputSchema, input);
const validateCreateDraftInput = (input) => validateInput(createDraftInputSchema, input);
function _extraValidation(values) {
  const { fecha_alta, fecha_entrega } = values;
  if (fecha_entrega < fecha_alta)
    throw new DXTException(DXTErrorCode.DELIVERY_DATE_IS_EARLIER);
}
const validateUpdateOrderInput = (input) => validateInput(updateOrderInputSchema, input, (v) => {
  _extraValidation(v);
  return v;
});
const validateCreateOrderInput = (input) => validateInput(createOrderInputSchema, input, (v) => {
  _extraValidation(v);
  return v;
});
const DXT_PEDIDO_DRAFT_CLIENTES_TABLE = "dxt_pedido_draft_clientes";
const DXT_PEDIDO_DRAFT_VENDEDORES_TABLE = "dxt_pedido_draft_vendedores";
const dxtPedidoDraftTableCreationFieldsSQL = {
  [PEDIDO_ID_FIELD]: "int IDENTITY(1,1) NOT NULL",
  [PEDIDO_CODE_FIELD]: "varchar(14) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  [CLIENTE_ID_FIELD]: "D_ID NULL",
  [CLIENTE_CODE_FIELD]: "varchar(6) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  [VENDEDOR_ID_FIELD]: "D_ID NULL",
  [VENDEDOR_CODE_FIELD]: "varchar(10) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  ESTADO: "ENTERO_TG DEFAULT 0 NOT NULL",
  APRUEBA: "varchar(30) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  CIRCUITO: "ENTERO_TG DEFAULT 1 NULL",
  [DEPOSITO_CODE_FIELD]: "varchar(2) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  [TRANSPORTE_CODE_FIELD]: "varchar(10) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  COMENTARIO: `varchar(30) COLLATE Latin1_General_BIN DEFAULT '' NULL`,
  COMP_STK: "bit DEFAULT 0 NULL",
  [CONDICION_CODE_FIELD]: "ENTERO_TG DEFAULT 0 NULL",
  COTIZ: "DECIMAL_TG DEFAULT 1 NULL",
  EXPORTADO: "bit DEFAULT 0 NULL",
  FECHA_APRU: "datetime DEFAULT '1800/01/01' NULL",
  FECHA_ENTR: "datetime DEFAULT '1800/01/01' NULL",
  FECHA_PEDI: "datetime DEFAULT '1800/01/01' NULL",
  HORA_APRUE: "varchar(4) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  ID_EXTERNO: "varchar(20) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  LEYENDA_1: `varchar(${LEYENDA_FIELD_LENGTH}) COLLATE Latin1_General_BIN DEFAULT '' NULL`,
  LEYENDA_2: `varchar(${LEYENDA_FIELD_LENGTH}) COLLATE Latin1_General_BIN DEFAULT '' NULL`,
  LEYENDA_3: `varchar(${LEYENDA_FIELD_LENGTH}) COLLATE Latin1_General_BIN DEFAULT '' NULL`,
  LEYENDA_4: `varchar(${LEYENDA_FIELD_LENGTH}) COLLATE Latin1_General_BIN DEFAULT '' NULL`,
  LEYENDA_5: `varchar(${LEYENDA_FIELD_LENGTH}) COLLATE Latin1_General_BIN DEFAULT '' NULL`,
  MON_CTE: "bit DEFAULT 1 NULL",
  N_LISTA: "ENTERO_TG DEFAULT 0 NULL",
  N_REMITO: "varchar(14) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  NRO_O_COMP: "varchar(14) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  NRO_SUCURS: "ENTERO_TG DEFAULT 0 NULL",
  ORIGEN: "varchar(1) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  PORC_DESC: "DECIMAL_TG DEFAULT 0 NULL",
  REVISO_FAC: "varchar(1) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  REVISO_PRE: "varchar(1) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  REVISO_STK: "varchar(1) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  [TALONARIO_CODE_FIELD]: "ENTERO_TG DEFAULT 0 NULL",
  [TALONARIO_ID2_FIELD]: "ENTERO_TG DEFAULT 0 NOT NULL",
  TOTAL_PEDI: "DECIMAL_TG DEFAULT 0 NULL",
  TIPO_ASIEN: "varchar(2) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  MOTIVO: "varchar(3) COLLATE Latin1_General_BIN DEFAULT '' NOT NULL",
  HORA: "varchar(6) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  COD_CLASIF: "varchar(6) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  ID_ASIENTO_MODELO_GV: "D_ID NULL",
  TAL_PE_ORI: "ENTERO_TG DEFAULT 0 NULL",
  NRO_PE_ORI: "varchar(14) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  FECHA_INGRESO: "datetime DEFAULT '1800/01/01' NULL",
  HORA_INGRESO: "varchar(6) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  USUARIO_INGRESO: `varchar(${DESCRIPCION_MAX_LENGTH}) COLLATE Modern_Spanish_CI_AI  NOT NULL`,
  TERMINAL_INGRESO: "varchar(255) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  FECHA_ULTIMA_MODIFICACION: "datetime DEFAULT '1800/01/01' NULL",
  HORA_ULTIMA_MODIFICACION: "varchar(6) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  USUA_ULTIMA_MODIFICACION: "varchar(120) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  TERM_ULTIMA_MODIFICACION: "varchar(255) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  ID_DIRECCION_ENTREGA: "D_ID NULL",
  ES_PEDIDO_WEB: "bit DEFAULT 0 NULL",
  WEB_ORDER_ID: "int DEFAULT 0 NULL",
  FECHA_O_COMP: "datetime DEFAULT '1800/01/01' NULL",
  ACTIVIDAD_COMPROBANTE_AFIP: "varchar(1) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  ID_ACTIVIDAD_EMPRESA_AFIP: "D_ID NULL",
  TIPO_DOCUMENTO_PAGADOR: "ENTERO_TG DEFAULT 0 NULL",
  NUMERO_DOCUMENTO_PAGADOR: "varchar(20) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  USUARIO_TIENDA: "varchar(200) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  TIENDA: "varchar(60) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  ORDER_ID_TIENDA: "varchar(200) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  NRO_OC_COMP: "varchar(20) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  TOTAL_DESC_TIENDA: "DECIMAL_TG DEFAULT 0 NULL",
  TIENDA_QUE_VENDE: "varchar(200) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  PORCEN_DESC_TIENDA: "DECIMAL_TG DEFAULT 0 NULL",
  USUARIO_TIENDA_VENDEDOR: "varchar(100) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  ID_NEXO_PEDIDOS_ORDEN: "int NULL",
  [CONDICION_ID_FIELD]: "D_ID NULL",
  [LISTA_ID_FIELD]: "D_ID NULL",
  [TRANSPORTE_ID_FIELD]: "D_ID NULL",
  ID_GVA38: "D_ID NULL",
  ID_GVA43_TALON_PED: "D_ID NULL",
  ID_GVA81: "D_ID NULL",
  ID_SUCURSAL: "D_ID NULL",
  METODO_EXPORTACION: "varchar(30) COLLATE Modern_Spanish_CI_AI NULL",
  NRO_SUCURSAL_DESTINO_PEDIDO: "ENTERO_TG NULL",
  ID_MODELO_PEDIDO: "D_ID NULL"
};
const dxtPedidoDraftTableCreationIndexesSQL = (draftTableName) => [
  `CONSTRAINT PK_${draftTableName}_id PRIMARY KEY (${PEDIDO_ID_FIELD})`
];
const dxtPedidoDraftTablePostCommandsSQL = (draftTableName, draftOwnerColumn) => [
  `CREATE INDEX IX_dxt_pedido_draft_code ON ${draftTableName} (${PEDIDO_CODE_FIELD} ASC);`,
  `CREATE UNIQUE INDEX IX_${draftTableName}_comentario ON ${draftTableName} (${draftOwnerColumn} ASC, USUARIO_INGRESO ASC);`,
  `CREATE INDEX IX_dxt_pedido_draft_cliente ON ${draftTableName} (  ${CLIENTE_ID_FIELD} ASC, FECHA_PEDI ASC );`,
  `CREATE INDEX IX_dxt_pedido_draft_vendedor ON ${draftTableName} (  ${VENDEDOR_ID_FIELD} ASC, FECHA_PEDI ASC );`
];
const RENGLON_PEDIDO_TABLE = "GVA03";
const RENGLON_PEDIDO_ID_FIELD = "ID_GVA03";
const DEPOSITO_CODE2_FIELD = "COD_DEPOSI";
const renglonPedidoModelColumns = [
  RENGLON_PEDIDO_ID_FIELD,
  PEDIDO_ID_FIELD,
  PEDIDO_CODE_FIELD,
  ARTICULO_CODE_FIELD,
  ARTICULO_ID_FIELD,
  "N_RENGLON",
  "CANT_A_DES",
  "CANT_A_FAC",
  "CANT_PEN_D",
  "CANT_PEN_F",
  "CANT_PEDID",
  "PRECIO",
  "DESCUENTO",
  "PRECIO_LISTA",
  "PRECIO_BONIF"
];
const DXT_PEDIDO_DRAFT_ROW_CLIENTES_TABLE = "dxt_pedido_draft_row_clientes";
const DXT_PEDIDO_DRAFT_ROW_VENDEDORES_TABLE = "dxt_pedido_draft_row_vendedores";
const dxtPedidoDraftRowTableCreationFieldsSQL = {
  [RENGLON_PEDIDO_ID_FIELD]: "int IDENTITY(1,1) NOT NULL",
  [PEDIDO_ID_FIELD]: "D_ID NULL",
  [PEDIDO_CODE_FIELD]: "varchar(14) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  CAN_EQUI_V: "DECIMAL_TG DEFAULT 0 NULL",
  CANT_A_DES: "DECIMAL_TG DEFAULT 0 NULL",
  CANT_A_FAC: "DECIMAL_TG DEFAULT 0 NULL",
  CANT_PEDID: "DECIMAL_TG DEFAULT 0 NULL",
  CANT_PEN_D: "DECIMAL_TG DEFAULT 0 NULL",
  CANT_PEN_F: "DECIMAL_TG DEFAULT 0 NULL",
  [ARTICULO_CODE_FIELD]: "varchar(15) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  DESCUENTO: "DECIMAL_TG DEFAULT 0 NULL",
  N_RENGLON: "T_D_RENGLON NULL",
  PEN_REM_FC: "DECIMAL_TG DEFAULT 0 NULL",
  PEN_FAC_RE: "DECIMAL_TG DEFAULT 0 NULL",
  PRECIO: "DECIMAL_TG DEFAULT 0 NULL",
  [TALONARIO_ID2_FIELD]: "ENTERO_TG DEFAULT 0 NOT NULL",
  COD_CLASIF: "varchar(6) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  CANT_A_DES_2: "DECIMAL_TG DEFAULT 0 NULL",
  CANT_A_FAC_2: "DECIMAL_TG DEFAULT 0 NULL",
  CANT_PEDID_2: "DECIMAL_TG DEFAULT 0 NULL",
  CANT_PEN_D_2: "DECIMAL_TG DEFAULT 0 NULL",
  CANT_PEN_F_2: "DECIMAL_TG DEFAULT 0 NULL",
  PEN_REM_FC_2: "DECIMAL_TG DEFAULT 0 NULL",
  PEN_FAC_RE_2: "DECIMAL_TG DEFAULT 0 NULL",
  ID_MEDIDA_VENTAS: "D_ID NULL",
  ID_MEDIDA_STOCK_2: "D_ID NULL",
  ID_MEDIDA_STOCK: "D_ID NULL",
  UNIDAD_MEDIDA_SELECCIONADA: "char(1) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  COD_ARTICU_KIT: "varchar(15) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  RENGL_PADR: "T_D_RENGLON NULL",
  PROMOCION: "bit DEFAULT 0 NULL",
  PRECIO_ADICIONAL_KIT: "DECIMAL_TG DEFAULT 0 NULL",
  KIT_COMPLETO: "bit DEFAULT 0 NULL",
  INSUMO_KIT_SEPARADO: "bit DEFAULT 0 NULL",
  PRECIO_LISTA: "DECIMAL_TG DEFAULT 0 NULL",
  PRECIO_BONIF: "DECIMAL_TG DEFAULT 0 NULL",
  DESCUENTO_PARAM: "DECIMAL_TG DEFAULT 0 NULL",
  PRECIO_FECHA: "datetime DEFAULT '18000101' NULL",
  FECHA_MODIFICACION_PRECIO: "datetime DEFAULT '18000101' NULL",
  USUARIO_MODIFICACION_PRECIO: "varchar(120) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  TERMINAL_MODIFICACION_PRECIO: "varchar(255) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
  ID_NEXO_PEDIDOS_RENGLON_ORDEN: "int NULL",
  CANT_A_DES_EXPORTADA: "DECIMAL_TG NULL",
  CANT_A_FAC_EXPORTADA: "DECIMAL_TG NULL",
  CANT_A_DES_2_EXPORTADA: "DECIMAL_TG NULL",
  CANT_A_FAC_2_EXPORTADA: "DECIMAL_TG NULL",
  [DEPOSITO_CODE2_FIELD]: "varchar(2) COLLATE Latin1_General_BIN NULL",
  [ARTICULO_ID_FIELD]: "D_ID NULL",
  [DEPOSITO_ID_FIELD]: "D_ID NULL"
};
const dxtPedidoDraftRowTableCreationIndexesSQL = (draftRowTableName) => [
  `CONSTRAINT PK_${draftRowTableName}_id PRIMARY KEY (${RENGLON_PEDIDO_ID_FIELD})`
];
const dxtPedidoDraftRowTablePostCommandsSQL = (draftTableName, draftRowTableName) => [
  `CREATE UNIQUE INDEX IX_dxt_pedido_draft_with_order ON ${draftRowTableName} ( ${PEDIDO_ID_FIELD} ASC, N_RENGLON ASC );ALTER TABLE ${draftRowTableName}   ADD CONSTRAINT FK_${draftTableName}_to_row_pedido_draft FOREIGN KEY (${PEDIDO_ID_FIELD}) REFERENCES ${draftTableName}(${PEDIDO_ID_FIELD});`
];
class CompanyInitProvider extends TDBProvider {
  constructor() {
    super();
    this._dbChanges = /* @__PURE__ */ new Map();
    eventBus$1.on(DBSettingsChangedEvent.NAME, this.onDBSettingsChanged.bind(this));
  }
  onDBSettingsChanged(event) {
    if (event.payload.newCompany) {
      this.connectionChangeRequired = TangoConnectionChangeRequired.fullReload;
    } else {
      this.connectionChangeRequired = TangoConnectionChangeRequired.passiveRefresh;
    }
  }
  async getCompany() {
    const settings2 = await settingsService.getDBSettings();
    const companyDBName = settings2.tango_active_company;
    await dictionaryRepository.isReadyOrThrow();
    if (this.connectionChangeRequired === TangoConnectionChangeRequired.none && this._knexInstance) {
      return await this._queryChangesAndContinue(this._knexInstance, companyDBName);
    }
    const originalKnexInstance = this._knexInstance;
    this._knexInstance = void 0;
    this._cleanDBChanges();
    await (originalKnexInstance == null ? void 0 : originalKnexInstance.destroy());
    if (companyDBName === "")
      throw new DXTException(DXTErrorCode.TANGO_COMPANY_NOT_SELECTED);
    if (this.connectionChangeRequired === TangoConnectionChangeRequired.fullReload) {
      this.cleanConnectionError();
    }
    const newKnexInstance = await this.initializeKnex(companyDBName, settings2, DXTErrorCode.TANGO_COMPANY_ACCESS_ERROR);
    if (this.connectionChangeRequired === TangoConnectionChangeRequired.fullReload) {
      await this._prepareCompany(newKnexInstance);
    }
    this._knexInstance = newKnexInstance;
    this.connectionChangeRequired = TangoConnectionChangeRequired.none;
    return await this._queryChangesAndContinue(this._knexInstance, companyDBName);
  }
  _cleanDBChanges() {
    this._dbChanges.clear();
  }
  async _queryChangesAndContinue(knexInstance, dbName) {
    if (isCacheDisabledGlobally)
      return knexInstance;
    const result = await knexInstance.raw(
      "SELECT OBJECT_NAME(OBJECT_ID) AS tableName, user_updates as updates FROM sys.dm_db_index_usage_stats WHERE user_updates>0 and database_id = DB_ID( :dbName )",
      { dbName }
    );
    this._updateDBChanges(result);
    return knexInstance;
  }
  _updateDBChanges(status) {
    const newStatus = /* @__PURE__ */ new Map();
    status.forEach(({ tableName, updates }) => {
      const updatesNumber = Number.parseInt(updates);
      const current = newStatus.get(tableName);
      const newUpdates = (current ?? 0) + (Number.isFinite(updatesNumber) ? updatesNumber : 0);
      newStatus.set(tableName, newUpdates);
    });
    const tablesWithChanges = [];
    newStatus.forEach((updates, table) => {
      const _previousUpdates = this._dbChanges.get(table);
      if (_previousUpdates !== updates) {
        tablesWithChanges.push(table);
      }
    });
    this._dbChanges = newStatus;
    if (tablesWithChanges.length > 0) {
      if (isDevelopment()) {
        console.info("DB CHANGES >>", stringifyJSON(tablesWithChanges));
      }
      emitBusEvent(
        new DBTablesChangedEvent(tablesWithChanges)
      );
    }
  }
  async _prepareCompany(knexInstance) {
    await this._initializeTables(knexInstance);
  }
  async _initializeTables(knex2) {
    await this._initializeTable(
      knex2,
      DXT_CLIENTE_TABLE,
      dxtClienteTableCreationFieldsSQL,
      dxtClienteTableCreationIndexesSQL,
      dxtClienteTablePostCommandsSQL
    );
    await this._initializeTable(knex2, DXT_VENDEDOR_TABLE, dxtVendedorTableCreationFieldsSQL, dxtVendedorTableCreationIndexesSQL);
    await this._initializeTable(knex2, DXT_ARTICULO_PRINT_LIST_TABLE, dxtArticuloListCreationFieldsSQL, dxtArticuloListCreationIndexesSQL);
    await this._initializeTable(knex2, DXT_ARTICULO_EDIT_LIST_TABLE, dxtArticuloListCreationFieldsSQL, dxtArticuloListCreationIndexesSQL);
    await this._initializeTable(
      knex2,
      DXT_PEDIDO_DRAFT_CLIENTES_TABLE,
      dxtPedidoDraftTableCreationFieldsSQL,
      dxtPedidoDraftTableCreationIndexesSQL(DXT_PEDIDO_DRAFT_CLIENTES_TABLE),
      dxtPedidoDraftTablePostCommandsSQL(DXT_PEDIDO_DRAFT_CLIENTES_TABLE, CLIENTE_ID_FIELD)
    );
    await this._initializeTable(
      knex2,
      DXT_PEDIDO_DRAFT_ROW_CLIENTES_TABLE,
      dxtPedidoDraftRowTableCreationFieldsSQL,
      dxtPedidoDraftRowTableCreationIndexesSQL(DXT_PEDIDO_DRAFT_ROW_CLIENTES_TABLE),
      dxtPedidoDraftRowTablePostCommandsSQL(DXT_PEDIDO_DRAFT_CLIENTES_TABLE, DXT_PEDIDO_DRAFT_ROW_CLIENTES_TABLE)
    );
    await this._initializeTable(
      knex2,
      DXT_PEDIDO_DRAFT_VENDEDORES_TABLE,
      dxtPedidoDraftTableCreationFieldsSQL,
      dxtPedidoDraftTableCreationIndexesSQL(DXT_PEDIDO_DRAFT_VENDEDORES_TABLE),
      dxtPedidoDraftTablePostCommandsSQL(DXT_PEDIDO_DRAFT_VENDEDORES_TABLE, VENDEDOR_ID_FIELD)
    );
    await this._initializeTable(
      knex2,
      DXT_PEDIDO_DRAFT_ROW_VENDEDORES_TABLE,
      dxtPedidoDraftRowTableCreationFieldsSQL,
      dxtPedidoDraftRowTableCreationIndexesSQL(DXT_PEDIDO_DRAFT_ROW_VENDEDORES_TABLE),
      dxtPedidoDraftRowTablePostCommandsSQL(DXT_PEDIDO_DRAFT_VENDEDORES_TABLE, DXT_PEDIDO_DRAFT_ROW_VENDEDORES_TABLE)
    );
  }
  async _initializeTable(knex2, tableName, fields, indexes, postCommands) {
    let tableExists = false;
    let tableWithUnknownColumns = false;
    try {
      const count = await knex2.count().from(tableName);
      tableExists = Array.isArray(count) && count.length > 0;
    } catch (e) {
      if (isDevelopment()) {
        console.error(e);
      }
    }
    if (tableExists) {
      try {
        const requiredFields = Object.keys(fields);
        await knex2.select(...requiredFields).from(tableName).first();
        return;
      } catch (e) {
        if (isDevelopment()) {
          console.error(e);
        }
        tableWithUnknownColumns = true;
      }
    }
    if (tableWithUnknownColumns)
      throw new DXTException(DXTErrorCode.TANGO_COMPANY_INITIALIZATION_ERROR, `Tabla con formato no válido: ${tableName}`);
    const fieldDefinitions = Object.entries(fields).map(([field, sql]) => `${field} ${sql}`);
    const allDefinitions = [...fieldDefinitions, ...indexes].join(",");
    const creationSql = `CREATE TABLE ${tableName} (${allDefinitions});`;
    try {
      const result = await knex2.raw(creationSql);
      if (postCommands == null)
        return;
      for (const postCommandSql of postCommands) {
        const result2 = await knex2.raw(postCommandSql);
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
const _CompanyProvider = class _CompanyProvider extends CompanyInitProvider {
  constructor(config2) {
    super();
    this.config = config2;
    const { dependencies, mainTable } = config2;
    const _collectedProviders = [];
    if (dependencies != null)
      _collectDependencies(dependencies, _collectedProviders);
    this._dependencies = [
      mainTable,
      ..._collectedProviders.map((p) => isStr(p) ? p : p.config.mainTable)
    ];
    this.cache = new MemoryCache(this);
    eventBus$1.on(DBSettingsChangedEvent.NAME, this.onDBSettingsChanged.bind(this));
  }
  getTableName() {
    return this.config.mainTable;
  }
  getDependencies() {
    return this._dependencies;
  }
  async isReady() {
    await this.getCompany();
    return true;
  }
  async count() {
    const k = await this.getCompany();
    const { mainTable } = this.config;
    const data = await k(mainTable).count({ count: "*" });
    const validCount = Array.isArray(data) && data.length > 0 && isANumber(data[0].count);
    if (!validCount)
      throw new DXTException(DXTErrorCode.FATAL_DB_QUERY_FAILED, `CompanyProvider.count() on ${mainTable}`);
    return data[0].count;
  }
  async _getById(id, options) {
    const k = await this.getCompany();
    const useCache = (options == null ? void 0 : options.useCache) ?? true;
    if (useCache) {
      const cachedData = await this.cache.getById(id);
      if (cachedData != null)
        return cachedData;
    }
    const { mainTable, mainIdField, columns } = this.config;
    const data = id != null ? await k(mainTable).first(...columns ?? "*").where(mainIdField, id) : await k(mainTable).first(...columns ?? "*");
    if (data == null)
      return null;
    const result = this.toResult(data);
    if (useCache) {
      await this.cache.setById(id, result);
    }
    return result;
  }
  async getMany(columnName, columnValue, options) {
    const k = await this.getCompany();
    (options == null ? void 0 : options.useCache) ?? true;
    const first = (options == null ? void 0 : options.first) ?? false;
    const cacheKey = this._getByColumnCacheKey(columnName, columnValue, first ? `_FIRST` : "", options);
    if (cacheKey != null) {
      const cachedData = await this.cache.getMetadata(cacheKey);
      if (cachedData != null)
        return cachedData;
    }
    const { mainTable, columns } = this.config;
    let query = k(mainTable);
    if (first) {
      query = query.first(...columns ?? "*");
    } else {
      query = query.select(...columns ?? "*");
    }
    const where = options == null ? void 0 : options.where;
    if (where != null) {
      query = query.where(where.field, where.value);
    }
    const data = await query.andWhere(columnName, columnValue);
    if (data == null)
      return [];
    const result = Array.isArray(data) ? data.map((m) => this.toResult(m)) : [this.toResult(data)];
    if (cacheKey != null) {
      await this.cache.setMetadata(cacheKey, result);
    }
    return result;
  }
  async getOneOrNull(columnName, columnValue, options) {
    const data = await this.getMany(
      columnName,
      columnValue,
      {
        ...options,
        first: true
      }
    );
    if (data.length == 0)
      return null;
    return data[0];
  }
  async getOne(columnName, columnValue, options) {
    const result = await this.getOneOrNull(columnName, columnValue, options);
    if (result == null)
      throw new DXTException(DXTErrorCode.NOT_FOUND);
    return result;
  }
  async getFirstOrNull(options) {
    return await this._getById(void 0, options);
  }
  async getByIdOrNull(id, options) {
    return await this._getById(id, options);
  }
  async getById(id, options) {
    const result = await this.getByIdOrNull(id, options);
    if (result == null)
      throw new DXTException(DXTErrorCode.NOT_FOUND);
    return result;
  }
  async getFirst(options) {
    const result = await this.getFirstOrNull(options);
    if (result == null)
      throw new DXTException(DXTErrorCode.NOT_FOUND);
    return result;
  }
  async getAll(options) {
    const cacheKey = this.getAllCacheKey(options);
    if (cacheKey != null) {
      const cachedData = await this.cache.getMetadata(cacheKey);
      if (cachedData)
        return cachedData;
    }
    const { mainTable, columns, sortField } = this.config;
    const k = await this.getCompany();
    let query = k(mainTable);
    const where = options == null ? void 0 : options.where;
    if (where != null) {
      query = query.where(where.field, where.value);
    }
    const whereIn = options == null ? void 0 : options.whereIn;
    if (whereIn != null) {
      query = query.whereIn(whereIn.field, whereIn.values);
    }
    if (sortField != null)
      query = query.orderBy(sortField);
    if ((options == null ? void 0 : options.offset) != null) {
      query = query.offset(options == null ? void 0 : options.offset).limit((options == null ? void 0 : options.limit) ?? 10);
    }
    const data = await query.select(...columns ?? "*");
    const result = data.map((p) => this.toResult(p));
    if (cacheKey != null)
      await this.cache.setMetadata(cacheKey, result);
    return result;
  }
  async deleteById(id) {
    const { mainTable, mainIdField } = this.config;
    const k = await this.getCompany();
    const result = await k(mainTable).where(mainIdField, id).del();
    if (result <= 0)
      throw new DXTException(DXTErrorCode.NOT_FOUND);
    await this.cache.invalidateById(id);
  }
  getAllByUserCacheKey(role, tangoUserId, options) {
    const useCache = (options == null ? void 0 : options.useCache) ?? true;
    if (!useCache)
      return null;
    const { mainTable } = this.config;
    return `${mainTable}_BU_${this._getOptionsCacheKey(options)}_${role}_${tangoUserId ?? "A"}`;
  }
  _getByColumnCacheKey(columnName, columnValue, extraKey, options) {
    var _a2;
    const useCache = (options == null ? void 0 : options.useCache) ?? true;
    if (!useCache)
      return null;
    const finalColumnName = valueToString((_a2 = columnName == null ? void 0 : columnName.toString) == null ? void 0 : _a2.call(columnName));
    const finalColumnValue = (columnValue == null ? void 0 : columnValue.toString()) ?? _CompanyProvider._noValueCacheKey;
    const { mainTable } = this.config;
    return `${mainTable}_BC_${this._getOptionsCacheKey(options)}_${extraKey}_${finalColumnName}_${finalColumnValue}`;
  }
  getAllCacheKey(options) {
    const useCache = (options == null ? void 0 : options.useCache) ?? true;
    if (!useCache)
      return null;
    const { mainTable } = this.config;
    return `${mainTable}_ALL_${this._getOptionsCacheKey(options)}`;
  }
  _getOptionsCacheKey(options) {
    if (options == null)
      return "NO";
    const {
      offset,
      limit,
      where,
      whereIn
    } = options;
    const chunks = [
      offset ?? "O",
      limit ?? "L",
      (where == null ? void 0 : where.field) ?? "W",
      (where == null ? void 0 : where.value) ?? "V",
      (whereIn == null ? void 0 : whereIn.field) ?? "I",
      (whereIn == null ? void 0 : whereIn.values.join("-")) ?? "V"
    ];
    return chunks.join("_");
  }
};
_CompanyProvider._noValueCacheKey = "NO_VALUE";
let CompanyProvider = _CompanyProvider;
function _collectDependencies(providers, collectedProviders) {
  providers.forEach((p) => {
    const providerName = _providerUniqueName(p);
    const providerAlreadyExists = collectedProviders.findIndex((el) => _providerUniqueName(el) == providerName) >= 0;
    if (providerAlreadyExists)
      return;
    collectedProviders.push(p);
    if (isStr(p))
      return;
    const { dependencies } = p.config;
    if (dependencies != null)
      _collectDependencies(dependencies, collectedProviders);
  });
}
function _providerUniqueName(p) {
  if (isStr(p))
    return p;
  return `${p.constructor.name}.${p.config.mainTable}`;
}
function getUserRoleWhere(role, tangoUserId) {
  switch (role) {
    case UserRole.vendor:
      return {
        field: VENDEDOR_ID_FIELD,
        value: tangoUserId
      };
    case UserRole.customer:
      return {
        field: CLIENTE_ID_FIELD,
        value: tangoUserId
      };
  }
  return void 0;
}
const PEDIDO_INVALIDO = "Inválido";
const PEDIDO_INGRESADO = "Ingresado";
const PEDIDO_APROBADO = "Visto";
const PEDIDO_CUMPLIDO = "Cumplido";
const PEDIDO_CERRADO = "Cerrado";
const PEDIDO_ANULADO = "Anulado";
const PEDIDO_ENPROGRESO = "En progreso";
const PEDIDO_MENU_MODIFY = "Modificar";
const PEDIDO_MENU_DELETE = "Eliminar";
const PEDIDO_MENU_CANCEL = "Anular";
const PEDIDO_MENU_DUPLICATE = "Duplicar";
const PEDIDO_MENU_CREATE_ORDER = "Crear pedido";
const PEDIDO_MENU_CREATE_DRAFT = "Crear borrador";
const PEDIDO_MENU_CONVERT_DRAFT_TO_ORDER = "Convertir en pedido";
const PEDIDO_ARTICLE_GROUP_NO_NAME = "Varios";
const PEDIDO_CANCEL_ORDER = "Anular pedido";
const PEDIDO_CANCEL_ORDER_CONFIRM = "¿Está seguro que desea anular este pedido? Esta acción no se puede deshacer.";
const PEDIDO_ORDER_CANCELED = "Pedido anulado";
const PEDIDO_DELETE_ORDER = "Eliminar pedido";
const PEDIDO_DELETE_ORDER_CONFIRM = "¿Está seguro que desea eliminar este pedido? Esta acción no se puede deshacer.";
const PEDIDO_ORDER_DELETED = "Pedido eliminado";
const PEDIDO_DELETE_DRAFT = "Eliminar borrador";
const PEDIDO_DELETE_DRAFT_CONFIRM = "¿Está seguro que desea eliminar este borrador? Esta acción no se puede deshacer.";
const PEDIDO_DRAFT_DELETED = "Borrador eliminado";
function getEstadoPedidoText(estado) {
  switch (estado) {
    case EstadoPedido.INGRESADO:
      return PEDIDO_INGRESADO;
    case EstadoPedido.APROBADO:
      return PEDIDO_APROBADO;
    case EstadoPedido.CUMPLIDO:
      return PEDIDO_CUMPLIDO;
    case EstadoPedido.CERRADO:
      return PEDIDO_CERRADO;
    case EstadoPedido.ANULADO:
      return PEDIDO_ANULADO;
    case EstadoPedido.EN_PROGRESO:
      return PEDIDO_ENPROGRESO;
    default:
      return PEDIDO_INVALIDO;
  }
}
function numberToEstadoPedido(value) {
  if (!Number.isInteger(value))
    return EstadoPedido.INVALIDO;
  switch (value) {
    case EstadoPedido.INGRESADO:
      return EstadoPedido.INGRESADO;
    case EstadoPedido.APROBADO:
      return EstadoPedido.APROBADO;
    case EstadoPedido.CUMPLIDO:
      return EstadoPedido.CUMPLIDO;
    case EstadoPedido.CERRADO:
      return EstadoPedido.CERRADO;
    case EstadoPedido.ANULADO:
      return EstadoPedido.ANULADO;
  }
  return EstadoPedido.INVALIDO;
}
function realOrderStatus(header, rows) {
  const { estado } = header;
  const canBeInProgress = rows != null && (estado == EstadoPedido.APROBADO || estado == EstadoPedido.INGRESADO);
  if (!canBeInProgress)
    return estado;
  for (const row of rows) {
    const { a_descontar, a_facturar, pendiente_descontar, pendiente_facturar } = row;
    if (a_descontar != pendiente_descontar || a_facturar != pendiente_facturar)
      return EstadoPedido.EN_PROGRESO;
  }
  return estado;
}
function isUserAllowedToModifyOrder(user, orderStatus) {
  if (orderStatus == EstadoPedido.INGRESADO)
    return true;
  return false;
}
function isUserAllowedToCancelOrDeleteOrder(user, orderStatus) {
  if (orderStatus == EstadoPedido.INGRESADO)
    return true;
  const isAdmin = user instanceof UserEntity ? user.isAdmin() : user.role == UserRole.admin;
  const aprobarAlCrear = user instanceof UserEntity ? user.aprobarPedidoAlCrear.valueOf() : user.aprobar_pedido_al_crear;
  if (orderStatus == EstadoPedido.APROBADO && aprobarAlCrear)
    return true;
  if ((orderStatus == EstadoPedido.EN_PROGRESO || orderStatus == EstadoPedido.ANULADO) && isAdmin)
    return true;
  return false;
}
class TangoProvider extends CompanyProvider {
  toResultWithoutDisposables(m) {
    const { FILLER, OBSERVACIONES, ROW_VERSION, CAMPOS_ADICIONALES, ...remaining } = m;
    return {
      ...remaining
    };
  }
}
function createTangoRepository(mainTable, mainIdField, modelMapper, columns, dependencies) {
  return new class extends TangoProvider {
    constructor() {
      super({
        mainTable,
        mainIdField,
        columns,
        dependencies
      });
    }
    toResult(m) {
      return modelMapper(m);
    }
  }();
}
function resolveScreenName(screenNameFields, model, def = NO_NAME) {
  for (const f of screenNameFields) {
    const v = model[f];
    if (typeof v === "string" && v.length > 0) {
      return v;
    }
  }
  return def;
}
function customerTrulyEnabled(habilitado, vendorExists, fechaInhabilitacion) {
  if (!habilitado)
    return false;
  if (!vendorExists)
    return false;
  const currentTime = now();
  const year = (fechaInhabilitacion == null ? void 0 : fechaInhabilitacion.getUTCFullYear()) ?? 0;
  const disableTimestamp = (fechaInhabilitacion == null ? void 0 : fechaInhabilitacion.getTime()) ?? 0;
  const trulyEnabled = year <= 1900 || currentTime < disableTimestamp;
  return trulyEnabled;
}
const pedidoModelMapper = (m) => {
  const {
    [PEDIDO_ID_FIELD]: idPedido,
    [PEDIDO_CODE_FIELD]: numero_pedido,
    [CLIENTE_ID_FIELD]: id_cliente,
    [CLIENTE_CODE_FIELD]: codigo_cliente,
    [VENDEDOR_ID_FIELD]: id_vendedor,
    [VENDEDOR_CODE_FIELD]: codigo_vendedor,
    [TRANSPORTE_ID_FIELD]: id_transporte,
    [TRANSPORTE_CODE_FIELD]: codigo_transporte,
    FECHA_INGRESO,
    HORA_INGRESO,
    FECHA_PEDI,
    FECHA_ENTR,
    LEYENDA_4,
    LEYENDA_5,
    TOTAL_PEDI,
    PORC_DESC,
    USUARIO_INGRESO: descripcion,
    ESTADO
  } = m;
  if (!isAnInteger(id_cliente))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "pedidoModelMapper -> id_cliente");
  if (!isNotEmptyStr(codigo_cliente))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "pedidoModelMapper -> codigo_cliente");
  if (!isAnInteger(id_vendedor))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "pedidoModelMapper -> id_vendedor");
  if (!isNotEmptyStr(codigo_vendedor))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "pedidoModelMapper -> codigo_vendedor");
  if (!isAnInteger(id_transporte))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "pedidoModelMapper -> id_transporte");
  if (!isNotEmptyStr(codigo_transporte))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "pedidoModelMapper -> codigo_transporte");
  if (!(FECHA_PEDI instanceof Date))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "pedidoModelMapper -> FECHA_PEDI");
  if (!(FECHA_ENTR === null || FECHA_ENTR instanceof Date))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "pedidoModelMapper -> FECHA_ENTR");
  if (!(FECHA_INGRESO === null || FECHA_INGRESO instanceof Date))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "pedidoModelMapper -> FECHA_INGRESO");
  const [hour, min, sec] = _getHMS(HORA_INGRESO);
  if (!isAnInteger(hour) || !isAnInteger(min) || !isAnInteger(sec))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "pedidoModelMapper -> HORA_INGRESO");
  try {
    if (FECHA_INGRESO instanceof Date)
      FECHA_INGRESO.setHours(hour, min, sec);
  } catch (_2) {
  }
  return {
    id: idPedido,
    numero_pedido,
    estado: numberToEstadoPedido(ESTADO),
    id_cliente,
    codigo_cliente,
    id_vendedor,
    codigo_vendedor,
    id_transporte,
    codigo_transporte,
    fecha_ingreso: FECHA_INGRESO,
    fecha_alta: FECHA_PEDI,
    fecha_entrega: FECHA_ENTR,
    descripcion: descripcion ?? "",
    comentarios: (LEYENDA_4 ?? "") + (LEYENDA_5 ?? ""),
    total: TOTAL_PEDI ?? 0,
    descuento: PORC_DESC ?? 0
  };
};
function _getHMS(hms) {
  if (!isStr(hms))
    return [0, 0, 0];
  hms = hms.trim();
  if (hms.length != 6)
    return [0, 0, 0];
  const hStr = hms.substring(0, 2);
  const mStr = hms.substring(2, 4);
  const sStr = hms.substring(4, 6);
  return [
    Number.parseInt(hStr),
    Number.parseInt(mStr),
    Number.parseInt(sStr)
  ];
}
const extendedPedidoModelMapper = (m) => {
  const {
    [TALONARIO_ID2_FIELD]: id_talonario,
    [TALONARIO_CODE_FIELD]: codigo_talonario,
    [CONDICION_ID_FIELD]: id_condicion,
    [CONDICION_CODE_FIELD]: codigo_condicion,
    [LISTA_ID_FIELD]: id_lista,
    [LISTA_CODE2_FIELD]: codigo_lista,
    [ASIENTO_CODE_FIELD]: codigo_asiento,
    [DEPOSITO_CODE_FIELD]: codigo_deposito,
    COMP_STK: compromete_stock,
    ID_ASIENTO_MODELO_GV: id_asiento_modelo_gv
  } = m;
  if (!isAnInteger(id_talonario))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "extendedPedidoModelMapper -> id_talonario");
  if (!isAnInteger(codigo_talonario))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "extendedPedidoModelMapper -> codigo_talonario");
  if (!isAnInteger(id_condicion))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "extendedPedidoModelMapper -> id_vendedor");
  if (!isAnInteger(codigo_condicion))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "extendedPedidoModelMapper -> codigo_condicion");
  if (!isAnInteger(id_lista))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "extendedPedidoModelMapper -> id_lista");
  if (!isAnInteger(codigo_lista))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "extendedPedidoModelMapper -> codigo_lista");
  if (!isNotEmptyStr(codigo_asiento))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "extendedPedidoModelMapper -> codigo_asiento");
  if (!isNotEmptyStr(codigo_deposito))
    throw new DXTException(DXTErrorCode.TANGO_PEDIDO_DB_DATA_ERROR, "extendedPedidoModelMapper -> codigo_deposito");
  return {
    ...pedidoModelMapper(m),
    id_talonario,
    codigo_talonario,
    id_condicion,
    codigo_condicion,
    id_lista,
    codigo_lista,
    codigo_asiento,
    codigo_deposito,
    compromete_stock: compromete_stock === true,
    id_asiento_modelo_gv
  };
};
const pedidoAndRelationsModelMapper = (m) => {
  const r = pedidoModelMapper(m);
  const nombre_cliente = resolveScreenName(CLIENTE_NAME_COLUMNS, m);
  const nombre_vendedor = r.codigo_vendedor != null ? resolveScreenName(VENDEDOR_NAME_COLUMNS, m) : void 0;
  const nombre_transporte = r.codigo_transporte != null ? resolveScreenName(TRANSPORTE_NAME_COLUMNS, m) : void 0;
  return {
    ...r,
    nombre_cliente,
    nombre_vendedor,
    nombre_transporte
  };
};
const tangoClienteModelMapper = (m) => {
  const { [CLIENTE_ID_FIELD]: id, [CLIENTE_CODE_FIELD]: code, HABILITADO: isEnabled, FECHA_INHA: fechaInhabilitacion, [VENDEDOR_ID_FIELD]: vendedor_id } = m;
  const screen_name = resolveScreenName(
    CLIENTE_NAME_COLUMNS,
    m,
    code
  );
  const vendorExists = vendedor_id != null;
  const habilitado = customerTrulyEnabled(isEnabled, vendorExists, fechaInhabilitacion);
  return {
    id,
    code,
    screen_name,
    habilitado
  };
};
const tangoExtendedClienteModelMapper = (m) => {
  const {
    [VENDEDOR_ID_FIELD]: idVendedor,
    [VENDEDOR_CODE_FIELD]: codigoVendedor,
    [TRANSPORTE_ID_FIELD]: idTransporte,
    [TRANSPORTE_CODE_FIELD]: codigoTransporte,
    [LISTA_ID_FIELD]: idLista,
    NRO_LISTA: codigoLista,
    [CONDICION_ID_FIELD]: idCondicion,
    [CONDICION_CODE_FIELD]: codigoCondicion,
    IVA_D,
    II_D,
    SOBRE_IVA,
    SOBRE_II,
    PORC_DESC
  } = m;
  if (!isAnInteger(idVendedor))
    throw new DXTException(DXTErrorCode.TANGO_CLIENTE_DB_DATA_ERROR, `tangoFullClienteModelMapper -> ${VENDEDOR_ID_FIELD}`);
  if (!isNotEmptyStr(codigoVendedor))
    throw new DXTException(DXTErrorCode.TANGO_CLIENTE_DB_DATA_ERROR, `tangoFullClienteModelMapper ${VENDEDOR_CODE_FIELD}`);
  if (!isAnInteger(idLista))
    throw new DXTException(DXTErrorCode.TANGO_CLIENTE_DB_DATA_ERROR, `tangoFullClienteModelMapper ${LISTA_ID_FIELD}`);
  if (!isAnInteger(codigoLista))
    throw new DXTException(DXTErrorCode.TANGO_CLIENTE_DB_DATA_ERROR, `tangoFullClienteModelMapper NRO_LISTA`);
  if (!isAnInteger(idCondicion))
    throw new DXTException(DXTErrorCode.TANGO_CLIENTE_DB_DATA_ERROR, `tangoFullClienteModelMapper ${CONDICION_ID_FIELD}`);
  if (!isAnInteger(codigoCondicion))
    throw new DXTException(DXTErrorCode.TANGO_CLIENTE_DB_DATA_ERROR, `tangoFullClienteModelMapper ${CONDICION_CODE_FIELD}`);
  return {
    ...tangoClienteModelMapper(m),
    idVendedor,
    codigoVendedor,
    idTransporte,
    codigoTransporte,
    idCondicion,
    codigoCondicion,
    idLista,
    codigoLista,
    discriminaIVA: _isYes(IVA_D),
    discriminaII: _isYes(II_D),
    aplicaSobreIVA: _isYes(SOBRE_IVA),
    aplicaSobreII: _isYes(SOBRE_II),
    bonificacion: isANumber(PORC_DESC) ? PORC_DESC : 0
  };
};
function _isYes(field) {
  if (!isStr(field))
    return false;
  return field.trim().toUpperCase() === "S";
}
class ClienteRepository extends TangoProvider {
  constructor() {
    super({
      mainTable: CLIENTE_TABLE,
      mainIdField: CLIENTE_ID_FIELD,
      columns: clienteModelColumns,
      sortField: "RAZON_SOCI"
    });
  }
  async customerBelongsToVendor(customerId, vendorId) {
    const cacheKey = `belongs_${vendorId}_${customerId}`;
    const cachedData = await this.cache.getMetadata(cacheKey);
    if (cachedData != null)
      return cachedData;
    const { mainTable, columns } = this.config;
    const k = await this.getCompany();
    const data = await k(mainTable).count({ count: "*" }).where({
      [VENDEDOR_ID_FIELD]: vendorId,
      [CLIENTE_ID_FIELD]: customerId
    });
    const customerBelongsToVendor = Array.isArray(data) && data.length > 0 && data[0].count === 1;
    await this.cache.setMetadata(cacheKey, customerBelongsToVendor);
    return customerBelongsToVendor;
  }
  async getAllByVendor(vendorId) {
    const cacheKey = `byVendor_${vendorId}`;
    const cachedData = await this.cache.getMetadata(cacheKey);
    if (cachedData != null)
      return cachedData;
    const { mainTable, columns } = this.config;
    const k = await this.getCompany();
    const data = await k(mainTable).select(...columns ?? "*").where({
      [VENDEDOR_ID_FIELD]: vendorId
    });
    const result = data.map((m) => this.toResult(m));
    await this.cache.setMetadata(cacheKey, result);
    return result;
  }
  async getExtendedById(customerId) {
    const cacheKey = `fullById_${customerId}`;
    const cachedData = await this.cache.getMetadata(cacheKey);
    if (cachedData != null)
      return cachedData;
    const { mainTable, mainIdField, columns } = this.config;
    const k = await this.getCompany();
    const data = await k(mainTable).first(...columns ?? "*").where(mainIdField, customerId);
    if (data == null)
      throw new DXTException(DXTErrorCode.DXT_CUSTOMER_NOT_FOUND);
    const result = this._toExtendedResult(data);
    await this.cache.setMetadata(cacheKey, result);
    return result;
  }
  toResult(m) {
    return tangoClienteModelMapper(m);
  }
  _toExtendedResult(m) {
    return tangoExtendedClienteModelMapper(m);
  }
}
const clienteRepository = new ClienteRepository();
const tangoVendedorModelMapper = (m) => {
  const { [VENDEDOR_ID_FIELD]: id, [VENDEDOR_CODE_FIELD]: code, INHABILITA } = m;
  let screen_name = resolveScreenName(
    VENDEDOR_NAME_COLUMNS,
    m,
    code
  );
  const habilitado = !(INHABILITA ?? false);
  return { id, screen_name, habilitado };
};
const vendedorRepository = createTangoRepository(
  VENDEDOR_TABLE,
  VENDEDOR_ID_FIELD,
  tangoVendedorModelMapper,
  vendedorModelColumns,
  [
    clienteRepository
  ]
);
const tangoTransporteModelMapper = (m) => {
  const { [TRANSPORTE_ID_FIELD]: id, [TRANSPORTE_CODE_FIELD]: code, NOMBRE_TRA } = m;
  return { id, code, name: NOMBRE_TRA ?? code };
};
const tangoDepositoModelMapper = (m) => {
  const { [DEPOSITO_ID_FIELD]: id, [DEPOSITO_CODE_FIELD]: code, NOMBRE_SUC } = m;
  return { id, code, name: NOMBRE_SUC ?? code };
};
const tangoCondicionModelMapper = (m) => {
  const { [CONDICION_ID_FIELD]: id, [CONDICION_CODE_FIELD]: code, DESC_COND } = m;
  return { id, code, name: DESC_COND ?? id.toString() };
};
const tangoAsientoModelMapper = (m) => {
  const { [ASIENTO_ID_FIELD]: id, [ASIENTO_CODE_FIELD]: tipo, CONC_ASI, COD_CUENTA: codigo_cuenta } = m;
  if (!isAnInteger(id))
    throw new DXTException(DXTErrorCode.TANGO_PERFIL_DB_DATA_ERROR, `tangoAsientoModelMapper -> ${ASIENTO_ID_FIELD}`);
  if (!isAnInteger(codigo_cuenta))
    throw new DXTException(DXTErrorCode.TANGO_PERFIL_DB_DATA_ERROR, `tangoAsientoModelMapper -> codigo_cuenta`);
  if (!isNotEmptyStr(tipo))
    throw new DXTException(DXTErrorCode.TANGO_PERFIL_DB_DATA_ERROR, `tangoAsientoModelMapper -> ${ASIENTO_CODE_FIELD}`);
  const name = CONC_ASI ?? id.toString();
  return { id, code: tipo, tipo, name, codigo_cuenta };
};
const tangoTalonarioModelMapper = (m) => {
  const { [TALONARIO_ID_FIELD]: id, [TALONARIO_CODE_FIELD]: code, DESCRIP, COMPROB, TIPO } = m;
  return {
    id,
    code,
    name: DESCRIP ?? code.toString(),
    comprobante: (COMPROB == null ? void 0 : COMPROB.trim().toUpperCase()) ?? "",
    tipo: (TIPO == null ? void 0 : TIPO.trim().toUpperCase()) ?? ""
  };
};
const tangoAlicuotaModelMapper = (m) => {
  const { [ALICUOTA_ID_FIELD]: id, [ALICUOTA_CODE_FIELD]: code, PORCENTAJE } = m;
  return { id, code, percentage: PORCENTAJE ?? 0 };
};
const tangoDireccionModelMapper = (m) => {
  const {
    [DIRECCION_ID_FIELD]: id,
    [DIRECCION_CODE_FIELD]: code,
    HABITUAL,
    HABILITADO,
    DIRECCION,
    LOCALIDAD,
    CODIGO_POSTAL,
    TELEFONO1,
    TELEFONO2
  } = m;
  return {
    id,
    code: id,
    name: code,
    habitual: HABITUAL === "S",
    habilitada: HABILITADO === "S",
    calle_numero: DIRECCION ?? "No especificada",
    localidad: LOCALIDAD ?? "",
    codigo_postal: CODIGO_POSTAL ?? "",
    telefono1: TELEFONO1 ?? "",
    telefono2: TELEFONO2 ?? ""
  };
};
const tangoPerfilModelMapper = (m) => {
  const {
    [PERFIL_CODE_FIELD]: code,
    [PERFIL_ID_FIELD]: id,
    COMP_STK,
    DESCRIPCIO,
    FECHA,
    DEPOSITO,
    TAL_FACTUR,
    TIPO_ASIEN,
    TRANSPORTE,
    COND_VENTA,
    EDITA_DIRECCION_ENTREGA,
    BONIFIC,
    BONIF_DEF,
    D_BONIFIC,
    D_TAL_FACT,
    D_TAL_PED,
    D_TAL_REMI,
    D_COND_VEN,
    D_LISTA_PR,
    D_TRANSPOR,
    D_DEPOSITO,
    D_TIPO_ASI,
    ID_ASIENTO_MODELO_GV
  } = m;
  const bonificacion = isStr(BONIF_DEF) && BONIF_DEF.trim().toUpperCase() == "O" ? Number.isFinite(D_BONIFIC) ? D_BONIFIC : 0 : void 0;
  const codigo_condicion_venta = isNotEmptyStr(D_COND_VEN) ? Number.parseInt(D_COND_VEN.trim()) : void 0;
  if (!isAnInteger(D_TAL_FACT))
    throw new DXTException(DXTErrorCode.TANGO_PERFIL_DB_DATA_ERROR, "tangoPerfilModelMapper -> D_TAL_FACT");
  if (!isAnInteger(D_TAL_PED))
    throw new DXTException(DXTErrorCode.TANGO_PERFIL_DB_DATA_ERROR, "tangoPerfilModelMapper -> D_TAL_PED");
  if (!isAnInteger(D_TAL_REMI))
    throw new DXTException(DXTErrorCode.TANGO_PERFIL_DB_DATA_ERROR, "tangoPerfilModelMapper -> D_TAL_REMI");
  if (!isAnInteger(codigo_condicion_venta))
    throw new DXTException(DXTErrorCode.TANGO_PERFIL_DB_DATA_ERROR, "tangoPerfilModelMapper -> codigoCondicionVenta");
  if (!isAnInteger(D_LISTA_PR))
    throw new DXTException(DXTErrorCode.TANGO_PERFIL_DB_DATA_ERROR, "tangoPerfilModelMapper -> D_LISTA_PR");
  if (!isNotEmptyStr(D_TRANSPOR))
    throw new DXTException(DXTErrorCode.TANGO_PERFIL_DB_DATA_ERROR, "tangoPerfilModelMapper -> D_TRANSPOR");
  if (!isNotEmptyStr(D_TIPO_ASI))
    throw new DXTException(DXTErrorCode.TANGO_PERFIL_DB_DATA_ERROR, "tangoPerfilModelMapper -> D_TIPO_ASI");
  if (!isAnInteger(ID_ASIENTO_MODELO_GV))
    throw new DXTException(DXTErrorCode.TANGO_PERFIL_DB_DATA_ERROR, "tangoPerfilModelMapper -> ID_ASIENTO_MODELO_GV");
  return {
    code,
    id,
    name: DESCRIPCIO,
    bonificacion,
    id_asiento_modelo_gv: ID_ASIENTO_MODELO_GV,
    compromete_stock: COMP_STK === true,
    codigo_talonario_factura: D_TAL_FACT,
    codigo_talonario_pedido: D_TAL_PED,
    codigo_talonario_remito: D_TAL_REMI,
    codigo_condicion_venta,
    codigo_lista_precio: D_LISTA_PR,
    codigo_transporte: D_TRANSPOR,
    codigo_deposito: D_DEPOSITO,
    codigo_asiento: D_TIPO_ASI,
    fecha_editable: _isEditable(FECHA),
    talonario_editable: _isEditable(TAL_FACTUR),
    asiento_editable: _isEditable(TIPO_ASIEN),
    transporte_editable: _isEditable(TRANSPORTE),
    condicion_editable: _isEditable(COND_VENTA),
    bonificacion_editable: _isEditable(BONIFIC),
    deposito_editable: _isEditable(DEPOSITO),
    direccion_editable: _isEditable(EDITA_DIRECCION_ENTREGA)
  };
};
function _isEditable(field) {
  if (!isStr(field))
    return false;
  return field.trim().toUpperCase() === "E";
}
const asientoRepository = createTangoRepository(ASIENTO_TABLE, ASIENTO_ID_FIELD, tangoAsientoModelMapper, asientoModelColumns);
const condicionRepository = createTangoRepository(CONDICION_TABLE, CONDICION_ID_FIELD, tangoCondicionModelMapper, condicionModelColumns);
const depositoRepository = createTangoRepository(DEPOSITO_TABLE, DEPOSITO_ID_FIELD, tangoDepositoModelMapper, depositoModelColumns);
const perfilRepository = createTangoRepository(PERFIL_TABLE, PERFIL_ID_FIELD, tangoPerfilModelMapper, perfilModelColumns);
const talonarioRepository = createTangoRepository(TALONARIO_TABLE, TALONARIO_ID_FIELD, tangoTalonarioModelMapper, talonarioModelColumns);
const transporteRepository = createTangoRepository(TRANSPORTE_TABLE, TRANSPORTE_ID_FIELD, tangoTransporteModelMapper, transporteModelColumns);
class AlicuotaRepository extends TangoProvider {
  constructor() {
    super({
      mainTable: ALICUOTA_TABLE,
      mainIdField: ALICUOTA_ID_FIELD,
      columns: alicuotaModelColumns
    });
  }
  async getAllPercentages() {
    const rows = await this.getAll();
    return new Map(rows.map((row) => [row.code, row.percentage]));
  }
  toResult(m) {
    return tangoAlicuotaModelMapper(m);
  }
}
const alicuotaRepository = new AlicuotaRepository();
class DireccionRepository extends TangoProvider {
  constructor() {
    super({
      mainTable: DIRECCION_TABLE,
      mainIdField: DIRECCION_ID_FIELD,
      columns: direccionModelColumns
    });
  }
  async getByCustomer(idCustomer) {
    return await this.getMany(CLIENTE_ID_FIELD, idCustomer);
  }
  toResult(m) {
    return tangoDireccionModelMapper(m);
  }
}
const direccionRepository = new DireccionRepository();
const TANGO_PARAMETROS_TABLE = "GVA16";
const TANGO_PARAMETROS_ID_FIELD = "ID_GVA16";
const tangoParametrosModelColumns = [
  TANGO_PARAMETROS_ID_FIELD,
  "PED_APR_CO",
  "PED_AUT_CO",
  "PED_FECHA",
  "PROX_NDOC"
];
const tangoParametrosModelMapper = (m) => {
  const { PED_AUT_CO, PROX_NDOC } = m;
  const idsPedidosAutomaticos = toBoolean(PED_AUT_CO, false);
  const proximoId = PROX_NDOC;
  if (proximoId == null || !Number.isFinite(proximoId))
    throw new DXTException(DXTErrorCode.TANGO_DB_INVALID_DATA, "tangoParametrosModelMapper -> PROX_NDOC");
  return {
    idsPedidosAutomaticos,
    proximoId
  };
};
class TangoRepository extends CompanyProvider {
  constructor() {
    super({
      mainTable: TANGO_PARAMETROS_TABLE,
      mainIdField: TANGO_PARAMETROS_ID_FIELD,
      columns: tangoParametrosModelColumns
    });
  }
  async getParametros() {
    return await this.getFirst();
  }
  async updateNextId(id, trx) {
    const { mainTable } = this.config;
    const k = trx ?? await this.getCompany();
    await k(mainTable).update({ PROX_NDOC: id });
  }
  toResult(m) {
    return tangoParametrosModelMapper(m);
  }
}
const tangoRepository = new TangoRepository();
class PedidoBaseRepository extends CompanyProvider {
  constructor(config2) {
    const { mainTable, rowsRepository } = config2;
    super({
      mainTable,
      mainIdField: PEDIDO_ID_FIELD,
      columns: pedidoModelColumns,
      dependencies: [
        clienteRepository,
        vendedorRepository,
        transporteRepository,
        rowsRepository
      ]
    });
    this._rowsRepository = rowsRepository;
  }
  _avoidInvalidsFilterWhereRaw() {
    const { mainTable } = this.config;
    return `${mainTable}.${PEDIDO_ID_FIELD} IS NOT NULL AND ${mainTable}.${PEDIDO_CODE_FIELD} IS NOT NULL AND ${mainTable}.${CLIENTE_ID_FIELD} IS NOT NULL AND ${mainTable}.${CLIENTE_CODE_FIELD} IS NOT NULL AND ${mainTable}.${VENDEDOR_ID_FIELD} IS NOT NULL AND ${mainTable}.${VENDEDOR_CODE_FIELD} IS NOT NULL AND ${mainTable}.${TRANSPORTE_ID_FIELD} IS NOT NULL AND ${mainTable}.${TRANSPORTE_CODE_FIELD} IS NOT NULL`;
  }
  _toExtendedResult(m) {
    return extendedPedidoModelMapper(m);
  }
  async getExtendedById(orderId) {
    const cacheKey = `fullById_${orderId}`;
    const cachedData = await this.cache.getMetadata(cacheKey);
    if (cachedData != null)
      return cachedData;
    const { mainTable, mainIdField, columns } = this.config;
    const k = await this.getCompany();
    const data = await k(mainTable).first(...extendedPedidoModelColumns).where(mainIdField, orderId);
    if (data == null)
      throw new DXTException(DXTErrorCode.NOT_FOUND);
    const result = this._toExtendedResult(data);
    await this.cache.setMetadata(cacheKey, result);
    return result;
  }
  _getUserRoleWhere(role, tangoUserId) {
    return getUserRoleWhere(role, tangoUserId);
  }
  async getAllByUser(user, options) {
    var _a2;
    const role = user.role.valueOf();
    const tangoUserId = (_a2 = user.tangoId) == null ? void 0 : _a2.valueOf();
    const cacheKey = this.getAllByUserCacheKey(role, tangoUserId, options);
    if (cacheKey != null) {
      const cachedData = await this.cache.getMetadata(cacheKey);
      if (cachedData)
        return cachedData;
    }
    const { mainTable, columns } = this.config;
    const k = await this.getCompany();
    const where = this._getUserRoleWhere(role, tangoUserId);
    let query = k(mainTable);
    if (where != null)
      query = query.where(
        `${mainTable}.${where.field}`,
        where.value
      );
    const mainColumns = (columns ?? ["*"]).map((c) => `${mainTable}.${c.toString()}`);
    const clienteNombreColumns = CLIENTE_NAME_COLUMNS.map((c) => `${CLIENTE_TABLE}.${c}`);
    const vendedorNombreColumns = VENDEDOR_NAME_COLUMNS.map((c) => `${VENDEDOR_TABLE}.${c}`);
    const transporteNombreColumns = TRANSPORTE_NAME_COLUMNS.map((c) => `${TRANSPORTE_TABLE}.${c}`);
    const data = await query.andWhereRaw(this._avoidInvalidsFilterWhereRaw()).select(...mainColumns, ...clienteNombreColumns, ...vendedorNombreColumns, ...transporteNombreColumns).leftOuterJoin(CLIENTE_TABLE, `${mainTable}.${CLIENTE_ID_FIELD}`, `${CLIENTE_TABLE}.${CLIENTE_ID_FIELD}`).leftOuterJoin(VENDEDOR_TABLE, `${mainTable}.${VENDEDOR_ID_FIELD}`, `${VENDEDOR_TABLE}.${VENDEDOR_ID_FIELD}`).leftOuterJoin(TRANSPORTE_TABLE, `${mainTable}.${TRANSPORTE_ID_FIELD}`, `${TRANSPORTE_TABLE}.${TRANSPORTE_ID_FIELD}`);
    if (data == null)
      throw new DXTException(DXTErrorCode.NOT_FOUND);
    const result = data.map((p) => this.toResultWithRelations(p));
    if (cacheKey != null)
      await this.cache.setMetadata(cacheKey, result);
    return result;
  }
  async deleteById(orderId) {
    const k = await this.getCompany();
    const { mainTable: orderTable, mainIdField: orderIdField } = this.config;
    const result = await k.transaction(async (trx) => {
      const { mainTable: rowsTable, mainIdField: rowIdField } = this._rowsRepository.config;
      await trx(rowsTable).where(orderIdField, orderId).del();
      const result2 = await trx(orderTable).where(orderIdField, orderId).del();
      return result2;
    });
    if (result <= 0)
      throw new DXTException(DXTErrorCode.NOT_FOUND);
  }
  composeUpsertRecord(customer, orderAndRows) {
    const {
      idLista,
      codigoLista
    } = customer;
    const {
      estado,
      idTransporte,
      codigoTransporte,
      idDeposito,
      codigoDeposito,
      idCondicion,
      codigoCondicion,
      idAsiento,
      codigoAsiento,
      idTalonario,
      codigoTalonario,
      idDireccionDeEntrega,
      idAsientoModeloGV,
      bonificacion,
      comentarios,
      comprometeStock,
      total
    } = orderAndRows;
    const comentariosLinea1 = comentarios.substring(0, LEYENDA_FIELD_LENGTH);
    const comentariosLinea2 = comentarios.substring(LEYENDA_FIELD_LENGTH, LEYENDA_FIELD_LENGTH * 2);
    const result = {
      [CLIENTE_ID_FIELD]: customer.id,
      [CLIENTE_CODE_FIELD]: customer.code,
      [VENDEDOR_ID_FIELD]: customer.idVendedor,
      [VENDEDOR_CODE_FIELD]: customer.codigoVendedor,
      [CONDICION_ID_FIELD]: idCondicion,
      [CONDICION_CODE_FIELD]: codigoCondicion,
      [LISTA_ID_FIELD]: idLista,
      [LISTA_CODE2_FIELD]: codigoLista,
      [TRANSPORTE_ID_FIELD]: idTransporte,
      [TRANSPORTE_CODE_FIELD]: codigoTransporte,
      [TALONARIO_ID2_FIELD]: idTalonario,
      [TALONARIO_CODE_FIELD]: codigoTalonario,
      [DEPOSITO_CODE_FIELD]: codigoDeposito,
      [ASIENTO_CODE_FIELD]: codigoAsiento,
      [DIRECCION_ID_FIELD]: idDireccionDeEntrega,
      PORC_DESC: bonificacion,
      COMP_STK: comprometeStock,
      LEYENDA_4: comentariosLinea1,
      LEYENDA_5: comentariosLinea2,
      TOTAL_PEDI: total,
      ESTADO: estado,
      ID_ASIENTO_MODELO_GV: idAsientoModeloGV,
      N_REMITO: "",
      APRUEBA: "",
      EXPORTADO: false,
      ID_EXTERNO: "",
      NRO_O_COMP: "",
      NRO_SUCURS: 0,
      ORIGEN: "T",
      REVISO_FAC: "0",
      REVISO_STK: "0"
    };
    return result;
  }
  composeInsertRecord(customer, params) {
    const result = this.composeUpsertRecord(
      customer,
      params
    );
    return result;
  }
  composeUpdateRecord(customer, params) {
    const result = this.composeUpsertRecord(
      customer,
      params
    );
    return result;
  }
  async create(customer, params) {
    const k = await this.getCompany();
    const { mainTable: orderTable } = this.config;
    const { rows } = params;
    const orderModel = this.composeInsertRecord(customer, params);
    const result = await k.transaction(async (trx) => {
      const newOrderCode = await this.getNewOrderCodeAndUpdate(trx);
      const newOrderCodeStr = await this.formatOrderCode(newOrderCode);
      await trx(orderTable).insert({
        ...orderModel,
        [PEDIDO_CODE_FIELD]: newOrderCodeStr
      });
      const newOrderId = await this.getOrderIdFromCode(newOrderCodeStr, trx);
      if (newOrderId == null)
        throw new DXTException(DXTErrorCode.UNEXPECTED_ERROR, "PedidoBaseRepository.create -> newOrderId not found");
      let rowIndex = 0;
      for (const row of rows) {
        rowIndex++;
        await this._rowsRepository.create(
          newOrderId,
          newOrderCodeStr,
          params,
          row,
          rowIndex,
          trx
        );
      }
      return {
        nuevo_pedido: true,
        id_pedido: newOrderId,
        numero_pedido: newOrderCodeStr
      };
    });
    return result;
  }
  async update(customer, params) {
    const k = await this.getCompany();
    const { mainTable: orderTable, mainIdField: orderIdField } = this.config;
    const { mainTable: rowsTable } = this._rowsRepository.config;
    const { rows, idPedido } = params;
    const orderModel = this.composeUpdateRecord(customer, params);
    const result = await k.transaction(
      async (trx) => {
        const changedRecords = await trx(orderTable).where(
          PEDIDO_ID_FIELD,
          idPedido
        ).update(orderModel);
        if (changedRecords != 1)
          throw new DXTException(DXTErrorCode.UNEXPECTED_ERROR, `PedidoBaseRepository.update -> Invalid count of changed records: ${changedRecords}`);
        const updatedOrder = await this.getByIdOrNull(params.idPedido);
        if (updatedOrder == null)
          throw new DXTException(DXTErrorCode.UNEXPECTED_ERROR, "PedidoBaseRepository.create -> Updated record not found");
        await trx(rowsTable).where(orderIdField, updatedOrder.id).del();
        let rowIndex = 0;
        for (const row of rows) {
          rowIndex++;
          await this._rowsRepository.create(
            updatedOrder.id,
            updatedOrder.numero_pedido,
            params,
            row,
            rowIndex,
            trx
          );
        }
        return {
          nuevo_pedido: false,
          id_pedido: updatedOrder.id,
          numero_pedido: updatedOrder.numero_pedido
        };
      }
    );
    return result;
  }
  toResult(m) {
    return pedidoModelMapper(m);
  }
  toResultWithRelations(m) {
    return pedidoAndRelationsModelMapper(m);
  }
  async getOrderIdFromCode(orderCode, trx) {
    const k = trx ?? await this.getCompany();
    const result = await k(this.config.mainTable).first(PEDIDO_ID_FIELD).where(PEDIDO_CODE_FIELD, orderCode);
    return (result == null ? void 0 : result[PEDIDO_ID_FIELD]) ?? null;
  }
  async getOrderCodeFromId(orderId, trx) {
    const k = trx ?? await this.getCompany();
    const result = await k(this.config.mainTable).first(PEDIDO_CODE_FIELD).where(PEDIDO_ID_FIELD, orderId);
    return (result == null ? void 0 : result[PEDIDO_CODE_FIELD]) ?? null;
  }
  async getBiggerOrderCode(trx) {
    var _a2;
    const { mainTable } = this.config;
    const k = trx ?? await this.getCompany();
    const result = await k(mainTable).first(PEDIDO_CODE_FIELD).orderBy(PEDIDO_CODE_FIELD, "desc");
    const orderCode = (_a2 = result == null ? void 0 : result[PEDIDO_CODE_FIELD]) == null ? void 0 : _a2.trim();
    const orderCodeNumber = Number.parseInt(orderCode);
    return isAnInteger(orderCodeNumber) && orderCodeNumber > 0 ? orderCodeNumber : 1;
  }
  async formatOrderCode(orderCode) {
    return await dictionaryRepository.formatNumeroPedido(orderCode);
  }
  async getNewOrderCodeAndUpdate(trx) {
    const { idsPedidosAutomaticos, proximoId } = await tangoRepository.getParametros();
    let newOrderCode;
    if (idsPedidosAutomaticos) {
      newOrderCode = proximoId;
    } else {
      newOrderCode = await this.getBiggerOrderCode(trx);
    }
    newOrderCode = await this.getNextFreeOrderCode(newOrderCode, trx);
    await this._updateNextOrderCode(newOrderCode, trx);
    return newOrderCode;
  }
  async _updateNextOrderCode(newOrderCode, trx) {
    const { idsPedidosAutomaticos } = await tangoRepository.getParametros();
    if (idsPedidosAutomaticos) {
      await tangoRepository.updateNextId(newOrderCode, trx);
    }
  }
  async getNextFreeOrderCode(initialOrderCode, trx) {
    const { min, max } = await dictionaryRepository.getNumeroPedidoRange();
    let newId = initialOrderCode;
    while (await this.getOrderIdFromCode(await this.formatOrderCode(newId), trx) != null) {
      newId++;
      if (newId >= max)
        newId = min;
    }
    return newId;
  }
}
const renglonPedidoModelMapper = (m) => {
  const {
    [ARTICULO_ID_FIELD]: id_articulo,
    [ARTICULO_CODE_FIELD]: codigo_articulo,
    PRECIO,
    CANT_PEDID,
    N_RENGLON,
    CANT_A_DES: a_descontar,
    CANT_PEN_D: pendiente_descontar,
    CANT_A_FAC: a_facturar,
    CANT_PEN_F: pendiente_facturar
  } = m;
  const precio = PRECIO ?? 0;
  const cantidad = CANT_PEDID ?? 0;
  const subtotal = precio * cantidad;
  if (!isNotEmptyStr(codigo_articulo))
    throw new DXTException(DXTErrorCode.TANGO_CLIENTE_DB_DATA_ERROR, `renglonPedidoModelMapper ${ARTICULO_CODE_FIELD}`);
  return {
    id_articulo,
    codigo_articulo,
    renglon: N_RENGLON ?? 0,
    precio,
    cantidad,
    subtotal,
    a_descontar,
    pendiente_descontar,
    a_facturar,
    pendiente_facturar
  };
};
const renglonPedidoAndRelationsModelMapper = (m) => {
  const r = renglonPedidoModelMapper(m);
  const { [ARTICULO_CODE_FIELD]: codigoArticulo, DESCRIPCIO, DESC_ADIC: descripcion_adicional } = m;
  const nombre_articulo = DESCRIPCIO ?? (codigoArticulo == null ? NONEXISTENT_PRODUCT : NO_NAME);
  return {
    ...r,
    nombre_articulo,
    descripcion_adicional
  };
};
function tangoArticuloModelMapper(m) {
  const { [ARTICULO_ID_FIELD]: id, [ARTICULO_CODE_FIELD]: codigo, DESCRIPCIO, DESC_ADIC } = m;
  return {
    id,
    codigo,
    nombre: DESCRIPCIO ?? codigo,
    descripcion_adicional: DESC_ADIC
  };
}
function tangoFullArticleModelMapper(m, alternateListId, alternateDiscount) {
  const {
    PRECIO,
    [LISTA_ID_FIELD]: idLista,
    COD_II,
    COD_IVA,
    COD_S_II,
    COD_S_IVA,
    ID_MEDIDA_STOCK,
    ID_MEDIDA_STOCK_2,
    ID_MEDIDA_VENTAS
  } = m;
  const discount = alternateListId != null && idLista === alternateListId ? alternateDiscount : null;
  return {
    ...tangoArticuloModelMapper(m),
    id_lista: idLista,
    precio: PRECIO,
    bonificacion: discount ?? void 0,
    codigo_iva: COD_IVA,
    codigo_sobre_iva: COD_S_IVA,
    codigo_ii: COD_II,
    codigo_sobre_ii: COD_S_II,
    id_medida_stock: ID_MEDIDA_STOCK ?? null,
    id_medida_stock_2: ID_MEDIDA_STOCK_2 ?? null,
    id_medida_ventas: ID_MEDIDA_VENTAS ?? null
  };
}
function tangoFullArticleOrGroupNameModelMapper(m, alternateListId, alternateDiscount) {
  const { DXTO_CODIGO_ARTICULO, [ARTICULO_CODE_FIELD]: codigoArticulo } = m;
  const isGroupLabel = DXTO_CODIGO_ARTICULO != null && DXTO_CODIGO_ARTICULO !== codigoArticulo;
  if (isGroupLabel)
    return DXTO_CODIGO_ARTICULO.trim();
  return tangoFullArticleModelMapper(
    m,
    alternateListId,
    alternateDiscount
  );
}
function tangoListaModelMapper(m) {
  const {
    [LISTA_ID_FIELD]: id,
    [LISTA_CODE_FIELD]: codigo,
    NOMBRE_LIS,
    INCLUY_IMP,
    INCLUY_IVA,
    HABILITADA
  } = m;
  const nombre = NOMBRE_LIS ?? codigo.toString();
  const incluye_ii = toBoolean(INCLUY_IMP, false);
  const incluye_iva = toBoolean(INCLUY_IVA, false);
  const habilitada = toBoolean(HABILITADA, false);
  return {
    id,
    codigo,
    nombre,
    incluye_ii,
    incluye_iva,
    habilitada
  };
}
function tangoPrecioModelMapper(m) {
  const {
    [ARTICULO_CODE_FIELD]: codigoArticulo,
    PRECIO
  } = m;
  const precio = PRECIO ?? 0;
  return {
    codigoArticulo,
    precio
  };
}
class ArticuloRepository extends TangoProvider {
  constructor() {
    super({
      mainTable: ARTICULO_TABLE,
      mainIdField: ARTICULO_ID_FIELD,
      columns: articuloModelColumns
    });
  }
  toResult(m) {
    return tangoArticuloModelMapper(m);
  }
  async getArticlesWithTaxes(listId, alternateListId, alternateDiscount) {
    const { mainTable } = this.config;
    const k = await this.getCompany();
    const fullArticuloCodeField = `${ARTICULO_TABLE}.${ARTICULO_CODE_FIELD}`;
    const fullPrecioListaIdField = `${PRECIO_TABLE}.${LISTA_ID_FIELD}`;
    const otherListId = alternateListId ?? listId;
    const articuloColumns = articuloModelColumns.map((c) => `${ARTICULO_TABLE}.${c} as ${c}`);
    const precioColumns = ["PRECIO", LISTA_ID_FIELD].map((c) => `${PRECIO_TABLE}.${c} as ${c}`);
    let query = k(mainTable).select(...articuloColumns, ...precioColumns).leftOuterJoin(PRECIO_TABLE, fullArticuloCodeField, `${PRECIO_TABLE}.${ARTICULO_CODE_FIELD}`);
    const result = await query.where(
      k.raw(
        `${fullPrecioListaIdField} = ? OR ${fullPrecioListaIdField} = ?`,
        [listId, otherListId]
      )
    ).orderBy(fullArticuloCodeField);
    return result.map((item) => tangoFullArticleModelMapper(
      item,
      alternateListId,
      alternateDiscount
    ));
  }
}
const articuloRepository = new ArticuloRepository();
const listaRepository = createTangoRepository(LISTA_TABLE, LISTA_ID_FIELD, tangoListaModelMapper, listaModelColumns);
const precioRepository = createTangoRepository(PRECIO_TABLE, PRECIO_ID_FIELD, tangoPrecioModelMapper, precioModelColumns, [listaRepository, articuloRepository]);
class RenglonPedidoBaseRepository extends CompanyProvider {
  constructor(config2) {
    const { mainTable, pedidoTable } = config2;
    super({
      mainTable,
      mainIdField: RENGLON_PEDIDO_ID_FIELD,
      columns: renglonPedidoModelColumns,
      dependencies: [
        articuloRepository,
        pedidoTable
      ]
    });
    this._pedidoTable = pedidoTable;
    const filteredColumns = renglonPedidoModelColumns.filter((c) => c != PEDIDO_ID_FIELD) ?? [];
    this.mainColumns = filteredColumns.map((c) => `${mainTable}.${c.toString()}`);
    this.pedidoColumns = [`${pedidoTable}.${PEDIDO_ID_FIELD}`];
    this.articuloColumns = ARTICULO_NAME_COLUMNS.map((c) => `${ARTICULO_TABLE}.${c}`);
  }
  async _getByWhere(whereColumn, whereValue) {
    const cacheKey = `byWhere_${whereColumn ?? "x"}_${whereValue ?? "x"}`;
    const resultFromCache = await this.cache.getMetadata(cacheKey);
    if (resultFromCache != null)
      return resultFromCache;
    const { mainTable } = this.config;
    const pedidoTable = this._pedidoTable;
    const k = await this.getCompany();
    let query = k(mainTable);
    if (whereColumn != null)
      query = query.where(whereColumn, whereValue);
    const allColumns = [
      ...this.mainColumns,
      ...this.articuloColumns,
      ...this.pedidoColumns
    ];
    const rawData = await query.select(allColumns).leftOuterJoin(ARTICULO_TABLE, `${mainTable}.${ARTICULO_ID_FIELD}`, `${ARTICULO_TABLE}.${ARTICULO_ID_FIELD}`).innerJoin(pedidoTable, `${mainTable}.${PEDIDO_CODE_FIELD}`, `${pedidoTable}.${PEDIDO_CODE_FIELD}`).orderBy(PEDIDO_ID_FIELD);
    if (rawData == null)
      throw new DXTException(DXTErrorCode.NOT_FOUND);
    const data = rawData.map((renglonPedido) => this.toRenglonPedidoWithIdPedido(renglonPedido));
    let result = {};
    let sliceBegin = 0;
    let idPedidoPrev = void 0;
    data.forEach((renglon, index) => {
      if (idPedidoPrev != null && idPedidoPrev != renglon.id_pedido) {
        const sliceEnd = index;
        result[idPedidoPrev] = data.slice(sliceBegin, sliceEnd);
        sliceBegin = sliceEnd;
      }
      idPedidoPrev = renglon.id_pedido;
    });
    if (idPedidoPrev != null) {
      result[idPedidoPrev] = data.slice(sliceBegin, data.length);
    }
    await this.cache.setMetadata(cacheKey, result);
    return result;
  }
  async getByIdPedido(idPedido) {
    const { mainTable } = this.config;
    const data = await this._getByWhere(`${mainTable}.${PEDIDO_ID_FIELD}`, idPedido);
    return data[idPedido] ?? [];
  }
  async getByNumeroPedido(numeroPedido) {
    const { mainTable } = this.config;
    const data = await this._getByWhere(`${mainTable}.${PEDIDO_CODE_FIELD}`, numeroPedido);
    return Object.values(data)[0] ?? [];
  }
  async getAllByUser(user, options) {
    var _a2;
    const role = user.role.valueOf();
    const tangoUserId = (_a2 = user.tangoId) == null ? void 0 : _a2.valueOf();
    const where = getUserRoleWhere(role, tangoUserId);
    return await this._getByWhere(where == null ? void 0 : where.field, where == null ? void 0 : where.value);
  }
  toResult(m) {
    return renglonPedidoModelMapper(m);
  }
  toRenglonPedidoWithIdPedido(m) {
    const id_pedido = m[PEDIDO_ID_FIELD];
    if (id_pedido == null)
      throw new DXTException(DXTErrorCode.TANGO_DB_INVALID_DATA, `RenglonPedidoRepository.toRenglonWithIdPedido -> ${PEDIDO_ID_FIELD}`);
    return {
      ...renglonPedidoAndRelationsModelMapper(m),
      id_pedido
    };
  }
  toResultAndRelations(m) {
    return renglonPedidoAndRelationsModelMapper(m);
  }
  async create(idPedido, numeroPedido, order, row, rowIndex, trx) {
    const model = this.composeInsertRecord(
      idPedido,
      numeroPedido,
      order,
      row,
      rowIndex
    );
    const { mainTable } = this.config;
    const k = trx ?? await this.getCompany();
    try {
      await k(mainTable).insert(model);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  composeInsertRecord(idPedido, numeroPedido, order, row, rowIndex) {
    const {
      idTalonario,
      codigoTalonario
    } = order;
    const {
      idArticle,
      codeArticle,
      quantity,
      price,
      discount,
      idMedidaStock,
      idMedidaStock2,
      idMedidaVentas,
      unidadMedidaSeleccionada
    } = row;
    const result = {
      [PEDIDO_CODE_FIELD]: numeroPedido,
      [PEDIDO_ID_FIELD]: idPedido,
      N_RENGLON: rowIndex,
      [ARTICULO_CODE_FIELD]: codeArticle,
      [ARTICULO_ID_FIELD]: idArticle,
      [TALONARIO_ID2_FIELD]: idTalonario,
      PRECIO: price ?? 0,
      DESCUENTO: discount ?? 0,
      CANT_A_DES: quantity,
      CANT_A_FAC: quantity,
      CANT_PEDID: quantity,
      CANT_PEN_D: quantity,
      CANT_PEN_F: quantity,
      CAN_EQUI_V: quantity,
      ID_MEDIDA_STOCK: idMedidaStock,
      ID_MEDIDA_STOCK_2: idMedidaStock2,
      ID_MEDIDA_VENTAS: idMedidaVentas,
      UNIDAD_MEDIDA_SELECCIONADA: unidadMedidaSeleccionada
    };
    return result;
  }
}
class RenglonPedidoRepository extends RenglonPedidoBaseRepository {
  constructor() {
    super({
      mainTable: RENGLON_PEDIDO_TABLE,
      pedidoTable: PEDIDO_TABLE
    });
  }
}
const renglonPedidoRepository = new RenglonPedidoRepository();
class PedidoRepository extends PedidoBaseRepository {
  constructor() {
    super({
      mainTable: PEDIDO_TABLE,
      rowsRepository: renglonPedidoRepository
    });
  }
  getRowsRepository() {
    return renglonPedidoRepository;
  }
  async cancel(id) {
    const k = await this.getCompany();
    const { mainTable, mainIdField, columns } = this.config;
    await k(mainTable).where(mainIdField, id).update({
      ESTADO: EstadoPedido.ANULADO
    });
    await this.cache.invalidateById(id);
  }
  composeUpsertRecord(customer, params) {
    const parentResult = super.composeUpsertRecord(customer, params);
    const {
      fechaPedido,
      fechaEntrega
    } = params;
    return {
      ...parentResult,
      FECHA_PEDI: fechaPedido,
      FECHA_ENTR: fechaEntrega
    };
  }
  composeInsertRecord(customer, params) {
    const parentResult = this.composeUpsertRecord(
      customer,
      params
    );
    const {
      fechaIngreso
    } = params;
    const horaIngreso = getDateHHMMSS(fechaIngreso);
    return {
      ...parentResult,
      FECHA_INGRESO: fechaIngreso,
      HORA_INGRESO: horaIngreso,
      HORA: horaIngreso
    };
  }
  composeUpdateRecord(customer, params) {
    const parentResult = this.composeUpsertRecord(
      customer,
      params
    );
    return {
      ...parentResult
    };
  }
}
const pedidoRepository = new PedidoRepository();
async function checkUserIsOwnerOrThrow(user, orderHeader, adminAllowed) {
  const { role } = user;
  if (role.isAdmin()) {
    if (!adminAllowed)
      throw new DXTException(DXTErrorCode.CUSTOMER_OR_VENDOR_ROLE_REQUIRED);
    return;
  }
  if (role.isVendor()) {
    const idVendedor = user.tangoId.valueOf();
    const isVendorCustomer = await clienteRepository.customerBelongsToVendor(
      orderHeader.id_cliente,
      idVendedor
    );
    if (!isVendorCustomer)
      throw new DXTException(DXTErrorCode.ORDER_CUSTOMER_DOES_NOT_BELONGS_TO_VENDOR);
    return;
  }
  const idCliente = user.tangoId.valueOf();
  if (orderHeader.id_cliente !== idCliente)
    throw new DXTException(DXTErrorCode.ORDER_DOES_NOT_BELONGS_TO_CUSTOMER);
}
class DXTPedidoDraftRowRepository extends RenglonPedidoBaseRepository {
  constructor(config2) {
    super(config2);
  }
}
class DXTPedidoDraftRowClientesRepository extends DXTPedidoDraftRowRepository {
  constructor() {
    super({
      mainTable: DXT_PEDIDO_DRAFT_ROW_CLIENTES_TABLE,
      pedidoTable: DXT_PEDIDO_DRAFT_CLIENTES_TABLE
    });
  }
}
const dxtPedidoDraftRowClientesRepository = new DXTPedidoDraftRowClientesRepository();
class DXTPedidoDraftRowVendedoresRepository extends DXTPedidoDraftRowRepository {
  constructor() {
    super({
      mainTable: DXT_PEDIDO_DRAFT_ROW_VENDEDORES_TABLE,
      pedidoTable: DXT_PEDIDO_DRAFT_VENDEDORES_TABLE
    });
  }
}
const dxtPedidoDraftRowVendedoresRepository = new DXTPedidoDraftRowVendedoresRepository();
class DXTPedidoDraftRepository extends PedidoBaseRepository {
  // constructor(config: PedidoBaseRepositoryConfig) {
  //   super(config);
  // }
  async descriptionExists(user, description, draftIdToIgnore) {
    var _a2;
    if (user.isAdmin())
      throw new DXTException(DXTErrorCode.CUSTOMER_OR_VENDOR_ROLE_REQUIRED);
    const isCustomer = user.isCustomer();
    const column = isCustomer ? CLIENTE_ID_FIELD : VENDEDOR_ID_FIELD;
    const tangoId = (_a2 = user.tangoId) == null ? void 0 : _a2.valueOf();
    if (tangoId == null)
      throw new DXTException(isCustomer ? DXTErrorCode.TANGO_CUSTOMER_NO_LONGER_EXISTS : DXTErrorCode.TANGO_VENDOR_NO_LONGER_EXISTS);
    const data = await this.getOneOrNull(column, tangoId, {
      where: {
        field: "USUARIO_INGRESO",
        value: description
      }
    });
    if (draftIdToIgnore != null && (data == null ? void 0 : data.id) === draftIdToIgnore)
      return false;
    return data != null;
  }
  composeUpsertRecord(customer, params) {
    const parentResult = super.composeUpsertRecord(customer, params);
    const {
      descripcion
    } = params;
    return {
      ...parentResult,
      USUARIO_INGRESO: descripcion
    };
  }
  composeInsertRecord(customer, params) {
    const parentResult = this.composeUpsertRecord(
      customer,
      params
    );
    return {
      ...parentResult
    };
  }
  composeUpdateRecord(customer, params) {
    const parentResult = this.composeUpsertRecord(
      customer,
      params
    );
    return {
      ...parentResult
    };
  }
  async getNewOrderCodeAndUpdate() {
    return await this.getNextFreeOrderCode(await this.getBiggerOrderCode());
  }
}
class DXTPedidoDraftClientesRepository extends DXTPedidoDraftRepository {
  constructor() {
    super({
      mainTable: DXT_PEDIDO_DRAFT_CLIENTES_TABLE,
      rowsRepository: dxtPedidoDraftRowClientesRepository
    });
  }
}
const dxtPedidoDraftClientesRepository = new DXTPedidoDraftClientesRepository();
class DXTPedidoDraftVendedoresRepository extends DXTPedidoDraftRepository {
  constructor() {
    super({
      mainTable: DXT_PEDIDO_DRAFT_VENDEDORES_TABLE,
      rowsRepository: dxtPedidoDraftRowVendedoresRepository
    });
  }
}
const dxtPedidoDraftVendedoresRepository = new DXTPedidoDraftVendedoresRepository();
function getDraftRepository(user) {
  return _isCustomer(user) ? dxtPedidoDraftClientesRepository : dxtPedidoDraftVendedoresRepository;
}
function getDraftRowRepository(user) {
  return _isCustomer(user) ? dxtPedidoDraftRowClientesRepository : dxtPedidoDraftRowVendedoresRepository;
}
function _isCustomer(user) {
  const role = user.role.valueOf();
  if (role == UserRole.admin)
    throw new DXTException(DXTErrorCode.CUSTOMER_OR_VENDOR_ROLE_REQUIRED);
  return role == UserRole.customer;
}
async function getOrderWithRows(idPedido, user, isDraft, adminAllowed, ignoreRows) {
  const dxtPedidoDraftRepository = getDraftRepository(user);
  const dxtPedidoDraftRowRepository = getDraftRowRepository(user);
  const header = isDraft ? await dxtPedidoDraftRepository.getExtendedById(idPedido) : await pedidoRepository.getExtendedById(idPedido);
  const rows = ignoreRows ? null : isDraft ? await dxtPedidoDraftRowRepository.getByIdPedido(idPedido) : await renglonPedidoRepository.getByIdPedido(idPedido);
  const rowsOk = rows != null || ignoreRows;
  if (header == null || !rowsOk)
    throw new DXTException(isDraft ? DXTErrorCode.DRAFT_NOT_FOUND : DXTErrorCode.ORDER_NOT_FOUND);
  const { estado, ...remaining } = header;
  const finalHeader = {
    ...remaining,
    estado: realOrderStatus(header, rows)
  };
  await checkUserIsOwnerOrThrow(
    user,
    finalHeader,
    adminAllowed
  );
  if (rows == null) {
    return {
      isDraft,
      header: finalHeader
    };
  }
  return {
    isDraft,
    header: finalHeader,
    rows
  };
}
const ARTICLE_GROUP_NO_NAME = "_";
function _getDXTArticuloListParam(s) {
  const chunks = s.split("=", 2);
  if (chunks.length != 2)
    return null;
  const key = chunks[0].trim().toLowerCase();
  const value = chunks[1].trim();
  if (key.length == 0)
    return null;
  return { key, value };
}
function strToDXTArticuloListRecord(s) {
  if (!isStr(s))
    return null;
  let p = s.indexOf(";");
  if (p <= 0)
    p = s.length;
  const codigo_articulo = s.substring(0, p).trimEnd();
  if (codigo_articulo.length == 0)
    return null;
  const params = s.substring(p + 1).trim();
  if (codigo_articulo == ARTICLE_GROUP_NO_NAME)
    throw new DXTException(DXTErrorCode.RESERVED_ARTICLE_GROUP_NAME, `"${ARTICLE_GROUP_NO_NAME}"`);
  if (params.length == 0)
    return { codigo_articulo };
  return {
    codigo_articulo,
    params
  };
}
function strToDXTArticuloListParams(paramsStr) {
  if (paramsStr == null)
    return void 0;
  const result = {};
  let emptyParams = true;
  const chunks = paramsStr.split(";");
  chunks.forEach((s, i) => {
    const paramEntry = _getDXTArticuloListParam(s);
    if (paramEntry == null)
      return;
    const { key, value } = paramEntry;
    result[key] = value;
    emptyParams = false;
  });
  return emptyParams ? void 0 : result;
}
class DXTArticuloListRepository extends CompanyProvider {
  constructor(config2) {
    super({
      mainIdField: DXT_LIST_ARTICULO_CODE_FIELD,
      ...config2
    });
  }
  async getList() {
    const rows = await this.getAll();
    return rows.map((v) => {
      const line = v.codigo_articulo;
      if (v.params == null)
        return line;
      return `${line}; ${v.params}`;
    });
  }
  async setList(list) {
    this.cache.clear();
    const finalList = list.filter((e) => e.codigo_articulo.trim().length > 0);
    const { mainTable } = this.config;
    const k = await this.getCompany();
    await k.transaction(async (trx) => {
      await trx(mainTable).truncate();
      await trx.batchInsert(mainTable, finalList, 500);
    });
    emitBusEvent(
      new DBSettingsChangedEvent({
        passiveDBChanges: false,
        newDictionary: false,
        newCompany: false,
        resetCache: true
      })
    );
    return true;
  }
  toResult(m) {
    return m;
  }
}
class DXTArticuloEditListRepository extends DXTArticuloListRepository {
  constructor() {
    super({
      mainTable: DXT_ARTICULO_EDIT_LIST_TABLE,
      dependencies: [
        articuloRepository,
        precioRepository
      ]
    });
  }
  async getArticlesWithTaxes(listId, alternateListId, alternateDiscount) {
    const { mainTable } = this.config;
    const k = await this.getCompany();
    const fullDXTArticuloListCodeField = `${mainTable}.codigo_articulo`;
    const fullArticuloCodeField = `${ARTICULO_TABLE}.${ARTICULO_CODE_FIELD}`;
    const fullPrecioListaIdField = `${PRECIO_TABLE}.${LISTA_ID_FIELD}`;
    const mainColumns = [`${fullDXTArticuloListCodeField} as DXTO_CODIGO_ARTICULO`];
    const articuloColumns = articuloModelColumns.map((c) => `${ARTICULO_TABLE}.${c} as ${c}`);
    const precioColumns = ["PRECIO", LISTA_ID_FIELD].map((c) => `${PRECIO_TABLE}.${c} as ${c}`);
    let query = k(mainTable).select(...mainColumns, ...articuloColumns, ...precioColumns);
    query = query.leftOuterJoin(ARTICULO_TABLE, fullDXTArticuloListCodeField, fullArticuloCodeField).leftOuterJoin(PRECIO_TABLE, fullDXTArticuloListCodeField, `${PRECIO_TABLE}.${ARTICULO_CODE_FIELD}`);
    const otherListId = alternateListId ?? listId;
    const result = await query.where(
      k.raw(
        `${fullPrecioListaIdField} = ? OR ${fullPrecioListaIdField} = ? OR (${fullDXTArticuloListCodeField} IS NOT NULL AND ${fullPrecioListaIdField} IS NULL AND ${fullArticuloCodeField} IS NULL )`,
        [listId, otherListId]
      )
    ).orderBy(`${DXT_ARTICULO_EDIT_LIST_TABLE}.id`);
    return result.map((item) => tangoFullArticleOrGroupNameModelMapper(
      item,
      alternateListId,
      alternateDiscount
    ));
  }
}
const dxtArticuloEditListRepository = new DXTArticuloEditListRepository();
class DXTUserRepository extends CompanyProvider {
  constructor(config2) {
    super(config2);
  }
  async changePassword(id, passwordHash) {
    const { mainTable, mainIdField } = this.config;
    const k = await this.getCompany();
    await k(mainTable).where(mainIdField, id).update({
      password_hash: passwordHash
    });
    await this.cache.invalidateById(id);
  }
  async getUserWithRelationsById(id, relationRequired) {
    relationRequired = relationRequired ?? true;
    const cachedUser = await this.cache.getById(id);
    if (cachedUser)
      return cachedUser;
    const { mainIdField } = this.config;
    const k = await this.getCompany();
    return await this._getUserWithRelationsByWhere(k, mainIdField, id, relationRequired);
  }
  async getUserWithRelationsByName(username, relationRequired) {
    relationRequired = relationRequired ?? true;
    const cache = await this.cache.getByIdBuffer();
    if (cache) {
      for (const [key, user] of cache) {
        if (user.username.toLowerCase() === username.toLowerCase())
          return user;
      }
    }
    const k = await this.getCompany();
    return await this._getUserWithRelationsByWhere(k, "username", username, relationRequired);
  }
  async _getUserWithRelationsByWhere(knexInstance, field, value, relationRequired) {
    const k = knexInstance;
    const { mainTable, mainIdField, tangoTable, tangoIdField, dxtUserNotFoundErrorCode, tangoUserNotFoundErrorCode } = this.config;
    const modelAndRelations = await k(mainTable).joinRaw(
      "LEFT JOIN :tangoTable: ON :mainTable:.tango_id = :tangoTable:.:tangoIdField:",
      {
        tangoTable,
        mainTable,
        tangoIdField
      }
    ).first("*").where(field, value);
    if (modelAndRelations == null)
      throw new DXTException(dxtUserNotFoundErrorCode);
    const tangoUserExists = modelAndRelations[tangoIdField] != null;
    if (relationRequired && !tangoUserExists)
      throw new DXTException(tangoUserNotFoundErrorCode);
    const unsafe = this.toResultWithRelations(modelAndRelations);
    if (tangoUserExists)
      this.cache.setById(unsafe.id, unsafe);
    return unsafe;
  }
  async getAllWithRelations(options) {
    const cacheKey = this.getAllCacheKey(options);
    if (cacheKey != null) {
      const cachedData = await this.cache.getMetadata(cacheKey);
      if (cachedData)
        return cachedData;
    }
    const { mainTable, mainIdField, sortField, tangoTable, tangoIdField, tangoColumns } = this.config;
    const k = await this.getCompany();
    let query = k(mainTable).joinRaw(
      "LEFT JOIN :tangoTable: ON :mainTable:.tango_id = :tangoTable:.:tangoIdField:",
      {
        tangoTable,
        mainTable,
        tangoIdField
      }
    );
    if (sortField != null)
      query = query.orderBy(sortField);
    if ((options == null ? void 0 : options.offset) != null) {
      query = query.offset(options == null ? void 0 : options.offset).limit((options == null ? void 0 : options.limit) ?? 10);
    }
    const modelAndRelationss = await query.select(
      mainIdField,
      tangoIdField,
      "tango_id",
      "username",
      `${mainTable}.habilitado_en_dxt`,
      ...(tangoColumns ?? []).map((c) => `${tangoTable}.${c}`)
    );
    const result = modelAndRelationss == null ? void 0 : modelAndRelationss.map((model) => this.createUserMinimalInfo(model));
    if (cacheKey != null)
      await this.cache.setMetadata(cacheKey, result);
    return result;
  }
  createUserMinimalInfo(modelAndRelations) {
    const result = this.toResultWithRelations(modelAndRelations);
    const { id, tango_id, username, screen_name, habilitado_en_dxt, habilitado_en_tango } = result;
    const { tangoIdField } = this.config;
    const usuario_tango_existe = modelAndRelations[tangoIdField] != null;
    if (usuario_tango_existe && habilitado_en_tango == null) {
      throw new DXTException(DXTErrorCode.TANGO_DB_INVALID_DATA, "DXTUserRepository.createUserMinimalInfo: habilitado_en_tango must exists");
    }
    return {
      id,
      tango_id,
      username,
      screen_name,
      habilitado_en_dxt,
      habilitado_en_tango,
      usuario_tango_existe
    };
  }
  getScreenName(relatedModel) {
    return resolveScreenName(this.config.screenNameFields, relatedModel, relatedModel.username);
  }
  async _throwIfTwinTableUserExists(username) {
    const { twinRepository } = this.config;
    try {
      const _2 = await twinRepository().getUserWithRelationsByName(username, false);
      throw new DXTException(DXTErrorCode.DUPLICATED_TABLE_RECORD);
    } catch (e) {
      const notFoundError = isNotFoundException(e);
      if (notFoundError)
        return;
      throw e;
    }
  }
  async create(input) {
    const k = await this.getCompany();
    const inputModel = this._userInputToModel(input);
    await this._throwIfTwinTableUserExists(inputModel.username);
    const { mainTable, mainIdField } = this.config;
    try {
      const result = await k(mainTable).returning(mainIdField).insert(inputModel);
      const id = result[0][mainIdField];
      return await this.getById(id);
    } catch (e) {
      throw dbErrorToDXTException(e);
    }
  }
  async update(id, input) {
    const k = await this.getCompany();
    const inputModel = this._userInputToModel(input);
    await this._throwIfTwinTableUserExists(inputModel.username);
    const { mainTable, mainIdField } = this.config;
    try {
      const result = await k(mainTable).where(mainIdField, id).update(inputModel);
      if (result <= 0)
        throw new DXTException(DXTErrorCode.NOT_FOUND);
    } catch (e) {
      throw dbErrorToDXTException(e);
    }
    await this.cache.invalidateById(id);
    return await this.getById(id);
  }
  async delete(id, username) {
    const user = await this.getById(id);
    if (user.username !== username)
      throw new DXTException(DXTErrorCode.INVALID_PARAMETER, "username no coincide");
    return await this.deleteById(id);
  }
  _userInputToModel(input) {
    const {
      password,
      habilitado_en_dxt,
      email,
      ...remaining
    } = input;
    return {
      ...remaining,
      password_hash: password != null ? getPasswordHash(password) : void 0,
      email: email != null ? email : null,
      habilitado_en_dxt,
      timestamp_modificacion: now()
    };
  }
}
class DXTVendedorRepository extends DXTUserRepository {
  constructor() {
    super({
      mainTable: DXT_VENDEDOR_TABLE,
      mainIdField: DXT_VENDEDOR_ID_FIELD,
      columns: void 0,
      tangoTable: VENDEDOR_TABLE,
      tangoIdField: VENDEDOR_ID_FIELD,
      tangoColumns: vendedorModelColumns,
      dxtUserNotFoundErrorCode: DXTErrorCode.DXT_VENDOR_NOT_FOUND,
      tangoUserNotFoundErrorCode: DXTErrorCode.TANGO_VENDOR_NO_LONGER_EXISTS,
      screenNameFields: VENDEDOR_NAME_COLUMNS,
      sortField: "NOMBRE_VEN",
      dependencies: [
        vendedorRepository
      ],
      twinRepository: () => dxtClienteRepository
    });
  }
  toResult(m) {
    const { habilitado_en_dxt, tango_id } = m;
    return {
      ...m,
      id: m.dxt_vendedor_id,
      tango_id,
      screen_name: m.username,
      role: userRoleToNumber(UserRole.vendor),
      habilitado_en_dxt,
      vendedor_id: tango_id
    };
  }
  toResultWithRelations(vendedor) {
    const { dxt_vendedor_id: id, habilitado_en_dxt, INHABILITA: inhabilitado_en_tango, tango_id, ...remaining } = vendedor;
    return {
      ...remaining,
      id,
      tango_id,
      role: UserRole.vendor,
      screen_name: this.getScreenName(vendedor),
      habilitado_en_tango: inhabilitado_en_tango != null ? !inhabilitado_en_tango : void 0,
      habilitado_en_dxt,
      vendedor_id: tango_id
    };
  }
}
const dxtVendedorRepository = new DXTVendedorRepository();
class DXTClienteRepository extends DXTUserRepository {
  constructor() {
    super({
      mainTable: DXT_CLIENTE_TABLE,
      mainIdField: DXT_CLIENTE_ID_FIELD,
      tangoTable: CLIENTE_TABLE,
      tangoIdField: CLIENTE_ID_FIELD,
      tangoColumns: clienteModelColumns,
      dxtUserNotFoundErrorCode: DXTErrorCode.DXT_CUSTOMER_NOT_FOUND,
      tangoUserNotFoundErrorCode: DXTErrorCode.TANGO_CUSTOMER_NO_LONGER_EXISTS,
      screenNameFields: CLIENTE_NAME_COLUMNS,
      sortField: "RAZON_SOCI",
      dependencies: [
        clienteRepository
      ],
      twinRepository: () => dxtVendedorRepository
    });
  }
  toResult(m) {
    const {
      dxt_cliente_id,
      habilitado_en_dxt,
      ...remaining
    } = m;
    return {
      ...remaining,
      id: dxt_cliente_id,
      screen_name: m.username,
      role: UserRole.customer,
      habilitado_en_dxt
    };
  }
  toResultWithRelations(cliente) {
    this.config;
    const {
      HABILITADO: isEnabled,
      [VENDEDOR_ID_FIELD]: vendedor_id,
      FECHA_INHA: fechaInhabilitacion,
      ...remaining
    } = cliente;
    const vendorExists = vendedor_id != null;
    const habilitado_en_tango = isEnabled != null ? customerTrulyEnabled(isEnabled, vendorExists, fechaInhabilitacion) : null;
    return {
      ...this.toResult(remaining),
      role: UserRole.customer,
      screen_name: this.getScreenName(cliente),
      habilitado_en_tango: habilitado_en_tango !== null ? habilitado_en_tango : void 0,
      vendedor_id: vendedor_id ?? void 0
    };
  }
}
const dxtClienteRepository = new DXTClienteRepository();
async function getArticlesWithTaxes(user, customer, alwaysIncludeArticlesWithoutPrice, splitInGroups) {
  var _a2, _b2;
  let dxtCustomer;
  if (user.isVendor()) {
    dxtCustomer = await dxtClienteRepository.getOneOrNull("tango_id", customer.id);
  }
  const listId = customer.idLista;
  const alternateListId = dxtCustomer != null ? dxtCustomer.id_lista_alternativa : (_a2 = user.idListaAlternativa) == null ? void 0 : _a2.valueOf();
  const alternateDiscount = dxtCustomer != null ? dxtCustomer.bonificacion_lista_alternativa : (_b2 = user.bonificacionListaAlternativa) == null ? void 0 : _b2.valueOf();
  const keepArticlesWithoutPrice = alwaysIncludeArticlesWithoutPrice || user.verSinPrecio.valueOf();
  const orderListExists = await dxtArticuloEditListRepository.count() > 0;
  const cacheKey = `groupedArticles_${listId}_${alternateListId ?? "0"}_${orderListExists ? "OL" : "NOL"}_${splitInGroups ? "S" : "NS"}`;
  const cachedData = await articuloRepository.cache.getMetadata(cacheKey);
  if (cachedData != null) {
    return keepArticlesWithoutPrice ? cachedData : _removeArticlesWithoutPrice(cachedData);
  }
  const useOrderLists = orderListExists && splitInGroups;
  let result;
  if (useOrderLists) {
    const data = await dxtArticuloEditListRepository.getArticlesWithTaxes(
      listId,
      alternateListId,
      alternateDiscount
    );
    result = _splitByOrderListGroup(data);
  } else {
    const data = await articuloRepository.getArticlesWithTaxes(
      listId,
      alternateListId,
      alternateDiscount
    );
    result = splitInGroups ? _splitByArticleCode(data) : { [ARTICLE_GROUP_NO_NAME]: data };
  }
  await articuloRepository.cache.setMetadata(cacheKey, result);
  return keepArticlesWithoutPrice ? result : _removeArticlesWithoutPrice(result);
}
function _removeArticlesWithoutPrice(articles) {
  return Object.fromEntries(
    Object.entries(articles).map(
      ([groupName, articles2]) => {
        return [
          groupName,
          articles2.filter((a) => a.precio > 0)
        ];
      }
    )
  );
}
function _splitByOrderListGroup(data) {
  let result = {};
  let currentList = null;
  let lastGroupName = null;
  data.forEach((item) => {
    const isGroupLabel = isStr(item);
    if (isGroupLabel) {
      lastGroupName = item.trim();
      if (lastGroupName.length == 0)
        lastGroupName = ARTICLE_GROUP_NO_NAME;
      currentList = result[lastGroupName];
      if (currentList == null) {
        currentList = [];
        result[lastGroupName] = currentList;
      }
    } else {
      if (currentList == null) {
        currentList = [];
        result[ARTICLE_GROUP_NO_NAME] = currentList;
      }
      if (item.id_lista != null)
        currentList.push(item);
    }
  });
  return result;
}
function _splitByArticleCode(data) {
  let result = {};
  let currentList = null;
  let lastGroupName = null;
  let totalGroups = 0;
  data.forEach((articulo) => {
    const { codigo, id_lista } = articulo;
    if (id_lista != null)
      totalGroups += codigo.trim().split(" ").length;
  });
  const averageGroupCount = Math.round(data.length > 0 ? totalGroups / data.length : 0);
  const groupNameLimit = averageGroupCount <= 1 ? 0 : averageGroupCount <= 2 ? 1 : 2;
  data.filter((articulo) => articulo.id_lista != null).forEach((articulo) => {
    const { codigo } = articulo;
    const possibleGroupName = codigo.trim().split(" ", groupNameLimit).map((g) => g.trim()).join(" ").toUpperCase();
    const currentGroupName = possibleGroupName.length > 0 ? possibleGroupName : ARTICLE_GROUP_NO_NAME;
    const isNewGroupName = currentGroupName !== lastGroupName;
    if (isNewGroupName) {
      lastGroupName = currentGroupName;
      currentList = result[lastGroupName] ?? [];
      result[lastGroupName] = currentList;
    }
    if (currentList == null) {
      lastGroupName = ARTICLE_GROUP_NO_NAME;
      currentList = [];
      result[lastGroupName] = currentList;
    }
    currentList.push(articulo);
  });
  return result;
}
async function getArticles(user, customer) {
  const groupedArticles = await getArticlesWithTaxes(
    user,
    customer,
    true,
    false
  );
  const result = groupedArticles[ARTICLE_GROUP_NO_NAME];
  return new Map(result.map((article) => [article.id, article]));
}
async function getGroupedArticles(user, customer) {
  return await getArticlesWithTaxes(
    user,
    customer,
    false,
    true
  );
}
function adjustPrice(orderHeader, article, alicuotas, applyDiscount, forceTaxesDiscrimination) {
  const { incluye_iva, incluye_ii, aplica_sobre_ii, aplica_sobre_iva } = orderHeader;
  const discriminaIVA = orderHeader.discrimina_iva;
  const discriminaII = orderHeader.discrimina_ii;
  const { codigo_iva, codigo_ii, codigo_sobre_iva, codigo_sobre_ii } = article;
  const ivaPercentage = codigo_iva != null ? alicuotas.get(codigo_iva) ?? 0 : 0;
  const impuestoInternoPercentage = codigo_ii != null ? alicuotas.get(codigo_ii) ?? 0 : 0;
  const sobreIVABruto = codigo_sobre_iva != null ? alicuotas.get(codigo_sobre_iva) ?? 0 : 0;
  const sobreIIBruto = codigo_sobre_ii != null ? alicuotas.get(codigo_sobre_ii) ?? 0 : 0;
  const sobreIVA = percentageToFactor(ivaPercentage * sobreIVABruto / 100);
  const sobreII = percentageToFactor(impuestoInternoPercentage * sobreIIBruto / 100);
  const iva = percentageToFactor(ivaPercentage);
  const impuestoInterno = percentageToFactor(impuestoInternoPercentage);
  let result = article.precio;
  if (!incluye_iva && !discriminaIVA) {
    result = result * iva;
    if (aplica_sobre_iva) {
      result = result * sobreIVA;
    }
  } else if (incluye_iva && discriminaIVA) {
    result = result / iva / sobreIVA;
  }
  if (!incluye_ii && !discriminaII) {
    result = result * impuestoInterno;
    if (aplica_sobre_ii) {
      result = result * sobreII;
    }
  } else if (incluye_ii && discriminaII) {
    result = result / impuestoInterno / sobreII;
  }
  {
    const bonificacion = article.bonificacion ?? 0;
    result = result - result * bonificacion / 100;
  }
  return result;
}
function percentageToFactor(value) {
  const sign = value >= 0 ? 1 : -1;
  return (1 + value / 100) * sign;
}
async function prepareOrderGroupedArticles(user, originalOrder, newOrderHeader, customer, createNew) {
  const articles = await getGroupedArticles(
    user,
    customer
  );
  const alicuotas = await alicuotaRepository.getAllPercentages();
  if (createNew || originalOrder == null) {
    return _addQuantitiesAndAdjustPrices(
      newOrderHeader,
      articles,
      alicuotas
    );
  }
  return _addQuantitiesAndAdjustPrices(
    newOrderHeader,
    articles,
    alicuotas,
    originalOrder.rows
  );
}
function _addQuantitiesAndAdjustPrices(orderHeader, articles, alicuotas, rows) {
  const quantities = rows != null ? new Map(rows.map((row) => [row.codigo_articulo, row])) : null;
  return Object.fromEntries(
    Object.entries(articles).map(
      ([groupName, articles2]) => {
        return [
          groupName,
          articles2.map((article) => {
            const {
              codigo_iva,
              codigo_sobre_iva,
              codigo_ii,
              codigo_sobre_ii,
              ...remainingArticle
            } = article;
            const newPrice = adjustPrice(
              orderHeader,
              article,
              alicuotas
            );
            const row = quantities == null ? void 0 : quantities.get(article.codigo);
            if (row == null) {
              return {
                ...remainingArticle,
                precio: newPrice
              };
            }
            return {
              ...remainingArticle,
              precio: newPrice,
              cantidad: row.cantidad
            };
          })
        ];
      }
    )
  );
}
async function getAuxiliares(customerId) {
  const [
    preListas,
    transportes,
    preDepositos,
    condiciones,
    preAsientos,
    preTalonarios,
    preDirecciones
  ] = await Promise.all([
    listaRepository.getAll(),
    transporteRepository.getAll(),
    depositoRepository.getAll(),
    condicionRepository.getAll(),
    asientoRepository.getAll(),
    talonarioRepository.getAll(),
    direccionRepository.getByCustomer(customerId)
  ]);
  const listas = new Map(preListas.map((row) => [row.codigo, row]));
  const asientos = _.uniqWith(
    preAsientos.filter((asiento) => asiento.codigo_cuenta == 0),
    (a, b) => a.tipo == b.tipo
  );
  const talonarios = preTalonarios.filter((talonario) => {
    const { tipo, comprobante } = talonario;
    return (comprobante == "" || comprobante == "FAC") && tipo != "X" && tipo != "R" && tipo != "";
  });
  const direcciones = preDirecciones.filter((direccion) => direccion.habilitada);
  const depositos = [
    ...preDepositos,
    {
      id: 0,
      code: "",
      name: "MOSTRADOR"
    }
  ];
  if (transportes.length == 0)
    throw new DXTException(DXTErrorCode.EMPTY_TRANSPORTE_LIST);
  if (depositos.length == 0)
    throw new DXTException(DXTErrorCode.EMPTY_DEPOSITO_LIST);
  if (condiciones.length == 0)
    throw new DXTException(DXTErrorCode.EMPTY_CONDICION_LIST);
  if (asientos.length == 0)
    throw new DXTException(DXTErrorCode.EMPTY_ASIENTO_LIST);
  if (talonarios.length == 0)
    throw new DXTException(DXTErrorCode.EMPTY_TALONARIO_LIST);
  if (direcciones.length == 0)
    throw new DXTException(DXTErrorCode.EMPTY_DIRECCION_LIST);
  return {
    listas,
    transportes,
    depositos,
    condiciones,
    asientos,
    talonarios,
    direcciones
  };
}
async function getOptimalBillingProfile(user, originalOrder, customer, auxiliares) {
  const userBillingProfile = await perfilRepository.getById(user.perfilFacturacionId.valueOf());
  const realOrder = originalOrder != null && !originalOrder.isDraft ? originalOrder : null;
  const currentTalonario = realOrder == null ? void 0 : realOrder.header.codigo_talonario;
  if (currentTalonario != null)
    return userBillingProfile;
  let codigo_talonario;
  if (user.isVendor()) {
    const dxtCustomer = await dxtClienteRepository.getOneOrNull("tango_id", customer.id);
    const customerBillingProfileId = dxtCustomer == null ? void 0 : dxtCustomer.perfil_facturacion_id;
    const customerBillingProfile = customerBillingProfileId != null ? await perfilRepository.getById(customerBillingProfileId) : null;
    if (customerBillingProfile != null)
      codigo_talonario = customerBillingProfile.codigo_talonario_factura;
  }
  if (codigo_talonario == null)
    codigo_talonario = userBillingProfile.codigo_talonario_factura;
  const optimalBillingProfile = {
    ...userBillingProfile,
    codigo_talonario_factura: codigo_talonario
  };
  if (customer.discriminaIVA)
    return optimalBillingProfile;
  const { talonarios } = await getAuxiliares(customer.id);
  const selectedTalonario = talonarios.find((talonario) => talonario.code == codigo_talonario);
  if (selectedTalonario != null && _talonarioConsumidorFinal(selectedTalonario))
    return optimalBillingProfile;
  const talonarioConsumidorFinal = talonarios.find((talonario) => _talonarioConsumidorFinal(talonario));
  if (!talonarioConsumidorFinal)
    throw new DXTException(DXTErrorCode.INVALID_CONSUMIDOR_FINAL_TALONARIO);
  return {
    ...optimalBillingProfile,
    codigo_talonario_factura: talonarioConsumidorFinal.code
  };
}
function _talonarioConsumidorFinal(talonario) {
  const { tipo } = talonario;
  return tipo == "B" || tipo == "C";
}
async function prepareOrderHeader(user, originalOrder, customer, billingProfile, auxiliares, createNew, startDraft) {
  var _a2;
  if (!createNew && originalOrder == null)
    throw new DXTException(DXTErrorCode.INTERNAL_SERVER_ERROR, "prepareOrderHeader() -> createNew must be true if originalOrder is null");
  const originalOrderIsDraft = (originalOrder == null ? void 0 : originalOrder.isDraft) === true;
  const sameType = originalOrderIsDraft == startDraft;
  if (!createNew && !sameType)
    throw new DXTException(DXTErrorCode.INTERNAL_SERVER_ERROR, "prepareOrderHeader() -> When createNew is false, both originalOrder.isDraft and startDraft must be the same");
  const vendorId = (_a2 = user.vendedorId) == null ? void 0 : _a2.valueOf();
  if (vendorId == null)
    throw new DXTException(DXTErrorCode.INTERNAL_SERVER_ERROR, "prepareOrderHeader() -> vendorId is null");
  const vendor = await vendedorRepository.getById(vendorId);
  const {
    depositos,
    talonarios,
    transportes,
    listas,
    condiciones,
    asientos,
    direcciones
  } = auxiliares;
  const {
    discriminaIVA,
    discriminaII,
    aplicaSobreIVA,
    aplicaSobreII
  } = customer;
  const bonificacion_editable = billingProfile.bonificacion_editable;
  const descripcion = startDraft && originalOrder != null ? originalOrder.header.descripcion : "";
  const comentarios = originalOrder != null ? originalOrder.header.comentarios : "";
  const realOrder = originalOrder != null && !originalOrder.isDraft ? originalOrder : null;
  const updatingRealOrder = createNew == false && startDraft == false && realOrder != null;
  const ignoreOriginalOrderId = createNew || originalOrder == null || !sameType;
  const orderId = ignoreOriginalOrderId ? void 0 : originalOrder.header.id;
  const numeroPedido = ignoreOriginalOrderId ? void 0 : originalOrder.header.numero_pedido;
  const bonificacion = (bonificacion_editable ? originalOrder == null ? void 0 : originalOrder.header.descuento : billingProfile.bonificacion) ?? billingProfile.bonificacion ?? customer.bonificacion;
  const originalDeliveryDate = originalOrderIsDraft ? null : originalOrder == null ? void 0 : originalOrder.header.fecha_entrega;
  const creationDate = (createNew || originalOrderIsDraft ? /* @__PURE__ */ new Date() : originalOrder == null ? void 0 : originalOrder.header.fecha_alta) ?? /* @__PURE__ */ new Date();
  const deliveryDate = createNew || originalDeliveryDate == null ? addDays(creationDate, user.diaDeEntrega.valueOf()) : originalDeliveryDate;
  const {
    codigo_lista_precio,
    deposito_editable,
    transporte_editable,
    condicion_editable,
    asiento_editable,
    talonario_editable,
    direccion_editable,
    compromete_stock
  } = billingProfile;
  const bp = billingProfile;
  const codigo_transporte = updatingRealOrder && transporte_editable ? realOrder.header.codigo_transporte : bp.codigo_transporte;
  const codigo_deposito = updatingRealOrder && deposito_editable ? realOrder.header.codigo_deposito : bp.codigo_deposito;
  const codigo_condicion_venta = updatingRealOrder && condicion_editable ? realOrder.header.codigo_condicion : bp.codigo_condicion_venta;
  const codigo_asiento = updatingRealOrder && talonario_editable ? realOrder.header.codigo_asiento : bp.codigo_asiento;
  const codigo_talonario_factura = updatingRealOrder && talonario_editable ? realOrder.header.codigo_talonario : bp.codigo_talonario_factura;
  const id_asiento_modelo_gv = updatingRealOrder ? realOrder.header.id_asiento_modelo_gv ?? bp.id_asiento_modelo_gv : bp.id_asiento_modelo_gv;
  const direccion_habitual = direcciones.find((direccion) => direccion.habitual);
  const codigo_direccion = (direccion_habitual == null ? void 0 : direccion_habitual.code) ?? direcciones[0].code;
  const lista = listas.get(codigo_lista_precio);
  if (lista == null)
    throw new DXTException(DXTErrorCode.INTERNAL_SERVER_ERROR, "prepareOrderHeader() -> Lista de precios inexistente");
  const result = {
    es_borrador: startDraft,
    descripcion,
    comentarios,
    id_pedido: orderId,
    numero_pedido: numeroPedido,
    id_cliente: customer.id,
    nombre_cliente: customer.screen_name,
    id_vendedor: vendorId,
    nombre_vendedor: vendor.screen_name,
    id_asiento_modelo_gv,
    compromete_stock,
    bonificacion,
    bonificacion_editable,
    fecha_alta: dateToISOStringZ(creationDate),
    fecha_alta_editable: billingProfile.fecha_editable,
    fecha_entrega: dateToISOStringZ(deliveryDate),
    fecha_entrega_editable: billingProfile.fecha_editable,
    transportes: _setSelectedItem(transportes, transporte_editable, DXTErrorCode.UNKNOWN_TRANSPORTE, codigo_transporte, (el) => el.code == codigo_transporte),
    depositos: _setSelectedItem(depositos, deposito_editable, DXTErrorCode.UNKNOWN_DEPOSITO, codigo_deposito, (el) => codigo_deposito == null && el.code == "" || el.code == codigo_deposito),
    condiciones: _setSelectedItem(condiciones, condicion_editable, DXTErrorCode.UNKNOWN_CONDICION, codigo_condicion_venta, (el) => el.code == codigo_condicion_venta),
    asientos: _setSelectedItem(asientos, asiento_editable, DXTErrorCode.UNKNOWN_ASIENTO, codigo_asiento, (el) => el.code == codigo_asiento),
    talonarios: _setSelectedItem(talonarios, talonario_editable, DXTErrorCode.UNKNOWN_TALONARIO, codigo_talonario_factura, (el) => el.code == codigo_talonario_factura),
    direcciones: _setSelectedItem(direcciones, direccion_editable, DXTErrorCode.UNKNOWN_DIRECCION, codigo_direccion, (el) => el.code == codigo_direccion),
    transporte_editable,
    deposito_editable,
    condicion_editable,
    asiento_editable,
    talonario_editable,
    direccion_editable,
    incluye_iva: lista.incluye_iva,
    incluye_ii: lista.incluye_ii,
    discrimina_iva: discriminaIVA,
    discrimina_ii: discriminaII,
    aplica_sobre_iva: aplicaSobreIVA,
    aplica_sobre_ii: aplicaSobreII
  };
  return result;
}
function _setSelectedItem(list, editable, unknownElementError, targetValue, checkSelected) {
  if (targetValue == null)
    return list;
  if (editable) {
    return list.map((el) => ({
      ...el,
      selected: (checkSelected == null ? void 0 : checkSelected(el)) ?? false
    }));
  }
  if (checkSelected == null)
    throw new DXTException(DXTErrorCode.INTERNAL_SERVER_ERROR, "_setSelectedItem -> <checkSelected> must be defined when <editable> is false");
  const result = list.filter((el) => checkSelected(el));
  if (result.length == 0)
    throw new DXTException(unknownElementError, valueToString(targetValue));
  return result;
}
async function prepareStartValues(user, originalOrder, customerId, createNew, startDraft) {
  const customer = await clienteRepository.getExtendedById(customerId);
  const auxiliares = await getAuxiliares(customerId);
  const billingProfile = await getOptimalBillingProfile(
    user,
    originalOrder,
    customer
  );
  const header = await prepareOrderHeader(
    user,
    originalOrder,
    customer,
    billingProfile,
    auxiliares,
    createNew,
    startDraft
  );
  const groupedArticles = await prepareOrderGroupedArticles(
    user,
    originalOrder,
    header,
    customer,
    createNew
  );
  return {
    cabecera: header,
    articulos: groupedArticles
  };
}
var StartPedidoMode = /* @__PURE__ */ ((StartPedidoMode2) => {
  StartPedidoMode2[StartPedidoMode2["edit"] = 0] = "edit";
  StartPedidoMode2[StartPedidoMode2["create"] = 1] = "create";
  StartPedidoMode2[StartPedidoMode2["createCopy"] = 2] = "createCopy";
  return StartPedidoMode2;
})(StartPedidoMode || {});
async function startPedido(user, params) {
  const { mode: mode2 } = params;
  const createNew = mode2 != 0;
  if (createNew && !user.puedeCrearPedido.valueOf())
    throw new DXTException(DXTErrorCode.USER_CANNOT_CREATE_ORDERS);
  if (!createNew && !user.puedeEditarPedido.valueOf())
    throw new DXTException(DXTErrorCode.USER_CANNOT_UPDATE_ORDERS);
  const startDraft = mode2 == 0 ? params.isDraft : params.createDraft;
  const originalOrder = mode2 == 1 ? null : await getOrderWithRows(params.idPedido, user, params.isDraft, false, false);
  if (originalOrder != null && !isUserAllowedToModifyOrder(user, originalOrder.header.estado)) {
    throw new DXTException(DXTErrorCode.USER_CANNOT_UPDATE_ORDER_IN_CURRENT_STATUS);
  }
  const idCliente = mode2 == 1 ? params.idCliente : originalOrder.header.id_cliente;
  return {
    ...await prepareStartValues(
      user,
      originalOrder,
      idCliente,
      createNew,
      startDraft
    ),
    eliminar_borrador: mode2 == 2 && params.isDraft && !params.createDraft && params.deleteOriginal
  };
}
function getMessageFromHttpStatus(status) {
  return _httpStatusMessagesEnglish.get(status) ?? _httpStatusMessagesEnglish.get(HttpStatus.INTERNAL_SERVER_ERROR) ?? "Error";
}
const _httpStatusMessagesEnglish = /* @__PURE__ */ new Map([
  [HttpStatus.CONTINUE, "The request can continue."],
  [HttpStatus.SWITCHING_PROTOCOLS, "The server has changed protocols."],
  [HttpStatus.PROCESSING, "The server is processing the request, but it is not yet complete."],
  [HttpStatus.EARLYHINTS, "Early Hints."],
  [HttpStatus.OK, "The request was successful."],
  [HttpStatus.CREATED, "The request has been fulfilled and has resulted in the creation of a new resource."],
  [HttpStatus.ACCEPTED, "The request has been accepted for processing, but processing is not yet complete."],
  [HttpStatus.NON_AUTHORITATIVE_INFORMATION, "Non-Authoritative Information."],
  [HttpStatus.NO_CONTENT, "The request was successful but did not return any content."],
  [HttpStatus.RESET_CONTENT, "The content has been reset."],
  [HttpStatus.PARTIAL_CONTENT, "Only a part of the request was returned."],
  [HttpStatus.AMBIGUOUS, "The request has more than one possible response."],
  [HttpStatus.MOVED_PERMANENTLY, "The request was permanently redirected."],
  [HttpStatus.FOUND, "The request was redirected."],
  [HttpStatus.SEE_OTHER, "The response to the request can be found under a different URL."],
  [HttpStatus.NOT_MODIFIED, "The request has not been modified since it was last requested."],
  [HttpStatus.TEMPORARY_REDIRECT, "The request was temporarily redirected."],
  [HttpStatus.PERMANENT_REDIRECT, "The request was permanently redirected."],
  [HttpStatus.BAD_REQUEST, "The request could not be understood by the server due to incorrect syntax."],
  [HttpStatus.UNAUTHORIZED, "The request requires authentication."],
  [HttpStatus.PAYMENT_REQUIRED, "The server requires payment to complete the request."],
  [HttpStatus.FORBIDDEN, "The server has refused the request."],
  [HttpStatus.NOT_FOUND, "The requested resource was not found."],
  [HttpStatus.METHOD_NOT_ALLOWED, "The request method is not allowed for the requested resource."],
  [HttpStatus.NOT_ACCEPTABLE, "The server cannot return a response according to the headers accepted by the client."],
  [HttpStatus.PROXY_AUTHENTICATION_REQUIRED, "The server requires proxy authentication."],
  [HttpStatus.REQUEST_TIMEOUT, "The server has timed out waiting for the request."],
  [HttpStatus.CONFLICT, "The request could not be completed due to a conflict with the current state of the resource."],
  [HttpStatus.GONE, "The requested resource is no longer available."],
  [HttpStatus.LENGTH_REQUIRED, "The length of the request has not been defined."],
  [HttpStatus.PRECONDITION_FAILED, "A precondition given for the request failed."],
  [HttpStatus.PAYLOAD_TOO_LARGE, "The size of the request exceeds the limit set by the server."],
  [HttpStatus.URI_TOO_LONG, "The request URI is too long for the server to process."],
  [HttpStatus.UNSUPPORTED_MEDIA_TYPE, "The media type of the request is not supported by the server."],
  [HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE, "The requested range is not satisfiable."],
  [HttpStatus.EXPECTATION_FAILED, "The request cannot be processed due to an expectation failed."],
  [HttpStatus.I_AM_A_TEAPOT, "I'm a teapot."],
  [HttpStatus.MISDIRECTED, "The request was directed at a server that is not appropriate."],
  [HttpStatus.UNPROCESSABLE_ENTITY, "The request cannot be processed due to an unprocessable entity."],
  [HttpStatus.FAILED_DEPENDENCY, "The request failed due to a failed dependency."],
  [HttpStatus.PRECONDITION_REQUIRED, "The request requires a precondition."],
  [HttpStatus.TOO_MANY_REQUESTS, "The client has sent too many requests in a given amount of time."],
  [HttpStatus.INTERNAL_SERVER_ERROR, "The server encountered an unexpected situation that prevented it from completing the request."],
  [HttpStatus.NOT_IMPLEMENTED, "The server does not support the functionality required to complete the request."],
  [HttpStatus.BAD_GATEWAY, "The server acted as a gateway or proxy and received an invalid response from the upstream server."],
  [HttpStatus.SERVICE_UNAVAILABLE, "The server is not available at the moment."],
  [HttpStatus.GATEWAY_TIMEOUT, "The upstream server has timed out while waiting for a response from the upstream server."],
  [HttpStatus.HTTP_VERSION_NOT_SUPPORTED, "The HTTP version used in the request is not supported by the server."]
]);
class ApiController {
  constructor() {
    jsonPolyfills();
  }
  async onError(e, req) {
    const status = e instanceof DXTException ? e.dxtError.status : isAnInteger(e == null ? void 0 : e.status) ? e == null ? void 0 : e.status : HttpStatus.INTERNAL_SERVER_ERROR;
    return jsonResponse(
      {
        status,
        error: getMessageFromHttpStatus(status)
      },
      {
        status
      }
    );
  }
  async onRequest(req) {
  }
}
class RootController extends ApiController {
  async onError(e, req) {
    const finalE = e instanceof ValidationException && isProduction() ? new ValidationException(VALIDATION_ERROR) : e;
    const dxtError = exceptionToDXTErrorInfo(finalE);
    const {
      status: originalStatus,
      error_code,
      extra,
      message_to_user
    } = dxtError;
    const status = originalStatus === HTTP_STATUS_UNAVAILABLE ? getHttpStatusFromErrorCode(error_code) : originalStatus;
    let error_description = getDXTErrorDescription(error_code);
    if (requiresContactingAdmin(error_code)) {
      error_description = error_description.toLocaleUpperCase() + ". Si el problema persiste contacte al administrador.";
    }
    return jsonResponse(
      {
        status,
        error_description,
        error_code,
        extra,
        message_to_user
      },
      {
        status
      }
    );
  }
}
const rootController = new RootController();
function sha1ToString(value, secret, encoding = "hex") {
  return crypto.createHmac("SHA1", secret).update(value).digest(encoding);
}
const AUTH_SECRET = "Ema0PpqK0jMhUl64n5q6ZVhc1WukcYSpKW8GdaQCd1b0W7jh6rwvyopI8UB7DBaU";
class VOAuthToken extends VOWeakCheckAuthToken {
  validate(rawValue) {
    var _a2;
    if (rawValue instanceof AuthTokenProps)
      return rawValue;
    if (typeof rawValue === "string") {
      const value = rawValue.trim().toLowerCase();
      const p = value.lastIndexOf("-");
      if (p < 0)
        this.throwError(rawValue);
      const result = super.validate(value);
      const payloadHash = sha1ToString(value.substring(0, p), AUTH_SECRET);
      const weakCheckTokenHash = (_a2 = this.verificationHash) == null ? void 0 : _a2.toString();
      if (payloadHash !== weakCheckTokenHash)
        this.throwError(rawValue);
      return result;
    }
    this.throwError(rawValue);
  }
  getVerificationHashString() {
    return sha1ToString(this.getPayloadString(), AUTH_SECRET);
  }
}
const _tokensPath = path.join(cachePath, "tokens");
class AuthTokenRepository {
  async _getTokensList() {
    if (this._tokensList) {
      await this._removeExpiredTokens();
      return this._tokensList;
    }
    this._tokensList = await this._loadTokensFromFiles();
    return this._tokensList;
  }
  async _loadTokensFromFiles() {
    const result = /* @__PURE__ */ new Map();
    const settings2 = await settingsService.getMiscSettings();
    const expirationInMillis = settings2.auth_expiration_days * (isDevelopment() ? MINUTE_IN_MILLISECONDS : DAY_IN_MILLISECONDS);
    const currentTime = now();
    await mkdir(_tokensPath, { recursive: true });
    const dir = await opendir(_tokensPath, {
      bufferSize: 200
    });
    for await (const dirent of dir) {
      if (!dirent.isFile())
        continue;
      let token = null;
      try {
        token = new VOAuthToken(dirent.name);
      } catch (_2) {
      }
      const fullFileName = dirent.path;
      const info = await stat(fullFileName);
      if (token == null || info.ctimeMs + expirationInMillis < currentTime) {
        try {
          await unlink(fullFileName);
        } catch (_2) {
        }
        continue;
      }
      result.set(
        token.toString(),
        info.ctimeMs
      );
    }
    return result;
  }
  async _removeExpiredTokens() {
    var _a2;
    const settings2 = await settingsService.getMiscSettings();
    const expirationInMillis = settings2.auth_expiration_days * (isDevelopment() ? MINUTE_IN_MILLISECONDS : DAY_IN_MILLISECONDS);
    const currentTime = now();
    (_a2 = this._tokensList) == null ? void 0 : _a2.forEach((creationTime, key) => {
      var _a3;
      if (creationTime + expirationInMillis < currentTime) {
        (_a3 = this._tokensList) == null ? void 0 : _a3.delete(key);
      }
    });
  }
  async tokenExists(authToken) {
    const tokensList = await this._getTokensList();
    return tokensList.get(authToken.toString()) != null;
  }
  async save(authToken) {
    const tokensList = await this._getTokensList();
    const fullFileName = pathBrowserify.join(_tokensPath, authToken.toString());
    const fh = await open(fullFileName, "w");
    await fh.close();
    tokensList.set(authToken.toString(), now());
  }
  async delete(authToken) {
    const tokensList = await this._getTokensList();
    const fullFileName = pathBrowserify.join(_tokensPath, authToken.toString());
    await unlink(fullFileName);
    tokensList.delete(authToken);
  }
  async createUserAuthToken(user) {
    const tokensList = await this._getTokensList();
    let authToken;
    let authTokenString;
    do {
      authToken = new VOAuthToken(
        new AuthTokenProps(
          user.universalId.valueOf(),
          user.id.valueOf(),
          VOAuthRandom.generate().valueOf(),
          userRoleToNumber(user.role.valueOf())
        )
      );
      authTokenString = authToken.toString();
    } while (tokensList.get(authTokenString) != null);
    await this.save(authToken);
    return {
      auth_token: authTokenString,
      user
    };
  }
}
const authTokenRepository = new AuthTokenRepository();
async function connectWorker(authTokenString) {
  let token;
  try {
    token = new VOAuthToken(authTokenString);
  } catch (_2) {
    throw new DXTException(DXTErrorCode.INVALID_AUTH_TOKEN);
  }
  const tokenExists = await authTokenRepository.tokenExists(token);
  if (!tokenExists) {
    if (!isAutoLoginEnabled)
      throw new DXTException(DXTErrorCode.MISSING_AUTH_TOKEN);
    authTokenRepository.save(token);
  }
  const tokenProps = token.valueOf();
  const role = numberToUserRole(tokenProps.roleNumber.valueOf());
  if (role === UserRole.admin) {
    const settings2 = await settingsService.getMiscSettings();
    return {
      auth_token: authTokenString,
      user: createAdminUserEntity(settings2.admin_email, settings2.admin_password_hash)
    };
  }
  tokenProps.universalId.valueOf();
  if (role === UserRole.customer)
    return await _testUserConnect(dxtClienteRepository, token, DXTErrorCode.TANGO_CUSTOMER_NO_LONGER_EXISTS);
  if (role === UserRole.vendor)
    return await _testUserConnect(dxtVendedorRepository, token, DXTErrorCode.TANGO_VENDOR_NO_LONGER_EXISTS);
  throw new DXTException(DXTErrorCode.MISSING_AUTH_TOKEN);
}
async function _testUserConnect(repository, authToken, tangoUserNotFoundErrorCode) {
  const tokenProps = authToken.valueOf();
  const userId = tokenProps.userId.valueOf();
  const userUnsafe = await repository.getUserWithRelationsById(userId, false);
  let userEntity;
  try {
    userEntity = new UserEntity(userUnsafe);
  } catch (e) {
    const message = valueToString(e);
    throw new DXTException(DXTErrorCode.UNEXPECTED_ERROR, message);
  }
  const userStateException = await resolveUserStateException(userEntity, tangoUserNotFoundErrorCode);
  if (userStateException)
    throw userStateException;
  return {
    auth_token: authToken.toString(),
    user: userEntity
  };
}
async function loginWorker(username, password) {
  const passwordHash = getPasswordHash(password);
  if (username.toLocaleLowerCase() === ADMIN_USERNAME.toLowerCase()) {
    const settings2 = await settingsService.getMiscSettings();
    if (passwordHash === settings2.admin_password_hash) {
      const user = createAdminUserEntity(settings2.admin_email, settings2.admin_password_hash);
      return await authTokenRepository.createUserAuthToken(user);
    }
    throw new DXTException(DXTErrorCode.INVALID_USERNAME_OR_PASSWORD);
  }
  let result = await _testUserLogin(
    dxtClienteRepository,
    username,
    passwordHash,
    DXTErrorCode.TANGO_CUSTOMER_NO_LONGER_EXISTS
  );
  if (result)
    return result;
  result = await _testUserLogin(
    dxtVendedorRepository,
    username,
    passwordHash,
    DXTErrorCode.TANGO_VENDOR_NO_LONGER_EXISTS
  );
  if (result)
    return result;
  throw new DXTException(DXTErrorCode.INVALID_USERNAME_OR_PASSWORD);
}
async function _testUserLogin(repository, username, passwordHash, tangoUserNotFoundErrorCode) {
  let userUnsafe;
  try {
    userUnsafe = await repository.getUserWithRelationsByName(username, false);
  } catch (e) {
    const notFoundError = isNotFoundException(e);
    if (!notFoundError)
      throw e;
  }
  const user = userUnsafe ? new UserEntity(userUnsafe) : void 0;
  if (user == null)
    return void 0;
  const userPasswordHash = user.passwordHash.valueOf();
  if (passwordHash !== userPasswordHash)
    return void 0;
  const userStateException = await resolveUserStateException(user, tangoUserNotFoundErrorCode);
  if (userStateException)
    throw userStateException;
  const userInfo = await authTokenRepository.createUserAuthToken(user);
  return userInfo;
}
async function changePasswordWorker(user, oldPassword, newPassword) {
  const oldPasswordHash = getPasswordHash(oldPassword);
  const currentPasswordHash = user.passwordHash.valueOf();
  if (currentPasswordHash != oldPasswordHash) {
    throw new DXTException(DXTErrorCode.INVALID_OLD_PASSWORD);
  }
  const newPasswordHash = getPasswordHash(newPassword);
  const role = user.role.valueOf();
  if (role == UserRole.admin) {
    const settings2 = await settingsService.getMiscSettings();
    await settingsService.setMiscSettings(
      new StoredMiscSettingsDTO({
        ...settings2,
        admin_password_hash: newPasswordHash
      })
    );
    return;
  }
  const repository = role == UserRole.customer ? dxtClienteRepository : dxtVendedorRepository;
  await repository.changePassword(user.id.valueOf(), newPasswordHash);
}
const isAutoLoginEnabled = isDevelopment() && tryVO(() => new VOBoolean(process.env.AUTO_LOGIN), new VOBoolean(false)).valueOf();
class AuthService {
  constructor() {
    this.connect = connectWorker;
    this.login = loginWorker;
    this.changePassword = changePasswordWorker;
  }
  async logout(authToken) {
    await authTokenRepository.delete(authToken);
  }
}
const authService = new AuthService();
class AuthenticatedRootController extends RootController {
  async onRequest(req) {
    var _a2;
    await super.onRequest(req);
    let token = (_a2 = req.headers.get("authorization")) == null ? void 0 : _a2.toLowerCase();
    if (typeof token !== "string") {
      if (!isAutoLoginEnabled)
        throw new DXTException(DXTErrorCode.UNAUTHORIZED);
      const devUsername = process.env.DEV_AUTH_USERNAME;
      const devPassword = process.env.DEV_AUTH_PASSWORD;
      if (devUsername != null && devPassword != null) {
        const result2 = await authService.login(devUsername, devPassword);
        token = result2.auth_token;
      }
      if (typeof token !== "string")
        throw new DXTException(DXTErrorCode.INVALID_USERNAME_OR_PASSWORD);
    }
    token = token.trim();
    if (token.substring(0, 7) === "bearer ")
      token = token.substring(7).trim();
    const result = await authService.connect(token);
    if (result == null)
      throw new DXTException(DXTErrorCode.UNAUTHORIZED);
    req.auth = result;
  }
}
const authenticatedRootController = new AuthenticatedRootController();
class CustomerAndVendorRootController extends AuthenticatedRootController {
  async onRequest(req) {
    await super.onRequest(req);
    if (req.auth.user.role.isAdmin()) {
      throw new DXTException(DXTErrorCode.FORBIDDEN);
    }
  }
}
const customerAndVendorRootController = new CustomerAndVendorRootController();
class CustomerRootController extends AuthenticatedRootController {
  async onRequest(req) {
    await super.onRequest(req);
    if (!req.auth.user.role.isCustomer())
      throw new DXTException(DXTErrorCode.FORBIDDEN);
  }
}
const customerRootController = new CustomerRootController();
class VendorRootController extends AuthenticatedRootController {
  async onRequest(req) {
    await super.onRequest(req);
    if (!req.auth.user.role.isVendor())
      throw new DXTException(DXTErrorCode.FORBIDDEN);
  }
}
const vendorRootController = new VendorRootController();
const idClienteValidationOptions = {
  validation: {
    params: {
      id_cliente: integerValidator
    }
  }
};
const idPedidoValidationOptions = {
  validation: {
    params: {
      id_pedido: integerValidator
    },
    query: {
      delete_draft: optionalBooleanValidator
    }
  }
};
async function _startNew(user, createDraft) {
  const { tangoId, role } = user;
  if (tangoId == null || !role.isCustomer())
    throw new DXTException(DXTErrorCode.CUSTOMER_ROLE_REQUIRED);
  return await startPedido(user, {
    mode: StartPedidoMode.create,
    idCliente: tangoId.valueOf(),
    createDraft
  });
}
async function _startNewForCustomer(user, idCliente, createDraft) {
  const { tangoId, role } = user;
  if (tangoId == null || !role.isVendor())
    throw new DXTException(DXTErrorCode.VENDOR_ROLE_REQUIRED);
  return await startPedido(user, {
    mode: StartPedidoMode.create,
    idCliente,
    createDraft
  });
}
async function _startNewFromCopy(user, isDraft, idPedido, createDraft, deleteOriginal) {
  const finalDeleteOriginal = isDraft && !createDraft && deleteOriginal === true;
  return await startPedido(user, {
    mode: StartPedidoMode.createCopy,
    isDraft,
    idPedido,
    createDraft,
    deleteOriginal: finalDeleteOriginal
  });
}
const startNewDraftEndpoint = createApiEndpoint(
  customerRootController,
  void 0,
  async (req) => await _startNew(req.auth.user, true)
);
const startNewOrderEndpoint = createApiEndpoint(
  customerRootController,
  void 0,
  async (req) => await _startNew(req.auth.user, false)
);
const startNewOrderForCustomerEndpoint = createApiEndpoint(
  vendorRootController,
  idClienteValidationOptions,
  async (req) => await _startNewForCustomer(req.auth.user, req.validated.params.id_cliente, false)
);
const startNewDraftForCustomerEndpoint = createApiEndpoint(
  vendorRootController,
  idClienteValidationOptions,
  async (req) => await _startNewForCustomer(req.auth.user, req.validated.params.id_cliente, true)
);
const startOrderUpdateEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await startPedido(req.auth.user, {
    mode: StartPedidoMode.edit,
    isDraft: false,
    idPedido: req.validated.params.id_pedido
  })
);
const startDraftUpdateEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await startPedido(req.auth.user, {
    mode: StartPedidoMode.edit,
    isDraft: true,
    idPedido: req.validated.params.id_pedido
  })
);
const startNewOrderFromExistingOrderEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await _startNewFromCopy(req.auth.user, false, req.validated.params.id_pedido, false)
);
const startNewOrderFromExistingDraftEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await _startNewFromCopy(req.auth.user, true, req.validated.params.id_pedido, false, req.validated.query.delete_draft)
);
const startNewDraftFromExistingOrderEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await _startNewFromCopy(req.auth.user, false, req.validated.params.id_pedido, true)
);
const startNewDraftFromExistingDraftEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await _startNewFromCopy(req.auth.user, true, req.validated.params.id_pedido, true)
);
async function createOrUpdateOrder(user, customer, order) {
  const repository = order.saveDraft ? getDraftRepository(user) : pedidoRepository;
  if (order.idPedido != null) {
    return await repository.update(customer, order);
  }
  return await repository.create(customer, order);
}
var SaveOrderMode = /* @__PURE__ */ ((SaveOrderMode2) => {
  SaveOrderMode2[SaveOrderMode2["create"] = 0] = "create";
  SaveOrderMode2[SaveOrderMode2["update"] = 1] = "update";
  return SaveOrderMode2;
})(SaveOrderMode || {});
class DXTArticuloPrintListRepository extends DXTArticuloListRepository {
  constructor() {
    super({
      mainTable: DXT_ARTICULO_PRINT_LIST_TABLE,
      dependencies: [
        articuloRepository
      ]
    });
    this.mainColumns = [`${DXT_ARTICULO_PRINT_LIST_TABLE}.*`];
    this.articuloColumns = [ARTICULO_ID_FIELD].map((c) => `${ARTICULO_TABLE}.${c}`);
  }
  async getIdsWithParams(paramsToReturn) {
    const cacheKey = `ids_${paramsToReturn == null ? void 0 : paramsToReturn.join(".")}`;
    const resultFromCache = await this.cache.getMetadata(cacheKey);
    if (resultFromCache != null)
      return resultFromCache;
    const { mainTable } = this.config;
    const k = await this.getCompany();
    const rawData = await k(mainTable).select(...this.mainColumns, ...this.articuloColumns).innerJoin(ARTICULO_TABLE, `${mainTable}.${DXT_LIST_ARTICULO_CODE_FIELD}`, `${ARTICULO_TABLE}.${ARTICULO_CODE_FIELD}`).orderBy(DXT_LIST_ARTICULO_ID_FIELD);
    if (rawData == null)
      throw new DXTException(DXTErrorCode.NOT_FOUND);
    const data = rawData.map((m) => this.toArticuloIdResult(m, paramsToReturn));
    await this.cache.setMetadata(cacheKey, data);
    return data;
  }
  toArticuloIdResult(m, paramsToReturn) {
    const { [ARTICULO_ID_FIELD]: id_articulo } = m;
    const params = strToDXTArticuloListParams(m.params);
    if (paramsToReturn.length == 0) {
      if (params != null)
        return [id_articulo, params];
      return id_articulo;
    }
    const filteredParamsEntries = params == null ? null : Object.entries(params).filter(
      ([key, _2]) => paramsToReturn.includes(key)
    );
    if (filteredParamsEntries != null && filteredParamsEntries.length > 0) {
      return [id_articulo, Object.fromEntries(filteredParamsEntries)];
    }
    return id_articulo;
  }
}
const dxtArticuloPrintListRepository = new DXTArticuloPrintListRepository();
async function validateInputRows(user, originalOrder, customer, billingProfile, auxiliares, validatedOrderHeader, inputRows) {
  const articles = await getArticles(user, customer);
  const rawResult = inputRows.map((row) => _validateOrderRow(
    row,
    articles.get(row.id)
  ));
  await dxtArticuloPrintListRepository.getAll();
  const result = rawResult;
  const total = _calculateTotal(
    result
  );
  return {
    ...validatedOrderHeader,
    total,
    rows: result
  };
}
function _validateOrderRow(row, article) {
  const {
    quantity
  } = row;
  if (article == null)
    throw new DXTException(DXTErrorCode.INACCESIBLE_ORDER_ROW_ARTICLE);
  const {
    id,
    codigo,
    precio,
    bonificacion,
    id_medida_stock,
    id_medida_stock_2,
    id_medida_ventas
  } = article;
  return {
    idArticle: id,
    codeArticle: codigo,
    quantity,
    price: precio,
    discount: bonificacion,
    idMedidaStock: id_medida_stock,
    idMedidaStock2: id_medida_stock_2,
    idMedidaVentas: id_medida_ventas,
    unidadMedidaSeleccionada: "P"
  };
}
function _calculateTotal(rows) {
  let total = 0;
  rows.forEach((row) => {
    total += row.quantity * (row.price ?? 0);
  });
  return total;
}
async function validateInputHeader(user, originalOrder, customer, params, billingProfile, auxiliares) {
  const {
    mode: mode2,
    saveDraft,
    input
  } = params;
  const createNew = mode2 == SaveOrderMode.create;
  if (saveDraft) {
    const dxtPedidoDraftRepository = getDraftRepository(user);
    const draftIdToIgnore = !createNew ? params.idPedido : null;
    const descriptionExists = await dxtPedidoDraftRepository.descriptionExists(
      user,
      input.descripcion,
      draftIdToIgnore
    );
    if (descriptionExists)
      throw new DXTException(DXTErrorCode.DUPLICATED_DRAFT_DESCRIPTION);
  }
  const {
    comentarios,
    renglones
  } = input;
  const starDraft = saveDraft;
  const initialOrderHeader = await prepareOrderHeader(
    user,
    originalOrder,
    customer,
    billingProfile,
    auxiliares,
    createNew,
    starDraft
  );
  const {
    id_asiento_modelo_gv,
    transportes,
    depositos,
    condiciones,
    asientos,
    talonarios,
    direcciones,
    transporte_editable,
    deposito_editable,
    condicion_editable,
    asiento_editable,
    talonario_editable,
    direccion_editable,
    bonificacion_editable
  } = initialOrderHeader;
  const estado = user.aprobarPedidoAlCrear.valueOf() ? EstadoPedido.APROBADO : EstadoPedido.INGRESADO;
  const {
    compromete_stock
  } = billingProfile;
  const [idTransporte, codigoTransporte] = _checkSelection(transportes, transporte_editable, input.id_transporte, DXTErrorCode.INVALID_TRANSPORTE);
  const [idDeposito, codigoDeposito] = _checkSelection(depositos, deposito_editable, input.id_deposito, DXTErrorCode.INVALID_DEPOSITO);
  const [idCondicion, codigoCondicion] = _checkSelection(condiciones, condicion_editable, input.id_condicion, DXTErrorCode.INVALID_CONDICION);
  const [idAsiento, codigoAsiento] = _checkSelection(asientos, asiento_editable, input.id_asiento, DXTErrorCode.INVALID_ASIENTO);
  const [idTalonario, codigoTalonario] = _checkSelection(talonarios, talonario_editable, input.id_talonario, DXTErrorCode.INVALID_TALONARIO);
  const idDireccionDeEntrega = direcciones[0].id;
  const validatedDiscount = limitNumber(
    bonificacion_editable ? input.bonificacion : initialOrderHeader.bonificacion,
    0,
    100
  );
  const validatedOrderHeader = {
    idTransporte,
    codigoTransporte,
    idDeposito,
    codigoDeposito,
    idCondicion,
    codigoCondicion,
    idAsiento,
    codigoAsiento,
    idTalonario,
    codigoTalonario,
    idDireccionDeEntrega,
    bonificacion: validatedDiscount,
    comentarios,
    comprometeStock: compromete_stock,
    estado,
    idAsientoModeloGV: id_asiento_modelo_gv
  };
  return validatedOrderHeader;
}
function _checkSelection(list, isEditable, selectedId, errorCode) {
  const pickFirst = !isEditable;
  const index = list.findIndex((item) => pickFirst || item.id == selectedId);
  if (index < 0)
    throw new DXTException(errorCode);
  return [
    list[index].id,
    list[index].code
  ];
}
async function validateInputParams(user, originalOrder, customer, params) {
  const auxiliares = await getAuxiliares(customer.id);
  const billingProfile = await getOptimalBillingProfile(
    user,
    originalOrder,
    customer
  );
  const validatedOrderHeader = await validateInputHeader(
    user,
    originalOrder,
    customer,
    params,
    billingProfile,
    auxiliares
  );
  const validatedOrder = await validateInputRows(
    user,
    originalOrder,
    customer,
    billingProfile,
    auxiliares,
    validatedOrderHeader,
    params.input.renglones
  );
  const {
    mode: mode2,
    saveDraft,
    input
  } = params;
  const idPedido = mode2 == SaveOrderMode.update ? params.idPedido : null;
  if (saveDraft) {
    const descripcion = input.descripcion;
    return {
      ...validatedOrder,
      saveDraft,
      idPedido,
      descripcion
    };
  }
  const realOrder = (originalOrder == null ? void 0 : originalOrder.isDraft) === false ? originalOrder : null;
  const fechaIngreso = (realOrder == null ? void 0 : realOrder.header.fecha_ingreso) ?? /* @__PURE__ */ new Date();
  const fechaPedido = input.fecha_alta;
  const fechaEntrega = input.fecha_entrega;
  return {
    ...validatedOrder,
    saveDraft,
    idPedido,
    fechaIngreso,
    fechaPedido,
    fechaEntrega
  };
}
async function deleteDraft(user, idDraft) {
  await getOrderWithRows(idDraft, user, true, true, true);
  await getDraftRepository(user).deleteById(idDraft);
}
async function savePedido(user, params) {
  var _a2;
  const { mode: mode2, saveDraft, input } = params;
  const createNew = mode2 == SaveOrderMode.create;
  if (user.isAdmin())
    throw new DXTException(DXTErrorCode.CUSTOMER_OR_VENDOR_ROLE_REQUIRED);
  if (createNew && !user.puedeCrearPedido.valueOf())
    throw new DXTException(DXTErrorCode.USER_CANNOT_CREATE_ORDERS);
  if (!createNew && !user.puedeEditarPedido.valueOf())
    throw new DXTException(DXTErrorCode.USER_CANNOT_UPDATE_ORDERS);
  const originalIsDraft = mode2 == SaveOrderMode.update && saveDraft;
  const originalOrder = mode2 == SaveOrderMode.update ? await getOrderWithRows(input.id_pedido, user, originalIsDraft, false, false) : null;
  if (originalOrder != null && originalOrder.header.estado != EstadoPedido.INGRESADO) {
    throw new DXTException(DXTErrorCode.USER_CANNOT_UPDATE_ORDER_IN_CURRENT_STATUS);
  }
  const idCliente = mode2 == SaveOrderMode.update ? originalOrder.header.id_cliente : input.id_cliente;
  const customer = await clienteRepository.getExtendedById(idCliente);
  const idCustomerVendedor = customer.idVendedor;
  if (user.isVendor() && idCustomerVendedor != ((_a2 = user.vendedorId) == null ? void 0 : _a2.valueOf()))
    throw new DXTException(DXTErrorCode.CUSTOMER_DOES_NOT_BELONGS_TO_VENDOR);
  const validatedOrder = await validateInputParams(
    user,
    originalOrder,
    customer,
    params
  );
  const result = await createOrUpdateOrder(user, customer, validatedOrder);
  if (params.mode == SaveOrderMode.create && !params.saveDraft && params.draftIdToDelete != null) {
    await deleteDraft(
      user,
      params.draftIdToDelete
    );
  }
  return result;
}
const createOrderEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  {
    validation: {
      body: validateCreateOrderInput,
      query: {
        draft_id_to_delete: optionalIntegerValidator
      }
    }
  },
  async (req) => await savePedido(req.auth.user, {
    mode: SaveOrderMode.create,
    saveDraft: false,
    input: req.validated.body,
    draftIdToDelete: req.validated.query.draft_id_to_delete
  })
);
const createDraftEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  {
    validation: {
      body: validateCreateDraftInput
    }
  },
  async (req) => await savePedido(req.auth.user, {
    mode: SaveOrderMode.create,
    saveDraft: true,
    input: req.validated.body
  })
);
const paginationOffsetValidator = (v) => v != null ? new VOIntegerRange(v, 0, 1e9).valueOf() : void 0;
const paginationLimitValidator = (v) => v != null ? new VOIntegerRange(v, 1, 1e3).valueOf() : void 0;
const tangoIdValidator = (v) => new VOUInt32(v).valueOf();
const updateOrderEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  {
    validation: {
      params: { id_pedido: tangoIdValidator },
      body: validateUpdateOrderInput
    }
  },
  async (req) => await savePedido(req.auth.user, {
    mode: SaveOrderMode.update,
    saveDraft: false,
    idPedido: req.validated.params.id_pedido,
    input: req.validated.body
  })
);
const updateDraftEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  {
    validation: {
      params: { id_pedido: tangoIdValidator },
      body: validateUpdateDraftInput
    }
  },
  async (req) => await savePedido(req.auth.user, {
    mode: SaveOrderMode.update,
    saveDraft: true,
    idPedido: req.validated.params.id_pedido,
    input: req.validated.body
  })
);
async function cancelPedido(user, idPedido) {
  const deleteOrder = user.borrarPedidoAlAnular.valueOf();
  if (!user.puedeAnularPedido.valueOf()) {
    if (deleteOrder)
      throw new DXTException(DXTErrorCode.USER_CANNOT_DELETE_ORDERS);
    throw new DXTException(DXTErrorCode.USER_CANNOT_CANCEL_ORDERS);
  }
  const pedidoOriginal = await getOrderWithRows(idPedido, user, false, true, true);
  const { header } = pedidoOriginal;
  const currentStatus = header.estado;
  const canCancelOrDelete = isUserAllowedToCancelOrDeleteOrder(user, currentStatus);
  if (!canCancelOrDelete) {
    if (deleteOrder)
      throw new DXTException(DXTErrorCode.USER_CANNOT_DELETE_ORDER_IN_CURRENT_STATUS);
    throw new DXTException(DXTErrorCode.USER_CANNOT_CANCEL_ORDER_IN_CURRENT_STATUS);
  }
  if (deleteOrder) {
    await pedidoRepository.deleteById(idPedido);
  } else {
    await pedidoRepository.cancel(idPedido);
  }
}
const cancelOrderEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => {
    await cancelPedido(req.auth.user, req.validated.params.id_pedido);
    return { ok: true };
  }
);
const cancelDraftEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => {
    await deleteDraft(req.auth.user, req.validated.params.id_pedido);
    return { ok: true };
  }
);
async function getAllPedidos(user, draft) {
  var _a2;
  user.role.valueOf();
  (_a2 = user.tangoId) == null ? void 0 : _a2.valueOf();
  if (draft) {
    const result2 = await getDraftRepository(user).getAllByUser(user);
    return result2;
  }
  const result = await pedidoRepository.getAllByUser(user);
  return _filterVisibleOrders(user, result);
}
function _filterVisibleOrders(user, orders) {
  const verPedidosCumplidos = user.verPedidosCumplidos.valueOf();
  return orders.filter((pedido) => {
    const { estado } = pedido;
    if (estado == EstadoPedido.ANULADO || estado == EstadoPedido.INVALIDO)
      return false;
    if (estado == EstadoPedido.CERRADO || estado == EstadoPedido.CUMPLIDO) {
      return verPedidosCumplidos;
    }
    return true;
  });
}
const getAllOrdersEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => await getAllPedidos(req.auth.user, false)
);
const getAllDraftsEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => await getAllPedidos(req.auth.user, true)
);
async function getAllRowsPedidos(user, draft) {
  const repository = draft ? getDraftRowRepository(user) : renglonPedidoRepository;
  const result = await repository.getAllByUser(user);
  return result;
}
const getOrderRowsEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => await getAllRowsPedidos(req.auth.user, false)
);
const getDraftRowsEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => await getAllRowsPedidos(req.auth.user, true)
);
async function loader$C({ request, params }) {
  return await startNewDraftFromExistingOrderEndpoint.get(request, params);
}
const action$C = unimplementedApiResponse;
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$C,
  loader: loader$C
}, Symbol.toStringTag, { value: "Module" }));
async function loader$B({ request, params }) {
  return await startNewOrderFromExistingDraftEndpoint.get(request, params);
}
const action$B = unimplementedApiResponse;
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$B,
  loader: loader$B
}, Symbol.toStringTag, { value: "Module" }));
const useCustomValidationSchema$3 = () => {
  const [passwordStatus, setPasswordStatus] = useState(null);
  const customValidationSchema = yup.object({
    password: yup.string().required("Ingrese una contraseña").test("password", "Formato de contraseña no válido", (v) => {
      if (v != "" && v != null) {
        let newPasswordStatus = dxtPasswordStatus(v);
        if (!_.isEqual(passwordStatus, newPasswordStatus))
          setPasswordStatus(newPasswordStatus);
        return yupVOValidation(VODXTPassword, v);
      }
      return true;
    })
  }).required();
  const yupValidationSchema2 = commonValidationSchema.concat(customValidationSchema);
  return { yupValidationSchema: yupValidationSchema2, passwordStatus };
};
const Success$9 = (props) => {
  var _a2, _b2;
  const { typeSettings } = props;
  const app = useAppResources();
  const toast = useToast();
  const { yupValidationSchema: yupValidationSchema2, passwordStatus } = useCustomValidationSchema$3();
  const { state: statePerfiles, result: resultPerfiles } = useTangoList({
    endpoint: API_TANGO_PERFIL_GET_ALL,
    fieldsMap: {
      label: "name",
      value: "id"
    }
  });
  const { state: stateRelationship, result: resultRelationship } = typeSettings.api.getRelation();
  const {
    handleSubmit,
    control,
    setError,
    resetField,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      tango_id: 0,
      perfil_facturacion_id: 0,
      habilitado_en_dxt: true,
      puede_crear_pedido: true,
      puede_editar_pedido: true,
      ver_pedidos_cumplidos: true,
      ver_sin_precio: false,
      mostrar_mensaje_de_advertencia: false,
      puede_anular_pedido: false,
      borrar_pedido_al_anular: false,
      aprobar_pedido_al_crear: false,
      dia_de_entrega: DIAS_DE_ENTREGA_DEFAULT
    },
    resolver: yupResolver(yupValidationSchema2)
  });
  const watchPuedeAnularPedido = watch("puede_anular_pedido");
  useEffect(() => {
    if (watchPuedeAnularPedido === false)
      resetField("borrar_pedido_al_anular", { defaultValue: false });
  }, [watchPuedeAnularPedido]);
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const { ...data } = dataUnsafe;
    if (data.email === "")
      delete data.email;
    const input = data;
    const result = await typeSettings.api.post(input, app);
    result.map({
      success: (_2) => {
        toast({
          title: USER_CREATED,
          status: "success"
        });
        app.navigate(URL_SETTINGS_CUSTOMERS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  return /* @__PURE__ */ jsx("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FormErrors, { errors }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Información del Cliente" }) }),
          /* @__PURE__ */ jsxs(GridItem, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx(
              ControlledSelect,
              {
                fieldProps: {
                  name: "tango_id",
                  placeholder: (_a2 = typeSettings.tangoRelatedFields) == null ? void 0 : _a2.placeholder,
                  options: resultRelationship,
                  noOptionsMessage(obj) {
                    var _a3;
                    return (_a3 = typeSettings.tangoRelatedFields) == null ? void 0 : _a3.empty;
                  },
                  isSearchable: true,
                  selectedOptionStyle: "check",
                  isLoading: stateRelationship instanceof FetchStateLoading,
                  virtualized: true
                },
                formControlProps: {
                  isDisabled: disableForm || !(stateRelationship instanceof FetchStateSuccess)
                },
                formControlInnerProps: {
                  label: (_b2 = typeSettings.tangoRelatedFields) == null ? void 0 : _b2.label
                },
                control
              }
            ),
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "username",
                id: "username",
                type: "text"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Nombre de Usuario"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            PasswordWithStatus,
            {
              fieldProps: {
                name: "password",
                id: "password"
              },
              formControlInnerProps: {
                label: "Contraseña"
              },
              passwordStatus,
              disableForm,
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "email",
                id: "email",
                type: "text",
                inputMode: "email"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Correo electrónico"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsxs(GridItem, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx(
              ControlledSelect,
              {
                fieldProps: {
                  name: "perfil_facturacion_id",
                  placeholder: "Seleccione un perfil",
                  options: resultPerfiles,
                  noOptionsMessage(obj) {
                    return "No hay perfiles disponibles";
                  },
                  isLoading: statePerfiles instanceof FetchStateLoading,
                  selectedOptionStyle: "check"
                },
                formControlProps: {
                  isDisabled: disableForm || !(statePerfiles instanceof FetchStateSuccess)
                },
                formControlInnerProps: {
                  label: "Perfil de facturación"
                },
                control
              }
            ),
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(
            ControlledRadio,
            {
              fieldProps: {
                name: "habilitado_en_dxt",
                options: [
                  {
                    value: true,
                    label: "Establecido en Tango"
                  },
                  {
                    value: false,
                    label: "Deshabilitado"
                  }
                ]
              },
              formControlProps: {
                isDisabled: disableForm
              },
              radioProps: {
                size: { base: "sm", sm: "md" }
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Comunicación" }) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledSwitch,
            {
              fieldProps: {
                name: "mostrar_mensaje_de_advertencia",
                id: "mostrar_mensaje_de_advertencia"
              },
              formControlProps: {
                width: "auto",
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Mostrar mensaje de advertencia"
              },
              control
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs(Stack, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_crear_pedido",
                  id: "puede_crear_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede crear pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_editar_pedido",
                  id: "puede_editar_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede editar pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_anular_pedido",
                  id: "puede_anular_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede anular pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "borrar_pedido_al_anular",
                  id: "borrar_pedido_al_anular"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Borrar pedido al anular"
                },
                control,
                watch: {
                  isDisabled: watchPuedeAnularPedido === false,
                  ...watchPuedeAnularPedido === false && {
                    isChecked: false
                  }
                }
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "aprobar_pedido_al_crear",
                  id: "aprobar_pedido_al_crear"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Los pedidos se aprueban al crearlos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "ver_pedidos_cumplidos",
                  id: "ver_pedidos_cumplidos"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede ver los pedidos cumplidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "ver_sin_precio",
                  id: "ver_sin_precio"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede ver artículos sin precios"
                },
                control
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "dia_de_entrega",
                id: "dia_de_entrega",
                type: "number",
                inputMode: "tel"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Tiempo de entrega de pedidos",
                helperText: "Expresado en días"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsx(
      SettingsFormsButtons,
      {
        buttonActionText: "Guardar",
        isLoading: disableForm,
        buttonCancelUrl: typeSettings.cancelButtonNavigateTo
      }
    ) })
  ] }) });
};
const Form$1 = (props) => {
  const { typeSettings } = props;
  return /* @__PURE__ */ jsx(Success$9, { typeSettings });
};
function Add$1() {
  const typeSettings = settings$1.customers;
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SettingsFormHeading,
      {
        title: typeSettings.titles.create,
        returnButton: {
          buttonProps: {
            onClick: () => {
              navigate(URL_SETTINGS_CUSTOMERS_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(Form$1, { typeSettings })
  ] });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Add$1
}, Symbol.toStringTag, { value: "Module" }));
const API_DXT_ARTICULO_PRINT_LIST = apiEndpoint("/dxt/articulo/print_list", "GET");
const API_DXT_ARTICULO_PRINT_LIST_UPDATE = apiEndpoint("/dxt/articulo/print_list", "POST");
const API_DXT_ARTICULO_EDIT_LIST = apiEndpoint("/dxt/articulo/edit_list", "GET");
const API_DXT_ARTICULO_EDIT_LIST_UPDATE = apiEndpoint("/dxt/articulo/edit_list", "POST");
apiEndpoint("/dxt/articulo/print_list/ids", "GET");
const dxtArticuloPrintListUpdateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      ...API_DXT_ARTICULO_PRINT_LIST_UPDATE,
      data: input,
      silent: true
    },
    app
  );
};
const dxtArticuloEditListUpdateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      ...API_DXT_ARTICULO_EDIT_LIST_UPDATE,
      data: input,
      silent: true
    },
    app
  );
};
function useGetDXTArticuloEditList() {
  return useDXTApiFetch({
    ...API_DXT_ARTICULO_EDIT_LIST,
    silent: true
  });
}
function useGetDXTArticuloPrintList() {
  return useDXTApiFetch({
    ...API_DXT_ARTICULO_PRINT_LIST,
    silent: true
  });
}
const settings = {
  edit: {
    api: {
      getAll: useGetDXTArticuloEditList,
      post: dxtArticuloEditListUpdateRequest
    },
    title: PRODUCT_EDIT_LIST,
    description: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Ingrese en la lista los códigos de artículo en el órden en quedesea que aparezcan durante la creación o edición de un pedido.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "Cualquier línea que ingrese, que no contenga ningún código de artículo, será considerada como título de grupo."
    ] })
  },
  print: {
    api: {
      getAll: useGetDXTArticuloPrintList,
      post: dxtArticuloPrintListUpdateRequest
    },
    title: PRODUCT_PRINT_LIST,
    description: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Ingrese en la lista los códigos de artículo en el órden en que desea que aparezcan durante la impresión de un pedido.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      "Cualquier línea que ingrese, que no contenga ningún código de artículo, será considerada como título de grupo."
    ] })
  }
};
const Loading$6 = (props) => {
  const { typeSettings } = props;
  return /* @__PURE__ */ jsx(
    Box,
    {
      width: "full",
      sx: {
        mt: 8,
        mb: 4
      },
      children: /* @__PURE__ */ jsxs(
        Grid,
        {
          templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
          alignItems: "start",
          gap: 4,
          children: [
            /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormTextareaSkeleton, { height: "380px" }) }),
            /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(Text, { fontSize: "sm", children: typeSettings.description }) }),
            /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) })
          ]
        }
      )
    }
  );
};
const ControlledTextarea = (props) => {
  const { fieldProps, formControlProps, formControlInnerProps, control } = props;
  const { label, helperText, icon } = formControlInnerProps || {};
  const {
    field: { ref, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs(FormControl, { ...formControlProps, isInvalid: invalid, children: [
    label != null && /* @__PURE__ */ jsx(
      FormLabel,
      {
        htmlFor: fieldProps.name,
        sx: fieldProps.variant === "flushed" ? { fontSize: "sm", mb: 0 } : {},
        children: label
      }
    ),
    /* @__PURE__ */ jsx(Textarea, { ...fieldProps, onChange, value, ref }),
    helperText != null && /* @__PURE__ */ jsx(FormHelperText, { children: helperText })
  ] });
};
const yupValidationSchema$3 = yup.object({
  list: yup.string().default("").test("avoid-ARTICLE_GROUP_NO_NAME", `Evite utilizar ${ARTICLE_GROUP_NO_NAME}`, function(value) {
    const regex = /(^|[^a-zA-Z0-9])_([^a-zA-Z0-9]|$)/;
    return !regex.test(value);
  })
}).required();
const Success$8 = (props) => {
  const { stateData, typeSettings } = props;
  const app = useAppResources();
  const toast = useToast();
  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({
    defaultValues: {
      list: (stateData == null ? void 0 : stateData.join("\r\n")) || ""
    },
    resolver: yupResolver(yupValidationSchema$3)
  });
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const input = { data: dataUnsafe.list.split("\n") };
    const result = await typeSettings.api.post(input, app);
    result.map({
      success: (_2) => {
        toast({
          title: LIST_UPDATED,
          status: "success"
        });
        app.navigate(URL_SETTINGS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  return /* @__PURE__ */ jsx("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FormErrors, { errors }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledTextarea,
            {
              fieldProps: {
                name: "list",
                id: "list",
                rows: 20,
                fontSize: "sm"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(Text, { fontSize: "sm", children: typeSettings.description }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsx(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};
const FormLists = (props) => {
  const { typeSettings } = props;
  const { state, retry } = typeSettings.api.getAll();
  return state.map({
    loading: (_2) => /* @__PURE__ */ jsx(Loading$6, { typeSettings }),
    error: ({ error }) => /* @__PURE__ */ jsx(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx(Success$8, { stateData: state2.data, typeSettings })
  });
};
function Lists$1() {
  const navigate = useNavigate();
  const { type } = useParams();
  const typeSettings = settings[type];
  if (type != null && typeSettings != null) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        SettingsFormHeading,
        {
          title: typeSettings.title,
          returnButton: {
            buttonProps: {
              onClick: () => {
                navigate(URL_SETTINGS_PATH);
              }
            }
          }
        }
      ),
      /* @__PURE__ */ jsx(FormLists, { typeSettings })
    ] });
  }
  return /* @__PURE__ */ jsx(
    CommonErrors,
    {
      error: INVALID_LIST_TYPE,
      buttonProps: {
        label: BACK_TO_SETTINGS,
        colorScheme: "green",
        onClick: () => {
          navigate(URL_SETTINGS_PATH);
        }
      }
    }
  );
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lists$1
}, Symbol.toStringTag, { value: "Module" }));
const Loading$5 = () => {
  return /* @__PURE__ */ jsx(
    Box,
    {
      width: "full",
      sx: {
        mt: 8,
        mb: 4
      },
      children: /* @__PURE__ */ jsxs(Grid, { templateColumns: "1fr", gap: { base: 2, md: 4 }, children: [
        /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
        /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
        /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormTextareaSkeleton, { height: "400px" }) }),
        /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) })
      ] })
    }
  );
};
function useSearchField(data, fieldsToFilter) {
  const [state, setState] = useState({
    filteredData: data,
    query: null
  });
  useEffect(() => {
    const { query: query2 } = state;
    const filteredData2 = _filter(
      data,
      query2,
      fieldsToFilter
    );
    setState({
      filteredData: filteredData2,
      query: query2
    });
  }, [data]);
  const handleSearchInputChange = (query2) => {
    const filteredData2 = _filter(
      data,
      query2,
      fieldsToFilter
    );
    setState({
      filteredData: filteredData2,
      query: query2 ?? null
    });
  };
  const { filteredData, query } = state;
  return {
    filteredData,
    handleSearchInputChange,
    isFiltering: query != null && query != ""
  };
}
function _filter(data, query, fieldsToFilter) {
  if (_.isArray(data)) {
    if (query == null)
      return [...data];
    const filteredData = _.filter(data, (obj) => {
      return _.some(fieldsToFilter, (prop) => {
        return String(_.get(obj, prop)).toLowerCase().includes(query.toLowerCase());
      });
    });
    return filteredData;
  }
  if (_.isObject(data)) {
    if (query == null)
      return { ...data };
    const filteredData = {};
    _.forEach(data, (array, key) => {
      const filteredArray = _.filter(array, (obj) => {
        return _.some(fieldsToFilter, (prop) => {
          return String(_.get(obj, prop)).toLowerCase().includes(query.toLowerCase());
        });
      });
      filteredData[key] = filteredArray;
    });
    return filteredData;
  }
  return data;
}
const DeleteDialog = ({
  isOpen,
  onClose,
  handleDeletion,
  message
}) => {
  const cancelRef = useRef();
  return /* @__PURE__ */ jsx(
    AlertDialog,
    {
      isOpen,
      leastDestructiveRef: cancelRef,
      onClose,
      motionPreset: "slideInBottom",
      isCentered: true,
      children: /* @__PURE__ */ jsx(AlertDialogOverlay, { children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
        /* @__PURE__ */ jsx(AlertDialogHeader, { fontSize: "lg", fontWeight: "bold", children: message.title }),
        /* @__PURE__ */ jsx(AlertDialogBody, { children: message.body }),
        /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
          /* @__PURE__ */ jsx(Button, { ref: cancelRef, onClick: onClose, children: CANCEL }),
          /* @__PURE__ */ jsx(Button, { colorScheme: "red", onClick: handleDeletion, ml: 3, children: DELETE })
        ] })
      ] }) })
    }
  );
};
const DOTS_LEFT = "{left}";
const DOTS_RIGHT = "{right}";
const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_2, idx) => idx + start);
};
const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
  const paginationRange = useMemo(() => {
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
const Pagination = (props) => {
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
  return /* @__PURE__ */ jsxs(VStack, { children: [
    /* @__PURE__ */ jsx(HStack, { spacing: 1, wrap: "wrap", justifyContent: "center", children: paginationRange.map((pageNumber) => {
      if (pageNumber === DOTS_LEFT || pageNumber === DOTS_RIGHT) {
        return /* @__PURE__ */ jsx(
          Icon,
          {
            as: DotsHorizontalIcon,
            boxSize: 3
          },
          `page-${pageNumber}`
        );
      }
      return /* @__PURE__ */ jsx(
        Button,
        {
          colorScheme: pageNumber === currentPage ? "blue" : "gray",
          size: { base: "sm", md: "md" },
          onClick: () => onPageChange(pageNumber),
          children: pageNumber
        },
        `button-${pageNumber}`
      );
    }) }),
    /* @__PURE__ */ jsxs(HStack, { children: [
      /* @__PURE__ */ jsx(
        IconButton,
        {
          "aria-label": PREVIOUS,
          size: { base: "sm", md: "md" },
          onClick: onPrevious,
          isDisabled: currentPage === 1,
          children: /* @__PURE__ */ jsx(Icon, { as: ChevronLeftIcon })
        }
      ),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          "aria-label": NEXT,
          size: { base: "sm", md: "md" },
          onClick: onNext,
          isDisabled: currentPage === lastPage,
          children: /* @__PURE__ */ jsx(Icon, { as: ChevronRightIcon })
        }
      )
    ] })
  ] });
};
const SearchField = ({
  handleSearchInputChange,
  inputProps
}) => {
  const [searchValue, setSearchValue] = useState(null);
  const inputRef = useRef(null);
  const inputChangeRef = useRef();
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
    }, 500);
  };
  return /* @__PURE__ */ jsxs(InputGroup, { children: [
    /* @__PURE__ */ jsx(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ jsx(Icon, { as: MagnifyIcon, boxSize: 4 }) }),
    /* @__PURE__ */ jsx(
      Input,
      {
        ref: inputRef,
        type: "text",
        name: "filter",
        placeholder: FILTER_PLACEHOLDER,
        value: searchValue ?? "",
        autoCapitalize: "off",
        onChange: handleOnChange,
        ...inputProps
      }
    ),
    searchValue !== "" && searchValue != null ? /* @__PURE__ */ jsx(InputRightElement, { cursor: "pointer", children: /* @__PURE__ */ jsx(Icon, { as: CloseIcon, onClick: handleSearchReset }) }) : /* @__PURE__ */ jsx(InputRightElement, {})
  ] });
};
const TextWordBreak = ({
  children,
  breakType,
  props
}) => {
  return /* @__PURE__ */ jsx(
    Text,
    {
      ...props,
      sx: {
        whiteSpace: "normal",
        wordBreak: breakType ?? "break-all"
      },
      children
    }
  );
};
const Success$7 = (props) => {
  const { stateData, retry, typeSettings } = props;
  const app = useAppResources();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const selectedUser = useRef(null);
  const { filteredData, handleSearchInputChange, isFiltering } = useSearchField(stateData, [
    "screen_name",
    "username"
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = 10;
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData]);
  const handleDeleteDialog = (id, username) => () => {
    selectedUser.current = { id, username };
    onOpen();
  };
  const handleEdit = (id) => () => {
    app.navigate(pathParamsToUrl(typeSettings.editButtonNavigateTo, { id }));
  };
  const handleDeletion = async () => {
    if (selectedUser.current != null) {
      const { id, username } = selectedUser.current;
      selectedUser.current = null;
      const result = await typeSettings.api.delete(id, { username }, app);
      result.map({
        success: (_2) => {
          toast({
            title: USER_DELETED,
            status: "success"
          });
          stateData.splice(
            stateData.findIndex((object) => {
              return object.id === id;
            }),
            1
          );
          handleSearchInputChange();
        },
        error: (e) => {
          toast({
            title: AN_ERROR_OCCURRED,
            status: "error"
          });
        }
      });
      onClose();
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      DeleteDialog,
      {
        isOpen,
        onClose,
        handleDeletion,
        message: {
          title: USER_DELETE,
          body: USER_DELETE_CONFIRM
        }
      }
    ),
    /* @__PURE__ */ jsxs(CommonCard, { children: [
      /* @__PURE__ */ jsx(Box, { sx: { pb: 4 }, children: /* @__PURE__ */ jsx(SearchField, { handleSearchInputChange }) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Table, { variant: "grayOverCard", size: "md", children: [
        /* @__PURE__ */ jsx(Thead, { children: /* @__PURE__ */ jsx(Tr, { children: /* @__PURE__ */ jsx(
          Th,
          {
            sx: {
              p: { base: 2, md: 4 }
            },
            children: /* @__PURE__ */ jsxs(
              Grid,
              {
                templateColumns: {
                  base: "3fr 1fr 2fr",
                  md: "3fr 3fr 1fr 2fr"
                },
                gap: { base: 2, md: 4 },
                children: [
                  /* @__PURE__ */ jsx(GridItem, { children: "Nombre completo" }),
                  /* @__PURE__ */ jsx(GridItem, { sx: { display: { base: "none", md: "block" } }, children: "Nombre de usuario" }),
                  /* @__PURE__ */ jsx(GridItem, { textAlign: "center", children: "Estado" }),
                  /* @__PURE__ */ jsx(GridItem, {})
                ]
              }
            )
          }
        ) }) }),
        /* @__PURE__ */ jsx(Tbody, { children: currentTableData.length > 0 ? currentTableData.map((user) => /* @__PURE__ */ jsx(Tr, { children: /* @__PURE__ */ jsx(
          Td,
          {
            sx: {
              p: { base: 2, md: 4 }
            },
            children: /* @__PURE__ */ jsxs(
              Grid,
              {
                templateColumns: {
                  base: "3fr 1fr 2fr",
                  md: "3fr 3fr 1fr 2fr"
                },
                gap: { base: 2, md: 4 },
                alignItems: "center",
                children: [
                  /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(TextWordBreak, { breakType: "normal", children: user.screen_name }) }),
                  /* @__PURE__ */ jsx(
                    GridItem,
                    {
                      sx: { display: { base: "none", md: "block" } },
                      children: /* @__PURE__ */ jsx(TextWordBreak, { breakType: "normal", children: user.username })
                    }
                  ),
                  /* @__PURE__ */ jsx(GridItem, { textAlign: "center", children: /* @__PURE__ */ jsx(
                    Icon,
                    {
                      as: user.habilitado_en_dxt && user.usuario_tango_existe && user.habilitado_en_tango === true ? AccountCheckIcon : AccountCancelIcon,
                      boxSize: 6,
                      color: resolveUserStatusColor(user)
                    }
                  ) }),
                  /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsxs(HStack, { justifyContent: "center", children: [
                    /* @__PURE__ */ jsx(
                      IconButton,
                      {
                        "aria-label": "Eliminar",
                        size: "sm",
                        colorScheme: "red",
                        onClick: handleDeleteDialog(
                          user.id,
                          user.username
                        ),
                        children: /* @__PURE__ */ jsx(Icon, { as: TrashIcon, boxSize: 4 })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      IconButton,
                      {
                        "aria-label": "Editar",
                        size: "sm",
                        colorScheme: "blue",
                        onClick: handleEdit(user.id),
                        children: /* @__PURE__ */ jsx(Icon, { as: PencilIcon, boxSize: 4 })
                      }
                    )
                  ] }) })
                ]
              }
            )
          }
        ) }, `row_${user.id}`)) : /* @__PURE__ */ jsx(Tr, { children: /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsxs(Alert, { status: "info", children: [
          /* @__PURE__ */ jsx(AlertIcon, {}),
          /* @__PURE__ */ jsx(AlertDescription, { children: isFiltering ? FILTER_NO_RESULTS : NO_USERS })
        ] }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsx(Flex, { sx: { pt: 4, justifyContent: "center" }, children: /* @__PURE__ */ jsx(
        Pagination,
        {
          currentPage,
          totalCount: filteredData.length,
          pageSize: PageSize,
          onPageChange: (page) => setCurrentPage(page)
        }
      ) })
    ] })
  ] });
};
const ListsUsers = (props) => {
  const { typeSettings } = props;
  const { state, retry } = typeSettings.api.getAll();
  return state.map({
    loading: (_2) => /* @__PURE__ */ jsx(Loading$5, {}),
    error: ({ error }) => /* @__PURE__ */ jsx(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx(
      Success$7,
      {
        stateData: state2.data,
        retry,
        typeSettings
      }
    )
  });
};
function Lists() {
  const navigate = useNavigate();
  const { type } = useParams();
  const typeSettings = settings$1[type];
  if (type != null && typeSettings != null) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        SettingsFormHeading,
        {
          title: typeSettings.titles.common,
          returnButton: {
            buttonProps: {
              onClick: () => {
                navigate(URL_SETTINGS_PATH);
              }
            }
          },
          actionButton: {
            label: typeSettings.titles.create,
            icon: AccountPlusIcon,
            buttonProps: {
              onClick: () => {
                if (typeSettings.actionButtonNavigateTo != null)
                  navigate(typeSettings.actionButtonNavigateTo);
              }
            }
          }
        }
      ),
      /* @__PURE__ */ jsx(ListsUsers, { typeSettings })
    ] });
  }
  return /* @__PURE__ */ jsx(
    CommonErrors,
    {
      error: INVALID_LIST_TYPE,
      buttonProps: {
        label: BACK_TO_SETTINGS,
        colorScheme: "green",
        onClick: () => {
          navigate(URL_SETTINGS_PATH);
        }
      }
    }
  );
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lists
}, Symbol.toStringTag, { value: "Module" }));
const API_PEDIDO_GET_ALL = apiEndpoint("/pedido", "GET");
const API_PEDIDO_GET_ALL_ROWS = apiEndpoint("/pedido/renglones", "GET");
const API_PEDIDO_START_NEW = apiEndpoint("/pedido/start_new/:id_cliente", "GET");
apiEndpoint("/pedido/:id_pedido/start_new_draft", "GET");
apiEndpoint("/pedido/:id_pedido/start_copy", "GET");
const API_PEDIDO_START_UPDATE = apiEndpoint("/pedido/:id_pedido/start_update", "GET");
const API_PEDIDO_CREATE = apiEndpoint("/pedido", "POST");
const API_PEDIDO_UPDATE = apiEndpoint("/pedido/:id_pedido", "PATCH");
const API_PEDIDO_DELETE = apiEndpoint("/pedido/:id_pedido", "DELETE");
const API_BORRADOR_GET_ALL = apiEndpoint("/draft", "GET");
const API_BORRADOR_GET_ALL_ROWS = apiEndpoint("/draft/renglones", "GET");
const API_BORRADOR_START_NEW = apiEndpoint("/draft/start_new/:id_cliente", "GET");
apiEndpoint("/draft/:id_pedido/start_copy", "GET");
apiEndpoint("/draft/:id_pedido/start_new_order", "GET");
const API_BORRADOR_START_UPDATE = apiEndpoint("/draft/:id_pedido/start_update", "GET");
const API_BORRADOR_CREATE = apiEndpoint("/draft", "POST");
const API_BORRADOR_UPDATE = apiEndpoint("/draft/:id_pedido", "PATCH");
const API_BORRADOR_DELETE = apiEndpoint("/draft/:id_pedido", "DELETE");
function useBorradorPedidoStartNew(customerId, isDraft) {
  return useDXTApiFetch({
    ...isDraft ? API_BORRADOR_START_NEW : API_PEDIDO_START_NEW,
    pathParams: {
      id_cliente: customerId ?? ""
    },
    silent: true
  });
}
function useBorradorPedidoStartUpdate(orderId, isDraft) {
  return useDXTApiFetch({
    ...isDraft ? API_BORRADOR_START_UPDATE : API_PEDIDO_START_UPDATE,
    pathParams: {
      id_pedido: orderId
    },
    silent: true
  });
}
const useBorradorStartNew = (customerId) => useBorradorPedidoStartNew(customerId, true);
const useBorradorStartUpdate = (orderId) => useBorradorPedidoStartUpdate(orderId, true);
const usePedidoStartNew = (customerId) => useBorradorPedidoStartNew(customerId, false);
const usePedidoStartUpdate = (orderId) => useBorradorPedidoStartUpdate(orderId, false);
const Loading$4 = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: "Loading Skeletons here" });
};
const createOrderRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      ...API_PEDIDO_CREATE,
      data: input,
      silent: true
    },
    app
  );
};
const createDraftRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      ...API_BORRADOR_CREATE,
      data: input,
      silent: true
    },
    app
  );
};
const updateOrderRequest = async (id_pedido, input, app) => {
  return await dxtApiRequest(
    {
      ...API_PEDIDO_UPDATE,
      pathParams: { id_pedido },
      data: input,
      silent: true
    },
    app
  );
};
const updateDraftRequest = async (id_pedido, input, app) => {
  return await dxtApiRequest(
    {
      ...API_BORRADOR_UPDATE,
      pathParams: { id_pedido },
      data: input,
      silent: true
    },
    app
  );
};
const deleteOrderRequest = async (id_pedido, app) => {
  return await dxtApiRequest(
    {
      ...API_PEDIDO_DELETE,
      pathParams: { id_pedido },
      silent: true
    },
    app
  );
};
const deleteDraftRequest = async (id_pedido, app) => {
  return await dxtApiRequest(
    {
      ...API_BORRADOR_DELETE,
      pathParams: { id_pedido },
      silent: true
    },
    app
  );
};
const OrdersAddNav = (props) => {
  useNavigate();
  const { handleSubmit } = useFormContext();
  const {
    isDraft,
    isEditing,
    isDisabled,
    handlePedidoAction,
    handleDraftAction,
    setIsDraft,
    ...searchFieldProps
  } = props;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Box,
    {
      bg: useColorModeValue("white", "blue.900"),
      sx: {
        px: 4,
        position: "sticky",
        zIndex: 1e3,
        top: 0
      },
      children: /* @__PURE__ */ jsxs(Flex, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxs(HStack, { spacing: { base: 2, sm: 3 }, alignItems: "center", children: [
          !isDraft ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              ResponsiveIconButton,
              {
                icon: SendIcon,
                text: isEditing ? UPDATE_ORDER : SEND_ORDER,
                sharedProps: {
                  size: "sm",
                  fontWeight: "400",
                  colorScheme: "orange",
                  isDisabled,
                  onClick: () => {
                    handleSubmit((data) => {
                      handlePedidoAction(data);
                    })();
                  }
                },
                iconProps: {
                  boxSize: {
                    base: 5,
                    md: 4
                  }
                }
              }
            ),
            !isEditing && /* @__PURE__ */ jsx(
              ResponsiveIconButton,
              {
                icon: PlaylistCheckIcon,
                text: CONVERT_TO_DRAFT,
                sharedProps: {
                  size: "sm",
                  fontWeight: "400",
                  colorScheme: "green",
                  isDisabled,
                  onClick: () => {
                    setIsDraft(true);
                  }
                },
                iconProps: {
                  boxSize: {
                    base: 5,
                    md: 4
                  }
                }
              }
            )
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              ResponsiveIconButton,
              {
                icon: PlaylistEditIcon,
                text: isEditing ? UPDATE_DRAFT : SAVE_DRAFT,
                sharedProps: {
                  size: "sm",
                  fontWeight: "400",
                  colorScheme: "orange",
                  isDisabled,
                  onClick: () => {
                    handleSubmit(async (data) => {
                      handleDraftAction(data);
                    })();
                  }
                },
                iconProps: {
                  boxSize: {
                    base: 5,
                    md: 4
                  }
                }
              }
            ),
            !isEditing && /* @__PURE__ */ jsx(
              ResponsiveIconButton,
              {
                icon: PlaylistCheckIcon,
                text: CONVERT_TO_ORDER,
                sharedProps: {
                  size: "sm",
                  fontWeight: "400",
                  colorScheme: "green",
                  isDisabled,
                  onClick: () => {
                    setIsDraft(false);
                  }
                },
                iconProps: {
                  boxSize: {
                    base: 5,
                    md: 4
                  }
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            ResponsiveIconButton,
            {
              icon: FormatListCheckboxIcon,
              text: SUMMARY,
              sharedProps: {
                size: "sm",
                fontWeight: "400",
                colorScheme: "blue",
                isDisabled
              },
              iconProps: {
                boxSize: {
                  base: 5,
                  md: 4
                }
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Flex,
          {
            alignItems: "center",
            sx: {
              ms: { base: 2, sm: 3 }
            },
            children: /* @__PURE__ */ jsx(SearchField, { ...searchFieldProps })
          }
        )
      ] })
    }
  ) });
};
function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue) ? originalValue : parse$1(originalValue, "yyyy-MM-dd", /* @__PURE__ */ new Date());
  return parsedDate;
}
const useCustomValidationSchema$2 = (isDraft) => {
  const baseValidationSchema = yup.object({
    fecha_alta: yup.date().transform(parseDateString).typeError("Ingrese una fecha de alta válida").required("Ingrese una fecha de alta válida"),
    fecha_entrega: yup.date().transform(parseDateString).min(
      yup.ref("fecha_alta"),
      "La fecha de entrega no puede ser anterior a la fecha de alta"
    ).typeError("Ingrese una fecha de entrega válida").required("Ingrese una fecha de alta válida"),
    id_condicion: yup.number().required("Seleccione la condición de venta"),
    id_asiento: yup.number().required("Seleccione el tipo de asiento"),
    id_transporte: yup.number().required("Seleccione el transporte"),
    id_talonario: yup.number().required("Seleccione el talonario"),
    id_deposito: yup.number().required("Seleccione el depósito"),
    id_direccion: yup.number().required("Seleccione una dirección"),
    bonificacion: yup.number().required("Ingrese bonificación").typeError("Ingrese una bonificación válida").min(0, "La bonificación debe encontrarse entre 0 y 100%").max(100, "La bonificación debe encontrarse entre 0 y 100%"),
    quantities: yup.array().of(yup.number()).test("at-least-one-quantity", "Ingrese al menos una cantidad", function(value) {
      if (!value || value.length === 0)
        return false;
      return value.some((quantity) => quantity != null && quantity > 0);
    }).required("Ingrese al menos una cantidad"),
    comentarios: yup.string().default("").max(COMENTARIOS_MAX_LENGTH, "Los comentarios no pueden superar los ${max} caracteres"),
    descripcion: yup.string().default("").max(DESCRIPCION_MAX_LENGTH, "La descripción no puede superar los ${max} caracteres")
  }).required();
  const draftValidationSchema = yup.object({
    descripcion: yup.string().required("Ingrese una descripción").max(DESCRIPCION_MAX_LENGTH, "La descripción no puede superar los ${max} caracteres")
  });
  if (isDraft) {
    const yupValidationSchema2 = baseValidationSchema.concat(draftValidationSchema);
    return { yupValidationSchema: yupValidationSchema2 };
  } else {
    const yupValidationSchema2 = baseValidationSchema;
    return { yupValidationSchema: yupValidationSchema2 };
  }
};
const eventBus = new Nanobus();
function formatNombreArticulo(nombre, id_articulo, descriptionAdicional) {
  if (id_articulo == null)
    return NONEXISTENT_PRODUCT;
  if (nombre == null)
    return NO_NAME;
  let result = `${id_articulo} - ${nombre.trim()}`;
  if ((descriptionAdicional ?? "").trim().length > 0)
    result = `${result} (${descriptionAdicional})`.trim();
  return result;
}
function formatAuxiliares(codigo, nombre, gender) {
  if (codigo != null && nombre != null)
    return `${codigo} - ${nombre}`;
  return gender === "f" ? NONE_F : NONE_M;
}
function formatCliente(codigo, nombre) {
  return `${codigo} - ${nombre}`;
}
const calculateBonificacion = (price, bonificacion) => {
  return price - price * bonificacion / 100;
};
const calculateTotals = (quantities, prices, globalDiscount) => {
  let total = 0;
  quantities.forEach((quantity, id) => {
    const { amount, discount } = prices[id];
    const finalDiscount = 100 - (discount ?? globalDiscount);
    total += quantity * amount * finalDiscount / 100;
  });
  return total;
};
const Month_Names_Short = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const Weekday_Names_Short = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
];
class ArrowKeysReact {
  constructor(config2) {
    this.config = config2;
  }
  getEvents() {
    return {
      onKeyDown: (e) => {
        switch (e.key) {
          case "ArrowDown":
            this.config.down && this.config.down();
            break;
          case "ArrowLeft":
            this.config.left && this.config.left();
            break;
          case "ArrowRight":
            this.config.right && this.config.right();
            break;
          case "ArrowUp":
            this.config.up && this.config.up();
            break;
        }
      }
    };
  }
}
const DefaultBtnStyle = {
  variant: "ghost",
  size: "sm"
};
const DatepickerBackBtns = (props) => {
  var _a2;
  const { calendars, getBackProps } = props;
  const customBtnProps = (_a2 = props.propsConfigs) == null ? void 0 : _a2.dateNavBtnProps;
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        ...getBackProps({
          calendars,
          offset: 12
        }),
        ...DefaultBtnStyle,
        ...customBtnProps,
        children: "<<"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        ...getBackProps({ calendars }),
        ...DefaultBtnStyle,
        ...customBtnProps,
        children: "<"
      }
    )
  ] });
};
const DatepickerForwardBtns = (props) => {
  var _a2;
  const { calendars, getForwardProps } = props;
  const customBtnProps = (_a2 = props.propsConfigs) == null ? void 0 : _a2.dateNavBtnProps;
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        ...getForwardProps({ calendars }),
        ...DefaultBtnStyle,
        ...customBtnProps,
        children: ">"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        ...getForwardProps({
          calendars,
          offset: 12
        }),
        ...DefaultBtnStyle,
        ...customBtnProps,
        children: ">>"
      }
    )
  ] });
};
const halfGap = 0.125;
const DayOfMonth = ({
  dateObj,
  propsConfigs,
  isInRange,
  disabledDates,
  renderProps,
  onMouseEnter
}) => {
  const { date, selected, selectable, today } = dateObj;
  const { getDateProps } = renderProps;
  const {
    defaultBtnProps,
    isInRangeBtnProps,
    selectedBtnProps,
    todayBtnProps
  } = (propsConfigs == null ? void 0 : propsConfigs.dayOfMonthBtnProps) || {};
  const disabled = !selectable || (disabledDates != void 0 && disabledDates.has(date.getTime()) ? true : false);
  const styleBtnProps = useMemo(
    () => {
      var _a2;
      return {
        defaultBtnProps: {
          size: "sm",
          variant: "ghost",
          // this intends to fill the visual gap from Grid to improve the UX
          // so the button active area is actually larger than what it's seen
          ...defaultBtnProps,
          _after: {
            content: "''",
            position: "absolute",
            top: `-${halfGap}rem`,
            left: `-${halfGap}rem`,
            bottom: `-${halfGap}rem`,
            right: `-${halfGap}rem`,
            borderWidth: `${halfGap}rem`,
            borderColor: "transparent",
            ...defaultBtnProps == null ? void 0 : defaultBtnProps._after
          },
          _hover: {
            bg: "purple.400",
            ...defaultBtnProps == null ? void 0 : defaultBtnProps._hover,
            _disabled: {
              bg: "gray.100",
              // temperory hack to persist the typescript checking
              ...(_a2 = defaultBtnProps == null ? void 0 : defaultBtnProps._hover) == null ? void 0 : _a2._disabled
            }
          }
        },
        isInRangeBtnProps: {
          background: "purple.200",
          ...isInRangeBtnProps
        },
        selectedBtnProps: {
          background: "purple.200",
          ...selectedBtnProps
        },
        todayBtnProps: {
          borderColor: "blue.400",
          ...todayBtnProps
        }
      };
    },
    [defaultBtnProps, isInRangeBtnProps, selectedBtnProps, todayBtnProps]
  );
  return /* @__PURE__ */ jsx(
    Button,
    {
      ...getDateProps({
        dateObj,
        disabled,
        onMouseEnter
      }),
      isDisabled: disabled,
      ...styleBtnProps.defaultBtnProps,
      ...isInRange === true && !disabled && styleBtnProps.isInRangeBtnProps,
      ...selected && !disabled && styleBtnProps.selectedBtnProps,
      ...today && styleBtnProps.todayBtnProps,
      children: date.getDate()
    }
  );
};
const CalendarPanel = ({
  dayzedHookProps,
  configs,
  propsConfigs,
  disabledDates,
  onMouseEnterHighlight,
  isInRange
}) => {
  var _a2;
  const renderProps = useDayzed(dayzedHookProps);
  const { calendars, getBackProps, getForwardProps } = renderProps;
  const weekdayNames = useMemo(() => {
    const firstDayOfWeek = configs.firstDayOfWeek;
    const dayNames = configs.dayNames;
    if (firstDayOfWeek && firstDayOfWeek > 0) {
      return configs.dayNames.slice(firstDayOfWeek, dayNames.length).concat(dayNames.slice(0, firstDayOfWeek));
    }
    return dayNames;
  }, [configs.firstDayOfWeek, configs.dayNames]);
  const getKeyOffset = useCallback((num) => {
    const e = document.activeElement;
    let buttons = document.querySelectorAll("button");
    buttons.forEach((el, i) => {
      const newNodeKey = i + num;
      if (el === e) {
        if (newNodeKey <= buttons.length - 1 && newNodeKey >= 0) {
          buttons[newNodeKey].focus();
        } else {
          buttons[0].focus();
        }
      }
    });
  }, []);
  const arrowKeysReact = new ArrowKeysReact({
    left: () => {
      getKeyOffset(-1);
    },
    right: () => {
      getKeyOffset(1);
    },
    up: () => {
      getKeyOffset(-7);
    },
    down: () => {
      getKeyOffset(7);
    }
  });
  if (calendars.length <= 0) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    Stack,
    {
      className: "datepicker-calendar",
      direction: ["column", "column", "row"],
      ...(_a2 = propsConfigs == null ? void 0 : propsConfigs.calendarPanelProps) == null ? void 0 : _a2.wrapperProps,
      ...arrowKeysReact.getEvents(),
      children: calendars.map((calendar, calendarIdx) => {
        var _a3, _b2, _c, _d;
        return /* @__PURE__ */ jsxs(
          VStack,
          {
            height: "100%",
            borderWidth: "1px",
            padding: "0.5rem 0.75rem",
            ...(_a3 = propsConfigs == null ? void 0 : propsConfigs.calendarPanelProps) == null ? void 0 : _a3.contentProps,
            children: [
              /* @__PURE__ */ jsxs(HStack, { ...(_b2 = propsConfigs == null ? void 0 : propsConfigs.calendarPanelProps) == null ? void 0 : _b2.headerProps, children: [
                /* @__PURE__ */ jsx(
                  DatepickerBackBtns,
                  {
                    calendars,
                    getBackProps,
                    propsConfigs
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Heading,
                  {
                    size: "sm",
                    minWidth: "5rem",
                    textAlign: "center",
                    ...propsConfigs == null ? void 0 : propsConfigs.dateHeadingProps,
                    children: [
                      configs.monthNames[calendar.month],
                      " ",
                      calendar.year
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  DatepickerForwardBtns,
                  {
                    calendars,
                    getForwardProps,
                    propsConfigs
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(Divider, { ...(_c = propsConfigs == null ? void 0 : propsConfigs.calendarPanelProps) == null ? void 0 : _c.dividerProps }),
              /* @__PURE__ */ jsxs(
                SimpleGrid,
                {
                  columns: 7,
                  spacing: 1,
                  textAlign: "center",
                  ...(_d = propsConfigs == null ? void 0 : propsConfigs.calendarPanelProps) == null ? void 0 : _d.bodyProps,
                  children: [
                    weekdayNames.map((day, dayIdx) => /* @__PURE__ */ jsx(
                      Box,
                      {
                        fontSize: "sm",
                        fontWeight: "semibold",
                        ...propsConfigs == null ? void 0 : propsConfigs.weekdayLabelProps,
                        children: day
                      },
                      dayIdx
                    )),
                    calendar.weeks.map((week, weekIdx) => {
                      return week.map((dateObj, index) => {
                        const key = `${calendar.month}-${calendar.year}-${weekIdx}-${index}`;
                        if (dateObj == "")
                          return /* @__PURE__ */ jsx(Box, {}, key);
                        const { date } = dateObj;
                        return /* @__PURE__ */ jsx(
                          DayOfMonth,
                          {
                            dateObj,
                            propsConfigs,
                            renderProps,
                            isInRange: isInRange && isInRange(date),
                            disabledDates,
                            onMouseEnter: () => {
                              if (onMouseEnterHighlight)
                                onMouseEnterHighlight(date);
                            }
                          },
                          key
                        );
                      });
                    })
                  ]
                }
              )
            ]
          },
          calendarIdx
        );
      })
    }
  );
};
const CalendarIcon = () => {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 14 14", width: "14px", height: "14px", focusable: "false", children: /* @__PURE__ */ jsx(
    "path",
    {
      fill: "currentColor",
      d: "M10.8889,5.5 L3.11111,5.5 L3.11111,7.05556 L10.8889,7.05556 L10.8889,5.5 Z M12.4444,1.05556 L11.6667,1.05556 L11.6667,0 L10.1111,0 L10.1111,1.05556 L3.88889,1.05556 L3.88889,0 L2.33333,0 L2.33333,1.05556 L1.55556,1.05556 C0.692222,1.05556 0.00777777,1.75556 0.00777777,2.61111 L0,12.5 C0,13.3556 0.692222,14 1.55556,14 L12.4444,14 C13.3,14 14,13.3556 14,12.5 L14,2.61111 C14,1.75556 13.3,1.05556 12.4444,1.05556 Z M12.4444,12.5 L1.55556,12.5 L1.55556,3.94444 L12.4444,3.94444 L12.4444,12.5 Z M8.55556,8.61111 L3.11111,8.61111 L3.11111,10.1667 L8.55556,10.1667 L8.55556,8.61111 Z"
    }
  ) });
};
const DefaultConfigs = {
  dateFormat: "yyyy-MM-dd",
  monthNames: Month_Names_Short,
  dayNames: Weekday_Names_Short,
  firstDayOfWeek: 0,
  monthsToDisplay: 1
};
const defaultProps = {
  defaultIsOpen: false,
  closeOnSelect: true,
  triggerVariant: "default"
};
const SingleDatepicker = (props) => {
  var _a2, _b2;
  const mergedProps = { ...defaultProps, ...props };
  const {
    date: selectedDate,
    name,
    disabled,
    onDateChange,
    isReadOnly,
    id,
    minDate,
    maxDate,
    configs,
    usePortal,
    portalRef,
    disabledDates,
    defaultIsOpen,
    triggerVariant,
    propsConfigs,
    closeOnSelect,
    children
  } = mergedProps;
  const [dateInView, setDateInView] = useState(selectedDate);
  const [offset, setOffset] = useState(0);
  const inputChangeRef = useRef();
  const { onOpen, onClose, isOpen } = useDisclosure({ defaultIsOpen });
  const Icon2 = mergedProps.triggerVariant === "input" && mergedProps.triggerIcon !== void 0 ? mergedProps.triggerIcon : /* @__PURE__ */ jsx(CalendarIcon, {});
  const datepickerConfigs = {
    ...DefaultConfigs,
    ...configs
  };
  const [tempInput, setInputVal] = useState(
    selectedDate ? format(selectedDate, datepickerConfigs.dateFormat) : ""
  );
  const onPopoverClose = () => {
    onClose();
    setDateInView(selectedDate);
    setOffset(0);
  };
  const handleOnDateSelected = ({ selectable, date }) => {
    if (!selectable)
      return;
    if (date instanceof Date && !isNaN(date.getTime())) {
      onDateChange(date);
      if (closeOnSelect)
        onClose();
      return;
    }
  };
  const handleInputChange = (event) => {
    setInputVal(event.target.value);
    if (inputChangeRef.current)
      clearTimeout(inputChangeRef.current);
    inputChangeRef.current = setTimeout(() => {
      const newDate = parse$1(
        event.target.value,
        datepickerConfigs.dateFormat,
        /* @__PURE__ */ new Date()
      );
      if (!(newDate instanceof Date && !isNaN(newDate.getTime()))) {
        onDateChange("");
        return;
      }
      const isDisabled = disabledDates == null ? void 0 : disabledDates.has(startOfDay(newDate).getTime());
      if (isDisabled === true)
        return;
      onDateChange(newDate);
    }, 500);
  };
  const PopoverContentWrapper = usePortal === true ? Portal : React.Fragment;
  useEffect(() => {
    if (selectedDate) {
      setInputVal(format(selectedDate, datepickerConfigs.dateFormat));
    }
  }, [selectedDate, datepickerConfigs.dateFormat]);
  return /* @__PURE__ */ jsxs(
    Popover,
    {
      id,
      placement: "bottom-start",
      variant: "responsive",
      isOpen,
      onOpen,
      onClose: onPopoverClose,
      isLazy: true,
      children: [
        !children && triggerVariant === "default" ? /* @__PURE__ */ jsx(PopoverTrigger, { children: /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            lineHeight: 1,
            paddingX: "1rem",
            disabled,
            fontSize: "sm",
            ...propsConfigs == null ? void 0 : propsConfigs.triggerBtnProps,
            children: selectedDate ? format(selectedDate, datepickerConfigs.dateFormat) : ""
          }
        ) }) : null,
        !children && triggerVariant === "input" ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(PopoverAnchor, { children: /* @__PURE__ */ jsx(
            Input,
            {
              id,
              autoComplete: "off",
              disabled,
              isDisabled: disabled,
              name,
              value: tempInput,
              onChange: handleInputChange,
              width: "full",
              ...propsConfigs == null ? void 0 : propsConfigs.inputProps
            }
          ) }),
          /* @__PURE__ */ jsx(PopoverTrigger, { children: /* @__PURE__ */ jsx(
            Button,
            {
              position: "absolute",
              variant: "ghost",
              right: "0",
              size: "sm",
              marginRight: "5px",
              zIndex: 1,
              type: "button",
              isDisabled: disabled === true || isReadOnly,
              padding: "8px",
              ...propsConfigs == null ? void 0 : propsConfigs.triggerIconBtnProps,
              children: Icon2
            }
          ) })
        ] }) : null,
        children ? children(selectedDate) : null,
        /* @__PURE__ */ jsx(
          PopoverContentWrapper,
          {
            ...usePortal === true ? { containerRef: portalRef } : {},
            children: /* @__PURE__ */ jsx(
              PopoverContent,
              {
                width: "100%",
                ...(_a2 = propsConfigs == null ? void 0 : propsConfigs.popoverCompProps) == null ? void 0 : _a2.popoverContentProps,
                children: /* @__PURE__ */ jsx(PopoverBody, { ...(_b2 = propsConfigs == null ? void 0 : propsConfigs.popoverCompProps) == null ? void 0 : _b2.popoverBodyProps, children: /* @__PURE__ */ jsx(FocusLock, { children: /* @__PURE__ */ jsx(
                  CalendarPanel,
                  {
                    dayzedHookProps: {
                      showOutsideDays: true,
                      monthsToDisplay: datepickerConfigs.monthsToDisplay,
                      onDateSelected: handleOnDateSelected,
                      selected: selectedDate,
                      date: dateInView,
                      minDate,
                      maxDate,
                      offset,
                      onOffsetChanged: setOffset,
                      firstDayOfWeek: datepickerConfigs.firstDayOfWeek
                    },
                    configs: datepickerConfigs,
                    propsConfigs,
                    disabledDates
                  }
                ) }) })
              }
            )
          }
        )
      ]
    }
  );
};
const ControlledDatePicker = (props) => {
  const { fieldProps, formControlProps, formControlInnerProps, control } = props;
  const containerBgColor = useColorModeValue("gray.50", "gray.800");
  const {
    field: { ref, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController({
    name: fieldProps.name,
    control
  });
  const { label, helperText } = formControlInnerProps || {};
  return /* @__PURE__ */ jsxs(FormControl, { ...formControlProps, isInvalid: invalid, children: [
    label != null && /* @__PURE__ */ jsx(FormLabel, { htmlFor: `popover-trigger-${fieldProps.id}`, children: label }),
    /* @__PURE__ */ jsx(Flex, { gap: "1rem", alignItems: "center", children: /* @__PURE__ */ jsx(
      SingleDatepicker,
      {
        ...fieldProps,
        closeOnSelect: true,
        onDateChange: onChange,
        date: value,
        triggerVariant: "input",
        propsConfigs: {
          triggerBtnProps: {
            sx: {
              fontWeight: "normal"
            }
          },
          popoverCompProps: {
            popoverContentProps: {
              backgroundColor: containerBgColor,
              rootProps: {
                sx: {
                  zIndex: 9999
                }
              }
            }
          },
          dayOfMonthBtnProps: {
            defaultBtnProps: {
              _hover: {
                backgroundColor: "green.200"
              }
            },
            selectedBtnProps: {
              backgroundColor: "green.400",
              color: "white"
            }
          }
        },
        configs: {
          dateFormat: DATE_FORMAT,
          dayNames: DATE_DAY_NAMES_SHORT,
          monthNames: DATE_MONTH_NAMES_SHORT
        }
      }
    ) }),
    helperText != null && /* @__PURE__ */ jsx(FormHelperText, { children: helperText })
  ] });
};
function formatNumber(num) {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
const TextSpecialPrice = (textProps) => {
  return /* @__PURE__ */ jsx(Text, { textAlign: "right", ...textProps, children: "Especial" });
};
const TextPrice = ({ precio, moneda, textProps }) => {
  return /* @__PURE__ */ jsx(Text, { textAlign: "right", ...textProps, children: TextPricePlain(precio, moneda) });
};
const TextPriceNative = ({ precio, moneda }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: TextPricePlain(precio, moneda) });
};
const TextPricePlain = (precio, moneda) => {
  return `${moneda != null && moneda + " "}${formatNumber(precio)}`;
};
const OrderTotal = ({ prices }) => {
  const app = useAppResources();
  const isCustomer = app.authState.isCustomer();
  const { control } = useFormContext();
  const quantitiesWatch = useWatch({
    control,
    name: "quantities"
  });
  const bonificacionWatch = useWatch({
    control,
    name: "bonificacion"
  });
  const total = calculateTotals(quantitiesWatch, prices, bonificacionWatch);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Heading, { textTransform: "uppercase", size: "xs", children: [
      "Total (Sin IVA)",
      !isCustomer && bonificacionWatch > 0 && ` - Bonif. ${bonificacionWatch}%`
    ] }),
    /* @__PURE__ */ jsx(
      TextPrice,
      {
        precio: total ?? 0,
        moneda: "$",
        textProps: {
          fontSize: "2xl",
          color: "green.400",
          fontWeight: "bolder",
          sx: { mt: 1 }
        }
      }
    )
  ] });
};
const OrderInfo = (props) => {
  const { isDraft, cabecera, disableForm, prices } = props;
  const app = useAppResources();
  const isCustomer = app.authState.isCustomer();
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: true
  });
  const {
    control,
    reset,
    watch,
    formState: { isSubmitted, isSubmitting }
  } = useFormContext();
  const fecha_altaWatch = watch("fecha_alta");
  useEffect(() => {
    const handleDetailsToggle = () => {
      if (isOpen)
        onToggle();
    };
    eventBus.on("togglePedidoCategory", handleDetailsToggle);
    return () => {
      eventBus.removeListener("togglePedidoCategory", handleDetailsToggle);
    };
  }, []);
  const fieldsMap = {
    label: "name",
    value: "id",
    selected: "selected"
  };
  const transporteOptions = buildSelectOptions({
    data: cabecera.transportes,
    fieldsMap
  });
  const condicionVentaOptions = buildSelectOptions({
    data: cabecera.condiciones,
    fieldsMap
  });
  const tipoAsientoOptions = buildSelectOptions({
    data: cabecera.asientos,
    fieldsMap
  });
  const talonarioOptions = buildSelectOptions({
    data: cabecera.talonarios,
    fieldsMap
  });
  const depositoOptions = buildSelectOptions({
    data: cabecera.depositos,
    fieldsMap
  });
  const direccionesOptions = buildSelectOptions({
    data: cabecera.direcciones,
    fieldsMap: {
      label: ["name", "calle_numero"],
      value: "id",
      selected: "habitual"
    }
  });
  const fechaAltaVisible = !isCustomer || isCustomer && cabecera.fecha_alta_editable;
  const fechaEntregaVisible = !isCustomer || isCustomer && cabecera.fecha_entrega_editable;
  const condicionVentaVisible = !isCustomer || isCustomer && cabecera.condicion_editable;
  const tipoAsientoVisible = !isCustomer || isCustomer && cabecera.asiento_editable;
  const transporteVisible = !isCustomer || isCustomer && cabecera.transporte_editable;
  const talonarioVisible = !isCustomer || isCustomer && cabecera.talonario_editable;
  const depositoVisible = !isCustomer || isCustomer && cabecera.deposito_editable;
  const direccionVisible = !isCustomer || isCustomer && cabecera.direccion_editable;
  const bonificacionVisible = !isCustomer || isCustomer && cabecera.bonificacion_editable;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Box, { children: [
    isDraft && /* @__PURE__ */ jsx(
      CommonCard,
      {
        cardProps: { variant: "filled" },
        cardBodyProps: {
          p: 0
        },
        children: /* @__PURE__ */ jsxs(
          Grid,
          {
            templateColumns: "1fr",
            alignItems: "center",
            gap: 4,
            sx: { p: 4 },
            children: [
              /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Descripción del borrador" }) }),
              /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                ControlledInput,
                {
                  fieldProps: {
                    name: "descripcion",
                    id: "descripcion",
                    maxLength: DESCRIPCION_MAX_LENGTH
                  },
                  formControlProps: {
                    isDisabled: disableForm
                  },
                  control
                }
              ) })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      CommonCard,
      {
        cardProps: { variant: "filled" },
        cardBodyProps: {
          p: 0
        },
        children: [
          /* @__PURE__ */ jsxs(
            Grid,
            {
              templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
              alignItems: "center",
              gap: 4,
              onClick: onToggle,
              cursor: "pointer",
              sx: { p: 4 },
              children: [
                /* @__PURE__ */ jsxs(GridItem, { children: [
                  /* @__PURE__ */ jsx(Heading, { size: "xs", children: "Cliente:" }),
                  /* @__PURE__ */ jsx(Heading, { size: "md", textTransform: "uppercase", sx: { mt: 1 }, children: cabecera.nombre_cliente })
                ] }),
                /* @__PURE__ */ jsx(GridItem, { textAlign: { md: "end" }, children: /* @__PURE__ */ jsx(OrderTotal, { prices }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(Collapse, { in: isOpen, style: { overflow: "inherit" }, children: /* @__PURE__ */ jsxs(
            Grid,
            {
              templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
              alignItems: "center",
              gap: 4,
              sx: { p: 4, pt: 0 },
              children: [
                !isDraft && fechaAltaVisible && /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                  ControlledDatePicker,
                  {
                    fieldProps: {
                      name: "fecha_alta",
                      id: "fecha_alta",
                      minDate: new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)),
                      isReadOnly: !cabecera.fecha_alta_editable
                    },
                    formControlProps: {
                      isDisabled: disableForm,
                      isReadOnly: !cabecera.fecha_alta_editable
                    },
                    formControlInnerProps: {
                      label: "Alta"
                    },
                    control
                  }
                ) }),
                !isDraft && fechaEntregaVisible && /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                  ControlledDatePicker,
                  {
                    fieldProps: {
                      name: "fecha_entrega",
                      id: "fecha_entrega",
                      minDate: new Date(fecha_altaWatch.setHours(0, 0, 0, 0)),
                      isReadOnly: !cabecera.fecha_entrega_editable
                    },
                    formControlProps: {
                      isDisabled: disableForm,
                      isReadOnly: !cabecera.fecha_entrega_editable
                    },
                    formControlInnerProps: {
                      label: "Entrega"
                    },
                    control
                  }
                ) }),
                condicionVentaVisible && /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                  ControlledSelect,
                  {
                    fieldProps: {
                      name: "id_condicion",
                      id: "id_condicion",
                      placeholder: "Seleccione una condición",
                      options: condicionVentaOptions,
                      noOptionsMessage(obj) {
                        return "No hay condiciones disponibles";
                      },
                      selectedOptionStyle: "check",
                      isSearchable: cabecera.condicion_editable
                    },
                    formControlProps: {
                      isDisabled: disableForm
                    },
                    formControlInnerProps: {
                      label: "Condición de venta"
                    },
                    control
                  }
                ) }),
                tipoAsientoVisible && /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                  ControlledSelect,
                  {
                    fieldProps: {
                      name: "id_asiento",
                      id: "id_asiento",
                      placeholder: "Seleccione un tipo de asiento",
                      options: tipoAsientoOptions,
                      noOptionsMessage(obj) {
                        return "No hay tipos disponibles";
                      },
                      selectedOptionStyle: "check",
                      isSearchable: cabecera.asiento_editable
                    },
                    formControlProps: {
                      isDisabled: disableForm
                    },
                    formControlInnerProps: {
                      label: "Tipo de asiento"
                    },
                    control
                  }
                ) }),
                transporteVisible && /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                  ControlledSelect,
                  {
                    fieldProps: {
                      name: "id_transporte",
                      id: "id_transporte",
                      placeholder: "Seleccione un transporte",
                      options: transporteOptions,
                      noOptionsMessage(obj) {
                        return "No hay transportes disponibles";
                      },
                      selectedOptionStyle: "check",
                      isSearchable: cabecera.transporte_editable
                    },
                    formControlProps: {
                      isDisabled: disableForm
                    },
                    formControlInnerProps: {
                      label: "Transporte"
                    },
                    control
                  }
                ) }),
                talonarioVisible && /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                  ControlledSelect,
                  {
                    fieldProps: {
                      name: "id_talonario",
                      id: "id_talonario",
                      placeholder: "Seleccione un talonario",
                      options: talonarioOptions,
                      noOptionsMessage(obj) {
                        return "No hay talonarios disponibles";
                      },
                      selectedOptionStyle: "check",
                      isSearchable: cabecera.talonario_editable
                    },
                    formControlProps: {
                      isDisabled: disableForm
                    },
                    formControlInnerProps: {
                      label: "Talonario"
                    },
                    control
                  }
                ) }),
                depositoVisible && /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                  ControlledSelect,
                  {
                    fieldProps: {
                      name: "id_deposito",
                      id: "id_deposito",
                      placeholder: "Seleccione un depósito",
                      options: depositoOptions,
                      noOptionsMessage(obj) {
                        return "No hay depósitos disponibles";
                      },
                      selectedOptionStyle: "check",
                      isSearchable: cabecera.deposito_editable
                    },
                    formControlProps: {
                      isDisabled: disableForm
                    },
                    formControlInnerProps: {
                      label: "Depósito"
                    },
                    control
                  }
                ) }),
                direccionVisible && /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                  ControlledSelect,
                  {
                    fieldProps: {
                      name: "id_direccion",
                      id: "id_direccion",
                      placeholder: "Seleccione una dirección",
                      options: direccionesOptions,
                      noOptionsMessage(obj) {
                        return "No hay direcciones disponibles";
                      },
                      selectedOptionStyle: "check",
                      isSearchable: cabecera.direccion_editable
                    },
                    formControlProps: {
                      isDisabled: disableForm
                    },
                    formControlInnerProps: {
                      label: "Dirección"
                    },
                    control
                  }
                ) }),
                bonificacionVisible && /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                  ControlledInput,
                  {
                    fieldProps: {
                      name: "bonificacion",
                      id: "bonificacion",
                      type: "number",
                      inputMode: "decimal",
                      min: 0,
                      max: 100,
                      htmlSize: 5,
                      maxLength: 5,
                      width: "auto",
                      textAlign: "right",
                      onKeyDown: (e) => {
                        if (/^(,|-|\+)$/.test(e.key))
                          e.preventDefault();
                      },
                      onFocus: (e) => {
                        e.target.select();
                      },
                      onChange: (e) => {
                        if (e.target.value === "")
                          return;
                        const parsedValue = parseFloat(e.target.value);
                        if (!parsedValue)
                          e.target.value = "0";
                        if (parsedValue < 0)
                          e.target.value = "0";
                        if (parsedValue > 100)
                          e.target.value = "100";
                      },
                      isReadOnly: !cabecera.bonificacion_editable
                    },
                    formControlProps: {
                      isDisabled: disableForm
                    },
                    formControlInnerProps: {
                      label: "Bonificación (%)"
                    },
                    control
                  }
                ) }),
                /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(
                  ControlledTextarea,
                  {
                    fieldProps: {
                      name: "comentarios",
                      id: "comentarios",
                      maxLength: COMENTARIOS_MAX_LENGTH,
                      rows: 3
                    },
                    formControlProps: {
                      isDisabled: disableForm
                    },
                    formControlInnerProps: {
                      label: "Comentario"
                    },
                    control
                  }
                ) })
              ]
            }
          ) })
        ]
      }
    )
  ] }) });
};
const ProductsRow = (props) => {
  const { product, bonificacionGlobal } = props;
  const { id, codigo, nombre, precio, bonificacion } = product;
  const rowColor = useColorModeValue(
    "var(--chakra-colors-yellow-100)",
    "var(--chakra-colors-green-900)"
  );
  const inputBorderColor = useColorModeValue(
    "var(--chakra-colors-blackAlpha-800)",
    "var(--chakra-colors-whiteAlpha-300)"
  );
  const inputBackgroundColor = useColorModeValue(
    "var(--chakra-colors-white)",
    "var(--chakra-colors-gray-800)"
  );
  const {
    control,
    register,
    formState: { isSubmitted, isSubmitting }
  } = useFormContext();
  const precioBonificacion = calculateBonificacion(
    precio,
    bonificacion ?? bonificacionGlobal
  );
  const productQuantity = useWatch({ control, name: `quantities.${id}` });
  const productSum = productQuantity * precioBonificacion;
  const disableWheelFn = (wheelEv) => {
    wheelEv.preventDefault();
  };
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
      e.target.addEventListener("mousewheel", disableWheelFn);
      e.target.select();
    },
    onBlur: (e) => {
      e.target.addEventListener("mousewheel", disableWheelFn);
    },
    onClick: (e) => {
      e.currentTarget.select();
    },
    className: "quantity",
    style: {
      borderColor: inputBorderColor,
      backgroundColor: inputBackgroundColor
    },
    disabled: false,
    //isSubmitted || isSubmitting
    autoComplete: "off"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "grid",
      style: { ...productSum && { backgroundColor: rowColor } },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "word-break-all", children: [
          codigo,
          " - ",
          nombre
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-right hidden-on-base", children: precio != null && (bonificacion == null ? /* @__PURE__ */ jsx(TextPriceNative, { precio, moneda: "$" }) : /* @__PURE__ */ jsx(TextSpecialPrice, {})) }),
        /* @__PURE__ */ jsx("div", { className: "text-right", children: precio != null && /* @__PURE__ */ jsx(TextPriceNative, { precio: precioBonificacion, moneda: "$" }) }),
        /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("input", { ...inputFieldProps, ...register(`quantities.${id}`) }) }),
        /* @__PURE__ */ jsx("div", { className: "text-right", children: productSum != null && /* @__PURE__ */ jsx(TextPriceNative, { precio: productSum, moneda: "$" }) })
      ]
    }
  );
};
function ProductsList({
  articulos
}) {
  const { control } = useFormContext();
  const bonificacionWatch = useWatch({
    control,
    name: "bonificacion"
  });
  const rowColor = useColorModeValue(
    "var(--chakra-colors-gray-200)",
    "var(--chakra-colors-black)"
  );
  return /* @__PURE__ */ jsxs(AccordionPanel, { sx: { p: 4, pt: 0 }, children: [
    /* @__PURE__ */ jsxs("div", { className: "grid heading", style: { backgroundColor: `${rowColor}` }, children: [
      /* @__PURE__ */ jsx("div", { className: "hidden-on-base", children: /* @__PURE__ */ jsx("strong", { children: "Artículo" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-right hidden-on-base", children: /* @__PURE__ */ jsx("strong", { children: "Lista" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsx("strong", { children: "Bonificado" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("strong", { children: "Cantidad" }) }),
      /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsx("strong", { children: "Subtotal" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { children: articulos.map((product, index) => /* @__PURE__ */ jsx(
      ProductsRow,
      {
        product,
        bonificacionGlobal: bonificacionWatch
      },
      `product-row-${product.id}`
    )) })
  ] });
}
const CategoryAccordionButton = (props) => {
  const { control } = useFormContext();
  const { categoryName, articulos } = props;
  const bonificacionWatch = useWatch({ control, name: "bonificacion" });
  let categorySum = void 0;
  articulos == null ? void 0 : articulos.forEach(({ id, precio, bonificacion }) => {
    const productQuantity = useWatch({ control, name: `quantities.${id}` });
    if (productQuantity > 0) {
      const precioBonificacion = calculateBonificacion(
        precio,
        bonificacion ?? bonificacionWatch
      );
      categorySum = (categorySum != void 0 ? categorySum : 0) + productQuantity * precioBonificacion;
    }
  });
  return /* @__PURE__ */ jsxs(
    AccordionButton,
    {
      sx: {
        p: 4,
        _hover: {
          bg: "none"
        }
      },
      children: [
        /* @__PURE__ */ jsx(AccordionIcon, { sx: { me: 2 } }),
        /* @__PURE__ */ jsx(Box, { as: "span", flex: "1", textAlign: "left", children: /* @__PURE__ */ jsx(
          Heading,
          {
            size: ["sm", "md"],
            sx: {
              textTransform: "uppercase"
            },
            children: categoryName
          }
        ) }),
        categorySum != void 0 && /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Badge, { variant: "subtle", colorScheme: "yellow", fontSize: "0.9em", children: /* @__PURE__ */ jsx(TextPriceNative, { precio: categorySum, moneda: "$" }) }) })
      ]
    }
  );
};
const ProductsTable = (props) => {
  const { disableForm, unfilteredProducts, filteredProducts, isFiltering } = props;
  const [index, setIndex] = useState(null);
  const totalCategories = _.keys(filteredProducts).length;
  const filledUpCategories = _.keys(
    _.pickBy(
      filteredProducts,
      (value) => Array.isArray(value) && value.length > 0
    )
  );
  useEffect(() => {
    setIndex(isFiltering ? _.range(totalCategories) : null);
  }, [isFiltering]);
  useEffect(() => {
    if (index != null)
      eventBus.emit("togglePedidoCategory");
  }, [index]);
  if (!filledUpCategories.length) {
    return /* @__PURE__ */ jsxs(Alert, { status: "info", children: [
      /* @__PURE__ */ jsx(AlertIcon, {}),
      FILTER_NO_RESULTS
    ] });
  }
  return /* @__PURE__ */ jsx(
    Accordion,
    {
      allowToggle: true,
      reduceMotion: true,
      ...totalCategories === 1 ? { defaultIndex: [0] } : {},
      ...index != null && { index },
      onChange: setIndex,
      children: _.map(filteredProducts, (articulos, categoria) => {
        const categoryName = categoria === ARTICLE_GROUP_NO_NAME ? PEDIDO_ARTICLE_GROUP_NO_NAME : categoria;
        return articulos.length ? /* @__PURE__ */ jsx(
          AccordionItem,
          {
            sx: {
              border: "none"
            },
            children: ({ isExpanded }) => /* @__PURE__ */ jsxs(
              CommonCard,
              {
                cardProps: {
                  borderWidth: "1px"
                },
                cardBodyProps: {
                  p: 0
                },
                children: [
                  /* @__PURE__ */ jsx(
                    CategoryAccordionButton,
                    {
                      categoryName,
                      articulos: unfilteredProducts[categoria]
                    }
                  ),
                  isExpanded && /* @__PURE__ */ jsx(ProductsList, { articulos })
                ]
              }
            )
          },
          `accordion-${categoria}`
        ) : /* @__PURE__ */ jsx(React.Fragment, {}, `accordion-${categoria}`);
      })
    }
  );
};
const Success$6 = (props) => {
  const { draft, pedidoState } = props;
  const isEditing = props.isEditing === true;
  const [isDraft, setIsDraft] = useState(draft);
  const app = useAppResources();
  const toast = useToast();
  const { yupValidationSchema: yupValidationSchema2 } = useCustomValidationSchema$2(isDraft);
  const quantities = [];
  const prices = {};
  _.forOwn(pedidoState.articulos, (articulos) => {
    articulos.forEach((product) => {
      prices[product.id] = {
        amount: product.precio,
        discount: product.bonificacion
      };
      quantities[product.id] = product.cantidad ?? 0;
    });
  });
  const formMethods = useForm({
    defaultValues: {
      fecha_alta: pedidoState.cabecera.fecha_alta != null ? new Date(pedidoState.cabecera.fecha_alta) : void 0,
      fecha_entrega: pedidoState.cabecera.fecha_entrega != null ? new Date(pedidoState.cabecera.fecha_entrega) : void 0,
      bonificacion: pedidoState.cabecera.bonificacion,
      id_transporte: getSelectedValue(pedidoState.cabecera.transportes) ?? void 0,
      id_condicion: getSelectedValue(pedidoState.cabecera.condiciones) ?? void 0,
      id_deposito: getSelectedValue(pedidoState.cabecera.depositos) ?? void 0,
      id_talonario: getSelectedValue(pedidoState.cabecera.talonarios) ?? void 0,
      id_asiento: getSelectedValue(pedidoState.cabecera.asientos) ?? void 0,
      id_direccion: getSelectedValue(pedidoState.cabecera.direcciones, "habitual") ?? void 0,
      quantities,
      descripcion: pedidoState.cabecera.descripcion,
      comentarios: pedidoState.cabecera.comentarios
    },
    resolver: yupResolver(yupValidationSchema2)
  });
  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = formMethods;
  const disableForm = isSubmitSuccessful || isSubmitting;
  const quantitiesToRenglones = (quantities2) => {
    const renglones = [];
    quantities2.forEach((quantity, id) => {
      if (quantity != null && quantity > 0)
        renglones.push({
          id,
          quantity
        });
    });
    return renglones;
  };
  const handleCreatePedido = async (dataUnsafe) => {
    const renglones = quantitiesToRenglones(dataUnsafe.quantities);
    const {
      quantities: _quantities,
      descripcion: _descripcion,
      ...data
    } = dataUnsafe;
    const input = {
      ...data,
      fecha_alta: format(data.fecha_alta, DATE_FORMAT_API),
      fecha_entrega: format(data.fecha_entrega, DATE_FORMAT_API),
      id_cliente: pedidoState.cabecera.id_cliente,
      renglones
    };
    const result = await createOrderRequest(input, app);
    result.map({
      success: (state) => {
        toast({
          title: ORDER_CREATED,
          description: ORDER_CREATED_NUMBER.replace(
            "{{numero_pedido}}",
            state.data.numero_pedido
          ),
          status: "success"
        });
        app.navigate(URL_PEDIDOS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  const handleUpdatePedido = async (dataUnsafe) => {
    if (pedidoState.cabecera.id_pedido == null)
      throw Error("Invalid pedidoState.cabecera.id_pedido");
    const renglones = quantitiesToRenglones(dataUnsafe.quantities);
    const {
      quantities: _quantities,
      descripcion: _descripcion,
      ...data
    } = dataUnsafe;
    const input = {
      ...data,
      fecha_alta: format(data.fecha_alta, DATE_FORMAT_API),
      fecha_entrega: format(data.fecha_entrega, DATE_FORMAT_API),
      id_pedido: pedidoState.cabecera.id_pedido,
      renglones
    };
    const result = await updateOrderRequest(input.id_pedido, input, app);
    result.map({
      success: (state) => {
        toast({
          title: ORDER_UPDATED,
          description: ORDER_UPDATED_NUMBER.replace(
            "{{numero_pedido}}",
            state.data.numero_pedido
          ),
          status: "success"
        });
        app.navigate(URL_PEDIDOS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  const handleCreateDraft = async (dataUnsafe) => {
    const renglones = quantitiesToRenglones(dataUnsafe.quantities);
    const {
      quantities: _quantities,
      fecha_alta: _fecha_alta,
      fecha_entrega: _fecha_entrega,
      ...data
    } = dataUnsafe;
    const input = {
      ...data,
      id_cliente: pedidoState.cabecera.id_cliente,
      renglones
    };
    const result = await createDraftRequest(input, app);
    result.map({
      success: (state) => {
        toast({
          title: DRAFT_CREATED,
          description: DRAFT_CREATED_NUMBER.replace(
            "{{numero_pedido}}",
            state.data.numero_pedido
          ),
          status: "success"
        });
        app.navigate(URL_BORRADORES_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  const handleUpdateDraft = async (dataUnsafe) => {
    if (pedidoState.cabecera.id_pedido == null)
      throw Error("Invalid pedidoState.cabecera.id_pedido");
    const renglones = quantitiesToRenglones(dataUnsafe.quantities);
    const {
      quantities: _quantities,
      fecha_alta: _fecha_alta,
      fecha_entrega: _fecha_entrega,
      ...data
    } = dataUnsafe;
    const input = {
      ...data,
      id_pedido: pedidoState.cabecera.id_pedido,
      renglones
    };
    const result = await updateDraftRequest(input.id_pedido, input, app);
    result.map({
      success: (state) => {
        toast({
          title: DRAFT_UPDATED,
          description: DRAFT_UPDATED_NUMBER.replace(
            "{{numero_pedido}}",
            state.data.numero_pedido
          ),
          status: "success"
        });
        app.navigate(URL_BORRADORES_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  const {
    filteredData: filteredProducts,
    handleSearchInputChange,
    isFiltering
  } = useSearchField(pedidoState.articulos, ["codigo", "nombre"]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(FormProvider, { ...formMethods, children: /* @__PURE__ */ jsxs("form", { noValidate: true, children: [
    /* @__PURE__ */ jsx(
      OrdersAddNav,
      {
        isDraft,
        isEditing: isEditing ?? false,
        isDisabled: disableForm,
        setIsDraft,
        handleSearchInputChange,
        handlePedidoAction: isEditing ? handleUpdatePedido : handleCreatePedido,
        handleDraftAction: isEditing ? handleUpdateDraft : handleCreateDraft
      }
    ),
    /* @__PURE__ */ jsxs(Box, { sx: { my: 4 }, children: [
      /* @__PURE__ */ jsx(FormErrors, { errors }),
      /* @__PURE__ */ jsx(
        OrderInfo,
        {
          isDraft,
          cabecera: pedidoState.cabecera,
          disableForm,
          prices
        }
      ),
      /* @__PURE__ */ jsx(
        ProductsTable,
        {
          disableForm,
          unfilteredProducts: pedidoState.articulos,
          filteredProducts,
          isFiltering
        }
      )
    ] })
  ] }) }) });
};
const OrdersAddPage = (props) => {
  const { client, draft } = props;
  useNavigate();
  const idCustomer = client != null ? Number.parseInt(client) : null;
  return /* @__PURE__ */ jsx(_OrdersAddPage, { client: idCustomer, draft });
};
const _OrdersAddPage = (props) => {
  const { client, draft } = props;
  const { state, retry } = draft ? useBorradorStartNew(client) : usePedidoStartNew(client);
  return state.map({
    loading: (_2) => /* @__PURE__ */ jsx(Loading$4, {}),
    error: ({ error }) => /* @__PURE__ */ jsx(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: draft ? URL_BORRADORES_PATH : URL_PEDIDOS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx(Success$6, { pedidoState: state2.data, draft })
  });
};
const OrdersEditPage = (props) => {
  const { id_pedido, draft } = props;
  const navigate = useNavigate();
  const idPedido = id_pedido != null ? Number.parseInt(id_pedido) : null;
  if (isAnInteger(idPedido) && idPedido > 0)
    return /* @__PURE__ */ jsx(_OrdersEditPage, { id_pedido: idPedido, draft });
  return /* @__PURE__ */ jsx(
    CommonErrors,
    {
      error: getDXTErrorDescription(DXTErrorCode.INVALID_PARAMETER),
      buttonProps: {
        label: BACK_TO_PEDIDOS,
        colorScheme: "green",
        onClick: () => {
          navigate(URL_PEDIDOS_PATH);
        }
      }
    }
  );
};
const _OrdersEditPage = (props) => {
  const { id_pedido, draft } = props;
  const { state, retry } = draft ? useBorradorStartUpdate(id_pedido) : usePedidoStartUpdate(id_pedido);
  return state.map({
    loading: (_2) => /* @__PURE__ */ jsx(Loading$4, {}),
    error: ({ error }) => /* @__PURE__ */ jsx(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: draft ? URL_BORRADORES_PATH : URL_PEDIDOS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx(Success$6, { pedidoState: state2.data, draft, isEditing: true })
  });
};
function OrdersAdd$5() {
  const { id_pedido } = useParams();
  return /* @__PURE__ */ jsx(Container, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx(OrdersEditPage, { id_pedido, draft: true }) });
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OrdersAdd$5
}, Symbol.toStringTag, { value: "Module" }));
function OrdersAdd$4() {
  const { id_pedido } = useParams();
  return /* @__PURE__ */ jsx(Container, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx(OrdersEditPage, { id_pedido, draft: false }) });
}
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OrdersAdd$4
}, Symbol.toStringTag, { value: "Module" }));
async function loader$A({ request, params }) {
  return await startOrderUpdateEndpoint.get(request, params);
}
const action$A = unimplementedApiResponse;
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$A,
  loader: loader$A
}, Symbol.toStringTag, { value: "Module" }));
const useCustomValidationSchema$1 = () => {
  const [passwordStatus, setPasswordStatus] = useState(null);
  const customValidationSchema = yup.object({
    password: yup.string().required("Ingrese una contraseña").test("password", "Formato de contraseña no válido", (v) => {
      if (v != "" && v != null) {
        let newPasswordStatus = dxtPasswordStatus(v);
        if (!_.isEqual(passwordStatus, newPasswordStatus))
          setPasswordStatus(newPasswordStatus);
        return yupVOValidation(VODXTPassword, v);
      }
      return true;
    })
  }).required();
  const yupValidationSchema2 = commonValidationSchema.concat(customValidationSchema);
  return { yupValidationSchema: yupValidationSchema2, passwordStatus };
};
const Success$5 = (props) => {
  var _a2, _b2;
  const { typeSettings } = props;
  const app = useAppResources();
  const toast = useToast();
  const { yupValidationSchema: yupValidationSchema2, passwordStatus } = useCustomValidationSchema$1();
  const { state: statePerfiles, result: resultPerfiles } = useTangoList({
    endpoint: API_TANGO_PERFIL_GET_ALL,
    fieldsMap: {
      label: "name",
      value: "id"
    }
  });
  const { state: stateRelationship, result: resultRelationship } = typeSettings.api.getRelation();
  const {
    handleSubmit,
    control,
    setError,
    resetField,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      tango_id: 0,
      perfil_facturacion_id: 0,
      habilitado_en_dxt: true,
      puede_crear_pedido: true,
      puede_editar_pedido: true,
      ver_pedidos_cumplidos: true,
      ver_sin_precio: false,
      mostrar_mensaje_de_advertencia: false,
      puede_anular_pedido: false,
      borrar_pedido_al_anular: false,
      aprobar_pedido_al_crear: false,
      dia_de_entrega: DIAS_DE_ENTREGA_DEFAULT
    },
    resolver: yupResolver(yupValidationSchema2)
  });
  const watchPuedeAnularPedido = watch("puede_anular_pedido");
  useEffect(() => {
    if (watchPuedeAnularPedido === false)
      resetField("borrar_pedido_al_anular", { defaultValue: false });
  }, [watchPuedeAnularPedido]);
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const { ...data } = dataUnsafe;
    if (data.email === "")
      delete data.email;
    const input = data;
    const result = await typeSettings.api.post(input, app);
    result.map({
      success: (_2) => {
        toast({
          title: USER_CREATED,
          status: "success"
        });
        app.navigate(URL_SETTINGS_VENDORS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  return /* @__PURE__ */ jsx("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FormErrors, { errors }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Información del Vendedor" }) }),
          /* @__PURE__ */ jsxs(GridItem, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx(
              ControlledSelect,
              {
                fieldProps: {
                  name: "tango_id",
                  placeholder: (_a2 = typeSettings.tangoRelatedFields) == null ? void 0 : _a2.placeholder,
                  options: resultRelationship,
                  noOptionsMessage(obj) {
                    var _a3;
                    return (_a3 = typeSettings.tangoRelatedFields) == null ? void 0 : _a3.empty;
                  },
                  isSearchable: true,
                  selectedOptionStyle: "check",
                  isLoading: stateRelationship instanceof FetchStateLoading,
                  virtualized: true
                },
                formControlProps: {
                  isDisabled: disableForm || !(stateRelationship instanceof FetchStateSuccess)
                },
                formControlInnerProps: {
                  label: (_b2 = typeSettings.tangoRelatedFields) == null ? void 0 : _b2.label
                },
                control
              }
            ),
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "username",
                id: "username",
                type: "text"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Nombre de Usuario"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            PasswordWithStatus,
            {
              fieldProps: {
                name: "password",
                id: "password"
              },
              formControlInnerProps: {
                label: "Contraseña"
              },
              passwordStatus,
              disableForm,
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "email",
                id: "email",
                type: "text",
                inputMode: "email"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Correo electrónico"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsxs(GridItem, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx(
              ControlledSelect,
              {
                fieldProps: {
                  name: "perfil_facturacion_id",
                  placeholder: "Seleccione un perfil",
                  options: resultPerfiles,
                  noOptionsMessage(obj) {
                    return "No hay perfiles disponibles";
                  },
                  isLoading: statePerfiles instanceof FetchStateLoading,
                  selectedOptionStyle: "check"
                },
                formControlProps: {
                  isDisabled: disableForm || !(statePerfiles instanceof FetchStateSuccess)
                },
                formControlInnerProps: {
                  label: "Perfil de facturación"
                },
                control
              }
            ),
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(
            ControlledRadio,
            {
              fieldProps: {
                name: "habilitado_en_dxt",
                options: [
                  {
                    value: true,
                    label: "Establecido en Tango"
                  },
                  {
                    value: false,
                    label: "Deshabilitado"
                  }
                ]
              },
              formControlProps: {
                isDisabled: disableForm
              },
              radioProps: {
                size: { base: "sm", sm: "md" }
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Comunicación" }) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledSwitch,
            {
              fieldProps: {
                name: "mostrar_mensaje_de_advertencia",
                id: "mostrar_mensaje_de_advertencia"
              },
              formControlProps: {
                width: "auto",
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Mostrar mensaje de advertencia"
              },
              control
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs(Stack, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_crear_pedido",
                  id: "puede_crear_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede crear pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_editar_pedido",
                  id: "puede_editar_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede editar pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "puede_anular_pedido",
                  id: "puede_anular_pedido"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede anular pedidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "borrar_pedido_al_anular",
                  id: "borrar_pedido_al_anular"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Borrar pedido al anular"
                },
                control,
                watch: {
                  isDisabled: watchPuedeAnularPedido === false,
                  ...watchPuedeAnularPedido === false && {
                    isChecked: false
                  }
                }
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "aprobar_pedido_al_crear",
                  id: "aprobar_pedido_al_crear"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Los pedidos se aprueban al crearlos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "ver_pedidos_cumplidos",
                  id: "ver_pedidos_cumplidos"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede ver los pedidos cumplidos"
                },
                control
              }
            ) }),
            /* @__PURE__ */ jsx(HStack, { spacing: 4, children: /* @__PURE__ */ jsx(
              ControlledSwitch,
              {
                fieldProps: {
                  name: "ver_sin_precio",
                  id: "ver_sin_precio"
                },
                formControlProps: {
                  width: "auto",
                  isDisabled: disableForm
                },
                formControlInnerProps: {
                  label: "Puede ver artículos sin precios"
                },
                control
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "dia_de_entrega",
                id: "dia_de_entrega",
                type: "number",
                inputMode: "tel"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Tiempo de entrega de pedidos",
                helperText: "Expresado en días"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsx(
      SettingsFormsButtons,
      {
        buttonActionText: "Guardar",
        isLoading: disableForm,
        buttonCancelUrl: typeSettings.cancelButtonNavigateTo
      }
    ) })
  ] }) });
};
const Form = (props) => {
  const { typeSettings } = props;
  return /* @__PURE__ */ jsx(Success$5, { typeSettings });
};
function Add() {
  const typeSettings = settings$1.vendors;
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SettingsFormHeading,
      {
        title: typeSettings.titles.create,
        returnButton: {
          buttonProps: {
            onClick: () => {
              navigate(URL_SETTINGS_VENDORS_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(Form, { typeSettings })
  ] });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Add
}, Symbol.toStringTag, { value: "Module" }));
async function loader$z({ request, params }) {
  return await startDraftUpdateEndpoint.get(request, params);
}
const action$z = unimplementedApiResponse;
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$z,
  loader: loader$z
}, Symbol.toStringTag, { value: "Module" }));
async function loader$y({ request, params }) {
  return await startNewOrderFromExistingOrderEndpoint.get(request, params);
}
const action$y = unimplementedApiResponse;
const route13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$y,
  loader: loader$y
}, Symbol.toStringTag, { value: "Module" }));
async function loader$x({ request, params }) {
  return await startNewOrderForCustomerEndpoint.get(request, params);
}
const action$x = unimplementedApiResponse;
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$x,
  loader: loader$x
}, Symbol.toStringTag, { value: "Module" }));
async function loader$w({ request, params }) {
  return await startNewDraftFromExistingDraftEndpoint.get(request, params);
}
const action$w = unimplementedApiResponse;
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$w,
  loader: loader$w
}, Symbol.toStringTag, { value: "Module" }));
async function loader$v({ request, params }) {
  return await startNewDraftForCustomerEndpoint.get(request, params);
}
const action$v = unimplementedApiResponse;
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$v,
  loader: loader$v
}, Symbol.toStringTag, { value: "Module" }));
class AdminRootController extends AuthenticatedRootController {
  async onRequest(req) {
    await super.onRequest(req);
    if (!req.auth.user.role.isAdmin()) {
      throw new DXTException(DXTErrorCode.ADMIN_ROLE_REQUIRED);
    }
  }
}
const adminRootController = new AdminRootController();
class VOArticuloListRecords extends ValueObject {
  validate(rawValue) {
    if (!Array.isArray(rawValue))
      this.throwError(rawValue);
    for (const e in rawValue) {
      if (typeof e !== "string")
        this.throwError(rawValue);
    }
    const result = rawValue.map(
      (s) => strToDXTArticuloListRecord(s)
    ).filter((e) => e != null);
    return result;
  }
}
const setArticuloListInputSchema = {
  data: (v) => new VOArticuloListRecords(v)
};
const validateArticuloListInput = (input) => validateInput(setArticuloListInputSchema, input);
const optionalStringsValidator = (v, def) => v == null ? def : new VOStrings(v).valueOf();
const dxtArticuloGetPrintListEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => await dxtArticuloPrintListRepository.getList()
);
const dxtArticuloGetEditListEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => await dxtArticuloEditListRepository.getList()
);
const dxtArticuloSetPrintListEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      body: validateArticuloListInput
    }
  },
  async (req) => {
    await dxtArticuloPrintListRepository.setList(req.validated.body.data);
    return { ok: true };
  }
);
const dxtArticuloSetEditListEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      body: validateArticuloListInput
    }
  },
  async (req) => {
    await dxtArticuloEditListRepository.setList(req.validated.body.data);
    return { ok: true };
  }
);
const dxtArticuloGetPrintListIdsEndpoint = createApiEndpoint(
  authenticatedRootController,
  {
    validation: {
      query: {
        param: optionalStringsValidator
      }
    }
  },
  async (req) => {
    const { param: params } = req.validated.query;
    const paramsToReturn = (params ?? []).map((p) => p.trim().toLowerCase()).filter((p) => p != null && p.length > 0);
    return await dxtArticuloPrintListRepository.getIdsWithParams(paramsToReturn);
  }
);
async function loader$u({ request, params }) {
  return await dxtArticuloGetPrintListIdsEndpoint.get(request, params);
}
const action$u = unimplementedApiResponse;
const route17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$u,
  loader: loader$u
}, Symbol.toStringTag, { value: "Module" }));
function OrdersAdd$3() {
  const { client } = useParams();
  return /* @__PURE__ */ jsx(Container, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx(OrdersAddPage, { client, draft: true }) });
}
const route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OrdersAdd$3
}, Symbol.toStringTag, { value: "Module" }));
function OrdersAdd$2() {
  const { client } = useParams();
  return /* @__PURE__ */ jsx(Container, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx(OrdersAddPage, { client, draft: false }) });
}
const route19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OrdersAdd$2
}, Symbol.toStringTag, { value: "Module" }));
const setActiveCompanyEndpoint = createApiEndpoint(
  adminRootController,
  /* *************************************************************************************************************** */
  {
    validation: {
      query: {
        company: stringValidator
      }
    }
  },
  /* *************************************************************************************************************** */
  async (req) => {
    const { company } = req.validated.query;
    const companies = await dictionaryRepository.getCompanies();
    for (const [key, companyUnsafe] of companies.entries()) {
      if (company === companyUnsafe.db_name || company.toLowerCase() === companyUnsafe.name.toLowerCase()) {
        const settings2 = await settingsService.getDBSettings();
        const newDBSettingsDTO = new StoredDBSettingsDTO({
          ...settings2,
          tango_active_company: companyUnsafe.db_name
        });
        await settingsService.setDBSettings(newDBSettingsDTO);
        emitBusEvent(
          new DBSettingsChangedEvent({
            passiveDBChanges: false,
            newDictionary: false,
            newCompany: true,
            resetCache: true
          })
        );
        const {
          tango_active_company,
          ...remaining
        } = newDBSettingsDTO.data;
        return remaining;
      }
    }
    throw new DXTException(DXTErrorCode.TANGO_COMPANY_NOT_LISTED_IN_DICTIONARY);
  }
  /* *************************************************************************************************************** */
);
const loader$t = unimplementedApiResponse;
async function action$t({ request, params }) {
  return await setActiveCompanyEndpoint.post(request, params);
}
const route20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$t,
  loader: loader$t
}, Symbol.toStringTag, { value: "Module" }));
const updateUserInputSchema = {
  tango_id: (v) => new VOUInt32(v),
  username: (v) => new VONotEmptyString(v),
  password: (v) => v != null ? new VODXTPassword(v) : void 0,
  puede_crear_pedido: (v) => new VOBoolean(v),
  puede_editar_pedido: (v) => new VOBoolean(v),
  puede_anular_pedido: (v) => new VOBoolean(v),
  borrar_pedido_al_anular: (v) => new VOBoolean(v),
  perfil_facturacion_id: (v) => new VOUInt32(v),
  aprobar_pedido_al_crear: (v) => new VOBoolean(v),
  ver_pedidos_cumplidos: (v) => new VOBoolean(v),
  dia_de_entrega: (v) => new VOIntegerRange(v, DIAS_DE_ENTREGA_MIN_DAYS, DIAS_DE_ENTREGA_MAX_DAYS),
  email: (v) => v != null ? new VOEmailAddress(v) : void 0,
  ver_sin_precio: (v) => new VOBoolean(v),
  mostrar_mensaje_de_advertencia: (v) => new VOBoolean(v),
  habilitado_en_dxt: (v) => new VOBoolean(v),
  id_lista_alternativa: (v) => v != null ? new VOUInt32(v) : null,
  bonificacion_lista_alternativa: (v) => v != null ? new VOPositiveNumber(v) : null
};
const createUserInputSchema = {
  ...updateUserInputSchema,
  password: (v) => new VODXTPassword(v)
};
const deleteUserInputSchema = {
  username: (v) => new VONotEmptyString(v)
};
const validateDeleteUserInput = (input) => validateInput(deleteUserInputSchema, input);
const updateClienteInputSchema = updateUserInputSchema;
const createClienteInputSchema = createUserInputSchema;
const validateUpdateClienteInput = (input) => validateInput(updateClienteInputSchema, input);
const validateCreateClienteInput = (input) => validateInput(createClienteInputSchema, input);
const updateVendedorInputSchema = updateUserInputSchema;
const createVendedorInputSchema = createUserInputSchema;
const validateUpdateVendedorInput = (input) => validateInput(updateVendedorInputSchema, input);
const validateCreateVendedorInput = (input) => validateInput(createVendedorInputSchema, input);
function clienteToSafeOutput(unsafe) {
  const {
    password_hash,
    ...remaining
  } = unsafe;
  return remaining;
}
function vendedorToSafeOutput(unsafe) {
  const {
    password_hash,
    ...remaining
  } = unsafe;
  return remaining;
}
function createDXTUserGetAllEndpoint(repository) {
  return createApiEndpoint(
    adminRootController,
    {
      validation: {
        query: {
          offset: paginationOffsetValidator,
          limit: paginationLimitValidator,
          order: optionalStringValidator
        }
      }
    },
    async (req) => {
      const { offset, limit, order } = req.validated.query;
      return await repository.getAllWithRelations({ offset, limit });
    }
  );
}
const dxtClienteGetAllEndpoint = createDXTUserGetAllEndpoint(dxtClienteRepository);
const dxtClienteGetOneEndpoint = createApiEndpoint(
  adminRootController,
  { validation: { params: { id_cliente: tangoIdValidator } } },
  async (req) => clienteToSafeOutput(await dxtClienteRepository.getById(req.validated.params.id_cliente))
);
const dxtClienteCreateEndpoint = createApiEndpoint(
  adminRootController,
  { validation: { body: validateCreateClienteInput } },
  async (req) => clienteToSafeOutput(await dxtClienteRepository.create(req.validated.body))
);
const dxtClienteUpdateEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id_cliente: tangoIdValidator },
      body: validateUpdateClienteInput
    }
  },
  async (req) => clienteToSafeOutput(await dxtClienteRepository.update(req.validated.params.id_cliente, req.validated.body))
);
const dxtClienteDeleteEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id_cliente: tangoIdValidator },
      body: validateDeleteUserInput
    }
  },
  async (req) => {
    await dxtClienteRepository.delete(req.validated.params.id_cliente, req.validated.body.username);
    return { ok: true };
  }
);
const dxtVendedorGetAllEndpoint = createDXTUserGetAllEndpoint(dxtVendedorRepository);
const dxtVendedorGetOneEndpoint = createApiEndpoint(
  adminRootController,
  { validation: { params: { id_vendedor: tangoIdValidator } } },
  async (req) => vendedorToSafeOutput(await dxtVendedorRepository.getById(req.validated.params.id_vendedor))
  //async (req): Promise<DXTVendedorResult> => vendedorToSafeOutput( await dxtVendedorRepository.getUserWithRelationsById(req.validated.params.id, false) ),
);
const dxtVendedorCreateEndpoint = createApiEndpoint(
  adminRootController,
  { validation: { body: validateCreateVendedorInput } },
  async (req) => vendedorToSafeOutput(await dxtVendedorRepository.create(req.validated.body))
);
const dxtVendedorUpdateEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id_vendedor: tangoIdValidator },
      body: validateUpdateVendedorInput
    }
  },
  async (req) => vendedorToSafeOutput(await dxtVendedorRepository.update(req.validated.params.id_vendedor, req.validated.body))
);
const dxtVendedorDeleteEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id_vendedor: tangoIdValidator },
      body: validateDeleteUserInput
    }
  },
  async (req) => {
    await dxtVendedorRepository.delete(req.validated.params.id_vendedor, req.validated.body.username);
    return { ok: true };
  }
);
const dxtVendedorGetCustomersEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => {
    var _a2;
    const { user } = req.auth;
    const tangoId = (_a2 = user.tangoId) == null ? void 0 : _a2.valueOf();
    if (!user.role.isVendor())
      throw new DXTException(DXTErrorCode.VENDOR_ROLE_REQUIRED);
    if (typeof tangoId !== "number")
      throw new DXTException(DXTErrorCode.UNEXPECTED_ERROR, "dxtVendedorGetCustomersEndpoint");
    return await clienteRepository.getAllByVendor(tangoId);
  }
);
const dxtUsuarioGetAuxiliaresEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => {
    req.auth;
    const [perfiles, listas] = await Promise.all([
      perfilRepository.getAll(),
      listaRepository.getAll()
    ]);
    return {
      listas,
      perfiles
    };
  }
);
async function loader$s({ request, params }) {
  return await dxtVendedorGetOneEndpoint.get(request, params);
}
async function action$s({ request, params }) {
  return await mapEndpoint(request, params, {
    delete: dxtVendedorDeleteEndpoint,
    patch: dxtVendedorUpdateEndpoint
  });
}
const route21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$s,
  loader: loader$s
}, Symbol.toStringTag, { value: "Module" }));
const useCustomValidationSchema = () => {
  const [passwordStatus, setPasswordStatus] = useState(null);
  const yupValidationSchema2 = yup.object({
    old_password: yup.string().required("Ingrese su contaseña actual"),
    new_password: yup.string().required("Ingrese su nueva contraseña").test("password", "Formato de contraseña no válido", (v) => {
      if (v != "" && v != null) {
        let newPasswordStatus = dxtPasswordStatus(v);
        if (!_.isEqual(passwordStatus, newPasswordStatus))
          setPasswordStatus(newPasswordStatus);
        return yupVOValidation(VODXTPassword, v);
      }
      return true;
    }),
    new_password_repeat: yup.string().required("Repita su nueva contraseña").oneOf([yup.ref("new_password")], "Las contraseñas deben coincidir")
  }).required();
  return { yupValidationSchema: yupValidationSchema2, passwordStatus };
};
const ChangePassword = () => {
  const app = useAppResources();
  const toast = useToast();
  const { yupValidationSchema: yupValidationSchema2, passwordStatus } = useCustomValidationSchema();
  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({
    defaultValues: {
      old_password: "",
      new_password: "",
      new_password_repeat: ""
    },
    resolver: yupResolver(yupValidationSchema2)
  });
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const { new_password_repeat: _new_password_repeat, ...data } = dataUnsafe;
    const input = data;
    const result = await authChangePasswordRequest(input, app);
    result.map({
      success: (successState) => {
        toast({
          title: PASSWORD_CHANGED,
          status: "success"
        });
        app.authDispatch(new AuthActionRefreshAll(successState.data.user));
        app.navigate(URL_MAIN_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  return /* @__PURE__ */ jsx("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FormErrors, { errors }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(Grid, { templateColumns: "1fr", alignItems: "start", gap: 4, children: [
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
        PasswordWithStatus,
        {
          fieldProps: {
            name: "old_password",
            id: "old_password"
          },
          formControlInnerProps: {
            label: "Contraseña Actual"
          },
          disableForm,
          control
        }
      ) }),
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
        PasswordWithStatus,
        {
          fieldProps: {
            name: "new_password",
            id: "new_password"
          },
          formControlInnerProps: {
            label: "Nueva contraseña"
          },
          passwordStatus,
          disableForm,
          control
        }
      ) }),
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
        PasswordWithStatus,
        {
          fieldProps: {
            name: "new_password_repeat",
            id: "new_password_repeat"
          },
          formControlInnerProps: {
            label: "Confirmar nueva contraseña"
          },
          disableForm,
          control
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsx(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};
function Tango$1() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Container, { maxW: "2xl", sx: { my: 4 }, children: [
    /* @__PURE__ */ jsx(
      SettingsFormHeading,
      {
        title: CHANGE_PASSWORD,
        returnButton: {
          buttonProps: {
            onClick: () => {
              navigate(URL_MAIN_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(ChangePassword, {})
  ] });
}
const route22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tango$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader$r({ request, params }) {
  return await dxtArticuloGetPrintListEndpoint.get(request, params);
}
async function action$r({ request, params }) {
  return await dxtArticuloSetPrintListEndpoint.post(request, params);
}
const route23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$r,
  loader: loader$r
}, Symbol.toStringTag, { value: "Module" }));
async function loader$q({ request, params }) {
  return await dxtClienteGetOneEndpoint.get(request, params);
}
async function action$q({ request, params }) {
  return await mapEndpoint(request, params, {
    delete: dxtClienteDeleteEndpoint,
    patch: dxtClienteUpdateEndpoint
  });
}
const route24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$q,
  loader: loader$q
}, Symbol.toStringTag, { value: "Module" }));
async function loader$p({ request, params }) {
  return await dxtArticuloGetEditListEndpoint.get(request, params);
}
async function action$p({ request, params }) {
  return await dxtArticuloSetEditListEndpoint.post(request, params);
}
const route25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$p,
  loader: loader$p
}, Symbol.toStringTag, { value: "Module" }));
const loader$o = async (o) => await dxtUsuarioGetAuxiliaresEndpoint.get(o.request, o.params);
const action$o = unimplementedApiResponse;
const route26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$o,
  loader: loader$o
}, Symbol.toStringTag, { value: "Module" }));
const Loading$3 = () => /* @__PURE__ */ jsx(
  Box,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs(Grid, { templateColumns: "1fr", alignItems: "center", gap: 4, children: [
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormTextareaSkeleton, { height: "120px" }) })
    ] })
  }
);
const ClientsListModal = (props) => {
  const { isDraft, isOpen, onClose } = props;
  const stateDataSortened = useRef();
  const { state, retry } = useGetDXTVendorCustomers();
  const SearchableList = () => {
    const { filteredData, handleSearchInputChange } = useSearchField(stateDataSortened.current ?? [], ["screen_name"]);
    const itemHeight = 30;
    const Row = ({
      style,
      index,
      data
    }) => {
      const client = data == null ? void 0 : data[index];
      return client != null ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ListItem, { style, children: client.habilitado ? /* @__PURE__ */ jsx(
        Link,
        {
          href: pathParamsToUrl(isDraft ? URL_BORRADORES_ADD_PATH : URL_PEDIDOS_ADD_PATH, {
            client: client.id
          }),
          children: /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(ListIcon, { as: AccountCheckIcon, color: "green.400" }),
            client.screen_name
          ] })
        }
      ) : /* @__PURE__ */ jsxs(
        Box,
        {
          color: "gray.400",
          sx: {
            cursor: "not-allowed"
          },
          children: [
            /* @__PURE__ */ jsx(ListIcon, { as: AccountCancelIcon, color: "red.400" }),
            client.screen_name
          ]
        }
      ) }, client.id) }) : /* @__PURE__ */ jsx(Fragment, {});
    };
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Box, { sx: { pb: 4 }, children: /* @__PURE__ */ jsx(SearchField, { handleSearchInputChange }) }),
      /* @__PURE__ */ jsx(AutoSizer, { children: ({ height, width }) => /* @__PURE__ */ jsx(
        FixedSizeList,
        {
          height: height - 60,
          itemCount: filteredData.length ?? 0,
          itemSize: itemHeight,
          innerElementType: List,
          width,
          itemData: filteredData,
          children: Row
        }
      ) })
    ] });
  };
  return /* @__PURE__ */ jsxs(
    Modal,
    {
      isCentered: true,
      isOpen,
      onClose,
      scrollBehavior: "inside",
      size: { base: "full", sm: "md", md: "lg" },
      children: [
        /* @__PURE__ */ jsx(ModalOverlay, {}),
        /* @__PURE__ */ jsxs(
          ModalContent,
          {
            sx: {
              maxHeight: "auto"
            },
            children: [
              /* @__PURE__ */ jsx(ModalHeader, { children: "Seleccione el cliente" }),
              /* @__PURE__ */ jsx(ModalCloseButton, {}),
              /* @__PURE__ */ jsx(ModalBody, { minHeight: { base: "auto", sm: "420px !important" }, children: state.map({
                loading: (_2) => /* @__PURE__ */ jsxs(VStack, { spacing: 4, children: [
                  /* @__PURE__ */ jsx(Skeleton, { width: "full", height: "36px", borderRadius: "md" }),
                  /* @__PURE__ */ jsx(Skeleton, { width: "full", height: "250px", borderRadius: "md" })
                ] }),
                error: ({ error }) => /* @__PURE__ */ jsx(
                  ApiErrors,
                  {
                    error,
                    retry,
                    cancelAndNavigateTo: URL_SETTINGS_PATH
                  }
                ),
                success: (state2) => {
                  stateDataSortened.current = _.sortBy(state2.data, ["screen_name"]);
                  return /* @__PURE__ */ jsx(SearchableList, {});
                }
              }) })
            ]
          }
        )
      ]
    }
  );
};
const PrintModalLoading = () => {
  return /* @__PURE__ */ jsxs(VStack, { spacing: 4, children: [
    /* @__PURE__ */ jsx(FormInputSkeleton, {}),
    /* @__PURE__ */ jsx(FormInputSkeleton, {})
  ] });
};
let PrintModalClient = lazy(() => {
  return import("./assets/PrintModal.client-9CyKfGv2.js");
});
const PrintModal = (props) => {
  const { pedidos, renglones, isOpen, onClose } = props;
  return /* @__PURE__ */ jsxs(Modal, { isCentered: true, isOpen, onClose, children: [
    /* @__PURE__ */ jsx(ModalOverlay, {}),
    /* @__PURE__ */ jsxs(ModalContent, { children: [
      /* @__PURE__ */ jsx(ModalHeader, { children: "Impresión de pedidos" }),
      /* @__PURE__ */ jsx(ModalCloseButton, {}),
      /* @__PURE__ */ jsx(ModalBody, { children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(PrintModalLoading, {}), children: /* @__PURE__ */ jsx(PrintModalClient, { pedidos, renglones }) }) })
    ] })
  ] });
};
const OrdersNav = ({
  isDraft,
  pedidos,
  stateRenglones,
  handleSearchInputChange
}) => {
  const app = useAppResources();
  const [create, setCreate] = useState(false);
  const [print, setPrint] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: printIsOpen,
    onOpen: printOnOpen,
    onClose: printOnClose
  } = useDisclosure();
  const [selectedPedidos, setSelectedPedidos] = useState([]);
  const selectedPedidosAndRenglones = useRef({
    pedidos: [],
    renglones: {}
  });
  useEffect(() => {
    const handleSetUnsetEvent = ({
      id,
      checked
    }) => {
      if (checked) {
        setSelectedPedidos((prevValues) => [...prevValues, id]);
      } else {
        setSelectedPedidos(
          (prevValues) => prevValues.filter((value) => value !== id)
        );
      }
    };
    eventBus.on("setUnsetSelectedPedido", handleSetUnsetEvent);
    return () => {
      eventBus.removeListener("setUnsetSelectedPedido", handleSetUnsetEvent);
    };
  }, []);
  const handleCreate = () => {
    if (app.authState.isCustomer()) {
      app.navigate(
        isDraft ? URL_BORRADORES_CUSTOMER_ADD_PATH : URL_PEDIDOS_CUSTOMER_ADD_PATH
      );
      return;
    }
    setCreate(true);
    onOpen();
  };
  const handleOnClose = () => {
    onClose();
    setCreate(false);
  };
  const handlePrint = () => {
    selectedPedidosAndRenglones.current.pedidos = pedidos.filter(
      (pedido) => selectedPedidos.includes(pedido.id)
    );
    if (Array.isArray(selectedPedidosAndRenglones.current.pedidos) && selectedPedidosAndRenglones.current.pedidos.length > 0 && stateRenglones.isSuccess()) {
      selectedPedidosAndRenglones.current.renglones = _.pick(
        stateRenglones.data,
        selectedPedidos
      );
    }
    setPrint(true);
    printOnOpen();
  };
  const handlePrintOnClose = () => {
    printOnClose();
    setPrint(false);
  };
  const selectedInfo = selectedPedidos.length <= 0 ? void 0 : selectedPedidos.length == 1 ? `1 ${SELECTED_S}` : `${selectedPedidos.length} ${SELECTED_P}`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        bg: useColorModeValue("white", "blue.900"),
        sx: {
          px: 4,
          position: "sticky",
          zIndex: 1e3,
          top: 0
        },
        children: /* @__PURE__ */ jsxs(Flex, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxs(HStack, { spacing: { base: 2, sm: 3 }, alignItems: "center", children: [
            (app.authState.isVendor() || app.authState.isCustomer()) && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
              ResponsiveIconButton,
              {
                icon: PlusIcon,
                text: isDraft ? CREATE_DRAFT : CREATE_ORDER,
                sharedProps: {
                  size: "sm",
                  fontWeight: "400",
                  colorScheme: isDraft ? "green" : "orange",
                  onClick: () => {
                    handleCreate();
                  }
                },
                iconProps: {
                  boxSize: {
                    base: 5,
                    md: 4
                  }
                }
              }
            ) }),
            !isDraft && /* @__PURE__ */ jsx(
              ResponsiveIconButton,
              {
                icon: PrinterIcon,
                text: PRINT,
                sharedProps: {
                  size: "sm",
                  fontWeight: "400",
                  colorScheme: "blue",
                  onClick: () => handlePrint(),
                  isDisabled: selectedPedidos.length <= 0
                },
                iconProps: {
                  boxSize: {
                    base: 5,
                    md: 4
                  }
                }
              }
            ),
            selectedInfo != null && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                Tag,
                {
                  display: { base: "none", sm: "inherited" },
                  height: 8,
                  borderRadius: 40,
                  size: "md",
                  variant: "solid",
                  colorScheme: "blue",
                  children: /* @__PURE__ */ jsx(TagLabel, { marginX: 1, children: selectedInfo })
                }
              ),
              /* @__PURE__ */ jsx(
                Tag,
                {
                  display: { base: "inherited", sm: "none" },
                  height: 8,
                  borderRadius: 40,
                  size: "md",
                  variant: "solid",
                  colorScheme: "blue",
                  children: /* @__PURE__ */ jsx(TagLabel, { marginX: 1, children: selectedPedidos.length })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(Flex, { alignItems: "center", marginLeft: 4, children: /* @__PURE__ */ jsx(HStack, { spacing: { base: 2, md: 4 }, children: /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
            SearchField,
            {
              handleSearchInputChange
            }
          ) }) }) })
        ] })
      }
    ),
    create && /* @__PURE__ */ jsx(
      ClientsListModal,
      {
        isDraft,
        isOpen,
        onClose: handleOnClose
      }
    ),
    print && /* @__PURE__ */ jsx(
      PrintModal,
      {
        isOpen: printIsOpen,
        onClose: handlePrintOnClose,
        pedidos: selectedPedidosAndRenglones.current.pedidos,
        renglones: selectedPedidosAndRenglones.current.renglones
      }
    )
  ] });
};
function calculateRealOrderStatus(pedido, stateRenglones) {
  if (!stateRenglones.isSuccess())
    return pedido.estado;
  return realOrderStatus(
    pedido,
    stateRenglones.data[pedido.id]
  );
}
function getEstadoPedidoColor(estado, suffix) {
  let color;
  switch (estado) {
    case EstadoPedido.INGRESADO:
      color = "blue";
      break;
    case EstadoPedido.APROBADO:
      color = "purple";
      break;
    case EstadoPedido.CUMPLIDO:
      color = "green";
      break;
    case EstadoPedido.CERRADO:
      color = "black";
      break;
    case EstadoPedido.ANULADO:
      color = "red";
      break;
    default:
      color = "gray";
  }
  if (suffix == null)
    return color;
  return `${color}${suffix}`;
}
const BadgePedidosEstado = ({ estado }) => {
  const name = getEstadoPedidoText(estado);
  const colorScheme = getEstadoPedidoColor(estado);
  return /* @__PURE__ */ jsx(Badge, { fontSize: "1em", variant: "solid", colorScheme, lineHeight: "1.5em", children: name });
};
const PedidoMenu = ({
  app,
  draft,
  pedido,
  onDelete
}) => {
  const user = app.authState.userInfo;
  const isAdmin = user.role == UserRole.admin;
  const canEditOrder = isUserAllowedToModifyOrder(user, pedido.estado);
  const canDeleteOrder = user.puede_anular_pedido && isUserAllowedToCancelOrDeleteOrder(user, pedido.estado);
  const deleteWhenCancel = draft || user.borrar_pedido_al_anular;
  return /* @__PURE__ */ jsxs(Menu, { isLazy: true, id: "menu", children: [
    /* @__PURE__ */ jsx(
      MenuButton,
      {
        as: IconButton,
        size: "sm",
        "aria-label": OPTIONS,
        icon: /* @__PURE__ */ jsx(DotsVerticalIcon, {}),
        variant: "outline",
        colorScheme: "white"
      }
    ),
    /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsxs(MenuList, { rootProps: { zIndex: 2e3 }, children: [
      !isAdmin && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          MenuItem,
          {
            onClick: () => {
              app.navigate(
                pathParamsToUrl(
                  draft ? URL_BORRADORES_EDIT_PATH : URL_PEDIDOS_EDIT_PATH,
                  { id: pedido.id }
                )
              );
            },
            isDisabled: !canEditOrder,
            children: PEDIDO_MENU_MODIFY
          }
        ),
        /* @__PURE__ */ jsx(MenuItem, { onClick: () => {
        }, children: PEDIDO_MENU_DUPLICATE }),
        /* @__PURE__ */ jsx(MenuItem, { onClick: () => {
        }, children: draft ? PEDIDO_MENU_CREATE_ORDER : PEDIDO_MENU_CREATE_DRAFT }),
        draft && /* @__PURE__ */ jsx(MenuItem, { onClick: () => {
        }, children: PEDIDO_MENU_CONVERT_DRAFT_TO_ORDER }),
        /* @__PURE__ */ jsx(MenuDivider, {})
      ] }),
      /* @__PURE__ */ jsx(
        MenuItem,
        {
          onClick: () => onDelete(pedido.id),
          isDisabled: !canDeleteOrder,
          children: deleteWhenCancel ? PEDIDO_MENU_DELETE : PEDIDO_MENU_CANCEL
        }
      )
    ] }) })
  ] });
};
const RenglonesEmpty = () => /* @__PURE__ */ jsxs(Alert, { status: "warning", children: [
  /* @__PURE__ */ jsx(AlertIcon, {}),
  /* @__PURE__ */ jsx(AlertDescription, { children: "El pedido no cuenta con productos." })
] });
const RenglonesError = () => /* @__PURE__ */ jsxs(Alert, { status: "error", children: [
  /* @__PURE__ */ jsx(AlertIcon, {}),
  /* @__PURE__ */ jsx(AlertDescription, { children: "Ocurrió un error al cargar los detalles del pedido." })
] });
const RenglonesLoading = () => /* @__PURE__ */ jsx(
  Box,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs(Grid, { templateColumns: "1fr", alignItems: "center", gap: 2, children: [
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, { height: "20px" }) }),
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, { height: "20px" }) }),
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, { height: "20px" }) }),
      /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, { height: "20px" }) })
    ] })
  }
);
const RenglonesPedido = ({
  nro_pedido,
  renglones
}) => {
  return /* @__PURE__ */ jsx(TableContainer, { sx: { p: 0, m: 0 }, children: /* @__PURE__ */ jsxs(
    Table,
    {
      variant: "stripedHoverOverCard",
      colorScheme: "gray",
      size: "sm",
      borderWidth: "1px",
      children: [
        /* @__PURE__ */ jsx(Thead, { children: /* @__PURE__ */ jsx(Tr, { children: /* @__PURE__ */ jsx(Th, { sx: { py: 2 }, children: /* @__PURE__ */ jsxs(
          Grid,
          {
            templateColumns: { base: "1fr 1fr 1fr", md: "4fr 1fr 1fr 1fr" },
            gap: 6,
            children: [
              /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(Heading, { fontSize: { base: "xs", md: "sm" }, children: "Artículo" }) }),
              /* @__PURE__ */ jsx(
                GridItem,
                {
                  sx: {
                    display: { base: "none", md: "block" }
                  },
                  children: /* @__PURE__ */ jsx(
                    Heading,
                    {
                      fontSize: { base: "xs", md: "sm" },
                      textAlign: "center",
                      children: "Precio"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                Heading,
                {
                  fontSize: { base: "xs", md: "sm" },
                  textAlign: "center",
                  children: "Cantidad"
                }
              ) }),
              /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
                Heading,
                {
                  fontSize: { base: "xs", md: "sm" },
                  textAlign: "center",
                  children: "Subtotal"
                }
              ) })
            ]
          }
        ) }) }) }),
        /* @__PURE__ */ jsx(Tbody, { children: renglones.map(
          ({
            id_articulo,
            nombre_articulo,
            codigo_articulo,
            descripcion_adicional,
            precio,
            cantidad,
            subtotal
          }, index) => /* @__PURE__ */ jsx(Tr, { children: /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsxs(
            Grid,
            {
              templateColumns: {
                base: "1fr 1fr 1fr",
                md: "4fr 1fr 1fr 1fr"
              },
              gap: 6,
              children: [
                /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(TextWordBreak, { children: formatNombreArticulo(
                  nombre_articulo,
                  id_articulo,
                  descripcion_adicional
                ) }) }),
                /* @__PURE__ */ jsx(
                  GridItem,
                  {
                    sx: {
                      display: { base: "none", md: "block" }
                    },
                    children: /* @__PURE__ */ jsx(TextPrice, { precio, moneda: "$" })
                  }
                ),
                /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(Text, { textAlign: "center", children: cantidad }) }),
                /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(TextPrice, { precio: subtotal, moneda: "$" }) })
              ]
            }
          ) }) }, `details-${nro_pedido}-${index}`)
        ) })
      ]
    }
  ) });
};
const Renglones = ({ wasOpen, pedido, stateRenglones }) => {
  return /* @__PURE__ */ jsx(Box, { sx: { mt: 6 }, children: wasOpen && stateRenglones.map({
    loading: (_2) => /* @__PURE__ */ jsx(RenglonesLoading, {}),
    error: (_2) => /* @__PURE__ */ jsx(RenglonesError, {}),
    success: (state) => {
      var _a2;
      const { id, numero_pedido } = pedido;
      const renglones = (_a2 = state.data) == null ? void 0 : _a2[id];
      if (!Array.isArray(renglones))
        return /* @__PURE__ */ jsx(RenglonesEmpty, {});
      return /* @__PURE__ */ jsx(
        RenglonesPedido,
        {
          nro_pedido: numero_pedido,
          renglones
        }
      );
    }
  }) });
};
const Pedido = ({
  index,
  app,
  draft,
  pedido,
  stateRenglones,
  onDelete,
  isHidden
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const checkboxBorderColor = useColorModeValue("gray.800", "white");
  const wasOpen = useRef(false);
  const realOrderStatus2 = calculateRealOrderStatus(pedido, stateRenglones);
  const renglonesComponent = useMemo(
    () => /* @__PURE__ */ jsx(
      Renglones,
      {
        wasOpen: wasOpen.current,
        pedido,
        stateRenglones
      }
    ),
    [wasOpen.current, stateRenglones.constructor.name]
  );
  const handleToggleDetails = () => {
    const nowIsOpen = !isOpen;
    if (nowIsOpen)
      wasOpen.current = true;
    setIsOpen(nowIsOpen);
    eventBus.emit("togglePedidoDetails", { id: pedido.id });
  };
  const handleCheckboxChange = (checked2, id2) => {
    setChecked(!!checked2);
    eventBus.emit("setUnsetSelectedPedido", { id: id2, checked: checked2 });
  };
  useEffect(() => {
    const handleEvent = ({ id: id2 }) => {
      if (pedido.id !== id2)
        setIsOpen(false);
    };
    eventBus.on("togglePedidoDetails", handleEvent);
    return () => {
      eventBus.removeListener("togglePedidoDetails", handleEvent);
    };
  }, []);
  const {
    id,
    numero_pedido,
    fecha_alta,
    fecha_entrega,
    codigo_cliente,
    codigo_vendedor,
    codigo_transporte,
    nombre_cliente,
    nombre_vendedor,
    nombre_transporte,
    total,
    descuento,
    comentarios,
    descripcion
  } = pedido;
  const estado = realOrderStatus2;
  const showComments = comentarios != null && comentarios.length > 0;
  return /* @__PURE__ */ jsx(
    Tr,
    {
      sx: {
        ...isHidden && !checked && {
          display: "none"
        }
      },
      children: /* @__PURE__ */ jsxs(
        Td,
        {
          sx: {
            py: 6,
            position: "relative",
            borderTopWidth: { base: "3px", md: "4px" },
            borderTopStyle: "solid",
            borderTopColor: `${draft ? "blue.500 !important" : getEstadoPedidoColor(estado, ".500 !important")}`
          },
          children: [
            /* @__PURE__ */ jsxs(
              Box,
              {
                display: "flex",
                sx: {
                  position: "absolute",
                  right: 5,
                  top: 5
                },
                flexDirection: "column",
                children: [
                  /* @__PURE__ */ jsx(
                    PedidoMenu,
                    {
                      app,
                      draft,
                      pedido,
                      onDelete
                    }
                  ),
                  !draft && /* @__PURE__ */ jsx(
                    Checkbox,
                    {
                      size: "xl",
                      colorScheme: "blue",
                      sx: {
                        mt: 2,
                        borderWidth: 0,
                        borderColor: checkboxBorderColor
                      },
                      onChange: (e) => {
                        handleCheckboxChange(e.target.checked, id);
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Grid,
              {
                templateColumns: {
                  base: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)"
                },
                gap: 6,
                sx: {
                  cursor: "pointer"
                },
                onClick: () => {
                  handleToggleDetails();
                },
                children: [
                  draft ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(GridItem, { colSpan: { base: 2, md: 4 }, children: /* @__PURE__ */ jsx(Heading, { size: "md", textTransform: "uppercase", children: descripcion }) }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsxs(GridItem, { children: [
                      /* @__PURE__ */ jsx(Heading, { size: "sm", children: "Pedido" }),
                      /* @__PURE__ */ jsx(Text, { children: numero_pedido })
                    ] }),
                    /* @__PURE__ */ jsxs(GridItem, { children: [
                      /* @__PURE__ */ jsx(Heading, { size: "sm", children: "Estado" }),
                      /* @__PURE__ */ jsx(BadgePedidosEstado, { estado })
                    ] }),
                    /* @__PURE__ */ jsxs(GridItem, { children: [
                      /* @__PURE__ */ jsx(Heading, { size: "sm", children: "Emisión" }),
                      /* @__PURE__ */ jsx(Text, { children: dateToLocale(fecha_alta) })
                    ] }),
                    /* @__PURE__ */ jsxs(GridItem, { children: [
                      /* @__PURE__ */ jsx(Heading, { size: "sm", children: "Entrega" }),
                      /* @__PURE__ */ jsx(Text, { children: dateToLocale(fecha_entrega) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(GridItem, { children: [
                    /* @__PURE__ */ jsx(Heading, { size: "sm", children: "Cliente" }),
                    /* @__PURE__ */ jsx(TextWordBreak, { children: formatCliente(codigo_cliente, nombre_cliente) })
                  ] }),
                  /* @__PURE__ */ jsxs(GridItem, { children: [
                    /* @__PURE__ */ jsx(Heading, { size: "sm", children: "Vendedor" }),
                    /* @__PURE__ */ jsx(TextWordBreak, { children: formatAuxiliares(codigo_vendedor, nombre_vendedor) })
                  ] }),
                  /* @__PURE__ */ jsxs(GridItem, { children: [
                    /* @__PURE__ */ jsx(Heading, { size: "sm", children: "Transporte" }),
                    /* @__PURE__ */ jsx(TextWordBreak, { children: formatAuxiliares(codigo_transporte, nombre_transporte) })
                  ] }),
                  /* @__PURE__ */ jsxs(GridItem, { children: [
                    /* @__PURE__ */ jsxs(
                      Heading,
                      {
                        size: "md",
                        sx: {
                          textTransform: "uppercase",
                          color: estado === EstadoPedido.APROBADO && "green.400"
                        },
                        children: [
                          "Total",
                          descuento != null && /* @__PURE__ */ jsxs(Fragment, { children: [
                            " ",
                            `-${descuento}%`
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Heading,
                      {
                        size: "md",
                        sx: {
                          fontWeight: "bolder",
                          color: estado === EstadoPedido.APROBADO && "green.400"
                        },
                        children: /* @__PURE__ */ jsx(TextPriceNative, { precio: total, moneda: "$" })
                      }
                    )
                  ] }),
                  showComments && /* @__PURE__ */ jsx(
                    GridItem,
                    {
                      colSpan: {
                        base: 2,
                        md: 4
                      },
                      children: /* @__PURE__ */ jsxs(Alert, { status: "info", children: [
                        /* @__PURE__ */ jsx(AlertIcon, {}),
                        /* @__PURE__ */ jsx(AlertDescription, { children: comentarios })
                      ] })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Box, { sx: { display: isOpen ? "block" : "none" }, children: renglonesComponent }) }, `pedido-details-${index}`)
          ]
        }
      )
    }
  );
};
function PedidoList(props) {
  const app = useAppResources();
  const user = app.authState.userInfo;
  const deleteOrder = user.borrar_pedido_al_anular.valueOf();
  const { draft, unfilteredPedidos, filteredPedidos, isFiltering, stateRenglones, reloadData } = props;
  const toast = useToast();
  const deleteDialogDisclouse = useDisclosure();
  const { isOpen: isDeleteDialogOpen, onOpen: onDeleteDialogOpen, onClose: onDeleteDialogClose } = deleteDialogDisclouse;
  const orderIdToDelete = useRef(null);
  const handleDeleteRequest = (orderId) => {
    orderIdToDelete.current = orderId;
    onDeleteDialogOpen();
  };
  const handleDeleteConfirmation = async () => {
    const orderId = orderIdToDelete.current;
    if (orderId != null) {
      const result = draft ? await deleteDraftRequest(orderId, app) : await deleteOrderRequest(orderId, app);
      console.log(result);
      result.map({
        success: (_2) => {
          toast({
            title: draft ? PEDIDO_DRAFT_DELETED : deleteOrder ? PEDIDO_ORDER_DELETED : PEDIDO_ORDER_CANCELED,
            status: "success"
          });
        },
        error: (e) => {
          toast({
            title: AN_ERROR_OCCURRED,
            status: "error"
          });
        }
      });
      if (result.isSuccess()) {
        await reloadData();
      }
      onDeleteDialogClose();
    }
  };
  return /* @__PURE__ */ jsxs(TableContainer, { sx: { p: 0, m: 0 }, children: [
    /* @__PURE__ */ jsx(
      Table,
      {
        variant: "stripedOverCard",
        colorScheme: "gray",
        size: "md",
        sx: {
          borderCollapse: "separate",
          borderSpacing: "0 1rem"
        },
        children: /* @__PURE__ */ jsxs(Tbody, { children: [
          unfilteredPedidos.map((pedido, index) => {
            return /* @__PURE__ */ jsx(
              Pedido,
              {
                index,
                draft,
                app,
                pedido,
                stateRenglones,
                onDelete: handleDeleteRequest,
                isHidden: isFiltering && !filteredPedidos.includes(pedido)
              },
              `pedido-${pedido.id}`
            );
          }),
          !filteredPedidos.length && /* @__PURE__ */ jsx(Tr, { children: /* @__PURE__ */ jsx(Td, { children: /* @__PURE__ */ jsxs(Alert, { status: "info", children: [
            /* @__PURE__ */ jsx(AlertIcon, {}),
            /* @__PURE__ */ jsx(AlertDescription, { children: isFiltering ? FILTER_NO_RESULTS : draft ? NO_BORRADORES : NO_PEDIDOS })
          ] }) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      DeleteDialog,
      {
        isOpen: isDeleteDialogOpen,
        onClose: onDeleteDialogClose,
        handleDeletion: handleDeleteConfirmation,
        message: {
          title: draft ? PEDIDO_DELETE_DRAFT : deleteOrder ? PEDIDO_DELETE_ORDER : PEDIDO_CANCEL_ORDER,
          body: draft ? PEDIDO_DELETE_DRAFT_CONFIRM : deleteOrder ? PEDIDO_DELETE_ORDER_CONFIRM : PEDIDO_CANCEL_ORDER_CONFIRM
        }
      }
    )
  ] });
}
const Success$4 = (props) => {
  const { showDrafts, pedidos, reloadData } = props;
  const user = useAuth().state.userOrThrow();
  const isAdmin = user.role == UserRole.admin;
  user.role == UserRole.vendor;
  const isCustomer = user.role == UserRole.customer;
  const {
    filteredData: filteredPedidos,
    handleSearchInputChange,
    isFiltering
  } = useSearchField(pedidos, [
    "comentario",
    ...!showDrafts ? ["numero_pedido"] : [],
    ...!isCustomer ? ["codigo_cliente", "nombre_cliente"] : [],
    ...isAdmin ? ["codigo_vendedor", "nombre_vendedor"] : []
  ]);
  const { state: stateRenglones } = useDXTApiFetch({
    ...showDrafts ? API_BORRADOR_GET_ALL_ROWS : API_PEDIDO_GET_ALL_ROWS,
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      OrdersNav,
      {
        isDraft: showDrafts,
        pedidos,
        stateRenglones,
        handleSearchInputChange
      }
    ),
    /* @__PURE__ */ jsx(
      PedidoList,
      {
        draft: showDrafts,
        stateRenglones,
        unfilteredPedidos: pedidos,
        filteredPedidos,
        isFiltering,
        reloadData
      }
    )
  ] });
};
const OrdersPage = (props) => {
  const showDrafts = props.showDrafts === true;
  const { state, retry, reload } = useDXTApiFetch({
    ...showDrafts ? API_BORRADOR_GET_ALL : API_PEDIDO_GET_ALL,
    silent: true
  });
  return state.map({
    loading: (_2) => /* @__PURE__ */ jsx(Loading$3, {}),
    error: ({ error }) => /* @__PURE__ */ jsx(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_PEDIDOS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx(Success$4, { showDrafts, pedidos: state2.data, reloadData: reload })
  });
};
function OrdersList$1() {
  return /* @__PURE__ */ jsxs(Container, { maxW: "6xl", sx: { my: 4 }, children: [
    /* @__PURE__ */ jsx(OrdersPage, { showDrafts: true }),
    ";"
  ] });
}
const route27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OrdersList$1
}, Symbol.toStringTag, { value: "Module" }));
function OrdersList() {
  return /* @__PURE__ */ jsx(Container, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx(OrdersPage, {}) });
}
const route28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OrdersList
}, Symbol.toStringTag, { value: "Module" }));
async function loader$n({ request, params }) {
  return await dxtVendedorGetCustomersEndpoint.get(request, params);
}
const action$n = unimplementedApiResponse;
const route29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$n,
  loader: loader$n
}, Symbol.toStringTag, { value: "Module" }));
const getProgramConfigFileEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => {
    const storedDBSettings = await settingsService.getProgramConfig(true);
    return storedDBSettings;
  }
);
async function loader$m({ request, params }) {
  return await getProgramConfigFileEndpoint.get(request, params);
}
const action$m = unimplementedApiResponse;
const route30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$m,
  loader: loader$m
}, Symbol.toStringTag, { value: "Module" }));
const API_DICTIONARY_GET_ALL = apiEndpoint("/dictionary", "GET");
const API_ACTIVE_COMPANY_UPDATE = apiEndpoint("/dictionary/active_company", "POST");
const companyUpdateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      ...API_ACTIVE_COMPANY_UPDATE,
      params: input,
      silent: true
    },
    app
  );
};
const yupValidationSchema$2 = yup.object({
  company: yup.string().required("Seleccione una empresa activa")
}).required();
const Success$3 = () => {
  const app = useAppResources();
  const toast = useToast();
  const { state: stateDictionary, result: resultDictionary } = useTangoList({
    endpoint: API_DICTIONARY_GET_ALL,
    fieldsMap: {
      label: "name",
      value: "db_name",
      selected: "is_active"
    }
  });
  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({
    defaultValues: {
      company: ""
    },
    resolver: yupResolver(yupValidationSchema$2)
  });
  const disableForm = isSubmitSuccessful || isSubmitting;
  useEffect(() => {
    if (stateDictionary instanceof FetchStateSuccess) {
      const selectedIndex = resultDictionary.findIndex(
        (x) => x.selected === true
      );
      if (selectedIndex >= 0) {
        reset({
          company: resultDictionary[selectedIndex].value
        });
      }
    }
  }, [stateDictionary]);
  const onSubmit = async (data) => {
    const input = {
      company: data.company
    };
    const result = await companyUpdateRequest(input, app);
    result.map({
      success: (_2) => {
        toast({
          title: COMPANY_UPDATED,
          status: "success"
        });
        app.navigate(URL_SETTINGS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  return /* @__PURE__ */ jsx("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FormErrors, { errors }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsxs(GridItem, { children: [
            /* @__PURE__ */ jsx(
              ControlledSelect,
              {
                fieldProps: {
                  name: "company",
                  placeholder: "Seleccione una empresa",
                  options: resultDictionary,
                  noOptionsMessage(obj) {
                    return "No hay empresas disponibles";
                  },
                  selectedOptionStyle: "check",
                  isLoading: stateDictionary instanceof FetchStateLoading
                },
                formControlProps: {
                  isDisabled: disableForm || !(stateDictionary instanceof FetchStateSuccess)
                },
                formControlInnerProps: {
                  label: "Empresa activa"
                },
                control
              }
            ),
            stateDictionary instanceof FetchStateError && /* @__PURE__ */ jsx(InlineError, { error: stateDictionary.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx(GridItem, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsx(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};
const FormCompany = () => {
  return /* @__PURE__ */ jsx(Success$3, {});
};
function Company() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SettingsFormHeading,
      {
        title: COMPANY,
        returnButton: {
          buttonProps: {
            onClick: () => {
              navigate(URL_SETTINGS_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(FormCompany, {})
  ] });
}
const route31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Company
}, Symbol.toStringTag, { value: "Module" }));
const API_ADMIN_STATUS = apiEndpoint("/admin/status", "GET");
const Loading$2 = () => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(VStack, { spacing: 4, width: "full", children: [
  /* @__PURE__ */ jsx(Skeleton, { width: "full", height: "70px", borderRadius: "md" }),
  /* @__PURE__ */ jsx(Skeleton, { width: "full", height: "70px", borderRadius: "md" }),
  /* @__PURE__ */ jsx(Skeleton, { width: "full", height: "120px", borderRadius: "md" }),
  /* @__PURE__ */ jsx(Skeleton, { width: "full", height: "70px", borderRadius: "md" })
] }) });
var SettingsListStatus = /* @__PURE__ */ ((SettingsListStatus2) => {
  SettingsListStatus2[SettingsListStatus2["error"] = 0] = "error";
  SettingsListStatus2[SettingsListStatus2["success"] = 1] = "success";
  return SettingsListStatus2;
})(SettingsListStatus || {});
var SettingsActionButtonState = /* @__PURE__ */ ((SettingsActionButtonState2) => {
  SettingsActionButtonState2[SettingsActionButtonState2["enabled"] = 0] = "enabled";
  SettingsActionButtonState2[SettingsActionButtonState2["disabled"] = 1] = "disabled";
  return SettingsActionButtonState2;
})(SettingsActionButtonState || {});
const SettingsListItem = (props) => {
  const { status, title, status_text, actionButtonState, actionButtonOnClick } = props;
  const color = status === 1 ? "green" : "red";
  return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsxs(
    Grid,
    {
      templateColumns: { base: "1fr", md: "6fr 1fr" },
      alignItems: "center",
      gap: 4,
      children: [
        /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsxs(HStack, { justifyContent: "start", children: [
          status != null && (status === 1 ? /* @__PURE__ */ jsx(Icon, { as: CheckCircleIcon, color: "green.500", boxSize: 8 }) : /* @__PURE__ */ jsx(Icon, { as: CloseCircleIcon, color: "red.500", boxSize: 8 })),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Heading, { size: "md", textTransform: "uppercase", children: title }),
            status_text != null && /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "outline",
                colorScheme: color,
                fontSize: "medium",
                fontWeight: "normal",
                textTransform: "none",
                sx: {
                  mt: 1,
                  whiteSpace: "wrap"
                },
                children: status_text.split("\n").map((line, key) => /* @__PURE__ */ jsx("p", { style: { minHeight: 10 }, children: line }, `text-${key}`))
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(GridItem, { textAlign: { base: "end", md: "start" }, children: /* @__PURE__ */ jsx(
          SettingsListButton,
          {
            buttonState: actionButtonState,
            onClick: actionButtonOnClick,
            fullWidth: false,
            children: CONFIGURE
          }
        ) })
      ]
    }
  ) }) });
};
const SettingsListButton = (props) => {
  const { buttonState, onClick, children, fullWidth } = props;
  return /* @__PURE__ */ jsx(
    Button,
    {
      onClick,
      ...buttonState === SettingsActionButtonState.disabled ? {
        isDisabled: true
      } : {
        colorScheme: "blue"
      },
      width: fullWidth === true ? "full" : void 0,
      children
    }
  );
};
const Success$2 = (props) => {
  const { stateData } = props;
  const navigate = useNavigate();
  const configSuccessful = stateData.dictionary_ok && stateData.company_ok;
  const errorText = stateData.company_error != null ? `${stateData.company_error}${stateData.company_error_details != null ? `

${stateData.company_error_details}` : ""}` : void 0;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(VStack, { spacing: 4, width: "full", children: [
    /* @__PURE__ */ jsx(Box, { width: "full", children: /* @__PURE__ */ jsx(
      SettingsListItem,
      {
        title: TANGO_CONNECTION,
        status_text: stateData.dictionary_error != null && stateData.dictionary_error || stateData.settings.db.tango_dictionary,
        status: stateData.dictionary_ok ? SettingsListStatus.success : SettingsListStatus.error,
        actionButtonState: SettingsActionButtonState.enabled,
        actionButtonOnClick: () => {
          navigate(URL_SETTINGS_TANGO_PATH);
        }
      }
    ) }),
    /* @__PURE__ */ jsx(Box, { width: "full", children: /* @__PURE__ */ jsx(
      SettingsListItem,
      {
        title: COMPANY,
        status_text: errorText ?? stateData.settings.db.tango_active_company,
        status: stateData.company_ok ? SettingsListStatus.success : SettingsListStatus.error,
        actionButtonState: stateData.dictionary_ok ? SettingsActionButtonState.enabled : SettingsActionButtonState.disabled,
        actionButtonOnClick: () => {
          navigate(URL_SETTINGS_COMPANY_PATH);
        }
      }
    ) }),
    /* @__PURE__ */ jsx(Box, { width: "full", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", sm: "repeat(2,1fr)" },
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { textAlign: "center", children: /* @__PURE__ */ jsx(
            SettingsListButton,
            {
              fullWidth: true,
              buttonState: configSuccessful ? SettingsActionButtonState.enabled : SettingsActionButtonState.disabled,
              onClick: () => {
                navigate(URL_SETTINGS_CUSTOMERS_PATH);
              },
              children: CLIENTS_ADMIN
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { textAlign: "center", children: /* @__PURE__ */ jsx(
            SettingsListButton,
            {
              fullWidth: true,
              buttonState: configSuccessful ? SettingsActionButtonState.enabled : SettingsActionButtonState.disabled,
              onClick: () => {
                navigate(URL_SETTINGS_VENDORS_PATH);
              },
              children: SELLERS_ADMIN
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { textAlign: "center", children: /* @__PURE__ */ jsx(
            SettingsListButton,
            {
              fullWidth: true,
              buttonState: configSuccessful ? SettingsActionButtonState.enabled : SettingsActionButtonState.disabled,
              onClick: () => {
                navigate(URL_SETTINGS_ARTICULO_EDIT_LIST);
              },
              children: PRODUCT_EDIT_LIST
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { textAlign: "center", children: /* @__PURE__ */ jsx(
            SettingsListButton,
            {
              fullWidth: true,
              buttonState: configSuccessful ? SettingsActionButtonState.enabled : SettingsActionButtonState.disabled,
              onClick: () => {
                navigate(URL_SETTINGS_ARTICULO_PRINT_LIST);
              },
              children: PRODUCT_PRINT_LIST
            }
          ) })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(Box, { width: "full", children: /* @__PURE__ */ jsx(
      SettingsListItem,
      {
        title: VARIOUS_SETTINGS,
        actionButtonState: SettingsActionButtonState.enabled,
        actionButtonOnClick: () => {
          navigate(URL_SETTINGS_MISC_PATH);
        }
      }
    ) })
  ] }) });
};
const SettingsHome = () => {
  const { state, retry } = useDXTApiFetch({
    ...API_ADMIN_STATUS,
    silent: true
  });
  return /* @__PURE__ */ jsx(Fragment, { children: state.map({
    loading: (_2) => /* @__PURE__ */ jsx(Loading$2, {}),
    error: ({ error }) => /* @__PURE__ */ jsx(ApiErrors, { error, retry }),
    success: (state2) => /* @__PURE__ */ jsx(Success$2, { stateData: state2.data })
  }) });
};
function Settings() {
  return /* @__PURE__ */ jsx(SettingsHome, {});
}
const route32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Settings
}, Symbol.toStringTag, { value: "Module" }));
function OrdersAdd$1() {
  return /* @__PURE__ */ jsx(Container, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx(OrdersAddPage, { draft: true }) });
}
const route33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OrdersAdd$1
}, Symbol.toStringTag, { value: "Module" }));
function OrdersAdd() {
  return /* @__PURE__ */ jsx(Container, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx(OrdersAddPage, { draft: false }) });
}
const route34 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: OrdersAdd
}, Symbol.toStringTag, { value: "Module" }));
const API_SETTINGS_DB = apiEndpoint("/settings/db", "GET");
const API_SETTINGS_DB_SET = apiEndpoint("/settings/db", "POST");
const API_SETTINGS_MISC = apiEndpoint("/settings/misc", "GET");
const API_SETTINGS_MISC_SET = apiEndpoint("/settings/misc", "POST");
const Loading$1 = () => /* @__PURE__ */ jsx(
  Box,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) })
        ]
      }
    )
  }
);
const settingsDBUpdateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      ...API_SETTINGS_DB_SET,
      data: input,
      silent: true
    },
    app
  );
};
const settingsMiscUpdateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      ...API_SETTINGS_MISC_SET,
      data: input,
      silent: true
    },
    app
  );
};
const yupValidationSchema$1 = yup.object({
  db_host: yup.string().required("Ingrese el host de la base de datos"),
  db_port: yup.number().required("Ingrese un puerto").typeError("Ingrese un número de puerto válido").test(
    "is-port",
    "Ingrese un puerto válido",
    (v) => yupVOValidation(VOTCPPort, v)
  ),
  db_user: yup.string().required("Ingrese el usuario de la base de datos"),
  db_password: yup.string().required("Ingrese la contraseña de la base de datos"),
  tango_dictionary: yup.string().required("Ingrese el diccionario base de Tango").test(
    "mssql-db-name",
    "Ingrese un nombre de Diccionario base válido",
    (v) => yupVOValidation(VOMSSqlDBName, v)
  ),
  db_connection_timeout_seconds: yup.number().min(
    DB_CONNECTION_TIMEOUT_MIN_SECONDS,
    `El tiempo de espera debe ser mayor a ${DB_CONNECTION_TIMEOUT_MIN_SECONDS} segundos`
  ).max(
    DB_CONNECTION_TIMEOUT_MAX_SECONDS,
    `El tiempo de espera debe ser menor a ${DB_CONNECTION_TIMEOUT_MAX_SECONDS} segundos`
  ).required("Ingrese el tiempo de espera de la conexión a la base de datos").typeError(
    "Ingrese el tiempo de espera de la conexión a la base de datos"
  )
}).required();
const Success$1 = (props) => {
  const { stateData } = props;
  const app = useAppResources();
  const toast = useToast();
  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({
    defaultValues: stateData,
    resolver: yupResolver(yupValidationSchema$1)
  });
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const input = dataUnsafe;
    const result = await settingsDBUpdateRequest(input, app);
    result.map({
      success: (_2) => {
        toast({
          title: TANGO_CONNECTION_UPDATED,
          status: "success"
        });
        app.navigate(URL_SETTINGS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  return /* @__PURE__ */ jsx("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FormErrors, { errors }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "db_host",
                id: "db_host",
                type: "text"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Host"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "db_port",
                id: "db_port",
                type: "number",
                inputMode: "tel",
                htmlSize: 5,
                width: "auto"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Puerto"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "db_user",
                id: "db_user",
                type: "text"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Usuario SQL"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "db_password",
                id: "db_password",
                type: "password"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Contraseña SQL"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "tango_dictionary",
                id: "tango_dictionary",
                type: "text"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Diccionario base"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "db_connection_timeout_seconds",
                id: "db_connection_timeout_seconds",
                type: "number",
                inputMode: "tel",
                htmlSize: 5,
                maxLength: 5,
                width: "auto"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Tiempo de espera (segundos)"
              },
              control
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsx(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};
const FormTango = () => {
  const { state, retry } = useDXTApiFetch({
    ...API_SETTINGS_DB,
    silent: true
  });
  return state.map({
    loading: (_2) => /* @__PURE__ */ jsx(Loading$1, {}),
    error: ({ error }) => /* @__PURE__ */ jsx(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx(Success$1, { stateData: state2.data })
  });
};
function Tango() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SettingsFormHeading,
      {
        title: TANGO_CONNECTION,
        returnButton: {
          buttonProps: {
            onClick: () => {
              navigate(URL_SETTINGS_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(FormTango, {})
  ] });
}
const route35 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tango
}, Symbol.toStringTag, { value: "Module" }));
const loader$l = unimplementedApiResponse;
async function action$l({ request, params }) {
  return await mapEndpoint(request, params, {
    delete: cancelOrderEndpoint,
    patch: updateOrderEndpoint
  });
}
const route36 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$l,
  loader: loader$l
}, Symbol.toStringTag, { value: "Module" }));
const Loading = () => /* @__PURE__ */ jsx(
  Box,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormTextareaSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(FormTextareaSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(FormInputSkeleton, {}) })
        ]
      }
    )
  }
);
const ControlledCheckbox = (props) => {
  const { fieldProps, formControlProps, formControlInnerProps, control } = props;
  const { text, helperText, helperAction } = formControlInnerProps || {};
  const {
    field: { ref, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs(FormControl, { ...formControlProps, isInvalid: invalid, ref, children: [
    /* @__PURE__ */ jsxs(Flex, { alignItems: "center", children: [
      /* @__PURE__ */ jsx(Checkbox, { ...fieldProps, onChange, isChecked: value, children: text }),
      helperAction
    ] }),
    helperText != null && /* @__PURE__ */ jsx(FormHelperText, { children: helperText })
  ] });
};
const yupValidationSchema = yup.object({
  smtp_host: yup.string().required("Ingrese el host SMTP").test(
    "valid-host",
    "Ingrese un host SMTP válido",
    (v) => yupVOValidation(VOHost, v)
  ),
  smtp_username: yup.string().required("Ingrese el usuario SMTP"),
  smtp_password: yup.string().required("Ingrese la contraseña SMTP"),
  smtp_port: yup.number().required("Ingrese el puerto SMTP").typeError("Ingrese un número de puerto SMTP válido").test(
    "is-port",
    "Ingrese un puerto SMTP válido",
    (v) => yupVOValidation(VOTCPPort, v)
  ),
  smtp_use_tls: yup.boolean().required(),
  auth_expiration_days: yup.number().min(
    AUTH_EXPIRATION_MIN_DAYS,
    `El tiempo de espera debe ser mayor a ${AUTH_EXPIRATION_MIN_DAYS}`
  ).max(
    AUTH_EXPIRATION_MAX_DAYS,
    `El tiempo de espera debe ser menor a ${AUTH_EXPIRATION_MAX_DAYS}`
  ).required("Ingrese el tiempo de espera para logout").typeError("Ingrese el tiempo de espera para logout"),
  admin_email: yup.string().required("Ingrese el correo electrónico del Administrador").email("Ingrese un correo electrónico válido"),
  user_warning_message_title: yup.string().required("Ingrese el título del mensaje de advertencia"),
  user_warning_message_content: yup.string().required("Ingrese el contenido del mensaje de advertencia"),
  user_disabled_message_title: yup.string().required("Ingrese el título del mensaje de inhabilitación"),
  user_disabled_message_content: yup.string().required("Ingrese el contenido del mensaje de inhabilitación")
}).required();
const Success = (props) => {
  const { stateData } = props;
  const app = useAppResources();
  const toast = useToast();
  const {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm({
    defaultValues: stateData,
    resolver: yupResolver(yupValidationSchema)
  });
  const disableForm = isSubmitSuccessful || isSubmitting;
  const onSubmit = async (dataUnsafe) => {
    const input = dataUnsafe;
    const result = await settingsMiscUpdateRequest(input, app);
    result.map({
      success: (_2) => {
        toast({
          title: VARIOUS_SETTINGS_UPDATED,
          status: "success"
        });
        app.navigate(URL_SETTINGS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED
        });
        setError("root", { message: e.info.error_description });
      }
    });
  };
  return /* @__PURE__ */ jsx("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FormErrors, { errors }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Servidor de Correos" }) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "smtp_host",
                id: "smtp_host",
                type: "text",
                isDisabled: disableForm
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Hostname SMTP"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "smtp_username",
                id: "smtp_username",
                type: "text",
                isDisabled: disableForm
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Usuario SMTP"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "smtp_password",
                id: "smtp_password",
                type: "text",
                isDisabled: disableForm
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Contraseña SMTP"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "smtp_port",
                id: "smtp_port",
                type: "number",
                inputMode: "tel",
                htmlSize: 5,
                maxLength: 5,
                width: "auto",
                isDisabled: disableForm
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Puerto SMTP"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledCheckbox,
            {
              control,
              fieldProps: {
                id: "smtp_use_tls",
                name: "smtp_use_tls"
              },
              formControlInnerProps: {
                text: "Usar TLS"
              }
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "auth_expiration_days",
                id: "auth_expiration_days",
                type: "number",
                inputMode: "tel",
                htmlSize: 5,
                maxLength: 5,
                width: "auto",
                isDisabled: disableForm
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Tiempo de espera para logout",
                helperText: "Expresado en días"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "admin_email",
                id: "admin_email",
                type: "text",
                inputMode: "email",
                htmlSize: 30,
                width: "auto",
                isDisabled: disableForm
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Correo electrónico Administrador"
              },
              control
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsxs(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Heading, { size: "sm", textTransform: "uppercase", children: "Mensajes" }) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "user_warning_message_title",
                id: "user_warning_message_title",
                type: "text",
                isDisabled: disableForm
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Título del mensaje de advertencia"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: "Contenido del mensaje de advertencia" }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(
            ControlledTextarea,
            {
              fieldProps: {
                name: "user_warning_message_content",
                id: "user_warning_message_content",
                isDisabled: disableForm
              },
              formControlProps: {
                isDisabled: disableForm
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(Divider, {}) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(
            ControlledInput,
            {
              fieldProps: {
                name: "user_disabled_message_title",
                id: "user_disabled_message_title",
                type: "text",
                isDisabled: disableForm
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Título del mensaje de inhabilitación"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: "Contenido del mensaje de inhabilitación" }),
          /* @__PURE__ */ jsx(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx(
            ControlledTextarea,
            {
              fieldProps: {
                name: "user_disabled_message_content",
                id: "user_disabled_message_content",
                isDisabled: disableForm
              },
              formControlProps: {
                isDisabled: disableForm
              },
              control
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(CommonCard, { children: /* @__PURE__ */ jsx(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};
const FormMisc = () => {
  const { state, retry } = useDXTApiFetch({
    ...API_SETTINGS_MISC,
    silent: true
  });
  return state.map({
    loading: (_2) => /* @__PURE__ */ jsx(Loading, {}),
    error: ({ error }) => /* @__PURE__ */ jsx(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx(Success, { stateData: state2.data })
  });
};
function Misc() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SettingsFormHeading,
      {
        title: VARIOUS_SETTINGS,
        returnButton: {
          buttonProps: {
            onClick: () => {
              navigate(URL_SETTINGS_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(FormMisc, {})
  ] });
}
const route37 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Misc
}, Symbol.toStringTag, { value: "Module" }));
const loader$k = unimplementedApiResponse;
async function action$k({ request, params }) {
  return await mapEndpoint(request, params, {
    delete: cancelDraftEndpoint,
    patch: updateDraftEndpoint
  });
}
const route38 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$k,
  loader: loader$k
}, Symbol.toStringTag, { value: "Module" }));
async function loader$j({ request, params }) {
  return await getOrderRowsEndpoint.run(request, params);
}
const action$j = unimplementedApiResponse;
const route39 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$j,
  loader: loader$j
}, Symbol.toStringTag, { value: "Module" }));
async function loader$i({ request, params }) {
  return await startNewOrderEndpoint.get(request, params);
}
const action$i = unimplementedApiResponse;
const route40 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$i,
  loader: loader$i
}, Symbol.toStringTag, { value: "Module" }));
async function loader$h({ request, params }) {
  return await getDraftRowsEndpoint.run(request, params);
}
const action$h = unimplementedApiResponse;
const route41 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$h,
  loader: loader$h
}, Symbol.toStringTag, { value: "Module" }));
async function loader$g({ request, params }) {
  return await startNewDraftEndpoint.get(request, params);
}
const action$g = unimplementedApiResponse;
const route42 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$g,
  loader: loader$g
}, Symbol.toStringTag, { value: "Module" }));
function createCompanyGetAllEndpoint(controller, repository) {
  return createApiEndpoint(
    controller,
    /* *************************************************************************************************************** */
    {
      validation: {
        query: {
          offset: paginationOffsetValidator,
          limit: paginationLimitValidator
        }
      }
    },
    /* *************************************************************************************************************** */
    async (req) => {
      const {
        offset,
        limit
        /*, order*/
      } = req.validated.query;
      const data = await repository.getAll({
        offset,
        limit
        /*, order*/
      });
      return data;
    }
    /* *************************************************************************************************************** */
  );
}
const tangoClienteGetAllEndpoint = createCompanyGetAllEndpoint(
  adminRootController,
  clienteRepository
);
const tangoVendedorGetAllEndpoint = createCompanyGetAllEndpoint(
  adminRootController,
  vendedorRepository
);
const loader$f = async (o) => await tangoVendedorGetAllEndpoint.get(o.request, o.params);
const action$f = unimplementedApiResponse;
const route43 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$f,
  loader: loader$f
}, Symbol.toStringTag, { value: "Module" }));
const changePasswordInputValidationSchema = {
  old_password: (v) => new VODXTPassword(v),
  new_password: (v) => new VODXTPassword(v)
};
const validateChangePasswordInput = (input) => validateInput(
  changePasswordInputValidationSchema,
  input
);
async function authPrivateResultToPublic(auth) {
  const {
    auth_token,
    user
  } = auth;
  return {
    auth_token,
    user: await userEntityToPublicInfo(user)
  };
}
async function userEntityToPublicInfo(user) {
  const { user_warning_message_title: title, user_warning_message_content: content } = await settingsService.getMiscSettings();
  const userUnsafe = user.toUnsafe();
  const { password_hash, email, mostrar_mensaje_de_advertencia, ...remaining } = userUnsafe;
  return {
    ...remaining,
    ...mostrar_mensaje_de_advertencia && { message: {
      type: "warning",
      title,
      content
    } }
  };
}
const authChangePasswordEndpoint = createApiEndpoint(
  authenticatedRootController,
  /* *************************************************************************************************************** */
  {
    validation: {
      body: (input) => validateChangePasswordInput(input)
    }
  },
  /* *************************************************************************************************************** */
  async (req) => {
    const { old_password, new_password } = req.validated.body;
    const { user, auth_token } = req.auth;
    await authService.changePassword(
      user,
      old_password,
      new_password
    );
    return authPrivateResultToPublic(
      await authService.connect(auth_token)
    );
  }
  /* *************************************************************************************************************** */
);
const loader$e = unimplementedApiResponse;
async function action$e({ request, params }) {
  return await authChangePasswordEndpoint.patch(request, params);
}
const route44 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$e,
  loader: loader$e
}, Symbol.toStringTag, { value: "Module" }));
const getMiscSettingsEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => {
    const {
      admin_password_hash,
      ...remaining
    } = await settingsService.getMiscSettings(true);
    return remaining;
  }
);
const dbSettingsInputSchema = {
  db_host: (v) => new VONotEmptyString(v),
  db_port: (v) => new VOTCPPort(v),
  db_user: (v) => new VONotEmptyString(v),
  db_password: (v) => new VOString(v.trim()),
  db_connection_timeout_seconds: (v) => new VOIntegerRange(v, DB_CONNECTION_TIMEOUT_MIN_SECONDS, DB_CONNECTION_TIMEOUT_MAX_SECONDS),
  tango_dictionary: (v) => new VOMSSqlDBName(v)
};
const miscSettingsInputSchema = {
  smtp_host: (v) => new VOHost(v),
  smtp_username: (v) => new VOString(v.trim()),
  smtp_password: (v) => new VOString(v.trim()),
  smtp_port: (v) => new VOTCPPort(v),
  smtp_use_tls: (v) => new VOBoolean(v),
  auth_expiration_days: (v) => new VOIntegerRange(v, AUTH_EXPIRATION_MIN_DAYS, AUTH_EXPIRATION_MAX_DAYS),
  user_warning_message_title: (v) => new VONotEmptyString(v.trim()),
  user_warning_message_content: (v) => new VONotEmptyString(v.trim()),
  user_disabled_message_title: (v) => new VONotEmptyString(v.trim()),
  user_disabled_message_content: (v) => new VONotEmptyString(v.trim()),
  admin_email: (v) => new VOString(v.trim() === "" ? "" : new VOEmailAddress(v).valueOf())
};
const validateDBSettingsInput = (input) => validateInput(dbSettingsInputSchema, input);
const validateMiscSettingsInput = (input) => validateInput(miscSettingsInputSchema, input);
const updateMiscSettingsEndpoint = createApiEndpoint(
  adminRootController,
  /* *************************************************************************************************************** */
  {
    validation: {
      body: validateMiscSettingsInput
    }
  },
  /* *************************************************************************************************************** */
  async (req) => {
    const { body } = req.validated;
    const oldSettings = await settingsService.getMiscSettings();
    const newSettingsDTO = new StoredMiscSettingsDTO({
      admin_password_hash: oldSettings.admin_password_hash,
      ...body
    });
    const newSettings = await settingsService.setMiscSettings(newSettingsDTO);
    const { auth_expiration_days: oldAuthExpirationDays } = oldSettings;
    const { auth_expiration_days: newAuthExpirationDays } = newSettings;
    const newAuthExpiration = oldAuthExpirationDays !== newAuthExpirationDays;
    if (newAuthExpiration)
      emitBusEvent(
        new MiscSettingsChangedEvent({
          newAuthExpiration
        })
      );
    return body;
  }
  /* *************************************************************************************************************** */
);
async function loader$d({ request, params }) {
  return await getMiscSettingsEndpoint.get(request, params);
}
async function action$d({ request, params }) {
  return await updateMiscSettingsEndpoint.post(request, params);
}
const route45 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$d,
  loader: loader$d
}, Symbol.toStringTag, { value: "Module" }));
const loader$c = async (o) => await tangoClienteGetAllEndpoint.get(o.request, o.params);
const action$c = unimplementedApiResponse;
const route46 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$c,
  loader: loader$c
}, Symbol.toStringTag, { value: "Module" }));
const getAdminStatusEndpoint = createApiEndpoint(
  adminRootController,
  /* *************************************************************************************************************** */
  void 0,
  /* *************************************************************************************************************** */
  async (req) => {
    const dbSettings = await settingsService.getDBSettings(true);
    const miscSettings = await settingsService.getMiscSettings(true);
    let dictionary_ok = true;
    let dictionary_error;
    let company_ok = true;
    let company_error;
    let company_error_details;
    let tangoError;
    let companies;
    try {
      companies = await dictionaryRepository.getCompanies();
    } catch (e) {
      companies = null;
      dictionary_ok = false;
      const errorInfo = exceptionToDXTErrorInfo(e);
      dictionary_error = errorInfo.error_description;
      if (isDXTException(e, DXTErrorCode.TANGO_DB_ACCESS_ERROR))
        tangoError = e;
    }
    try {
      if (tangoError != null)
        throw tangoError;
      await tangoRepository.getCompany();
    } catch (e) {
      company_ok = false;
      const errorInfo = exceptionToDXTErrorInfo(e);
      company_error = errorInfo.error_description;
      company_error_details = errorInfo.extra;
    }
    const { admin_password_hash, ...misc } = miscSettings;
    return {
      settings: {
        db: dbSettings,
        misc
      },
      dictionary_ok,
      dictionary_error,
      company_ok,
      company_error,
      company_error_details,
      companies
    };
  }
  /* *************************************************************************************************************** */
);
async function loader$b({ request, params }) {
  return await getAdminStatusEndpoint.get(request, params);
}
const action$b = unimplementedApiResponse;
const route47 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$b,
  loader: loader$b
}, Symbol.toStringTag, { value: "Module" }));
const authConnectEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => authPrivateResultToPublic(req.auth)
);
const loader$a = unimplementedApiResponse;
async function action$a({ request, params }) {
  return await authConnectEndpoint.post(request, params);
}
const route48 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$a,
  loader: loader$a
}, Symbol.toStringTag, { value: "Module" }));
async function loader$9({ request, params }) {
  return await dxtVendedorGetAllEndpoint.get(request, params);
}
async function action$9({ request, params }) {
  return await dxtVendedorCreateEndpoint.post(request, params);
}
const route49 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$9,
  loader: loader$9
}, Symbol.toStringTag, { value: "Module" }));
const tangoPerfilGetAllEndpoint = createCompanyGetAllEndpoint(
  authenticatedRootController,
  perfilRepository
);
const tangoListaDePreciosAllEndpoint = createCompanyGetAllEndpoint(
  authenticatedRootController,
  listaRepository
);
const loader$8 = async (o) => await tangoPerfilGetAllEndpoint.get(o.request, o.params);
const action$8 = unimplementedApiResponse;
const route50 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$8,
  loader: loader$8
}, Symbol.toStringTag, { value: "Module" }));
const authLogoutEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => {
    await authService.logout(req.auth.auth_token);
    return { ok: true };
  }
);
const loader$7 = unimplementedApiResponse;
async function action$7({ request, params }) {
  return await authLogoutEndpoint.post(request, params);
}
const route51 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$7,
  loader: loader$7
}, Symbol.toStringTag, { value: "Module" }));
async function loader$6({ request, params }) {
  return await dxtClienteGetAllEndpoint.get(request, params);
}
async function action$6({ request, params }) {
  return await dxtClienteCreateEndpoint.post(request, params);
}
const route52 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$6,
  loader: loader$6
}, Symbol.toStringTag, { value: "Module" }));
const getDBSettingsEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => {
    const storedDBSettings = await settingsService.getDBSettings(true);
    const {
      tango_active_company,
      ...remaining
    } = storedDBSettings;
    return remaining;
  }
);
const updateDBSettingsEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      body: validateDBSettingsInput
    }
  },
  async (req) => {
    const { body } = req.validated;
    const oldSettings = await settingsService.getDBSettings();
    const newSettings = {
      ...body,
      tango_active_company: oldSettings.tango_active_company
    };
    const { db_connection_timeout_seconds: oldTimeout, tango_active_company: oldCompany, ...oldRemainingData } = oldSettings;
    const { db_connection_timeout_seconds: newTimeout, tango_active_company: ignoredCompany, ...newRemainingData } = newSettings;
    const thereIsANewDictionary = !_.isEqual(oldRemainingData, newRemainingData);
    const newCompany = thereIsANewDictionary ? "" : oldCompany;
    const finalSettings = {
      ...body,
      tango_active_company: newCompany
    };
    const finalSettingsDTO = new StoredDBSettingsDTO(finalSettings);
    const thereIsANewCompany = oldCompany !== newCompany;
    const passiveDBChanges = oldTimeout !== newTimeout && !thereIsANewDictionary && !thereIsANewCompany;
    const anyChange = passiveDBChanges || thereIsANewDictionary || thereIsANewCompany;
    await settingsService.setDBSettings(finalSettingsDTO);
    if (anyChange)
      emitBusEvent(
        new DBSettingsChangedEvent({
          passiveDBChanges,
          newDictionary: thereIsANewDictionary,
          newCompany: thereIsANewCompany,
          resetCache: thereIsANewCompany
        })
      );
    const {
      tango_active_company,
      ...remaining
    } = finalSettings;
    return remaining;
  }
);
async function loader$5({ request, params }) {
  return await getDBSettingsEndpoint.get(request, params);
}
async function action$5({ request, params }) {
  return await updateDBSettingsEndpoint.post(request, params);
}
const route53 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$5,
  loader: loader$5
}, Symbol.toStringTag, { value: "Module" }));
const loader$4 = async (o) => await tangoListaDePreciosAllEndpoint.get(o.request, o.params);
const action$4 = unimplementedApiResponse;
const route54 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$4,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const loginUserInputValidationSchema = {
  username: (v) => new VOUserName(v),
  password: (v) => new VOString(v)
};
const validateLoginUserInput = (input) => validateInput(loginUserInputValidationSchema, input);
const authLoginEndpoint = createApiEndpoint(
  rootController,
  {
    validation: {
      body: (input) => validateLoginUserInput(input)
    }
  },
  async (req) => {
    const { username, password } = req.validated.body;
    return await authPrivateResultToPublic(
      await authService.login(username, password)
    );
  }
);
const loader$3 = unimplementedApiResponse;
async function action$3({ request, params }) {
  return await authLoginEndpoint.post(request, params);
}
const route55 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$3,
  loader: loader$3
}, Symbol.toStringTag, { value: "Module" }));
const getCompaniesEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => {
    return await dictionaryRepository.getCompanies();
  }
);
async function loader$2({ request, params }) {
  return await getCompaniesEndpoint.get(request, params);
}
const action$2 = unimplementedApiResponse;
const route56 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$2,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
const AuthGuard = (props) => {
  const { children } = props;
  const { state: authState, dispatch: authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (authState instanceof AuthStateLoggedIn) {
      authDispatch(new AuthActionRefreshAll(authState.userInfo));
      return;
    }
    if (authState.isDisconnectedAndNotRedirecting()) {
      redirectLoginWithReturnUrl(navigate);
    }
  }, [location, authState.constructor.name]);
  if (authState.isLoggedIn()) {
    return /* @__PURE__ */ jsx(Fragment, { children });
  }
};
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? /* @__PURE__ */ jsx(Fragment, { children }) : /* @__PURE__ */ jsx(Fragment, { children: fallback });
}
const USER_ROLE_CUSTOMER = "Cliente";
const USER_ROLE_VENDOR = "Vendedor";
const USER_ROLE_ADMIN = "Administrador";
function getUserRoleText(role) {
  switch (role) {
    case UserRole.customer:
      return USER_ROLE_CUSTOMER;
    case UserRole.vendor:
      return USER_ROLE_VENDOR;
    default:
      return USER_ROLE_ADMIN;
  }
}
const ColorModeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return /* @__PURE__ */ jsx(
    IconButton,
    {
      "aria-label": CHANGE_COLOR_MODE,
      onClick: toggleColorMode,
      isRound: true,
      icon: /* @__PURE__ */ jsx(
        Icon,
        {
          as: colorMode === "light" ? MoonWaningCrescentIcon : WeatherSunnyIcon
        }
      )
    }
  );
};
const LogoImage = (props) => {
  const logo = useColorModeValue("/logo-light.svg", "/logo-dark.svg");
  return /* @__PURE__ */ jsx(Image, { src: logo, ...props });
};
const MessageToUser = (props) => {
  const { type, title, content } = props;
  return /* @__PURE__ */ jsxs(
    Alert,
    {
      status: type,
      sx: {
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ jsx(
          AlertIcon,
          {
            sx: {
              boxSize: { base: 8, md: 5 }
            }
          }
        ),
        /* @__PURE__ */ jsxs(Flex, { flexDirection: { base: "column", md: "row" }, children: [
          /* @__PURE__ */ jsx(AlertTitle, { children: title }),
          /* @__PURE__ */ jsx(AlertDescription, { children: content })
        ] })
      ]
    }
  );
};
const Navbar = () => {
  const { state: authState, dispatch: authDispatch } = useAuth();
  const navigate = useNavigate();
  const user = authState.userOrNull();
  const systemMessage = user == null ? void 0 : user.message;
  const userRoleText = (user == null ? void 0 : user.role) != null ? getUserRoleText(user == null ? void 0 : user.role) : "";
  const _username = (user == null ? void 0 : user.screen_name.trim()) ?? "";
  const userLabel = authState.isAdmin() ? _username : `${userRoleText} ${_username}`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        bg: useColorModeValue("gray.100", "gray.900"),
        sx: {
          px: 4
        },
        children: /* @__PURE__ */ jsxs(Flex, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxs(HStack, { spacing: 4, alignItems: "center", children: [
            /* @__PURE__ */ jsxs(Menu, { isLazy: true, id: "menu", children: [
              /* @__PURE__ */ jsx(
                MenuButton,
                {
                  as: IconButton,
                  "aria-label": OPTIONS,
                  icon: /* @__PURE__ */ jsx(MenuIcon, {}),
                  variant: "outline"
                }
              ),
              /* @__PURE__ */ jsxs(MenuList, { rootProps: { zIndex: 2e3 }, children: [
                /* @__PURE__ */ jsx(
                  MenuItem,
                  {
                    onClick: () => {
                      navigate(URL_PEDIDOS_PATH);
                    },
                    children: PEDIDOS
                  }
                ),
                !authState.isAdmin() && /* @__PURE__ */ jsx(
                  MenuItem,
                  {
                    onClick: () => {
                      navigate(URL_BORRADORES_PATH);
                    },
                    children: BORRADORES
                  }
                ),
                /* @__PURE__ */ jsx(MenuDivider, {}),
                authState.isAdmin() && /* @__PURE__ */ jsx(
                  MenuItem,
                  {
                    onClick: () => {
                      navigate(URL_SETTINGS_PATH);
                    },
                    children: ADMINISTRACION
                  }
                ),
                /* @__PURE__ */ jsx(
                  MenuItem,
                  {
                    onClick: () => {
                      navigate(URL_AUTH_CHANGE_PASSWORD_PATH);
                    },
                    children: CHANGE_PASSWORD
                  }
                ),
                /* @__PURE__ */ jsx(MenuDivider, {}),
                /* @__PURE__ */ jsx(
                  MenuItem,
                  {
                    onClick: async () => {
                      await authDispatch(new AuthActionLogout());
                    },
                    children: LOGOUT
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(LogoImage, { height: "20px", alt: "" }) })
          ] }),
          /* @__PURE__ */ jsx(Flex, { alignItems: "center", children: /* @__PURE__ */ jsxs(HStack, { spacing: 4, children: [
            /* @__PURE__ */ jsx(
              Box,
              {
                display: {
                  base: "none",
                  md: "block"
                },
                children: /* @__PURE__ */ jsx(Text, { children: userLabel })
              }
            ),
            /* @__PURE__ */ jsx(ColorModeSelector, {})
          ] }) })
        ] })
      }
    ),
    systemMessage != null && systemMessage != void 0 && /* @__PURE__ */ jsx(MessageToUser, { ...systemMessage }),
    /* @__PURE__ */ jsx(Box, {})
  ] });
};
function AuthorizedLayout() {
  return /* @__PURE__ */ jsx(ClientOnly, { children: /* @__PURE__ */ jsxs(AuthGuard, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] }) });
}
const route57 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AuthorizedLayout
}, Symbol.toStringTag, { value: "Module" }));
async function loader$1({ request, params }) {
  return await getAllOrdersEndpoint.get(request, params);
}
async function action$1({ request, params }) {
  return await createOrderEndpoint.post(request, params);
}
const route58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1,
  loader: loader$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader({ request, params }) {
  return await getAllDraftsEndpoint.get(request, params);
}
async function action({ request, params }) {
  return await createDraftEndpoint.post(request, params);
}
const route59 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  loader
}, Symbol.toStringTag, { value: "Module" }));
function AdminLayout() {
  return /* @__PURE__ */ jsx(ClientOnly, { children: /* @__PURE__ */ jsxs(AuthGuard, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Container, { maxW: "2xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx(Outlet, {}) })
  ] }) });
}
const route60 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AdminLayout
}, Symbol.toStringTag, { value: "Module" }));
const MessageToUserAlert = (props) => {
  const { type, title, content } = props;
  const icons = {
    info: InfoIcon,
    warning: WarningIcon,
    error: ErrorIcon
  };
  const IconType = icons[type] ?? null;
  return /* @__PURE__ */ jsxs(Box, { textAlign: "center", py: 10, px: 6, children: [
    IconType != null && /* @__PURE__ */ jsx(Icon, { as: IconType, boxSize: 12 }),
    /* @__PURE__ */ jsx(Heading, { as: "h2", size: "xl", mt: 4, mb: 2, children: title }),
    /* @__PURE__ */ jsx(Text, { color: "gray.500", children: content })
  ] });
};
const MessageToUserDialog = ({
  title,
  message,
  onResolve
}) => {
  const handleCancel = () => {
    onResolve(
      0
      /* close */
    );
  };
  return /* @__PURE__ */ jsx(
    CustomDialog,
    {
      isOpen: true,
      dialogTitle: title,
      dialogContents: message,
      hideButtons: true,
      handleCancel,
      handleCancelWording: CLOSE
    }
  );
};
function useMessageToUserDialog() {
  return useModal(
    MessageToUserDialog
  );
}
const validationSchema = yup.object({
  username: yup.string().required("Ingrese su nombre de usuario").test("test", "Usuario no valido", (v) => yupVOValidation(VOUserName, v)),
  password: yup.string().required("Ingrese su contraseña")
}).required();
function Index() {
  var _a2;
  const { state: authState, dispatch: authDispatch } = useAuth();
  const dialogCall = useMessageToUserDialog();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = async (data) => {
    const dataToSubmit = {
      username: data.username,
      password: data.password
    };
    await authDispatch(new AuthActionLogin(dataToSubmit));
  };
  useEffect(() => {
    var _a3;
    if (authState instanceof AuthStateDisconnected) {
      const messageToUser = (_a3 = authState.errorOrNull()) == null ? void 0 : _a3.message_to_user;
      if (messageToUser != void 0) {
        dialogCall({
          message: /* @__PURE__ */ jsx(MessageToUserAlert, { ...messageToUser })
        });
      }
    }
  }, [authState]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          position: "absolute",
          top: 3,
          right: 4
        },
        children: /* @__PURE__ */ jsx(ColorModeSelector, {})
      }
    ),
    /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ jsx(
          Container,
          {
            maxWidth: "sm",
            sx: {
              alignSelf: "center"
            },
            children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx(LogoImage, { width: "160px", alt: "" }) }) }),
              /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsx("form", { noValidate: true, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs(VStack, { spacing: 4, children: [
                /* @__PURE__ */ jsx(
                  Heading,
                  {
                    size: "sm",
                    sx: {
                      textAlign: "center",
                      pb: 2
                    },
                    children: WELCOME
                  }
                ),
                (Object.keys(errors).length || authState.errorOrNull()) && /* @__PURE__ */ jsx(Box, { width: "full", children: /* @__PURE__ */ jsx(Alert, { status: "error", children: /* @__PURE__ */ jsxs(
                  UnorderedList,
                  {
                    fontSize: "sm",
                    styleType: "none",
                    sx: { m: 0 },
                    children: [
                      Object.keys(errors).length && Object.values(errors).map((error, key) => /* @__PURE__ */ jsx(ListItem, { children: error.message }, key)),
                      authState.errorOrNull() && /* @__PURE__ */ jsx(ListItem, { children: (_a2 = authState.errorOrNull()) == null ? void 0 : _a2.error_description }, "api_error")
                    ]
                  }
                ) }) }),
                /* @__PURE__ */ jsx(
                  ControlledInput,
                  {
                    formControlInnerProps: {
                      icon: /* @__PURE__ */ jsx(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ jsx(Icon, { as: AccountIcon }) })
                    },
                    fieldProps: {
                      name: "username",
                      id: "username",
                      type: "text",
                      placeholder: "Usuario",
                      autoCapitalize: "off"
                    },
                    formControlProps: {
                      isDisabled: isSubmitting
                    },
                    control
                  }
                ),
                /* @__PURE__ */ jsx(
                  ControlledInput,
                  {
                    formControlInnerProps: {
                      icon: /* @__PURE__ */ jsx(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ jsx(Icon, { as: LockIcon }) })
                    },
                    fieldProps: {
                      name: "password",
                      id: "password",
                      type: "password",
                      placeholder: "Contraseña"
                    },
                    formControlProps: {
                      isDisabled: isSubmitting
                    },
                    control
                  }
                ),
                /* @__PURE__ */ jsx(Button, { type: "submit", width: "full", colorScheme: "blue", isLoading: isSubmitting, children: "Ingresar" })
              ] }) }) })
            ] })
          }
        )
      }
    )
  ] });
}
const route61 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BYA9iKMv.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/styleContexts-N_1lq2L7.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BgCgQovr.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/styleContexts-N_1lq2L7.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js"], "css": ["/assets/root-CDSbMXEx.css"] }, "routes/_admin.settings.users.customers.$id.edit": { "id": "routes/_admin.settings.users.customers.$id.edit", "parentId": "routes/_admin", "path": "settings/users/customers/:id/edit", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-D5Sf5Dut.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/AccountCancelIcon-BsdBUfF1.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/app-BMvraJRd.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-GOJLRND4-C6AoJZLh.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/chunk-7D6N5TE5-CYpHZTLA.js", "/assets/index.esm-DYgtBHkz.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/select-BgjIqqU7.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/index-C9yDa_R-.js", "/assets/schema_validators-DYZyRgjg.js", "/assets/CommonErrors-BtbwGIG0.js", "/assets/SettingsFormHeading-BZPNDeWv.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/FormSkeletons-xJlZdIll.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/validation-B8S6Yb_c.js", "/assets/ControlledSelect-Bgaw0xLO.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/vo_dxt_password-W93vgryN.js", "/assets/InlineError-DRfvy1Jn.js", "/assets/SettingsFormButtons-BuGsXUqX.js", "/assets/utils-DihYaFf6.js"], "css": [] }, "routes/_admin.settings.users.vendors.$id.edit": { "id": "routes/_admin.settings.users.vendors.$id.edit", "parentId": "routes/_admin", "path": "settings/users/vendors/:id/edit", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-TMjjBZgN.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/AccountCancelIcon-BsdBUfF1.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/app-BMvraJRd.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-GOJLRND4-C6AoJZLh.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/chunk-7D6N5TE5-CYpHZTLA.js", "/assets/index.esm-DYgtBHkz.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/select-BgjIqqU7.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/index-C9yDa_R-.js", "/assets/schema_validators-DYZyRgjg.js", "/assets/CommonErrors-BtbwGIG0.js", "/assets/SettingsFormHeading-BZPNDeWv.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/FormSkeletons-xJlZdIll.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/validation-B8S6Yb_c.js", "/assets/ControlledSelect-Bgaw0xLO.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/vo_dxt_password-W93vgryN.js", "/assets/InlineError-DRfvy1Jn.js", "/assets/SettingsFormButtons-BuGsXUqX.js", "/assets/utils-DihYaFf6.js"], "css": [] }, "routes/api.pedido.$id_pedido.start_new_draft": { "id": "routes/api.pedido.$id_pedido.start_new_draft", "parentId": "routes/api.pedido.$id_pedido", "path": "start_new_draft", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.pedido._id_pedido.start_new_draft-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.draft.$id_pedido.start_new_order": { "id": "routes/api.draft.$id_pedido.start_new_order", "parentId": "routes/api.draft.$id_pedido", "path": "start_new_order", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.draft._id_pedido.start_new_order-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_admin.settings.users.customers.add": { "id": "routes/_admin.settings.users.customers.add", "parentId": "routes/_admin", "path": "settings/users/customers/add", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DTmqO_7q.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/AccountCancelIcon-BsdBUfF1.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/app-BMvraJRd.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/chunk-7D6N5TE5-CYpHZTLA.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/index.esm-DYgtBHkz.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/select-BgjIqqU7.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/index-C9yDa_R-.js", "/assets/SettingsFormHeading-BZPNDeWv.js", "/assets/validation-B8S6Yb_c.js", "/assets/ControlledSelect-Bgaw0xLO.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/vo_dxt_password-W93vgryN.js", "/assets/InlineError-DRfvy1Jn.js", "/assets/SettingsFormButtons-BuGsXUqX.js", "/assets/utils-DihYaFf6.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js"], "css": [] }, "routes/_admin.settings.product_list.$type": { "id": "routes/_admin.settings.product_list.$type", "parentId": "routes/_admin", "path": "settings/product_list/:type", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BD9vHRvm.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/app-BMvraJRd.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-GOJLRND4-C6AoJZLh.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/paths-BSNIG4KB.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/CommonErrors-BtbwGIG0.js", "/assets/SettingsFormHeading-BZPNDeWv.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/FormSkeletons-xJlZdIll.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/ControlledTextarea-CyvEM0pX.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/SettingsFormButtons-BuGsXUqX.js", "/assets/index-DUrOVWgq.js"], "css": [] }, "routes/_admin.settings.users.$type._index": { "id": "routes/_admin.settings.users.$type._index", "parentId": "routes/_admin", "path": "settings/users/:type", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-0oxeu4Sc.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/AccountCancelIcon-BsdBUfF1.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/app-BMvraJRd.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-GOJLRND4-C6AoJZLh.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/index-C9yDa_R-.js", "/assets/CommonErrors-BtbwGIG0.js", "/assets/SettingsFormHeading-BZPNDeWv.js", "/assets/FormSkeletons-xJlZdIll.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/SearchField-BB5KABJn.js", "/assets/TextWordBreak-BjAGweP2.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js"], "css": [] }, "routes/_authorized.drafts.$id_pedido.edit": { "id": "routes/_authorized.drafts.$id_pedido.edit", "parentId": "routes/_authorized", "path": "drafts/:id_pedido/edit", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BWnBE1hW.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/app-BMvraJRd.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/index.esm-DYgtBHkz.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/select-BgjIqqU7.js", "/assets/pedidos-BF2fCqUh.js", "/assets/CommonErrors-BtbwGIG0.js", "/assets/SearchField-BB5KABJn.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/ControlledSelect-Bgaw0xLO.js", "/assets/ControlledTextarea-CyvEM0pX.js", "/assets/index-DUrOVWgq.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/index-50b8QDYq.js", "/assets/chunk-5MKCW436-C9Q5EsRW.js"], "css": [] }, "routes/_authorized.orders.$id_pedido.edit": { "id": "routes/_authorized.orders.$id_pedido.edit", "parentId": "routes/_authorized", "path": "orders/:id_pedido/edit", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CvmQB-Ci.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/app-BMvraJRd.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/index.esm-DYgtBHkz.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/select-BgjIqqU7.js", "/assets/pedidos-BF2fCqUh.js", "/assets/CommonErrors-BtbwGIG0.js", "/assets/SearchField-BB5KABJn.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/ControlledSelect-Bgaw0xLO.js", "/assets/ControlledTextarea-CyvEM0pX.js", "/assets/index-DUrOVWgq.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/index-50b8QDYq.js", "/assets/chunk-5MKCW436-C9Q5EsRW.js"], "css": [] }, "routes/api.pedido.$id_pedido.start_update": { "id": "routes/api.pedido.$id_pedido.start_update", "parentId": "routes/api.pedido.$id_pedido", "path": "start_update", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.pedido._id_pedido.start_update-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_admin.settings.users.vendors.add": { "id": "routes/_admin.settings.users.vendors.add", "parentId": "routes/_admin", "path": "settings/users/vendors/add", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BIu_yhB0.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/AccountCancelIcon-BsdBUfF1.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/app-BMvraJRd.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/chunk-7D6N5TE5-CYpHZTLA.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/index.esm-DYgtBHkz.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/select-BgjIqqU7.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/index-C9yDa_R-.js", "/assets/SettingsFormHeading-BZPNDeWv.js", "/assets/validation-B8S6Yb_c.js", "/assets/ControlledSelect-Bgaw0xLO.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/vo_dxt_password-W93vgryN.js", "/assets/InlineError-DRfvy1Jn.js", "/assets/SettingsFormButtons-BuGsXUqX.js", "/assets/utils-DihYaFf6.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js"], "css": [] }, "routes/api.draft.$id_pedido.start_update": { "id": "routes/api.draft.$id_pedido.start_update", "parentId": "routes/api.draft.$id_pedido", "path": "start_update", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.draft._id_pedido.start_update-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.pedido.$id_pedido.start_copy": { "id": "routes/api.pedido.$id_pedido.start_copy", "parentId": "routes/api.pedido.$id_pedido", "path": "start_copy", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.pedido._id_pedido.start_copy-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.pedido.start_new.$id_cliente": { "id": "routes/api.pedido.start_new.$id_cliente", "parentId": "routes/api.pedido.start_new", "path": ":id_cliente", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.pedido.start_new._id_cliente-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.draft.$id_pedido.start_copy": { "id": "routes/api.draft.$id_pedido.start_copy", "parentId": "routes/api.draft.$id_pedido", "path": "start_copy", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.draft._id_pedido.start_copy-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.draft.start_new.$id_cliente": { "id": "routes/api.draft.start_new.$id_cliente", "parentId": "routes/api.draft.start_new", "path": ":id_cliente", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.draft.start_new._id_cliente-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.dxt.articulo.print_list.ids": { "id": "routes/api.dxt.articulo.print_list.ids", "parentId": "routes/api.dxt.articulo.print_list", "path": "ids", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.dxt.articulo.print_list.ids-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_authorized.drafts.$client.add": { "id": "routes/_authorized.drafts.$client.add", "parentId": "routes/_authorized", "path": "drafts/:client/add", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DlGQOpPs.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/app-BMvraJRd.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/index.esm-DYgtBHkz.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/select-BgjIqqU7.js", "/assets/pedidos-BF2fCqUh.js", "/assets/CommonErrors-BtbwGIG0.js", "/assets/SearchField-BB5KABJn.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/ControlledSelect-Bgaw0xLO.js", "/assets/ControlledTextarea-CyvEM0pX.js", "/assets/index-DUrOVWgq.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/index-50b8QDYq.js", "/assets/chunk-5MKCW436-C9Q5EsRW.js"], "css": [] }, "routes/_authorized.orders.$client.add": { "id": "routes/_authorized.orders.$client.add", "parentId": "routes/_authorized", "path": "orders/:client/add", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BcGuVo38.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/app-BMvraJRd.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/index.esm-DYgtBHkz.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/select-BgjIqqU7.js", "/assets/pedidos-BF2fCqUh.js", "/assets/CommonErrors-BtbwGIG0.js", "/assets/SearchField-BB5KABJn.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/ControlledSelect-Bgaw0xLO.js", "/assets/ControlledTextarea-CyvEM0pX.js", "/assets/index-DUrOVWgq.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/index-50b8QDYq.js", "/assets/chunk-5MKCW436-C9Q5EsRW.js"], "css": [] }, "routes/api.dictionary.active_company": { "id": "routes/api.dictionary.active_company", "parentId": "routes/api.dictionary", "path": "active_company", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.dictionary.active_company-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.dxt.vendedor.$id_vendedor": { "id": "routes/api.dxt.vendedor.$id_vendedor", "parentId": "routes/api.dxt.vendedor", "path": ":id_vendedor", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.dxt.vendedor._id_vendedor-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_authorized.change_password": { "id": "routes/_authorized.change_password", "parentId": "routes/_authorized", "path": "change_password", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-dBRqlUx6.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/app-BMvraJRd.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/SettingsFormHeading-BZPNDeWv.js", "/assets/refresh_all-B81RH04G.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/vo_dxt_password-W93vgryN.js", "/assets/SettingsFormButtons-BuGsXUqX.js", "/assets/utils-DihYaFf6.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/chunk-5MKCW436-C9Q5EsRW.js"], "css": [] }, "routes/api.dxt.articulo.print_list": { "id": "routes/api.dxt.articulo.print_list", "parentId": "root", "path": "api/dxt/articulo/print_list", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.dxt.articulo.print_list-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.dxt.cliente.$id_cliente": { "id": "routes/api.dxt.cliente.$id_cliente", "parentId": "routes/api.dxt.cliente", "path": ":id_cliente", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.dxt.cliente._id_cliente-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.dxt.articulo.edit_list": { "id": "routes/api.dxt.articulo.edit_list", "parentId": "root", "path": "api/dxt/articulo/edit_list", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.dxt.articulo.edit_list-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.dxt.usuario.auxiliares": { "id": "routes/api.dxt.usuario.auxiliares", "parentId": "root", "path": "api/dxt/usuario/auxiliares", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.dxt.usuario.auxiliares-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_authorized.drafts._index": { "id": "routes/_authorized.drafts._index", "parentId": "routes/_authorized", "path": "drafts", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BBp1lAQg.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/app-BMvraJRd.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-GOJLRND4-C6AoJZLh.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/chunk-7D6N5TE5-CYpHZTLA.js", "/assets/pedidos-BF2fCqUh.js", "/assets/FormSkeletons-xJlZdIll.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/SearchField-BB5KABJn.js", "/assets/app_resources-CxShxcx8.js", "/assets/AccountCancelIcon-BsdBUfF1.js", "/assets/TextWordBreak-BjAGweP2.js", "/assets/index.esm-DYgtBHkz.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js", "/assets/vo_user_name-B4S4VRzE.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/chunk-H43S3DLB-BJpOnnoX.js", "/assets/chunk-CWVAJCXJ-BPBC_Cg6.js", "/assets/index-BK4FY_v3.js", "/assets/chunk-5MKCW436-C9Q5EsRW.js"], "css": [] }, "routes/_authorized.orders._index": { "id": "routes/_authorized.orders._index", "parentId": "routes/_authorized", "path": "orders", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Bcn9_vkN.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/app-BMvraJRd.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-GOJLRND4-C6AoJZLh.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/chunk-7D6N5TE5-CYpHZTLA.js", "/assets/pedidos-BF2fCqUh.js", "/assets/FormSkeletons-xJlZdIll.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/SearchField-BB5KABJn.js", "/assets/app_resources-CxShxcx8.js", "/assets/AccountCancelIcon-BsdBUfF1.js", "/assets/TextWordBreak-BjAGweP2.js", "/assets/index.esm-DYgtBHkz.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js", "/assets/vo_user_name-B4S4VRzE.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/chunk-H43S3DLB-BJpOnnoX.js", "/assets/chunk-CWVAJCXJ-BPBC_Cg6.js", "/assets/index-BK4FY_v3.js", "/assets/chunk-5MKCW436-C9Q5EsRW.js"], "css": [] }, "routes/api.dxt.vendedor.cliente": { "id": "routes/api.dxt.vendedor.cliente", "parentId": "routes/api.dxt.vendedor", "path": "cliente", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.dxt.vendedor.cliente-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.settings.config_file": { "id": "routes/api.settings.config_file", "parentId": "root", "path": "api/settings/config_file", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.settings.config_file-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_admin.settings.company": { "id": "routes/_admin.settings.company", "parentId": "routes/_admin", "path": "settings/company", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CzCvt_5Z.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/index.esm-DYgtBHkz.js", "/assets/app-BMvraJRd.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/select-BgjIqqU7.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/SettingsFormHeading-BZPNDeWv.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/ControlledSelect-Bgaw0xLO.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/InlineError-DRfvy1Jn.js", "/assets/SettingsFormButtons-BuGsXUqX.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js"], "css": [] }, "routes/_admin.settings._index": { "id": "routes/_admin.settings._index", "parentId": "routes/_admin", "path": "settings", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DPwP8gtW.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/app-BMvraJRd.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js", "/assets/chunk-GOJLRND4-C6AoJZLh.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js"], "css": [] }, "routes/_authorized.drafts.add": { "id": "routes/_authorized.drafts.add", "parentId": "routes/_authorized", "path": "drafts/add", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CKeMrEqR.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/app-BMvraJRd.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/index.esm-DYgtBHkz.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/select-BgjIqqU7.js", "/assets/pedidos-BF2fCqUh.js", "/assets/CommonErrors-BtbwGIG0.js", "/assets/SearchField-BB5KABJn.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/ControlledSelect-Bgaw0xLO.js", "/assets/ControlledTextarea-CyvEM0pX.js", "/assets/index-DUrOVWgq.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/index-50b8QDYq.js", "/assets/chunk-5MKCW436-C9Q5EsRW.js"], "css": [] }, "routes/_authorized.orders.add": { "id": "routes/_authorized.orders.add", "parentId": "routes/_authorized", "path": "orders/add", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-TedzfXLT.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/app-BMvraJRd.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/index.esm-DYgtBHkz.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/select-BgjIqqU7.js", "/assets/pedidos-BF2fCqUh.js", "/assets/CommonErrors-BtbwGIG0.js", "/assets/SearchField-BB5KABJn.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/useTangoList-Bq-SEz1p.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/ControlledSelect-Bgaw0xLO.js", "/assets/ControlledTextarea-CyvEM0pX.js", "/assets/index-DUrOVWgq.js", "/assets/chunk-Z6RXEUPO-DSTG9QiY.js", "/assets/index-50b8QDYq.js", "/assets/chunk-5MKCW436-C9Q5EsRW.js"], "css": [] }, "routes/_admin.settings.tango": { "id": "routes/_admin.settings.tango", "parentId": "routes/_admin", "path": "settings/tango", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BBY8LWEP.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/app-BMvraJRd.js", "/assets/chunk-GOJLRND4-C6AoJZLh.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/SettingsFormHeading-BZPNDeWv.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/index-MM-BEfVR.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/FormSkeletons-xJlZdIll.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/SettingsFormButtons-BuGsXUqX.js", "/assets/utils-DihYaFf6.js"], "css": [] }, "routes/api.pedido.$id_pedido": { "id": "routes/api.pedido.$id_pedido", "parentId": "routes/api.pedido", "path": ":id_pedido", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.pedido._id_pedido-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_admin.settings.misc": { "id": "routes/_admin.settings.misc", "parentId": "routes/_admin", "path": "settings/misc", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-C1sTzeRd.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-3Y4YXCR2-DS9dcu0f.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/CommonCard-CrzQbbIu.js", "/assets/app_resources-CxShxcx8.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/app-BMvraJRd.js", "/assets/chunk-GOJLRND4-C6AoJZLh.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/chunk-7D6N5TE5-CYpHZTLA.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/SettingsFormHeading-BZPNDeWv.js", "/assets/useDXTApiFetch-cUHsby58.js", "/assets/index-MM-BEfVR.js", "/assets/ApiErrors-P5QuqGMt.js", "/assets/FormSkeletons-xJlZdIll.js", "/assets/chunk-ZPFGWTBB-BQOfC-td.js", "/assets/chunk-W7WUSNWJ-BEqd18B9.js", "/assets/chunk-CWVAJCXJ-BPBC_Cg6.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/ControlledTextarea-CyvEM0pX.js", "/assets/FormErrors-5HYi3DVI.js", "/assets/SettingsFormButtons-BuGsXUqX.js", "/assets/utils-DihYaFf6.js"], "css": [] }, "routes/api.draft.$id_pedido": { "id": "routes/api.draft.$id_pedido", "parentId": "routes/api.draft", "path": ":id_pedido", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.draft._id_pedido-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.pedido.renglones": { "id": "routes/api.pedido.renglones", "parentId": "routes/api.pedido", "path": "renglones", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.pedido.renglones-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.pedido.start_new": { "id": "routes/api.pedido.start_new", "parentId": "routes/api.pedido", "path": "start_new", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.pedido.start_new-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.draft.renglones": { "id": "routes/api.draft.renglones", "parentId": "routes/api.draft", "path": "renglones", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.draft.renglones-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.draft.start_new": { "id": "routes/api.draft.start_new", "parentId": "routes/api.draft", "path": "start_new", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.draft.start_new-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.tango.vendedor": { "id": "routes/api.tango.vendedor", "parentId": "root", "path": "api/tango/vendedor", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.tango.vendedor-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.auth.password": { "id": "routes/api.auth.password", "parentId": "root", "path": "api/auth/password", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth.password-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.settings.misc": { "id": "routes/api.settings.misc", "parentId": "root", "path": "api/settings/misc", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.settings.misc-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.tango.cliente": { "id": "routes/api.tango.cliente", "parentId": "root", "path": "api/tango/cliente", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.tango.cliente-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.admin.status": { "id": "routes/api.admin.status", "parentId": "root", "path": "api/admin/status", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.admin.status-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.auth.connect": { "id": "routes/api.auth.connect", "parentId": "root", "path": "api/auth/connect", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth.connect-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.dxt.vendedor": { "id": "routes/api.dxt.vendedor", "parentId": "root", "path": "api/dxt/vendedor", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.dxt.vendedor-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.tango.perfil": { "id": "routes/api.tango.perfil", "parentId": "root", "path": "api/tango/perfil", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.tango.perfil-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.auth.logout": { "id": "routes/api.auth.logout", "parentId": "root", "path": "api/auth/logout", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth.logout-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.dxt.cliente": { "id": "routes/api.dxt.cliente", "parentId": "root", "path": "api/dxt/cliente", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.dxt.cliente-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.settings.db": { "id": "routes/api.settings.db", "parentId": "root", "path": "api/settings/db", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.settings.db-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.tango.lista": { "id": "routes/api.tango.lista", "parentId": "root", "path": "api/tango/lista", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.tango.lista-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.auth.login": { "id": "routes/api.auth.login", "parentId": "root", "path": "api/auth/login", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.auth.login-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.dictionary": { "id": "routes/api.dictionary", "parentId": "root", "path": "api/dictionary", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.dictionary-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_authorized": { "id": "routes/_authorized", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BhZM1CHp.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/app-BMvraJRd.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/refresh_all-B81RH04G.js", "/assets/LogoImage-CtpWgV3h.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-H43S3DLB-BJpOnnoX.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/Navbar-BKZrvwjw.js"], "css": [] }, "routes/api.pedido": { "id": "routes/api.pedido", "parentId": "root", "path": "api/pedido", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.pedido-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/api.draft": { "id": "routes/api.draft", "parentId": "root", "path": "api/draft", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.draft-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_admin": { "id": "routes/_admin", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BEz4fuGt.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/app-BMvraJRd.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-QURMB2UJ-8Wtwm6sR.js", "/assets/chunk-HB6KBUMZ-jk1Ar7Nh.js", "/assets/refresh_all-B81RH04G.js", "/assets/LogoImage-CtpWgV3h.js", "/assets/chunk-KRPLQIP4-NJec_PE4.js", "/assets/chunk-3ASUQ6PA-CvzJqsz3.js", "/assets/chunk-H43S3DLB-BJpOnnoX.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/Navbar-BKZrvwjw.js", "/assets/chunk-5MKCW436-C9Q5EsRW.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DGlqk24d.js", "imports": ["/assets/emotion-element-43c6fea0.browser.esm-V7CwUVk-.js", "/assets/auth_context-BBDV2-qW.js", "/assets/chunk-56K2BSAJ-ByH33m4W.js", "/assets/app-BMvraJRd.js", "/assets/chunk-6QYXN73V-BKD6YrO0.js", "/assets/index.esm-SP9Jm6Nz.js", "/assets/chunk-6CVSDS6C-EjyqZFPp.js", "/assets/chunk-MFVQSVQB-BInMUJ5Q.js", "/assets/utils-DihYaFf6.js", "/assets/vo_user_name-B4S4VRzE.js", "/assets/LogoImage-CtpWgV3h.js", "/assets/ControlledInput-Bw-P79we.js", "/assets/chunk-7OLJDQMT-3EhHOSPR.js", "/assets/chunk-2OOHT3W5-DslbJMnr.js", "/assets/chunk-YQO7BFFX-B4KLri48.js", "/assets/chunk-46CXQZ4E-Cu23NgCw.js", "/assets/chunk-NTCQBYKE-BO7YPHqM.js", "/assets/chunk-5MKCW436-C9Q5EsRW.js", "/assets/chunk-3KCBMPN5-70uOg14b.js", "/assets/chunk-2ZHRCML3-DK3i-inn.js"], "css": [] } }, "url": "/assets/manifest-64522495.js", "version": "64522495" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename2 = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_admin.settings.users.customers.$id.edit": {
    id: "routes/_admin.settings.users.customers.$id.edit",
    parentId: "routes/_admin",
    path: "settings/users/customers/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/_admin.settings.users.vendors.$id.edit": {
    id: "routes/_admin.settings.users.vendors.$id.edit",
    parentId: "routes/_admin",
    path: "settings/users/vendors/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/api.pedido.$id_pedido.start_new_draft": {
    id: "routes/api.pedido.$id_pedido.start_new_draft",
    parentId: "routes/api.pedido.$id_pedido",
    path: "start_new_draft",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/api.draft.$id_pedido.start_new_order": {
    id: "routes/api.draft.$id_pedido.start_new_order",
    parentId: "routes/api.draft.$id_pedido",
    path: "start_new_order",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/_admin.settings.users.customers.add": {
    id: "routes/_admin.settings.users.customers.add",
    parentId: "routes/_admin",
    path: "settings/users/customers/add",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/_admin.settings.product_list.$type": {
    id: "routes/_admin.settings.product_list.$type",
    parentId: "routes/_admin",
    path: "settings/product_list/:type",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/_admin.settings.users.$type._index": {
    id: "routes/_admin.settings.users.$type._index",
    parentId: "routes/_admin",
    path: "settings/users/:type",
    index: true,
    caseSensitive: void 0,
    module: route7
  },
  "routes/_authorized.drafts.$id_pedido.edit": {
    id: "routes/_authorized.drafts.$id_pedido.edit",
    parentId: "routes/_authorized",
    path: "drafts/:id_pedido/edit",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/_authorized.orders.$id_pedido.edit": {
    id: "routes/_authorized.orders.$id_pedido.edit",
    parentId: "routes/_authorized",
    path: "orders/:id_pedido/edit",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/api.pedido.$id_pedido.start_update": {
    id: "routes/api.pedido.$id_pedido.start_update",
    parentId: "routes/api.pedido.$id_pedido",
    path: "start_update",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/_admin.settings.users.vendors.add": {
    id: "routes/_admin.settings.users.vendors.add",
    parentId: "routes/_admin",
    path: "settings/users/vendors/add",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/api.draft.$id_pedido.start_update": {
    id: "routes/api.draft.$id_pedido.start_update",
    parentId: "routes/api.draft.$id_pedido",
    path: "start_update",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/api.pedido.$id_pedido.start_copy": {
    id: "routes/api.pedido.$id_pedido.start_copy",
    parentId: "routes/api.pedido.$id_pedido",
    path: "start_copy",
    index: void 0,
    caseSensitive: void 0,
    module: route13
  },
  "routes/api.pedido.start_new.$id_cliente": {
    id: "routes/api.pedido.start_new.$id_cliente",
    parentId: "routes/api.pedido.start_new",
    path: ":id_cliente",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/api.draft.$id_pedido.start_copy": {
    id: "routes/api.draft.$id_pedido.start_copy",
    parentId: "routes/api.draft.$id_pedido",
    path: "start_copy",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/api.draft.start_new.$id_cliente": {
    id: "routes/api.draft.start_new.$id_cliente",
    parentId: "routes/api.draft.start_new",
    path: ":id_cliente",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  },
  "routes/api.dxt.articulo.print_list.ids": {
    id: "routes/api.dxt.articulo.print_list.ids",
    parentId: "routes/api.dxt.articulo.print_list",
    path: "ids",
    index: void 0,
    caseSensitive: void 0,
    module: route17
  },
  "routes/_authorized.drafts.$client.add": {
    id: "routes/_authorized.drafts.$client.add",
    parentId: "routes/_authorized",
    path: "drafts/:client/add",
    index: void 0,
    caseSensitive: void 0,
    module: route18
  },
  "routes/_authorized.orders.$client.add": {
    id: "routes/_authorized.orders.$client.add",
    parentId: "routes/_authorized",
    path: "orders/:client/add",
    index: void 0,
    caseSensitive: void 0,
    module: route19
  },
  "routes/api.dictionary.active_company": {
    id: "routes/api.dictionary.active_company",
    parentId: "routes/api.dictionary",
    path: "active_company",
    index: void 0,
    caseSensitive: void 0,
    module: route20
  },
  "routes/api.dxt.vendedor.$id_vendedor": {
    id: "routes/api.dxt.vendedor.$id_vendedor",
    parentId: "routes/api.dxt.vendedor",
    path: ":id_vendedor",
    index: void 0,
    caseSensitive: void 0,
    module: route21
  },
  "routes/_authorized.change_password": {
    id: "routes/_authorized.change_password",
    parentId: "routes/_authorized",
    path: "change_password",
    index: void 0,
    caseSensitive: void 0,
    module: route22
  },
  "routes/api.dxt.articulo.print_list": {
    id: "routes/api.dxt.articulo.print_list",
    parentId: "root",
    path: "api/dxt/articulo/print_list",
    index: void 0,
    caseSensitive: void 0,
    module: route23
  },
  "routes/api.dxt.cliente.$id_cliente": {
    id: "routes/api.dxt.cliente.$id_cliente",
    parentId: "routes/api.dxt.cliente",
    path: ":id_cliente",
    index: void 0,
    caseSensitive: void 0,
    module: route24
  },
  "routes/api.dxt.articulo.edit_list": {
    id: "routes/api.dxt.articulo.edit_list",
    parentId: "root",
    path: "api/dxt/articulo/edit_list",
    index: void 0,
    caseSensitive: void 0,
    module: route25
  },
  "routes/api.dxt.usuario.auxiliares": {
    id: "routes/api.dxt.usuario.auxiliares",
    parentId: "root",
    path: "api/dxt/usuario/auxiliares",
    index: void 0,
    caseSensitive: void 0,
    module: route26
  },
  "routes/_authorized.drafts._index": {
    id: "routes/_authorized.drafts._index",
    parentId: "routes/_authorized",
    path: "drafts",
    index: true,
    caseSensitive: void 0,
    module: route27
  },
  "routes/_authorized.orders._index": {
    id: "routes/_authorized.orders._index",
    parentId: "routes/_authorized",
    path: "orders",
    index: true,
    caseSensitive: void 0,
    module: route28
  },
  "routes/api.dxt.vendedor.cliente": {
    id: "routes/api.dxt.vendedor.cliente",
    parentId: "routes/api.dxt.vendedor",
    path: "cliente",
    index: void 0,
    caseSensitive: void 0,
    module: route29
  },
  "routes/api.settings.config_file": {
    id: "routes/api.settings.config_file",
    parentId: "root",
    path: "api/settings/config_file",
    index: void 0,
    caseSensitive: void 0,
    module: route30
  },
  "routes/_admin.settings.company": {
    id: "routes/_admin.settings.company",
    parentId: "routes/_admin",
    path: "settings/company",
    index: void 0,
    caseSensitive: void 0,
    module: route31
  },
  "routes/_admin.settings._index": {
    id: "routes/_admin.settings._index",
    parentId: "routes/_admin",
    path: "settings",
    index: true,
    caseSensitive: void 0,
    module: route32
  },
  "routes/_authorized.drafts.add": {
    id: "routes/_authorized.drafts.add",
    parentId: "routes/_authorized",
    path: "drafts/add",
    index: void 0,
    caseSensitive: void 0,
    module: route33
  },
  "routes/_authorized.orders.add": {
    id: "routes/_authorized.orders.add",
    parentId: "routes/_authorized",
    path: "orders/add",
    index: void 0,
    caseSensitive: void 0,
    module: route34
  },
  "routes/_admin.settings.tango": {
    id: "routes/_admin.settings.tango",
    parentId: "routes/_admin",
    path: "settings/tango",
    index: void 0,
    caseSensitive: void 0,
    module: route35
  },
  "routes/api.pedido.$id_pedido": {
    id: "routes/api.pedido.$id_pedido",
    parentId: "routes/api.pedido",
    path: ":id_pedido",
    index: void 0,
    caseSensitive: void 0,
    module: route36
  },
  "routes/_admin.settings.misc": {
    id: "routes/_admin.settings.misc",
    parentId: "routes/_admin",
    path: "settings/misc",
    index: void 0,
    caseSensitive: void 0,
    module: route37
  },
  "routes/api.draft.$id_pedido": {
    id: "routes/api.draft.$id_pedido",
    parentId: "routes/api.draft",
    path: ":id_pedido",
    index: void 0,
    caseSensitive: void 0,
    module: route38
  },
  "routes/api.pedido.renglones": {
    id: "routes/api.pedido.renglones",
    parentId: "routes/api.pedido",
    path: "renglones",
    index: void 0,
    caseSensitive: void 0,
    module: route39
  },
  "routes/api.pedido.start_new": {
    id: "routes/api.pedido.start_new",
    parentId: "routes/api.pedido",
    path: "start_new",
    index: void 0,
    caseSensitive: void 0,
    module: route40
  },
  "routes/api.draft.renglones": {
    id: "routes/api.draft.renglones",
    parentId: "routes/api.draft",
    path: "renglones",
    index: void 0,
    caseSensitive: void 0,
    module: route41
  },
  "routes/api.draft.start_new": {
    id: "routes/api.draft.start_new",
    parentId: "routes/api.draft",
    path: "start_new",
    index: void 0,
    caseSensitive: void 0,
    module: route42
  },
  "routes/api.tango.vendedor": {
    id: "routes/api.tango.vendedor",
    parentId: "root",
    path: "api/tango/vendedor",
    index: void 0,
    caseSensitive: void 0,
    module: route43
  },
  "routes/api.auth.password": {
    id: "routes/api.auth.password",
    parentId: "root",
    path: "api/auth/password",
    index: void 0,
    caseSensitive: void 0,
    module: route44
  },
  "routes/api.settings.misc": {
    id: "routes/api.settings.misc",
    parentId: "root",
    path: "api/settings/misc",
    index: void 0,
    caseSensitive: void 0,
    module: route45
  },
  "routes/api.tango.cliente": {
    id: "routes/api.tango.cliente",
    parentId: "root",
    path: "api/tango/cliente",
    index: void 0,
    caseSensitive: void 0,
    module: route46
  },
  "routes/api.admin.status": {
    id: "routes/api.admin.status",
    parentId: "root",
    path: "api/admin/status",
    index: void 0,
    caseSensitive: void 0,
    module: route47
  },
  "routes/api.auth.connect": {
    id: "routes/api.auth.connect",
    parentId: "root",
    path: "api/auth/connect",
    index: void 0,
    caseSensitive: void 0,
    module: route48
  },
  "routes/api.dxt.vendedor": {
    id: "routes/api.dxt.vendedor",
    parentId: "root",
    path: "api/dxt/vendedor",
    index: void 0,
    caseSensitive: void 0,
    module: route49
  },
  "routes/api.tango.perfil": {
    id: "routes/api.tango.perfil",
    parentId: "root",
    path: "api/tango/perfil",
    index: void 0,
    caseSensitive: void 0,
    module: route50
  },
  "routes/api.auth.logout": {
    id: "routes/api.auth.logout",
    parentId: "root",
    path: "api/auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: route51
  },
  "routes/api.dxt.cliente": {
    id: "routes/api.dxt.cliente",
    parentId: "root",
    path: "api/dxt/cliente",
    index: void 0,
    caseSensitive: void 0,
    module: route52
  },
  "routes/api.settings.db": {
    id: "routes/api.settings.db",
    parentId: "root",
    path: "api/settings/db",
    index: void 0,
    caseSensitive: void 0,
    module: route53
  },
  "routes/api.tango.lista": {
    id: "routes/api.tango.lista",
    parentId: "root",
    path: "api/tango/lista",
    index: void 0,
    caseSensitive: void 0,
    module: route54
  },
  "routes/api.auth.login": {
    id: "routes/api.auth.login",
    parentId: "root",
    path: "api/auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: route55
  },
  "routes/api.dictionary": {
    id: "routes/api.dictionary",
    parentId: "root",
    path: "api/dictionary",
    index: void 0,
    caseSensitive: void 0,
    module: route56
  },
  "routes/_authorized": {
    id: "routes/_authorized",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route57
  },
  "routes/api.pedido": {
    id: "routes/api.pedido",
    parentId: "root",
    path: "api/pedido",
    index: void 0,
    caseSensitive: void 0,
    module: route58
  },
  "routes/api.draft": {
    id: "routes/api.draft",
    parentId: "root",
    path: "api/draft",
    index: void 0,
    caseSensitive: void 0,
    module: route59
  },
  "routes/_admin": {
    id: "routes/_admin",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route60
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route61
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename2 as basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
