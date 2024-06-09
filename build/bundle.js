var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// empty-module:./PrintModal.client
var require_PrintModal = __commonJS({
  "empty-module:./PrintModal.client"(exports, module) {
    module.exports = {};
  }
});

// src/app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import "dotenv/config";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { CacheProvider as EmotionCacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";

// src/@core/objects/index.ts
function isRealObject(value) {
  return typeof value == "object" && !Array.isArray(value) && value !== null;
}
function isObj(value) {
  return typeof value == "object" && !Array.isArray(value) && value !== null;
}

// src/@core/environemnt/index.ts
function isNavigator() {
  return typeof window < "u" && isRealObject(window.location);
}
function isNode() {
  return typeof process < "u" && typeof process.versions?.node == "string";
}

// src/@core/transformation/index.ts
import validator2 from "validator";

// src/@core/json/index.ts
var _jsonPolyfillsInitialized = !1;
function jsonPolyfills() {
  _jsonPolyfillsInitialized || (BigInt.prototype.toJSON = function() {
    return this.toString();
  }, _jsonPolyfillsInitialized = !0);
}
jsonPolyfills();
function stringifyJSON(value, replacer, space) {
  return JSON.stringify(value, replacer, space);
}
function parseJSON(text, reviver) {
  return JSON.parse(text, reviver);
}

// src/@core/strings/index.ts
var isStr = (value) => typeof value == "string", isNotEmptyStr = (value) => typeof value == "string" && value.length > 0;
function valueToString(value, includeStringQuotes) {
  return Array.isArray(value) || isObj(value) ? stringifyJSON(value) : typeof value == "symbol" ? value.toString() : typeof value == "string" && (includeStringQuotes ?? !1) ? `'${value}'` : value === null ? "[null]" : value?.toString?.() ?? "[undefined]";
}

// src/@core/validation/errors.ts
var ValidationException = class extends Error {
  constructor(message) {
    super(message), this.name = "ValidationException";
  }
};
var InvalidEnumObjectException = class extends ValidationException {
  constructor(value) {
    super(`Invalid enum object:  ${valueToString(value)}`);
  }
}, InvalidEnumNumberException = class extends ValidationException {
  constructor(value) {
    super(`Invalid enum number:  ${valueToString(value)}`);
  }
}, InvalidEnumStringException = class extends ValidationException {
  constructor(value) {
    super(`Invalid enum string: ${valueToString(value)}`);
  }
};
var InvalidBooleanException = class extends ValidationException {
  constructor(value) {
    super(`Invalid boolean: ${valueToString(value)}`);
  }
};

// src/@core/validation/base.ts
import validator from "validator";
var MD5_LENGTH = 32, INT8_BYTES = 1, INT16_BYTES = 2, INT32_BYTES = 4, INT64_BYTES = 8, INT128_BYTES = 16;
var UINT8_MAX = 2 ** (INT8_BYTES * 8) - 1, INT16_MIN = -(2 ** (INT16_BYTES * 8 - 1)), INT16_MAX = 2 ** (INT16_BYTES * 8 - 1) - 1, UINT16_MIN = 0, UINT16_MAX = 2 ** (INT16_BYTES * 8) - 1, UINT32_MIN = 0, UINT32_MAX = 2 ** (INT32_BYTES * 8) - 1, UINT64_MIN_VALUE = BigInt(0), UINT64_MAX_VALUE = BigInt(`0x${"FF".repeat(INT64_BYTES)}`), UINT128_MIN_VALUE = BigInt(0), UINT128_MAX_VALUE = BigInt(`0x${"FF".repeat(INT128_BYTES)}`), EMAIL_MAX_LENGTH = 512;
var TCP_PORT_MIN_VALUE = 1, TCP_PORT_MAX_VALUE = 65535;
var IP_BYTES = 128 / 8, NODE_ID_BYTES = INT16_BYTES;
var NODE_ID_MAX_VALUE = 2 ** (NODE_ID_BYTES * 8) - 1;
var FIRST_NAME_MAX_LENGTH = 60;
var LAST_NAME_MAX_LENGTH = 60;
var FULL_NAME_MAX_LENGTH = FIRST_NAME_MAX_LENGTH + LAST_NAME_MAX_LENGTH + 1;
function isHost(value) {
  return typeof value == "string" && (validator.isFQDN(value, {}) || validator.isIP(value) || value === "localhost");
}
function isTCPPort(value) {
  return typeof value == "number" && value >= TCP_PORT_MIN_VALUE && value <= TCP_PORT_MAX_VALUE;
}
function isANumber(value) {
  return Number.isFinite(value);
}
function isAnInteger(value) {
  return Number.isSafeInteger(value);
}
function assertEnumType(enumType) {
  if (!isRealObject(enumType))
    throw new InvalidEnumObjectException(enumType);
}
function isValidEnumValue(enumType, value) {
  if (assertEnumType(enumType), typeof value != "number")
    throw new InvalidEnumNumberException(value);
  return typeof enumType[value] == "string";
}

// src/@core/transformation/index.ts
function toBoolean(rawValue, def) {
  let value = rawValue;
  if (typeof value == "boolean")
    return value;
  if (typeof value == "number")
    return value !== 0;
  if (typeof value == "string") {
    if (value = value.trim().toLowerCase().trim(), value === "1" || value === "true")
      return !0;
    if (value === "0" || value === "false")
      return !1;
  }
  if (typeof def != "boolean")
    throw new InvalidBooleanException(rawValue);
  return def;
}
function stringToEnum(enumType, value) {
  if (typeof value != "string")
    throw new InvalidEnumStringException(value);
  assertEnumType(enumType);
  let result = enumType[value];
  if (typeof result > "u")
    throw new InvalidEnumNumberException(result);
  if (typeof result != "number")
    throw new InvalidEnumNumberException(result);
  return result;
}
function enumToString(enumType, value) {
  if (typeof value != "number")
    throw new InvalidEnumNumberException(value);
  assertEnumType(enumType);
  let result = enumType[value];
  if (typeof result > "u")
    throw new InvalidEnumStringException(result);
  if (typeof result != "string")
    throw new InvalidEnumStringException(result);
  return result;
}

// src/environment/index.ts
import path from "path";

// src/@core/http/utils.ts
function isHttpServerError(status) {
  return status >= 500 && status <= 599;
}

// src/domain/shared/errors/base.ts
var HTTP_STATUS_UNAVAILABLE = -1;
var _API_ERROR_MESSAGES = /* @__PURE__ */ new Map([
  [0 /* UNEXPECTED_ERROR */, "Error inesperado"],
  [1e4 /* BAD_REQUEST */, "Petici\xF3n incorrecta"],
  [10001 /* INVALID_PARAMETER */, "Par\xE1metro inv\xE1lido"],
  [10002 /* INSUFFICIENT_PARAMS */, "Par\xE1metros insuficientes"],
  [10003 /* RESERVED_ARTICLE_GROUP_NAME */, "Nombre de grupo reservado"],
  [10004 /* INVALID_OLD_PASSWORD */, "La contrase\xF1a actual no es correcta"],
  [10005 /* INVALID_TRANSPORTE */, "Transporte inv\xE1lido o no permitido"],
  [10006 /* INVALID_DEPOSITO */, "Deposito inv\xE1lido o no permitido"],
  [10007 /* INVALID_CONDICION */, "Condicion de venta inv\xE1lida o no permitida"],
  [10008 /* INVALID_ASIENTO */, "Asiento inv\xE1lido o no permitido"],
  [10009 /* INVALID_TALONARIO */, "Talonario inv\xE1lido o no permitido"],
  [10010 /* INVALID_DIRECCION */, "Direcci\xF3n de entrega inv\xE1lida o no permitida"],
  [10011 /* DELIVERY_DATE_IS_EARLIER */, "La fecha de entrega debe ser posterior a la fecha de alta"],
  [10012 /* INVALID_CONSUMIDOR_FINAL_TALONARIO */, "No existe un talonario de facturaci\xF3n B o C para asignar al pedido"],
  [10013 /* INACCESIBLE_ORDER_ROW_ARTICLE */, "Uno de los art\xEDculos ya no existe o es inaccesible para el cliente"],
  [11e3 /* NOT_FOUND */, "No encontrado"],
  [11001 /* DXT_CUSTOMER_NOT_FOUND */, "Cliente DXTango ya no existe"],
  [11002 /* DXT_VENDOR_NOT_FOUND */, "Vendedor DXTango ya no existe"],
  [11003 /* ORDER_NOT_FOUND */, "Pedido no encontrado"],
  [11004 /* DRAFT_NOT_FOUND */, "Borrador no encontrado"],
  [12e3 /* NOT_IMPLEMENTED */, "Acci\xF3n no implementada"],
  [13e3 /* TOO_MANY_REQUESTS */, "Demasiadas peticiones"],
  [14e3 /* CONFLICT */, "Conflicto"],
  [14001 /* DUPLICATED_TABLE_RECORD */, "Ya existe un registro con los datos que intenta ingresar"],
  [14002 /* DUPLICATED_DRAFT_DESCRIPTION */, "Ya existe un borrador con el mismo nombre"],
  [15e3 /* PAYLOAD_TOO_LARGE */, "Paquete de datos demasiado grande"],
  [16e3 /* UNPROCESSABLE_ENTITY */, "Entidad no procesable"],
  [16001 /* UNKNOWN_TRANSPORTE */, "El transporte no existe"],
  [16002 /* UNKNOWN_DEPOSITO */, "El dep\xF3sito no existe"],
  [16003 /* UNKNOWN_CONDICION */, "La condici\xF3n de venta no existe"],
  [16004 /* UNKNOWN_ASIENTO */, "El tipo de asiento no existe"],
  [16005 /* UNKNOWN_TALONARIO */, "El talonario no existe"],
  [16006 /* UNKNOWN_DIRECCION */, "La direcci\xF3n de entrega no existe"],
  [16007 /* EMPTY_TRANSPORTE_LIST */, "No hay transportes disponibles"],
  [16008 /* EMPTY_DEPOSITO_LIST */, "No hay depositos disponibles"],
  [16009 /* EMPTY_CONDICION_LIST */, "No hay condiciones de venta disponibles"],
  [16010 /* EMPTY_ASIENTO_LIST */, "No hay tipos de asiento disponibles"],
  [16011 /* EMPTY_TALONARIO_LIST */, "No hay talonarios disponibles"],
  [16012 /* EMPTY_DIRECCION_LIST */, "No hay direcciones de entrega disponibles"],
  [1e5 /* UNAUTHORIZED */, "No autorizado"],
  [100001 /* INVALID_USERNAME_OR_PASSWORD */, "Usuario o contrase\xF1a incorrectos"],
  [100002 /* INVALID_AUTH_TOKEN */, "Token de autorizaci\xF3n no v\xE1lido"],
  [100003 /* EXPIRED_AUTH_TOKEN */, "Token de autorizaci\xF3n caducado"],
  [100004 /* MISSING_AUTH_TOKEN */, "Falta token de autorizaci\xF3n"],
  [100005 /* DXT_USER_DISABLED */, "El usuario est\xE1 inhabilitado en nuestro sistema"],
  [100006 /* TANGO_USER_DISABLED */, "El usuario est\xE1 inhabilitado en TANGO"],
  [101e3 /* FORBIDDEN */, "Acceso prohibido"],
  [101001 /* CUSTOMER_ROLE_REQUIRED */, "Acceso solo para clientes"],
  [101002 /* VENDOR_ROLE_REQUIRED */, "Acceso solo para vendedores"],
  [101004 /* CUSTOMER_OR_VENDOR_ROLE_REQUIRED */, "Acceso solo para clientes y vendedores"],
  [101003 /* ADMIN_ROLE_REQUIRED */, "Acceso solo para administradores"],
  [101005 /* INSUFFICIENT_PRIVILEGES */, "Permisos insuficientes"],
  [101006 /* CUSTOMER_DOES_NOT_BELONGS_TO_VENDOR */, "El cliente ya no pertenece al vendedor"],
  [101007 /* ORDER_DOES_NOT_BELONGS_TO_VENDOR */, "El pedido o borrador no pertenece al vendedor"],
  [101008 /* ORDER_DOES_NOT_BELONGS_TO_CUSTOMER */, "El pedido o borrador no pertenece al cliente"],
  [101009 /* USER_CANNOT_CREATE_ORDERS */, "El usuario no puede crear pedidos"],
  [101010 /* USER_CANNOT_UPDATE_ORDERS */, "El usuario no puede modificar pedidos"],
  [101011 /* USER_CANNOT_CANCEL_ORDERS */, "El usuario no puede anular pedidos"],
  [101012 /* USER_CANNOT_DELETE_ORDERS */, "El usuario no puede eliminar pedidos"],
  [101013 /* USER_CANNOT_UPDATE_ORDER_IN_CURRENT_STATUS */, "El usuario no puede modificar un pedido en el estado actual"],
  [101014 /* ORDER_CUSTOMER_DOES_NOT_BELONGS_TO_VENDOR */, "El cliente asociado al pedido o borrador ya no pertenece al vendedor"],
  [101015 /* USER_CANNOT_DELETE_ORDER_IN_CURRENT_STATUS */, "El usuario no puede eliminar un pedido en el estado actual"],
  [101016 /* USER_CANNOT_CANCEL_ORDER_IN_CURRENT_STATUS */, "El usuario no puede anular un pedido en el estado actual"],
  [2e5 /* TANGO_ERROR */, "Error de acceso a Tango"],
  [200001 /* TANGO_DB_ACCESS_ERROR */, "Error de acceso a base de datos de Tango"],
  [200002 /* TANGO_DB_INVALID_DATA */, "La informaci\xF3n en la base de datos de Tango es inconsistente"],
  [200003 /* TANGO_DICTIONARY_ACCESS_ERROR */, "La DB del diccionario no existe o fall\xF3 la conexi\xF3n"],
  [200004 /* TANGO_DICTIONARY_INITIALIZATION_ERROR */, "Error al inicializar diccionario"],
  [200005 /* TANGO_COMPANY_NOT_SELECTED */, "Empresa no seleccionada"],
  [200006 /* TANGO_COMPANY_NOT_LISTED_IN_DICTIONARY */, "Empresa no listada en diccionario"],
  [200007 /* TANGO_COMPANY_ACCESS_ERROR */, "La DB de la Empresa no existe o fall\xF3 la conexi\xF3n"],
  [200008 /* TANGO_COMPANY_INITIALIZATION_ERROR */, "Error al inicializar empresa"],
  [200009 /* TANGO_CUSTOMER_NO_LONGER_EXISTS */, "El cliente ya no existe en Tango"],
  [200010 /* TANGO_VENDOR_NO_LONGER_EXISTS */, "El vendedor ya no existe en Tango"],
  [200011 /* TANGO_CLIENTE_DB_DATA_ERROR */, "Error en DB Tango, tabla de clientes"],
  [200012 /* TANGO_VENDEDOR_DB_DATA_ERROR */, "Error en DB Tango, tabla de vendedores"],
  [200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "Error en DB Tango, tabla de pedidos"],
  [200014 /* TANGO_PERFIL_DB_DATA_ERROR */, "Error en DB Tango, tabla de perfiles de facturaci\xF3n"],
  [7e5 /* CLIENT_CONNECTION_ERROR */, "No hay acceso a internet. Por favor verifique su conexi\xF3n"],
  [799e3 /* INTERNAL_CLIENT_ERROR */, "Error desconocido del navegador"],
  [8e5 /* SERVER_BUSY */, "Servidor ocupado"],
  [899e3 /* INTERNAL_SERVER_ERROR */, "Error interno del servidor"],
  [899001 /* FATAL_MALFORMED_SERVER_RESPONSE */, "Error cr\xEDtico. Datos del servidor con formato inv\xE1lido"],
  [899100 /* FATAL_DB_QUERY_FAILED */, "Error cr\xEDtico. Fallo en consulta a base de datos"],
  [899103 /* FATAL_UNKNOWN_DB_ERROR */, "Error cr\xEDtico. Fallo desconocido en base de datos"],
  [899105 /* FATAL_CLIENT_INITIALIZATION_ERROR */, "Error cr\xEDtico. Fallo al inicializar el cliente"],
  [899104 /* FATAL_SERVER_INITIALIZATION_ERROR */, "Error cr\xEDtico. Fallo al inicializar el servidor"]
]), _HTTP_STATUS_TO_API_ERRORS = /* @__PURE__ */ new Map([
  [400 /* BAD_REQUEST */, 1e4 /* BAD_REQUEST */],
  [404 /* NOT_FOUND */, 11e3 /* NOT_FOUND */],
  [501 /* NOT_IMPLEMENTED */, 12e3 /* NOT_IMPLEMENTED */],
  [409 /* CONFLICT */, 14e3 /* CONFLICT */],
  [413 /* PAYLOAD_TOO_LARGE */, 15e3 /* PAYLOAD_TOO_LARGE */],
  [422 /* UNPROCESSABLE_ENTITY */, 16e3 /* UNPROCESSABLE_ENTITY */],
  [401 /* UNAUTHORIZED */, 1e5 /* UNAUTHORIZED */],
  [403 /* FORBIDDEN */, 101e3 /* FORBIDDEN */],
  [500 /* INTERNAL_SERVER_ERROR */, 899e3 /* INTERNAL_SERVER_ERROR */]
]), _API_ERROR_HTTP_STATUS = /* @__PURE__ */ new Map([
  [1e4 /* BAD_REQUEST */, 400 /* BAD_REQUEST */],
  [11e3 /* NOT_FOUND */, 404 /* NOT_FOUND */],
  [12e3 /* NOT_IMPLEMENTED */, 501 /* NOT_IMPLEMENTED */],
  [13e3 /* TOO_MANY_REQUESTS */, 429 /* TOO_MANY_REQUESTS */],
  [14e3 /* CONFLICT */, 409 /* CONFLICT */],
  [15e3 /* PAYLOAD_TOO_LARGE */, 413 /* PAYLOAD_TOO_LARGE */],
  [16e3 /* UNPROCESSABLE_ENTITY */, 422 /* UNPROCESSABLE_ENTITY */],
  [1e5 /* UNAUTHORIZED */, 401 /* UNAUTHORIZED */],
  [101e3 /* FORBIDDEN */, 403 /* FORBIDDEN */],
  [2e5 /* TANGO_ERROR */, 503 /* SERVICE_UNAVAILABLE */],
  [200001 /* TANGO_DB_ACCESS_ERROR */, 503 /* SERVICE_UNAVAILABLE */],
  [200002 /* TANGO_DB_INVALID_DATA */, 500 /* INTERNAL_SERVER_ERROR */],
  [200003 /* TANGO_DICTIONARY_ACCESS_ERROR */, 500 /* INTERNAL_SERVER_ERROR */],
  [200004 /* TANGO_DICTIONARY_INITIALIZATION_ERROR */, 500 /* INTERNAL_SERVER_ERROR */],
  [200006 /* TANGO_COMPANY_NOT_LISTED_IN_DICTIONARY */, 500 /* INTERNAL_SERVER_ERROR */],
  [200007 /* TANGO_COMPANY_ACCESS_ERROR */, 500 /* INTERNAL_SERVER_ERROR */],
  [200008 /* TANGO_COMPANY_INITIALIZATION_ERROR */, 500 /* INTERNAL_SERVER_ERROR */],
  // Unexpected errors (500000 to 999000)
  [7e5 /* CLIENT_CONNECTION_ERROR */, HTTP_STATUS_UNAVAILABLE],
  [799e3 /* INTERNAL_CLIENT_ERROR */, HTTP_STATUS_UNAVAILABLE],
  [8e5 /* SERVER_BUSY */, 503 /* SERVICE_UNAVAILABLE */],
  [899e3 /* INTERNAL_SERVER_ERROR */, 500 /* INTERNAL_SERVER_ERROR */]
]), _ERRORS_REQUIRING_CONTACTING_ADMIN = [
  0 /* UNEXPECTED_ERROR */,
  12e3 /* NOT_IMPLEMENTED */,
  15e3 /* PAYLOAD_TOO_LARGE */,
  16e3 /* UNPROCESSABLE_ENTITY */,
  2e5 /* TANGO_ERROR */,
  899e3 /* INTERNAL_SERVER_ERROR */
];
function getGenericErrorCode(errorCode) {
  return errorCode - errorCode % 1e3;
}
function getDXTErrorDescription(errorCode) {
  return _API_ERROR_MESSAGES.get(errorCode)?.toString() ?? _API_ERROR_MESSAGES.get(getGenericErrorCode(errorCode))?.toString() ?? errorCode.toString();
}
function getHttpStatusFromErrorCode(errorCode) {
  return _API_ERROR_HTTP_STATUS.get(errorCode) ?? _API_ERROR_HTTP_STATUS.get(getGenericErrorCode(errorCode)) ?? 500 /* INTERNAL_SERVER_ERROR */;
}
function getErrorCodeFromHttpStatus(status) {
  return _HTTP_STATUS_TO_API_ERRORS.get(status) ?? 0 /* UNEXPECTED_ERROR */;
}
function requiresContactingAdmin(errorCode) {
  return _ERRORS_REQUIRING_CONTACTING_ADMIN.includes(errorCode) || _ERRORS_REQUIRING_CONTACTING_ADMIN.includes(getGenericErrorCode(errorCode));
}
var DXTError = class {
  constructor(error_code, options) {
    this.error_code = error_code;
    this.generic_error_code = getGenericErrorCode(error_code), this.error_description = getDXTErrorDescription(error_code), this.status = getHttpStatusFromErrorCode(this.error_code), this.extra = options?.extra, this.is_silent = options?.isSilent, this.message_to_user = options?.messageToUser;
  }
}, DXTApiMalformedResponse = class extends Error {
  constructor(status) {
    super();
    this.status = status;
  }
}, DXTException = class extends Error {
  constructor(error, customMessage) {
    let dxtError = error instanceof DXTError ? error : new DXTError(error, { extra: customMessage });
    super(dxtError.error_description);
    this.name = this.constructor.name.toString(), this.dxtError = dxtError;
  }
  isUnexpected() {
    return isHttpServerError(this.dxtError.status);
  }
};

// src/@depsel-nodejs/api-server/exceptions/HttpException.ts
var HttpException = class extends Error {
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
};

// src/@depsel-nodejs/api-server/exceptions/BadRequestException.ts
var BadRequestException = class extends HttpException {
  /**
   * Instantiates a `BadRequestException` Exception with status code 400.
   *
   * @param message Error message (default: 'Bad Request')
   *
   * @example
   * `throw new BadRequestException()`
   */
  constructor(message = "Bad Request") {
    super(400 /* BAD_REQUEST */, message);
    this.name = "BadRequestException";
  }
};

// src/@depsel-nodejs/api-server/exceptions/NotImplementedException.ts
var NotImplementedException = class extends HttpException {
  constructor(message = "Not implemented") {
    super(501 /* NOT_IMPLEMENTED */, message);
    this.name = "NotImplementedException";
  }
};

// src/@depsel-nodejs/api-server/utils.ts
function jsonResponse(body, init) {
  let status = init?.status ?? 200 /* OK */, response = new Response(stringifyJSON(body), init);
  return response.ok ? response.okBodyObject = body : response.errorBodyObject = body, response;
}
function getDefaultHttpStatusFromMethod(method) {
  if (!method)
    return 200 /* OK */;
  switch (method) {
    case "POST":
      return 201 /* CREATED */;
  }
  return 200 /* OK */;
}
function errorApiResponse(errorCode) {
  let error = new DXTException(errorCode), { status } = error.dxtError;
  return jsonResponse(
    {
      status,
      error_description: error.message
    },
    { status }
  );
}
async function mapEndpoint(request, params, endpoints) {
  let {
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
  return errorApiResponse(12e3 /* NOT_IMPLEMENTED */);
}
var notFoundApiResponse = async () => errorApiResponse(11e3 /* NOT_FOUND */), unimplementedApiResponse = async () => errorApiResponse(12e3 /* NOT_IMPLEMENTED */);

// src/@core/http/http_status_messages.ts
function getMessageFromHttpStatus(status) {
  return _httpStatusMessagesEnglish.get(status) ?? _httpStatusMessagesEnglish.get(500 /* INTERNAL_SERVER_ERROR */) ?? "Error";
}
var _httpStatusMessagesEnglish = /* @__PURE__ */ new Map([
  [100 /* CONTINUE */, "The request can continue."],
  [101 /* SWITCHING_PROTOCOLS */, "The server has changed protocols."],
  [102 /* PROCESSING */, "The server is processing the request, but it is not yet complete."],
  [103 /* EARLYHINTS */, "Early Hints."],
  [200 /* OK */, "The request was successful."],
  [201 /* CREATED */, "The request has been fulfilled and has resulted in the creation of a new resource."],
  [202 /* ACCEPTED */, "The request has been accepted for processing, but processing is not yet complete."],
  [203 /* NON_AUTHORITATIVE_INFORMATION */, "Non-Authoritative Information."],
  [204 /* NO_CONTENT */, "The request was successful but did not return any content."],
  [205 /* RESET_CONTENT */, "The content has been reset."],
  [206 /* PARTIAL_CONTENT */, "Only a part of the request was returned."],
  [300 /* AMBIGUOUS */, "The request has more than one possible response."],
  [301 /* MOVED_PERMANENTLY */, "The request was permanently redirected."],
  [302 /* FOUND */, "The request was redirected."],
  [303 /* SEE_OTHER */, "The response to the request can be found under a different URL."],
  [304 /* NOT_MODIFIED */, "The request has not been modified since it was last requested."],
  [307 /* TEMPORARY_REDIRECT */, "The request was temporarily redirected."],
  [308 /* PERMANENT_REDIRECT */, "The request was permanently redirected."],
  [400 /* BAD_REQUEST */, "The request could not be understood by the server due to incorrect syntax."],
  [401 /* UNAUTHORIZED */, "The request requires authentication."],
  [402 /* PAYMENT_REQUIRED */, "The server requires payment to complete the request."],
  [403 /* FORBIDDEN */, "The server has refused the request."],
  [404 /* NOT_FOUND */, "The requested resource was not found."],
  [405 /* METHOD_NOT_ALLOWED */, "The request method is not allowed for the requested resource."],
  [406 /* NOT_ACCEPTABLE */, "The server cannot return a response according to the headers accepted by the client."],
  [407 /* PROXY_AUTHENTICATION_REQUIRED */, "The server requires proxy authentication."],
  [408 /* REQUEST_TIMEOUT */, "The server has timed out waiting for the request."],
  [409 /* CONFLICT */, "The request could not be completed due to a conflict with the current state of the resource."],
  [410 /* GONE */, "The requested resource is no longer available."],
  [411 /* LENGTH_REQUIRED */, "The length of the request has not been defined."],
  [412 /* PRECONDITION_FAILED */, "A precondition given for the request failed."],
  [413 /* PAYLOAD_TOO_LARGE */, "The size of the request exceeds the limit set by the server."],
  [414 /* URI_TOO_LONG */, "The request URI is too long for the server to process."],
  [415 /* UNSUPPORTED_MEDIA_TYPE */, "The media type of the request is not supported by the server."],
  [416 /* REQUESTED_RANGE_NOT_SATISFIABLE */, "The requested range is not satisfiable."],
  [417 /* EXPECTATION_FAILED */, "The request cannot be processed due to an expectation failed."],
  [418 /* I_AM_A_TEAPOT */, "I'm a teapot."],
  [421 /* MISDIRECTED */, "The request was directed at a server that is not appropriate."],
  [422 /* UNPROCESSABLE_ENTITY */, "The request cannot be processed due to an unprocessable entity."],
  [424 /* FAILED_DEPENDENCY */, "The request failed due to a failed dependency."],
  [428 /* PRECONDITION_REQUIRED */, "The request requires a precondition."],
  [429 /* TOO_MANY_REQUESTS */, "The client has sent too many requests in a given amount of time."],
  [500 /* INTERNAL_SERVER_ERROR */, "The server encountered an unexpected situation that prevented it from completing the request."],
  [501 /* NOT_IMPLEMENTED */, "The server does not support the functionality required to complete the request."],
  [502 /* BAD_GATEWAY */, "The server acted as a gateway or proxy and received an invalid response from the upstream server."],
  [503 /* SERVICE_UNAVAILABLE */, "The server is not available at the moment."],
  [504 /* GATEWAY_TIMEOUT */, "The upstream server has timed out while waiting for a response from the upstream server."],
  [505 /* HTTP_VERSION_NOT_SUPPORTED */, "The HTTP version used in the request is not supported by the server."]
]);

// src/@depsel-nodejs/api-server/ApiController.ts
var ApiController = class {
  constructor() {
    jsonPolyfills();
  }
  async onError(e, req) {
    let status = e instanceof DXTException ? e.dxtError.status : isAnInteger(e?.status) ? e?.status : 500 /* INTERNAL_SERVER_ERROR */;
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
};

// src/@depsel-nodejs/api-server/ApiEndpoint.ts
var ApiEndpoint = class {
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
    try {
      let method = options?.method;
      if (method && method !== req.method)
        throw new NotImplementedException();
      let error = await this._prepareRequest(req, options);
      if (error)
        return await this.controller.onError(error, req);
      await this.controller.onRequest(req);
      let data = await this.handle(req), status = this.options?.status ?? getDefaultHttpStatusFromMethod(options?.method);
      return jsonResponse(data, {
        status
      });
    } catch (e) {
      return await this.controller.onError(e, req);
    }
  }
  async _streamToString(stream) {
    let chunks = Array();
    for await (let chunk of stream)
      chunk instanceof Uint8Array && chunks.push(chunk);
    return Buffer.concat(chunks).toString("utf8");
  }
  async _prepareRequest(req, options) {
    let urlObject = new URL(req.url), params = options?.params;
    req.params = params ?? {}, req.urlObject = urlObject;
    let { searchParams } = urlObject, queryValues = {};
    searchParams.forEach((v, k) => {
      let current = queryValues[k];
      if (current == null) {
        queryValues[k] = v;
        return;
      }
      Array.isArray(current) && current.push(v), queryValues[k] = [
        current,
        v
      ];
    }), req.query = {
      ...queryValues,
      ...options?.query
    };
    try {
      let requestBody = req.body != null ? await this._streamToString(req.body) : null;
      typeof requestBody == "string" && (requestBody = requestBody.trim(), requestBody.length === 0 && (requestBody = "{}")), req.bodyJson = options?.body ?? (requestBody != null ? parseJSON(requestBody) : null);
    } catch {
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
    let { options } = this;
    if (options == null)
      return;
    let { validation } = options;
    if (validation == null)
      return;
    let result = {}, { body, query, params } = validation;
    if (body != null && (result.body = this._validateRequestValue(0 /* body */, "body", req.bodyJson, body)), query != null && (result.query = this._validateRequestValues(1 /* query */, req.query, query)), params != null && (result.params = this._validateRequestValues(2 /* params */, req.params, params)), !(result.body === void 0 && result.query === void 0 && result.params === void 0))
      return result;
  }
  _validateRequestValues(target, values, validators) {
    let result = {};
    return Object.entries(validators).forEach(([key, validatorFunction]) => {
      if (typeof validatorFunction != "function")
        return;
      let validatedValue = this._validateRequestValue(target, key, values[key], validatorFunction);
      result[key] = validatedValue;
    }), result;
  }
  _validateRequestValue(target, key, value, validatorFunction) {
    if (typeof validatorFunction == "function")
      try {
        return validatorFunction(value);
      } catch (e) {
        let targetString;
        switch (target) {
          case 2 /* params */:
            targetString = `Invalid param ${key}`;
            break;
          case 0 /* body */:
            targetString = `Invalid query value ${key}`;
            break;
          default:
            targetString = "Invalid body";
            break;
        }
        let errorInfo = exceptionToDXTErrorInfo(e);
        throw new BadRequestException(`${targetString}: ${errorInfo.extra ?? "unknown error"}`);
      }
  }
};
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

// src/@core/axios/axiosRequestPlus.ts
import axios, { AxiosError } from "axios";
var IS_CLIENT_ONLINE_CHECK_URL = "https://one.one.one.one/", AxiosRequestPlusError = class extends Error {
  constructor(originalError, isInternetAlive, message) {
    let resolvedMessage = message ?? originalError?.message;
    super(typeof resolvedMessage == "string" ? resolvedMessage : void 0);
    this.originalError = originalError;
    this.isInternetAlive = isInternetAlive;
    this.name = "AxiosRequestPlusError", this.stack = typeof originalError?.stack == "string" ? originalError?.stack : void 0;
  }
};
async function _isInternetAlive() {
  try {
    return !!(await fetch(IS_CLIENT_ONLINE_CHECK_URL, {
      method: "HEAD"
    })).ok;
  } catch {
    return !1;
  }
}
async function axiosRequestPlus(config2) {
  try {
    return await axios.request(config2);
  } catch (e) {
    let isInternetAlive = !1;
    if (e instanceof AxiosError && e.response)
      isInternetAlive = !0;
    else
      try {
        isInternetAlive = await _isInternetAlive();
      } catch {
      }
    throw new AxiosRequestPlusError(e, isInternetAlive);
  }
}

// src/domain/shared/errors/errors.utils.ts
import { AxiosError as AxiosError2 } from "axios";
function isErrorInfo(data) {
  let errorInfo = data;
  if (!isRealObject(errorInfo))
    return !1;
  let { status, error_code, error_description } = errorInfo, statusNumber = status && typeof status == "number" ? status : Number.parseInt(status?.toString()), errorCodeNumber = error_code && typeof error_code == "number" ? error_code : Number.parseInt(error_code?.toString());
  return Number.isInteger(statusNumber) && Number.isInteger(errorCodeNumber) && typeof error_description == "string";
}
function exceptionToDXTErrorInfo(error) {
  let originalErrorInfo = error?.originalError?.response?.data;
  if (isErrorInfo(originalErrorInfo))
    return originalErrorInfo;
  if (error instanceof DXTException)
    return error.dxtError;
  if (error instanceof ValidationException) {
    let statusCode = 400 /* BAD_REQUEST */, error_code2 = getErrorCodeFromHttpStatus(statusCode);
    return {
      status: statusCode,
      error_description: getDXTErrorDescription(error_code2),
      error_code: error_code2,
      extra: error.message
    };
  }
  if (error instanceof HttpException) {
    let { statusCode } = error, error_code2 = getErrorCodeFromHttpStatus(statusCode);
    return {
      status: statusCode,
      error_description: getDXTErrorDescription(error_code2),
      error_code: error_code2,
      extra: error.message
    };
  }
  let isInternetAlive = null;
  if (error instanceof AxiosRequestPlusError && (isInternetAlive = error.isInternetAlive, error = error.originalError), error instanceof DXTApiMalformedResponse) {
    let error_code2 = 899001 /* FATAL_MALFORMED_SERVER_RESPONSE */;
    return {
      status: error.status,
      error_description: getDXTErrorDescription(error_code2),
      error_code: error_code2
    };
  }
  if (error instanceof AxiosError2) {
    let error_code2 = isInternetAlive ?? !1 ? 899e3 /* INTERNAL_SERVER_ERROR */ : 7e5 /* CLIENT_CONNECTION_ERROR */;
    return {
      status: error.response?.status ?? getHttpStatusFromErrorCode(error_code2),
      error_description: getDXTErrorDescription(error_code2),
      error_code: error_code2,
      extra: error.message
    };
  }
  let error_code = 0 /* UNEXPECTED_ERROR */;
  return {
    error_code,
    error_description: getDXTErrorDescription(error_code),
    status: getHttpStatusFromErrorCode(error_code),
    extra: error.message
  };
}
function isDXTException(e, errorCode) {
  return e instanceof DXTException && (errorCode == null || e.dxtError.error_code === errorCode || e.dxtError.generic_error_code === errorCode);
}
function isNotFoundException(e) {
  return isDXTException(e, 11e3 /* NOT_FOUND */);
}

// src/environment/index.ts
var ExecutionMode = /* @__PURE__ */ ((ExecutionMode2) => (ExecutionMode2[ExecutionMode2.development = 0] = "development", ExecutionMode2[ExecutionMode2.test = 1] = "test", ExecutionMode2[ExecutionMode2.beta = 2] = "beta", ExecutionMode2[ExecutionMode2.production = 3] = "production", ExecutionMode2))(ExecutionMode || {}), _executionMode;
function _initEnvironmentConfig() {
  if (isNavigator()) {
    let executionModeString = window?.dxTangoExecutionMode;
    if (!executionModeString)
      return;
    _executionMode = stringToEnum(ExecutionMode, executionModeString);
  }
  if (!isNode())
    return;
  let nodeEnv = "production";
  if (nodeEnv === "development") {
    _executionMode = 0 /* development */;
    return;
  }
  if (nodeEnv === "test") {
    _executionMode = 1 /* test */;
    return;
  }
  if (path.basename(process?.cwd?.() ?? "").toLowerCase() === "beta") {
    _executionMode = 2 /* beta */;
    return;
  }
  _executionMode = 3 /* production */;
}
function _throwEnvironmentFatalError() {
  if (isNode()) {
    let errorCode = 899104 /* FATAL_SERVER_INITIALIZATION_ERROR */;
    console.error(getDXTErrorDescription(errorCode)), process.exit(errorCode);
  }
  throw new DXTException(899105 /* FATAL_CLIENT_INITIALIZATION_ERROR */);
}
function getExecutionMode() {
  return _executionMode === void 0 && (_initEnvironmentConfig(), _executionMode === void 0 && _throwEnvironmentFatalError()), _executionMode;
}
function getExecutionModeString() {
  let executionMode = getExecutionMode();
  return enumToString(ExecutionMode, executionMode);
}
function isDevelopment() {
  return getExecutionMode() === 0 /* development */;
}
function isProduction() {
  return getExecutionMode() === 3 /* production */;
}

// src/app/chakra/createChakraEmotionCache.ts
import createCache from "@emotion/cache";
function createChakraEmotionCache() {
  return createCache({ key: "cha" });
}
var defaultChakraCache = createChakraEmotionCache();

// src/app/entry.server.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new URL(request.url).pathname.startsWith("/api/") ? await notFoundApiResponse() : await handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
async function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return await new Promise((resolve, reject) => {
    let shellRendered = !1, emotionCache = createChakraEmotionCache(), { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxs(EmotionCacheProvider, { value: emotionCache, children: [
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
          shellRendered = !0;
          let body = new PassThrough(), bodyWithStyles = createEmotionServer(emotionCache).renderStylesToNodeStream();
          body.pipe(bodyWithStyles);
          let stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function getEnvScript() {
  return `<script>window.dxTangoExecutionMode="${getExecutionModeString()}"</script>`;
}

// src/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-FZ4LGFD5.css";

// src/app/root.tsx
import { Outlet, useLoaderData, useRouteError } from "@remix-run/react";

// src/@core/value_objects/types.ts
var ValueObjectException = class extends ValidationException {
  constructor(message) {
    super(message), this.name = "ValueObjectException";
  }
};

// src/@core/value_objects/base.ts
var ValueObjectBase = class {
  toString() {
    return this.value === void 0 ? "undefined" : this.value === null ? "null" : this.value.toString();
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
    let className = this.constructor.name.toString(), rawValueErrorString = "******", extraErrorInfo = this.extraErrorInfo(input), exceptionMessage = `${customMessageBegin ?? "Invalid value"} ${className}(${rawValueErrorString})` + (extraErrorInfo !== "" ? `. ${extraErrorInfo}` : "");
    return new ValueObjectException(exceptionMessage);
  }
  throwError(input, customMessage) {
    throw this.getError(input, customMessage);
  }
}, ValueObject = class extends ValueObjectBase {
  constructor(input) {
    super();
    this.value = this.validate(input);
  }
};
var VOInteger = class extends ValueObject {
  validate(input) {
    let value = input;
    try {
      if (typeof value == "string" && (value = Number.parseInt(value)), typeof value == "number" && Number.isInteger(value))
        return value;
    } catch {
    }
    this.throwError(input);
  }
};
var VONumberRange = class extends ValueObjectBase {
  constructor(value, min, max, isInteger) {
    super();
    this.min = min;
    this.max = max;
    this.isInteger = isInteger ?? !1, this.value = this.validate(value);
  }
  extraErrorInfo(input) {
    return `must to be between ${this.min} and ${this.max}`;
  }
  validate(input) {
    let value = input;
    try {
      if (typeof value == "string" && (value = this.isInteger ? Number.parseInt(value) : Number.parseFloat(value)), (value == null || this.isInteger && !Number.isInteger(value) || !this.isInteger && !Number.isFinite(value)) && this.throwError(input), (this.min == null || value >= this.min) && (this.max == null || value <= this.max))
        return value;
    } catch {
    }
    this.throwError(input);
  }
}, VOIntegerRange = class extends VONumberRange {
  constructor(value, min, max) {
    super(value, min, max, !0);
  }
}, VOPositiveNumber = class extends VONumberRange {
  constructor(value) {
    super(value, 0, void 0, void 0);
  }
}, VOBigIntRange = class extends ValueObjectBase {
  constructor(value, min, max) {
    super();
    this.min = min;
    this.max = max;
    this.value = this.validate(value);
  }
  validate(input) {
    let value = input;
    try {
      if ((typeof value == "string" || typeof value == "number") && (value = BigInt(value)), typeof value != "bigint" && this.throwError(input), (typeof this.min != "bigint" || value >= this.min) && (typeof this.max != "bigint" || value <= this.max))
        return value;
    } catch {
    }
    this.throwError(input);
  }
};
var VOUInt64 = class extends VOBigIntRange {
  constructor(value) {
    super(value, UINT64_MIN_VALUE, UINT64_MAX_VALUE);
  }
}, VOBoolean = class extends ValueObject {
  validate(input) {
    try {
      return toBoolean(input);
    } catch {
    }
    this.throwError(input);
  }
}, VOString = class extends ValueObject {
  validate(input) {
    return isStr(input) || this.throwError(input), input;
  }
}, VOTrimmedString = class extends ValueObject {
  constructor(input, maxLength) {
    super(input);
    this.maxLength = maxLength;
  }
  validate(input) {
    isStr(input) || this.throwError(input);
    let value = input.trim();
    if (this.maxLength == null || value.length <= this.maxLength)
      return value;
    this.throwError(input);
  }
};

// src/@core/value_objects/vo_not_empty_string.ts
var VONotEmptyString = class extends ValueObject {
  constructor(input, maxLength) {
    super(input);
    this.maxLength = maxLength;
  }
  validate(input) {
    if (typeof input == "string") {
      let value = input.trim();
      if (value !== "" && (this.maxLength == null || value.length <= this.maxLength))
        return value;
    }
    this.throwError(input);
  }
};

// src/@core/math/index.ts
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var UINT64_VALUES = BigInt(1) << BigInt(64);
function limitNumber(value, min, max) {
  if (min = min ?? Number.NEGATIVE_INFINITY, max = max ?? Number.POSITIVE_INFINITY, min > max) {
    let aux = min;
    min = max, max = min;
  }
  return value < min ? min : value > max ? max : value;
}

// src/@core/time/index.ts
var HOUR_IN_MINUTES = 60, DAY_IN_MINUTES = HOUR_IN_MINUTES * 24, WEEK_IN_MINUTES = DAY_IN_MINUTES * 7, MINUTE_IN_SECONDS = 60, TEN_MINUTES_IN_SECONDS = MINUTE_IN_SECONDS * 10, HOUR_IN_SECONDS = HOUR_IN_MINUTES * 60, DAY_IN_SECONDS = DAY_IN_MINUTES * 60, WEEK_IN_SECONDS = WEEK_IN_MINUTES * 60, MINUTE_IN_MILLISECONDS = MINUTE_IN_SECONDS * 1e3, TEN_MINUTES_IN_MILLISECONDS = MINUTE_IN_MILLISECONDS * 10, HOUR_IN_MILLISECONDS = HOUR_IN_SECONDS * 1e3, DAY_IN_MILLISECONDS = DAY_IN_SECONDS * 1e3, WEEK_IN_MILLISECONDS = WEEK_IN_SECONDS * 1e3;
function now() {
  return Date.now();
}
function addDays(date2, days) {
  let ts = date2.getTime(), millis = days * DAY_IN_MILLISECONDS;
  return new Date(ts + millis);
}
function dateToISOStringZ(date2) {
  return date2.toISOString().substring(0, 19) + "Z";
}
function getDateHHMMSS(date2) {
  let hours = String(date2.getHours()).padStart(2, "0"), minutes = String(date2.getMinutes()).padStart(2, "0"), seconds = String(date2.getSeconds()).padStart(2, "0");
  return `${hours}${minutes}${seconds}`;
}

// src/@core/value_objects/vo_date.ts
var VODate = class extends ValueObject {
  validate(input) {
    typeof input != "string" && this.throwError(input);
    let value = input.trim();
    if (value.length === 10 && value[4] === "-" && value[7] === "-")
      try {
        let date2 = new Date(value);
        if (!Number.isNaN(date2.valueOf()))
          return date2;
      } catch {
      }
    this.throwError(input);
  }
  toString() {
    return dateToISOStringZ(this.value).substring(0, 10);
  }
};

// src/@core/value_objects/vo_email_address.ts
import validator3 from "validator";
var VOEmailAddress = class extends ValueObject {
  throwInvalidAddressError(rawAddress) {
    this.throwError(rawAddress, "Invalid email address");
  }
  validate(input) {
    if (typeof input == "string") {
      let value = input.trim().toLowerCase();
      if (validator3.isEmail(value, {
        domain_specific_validation: !0
      }))
        return value;
    }
    this.throwError(input);
  }
};

// src/@core/value_objects/vo_md5.ts
import validator4 from "validator";
var VOMD5 = class extends ValueObject {
  constructor(input) {
    Buffer.isBuffer(input) && (input = input.toString("hex")), super(input);
  }
  validate(input) {
    let value;
    if (Buffer.isBuffer(input) && (value = input.toString("hex")), typeof input == "string" && (value = input.trim().toLowerCase()), typeof value == "string" && validator4.isMD5(value))
      return value;
    this.throwError(input);
  }
  toBuffer() {
    return Buffer.from(this.value, "hex");
  }
  static random() {
    let randomBytes = Array(16);
    for (let i = 0; i < randomBytes.length; i++)
      randomBytes[i] = random(0, 255);
    return new VOMD5(Buffer.from(randomBytes));
  }
};

// src/@core/value_objects/vo_uint16.ts
var VOUInt16 = class extends VOIntegerRange {
  constructor(input) {
    super(input, UINT16_MIN, UINT16_MAX);
  }
};

// src/@core/value_objects/vo_uint32.ts
var VOUInt32 = class extends VOIntegerRange {
  constructor(value) {
    super(value, UINT32_MIN, UINT32_MAX);
  }
};

// src/@core/value_objects/vo_hexadecimal.ts
import validator5 from "validator";
var VOHexadecimal = class extends ValueObject {
  validate(input) {
    if (Buffer.isBuffer(input))
      return input.toString("hex").toLowerCase();
    if (typeof input == "string") {
      let value = input.trim().toLowerCase();
      if (validator5.isHexadecimal(value))
        return value;
    }
    this.throwError(input);
  }
};

// src/@core/value_objects/vo_sha1.ts
import validator6 from "validator";
var VOSHA1 = class extends ValueObject {
  validate(input) {
    let value;
    if (Buffer.isBuffer(input) && (value = input.toString("hex")), typeof input == "string" && (value = input.trim().toLowerCase()), typeof value == "string" && validator6.isHash(value, "sha1"))
      return value;
    this.throwError(input);
  }
  toBuffer() {
    return Buffer.from(this.value, "hex");
  }
  static random() {
    let randomBytes = Array(20);
    for (let i = 0; i < randomBytes.length; i++)
      randomBytes[i] = random(0, 255);
    return new VOSHA1(Buffer.from(randomBytes));
  }
};

// src/@core/value_objects/vo_tcp_port.ts
var VOTCPPort = class extends ValueObject {
  validate(input) {
    let value = input;
    if (typeof value == "string" && (value = Number.parseInt(value)), typeof value == "number" && isTCPPort(value))
      return value;
    this.throwError(input);
  }
};

// src/@core/value_objects/vo_host.ts
var VOHost = class extends ValueObject {
  validate(input) {
    let value = input;
    if (typeof value == "string" && (value = value.trim().toLowerCase(), isHost(value)))
      return value;
    this.throwError(input);
  }
};

// src/@core/value_objects/utils.ts
function tryVO(toTry, defaultVO) {
  try {
    return toTry();
  } catch {
  }
  return defaultVO;
}

// src/domain/auth/value_objects/vo_auth_random.ts
var VOAuthRandom = class extends VOUInt64 {
  static generate() {
    let ht = process.hrtime()[1] % 10, result = Math.trunc(
      Math.random() / 10 ** ht / (ht + 1) * Number.MAX_SAFE_INTEGER
    );
    return new VOAuthRandom(BigInt(result));
  }
};

// src/domain/auth/value_objects/vo_weak_check_auth_token.ts
var AuthTokenProps = class {
  constructor(universalId, userId, random2, roleNumber) {
    this.universalId = new VOHexadecimal(universalId), this.userId = new VOUInt32(userId), this.random = new VOAuthRandom(random2), this.roleNumber = new VOUInt16(roleNumber);
  }
}, VOWeakCheckAuthToken = class extends ValueObject {
  constructor() {
    super(...arguments);
    this._payload = null;
    this._verificationHash = null;
  }
  validate(rawValue) {
    if (rawValue instanceof AuthTokenProps)
      throw new ValidationException(
        "VOWeakCheckAuthToken does not accept AuthTokenProps as value"
      );
    let value = rawValue;
    try {
      if (typeof value == "string") {
        value = value.trim().toLowerCase();
        let parts = value.split("-");
        if (parts.length === 5) {
          let universalId = parts[0], userId = Number.parseInt("0x" + parts[1]), random2 = BigInt("0x" + parts[2]), roleNumber = Number.parseInt(parts[3]);
          return this.verificationHash = new VOSHA1(parts[4]), new AuthTokenProps(
            universalId,
            userId,
            random2,
            roleNumber
          );
        }
      }
    } catch {
    }
    this.throwError(rawValue);
  }
  rawValueToErrorString(rawValue) {
    return typeof rawValue == "string" ? rawValue : JSON.stringify(rawValue);
  }
  getVerificationHashString() {
    if (!this.verificationHash)
      throw new DXTException(0 /* UNEXPECTED_ERROR */, "VOWeakCheckAuthToken.verificationHash == [undefined]");
    return this.verificationHash.toString();
  }
  getPayloadString() {
    let universalId = this.value.universalId.valueOf(), userId = this.value.userId.valueOf().toString(16), randomNumber = this.value.random.valueOf().toString(16), roleNumber = this.value.roleNumber.valueOf();
    return `${universalId}-${userId}-${randomNumber}-${roleNumber}`;
  }
  toString() {
    return this._payload ??= this.getPayloadString(), this._verificationHash ??= this.getVerificationHashString(), `${this._payload}-${this._verificationHash}`;
  }
};

// src/code.client/auth/auth_context/auth_store.utils.ts
import { useCallback, useEffect, useState } from "react";

// src/storage/index.ts
import md5 from "md5";
var _host = isNavigator() ? window.location.host : "", _storeKeyHash = md5(_host);
function getStorageKey(base) {
  return `${base}_${_storeKeyHash}`;
}
function getStorage() {
  return isNavigator() ? window.localStorage : null;
}

// src/config/auth.ts
var authConfig = {
  storageAuthTokenKey: getStorageKey("auth_token"),
  storageUserInfoKey: getStorageKey("user_info")
};

// src/code.client/auth/auth_context/auth_store.utils.ts
var storage = getStorage(), useTokenExistenceCheck = () => {
  let [tokenExists, setTokenExists] = useState(getStoredToken() != null), authTokenKey = authConfig.storageAuthTokenKey, handleTokenExistence = useCallback(
    (event) => {
      event.key === authTokenKey && setTokenExists(getStoredToken() != null);
    },
    [authTokenKey, getStoredToken()]
  );
  return useEffect(() => {
    if (storage)
      return window.addEventListener("storage", handleTokenExistence), () => {
        window.removeEventListener("storage", handleTokenExistence);
      };
  }, []), tokenExists;
};
function getStoredToken() {
  return storage ? storage.getItem(authConfig.storageAuthTokenKey) : null;
}
function getStoredUserInfo() {
  return storage ? parseJSON(storage.getItem(authConfig.storageUserInfoKey) ?? "") : null;
}
function setStoredToken(token) {
  storage && token !== getStoredToken() && (storage.setItem(authConfig.storageAuthTokenKey, token), window.dispatchEvent(new Event("storage")));
}
function setStoredUserInfo(userInfo) {
  storage && storage.setItem(authConfig.storageUserInfoKey, JSON.stringify(userInfo));
}
function deleteAuthStoredData() {
  storage && (storage.getItem(authConfig.storageAuthTokenKey) != null || storage.getItem(authConfig.storageUserInfoKey) != null) && (storage.removeItem(authConfig.storageAuthTokenKey), storage.removeItem(authConfig.storageUserInfoKey), window.dispatchEvent(new Event("storage")));
}

// src/domain/user/types/index.ts
var UserRole = /* @__PURE__ */ ((UserRole2) => (UserRole2[UserRole2.customer = 0] = "customer", UserRole2[UserRole2.vendor = 1] = "vendor", UserRole2[UserRole2.admin = 2] = "admin", UserRole2))(UserRole || {});

// src/code.client/auth/auth_context/states/index.ts
var AuthState = class {
  mapOrElse(options) {
    let { changingToken, loading, loggedIn, disconnected, orElse } = options;
    return this instanceof AuthStateLoading && loading ? loading(this) : this instanceof AuthStateChangingToken && changingToken ? changingToken(this) : this instanceof AuthStateLoggedIn && loggedIn ? loggedIn(this) : this instanceof AuthStateDisconnected && disconnected ? disconnected(this) : orElse(this);
  }
  mapReadyOrNot(options) {
    let { ready, notReady } = options;
    return this instanceof AuthStateLoggedIn || this instanceof AuthStateDisconnected ? ready(this) : notReady(this);
  }
  map(options) {
    let { changingToken, loading, loggedIn, disconnected } = options;
    return this.mapOrElse({
      loading,
      changingToken,
      loggedIn,
      disconnected,
      orElse: (_14) => {
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
    throw new DXTException(1e5 /* UNAUTHORIZED */);
  }
  userOrNull() {
    return this instanceof AuthStateLoggedIn ? this.userInfo : null;
  }
  isAdmin() {
    return this.userOrNull()?.role === 2 /* admin */;
  }
  isVendor() {
    return this.userOrNull()?.role === 1 /* vendor */;
  }
  isCustomer() {
    return this.userOrNull()?.role === 0 /* customer */;
  }
  getUserId() {
    return this instanceof AuthStateLoggedIn ? this.userInfo.id : null;
  }
  authTokenOrNull() {
    if (this instanceof AuthStateLoggedIn)
      try {
        return new VOWeakCheckAuthToken(this.authToken);
      } catch {
      }
    return null;
  }
  authTokenString() {
    return this.authTokenOrNull()?.toString();
  }
  errorOrNull() {
    return this instanceof AuthStateDisconnected ? this.error ?? null : null;
  }
  nonSilentErrorOrNull() {
    let isDisconnected = this instanceof AuthStateDisconnected, silent = isDisconnected && typeof this.error?.is_silent == "boolean" && this.error?.is_silent;
    return isDisconnected && !silent ? this.error ?? null : null;
  }
}, AuthStateDisconnected = class extends AuthState {
  constructor(error, isRedirecting = !1) {
    super();
    this.error = error;
    this.isRedirecting = isRedirecting;
    deleteAuthStoredData();
  }
}, AuthStateChangingToken = class extends AuthState {
  constructor(newToken) {
    super();
    this.newToken = newToken;
  }
}, AuthStateLoading = class extends AuthState {
}, AuthStateLoggedIn = class extends AuthState {
  constructor(authToken, userInfo) {
    super();
    this.authToken = authToken;
    this.userInfo = userInfo;
    setStoredToken(authToken), setStoredUserInfo(userInfo);
  }
};

// src/code.client/auth/auth_context/actions/base.ts
var AuthAction = class {
};

// src/code.client/app_resources/utils.ts
function isBasicAppResources(app) {
  return app?.navigate != null && app.location != null && typeof app.retryCallback == "function";
}

// src/config/dxtango_api.ts
var DEFAULT_HOSTNAME = "localhost", DEFAULT_PORT = "3000", DEFAULT_BASE_URL = `http://${DEFAULT_HOSTNAME}:${DEFAULT_PORT}`, baseUrl = (isNode() ? `http://${process.env.HOST ?? DEFAULT_HOSTNAME}:${process.env.PORT ?? DEFAULT_PORT}` : window?.location?.origin) ?? DEFAULT_BASE_URL, dxtApiConfig = {
  baseUrl
};

// src/api-client/shared/DXTApiRequestState.ts
var DXTApiRequestState = class {
  constructor(originalRequest) {
    this.originalRequest = originalRequest;
  }
  map(options) {
    let { success, error } = options;
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
    return this instanceof DXTApiRequestStateError ? this.info : null;
  }
  flat() {
    return this.map({
      error: (errorState) => errorState.info,
      success: (successState) => successState.data
    });
  }
}, DXTApiRequestStateError = class extends DXTApiRequestState {
  constructor(info, originalRequest) {
    super(originalRequest);
    this.info = info;
  }
}, DXTApiRequestStateSuccess = class extends DXTApiRequestState {
  constructor(data, originalRequest) {
    super(originalRequest);
    this.data = data;
  }
};

// src/api-client/shared/dxtApiRequest.ts
function createDXTApiParams(app, options) {
  let {
    headers: originalHeaders,
    transformResponse: originalTransformers,
    pathParams,
    url: originalUrl,
    ...remainingOptions
  } = options ?? {}, url = originalUrl;
  typeof url == "string" && pathParams != null && Object.entries(pathParams).forEach(([key, value]) => {
    url = url?.replaceAll(`:${key}`, encodeURIComponent(value));
  });
  let newTransformers = [
    (data, headers) => {
      if (typeof data < "u")
        return parseJSON(data);
    }
  ], token = app?.authToken;
  return Array.isArray(originalTransformers) ? newTransformers.push(...originalTransformers) : typeof originalTransformers == "function" && newTransformers.push(originalTransformers), {
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
  let dxtParams = createDXTApiParams(app, params), retry = !0;
  for (; retry; )
    try {
      let response = await axiosRequestPlus(dxtParams);
      if (isErrorInfo(response?.data)) {
        let dxtApiError = response?.data;
        throw new DXTException(
          new DXTError(dxtApiError.error_code, {
            extra: dxtApiError.extra,
            isSilent: dxtApiError.is_silent
          })
        );
      }
      if (response?.data === void 0)
        throw new DXTApiMalformedResponse(
          response?.status ?? HTTP_STATUS_UNAVAILABLE
        );
      let data = response.data;
      return new DXTApiRequestStateSuccess(data, dxtParams);
    } catch (error) {
      let dxtApiError = exceptionToDXTErrorInfo(error), errorState = new DXTApiRequestStateError(
        dxtApiError,
        dxtParams
      );
      if (!app || !isBasicAppResources(app) || (params?.silent ?? !1) || (retry = typeof app.retryCallback == "function" && await app.retryCallback({ message: dxtApiError.error_description }), !retry))
        return errorState;
    }
  let impossibleError = exceptionToDXTErrorInfo(new DXTException(899e3 /* INTERNAL_SERVER_ERROR */, "Impossible state"));
  return new DXTApiRequestStateError(
    impossibleError,
    dxtParams
  );
}

// src/api-client/shared/consts.ts
var API_BASE_PATH = "/api";

// src/api-client/shared/utils.ts
import { join } from "path";
function apiEndpoint(path6, method) {
  return {
    url: join(API_BASE_PATH, path6),
    method
  };
}

// src/api-client/auth/paths.ts
var API_AUTH_LOGIN = apiEndpoint("/auth/login", "POST"), API_AUTH_LOGOUT = apiEndpoint("/auth/logout", "POST"), API_AUTH_CONNECT = apiEndpoint("/auth/connect", "POST"), API_AUTH_CHANGE_PASSWORD = apiEndpoint("/auth/password", "PATCH");

// src/api-client/auth/requests.ts
var authConnectRequest = async (token, app, silent) => {
  let originalUserInfo = token === app.authState?.authToken ? app.authState?.userInfo : null, user_info_updated_at = originalUserInfo ? originalUserInfo.timestamp_modificacion : 0;
  return (await dxtApiRequest(
    {
      ...API_AUTH_CONNECT,
      headers: { authorization: token },
      params: {
        user_info_updated_at
      },
      silent
    },
    app
  )).map({
    error: (errorState) => new DXTApiRequestStateError(
      errorState.info,
      errorState.originalRequest
    ),
    success: (success) => success.data == null && originalUserInfo ? new DXTApiRequestStateSuccess(
      {
        auth_token: token,
        user: originalUserInfo
      },
      success.originalRequest
    ) : new DXTApiRequestStateSuccess(
      success.data,
      success.originalRequest
    )
  });
}, authLoginRequest = async (input, app) => await dxtApiRequest(
  {
    ...API_AUTH_LOGIN,
    data: input,
    silent: !0
  },
  app
), authLogoutRequest = async (app) => await dxtApiRequest(
  {
    ...API_AUTH_LOGOUT
  },
  app
), authChangePasswordRequest = async (input, app) => await dxtApiRequest(
  {
    ...API_AUTH_CHANGE_PASSWORD,
    data: input,
    silent: !0
  },
  app
);

// src/code.client/auth/auth_context/actions/login.ts
var AuthActionLogin = class extends AuthAction {
  constructor(params, errorCallback) {
    super();
    this.params = params;
    this.errorCallback = errorCallback;
  }
  async run(authState, setAuthState, app, onRetryCallback) {
    setAuthState(new AuthStateLoading()), (await authLoginRequest(this.params, app)).map({
      success: async (successState) => {
        let { user, auth_token } = successState.data;
        setAuthState(new AuthStateLoggedIn(auth_token, user));
      },
      error: async (errorState) => {
        let apiErrorInfo = errorState.info;
        setAuthState(new AuthStateDisconnected(apiErrorInfo)), this.errorCallback && this.errorCallback(apiErrorInfo);
      }
    });
  }
};

// src/code.client/utils/index.ts
import { join as join2 } from "path";

// src/texts/common.ts
var RETRY = "Reintentar", CANCEL = "Cancelar", BACK = "Regresar", CLOSE = "Cerrar";
var SAVE_DRAFT = "Guardar borrador", UPDATE_DRAFT = "Actualizar borrador", CONVERT_TO_DRAFT = "Convertir en Borrador", CONVERT_TO_ORDER = "Convertir en Pedido", UPDATE = "Actualizar", DELETE = "Eliminar", PRINT = "Imprimir";
var CREATE_ORDER = "Crear Pedido", SEND_ORDER = "Enviar Pedido", UPDATE_ORDER = "Actualizar Pedido", CREATE_DRAFT = "Crear Borrador";
var PREVIOUS = "Anterior", NEXT = "Siguiente";
var FILTER_PLACEHOLDER = "Filtrar...", FILTER_NO_RESULTS = "La b\xFAsqueda no produjo resultados", SUMMARY = "Ver resumen", NO_NAME = "Sin nombre", NO_DATE = "Sin fecha", NONE_F = "Ninguna", NONE_M = "Ninguno", NONEXISTENT_PRODUCT = "Art\xEDculo inexistente";
var PASSWORD_TOO_SHORT = "Contrase\xF1a muy corta", PASSWORD_TOO_LONG = "Contrase\xF1a muy larga", PASSWORD_INVALID_CHARS = "Evite caracteres no v\xE1lidos", PASSWORD_CHANGED = "Contrase\xF1a modificada", AN_ERROR_OCCURRED = "Ha ocurrido un error";

// src/code.client/utils/index.ts
var dateToLocale = (value) => value == null ? NO_DATE : (value instanceof Date ? value : new Date(value)).toLocaleDateString("es-AR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});
function appPath(path6) {
  return join2(URL_ROOT_PATH, path6);
}
function resolveUserStatusColor(user) {
  let { habilitado_en_dxt, habilitado_en_tango, usuario_tango_existe } = user;
  return habilitado_en_dxt ? habilitado_en_dxt && !usuario_tango_existe ? "red.400" : habilitado_en_dxt && usuario_tango_existe && habilitado_en_tango === !1 ? "yellow.400" : "green.400" : "grey.500";
}
function pathParamsToUrl(url, pathParams) {
  return typeof url == "string" && pathParams != null && Object.entries(pathParams).forEach(([key, value]) => {
    url = url?.replaceAll(`:${key}`, encodeURIComponent(value));
  }), url;
}
function getSelectedValue(arrayOfObjects, selected, key) {
  return arrayOfObjects.length === 1 ? arrayOfObjects[0][key ?? "id"] : arrayOfObjects.find((arr) => arr[selected ?? "selected"] === !0)?.[key ?? "id"];
}

// src/config/url_paths.ts
import path2 from "path";
var URL_ROOT_PATH = "/", URL_AUTH_BASE_PATH = path2.join(URL_ROOT_PATH, "auth"), URL_AUTH_LOGIN_PATH = appPath("/"), URL_AUTH_CHANGE_PASSWORD_PATH = appPath("/change_password"), URL_PEDIDOS_PATH = appPath("/orders"), URL_BORRADORES_PATH = appPath("/drafts"), URL_MAIN_PATH = URL_PEDIDOS_PATH, URL_PEDIDOS_ADD_PATH = appPath("/orders/:client/add"), URL_PEDIDOS_CUSTOMER_ADD_PATH = appPath("/orders/add"), URL_PEDIDOS_EDIT_PATH = appPath("/orders/:id/edit"), URL_BORRADORES_ADD_PATH = appPath("/drafts/:client/add"), URL_BORRADORES_CUSTOMER_ADD_PATH = appPath("/drafts/add"), URL_BORRADORES_EDIT_PATH = appPath("/drafts/:id/edit"), URL_SETTINGS_PATH = appPath("/settings"), URL_SETTINGS_TANGO_PATH = appPath("/settings/tango"), URL_SETTINGS_COMPANY_PATH = appPath("/settings/company"), URL_SETTINGS_MISC_PATH = appPath("/settings/misc"), URL_SETTINGS_CUSTOMERS_PATH = appPath("/settings/users/customers"), URL_SETTINGS_CUSTOMERS_ADD_PATH = appPath("/settings/users/customers/add"), URL_SETTINGS_CUSTOMERS_EDIT_PATH = appPath("/settings/users/customers/:id/edit"), URL_SETTINGS_VENDORS_PATH = appPath("/settings/users/vendors"), URL_SETTINGS_VENDORS_ADD_PATH = appPath("/settings/users/vendors/add"), URL_SETTINGS_VENDORS_EDIT_PATH = appPath("/settings/users/vendors/:id/edit"), URL_SETTINGS_ARTICULO_PRINT_LIST = appPath("/settings/product_list/print"), URL_SETTINGS_ARTICULO_EDIT_LIST = appPath("/settings/product_list/edit");

// src/code.client/auth/auth_context/actions/logout.ts
var AuthActionLogout = class extends AuthAction {
  // doNotCallAPI: used when user token has already expired or is invalid
  // one less call to the API since user is in fact unauthorized
  constructor(avoidCallingAPI) {
    super();
    this.avoidCallingAPI = avoidCallingAPI ?? !1;
  }
  async run(authState, setAuthState, app, onRetryCallback) {
    authState instanceof AuthStateLoggedIn && !this.avoidCallingAPI && await authLogoutRequest({
      ...app,
      authState
    }), setAuthState(new AuthStateDisconnected(void 0, !0)), app.navigate(URL_AUTH_LOGIN_PATH);
  }
};

// src/code.client/auth/auth_context/actions/change_token.ts
var AuthActionChangeToken = class extends AuthAction {
  constructor(newToken, tokenChangedFromApp, errorCallback) {
    super();
    this.newToken = newToken;
    this.tokenChangedFromApp = tokenChangedFromApp;
    this.errorCallback = errorCallback;
  }
  async run(authState, setAuthState, app, onRetryCallback) {
    setAuthState(new AuthStateLoading());
    let { newToken } = this;
    (await authConnectRequest(newToken, app, !0)).map({
      success: (stateSuccess) => {
        let userInfo = stateSuccess.data.user;
        setAuthState(
          new AuthStateLoggedIn(newToken, userInfo)
        );
      },
      error: (errorState) => {
        let apiErrorInfo = errorState.info;
        setAuthState(new AuthStateDisconnected(apiErrorInfo)), this.errorCallback && this.errorCallback(apiErrorInfo);
      }
    });
  }
};

// src/code.client/auth/utils.ts
function isTokenError(errorCode) {
  return errorCode === 401 /* UNAUTHORIZED */ || errorCode === 403 /* FORBIDDEN */;
}
var checkTokenErrorAndRedirect = async (app, status) => isTokenError(status) ? (app.authState && app.authState instanceof AuthStateLoggedIn && await app.authDispatch?.call(void 0, new AuthActionLogout(!0)), redirectLoginWithReturnUrl(app.navigate), !0) : !1;
function redirectLoginWithReturnUrl(navigate) {
  let returnUrl;
  if (window?.location != null) {
    let { pathname, search, hash } = window?.location;
    returnUrl = `${pathname}${search}${hash}`;
  } else
    returnUrl = null;
  let newSearchParams = returnUrl != null ? `?${new URLSearchParams([["returnUrl", returnUrl]]).toString()}` : "";
  navigate(`${URL_ROOT_PATH}${newSearchParams}`);
}
function loggedInRedirect(app) {
  if (app.authState instanceof AuthStateLoggedIn) {
    let returnUrl = new URLSearchParams(app.location.search).get("returnUrl"), redirectURL = returnUrl != null && returnUrl !== "/" ? returnUrl : URL_MAIN_PATH;
    app.navigate(redirectURL, {
      replace: !0
    });
  }
}

// src/code.client/auth/auth_context/actions/refresh_all.ts
var AuthActionRefreshAll = class extends AuthAction {
  constructor(currentUserInfo, errorCallback) {
    super();
    this.currentUserInfo = currentUserInfo;
    this.errorCallback = errorCallback;
  }
  async run(authState, setAuthState, app, onRetryCallback) {
    if (!(authState instanceof AuthStateLoggedIn))
      throw new DXTException(899e3 /* INTERNAL_SERVER_ERROR */, "Must be logged in");
    let storedToken = getStoredToken();
    if (storedToken == null || authState.authToken !== storedToken) {
      setAuthState(new AuthStateDisconnected());
      return;
    }
    (await authConnectRequest(authState.authToken, app, !0)).map({
      error: (errorState) => {
        let apiErrorInfo = errorState.info;
        isTokenError(apiErrorInfo.status) && setAuthState(new AuthStateDisconnected());
      },
      success: (success) => {
        let currentUser = authState.userInfo, currentAuthToken = authState.authToken, newUser = success.data.user, newAuthToken = success.data.auth_token;
        (currentAuthToken !== newAuthToken || currentUser.timestamp_modificacion !== newUser.timestamp_modificacion) && setAuthState(
          new AuthStateLoggedIn(newAuthToken, newUser)
        );
      }
    });
  }
};

// src/code.client/auth/auth_context/auth_context.tsx
import {
  createContext,
  useContext,
  useEffect as useEffect2,
  useMemo,
  useRef as useRef2,
  useState as useState2
} from "react";
import _ from "lodash";

// src/event_bus/index.ts
import Nanobus from "nanobus";
var BusEvent = class {
  constructor(name, payload) {
    this.name = name;
    this.payload = payload;
  }
}, eventBus = new Nanobus();
function emitBusEvent(event) {
  eventBus.emit(event.name, event);
}

// src/code.client/app_resources/basic_app_resources.ts
import {
  useLocation,
  useNavigate
} from "@remix-run/react";

// src/app/dialogs/RetryDialog.tsx
import { useModal } from "react-hooks-async-modal";

// src/texts/dxt_error.ts
var VALIDATION_ERROR = "Error de validaci\xF3n de datos", ERRORS_FALLBACK = "Error desconocido. Intente nuevamente en unos momentos";

// src/app/dialogs/CustomDialog.tsx
import { useRef } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function CustomDialog(props) {
  let {
    isOpen,
    dialogTitle,
    dialogContents,
    dialogSize,
    hideButtons,
    handleCancel,
    handleCancelWording,
    handleAccept,
    handleAcceptWording
  } = props, cancelRef = useRef(null);
  return /* @__PURE__ */ jsxs2(
    Modal,
    {
      onClose: handleCancel,
      isOpen,
      closeOnOverlayClick: !1,
      size: { base: "sm", sm: "md", md: "lg" },
      isCentered: !0,
      children: [
        /* @__PURE__ */ jsx2(
          ModalOverlay,
          {
            bg: "blackAlpha.300",
            backdropFilter: "auto",
            backdropInvert: "80%",
            backdropBlur: "2px"
          }
        ),
        /* @__PURE__ */ jsxs2(ModalContent, { children: [
          /* @__PURE__ */ jsx2(ModalHeader, { children: dialogTitle ?? "" }),
          /* @__PURE__ */ jsx2(ModalCloseButton, {}),
          /* @__PURE__ */ jsx2(ModalBody, { children: dialogContents }),
          /* @__PURE__ */ jsx2(ModalFooter, { children: hideButtons != !0 && /* @__PURE__ */ jsxs2(Fragment, { children: [
            /* @__PURE__ */ jsx2(Button, { ref: cancelRef, onClick: handleCancel, variant: "solid", children: handleCancelWording ?? CANCEL }),
            handleAccept && /* @__PURE__ */ jsx2(Button, { variant: "solid", color: "primary", onClick: handleAccept, children: handleAcceptWording ?? RETRY })
          ] }) })
        ] })
      ]
    }
  );
}

// src/app/dialogs/RetryDialog.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var RetryDialog = ({
  message,
  retryable,
  onResolve
}) => (retryable = retryable ?? !0, /* @__PURE__ */ jsx3(
  CustomDialog,
  {
    isOpen: !0,
    handleCancel: () => {
      onResolve(!1);
    },
    handleAccept: retryable ? () => {
      onResolve(!0);
    } : void 0,
    dialogContents: message ?? ERRORS_FALLBACK
  }
));
function useRetryDialog() {
  return useModal(RetryDialog);
}

// src/code.client/app_resources/basic_app_resources.ts
function useBasicAppResources(authStateOverride, authDispatchOverride) {
  let location = useLocation(), navigate = useNavigate(), auth = useAuth(), authState = authStateOverride ?? auth.state, authDispatch = authDispatchOverride ?? auth.dispatch, retryCallback = useRetryDialog();
  return {
    authToken: authState.authTokenString(),
    location,
    navigate,
    ...authState instanceof AuthStateLoggedIn ? { authState, authDispatch } : {},
    retryCallback
  };
}

// src/code.client/auth/auth_context/auth_context.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var AUTH_NEW_TOKEN_EVENT = "auth_new_token", defaultValues = {
  state: _resolveState(),
  dispatch: async (action40) => {
    await Promise.resolve();
  },
  retry: async () => {
    await Promise.resolve();
  }
}, AuthContext = createContext(defaultValues);
function _resolveState() {
  if (typeof window > "u")
    return new AuthStateDisconnected();
  let queryparams = new URLSearchParams(window.location.search), storedToken = getStoredToken(), newToken = queryparams.get("at") ?? null;
  if (newToken != null && newToken !== storedToken)
    return new AuthStateChangingToken(newToken);
  if (storedToken == null)
    return new AuthStateDisconnected();
  if (queryparams.get("force_refresh") === "1")
    return new AuthStateChangingToken(storedToken);
  let userInfo = getStoredUserInfo();
  return userInfo ? new AuthStateLoggedIn(storedToken, userInfo) : new AuthStateChangingToken(storedToken);
}
var AuthProvider = ({ children, onRetry }) => {
  let [authState, setAuthState] = useState2(_resolveState()), lastAction = useRef2(null), app = useBasicAppResources(authState), appRef = useRef2(app), forceLogoutAlreadyVerified = useRef2(!1), tokenExistence = useTokenExistenceCheck(), dispatch = async (action40) => {
    lastAction.current = action40, await action40.run(authState, setAuthState, appRef.current, onRetry);
  };
  eventBus.removeAllListeners(AUTH_NEW_TOKEN_EVENT), eventBus.on(AUTH_NEW_TOKEN_EVENT, (newToken) => {
    (async () => {
      await dispatch(new AuthActionChangeToken(newToken, !0));
    })().catch((e) => {
    });
  }), appRef.current = useBasicAppResources(authState, dispatch);
  let retry = async () => {
    lastAction.current && await lastAction.current.run(authState, setAuthState, app, onRetry);
  };
  useEffect2(() => {
    setTimeout(() => {
      if (authState instanceof AuthStateChangingToken)
        return;
      let newState = _resolveState();
      _.isEqual(newState, authState) || setAuthState(newState);
    }, 250);
  }, [tokenExistence]), useEffect2(() => {
    authState instanceof AuthStateChangingToken && (async () => {
      await dispatch(new AuthActionChangeToken(authState.newToken, !1));
    })().catch((e) => {
    });
  }, []), useEffect2(() => {
    app.location.pathname === URL_AUTH_LOGIN_PATH && loggedInRedirect(app);
  }, [authState, app.location]);
  let values = useMemo(
    () => ({
      state: authState,
      dispatch,
      retry
    }),
    [authState]
  );
  return /* @__PURE__ */ jsx4(AuthContext.Provider, { value: values, children });
};
var useAuth = () => useContext(AuthContext);

// src/app/root.tsx
import { ModalProvider } from "react-hooks-async-modal";

// src/app/root/RootDocument.tsx
import { useContext as useContext2, useEffect as useEffect3 } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { ChakraProvider } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";

// src/app/chakra/styleContexts.tsx
import { createContext as createContext2 } from "react";
var ServerStyleContext = createContext2(null), ClientStyleContext = createContext2(null);

// src/app/theme/index.ts
import {
  extendTheme
} from "@chakra-ui/react";

// src/app/theme/components/inputTheme.ts
import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { getColorVar, mode } from "@chakra-ui/theme-tools";
var { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys), inputBaseStyle = definePartsStyle((props) => {
  let { theme: theme2 } = props, ec = mode("white", "gray.800")(props);
  return {
    field: {
      backgroundColor: `${getColorVar(theme2, ec)} !important`
    }
  };
}), variantOutlineStyle = definePartsStyle((props) => {
  let { theme: theme2 } = props, ec = mode("red.500", "red.300")(props);
  return {
    field: {
      _invalid: {
        borderColor: `${getColorVar(theme2, ec)} !important`,
        boxShadow: `0 0 0 1px ${getColorVar(theme2, ec)} !important`
      }
    }
  };
}), variants = {
  outline: variantOutlineStyle
}, inputTheme = defineMultiStyleConfig({
  baseStyle: inputBaseStyle,
  variants
});

// src/app/theme/components/tableTheme.ts
import { tableAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers2 } from "@chakra-ui/react";
var { definePartsStyle: definePartsStyle2, defineMultiStyleConfig: defineMultiStyleConfig2 } = createMultiStyleConfigHelpers2(tableAnatomy.keys), variantGray = definePartsStyle2((props) => {
  let { colorScheme: c, colorMode } = props;
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
}), variantStripedOverCard = definePartsStyle2((props) => {
  let { colorScheme: c, colorMode } = props;
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
}), variantStripedOverCardWithHover = definePartsStyle2((props) => {
  let { colorScheme: c, colorMode } = props;
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
}), tableTheme = defineMultiStyleConfig2({
  variants: {
    grayOverCard: variantGray,
    stripedOverCard: variantStripedOverCard,
    stripedHoverOverCard: variantStripedOverCardWithHover
  }
});

// src/app/theme/colors.ts
var colors = {
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

// src/app/theme/components/alertTheme.ts
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers3 } from "@chakra-ui/react";
import { alertAnatomy } from "@chakra-ui/anatomy";
var { definePartsStyle: definePartsStyle3, defineMultiStyleConfig: defineMultiStyleConfig3 } = createMultiStyleConfigHelpers3(alertAnatomy.keys), baseStyle = definePartsStyle3((props) => {
  let { status } = props;
  return {
    ...status === "success" && {
      container: {
        background: "green.500",
        color: "white"
      },
      icon: {
        color: "white"
      }
    },
    ...status === "warning" && {
      container: {
        background: "amber.500",
        color: "black"
      },
      icon: {
        color: "black"
      }
    },
    ...status === "error" && {
      container: {
        background: "red.700",
        color: "white"
      },
      icon: {
        color: "white"
      }
    },
    ...status === "info" && {
      container: {
        background: "blue.700",
        color: "white"
      },
      icon: {
        color: "white"
      }
    }
  };
}), alertTheme = defineMultiStyleConfig3({ baseStyle });

// src/app/theme/components/cardTheme.ts
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers4 } from "@chakra-ui/react";
import { getColorVar as getColorVar2, mode as mode2 } from "@chakra-ui/theme-tools";
var { definePartsStyle: definePartsStyle4, defineMultiStyleConfig: defineMultiStyleConfig4 } = createMultiStyleConfigHelpers4(cardAnatomy.keys), baseStyle2 = definePartsStyle4((props) => {
  let { theme: theme2 } = props, ec = mode2("brown.50", "gray.700")(props);
  return {
    container: {
      backgroundColor: `${getColorVar2(theme2, ec)}`
    }
  };
}), cardTheme = defineMultiStyleConfig4({ baseStyle: baseStyle2 });

// src/app/theme/components/checkboxTheme.ts
import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers as createMultiStyleConfigHelpers5, defineStyle } from "@chakra-ui/react";
var { definePartsStyle: definePartsStyle5, defineMultiStyleConfig: defineMultiStyleConfig5 } = createMultiStyleConfigHelpers5(checkboxAnatomy.keys), sizes = {
  xl: definePartsStyle5({
    control: defineStyle({
      boxSize: 8
    }),
    label: defineStyle({
      fontSize: "2xl",
      marginLeft: 6
    })
  })
}, checkboxTheme = defineMultiStyleConfig5({ sizes });

// src/app/theme/components/textarea.ts
import { defineStyle as defineStyle2, defineStyleConfig } from "@chakra-ui/react";
import { getColorVar as getColorVar3, mode as mode3 } from "@chakra-ui/theme-tools";
var baseStyle3 = defineStyle2((props) => {
  let { theme: theme2 } = props, ec = mode3("white", "gray.800")(props);
  return {
    backgroundColor: `${getColorVar3(theme2, ec)} !important`
  };
}), textareaTheme = defineStyleConfig({
  baseStyle: baseStyle3
});

// src/app/theme/index.ts
var config = extendTheme({
  initialColorMode: "light",
  colors,
  useSystemColorMode: !1,
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: (props.colorMode === "dark", "gray.900")
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
}), theme = extendTheme(config);

// src/app/root/useAppColorManager.tsx
import { cookieStorageManagerSSR, localStorageManager, useConst } from "@chakra-ui/react";
import { useMemo as useMemo2 } from "react";
var CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode", useAppColorManager = (cookies) => {
  let defaultColorMode = theme.config.initialColorMode, colorMode = useMemo2(() => {
    let color = getColorMode(cookies);
    return color == null && defaultColorMode != null && (cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${defaultColorMode}`, color = defaultColorMode), color;
  }, [cookies]), cookieManager = useConst(cookieStorageManagerSSR(cookies));
  return {
    colorMode,
    colorModeManager: typeof cookies == "string" ? cookieManager : localStorageManager
  };
};
function getColorMode(cookies) {
  let match = cookies?.match(
    new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`)
  );
  return match?.[2];
}

// src/app/root/RootDocument.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var RootDocument = withEmotionCache(
  ({ children, cookies }, emotionCache) => {
    let serverStyleData = useContext2(ServerStyleContext), clientStyleData = useContext2(ClientStyleContext), { colorMode, colorModeManager } = useAppColorManager(cookies);
    return useEffect3(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData?.reset();
    }, []), /* @__PURE__ */ jsxs3(
      "html",
      {
        lang: "es",
        ...colorMode != null && {
          "data-theme": colorMode,
          style: { colorScheme: colorMode }
        },
        children: [
          /* @__PURE__ */ jsxs3("head", { children: [
            /* @__PURE__ */ jsx5(Meta, {}),
            /* @__PURE__ */ jsx5(Links, {}),
            serverStyleData?.map(({ key, ids, css }) => /* @__PURE__ */ jsx5(
              "style",
              {
                "data-emotion": `${key} ${ids.join(" ")}`,
                dangerouslySetInnerHTML: { __html: css }
              },
              key
            ))
          ] }),
          /* @__PURE__ */ jsxs3(
            "body",
            {
              ...colorMode != null && {
                className: `chakra-ui-${colorMode}`
              },
              children: [
                /* @__PURE__ */ jsx5(
                  ChakraProvider,
                  {
                    theme,
                    colorModeManager,
                    toastOptions: {
                      defaultOptions: {
                        position: "bottom",
                        duration: 5e3,
                        isClosable: !0
                      }
                    },
                    children
                  }
                ),
                /* @__PURE__ */ jsx5(ScrollRestoration, {}),
                /* @__PURE__ */ jsx5(Scripts, {}),
                isDevelopment() && /* @__PURE__ */ jsx5(LiveReload, {})
              ]
            }
          )
        ]
      }
    );
  }
);

// src/app/root.tsx
import { Heading, VStack, Text } from "@chakra-ui/react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var loader = async ({ request }) => request.headers.get("cookie") ?? "", links = () => [
  ...cssBundleHref != null ? [{ rel: "stylesheet", href: cssBundleHref }] : []
], meta = () => [
  { charset: "utf-8" },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, interactive-widget=resizes-content"
  },
  { title: getExecutionModeString() }
];
function App() {
  let cookies = useLoaderData();
  return typeof document < "u" && (cookies = document.cookie), /* @__PURE__ */ jsx6(RootDocument, { cookies, children: /* @__PURE__ */ jsx6(ModalProvider, { children: /* @__PURE__ */ jsx6(AuthProvider, { children: /* @__PURE__ */ jsx6(Outlet, {}) }) }) });
}
function ErrorBoundary() {
  let cookies = "";
  typeof document < "u" && (cookies = document.cookie);
  let error = useRouteError(), status = error?.status ?? void 0, message = error?.message ?? "Unknown error";
  return /* @__PURE__ */ jsx6(RootDocument, { cookies, children: /* @__PURE__ */ jsxs4(VStack, { h: "100vh", justify: "center", p: 20, children: [
    /* @__PURE__ */ jsx6(Heading, { children: "There was an error" }),
    /* @__PURE__ */ jsx6(Text, { children: message }),
    /* @__PURE__ */ jsx6("hr", {}),
    /* @__PURE__ */ jsx6(Text, { children: "Hey, developer, you should replace this with what you want your users to see." })
  ] }) });
}

// src/app/routes/_admin.settings.users.customers.$id.edit/route.tsx
var route_exports = {};
__export(route_exports, {
  default: () => Edit
});
import { useNavigate as useNavigate4, useParams } from "@remix-run/react";

// src/code.client/hooks/useDXTApiFetch.ts
import { useEffect as useEffect5 } from "react";

// src/@core/react-hooks/useAxiosFetch.ts
import { useEffect as useEffect4, useState as useState3 } from "react";
var FetchState = class {
  constructor(originalRequest) {
    this.originalRequest = originalRequest;
  }
  mapOrElse(options) {
    let { loading, success, error, orElse } = options;
    return this instanceof FetchStateLoading && loading ? loading(this) : this instanceof FetchStateSuccess && success ? success(this) : this instanceof FetchStateError && error ? error(this) : orElse(this);
  }
  map(options) {
    let { loading, success, error } = options;
    return this.mapOrElse({
      loading,
      success,
      error,
      orElse: (_14) => {
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
    return this instanceof FetchStateError ? this.error : null;
  }
  callIfLoading(func) {
    return this instanceof FetchStateLoading ? func(this) ?? !1 : !1;
  }
  callIfSuccess(func) {
    return this instanceof FetchStateSuccess ? func(this) ?? !1 : !1;
  }
  callIfError(func) {
    return this instanceof FetchStateError ? func(this) ?? !1 : !1;
  }
}, FetchStateLoading = class extends FetchState {
  constructor(originalRequest) {
    super(originalRequest);
  }
}, FetchStateError = class extends FetchState {
  constructor(error, originalRequest) {
    super(originalRequest);
    this.error = error;
  }
}, FetchStateSuccess = class extends FetchState {
  constructor(data, originalRequest) {
    super(originalRequest);
    this.data = data;
  }
};
function useAxiosFetch(params, ...args) {
  let [fetchState, setFetchState] = useState3(
    new FetchStateLoading(params)
  ), retry = async () => {
    setFetchState(new FetchStateLoading(fetchState.originalRequest)), await makeRequest();
  }, reload = async () => {
    fetchState.isSuccess() || setFetchState(new FetchStateLoading(fetchState.originalRequest)), await makeRequest();
  }, makeRequest = async () => {
    let params2 = fetchState.originalRequest;
    try {
      let response = await axiosRequestPlus(params2), data = response?.data?.data ?? response?.data;
      setFetchState(new FetchStateSuccess(data, params2));
    } catch (err) {
      if (err instanceof AxiosRequestPlusError) {
        let axiosError = err, [errorParser] = args, parsedError = errorParser ? errorParser(axiosError) : axiosError, stateError = new FetchStateError(parsedError, params2);
        setFetchState(stateError);
      } else
        throw err;
    }
  };
  return useEffect4(() => {
    makeRequest();
  }, []), {
    state: fetchState,
    reload,
    retry
  };
}

// src/code.client/hooks/useDXTApiFetch.ts
function useDXTApiFetch(params) {
  let app = useBasicAppResources(), retryCallback = app.retryCallback, dxtApiParams = createDXTApiParams(app, params), { state, retry, reload } = useAxiosFetch(
    dxtApiParams,
    (axiosError) => exceptionToDXTErrorInfo(axiosError)
  );
  return useEffect5(() => {
    (async () => {
      if ((params?.silent ?? !1) || !(state instanceof FetchStateError))
        return;
      let stateError = state.error;
      await checkTokenErrorAndRedirect(app, stateError.status) || retryCallback && await retryCallback({
        message: stateError.error_description
      }) && retry();
    })();
  }, [state]), {
    state,
    retry,
    reload
  };
}

// src/api-client/dxt/user/paths.ts
var API_DXT_USER_AUXILIARES = apiEndpoint("/dxt/usuario/auxiliares", "GET"), _API_DXT_CUSTOMER = "/dxt/cliente", _API_DXT_CUSTOMER_ID = "/dxt/cliente/:id", API_DXT_CUSTOMER_GET_ALL = apiEndpoint(_API_DXT_CUSTOMER, "GET"), API_DXT_CUSTOMER_CREATE = apiEndpoint(_API_DXT_CUSTOMER, "POST"), API_DXT_CUSTOMER_GET_ONE = apiEndpoint(_API_DXT_CUSTOMER_ID, "GET"), API_DXT_CUSTOMER_UPDATE = apiEndpoint(_API_DXT_CUSTOMER_ID, "PATCH"), API_DXT_CUSTOMER_DELETE = apiEndpoint(_API_DXT_CUSTOMER_ID, "DELETE"), _API_DXT_VENDOR = "/dxt/vendedor", _API_DXT_VENDOR_ID = "/dxt/vendedor/:id", API_DXT_VENDOR_GET_ALL = apiEndpoint(_API_DXT_VENDOR, "GET"), API_DXT_VENDOR_CREATE = apiEndpoint(_API_DXT_VENDOR, "POST"), API_DXT_VENDOR_GET_ONE = apiEndpoint(_API_DXT_VENDOR_ID, "GET"), API_DXT_VENDOR_UPDATE = apiEndpoint(_API_DXT_VENDOR_ID, "PATCH"), API_DXT_VENDOR_DELETE = apiEndpoint(_API_DXT_VENDOR_ID, "DELETE"), API_DXT_VENDOR_CUSTOMERS = apiEndpoint("/dxt/vendedor/cliente", "GET");

// src/code.client/dxt/user/api_hooks/customer.api_hooks.ts
function useGetAllDXTCustomers() {
  return useDXTApiFetch({
    ...API_DXT_CUSTOMER_GET_ALL,
    silent: !0
  });
}
function useGetOneDXTCustomer(id) {
  return useDXTApiFetch({
    ...API_DXT_CUSTOMER_GET_ONE,
    pathParams: { id },
    silent: !0
  });
}

// src/code.client/dxt/user/api_hooks/vendor.api_hooks.ts
function useGetAllDXTVendors() {
  return useDXTApiFetch({
    ...API_DXT_VENDOR_GET_ALL,
    silent: !0
  });
}
function useGetOneDXTVendor(id) {
  return useDXTApiFetch({
    ...API_DXT_VENDOR_GET_ONE,
    pathParams: { id },
    silent: !0
  });
}
function useGetDXTVendorCustomers() {
  return useDXTApiFetch({
    ...API_DXT_VENDOR_CUSTOMERS,
    silent: !0
  });
}

// src/code.client/hooks/useTangoList.tsx
var buildSelectOptions = (props) => {
  let { data, fieldsMap, disabledIcon } = props, result = [];
  return data.length && data.forEach((data2) => {
    let label = Array.isArray(fieldsMap?.label) ? fieldsMap.label.map((value) => data2[value]).join(" - ") : data2[fieldsMap?.label ?? "name"];
    result.push({
      label,
      value: data2[fieldsMap?.value ?? "id"],
      ...fieldsMap?.selected != null && {
        selected: data2[fieldsMap.selected]
      },
      ...fieldsMap?.isEnabled != null && {
        isDisabled: !data2[fieldsMap.isEnabled]
      },
      ...fieldsMap?.isEnabled != null && disabledIcon != null && !data2[fieldsMap?.isEnabled] && {
        icon: disabledIcon
      }
    });
  }), result;
};
function useTangoList(props) {
  let { endpoint, params, fieldsMap, disabledIcon } = props, { state, retry } = useDXTApiFetch({
    ...endpoint,
    silent: !0,
    params
  }), result = state.mapOrElse({
    success: (state2) => {
      let data = state2.data;
      return buildSelectOptions({ data, fieldsMap, disabledIcon });
    },
    orElse: () => []
  });
  return { state, result };
}

// src/code.client/crud_configs/users/index.tsx
import { Icon } from "@chakra-ui/react";
import AccountCancelIcon from "mdi-react/AccountCancelIcon.js";

// src/api-client/dxt/user/requests.ts
var customerCreateRequest = async (input, app) => await dxtApiRequest(
  {
    ...API_DXT_CUSTOMER_CREATE,
    data: input,
    silent: !0
  },
  app
), customerUpdateRequest = async (id, input, app) => await dxtApiRequest(
  {
    ...API_DXT_CUSTOMER_UPDATE,
    pathParams: { id },
    data: input,
    silent: !0
  },
  app
), customerDeleteRequest = async (id, input, app) => await dxtApiRequest(
  {
    ...API_DXT_CUSTOMER_DELETE,
    pathParams: { id },
    data: input,
    silent: !0
  },
  app
), vendorCreateRequest = async (input, app) => await dxtApiRequest(
  {
    ...API_DXT_CUSTOMER_CREATE,
    data: input,
    silent: !0
  },
  app
), vendorDeleteRequest = async (id, input, app) => await dxtApiRequest(
  {
    ...API_DXT_VENDOR_DELETE,
    pathParams: { id },
    data: input,
    silent: !0
  },
  app
), vendorUpdateRequest = async (id, input, app) => await dxtApiRequest(
  {
    ...API_DXT_VENDOR_UPDATE,
    pathParams: { id },
    data: input,
    silent: !0
  },
  app
);

// src/api-client/tango/paths.ts
var API_TANGO_LISTA_DE_PRECIOS_GET_ALL = apiEndpoint("/tango/lista", "GET"), API_TANGO_PERFIL_GET_ALL = apiEndpoint("/tango/perfil", "GET"), API_TANGO_CLIENTE_GET_ALL = apiEndpoint("/tango/cliente", "GET"), API_TANGO_VENDEDOR_GET_ALL = apiEndpoint("/tango/vendedor", "GET");

// src/texts/app.ts
var WELCOME = "Bienvenido al sistema de pedidos de Sorbalok Pinturas.", OPTIONS = "Opciones", LOGOUT = "Cerrar sesi\xF3n", CHANGE_COLOR_MODE = "Cambiar modo de color", CONFIGURE = "Configurar", TANGO_CONNECTION = "Conexi\xF3n a Tango", TANGO_CONNECTION_UPDATED = "Conexi\xF3n a Tango actualizada";
var COMPANY = "Empresa", COMPANY_UPDATED = "Empresa actualizada";
var INVALID_LIST_TYPE = "Tipo de lista no v\xE1lida", BACK_TO_SETTINGS = "Volver a Configuraci\xF3n", BACK_TO_PEDIDOS = "Volver a Pedidos", USER_NOT_FOUND = "Usuario no encontrado";
var NO_PEDIDOS = "No se encontraron pedidos", NO_BORRADORES = "El usuario no posee borradores", NO_USERS = "No se encontraron usuarios", PEDIDOS = "Pedidos", BORRADORES = "Borradores", ADMINISTRACION = "Administraci\xF3n", CHANGE_PASSWORD = "Cambiar contrase\xF1a";
var SELECTED_S = " seleccionado", SELECTED_P = " seleccionados";
var USER_CREATED = "Usuario creado";
var USER_UPDATED = "Usuario actualizado";
var USER_DELETE = "Eliminar usuario", USER_DELETE_CONFIRM = "\xBFEst\xE1 seguro que desea eliminar este usuario? Esta acci\xF3n no se puede deshacer.", USER_DELETED = "Usuario eliminado";
var CLIENTS_ADMIN = "Gesti\xF3n de Clientes", CLIENTS_CREATE = "Crear Cliente", CLIENTS_UPDATE = "Modificar Cliente", CLIENTS_SELECT = "Seleccione un Cliente", CLIENTS_LABEL = "Cliente Tango", CLIENTS_NO_OPTIONS = "No hay clientes disponibles", SELLERS_ADMIN = "Gesti\xF3n de Vendedores", SELLERS_CREATE = "Crear Vendedor", SELLERS_UPDATE = "Modificar Vendedor", SELLERS_SELECT = "Seleccione un Vendedor", SELLERS_LABEL = "Vendedor Tango", SELLERS_NO_OPTIONS = "No hay vendedores disponibles", PRODUCT_EDIT_LIST = "Lista de art\xEDculos para edici\xF3n", PRODUCT_PRINT_LIST = "Lista de art\xEDculos para impresi\xF3n", VARIOUS_SETTINGS = "Configuraciones Varias", VARIOUS_SETTINGS_UPDATED = "Configuraciones actualizadas";
var LIST_UPDATED = "Lista actualizada";
var DATE_FORMAT = "dd/MM/yyyy", DATE_FORMAT_API = "yyyy-MM-dd", DATE_DAY_NAMES_SHORT = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
var DATE_MONTH_NAMES_SHORT = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
var ORDER_CREATED = "Pedido creado", ORDER_CREATED_NUMBER = "N\xFAmero de Pedido: {{numero_pedido}}", ORDER_UPDATED = "Pedido actualizado", ORDER_UPDATED_NUMBER = "N\xFAmero de Pedido: {{numero_pedido}}", DRAFT_CREATED = "Borrador creado", DRAFT_CREATED_NUMBER = "N\xFAmero de Borrador: {{numero_pedido}}", DRAFT_UPDATED = "Borrador actualizado", DRAFT_UPDATED_NUMBER = "N\xFAmero de Borrador: {{numero_pedido}}";

// src/code.client/crud_configs/users/index.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var settings = {
  customers: {
    api: {
      getAll: useGetAllDXTCustomers,
      getOne: useGetOneDXTCustomer,
      post: customerCreateRequest,
      patch: customerUpdateRequest,
      delete: customerDeleteRequest,
      getRelation: () => useTangoList({
        endpoint: API_TANGO_CLIENTE_GET_ALL,
        fieldsMap: {
          label: "screen_name",
          value: "id",
          isEnabled: "habilitado"
        },
        disabledIcon: /* @__PURE__ */ jsx7(Icon, { as: AccountCancelIcon, color: "red.400", ml: 2, boxSize: 5 })
      })
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
      getRelation: () => useTangoList({
        endpoint: API_TANGO_VENDEDOR_GET_ALL,
        fieldsMap: {
          label: "screen_name",
          value: "id",
          isEnabled: "habilitado"
        },
        disabledIcon: /* @__PURE__ */ jsx7(Icon, { as: AccountCancelIcon, color: "red.400", ml: 2, boxSize: 5 })
      })
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

// src/@core/validate_schema/schema_validators.ts
var optionalBooleanValidator = (v, def) => v == null ? def : new VOBoolean(v).valueOf(), integerValidator = (v) => new VOInteger(v).valueOf(), optionalIntegerValidator = (v, def) => v == null ? def : new VOInteger(v).valueOf();
var stringValidator = (v) => new VONotEmptyString(v).valueOf(), optionalStringValidator = (v, def) => v == null ? def : new VOString(v).valueOf();

// src/@core/validate_schema/validate_schema.ts
var InvalidValidationSchemaException = class extends ValidationException {
  constructor(schema) {
    super(`Invalid validation schema: ${schema ?? "{}"}`);
  }
}, InvalidSchemaValidatorFunctionException = class extends ValidationException {
  constructor(field) {
    super(`Invalid validator function: ${field}`);
  }
}, InvalidSchemaValuesException = class extends ValidationException {
  constructor(invalidValues) {
    super(`Invalid values: ${invalidValues.map(({ field, value }) => field).join(", ")}`);
    this.invalidValues = invalidValues;
  }
}, UnknownSchemaKeysException = class extends ValidationException {
  constructor(unknownKeys) {
    super(`Unknown keys: ${unknownKeys.join(", ")}`);
    this.unknownKeys = unknownKeys;
  }
};
function validateSchema(schema, input, options) {
  if (!isObj(schema))
    throw new InvalidValidationSchemaException();
  let invalidValues = [], inputIsObject = isObj(input), entries = Object.entries(schema), validatedResult = Array(entries.length);
  isObj(input) || (input = {});
  let i = 0;
  for (let [field, validator8] of entries) {
    let valIsObject = isObj(validator8), fieldName = valIsObject && "n" in validator8 ? validator8.n : field, validatorFuncion = valIsObject && "f" in validator8 ? validator8.f : validator8;
    if (typeof validatorFuncion != "function")
      throw new InvalidSchemaValidatorFunctionException(fieldName);
    let inputValue = inputIsObject ? input[field] : void 0;
    try {
      let result2 = validatorFuncion(inputValue);
      result2 instanceof ValueObjectBase && (result2 = result2.valueOf()), invalidValues.length === 0 && (validatedResult[i++] = [
        field,
        result2
      ]);
    } catch {
      invalidValues.push({
        field: fieldName,
        value: valueToString(inputValue, !0)
      });
    }
  }
  if (invalidValues.length > 0) {
    let defaultError = new InvalidSchemaValuesException(invalidValues);
    throw options?.onInvalidValues?.(invalidValues, defaultError) ?? defaultError;
  }
  let valuesKeys = Object.keys(input), unknownKeys = [];
  for (let key of valuesKeys)
    key in schema || unknownKeys.push(key);
  if (unknownKeys.length > 0) {
    let defaultError = new UnknownSchemaKeysException(unknownKeys);
    throw options?.onUnknownKeys?.(unknownKeys, defaultError) ?? defaultError;
  }
  let result = Object.fromEntries(validatedResult), extraValidation = options?.extraValidation;
  return extraValidation != null ? extraValidation(result) : result;
}

// src/app/components/CommonErrors.tsx
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button as Button2
} from "@chakra-ui/react";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var CommonErrors = ({ error, buttonProps }) => /* @__PURE__ */ jsx8(
  Box,
  {
    width: "full",
    sx: {
      mt: 6
    },
    children: /* @__PURE__ */ jsxs5(
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
          /* @__PURE__ */ jsx8(AlertIcon, { boxSize: "40px", sx: { mr: 0, mb: 4 } }),
          /* @__PURE__ */ jsx8(AlertDescription, { maxWidth: "sm", children: error }),
          buttonProps != null && /* @__PURE__ */ jsx8(
            Button2,
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

// src/app/components/SettingsFormHeading.tsx
import {
  Flex,
  Heading as Heading2,
  IconButton as IconButton2,
  Spacer
} from "@chakra-ui/react";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon.js";

// src/app/components/CommonCard.tsx
import {
  Card,
  CardBody,
  useColorModeValue
} from "@chakra-ui/react";
import { jsx as jsx9 } from "react/jsx-runtime";
var CommonCard = (props) => {
  let { children, cardProps, cardBodyProps } = props, borderColor = useColorModeValue("gray.200", "white.200");
  return /* @__PURE__ */ jsx9(
    Card,
    {
      boxShadow: "lg",
      sx: { mb: 4 },
      borderColor,
      ...cardProps,
      children: /* @__PURE__ */ jsx9(CardBody, { ...cardBodyProps, children })
    }
  );
};

// src/app/components/ResponsiveIconButton.tsx
import {
  Button as Button3,
  Icon as Icon2,
  IconButton,
  useBreakpointValue
} from "@chakra-ui/react";
import { Fragment as Fragment2, jsx as jsx10 } from "react/jsx-runtime";
var ResponsiveIconButton = (props) => {
  let { text, icon, iconProps, sharedProps, buttonProps, iconButtonProps } = props, buttonInjection = useBreakpointValue({
    base: /* @__PURE__ */ jsx10(
      IconButton,
      {
        "aria-label": text,
        ...sharedProps,
        ...iconButtonProps,
        icon: /* @__PURE__ */ jsx10(Icon2, { as: icon, ...iconProps })
      }
    ),
    md: /* @__PURE__ */ jsx10(
      Button3,
      {
        ...sharedProps,
        ...buttonProps,
        ...icon && { leftIcon: /* @__PURE__ */ jsx10(Icon2, { as: icon, ...iconProps }) },
        children: text
      }
    )
  });
  return /* @__PURE__ */ jsx10(Fragment2, { children: buttonInjection });
};

// src/app/components/SettingsFormHeading.tsx
import { Fragment as Fragment3, jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var SettingsFormHeading = (props) => {
  let { title, actionButton, returnButton } = props;
  return /* @__PURE__ */ jsx11(CommonCard, { children: /* @__PURE__ */ jsxs6(Flex, { direction: "row", alignItems: "center", gap: "2", children: [
    returnButton && /* @__PURE__ */ jsx11(
      IconButton2,
      {
        "aria-label": BACK,
        icon: /* @__PURE__ */ jsx11(ChevronLeftIcon, {}),
        colorScheme: "gray",
        size: "xs",
        variant: "outline",
        ...returnButton.buttonProps
      }
    ),
    /* @__PURE__ */ jsx11(Heading2, { size: ["sm", "md"], textTransform: "uppercase", children: title }),
    actionButton && /* @__PURE__ */ jsxs6(Fragment3, { children: [
      /* @__PURE__ */ jsx11(Spacer, {}),
      /* @__PURE__ */ jsx11(
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

// src/app/components/ApiErrors.tsx
import { useNavigate as useNavigate2 } from "@remix-run/react";
import {
  Box as Box2,
  Button as Button4,
  Flex as Flex2,
  Heading as Heading3,
  HStack,
  Icon as Icon3,
  Text as Text2
} from "@chakra-ui/react";
import CloseIcon from "mdi-react/CloseIcon.js";
import { Fragment as Fragment4, jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var ApiErrors = ({
  error,
  retry,
  cancelAndNavigateTo
}) => {
  let navigate = useNavigate2();
  return /* @__PURE__ */ jsxs7(Box2, { textAlign: "center", py: 10, px: 6, children: [
    /* @__PURE__ */ jsx12(Box2, { display: "inline-block", children: /* @__PURE__ */ jsx12(
      Flex2,
      {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bg: "red.500",
        rounded: "50px",
        w: "55px",
        h: "55px",
        textAlign: "center",
        children: /* @__PURE__ */ jsx12(Icon3, { as: CloseIcon, boxSize: "40px", color: "white" })
      }
    ) }),
    error.message_to_user ? /* @__PURE__ */ jsxs7(Fragment4, { children: [
      /* @__PURE__ */ jsx12(Heading3, { as: "h2", size: "xl", mt: 6, mb: 2, children: error.message_to_user?.title }),
      /* @__PURE__ */ jsx12(Text2, { color: "gray.500", children: error.message_to_user?.content })
    ] }) : /* @__PURE__ */ jsx12(Text2, { color: "gray.500", mt: 6, children: error.error_description }),
    /* @__PURE__ */ jsxs7(
      HStack,
      {
        sx: {
          mt: 6
        },
        spacing: 4,
        justifyContent: "center",
        children: [
          retry && /* @__PURE__ */ jsx12(Button4, { onClick: retry, colorScheme: "blue", children: RETRY }),
          cancelAndNavigateTo != null && /* @__PURE__ */ jsx12(
            Button4,
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

// src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx
import { Box as Box3, Divider, Grid, GridItem, HStack as HStack2, Stack } from "@chakra-ui/react";

// src/app/components/form_elements/FormSkeletons.tsx
import { Skeleton } from "@chakra-ui/react";
import { jsx as jsx13 } from "react/jsx-runtime";
var FormInputSkeleton = ({ height }) => /* @__PURE__ */ jsx13(Skeleton, { width: "full", height: height ?? "36px", borderRadius: "md" }), FormTextareaSkeleton = ({ height }) => /* @__PURE__ */ jsx13(Skeleton, { width: "full", height: height ?? "80px", borderRadius: "md" });

// src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var Loading = () => /* @__PURE__ */ jsx14(
  Box3,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs8(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx14(Divider, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx14(Divider, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx14(Divider, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs8(Stack, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx14(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx14(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx14(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx14(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx14(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx14(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx14(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx14(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) })
          ] }) }),
          /* @__PURE__ */ jsx14(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx14(Divider, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, {}),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx14(GridItem, { children: /* @__PURE__ */ jsx14(FormInputSkeleton, {}) })
        ]
      }
    )
  }
);

// src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx
import { useEffect as useEffect6 } from "react";

// src/code.client/app_resources/app_resources.ts
function useAppResources() {
  let result = useBasicAppResources();
  if (!(result.authState instanceof AuthStateLoggedIn))
    throw new DXTException(
      new DXTError(799e3 /* INTERNAL_CLIENT_ERROR */, {
        extra: "AuthState is not AuthStateLoggedIn"
      })
    );
  if (typeof result.authDispatch != "function")
    throw new DXTException(
      new DXTError(799e3 /* INTERNAL_CLIENT_ERROR */, {
        extra: "Invalid authDispath in useAppResources()"
      })
    );
  return result;
}

// src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx
import {
  Box as Box6,
  Divider as Divider2,
  Grid as Grid2,
  GridItem as GridItem2,
  Heading as Heading4,
  HStack as HStack3,
  Stack as Stack4,
  useToast
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// src/app/components/form_elements/ControlledInput.tsx
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup
} from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var ControlledInput = (props) => {
  let { fieldProps, formControlProps, formControlInnerProps, control } = props, {
    field: { ref: ref3, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController({
    name: fieldProps.name,
    control
  }), { label, helperText, icon, iconEnding } = formControlInnerProps || {};
  return /* @__PURE__ */ jsxs9(FormControl, { ...formControlProps, isInvalid: invalid, children: [
    label != null && /* @__PURE__ */ jsx15(
      FormLabel,
      {
        htmlFor: fieldProps.name,
        sx: fieldProps.variant === "flushed" ? { fontSize: "sm", mb: 0 } : {},
        children: label
      }
    ),
    /* @__PURE__ */ jsxs9(InputGroup, { children: [
      icon,
      /* @__PURE__ */ jsx15(
        Input,
        {
          autoComplete: "off",
          ...fieldProps,
          onChange: (e) => {
            fieldProps.onChange && fieldProps.onChange(e), onChange(e);
          },
          value,
          ref: ref3
        }
      ),
      iconEnding
    ] }),
    helperText != null && /* @__PURE__ */ jsx15(FormHelperText, { children: helperText })
  ] });
};

// src/app/components/form_elements/ControlledRadio.tsx
import {
  FormControl as FormControl2,
  FormHelperText as FormHelperText2,
  Radio,
  RadioGroup,
  Stack as Stack2
} from "@chakra-ui/react";
import { useController as useController2 } from "react-hook-form";
import { jsx as jsx16, jsxs as jsxs10 } from "react/jsx-runtime";
var ControlledRadio = (props) => {
  let {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    stackProps,
    radioProps,
    control
  } = props, { name } = fieldProps, { helperText } = formControlInnerProps || {}, {
    field: { ref: ref3, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController2({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs10(FormControl2, { ...formControlProps, isInvalid: invalid, children: [
    /* @__PURE__ */ jsx16(
      RadioGroup,
      {
        ...fieldProps,
        onChange,
        value: value.toString(),
        ref: ref3,
        children: /* @__PURE__ */ jsx16(Stack2, { direction: "row", spacing: 4, ...stackProps, children: fieldProps.options.map((option, index) => /* @__PURE__ */ jsx16(
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
    helperText != null && /* @__PURE__ */ jsx16(FormHelperText2, { children: helperText })
  ] });
};

// src/app/components/form_elements/ControlledSelect.tsx
import { Children, memo } from "react";
import {
  FormControl as FormControl3,
  FormHelperText as FormHelperText3,
  FormLabel as FormLabel2
} from "@chakra-ui/react";
import {
  chakraComponents,
  createFilter,
  Select
} from "chakra-react-select";
import { useController as useController3 } from "react-hook-form";
import { FixedSizeList } from "react-window";

// src/app/components/form_elements/ChakraReactSelectCustomMenuList.tsx
import {
  Box as Box4,
  useBreakpointValue as useBreakpointValue2,
  useMultiStyleConfig,
  useTheme
} from "@chakra-ui/react";
import { jsx as jsx17 } from "react/jsx-runtime";
var isSize = (size) => typeof size == "string" && ["sm", "md", "lg"].includes(size), getDefaultSize = (size) => isSize(size) ? size : size === "xs" ? "sm" : size === "xl" ? "lg" : "md", useSize = (size) => {
  let chakraTheme = useTheme(), defaultSize = getDefaultSize(
    chakraTheme.components.Input.defaultProps.size
  ), definedSize = size ?? defaultSize;
  return useBreakpointValue2(
    typeof definedSize == "string" ? [definedSize] : definedSize,
    {
      fallback: "md"
    }
  ) || defaultSize;
}, ChakraReactSelectCustomMenuList = (props) => {
  let {
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
  } = props, menuStyles = useMultiStyleConfig("Menu"), size = useSize(sizeProp), fieldStyles = useMultiStyleConfig("Input", {
    size,
    variant,
    focusBorderColor,
    errorBorderColor
  }).field, initialSx = {
    ...menuStyles.list,
    minW: "100%",
    // maxHeight: `${maxHeight}px`,
    // overflowY: 'auto',
    // This is hacky, but it works. May be removed in the future
    "--input-border-radius": fieldStyles?.["--input-border-radius"],
    borderRadius: fieldStyles?.borderRadius || menuStyles.list?.borderRadius,
    position: "relative"
    // required for offset[Height, Top] > keyboard scroll
    // WebkitOverflowScrolling: 'touch',
  }, sx = chakraStyles?.menuList ? chakraStyles.menuList(initialSx, props) : initialSx;
  return /* @__PURE__ */ jsx17(
    Box4,
    {
      role: "listbox",
      ...innerProps,
      className: cx(
        {
          "menu-list": !0,
          "menu-list--is-multi": isMulti
        },
        className
      ),
      sx,
      children
    }
  );
};

// src/app/components/form_elements/ControlledSelect.tsx
import { jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
var VirtualizedMenuList = memo(function(props) {
  let { children, ...restProps } = props, itemHeight = 35, { options, maxHeight, getValue } = props, [value] = getValue(), valueIndexOf = options.indexOf(value), itemsPerPage = Math.floor(maxHeight / itemHeight), initialOffset = valueIndexOf > itemsPerPage ? valueIndexOf * itemHeight : 0, minHeight = Math.min(options.length * itemHeight, maxHeight);
  return /* @__PURE__ */ jsx18(ChakraReactSelectCustomMenuList, { ...props, children: /* @__PURE__ */ jsx18(
    FixedSizeList,
    {
      height: minHeight + 2,
      itemCount: Children.count(children),
      itemSize: itemHeight,
      initialScrollOffset: initialOffset,
      width: "100%",
      outerRef: props.innerRef,
      overscanCount: 20,
      children: ({ index, style }) => /* @__PURE__ */ jsx18("div", { style, children: Children.toArray(children)[index] })
    }
  ) });
}), ControlledSelect = (props) => {
  let {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    control,
    shouldSort
  } = props, { helperText, label } = formControlInnerProps || {};
  function compareByLabel(a, b) {
    return a.label.localeCompare(b.label);
  }
  (shouldSort ?? !1) && fieldProps.options.sort(compareByLabel);
  let {
    field: { ref: ref3, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController3({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs11(FormControl3, { ...formControlProps, isInvalid: invalid, children: [
    /* @__PURE__ */ jsx18(
      FormLabel2,
      {
        sx: fieldProps.variant === "flushed" ? { fontSize: "sm", mb: 0 } : {},
        children: label
      }
    ),
    /* @__PURE__ */ jsx18(
      Select,
      {
        ...fieldProps,
        ref: ref3,
        value: fieldProps.options.find((option) => option.value === value),
        filterOption: createFilter({ ignoreAccents: !1 }),
        onChange: (newValue, actionMeta) => onChange(newValue.value),
        useBasicStyles: !0,
        isSearchable: fieldProps.isSearchable,
        instanceId: fieldProps.name,
        chakraStyles: {
          option: (provided, state) => ({
            ...provided,
            ...fieldProps.virtualized === !0 && {
              fontSize: { base: "xs", sm: "sm", md: "md" }
            }
          })
        },
        components: {
          ...fieldProps.virtualized === !0 && {
            MenuList: VirtualizedMenuList
          },
          Option: ({ children, ...props2 }) => {
            fieldProps.virtualized === !0 && (delete props2.innerProps.onMouseMove, delete props2.innerProps.onMouseOver);
            let propsData = props2.data;
            return /* @__PURE__ */ jsxs11(chakraComponents.Option, { ...props2, children: [
              children,
              " ",
              propsData.icon != null && propsData.icon
            ] });
          }
        }
      }
    ),
    helperText != null && /* @__PURE__ */ jsx18(FormHelperText3, { children: helperText })
  ] });
};

// src/app/components/form_elements/ControlledSwitch.tsx
import {
  FormControl as FormControl4,
  FormLabel as FormLabel3,
  Switch
} from "@chakra-ui/react";
import { useController as useController4 } from "react-hook-form";
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
var ControlledSwitch = (props) => {
  let {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    control,
    watch
  } = props, { label } = formControlInnerProps || {}, {
    field: { ref: ref3, onChange, onBlur, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController4({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs12(
    FormControl4,
    {
      display: "flex",
      alignItems: "center",
      ...formControlProps,
      isInvalid: invalid,
      children: [
        /* @__PURE__ */ jsx19(
          Switch,
          {
            ...fieldProps,
            ...watch,
            isChecked: value,
            onChange: (e) => onChange(e.target.checked),
            onBlur,
            ref: ref3
          }
        ),
        label != null && /* @__PURE__ */ jsx19(
          FormLabel3,
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

// src/app/components/form_elements/FormErrors.tsx
import { useRef as useRef3 } from "react";
import { Alert as Alert3, Box as Box5, ListItem, UnorderedList } from "@chakra-ui/react";
import { Fragment as Fragment5, jsx as jsx20 } from "react/jsx-runtime";
var FormErrors = ({ errors }) => {
  let formErrorsRef = useRef3(null);
  return Object.keys(errors).length ? /* @__PURE__ */ jsx20(
    Box5,
    {
      width: "full",
      sx: {
        mb: 4
      },
      ref: formErrorsRef,
      children: /* @__PURE__ */ jsx20(Alert3, { status: "error", variant: "left-accent", sx: { p: 4 }, children: /* @__PURE__ */ jsx20(UnorderedList, { fontSize: "sm", styleType: "none", sx: { m: 0 }, children: Object.values(errors).map((error, key) => /* @__PURE__ */ jsx20(ListItem, { children: error?.message?.toString() ?? error?.root?.message.toString() }, key)) }) })
    }
  ) : /* @__PURE__ */ jsx20(Fragment5, {});
};

// src/app/components/form_elements/PasswordWithStatus.tsx
import { useState as useState4 } from "react";
import { Badge, Icon as Icon4, InputRightElement } from "@chakra-ui/react";
import EyeOffOutlineIcon from "mdi-react/EyeOffOutlineIcon.js";
import EyeOutlineIcon from "mdi-react/EyeOutlineIcon.js";
import { Fragment as Fragment6, jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
var PasswordWithStatus = (props) => {
  let {
    fieldProps,
    formControlInnerProps,
    passwordStatus,
    disableForm,
    control
  } = props, [showPassword, setShowPassword] = useState4(!1), handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  }, { label, helperText } = formControlInnerProps || {};
  return /* @__PURE__ */ jsxs13(Fragment6, { children: [
    /* @__PURE__ */ jsx21(
      ControlledInput,
      {
        fieldProps: {
          ...fieldProps,
          type: showPassword ? "text" : "password"
        },
        formControlProps: {
          isDisabled: disableForm
        },
        formControlInnerProps: {
          label,
          iconEnding: /* @__PURE__ */ jsx21(InputRightElement, { children: /* @__PURE__ */ jsx21(
            Icon4,
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
    passwordStatus != null && /* @__PURE__ */ jsxs13(Fragment6, { children: [
      passwordStatus.tooShort && /* @__PURE__ */ jsx21(Badge, { colorScheme: "red", children: PASSWORD_TOO_SHORT }),
      passwordStatus.tooLong && /* @__PURE__ */ jsx21(Badge, { colorScheme: "red", children: PASSWORD_TOO_LONG }),
      passwordStatus.invalidCharsPresent && /* @__PURE__ */ jsx21(Badge, { colorScheme: "red", children: PASSWORD_INVALID_CHARS })
    ] })
  ] });
};

// src/app/components/InlineError.tsx
import { Badge as Badge2 } from "@chakra-ui/react";
import { jsx as jsx22 } from "react/jsx-runtime";
var InlineError = ({ error }) => /* @__PURE__ */ jsx22(
  Badge2,
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

// src/app/components/SettingsFormButtons.tsx
import { useNavigate as useNavigate3 } from "@remix-run/react";
import { Button as Button5, Stack as Stack3 } from "@chakra-ui/react";
import { Fragment as Fragment7, jsx as jsx23, jsxs as jsxs14 } from "react/jsx-runtime";
var SettingsFormsButtons = (props) => {
  let { isLoading, buttonActionText, buttonCancelUrl } = props, navigate = useNavigate3();
  return /* @__PURE__ */ jsx23(Fragment7, { children: /* @__PURE__ */ jsxs14(Stack3, { direction: { base: "column", md: "row" }, children: [
    /* @__PURE__ */ jsx23(
      Button5,
      {
        type: "submit",
        colorScheme: "blue",
        width: "full",
        isLoading,
        children: buttonActionText ?? UPDATE
      }
    ),
    /* @__PURE__ */ jsx23(
      Button5,
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

// src/app/routes/_admin.settings.users.customers.$id.edit/validation.ts
import { useState as useState5 } from "react";
import _2 from "lodash";
import * as yup2 from "yup";

// src/yup/utils.ts
function yupVOValidation(VO, value) {
  try {
    return new VO(value), !0;
  } catch {
    return !1;
  }
}

// src/code.client/crud_configs/users/validation.ts
import * as yup from "yup";
var commonValidationSchema = yup.object({
  tango_id: yup.number().integer().required("Seleccione un cliente de Tango").typeError("Seleccione un cliente de Tango"),
  username: yup.string().required("Ingrese un nombre de usuario"),
  email: yup.string().email("Ingrese un correo electr\xF3nico v\xE1lido"),
  perfil_facturacion_id: yup.number().integer().required("Seleccione un perfil de facturaci\xF3n").typeError("Seleccione un perfil de facturaci\xF3n"),
  dia_de_entrega: yup.number().integer(
    `El tiempo de entrega de pedidos debe ser un un n\xFAmero entero entre ${0} y ${365}`
  ).min(
    0,
    `El tiempo de entrega de pedidos debe ser mayor o igual a ${0} d\xEDas`
  ).max(
    365,
    `El tiempo de entrega de pedidos no puede superar los ${365} d\xEDas`
  ).required("Ingrese el n\xFAmero de d\xEDas para entrega de pedidos").typeError("Ingrese el n\xFAmero de d\xEDas para entrega de pedidos"),
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

// src/domain/shared/validation/validate_input.ts
function validateInput(schema, values, extraValidation) {
  return validateSchema(
    schema,
    values,
    {
      extraValidation,
      onUnknownKeys: (unknownKeys, _14) => new DXTException(
        new DXTError(
          1e4 /* BAD_REQUEST */,
          {
            extra: `Par\xE1metros desconocidos: ${unknownKeys.join(", ")}`
          }
        )
      ),
      onInvalidValues: (invalidsValues, _14) => new DXTException(
        new DXTError(
          1e4 /* BAD_REQUEST */,
          {
            extra: `Valores inv\xE1lidos: ${invalidsValues.map(({ field, value }) => `(${field}=${value})`).join(", ")}`
          }
        )
      )
    }
  );
}

// src/domain/shared/validation/utils.ts
var DXT_PASSWORD_MIN_LENGTH = 4, DXT_PASSWORD_MAX_LENGTH = 16, DXT_PASSWORD_SPECIAL_CHARS = `!@#$%^&*()-_=+,.;?'"\\|/:{}<>[]`, DXT_PASSWORD_LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz\xF1\xE7\xE1\xE9\xED\xF3\xFA\xE0\xE8\xEC\xF2\xF9\xE2\xEA\xEE\xF4\xFB\xE3\xF5\xE4\xEB\xEF\xF6\xFC", DXT_PASSWORD_UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ\xD1\xC7\xC1\xC9\xCD\xD3\xDA\xC0\xC8\xCC\xD2\xD9\xC2\xCA\xCE\xD4\xDB\xC3\xD5\xC4\xCB\xCF\xD6\xDC", DXT_PASSWORD_NUMERIC_CHARS = "0123456789";
function dxtPasswordStatus(value) {
  let invalidVariableType = !0, invalidCharsPresent = !1, lowercaseMissing = !0, uppercaseMissing = !0, numbersMissing = !0, specialCharsMissing = !0, tooShort = !1, tooLong = !1;
  if (typeof value == "string") {
    invalidVariableType = !1, tooShort = value.length < DXT_PASSWORD_MIN_LENGTH, tooLong = !tooShort && value.length > DXT_PASSWORD_MAX_LENGTH;
    for (let i = 0; i < value.length; i++) {
      let char = value[i];
      DXT_PASSWORD_LOWERCASE_CHARS.includes(char) ? lowercaseMissing = !1 : DXT_PASSWORD_UPPERCASE_CHARS.includes(char) ? uppercaseMissing = !1 : char >= "0" && char <= "9" ? numbersMissing = !1 : DXT_PASSWORD_SPECIAL_CHARS.includes(char) ? specialCharsMissing = !1 : invalidCharsPresent = !0;
    }
  }
  return {
    invalidVariableType,
    passwordIsValid: !(invalidVariableType || tooShort || tooLong || invalidCharsPresent),
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
  return typeof value != "string" ? !1 : dxtPasswordStatus(value).passwordIsValid;
}
function _getRandomChars(collection, length) {
  let result = "";
  for (let i = 0; i < length; i++)
    result += collection[random(0, collection.length - 1)];
  return result;
}
function generateRandomPassword() {
  let length = random(DXT_PASSWORD_MIN_LENGTH, DXT_PASSWORD_MAX_LENGTH), chunkLength = Math.floor(length / 4), chunksLength = [
    chunkLength,
    chunkLength,
    chunkLength,
    length - chunkLength * 3
  ];
  for (let i = 0; i < 10; i++) {
    let c1 = random(0, 3), c2 = random(0, 3);
    chunksLength[c1] > 1 && (chunksLength[c1]--, chunksLength[c2]++);
  }
  let sourceString = _getRandomChars(DXT_PASSWORD_SPECIAL_CHARS, chunksLength[0]) + _getRandomChars(DXT_PASSWORD_LOWERCASE_CHARS, chunksLength[1]) + _getRandomChars(DXT_PASSWORD_UPPERCASE_CHARS, chunksLength[2]) + _getRandomChars(DXT_PASSWORD_NUMERIC_CHARS, chunksLength[3]), newString = "";
  for (; sourceString !== ""; ) {
    let pos = random(0, sourceString.length - 1);
    newString += sourceString[pos], sourceString = sourceString.substring(0, pos) + sourceString.substring(pos + 1);
  }
  return newString;
}

// src/domain/shared/value_objects/vo_dxt_password.ts
var VODXTPassword = class extends ValueObject {
  validate(value) {
    if (typeof value == "string" && isDXTPassword(value))
      return value;
    this.throwError(value);
  }
  static random() {
    return new VODXTPassword(generateRandomPassword());
  }
};

// src/domain/shared/value_objects/vo_strings.ts
var VOStrings = class extends ValueObject {
  validate(input) {
    return typeof input == "string" ? [input] : (Array.isArray(input) || this.throwError(input), input.map((e) => (e == null && this.throwError(input), e.toString())));
  }
};

// src/app/routes/_admin.settings.users.customers.$id.edit/validation.ts
var useCustomValidationSchema = () => {
  let [passwordStatus, setPasswordStatus] = useState5(null), customValidationSchema = yup2.object({
    password: yup2.string().test("password", "Formato de contrase\xF1a no v\xE1lido", (v) => {
      if (v != null && v != "") {
        let newPasswordStatus = dxtPasswordStatus(v);
        return _2.isEqual(passwordStatus, newPasswordStatus) || setPasswordStatus(newPasswordStatus), yupVOValidation(VODXTPassword, v);
      }
      return setPasswordStatus(null), !0;
    })
  }).required();
  return { yupValidationSchema: commonValidationSchema.concat(customValidationSchema), passwordStatus };
};

// src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx
import { jsx as jsx24, jsxs as jsxs15 } from "react/jsx-runtime";
var Success = (props) => {
  let { stateData, typeSettings } = props, updateData = {
    ...stateData
  }, app = useAppResources(), toast = useToast(), { yupValidationSchema: yupValidationSchema5, passwordStatus } = useCustomValidationSchema(), { state: statePerfiles, result: resultPerfiles } = useTangoList({
    endpoint: API_TANGO_PERFIL_GET_ALL,
    fieldsMap: {
      label: "name",
      value: "id"
    }
  }), { state: stateRelationship, result: resultRelationship } = typeSettings.api.getRelation(), {
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
    resolver: yupResolver(yupValidationSchema5)
  }), watchPuedeAnularPedido = watch("puede_anular_pedido");
  useEffect6(() => {
    watchPuedeAnularPedido === !1 && resetField("borrar_pedido_al_anular", { defaultValue: !1 });
  }, [watchPuedeAnularPedido]), useEffect6(() => {
    if (stateRelationship instanceof FetchStateSuccess) {
      let defaultValue = resultRelationship.find((option) => option.value === updateData.tango_id)?.value ?? void 0;
      resetField("tango_id", { defaultValue });
    }
    if (statePerfiles instanceof FetchStateSuccess) {
      let defaultValue = resultPerfiles.find((option) => option.value === updateData.perfil_facturacion_id)?.value ?? void 0;
      resetField("perfil_facturacion_id", { defaultValue });
    }
  }, [stateRelationship, statePerfiles]);
  let disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx24("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let { ...data } = dataUnsafe;
    data.email === "" && delete data.email, data.password === "" && delete data.password;
    let input = data;
    (await typeSettings.api.patch(updateData.id, input, app)).map({
      success: (_14) => {
        toast({
          title: USER_UPDATED,
          status: "success"
        }), app.navigate(URL_SETTINGS_CUSTOMERS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }), children: /* @__PURE__ */ jsxs15(Box6, { children: [
    /* @__PURE__ */ jsx24(FormErrors, { errors }),
    /* @__PURE__ */ jsx24(CommonCard, { children: /* @__PURE__ */ jsxs15(
      Grid2,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx24(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx24(Heading4, { size: "sm", textTransform: "uppercase", children: "Informaci\xF3n del Cliente" }) }),
          /* @__PURE__ */ jsxs15(GridItem2, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx24(
              ControlledSelect,
              {
                fieldProps: {
                  name: "tango_id",
                  placeholder: typeSettings.tangoRelatedFields?.placeholder,
                  options: resultRelationship,
                  noOptionsMessage(obj) {
                    return typeSettings.tangoRelatedFields?.empty;
                  },
                  isSearchable: !0,
                  selectedOptionStyle: "check",
                  isLoading: stateRelationship instanceof FetchStateLoading,
                  virtualized: !0
                },
                formControlProps: {
                  isDisabled: disableForm || !(stateRelationship instanceof FetchStateSuccess)
                },
                formControlInnerProps: {
                  label: typeSettings.tangoRelatedFields?.label
                },
                control
              }
            ),
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx24(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx24(GridItem2, { children: /* @__PURE__ */ jsx24(
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
          /* @__PURE__ */ jsx24(GridItem2, { children: /* @__PURE__ */ jsx24(
            PasswordWithStatus,
            {
              fieldProps: {
                name: "password",
                id: "password"
              },
              formControlInnerProps: {
                label: "Contrase\xF1a"
              },
              passwordStatus,
              disableForm,
              control
            }
          ) }),
          /* @__PURE__ */ jsx24(GridItem2, { children: /* @__PURE__ */ jsx24(
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
                label: "Correo electr\xF3nico"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx24(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx24(Divider2, {}) }),
          /* @__PURE__ */ jsxs15(GridItem2, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx24(
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
                  label: "Perfil de facturaci\xF3n"
                }
              }
            ),
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx24(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx24(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx24(Divider2, {}) }),
          /* @__PURE__ */ jsx24(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx24(Heading4, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx24(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx24(
            ControlledRadio,
            {
              fieldProps: {
                name: "habilitado_en_dxt",
                options: [
                  {
                    value: !0,
                    label: "Establecido en Tango"
                  },
                  {
                    value: !1,
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
          /* @__PURE__ */ jsx24(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx24(Divider2, {}) }),
          /* @__PURE__ */ jsx24(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx24(Heading4, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }) }),
          /* @__PURE__ */ jsx24(GridItem2, { children: /* @__PURE__ */ jsx24(
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
    /* @__PURE__ */ jsx24(CommonCard, { children: /* @__PURE__ */ jsxs15(
      Grid2,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx24(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx24(Heading4, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx24(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs15(Stack4, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx24(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx24(
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
            /* @__PURE__ */ jsx24(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx24(
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
            /* @__PURE__ */ jsx24(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx24(
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
            /* @__PURE__ */ jsx24(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx24(
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
                  isDisabled: watchPuedeAnularPedido === !1,
                  ...watchPuedeAnularPedido === !1 && {
                    isChecked: !1
                  }
                }
              }
            ) }),
            /* @__PURE__ */ jsx24(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx24(
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
            /* @__PURE__ */ jsx24(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx24(
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
            /* @__PURE__ */ jsx24(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx24(
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
                  label: "Puede ver art\xEDculos sin precios"
                },
                control
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx24(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx24(Divider2, {}) }),
          /* @__PURE__ */ jsx24(GridItem2, { children: /* @__PURE__ */ jsx24(
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
                helperText: "Expresado en d\xEDas"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx24(GridItem2, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx24(CommonCard, { children: /* @__PURE__ */ jsx24(
      SettingsFormsButtons,
      {
        buttonActionText: "Actualizar",
        isLoading: disableForm
      }
    ) })
  ] }) });
};

// src/app/routes/_admin.settings.users.customers.$id.edit/components/index.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
var FormEdit = (props) => {
  let { typeSettings, id } = props, { state, retry } = typeSettings.api.getOne(id);
  return state.map({
    loading: (_14) => /* @__PURE__ */ jsx25(Loading, {}),
    error: ({ error }) => /* @__PURE__ */ jsx25(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx25(Success, { stateData: state2.data, typeSettings })
  });
};

// src/app/routes/_admin.settings.users.customers.$id.edit/route.tsx
import { Fragment as Fragment8, jsx as jsx26, jsxs as jsxs16 } from "react/jsx-runtime";
function Edit() {
  let navigate = useNavigate4(), { id } = useParams(), typeSettings = settings.customers;
  try {
    if (integerValidator(id))
      return /* @__PURE__ */ jsxs16(Fragment8, { children: [
        /* @__PURE__ */ jsx26(
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
        /* @__PURE__ */ jsx26(FormEdit, { typeSettings, id })
      ] });
  } catch {
    return /* @__PURE__ */ jsx26(
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

// src/app/routes/_admin.settings.users.vendors.$id.edit/route.tsx
var route_exports2 = {};
__export(route_exports2, {
  default: () => Edit2
});
import { useNavigate as useNavigate5, useParams as useParams2 } from "@remix-run/react";

// src/app/routes/_admin.settings.users.vendors.$id.edit/components/loading.tsx
import { Box as Box7, Divider as Divider3, Grid as Grid3, GridItem as GridItem3, HStack as HStack4, Stack as Stack5 } from "@chakra-ui/react";
import { jsx as jsx27, jsxs as jsxs17 } from "react/jsx-runtime";
var Loading2 = () => /* @__PURE__ */ jsx27(
  Box7,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs17(
      Grid3,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx27(Divider3, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx27(Divider3, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx27(Divider3, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs17(Stack5, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx27(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx27(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx27(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx27(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx27(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx27(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx27(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx27(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) })
          ] }) }),
          /* @__PURE__ */ jsx27(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx27(Divider3, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, {}),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx27(GridItem3, { children: /* @__PURE__ */ jsx27(FormInputSkeleton, {}) })
        ]
      }
    )
  }
);

// src/app/routes/_admin.settings.users.vendors.$id.edit/components/success.tsx
import { useEffect as useEffect7 } from "react";
import {
  Box as Box8,
  Divider as Divider4,
  Grid as Grid4,
  GridItem as GridItem4,
  Heading as Heading5,
  HStack as HStack5,
  Stack as Stack6,
  useToast as useToast2
} from "@chakra-ui/react";
import { yupResolver as yupResolver2 } from "@hookform/resolvers/yup";
import { useForm as useForm2 } from "react-hook-form";

// src/app/routes/_admin.settings.users.vendors.$id.edit/validation.ts
import { useState as useState6 } from "react";
import _3 from "lodash";
import * as yup3 from "yup";
var useCustomValidationSchema2 = () => {
  let [passwordStatus, setPasswordStatus] = useState6(null), customValidationSchema = yup3.object({
    password: yup3.string().test("password", "Formato de contrase\xF1a no v\xE1lido", (v) => {
      if (v != null && v != "") {
        let newPasswordStatus = dxtPasswordStatus(v);
        return _3.isEqual(passwordStatus, newPasswordStatus) || setPasswordStatus(newPasswordStatus), yupVOValidation(VODXTPassword, v);
      }
      return setPasswordStatus(null), !0;
    })
  }).required();
  return { yupValidationSchema: commonValidationSchema.concat(customValidationSchema), passwordStatus };
};

// src/app/routes/_admin.settings.users.vendors.$id.edit/components/success.tsx
import { jsx as jsx28, jsxs as jsxs18 } from "react/jsx-runtime";
var Success2 = (props) => {
  let { stateData, typeSettings } = props, updateData = {
    ...stateData
  }, app = useAppResources(), toast = useToast2(), { yupValidationSchema: yupValidationSchema5, passwordStatus } = useCustomValidationSchema2(), { state: statePerfiles, result: resultPerfiles } = useTangoList({
    endpoint: API_TANGO_PERFIL_GET_ALL,
    fieldsMap: {
      label: "name",
      value: "id"
    }
  }), { state: stateRelationship, result: resultRelationship } = typeSettings.api.getRelation(), {
    handleSubmit,
    control,
    resetField,
    setError,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm2({
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
    resolver: yupResolver2(yupValidationSchema5)
  }), watchPuedeAnularPedido = watch("puede_anular_pedido");
  useEffect7(() => {
    watchPuedeAnularPedido === !1 && resetField("borrar_pedido_al_anular", { defaultValue: !1 });
  }, [watchPuedeAnularPedido]), useEffect7(() => {
    if (stateRelationship instanceof FetchStateSuccess) {
      let defaultValue = resultRelationship.find((option) => option.value === updateData.tango_id)?.value ?? void 0;
      resetField("tango_id", { defaultValue });
    }
    if (statePerfiles instanceof FetchStateSuccess) {
      let defaultValue = resultPerfiles.find((option) => option.value === updateData.perfil_facturacion_id)?.value ?? void 0;
      resetField("perfil_facturacion_id", { defaultValue });
    }
  }, [stateRelationship, statePerfiles]);
  let disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx28("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let { ...data } = dataUnsafe;
    data.email === "" && delete data.email, data.password === "" && delete data.password;
    let input = data;
    (await typeSettings.api.patch(updateData.id, input, app)).map({
      success: (_14) => {
        toast({
          title: USER_UPDATED,
          status: "success"
        }), app.navigate(URL_SETTINGS_VENDORS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }), children: /* @__PURE__ */ jsxs18(Box8, { children: [
    /* @__PURE__ */ jsx28(FormErrors, { errors }),
    /* @__PURE__ */ jsx28(CommonCard, { children: /* @__PURE__ */ jsxs18(
      Grid4,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx28(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx28(Heading5, { size: "sm", textTransform: "uppercase", children: "Informaci\xF3n del Vendedor" }) }),
          /* @__PURE__ */ jsxs18(GridItem4, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx28(
              ControlledSelect,
              {
                fieldProps: {
                  name: "tango_id",
                  placeholder: typeSettings.tangoRelatedFields?.placeholder,
                  options: resultRelationship,
                  noOptionsMessage(obj) {
                    return typeSettings.tangoRelatedFields?.empty;
                  },
                  isSearchable: !0,
                  selectedOptionStyle: "check",
                  isLoading: stateRelationship instanceof FetchStateLoading,
                  virtualized: !0
                },
                formControlProps: {
                  isDisabled: disableForm || !(stateRelationship instanceof FetchStateSuccess)
                },
                formControlInnerProps: {
                  label: typeSettings.tangoRelatedFields?.label
                },
                control
              }
            ),
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx28(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx28(GridItem4, { children: /* @__PURE__ */ jsx28(
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
          /* @__PURE__ */ jsx28(GridItem4, { children: /* @__PURE__ */ jsx28(
            PasswordWithStatus,
            {
              fieldProps: {
                name: "password",
                id: "password"
              },
              formControlInnerProps: {
                label: "Contrase\xF1a"
              },
              passwordStatus,
              disableForm,
              control
            }
          ) }),
          /* @__PURE__ */ jsx28(GridItem4, { children: /* @__PURE__ */ jsx28(
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
                label: "Correo electr\xF3nico"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx28(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx28(Divider4, {}) }),
          /* @__PURE__ */ jsxs18(GridItem4, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx28(
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
                  label: "Perfil de facturaci\xF3n"
                }
              }
            ),
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx28(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx28(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx28(Divider4, {}) }),
          /* @__PURE__ */ jsx28(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx28(Heading5, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx28(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx28(
            ControlledRadio,
            {
              fieldProps: {
                name: "habilitado_en_dxt",
                options: [
                  {
                    value: !0,
                    label: "Establecido en Tango"
                  },
                  {
                    value: !1,
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
          /* @__PURE__ */ jsx28(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx28(Divider4, {}) }),
          /* @__PURE__ */ jsx28(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx28(Heading5, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }) }),
          /* @__PURE__ */ jsx28(GridItem4, { children: /* @__PURE__ */ jsx28(
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
    /* @__PURE__ */ jsx28(CommonCard, { children: /* @__PURE__ */ jsxs18(
      Grid4,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx28(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx28(Heading5, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx28(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs18(Stack6, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx28(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx28(
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
            /* @__PURE__ */ jsx28(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx28(
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
            /* @__PURE__ */ jsx28(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx28(
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
            /* @__PURE__ */ jsx28(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx28(
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
                  isDisabled: watchPuedeAnularPedido === !1,
                  ...watchPuedeAnularPedido === !1 && {
                    isChecked: !1
                  }
                }
              }
            ) }),
            /* @__PURE__ */ jsx28(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx28(
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
            /* @__PURE__ */ jsx28(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx28(
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
            /* @__PURE__ */ jsx28(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx28(
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
                  label: "Puede ver art\xEDculos sin precios"
                },
                control
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx28(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx28(Divider4, {}) }),
          /* @__PURE__ */ jsx28(GridItem4, { children: /* @__PURE__ */ jsx28(
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
                helperText: "Expresado en d\xEDas"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx28(GridItem4, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx28(CommonCard, { children: /* @__PURE__ */ jsx28(
      SettingsFormsButtons,
      {
        buttonActionText: "Actualizar",
        isLoading: disableForm
      }
    ) })
  ] }) });
};

// src/app/routes/_admin.settings.users.vendors.$id.edit/components/index.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
var FormEdit2 = (props) => {
  let { typeSettings, id } = props, { state, retry } = typeSettings.api.getOne(id);
  return state.map({
    loading: (_14) => /* @__PURE__ */ jsx29(Loading2, {}),
    error: ({ error }) => /* @__PURE__ */ jsx29(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx29(Success2, { stateData: state2.data, typeSettings })
  });
};

// src/app/routes/_admin.settings.users.vendors.$id.edit/route.tsx
import { Fragment as Fragment9, jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
function Edit2() {
  let navigate = useNavigate5(), { id } = useParams2(), typeSettings = settings.vendors;
  try {
    if (integerValidator(id))
      return /* @__PURE__ */ jsxs19(Fragment9, { children: [
        /* @__PURE__ */ jsx30(
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
        /* @__PURE__ */ jsx30(FormEdit2, { typeSettings, id })
      ] });
  } catch {
    return /* @__PURE__ */ jsx30(
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

// src/app/routes/api.pedido.$id_pedido.start_new_draft.ts
var api_pedido_id_pedido_start_new_draft_exports = {};
__export(api_pedido_id_pedido_start_new_draft_exports, {
  action: () => action,
  loader: () => loader2
});

// src/code.server/infrastucture/articulo/models/articulo.model.ts
var ARTICULO_TABLE = "STA11", ARTICULO_ID_FIELD = "ID_STA11", ARTICULO_CODE_FIELD = "COD_ARTICU", articuloModelColumns = [
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
], ARTICULO_NAME_COLUMNS = ["DESCRIPCIO", "DESC_ADIC"];

// src/code.server/infrastucture/articulo/models/lista.model.ts
var LISTA_TABLE = "GVA10", LISTA_ID_FIELD = "ID_GVA10", LISTA_CODE_FIELD = "NRO_DE_LIS", LISTA_CODE2_FIELD = "N_LISTA", listaModelColumns = [
  LISTA_ID_FIELD,
  LISTA_CODE_FIELD,
  "NOMBRE_LIS",
  "INCLUY_IMP",
  "INCLUY_IVA",
  "HABILITADA"
];

// src/code.server/infrastucture/articulo/models/precio.model.ts
var PRECIO_TABLE = "GVA17", PRECIO_ID_FIELD = "ID_GVA17", precioModelColumns = [
  PRECIO_ID_FIELD,
  ARTICULO_CODE_FIELD,
  ARTICULO_ID_FIELD,
  LISTA_CODE_FIELD,
  LISTA_ID_FIELD,
  "PRECIO"
];

// src/code.server/infrastucture/auxiliar/models/alicuota.model.ts
var ALICUOTA_TABLE = "GVA41", ALICUOTA_ID_FIELD = "ID_GVA41", ALICUOTA_CODE_FIELD = "COD_ALICUO", alicuotaModelColumns = [
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

// src/code.server/infrastucture/auxiliar/models/asiento.model.ts
var ASIENTO_TABLE = "GVA25", ASIENTO_ID_FIELD = "ID_GVA25", ASIENTO_CODE_FIELD = "TIPO_ASIEN", asientoModelColumns = [
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

// src/code.server/infrastucture/auxiliar/models/condicion.model.ts
var CONDICION_TABLE = "GVA01", CONDICION_ID_FIELD = "ID_GVA01", CONDICION_CODE_FIELD = "COND_VTA", condicionModelColumns = [
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

// src/code.server/infrastucture/auxiliar/models/deposito.model.ts
var DEPOSITO_TABLE = "STA22", DEPOSITO_ID_FIELD = "ID_STA22", DEPOSITO_CODE_FIELD = "COD_SUCURS", depositoModelColumns = [
  DEPOSITO_ID_FIELD,
  DEPOSITO_CODE_FIELD,
  "ABASTECE",
  "DIR_SUCURS",
  "NOMBRE_SUC",
  "INHABILITA",
  "SUCURSAL_DESTINO",
  "SINCRONIZA_NEXO_PEDIDOS"
];

// src/code.server/infrastucture/auxiliar/models/perfil.model.ts
var PERFIL_TABLE = "GVA51", PERFIL_ID_FIELD = "ID_GVA51", PERFIL_CODE_FIELD = "COD_PERFIL", perfilModelColumns = [
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

// src/code.server/infrastucture/auxiliar/models/talonario.model.ts
var TALONARIO_TABLE = "GVA43", TALONARIO_CODE_FIELD = "TALONARIO", TALONARIO_ID_FIELD = "ID_GVA43", TALONARIO_ID2_FIELD = "TALON_PED", talonarioModelColumns = [
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

// src/code.server/infrastucture/auxiliar/models/transporte.model.ts
var TRANSPORTE_TABLE = "GVA24", TRANSPORTE_ID_FIELD = "ID_GVA24", TRANSPORTE_CODE_FIELD = "COD_TRANSP", transporteModelColumns = [
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
], TRANSPORTE_NAME_COLUMNS = ["NOMBRE_TRA"];

// src/code.server/infrastucture/user/models/vendedor.model.ts
var VENDEDOR_TABLE = "GVA23", VENDEDOR_ID_FIELD = "ID_GVA23", VENDEDOR_CODE_FIELD = "COD_VENDED", vendedorModelColumns = [
  VENDEDOR_ID_FIELD,
  VENDEDOR_CODE_FIELD,
  "NOMBRE_VEN",
  "INHABILITA"
], VENDEDOR_NAME_COLUMNS = ["NOMBRE_VEN"], fullVendedorModelColumns = [
  ...vendedorModelColumns,
  "PORC_COMIS",
  "TIPO_DOC",
  "NRO_DOC",
  "DOM_VENDED",
  "COD_POSTAL",
  "LOCALIDAD",
  "COD_PROVIN",
  "TELEFONO",
  "E_MAIL",
  "ID_TIPO_DOCUMENTO_GV",
  "COD_GVA18",
  "ID_GVA18"
];

// src/code.server/infrastucture/user/models/cliente.model.ts
var CLIENTE_TABLE = "GVA14", CLIENTE_ID_FIELD = "ID_GVA14", CLIENTE_CODE_FIELD = "COD_CLIENT", CLIENTE_CODE2_FIELD = "COD_CLIENTE", clienteModelColumns = [
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
], CLIENTE_NAME_COLUMNS = ["RAZON_SOCI", "NOM_COM"], fullClienteModelColumns = [
  ...clienteModelColumns,
  "CUIT",
  "N_IMPUESTO",
  "N_ING_BRUT",
  "E_MAIL",
  "CALLE",
  "DOMICILIO",
  "C_POSTAL",
  "CIUDAD",
  "COD_ZONA",
  "COD_PROVIN",
  "TELEFONO_1",
  "TELEFONO_2"
];

// src/code.server/infrastucture/auxiliar/models/direccion.model.ts
var DIRECCION_TABLE = "DIRECCION_ENTREGA", DIRECCION_ID_FIELD = "ID_DIRECCION_ENTREGA", DIRECCION_CODE_FIELD = "COD_DIRECCION_ENTREGA", direccionModelColumns = [
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

// src/code.server/infrastucture/pedido/models/pedido.model.ts
var PEDIDO_TABLE = "GVA21", PEDIDO_ID_FIELD = "ID_GVA21", PEDIDO_CODE_FIELD = "NRO_PEDIDO", LEYENDA_FIELD_LENGTH = 60, pedidoModelColumns = [
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
  "COMENTARIO",
  "LEYENDA_4",
  "LEYENDA_5",
  "TOTAL_PEDI",
  "PORC_DESC"
], extendedPedidoModelColumns = [
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
], fullPedidoModelColumns = [
  ...extendedPedidoModelColumns,
  "APRUEBA",
  "CIRCUITO",
  "COMP_STK",
  "COTIZ",
  "EXPORTADO",
  "FECHA_APRU",
  "HORA_APRUE",
  "ID_EXTERNO",
  "LEYENDA_1",
  "LEYENDA_2",
  "LEYENDA_3",
  "MON_CTE",
  "N_REMITO",
  "NRO_O_COMP",
  "NRO_SUCURS",
  "ORIGEN",
  "REVISO_FAC",
  "REVISO_PRE",
  "REVISO_STK",
  "MOTIVO",
  "HORA",
  "COD_CLASIF",
  "TAL_PE_ORI",
  "NRO_PE_ORI",
  "FECHA_INGRESO",
  "HORA_INGRESO",
  "USUARIO_INGRESO",
  "TERMINAL_INGRESO",
  "FECHA_ULTIMA_MODIFICACION",
  "HORA_ULTIMA_MODIFICACION",
  "USUA_ULTIMA_MODIFICACION",
  "TERM_ULTIMA_MODIFICACION",
  "ID_DIRECCION_ENTREGA",
  "ES_PEDIDO_WEB",
  "WEB_ORDER_ID",
  "FECHA_O_COMP",
  "ACTIVIDAD_COMPROBANTE_AFIP",
  "ID_ACTIVIDAD_EMPRESA_AFIP",
  "TIPO_DOCUMENTO_PAGADOR",
  "NUMERO_DOCUMENTO_PAGADOR",
  "USUARIO_TIENDA",
  "TIENDA",
  "ORDER_ID_TIENDA",
  "NRO_OC_COMP",
  "TOTAL_DESC_TIENDA",
  "TIENDA_QUE_VENDE",
  "PORCEN_DESC_TIENDA",
  "USUARIO_TIENDA_VENDEDOR",
  "ID_NEXO_PEDIDOS_ORDEN",
  // "ID_GVA24", TRANSPORTE_ID_FIELD
  "ID_GVA38",
  "ID_GVA43_TALON_PED",
  "ID_GVA81",
  "ID_SUCURSAL",
  "METODO_EXPORTACION",
  "NRO_SUCURSAL_DESTINO_PEDIDO"
];

// src/code.server/infrastucture/settings/settings.service.ts
import path4 from "path";

// src/code.server/infrastucture/paths/index.ts
import envPaths from "env-paths";

// src/config/app.ts
var APP_NAME = "DXTango";

// src/code.server/infrastucture/paths/index.ts
var appPaths = envPaths(APP_NAME.toLowerCase()), configPath = appPaths.config, dataPath = appPaths.data, logPath = appPaths.log, tempPath = appPaths.temp, cachePath = appPaths.cache;

// src/@core/dto/index.ts
var DTO = class {
  constructor(input) {
    this.data = this.validate(input);
  }
};

// src/code.server/infrastucture/settings/consts/index.ts
import path3 from "path";
var DEFAULT_DB_HOST = "localhost", DEFAULT_DB_PORT = 1433, DEFAULT_DB_USER = "sa", DEFAULT_DB_PASSWORD = "Axoft1988", DEFAULT_DB_CONNECTION_TIMEOUT_SECONDS = 30, DEFAULT_TANGO_DICTIONARY = "Diccionario", DEFAULT_SMTP_HOST = "localhost", DEFAULT_SMTP_PORT = 587, DEFAULT_SMTP_USE_TLS = !1, DEFAULT_AUTH_EXPIRATION_DAYS = 365, DEFAULT_USER_WARNING_MESSAGE_TITLE = "Atenci\xF3n", DEFAULT_USER_WARNING_MESSAGE_CONTENT = "Comun\xEDquese con el administrador", DEFAULT_USER_DISABLED_MESSAGE_TITLE = "Atenci\xF3n", DEFAULT_USER_DISABLED_MESSAGE_CONTENT = "Usuario deshabilitado. Comun\xEDquese con el administrador", DEFAULT_ADMIN_NAME = "Administrador", DEFAULT_ADMIN_PASSWORD = "admin", DEFAULT_PROGRAM_HOST = "localhost", DEFAULT_PROGRAM_PORT = 80, DEFAULT_PROGRAM_DISABLE_CACHE = !1, DEFAULT_PROGRAM_DOWNLOAD_PATH = path3.join(dataPath, "downloads"), DEFAULT_PROGRAM_DISABLE_SYSTEM_FILE = path3.join(process.cwd(), "disable_system.txt");

// src/code.server/infrastucture/settings/dtos/storedProgramConfig.ts
var storedProgramConfigSchema = {
  host: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_PROGRAM_HOST)),
  port: (v) => tryVO(() => new VOTCPPort(v ?? DEFAULT_PROGRAM_PORT), new VOTCPPort(DEFAULT_PROGRAM_PORT)),
  disable_cache: (v) => tryVO(() => new VOBoolean(v ?? DEFAULT_PROGRAM_DISABLE_CACHE), new VOBoolean(DEFAULT_PROGRAM_DISABLE_CACHE)),
  downloads_path: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_PROGRAM_DOWNLOAD_PATH)),
  disable_system_file: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_PROGRAM_DISABLE_SYSTEM_FILE))
}, StoredProgramConfigDTO = class extends DTO {
  validate(input) {
    return validateInput(storedProgramConfigSchema, input);
  }
  toUnsafe() {
    return this.data;
  }
};

// src/domain/db/validation/index.ts
function isMSSqlName(v) {
  if (typeof v != "string" || v.length < 1)
    return !1;
  let firstChar = v[0];
  return firstChar >= "0" && firstChar <= "9" ? !1 : /^[A-Za-z0-9_]*$/.test(v);
}
function isMSSqlDBName(v) {
  return isMSSqlName(v) ? typeof v == "string" && v[0] !== "_" : !1;
}

// src/domain/db/value_objects/vo_mssql_db_name.ts
var VOMSSqlDBName = class extends ValueObject {
  validate(rawValue) {
    if (typeof rawValue == "string") {
      let value = rawValue.trim();
      if (isMSSqlDBName(rawValue))
        return value;
    }
    this.throwError(rawValue);
  }
};

// src/code.server/infrastucture/settings/dtos/storedDBSettings.ts
var storedDBSettingsSchema = {
  db_host: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_DB_HOST)),
  db_port: (v) => tryVO(() => new VOTCPPort(v ?? DEFAULT_DB_PORT), new VOTCPPort(DEFAULT_DB_PORT)),
  db_user: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_DB_USER)),
  db_password: (v) => tryVO(() => new VOString(v?.trim()), new VOString(DEFAULT_DB_PASSWORD)),
  db_connection_timeout_seconds: (v) => tryVO(
    () => new VOIntegerRange(v, 0, 300),
    new VOIntegerRange(DEFAULT_DB_CONNECTION_TIMEOUT_SECONDS, 0, 300)
  ),
  tango_dictionary: (v) => tryVO(() => new VOMSSqlDBName(v), new VOMSSqlDBName(DEFAULT_TANGO_DICTIONARY)),
  tango_active_company: (v) => tryVO(() => new VOMSSqlDBName(v), new VOString(""))
}, StoredDBSettingsDTO = class extends DTO {
  validate(input) {
    return validateInput(storedDBSettingsSchema, input);
  }
  toUnsafe() {
    return this.data;
  }
};

// src/code.server/infrastucture/auth/utils.ts
import md52 from "md5";

// src/domain/auth/validation/index.ts
import validator7 from "validator";
var ADMIN_USERNAME = "admin";
var AUTH_DEVICE_ID_BYTES = 128 / 8;

// src/@core/entity/index.ts
var Entity = class {
  constructor(id) {
    this.id = id;
  }
  parentToUnsafe() {
    return {
      id: this.id.valueOf()
    };
  }
};
var RootEntity = class extends Entity {
};

// src/domain/user/transformation/index.ts
function userRoleToString(value) {
  try {
    return enumToString(UserRole, value);
  } catch {
    throw new ValidationException(`Invalid user role value: ${value}`);
  }
}
function stringToUserRole(value) {
  try {
    return stringToEnum(UserRole, value);
  } catch {
    throw new ValidationException(`Invalid user role string: ${valueToString(value, !0)}`);
  }
}
function userRoleToNumber(role) {
  switch (role) {
    case 0 /* customer */:
      return 0;
    case 1 /* vendor */:
      return 1;
    case 2 /* admin */:
      return 2;
  }
  throw new ValidationException(`Invalid user role: ${valueToString(role, !0)}`);
}
function numberToUserRole(value) {
  switch (value) {
    case 0:
      return 0 /* customer */;
    case 1:
      return 1 /* vendor */;
    case 2:
      return 2 /* admin */;
  }
  throw new ValidationException(`Invalid user role number: ${valueToString(value, !0)}`);
}

// src/domain/user/value_objects/vo_user_role.ts
var VOUserRole = class extends ValueObject {
  validate(value) {
    try {
      if (typeof value == "string")
        return stringToUserRole(value);
      if (isValidEnumValue(UserRole, value))
        return value;
    } catch {
    }
    this.throwError(value);
  }
  toString() {
    return userRoleToString(this.value);
  }
  isAdmin() {
    return this.value.valueOf() == 2 /* admin */;
  }
  isVendor() {
    return this.value.valueOf() == 1 /* vendor */;
  }
  isCustomer() {
    return this.value.valueOf() == 0 /* customer */;
  }
};

// src/domain/user/validation/index.ts
function isUserName(value) {
  let re = /^[a-zA-Z0-9_]+$/iu;
  return typeof value == "string" && value.length >= 2 && value.length <= 60 && re.test(value);
}

// src/domain/user/value_objects/vo_user_name.ts
var VOUserName = class extends ValueObject {
  validate(rawValue) {
    if (typeof rawValue == "string") {
      let value = rawValue.trim();
      if (isUserName(value))
        return value;
    }
    this.throwError(rawValue);
  }
};

// src/domain/user/entities/user.ts
var UserEntity = class extends RootEntity {
  constructor(unsafe) {
    super(new VOInteger(unsafe.id));
    let {
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
    if (this.username = new VOUserName(username), this.screenName = new VOString(screen_name), typeof email == "string" && (this.email = new VOString(email.trim() !== "" ? new VOEmailAddress(email).valueOf() : "")), this.passwordHash = new VOMD5(password_hash), this.role = new VOUserRole(numberToUserRole(role)), this.habilitadoEnDXT = new VOBoolean(habilitado_en_dxt), this.puedeCrearPedido = new VOBoolean(puede_crear_pedido), this.puedeEditarPedido = new VOBoolean(puede_editar_pedido), this.puedeAnularPedido = new VOBoolean(puede_anular_pedido), this.borrarPedidoAlAnular = new VOBoolean(borrar_pedido_al_anular), this.perfilFacturacionId = new VOUInt32(perfil_facturacion_id), this.aprobarPedidoAlCrear = new VOBoolean(aprobar_pedido_al_crear), this.verPedidosCumplidos = new VOBoolean(ver_pedidos_cumplidos), this.diaDeEntrega = new VOInteger(dia_de_entrega), this.verSinPrecio = new VOBoolean(ver_sin_precio), this.mostrarMensajeDeAdvertencia = new VOBoolean(mostrar_mensaje_de_advertencia), this.timestampModificacion = new VOInteger(timestamp_modificacion), !this.role.isAdmin() && tango_id == null)
      throw new DXTException(
        new DXTError(16e3 /* UNPROCESSABLE_ENTITY */, {
          extra: "tango_id missing in UserEntity"
        })
      );
    this.tangoId = tango_id != null ? new VOUInt32(tango_id) : void 0, this.habilitadoEnTango = habilitado_en_tango != null ? new VOBoolean(habilitado_en_tango) : void 0, this.vendedorId = vendedor_id != null ? new VOUInt32(vendedor_id) : void 0, this.idListaAlternativa = id_lista_alternativa != null ? new VOUInt32(id_lista_alternativa) : void 0, this.bonificacionListaAlternativa = bonificacion_lista_alternativa != null ? new VOPositiveNumber(bonificacion_lista_alternativa) : void 0, this.universalId = new VOHexadecimal(universal_id.replaceAll("-", ""));
  }
  toUnsafe() {
    return {
      ...this.parentToUnsafe(),
      username: this.username.valueOf(),
      tango_id: this.tangoId?.valueOf(),
      habilitado_en_tango: this.habilitadoEnTango?.valueOf(),
      screen_name: this.screenName.valueOf(),
      email: this.email?.valueOf() ?? null,
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
      id_lista_alternativa: this.idListaAlternativa?.valueOf(),
      bonificacion_lista_alternativa: this.bonificacionListaAlternativa?.valueOf(),
      universal_id: this.universalId.valueOf()
    };
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
};

// src/code.server/infrastucture/auth/utils.ts
function createAdminUserEntity(email, passwordHash) {
  return new UserEntity({
    id: 0,
    username: ADMIN_USERNAME,
    puede_crear_pedido: !1,
    puede_editar_pedido: !1,
    puede_anular_pedido: !0,
    borrar_pedido_al_anular: !0,
    perfil_facturacion_id: 0,
    aprobar_pedido_al_crear: !1,
    ver_pedidos_cumplidos: !0,
    dia_de_entrega: 0,
    email,
    ver_sin_precio: !0,
    mostrar_mensaje_de_advertencia: !1,
    habilitado_en_dxt: !0,
    screen_name: DEFAULT_ADMIN_NAME,
    role: userRoleToNumber(2 /* admin */),
    password_hash: passwordHash,
    timestamp_modificacion: 0,
    universal_id: "0"
  });
}
async function resolveUserStateException(user, tangoUserNotFoundErrorCode) {
  if (!user.tangoUserExists())
    return new DXTException(tangoUserNotFoundErrorCode);
  let userDisabled = !1, errorCode;
  if (user.habilitadoEnTango?.valueOf() === !1 ? (errorCode = 100006 /* TANGO_USER_DISABLED */, userDisabled = !0) : user.habilitadoEnDXT.valueOf() || (errorCode = 100005 /* DXT_USER_DISABLED */, userDisabled = !0), errorCode != null) {
    let miscSettings = await settingsService.getMiscSettings();
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
}
function getPasswordHash(password) {
  return md52(password).toLocaleLowerCase();
}

// src/code.server/infrastucture/settings/dtos/storedMiscSettings.ts
var storedMiscSettingsSchema = {
  smtp_host: (v) => tryVO(() => new VOHost(v), new VOHost(DEFAULT_SMTP_HOST)),
  smtp_username: (v) => new VOString(typeof v == "string" ? v?.trim() : ""),
  smtp_password: (v) => new VOString(typeof v == "string" ? v?.trim() : ""),
  smtp_port: (v) => tryVO(() => new VOTCPPort(v), new VOTCPPort(DEFAULT_SMTP_PORT)),
  smtp_use_tls: (v) => tryVO(() => new VOBoolean(v ?? DEFAULT_SMTP_USE_TLS), new VOBoolean(DEFAULT_SMTP_USE_TLS)),
  auth_expiration_days: (v) => tryVO(
    () => new VOIntegerRange(v, 1, 365),
    new VOIntegerRange(DEFAULT_AUTH_EXPIRATION_DAYS, 1, 365)
  ),
  user_warning_message_title: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_USER_WARNING_MESSAGE_TITLE)),
  user_warning_message_content: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_USER_WARNING_MESSAGE_CONTENT)),
  user_disabled_message_title: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_USER_DISABLED_MESSAGE_TITLE)),
  user_disabled_message_content: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(DEFAULT_USER_DISABLED_MESSAGE_CONTENT)),
  admin_password_hash: (v) => tryVO(() => new VONotEmptyString(v), new VONotEmptyString(getPasswordHash(DEFAULT_ADMIN_PASSWORD))),
  admin_email: (v) => tryVO(() => new VOString(new VOEmailAddress(v).valueOf()), new VOString(""))
}, StoredMiscSettingsDTO = class extends DTO {
  validate(input) {
    return validateInput(storedMiscSettingsSchema, input);
  }
  toUnsafe() {
    return this.data;
  }
};

// src/code.server/infrastucture/settings/settings.service.ts
import { mkdir, readFile, writeFile } from "fs/promises";
import { parse as parseINI, stringify as stringifyINI } from "ini";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
var programConfigFilename = path4.join(process.cwd(), "dxtango.cfg"), dbIniFilename = path4.join(configPath, "db_settings.ini"), miscIniFilename = path4.join(configPath, "misc_settings.ini");
async function _createDTOFromINI(filename, dtoConstructor) {
  let iniFileContent;
  try {
    iniFileContent = await readFile(filename, { encoding: "utf-8" });
    let settingsInput = parseINI(iniFileContent);
    return dtoConstructor(settingsInput);
  } catch {
    let settings3 = dtoConstructor({});
    return await _saveDTOToINI(filename, settings3), settings3;
  }
}
function _createDTOFromINISync(filename, dtoConstructor) {
  let iniFileContent;
  try {
    iniFileContent = readFileSync(filename, { encoding: "utf-8" });
    let settingsInput = parseINI(iniFileContent);
    return dtoConstructor(settingsInput);
  } catch {
    let settings3 = dtoConstructor({});
    return _saveDTOToINISync(filename, settings3), settings3;
  }
}
async function _saveDTOToINI(filename, dto) {
  let iniFileContent = stringifyINI(dto.toUnsafe());
  return await mkdir(path4.dirname(filename), { recursive: !0 }), await writeFile(filename, iniFileContent, { encoding: "utf-8" }), dto;
}
function _saveDTOToINISync(filename, dto) {
  let iniFileContent = stringifyINI(dto.toUnsafe());
  return mkdirSync(path4.dirname(filename), { recursive: !0 }), writeFileSync(filename, iniFileContent, { encoding: "utf-8" }), dto;
}
var SettingsService = class {
  constructor() {
    this._accessError = null;
    this._programConfig = null;
    this._dbSettings = null;
    this._miscSettings = null;
  }
  async init(ignoreCache) {
    await this.getProgramConfig(ignoreCache), await this.getDBSettings(ignoreCache), await this.getMiscSettings(ignoreCache);
  }
  async getProgramConfig(ignoreCache) {
    return ((ignoreCache ?? !1) || this._programConfig == null) && (this._programConfig = await this._loadProgramConfig()), this._programConfig.data;
  }
  getProgramConfigSync() {
    return (this._programConfig ??= this._loadProgramConfigSync()).data;
  }
  async setProgramConfig(config2) {
    return this._programConfig = await this._saveProgramConfig(config2), this._programConfig.data;
  }
  async getDBSettings(ignoreCache) {
    return ((ignoreCache ?? !1) || this._dbSettings == null) && (this._dbSettings = await this._loadDBSettings()), this._dbSettings.data;
  }
  async setDBSettings(settings3) {
    return this._dbSettings = await this._saveDBSettings(settings3), this._dbSettings.data;
  }
  async getMiscSettings(ignoreCache) {
    return ((ignoreCache ?? !1) || this._miscSettings == null) && (this._miscSettings = await this._loadMiscSettings()), this._miscSettings.data;
  }
  async setMiscSettings(settings3) {
    return this._miscSettings = await this._saveMiscSettings(settings3), this._miscSettings.data;
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
  async _saveDBSettings(settings3) {
    return await _saveDTOToINI(dbIniFilename, settings3);
  }
  async _saveMiscSettings(settings3) {
    return await _saveDTOToINI(miscIniFilename, settings3);
  }
}, settingsService = new SettingsService();

// src/domain/settings/events/index.ts
var _DBSettingsChangedEvent = class extends BusEvent {
  constructor(payload) {
    super(
      _DBSettingsChangedEvent.NAME,
      payload
    );
  }
}, DBSettingsChangedEvent = _DBSettingsChangedEvent;
DBSettingsChangedEvent.NAME = "DB_SETTINGS_CHANGED";
var _MiscSettingsChangedEvent = class extends BusEvent {
  constructor(payload) {
    super(
      _MiscSettingsChangedEvent.NAME,
      payload
    );
  }
}, MiscSettingsChangedEvent = _MiscSettingsChangedEvent;
MiscSettingsChangedEvent.NAME = "DB_SETTINGS_CHANGED";

// src/code.server/infrastucture/db/index.ts
import knex from "knex";
import { TYPES } from "tedious";
var TDBProvider = class {
  constructor() {
    this.connectionChangeRequired = 2 /* fullReload */;
  }
  cleanConnectionError() {
    this._lastConnectionError = void 0;
  }
  _throwConnectionError(dxErrorCode, error) {
    throw this._lastConnectionError = new DXTException(dxErrorCode, error?.message?.toString()), this._lastConnectionError;
  }
  async initializeKnex(dbName, dbSettings, unknownDBError) {
    let originalConnectionChangeRequired = this.connectionChangeRequired;
    this.connectionChangeRequired = 0 /* none */;
    let preKnexInstance = this._getKnexInstance(dbSettings);
    try {
      let connectionCheck = await preKnexInstance.raw("select (1+1) as two");
      Array.isArray(connectionCheck) && connectionCheck.length > 0 && connectionCheck[0]?.two?.toString() === "2" || this._throwConnectionError(200001 /* TANGO_DB_ACCESS_ERROR */);
    } catch (e) {
      this._throwConnectionError(200001 /* TANGO_DB_ACCESS_ERROR */, e);
    }
    try {
      let result = await preKnexInstance.raw(`use ${dbName}`);
    } catch (e) {
      this._throwConnectionError(unknownDBError, e);
    }
    this.connectionChangeRequired = originalConnectionChangeRequired, await preKnexInstance.destroy();
    try {
      return this._getKnexInstance(dbSettings, dbName);
    } catch (e) {
      this._throwConnectionError(unknownDBError, e);
    }
  }
  _getKnexInstance(dbSettings, dbName) {
    let { db_host, db_port, db_user, db_password, db_connection_timeout_seconds } = dbSettings;
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
            if (typeof value == "string")
              return {
                type: TYPES.VarChar,
                value
              };
          }
        }
      },
      pool: {
        min: 50,
        max: 100
      }
    }).on("query-error", function(error, obj) {
      isDevelopment() && (console.error(stringifyJSON(error)), console.error(stringifyJSON(obj)));
    });
  }
};
function dbErrorToDXTException(e) {
  if (e instanceof DXTException)
    return e;
  if (!isRealObject(e))
    return new DXTException(new DXTError(
      0 /* UNEXPECTED_ERROR */,
      {
        extra: typeof e?.toString == "function" ? e?.toString() : void 0
      }
    ));
  let error = e;
  if (error.code !== "EREQUEST")
    return new DXTException(new DXTError(
      899103 /* FATAL_UNKNOWN_DB_ERROR */,
      {
        extra: error.toString()
      }
    ));
  let sqlServerError = error.number ?? 0, errorCode;
  switch (sqlServerError) {
    case 2627:
      errorCode = 14001 /* DUPLICATED_TABLE_RECORD */;
      break;
    default:
      errorCode = 899103 /* FATAL_UNKNOWN_DB_ERROR */;
  }
  return new DXTException(new DXTError(
    errorCode,
    {
      extra: `[Sql error=${sqlServerError}] [${error.toString()}]`
    }
  ));
}

// src/code.server/infrastucture/dxt/user/models/dxt_user.model.ts
var dxtUserTableCreationFieldsSQL = {
  tango_id: "D_ID NOT NULL",
  username: `varchar(${60}) NOT NULL`,
  puede_crear_pedido: "bit NOT NULL",
  puede_editar_pedido: "bit NOT NULL",
  puede_anular_pedido: "bit NOT NULL",
  borrar_pedido_al_anular: "bit NOT NULL",
  perfil_facturacion_id: "D_ID NOT NULL",
  aprobar_pedido_al_crear: "bit NOT NULL",
  ver_pedidos_cumplidos: "bit NOT NULL",
  dia_de_entrega: "int NOT NULL",
  email: `varchar(${EMAIL_MAX_LENGTH})`,
  ver_sin_precio: "bit NOT NULL",
  mostrar_mensaje_de_advertencia: "bit NOT NULL",
  habilitado_en_dxt: "bit NOT NULL",
  timestamp_modificacion: "bigint NOT NULL",
  id_lista_alternativa: "D_ID NULL",
  bonificacion_lista_alternativa: "DECIMAL_TG NULL",
  universal_id: "uniqueidentifier DEFAULT newid() NOT NULL"
};

// src/code.server/infrastucture/dxt/user/models/dxt_cliente.model.ts
var DXT_CLIENTE_TABLE = "dxt_cliente", DXT_CLIENTE_ID_FIELD = "dxt_cliente_id", dxtClienteTableCreationFieldsSQL = {
  dxt_cliente_id: "int IDENTITY(1,1) NOT NULL",
  password_hash: `varchar(${MD5_LENGTH}) NOT NULL`,
  ...dxtUserTableCreationFieldsSQL
}, dxtClienteTableCreationIndexesSQL = [
  "CONSTRAINT pk_dxt_cliente_username UNIQUE (username)",
  "CONSTRAINT pk_dxt_cliente_id PRIMARY KEY (dxt_cliente_id)"
], dxtClienteTablePostCommandsSQL = [
  "CREATE INDEX ix_dxt_cliente_tango_id ON dbo.dxt_cliente (tango_id);"
];

// src/code.server/infrastucture/dxt/user/models/dxt_vendedor.model.ts
var DXT_VENDEDOR_TABLE = "dxt_vendedor", DXT_VENDEDOR_ID_FIELD = "dxt_vendedor_id", dxtVendedorTableCreationFieldsSQL = {
  dxt_vendedor_id: "int IDENTITY(1,1) NOT NULL",
  password_hash: `varchar(${MD5_LENGTH}) NOT NULL`,
  ...dxtUserTableCreationFieldsSQL
}, dxtVendedorTableCreationIndexesSQL = [
  "CONSTRAINT pk_dxt_vendedor_username UNIQUE (username)",
  "CONSTRAINT pk_dxt_vendedor_id PRIMARY KEY (dxt_vendedor_id)"
];

// src/domain/db/events/index.ts
var _DBTablesChangedEvent = class extends BusEvent {
  constructor(payload) {
    super(
      _DBTablesChangedEvent.NAME,
      payload
    );
  }
}, DBTablesChangedEvent = _DBTablesChangedEvent;
DBTablesChangedEvent.NAME = "DB_TABLES_CHANGED";

// src/code.server/infrastucture/cache/index.ts
var isCacheDisabledGlobally = tryVO(() => new VOBoolean(settingsService.getProgramConfigSync()?.disable_cache), new VOBoolean(!1)).valueOf(), MemoryCache = class {
  constructor(_cacheOwnerStatus) {
    this._cacheOwnerStatus = _cacheOwnerStatus;
    this._byIdCache = /* @__PURE__ */ new Map();
    this._metadataCache = /* @__PURE__ */ new Map();
    isCacheDisabledGlobally || (eventBus.on(DBSettingsChangedEvent.NAME, this.onDBSettingsChanged.bind(this)), eventBus.on(DBTablesChangedEvent.NAME, this.onTablesChanged.bind(this)));
  }
  _consoleLog(...args) {
    if (isDevelopment()) {
      let tableName = this._cacheOwnerStatus.getTableName()?.toUpperCase();
      console.info(`[${tableName}] `, ...args);
    }
  }
  onDBSettingsChanged(event) {
    let { newDictionary, newCompany, resetCache } = event.payload;
    (newDictionary || newCompany || resetCache) && this.clear();
  }
  onTablesChanged(event) {
    let { payload: tablesChanged } = event, dependencies = this._cacheOwnerStatus.getDependencies();
    tablesChanged.findIndex((table) => dependencies.includes(table)) >= 0 && this.clear();
  }
  async isEnabled() {
    return !isCacheDisabledGlobally && await this._cacheOwnerStatus.isReady();
  }
  async clear() {
    this._byIdCache.clear(), this._metadataCache.clear(), this._consoleLog("Cache.clear()");
  }
  async getByIdBuffer() {
    if (await this.isEnabled())
      return this._byIdCache;
  }
  async getMetadata(id) {
    if (!await this.isEnabled())
      return;
    let data = this._metadataCache.get(id);
    return data != null && this._consoleLog(`Cache.getMetadata("${id}")`), data;
  }
  async setMetadata(id, data) {
    await this.isEnabled() && (this._consoleLog(`Cache.setMetadata("${id}")`), this._metadataCache.set(id, data));
  }
  async setById(id, data) {
    await this.isEnabled() && (this._consoleLog(`Cache.setById("${id}")`), this._byIdCache.set(id, data));
  }
  async getById(id) {
    if (!await this.isEnabled())
      return;
    let data = this._byIdCache.get(id);
    return data != null && this._consoleLog(`Cache.getById("${id}")`), data;
  }
  async invalidateById(id) {
    await this.isEnabled() && (isDevelopment() && console.info(`Cache.invalidateById("${id}")`), this._byIdCache.delete(id));
  }
};

// src/code.server/infrastucture/dxt/articulo/models/dxt_articulo_print_list.model.ts
var DXT_ARTICULO_PRINT_LIST_TABLE = "dxt_articulo_print_list";

// src/code.server/infrastucture/dxt/articulo/models/dxt_list_articulo.model.ts
var DXT_LIST_ARTICULO_CODE_FIELD = "codigo_articulo", DXT_LIST_ARTICULO_ID_FIELD = "id", dxtArticuloListCreationFieldsSQL = {
  [DXT_LIST_ARTICULO_ID_FIELD]: "int IDENTITY(0,1) NOT NULL",
  [DXT_LIST_ARTICULO_CODE_FIELD]: "varchar(100) COLLATE Latin1_General_BIN NOT NULL",
  params: "varchar(500) COLLATE Latin1_General_BIN NULL"
}, dxtArticuloListCreationIndexesSQL = [];

// src/code.server/infrastucture/dxt/articulo/models/dxt_articulo_edit_list.model.ts
var DXT_ARTICULO_EDIT_LIST_TABLE = "dxt_articulo_edit_list";

// src/code.server/infrastucture/dictionary/models/dataset.model.ts
var DATASET_TABLE = "Dataset", DATASET_ID_FIELD = "IDDataset";

// src/code.server/infrastucture/dictionary/models/campo.model.ts
var CAMPO_TABLE = "Campo";

// src/code.server/infrastucture/dictionary/models/empresa.model.ts
var EMPRESA_TABLE = "Empresa";

// src/code.server/infrastucture/dictionary/dictionary.repository.ts
var DictionaryRepository = class extends TDBProvider {
  constructor() {
    super();
    this._tangoCompanies = /* @__PURE__ */ new Map();
    eventBus.on(DBSettingsChangedEvent.NAME, this.onDBSettingsChanged.bind(this));
  }
  onDBSettingsChanged(event) {
    let { newDictionary, newCompany, passiveDBChanges } = event.payload;
    newDictionary || newCompany ? this.connectionChangeRequired = 2 /* fullReload */ : passiveDBChanges && (this.connectionChangeRequired = 1 /* passiveRefresh */);
  }
  async getDictionary() {
    if (this.connectionChangeRequired === 0 /* none */ && this._knexInstance)
      return this._knexInstance;
    let originalKnexInstance = this._knexInstance;
    this._knexInstance = void 0, this._numeroPedidoLongitud = void 0, this._numeroPedidoRange = void 0, this._tangoCompanies.clear(), await originalKnexInstance?.destroy();
    let settings3 = await settingsService.getDBSettings();
    this.connectionChangeRequired === 2 /* fullReload */ && this.cleanConnectionError();
    let newKnexInstance = await this.initializeKnex(settings3.tango_dictionary, settings3, 200003 /* TANGO_DICTIONARY_ACCESS_ERROR */);
    return this.connectionChangeRequired === 2 /* fullReload */ && await this._prepareDictionary(newKnexInstance), this._knexInstance = newKnexInstance, this.connectionChangeRequired = 0 /* none */, this._knexInstance;
  }
  async _prepareDictionary(knex2) {
    try {
      await this._prepareNumeroPedido(knex2), await this._loadCompaniesFromDictionary(knex2);
    } catch (e) {
      throw new DXTException(200004 /* TANGO_DICTIONARY_INITIALIZATION_ERROR */, e?.message);
    }
  }
  async _prepareNumeroPedido(k) {
    this._numeroPedidoRange = void 0, this._numeroPedidoLongitud = void 0;
    let result = await k(DATASET_TABLE).first("*").where({ Dataset: PEDIDO_TABLE });
    if (result == null)
      throw new DXTException(0 /* UNEXPECTED_ERROR */, "DictionaryProvider._prepareNumeroPedido");
    let datasetId = result[DATASET_ID_FIELD], campos = await k(CAMPO_TABLE).select("*").where({
      [DATASET_ID_FIELD]: datasetId,
      Campo: "N_REMITO"
    });
    if (campos.length === 0)
      throw new Error("Error");
    if (campos.length > 1)
      throw new Error("Error");
    let nroPedidoLongitud = campos[0].Longitud;
    if (nroPedidoLongitud < 12)
      throw new DXTException(
        0 /* UNEXPECTED_ERROR */,
        `Error en longitud para el n\xFAmero de pedido (${nroPedidoLongitud}), es menor a ${12}.`
      );
    if (nroPedidoLongitud > 14)
      throw new DXTException(
        0 /* UNEXPECTED_ERROR */,
        `Error en longitud para el n\xFAmero de pedido (${nroPedidoLongitud}), es mayor a ${14}.`
      );
    this._numeroPedidoLongitud = nroPedidoLongitud, this._numeroPedidoRange = {
      min: 1,
      max: Number(BigInt(10) ** BigInt(nroPedidoLongitud - 1) - BigInt(1))
    };
  }
  async _loadCompaniesFromDictionary(k) {
    this._tangoCompanies.clear();
    let empresas = await k(EMPRESA_TABLE).select("*"), currentCompany = (await settingsService.getDBSettings()).tango_active_company;
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
    return await this.getDictionary(), !0;
  }
  async getCompanies() {
    return await this.getDictionary(), Array.from(this._tangoCompanies.values());
  }
  async getNumeroPedidoLongitud() {
    if (await this.getDictionary(), this._numeroPedidoLongitud == null)
      throw new DXTException(0 /* UNEXPECTED_ERROR */, "DictionaryProvider.getNumeroPedidoLongitud");
    return this._numeroPedidoLongitud;
  }
  async getNumeroPedidoRange() {
    if (await this.getDictionary(), this._numeroPedidoRange == null)
      throw new DXTException(0 /* UNEXPECTED_ERROR */, "DictionaryProvider.getNumeroPedidoRange");
    return this._numeroPedidoRange;
  }
  async formatNumeroPedido(id) {
    let idStr = id.toString(), longitudMaxima = await this.getNumeroPedidoLongitud() - 1;
    if (idStr.length > longitudMaxima)
      throw new DXTException(
        0 /* UNEXPECTED_ERROR */,
        `La longitud del n\xFAmero de pedido (${idStr}) es mayor a ${longitudMaxima}.`
      );
    return ` ${idStr.padStart(longitudMaxima, "0")}`;
  }
}, dictionaryRepository = new DictionaryRepository();

// src/domain/pedido/value_objects/vo_order_rows.ts
var VOOrderRows = class extends ValueObject {
  validate(input) {
    return Array.isArray(input) || this.throwError(input, "Input is not an array"), input.map((e) => {
      isObj(e) || this.throwError(input);
      let { id, quantity } = e;
      return isAnInteger(id) || this.throwError(input, "Id field missing or invalid"), isANumber(quantity) || this.throwError(input, "Quantity field missing or invalid"), { id, quantity };
    });
  }
};

// src/domain/pedido/inputs/pedido.ts
var COMENTARIOS_MAX_LENGTH = 120, DESCRIPCION_MAX_LENGTH = 120, baseInputSchema = {
  comentarios: (v) => new VOTrimmedString(v, COMENTARIOS_MAX_LENGTH),
  bonificacion: (v) => new VOUInt32(v),
  id_transporte: (v) => new VOUInt32(v),
  id_deposito: (v) => new VOUInt32(v),
  id_condicion: (v) => new VOUInt32(v),
  id_asiento: (v) => new VOUInt32(v),
  id_talonario: (v) => new VOUInt32(v),
  id_direccion: (v) => new VOUInt32(v),
  renglones: (v) => new VOOrderRows(v)
}, baseDraftInputSchema = {
  ...baseInputSchema,
  descripcion: (v) => new VONotEmptyString(v, DESCRIPCION_MAX_LENGTH)
}, baseOrderInputSchema = {
  ...baseInputSchema,
  fecha_alta: (v) => new VODate(v),
  fecha_entrega: (v) => new VODate(v)
}, updateDraftInputSchema = {
  ...baseDraftInputSchema,
  id_pedido: (v) => new VOUInt32(v)
}, createDraftInputSchema = {
  ...baseDraftInputSchema,
  id_cliente: (v) => new VOUInt32(v)
}, updateOrderInputSchema = {
  ...baseOrderInputSchema,
  id_pedido: (v) => new VOUInt32(v)
}, createOrderInputSchema = {
  ...baseOrderInputSchema,
  id_cliente: (v) => new VOUInt32(v)
}, validateUpdateDraftInput = (input) => validateInput(updateDraftInputSchema, input), validateCreateDraftInput = (input) => validateInput(createDraftInputSchema, input);
function _extraValidation(values) {
  let { fecha_alta, fecha_entrega } = values;
  if (fecha_entrega < fecha_alta)
    throw new DXTException(10011 /* DELIVERY_DATE_IS_EARLIER */);
}
var validateUpdateOrderInput = (input) => validateInput(updateOrderInputSchema, input, (v) => (_extraValidation(v), v)), validateCreateOrderInput = (input) => validateInput(createOrderInputSchema, input, (v) => (_extraValidation(v), v));

// src/code.server/infrastucture/dxt/pedido/models/dxt_pedido_draft.model.ts
var DXT_PEDIDO_DRAFT_CLIENTES_TABLE = "dxt_pedido_draft_clientes", DXT_PEDIDO_DRAFT_VENDEDORES_TABLE = "dxt_pedido_draft_vendedores", dxtPedidoDraftTableCreationFieldsSQL = {
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
  COMENTARIO: `varchar(${DESCRIPCION_MAX_LENGTH}) COLLATE Latin1_General_BIN NOT NULL`,
  COMP_STK: "bit DEFAULT 0 NULL",
  [CONDICION_CODE_FIELD]: "ENTERO_TG DEFAULT 0 NULL",
  COTIZ: "DECIMAL_TG DEFAULT 1 NULL",
  EXPORTADO: "bit DEFAULT 0 NULL",
  FECHA_APRU: "datetime DEFAULT '1800/01/01' NULL",
  FECHA_ENTR: "datetime DEFAULT '1800/01/01' NULL",
  FECHA_PEDI: "datetime DEFAULT '1800/01/01' NULL",
  HORA_APRUE: "varchar(4) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  ID_EXTERNO: "varchar(20) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  LEYENDA_1: "varchar(60) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  LEYENDA_2: "varchar(60) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  LEYENDA_3: "varchar(60) COLLATE Latin1_General_BIN DEFAULT '' NULL",
  LEYENDA_4: `varchar(${LEYENDA_FIELD_LENGTH}) COLLATE Latin1_General_BIN DEFAULT '' NULL`,
  LEYENDA_5: "varchar(60) COLLATE Latin1_General_BIN DEFAULT '' NULL",
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
  USUARIO_INGRESO: "varchar(120) COLLATE Modern_Spanish_CI_AI DEFAULT '' NULL",
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
}, dxtPedidoDraftTableCreationIndexesSQL = (draftTableName) => [
  `CONSTRAINT PK_${draftTableName}_id PRIMARY KEY (${PEDIDO_ID_FIELD})`
], dxtPedidoDraftTablePostCommandsSQL = (draftTableName, draftOwnerColumn) => [
  `CREATE INDEX IX_dxt_pedido_draft_code ON ${draftTableName} (${PEDIDO_CODE_FIELD} ASC);`,
  `CREATE UNIQUE INDEX IX_${draftTableName}_comentario ON ${draftTableName} (${draftOwnerColumn} ASC, COMENTARIO ASC);`,
  `CREATE INDEX IX_dxt_pedido_draft_cliente ON ${draftTableName} (  ${CLIENTE_ID_FIELD} ASC, FECHA_PEDI ASC );`,
  `CREATE INDEX IX_dxt_pedido_draft_vendedor ON ${draftTableName} (  ${VENDEDOR_ID_FIELD} ASC, FECHA_PEDI ASC );`
];

// src/code.server/infrastucture/pedido/models/renglon_pedido.model.ts
var RENGLON_PEDIDO_TABLE = "GVA03", RENGLON_PEDIDO_ID_FIELD = "ID_GVA03", DEPOSITO_CODE2_FIELD = "COD_DEPOSI", renglonPedidoModelColumns = [
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
], fullRenglonPedidoModelColumns = [
  ...renglonPedidoModelColumns,
  "CAN_EQUI_V",
  "DESCUENTO",
  "PEN_REM_FC",
  "PEN_FAC_RE",
  TALONARIO_ID2_FIELD,
  "COD_CLASIF",
  "CANT_A_DES_2",
  "CANT_A_FAC_2",
  "CANT_PEDID_2",
  "CANT_PEN_D_2",
  "CANT_PEN_F_2",
  "PEN_REM_FC_2",
  "PEN_FAC_RE_2",
  "ID_MEDIDA_VENTAS",
  "ID_MEDIDA_STOCK_2",
  "ID_MEDIDA_STOCK",
  "UNIDAD_MEDIDA_SELECCIONADA",
  "COD_ARTICU_KIT",
  "RENGL_PADR",
  "PROMOCION",
  "PRECIO_ADICIONAL_KIT",
  "KIT_COMPLETO",
  "INSUMO_KIT_SEPARADO",
  "DESCUENTO_PARAM",
  "PRECIO_FECHA",
  "FECHA_MODIFICACION_PRECIO",
  "USUARIO_MODIFICACION_PRECIO",
  "TERMINAL_MODIFICACION_PRECIO",
  "ID_NEXO_PEDIDOS_RENGLON_ORDEN",
  "CANT_A_DES_EXPORTADA",
  "CANT_A_FAC_EXPORTADA",
  "CANT_A_DES_2_EXPORTADA",
  "CANT_A_FAC_2_EXPORTADA",
  DEPOSITO_ID_FIELD,
  DEPOSITO_CODE2_FIELD
];

// src/code.server/infrastucture/dxt/pedido/models/dxt_pedido_draft_row.model.ts
var DXT_PEDIDO_DRAFT_ROW_CLIENTES_TABLE = "dxt_pedido_draft_row_clientes", DXT_PEDIDO_DRAFT_ROW_VENDEDORES_TABLE = "dxt_pedido_draft_row_vendedores", dxtPedidoDraftRowTableCreationFieldsSQL = {
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
}, dxtPedidoDraftRowTableCreationIndexesSQL = (draftRowTableName) => [
  `CONSTRAINT PK_${draftRowTableName}_id PRIMARY KEY (${RENGLON_PEDIDO_ID_FIELD})`
], dxtPedidoDraftRowTablePostCommandsSQL = (draftTableName, draftRowTableName) => [
  `CREATE UNIQUE INDEX IX_dxt_pedido_draft_with_order ON ${draftRowTableName} ( ${PEDIDO_ID_FIELD} ASC, N_RENGLON ASC );ALTER TABLE ${draftRowTableName}   ADD CONSTRAINT FK_${draftTableName}_to_row_pedido_draft FOREIGN KEY (${PEDIDO_ID_FIELD}) REFERENCES ${draftTableName}(${PEDIDO_ID_FIELD});`
];

// src/code.server/infrastucture/company/company_init.provider.ts
var CompanyInitProvider = class extends TDBProvider {
  constructor() {
    super();
    this._dbChanges = /* @__PURE__ */ new Map();
    eventBus.on(DBSettingsChangedEvent.NAME, this.onDBSettingsChanged.bind(this));
  }
  onDBSettingsChanged(event) {
    event.payload.newCompany ? this.connectionChangeRequired = 2 /* fullReload */ : this.connectionChangeRequired = 1 /* passiveRefresh */;
  }
  async getCompany() {
    let settings3 = await settingsService.getDBSettings(), companyDBName = settings3.tango_active_company;
    if (await dictionaryRepository.isReadyOrThrow(), this.connectionChangeRequired === 0 /* none */ && this._knexInstance)
      return await this._queryChangesAndContinue(this._knexInstance, companyDBName);
    let originalKnexInstance = this._knexInstance;
    if (this._knexInstance = void 0, this._cleanDBChanges(), await originalKnexInstance?.destroy(), companyDBName === "")
      throw new DXTException(200005 /* TANGO_COMPANY_NOT_SELECTED */);
    this.connectionChangeRequired === 2 /* fullReload */ && this.cleanConnectionError();
    let newKnexInstance = await this.initializeKnex(companyDBName, settings3, 200007 /* TANGO_COMPANY_ACCESS_ERROR */);
    return this.connectionChangeRequired === 2 /* fullReload */ && await this._prepareCompany(newKnexInstance), this._knexInstance = newKnexInstance, this.connectionChangeRequired = 0 /* none */, await this._queryChangesAndContinue(this._knexInstance, companyDBName);
  }
  _cleanDBChanges() {
    this._dbChanges.clear();
  }
  async _queryChangesAndContinue(knexInstance, dbName) {
    if (isCacheDisabledGlobally)
      return knexInstance;
    let result = await knexInstance.raw(
      "SELECT OBJECT_NAME(OBJECT_ID) AS tableName, user_updates as updates FROM sys.dm_db_index_usage_stats WHERE user_updates>0 and database_id = DB_ID( :dbName )",
      { dbName }
    );
    return this._updateDBChanges(result), knexInstance;
  }
  _updateDBChanges(status) {
    let newStatus = /* @__PURE__ */ new Map();
    status.forEach(({ tableName, updates }) => {
      let updatesNumber = Number.parseInt(updates), newUpdates = (newStatus.get(tableName) ?? 0) + (Number.isFinite(updatesNumber) ? updatesNumber : 0);
      newStatus.set(tableName, newUpdates);
    });
    let tablesWithChanges = [];
    newStatus.forEach((updates, table) => {
      this._dbChanges.get(table) !== updates && tablesWithChanges.push(table);
    }), this._dbChanges = newStatus, tablesWithChanges.length > 0 && (isDevelopment() && console.info("DB CHANGES >>", stringifyJSON(tablesWithChanges)), emitBusEvent(
      new DBTablesChangedEvent(tablesWithChanges)
    ));
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
    ), await this._initializeTable(knex2, DXT_VENDEDOR_TABLE, dxtVendedorTableCreationFieldsSQL, dxtVendedorTableCreationIndexesSQL), await this._initializeTable(knex2, DXT_ARTICULO_PRINT_LIST_TABLE, dxtArticuloListCreationFieldsSQL, dxtArticuloListCreationIndexesSQL), await this._initializeTable(knex2, DXT_ARTICULO_EDIT_LIST_TABLE, dxtArticuloListCreationFieldsSQL, dxtArticuloListCreationIndexesSQL), await this._initializeTable(
      knex2,
      DXT_PEDIDO_DRAFT_CLIENTES_TABLE,
      dxtPedidoDraftTableCreationFieldsSQL,
      dxtPedidoDraftTableCreationIndexesSQL(DXT_PEDIDO_DRAFT_CLIENTES_TABLE),
      dxtPedidoDraftTablePostCommandsSQL(DXT_PEDIDO_DRAFT_CLIENTES_TABLE, CLIENTE_ID_FIELD)
    ), await this._initializeTable(
      knex2,
      DXT_PEDIDO_DRAFT_ROW_CLIENTES_TABLE,
      dxtPedidoDraftRowTableCreationFieldsSQL,
      dxtPedidoDraftRowTableCreationIndexesSQL(DXT_PEDIDO_DRAFT_ROW_CLIENTES_TABLE),
      dxtPedidoDraftRowTablePostCommandsSQL(DXT_PEDIDO_DRAFT_CLIENTES_TABLE, DXT_PEDIDO_DRAFT_ROW_CLIENTES_TABLE)
    ), await this._initializeTable(
      knex2,
      DXT_PEDIDO_DRAFT_VENDEDORES_TABLE,
      dxtPedidoDraftTableCreationFieldsSQL,
      dxtPedidoDraftTableCreationIndexesSQL(DXT_PEDIDO_DRAFT_VENDEDORES_TABLE),
      dxtPedidoDraftTablePostCommandsSQL(DXT_PEDIDO_DRAFT_VENDEDORES_TABLE, VENDEDOR_ID_FIELD)
    ), await this._initializeTable(
      knex2,
      DXT_PEDIDO_DRAFT_ROW_VENDEDORES_TABLE,
      dxtPedidoDraftRowTableCreationFieldsSQL,
      dxtPedidoDraftRowTableCreationIndexesSQL(DXT_PEDIDO_DRAFT_ROW_VENDEDORES_TABLE),
      dxtPedidoDraftRowTablePostCommandsSQL(DXT_PEDIDO_DRAFT_VENDEDORES_TABLE, DXT_PEDIDO_DRAFT_ROW_VENDEDORES_TABLE)
    );
  }
  async _initializeTable(knex2, tableName, fields, indexes, postCommands) {
    let tableExists = !1, tableWithUnknownColumns = !1;
    try {
      let count = await knex2.count().from(tableName);
      tableExists = Array.isArray(count) && count.length > 0;
    } catch (e) {
      isDevelopment() && console.error(e);
    }
    if (tableExists)
      try {
        let requiredFields = Object.keys(fields);
        await knex2.select(...requiredFields).from(tableName).first();
        return;
      } catch (e) {
        isDevelopment() && console.error(e), tableWithUnknownColumns = !0;
      }
    if (tableWithUnknownColumns)
      throw new DXTException(200008 /* TANGO_COMPANY_INITIALIZATION_ERROR */, `Tabla con formato no v\xE1lido: ${tableName}`);
    let allDefinitions = [...Object.entries(fields).map(([field, sql]) => `${field} ${sql}`), ...indexes].join(","), creationSql = `CREATE TABLE ${tableName} (${allDefinitions});`;
    try {
      let result = await knex2.raw(creationSql);
      if (postCommands == null)
        return;
      for (let postCommandSql of postCommands) {
        let result2 = await knex2.raw(postCommandSql);
      }
    } catch (e) {
      throw console.error(e), e;
    }
  }
};

// src/code.server/infrastucture/company/company.provider.ts
var _CompanyProvider = class extends CompanyInitProvider {
  constructor(config2) {
    super();
    this.config = config2;
    let { dependencies, mainTable } = config2, _collectedProviders = [];
    dependencies != null && _collectDependencies(dependencies, _collectedProviders), this._dependencies = [
      mainTable,
      ..._collectedProviders.map((p) => isStr(p) ? p : p.config.mainTable)
    ], this.cache = new MemoryCache(this), eventBus.on(DBSettingsChangedEvent.NAME, this.onDBSettingsChanged.bind(this));
  }
  getTableName() {
    return this.config.mainTable;
  }
  getDependencies() {
    return this._dependencies;
  }
  async isReady() {
    return await this.getCompany(), !0;
  }
  async count() {
    let k = await this.getCompany(), { mainTable } = this.config, data = await k(mainTable).count({ count: "*" });
    if (!(Array.isArray(data) && data.length > 0 && isANumber(data[0].count)))
      throw new DXTException(899100 /* FATAL_DB_QUERY_FAILED */, `CompanyProvider.count() on ${mainTable}`);
    return data[0].count;
  }
  async _getById(id, options) {
    let k = await this.getCompany(), useCache = options?.useCache ?? !0;
    if (useCache) {
      let cachedData = await this.cache.getById(id);
      if (cachedData != null)
        return cachedData;
    }
    let { mainTable, mainIdField, columns } = this.config, data = id != null ? await k(mainTable).first(...columns ?? "*").where(mainIdField, id) : await k(mainTable).first(...columns ?? "*");
    if (data == null)
      return null;
    let result = this.toResult(data);
    return useCache && await this.cache.setById(id, result), result;
  }
  async getMany(columnName, columnValue, options) {
    let k = await this.getCompany(), useCache = options?.useCache ?? !0, first = options?.first ?? !1, cacheKey = this._getByColumnCacheKey(columnName, columnValue, first ? "_FIRST" : "", options);
    if (cacheKey != null) {
      let cachedData = await this.cache.getMetadata(cacheKey);
      if (cachedData != null)
        return cachedData;
    }
    let { mainTable, columns } = this.config, query = k(mainTable);
    first ? query = query.first(...columns ?? "*") : query = query.select(...columns ?? "*");
    let where = options?.where;
    where != null && (query = query.where(where.field, where.value));
    let data = await query.andWhere(columnName, columnValue);
    if (data == null)
      return [];
    let result = Array.isArray(data) ? data.map((m) => this.toResult(m)) : [this.toResult(data)];
    return cacheKey != null && await this.cache.setMetadata(cacheKey, result), result;
  }
  async getOneOrNull(columnName, columnValue, options) {
    let data = await this.getMany(
      columnName,
      columnValue,
      {
        ...options,
        first: !0
      }
    );
    return data.length == 0 ? null : data[0];
  }
  async getOne(columnName, columnValue, options) {
    let result = await this.getOneOrNull(columnName, columnValue, options);
    if (result == null)
      throw new DXTException(11e3 /* NOT_FOUND */);
    return result;
  }
  async getFirstOrNull(options) {
    return await this._getById(void 0, options);
  }
  async getByIdOrNull(id, options) {
    return await this._getById(id, options);
  }
  async getById(id, options) {
    let result = await this.getByIdOrNull(id, options);
    if (result == null)
      throw new DXTException(11e3 /* NOT_FOUND */);
    return result;
  }
  async getFirst(options) {
    let result = await this.getFirstOrNull(options);
    if (result == null)
      throw new DXTException(11e3 /* NOT_FOUND */);
    return result;
  }
  async getAll(options) {
    let cacheKey = this.getAllCacheKey(options);
    if (cacheKey != null) {
      let cachedData = await this.cache.getMetadata(cacheKey);
      if (cachedData)
        return cachedData;
    }
    let { mainTable, columns, sortField } = this.config, query = (await this.getCompany())(mainTable), where = options?.where;
    where != null && (query = query.where(where.field, where.value));
    let whereIn = options?.whereIn;
    whereIn != null && (query = query.whereIn(whereIn.field, whereIn.values)), sortField != null && (query = query.orderBy(sortField)), options?.offset != null && (query = query.offset(options?.offset).limit(options?.limit ?? 10));
    let result = (await query.select(...columns ?? "*")).map((p) => this.toResult(p));
    return cacheKey != null && await this.cache.setMetadata(cacheKey, result), result;
  }
  async deleteById(id) {
    let { mainTable, mainIdField } = this.config;
    if (await (await this.getCompany())(mainTable).where(mainIdField, id).del() <= 0)
      throw new DXTException(11e3 /* NOT_FOUND */);
    await this.cache.invalidateById(id);
  }
  getAllByUserCacheKey(role, tangoUserId, options) {
    if (!(options?.useCache ?? !0))
      return null;
    let { mainTable } = this.config;
    return `${mainTable}_BU_${this._getOptionsCacheKey(options)}_${role}_${tangoUserId ?? "A"}`;
  }
  _getByColumnCacheKey(columnName, columnValue, extraKey, options) {
    if (!(options?.useCache ?? !0))
      return null;
    let finalColumnName = valueToString(columnName?.toString?.()), finalColumnValue = columnValue?.toString() ?? _CompanyProvider._noValueCacheKey, { mainTable } = this.config;
    return `${mainTable}_BC_${this._getOptionsCacheKey(options)}_${extraKey}_${finalColumnName}_${finalColumnValue}`;
  }
  getAllCacheKey(options) {
    if (!(options?.useCache ?? !0))
      return null;
    let { mainTable } = this.config;
    return `${mainTable}_ALL_${this._getOptionsCacheKey(options)}`;
  }
  _getOptionsCacheKey(options) {
    if (options == null)
      return "NO";
    let {
      offset,
      limit,
      where,
      whereIn
    } = options;
    return [
      offset ?? "O",
      limit ?? "L",
      where?.field ?? "W",
      where?.value ?? "V",
      whereIn?.field ?? "I",
      whereIn?.values.join("-") ?? "V"
    ].join("_");
  }
}, CompanyProvider = _CompanyProvider;
CompanyProvider._noValueCacheKey = "NO_VALUE";
function _collectDependencies(providers, collectedProviders) {
  providers.forEach((p) => {
    let providerName = _providerUniqueName(p);
    if (collectedProviders.findIndex((el) => _providerUniqueName(el) == providerName) >= 0 || (collectedProviders.push(p), isStr(p)))
      return;
    let { dependencies } = p.config;
    dependencies != null && _collectDependencies(dependencies, collectedProviders);
  });
}
function _providerUniqueName(p) {
  return isStr(p) ? p : `${p.constructor.name}.${p.config.mainTable}`;
}

// src/code.server/infrastucture/pedido/utils/index.ts
function getUserRoleWhere(role, tangoUserId) {
  switch (role) {
    case 1 /* vendor */:
      return {
        field: VENDEDOR_ID_FIELD,
        value: tangoUserId
      };
    case 0 /* customer */:
      return {
        field: CLIENTE_ID_FIELD,
        value: tangoUserId
      };
  }
}

// src/texts/pedidos.ts
var PEDIDO_INVALIDO = "Inv\xE1lido", PEDIDO_INGRESADO = "Ingresado", PEDIDO_APROBADO = "Visto", PEDIDO_CUMPLIDO = "Cumplido", PEDIDO_CERRADO = "Cerrado", PEDIDO_ANULADO = "Anulado", PEDIDO_ENPROGRESO = "En progreso", PEDIDO_MENU_MODIFY = "Modificar", PEDIDO_MENU_DELETE = "Eliminar", PEDIDO_MENU_CANCEL = "Anular", PEDIDO_MENU_DUPLICATE = "Duplicar", PEDIDO_MENU_CREATE_ORDER = "Crear pedido", PEDIDO_MENU_CREATE_DRAFT = "Crear borrador", PEDIDO_MENU_CONVERT_DRAFT_TO_ORDER = "Convertir en pedido", PEDIDO_ARTICLE_GROUP_NO_NAME = "Varios", PEDIDO_CANCEL_ORDER = "Anular pedido", PEDIDO_CANCEL_ORDER_CONFIRM = "\xBFEst\xE1 seguro que desea anular este pedido? Esta acci\xF3n no se puede deshacer.", PEDIDO_ORDER_CANCELED = "Pedido anulado";
var PEDIDO_DELETE_ORDER = "Eliminar pedido", PEDIDO_DELETE_ORDER_CONFIRM = "\xBFEst\xE1 seguro que desea eliminar este pedido? Esta acci\xF3n no se puede deshacer.", PEDIDO_ORDER_DELETED = "Pedido eliminado";
var PEDIDO_DELETE_DRAFT = "Eliminar borrador", PEDIDO_DELETE_DRAFT_CONFIRM = "\xBFEst\xE1 seguro que desea eliminar este borrador? Esta acci\xF3n no se puede deshacer.", PEDIDO_DRAFT_DELETED = "Borrador eliminado";

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
    case 100 /* EN_PROGRESO */:
      return PEDIDO_ENPROGRESO;
    default:
      return PEDIDO_INVALIDO;
  }
}
function numberToEstadoPedido(value) {
  if (!Number.isInteger(value))
    return 0 /* INVALIDO */;
  switch (value) {
    case 1 /* INGRESADO */:
      return 1 /* INGRESADO */;
    case 2 /* APROBADO */:
      return 2 /* APROBADO */;
    case 3 /* CUMPLIDO */:
      return 3 /* CUMPLIDO */;
    case 4 /* CERRADO */:
      return 4 /* CERRADO */;
    case 5 /* ANULADO */:
      return 5 /* ANULADO */;
  }
  return 0 /* INVALIDO */;
}
function realOrderStatus(header, rows) {
  let { estado } = header;
  if (!(rows != null && (estado == 2 /* APROBADO */ || estado == 1 /* INGRESADO */)))
    return estado;
  for (let row of rows) {
    let { a_descontar, a_facturar, pendiente_descontar, pendiente_facturar } = row;
    if (a_descontar != pendiente_descontar || a_facturar != pendiente_facturar)
      return 100 /* EN_PROGRESO */;
  }
  return estado;
}
function isUserAllowedToModifyOrder(user, orderStatus) {
  return orderStatus == 1 /* INGRESADO */;
}
function isUserAllowedToCancelOrDeleteOrder(user, orderStatus) {
  if (orderStatus == 1 /* INGRESADO */)
    return !0;
  let isAdmin = user instanceof UserEntity ? user.isAdmin() : user.role == 2 /* admin */, aprobarAlCrear = user instanceof UserEntity ? user.aprobarPedidoAlCrear.valueOf() : user.aprobar_pedido_al_crear;
  return !!(orderStatus == 2 /* APROBADO */ && aprobarAlCrear || (orderStatus == 100 /* EN_PROGRESO */ || orderStatus == 5 /* ANULADO */) && isAdmin);
}

// src/code.server/infrastucture/_src/tango.provider.ts
var TangoProvider = class extends CompanyProvider {
  toResultWithoutDisposables(m) {
    let { FILLER, OBSERVACIONES, ROW_VERSION, CAMPOS_ADICIONALES, ...remaining } = m;
    return {
      ...remaining
    };
  }
};

// src/code.server/infrastucture/_src/tango.utils.ts
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
  for (let f of screenNameFields) {
    let v = model[f];
    if (typeof v == "string" && v.length > 0)
      return v;
  }
  return def;
}
function customerTrulyEnabled(habilitado, fechaInhabilitacion) {
  let currentTime = now(), year = fechaInhabilitacion?.getUTCFullYear() ?? 0, disableTimestamp = fechaInhabilitacion?.getTime() ?? 0;
  return year <= 1900 || currentTime < disableTimestamp;
}

// src/code.server/infrastucture/pedido/model_mappers/pedido.model_mapper.ts
var pedidoModelMapper = (m) => {
  let {
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
    COMENTARIO: descripcion,
    ESTADO
  } = m;
  if (!isAnInteger(id_cliente))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "pedidoModelMapper -> id_cliente");
  if (!isNotEmptyStr(codigo_cliente))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "pedidoModelMapper -> codigo_cliente");
  if (!isAnInteger(id_vendedor))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "pedidoModelMapper -> id_vendedor");
  if (!isNotEmptyStr(codigo_vendedor))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "pedidoModelMapper -> codigo_vendedor");
  if (!isAnInteger(id_transporte))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "pedidoModelMapper -> id_transporte");
  if (!isNotEmptyStr(codigo_transporte))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "pedidoModelMapper -> codigo_transporte");
  if (!(FECHA_PEDI instanceof Date))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "pedidoModelMapper -> FECHA_PEDI");
  if (!(FECHA_ENTR === null || FECHA_ENTR instanceof Date))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "pedidoModelMapper -> FECHA_ENTR");
  if (!(FECHA_INGRESO === null || FECHA_INGRESO instanceof Date))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "pedidoModelMapper -> FECHA_INGRESO");
  let [hour, min, sec] = _getHMS(HORA_INGRESO);
  if (!isAnInteger(hour) || !isAnInteger(min) || !isAnInteger(sec))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "pedidoModelMapper -> HORA_INGRESO");
  try {
    FECHA_INGRESO instanceof Date && FECHA_INGRESO.setHours(hour, min, sec);
  } catch {
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
  if (hms = hms.trim(), hms.length != 6)
    return [0, 0, 0];
  let hStr = hms.substring(0, 2), mStr = hms.substring(2, 4), sStr = hms.substring(4, 6);
  return [
    Number.parseInt(hStr),
    Number.parseInt(mStr),
    Number.parseInt(sStr)
  ];
}
var extendedPedidoModelMapper = (m) => {
  let {
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
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "extendedPedidoModelMapper -> id_talonario");
  if (!isAnInteger(codigo_talonario))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "extendedPedidoModelMapper -> codigo_talonario");
  if (!isAnInteger(id_condicion))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "extendedPedidoModelMapper -> id_vendedor");
  if (!isAnInteger(codigo_condicion))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "extendedPedidoModelMapper -> codigo_condicion");
  if (!isAnInteger(id_lista))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "extendedPedidoModelMapper -> id_lista");
  if (!isAnInteger(codigo_lista))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "extendedPedidoModelMapper -> codigo_lista");
  if (!isNotEmptyStr(codigo_asiento))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "extendedPedidoModelMapper -> codigo_asiento");
  if (!isNotEmptyStr(codigo_deposito))
    throw new DXTException(200013 /* TANGO_PEDIDO_DB_DATA_ERROR */, "extendedPedidoModelMapper -> codigo_deposito");
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
    compromete_stock: compromete_stock === !0,
    id_asiento_modelo_gv
  };
}, pedidoAndRelationsModelMapper = (m) => {
  let r = pedidoModelMapper(m), nombre_cliente = resolveScreenName(CLIENTE_NAME_COLUMNS, m), nombre_vendedor = r.codigo_vendedor != null ? resolveScreenName(VENDEDOR_NAME_COLUMNS, m) : void 0, nombre_transporte = r.codigo_transporte != null ? resolveScreenName(TRANSPORTE_NAME_COLUMNS, m) : void 0;
  return {
    ...r,
    nombre_cliente,
    nombre_vendedor,
    nombre_transporte
  };
};

// src/code.server/infrastucture/user/model_mappers/cliente.model_mappers.ts
var tangoClienteModelMapper = (m) => {
  let { [CLIENTE_ID_FIELD]: id, [CLIENTE_CODE_FIELD]: code, HABILITADO: isEnabled, FECHA_INHA: fechaInhabilitacion } = m, screen_name = resolveScreenName(
    CLIENTE_NAME_COLUMNS,
    m,
    code
  ), habilitado = customerTrulyEnabled(isEnabled, fechaInhabilitacion);
  return {
    id,
    code,
    screen_name,
    habilitado
  };
}, tangoExtendedClienteModelMapper = (m) => {
  let {
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
    throw new DXTException(200011 /* TANGO_CLIENTE_DB_DATA_ERROR */, `tangoFullClienteModelMapper -> ${VENDEDOR_ID_FIELD}`);
  if (!isNotEmptyStr(codigoVendedor))
    throw new DXTException(200011 /* TANGO_CLIENTE_DB_DATA_ERROR */, `tangoFullClienteModelMapper ${VENDEDOR_CODE_FIELD}`);
  if (!isAnInteger(idLista))
    throw new DXTException(200011 /* TANGO_CLIENTE_DB_DATA_ERROR */, `tangoFullClienteModelMapper ${LISTA_ID_FIELD}`);
  if (!isAnInteger(codigoLista))
    throw new DXTException(200011 /* TANGO_CLIENTE_DB_DATA_ERROR */, "tangoFullClienteModelMapper NRO_LISTA");
  if (!isAnInteger(idCondicion))
    throw new DXTException(200011 /* TANGO_CLIENTE_DB_DATA_ERROR */, `tangoFullClienteModelMapper ${CONDICION_ID_FIELD}`);
  if (!isAnInteger(codigoCondicion))
    throw new DXTException(200011 /* TANGO_CLIENTE_DB_DATA_ERROR */, `tangoFullClienteModelMapper ${CONDICION_CODE_FIELD}`);
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
  return isStr(field) ? field.trim().toUpperCase() === "S" : !1;
}

// src/code.server/infrastucture/user/cliente.repository.ts
var ClienteRepository = class extends TangoProvider {
  constructor() {
    super({
      mainTable: CLIENTE_TABLE,
      mainIdField: CLIENTE_ID_FIELD,
      columns: clienteModelColumns,
      sortField: "RAZON_SOCI"
    });
  }
  async customerBelongsToVendor(customerId, vendorId) {
    let cacheKey = `belongs_${vendorId}_${customerId}`, cachedData = await this.cache.getMetadata(cacheKey);
    if (cachedData != null)
      return cachedData;
    let { mainTable, columns } = this.config, data = await (await this.getCompany())(mainTable).count({ count: "*" }).where({
      [VENDEDOR_ID_FIELD]: vendorId,
      [CLIENTE_ID_FIELD]: customerId
    }), customerBelongsToVendor = Array.isArray(data) && data.length > 0 && data[0].count === 1;
    return await this.cache.setMetadata(cacheKey, customerBelongsToVendor), customerBelongsToVendor;
  }
  async getAllByVendor(vendorId) {
    let cacheKey = `byVendor_${vendorId}`, cachedData = await this.cache.getMetadata(cacheKey);
    if (cachedData != null)
      return cachedData;
    let { mainTable, columns } = this.config, result = (await (await this.getCompany())(mainTable).select(...columns ?? "*").where({
      [VENDEDOR_ID_FIELD]: vendorId
    })).map((m) => this.toResult(m));
    return await this.cache.setMetadata(cacheKey, result), result;
  }
  async getExtendedById(customerId) {
    let cacheKey = `fullById_${customerId}`, cachedData = await this.cache.getMetadata(cacheKey);
    if (cachedData != null)
      return cachedData;
    let { mainTable, mainIdField, columns } = this.config, data = await (await this.getCompany())(mainTable).first(...columns ?? "*").where(mainIdField, customerId);
    if (data == null)
      throw new DXTException(11001 /* DXT_CUSTOMER_NOT_FOUND */);
    let result = this._toExtendedResult(data);
    return await this.cache.setMetadata(cacheKey, result), result;
  }
  toResult(m) {
    return tangoClienteModelMapper(m);
  }
  _toExtendedResult(m) {
    return tangoExtendedClienteModelMapper(m);
  }
}, clienteRepository = new ClienteRepository();

// src/code.server/infrastucture/user/model_mappers/vendedor.model_mapper.ts
var tangoVendedorModelMapper = (m) => {
  let { [VENDEDOR_ID_FIELD]: id, [VENDEDOR_CODE_FIELD]: code, INHABILITA } = m, screen_name = resolveScreenName(
    VENDEDOR_NAME_COLUMNS,
    m,
    code
  );
  return { id, screen_name, habilitado: !(INHABILITA ?? !1) };
};

// src/code.server/infrastucture/user/vendedor.repository.ts
var vendedorRepository = createTangoRepository(
  VENDEDOR_TABLE,
  VENDEDOR_ID_FIELD,
  tangoVendedorModelMapper,
  vendedorModelColumns,
  [
    clienteRepository
  ]
);

// src/code.server/infrastucture/auxiliar/model_mappers/others.model_mappers.ts
var tangoTransporteModelMapper = (m) => {
  let { [TRANSPORTE_ID_FIELD]: id, [TRANSPORTE_CODE_FIELD]: code, NOMBRE_TRA } = m;
  return { id, code, name: NOMBRE_TRA ?? code };
}, tangoDepositoModelMapper = (m) => {
  let { [DEPOSITO_ID_FIELD]: id, [DEPOSITO_CODE_FIELD]: code, NOMBRE_SUC } = m;
  return { id, code, name: NOMBRE_SUC ?? code };
}, tangoCondicionModelMapper = (m) => {
  let { [CONDICION_ID_FIELD]: id, [CONDICION_CODE_FIELD]: code, DESC_COND } = m;
  return { id, code, name: DESC_COND ?? id.toString() };
}, tangoAsientoModelMapper = (m) => {
  let { [ASIENTO_ID_FIELD]: id, [ASIENTO_CODE_FIELD]: tipo, CONC_ASI, COD_CUENTA: codigo_cuenta } = m;
  if (!isAnInteger(id))
    throw new DXTException(200014 /* TANGO_PERFIL_DB_DATA_ERROR */, `tangoAsientoModelMapper -> ${ASIENTO_ID_FIELD}`);
  if (!isAnInteger(codigo_cuenta))
    throw new DXTException(200014 /* TANGO_PERFIL_DB_DATA_ERROR */, "tangoAsientoModelMapper -> codigo_cuenta");
  if (!isNotEmptyStr(tipo))
    throw new DXTException(200014 /* TANGO_PERFIL_DB_DATA_ERROR */, `tangoAsientoModelMapper -> ${ASIENTO_CODE_FIELD}`);
  let name = CONC_ASI ?? id.toString();
  return { id, code: tipo, tipo, name, codigo_cuenta };
}, tangoTalonarioModelMapper = (m) => {
  let { [TALONARIO_ID_FIELD]: id, [TALONARIO_CODE_FIELD]: code, DESCRIP, COMPROB, TIPO } = m;
  return {
    id,
    code,
    name: DESCRIP ?? code.toString(),
    comprobante: COMPROB?.trim().toUpperCase() ?? "",
    tipo: TIPO?.trim().toUpperCase() ?? ""
  };
}, tangoAlicuotaModelMapper = (m) => {
  let { [ALICUOTA_ID_FIELD]: id, [ALICUOTA_CODE_FIELD]: code, PORCENTAJE } = m;
  return { id, code, percentage: PORCENTAJE ?? 0 };
}, tangoDireccionModelMapper = (m) => {
  let {
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

// src/code.server/infrastucture/auxiliar/model_mappers/perfil.model_mapper.ts
var tangoPerfilModelMapper = (m) => {
  let {
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
  } = m, bonificacion = isStr(BONIF_DEF) && BONIF_DEF.trim().toUpperCase() == "O" ? Number.isFinite(D_BONIFIC) ? D_BONIFIC : 0 : void 0, codigo_condicion_venta = isNotEmptyStr(D_COND_VEN) ? Number.parseInt(D_COND_VEN.trim()) : void 0;
  if (!isAnInteger(D_TAL_FACT))
    throw new DXTException(200014 /* TANGO_PERFIL_DB_DATA_ERROR */, "tangoPerfilModelMapper -> D_TAL_FACT");
  if (!isAnInteger(D_TAL_PED))
    throw new DXTException(200014 /* TANGO_PERFIL_DB_DATA_ERROR */, "tangoPerfilModelMapper -> D_TAL_PED");
  if (!isAnInteger(D_TAL_REMI))
    throw new DXTException(200014 /* TANGO_PERFIL_DB_DATA_ERROR */, "tangoPerfilModelMapper -> D_TAL_REMI");
  if (!isAnInteger(codigo_condicion_venta))
    throw new DXTException(200014 /* TANGO_PERFIL_DB_DATA_ERROR */, "tangoPerfilModelMapper -> codigoCondicionVenta");
  if (!isAnInteger(D_LISTA_PR))
    throw new DXTException(200014 /* TANGO_PERFIL_DB_DATA_ERROR */, "tangoPerfilModelMapper -> D_LISTA_PR");
  if (!isNotEmptyStr(D_TRANSPOR))
    throw new DXTException(200014 /* TANGO_PERFIL_DB_DATA_ERROR */, "tangoPerfilModelMapper -> D_TRANSPOR");
  if (!isNotEmptyStr(D_TIPO_ASI))
    throw new DXTException(200014 /* TANGO_PERFIL_DB_DATA_ERROR */, "tangoPerfilModelMapper -> D_TIPO_ASI");
  if (!isAnInteger(ID_ASIENTO_MODELO_GV))
    throw new DXTException(200014 /* TANGO_PERFIL_DB_DATA_ERROR */, "tangoPerfilModelMapper -> ID_ASIENTO_MODELO_GV");
  return {
    code,
    id,
    name: DESCRIPCIO,
    bonificacion,
    id_asiento_modelo_gv: ID_ASIENTO_MODELO_GV,
    compromete_stock: COMP_STK === !0,
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
  return isStr(field) ? field.trim().toUpperCase() === "E" : !1;
}

// src/code.server/infrastucture/auxiliar/others.repositories.ts
var asientoRepository = createTangoRepository(ASIENTO_TABLE, ASIENTO_ID_FIELD, tangoAsientoModelMapper, asientoModelColumns), condicionRepository = createTangoRepository(CONDICION_TABLE, CONDICION_ID_FIELD, tangoCondicionModelMapper, condicionModelColumns), depositoRepository = createTangoRepository(DEPOSITO_TABLE, DEPOSITO_ID_FIELD, tangoDepositoModelMapper, depositoModelColumns), perfilRepository = createTangoRepository(PERFIL_TABLE, PERFIL_ID_FIELD, tangoPerfilModelMapper, perfilModelColumns), talonarioRepository = createTangoRepository(TALONARIO_TABLE, TALONARIO_ID_FIELD, tangoTalonarioModelMapper, talonarioModelColumns), transporteRepository = createTangoRepository(TRANSPORTE_TABLE, TRANSPORTE_ID_FIELD, tangoTransporteModelMapper, transporteModelColumns);

// src/code.server/infrastucture/auxiliar/alicuota.repository.ts
var AlicuotaRepository = class extends TangoProvider {
  constructor() {
    super({
      mainTable: ALICUOTA_TABLE,
      mainIdField: ALICUOTA_ID_FIELD,
      columns: alicuotaModelColumns
    });
  }
  async getAllPercentages() {
    let rows = await this.getAll();
    return new Map(rows.map((row) => [row.code, row.percentage]));
  }
  toResult(m) {
    return tangoAlicuotaModelMapper(m);
  }
}, alicuotaRepository = new AlicuotaRepository();

// src/code.server/infrastucture/auxiliar/direccion.repository.ts
var DireccionRepository = class extends TangoProvider {
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
}, direccionRepository = new DireccionRepository();

// src/code.server/infrastucture/tango/models/parametros.model.ts
var TANGO_PARAMETROS_TABLE = "GVA16", TANGO_PARAMETROS_ID_FIELD = "ID_GVA16", tangoParametrosModelColumns = [
  TANGO_PARAMETROS_ID_FIELD,
  "PED_APR_CO",
  "PED_AUT_CO",
  "PED_FECHA",
  "PROX_NDOC"
];

// src/code.server/infrastucture/tango/model_mappers/index.ts
var tangoParametrosModelMapper = (m) => {
  let { PED_AUT_CO, PROX_NDOC } = m, idsPedidosAutomaticos = toBoolean(PED_AUT_CO, !1), proximoId = PROX_NDOC;
  if (proximoId == null || !Number.isFinite(proximoId))
    throw new DXTException(200002 /* TANGO_DB_INVALID_DATA */, "tangoParametrosModelMapper -> PROX_NDOC");
  return {
    idsPedidosAutomaticos,
    proximoId
  };
};

// src/code.server/infrastucture/tango/tango.repository.ts
var TangoRepository = class extends CompanyProvider {
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
    let { mainTable } = this.config;
    await (trx ?? await this.getCompany())(mainTable).update({ PROX_NDOC: id });
  }
  toResult(m) {
    return tangoParametrosModelMapper(m);
  }
}, tangoRepository = new TangoRepository();

// src/code.server/infrastucture/pedido/pedido_base.repository.ts
var PedidoBaseRepository = class extends CompanyProvider {
  constructor(config2) {
    let { mainTable, rowsRepository } = config2;
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
    let { mainTable } = this.config;
    return `${mainTable}.${PEDIDO_ID_FIELD} IS NOT NULL AND ${mainTable}.${PEDIDO_CODE_FIELD} IS NOT NULL AND ${mainTable}.${CLIENTE_ID_FIELD} IS NOT NULL AND ${mainTable}.${CLIENTE_CODE_FIELD} IS NOT NULL AND ${mainTable}.${VENDEDOR_ID_FIELD} IS NOT NULL AND ${mainTable}.${VENDEDOR_CODE_FIELD} IS NOT NULL AND ${mainTable}.${TRANSPORTE_ID_FIELD} IS NOT NULL AND ${mainTable}.${TRANSPORTE_CODE_FIELD} IS NOT NULL`;
  }
  _toExtendedResult(m) {
    return extendedPedidoModelMapper(m);
  }
  async getExtendedById(orderId) {
    let cacheKey = `fullById_${orderId}`, cachedData = await this.cache.getMetadata(cacheKey);
    if (cachedData != null)
      return cachedData;
    let { mainTable, mainIdField, columns } = this.config, data = await (await this.getCompany())(mainTable).first(...extendedPedidoModelColumns).where(mainIdField, orderId);
    if (data == null)
      throw new DXTException(11e3 /* NOT_FOUND */);
    let result = this._toExtendedResult(data);
    return await this.cache.setMetadata(cacheKey, result), result;
  }
  _getUserRoleWhere(role, tangoUserId) {
    return getUserRoleWhere(role, tangoUserId);
  }
  async getAllByUser(user, options) {
    let role = user.role.valueOf(), tangoUserId = user.tangoId?.valueOf(), cacheKey = this.getAllByUserCacheKey(role, tangoUserId, options);
    if (cacheKey != null) {
      let cachedData = await this.cache.getMetadata(cacheKey);
      if (cachedData)
        return cachedData;
    }
    let { mainTable, columns } = this.config, k = await this.getCompany(), where = this._getUserRoleWhere(role, tangoUserId), query = k(mainTable);
    where != null && (query = query.where(
      `${mainTable}.${where.field}`,
      where.value
    ));
    let mainColumns = (columns ?? ["*"]).map((c) => `${mainTable}.${c.toString()}`), clienteNombreColumns = CLIENTE_NAME_COLUMNS.map((c) => `${CLIENTE_TABLE}.${c}`), vendedorNombreColumns = VENDEDOR_NAME_COLUMNS.map((c) => `${VENDEDOR_TABLE}.${c}`), transporteNombreColumns = TRANSPORTE_NAME_COLUMNS.map((c) => `${TRANSPORTE_TABLE}.${c}`), data = await query.andWhereRaw(this._avoidInvalidsFilterWhereRaw()).select(...mainColumns, ...clienteNombreColumns, ...vendedorNombreColumns, ...transporteNombreColumns).leftOuterJoin(CLIENTE_TABLE, `${mainTable}.${CLIENTE_ID_FIELD}`, `${CLIENTE_TABLE}.${CLIENTE_ID_FIELD}`).leftOuterJoin(VENDEDOR_TABLE, `${mainTable}.${VENDEDOR_ID_FIELD}`, `${VENDEDOR_TABLE}.${VENDEDOR_ID_FIELD}`).leftOuterJoin(TRANSPORTE_TABLE, `${mainTable}.${TRANSPORTE_ID_FIELD}`, `${TRANSPORTE_TABLE}.${TRANSPORTE_ID_FIELD}`);
    if (data == null)
      throw new DXTException(11e3 /* NOT_FOUND */);
    let result = data.map((p) => this.toResultWithRelations(p));
    return cacheKey != null && await this.cache.setMetadata(cacheKey, result), result;
  }
  async deleteById(orderId) {
    let k = await this.getCompany(), { mainTable: orderTable, mainIdField: orderIdField } = this.config;
    if (await k.transaction(async (trx) => {
      let { mainTable: rowsTable, mainIdField: rowIdField } = this._rowsRepository.config;
      return await trx(rowsTable).where(orderIdField, orderId).del(), await trx(orderTable).where(orderIdField, orderId).del();
    }) <= 0)
      throw new DXTException(11e3 /* NOT_FOUND */);
  }
  composeUpsertRecord(customer, orderAndRows) {
    let {
      idLista,
      codigoLista
    } = customer, {
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
    } = orderAndRows, comentariosLinea1 = comentarios.substring(0, LEYENDA_FIELD_LENGTH), comentariosLinea2 = comentarios.substring(LEYENDA_FIELD_LENGTH, LEYENDA_FIELD_LENGTH * 2);
    return {
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
      EXPORTADO: !1,
      ID_EXTERNO: "",
      NRO_O_COMP: "",
      NRO_SUCURS: 0,
      ORIGEN: "T",
      REVISO_FAC: "0",
      REVISO_STK: "0"
    };
  }
  composeInsertRecord(customer, params) {
    return this.composeUpsertRecord(
      customer,
      params
    );
  }
  composeUpdateRecord(customer, params) {
    return this.composeUpsertRecord(
      customer,
      params
    );
  }
  async create(customer, params) {
    let k = await this.getCompany(), { mainTable: orderTable } = this.config, { rows } = params, orderModel = this.composeInsertRecord(customer, params);
    return await k.transaction(async (trx) => {
      let newOrderCode = await this.getNewOrderCodeAndUpdate(trx), newOrderCodeStr = await this.formatOrderCode(newOrderCode);
      await trx(orderTable).insert({
        ...orderModel,
        [PEDIDO_CODE_FIELD]: newOrderCodeStr
      });
      let newOrderId = await this.getOrderIdFromCode(newOrderCodeStr, trx);
      if (newOrderId == null)
        throw new DXTException(0 /* UNEXPECTED_ERROR */, "PedidoBaseRepository.create -> newOrderId not found");
      let rowIndex = 0;
      for (let row of rows)
        rowIndex++, await this._rowsRepository.create(
          newOrderId,
          newOrderCodeStr,
          params,
          row,
          rowIndex,
          trx
        );
      return {
        nuevo_pedido: !0,
        id_pedido: newOrderId,
        numero_pedido: newOrderCodeStr
      };
    });
  }
  async update(customer, params) {
    let k = await this.getCompany(), { mainTable: orderTable, mainIdField: orderIdField } = this.config, { mainTable: rowsTable } = this._rowsRepository.config, { rows, idPedido } = params, orderModel = this.composeUpdateRecord(customer, params);
    return await k.transaction(
      async (trx) => {
        let changedRecords = await trx(orderTable).where(
          PEDIDO_ID_FIELD,
          idPedido
        ).update(orderModel);
        if (changedRecords != 1)
          throw new DXTException(0 /* UNEXPECTED_ERROR */, `PedidoBaseRepository.update -> Invalid count of changed records: ${changedRecords}`);
        let updatedOrder = await this.getByIdOrNull(params.idPedido);
        if (updatedOrder == null)
          throw new DXTException(0 /* UNEXPECTED_ERROR */, "PedidoBaseRepository.create -> Updated record not found");
        await trx(rowsTable).where(orderIdField, updatedOrder.id).del();
        let rowIndex = 0;
        for (let row of rows)
          rowIndex++, await this._rowsRepository.create(
            updatedOrder.id,
            updatedOrder.numero_pedido,
            params,
            row,
            rowIndex,
            trx
          );
        return {
          nuevo_pedido: !1,
          id_pedido: updatedOrder.id,
          numero_pedido: updatedOrder.numero_pedido
        };
      }
    );
  }
  toResult(m) {
    return pedidoModelMapper(m);
  }
  toResultWithRelations(m) {
    return pedidoAndRelationsModelMapper(m);
  }
  async getOrderIdFromCode(orderCode, trx) {
    return (await (trx ?? await this.getCompany())(this.config.mainTable).first(PEDIDO_ID_FIELD).where(PEDIDO_CODE_FIELD, orderCode))?.[PEDIDO_ID_FIELD] ?? null;
  }
  async getOrderCodeFromId(orderId, trx) {
    return (await (trx ?? await this.getCompany())(this.config.mainTable).first(PEDIDO_CODE_FIELD).where(PEDIDO_ID_FIELD, orderId))?.[PEDIDO_CODE_FIELD] ?? null;
  }
  async getBiggerOrderCode(trx) {
    let { mainTable } = this.config, orderCode = (await (trx ?? await this.getCompany())(mainTable).first(PEDIDO_CODE_FIELD).orderBy(PEDIDO_CODE_FIELD, "desc"))?.[PEDIDO_CODE_FIELD]?.trim(), orderCodeNumber = Number.parseInt(orderCode);
    return isAnInteger(orderCodeNumber) && orderCodeNumber > 0 ? orderCodeNumber : 1;
  }
  async formatOrderCode(orderCode) {
    return await dictionaryRepository.formatNumeroPedido(orderCode);
  }
  async getNewOrderCodeAndUpdate(trx) {
    let { idsPedidosAutomaticos, proximoId } = await tangoRepository.getParametros(), newOrderCode;
    return idsPedidosAutomaticos ? newOrderCode = proximoId : newOrderCode = await this.getBiggerOrderCode(trx), newOrderCode = await this.getNextFreeOrderCode(newOrderCode, trx), await this._updateNextOrderCode(newOrderCode, trx), newOrderCode;
  }
  async _updateNextOrderCode(newOrderCode, trx) {
    let { idsPedidosAutomaticos } = await tangoRepository.getParametros();
    idsPedidosAutomaticos && await tangoRepository.updateNextId(newOrderCode, trx);
  }
  async getNextFreeOrderCode(initialOrderCode, trx) {
    let { min, max } = await dictionaryRepository.getNumeroPedidoRange(), newId = initialOrderCode;
    for (; await this.getOrderIdFromCode(await this.formatOrderCode(newId), trx) != null; )
      newId++, newId >= max && (newId = min);
    return newId;
  }
};

// src/code.server/infrastucture/pedido/model_mappers/renglon_pedido.model_mapper.ts
var renglonPedidoModelMapper = (m) => {
  let {
    [ARTICULO_ID_FIELD]: id_articulo,
    [ARTICULO_CODE_FIELD]: codigo_articulo,
    PRECIO,
    CANT_PEDID,
    N_RENGLON,
    CANT_A_DES: a_descontar,
    CANT_PEN_D: pendiente_descontar,
    CANT_A_FAC: a_facturar,
    CANT_PEN_F: pendiente_facturar
  } = m, precio = PRECIO ?? 0, cantidad = CANT_PEDID ?? 0, subtotal = precio * cantidad;
  if (!isNotEmptyStr(codigo_articulo))
    throw new DXTException(200011 /* TANGO_CLIENTE_DB_DATA_ERROR */, `renglonPedidoModelMapper ${ARTICULO_CODE_FIELD}`);
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
}, renglonPedidoAndRelationsModelMapper = (m) => {
  let r = renglonPedidoModelMapper(m), { [ARTICULO_CODE_FIELD]: codigoArticulo, DESCRIPCIO, DESC_ADIC: descripcion_adicional } = m, nombre_articulo = DESCRIPCIO ?? (codigoArticulo == null ? NONEXISTENT_PRODUCT : NO_NAME);
  return {
    ...r,
    nombre_articulo,
    descripcion_adicional
  };
};

// src/code.server/infrastucture/articulo/model_mappers/tango_articulo.model_mapper.ts
function tangoArticuloModelMapper(m) {
  let { [ARTICULO_ID_FIELD]: id, [ARTICULO_CODE_FIELD]: codigo, DESCRIPCIO, DESC_ADIC } = m;
  return {
    id,
    codigo,
    nombre: DESCRIPCIO ?? codigo,
    descripcion_adicional: DESC_ADIC
  };
}
function tangoFullArticleModelMapper(m, alternateListId, alternateDiscount) {
  let {
    PRECIO,
    [LISTA_ID_FIELD]: idLista,
    COD_II,
    COD_IVA,
    COD_S_II,
    COD_S_IVA,
    ID_MEDIDA_STOCK,
    ID_MEDIDA_STOCK_2,
    ID_MEDIDA_VENTAS
  } = m, discount = alternateListId != null && idLista === alternateListId ? alternateDiscount : null;
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
  let { DXTO_CODIGO_ARTICULO, [ARTICULO_CODE_FIELD]: codigoArticulo } = m;
  return DXTO_CODIGO_ARTICULO != null && DXTO_CODIGO_ARTICULO !== codigoArticulo ? DXTO_CODIGO_ARTICULO.trim() : tangoFullArticleModelMapper(
    m,
    alternateListId,
    alternateDiscount
  );
}

// src/code.server/infrastucture/articulo/model_mappers/tango_lista.model_mapper.ts
function tangoListaModelMapper(m) {
  let {
    [LISTA_ID_FIELD]: id,
    [LISTA_CODE_FIELD]: codigo,
    NOMBRE_LIS,
    INCLUY_IMP,
    INCLUY_IVA,
    HABILITADA
  } = m, nombre = NOMBRE_LIS ?? codigo.toString(), incluye_ii = toBoolean(INCLUY_IMP, !1), incluye_iva = toBoolean(INCLUY_IVA, !1), habilitada = toBoolean(HABILITADA, !1);
  return {
    id,
    codigo,
    nombre,
    incluye_ii,
    incluye_iva,
    habilitada
  };
}

// src/code.server/infrastucture/articulo/model_mappers/tango_precio.model_mapper.ts
function tangoPrecioModelMapper(m) {
  let {
    [ARTICULO_CODE_FIELD]: codigoArticulo,
    PRECIO
  } = m;
  return {
    codigoArticulo,
    precio: PRECIO ?? 0
  };
}

// src/code.server/infrastucture/articulo/articulo.repository.ts
var ArticuloRepository = class extends TangoProvider {
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
    let { mainTable } = this.config, k = await this.getCompany(), fullArticuloCodeField = `${ARTICULO_TABLE}.${ARTICULO_CODE_FIELD}`, fullPrecioListaIdField = `${PRECIO_TABLE}.${LISTA_ID_FIELD}`, otherListId = alternateListId ?? listId, articuloColumns = articuloModelColumns.map((c) => `${ARTICULO_TABLE}.${c} as ${c}`), precioColumns = ["PRECIO", LISTA_ID_FIELD].map((c) => `${PRECIO_TABLE}.${c} as ${c}`);
    return (await k(mainTable).select(...articuloColumns, ...precioColumns).leftOuterJoin(PRECIO_TABLE, fullArticuloCodeField, `${PRECIO_TABLE}.${ARTICULO_CODE_FIELD}`).where(
      k.raw(
        `${fullPrecioListaIdField} = ? OR ${fullPrecioListaIdField} = ?`,
        [listId, otherListId]
      )
    ).orderBy(fullArticuloCodeField)).map((item) => tangoFullArticleModelMapper(
      item,
      alternateListId,
      alternateDiscount
    ));
  }
}, articuloRepository = new ArticuloRepository();

// src/code.server/infrastucture/articulo/others.repositories.ts
var listaRepository = createTangoRepository(LISTA_TABLE, LISTA_ID_FIELD, tangoListaModelMapper, listaModelColumns), precioRepository = createTangoRepository(PRECIO_TABLE, PRECIO_ID_FIELD, tangoPrecioModelMapper, precioModelColumns, [listaRepository, articuloRepository]);

// src/code.server/infrastucture/pedido/renglon_pedido_base.repository.ts
var RenglonPedidoBaseRepository = class extends CompanyProvider {
  constructor(config2) {
    let { mainTable, pedidoTable } = config2;
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
    let filteredColumns = renglonPedidoModelColumns.filter((c) => c != PEDIDO_ID_FIELD) ?? [];
    this.mainColumns = filteredColumns.map((c) => `${mainTable}.${c.toString()}`), this.pedidoColumns = [`${pedidoTable}.${PEDIDO_ID_FIELD}`], this.articuloColumns = ARTICULO_NAME_COLUMNS.map((c) => `${ARTICULO_TABLE}.${c}`);
  }
  async _getByWhere(whereColumn, whereValue) {
    let cacheKey = `byWhere_${whereColumn ?? "x"}_${whereValue ?? "x"}`, resultFromCache = await this.cache.getMetadata(cacheKey);
    if (resultFromCache != null)
      return resultFromCache;
    let { mainTable } = this.config, pedidoTable = this._pedidoTable, query = (await this.getCompany())(mainTable);
    whereColumn != null && (query = query.where(whereColumn, whereValue));
    let allColumns = [
      ...this.mainColumns,
      ...this.articuloColumns,
      ...this.pedidoColumns
    ], rawData = await query.select(allColumns).leftOuterJoin(ARTICULO_TABLE, `${mainTable}.${ARTICULO_ID_FIELD}`, `${ARTICULO_TABLE}.${ARTICULO_ID_FIELD}`).innerJoin(pedidoTable, `${mainTable}.${PEDIDO_CODE_FIELD}`, `${pedidoTable}.${PEDIDO_CODE_FIELD}`).orderBy(PEDIDO_ID_FIELD);
    if (rawData == null)
      throw new DXTException(11e3 /* NOT_FOUND */);
    let data = rawData.map((renglonPedido) => this.toRenglonPedidoWithIdPedido(renglonPedido)), result = {}, sliceBegin = 0, idPedidoPrev;
    return data.forEach((renglon, index) => {
      if (idPedidoPrev != null && idPedidoPrev != renglon.id_pedido) {
        let sliceEnd = index;
        result[idPedidoPrev] = data.slice(sliceBegin, sliceEnd), sliceBegin = sliceEnd;
      }
      idPedidoPrev = renglon.id_pedido;
    }), idPedidoPrev != null && (result[idPedidoPrev] = data.slice(sliceBegin, data.length)), await this.cache.setMetadata(cacheKey, result), result;
  }
  async getByIdPedido(idPedido) {
    let { mainTable } = this.config;
    return (await this._getByWhere(`${mainTable}.${PEDIDO_ID_FIELD}`, idPedido))[idPedido] ?? [];
  }
  async getByNumeroPedido(numeroPedido) {
    let { mainTable } = this.config, data = await this._getByWhere(`${mainTable}.${PEDIDO_CODE_FIELD}`, numeroPedido);
    return Object.values(data)[0] ?? [];
  }
  async getAllByUser(user, options) {
    let role = user.role.valueOf(), tangoUserId = user.tangoId?.valueOf(), where = getUserRoleWhere(role, tangoUserId);
    return await this._getByWhere(where?.field, where?.value);
  }
  toResult(m) {
    return renglonPedidoModelMapper(m);
  }
  toRenglonPedidoWithIdPedido(m) {
    let id_pedido = m[PEDIDO_ID_FIELD];
    if (id_pedido == null)
      throw new DXTException(200002 /* TANGO_DB_INVALID_DATA */, `RenglonPedidoRepository.toRenglonWithIdPedido -> ${PEDIDO_ID_FIELD}`);
    return {
      ...renglonPedidoAndRelationsModelMapper(m),
      id_pedido
    };
  }
  toResultAndRelations(m) {
    return renglonPedidoAndRelationsModelMapper(m);
  }
  async create(idPedido, numeroPedido, order, row, rowIndex, trx) {
    let model = this.composeInsertRecord(
      idPedido,
      numeroPedido,
      order,
      row,
      rowIndex
    ), { mainTable } = this.config, k = trx ?? await this.getCompany();
    try {
      await k(mainTable).insert(model);
    } catch (e) {
      throw console.error(e), e;
    }
  }
  composeInsertRecord(idPedido, numeroPedido, order, row, rowIndex) {
    let {
      idTalonario,
      codigoTalonario
    } = order, {
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
    return {
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
  }
};

// src/code.server/infrastucture/pedido/renglon_pedido.repository.ts
var RenglonPedidoRepository = class extends RenglonPedidoBaseRepository {
  constructor() {
    super({
      mainTable: RENGLON_PEDIDO_TABLE,
      pedidoTable: PEDIDO_TABLE
    });
  }
}, renglonPedidoRepository = new RenglonPedidoRepository();

// src/code.server/infrastucture/pedido/pedido.repository.ts
var PedidoRepository = class extends PedidoBaseRepository {
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
    let k = await this.getCompany(), { mainTable, mainIdField, columns } = this.config;
    await k(mainTable).where(mainIdField, id).update({
      ESTADO: 5 /* ANULADO */
    }), await this.cache.invalidateById(id);
  }
  composeUpsertRecord(customer, params) {
    let parentResult = super.composeUpsertRecord(customer, params), {
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
    let parentResult = this.composeUpsertRecord(
      customer,
      params
    ), {
      fechaIngreso
    } = params, horaIngreso = getDateHHMMSS(fechaIngreso);
    return {
      ...parentResult,
      FECHA_INGRESO: fechaIngreso,
      HORA_INGRESO: horaIngreso,
      HORA: horaIngreso
    };
  }
  composeUpdateRecord(customer, params) {
    let parentResult = this.composeUpsertRecord(
      customer,
      params
    ), {} = params;
    return {
      ...parentResult
    };
  }
}, pedidoRepository = new PedidoRepository();

// src/code.server/api/pedido/services/_src/checkUserIsOwnerOrThrow.ts
async function checkUserIsOwnerOrThrow(user, orderHeader, adminAllowed) {
  let { role } = user;
  if (role.isAdmin()) {
    if (!adminAllowed)
      throw new DXTException(101004 /* CUSTOMER_OR_VENDOR_ROLE_REQUIRED */);
    return;
  }
  if (role.isVendor()) {
    let idVendedor = user.tangoId.valueOf();
    if (!await clienteRepository.customerBelongsToVendor(
      orderHeader.id_cliente,
      idVendedor
    ))
      throw new DXTException(101014 /* ORDER_CUSTOMER_DOES_NOT_BELONGS_TO_VENDOR */);
    return;
  }
  let idCliente = user.tangoId.valueOf();
  if (orderHeader.id_cliente !== idCliente)
    throw new DXTException(101008 /* ORDER_DOES_NOT_BELONGS_TO_CUSTOMER */);
}

// src/code.server/infrastucture/dxt/pedido/dxt_pedido_draft_row.repository.ts
var DXTPedidoDraftRowRepository = class extends RenglonPedidoBaseRepository {
  constructor(config2) {
    super(config2);
  }
};

// src/code.server/infrastucture/dxt/pedido/dxt_pedido_draft_row_clientes.repository.ts
var DXTPedidoDraftRowClientesRepository = class extends DXTPedidoDraftRowRepository {
  constructor() {
    super({
      mainTable: DXT_PEDIDO_DRAFT_ROW_CLIENTES_TABLE,
      pedidoTable: DXT_PEDIDO_DRAFT_CLIENTES_TABLE
    });
  }
}, dxtPedidoDraftRowClientesRepository = new DXTPedidoDraftRowClientesRepository();

// src/code.server/infrastucture/dxt/pedido/dxt_pedido_draft_row_vendedores.repository.ts
var DXTPedidoDraftRowVendedoresRepository = class extends DXTPedidoDraftRowRepository {
  constructor() {
    super({
      mainTable: DXT_PEDIDO_DRAFT_ROW_VENDEDORES_TABLE,
      pedidoTable: DXT_PEDIDO_DRAFT_VENDEDORES_TABLE
    });
  }
}, dxtPedidoDraftRowVendedoresRepository = new DXTPedidoDraftRowVendedoresRepository();

// src/code.server/infrastucture/dxt/pedido/dxt_pedido_draft.repository.ts
var DXTPedidoDraftRepository = class extends PedidoBaseRepository {
  // constructor(config: PedidoBaseRepositoryConfig) {
  //   super(config);
  // }
  async descriptionExists(user, description, draftIdToIgnore) {
    if (user.isAdmin())
      throw new DXTException(101004 /* CUSTOMER_OR_VENDOR_ROLE_REQUIRED */);
    let isCustomer = user.isCustomer(), column = isCustomer ? CLIENTE_ID_FIELD : VENDEDOR_ID_FIELD, tangoId = user.tangoId?.valueOf();
    if (tangoId == null)
      throw new DXTException(isCustomer ? 200009 /* TANGO_CUSTOMER_NO_LONGER_EXISTS */ : 200010 /* TANGO_VENDOR_NO_LONGER_EXISTS */);
    let data = await this.getOneOrNull(column, tangoId, {
      where: {
        field: "COMENTARIO",
        value: description
      }
    });
    return draftIdToIgnore != null && data?.id === draftIdToIgnore ? !1 : data != null;
  }
  composeUpsertRecord(customer, params) {
    let parentResult = super.composeUpsertRecord(customer, params), {
      descripcion
    } = params;
    return {
      ...parentResult,
      COMENTARIO: descripcion
    };
  }
  composeInsertRecord(customer, params) {
    let parentResult = this.composeUpsertRecord(
      customer,
      params
    ), {} = params;
    return {
      ...parentResult
    };
  }
  composeUpdateRecord(customer, params) {
    let parentResult = this.composeUpsertRecord(
      customer,
      params
    ), {} = params;
    return {
      ...parentResult
    };
  }
  async getNewOrderCodeAndUpdate() {
    return await this.getNextFreeOrderCode(await this.getBiggerOrderCode());
  }
};

// src/code.server/infrastucture/dxt/pedido/dxt_pedido_draft_clientes.repository.ts
var DXTPedidoDraftClientesRepository = class extends DXTPedidoDraftRepository {
  constructor() {
    super({
      mainTable: DXT_PEDIDO_DRAFT_CLIENTES_TABLE,
      rowsRepository: dxtPedidoDraftRowClientesRepository
    });
  }
}, dxtPedidoDraftClientesRepository = new DXTPedidoDraftClientesRepository();

// src/code.server/infrastucture/dxt/pedido/dxt_pedido_draft_vendedores.repository.ts
var DXTPedidoDraftVendedoresRepository = class extends DXTPedidoDraftRepository {
  constructor() {
    super({
      mainTable: DXT_PEDIDO_DRAFT_VENDEDORES_TABLE,
      rowsRepository: dxtPedidoDraftRowVendedoresRepository
    });
  }
}, dxtPedidoDraftVendedoresRepository = new DXTPedidoDraftVendedoresRepository();

// src/code.server/infrastucture/dxt/pedido/utils.ts
function getDraftRepository(user) {
  return _isCustomer(user) ? dxtPedidoDraftClientesRepository : dxtPedidoDraftVendedoresRepository;
}
function getDraftRowRepository(user) {
  return _isCustomer(user) ? dxtPedidoDraftRowClientesRepository : dxtPedidoDraftRowVendedoresRepository;
}
function _isCustomer(user) {
  let role = user.role.valueOf();
  if (role == 2 /* admin */)
    throw new DXTException(101004 /* CUSTOMER_OR_VENDOR_ROLE_REQUIRED */);
  return role == 0 /* customer */;
}

// src/code.server/api/pedido/services/_src/getOrderWithRows.ts
async function getOrderWithRows(idPedido, user, isDraft, adminAllowed, ignoreRows) {
  let dxtPedidoDraftRepository = getDraftRepository(user), dxtPedidoDraftRowRepository = getDraftRowRepository(user), header = isDraft ? await dxtPedidoDraftRepository.getExtendedById(idPedido) : await pedidoRepository.getExtendedById(idPedido), rows = ignoreRows ? null : isDraft ? await dxtPedidoDraftRowRepository.getByIdPedido(idPedido) : await renglonPedidoRepository.getByIdPedido(idPedido), rowsOk = rows != null || ignoreRows;
  if (header == null || !rowsOk)
    throw new DXTException(isDraft ? 11004 /* DRAFT_NOT_FOUND */ : 11003 /* ORDER_NOT_FOUND */);
  let { estado, ...remaining } = header, finalHeader = {
    ...remaining,
    estado: realOrderStatus(header, rows)
  };
  return await checkUserIsOwnerOrThrow(
    user,
    finalHeader,
    adminAllowed
  ), rows == null ? {
    isDraft,
    header: finalHeader
  } : {
    isDraft,
    header: finalHeader,
    rows
  };
}

// src/domain/dxt/articulo/utils/index.ts
var ARTICLE_GROUP_NO_NAME = "_";
function _getDXTArticuloListParam(s) {
  let chunks = s.split("=", 2);
  if (chunks.length != 2)
    return null;
  let key = chunks[0].trim().toLowerCase(), value = chunks[1].trim();
  return key.length == 0 ? null : { key, value };
}
function strToDXTArticuloListRecord(s) {
  if (!isStr(s))
    return null;
  let p = s.indexOf(";");
  p <= 0 && (p = s.length);
  let codigo_articulo = s.substring(0, p).trimEnd();
  if (codigo_articulo.length == 0)
    return null;
  let params = s.substring(p + 1).trim();
  if (codigo_articulo == ARTICLE_GROUP_NO_NAME)
    throw new DXTException(10003 /* RESERVED_ARTICLE_GROUP_NAME */, `"${ARTICLE_GROUP_NO_NAME}"`);
  return params.length == 0 ? { codigo_articulo } : {
    codigo_articulo,
    params
  };
}
function strToDXTArticuloListParams(paramsStr) {
  if (paramsStr == null)
    return;
  let result = {}, emptyParams = !0;
  return paramsStr.split(";").forEach((s, i) => {
    let paramEntry = _getDXTArticuloListParam(s);
    if (paramEntry == null)
      return;
    let { key, value } = paramEntry;
    result[key] = value, emptyParams = !1;
  }), emptyParams ? void 0 : result;
}

// src/code.server/infrastucture/dxt/articulo/dxt_articulo_list.repository.ts
var DXTArticuloListRepository = class extends CompanyProvider {
  constructor(config2) {
    super({
      mainIdField: DXT_LIST_ARTICULO_CODE_FIELD,
      ...config2
    });
  }
  async getList() {
    return (await this.getAll()).map((v) => {
      let line = v.codigo_articulo;
      return v.params == null ? line : `${line}; ${v.params}`;
    });
  }
  async setList(list) {
    this.cache.clear();
    let finalList = list.filter((e) => e.codigo_articulo.trim().length > 0), { mainTable } = this.config;
    return await (await this.getCompany()).transaction(async (trx) => {
      await trx(mainTable).truncate(), await trx.batchInsert(mainTable, finalList, 500);
    }), emitBusEvent(
      new DBSettingsChangedEvent({
        passiveDBChanges: !1,
        newDictionary: !1,
        newCompany: !1,
        resetCache: !0
      })
    ), !0;
  }
  toResult(m) {
    return m;
  }
};

// src/code.server/infrastucture/dxt/articulo/dxt_articulo_edit_list.repository.ts
var DXTArticuloEditListRepository = class extends DXTArticuloListRepository {
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
    let { mainTable } = this.config, k = await this.getCompany(), fullDXTArticuloListCodeField = `${mainTable}.codigo_articulo`, fullArticuloCodeField = `${ARTICULO_TABLE}.${ARTICULO_CODE_FIELD}`, fullPrecioListaIdField = `${PRECIO_TABLE}.${LISTA_ID_FIELD}`, mainColumns = [`${fullDXTArticuloListCodeField} as DXTO_CODIGO_ARTICULO`], articuloColumns = articuloModelColumns.map((c) => `${ARTICULO_TABLE}.${c} as ${c}`), precioColumns = ["PRECIO", LISTA_ID_FIELD].map((c) => `${PRECIO_TABLE}.${c} as ${c}`), query = k(mainTable).select(...mainColumns, ...articuloColumns, ...precioColumns);
    query = query.leftOuterJoin(ARTICULO_TABLE, fullDXTArticuloListCodeField, fullArticuloCodeField).leftOuterJoin(PRECIO_TABLE, fullDXTArticuloListCodeField, `${PRECIO_TABLE}.${ARTICULO_CODE_FIELD}`);
    let otherListId = alternateListId ?? listId;
    return (await query.where(
      k.raw(
        `${fullPrecioListaIdField} = ? OR ${fullPrecioListaIdField} = ? OR (${fullDXTArticuloListCodeField} IS NOT NULL AND ${fullPrecioListaIdField} IS NULL AND ${fullArticuloCodeField} IS NULL )`,
        [listId, otherListId]
      )
    ).orderBy(`${DXT_ARTICULO_EDIT_LIST_TABLE}.id`)).map((item) => tangoFullArticleOrGroupNameModelMapper(
      item,
      alternateListId,
      alternateDiscount
    ));
  }
}, dxtArticuloEditListRepository = new DXTArticuloEditListRepository();

// src/code.server/infrastucture/dxt/user/dxt_user.repository.ts
var DXTUserRepository = class extends CompanyProvider {
  constructor(config2) {
    super(config2);
  }
  async changePassword(id, passwordHash) {
    let { mainTable, mainIdField } = this.config;
    await (await this.getCompany())(mainTable).where(mainIdField, id).update({
      password_hash: passwordHash
    }), await this.cache.invalidateById(id);
  }
  async getUserWithRelationsById(id, relationRequired) {
    relationRequired = relationRequired ?? !0;
    let cachedUser = await this.cache.getById(id);
    if (cachedUser)
      return cachedUser;
    let { mainIdField } = this.config, k = await this.getCompany();
    return await this._getUserWithRelationsByWhere(k, mainIdField, id, relationRequired);
  }
  async getUserWithRelationsByName(username, relationRequired) {
    relationRequired = relationRequired ?? !0;
    let cache = await this.cache.getByIdBuffer();
    if (cache) {
      for (let [key, user] of cache)
        if (user.username.toLowerCase() === username.toLowerCase())
          return user;
    }
    let k = await this.getCompany();
    return await this._getUserWithRelationsByWhere(k, "username", username, relationRequired);
  }
  async _getUserWithRelationsByWhere(knexInstance, field, value, relationRequired) {
    let k = knexInstance, { mainTable, mainIdField, tangoTable, tangoIdField, dxtUserNotFoundErrorCode, tangoUserNotFoundErrorCode } = this.config, modelAndRelations = await k(mainTable).joinRaw(
      "LEFT JOIN :tangoTable: ON :mainTable:.tango_id = :tangoTable:.:tangoIdField:",
      {
        tangoTable,
        mainTable,
        tangoIdField
      }
    ).first("*").where(field, value);
    if (modelAndRelations == null)
      throw new DXTException(dxtUserNotFoundErrorCode);
    let tangoUserExists = modelAndRelations[tangoIdField] != null;
    if (relationRequired && !tangoUserExists)
      throw new DXTException(tangoUserNotFoundErrorCode);
    let unsafe = this.toResultWithRelations(modelAndRelations);
    return tangoUserExists && this.cache.setById(unsafe.id, unsafe), unsafe;
  }
  async getAllWithRelations(options) {
    let cacheKey = this.getAllCacheKey(options);
    if (cacheKey != null) {
      let cachedData = await this.cache.getMetadata(cacheKey);
      if (cachedData)
        return cachedData;
    }
    let { mainTable, mainIdField, sortField, tangoTable, tangoIdField, tangoColumns } = this.config, query = (await this.getCompany())(mainTable).joinRaw(
      "LEFT JOIN :tangoTable: ON :mainTable:.tango_id = :tangoTable:.:tangoIdField:",
      {
        tangoTable,
        mainTable,
        tangoIdField
      }
    );
    sortField != null && (query = query.orderBy(sortField)), options?.offset != null && (query = query.offset(options?.offset).limit(options?.limit ?? 10));
    let result = (await query.select(
      mainIdField,
      tangoIdField,
      "tango_id",
      "username",
      `${mainTable}.habilitado_en_dxt`,
      ...(tangoColumns ?? []).map((c) => `${tangoTable}.${c}`)
    ))?.map((model) => this.createUserMinimalInfo(model));
    return cacheKey != null && await this.cache.setMetadata(cacheKey, result), result;
  }
  createUserMinimalInfo(modelAndRelations) {
    let result = this.toResultWithRelations(modelAndRelations), { id, tango_id, username, screen_name, habilitado_en_dxt, habilitado_en_tango } = result, { tangoIdField } = this.config, usuario_tango_existe = modelAndRelations[tangoIdField] != null;
    if (usuario_tango_existe && habilitado_en_tango == null)
      throw new DXTException(200002 /* TANGO_DB_INVALID_DATA */, "DXTUserRepository.createUserMinimalInfo: habilitado_en_tango must exists");
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
    let { twinRepository } = this.config;
    try {
      let _14 = await twinRepository().getUserWithRelationsByName(username, !1);
      throw new DXTException(14001 /* DUPLICATED_TABLE_RECORD */);
    } catch (e) {
      if (isNotFoundException(e))
        return;
      throw e;
    }
  }
  async create(input) {
    let k = await this.getCompany(), inputModel = this._userInputToModel(input);
    await this._throwIfTwinTableUserExists(inputModel.username);
    let { mainTable, mainIdField } = this.config;
    try {
      let id = (await k(mainTable).returning(mainIdField).insert(inputModel))[0][mainIdField];
      return await this.getById(id);
    } catch (e) {
      throw dbErrorToDXTException(e);
    }
  }
  async update(id, input) {
    let k = await this.getCompany(), inputModel = this._userInputToModel(input);
    await this._throwIfTwinTableUserExists(inputModel.username);
    let { mainTable, mainIdField } = this.config;
    try {
      if (await k(mainTable).where(mainIdField, id).update(inputModel) <= 0)
        throw new DXTException(11e3 /* NOT_FOUND */);
    } catch (e) {
      throw dbErrorToDXTException(e);
    }
    return await this.cache.invalidateById(id), await this.getById(id);
  }
  async delete(id, username) {
    if ((await this.getById(id)).username !== username)
      throw new DXTException(10001 /* INVALID_PARAMETER */, "username no coincide");
    return await this.deleteById(id);
  }
  _userInputToModel(input) {
    let {
      password,
      habilitado_en_dxt,
      email,
      ...remaining
    } = input;
    return {
      ...remaining,
      password_hash: password != null ? getPasswordHash(password) : void 0,
      email: email ?? null,
      habilitado_en_dxt,
      timestamp_modificacion: now()
    };
  }
};

// src/code.server/infrastucture/dxt/user/dxt_vendedor.repository.ts
var DXTVendedorRepository = class extends DXTUserRepository {
  constructor() {
    super({
      mainTable: DXT_VENDEDOR_TABLE,
      mainIdField: DXT_VENDEDOR_ID_FIELD,
      columns: void 0,
      tangoTable: VENDEDOR_TABLE,
      tangoIdField: VENDEDOR_ID_FIELD,
      tangoColumns: vendedorModelColumns,
      dxtUserNotFoundErrorCode: 11002 /* DXT_VENDOR_NOT_FOUND */,
      tangoUserNotFoundErrorCode: 200010 /* TANGO_VENDOR_NO_LONGER_EXISTS */,
      screenNameFields: VENDEDOR_NAME_COLUMNS,
      sortField: "NOMBRE_VEN",
      dependencies: [
        vendedorRepository
      ],
      twinRepository: () => dxtClienteRepository
    });
  }
  toResult(m) {
    let { habilitado_en_dxt, tango_id } = m;
    return {
      ...m,
      id: m.dxt_vendedor_id,
      tango_id,
      screen_name: m.username,
      role: userRoleToNumber(1 /* vendor */),
      habilitado_en_dxt,
      vendedor_id: tango_id
    };
  }
  toResultWithRelations(vendedor) {
    let { dxt_vendedor_id: id, habilitado_en_dxt, INHABILITA: inhabilitado_en_tango, tango_id, ...remaining } = vendedor;
    return {
      ...remaining,
      id,
      tango_id,
      role: 1 /* vendor */,
      screen_name: this.getScreenName(vendedor),
      habilitado_en_tango: inhabilitado_en_tango != null ? !inhabilitado_en_tango : void 0,
      habilitado_en_dxt,
      vendedor_id: tango_id
    };
  }
}, dxtVendedorRepository = new DXTVendedorRepository();

// src/code.server/infrastucture/dxt/user/dxt_cliente.repository.ts
var DXTClienteRepository = class extends DXTUserRepository {
  constructor() {
    super({
      mainTable: DXT_CLIENTE_TABLE,
      mainIdField: DXT_CLIENTE_ID_FIELD,
      tangoTable: CLIENTE_TABLE,
      tangoIdField: CLIENTE_ID_FIELD,
      tangoColumns: clienteModelColumns,
      dxtUserNotFoundErrorCode: 11001 /* DXT_CUSTOMER_NOT_FOUND */,
      tangoUserNotFoundErrorCode: 200009 /* TANGO_CUSTOMER_NO_LONGER_EXISTS */,
      screenNameFields: CLIENTE_NAME_COLUMNS,
      sortField: "RAZON_SOCI",
      dependencies: [
        clienteRepository
      ],
      twinRepository: () => dxtVendedorRepository
    });
  }
  toResult(m) {
    let {
      dxt_cliente_id,
      habilitado_en_dxt,
      ...remaining
    } = m;
    return {
      ...remaining,
      id: dxt_cliente_id,
      screen_name: m.username,
      role: 0 /* customer */,
      habilitado_en_dxt
    };
  }
  toResultWithRelations(cliente) {
    let { mainIdField } = this.config, {
      HABILITADO: isEnabled,
      [VENDEDOR_ID_FIELD]: vendedor_id,
      FECHA_INHA: fechaInhabilitacion,
      ...remaining
    } = cliente;
    if (isEnabled !== null && vendedor_id == null)
      throw new DXTException(200002 /* TANGO_DB_INVALID_DATA */, "DXTClienteRepository.toResultWithRelations (vendedor_id is null)");
    let habilitado_en_tango = isEnabled != null ? customerTrulyEnabled(isEnabled, fechaInhabilitacion) : null;
    return {
      ...this.toResult(remaining),
      role: 0 /* customer */,
      screen_name: this.getScreenName(cliente),
      habilitado_en_tango: habilitado_en_tango !== null ? habilitado_en_tango : void 0,
      vendedor_id: vendedor_id ?? void 0
    };
  }
}, dxtClienteRepository = new DXTClienteRepository();

// src/code.server/api/dxt/articulo/services/_src/getArticlesWithTaxes.ts
async function getArticlesWithTaxes(user, customer, alwaysIncludeArticlesWithoutPrice, splitInGroups) {
  let dxtCustomer;
  user.isVendor() && (dxtCustomer = await dxtClienteRepository.getOneOrNull("tango_id", customer.id));
  let listId = customer.idLista, alternateListId = dxtCustomer != null ? dxtCustomer.id_lista_alternativa : user.idListaAlternativa?.valueOf(), alternateDiscount = dxtCustomer != null ? dxtCustomer.bonificacion_lista_alternativa : user.bonificacionListaAlternativa?.valueOf(), keepArticlesWithoutPrice = alwaysIncludeArticlesWithoutPrice || user.verSinPrecio.valueOf(), orderListExists = await dxtArticuloEditListRepository.count() > 0, cacheKey = `groupedArticles_${listId}_${alternateListId ?? "0"}_${orderListExists ? "OL" : "NOL"}_${splitInGroups ? "S" : "NS"}`, cachedData = await articuloRepository.cache.getMetadata(cacheKey);
  if (cachedData != null)
    return keepArticlesWithoutPrice ? cachedData : _removeArticlesWithoutPrice(cachedData);
  let useOrderLists = orderListExists && splitInGroups, result;
  if (useOrderLists) {
    let data = await dxtArticuloEditListRepository.getArticlesWithTaxes(
      listId,
      alternateListId,
      alternateDiscount
    );
    result = _splitByOrderListGroup(data);
  } else {
    let data = await articuloRepository.getArticlesWithTaxes(
      listId,
      alternateListId,
      alternateDiscount
    );
    result = splitInGroups ? _splitByArticleCode(data) : { [ARTICLE_GROUP_NO_NAME]: data };
  }
  return await articuloRepository.cache.setMetadata(cacheKey, result), keepArticlesWithoutPrice ? result : _removeArticlesWithoutPrice(result);
}
function _removeArticlesWithoutPrice(articles) {
  return Object.fromEntries(
    Object.entries(articles).map(
      ([groupName, articles2]) => [
        groupName,
        articles2.filter((a) => a.precio > 0)
      ]
    )
  );
}
function _splitByOrderListGroup(data) {
  let result = {}, currentList = null, lastGroupName = null;
  return data.forEach((item) => {
    isStr(item) ? (lastGroupName = item.trim(), lastGroupName.length == 0 && (lastGroupName = ARTICLE_GROUP_NO_NAME), currentList = result[lastGroupName], currentList == null && (currentList = [], result[lastGroupName] = currentList)) : (currentList == null && (currentList = [], result[ARTICLE_GROUP_NO_NAME] = currentList), item.id_lista != null && currentList.push(item));
  }), result;
}
function _splitByArticleCode(data) {
  let result = {}, currentList = null, lastGroupName = null, totalGroups = 0;
  data.forEach((articulo) => {
    let { codigo, id_lista } = articulo;
    id_lista != null && (totalGroups += codigo.trim().split(" ").length);
  });
  let averageGroupCount = Math.round(data.length > 0 ? totalGroups / data.length : 0), groupNameLimit = averageGroupCount <= 1 ? 0 : averageGroupCount <= 2 ? 1 : 2;
  return data.filter((articulo) => articulo.id_lista != null).forEach((articulo) => {
    let { codigo } = articulo, possibleGroupName = codigo.trim().split(" ", groupNameLimit).map((g) => g.trim()).join(" ").toUpperCase(), currentGroupName = possibleGroupName.length > 0 ? possibleGroupName : ARTICLE_GROUP_NO_NAME;
    currentGroupName !== lastGroupName && (lastGroupName = currentGroupName, currentList = result[lastGroupName] ?? [], result[lastGroupName] = currentList), currentList == null && (lastGroupName = ARTICLE_GROUP_NO_NAME, currentList = [], result[lastGroupName] = currentList), currentList.push(articulo);
  }), result;
}

// src/code.server/api/dxt/articulo/services/index.ts
async function getArticles(user, customer) {
  let result = (await getArticlesWithTaxes(
    user,
    customer,
    !0,
    !1
  ))[ARTICLE_GROUP_NO_NAME];
  return new Map(result.map((article) => [article.id, article]));
}
async function getGroupedArticles(user, customer) {
  return await getArticlesWithTaxes(
    user,
    customer,
    !1,
    !0
  );
}

// src/code.server/api/pedido/utils/adjustPrice.ts
function adjustPrice(orderHeader, article, alicuotas, applyDiscount, forceTaxesDiscrimination) {
  let { incluye_iva, incluye_ii, aplica_sobre_ii, aplica_sobre_iva } = orderHeader, discriminaIVA = forceTaxesDiscrimination ? !0 : orderHeader.discrimina_iva, discriminaII = forceTaxesDiscrimination ? !0 : orderHeader.discrimina_ii, { codigo_iva, codigo_ii, codigo_sobre_iva, codigo_sobre_ii } = article, ivaPercentage = codigo_iva != null ? alicuotas.get(codigo_iva) ?? 0 : 0, impuestoInternoPercentage = codigo_ii != null ? alicuotas.get(codigo_ii) ?? 0 : 0, sobreIVABruto = codigo_sobre_iva != null ? alicuotas.get(codigo_sobre_iva) ?? 0 : 0, sobreIIBruto = codigo_sobre_ii != null ? alicuotas.get(codigo_sobre_ii) ?? 0 : 0, sobreIVA = percentageToFactor(ivaPercentage * sobreIVABruto / 100), sobreII = percentageToFactor(impuestoInternoPercentage * sobreIIBruto / 100), iva = percentageToFactor(ivaPercentage), impuestoInterno = percentageToFactor(impuestoInternoPercentage), result = article.precio;
  if (!incluye_iva && !discriminaIVA ? (result = result * iva, aplica_sobre_iva && (result = result * sobreIVA)) : incluye_iva && discriminaIVA && (result = result / iva / sobreIVA), !incluye_ii && !discriminaII ? (result = result * impuestoInterno, aplica_sobre_ii && (result = result * sobreII)) : incluye_ii && discriminaII && (result = result / impuestoInterno / sobreII), applyDiscount) {
    let bonificacion = article.bonificacion ?? 0;
    result = result - result * bonificacion / 100;
  }
  return result;
}
function percentageToFactor(value) {
  let sign = value >= 0 ? 1 : -1;
  return (1 + value / 100) * sign;
}

// src/code.server/api/pedido/services/startPedido/_src/prepareOrderGroupedArticles.ts
async function prepareOrderGroupedArticles(user, originalOrder, newOrderHeader, customer, createNew) {
  let articles = await getGroupedArticles(
    user,
    customer
  ), alicuotas = await alicuotaRepository.getAllPercentages();
  return createNew || originalOrder == null ? _addQuantitiesAndAdjustPrices(
    newOrderHeader,
    articles,
    alicuotas
  ) : _addQuantitiesAndAdjustPrices(
    newOrderHeader,
    articles,
    alicuotas,
    originalOrder.rows
  );
}
function _addQuantitiesAndAdjustPrices(orderHeader, articles, alicuotas, rows) {
  let quantities = rows != null ? new Map(rows.map((row) => [row.codigo_articulo, row])) : null;
  return Object.fromEntries(
    Object.entries(articles).map(
      ([groupName, articles2]) => [
        groupName,
        articles2.map((article) => {
          let {
            codigo_iva,
            codigo_sobre_iva,
            codigo_ii,
            codigo_sobre_ii,
            ...remainingArticle
          } = article, newPrice = adjustPrice(
            orderHeader,
            article,
            alicuotas,
            !0,
            !1
          ), row = quantities?.get(article.codigo);
          return row == null ? {
            ...remainingArticle,
            precio: newPrice
          } : {
            ...remainingArticle,
            precio: newPrice,
            cantidad: row.cantidad
          };
        })
      ]
    )
  );
}

// src/code.server/api/auxiliar/services/getAuxiliares.ts
import _4 from "lodash";
async function getAuxiliares(customerId) {
  let [
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
  ]), listas = new Map(preListas.map((row) => [row.codigo, row])), asientos = _4.uniqWith(
    preAsientos.filter((asiento) => asiento.codigo_cuenta == 0),
    (a, b) => a.tipo == b.tipo
  ), talonarios = preTalonarios.filter((talonario) => {
    let { tipo, comprobante } = talonario;
    return (comprobante == "" || comprobante == "FAC") && tipo != "X" && tipo != "R" && tipo != "";
  }), direcciones = preDirecciones.filter((direccion) => direccion.habilitada), depositos = [
    ...preDepositos,
    {
      id: 0,
      code: "",
      name: "MOSTRADOR"
    }
  ];
  if (transportes.length == 0)
    throw new DXTException(16007 /* EMPTY_TRANSPORTE_LIST */);
  if (depositos.length == 0)
    throw new DXTException(16008 /* EMPTY_DEPOSITO_LIST */);
  if (condiciones.length == 0)
    throw new DXTException(16009 /* EMPTY_CONDICION_LIST */);
  if (asientos.length == 0)
    throw new DXTException(16010 /* EMPTY_ASIENTO_LIST */);
  if (talonarios.length == 0)
    throw new DXTException(16011 /* EMPTY_TALONARIO_LIST */);
  if (direcciones.length == 0)
    throw new DXTException(16012 /* EMPTY_DIRECCION_LIST */);
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

// src/code.server/api/dxt/user/services/getOptimalBillingProfile.ts
async function getOptimalBillingProfile(user, originalOrder, customer, auxiliares) {
  let userBillingProfile = await perfilRepository.getById(user.perfilFacturacionId.valueOf());
  if ((originalOrder != null && !originalOrder.isDraft ? originalOrder : null)?.header.codigo_talonario != null)
    return userBillingProfile;
  let codigo_talonario;
  if (user.isVendor()) {
    let customerBillingProfileId = (await dxtClienteRepository.getOneOrNull("tango_id", customer.id))?.perfil_facturacion_id, customerBillingProfile = customerBillingProfileId != null ? await perfilRepository.getById(customerBillingProfileId) : null;
    customerBillingProfile != null && (codigo_talonario = customerBillingProfile.codigo_talonario_factura);
  }
  codigo_talonario == null && (codigo_talonario = userBillingProfile.codigo_talonario_factura);
  let optimalBillingProfile = {
    ...userBillingProfile,
    codigo_talonario_factura: codigo_talonario
  };
  if (customer.discriminaIVA)
    return optimalBillingProfile;
  let { talonarios } = await getAuxiliares(customer.id), selectedTalonario = talonarios.find((talonario) => talonario.code == codigo_talonario);
  if (selectedTalonario != null && _talonarioConsumidorFinal(selectedTalonario))
    return optimalBillingProfile;
  let talonarioConsumidorFinal = talonarios.find((talonario) => _talonarioConsumidorFinal(talonario));
  if (!talonarioConsumidorFinal)
    throw new DXTException(10012 /* INVALID_CONSUMIDOR_FINAL_TALONARIO */);
  return {
    ...optimalBillingProfile,
    codigo_talonario_factura: talonarioConsumidorFinal.code
  };
}
function _talonarioConsumidorFinal(talonario) {
  let { tipo } = talonario;
  return tipo == "B" || tipo == "C";
}

// src/code.server/api/pedido/services/_src/prepareOrderHeader.ts
async function prepareOrderHeader(user, originalOrder, customer, billingProfile, auxiliares, createNew, startDraft) {
  if (!createNew && originalOrder == null)
    throw new DXTException(899e3 /* INTERNAL_SERVER_ERROR */, "prepareOrderHeader() -> createNew must be true if originalOrder is null");
  let originalOrderIsDraft = originalOrder?.isDraft === !0, sameType = originalOrderIsDraft == startDraft;
  if (!createNew && !sameType)
    throw new DXTException(899e3 /* INTERNAL_SERVER_ERROR */, "prepareOrderHeader() -> When createNew is false, both originalOrder.isDraft and startDraft must be the same");
  let vendorId = user.vendedorId?.valueOf();
  if (vendorId == null)
    throw new DXTException(899e3 /* INTERNAL_SERVER_ERROR */, "prepareOrderHeader() -> vendorId is null");
  let vendor = await vendedorRepository.getById(vendorId), {
    depositos,
    talonarios,
    transportes,
    listas,
    condiciones,
    asientos,
    direcciones
  } = auxiliares, {
    discriminaIVA,
    discriminaII,
    aplicaSobreIVA,
    aplicaSobreII
  } = customer, bonificacion_editable = billingProfile.bonificacion_editable, descripcion = startDraft && originalOrder != null ? originalOrder.header.descripcion : "", comentarios = originalOrder != null ? originalOrder.header.comentarios : "", realOrder = originalOrder != null && !originalOrder.isDraft ? originalOrder : null, updatingRealOrder = createNew == !1 && startDraft == !1 && realOrder != null, ignoreOriginalOrderId = createNew || originalOrder == null || !sameType, orderId = ignoreOriginalOrderId ? void 0 : originalOrder.header.id, numeroPedido = ignoreOriginalOrderId ? void 0 : originalOrder.header.numero_pedido, bonificacion = (bonificacion_editable ? originalOrder?.header.descuento : billingProfile.bonificacion) ?? billingProfile.bonificacion ?? customer.bonificacion, originalDeliveryDate = originalOrderIsDraft ? null : originalOrder?.header.fecha_entrega, creationDate = (createNew || originalOrderIsDraft ? /* @__PURE__ */ new Date() : originalOrder?.header.fecha_alta) ?? /* @__PURE__ */ new Date(), deliveryDate = createNew || originalDeliveryDate == null ? addDays(creationDate, user.diaDeEntrega.valueOf()) : originalDeliveryDate, {
    codigo_lista_precio,
    deposito_editable,
    transporte_editable,
    condicion_editable,
    asiento_editable,
    talonario_editable,
    direccion_editable,
    compromete_stock
  } = billingProfile, bp = billingProfile, codigo_transporte = updatingRealOrder && transporte_editable ? realOrder.header.codigo_transporte : bp.codigo_transporte, codigo_deposito = updatingRealOrder && deposito_editable ? realOrder.header.codigo_deposito : bp.codigo_deposito, codigo_condicion_venta = updatingRealOrder && condicion_editable ? realOrder.header.codigo_condicion : bp.codigo_condicion_venta, codigo_asiento = updatingRealOrder && talonario_editable ? realOrder.header.codigo_asiento : bp.codigo_asiento, codigo_talonario_factura = updatingRealOrder && talonario_editable ? realOrder.header.codigo_talonario : bp.codigo_talonario_factura, id_asiento_modelo_gv = updatingRealOrder ? realOrder.header.id_asiento_modelo_gv ?? bp.id_asiento_modelo_gv : bp.id_asiento_modelo_gv, codigo_direccion = direcciones.find((direccion) => direccion.habitual)?.code ?? direcciones[0].code, lista = listas.get(codigo_lista_precio);
  if (lista == null)
    throw new DXTException(899e3 /* INTERNAL_SERVER_ERROR */, "prepareOrderHeader() -> Lista de precios inexistente");
  return {
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
    transportes: _setSelectedItem(transportes, transporte_editable, 16001 /* UNKNOWN_TRANSPORTE */, codigo_transporte, (el) => el.code == codigo_transporte),
    depositos: _setSelectedItem(depositos, deposito_editable, 16002 /* UNKNOWN_DEPOSITO */, codigo_deposito, (el) => codigo_deposito == null && el.code == "" || el.code == codigo_deposito),
    condiciones: _setSelectedItem(condiciones, condicion_editable, 16003 /* UNKNOWN_CONDICION */, codigo_condicion_venta, (el) => el.code == codigo_condicion_venta),
    asientos: _setSelectedItem(asientos, asiento_editable, 16004 /* UNKNOWN_ASIENTO */, codigo_asiento, (el) => el.code == codigo_asiento),
    talonarios: _setSelectedItem(talonarios, talonario_editable, 16005 /* UNKNOWN_TALONARIO */, codigo_talonario_factura, (el) => el.code == codigo_talonario_factura),
    direcciones: _setSelectedItem(direcciones, direccion_editable, 16006 /* UNKNOWN_DIRECCION */, codigo_direccion, (el) => el.code == codigo_direccion),
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
}
function _setSelectedItem(list, editable, unknownElementError, targetValue, checkSelected) {
  if (targetValue == null)
    return list;
  if (editable)
    return list.map((el) => ({
      ...el,
      selected: checkSelected?.(el) ?? !1
    }));
  if (checkSelected == null)
    throw new DXTException(899e3 /* INTERNAL_SERVER_ERROR */, "_setSelectedItem -> <checkSelected> must be defined when <editable> is false");
  let result = list.filter((el) => checkSelected(el));
  if (result.length == 0)
    throw new DXTException(unknownElementError, valueToString(targetValue));
  return result;
}

// src/code.server/api/pedido/services/startPedido/_src/prepareStartValues.ts
async function prepareStartValues(user, originalOrder, customerId, createNew, startDraft) {
  let customer = await clienteRepository.getExtendedById(customerId), auxiliares = await getAuxiliares(customerId), billingProfile = await getOptimalBillingProfile(
    user,
    originalOrder,
    customer,
    auxiliares
  ), header = await prepareOrderHeader(
    user,
    originalOrder,
    customer,
    billingProfile,
    auxiliares,
    createNew,
    startDraft
  ), groupedArticles = await prepareOrderGroupedArticles(
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

// src/code.server/api/pedido/services/startPedido/index.ts
async function startPedido(user, params) {
  let { mode: mode5 } = params, createNew = mode5 != 0 /* edit */;
  if (createNew && !user.puedeCrearPedido.valueOf())
    throw new DXTException(101009 /* USER_CANNOT_CREATE_ORDERS */);
  if (!createNew && !user.puedeEditarPedido.valueOf())
    throw new DXTException(101010 /* USER_CANNOT_UPDATE_ORDERS */);
  let startDraft = mode5 == 0 /* edit */ ? params.isDraft : params.createDraft, originalOrder = mode5 == 1 /* create */ ? null : await getOrderWithRows(params.idPedido, user, params.isDraft, !1, !1);
  if (originalOrder != null && !isUserAllowedToModifyOrder(user, originalOrder.header.estado))
    throw new DXTException(101013 /* USER_CANNOT_UPDATE_ORDER_IN_CURRENT_STATUS */);
  let idCliente = mode5 == 1 /* create */ ? params.idCliente : originalOrder.header.id_cliente;
  return {
    ...await prepareStartValues(
      user,
      originalOrder,
      idCliente,
      createNew,
      startDraft
    ),
    eliminar_borrador: mode5 == 2 /* createCopy */ && params.isDraft && !params.createDraft && params.deleteOriginal
  };
}

// src/code.server/api/root.controller.ts
var RootController = class extends ApiController {
  async onError(e, req) {
    let finalE = e instanceof ValidationException && isProduction() ? new ValidationException(VALIDATION_ERROR) : e, dxtError = exceptionToDXTErrorInfo(finalE), {
      status: originalStatus,
      error_code,
      extra,
      message_to_user
    } = dxtError, status = originalStatus === HTTP_STATUS_UNAVAILABLE ? getHttpStatusFromErrorCode(error_code) : originalStatus, error_description = getDXTErrorDescription(error_code);
    return requiresContactingAdmin(error_code) && (error_description = error_description.toLocaleUpperCase() + ". Si el problema persiste contacte al administrador."), jsonResponse(
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
}, rootController = new RootController();

// src/@depsel-nodejs/crypto/utils.ts
import * as crypto from "crypto";
function sha1ToString(value, secret, encoding = "hex") {
  return crypto.createHmac("SHA1", secret).update(value).digest(encoding);
}

// src/code.server/api/auth/value_objects/vo_auth_token.ts
var AUTH_SECRET = "Ema0PpqK0jMhUl64n5q6ZVhc1WukcYSpKW8GdaQCd1b0W7jh6rwvyopI8UB7DBaU", VOAuthToken = class extends VOWeakCheckAuthToken {
  validate(rawValue) {
    if (rawValue instanceof AuthTokenProps)
      return rawValue;
    if (typeof rawValue == "string") {
      let value = rawValue.trim().toLowerCase(), p = value.lastIndexOf("-");
      p < 0 && this.throwError(rawValue);
      let result = super.validate(value), payloadHash = sha1ToString(value.substring(0, p), AUTH_SECRET), weakCheckTokenHash = this.verificationHash?.toString();
      return payloadHash !== weakCheckTokenHash && this.throwError(rawValue), result;
    }
    this.throwError(rawValue);
  }
  getVerificationHashString() {
    return sha1ToString(this.getPayloadString(), AUTH_SECRET);
  }
};

// src/code.server/infrastucture/auth/auth_token.repository.ts
import path5, { join as join3 } from "path";
import { mkdir as mkdir2, open, opendir, stat, unlink } from "fs/promises";
var _tokensPath = path5.join(cachePath, "tokens"), AuthTokenRepository = class {
  async _getTokensList() {
    return this._tokensList ? (await this._removeExpiredTokens(), this._tokensList) : (this._tokensList = await this._loadTokensFromFiles(), this._tokensList);
  }
  async _loadTokensFromFiles() {
    let result = /* @__PURE__ */ new Map(), expirationInMillis = (await settingsService.getMiscSettings()).auth_expiration_days * (isDevelopment() ? MINUTE_IN_MILLISECONDS : DAY_IN_MILLISECONDS), currentTime = now();
    await mkdir2(_tokensPath, { recursive: !0 });
    let dir = await opendir(_tokensPath, {
      bufferSize: 200
    });
    for await (let dirent of dir) {
      if (!dirent.isFile())
        continue;
      let token = null;
      try {
        token = new VOAuthToken(dirent.name);
      } catch {
      }
      let fullFileName = dirent.path, info = await stat(fullFileName);
      if (token == null || info.ctimeMs + expirationInMillis < currentTime) {
        try {
          await unlink(fullFileName);
        } catch {
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
    let expirationInMillis = (await settingsService.getMiscSettings()).auth_expiration_days * (isDevelopment() ? MINUTE_IN_MILLISECONDS : DAY_IN_MILLISECONDS), currentTime = now();
    this._tokensList?.forEach((creationTime, key) => {
      creationTime + expirationInMillis < currentTime && this._tokensList?.delete(key);
    });
  }
  async tokenExists(authToken) {
    return (await this._getTokensList()).get(authToken.toString()) != null;
  }
  async save(authToken) {
    let tokensList = await this._getTokensList(), fullFileName = join3(_tokensPath, authToken.toString());
    await (await open(fullFileName, "w")).close(), tokensList.set(authToken.toString(), now());
  }
  async delete(authToken) {
    let tokensList = await this._getTokensList(), fullFileName = join3(_tokensPath, authToken.toString());
    await unlink(fullFileName), tokensList.delete(authToken);
  }
  async createUserAuthToken(user) {
    let tokensList = await this._getTokensList(), authToken, authTokenString;
    do
      authToken = new VOAuthToken(
        new AuthTokenProps(
          user.universalId.valueOf(),
          user.id.valueOf(),
          VOAuthRandom.generate().valueOf(),
          userRoleToNumber(user.role.valueOf())
        )
      ), authTokenString = authToken.toString();
    while (tokensList.get(authTokenString) != null);
    return await this.save(authToken), {
      auth_token: authTokenString,
      user
    };
  }
}, authTokenRepository = new AuthTokenRepository();

// src/code.server/infrastucture/auth/workers/connect.worker.ts
async function connectWorker(authTokenString) {
  let token;
  try {
    token = new VOAuthToken(authTokenString);
  } catch {
    throw new DXTException(100002 /* INVALID_AUTH_TOKEN */);
  }
  if (!await authTokenRepository.tokenExists(token)) {
    if (!isAutoLoginEnabled)
      throw new DXTException(100004 /* MISSING_AUTH_TOKEN */);
    authTokenRepository.save(token);
  }
  let tokenProps = token.valueOf(), role = numberToUserRole(tokenProps.roleNumber.valueOf());
  if (role === 2 /* admin */) {
    let settings3 = await settingsService.getMiscSettings();
    return {
      auth_token: authTokenString,
      user: createAdminUserEntity(settings3.admin_email, settings3.admin_password_hash)
    };
  }
  let universalId = tokenProps.universalId.valueOf();
  if (role === 0 /* customer */)
    return await _testUserConnect(dxtClienteRepository, token, 200009 /* TANGO_CUSTOMER_NO_LONGER_EXISTS */);
  if (role === 1 /* vendor */)
    return await _testUserConnect(dxtVendedorRepository, token, 200010 /* TANGO_VENDOR_NO_LONGER_EXISTS */);
  throw new DXTException(100004 /* MISSING_AUTH_TOKEN */);
}
async function _testUserConnect(repository, authToken, tangoUserNotFoundErrorCode) {
  let userId = authToken.valueOf().userId.valueOf(), userUnsafe = await repository.getUserWithRelationsById(userId, !1), userEntity;
  try {
    userEntity = new UserEntity(userUnsafe);
  } catch (e) {
    let message = valueToString(e);
    throw new DXTException(0 /* UNEXPECTED_ERROR */, message);
  }
  let userStateException = await resolveUserStateException(userEntity, tangoUserNotFoundErrorCode);
  if (userStateException)
    throw userStateException;
  return {
    auth_token: authToken.toString(),
    user: userEntity
  };
}

// src/code.server/infrastucture/auth/workers/login.worker.ts
async function loginWorker(username, password) {
  let passwordHash = getPasswordHash(password);
  if (username.toLocaleLowerCase() === ADMIN_USERNAME.toLowerCase()) {
    let settings3 = await settingsService.getMiscSettings();
    if (passwordHash === settings3.admin_password_hash) {
      let user = createAdminUserEntity(settings3.admin_email, settings3.admin_password_hash);
      return await authTokenRepository.createUserAuthToken(user);
    }
    throw new DXTException(100001 /* INVALID_USERNAME_OR_PASSWORD */);
  }
  let result = await _testUserLogin(
    dxtClienteRepository,
    username,
    passwordHash,
    200009 /* TANGO_CUSTOMER_NO_LONGER_EXISTS */
  );
  if (result || (result = await _testUserLogin(
    dxtVendedorRepository,
    username,
    passwordHash,
    200010 /* TANGO_VENDOR_NO_LONGER_EXISTS */
  ), result))
    return result;
  throw new DXTException(100001 /* INVALID_USERNAME_OR_PASSWORD */);
}
async function _testUserLogin(repository, username, passwordHash, tangoUserNotFoundErrorCode) {
  let userUnsafe;
  try {
    userUnsafe = await repository.getUserWithRelationsByName(username, !1);
  } catch (e) {
    if (!isNotFoundException(e))
      throw e;
  }
  let user = userUnsafe ? new UserEntity(userUnsafe) : void 0;
  if (user == null)
    return;
  let userPasswordHash = user.passwordHash.valueOf();
  if (passwordHash !== userPasswordHash)
    return;
  let userStateException = await resolveUserStateException(user, tangoUserNotFoundErrorCode);
  if (userStateException)
    throw userStateException;
  return await authTokenRepository.createUserAuthToken(user);
}

// src/code.server/infrastucture/auth/workers/change_password.worker.ts
async function changePasswordWorker(user, oldPassword, newPassword) {
  let oldPasswordHash = getPasswordHash(oldPassword);
  if (user.passwordHash.valueOf() != oldPasswordHash)
    throw new DXTException(10004 /* INVALID_OLD_PASSWORD */);
  let newPasswordHash = getPasswordHash(newPassword), role = user.role.valueOf();
  if (role == 2 /* admin */) {
    let settings3 = await settingsService.getMiscSettings();
    await settingsService.setMiscSettings(
      new StoredMiscSettingsDTO({
        ...settings3,
        admin_password_hash: newPasswordHash
      })
    );
    return;
  }
  await (role == 0 /* customer */ ? dxtClienteRepository : dxtVendedorRepository).changePassword(user.id.valueOf(), newPasswordHash);
}

// src/code.server/infrastucture/auth/auth.service.ts
var isAutoLoginEnabled = isDevelopment() && tryVO(() => new VOBoolean(process.env.AUTO_LOGIN), new VOBoolean(!1)).valueOf(), AuthService2 = class {
  constructor() {
    this.connect = connectWorker;
    this.login = loginWorker;
    this.changePassword = changePasswordWorker;
  }
  async logout(authToken) {
    await authTokenRepository.delete(authToken);
  }
}, authService = new AuthService2();

// src/code.server/api/authenticated_root.controller.ts
var AuthenticatedRootController = class extends RootController {
  async onRequest(req) {
    await super.onRequest(req);
    let token = req.headers.get("authorization")?.toLowerCase();
    if (typeof token != "string") {
      if (!isAutoLoginEnabled)
        throw new DXTException(1e5 /* UNAUTHORIZED */);
      let devUsername = process.env.DEV_AUTH_USERNAME, devPassword = process.env.DEV_AUTH_PASSWORD;
      if (devUsername != null && devPassword != null && (token = (await authService.login(devUsername, devPassword)).auth_token), typeof token != "string")
        throw new DXTException(100001 /* INVALID_USERNAME_OR_PASSWORD */);
    }
    token = token.trim(), token.substring(0, 7) === "bearer " && (token = token.substring(7).trim());
    let result = await authService.connect(token);
    if (result == null)
      throw new DXTException(1e5 /* UNAUTHORIZED */);
    req.auth = result;
  }
}, authenticatedRootController = new AuthenticatedRootController();

// src/code.server/api/customer_and_vendor_root.controller.ts
var CustomerAndVendorRootController = class extends AuthenticatedRootController {
  async onRequest(req) {
    if (await super.onRequest(req), req.auth.user.role.isAdmin())
      throw new DXTException(101e3 /* FORBIDDEN */);
  }
}, customerAndVendorRootController = new CustomerAndVendorRootController();

// src/code.server/api/customer_root.controller.ts
var CustomerRootController = class extends AuthenticatedRootController {
  async onRequest(req) {
    if (await super.onRequest(req), !req.auth.user.role.isCustomer())
      throw new DXTException(101e3 /* FORBIDDEN */);
  }
}, customerRootController = new CustomerRootController();

// src/code.server/api/vendor_root.controller.ts
var VendorRootController = class extends AuthenticatedRootController {
  async onRequest(req) {
    if (await super.onRequest(req), !req.auth.user.role.isVendor())
      throw new DXTException(101e3 /* FORBIDDEN */);
  }
}, vendorRootController = new VendorRootController();

// src/code.server/api/pedido/endpoints/utils.ts
var idClienteValidationOptions = {
  validation: {
    params: {
      id_cliente: integerValidator
    }
  }
}, idPedidoValidationOptions = {
  validation: {
    params: {
      id_pedido: integerValidator
    },
    query: {
      delete_draft: optionalBooleanValidator
    }
  }
};

// src/code.server/api/pedido/endpoints/start.ts
async function _startNew(user, createDraft) {
  let { tangoId, role } = user;
  if (tangoId == null || !role.isCustomer())
    throw new DXTException(101001 /* CUSTOMER_ROLE_REQUIRED */);
  return await startPedido(user, {
    mode: 1 /* create */,
    idCliente: tangoId.valueOf(),
    createDraft
  });
}
async function _startNewForCustomer(user, idCliente, createDraft) {
  let { tangoId, role } = user;
  if (tangoId == null || !role.isVendor())
    throw new DXTException(101002 /* VENDOR_ROLE_REQUIRED */);
  return await startPedido(user, {
    mode: 1 /* create */,
    idCliente,
    createDraft
  });
}
async function _startNewFromCopy(user, isDraft, idPedido, createDraft, deleteOriginal) {
  let finalDeleteOriginal = isDraft && !createDraft && deleteOriginal === !0;
  return await startPedido(user, {
    mode: 2 /* createCopy */,
    isDraft,
    idPedido,
    createDraft,
    deleteOriginal: finalDeleteOriginal
  });
}
var startNewDraftEndpoint = createApiEndpoint(
  customerRootController,
  void 0,
  async (req) => await _startNew(req.auth.user, !0)
), startNewOrderEndpoint = createApiEndpoint(
  customerRootController,
  void 0,
  async (req) => await _startNew(req.auth.user, !1)
), startNewOrderForCustomerEndpoint = createApiEndpoint(
  vendorRootController,
  idClienteValidationOptions,
  async (req) => await _startNewForCustomer(req.auth.user, req.validated.params.id_cliente, !1)
), startNewDraftForCustomerEndpoint = createApiEndpoint(
  vendorRootController,
  idClienteValidationOptions,
  async (req) => await _startNewForCustomer(req.auth.user, req.validated.params.id_cliente, !0)
), startOrderUpdateEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await startPedido(req.auth.user, {
    mode: 0 /* edit */,
    isDraft: !1,
    idPedido: req.validated.params.id_pedido
  })
), startDraftUpdateEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await startPedido(req.auth.user, {
    mode: 0 /* edit */,
    isDraft: !0,
    idPedido: req.validated.params.id_pedido
  })
), startNewOrderFromExistingOrderEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await _startNewFromCopy(req.auth.user, !1, req.validated.params.id_pedido, !1)
), startNewOrderFromExistingDraftEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await _startNewFromCopy(req.auth.user, !0, req.validated.params.id_pedido, !1, req.validated.query.delete_draft)
), startNewDraftFromExistingOrderEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await _startNewFromCopy(req.auth.user, !1, req.validated.params.id_pedido, !0)
), startNewDraftFromExistingDraftEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => await _startNewFromCopy(req.auth.user, !0, req.validated.params.id_pedido, !0)
);

// src/code.server/api/pedido/services/savePedido/_src/createOrUpdateOrder.ts
async function createOrUpdateOrder(user, customer, order) {
  let repository = order.saveDraft ? getDraftRepository(user) : pedidoRepository;
  return order.idPedido != null ? await repository.update(customer, order) : await repository.create(customer, order);
}

// src/code.server/infrastucture/dxt/articulo/dxt_articulo_print_list.repository.ts
var DXTArticuloPrintListRepository = class extends DXTArticuloListRepository {
  constructor() {
    super({
      mainTable: DXT_ARTICULO_PRINT_LIST_TABLE,
      dependencies: [
        articuloRepository
      ]
    });
    this.mainColumns = [`${DXT_ARTICULO_PRINT_LIST_TABLE}.*`], this.articuloColumns = [ARTICULO_ID_FIELD].map((c) => `${ARTICULO_TABLE}.${c}`);
  }
  async getIdsWithParams(paramsToReturn) {
    let cacheKey = `ids_${paramsToReturn?.join(".")}`, resultFromCache = await this.cache.getMetadata(cacheKey);
    if (resultFromCache != null)
      return resultFromCache;
    let { mainTable } = this.config, rawData = await (await this.getCompany())(mainTable).select(...this.mainColumns, ...this.articuloColumns).innerJoin(ARTICULO_TABLE, `${mainTable}.${DXT_LIST_ARTICULO_CODE_FIELD}`, `${ARTICULO_TABLE}.${ARTICULO_CODE_FIELD}`).orderBy(DXT_LIST_ARTICULO_ID_FIELD);
    if (rawData == null)
      throw new DXTException(11e3 /* NOT_FOUND */);
    let data = rawData.map((m) => this.toArticuloIdResult(m, paramsToReturn));
    return await this.cache.setMetadata(cacheKey, data), data;
  }
  toArticuloIdResult(m, paramsToReturn) {
    let { [ARTICULO_ID_FIELD]: id_articulo } = m, params = strToDXTArticuloListParams(m.params);
    if (paramsToReturn.length == 0)
      return params != null ? [id_articulo, params] : id_articulo;
    let filteredParamsEntries = params == null ? null : Object.entries(params).filter(
      ([key, _14]) => paramsToReturn.includes(key)
    );
    return filteredParamsEntries != null && filteredParamsEntries.length > 0 ? [id_articulo, Object.fromEntries(filteredParamsEntries)] : id_articulo;
  }
}, dxtArticuloPrintListRepository = new DXTArticuloPrintListRepository();

// src/code.server/api/pedido/services/savePedido/_src/validateInputRows.ts
async function validateInputRows(user, originalOrder, customer, billingProfile, auxiliares, validatedOrderHeader, inputRows) {
  let articles = await getArticles(user, customer), rawResult = inputRows.map((row) => _validateOrderRow(
    row,
    articles.get(row.id)
  )), rowsOrder = await dxtArticuloPrintListRepository.getAll(), result = rawResult, total = _calculateTotal(
    result
  );
  return {
    ...validatedOrderHeader,
    total,
    rows: result
  };
}
function _validateOrderRow(row, article) {
  let {
    quantity
  } = row;
  if (article == null)
    throw new DXTException(10013 /* INACCESIBLE_ORDER_ROW_ARTICLE */);
  let {
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
  return rows.forEach((row) => {
    total += row.quantity * (row.price ?? 0);
  }), total;
}

// src/code.server/api/pedido/services/savePedido/_src/validateInputHeader.ts
async function validateInputHeader(user, originalOrder, customer, params, billingProfile, auxiliares) {
  let {
    mode: mode5,
    saveDraft,
    input
  } = params, createNew = mode5 == 0 /* create */;
  if (saveDraft) {
    let dxtPedidoDraftRepository = getDraftRepository(user), draftIdToIgnore = createNew ? null : params.idPedido;
    if (await dxtPedidoDraftRepository.descriptionExists(
      user,
      input.descripcion,
      draftIdToIgnore
    ))
      throw new DXTException(14002 /* DUPLICATED_DRAFT_DESCRIPTION */);
  }
  let {
    comentarios,
    renglones
  } = input, initialOrderHeader = await prepareOrderHeader(
    user,
    originalOrder,
    customer,
    billingProfile,
    auxiliares,
    createNew,
    saveDraft
  ), {
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
  } = initialOrderHeader, estado = user.aprobarPedidoAlCrear.valueOf() ? 2 /* APROBADO */ : 1 /* INGRESADO */, {
    compromete_stock
  } = billingProfile, [idTransporte, codigoTransporte] = _checkSelection(transportes, transporte_editable, input.id_transporte, 10005 /* INVALID_TRANSPORTE */), [idDeposito, codigoDeposito] = _checkSelection(depositos, deposito_editable, input.id_deposito, 10006 /* INVALID_DEPOSITO */), [idCondicion, codigoCondicion] = _checkSelection(condiciones, condicion_editable, input.id_condicion, 10007 /* INVALID_CONDICION */), [idAsiento, codigoAsiento] = _checkSelection(asientos, asiento_editable, input.id_asiento, 10008 /* INVALID_ASIENTO */), [idTalonario, codigoTalonario] = _checkSelection(talonarios, talonario_editable, input.id_talonario, 10009 /* INVALID_TALONARIO */), idDireccionDeEntrega = direcciones[0].id, validatedDiscount = limitNumber(
    bonificacion_editable ? input.bonificacion : initialOrderHeader.bonificacion,
    0,
    100
  );
  return {
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
}
function _checkSelection(list, isEditable, selectedId, errorCode) {
  let pickFirst = !isEditable, index = list.findIndex((item) => pickFirst || item.id == selectedId);
  if (index < 0)
    throw new DXTException(errorCode);
  return [
    list[index].id,
    list[index].code
  ];
}

// src/code.server/api/pedido/services/savePedido/_src/validateInputParams.ts
async function validateInputParams(user, originalOrder, customer, params) {
  let auxiliares = await getAuxiliares(customer.id), billingProfile = await getOptimalBillingProfile(
    user,
    originalOrder,
    customer,
    auxiliares
  ), validatedOrderHeader = await validateInputHeader(
    user,
    originalOrder,
    customer,
    params,
    billingProfile,
    auxiliares
  ), validatedOrder = await validateInputRows(
    user,
    originalOrder,
    customer,
    billingProfile,
    auxiliares,
    validatedOrderHeader,
    params.input.renglones
  ), {
    mode: mode5,
    saveDraft,
    input
  } = params, idPedido = mode5 == 1 /* update */ ? params.idPedido : null;
  if (saveDraft) {
    let descripcion = input.descripcion;
    return {
      ...validatedOrder,
      saveDraft,
      idPedido,
      descripcion
    };
  }
  let fechaIngreso = (originalOrder?.isDraft === !1 ? originalOrder : null)?.header.fecha_ingreso ?? /* @__PURE__ */ new Date(), fechaPedido = input.fecha_alta, fechaEntrega = input.fecha_entrega;
  return {
    ...validatedOrder,
    saveDraft,
    idPedido,
    fechaIngreso,
    fechaPedido,
    fechaEntrega
  };
}

// src/code.server/api/pedido/services/deleteDraft.ts
async function deleteDraft(user, idDraft) {
  let pedidoOriginal = await getOrderWithRows(idDraft, user, !0, !0, !0);
  await getDraftRepository(user).deleteById(idDraft);
}

// src/code.server/api/pedido/services/savePedido/index.ts
async function savePedido(user, params) {
  let { mode: mode5, saveDraft, input } = params, createNew = mode5 == 0 /* create */;
  if (user.isAdmin())
    throw new DXTException(101004 /* CUSTOMER_OR_VENDOR_ROLE_REQUIRED */);
  if (createNew && !user.puedeCrearPedido.valueOf())
    throw new DXTException(101009 /* USER_CANNOT_CREATE_ORDERS */);
  if (!createNew && !user.puedeEditarPedido.valueOf())
    throw new DXTException(101010 /* USER_CANNOT_UPDATE_ORDERS */);
  let originalIsDraft = mode5 == 1 /* update */ && saveDraft, originalOrder = mode5 == 1 /* update */ ? await getOrderWithRows(input.id_pedido, user, originalIsDraft, !1, !1) : null;
  if (originalOrder != null && originalOrder.header.estado != 1 /* INGRESADO */)
    throw new DXTException(101013 /* USER_CANNOT_UPDATE_ORDER_IN_CURRENT_STATUS */);
  let idCliente = mode5 == 1 /* update */ ? originalOrder.header.id_cliente : input.id_cliente, customer = await clienteRepository.getExtendedById(idCliente), idCustomerVendedor = customer.idVendedor;
  if (user.isVendor() && idCustomerVendedor != user.vendedorId?.valueOf())
    throw new DXTException(101006 /* CUSTOMER_DOES_NOT_BELONGS_TO_VENDOR */);
  let validatedOrder = await validateInputParams(
    user,
    originalOrder,
    customer,
    params
  ), result = await createOrUpdateOrder(user, customer, validatedOrder);
  return params.mode == 0 /* create */ && !params.saveDraft && params.draftIdToDelete != null && await deleteDraft(
    user,
    params.draftIdToDelete
  ), result;
}

// src/code.server/api/pedido/endpoints/create.ts
var createOrderEndpoint = createApiEndpoint(
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
    mode: 0 /* create */,
    saveDraft: !1,
    input: req.validated.body,
    draftIdToDelete: req.validated.query.draft_id_to_delete
  })
), createDraftEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  {
    validation: {
      body: validateCreateDraftInput
    }
  },
  async (req) => await savePedido(req.auth.user, {
    mode: 0 /* create */,
    saveDraft: !0,
    input: req.validated.body
  })
);

// src/code.server/api/validation/validators.ts
var paginationOffsetValidator = (v) => v != null ? new VOIntegerRange(v, 0, 1e9).valueOf() : void 0, paginationLimitValidator = (v) => v != null ? new VOIntegerRange(v, 1, 1e3).valueOf() : void 0, tangoIdValidator = (v) => new VOUInt32(v).valueOf();

// src/code.server/api/pedido/endpoints/update.ts
var updateOrderEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  {
    validation: {
      params: { id_pedido: tangoIdValidator },
      body: validateUpdateOrderInput
    }
  },
  async (req) => await savePedido(req.auth.user, {
    mode: 1 /* update */,
    saveDraft: !1,
    idPedido: req.validated.params.id_pedido,
    input: req.validated.body
  })
), updateDraftEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  {
    validation: {
      params: { id_pedido: tangoIdValidator },
      body: validateUpdateDraftInput
    }
  },
  async (req) => await savePedido(req.auth.user, {
    mode: 1 /* update */,
    saveDraft: !0,
    idPedido: req.validated.params.id_pedido,
    input: req.validated.body
  })
);

// src/code.server/api/pedido/services/cancelPedido.ts
async function cancelPedido(user, idPedido) {
  let deleteOrder = user.borrarPedidoAlAnular.valueOf();
  if (!user.puedeAnularPedido.valueOf())
    throw deleteOrder ? new DXTException(101012 /* USER_CANNOT_DELETE_ORDERS */) : new DXTException(101011 /* USER_CANNOT_CANCEL_ORDERS */);
  let pedidoOriginal = await getOrderWithRows(idPedido, user, !1, !0, !0), { header } = pedidoOriginal, currentStatus = header.estado;
  if (!isUserAllowedToCancelOrDeleteOrder(user, currentStatus))
    throw deleteOrder ? new DXTException(101015 /* USER_CANNOT_DELETE_ORDER_IN_CURRENT_STATUS */) : new DXTException(101016 /* USER_CANNOT_CANCEL_ORDER_IN_CURRENT_STATUS */);
  deleteOrder ? await pedidoRepository.deleteById(idPedido) : await pedidoRepository.cancel(idPedido);
}

// src/code.server/api/pedido/endpoints/cancel.ts
var cancelOrderEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => (await cancelPedido(req.auth.user, req.validated.params.id_pedido), { ok: !0 })
), cancelDraftEndpoint = createApiEndpoint(
  customerAndVendorRootController,
  idPedidoValidationOptions,
  async (req) => (await deleteDraft(req.auth.user, req.validated.params.id_pedido), { ok: !0 })
);

// src/code.server/api/pedido/services/getAllPedidos.ts
async function getAllPedidos(user, draft) {
  let role = user.role.valueOf(), tangoId = user.tangoId?.valueOf();
  if (draft)
    return await getDraftRepository(user).getAllByUser(user);
  let result = await pedidoRepository.getAllByUser(user);
  return _filterVisibleOrders(user, result);
}
function _filterVisibleOrders(user, orders) {
  let verPedidosCumplidos = user.verPedidosCumplidos.valueOf();
  return orders.filter((pedido) => {
    let { estado } = pedido;
    return estado == 5 /* ANULADO */ || estado == 0 /* INVALIDO */ ? !1 : estado == 4 /* CERRADO */ || estado == 3 /* CUMPLIDO */ ? verPedidosCumplidos : !0;
  });
}

// src/code.server/api/pedido/endpoints/getAll.ts
var getAllOrdersEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => await getAllPedidos(req.auth.user, !1)
), getAllDraftsEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => await getAllPedidos(req.auth.user, !0)
);

// src/code.server/api/pedido/services/getAllPedidosRows.ts
async function getAllRowsPedidos(user, draft) {
  return await (draft ? getDraftRowRepository(user) : renglonPedidoRepository).getAllByUser(user);
}

// src/code.server/api/pedido/endpoints/getRows.ts
var getOrderRowsEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => await getAllRowsPedidos(req.auth.user, !1)
), getDraftRowsEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => await getAllRowsPedidos(req.auth.user, !0)
);

// src/app/routes/api.pedido.$id_pedido.start_new_draft.ts
async function loader2({ request, params }) {
  return await startNewDraftFromExistingOrderEndpoint.get(request, params);
}
var action = unimplementedApiResponse;

// src/app/routes/api.draft.$id_pedido.start_new_order.ts
var api_draft_id_pedido_start_new_order_exports = {};
__export(api_draft_id_pedido_start_new_order_exports, {
  action: () => action2,
  loader: () => loader3
});
async function loader3({ request, params }) {
  return await startNewOrderFromExistingDraftEndpoint.get(request, params);
}
var action2 = unimplementedApiResponse;

// src/app/routes/_admin.settings.users.customers.add/route.tsx
var route_exports3 = {};
__export(route_exports3, {
  default: () => Add
});
import { useNavigate as useNavigate6 } from "@remix-run/react";

// src/app/routes/_admin.settings.users.customers.add/components/success.tsx
import { useEffect as useEffect8 } from "react";
import {
  Box as Box9,
  Divider as Divider5,
  Grid as Grid5,
  GridItem as GridItem5,
  Heading as Heading6,
  HStack as HStack6,
  Stack as Stack7,
  useToast as useToast3
} from "@chakra-ui/react";
import { yupResolver as yupResolver3 } from "@hookform/resolvers/yup";
import { useForm as useForm3 } from "react-hook-form";

// src/app/routes/_admin.settings.users.customers.add/validation.ts
import { useState as useState7 } from "react";
import * as yup4 from "yup";
import _5 from "lodash";
var useCustomValidationSchema3 = () => {
  let [passwordStatus, setPasswordStatus] = useState7(null), customValidationSchema = yup4.object({
    password: yup4.string().required("Ingrese una contrase\xF1a").test("password", "Formato de contrase\xF1a no v\xE1lido", (v) => {
      if (v != "" && v != null) {
        let newPasswordStatus = dxtPasswordStatus(v);
        return _5.isEqual(passwordStatus, newPasswordStatus) || setPasswordStatus(newPasswordStatus), yupVOValidation(VODXTPassword, v);
      }
      return !0;
    })
  }).required();
  return { yupValidationSchema: commonValidationSchema.concat(customValidationSchema), passwordStatus };
};

// src/app/routes/_admin.settings.users.customers.add/components/success.tsx
import { jsx as jsx31, jsxs as jsxs20 } from "react/jsx-runtime";
var Success3 = (props) => {
  let { typeSettings } = props, app = useAppResources(), toast = useToast3(), { yupValidationSchema: yupValidationSchema5, passwordStatus } = useCustomValidationSchema3(), { state: statePerfiles, result: resultPerfiles } = useTangoList({
    endpoint: API_TANGO_PERFIL_GET_ALL,
    fieldsMap: {
      label: "name",
      value: "id"
    }
  }), { state: stateRelationship, result: resultRelationship } = typeSettings.api.getRelation(), {
    handleSubmit,
    control,
    setError,
    resetField,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm3({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      tango_id: 0,
      perfil_facturacion_id: 0,
      habilitado_en_dxt: !0,
      puede_crear_pedido: !0,
      puede_editar_pedido: !0,
      ver_pedidos_cumplidos: !0,
      ver_sin_precio: !1,
      mostrar_mensaje_de_advertencia: !1,
      puede_anular_pedido: !1,
      borrar_pedido_al_anular: !1,
      aprobar_pedido_al_crear: !1,
      dia_de_entrega: 30
    },
    resolver: yupResolver3(yupValidationSchema5)
  }), watchPuedeAnularPedido = watch("puede_anular_pedido");
  useEffect8(() => {
    watchPuedeAnularPedido === !1 && resetField("borrar_pedido_al_anular", { defaultValue: !1 });
  }, [watchPuedeAnularPedido]);
  let disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx31("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let { ...data } = dataUnsafe;
    data.email === "" && delete data.email;
    let input = data;
    (await typeSettings.api.post(input, app)).map({
      success: (_14) => {
        toast({
          title: USER_CREATED,
          status: "success"
        }), app.navigate(URL_SETTINGS_CUSTOMERS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }), children: /* @__PURE__ */ jsxs20(Box9, { children: [
    /* @__PURE__ */ jsx31(FormErrors, { errors }),
    /* @__PURE__ */ jsx31(CommonCard, { children: /* @__PURE__ */ jsxs20(
      Grid5,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx31(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx31(Heading6, { size: "sm", textTransform: "uppercase", children: "Informaci\xF3n del Cliente" }) }),
          /* @__PURE__ */ jsxs20(GridItem5, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx31(
              ControlledSelect,
              {
                fieldProps: {
                  name: "tango_id",
                  placeholder: typeSettings.tangoRelatedFields?.placeholder,
                  options: resultRelationship,
                  noOptionsMessage(obj) {
                    return typeSettings.tangoRelatedFields?.empty;
                  },
                  isSearchable: !0,
                  selectedOptionStyle: "check",
                  isLoading: stateRelationship instanceof FetchStateLoading,
                  virtualized: !0
                },
                formControlProps: {
                  isDisabled: disableForm || !(stateRelationship instanceof FetchStateSuccess)
                },
                formControlInnerProps: {
                  label: typeSettings.tangoRelatedFields?.label
                },
                control
              }
            ),
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx31(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx31(GridItem5, { children: /* @__PURE__ */ jsx31(
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
          /* @__PURE__ */ jsx31(GridItem5, { children: /* @__PURE__ */ jsx31(
            PasswordWithStatus,
            {
              fieldProps: {
                name: "password",
                id: "password"
              },
              formControlInnerProps: {
                label: "Contrase\xF1a"
              },
              passwordStatus,
              disableForm,
              control
            }
          ) }),
          /* @__PURE__ */ jsx31(GridItem5, { children: /* @__PURE__ */ jsx31(
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
                label: "Correo electr\xF3nico"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx31(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx31(Divider5, {}) }),
          /* @__PURE__ */ jsxs20(GridItem5, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx31(
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
                  label: "Perfil de facturaci\xF3n"
                },
                control
              }
            ),
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx31(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx31(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx31(Divider5, {}) }),
          /* @__PURE__ */ jsx31(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx31(Heading6, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx31(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx31(
            ControlledRadio,
            {
              fieldProps: {
                name: "habilitado_en_dxt",
                options: [
                  {
                    value: !0,
                    label: "Establecido en Tango"
                  },
                  {
                    value: !1,
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
          /* @__PURE__ */ jsx31(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx31(Divider5, {}) }),
          /* @__PURE__ */ jsx31(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx31(Heading6, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }) }),
          /* @__PURE__ */ jsx31(GridItem5, { children: /* @__PURE__ */ jsx31(
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
    /* @__PURE__ */ jsx31(CommonCard, { children: /* @__PURE__ */ jsxs20(
      Grid5,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx31(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx31(Heading6, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx31(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs20(Stack7, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx31(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx31(
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
            /* @__PURE__ */ jsx31(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx31(
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
            /* @__PURE__ */ jsx31(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx31(
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
            /* @__PURE__ */ jsx31(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx31(
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
                  isDisabled: watchPuedeAnularPedido === !1,
                  ...watchPuedeAnularPedido === !1 && {
                    isChecked: !1
                  }
                }
              }
            ) }),
            /* @__PURE__ */ jsx31(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx31(
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
            /* @__PURE__ */ jsx31(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx31(
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
            /* @__PURE__ */ jsx31(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx31(
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
                  label: "Puede ver art\xEDculos sin precios"
                },
                control
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx31(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx31(Divider5, {}) }),
          /* @__PURE__ */ jsx31(GridItem5, { children: /* @__PURE__ */ jsx31(
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
                helperText: "Expresado en d\xEDas"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx31(GridItem5, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx31(CommonCard, { children: /* @__PURE__ */ jsx31(
      SettingsFormsButtons,
      {
        buttonActionText: "Guardar",
        isLoading: disableForm,
        buttonCancelUrl: typeSettings.cancelButtonNavigateTo
      }
    ) })
  ] }) });
};

// src/app/routes/_admin.settings.users.customers.add/components/index.tsx
import { jsx as jsx32 } from "react/jsx-runtime";
var Form = (props) => {
  let { typeSettings } = props;
  return /* @__PURE__ */ jsx32(Success3, { typeSettings });
};

// src/app/routes/_admin.settings.users.customers.add/route.tsx
import { Fragment as Fragment10, jsx as jsx33, jsxs as jsxs21 } from "react/jsx-runtime";
function Add() {
  let typeSettings = settings.customers, navigate = useNavigate6();
  return /* @__PURE__ */ jsxs21(Fragment10, { children: [
    /* @__PURE__ */ jsx33(
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
    /* @__PURE__ */ jsx33(Form, { typeSettings })
  ] });
}

// src/app/routes/_admin.settings.product_list.$type/route.tsx
var route_exports4 = {};
__export(route_exports4, {
  default: () => Lists
});
import { useNavigate as useNavigate7, useParams as useParams3 } from "@remix-run/react";

// src/api-client/dxt/articulo/paths.ts
var API_DXT_ARTICULO_PRINT_LIST = apiEndpoint("/dxt/articulo/print_list", "GET"), API_DXT_ARTICULO_PRINT_LIST_UPDATE = apiEndpoint("/dxt/articulo/print_list", "POST"), API_DXT_ARTICULO_EDIT_LIST = apiEndpoint("/dxt/articulo/edit_list", "GET"), API_DXT_ARTICULO_EDIT_LIST_UPDATE = apiEndpoint("/dxt/articulo/edit_list", "POST"), API_DXT_ARTICULO_PRINT_LIST_IDS = apiEndpoint("/dxt/articulo/print_list/ids", "GET");

// src/api-client/dxt/articulo/requests.ts
var dxtArticuloPrintListUpdateRequest = async (input, app) => await dxtApiRequest(
  {
    ...API_DXT_ARTICULO_PRINT_LIST_UPDATE,
    data: input,
    silent: !0
  },
  app
), dxtArticuloEditListUpdateRequest = async (input, app) => await dxtApiRequest(
  {
    ...API_DXT_ARTICULO_EDIT_LIST_UPDATE,
    data: input,
    silent: !0
  },
  app
);

// src/code.client/dxt/articulo/api_hooks/index.ts
function useGetDXTArticuloEditList() {
  return useDXTApiFetch({
    ...API_DXT_ARTICULO_EDIT_LIST,
    silent: !0
  });
}
function useGetDXTArticuloPrintList() {
  return useDXTApiFetch({
    ...API_DXT_ARTICULO_PRINT_LIST,
    silent: !0
  });
}

// src/code.client/crud_configs/lists.tsx
import { Fragment as Fragment11, jsx as jsx34, jsxs as jsxs22 } from "react/jsx-runtime";
var settings2 = {
  edit: {
    api: {
      getAll: useGetDXTArticuloEditList,
      post: dxtArticuloEditListUpdateRequest
    },
    title: PRODUCT_EDIT_LIST,
    description: /* @__PURE__ */ jsxs22(Fragment11, { children: [
      "Ingrese en la lista los c\xF3digos de art\xEDculo en el \xF3rden en quedesea que aparezcan durante la creaci\xF3n o edici\xF3n de un pedido.",
      /* @__PURE__ */ jsx34("br", {}),
      /* @__PURE__ */ jsx34("br", {}),
      "Cualquier l\xEDnea que ingrese, que no contenga ning\xFAn c\xF3digo de art\xEDculo, ser\xE1 considerada como t\xEDtulo de grupo."
    ] })
  },
  print: {
    api: {
      getAll: useGetDXTArticuloPrintList,
      post: dxtArticuloPrintListUpdateRequest
    },
    title: PRODUCT_PRINT_LIST,
    description: /* @__PURE__ */ jsxs22(Fragment11, { children: [
      "Ingrese en la lista los c\xF3digos de art\xEDculo en el \xF3rden en que desea que aparezcan durante la impresi\xF3n de un pedido.",
      /* @__PURE__ */ jsx34("br", {}),
      /* @__PURE__ */ jsx34("br", {}),
      "Cualquier l\xEDnea que ingrese, que no contenga ning\xFAn c\xF3digo de art\xEDculo, ser\xE1 considerada como t\xEDtulo de grupo."
    ] })
  }
};

// src/app/routes/_admin.settings.product_list.$type/components/loading.tsx
import { Box as Box10, Grid as Grid6, GridItem as GridItem6, Text as Text3 } from "@chakra-ui/react";
import { jsx as jsx35, jsxs as jsxs23 } from "react/jsx-runtime";
var Loading3 = (props) => {
  let { typeSettings } = props;
  return /* @__PURE__ */ jsx35(
    Box10,
    {
      width: "full",
      sx: {
        mt: 8,
        mb: 4
      },
      children: /* @__PURE__ */ jsxs23(
        Grid6,
        {
          templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
          alignItems: "start",
          gap: 4,
          children: [
            /* @__PURE__ */ jsx35(GridItem6, { children: /* @__PURE__ */ jsx35(FormTextareaSkeleton, { height: "380px" }) }),
            /* @__PURE__ */ jsx35(GridItem6, { children: /* @__PURE__ */ jsx35(Text3, { fontSize: "sm", children: typeSettings.description }) }),
            /* @__PURE__ */ jsx35(GridItem6, { children: /* @__PURE__ */ jsx35(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx35(GridItem6, { children: /* @__PURE__ */ jsx35(FormInputSkeleton, {}) })
          ]
        }
      )
    }
  );
};

// src/app/routes/_admin.settings.product_list.$type/components/success.tsx
import { Box as Box11, Grid as Grid7, GridItem as GridItem7, Text as Text4, useToast as useToast4 } from "@chakra-ui/react";
import { yupResolver as yupResolver4 } from "@hookform/resolvers/yup";
import { useForm as useForm4 } from "react-hook-form";

// src/app/components/form_elements/ControlledTextarea.tsx
import {
  FormControl as FormControl5,
  FormHelperText as FormHelperText4,
  FormLabel as FormLabel4,
  Textarea
} from "@chakra-ui/react";
import { useController as useController5 } from "react-hook-form";
import { jsx as jsx36, jsxs as jsxs24 } from "react/jsx-runtime";
var ControlledTextarea = (props) => {
  let { fieldProps, formControlProps, formControlInnerProps, control } = props, { label, helperText, icon } = formControlInnerProps || {}, {
    field: { ref: ref3, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController5({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs24(FormControl5, { ...formControlProps, isInvalid: invalid, children: [
    label != null && /* @__PURE__ */ jsx36(
      FormLabel4,
      {
        htmlFor: fieldProps.name,
        sx: fieldProps.variant === "flushed" ? { fontSize: "sm", mb: 0 } : {},
        children: label
      }
    ),
    /* @__PURE__ */ jsx36(Textarea, { ...fieldProps, onChange, value, ref: ref3 }),
    helperText != null && /* @__PURE__ */ jsx36(FormHelperText4, { children: helperText })
  ] });
};

// src/app/routes/_admin.settings.product_list.$type/validation.ts
import * as yup5 from "yup";
var yupValidationSchema = yup5.object({
  list: yup5.string().default("").test("avoid-ARTICLE_GROUP_NO_NAME", `Evite utilizar ${ARTICLE_GROUP_NO_NAME}`, function(value) {
    return !/(^|[^a-zA-Z0-9])_([^a-zA-Z0-9]|$)/.test(value);
  })
}).required();

// src/app/routes/_admin.settings.product_list.$type/components/success.tsx
import { jsx as jsx37, jsxs as jsxs25 } from "react/jsx-runtime";
var Success4 = (props) => {
  let { stateData, typeSettings } = props, app = useAppResources(), toast = useToast4(), {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm4({
    defaultValues: {
      list: stateData?.join(`\r
`) || ""
    },
    resolver: yupResolver4(yupValidationSchema)
  }), disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx37("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let input = { data: dataUnsafe.list.split(`
`) };
    (await typeSettings.api.post(input, app)).map({
      success: (_14) => {
        toast({
          title: LIST_UPDATED,
          status: "success"
        }), app.navigate(URL_SETTINGS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }), children: /* @__PURE__ */ jsxs25(Box11, { children: [
    /* @__PURE__ */ jsx37(FormErrors, { errors }),
    /* @__PURE__ */ jsx37(CommonCard, { children: /* @__PURE__ */ jsxs25(
      Grid7,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx37(GridItem7, { children: /* @__PURE__ */ jsx37(
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
          /* @__PURE__ */ jsx37(GridItem7, { children: /* @__PURE__ */ jsx37(Text4, { fontSize: "sm", children: typeSettings.description }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx37(CommonCard, { children: /* @__PURE__ */ jsx37(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};

// src/app/routes/_admin.settings.product_list.$type/components/index.tsx
import { jsx as jsx38 } from "react/jsx-runtime";
var FormLists = (props) => {
  let { typeSettings } = props, { state, retry } = typeSettings.api.getAll();
  return state.map({
    loading: (_14) => /* @__PURE__ */ jsx38(Loading3, { typeSettings }),
    error: ({ error }) => /* @__PURE__ */ jsx38(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx38(Success4, { stateData: state2.data, typeSettings })
  });
};

// src/app/routes/_admin.settings.product_list.$type/route.tsx
import { Fragment as Fragment12, jsx as jsx39, jsxs as jsxs26 } from "react/jsx-runtime";
function Lists() {
  let navigate = useNavigate7(), { type } = useParams3(), typeSettings = settings2[type];
  return type != null && typeSettings != null ? /* @__PURE__ */ jsxs26(Fragment12, { children: [
    /* @__PURE__ */ jsx39(
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
    /* @__PURE__ */ jsx39(FormLists, { typeSettings })
  ] }) : /* @__PURE__ */ jsx39(
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

// src/app/routes/_admin.settings.users.$type._index/route.tsx
var route_exports5 = {};
__export(route_exports5, {
  default: () => Lists2
});
import { useNavigate as useNavigate8, useParams as useParams4 } from "@remix-run/react";
import AccountPlusIcon from "mdi-react/AccountPlusIcon.js";

// src/app/routes/_admin.settings.users.$type._index/components/loading.tsx
import { Box as Box12, Grid as Grid8, GridItem as GridItem8 } from "@chakra-ui/react";
import { jsx as jsx40, jsxs as jsxs27 } from "react/jsx-runtime";
var Loading4 = () => /* @__PURE__ */ jsx40(
  Box12,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs27(Grid8, { templateColumns: "1fr", gap: { base: 2, md: 4 }, children: [
      /* @__PURE__ */ jsx40(GridItem8, { children: /* @__PURE__ */ jsx40(FormInputSkeleton, {}) }),
      /* @__PURE__ */ jsx40(GridItem8, { children: /* @__PURE__ */ jsx40(FormInputSkeleton, {}) }),
      /* @__PURE__ */ jsx40(GridItem8, { children: /* @__PURE__ */ jsx40(FormTextareaSkeleton, { height: "400px" }) }),
      /* @__PURE__ */ jsx40(GridItem8, { children: /* @__PURE__ */ jsx40(FormInputSkeleton, {}) })
    ] })
  }
);

// src/app/routes/_admin.settings.users.$type._index/components/success.tsx
import { useMemo as useMemo4, useRef as useRef6, useState as useState10 } from "react";

// src/code.client/hooks/useSearchField.ts
import _6 from "lodash";
import { useEffect as useEffect9, useState as useState8 } from "react";
function useSearchField(data, fieldsToFilter) {
  let [state, setState] = useState8({
    filteredData: data,
    query: null
  });
  useEffect9(() => {
    let { query: query2 } = state, filteredData2 = _filter(
      data,
      query2,
      fieldsToFilter
    );
    setState({
      filteredData: filteredData2,
      query: query2
    });
  }, [data]);
  let handleSearchInputChange = (query2) => {
    let filteredData2 = _filter(
      data,
      query2,
      fieldsToFilter
    );
    setState({
      filteredData: filteredData2,
      query: query2 ?? null
    });
  }, { filteredData, query } = state;
  return {
    filteredData,
    handleSearchInputChange,
    isFiltering: query != null && query != ""
  };
}
function _filter(data, query, fieldsToFilter) {
  if (_6.isArray(data))
    return query == null ? [...data] : _6.filter(data, (obj) => _6.some(fieldsToFilter, (prop) => String(_6.get(obj, prop)).toLowerCase().includes(query.toLowerCase())));
  if (_6.isObject(data)) {
    if (query == null)
      return { ...data };
    let filteredData = {};
    return _6.forEach(data, (array2, key) => {
      let filteredArray = _6.filter(array2, (obj) => _6.some(fieldsToFilter, (prop) => String(_6.get(obj, prop)).toLowerCase().includes(query.toLowerCase())));
      filteredData[key] = filteredArray;
    }), filteredData;
  }
  return data;
}

// src/app/routes/_admin.settings.users.$type._index/components/success.tsx
import {
  Alert as Alert4,
  AlertDescription as AlertDescription3,
  AlertIcon as AlertIcon3,
  Box as Box13,
  Flex as Flex3,
  Grid as Grid9,
  GridItem as GridItem9,
  HStack as HStack8,
  Icon as Icon7,
  IconButton as IconButton4,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast as useToast5
} from "@chakra-ui/react";
import AccountCancelIcon2 from "mdi-react/AccountCancelIcon.js";
import AccountCheckIcon from "mdi-react/AccountCheckIcon.js";
import PencilIcon from "mdi-react/PencilIcon.js";
import TrashIcon from "mdi-react/TrashIcon.js";

// src/app/components/DeleteDialog.tsx
import { useRef as useRef4 } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button as Button6
} from "@chakra-ui/react";
import { jsx as jsx41, jsxs as jsxs28 } from "react/jsx-runtime";
var DeleteDialog = ({
  isOpen,
  onClose,
  handleDeletion,
  message
}) => {
  let cancelRef = useRef4();
  return /* @__PURE__ */ jsx41(
    AlertDialog,
    {
      isOpen,
      leastDestructiveRef: cancelRef,
      onClose,
      motionPreset: "slideInBottom",
      isCentered: !0,
      children: /* @__PURE__ */ jsx41(AlertDialogOverlay, { children: /* @__PURE__ */ jsxs28(AlertDialogContent, { children: [
        /* @__PURE__ */ jsx41(AlertDialogHeader, { fontSize: "lg", fontWeight: "bold", children: message.title }),
        /* @__PURE__ */ jsx41(AlertDialogBody, { children: message.body }),
        /* @__PURE__ */ jsxs28(AlertDialogFooter, { children: [
          /* @__PURE__ */ jsx41(Button6, { ref: cancelRef, onClick: onClose, children: CANCEL }),
          /* @__PURE__ */ jsx41(Button6, { colorScheme: "red", onClick: handleDeletion, ml: 3, children: DELETE })
        ] })
      ] }) })
    }
  );
};

// src/code.client/hooks/usePagination.ts
import { useMemo as useMemo3 } from "react";
var DOTS_LEFT = "{left}", DOTS_RIGHT = "{right}", range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_14, idx) => idx + start);
}, usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => useMemo3(() => {
  let totalPageCount = Math.ceil(totalCount / pageSize);
  if (siblingCount + 5 >= totalPageCount)
    return range(1, totalPageCount);
  let leftSiblingIndex = Math.max(currentPage - siblingCount, 1), rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount), shouldShowLeftDots = leftSiblingIndex > 2, shouldShowRightDots = rightSiblingIndex < totalPageCount - 2, firstPageIndex = 1, lastPageIndex = totalPageCount;
  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * siblingCount;
    return [...range(1, leftItemCount), DOTS_LEFT, totalPageCount];
  }
  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * siblingCount, rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
    return [firstPageIndex, DOTS_RIGHT, ...rightRange];
  }
  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, DOTS_LEFT, ...middleRange, DOTS_RIGHT, lastPageIndex];
  }
}, [totalCount, pageSize, siblingCount, currentPage]);

// src/app/components/Pagination.tsx
import { Button as Button7, HStack as HStack7, Icon as Icon5, IconButton as IconButton3, VStack as VStack2 } from "@chakra-ui/react";
import ChevronLeftIcon2 from "mdi-react/ChevronLeftIcon.js";
import ChevronRightIcon from "mdi-react/ChevronRightIcon.js";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon.js";
import { jsx as jsx42, jsxs as jsxs29 } from "react/jsx-runtime";
var Pagination = (props) => {
  let {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props, paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
  if (!paginationRange || currentPage === 0 || paginationRange.length < 2)
    return null;
  let onNext = () => {
    onPageChange(currentPage + 1);
  }, onPrevious = () => {
    onPageChange(currentPage - 1);
  }, lastPage = paginationRange[paginationRange.length - 1];
  return /* @__PURE__ */ jsxs29(VStack2, { children: [
    /* @__PURE__ */ jsx42(HStack7, { spacing: 1, wrap: "wrap", justifyContent: "center", children: paginationRange.map((pageNumber) => pageNumber === DOTS_LEFT || pageNumber === DOTS_RIGHT ? /* @__PURE__ */ jsx42(
      Icon5,
      {
        as: DotsHorizontalIcon,
        boxSize: 3
      },
      `page-${pageNumber}`
    ) : /* @__PURE__ */ jsx42(
      Button7,
      {
        colorScheme: pageNumber === currentPage ? "blue" : "gray",
        size: { base: "sm", md: "md" },
        onClick: () => onPageChange(pageNumber),
        children: pageNumber
      },
      `button-${pageNumber}`
    )) }),
    /* @__PURE__ */ jsxs29(HStack7, { children: [
      /* @__PURE__ */ jsx42(
        IconButton3,
        {
          "aria-label": PREVIOUS,
          size: { base: "sm", md: "md" },
          onClick: onPrevious,
          isDisabled: currentPage === 1,
          children: /* @__PURE__ */ jsx42(Icon5, { as: ChevronLeftIcon2 })
        }
      ),
      /* @__PURE__ */ jsx42(
        IconButton3,
        {
          "aria-label": NEXT,
          size: { base: "sm", md: "md" },
          onClick: onNext,
          isDisabled: currentPage === lastPage,
          children: /* @__PURE__ */ jsx42(Icon5, { as: ChevronRightIcon })
        }
      )
    ] })
  ] });
};

// src/app/components/SearchField.tsx
import { useRef as useRef5, useState as useState9 } from "react";
import {
  Icon as Icon6,
  Input as Input2,
  InputGroup as InputGroup2,
  InputLeftElement,
  InputRightElement as InputRightElement2
} from "@chakra-ui/react";
import CloseIcon2 from "mdi-react/CloseIcon.js";
import MagnifyIcon from "mdi-react/MagnifyIcon.js";
import { jsx as jsx43, jsxs as jsxs30 } from "react/jsx-runtime";
var SearchField = ({
  handleSearchInputChange,
  inputProps
}) => {
  let [searchValue, setSearchValue] = useState9(null), inputRef = useRef5(null), inputChangeRef = useRef5(), handleSearchReset = () => {
    setSearchValue(null), handleSearchInputChange(), inputChangeRef.current && clearTimeout(inputChangeRef.current), inputRef.current && inputRef.current.focus();
  };
  return /* @__PURE__ */ jsxs30(InputGroup2, { children: [
    /* @__PURE__ */ jsx43(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ jsx43(Icon6, { as: MagnifyIcon, boxSize: 4 }) }),
    /* @__PURE__ */ jsx43(
      Input2,
      {
        ref: inputRef,
        type: "text",
        name: "filter",
        placeholder: FILTER_PLACEHOLDER,
        value: searchValue ?? "",
        autoCapitalize: "off",
        onChange: (e) => {
          setSearchValue(e.target.value), inputChangeRef.current && clearTimeout(inputChangeRef.current), inputChangeRef.current = setTimeout(() => {
            handleSearchInputChange(e.target.value);
          }, 500);
        },
        ...inputProps
      }
    ),
    searchValue !== "" && searchValue != null ? /* @__PURE__ */ jsx43(InputRightElement2, { cursor: "pointer", children: /* @__PURE__ */ jsx43(Icon6, { as: CloseIcon2, onClick: handleSearchReset }) }) : /* @__PURE__ */ jsx43(InputRightElement2, {})
  ] });
};

// src/app/components/TextWordBreak.tsx
import { Text as Text5 } from "@chakra-ui/react";
import { jsx as jsx44 } from "react/jsx-runtime";
var TextWordBreak = ({
  children,
  breakType,
  props
}) => /* @__PURE__ */ jsx44(
  Text5,
  {
    ...props,
    sx: {
      whiteSpace: "normal",
      wordBreak: breakType ?? "break-all"
    },
    children
  }
);

// src/app/routes/_admin.settings.users.$type._index/components/success.tsx
import { Fragment as Fragment13, jsx as jsx45, jsxs as jsxs31 } from "react/jsx-runtime";
var Success5 = (props) => {
  let { stateData, retry, typeSettings } = props, app = useAppResources(), { isOpen, onOpen, onClose } = useDisclosure(), toast = useToast5(), selectedUser = useRef6(null), { filteredData, handleSearchInputChange, isFiltering } = useSearchField(stateData, [
    "screen_name",
    "username"
  ]), [currentPage, setCurrentPage] = useState10(1), PageSize = 10, currentTableData = useMemo4(() => {
    let firstPageIndex = (currentPage - 1) * PageSize, lastPageIndex = firstPageIndex + PageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData]), handleDeleteDialog = (id, username) => () => {
    selectedUser.current = { id, username }, onOpen();
  }, handleEdit = (id) => () => {
    app.navigate(pathParamsToUrl(typeSettings.editButtonNavigateTo, { id }));
  };
  return /* @__PURE__ */ jsxs31(Fragment13, { children: [
    /* @__PURE__ */ jsx45(
      DeleteDialog,
      {
        isOpen,
        onClose,
        handleDeletion: async () => {
          if (selectedUser.current != null) {
            let { id, username } = selectedUser.current;
            selectedUser.current = null, (await typeSettings.api.delete(id, { username }, app)).map({
              success: (_14) => {
                toast({
                  title: USER_DELETED,
                  status: "success"
                }), stateData.splice(
                  stateData.findIndex((object13) => object13.id === id),
                  1
                ), handleSearchInputChange();
              },
              error: (e) => {
                toast({
                  title: AN_ERROR_OCCURRED,
                  status: "error"
                });
              }
            }), onClose();
          }
        },
        message: {
          title: USER_DELETE,
          body: USER_DELETE_CONFIRM
        }
      }
    ),
    /* @__PURE__ */ jsxs31(CommonCard, { children: [
      /* @__PURE__ */ jsx45(Box13, { sx: { pb: 4 }, children: /* @__PURE__ */ jsx45(SearchField, { handleSearchInputChange }) }),
      /* @__PURE__ */ jsx45(Box13, { children: /* @__PURE__ */ jsxs31(Table, { variant: "grayOverCard", size: "md", children: [
        /* @__PURE__ */ jsx45(Thead, { children: /* @__PURE__ */ jsx45(Tr, { children: /* @__PURE__ */ jsx45(
          Th,
          {
            sx: {
              p: { base: 2, md: 4 }
            },
            children: /* @__PURE__ */ jsxs31(
              Grid9,
              {
                templateColumns: {
                  base: "3fr 1fr 2fr",
                  md: "3fr 3fr 1fr 2fr"
                },
                gap: { base: 2, md: 4 },
                children: [
                  /* @__PURE__ */ jsx45(GridItem9, { children: "Nombre completo" }),
                  /* @__PURE__ */ jsx45(GridItem9, { sx: { display: { base: "none", md: "block" } }, children: "Nombre de usuario" }),
                  /* @__PURE__ */ jsx45(GridItem9, { textAlign: "center", children: "Estado" }),
                  /* @__PURE__ */ jsx45(GridItem9, {})
                ]
              }
            )
          }
        ) }) }),
        /* @__PURE__ */ jsx45(Tbody, { children: currentTableData.length > 0 ? currentTableData.map((user) => /* @__PURE__ */ jsx45(Tr, { children: /* @__PURE__ */ jsx45(
          Td,
          {
            sx: {
              p: { base: 2, md: 4 }
            },
            children: /* @__PURE__ */ jsxs31(
              Grid9,
              {
                templateColumns: {
                  base: "3fr 1fr 2fr",
                  md: "3fr 3fr 1fr 2fr"
                },
                gap: { base: 2, md: 4 },
                alignItems: "center",
                children: [
                  /* @__PURE__ */ jsx45(GridItem9, { children: /* @__PURE__ */ jsx45(TextWordBreak, { breakType: "normal", children: user.screen_name }) }),
                  /* @__PURE__ */ jsx45(
                    GridItem9,
                    {
                      sx: { display: { base: "none", md: "block" } },
                      children: /* @__PURE__ */ jsx45(TextWordBreak, { breakType: "normal", children: user.username })
                    }
                  ),
                  /* @__PURE__ */ jsx45(GridItem9, { textAlign: "center", children: /* @__PURE__ */ jsx45(
                    Icon7,
                    {
                      as: user.habilitado_en_dxt && user.usuario_tango_existe && user.habilitado_en_tango === !0 ? AccountCheckIcon : AccountCancelIcon2,
                      boxSize: 6,
                      color: resolveUserStatusColor(user)
                    }
                  ) }),
                  /* @__PURE__ */ jsx45(GridItem9, { children: /* @__PURE__ */ jsxs31(HStack8, { justifyContent: "center", children: [
                    /* @__PURE__ */ jsx45(
                      IconButton4,
                      {
                        "aria-label": "Eliminar",
                        size: "sm",
                        colorScheme: "red",
                        onClick: handleDeleteDialog(
                          user.id,
                          user.username
                        ),
                        children: /* @__PURE__ */ jsx45(Icon7, { as: TrashIcon, boxSize: 4 })
                      }
                    ),
                    /* @__PURE__ */ jsx45(
                      IconButton4,
                      {
                        "aria-label": "Editar",
                        size: "sm",
                        colorScheme: "blue",
                        onClick: handleEdit(user.id),
                        children: /* @__PURE__ */ jsx45(Icon7, { as: PencilIcon, boxSize: 4 })
                      }
                    )
                  ] }) })
                ]
              }
            )
          }
        ) }, `row_${user.id}`)) : /* @__PURE__ */ jsx45(Tr, { children: /* @__PURE__ */ jsx45(Td, { children: /* @__PURE__ */ jsxs31(Alert4, { status: "info", children: [
          /* @__PURE__ */ jsx45(AlertIcon3, {}),
          /* @__PURE__ */ jsx45(AlertDescription3, { children: isFiltering ? FILTER_NO_RESULTS : NO_USERS })
        ] }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsx45(Flex3, { sx: { pt: 4, justifyContent: "center" }, children: /* @__PURE__ */ jsx45(
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

// src/app/routes/_admin.settings.users.$type._index/components/index.tsx
import { jsx as jsx46 } from "react/jsx-runtime";
var ListsUsers = (props) => {
  let { typeSettings } = props, { state, retry } = typeSettings.api.getAll();
  return state.map({
    loading: (_14) => /* @__PURE__ */ jsx46(Loading4, {}),
    error: ({ error }) => /* @__PURE__ */ jsx46(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx46(
      Success5,
      {
        stateData: state2.data,
        retry,
        typeSettings
      }
    )
  });
};

// src/app/routes/_admin.settings.users.$type._index/route.tsx
import { Fragment as Fragment14, jsx as jsx47, jsxs as jsxs32 } from "react/jsx-runtime";
function Lists2() {
  let navigate = useNavigate8(), { type } = useParams4(), typeSettings = settings[type];
  return type != null && typeSettings != null ? /* @__PURE__ */ jsxs32(Fragment14, { children: [
    /* @__PURE__ */ jsx47(
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
              typeSettings.actionButtonNavigateTo != null && navigate(typeSettings.actionButtonNavigateTo);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx47(ListsUsers, { typeSettings })
  ] }) : /* @__PURE__ */ jsx47(
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

// src/app/routes/_authorized.drafts.$id_pedido.edit/route.tsx
var route_exports6 = {};
__export(route_exports6, {
  default: () => OrdersAdd
});
import { useParams as useParams5 } from "@remix-run/react";
import { Container } from "@chakra-ui/react";

// src/app/pages/orders_edit/index.tsx
import { useNavigate as useNavigate10 } from "@remix-run/react";

// src/api-client/pedido/paths.ts
var API_PEDIDO_GET_ALL = apiEndpoint("/pedido", "GET"), API_PEDIDO_GET_ALL_ROWS = apiEndpoint("/pedido/renglones", "GET"), API_PEDIDO_START_NEW = apiEndpoint("/pedido/start_new/:id_cliente", "GET"), API_PEDIDO_START_NEW_DRAFT = apiEndpoint("/pedido/:id_pedido/start_new_draft", "GET"), API_PEDIDO_START_COPY = apiEndpoint("/pedido/:id_pedido/start_copy", "GET"), API_PEDIDO_START_UPDATE = apiEndpoint("/pedido/:id_pedido/start_update", "GET"), API_PEDIDO_CREATE = apiEndpoint("/pedido", "POST"), API_PEDIDO_UPDATE = apiEndpoint("/pedido/:id_pedido", "PATCH"), API_PEDIDO_DELETE = apiEndpoint("/pedido/:id_pedido", "DELETE"), API_BORRADOR_GET_ALL = apiEndpoint("/draft", "GET"), API_BORRADOR_GET_ALL_ROWS = apiEndpoint("/draft/renglones", "GET"), API_BORRADOR_START_NEW = apiEndpoint("/draft/start_new/:id_cliente", "GET"), API_BORRADOR_START_COPY = apiEndpoint("/draft/:id_pedido/start_copy", "GET"), API_BORRADOR_START_NEW_ORDER = apiEndpoint("/draft/:id_pedido/start_new_order", "GET"), API_BORRADOR_START_UPDATE = apiEndpoint("/draft/:id_pedido/start_update", "GET"), API_BORRADOR_CREATE = apiEndpoint("/draft", "POST"), API_BORRADOR_UPDATE = apiEndpoint("/draft/:id_pedido", "PATCH"), API_BORRADOR_DELETE = apiEndpoint("/draft/:id_pedido", "DELETE");

// src/code.client/pedido/api_hooks/_src/index.ts
function useBorradorPedidoStartNew(customerId, isDraft) {
  return useDXTApiFetch({
    ...isDraft ? API_BORRADOR_START_NEW : API_PEDIDO_START_NEW,
    pathParams: {
      id_cliente: customerId ?? ""
    },
    silent: !0
  });
}
function useBorradorPedidoStartUpdate(orderId, isDraft) {
  return useDXTApiFetch({
    ...isDraft ? API_BORRADOR_START_UPDATE : API_PEDIDO_START_UPDATE,
    pathParams: {
      id_pedido: orderId
    },
    silent: !0
  });
}

// src/code.client/pedido/api_hooks/draft.api_hooks.ts
var useBorradorStartNew = (customerId) => useBorradorPedidoStartNew(customerId, !0), useBorradorStartUpdate = (orderId) => useBorradorPedidoStartUpdate(orderId, !0);

// src/code.client/pedido/api_hooks/order.api_hooks.ts
var usePedidoStartNew = (customerId) => useBorradorPedidoStartNew(customerId, !1), usePedidoStartUpdate = (orderId) => useBorradorPedidoStartUpdate(orderId, !1);

// src/app/pages/orders_edit/components/loading.tsx
import { Fragment as Fragment15, jsx as jsx48 } from "react/jsx-runtime";
var Loading5 = () => /* @__PURE__ */ jsx48(Fragment15, { children: "Loading Skeletons here" });

// src/app/pages/orders_edit/components/success.tsx
import { useState as useState13 } from "react";
import { Box as Box18, useToast as useToast6 } from "@chakra-ui/react";
import { yupResolver as yupResolver5 } from "@hookform/resolvers/yup";
import { format as format2 } from "date-fns";
import _8 from "lodash";
import { FormProvider, useForm as useForm6 } from "react-hook-form";

// src/api-client/pedido/requests.ts
var createOrderRequest = async (input, app) => await dxtApiRequest(
  {
    ...API_PEDIDO_CREATE,
    data: input,
    silent: !0
  },
  app
), createDraftRequest = async (input, app) => await dxtApiRequest(
  {
    ...API_BORRADOR_CREATE,
    data: input,
    silent: !0
  },
  app
), updateOrderRequest = async (id_pedido, input, app) => await dxtApiRequest(
  {
    ...API_PEDIDO_UPDATE,
    pathParams: { id_pedido },
    data: input,
    silent: !0
  },
  app
), updateDraftRequest = async (id_pedido, input, app) => await dxtApiRequest(
  {
    ...API_BORRADOR_UPDATE,
    pathParams: { id_pedido },
    data: input,
    silent: !0
  },
  app
), deleteOrderRequest = async (id_pedido, app) => await dxtApiRequest(
  {
    ...API_PEDIDO_DELETE,
    pathParams: { id_pedido },
    silent: !0
  },
  app
), deleteDraftRequest = async (id_pedido, app) => await dxtApiRequest(
  {
    ...API_BORRADOR_DELETE,
    pathParams: { id_pedido },
    silent: !0
  },
  app
);

// src/app/components/orders/OrdersAddNav.tsx
import { useNavigate as useNavigate9 } from "@remix-run/react";
import { Box as Box14, Flex as Flex4, HStack as HStack9, useColorModeValue as useColorModeValue2 } from "@chakra-ui/react";
import FormatListCheckboxIcon from "mdi-react/FormatListCheckboxIcon.js";
import PlaylistCheckIcon from "mdi-react/PlaylistCheckIcon.js";
import PlaylistEditIcon from "mdi-react/PlaylistEditIcon.js";
import SendIcon from "mdi-react/SendIcon.js";
import { useFormContext } from "react-hook-form";
import { Fragment as Fragment16, jsx as jsx49, jsxs as jsxs33 } from "react/jsx-runtime";
var OrdersAddNav = (props) => {
  let navigate = useNavigate9(), { handleSubmit } = useFormContext(), {
    isDraft,
    isEditing,
    isDisabled,
    handlePedidoAction,
    handleDraftAction,
    setIsDraft,
    ...searchFieldProps
  } = props;
  return /* @__PURE__ */ jsx49(Fragment16, { children: /* @__PURE__ */ jsx49(
    Box14,
    {
      bg: useColorModeValue2("white", "blue.900"),
      sx: {
        px: 4,
        position: "sticky",
        zIndex: 1e3,
        top: 0
      },
      children: /* @__PURE__ */ jsxs33(Flex4, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxs33(HStack9, { spacing: { base: 2, sm: 3 }, alignItems: "center", children: [
          isDraft ? /* @__PURE__ */ jsxs33(Fragment16, { children: [
            /* @__PURE__ */ jsx49(
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
            !isEditing && /* @__PURE__ */ jsx49(
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
                    setIsDraft(!1);
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
          ] }) : /* @__PURE__ */ jsxs33(Fragment16, { children: [
            /* @__PURE__ */ jsx49(
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
            !isEditing && /* @__PURE__ */ jsx49(
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
                    setIsDraft(!0);
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
          /* @__PURE__ */ jsx49(
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
        /* @__PURE__ */ jsx49(
          Flex4,
          {
            alignItems: "center",
            sx: {
              ms: { base: 2, sm: 3 }
            },
            children: /* @__PURE__ */ jsx49(SearchField, { ...searchFieldProps })
          }
        )
      ] })
    }
  ) });
};

// src/app/pages/orders_edit/validation.ts
import * as yup6 from "yup";
import { parse, isDate } from "date-fns";
function parseDateString(value, originalValue) {
  return isDate(originalValue) ? originalValue : parse(originalValue, "yyyy-MM-dd", /* @__PURE__ */ new Date());
}
var useCustomValidationSchema4 = (isDraft) => {
  let baseValidationSchema = yup6.object({
    fecha_alta: yup6.date().transform(parseDateString).typeError("Ingrese una fecha de alta v\xE1lida").required("Ingrese una fecha de alta v\xE1lida"),
    fecha_entrega: yup6.date().transform(parseDateString).min(
      yup6.ref("fecha_alta"),
      "La fecha de entrega no puede ser anterior a la fecha de alta"
    ).typeError("Ingrese una fecha de entrega v\xE1lida").required("Ingrese una fecha de alta v\xE1lida"),
    id_condicion: yup6.number().required("Seleccione la condici\xF3n de venta"),
    id_asiento: yup6.number().required("Seleccione el tipo de asiento"),
    id_transporte: yup6.number().required("Seleccione el transporte"),
    id_talonario: yup6.number().required("Seleccione el talonario"),
    id_deposito: yup6.number().required("Seleccione el dep\xF3sito"),
    id_direccion: yup6.number().required("Seleccione una direcci\xF3n"),
    bonificacion: yup6.number().required("Ingrese bonificaci\xF3n").typeError("Ingrese una bonificaci\xF3n v\xE1lida").min(0, "La bonificaci\xF3n debe encontrarse entre 0 y 100%").max(100, "La bonificaci\xF3n debe encontrarse entre 0 y 100%"),
    quantities: yup6.array().of(yup6.number()).test("at-least-one-quantity", "Ingrese al menos una cantidad", function(value) {
      return !value || value.length === 0 ? !1 : value.some((quantity) => quantity != null && quantity > 0);
    }).required("Ingrese al menos una cantidad"),
    comentarios: yup6.string().default("").max(COMENTARIOS_MAX_LENGTH, "Los comentarios no pueden superar los ${max} caracteres"),
    descripcion: yup6.string().default("").max(DESCRIPCION_MAX_LENGTH, "La descripci\xF3n no puede superar los ${max} caracteres")
  }).required(), draftValidationSchema = yup6.object({
    descripcion: yup6.string().required("Ingrese una descripci\xF3n").max(DESCRIPCION_MAX_LENGTH, "La descripci\xF3n no puede superar los ${max} caracteres")
  });
  return isDraft ? { yupValidationSchema: baseValidationSchema.concat(draftValidationSchema) } : { yupValidationSchema: baseValidationSchema };
};

// src/app/pages/orders_edit/components/OrderInfo.tsx
import { useEffect as useEffect11 } from "react";

// src/code.client/utils/events.ts
import Nanobus2 from "nanobus";
var eventBus2 = new Nanobus2();

// src/code.client/utils/pedidos.ts
function formatNombreArticulo(nombre, id_articulo, descriptionAdicional) {
  if (id_articulo == null)
    return NONEXISTENT_PRODUCT;
  if (nombre == null)
    return NO_NAME;
  let result = `${id_articulo} - ${nombre.trim()}`;
  return (descriptionAdicional ?? "").trim().length > 0 && (result = `${result} (${descriptionAdicional})`.trim()), result;
}
function formatAuxiliares(codigo, nombre, gender) {
  return codigo != null && nombre != null ? `${codigo} - ${nombre}` : gender === "f" ? NONE_F : NONE_M;
}
function formatCliente(codigo, nombre) {
  return `${codigo} - ${nombre}`;
}
var calculateBonificacion = (price, bonificacion) => price - price * bonificacion / 100, calculateTotals = (quantities, prices, globalDiscount) => {
  let total = 0;
  return quantities.forEach((quantity, id) => {
    let { amount, discount } = prices[id], finalDiscount = 100 - (discount ?? globalDiscount);
    total += quantity * amount * finalDiscount / 100;
  }), total;
};

// src/app/pages/orders_edit/components/OrderInfo.tsx
import {
  Box as Box16,
  Collapse,
  Grid as Grid10,
  GridItem as GridItem10,
  Heading as Heading8,
  useDisclosure as useDisclosure3
} from "@chakra-ui/react";
import { useFormContext as useFormContext2, useWatch } from "react-hook-form";

// src/app/components/form_elements/ControlledDatePicker.tsx
import {
  Flex as Flex6,
  FormControl as FormControl6,
  FormHelperText as FormHelperText5,
  FormLabel as FormLabel5,
  useColorModeValue as useColorModeValue3
} from "@chakra-ui/react";
import { useController as useController6 } from "react-hook-form";

// src/app/components/chakra-dayzed-datepicker/utils/calanderUtils.ts
var Month_Names_Short = [
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
], Weekday_Names_Short = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
];

// src/app/components/chakra-dayzed-datepicker/components/calendarPanel.tsx
import { useCallback as useCallback2, useMemo as useMemo6 } from "react";
import {
  Box as Box15,
  Divider as Divider6,
  Heading as Heading7,
  HStack as HStack10,
  SimpleGrid,
  Stack as Stack8,
  VStack as VStack3
} from "@chakra-ui/react";
import { useDayzed } from "dayzed";

// src/app/components/chakra-dayzed-datepicker/utils/reactKeysArrow.ts
var ArrowKeysReact = class {
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
};

// src/app/components/chakra-dayzed-datepicker/components/dateNavBtns.tsx
import { Button as Button8 } from "@chakra-ui/react";
import { Fragment as Fragment17 } from "react";
import { jsx as jsx50, jsxs as jsxs34 } from "react/jsx-runtime";
var DefaultBtnStyle = {
  variant: "ghost",
  size: "sm"
}, DatepickerBackBtns = (props) => {
  let { calendars, getBackProps } = props, customBtnProps = props.propsConfigs?.dateNavBtnProps;
  return /* @__PURE__ */ jsxs34(Fragment17, { children: [
    /* @__PURE__ */ jsx50(
      Button8,
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
    /* @__PURE__ */ jsx50(
      Button8,
      {
        ...getBackProps({ calendars }),
        ...DefaultBtnStyle,
        ...customBtnProps,
        children: "<"
      }
    )
  ] });
}, DatepickerForwardBtns = (props) => {
  let { calendars, getForwardProps } = props, customBtnProps = props.propsConfigs?.dateNavBtnProps;
  return /* @__PURE__ */ jsxs34(Fragment17, { children: [
    /* @__PURE__ */ jsx50(
      Button8,
      {
        ...getForwardProps({ calendars }),
        ...DefaultBtnStyle,
        ...customBtnProps,
        children: ">"
      }
    ),
    /* @__PURE__ */ jsx50(
      Button8,
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

// src/app/components/chakra-dayzed-datepicker/components/dayOfMonth.tsx
import { useMemo as useMemo5 } from "react";
import { Button as Button9 } from "@chakra-ui/react";
import { jsx as jsx51 } from "react/jsx-runtime";
var halfGap = 0.125, DayOfMonth = ({
  dateObj,
  propsConfigs,
  isInRange,
  disabledDates,
  renderProps,
  onMouseEnter
}) => {
  let { date: date2, selected, selectable, today } = dateObj, { getDateProps } = renderProps, {
    defaultBtnProps,
    isInRangeBtnProps,
    selectedBtnProps,
    todayBtnProps
  } = propsConfigs?.dayOfMonthBtnProps || {}, disabled = !selectable || !!(disabledDates != null && disabledDates.has(date2.getTime())), styleBtnProps = useMemo5(
    () => ({
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
          ...defaultBtnProps?._after
        },
        _hover: {
          bg: "purple.400",
          ...defaultBtnProps?._hover,
          _disabled: {
            bg: "gray.100",
            // temperory hack to persist the typescript checking
            ...defaultBtnProps?._hover?._disabled
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
    }),
    [defaultBtnProps, isInRangeBtnProps, selectedBtnProps, todayBtnProps]
  );
  return /* @__PURE__ */ jsx51(
    Button9,
    {
      ...getDateProps({
        dateObj,
        disabled,
        onMouseEnter
      }),
      isDisabled: disabled,
      ...styleBtnProps.defaultBtnProps,
      ...isInRange === !0 && !disabled && styleBtnProps.isInRangeBtnProps,
      ...selected && !disabled && styleBtnProps.selectedBtnProps,
      ...today && styleBtnProps.todayBtnProps,
      children: date2.getDate()
    }
  );
};

// src/app/components/chakra-dayzed-datepicker/components/calendarPanel.tsx
import { jsx as jsx52, jsxs as jsxs35 } from "react/jsx-runtime";
var CalendarPanel = ({
  dayzedHookProps,
  configs,
  propsConfigs,
  disabledDates,
  onMouseEnterHighlight,
  isInRange
}) => {
  let renderProps = useDayzed(dayzedHookProps), { calendars, getBackProps, getForwardProps } = renderProps, weekdayNames = useMemo6(() => {
    let firstDayOfWeek = configs.firstDayOfWeek, dayNames = configs.dayNames;
    return firstDayOfWeek && firstDayOfWeek > 0 ? configs.dayNames.slice(firstDayOfWeek, dayNames.length).concat(dayNames.slice(0, firstDayOfWeek)) : dayNames;
  }, [configs.firstDayOfWeek, configs.dayNames]), getKeyOffset = useCallback2((num) => {
    let e = document.activeElement, buttons = document.querySelectorAll("button");
    buttons.forEach((el, i) => {
      let newNodeKey = i + num;
      el === e && (newNodeKey <= buttons.length - 1 && newNodeKey >= 0 ? buttons[newNodeKey].focus() : buttons[0].focus());
    });
  }, []), arrowKeysReact = new ArrowKeysReact({
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
  return calendars.length <= 0 ? null : /* @__PURE__ */ jsx52(
    Stack8,
    {
      className: "datepicker-calendar",
      direction: ["column", "column", "row"],
      ...propsConfigs?.calendarPanelProps?.wrapperProps,
      ...arrowKeysReact.getEvents(),
      children: calendars.map((calendar, calendarIdx) => /* @__PURE__ */ jsxs35(
        VStack3,
        {
          height: "100%",
          borderWidth: "1px",
          padding: "0.5rem 0.75rem",
          ...propsConfigs?.calendarPanelProps?.contentProps,
          children: [
            /* @__PURE__ */ jsxs35(HStack10, { ...propsConfigs?.calendarPanelProps?.headerProps, children: [
              /* @__PURE__ */ jsx52(
                DatepickerBackBtns,
                {
                  calendars,
                  getBackProps,
                  propsConfigs
                }
              ),
              /* @__PURE__ */ jsxs35(
                Heading7,
                {
                  size: "sm",
                  minWidth: "5rem",
                  textAlign: "center",
                  ...propsConfigs?.dateHeadingProps,
                  children: [
                    configs.monthNames[calendar.month],
                    " ",
                    calendar.year
                  ]
                }
              ),
              /* @__PURE__ */ jsx52(
                DatepickerForwardBtns,
                {
                  calendars,
                  getForwardProps,
                  propsConfigs
                }
              )
            ] }),
            /* @__PURE__ */ jsx52(Divider6, { ...propsConfigs?.calendarPanelProps?.dividerProps }),
            /* @__PURE__ */ jsxs35(
              SimpleGrid,
              {
                columns: 7,
                spacing: 1,
                textAlign: "center",
                ...propsConfigs?.calendarPanelProps?.bodyProps,
                children: [
                  weekdayNames.map((day, dayIdx) => /* @__PURE__ */ jsx52(
                    Box15,
                    {
                      fontSize: "sm",
                      fontWeight: "semibold",
                      ...propsConfigs?.weekdayLabelProps,
                      children: day
                    },
                    dayIdx
                  )),
                  calendar.weeks.map((week, weekIdx) => week.map((dateObj, index) => {
                    let key = `${calendar.month}-${calendar.year}-${weekIdx}-${index}`;
                    if (dateObj == "")
                      return /* @__PURE__ */ jsx52(Box15, {}, key);
                    let { date: date2 } = dateObj;
                    return /* @__PURE__ */ jsx52(
                      DayOfMonth,
                      {
                        dateObj,
                        propsConfigs,
                        renderProps,
                        isInRange: isInRange && isInRange(date2),
                        disabledDates,
                        onMouseEnter: () => {
                          onMouseEnterHighlight && onMouseEnterHighlight(date2);
                        }
                      },
                      key
                    );
                  }))
                ]
              }
            )
          ]
        },
        calendarIdx
      ))
    }
  );
};

// src/app/components/chakra-dayzed-datepicker/single.tsx
import React4, { useEffect as useEffect10, useRef as useRef7, useState as useState11 } from "react";
import {
  Button as Button10,
  Input as Input3,
  Popover,
  PopoverAnchor,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure as useDisclosure2
} from "@chakra-ui/react";
import { format, parse as parse2, startOfDay } from "date-fns";
import FocusLock from "react-focus-lock";

// src/app/components/chakra-dayzed-datepicker/components/calendarIcon.tsx
import { jsx as jsx53 } from "react/jsx-runtime";
var CalendarIcon = () => /* @__PURE__ */ jsx53("svg", { viewBox: "0 0 14 14", width: "14px", height: "14px", focusable: "false", children: /* @__PURE__ */ jsx53(
  "path",
  {
    fill: "currentColor",
    d: "M10.8889,5.5 L3.11111,5.5 L3.11111,7.05556 L10.8889,7.05556 L10.8889,5.5 Z M12.4444,1.05556 L11.6667,1.05556 L11.6667,0 L10.1111,0 L10.1111,1.05556 L3.88889,1.05556 L3.88889,0 L2.33333,0 L2.33333,1.05556 L1.55556,1.05556 C0.692222,1.05556 0.00777777,1.75556 0.00777777,2.61111 L0,12.5 C0,13.3556 0.692222,14 1.55556,14 L12.4444,14 C13.3,14 14,13.3556 14,12.5 L14,2.61111 C14,1.75556 13.3,1.05556 12.4444,1.05556 Z M12.4444,12.5 L1.55556,12.5 L1.55556,3.94444 L12.4444,3.94444 L12.4444,12.5 Z M8.55556,8.61111 L3.11111,8.61111 L3.11111,10.1667 L8.55556,10.1667 L8.55556,8.61111 Z"
  }
) });

// src/app/components/chakra-dayzed-datepicker/single.tsx
import { Fragment as Fragment18, jsx as jsx54, jsxs as jsxs36 } from "react/jsx-runtime";
var DefaultConfigs = {
  dateFormat: "yyyy-MM-dd",
  monthNames: Month_Names_Short,
  dayNames: Weekday_Names_Short,
  firstDayOfWeek: 0,
  monthsToDisplay: 1
}, defaultProps = {
  defaultIsOpen: !1,
  closeOnSelect: !0,
  triggerVariant: "default"
}, SingleDatepicker = (props) => {
  let mergedProps = { ...defaultProps, ...props }, {
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
  } = mergedProps, [dateInView, setDateInView] = useState11(selectedDate), [offset, setOffset] = useState11(0), inputChangeRef = useRef7(), { onOpen, onClose, isOpen } = useDisclosure2({ defaultIsOpen }), Icon13 = mergedProps.triggerVariant === "input" && mergedProps.triggerIcon !== void 0 ? mergedProps.triggerIcon : /* @__PURE__ */ jsx54(CalendarIcon, {}), datepickerConfigs = {
    ...DefaultConfigs,
    ...configs
  }, [tempInput, setInputVal] = useState11(
    selectedDate ? format(selectedDate, datepickerConfigs.dateFormat) : ""
  ), onPopoverClose = () => {
    onClose(), setDateInView(selectedDate), setOffset(0);
  }, handleOnDateSelected = ({ selectable, date: date2 }) => {
    if (selectable && date2 instanceof Date && !isNaN(date2.getTime())) {
      onDateChange(date2), closeOnSelect && onClose();
      return;
    }
  }, handleInputChange = (event) => {
    setInputVal(event.target.value), inputChangeRef.current && clearTimeout(inputChangeRef.current), inputChangeRef.current = setTimeout(() => {
      let newDate = parse2(
        event.target.value,
        datepickerConfigs.dateFormat,
        /* @__PURE__ */ new Date()
      );
      if (!(newDate instanceof Date && !isNaN(newDate.getTime()))) {
        onDateChange("");
        return;
      }
      disabledDates?.has(startOfDay(newDate).getTime()) !== !0 && onDateChange(newDate);
    }, 500);
  }, PopoverContentWrapper = usePortal === !0 ? Portal : React4.Fragment;
  return useEffect10(() => {
    selectedDate && setInputVal(format(selectedDate, datepickerConfigs.dateFormat));
  }, [selectedDate, datepickerConfigs.dateFormat]), /* @__PURE__ */ jsxs36(
    Popover,
    {
      id,
      placement: "bottom-start",
      variant: "responsive",
      isOpen,
      onOpen,
      onClose: onPopoverClose,
      isLazy: !0,
      children: [
        !children && triggerVariant === "default" ? /* @__PURE__ */ jsx54(PopoverTrigger, { children: /* @__PURE__ */ jsx54(
          Button10,
          {
            type: "button",
            variant: "outline",
            lineHeight: 1,
            paddingX: "1rem",
            disabled,
            fontSize: "sm",
            ...propsConfigs?.triggerBtnProps,
            children: selectedDate ? format(selectedDate, datepickerConfigs.dateFormat) : ""
          }
        ) }) : null,
        !children && triggerVariant === "input" ? /* @__PURE__ */ jsxs36(Fragment18, { children: [
          /* @__PURE__ */ jsx54(PopoverAnchor, { children: /* @__PURE__ */ jsx54(
            Input3,
            {
              id,
              autoComplete: "off",
              disabled,
              isDisabled: disabled,
              name,
              value: tempInput,
              onChange: handleInputChange,
              width: "full",
              ...propsConfigs?.inputProps
            }
          ) }),
          /* @__PURE__ */ jsx54(PopoverTrigger, { children: /* @__PURE__ */ jsx54(
            Button10,
            {
              position: "absolute",
              variant: "ghost",
              right: "0",
              size: "sm",
              marginRight: "5px",
              zIndex: 1,
              type: "button",
              isDisabled: disabled === !0 || isReadOnly,
              padding: "8px",
              ...propsConfigs?.triggerIconBtnProps,
              children: Icon13
            }
          ) })
        ] }) : null,
        children ? children(selectedDate) : null,
        /* @__PURE__ */ jsx54(
          PopoverContentWrapper,
          {
            ...usePortal === !0 ? { containerRef: portalRef } : {},
            children: /* @__PURE__ */ jsx54(
              PopoverContent,
              {
                width: "100%",
                ...propsConfigs?.popoverCompProps?.popoverContentProps,
                children: /* @__PURE__ */ jsx54(PopoverBody, { ...propsConfigs?.popoverCompProps?.popoverBodyProps, children: /* @__PURE__ */ jsx54(FocusLock, { children: /* @__PURE__ */ jsx54(
                  CalendarPanel,
                  {
                    dayzedHookProps: {
                      showOutsideDays: !0,
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

// src/app/components/form_elements/ControlledDatePicker.tsx
import { jsx as jsx55, jsxs as jsxs37 } from "react/jsx-runtime";
var ControlledDatePicker = (props) => {
  let { fieldProps, formControlProps, formControlInnerProps, control } = props, containerBgColor = useColorModeValue3("gray.50", "gray.800"), {
    field: { ref: ref3, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController6({
    name: fieldProps.name,
    control
  }), { label, helperText } = formControlInnerProps || {};
  return /* @__PURE__ */ jsxs37(FormControl6, { ...formControlProps, isInvalid: invalid, children: [
    label != null && /* @__PURE__ */ jsx55(FormLabel5, { htmlFor: `popover-trigger-${fieldProps.id}`, children: label }),
    /* @__PURE__ */ jsx55(Flex6, { gap: "1rem", alignItems: "center", children: /* @__PURE__ */ jsx55(
      SingleDatepicker,
      {
        ...fieldProps,
        closeOnSelect: !0,
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
    helperText != null && /* @__PURE__ */ jsx55(FormHelperText5, { children: helperText })
  ] });
};

// src/app/components/TextPrice.tsx
import { Text as Text6 } from "@chakra-ui/react";
import { Fragment as Fragment19, jsx as jsx56 } from "react/jsx-runtime";
function formatNumber(num) {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
var TextSpecialPrice = (textProps) => /* @__PURE__ */ jsx56(Text6, { textAlign: "right", ...textProps, children: "Especial" }), TextPrice = ({ precio, moneda, textProps }) => /* @__PURE__ */ jsx56(Text6, { textAlign: "right", ...textProps, children: TextPricePlain(precio, moneda) }), TextPriceNative = ({ precio, moneda }) => /* @__PURE__ */ jsx56(Fragment19, { children: TextPricePlain(precio, moneda) }), TextPricePlain = (precio, moneda) => `${moneda != null && moneda + " "}${formatNumber(precio)}`;

// src/app/pages/orders_edit/components/OrderInfo.tsx
import { Fragment as Fragment20, jsx as jsx57, jsxs as jsxs38 } from "react/jsx-runtime";
var OrderTotal = ({ prices }) => {
  let isCustomer = useAppResources().authState.isCustomer(), { control } = useFormContext2(), quantitiesWatch = useWatch({
    control,
    name: "quantities"
  }), bonificacionWatch = useWatch({
    control,
    name: "bonificacion"
  }), total = calculateTotals(quantitiesWatch, prices, bonificacionWatch);
  return /* @__PURE__ */ jsxs38(Fragment20, { children: [
    /* @__PURE__ */ jsxs38(Heading8, { textTransform: "uppercase", size: "xs", children: [
      "Total (Sin IVA)",
      !isCustomer && bonificacionWatch > 0 && ` - Bonif. ${bonificacionWatch}%`
    ] }),
    /* @__PURE__ */ jsx57(
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
}, OrderInfo = (props) => {
  let { isDraft, cabecera, disableForm, prices } = props, isCustomer = useAppResources().authState.isCustomer(), { isOpen, onToggle } = useDisclosure3({
    defaultIsOpen: !0
  }), {
    control,
    reset,
    watch,
    formState: { isSubmitted, isSubmitting }
  } = useFormContext2(), fecha_altaWatch = watch("fecha_alta");
  useEffect11(() => {
    let handleDetailsToggle = () => {
      isOpen && onToggle();
    };
    return eventBus2.on("togglePedidoCategory", handleDetailsToggle), () => {
      eventBus2.removeListener("togglePedidoCategory", handleDetailsToggle);
    };
  }, []);
  let fieldsMap = {
    label: "name",
    value: "id",
    selected: "selected"
  }, transporteOptions = buildSelectOptions({
    data: cabecera.transportes,
    fieldsMap
  }), condicionVentaOptions = buildSelectOptions({
    data: cabecera.condiciones,
    fieldsMap
  }), tipoAsientoOptions = buildSelectOptions({
    data: cabecera.asientos,
    fieldsMap
  }), talonarioOptions = buildSelectOptions({
    data: cabecera.talonarios,
    fieldsMap
  }), depositoOptions = buildSelectOptions({
    data: cabecera.depositos,
    fieldsMap
  }), direccionesOptions = buildSelectOptions({
    data: cabecera.direcciones,
    fieldsMap: {
      label: ["name", "calle_numero"],
      value: "id",
      selected: "habitual"
    }
  }), fechaAltaVisible = !isCustomer || isCustomer && cabecera.fecha_alta_editable, fechaEntregaVisible = !isCustomer || isCustomer && cabecera.fecha_entrega_editable, condicionVentaVisible = !isCustomer || isCustomer && cabecera.condicion_editable, tipoAsientoVisible = !isCustomer || isCustomer && cabecera.asiento_editable, transporteVisible = !isCustomer || isCustomer && cabecera.transporte_editable, talonarioVisible = !isCustomer || isCustomer && cabecera.talonario_editable, depositoVisible = !isCustomer || isCustomer && cabecera.deposito_editable, direccionVisible = !isCustomer || isCustomer && cabecera.direccion_editable, bonificacionVisible = !isCustomer || isCustomer && cabecera.bonificacion_editable;
  return /* @__PURE__ */ jsx57(Fragment20, { children: /* @__PURE__ */ jsxs38(Box16, { children: [
    isDraft && /* @__PURE__ */ jsx57(
      CommonCard,
      {
        cardProps: { variant: "filled" },
        cardBodyProps: {
          p: 0
        },
        children: /* @__PURE__ */ jsxs38(
          Grid10,
          {
            templateColumns: "1fr",
            alignItems: "center",
            gap: 4,
            sx: { p: 4 },
            children: [
              /* @__PURE__ */ jsx57(GridItem10, { children: /* @__PURE__ */ jsx57(Heading8, { size: "sm", textTransform: "uppercase", children: "Descripci\xF3n del borrador" }) }),
              /* @__PURE__ */ jsx57(GridItem10, { children: /* @__PURE__ */ jsx57(
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
    /* @__PURE__ */ jsxs38(
      CommonCard,
      {
        cardProps: { variant: "filled" },
        cardBodyProps: {
          p: 0
        },
        children: [
          /* @__PURE__ */ jsxs38(
            Grid10,
            {
              templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
              alignItems: "center",
              gap: 4,
              onClick: onToggle,
              cursor: "pointer",
              sx: { p: 4 },
              children: [
                /* @__PURE__ */ jsxs38(GridItem10, { children: [
                  /* @__PURE__ */ jsx57(Heading8, { size: "xs", children: "Cliente:" }),
                  /* @__PURE__ */ jsx57(Heading8, { size: "md", textTransform: "uppercase", sx: { mt: 1 }, children: cabecera.nombre_cliente })
                ] }),
                /* @__PURE__ */ jsx57(GridItem10, { textAlign: { md: "end" }, children: /* @__PURE__ */ jsx57(OrderTotal, { prices }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx57(Collapse, { in: isOpen, style: { overflow: "inherit" }, children: /* @__PURE__ */ jsxs38(
            Grid10,
            {
              templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
              alignItems: "center",
              gap: 4,
              sx: { p: 4, pt: 0 },
              children: [
                !isDraft && fechaAltaVisible && /* @__PURE__ */ jsx57(GridItem10, { children: /* @__PURE__ */ jsx57(
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
                !isDraft && fechaEntregaVisible && /* @__PURE__ */ jsx57(GridItem10, { children: /* @__PURE__ */ jsx57(
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
                condicionVentaVisible && /* @__PURE__ */ jsx57(GridItem10, { children: /* @__PURE__ */ jsx57(
                  ControlledSelect,
                  {
                    fieldProps: {
                      name: "id_condicion",
                      id: "id_condicion",
                      placeholder: "Seleccione una condici\xF3n",
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
                      label: "Condici\xF3n de venta"
                    },
                    control
                  }
                ) }),
                tipoAsientoVisible && /* @__PURE__ */ jsx57(GridItem10, { children: /* @__PURE__ */ jsx57(
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
                transporteVisible && /* @__PURE__ */ jsx57(GridItem10, { children: /* @__PURE__ */ jsx57(
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
                talonarioVisible && /* @__PURE__ */ jsx57(GridItem10, { children: /* @__PURE__ */ jsx57(
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
                depositoVisible && /* @__PURE__ */ jsx57(GridItem10, { children: /* @__PURE__ */ jsx57(
                  ControlledSelect,
                  {
                    fieldProps: {
                      name: "id_deposito",
                      id: "id_deposito",
                      placeholder: "Seleccione un dep\xF3sito",
                      options: depositoOptions,
                      noOptionsMessage(obj) {
                        return "No hay dep\xF3sitos disponibles";
                      },
                      selectedOptionStyle: "check",
                      isSearchable: cabecera.deposito_editable
                    },
                    formControlProps: {
                      isDisabled: disableForm
                    },
                    formControlInnerProps: {
                      label: "Dep\xF3sito"
                    },
                    control
                  }
                ) }),
                direccionVisible && /* @__PURE__ */ jsx57(GridItem10, { children: /* @__PURE__ */ jsx57(
                  ControlledSelect,
                  {
                    fieldProps: {
                      name: "id_direccion",
                      id: "id_direccion",
                      placeholder: "Seleccione una direcci\xF3n",
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
                      label: "Direcci\xF3n"
                    },
                    control
                  }
                ) }),
                bonificacionVisible && /* @__PURE__ */ jsx57(GridItem10, { children: /* @__PURE__ */ jsx57(
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
                        /^(,|-|\+)$/.test(e.key) && e.preventDefault();
                      },
                      onFocus: (e) => {
                        e.target.select();
                      },
                      onChange: (e) => {
                        if (e.target.value === "")
                          return;
                        let parsedValue = parseFloat(e.target.value);
                        parsedValue || (e.target.value = "0"), parsedValue < 0 && (e.target.value = "0"), parsedValue > 100 && (e.target.value = "100");
                      },
                      isReadOnly: !cabecera.bonificacion_editable
                    },
                    formControlProps: {
                      isDisabled: disableForm
                    },
                    formControlInnerProps: {
                      label: "Bonificaci\xF3n (%)"
                    },
                    control
                  }
                ) }),
                /* @__PURE__ */ jsx57(GridItem10, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx57(
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

// src/app/pages/orders_edit/components/ProductsTable.tsx
import React5, { useEffect as useEffect12, useState as useState12 } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Alert as Alert5,
  AlertIcon as AlertIcon4,
  Badge as Badge3,
  Box as Box17,
  Heading as Heading9
} from "@chakra-ui/react";
import _7 from "lodash";
import { useFormContext as useFormContext5, useWatch as useWatch4 } from "react-hook-form";

// src/app/pages/orders_edit/components/ProductsList.tsx
import { AccordionPanel, useColorModeValue as useColorModeValue5 } from "@chakra-ui/react";
import { useFormContext as useFormContext4, useWatch as useWatch3 } from "react-hook-form";

// src/app/pages/orders_edit/components/ProductRow.tsx
import { useColorModeValue as useColorModeValue4 } from "@chakra-ui/react";
import { useFormContext as useFormContext3, useWatch as useWatch2 } from "react-hook-form";
import { jsx as jsx58, jsxs as jsxs39 } from "react/jsx-runtime";
var ProductsRow = (props) => {
  let { product, bonificacionGlobal } = props, { id, codigo, nombre, precio, bonificacion } = product, rowColor = useColorModeValue4(
    "var(--chakra-colors-yellow-100)",
    "var(--chakra-colors-green-900)"
  ), inputBorderColor = useColorModeValue4(
    "var(--chakra-colors-blackAlpha-800)",
    "var(--chakra-colors-whiteAlpha-300)"
  ), inputBackgroundColor = useColorModeValue4(
    "var(--chakra-colors-white)",
    "var(--chakra-colors-gray-800)"
  ), {
    control,
    register,
    formState: { isSubmitted, isSubmitting }
  } = useFormContext3(), precioBonificacion = calculateBonificacion(
    precio,
    bonificacion ?? bonificacionGlobal
  ), productSum = useWatch2({ control, name: `quantities.${id}` }) * precioBonificacion, disableWheelFn = (wheelEv) => {
    wheelEv.preventDefault();
  }, inputFieldProps = {
    type: "number",
    min: 0,
    inputMode: "tel",
    size: 5,
    onKeyDown: (e) => {
      /^(\.|,|-|\+)$/.test(e.key) && e.preventDefault();
    },
    onChange: (e) => parseInt(e.target.value),
    onFocus: (e) => {
      e.target.addEventListener("mousewheel", disableWheelFn), e.target.select();
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
    disabled: !1,
    //isSubmitted || isSubmitting
    autoComplete: "off"
  };
  return /* @__PURE__ */ jsxs39(
    "div",
    {
      className: "grid",
      style: { ...productSum && { backgroundColor: rowColor } },
      children: [
        /* @__PURE__ */ jsxs39("div", { className: "word-break-all", children: [
          codigo,
          " - ",
          nombre
        ] }),
        /* @__PURE__ */ jsx58("div", { className: "text-right hidden-on-base", children: precio != null && (bonificacion == null ? /* @__PURE__ */ jsx58(TextPriceNative, { precio, moneda: "$" }) : /* @__PURE__ */ jsx58(TextSpecialPrice, {})) }),
        /* @__PURE__ */ jsx58("div", { className: "text-right", children: precio != null && /* @__PURE__ */ jsx58(TextPriceNative, { precio: precioBonificacion, moneda: "$" }) }),
        /* @__PURE__ */ jsx58("div", { className: "text-center", children: /* @__PURE__ */ jsx58("input", { ...inputFieldProps, ...register(`quantities.${id}`) }) }),
        /* @__PURE__ */ jsx58("div", { className: "text-right", children: productSum != null && /* @__PURE__ */ jsx58(TextPriceNative, { precio: productSum, moneda: "$" }) })
      ]
    }
  );
};

// src/app/pages/orders_edit/components/ProductsList.tsx
import { jsx as jsx59, jsxs as jsxs40 } from "react/jsx-runtime";
function ProductsList({
  articulos
}) {
  let { control } = useFormContext4(), bonificacionWatch = useWatch3({
    control,
    name: "bonificacion"
  }), rowColor = useColorModeValue5(
    "var(--chakra-colors-gray-200)",
    "var(--chakra-colors-black)"
  );
  return /* @__PURE__ */ jsxs40(AccordionPanel, { sx: { p: 4, pt: 0 }, children: [
    /* @__PURE__ */ jsxs40("div", { className: "grid heading", style: { backgroundColor: `${rowColor}` }, children: [
      /* @__PURE__ */ jsx59("div", { className: "hidden-on-base", children: /* @__PURE__ */ jsx59("strong", { children: "Art\xEDculo" }) }),
      /* @__PURE__ */ jsx59("div", { className: "text-right hidden-on-base", children: /* @__PURE__ */ jsx59("strong", { children: "Lista" }) }),
      /* @__PURE__ */ jsx59("div", { className: "text-right", children: /* @__PURE__ */ jsx59("strong", { children: "Bonificado" }) }),
      /* @__PURE__ */ jsx59("div", { className: "text-center", children: /* @__PURE__ */ jsx59("strong", { children: "Cantidad" }) }),
      /* @__PURE__ */ jsx59("div", { className: "text-right", children: /* @__PURE__ */ jsx59("strong", { children: "Subtotal" }) })
    ] }),
    /* @__PURE__ */ jsx59("div", { children: articulos.map((product, index) => /* @__PURE__ */ jsx59(
      ProductsRow,
      {
        product,
        bonificacionGlobal: bonificacionWatch
      },
      `product-row-${product.id}`
    )) })
  ] });
}

// src/app/pages/orders_edit/components/ProductsTable.tsx
import { jsx as jsx60, jsxs as jsxs41 } from "react/jsx-runtime";
var CategoryAccordionButton = (props) => {
  let { control } = useFormContext5(), { categoryName, articulos } = props, bonificacionWatch = useWatch4({ control, name: "bonificacion" }), categorySum;
  return articulos?.forEach(({ id, precio, bonificacion }) => {
    let productQuantity = useWatch4({ control, name: `quantities.${id}` });
    if (productQuantity > 0) {
      let precioBonificacion = calculateBonificacion(
        precio,
        bonificacion ?? bonificacionWatch
      );
      categorySum = (categorySum ?? 0) + productQuantity * precioBonificacion;
    }
  }), /* @__PURE__ */ jsxs41(
    AccordionButton,
    {
      sx: {
        p: 4,
        _hover: {
          bg: "none"
        }
      },
      children: [
        /* @__PURE__ */ jsx60(AccordionIcon, { sx: { me: 2 } }),
        /* @__PURE__ */ jsx60(Box17, { as: "span", flex: "1", textAlign: "left", children: /* @__PURE__ */ jsx60(
          Heading9,
          {
            size: ["sm", "md"],
            sx: {
              textTransform: "uppercase"
            },
            children: categoryName
          }
        ) }),
        categorySum != null && /* @__PURE__ */ jsx60(Box17, { children: /* @__PURE__ */ jsx60(Badge3, { variant: "subtle", colorScheme: "yellow", fontSize: "0.9em", children: /* @__PURE__ */ jsx60(TextPriceNative, { precio: categorySum, moneda: "$" }) }) })
      ]
    }
  );
}, ProductsTable = (props) => {
  let { disableForm, unfilteredProducts, filteredProducts, isFiltering } = props, [index, setIndex] = useState12(null), totalCategories = _7.keys(filteredProducts).length, filledUpCategories = _7.keys(
    _7.pickBy(
      filteredProducts,
      (value) => Array.isArray(value) && value.length > 0
    )
  );
  return useEffect12(() => {
    setIndex(isFiltering ? _7.range(totalCategories) : null);
  }, [isFiltering]), useEffect12(() => {
    index != null && eventBus2.emit("togglePedidoCategory");
  }, [index]), filledUpCategories.length ? /* @__PURE__ */ jsx60(
    Accordion,
    {
      allowToggle: !0,
      reduceMotion: !0,
      ...totalCategories === 1 ? { defaultIndex: [0] } : {},
      ...index != null && { index },
      onChange: setIndex,
      children: _7.map(filteredProducts, (articulos, categoria) => {
        let categoryName = categoria === ARTICLE_GROUP_NO_NAME ? PEDIDO_ARTICLE_GROUP_NO_NAME : categoria;
        return articulos.length ? /* @__PURE__ */ jsx60(
          AccordionItem,
          {
            sx: {
              border: "none"
            },
            children: ({ isExpanded }) => /* @__PURE__ */ jsxs41(
              CommonCard,
              {
                cardProps: {
                  borderWidth: "1px"
                },
                cardBodyProps: {
                  p: 0
                },
                children: [
                  /* @__PURE__ */ jsx60(
                    CategoryAccordionButton,
                    {
                      categoryName,
                      articulos: unfilteredProducts[categoria]
                    }
                  ),
                  isExpanded && /* @__PURE__ */ jsx60(ProductsList, { articulos })
                ]
              }
            )
          },
          `accordion-${categoria}`
        ) : /* @__PURE__ */ jsx60(React5.Fragment, {}, `accordion-${categoria}`);
      })
    }
  ) : /* @__PURE__ */ jsxs41(Alert5, { status: "info", children: [
    /* @__PURE__ */ jsx60(AlertIcon4, {}),
    FILTER_NO_RESULTS
  ] });
};

// src/app/pages/orders_edit/components/success.tsx
import { Fragment as Fragment21, jsx as jsx61, jsxs as jsxs42 } from "react/jsx-runtime";
var Success6 = (props) => {
  let { draft, pedidoState } = props, isEditing = props.isEditing === !0, [isDraft, setIsDraft] = useState13(draft), app = useAppResources(), toast = useToast6(), { yupValidationSchema: yupValidationSchema5 } = useCustomValidationSchema4(isDraft), quantities = [], prices = {};
  _8.forOwn(pedidoState.articulos, (articulos) => {
    articulos.forEach((product) => {
      prices[product.id] = {
        amount: product.precio,
        discount: product.bonificacion
      }, quantities[product.id] = product.cantidad ?? 0;
    });
  });
  let formMethods = useForm6({
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
    resolver: yupResolver5(yupValidationSchema5)
  }), {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = formMethods, disableForm = isSubmitSuccessful || isSubmitting, quantitiesToRenglones = (quantities2) => {
    let renglones = [];
    return quantities2.forEach((quantity, id) => {
      quantity != null && quantity > 0 && renglones.push({
        id,
        quantity
      });
    }), renglones;
  }, handleCreatePedido = async (dataUnsafe) => {
    let renglones = quantitiesToRenglones(dataUnsafe.quantities), {
      quantities: _quantities,
      descripcion: _descripcion,
      ...data
    } = dataUnsafe, input = {
      ...data,
      fecha_alta: format2(data.fecha_alta, DATE_FORMAT_API),
      fecha_entrega: format2(data.fecha_entrega, DATE_FORMAT_API),
      id_cliente: pedidoState.cabecera.id_cliente,
      renglones
    };
    (await createOrderRequest(input, app)).map({
      success: (state) => {
        toast({
          title: ORDER_CREATED,
          description: ORDER_CREATED_NUMBER.replace(
            "{{numero_pedido}}",
            state.data.numero_pedido
          ),
          status: "success"
        }), app.navigate(URL_PEDIDOS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }, handleUpdatePedido = async (dataUnsafe) => {
    if (pedidoState.cabecera.id_pedido == null)
      throw Error("Invalid pedidoState.cabecera.id_pedido");
    let renglones = quantitiesToRenglones(dataUnsafe.quantities), {
      quantities: _quantities,
      descripcion: _descripcion,
      ...data
    } = dataUnsafe, input = {
      ...data,
      fecha_alta: format2(data.fecha_alta, DATE_FORMAT_API),
      fecha_entrega: format2(data.fecha_entrega, DATE_FORMAT_API),
      id_pedido: pedidoState.cabecera.id_pedido,
      renglones
    };
    (await updateOrderRequest(input.id_pedido, input, app)).map({
      success: (state) => {
        toast({
          title: ORDER_UPDATED,
          description: ORDER_UPDATED_NUMBER.replace(
            "{{numero_pedido}}",
            state.data.numero_pedido
          ),
          status: "success"
        }), app.navigate(URL_PEDIDOS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }, handleCreateDraft = async (dataUnsafe) => {
    let renglones = quantitiesToRenglones(dataUnsafe.quantities), {
      quantities: _quantities,
      fecha_alta: _fecha_alta,
      fecha_entrega: _fecha_entrega,
      ...data
    } = dataUnsafe, input = {
      ...data,
      id_cliente: pedidoState.cabecera.id_cliente,
      renglones
    };
    (await createDraftRequest(input, app)).map({
      success: (state) => {
        toast({
          title: DRAFT_CREATED,
          description: DRAFT_CREATED_NUMBER.replace(
            "{{numero_pedido}}",
            state.data.numero_pedido
          ),
          status: "success"
        }), app.navigate(URL_BORRADORES_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }, handleUpdateDraft = async (dataUnsafe) => {
    if (pedidoState.cabecera.id_pedido == null)
      throw Error("Invalid pedidoState.cabecera.id_pedido");
    let renglones = quantitiesToRenglones(dataUnsafe.quantities), {
      quantities: _quantities,
      fecha_alta: _fecha_alta,
      fecha_entrega: _fecha_entrega,
      ...data
    } = dataUnsafe, input = {
      ...data,
      id_pedido: pedidoState.cabecera.id_pedido,
      renglones
    };
    (await updateDraftRequest(input.id_pedido, input, app)).map({
      success: (state) => {
        toast({
          title: DRAFT_UPDATED,
          description: DRAFT_UPDATED_NUMBER.replace(
            "{{numero_pedido}}",
            state.data.numero_pedido
          ),
          status: "success"
        }), app.navigate(URL_BORRADORES_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }, {
    filteredData: filteredProducts,
    handleSearchInputChange,
    isFiltering
  } = useSearchField(pedidoState.articulos, ["codigo", "nombre"]);
  return /* @__PURE__ */ jsx61(Fragment21, { children: /* @__PURE__ */ jsx61(FormProvider, { ...formMethods, children: /* @__PURE__ */ jsxs42("form", { noValidate: !0, children: [
    /* @__PURE__ */ jsx61(
      OrdersAddNav,
      {
        isDraft,
        isEditing: isEditing ?? !1,
        isDisabled: disableForm,
        setIsDraft,
        handleSearchInputChange,
        handlePedidoAction: isEditing ? handleUpdatePedido : handleCreatePedido,
        handleDraftAction: isEditing ? handleUpdateDraft : handleCreateDraft
      }
    ),
    /* @__PURE__ */ jsxs42(Box18, { sx: { my: 4 }, children: [
      /* @__PURE__ */ jsx61(FormErrors, { errors }),
      /* @__PURE__ */ jsx61(
        OrderInfo,
        {
          isDraft,
          cabecera: pedidoState.cabecera,
          disableForm,
          prices
        }
      ),
      /* @__PURE__ */ jsx61(
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

// src/app/pages/orders_edit/index.tsx
import { jsx as jsx62 } from "react/jsx-runtime";
var OrdersAddPage = (props) => {
  let { client, draft } = props, navigate = useNavigate10(), idCustomer = client != null ? Number.parseInt(client) : null;
  return /* @__PURE__ */ jsx62(_OrdersAddPage, { client: idCustomer, draft });
}, _OrdersAddPage = (props) => {
  let { client, draft } = props, { state, retry } = draft ? useBorradorStartNew(client) : usePedidoStartNew(client);
  return state.map({
    loading: (_14) => /* @__PURE__ */ jsx62(Loading5, {}),
    error: ({ error }) => /* @__PURE__ */ jsx62(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: draft ? URL_BORRADORES_PATH : URL_PEDIDOS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx62(Success6, { pedidoState: state2.data, draft })
  });
}, OrdersEditPage = (props) => {
  let { id_pedido, draft } = props, navigate = useNavigate10(), idPedido = id_pedido != null ? Number.parseInt(id_pedido) : null;
  return isAnInteger(idPedido) && idPedido > 0 ? /* @__PURE__ */ jsx62(_OrdersEditPage, { id_pedido: idPedido, draft }) : /* @__PURE__ */ jsx62(
    CommonErrors,
    {
      error: getDXTErrorDescription(10001 /* INVALID_PARAMETER */),
      buttonProps: {
        label: BACK_TO_PEDIDOS,
        colorScheme: "green",
        onClick: () => {
          navigate(URL_PEDIDOS_PATH);
        }
      }
    }
  );
}, _OrdersEditPage = (props) => {
  let { id_pedido, draft } = props, { state, retry } = draft ? useBorradorStartUpdate(id_pedido) : usePedidoStartUpdate(id_pedido);
  return state.map({
    loading: (_14) => /* @__PURE__ */ jsx62(Loading5, {}),
    error: ({ error }) => /* @__PURE__ */ jsx62(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: draft ? URL_BORRADORES_PATH : URL_PEDIDOS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx62(Success6, { pedidoState: state2.data, draft, isEditing: !0 })
  });
};

// src/app/routes/_authorized.drafts.$id_pedido.edit/route.tsx
import { jsx as jsx63 } from "react/jsx-runtime";
function OrdersAdd() {
  let { id_pedido } = useParams5();
  return /* @__PURE__ */ jsx63(Container, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx63(OrdersEditPage, { id_pedido, draft: !0 }) });
}

// src/app/routes/_authorized.orders.$id_pedido.edit/route.tsx
var route_exports7 = {};
__export(route_exports7, {
  default: () => OrdersAdd2
});
import { useParams as useParams6 } from "@remix-run/react";
import { Container as Container2 } from "@chakra-ui/react";
import { jsx as jsx64 } from "react/jsx-runtime";
function OrdersAdd2() {
  let { id_pedido } = useParams6();
  return /* @__PURE__ */ jsx64(Container2, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx64(OrdersEditPage, { id_pedido, draft: !1 }) });
}

// src/app/routes/api.pedido.$id_pedido.start_update.ts
var api_pedido_id_pedido_start_update_exports = {};
__export(api_pedido_id_pedido_start_update_exports, {
  action: () => action3,
  loader: () => loader4
});
async function loader4({ request, params }) {
  return await startOrderUpdateEndpoint.get(request, params);
}
var action3 = unimplementedApiResponse;

// src/app/routes/_admin.settings.users.vendors.add/route.tsx
var route_exports8 = {};
__export(route_exports8, {
  default: () => Add2
});
import { useNavigate as useNavigate11 } from "@remix-run/react";

// src/app/routes/_admin.settings.users.vendors.add/components/success.tsx
import { useEffect as useEffect13 } from "react";
import {
  Box as Box19,
  Divider as Divider7,
  Grid as Grid11,
  GridItem as GridItem11,
  Heading as Heading10,
  HStack as HStack11,
  Stack as Stack9,
  useToast as useToast7
} from "@chakra-ui/react";
import { yupResolver as yupResolver6 } from "@hookform/resolvers/yup";
import { useForm as useForm7 } from "react-hook-form";

// src/app/routes/_admin.settings.users.vendors.add/validation.ts
import { useState as useState14 } from "react";
import * as yup7 from "yup";
import _9 from "lodash";
var useCustomValidationSchema5 = () => {
  let [passwordStatus, setPasswordStatus] = useState14(null), customValidationSchema = yup7.object({
    password: yup7.string().required("Ingrese una contrase\xF1a").test("password", "Formato de contrase\xF1a no v\xE1lido", (v) => {
      if (v != "" && v != null) {
        let newPasswordStatus = dxtPasswordStatus(v);
        return _9.isEqual(passwordStatus, newPasswordStatus) || setPasswordStatus(newPasswordStatus), yupVOValidation(VODXTPassword, v);
      }
      return !0;
    })
  }).required();
  return { yupValidationSchema: commonValidationSchema.concat(customValidationSchema), passwordStatus };
};

// src/app/routes/_admin.settings.users.vendors.add/components/success.tsx
import { jsx as jsx65, jsxs as jsxs43 } from "react/jsx-runtime";
var Success7 = (props) => {
  let { typeSettings } = props, app = useAppResources(), toast = useToast7(), { yupValidationSchema: yupValidationSchema5, passwordStatus } = useCustomValidationSchema5(), { state: statePerfiles, result: resultPerfiles } = useTangoList({
    endpoint: API_TANGO_PERFIL_GET_ALL,
    fieldsMap: {
      label: "name",
      value: "id"
    }
  }), { state: stateRelationship, result: resultRelationship } = typeSettings.api.getRelation(), {
    handleSubmit,
    control,
    setError,
    resetField,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm7({
    defaultValues: {
      username: "",
      password: "",
      email: "",
      tango_id: 0,
      perfil_facturacion_id: 0,
      habilitado_en_dxt: !0,
      puede_crear_pedido: !0,
      puede_editar_pedido: !0,
      ver_pedidos_cumplidos: !0,
      ver_sin_precio: !1,
      mostrar_mensaje_de_advertencia: !1,
      puede_anular_pedido: !1,
      borrar_pedido_al_anular: !1,
      aprobar_pedido_al_crear: !1,
      dia_de_entrega: 30
    },
    resolver: yupResolver6(yupValidationSchema5)
  }), watchPuedeAnularPedido = watch("puede_anular_pedido");
  useEffect13(() => {
    watchPuedeAnularPedido === !1 && resetField("borrar_pedido_al_anular", { defaultValue: !1 });
  }, [watchPuedeAnularPedido]);
  let disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx65("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let { ...data } = dataUnsafe;
    data.email === "" && delete data.email;
    let input = data;
    (await typeSettings.api.post(input, app)).map({
      success: (_14) => {
        toast({
          title: USER_CREATED,
          status: "success"
        }), app.navigate(URL_SETTINGS_VENDORS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }), children: /* @__PURE__ */ jsxs43(Box19, { children: [
    /* @__PURE__ */ jsx65(FormErrors, { errors }),
    /* @__PURE__ */ jsx65(CommonCard, { children: /* @__PURE__ */ jsxs43(
      Grid11,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx65(GridItem11, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx65(Heading10, { size: "sm", textTransform: "uppercase", children: "Informaci\xF3n del Vendedor" }) }),
          /* @__PURE__ */ jsxs43(GridItem11, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx65(
              ControlledSelect,
              {
                fieldProps: {
                  name: "tango_id",
                  placeholder: typeSettings.tangoRelatedFields?.placeholder,
                  options: resultRelationship,
                  noOptionsMessage(obj) {
                    return typeSettings.tangoRelatedFields?.empty;
                  },
                  isSearchable: !0,
                  selectedOptionStyle: "check",
                  isLoading: stateRelationship instanceof FetchStateLoading,
                  virtualized: !0
                },
                formControlProps: {
                  isDisabled: disableForm || !(stateRelationship instanceof FetchStateSuccess)
                },
                formControlInnerProps: {
                  label: typeSettings.tangoRelatedFields?.label
                },
                control
              }
            ),
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx65(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx65(GridItem11, { children: /* @__PURE__ */ jsx65(
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
          /* @__PURE__ */ jsx65(GridItem11, { children: /* @__PURE__ */ jsx65(
            PasswordWithStatus,
            {
              fieldProps: {
                name: "password",
                id: "password"
              },
              formControlInnerProps: {
                label: "Contrase\xF1a"
              },
              passwordStatus,
              disableForm,
              control
            }
          ) }),
          /* @__PURE__ */ jsx65(GridItem11, { children: /* @__PURE__ */ jsx65(
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
                label: "Correo electr\xF3nico"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx65(GridItem11, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx65(Divider7, {}) }),
          /* @__PURE__ */ jsxs43(GridItem11, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx65(
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
                  label: "Perfil de facturaci\xF3n"
                },
                control
              }
            ),
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx65(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx65(GridItem11, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx65(Divider7, {}) }),
          /* @__PURE__ */ jsx65(GridItem11, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx65(Heading10, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx65(GridItem11, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx65(
            ControlledRadio,
            {
              fieldProps: {
                name: "habilitado_en_dxt",
                options: [
                  {
                    value: !0,
                    label: "Establecido en Tango"
                  },
                  {
                    value: !1,
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
          /* @__PURE__ */ jsx65(GridItem11, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx65(Divider7, {}) }),
          /* @__PURE__ */ jsx65(GridItem11, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx65(Heading10, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }) }),
          /* @__PURE__ */ jsx65(GridItem11, { children: /* @__PURE__ */ jsx65(
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
    /* @__PURE__ */ jsx65(CommonCard, { children: /* @__PURE__ */ jsxs43(
      Grid11,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx65(GridItem11, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx65(Heading10, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx65(GridItem11, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs43(Stack9, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx65(HStack11, { spacing: 4, children: /* @__PURE__ */ jsx65(
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
            /* @__PURE__ */ jsx65(HStack11, { spacing: 4, children: /* @__PURE__ */ jsx65(
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
            /* @__PURE__ */ jsx65(HStack11, { spacing: 4, children: /* @__PURE__ */ jsx65(
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
            /* @__PURE__ */ jsx65(HStack11, { spacing: 4, children: /* @__PURE__ */ jsx65(
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
                  isDisabled: watchPuedeAnularPedido === !1,
                  ...watchPuedeAnularPedido === !1 && {
                    isChecked: !1
                  }
                }
              }
            ) }),
            /* @__PURE__ */ jsx65(HStack11, { spacing: 4, children: /* @__PURE__ */ jsx65(
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
            /* @__PURE__ */ jsx65(HStack11, { spacing: 4, children: /* @__PURE__ */ jsx65(
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
            /* @__PURE__ */ jsx65(HStack11, { spacing: 4, children: /* @__PURE__ */ jsx65(
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
                  label: "Puede ver art\xEDculos sin precios"
                },
                control
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx65(GridItem11, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx65(Divider7, {}) }),
          /* @__PURE__ */ jsx65(GridItem11, { children: /* @__PURE__ */ jsx65(
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
                helperText: "Expresado en d\xEDas"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx65(GridItem11, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx65(CommonCard, { children: /* @__PURE__ */ jsx65(
      SettingsFormsButtons,
      {
        buttonActionText: "Guardar",
        isLoading: disableForm,
        buttonCancelUrl: typeSettings.cancelButtonNavigateTo
      }
    ) })
  ] }) });
};

// src/app/routes/_admin.settings.users.vendors.add/components/index.tsx
import { jsx as jsx66 } from "react/jsx-runtime";
var Form2 = (props) => {
  let { typeSettings } = props;
  return /* @__PURE__ */ jsx66(Success7, { typeSettings });
};

// src/app/routes/_admin.settings.users.vendors.add/route.tsx
import { Fragment as Fragment22, jsx as jsx67, jsxs as jsxs44 } from "react/jsx-runtime";
function Add2() {
  let typeSettings = settings.vendors, navigate = useNavigate11();
  return /* @__PURE__ */ jsxs44(Fragment22, { children: [
    /* @__PURE__ */ jsx67(
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
    /* @__PURE__ */ jsx67(Form2, { typeSettings })
  ] });
}

// src/app/routes/api.draft.$id_pedido.start_update.ts
var api_draft_id_pedido_start_update_exports = {};
__export(api_draft_id_pedido_start_update_exports, {
  action: () => action4,
  loader: () => loader5
});
async function loader5({ request, params }) {
  return await startDraftUpdateEndpoint.get(request, params);
}
var action4 = unimplementedApiResponse;

// src/app/routes/api.pedido.$id_pedido.start_copy.ts
var api_pedido_id_pedido_start_copy_exports = {};
__export(api_pedido_id_pedido_start_copy_exports, {
  action: () => action5,
  loader: () => loader6
});
async function loader6({ request, params }) {
  return await startNewOrderFromExistingOrderEndpoint.get(request, params);
}
var action5 = unimplementedApiResponse;

// src/app/routes/api.pedido.start_new.$id_cliente.ts
var api_pedido_start_new_id_cliente_exports = {};
__export(api_pedido_start_new_id_cliente_exports, {
  action: () => action6,
  loader: () => loader7
});
async function loader7({ request, params }) {
  return await startNewOrderForCustomerEndpoint.get(request, params);
}
var action6 = unimplementedApiResponse;

// src/app/routes/api.draft.$id_pedido.start_copy.ts
var api_draft_id_pedido_start_copy_exports = {};
__export(api_draft_id_pedido_start_copy_exports, {
  action: () => action7,
  loader: () => loader8
});
async function loader8({ request, params }) {
  return await startNewDraftFromExistingDraftEndpoint.get(request, params);
}
var action7 = unimplementedApiResponse;

// src/app/routes/api.draft.start_new.$id_cliente.ts
var api_draft_start_new_id_cliente_exports = {};
__export(api_draft_start_new_id_cliente_exports, {
  action: () => action8,
  loader: () => loader9
});
async function loader9({ request, params }) {
  return await startNewDraftForCustomerEndpoint.get(request, params);
}
var action8 = unimplementedApiResponse;

// src/app/routes/api.dxt.articulo.print_list.ids.ts
var api_dxt_articulo_print_list_ids_exports = {};
__export(api_dxt_articulo_print_list_ids_exports, {
  action: () => action9,
  loader: () => loader10
});

// src/code.server/api/admin_root.controller.ts
var AdminRootController = class extends AuthenticatedRootController {
  async onRequest(req) {
    if (await super.onRequest(req), !req.auth.user.role.isAdmin())
      throw new DXTException(101003 /* ADMIN_ROLE_REQUIRED */);
  }
}, adminRootController = new AdminRootController();

// src/domain/dxt/articulo/value_objects/VOArticuloListRecords.ts
var VOArticuloListRecords = class extends ValueObject {
  validate(rawValue) {
    Array.isArray(rawValue) || this.throwError(rawValue);
    for (let e in rawValue)
      typeof e != "string" && this.throwError(rawValue);
    return rawValue.map(
      (s) => strToDXTArticuloListRecord(s)
    ).filter((e) => e != null);
  }
};

// src/domain/dxt/articulo/input/index.ts
var setArticuloListInputSchema = {
  data: (v) => new VOArticuloListRecords(v)
}, validateArticuloListInput = (input) => validateInput(setArticuloListInputSchema, input);

// src/domain/shared/validate_schema/index.ts
var optionalStringsValidator = (v, def) => v == null ? def : new VOStrings(v).valueOf();

// src/code.server/api/dxt/articulo/endpoints/index.ts
var dxtArticuloGetPrintListEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => await dxtArticuloPrintListRepository.getList()
), dxtArticuloGetEditListEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => await dxtArticuloEditListRepository.getList()
), dxtArticuloSetPrintListEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      body: validateArticuloListInput
    }
  },
  async (req) => (await dxtArticuloPrintListRepository.setList(req.validated.body.data), { ok: !0 })
), dxtArticuloSetEditListEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      body: validateArticuloListInput
    }
  },
  async (req) => (await dxtArticuloEditListRepository.setList(req.validated.body.data), { ok: !0 })
), dxtArticuloGetPrintListIdsEndpoint = createApiEndpoint(
  authenticatedRootController,
  {
    validation: {
      query: {
        param: optionalStringsValidator
      }
    }
  },
  async (req) => {
    let { param: params } = req.validated.query, paramsToReturn = (params ?? []).map((p) => p.trim().toLowerCase()).filter((p) => p != null && p.length > 0);
    return await dxtArticuloPrintListRepository.getIdsWithParams(paramsToReturn);
  }
);

// src/app/routes/api.dxt.articulo.print_list.ids.ts
async function loader10({ request, params }) {
  return await dxtArticuloGetPrintListIdsEndpoint.get(request, params);
}
var action9 = unimplementedApiResponse;

// src/app/routes/_authorized.drafts.$client.add/route.tsx
var route_exports9 = {};
__export(route_exports9, {
  default: () => OrdersAdd3
});
import { useParams as useParams7 } from "@remix-run/react";
import { Container as Container3 } from "@chakra-ui/react";
import { jsx as jsx68 } from "react/jsx-runtime";
function OrdersAdd3() {
  let { client } = useParams7();
  return /* @__PURE__ */ jsx68(Container3, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx68(OrdersAddPage, { client, draft: !0 }) });
}

// src/app/routes/_authorized.orders.$client.add/route.tsx
var route_exports10 = {};
__export(route_exports10, {
  default: () => OrdersAdd4
});
import { useParams as useParams8 } from "@remix-run/react";
import { Container as Container4 } from "@chakra-ui/react";
import { jsx as jsx69 } from "react/jsx-runtime";
function OrdersAdd4() {
  let { client } = useParams8();
  return /* @__PURE__ */ jsx69(Container4, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx69(OrdersAddPage, { client, draft: !1 }) });
}

// src/app/routes/api.dictionary.active_company.ts
var api_dictionary_active_company_exports = {};
__export(api_dictionary_active_company_exports, {
  action: () => action10,
  loader: () => loader11
});

// src/code.server/api/dictionary/endpoints/setActiveCompany.ts
var setActiveCompanyEndpoint = createApiEndpoint(
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
    let { company } = req.validated.query, companies = await dictionaryRepository.getCompanies();
    for (let [key, companyUnsafe] of companies.entries())
      if (company === companyUnsafe.db_name || company.toLowerCase() === companyUnsafe.name.toLowerCase()) {
        let settings3 = await settingsService.getDBSettings(), newDBSettingsDTO = new StoredDBSettingsDTO({
          ...settings3,
          tango_active_company: companyUnsafe.db_name
        });
        await settingsService.setDBSettings(newDBSettingsDTO), emitBusEvent(
          new DBSettingsChangedEvent({
            passiveDBChanges: !1,
            newDictionary: !1,
            newCompany: !0,
            resetCache: !0
          })
        );
        let {
          tango_active_company,
          ...remaining
        } = newDBSettingsDTO.data;
        return remaining;
      }
    throw new DXTException(200006 /* TANGO_COMPANY_NOT_LISTED_IN_DICTIONARY */);
  }
  /* *************************************************************************************************************** */
);

// src/app/routes/api.dictionary.active_company.ts
var loader11 = unimplementedApiResponse;
async function action10({ request, params }) {
  return await setActiveCompanyEndpoint.post(request, params);
}

// src/app/routes/api.dxt.vendedor.$id_vendedor.ts
var api_dxt_vendedor_id_vendedor_exports = {};
__export(api_dxt_vendedor_id_vendedor_exports, {
  action: () => action11,
  loader: () => loader12
});

// src/domain/dxt/inputs/user.ts
var updateUserInputSchema = {
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
  dia_de_entrega: (v) => new VOIntegerRange(v, 0, 365),
  email: (v) => v != null ? new VOEmailAddress(v) : void 0,
  ver_sin_precio: (v) => new VOBoolean(v),
  mostrar_mensaje_de_advertencia: (v) => new VOBoolean(v),
  habilitado_en_dxt: (v) => new VOBoolean(v),
  id_lista_alternativa: (v) => v != null ? new VOUInt32(v) : null,
  bonificacion_lista_alternativa: (v) => v != null ? new VOPositiveNumber(v) : null
}, createUserInputSchema = {
  ...updateUserInputSchema,
  password: (v) => new VODXTPassword(v)
}, deleteUserInputSchema = {
  username: (v) => new VONotEmptyString(v)
}, validateDeleteUserInput = (input) => validateInput(deleteUserInputSchema, input);

// src/domain/dxt/inputs/cliente.ts
var updateClienteInputSchema = updateUserInputSchema, createClienteInputSchema = createUserInputSchema, validateUpdateClienteInput = (input) => validateInput(updateClienteInputSchema, input), validateCreateClienteInput = (input) => validateInput(createClienteInputSchema, input);

// src/domain/dxt/inputs/vendedor.ts
var updateVendedorInputSchema = updateUserInputSchema, createVendedorInputSchema = createUserInputSchema, validateUpdateVendedorInput = (input) => validateInput(updateVendedorInputSchema, input), validateCreateVendedorInput = (input) => validateInput(createVendedorInputSchema, input);

// src/domain/dxt/results/index.ts
function clienteToSafeOutput(unsafe) {
  let {
    password_hash,
    ...remaining
  } = unsafe;
  return remaining;
}
function vendedorToSafeOutput(unsafe) {
  let {
    password_hash,
    ...remaining
  } = unsafe;
  return remaining;
}

// src/code.server/api/dxt/endpoints/index.ts
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
      let { offset, limit, order } = req.validated.query;
      return await repository.getAllWithRelations({ offset, limit });
    }
  );
}
var dxtClienteGetAllEndpoint = createDXTUserGetAllEndpoint(dxtClienteRepository), dxtClienteGetOneEndpoint = createApiEndpoint(
  adminRootController,
  { validation: { params: { id_cliente: tangoIdValidator } } },
  async (req) => clienteToSafeOutput(await dxtClienteRepository.getById(req.validated.params.id_cliente))
), dxtClienteCreateEndpoint = createApiEndpoint(
  adminRootController,
  { validation: { body: validateCreateClienteInput } },
  async (req) => clienteToSafeOutput(await dxtClienteRepository.create(req.validated.body))
), dxtClienteUpdateEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id_cliente: tangoIdValidator },
      body: validateUpdateClienteInput
    }
  },
  async (req) => clienteToSafeOutput(await dxtClienteRepository.update(req.validated.params.id_cliente, req.validated.body))
), dxtClienteDeleteEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id_cliente: tangoIdValidator },
      body: validateDeleteUserInput
    }
  },
  async (req) => (await dxtClienteRepository.delete(req.validated.params.id_cliente, req.validated.body.username), { ok: !0 })
), dxtVendedorGetAllEndpoint = createDXTUserGetAllEndpoint(dxtVendedorRepository), dxtVendedorGetOneEndpoint = createApiEndpoint(
  adminRootController,
  { validation: { params: { id_vendedor: tangoIdValidator } } },
  async (req) => vendedorToSafeOutput(await dxtVendedorRepository.getById(req.validated.params.id_vendedor))
  //async (req): Promise<DXTVendedorResult> => vendedorToSafeOutput( await dxtVendedorRepository.getUserWithRelationsById(req.validated.params.id, false) ),
), dxtVendedorCreateEndpoint = createApiEndpoint(
  adminRootController,
  { validation: { body: validateCreateVendedorInput } },
  async (req) => vendedorToSafeOutput(await dxtVendedorRepository.create(req.validated.body))
), dxtVendedorUpdateEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id_vendedor: tangoIdValidator },
      body: validateUpdateVendedorInput
    }
  },
  async (req) => vendedorToSafeOutput(await dxtVendedorRepository.update(req.validated.params.id_vendedor, req.validated.body))
), dxtVendedorDeleteEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id_vendedor: tangoIdValidator },
      body: validateDeleteUserInput
    }
  },
  async (req) => (await dxtVendedorRepository.delete(req.validated.params.id_vendedor, req.validated.body.username), { ok: !0 })
), dxtVendedorGetCustomersEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => {
    let { user } = req.auth, tangoId = user.tangoId?.valueOf();
    if (!user.role.isVendor())
      throw new DXTException(101002 /* VENDOR_ROLE_REQUIRED */);
    if (typeof tangoId != "number")
      throw new DXTException(0 /* UNEXPECTED_ERROR */, "dxtVendedorGetCustomersEndpoint");
    return await clienteRepository.getAllByVendor(tangoId);
  }
), dxtUsuarioGetAuxiliaresEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => {
    let { user } = req.auth, [perfiles, listas] = await Promise.all([
      perfilRepository.getAll(),
      listaRepository.getAll()
    ]);
    return {
      listas,
      perfiles
    };
  }
);

// src/app/routes/api.dxt.vendedor.$id_vendedor.ts
async function loader12({ request, params }) {
  return await dxtVendedorGetOneEndpoint.get(request, params);
}
async function action11({ request, params }) {
  return await mapEndpoint(request, params, {
    delete: dxtVendedorDeleteEndpoint,
    patch: dxtVendedorUpdateEndpoint
  });
}

// src/app/routes/_authorized.change_password/route.tsx
var route_exports11 = {};
__export(route_exports11, {
  default: () => Tango
});
import { useNavigate as useNavigate12 } from "@remix-run/react";
import { Container as Container5 } from "@chakra-ui/react";

// src/app/routes/_authorized.change_password/components/success.tsx
import { Box as Box20, Grid as Grid12, GridItem as GridItem12, useToast as useToast8 } from "@chakra-ui/react";
import { yupResolver as yupResolver7 } from "@hookform/resolvers/yup";
import { useForm as useForm8 } from "react-hook-form";

// src/app/routes/_authorized.change_password/validation.ts
import { useState as useState15 } from "react";
import * as yup8 from "yup";
import _10 from "lodash";
var useCustomValidationSchema6 = () => {
  let [passwordStatus, setPasswordStatus] = useState15(null);
  return { yupValidationSchema: yup8.object({
    old_password: yup8.string().required("Ingrese su contase\xF1a actual"),
    new_password: yup8.string().required("Ingrese su nueva contrase\xF1a").test("password", "Formato de contrase\xF1a no v\xE1lido", (v) => {
      if (v != "" && v != null) {
        let newPasswordStatus = dxtPasswordStatus(v);
        return _10.isEqual(passwordStatus, newPasswordStatus) || setPasswordStatus(newPasswordStatus), yupVOValidation(VODXTPassword, v);
      }
      return !0;
    }),
    new_password_repeat: yup8.string().required("Repita su nueva contrase\xF1a").oneOf([yup8.ref("new_password")], "Las contrase\xF1as deben coincidir")
  }).required(), passwordStatus };
};

// src/app/routes/_authorized.change_password/components/success.tsx
import { jsx as jsx70, jsxs as jsxs45 } from "react/jsx-runtime";
var ChangePassword = () => {
  let app = useAppResources(), toast = useToast8(), { yupValidationSchema: yupValidationSchema5, passwordStatus } = useCustomValidationSchema6(), {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm8({
    defaultValues: {
      old_password: "",
      new_password: "",
      new_password_repeat: ""
    },
    resolver: yupResolver7(yupValidationSchema5)
  }), disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx70("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let { new_password_repeat: _new_password_repeat, ...data } = dataUnsafe;
    (await authChangePasswordRequest(data, app)).map({
      success: (successState) => {
        toast({
          title: PASSWORD_CHANGED,
          status: "success"
        }), app.authDispatch(new AuthActionRefreshAll(successState.data.user)), app.navigate(URL_MAIN_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }), children: /* @__PURE__ */ jsxs45(Box20, { children: [
    /* @__PURE__ */ jsx70(FormErrors, { errors }),
    /* @__PURE__ */ jsx70(CommonCard, { children: /* @__PURE__ */ jsxs45(Grid12, { templateColumns: "1fr", alignItems: "start", gap: 4, children: [
      /* @__PURE__ */ jsx70(GridItem12, { children: /* @__PURE__ */ jsx70(
        PasswordWithStatus,
        {
          fieldProps: {
            name: "old_password",
            id: "old_password"
          },
          formControlInnerProps: {
            label: "Contrase\xF1a Actual"
          },
          disableForm,
          control
        }
      ) }),
      /* @__PURE__ */ jsx70(GridItem12, { children: /* @__PURE__ */ jsx70(
        PasswordWithStatus,
        {
          fieldProps: {
            name: "new_password",
            id: "new_password"
          },
          formControlInnerProps: {
            label: "Nueva contrase\xF1a"
          },
          passwordStatus,
          disableForm,
          control
        }
      ) }),
      /* @__PURE__ */ jsx70(GridItem12, { children: /* @__PURE__ */ jsx70(
        PasswordWithStatus,
        {
          fieldProps: {
            name: "new_password_repeat",
            id: "new_password_repeat"
          },
          formControlInnerProps: {
            label: "Confirmar nueva contrase\xF1a"
          },
          disableForm,
          control
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx70(CommonCard, { children: /* @__PURE__ */ jsx70(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};

// src/app/routes/_authorized.change_password/route.tsx
import { jsx as jsx71, jsxs as jsxs46 } from "react/jsx-runtime";
function Tango() {
  let navigate = useNavigate12();
  return /* @__PURE__ */ jsxs46(Container5, { maxW: "2xl", sx: { my: 4 }, children: [
    /* @__PURE__ */ jsx71(
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
    /* @__PURE__ */ jsx71(ChangePassword, {})
  ] });
}

// src/app/routes/api.dxt.articulo.print_list.ts
var api_dxt_articulo_print_list_exports = {};
__export(api_dxt_articulo_print_list_exports, {
  action: () => action12,
  loader: () => loader13
});
async function loader13({ request, params }) {
  return await dxtArticuloGetPrintListEndpoint.get(request, params);
}
async function action12({ request, params }) {
  return await dxtArticuloSetPrintListEndpoint.post(request, params);
}

// src/app/routes/api.dxt.cliente.$id_cliente.ts
var api_dxt_cliente_id_cliente_exports = {};
__export(api_dxt_cliente_id_cliente_exports, {
  action: () => action13,
  loader: () => loader14
});
async function loader14({ request, params }) {
  return await dxtClienteGetOneEndpoint.get(request, params);
}
async function action13({ request, params }) {
  return await mapEndpoint(request, params, {
    delete: dxtClienteDeleteEndpoint,
    patch: dxtClienteUpdateEndpoint
  });
}

// src/app/routes/api.dxt.articulo.edit_list.ts
var api_dxt_articulo_edit_list_exports = {};
__export(api_dxt_articulo_edit_list_exports, {
  action: () => action14,
  loader: () => loader15
});
async function loader15({ request, params }) {
  return await dxtArticuloGetEditListEndpoint.get(request, params);
}
async function action14({ request, params }) {
  return await dxtArticuloSetEditListEndpoint.post(request, params);
}

// src/app/routes/api.dxt.usuario.auxiliares.ts
var api_dxt_usuario_auxiliares_exports = {};
__export(api_dxt_usuario_auxiliares_exports, {
  action: () => action15,
  loader: () => loader16
});
var loader16 = async (o) => await dxtUsuarioGetAuxiliaresEndpoint.get(o.request, o.params), action15 = unimplementedApiResponse;

// src/app/routes/_authorized.drafts._index/route.tsx
var route_exports12 = {};
__export(route_exports12, {
  default: () => OrdersList
});
import { Container as Container6 } from "@chakra-ui/react";

// src/app/pages/orders/components/loading.tsx
import { Box as Box21, Grid as Grid13, GridItem as GridItem13 } from "@chakra-ui/react";
import { jsx as jsx72, jsxs as jsxs47 } from "react/jsx-runtime";
var Loading6 = () => /* @__PURE__ */ jsx72(
  Box21,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs47(Grid13, { templateColumns: "1fr", alignItems: "center", gap: 4, children: [
      /* @__PURE__ */ jsx72(GridItem13, { children: /* @__PURE__ */ jsx72(FormInputSkeleton, {}) }),
      /* @__PURE__ */ jsx72(GridItem13, { children: /* @__PURE__ */ jsx72(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx72(GridItem13, { children: /* @__PURE__ */ jsx72(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx72(GridItem13, { children: /* @__PURE__ */ jsx72(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx72(GridItem13, { children: /* @__PURE__ */ jsx72(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx72(GridItem13, { children: /* @__PURE__ */ jsx72(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx72(GridItem13, { children: /* @__PURE__ */ jsx72(FormTextareaSkeleton, { height: "120px" }) })
    ] })
  }
);

// src/app/components/orders/OrdersNav.tsx
import { useEffect as useEffect14, useRef as useRef9, useState as useState16 } from "react";
import {
  Box as Box23,
  Flex as Flex7,
  HStack as HStack12,
  Tag,
  TagLabel,
  useColorModeValue as useColorModeValue7,
  useDisclosure as useDisclosure4
} from "@chakra-ui/react";
import _12 from "lodash";
import PlusIcon from "mdi-react/PlusIcon.js";
import PrinterIcon from "mdi-react/PrinterIcon.js";

// src/app/components/orders/ClientsListModal.tsx
import { useRef as useRef8 } from "react";
import {
  Box as Box22,
  Link,
  List,
  ListIcon,
  ListItem as ListItem2,
  Modal as Modal2,
  ModalBody as ModalBody2,
  ModalCloseButton as ModalCloseButton2,
  ModalContent as ModalContent2,
  ModalHeader as ModalHeader2,
  ModalOverlay as ModalOverlay2,
  Skeleton as Skeleton2,
  VStack as VStack4
} from "@chakra-ui/react";
import _11 from "lodash";
import AccountCancelIcon3 from "mdi-react/AccountCancelIcon.js";
import AccountCheckIcon2 from "mdi-react/AccountCheckIcon.js";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as FixedSizeList2 } from "react-window";
import { Fragment as Fragment23, jsx as jsx73, jsxs as jsxs48 } from "react/jsx-runtime";
var ClientsListModal = (props) => {
  let { isDraft, isOpen, onClose } = props, stateDataSortened = useRef8(), { state, retry } = useGetDXTVendorCustomers(), SearchableList = () => {
    let { filteredData, handleSearchInputChange } = useSearchField(stateDataSortened.current ?? [], ["screen_name"]), itemHeight = 30, Row = ({
      style,
      index,
      data
    }) => {
      let client = data?.[index];
      return client != null ? /* @__PURE__ */ jsx73(Fragment23, { children: /* @__PURE__ */ jsx73(ListItem2, { style, children: client.habilitado ? /* @__PURE__ */ jsx73(
        Link,
        {
          href: pathParamsToUrl(isDraft ? URL_BORRADORES_ADD_PATH : URL_PEDIDOS_ADD_PATH, {
            client: client.id
          }),
          children: /* @__PURE__ */ jsxs48(Box22, { children: [
            /* @__PURE__ */ jsx73(ListIcon, { as: AccountCheckIcon2, color: "green.400" }),
            client.screen_name
          ] })
        }
      ) : /* @__PURE__ */ jsxs48(
        Box22,
        {
          color: "gray.400",
          sx: {
            cursor: "not-allowed"
          },
          children: [
            /* @__PURE__ */ jsx73(ListIcon, { as: AccountCancelIcon3, color: "red.400" }),
            client.screen_name
          ]
        }
      ) }, client.id) }) : /* @__PURE__ */ jsx73(Fragment23, {});
    };
    return /* @__PURE__ */ jsxs48(Fragment23, { children: [
      /* @__PURE__ */ jsx73(Box22, { sx: { pb: 4 }, children: /* @__PURE__ */ jsx73(SearchField, { handleSearchInputChange }) }),
      /* @__PURE__ */ jsx73(AutoSizer, { children: ({ height, width }) => /* @__PURE__ */ jsx73(
        FixedSizeList2,
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
  return /* @__PURE__ */ jsxs48(
    Modal2,
    {
      isCentered: !0,
      isOpen,
      onClose,
      scrollBehavior: "inside",
      size: { base: "full", sm: "md", md: "lg" },
      children: [
        /* @__PURE__ */ jsx73(ModalOverlay2, {}),
        /* @__PURE__ */ jsxs48(
          ModalContent2,
          {
            sx: {
              maxHeight: "auto"
            },
            children: [
              /* @__PURE__ */ jsx73(ModalHeader2, { children: "Seleccione el cliente" }),
              /* @__PURE__ */ jsx73(ModalCloseButton2, {}),
              /* @__PURE__ */ jsx73(ModalBody2, { minHeight: { base: "auto", sm: "420px !important" }, children: state.map({
                loading: (_14) => /* @__PURE__ */ jsxs48(VStack4, { spacing: 4, children: [
                  /* @__PURE__ */ jsx73(Skeleton2, { width: "full", height: "36px", borderRadius: "md" }),
                  /* @__PURE__ */ jsx73(Skeleton2, { width: "full", height: "250px", borderRadius: "md" })
                ] }),
                error: ({ error }) => /* @__PURE__ */ jsx73(
                  ApiErrors,
                  {
                    error,
                    retry,
                    cancelAndNavigateTo: URL_SETTINGS_PATH
                  }
                ),
                success: (state2) => (stateDataSortened.current = _11.sortBy(state2.data, ["screen_name"]), /* @__PURE__ */ jsx73(SearchableList, {}))
              }) })
            ]
          }
        )
      ]
    }
  );
};

// src/app/components/orders/PrintModal.tsx
import { lazy, Suspense } from "react";
import {
  Modal as Modal3,
  ModalBody as ModalBody3,
  ModalCloseButton as ModalCloseButton3,
  ModalContent as ModalContent3,
  ModalHeader as ModalHeader3,
  ModalOverlay as ModalOverlay3
} from "@chakra-ui/react";

// src/app/components/orders/PrintModalLoading.tsx
import { VStack as VStack5 } from "@chakra-ui/react";
import { jsx as jsx74, jsxs as jsxs49 } from "react/jsx-runtime";
var PrintModalLoading = () => /* @__PURE__ */ jsxs49(VStack5, { spacing: 4, children: [
  /* @__PURE__ */ jsx74(FormInputSkeleton, {}),
  /* @__PURE__ */ jsx74(FormInputSkeleton, {})
] });

// src/app/components/orders/PrintModal.tsx
import { jsx as jsx75, jsxs as jsxs50 } from "react/jsx-runtime";
var PrintModalClient = lazy(() => Promise.resolve().then(() => __toESM(require_PrintModal(), 1))), PrintModal = (props) => {
  let { pedidos, renglones, isOpen, onClose } = props;
  return /* @__PURE__ */ jsxs50(Modal3, { isCentered: !0, isOpen, onClose, children: [
    /* @__PURE__ */ jsx75(ModalOverlay3, {}),
    /* @__PURE__ */ jsxs50(ModalContent3, { children: [
      /* @__PURE__ */ jsx75(ModalHeader3, { children: "Impresi\xF3n de pedidos" }),
      /* @__PURE__ */ jsx75(ModalCloseButton3, {}),
      /* @__PURE__ */ jsx75(ModalBody3, { children: /* @__PURE__ */ jsx75(Suspense, { fallback: /* @__PURE__ */ jsx75(PrintModalLoading, {}), children: /* @__PURE__ */ jsx75(PrintModalClient, { pedidos, renglones }) }) })
    ] })
  ] });
};

// src/app/components/orders/OrdersNav.tsx
import { Fragment as Fragment24, jsx as jsx76, jsxs as jsxs51 } from "react/jsx-runtime";
var OrdersNav = ({
  isDraft,
  pedidos,
  stateRenglones,
  handleSearchInputChange
}) => {
  let app = useAppResources(), [create, setCreate] = useState16(!1), [print, setPrint] = useState16(!1), { isOpen, onOpen, onClose } = useDisclosure4(), {
    isOpen: printIsOpen,
    onOpen: printOnOpen,
    onClose: printOnClose
  } = useDisclosure4(), [selectedPedidos, setSelectedPedidos] = useState16([]), selectedPedidosAndRenglones = useRef9({
    pedidos: [],
    renglones: {}
  });
  useEffect14(() => {
    let handleSetUnsetEvent = ({
      id,
      checked
    }) => {
      setSelectedPedidos(checked ? (prevValues) => [...prevValues, id] : (prevValues) => prevValues.filter((value) => value !== id));
    };
    return eventBus2.on("setUnsetSelectedPedido", handleSetUnsetEvent), () => {
      eventBus2.removeListener("setUnsetSelectedPedido", handleSetUnsetEvent);
    };
  }, []);
  let handleCreate = () => {
    if (app.authState.isCustomer()) {
      app.navigate(
        isDraft ? URL_BORRADORES_CUSTOMER_ADD_PATH : URL_PEDIDOS_CUSTOMER_ADD_PATH
      );
      return;
    }
    setCreate(!0), onOpen();
  }, handleEdit = () => {
  }, handleOnClose = () => {
    onClose(), setCreate(!1);
  }, handlePrint = () => {
    selectedPedidosAndRenglones.current.pedidos = pedidos.filter(
      (pedido) => selectedPedidos.includes(pedido.id)
    ), Array.isArray(selectedPedidosAndRenglones.current.pedidos) && selectedPedidosAndRenglones.current.pedidos.length > 0 && stateRenglones.isSuccess() && (selectedPedidosAndRenglones.current.renglones = _12.pick(
      stateRenglones.data,
      selectedPedidos
    )), setPrint(!0), printOnOpen();
  }, handlePrintOnClose = () => {
    printOnClose(), setPrint(!1);
  }, selectedInfo = selectedPedidos.length <= 0 ? void 0 : selectedPedidos.length == 1 ? `1 ${SELECTED_S}` : `${selectedPedidos.length} ${SELECTED_P}`;
  return /* @__PURE__ */ jsxs51(Fragment24, { children: [
    /* @__PURE__ */ jsx76(
      Box23,
      {
        bg: useColorModeValue7("white", "blue.900"),
        sx: {
          px: 4,
          position: "sticky",
          zIndex: 1e3,
          top: 0
        },
        children: /* @__PURE__ */ jsxs51(Flex7, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxs51(HStack12, { spacing: { base: 2, sm: 3 }, alignItems: "center", children: [
            (app.authState.isVendor() || app.authState.isCustomer()) && /* @__PURE__ */ jsx76(Fragment24, { children: /* @__PURE__ */ jsx76(
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
            !isDraft && /* @__PURE__ */ jsx76(
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
            selectedInfo != null && /* @__PURE__ */ jsxs51(Fragment24, { children: [
              /* @__PURE__ */ jsx76(
                Tag,
                {
                  display: { base: "none", sm: "inherited" },
                  height: 8,
                  borderRadius: 40,
                  size: "md",
                  variant: "solid",
                  colorScheme: "blue",
                  children: /* @__PURE__ */ jsx76(TagLabel, { marginX: 1, children: selectedInfo })
                }
              ),
              /* @__PURE__ */ jsx76(
                Tag,
                {
                  display: { base: "inherited", sm: "none" },
                  height: 8,
                  borderRadius: 40,
                  size: "md",
                  variant: "solid",
                  colorScheme: "blue",
                  children: /* @__PURE__ */ jsx76(TagLabel, { marginX: 1, children: selectedPedidos.length })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx76(Flex7, { alignItems: "center", marginLeft: 4, children: /* @__PURE__ */ jsx76(HStack12, { spacing: { base: 2, md: 4 }, children: /* @__PURE__ */ jsx76(Box23, { children: /* @__PURE__ */ jsx76(
            SearchField,
            {
              handleSearchInputChange
            }
          ) }) }) })
        ] })
      }
    ),
    create && /* @__PURE__ */ jsx76(
      ClientsListModal,
      {
        isDraft,
        isOpen,
        onClose: handleOnClose
      }
    ),
    print && /* @__PURE__ */ jsx76(
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

// src/app/pages/orders/components/PedidoList/index.tsx
import {
  Alert as Alert9,
  AlertDescription as AlertDescription7,
  AlertIcon as AlertIcon8,
  Table as Table3,
  TableContainer as TableContainer2,
  Tbody as Tbody3,
  Td as Td4,
  Tr as Tr4,
  useDisclosure as useDisclosure5,
  useToast as useToast9
} from "@chakra-ui/react";

// src/app/pages/orders/components/PedidoList/Pedido.tsx
import { useEffect as useEffect15, useMemo as useMemo7, useRef as useRef10, useState as useState17 } from "react";

// src/code.client/pedido/utils/calculateRealOrderStatus.ts
function calculateRealOrderStatus(pedido, stateRenglones) {
  return stateRenglones.isSuccess() ? realOrderStatus(
    pedido,
    stateRenglones.data[pedido.id]
  ) : pedido.estado;
}

// src/app/pages/orders/components/PedidoList/Pedido.tsx
import {
  Alert as Alert8,
  AlertDescription as AlertDescription6,
  AlertIcon as AlertIcon7,
  Box as Box26,
  Checkbox,
  Grid as Grid16,
  GridItem as GridItem16,
  Heading as Heading12,
  Td as Td3,
  Text as Text9,
  Tr as Tr3,
  useColorModeValue as useColorModeValue8
} from "@chakra-ui/react";

// src/app/components/BadgePedidosEstado.tsx
import { Badge as Badge4 } from "@chakra-ui/react";

// src/app/theme/pedidos/utils.ts
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
  return suffix == null ? color : `${color}${suffix}`;
}

// src/app/components/BadgePedidosEstado.tsx
import { jsx as jsx77 } from "react/jsx-runtime";
var BadgePedidosEstado = ({ estado }) => {
  let name = getEstadoPedidoText(estado), colorScheme = getEstadoPedidoColor(estado);
  return /* @__PURE__ */ jsx77(Badge4, { fontSize: "1em", variant: "solid", colorScheme, lineHeight: "1.5em", children: name });
};

// src/app/pages/orders/components/PedidoList/PedidoMenu.tsx
import {
  IconButton as IconButton5,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal as Portal2
} from "@chakra-ui/react";
import DotsVerticalIcon from "mdi-react/DotsVerticalIcon.js";
import { Fragment as Fragment25, jsx as jsx78, jsxs as jsxs52 } from "react/jsx-runtime";
var PedidoMenu = ({
  app,
  draft,
  pedido,
  onDelete
}) => {
  let user = app.authState.userInfo, isAdmin = user.role == 2 /* admin */, canEditOrder = isUserAllowedToModifyOrder(user, pedido.estado), canDeleteOrder = user.puede_anular_pedido && isUserAllowedToCancelOrDeleteOrder(user, pedido.estado), deleteWhenCancel = draft || user.borrar_pedido_al_anular;
  return /* @__PURE__ */ jsxs52(Menu, { isLazy: !0, id: "menu", children: [
    /* @__PURE__ */ jsx78(
      MenuButton,
      {
        as: IconButton5,
        size: "sm",
        "aria-label": OPTIONS,
        icon: /* @__PURE__ */ jsx78(DotsVerticalIcon, {}),
        variant: "outline",
        colorScheme: "white"
      }
    ),
    /* @__PURE__ */ jsx78(Portal2, { children: /* @__PURE__ */ jsxs52(MenuList, { rootProps: { zIndex: 2e3 }, children: [
      !isAdmin && /* @__PURE__ */ jsxs52(Fragment25, { children: [
        /* @__PURE__ */ jsx78(
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
        /* @__PURE__ */ jsx78(MenuItem, { onClick: () => {
        }, children: PEDIDO_MENU_DUPLICATE }),
        /* @__PURE__ */ jsx78(MenuItem, { onClick: () => {
        }, children: draft ? PEDIDO_MENU_CREATE_ORDER : PEDIDO_MENU_CREATE_DRAFT }),
        draft && /* @__PURE__ */ jsx78(MenuItem, { onClick: () => {
        }, children: PEDIDO_MENU_CONVERT_DRAFT_TO_ORDER }),
        /* @__PURE__ */ jsx78(MenuDivider, {})
      ] }),
      /* @__PURE__ */ jsx78(
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

// src/app/pages/orders/components/PedidoList/Renglones.tsx
import { Box as Box25 } from "@chakra-ui/react";

// src/app/pages/orders/components/PedidoList/RenglonesEmpty.tsx
import {
  Alert as Alert6,
  AlertDescription as AlertDescription4,
  AlertIcon as AlertIcon5
} from "@chakra-ui/react";
import { jsx as jsx79, jsxs as jsxs53 } from "react/jsx-runtime";
var RenglonesEmpty = () => /* @__PURE__ */ jsxs53(Alert6, { status: "warning", children: [
  /* @__PURE__ */ jsx79(AlertIcon5, {}),
  /* @__PURE__ */ jsx79(AlertDescription4, { children: "El pedido no cuenta con productos." })
] });

// src/app/pages/orders/components/PedidoList/RenglonesError.tsx
import { Alert as Alert7, AlertDescription as AlertDescription5, AlertIcon as AlertIcon6 } from "@chakra-ui/react";
import { jsx as jsx80, jsxs as jsxs54 } from "react/jsx-runtime";
var RenglonesError = () => /* @__PURE__ */ jsxs54(Alert7, { status: "error", children: [
  /* @__PURE__ */ jsx80(AlertIcon6, {}),
  /* @__PURE__ */ jsx80(AlertDescription5, { children: "Ocurri\xF3 un error al cargar los detalles del pedido." })
] });

// src/app/pages/orders/components/PedidoList/RenglonesLoading.tsx
import { Box as Box24, Grid as Grid14, GridItem as GridItem14 } from "@chakra-ui/react";
import { jsx as jsx81, jsxs as jsxs55 } from "react/jsx-runtime";
var RenglonesLoading = () => /* @__PURE__ */ jsx81(
  Box24,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs55(Grid14, { templateColumns: "1fr", alignItems: "center", gap: 2, children: [
      /* @__PURE__ */ jsx81(GridItem14, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, { height: "20px" }) }),
      /* @__PURE__ */ jsx81(GridItem14, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, { height: "20px" }) }),
      /* @__PURE__ */ jsx81(GridItem14, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, { height: "20px" }) }),
      /* @__PURE__ */ jsx81(GridItem14, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, { height: "20px" }) })
    ] })
  }
);

// src/app/pages/orders/components/PedidoList/RenglonesPedido.tsx
import {
  Grid as Grid15,
  GridItem as GridItem15,
  Heading as Heading11,
  Table as Table2,
  TableContainer,
  Tbody as Tbody2,
  Td as Td2,
  Text as Text8,
  Th as Th2,
  Thead as Thead2,
  Tr as Tr2
} from "@chakra-ui/react";
import { jsx as jsx82, jsxs as jsxs56 } from "react/jsx-runtime";
var RenglonesPedido = ({
  nro_pedido,
  renglones
}) => /* @__PURE__ */ jsx82(TableContainer, { sx: { p: 0, m: 0 }, children: /* @__PURE__ */ jsxs56(
  Table2,
  {
    variant: "stripedHoverOverCard",
    colorScheme: "gray",
    size: "sm",
    borderWidth: "1px",
    children: [
      /* @__PURE__ */ jsx82(Thead2, { children: /* @__PURE__ */ jsx82(Tr2, { children: /* @__PURE__ */ jsx82(Th2, { sx: { py: 2 }, children: /* @__PURE__ */ jsxs56(
        Grid15,
        {
          templateColumns: { base: "1fr 1fr 1fr", md: "4fr 1fr 1fr 1fr" },
          gap: 6,
          children: [
            /* @__PURE__ */ jsx82(GridItem15, { children: /* @__PURE__ */ jsx82(Heading11, { fontSize: { base: "xs", md: "sm" }, children: "Art\xEDculo" }) }),
            /* @__PURE__ */ jsx82(
              GridItem15,
              {
                sx: {
                  display: { base: "none", md: "block" }
                },
                children: /* @__PURE__ */ jsx82(
                  Heading11,
                  {
                    fontSize: { base: "xs", md: "sm" },
                    textAlign: "center",
                    children: "Precio"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx82(GridItem15, { children: /* @__PURE__ */ jsx82(
              Heading11,
              {
                fontSize: { base: "xs", md: "sm" },
                textAlign: "center",
                children: "Cantidad"
              }
            ) }),
            /* @__PURE__ */ jsx82(GridItem15, { children: /* @__PURE__ */ jsx82(
              Heading11,
              {
                fontSize: { base: "xs", md: "sm" },
                textAlign: "center",
                children: "Subtotal"
              }
            ) })
          ]
        }
      ) }) }) }),
      /* @__PURE__ */ jsx82(Tbody2, { children: renglones.map(
        ({
          id_articulo,
          nombre_articulo,
          codigo_articulo,
          descripcion_adicional,
          precio,
          cantidad,
          subtotal
        }, index) => /* @__PURE__ */ jsx82(Tr2, { children: /* @__PURE__ */ jsx82(Td2, { children: /* @__PURE__ */ jsxs56(
          Grid15,
          {
            templateColumns: {
              base: "1fr 1fr 1fr",
              md: "4fr 1fr 1fr 1fr"
            },
            gap: 6,
            children: [
              /* @__PURE__ */ jsx82(GridItem15, { children: /* @__PURE__ */ jsx82(TextWordBreak, { children: formatNombreArticulo(
                nombre_articulo,
                id_articulo,
                descripcion_adicional
              ) }) }),
              /* @__PURE__ */ jsx82(
                GridItem15,
                {
                  sx: {
                    display: { base: "none", md: "block" }
                  },
                  children: /* @__PURE__ */ jsx82(TextPrice, { precio, moneda: "$" })
                }
              ),
              /* @__PURE__ */ jsx82(GridItem15, { children: /* @__PURE__ */ jsx82(Text8, { textAlign: "center", children: cantidad }) }),
              /* @__PURE__ */ jsx82(GridItem15, { children: /* @__PURE__ */ jsx82(TextPrice, { precio: subtotal, moneda: "$" }) })
            ]
          }
        ) }) }, `details-${nro_pedido}-${index}`)
      ) })
    ]
  }
) });

// src/app/pages/orders/components/PedidoList/Renglones.tsx
import { jsx as jsx83 } from "react/jsx-runtime";
var Renglones = ({ wasOpen, pedido, stateRenglones }) => /* @__PURE__ */ jsx83(Box25, { sx: { mt: 6 }, children: wasOpen && stateRenglones.map({
  loading: (_14) => /* @__PURE__ */ jsx83(RenglonesLoading, {}),
  error: (_14) => /* @__PURE__ */ jsx83(RenglonesError, {}),
  success: (state) => {
    let { id, numero_pedido } = pedido, renglones = state.data?.[id];
    return Array.isArray(renglones) ? /* @__PURE__ */ jsx83(
      RenglonesPedido,
      {
        nro_pedido: numero_pedido,
        renglones
      }
    ) : /* @__PURE__ */ jsx83(RenglonesEmpty, {});
  }
}) });

// src/app/pages/orders/components/PedidoList/Pedido.tsx
import { Fragment as Fragment26, jsx as jsx84, jsxs as jsxs57 } from "react/jsx-runtime";
var Pedido = ({
  index,
  app,
  draft,
  pedido,
  stateRenglones,
  onDelete,
  isHidden
}) => {
  let [isOpen, setIsOpen] = useState17(!1), [checked, setChecked] = useState17(!1), checkboxBorderColor = useColorModeValue8("gray.800", "white"), wasOpen = useRef10(!1), realOrderStatus2 = calculateRealOrderStatus(pedido, stateRenglones), renglonesComponent = useMemo7(
    () => /* @__PURE__ */ jsx84(
      Renglones,
      {
        wasOpen: wasOpen.current,
        pedido,
        stateRenglones
      }
    ),
    [wasOpen.current, stateRenglones.constructor.name]
  ), handleToggleDetails = () => {
    let nowIsOpen = !isOpen;
    nowIsOpen && (wasOpen.current = !0), setIsOpen(nowIsOpen), eventBus2.emit("togglePedidoDetails", { id: pedido.id });
  }, handleCheckboxChange = (checked2, id2) => {
    setChecked(!!checked2), eventBus2.emit("setUnsetSelectedPedido", { id: id2, checked: checked2 });
  };
  useEffect15(() => {
    let handleEvent = ({ id: id2 }) => {
      pedido.id !== id2 && setIsOpen(!1);
    };
    return eventBus2.on("togglePedidoDetails", handleEvent), () => {
      eventBus2.removeListener("togglePedidoDetails", handleEvent);
    };
  }, []);
  let {
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
  } = pedido, estado = realOrderStatus2, showComments = comentarios != null && comentarios.length > 0;
  return /* @__PURE__ */ jsx84(
    Tr3,
    {
      sx: {
        ...isHidden && !checked && {
          display: "none"
        }
      },
      children: /* @__PURE__ */ jsxs57(
        Td3,
        {
          sx: {
            py: 6,
            position: "relative",
            borderTopWidth: { base: "3px", md: "4px" },
            borderTopStyle: "solid",
            borderTopColor: `${draft ? "blue.500 !important" : getEstadoPedidoColor(estado, ".500 !important")}`
          },
          children: [
            /* @__PURE__ */ jsxs57(
              Box26,
              {
                display: "flex",
                sx: {
                  position: "absolute",
                  right: 5,
                  top: 5
                },
                flexDirection: "column",
                children: [
                  /* @__PURE__ */ jsx84(
                    PedidoMenu,
                    {
                      app,
                      draft,
                      pedido,
                      onDelete
                    }
                  ),
                  !draft && /* @__PURE__ */ jsx84(
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
            /* @__PURE__ */ jsxs57(
              Grid16,
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
                  draft ? /* @__PURE__ */ jsx84(Fragment26, { children: /* @__PURE__ */ jsx84(GridItem16, { colSpan: { base: 2, md: 4 }, children: /* @__PURE__ */ jsx84(Heading12, { size: "md", textTransform: "uppercase", children: descripcion }) }) }) : /* @__PURE__ */ jsxs57(Fragment26, { children: [
                    /* @__PURE__ */ jsxs57(GridItem16, { children: [
                      /* @__PURE__ */ jsx84(Heading12, { size: "sm", children: "Pedido" }),
                      /* @__PURE__ */ jsx84(Text9, { children: numero_pedido })
                    ] }),
                    /* @__PURE__ */ jsxs57(GridItem16, { children: [
                      /* @__PURE__ */ jsx84(Heading12, { size: "sm", children: "Estado" }),
                      /* @__PURE__ */ jsx84(BadgePedidosEstado, { estado })
                    ] }),
                    /* @__PURE__ */ jsxs57(GridItem16, { children: [
                      /* @__PURE__ */ jsx84(Heading12, { size: "sm", children: "Emisi\xF3n" }),
                      /* @__PURE__ */ jsx84(Text9, { children: dateToLocale(fecha_alta) })
                    ] }),
                    /* @__PURE__ */ jsxs57(GridItem16, { children: [
                      /* @__PURE__ */ jsx84(Heading12, { size: "sm", children: "Entrega" }),
                      /* @__PURE__ */ jsx84(Text9, { children: dateToLocale(fecha_entrega) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs57(GridItem16, { children: [
                    /* @__PURE__ */ jsx84(Heading12, { size: "sm", children: "Cliente" }),
                    /* @__PURE__ */ jsx84(TextWordBreak, { children: formatCliente(codigo_cliente, nombre_cliente) })
                  ] }),
                  /* @__PURE__ */ jsxs57(GridItem16, { children: [
                    /* @__PURE__ */ jsx84(Heading12, { size: "sm", children: "Vendedor" }),
                    /* @__PURE__ */ jsx84(TextWordBreak, { children: formatAuxiliares(codigo_vendedor, nombre_vendedor) })
                  ] }),
                  /* @__PURE__ */ jsxs57(GridItem16, { children: [
                    /* @__PURE__ */ jsx84(Heading12, { size: "sm", children: "Transporte" }),
                    /* @__PURE__ */ jsx84(TextWordBreak, { children: formatAuxiliares(codigo_transporte, nombre_transporte) })
                  ] }),
                  /* @__PURE__ */ jsxs57(GridItem16, { children: [
                    /* @__PURE__ */ jsxs57(
                      Heading12,
                      {
                        size: "md",
                        sx: {
                          textTransform: "uppercase",
                          color: estado === 2 /* APROBADO */ && "green.400"
                        },
                        children: [
                          "Total",
                          descuento != null && /* @__PURE__ */ jsxs57(Fragment26, { children: [
                            " ",
                            `-${descuento}%`
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx84(
                      Heading12,
                      {
                        size: "md",
                        sx: {
                          fontWeight: "bolder",
                          color: estado === 2 /* APROBADO */ && "green.400"
                        },
                        children: /* @__PURE__ */ jsx84(TextPriceNative, { precio: total, moneda: "$" })
                      }
                    )
                  ] }),
                  showComments && /* @__PURE__ */ jsx84(
                    GridItem16,
                    {
                      colSpan: {
                        base: 2,
                        md: 4
                      },
                      children: /* @__PURE__ */ jsxs57(Alert8, { status: "info", children: [
                        /* @__PURE__ */ jsx84(AlertIcon7, {}),
                        /* @__PURE__ */ jsx84(AlertDescription6, { children: comentarios })
                      ] })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx84(Box26, { children: /* @__PURE__ */ jsx84(Box26, { sx: { display: isOpen ? "block" : "none" }, children: renglonesComponent }) }, `pedido-details-${index}`)
          ]
        }
      )
    }
  );
};

// src/app/pages/orders/components/PedidoList/index.tsx
import { useRef as useRef11 } from "react";
import { jsx as jsx85, jsxs as jsxs58 } from "react/jsx-runtime";
function PedidoList(props) {
  let app = useAppResources(), deleteOrder = app.authState.userInfo.borrar_pedido_al_anular.valueOf(), { draft, unfilteredPedidos, filteredPedidos, isFiltering, stateRenglones, reloadData } = props, toast = useToast9(), deleteDialogDisclouse = useDisclosure5(), { isOpen: isDeleteDialogOpen, onOpen: onDeleteDialogOpen, onClose: onDeleteDialogClose } = deleteDialogDisclouse, orderIdToDelete = useRef11(null), handleDeleteRequest = (orderId) => {
    orderIdToDelete.current = orderId, onDeleteDialogOpen();
  }, handleDeleteConfirmation = async () => {
    let orderId = orderIdToDelete.current;
    if (orderId != null) {
      let result = draft ? await deleteDraftRequest(orderId, app) : await deleteOrderRequest(orderId, app);
      console.log(result), result.map({
        success: (_14) => {
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
      }), result.isSuccess() && await reloadData(), onDeleteDialogClose();
    }
  };
  return /* @__PURE__ */ jsxs58(TableContainer2, { sx: { p: 0, m: 0 }, children: [
    /* @__PURE__ */ jsx85(
      Table3,
      {
        variant: "stripedOverCard",
        colorScheme: "gray",
        size: "md",
        sx: {
          borderCollapse: "separate",
          borderSpacing: "0 1rem"
        },
        children: /* @__PURE__ */ jsxs58(Tbody3, { children: [
          unfilteredPedidos.map((pedido, index) => /* @__PURE__ */ jsx85(
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
          )),
          !filteredPedidos.length && /* @__PURE__ */ jsx85(Tr4, { children: /* @__PURE__ */ jsx85(Td4, { children: /* @__PURE__ */ jsxs58(Alert9, { status: "info", children: [
            /* @__PURE__ */ jsx85(AlertIcon8, {}),
            /* @__PURE__ */ jsx85(AlertDescription7, { children: isFiltering ? FILTER_NO_RESULTS : draft ? NO_BORRADORES : NO_PEDIDOS })
          ] }) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx85(
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

// src/app/pages/orders/components/success.tsx
import { Fragment as Fragment27, jsx as jsx86, jsxs as jsxs59 } from "react/jsx-runtime";
var Success8 = (props) => {
  let { showDrafts, pedidos, reloadData } = props, user = useAuth().state.userOrThrow(), isAdmin = user.role == 2 /* admin */, isVendor = user.role == 1 /* vendor */, isCustomer = user.role == 0 /* customer */, {
    filteredData: filteredPedidos,
    handleSearchInputChange,
    isFiltering
  } = useSearchField(pedidos, [
    "comentario",
    ...showDrafts ? [] : ["numero_pedido"],
    ...isCustomer ? [] : ["codigo_cliente", "nombre_cliente"],
    ...isAdmin ? ["codigo_vendedor", "nombre_vendedor"] : []
  ]), { state: stateRenglones } = useDXTApiFetch({
    ...showDrafts ? API_BORRADOR_GET_ALL_ROWS : API_PEDIDO_GET_ALL_ROWS,
    silent: !0,
    transformResponse: (data) => (Object.values(data).forEach((rows) => {
      Array.isArray(rows) && rows.sort((a, b) => a.renglon - b.renglon);
    }), data)
  });
  return /* @__PURE__ */ jsxs59(Fragment27, { children: [
    /* @__PURE__ */ jsx86(
      OrdersNav,
      {
        isDraft: showDrafts,
        pedidos,
        stateRenglones,
        handleSearchInputChange
      }
    ),
    /* @__PURE__ */ jsx86(
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

// src/app/pages/orders/index.tsx
import { jsx as jsx87 } from "react/jsx-runtime";
var OrdersPage = (props) => {
  let showDrafts = props.showDrafts === !0, { state, retry, reload } = useDXTApiFetch({
    ...showDrafts ? API_BORRADOR_GET_ALL : API_PEDIDO_GET_ALL,
    silent: !0
  });
  return state.map({
    loading: (_14) => /* @__PURE__ */ jsx87(Loading6, {}),
    error: ({ error }) => /* @__PURE__ */ jsx87(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_PEDIDOS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx87(Success8, { showDrafts, pedidos: state2.data, reloadData: reload })
  });
};

// src/app/routes/_authorized.drafts._index/route.tsx
import { jsx as jsx88, jsxs as jsxs60 } from "react/jsx-runtime";
function OrdersList() {
  return /* @__PURE__ */ jsxs60(Container6, { maxW: "6xl", sx: { my: 4 }, children: [
    /* @__PURE__ */ jsx88(OrdersPage, { showDrafts: !0 }),
    ";"
  ] });
}

// src/app/routes/_authorized.orders._index/route.tsx
var route_exports13 = {};
__export(route_exports13, {
  default: () => OrdersList2
});
import { Container as Container7 } from "@chakra-ui/react";
import { jsx as jsx89 } from "react/jsx-runtime";
function OrdersList2() {
  return /* @__PURE__ */ jsx89(Container7, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx89(OrdersPage, {}) });
}

// src/app/routes/api.dxt.vendedor.cliente.ts
var api_dxt_vendedor_cliente_exports = {};
__export(api_dxt_vendedor_cliente_exports, {
  action: () => action16,
  loader: () => loader17
});
async function loader17({ request, params }) {
  return await dxtVendedorGetCustomersEndpoint.get(request, params);
}
var action16 = unimplementedApiResponse;

// src/app/routes/api.settings.config_file.ts
var api_settings_config_file_exports = {};
__export(api_settings_config_file_exports, {
  action: () => action17,
  loader: () => loader18
});

// src/code.server/api/settings/endpoints/getProgramConfigFile.ts
var getProgramConfigFileEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => await settingsService.getProgramConfig(!0)
);

// src/app/routes/api.settings.config_file.ts
async function loader18({ request, params }) {
  return await getProgramConfigFileEndpoint.get(request, params);
}
var action17 = unimplementedApiResponse;

// src/app/routes/_admin.settings.company/route.tsx
var route_exports14 = {};
__export(route_exports14, {
  default: () => Company
});
import { useNavigate as useNavigate13 } from "@remix-run/react";

// src/app/routes/_admin.settings.company/components/success.tsx
import { useEffect as useEffect16 } from "react";
import { Box as Box27, Grid as Grid17, GridItem as GridItem17, useToast as useToast10 } from "@chakra-ui/react";
import { yupResolver as yupResolver8 } from "@hookform/resolvers/yup";
import { useForm as useForm9 } from "react-hook-form";

// src/api-client/company/paths.ts
var API_DICTIONARY_GET_ALL = apiEndpoint("/dictionary", "GET"), API_ACTIVE_COMPANY_UPDATE = apiEndpoint("/dictionary/active_company", "POST");

// src/api-client/company/requests.tsx
var companyUpdateRequest = async (input, app) => await dxtApiRequest(
  {
    ...API_ACTIVE_COMPANY_UPDATE,
    params: input,
    silent: !0
  },
  app
);

// src/app/routes/_admin.settings.company/validation.ts
import * as yup9 from "yup";
var yupValidationSchema2 = yup9.object({
  company: yup9.string().required("Seleccione una empresa activa")
}).required();

// src/app/routes/_admin.settings.company/components/success.tsx
import { jsx as jsx90, jsxs as jsxs61 } from "react/jsx-runtime";
var Success9 = () => {
  let app = useAppResources(), toast = useToast10(), { state: stateDictionary, result: resultDictionary } = useTangoList({
    endpoint: API_DICTIONARY_GET_ALL,
    fieldsMap: {
      label: "name",
      value: "db_name",
      selected: "is_active"
    }
  }), {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm9({
    defaultValues: {
      company: ""
    },
    resolver: yupResolver8(yupValidationSchema2)
  }), disableForm = isSubmitSuccessful || isSubmitting;
  return useEffect16(() => {
    if (stateDictionary instanceof FetchStateSuccess) {
      let selectedIndex = resultDictionary.findIndex(
        (x) => x.selected === !0
      );
      selectedIndex >= 0 && reset({
        company: resultDictionary[selectedIndex].value
      });
    }
  }, [stateDictionary]), /* @__PURE__ */ jsx90("form", { noValidate: !0, onSubmit: handleSubmit(async (data) => {
    let input = {
      company: data.company
    };
    (await companyUpdateRequest(input, app)).map({
      success: (_14) => {
        toast({
          title: COMPANY_UPDATED,
          status: "success"
        }), app.navigate(URL_SETTINGS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }), children: /* @__PURE__ */ jsxs61(Box27, { children: [
    /* @__PURE__ */ jsx90(FormErrors, { errors }),
    /* @__PURE__ */ jsx90(CommonCard, { children: /* @__PURE__ */ jsxs61(
      Grid17,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsxs61(GridItem17, { children: [
            /* @__PURE__ */ jsx90(
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
            stateDictionary instanceof FetchStateError && /* @__PURE__ */ jsx90(InlineError, { error: stateDictionary.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx90(GridItem17, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx90(CommonCard, { children: /* @__PURE__ */ jsx90(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};

// src/app/routes/_admin.settings.company/components/index.tsx
import { jsx as jsx91 } from "react/jsx-runtime";
var FormCompany = () => /* @__PURE__ */ jsx91(Success9, {});

// src/app/routes/_admin.settings.company/route.tsx
import { Fragment as Fragment28, jsx as jsx92, jsxs as jsxs62 } from "react/jsx-runtime";
function Company() {
  let navigate = useNavigate13();
  return /* @__PURE__ */ jsxs62(Fragment28, { children: [
    /* @__PURE__ */ jsx92(
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
    /* @__PURE__ */ jsx92(FormCompany, {})
  ] });
}

// src/app/routes/_admin.settings._index/route.tsx
var route_exports15 = {};
__export(route_exports15, {
  default: () => Settings
});

// src/api-client/admin/paths.ts
var API_ADMIN_STATUS = apiEndpoint("/admin/status", "GET");

// src/app/routes/_admin.settings._index/components/loading.tsx
import { Skeleton as Skeleton3, VStack as VStack6 } from "@chakra-ui/react";
import { Fragment as Fragment29, jsx as jsx93, jsxs as jsxs63 } from "react/jsx-runtime";
var Loading7 = () => /* @__PURE__ */ jsx93(Fragment29, { children: /* @__PURE__ */ jsxs63(VStack6, { spacing: 4, width: "full", children: [
  /* @__PURE__ */ jsx93(Skeleton3, { width: "full", height: "70px", borderRadius: "md" }),
  /* @__PURE__ */ jsx93(Skeleton3, { width: "full", height: "70px", borderRadius: "md" }),
  /* @__PURE__ */ jsx93(Skeleton3, { width: "full", height: "120px", borderRadius: "md" }),
  /* @__PURE__ */ jsx93(Skeleton3, { width: "full", height: "70px", borderRadius: "md" })
] }) });

// src/app/routes/_admin.settings._index/components/success.tsx
import { useNavigate as useNavigate14 } from "@remix-run/react";
import { Box as Box28, Card as Card3, CardBody as CardBody3, Grid as Grid19, GridItem as GridItem19, VStack as VStack7 } from "@chakra-ui/react";

// src/app/components/SettingsListButton.tsx
import { Button as Button11 } from "@chakra-ui/react";

// src/app/components/SettingsListItem.tsx
import {
  Badge as Badge5,
  Card as Card2,
  CardBody as CardBody2,
  Grid as Grid18,
  GridItem as GridItem18,
  Heading as Heading13,
  HStack as HStack13,
  Icon as Icon9
} from "@chakra-ui/react";
import CheckCircleIcon from "mdi-react/CheckCircleIcon.js";
import CloseCircleIcon from "mdi-react/CloseCircleIcon.js";
import { jsx as jsx94, jsxs as jsxs64 } from "react/jsx-runtime";
var SettingsListItem = (props) => {
  let { status, title, status_text, actionButtonState, actionButtonOnClick } = props, color = status === 1 /* success */ ? "green" : "red";
  return /* @__PURE__ */ jsx94(Card2, { children: /* @__PURE__ */ jsx94(CardBody2, { children: /* @__PURE__ */ jsxs64(
    Grid18,
    {
      templateColumns: { base: "1fr", md: "6fr 1fr" },
      alignItems: "center",
      gap: 4,
      children: [
        /* @__PURE__ */ jsx94(GridItem18, { children: /* @__PURE__ */ jsxs64(HStack13, { justifyContent: "start", children: [
          status != null && (status === 1 /* success */ ? /* @__PURE__ */ jsx94(Icon9, { as: CheckCircleIcon, color: "green.500", boxSize: 8 }) : /* @__PURE__ */ jsx94(Icon9, { as: CloseCircleIcon, color: "red.500", boxSize: 8 })),
          /* @__PURE__ */ jsxs64("div", { children: [
            /* @__PURE__ */ jsx94(Heading13, { size: "md", textTransform: "uppercase", children: title }),
            status_text != null && /* @__PURE__ */ jsx94(
              Badge5,
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
                children: status_text.split(`
`).map((line, key) => /* @__PURE__ */ jsx94("p", { style: { minHeight: 10 }, children: line }, `text-${key}`))
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx94(GridItem18, { textAlign: { base: "end", md: "start" }, children: /* @__PURE__ */ jsx94(
          SettingsListButton,
          {
            buttonState: actionButtonState,
            onClick: actionButtonOnClick,
            fullWidth: !1,
            children: CONFIGURE
          }
        ) })
      ]
    }
  ) }) });
};

// src/app/components/SettingsListButton.tsx
import { jsx as jsx95 } from "react/jsx-runtime";
var SettingsListButton = (props) => {
  let { buttonState, onClick, children, fullWidth } = props;
  return /* @__PURE__ */ jsx95(
    Button11,
    {
      onClick,
      ...buttonState === 1 /* disabled */ ? {
        isDisabled: !0
      } : {
        colorScheme: "blue"
      },
      width: fullWidth === !0 ? "full" : void 0,
      children
    }
  );
};

// src/app/routes/_admin.settings._index/components/success.tsx
import { Fragment as Fragment30, jsx as jsx96, jsxs as jsxs65 } from "react/jsx-runtime";
var Success10 = (props) => {
  let { stateData } = props, navigate = useNavigate14(), configSuccessful = stateData.dictionary_ok && stateData.company_ok, errorText = stateData.company_error != null ? `${stateData.company_error}${stateData.company_error_details != null ? `

${stateData.company_error_details}` : ""}` : void 0;
  return /* @__PURE__ */ jsx96(Fragment30, { children: /* @__PURE__ */ jsxs65(VStack7, { spacing: 4, width: "full", children: [
    /* @__PURE__ */ jsx96(Box28, { width: "full", children: /* @__PURE__ */ jsx96(
      SettingsListItem,
      {
        title: TANGO_CONNECTION,
        status_text: stateData.dictionary_error != null && stateData.dictionary_error || stateData.settings.db.tango_dictionary,
        status: stateData.dictionary_ok ? 1 /* success */ : 0 /* error */,
        actionButtonState: 0 /* enabled */,
        actionButtonOnClick: () => {
          navigate(URL_SETTINGS_TANGO_PATH);
        }
      }
    ) }),
    /* @__PURE__ */ jsx96(Box28, { width: "full", children: /* @__PURE__ */ jsx96(
      SettingsListItem,
      {
        title: COMPANY,
        status_text: errorText ?? stateData.settings.db.tango_active_company,
        status: stateData.company_ok ? 1 /* success */ : 0 /* error */,
        actionButtonState: stateData.dictionary_ok ? 0 /* enabled */ : 1 /* disabled */,
        actionButtonOnClick: () => {
          navigate(URL_SETTINGS_COMPANY_PATH);
        }
      }
    ) }),
    /* @__PURE__ */ jsx96(Box28, { width: "full", children: /* @__PURE__ */ jsx96(Card3, { children: /* @__PURE__ */ jsx96(CardBody3, { children: /* @__PURE__ */ jsxs65(
      Grid19,
      {
        templateColumns: { base: "1fr", sm: "repeat(2,1fr)" },
        gap: 4,
        children: [
          /* @__PURE__ */ jsx96(GridItem19, { textAlign: "center", children: /* @__PURE__ */ jsx96(
            SettingsListButton,
            {
              fullWidth: !0,
              buttonState: configSuccessful ? 0 /* enabled */ : 1 /* disabled */,
              onClick: () => {
                navigate(URL_SETTINGS_CUSTOMERS_PATH);
              },
              children: CLIENTS_ADMIN
            }
          ) }),
          /* @__PURE__ */ jsx96(GridItem19, { textAlign: "center", children: /* @__PURE__ */ jsx96(
            SettingsListButton,
            {
              fullWidth: !0,
              buttonState: configSuccessful ? 0 /* enabled */ : 1 /* disabled */,
              onClick: () => {
                navigate(URL_SETTINGS_VENDORS_PATH);
              },
              children: SELLERS_ADMIN
            }
          ) }),
          /* @__PURE__ */ jsx96(GridItem19, { textAlign: "center", children: /* @__PURE__ */ jsx96(
            SettingsListButton,
            {
              fullWidth: !0,
              buttonState: configSuccessful ? 0 /* enabled */ : 1 /* disabled */,
              onClick: () => {
                navigate(URL_SETTINGS_ARTICULO_EDIT_LIST);
              },
              children: PRODUCT_EDIT_LIST
            }
          ) }),
          /* @__PURE__ */ jsx96(GridItem19, { textAlign: "center", children: /* @__PURE__ */ jsx96(
            SettingsListButton,
            {
              fullWidth: !0,
              buttonState: configSuccessful ? 0 /* enabled */ : 1 /* disabled */,
              onClick: () => {
                navigate(URL_SETTINGS_ARTICULO_PRINT_LIST);
              },
              children: PRODUCT_PRINT_LIST
            }
          ) })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx96(Box28, { width: "full", children: /* @__PURE__ */ jsx96(
      SettingsListItem,
      {
        title: VARIOUS_SETTINGS,
        actionButtonState: 0 /* enabled */,
        actionButtonOnClick: () => {
          navigate(URL_SETTINGS_MISC_PATH);
        }
      }
    ) })
  ] }) });
};

// src/app/routes/_admin.settings._index/components/index.tsx
import { Fragment as Fragment31, jsx as jsx97 } from "react/jsx-runtime";
var SettingsHome = () => {
  let { state, retry } = useDXTApiFetch({
    ...API_ADMIN_STATUS,
    silent: !0
  });
  return /* @__PURE__ */ jsx97(Fragment31, { children: state.map({
    loading: (_14) => /* @__PURE__ */ jsx97(Loading7, {}),
    error: ({ error }) => /* @__PURE__ */ jsx97(ApiErrors, { error, retry }),
    success: (state2) => /* @__PURE__ */ jsx97(Success10, { stateData: state2.data })
  }) });
};

// src/app/routes/_admin.settings._index/route.tsx
import { jsx as jsx98 } from "react/jsx-runtime";
function Settings() {
  return /* @__PURE__ */ jsx98(SettingsHome, {});
}

// src/app/routes/_authorized.drafts.add/route.tsx
var route_exports16 = {};
__export(route_exports16, {
  default: () => OrdersAdd5
});
import { Container as Container8 } from "@chakra-ui/react";
import { jsx as jsx99 } from "react/jsx-runtime";
function OrdersAdd5() {
  return /* @__PURE__ */ jsx99(Container8, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx99(OrdersAddPage, { draft: !0 }) });
}

// src/app/routes/_authorized.orders.add/route.tsx
var route_exports17 = {};
__export(route_exports17, {
  default: () => OrdersAdd6
});
import { Container as Container9 } from "@chakra-ui/react";
import { jsx as jsx100 } from "react/jsx-runtime";
function OrdersAdd6() {
  return /* @__PURE__ */ jsx100(Container9, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx100(OrdersAddPage, { draft: !1 }) });
}

// src/app/routes/_admin.settings.tango/route.tsx
var route_exports18 = {};
__export(route_exports18, {
  default: () => Tango2
});
import { useNavigate as useNavigate15 } from "@remix-run/react";

// src/api-client/settings/paths.ts
var API_SETTINGS_DB = apiEndpoint("/settings/db", "GET"), API_SETTINGS_DB_SET = apiEndpoint("/settings/db", "POST"), API_SETTINGS_MISC = apiEndpoint("/settings/misc", "GET"), API_SETTINGS_MISC_SET = apiEndpoint("/settings/misc", "POST");

// src/app/routes/_admin.settings.tango/components/loading.tsx
import { Box as Box29, Grid as Grid20, GridItem as GridItem20 } from "@chakra-ui/react";
import { jsx as jsx101, jsxs as jsxs66 } from "react/jsx-runtime";
var Loading8 = () => /* @__PURE__ */ jsx101(
  Box29,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs66(
      Grid20,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx101(GridItem20, { children: /* @__PURE__ */ jsx101(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx101(GridItem20, { children: /* @__PURE__ */ jsx101(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx101(GridItem20, { children: /* @__PURE__ */ jsx101(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx101(GridItem20, { children: /* @__PURE__ */ jsx101(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx101(GridItem20, { children: /* @__PURE__ */ jsx101(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx101(GridItem20, { children: /* @__PURE__ */ jsx101(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx101(GridItem20, { children: /* @__PURE__ */ jsx101(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx101(GridItem20, { children: /* @__PURE__ */ jsx101(FormInputSkeleton, {}) })
        ]
      }
    )
  }
);

// src/app/routes/_admin.settings.tango/components/success.tsx
import { Box as Box30, Grid as Grid21, GridItem as GridItem21, useToast as useToast11 } from "@chakra-ui/react";
import { yupResolver as yupResolver9 } from "@hookform/resolvers/yup";
import { useForm as useForm10 } from "react-hook-form";

// src/api-client/settings/requests.ts
var settingsDBUpdateRequest = async (input, app) => await dxtApiRequest(
  {
    ...API_SETTINGS_DB_SET,
    data: input,
    silent: !0
  },
  app
), settingsMiscUpdateRequest = async (input, app) => await dxtApiRequest(
  {
    ...API_SETTINGS_MISC_SET,
    data: input,
    silent: !0
  },
  app
);

// src/app/routes/_admin.settings.tango/validation.ts
import * as yup10 from "yup";
var yupValidationSchema3 = yup10.object({
  db_host: yup10.string().required("Ingrese el host de la base de datos"),
  db_port: yup10.number().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido").test(
    "is-port",
    "Ingrese un puerto v\xE1lido",
    (v) => yupVOValidation(VOTCPPort, v)
  ),
  db_user: yup10.string().required("Ingrese el usuario de la base de datos"),
  db_password: yup10.string().required("Ingrese la contrase\xF1a de la base de datos"),
  tango_dictionary: yup10.string().required("Ingrese el diccionario base de Tango").test(
    "mssql-db-name",
    "Ingrese un nombre de Diccionario base v\xE1lido",
    (v) => yupVOValidation(VOMSSqlDBName, v)
  ),
  db_connection_timeout_seconds: yup10.number().min(
    0,
    `El tiempo de espera debe ser mayor a ${0} segundos`
  ).max(
    300,
    `El tiempo de espera debe ser menor a ${300} segundos`
  ).required("Ingrese el tiempo de espera de la conexi\xF3n a la base de datos").typeError(
    "Ingrese el tiempo de espera de la conexi\xF3n a la base de datos"
  )
}).required();

// src/app/routes/_admin.settings.tango/components/success.tsx
import { jsx as jsx102, jsxs as jsxs67 } from "react/jsx-runtime";
var Success11 = (props) => {
  let { stateData } = props, app = useAppResources(), toast = useToast11(), {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm10({
    defaultValues: stateData,
    resolver: yupResolver9(yupValidationSchema3)
  }), disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx102("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    (await settingsDBUpdateRequest(dataUnsafe, app)).map({
      success: (_14) => {
        toast({
          title: TANGO_CONNECTION_UPDATED,
          status: "success"
        }), app.navigate(URL_SETTINGS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED,
          status: "error"
        }), setError("root", { message: e.info.error_description });
      }
    });
  }), children: /* @__PURE__ */ jsxs67(Box30, { children: [
    /* @__PURE__ */ jsx102(FormErrors, { errors }),
    /* @__PURE__ */ jsx102(CommonCard, { children: /* @__PURE__ */ jsxs67(
      Grid21,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx102(GridItem21, { children: /* @__PURE__ */ jsx102(
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
          /* @__PURE__ */ jsx102(GridItem21, { children: /* @__PURE__ */ jsx102(
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
          /* @__PURE__ */ jsx102(GridItem21, { children: /* @__PURE__ */ jsx102(
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
          /* @__PURE__ */ jsx102(GridItem21, { children: /* @__PURE__ */ jsx102(
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
                label: "Contrase\xF1a SQL"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx102(GridItem21, { children: /* @__PURE__ */ jsx102(
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
          /* @__PURE__ */ jsx102(GridItem21, { children: /* @__PURE__ */ jsx102(
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
    /* @__PURE__ */ jsx102(CommonCard, { children: /* @__PURE__ */ jsx102(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};

// src/app/routes/_admin.settings.tango/components/index.tsx
import { jsx as jsx103 } from "react/jsx-runtime";
var FormTango = () => {
  let { state, retry } = useDXTApiFetch({
    ...API_SETTINGS_DB,
    silent: !0
  });
  return state.map({
    loading: (_14) => /* @__PURE__ */ jsx103(Loading8, {}),
    error: ({ error }) => /* @__PURE__ */ jsx103(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx103(Success11, { stateData: state2.data })
  });
};

// src/app/routes/_admin.settings.tango/route.tsx
import { Fragment as Fragment32, jsx as jsx104, jsxs as jsxs68 } from "react/jsx-runtime";
function Tango2() {
  let navigate = useNavigate15();
  return /* @__PURE__ */ jsxs68(Fragment32, { children: [
    /* @__PURE__ */ jsx104(
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
    /* @__PURE__ */ jsx104(FormTango, {})
  ] });
}

// src/app/routes/api.pedido.$id_pedido.ts
var api_pedido_id_pedido_exports = {};
__export(api_pedido_id_pedido_exports, {
  action: () => action18,
  loader: () => loader19
});
var loader19 = unimplementedApiResponse;
async function action18({ request, params }) {
  return await mapEndpoint(request, params, {
    delete: cancelOrderEndpoint,
    patch: updateOrderEndpoint
  });
}

// src/app/routes/_admin.settings.misc/route.tsx
var route_exports19 = {};
__export(route_exports19, {
  default: () => Misc
});
import { useNavigate as useNavigate16 } from "@remix-run/react";

// src/app/routes/_admin.settings.misc/components/loading.tsx
import { Box as Box31, Divider as Divider8, Grid as Grid22, GridItem as GridItem22 } from "@chakra-ui/react";
import { jsx as jsx105, jsxs as jsxs69 } from "react/jsx-runtime";
var Loading9 = () => /* @__PURE__ */ jsx105(
  Box31,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs69(
      Grid22,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx105(GridItem22, { children: /* @__PURE__ */ jsx105(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { children: /* @__PURE__ */ jsx105(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { children: /* @__PURE__ */ jsx105(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { children: /* @__PURE__ */ jsx105(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx105(Divider8, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { children: /* @__PURE__ */ jsx105(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { children: /* @__PURE__ */ jsx105(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx105(Divider8, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx105(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx105(FormTextareaSkeleton, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx105(Divider8, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx105(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx105(FormTextareaSkeleton, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { children: /* @__PURE__ */ jsx105(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx105(GridItem22, { children: /* @__PURE__ */ jsx105(FormInputSkeleton, {}) })
        ]
      }
    )
  }
);

// src/app/routes/_admin.settings.misc/components/success.tsx
import {
  Box as Box32,
  Divider as Divider9,
  Grid as Grid23,
  GridItem as GridItem23,
  Heading as Heading14,
  useToast as useToast12
} from "@chakra-ui/react";
import { yupResolver as yupResolver10 } from "@hookform/resolvers/yup";
import { useForm as useForm11 } from "react-hook-form";

// src/app/components/form_elements/ControlledCheckbox.tsx
import {
  Checkbox as Checkbox2,
  Flex as Flex8,
  FormControl as FormControl7,
  FormHelperText as FormHelperText6
} from "@chakra-ui/react";
import { useController as useController7 } from "react-hook-form";
import { jsx as jsx106, jsxs as jsxs70 } from "react/jsx-runtime";
var ControlledCheckbox = (props) => {
  let { fieldProps, formControlProps, formControlInnerProps, control } = props, { name } = fieldProps, { text, helperText, helperAction } = formControlInnerProps || {}, {
    field: { ref: ref3, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController7({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs70(FormControl7, { ...formControlProps, isInvalid: invalid, ref: ref3, children: [
    /* @__PURE__ */ jsxs70(Flex8, { alignItems: "center", children: [
      /* @__PURE__ */ jsx106(Checkbox2, { ...fieldProps, onChange, isChecked: value, children: text }),
      helperAction
    ] }),
    helperText != null && /* @__PURE__ */ jsx106(FormHelperText6, { children: helperText })
  ] });
};

// src/app/routes/_admin.settings.misc/validation.ts
import * as yup11 from "yup";
var yupValidationSchema4 = yup11.object({
  smtp_host: yup11.string().required("Ingrese el host SMTP").test(
    "valid-host",
    "Ingrese un host SMTP v\xE1lido",
    (v) => yupVOValidation(VOHost, v)
  ),
  smtp_username: yup11.string().required("Ingrese el usuario SMTP"),
  smtp_password: yup11.string().required("Ingrese la contrase\xF1a SMTP"),
  smtp_port: yup11.number().required("Ingrese el puerto SMTP").typeError("Ingrese un n\xFAmero de puerto SMTP v\xE1lido").test(
    "is-port",
    "Ingrese un puerto SMTP v\xE1lido",
    (v) => yupVOValidation(VOTCPPort, v)
  ),
  smtp_use_tls: yup11.boolean().required(),
  auth_expiration_days: yup11.number().min(
    1,
    `El tiempo de espera debe ser mayor a ${1}`
  ).max(
    365,
    `El tiempo de espera debe ser menor a ${365}`
  ).required("Ingrese el tiempo de espera para logout").typeError("Ingrese el tiempo de espera para logout"),
  admin_email: yup11.string().required("Ingrese el correo electr\xF3nico del Administrador").email("Ingrese un correo electr\xF3nico v\xE1lido"),
  user_warning_message_title: yup11.string().required("Ingrese el t\xEDtulo del mensaje de advertencia"),
  user_warning_message_content: yup11.string().required("Ingrese el contenido del mensaje de advertencia"),
  user_disabled_message_title: yup11.string().required("Ingrese el t\xEDtulo del mensaje de inhabilitaci\xF3n"),
  user_disabled_message_content: yup11.string().required("Ingrese el contenido del mensaje de inhabilitaci\xF3n")
}).required();

// src/app/routes/_admin.settings.misc/components/success.tsx
import { jsx as jsx107, jsxs as jsxs71 } from "react/jsx-runtime";
var Success12 = (props) => {
  let { stateData } = props, app = useAppResources(), toast = useToast12(), {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm11({
    defaultValues: stateData,
    resolver: yupResolver10(yupValidationSchema4)
  }), disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx107("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    (await settingsMiscUpdateRequest(dataUnsafe, app)).map({
      success: (_14) => {
        toast({
          title: VARIOUS_SETTINGS_UPDATED,
          status: "success"
        }), app.navigate(URL_SETTINGS_PATH);
      },
      error: (e) => {
        toast({
          title: AN_ERROR_OCCURRED
        }), setError("root", { message: e.info.error_description });
      }
    });
  }), children: /* @__PURE__ */ jsxs71(Box32, { children: [
    /* @__PURE__ */ jsx107(FormErrors, { errors }),
    /* @__PURE__ */ jsx107(CommonCard, { children: /* @__PURE__ */ jsxs71(
      Grid23,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx107(GridItem23, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx107(Heading14, { size: "sm", textTransform: "uppercase", children: "Servidor de Correos" }) }),
          /* @__PURE__ */ jsx107(GridItem23, { children: /* @__PURE__ */ jsx107(
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
          /* @__PURE__ */ jsx107(GridItem23, { children: /* @__PURE__ */ jsx107(
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
          /* @__PURE__ */ jsx107(GridItem23, { children: /* @__PURE__ */ jsx107(
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
                label: "Contrase\xF1a SMTP"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx107(GridItem23, { children: /* @__PURE__ */ jsx107(
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
          /* @__PURE__ */ jsx107(GridItem23, { children: /* @__PURE__ */ jsx107(
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
          /* @__PURE__ */ jsx107(GridItem23, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx107(Divider9, {}) }),
          /* @__PURE__ */ jsx107(GridItem23, { children: /* @__PURE__ */ jsx107(
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
                helperText: "Expresado en d\xEDas"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx107(GridItem23, { children: /* @__PURE__ */ jsx107(
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
                label: "Correo electr\xF3nico Administrador"
              },
              control
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx107(CommonCard, { children: /* @__PURE__ */ jsxs71(
      Grid23,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx107(GridItem23, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx107(Heading14, { size: "sm", textTransform: "uppercase", children: "Mensajes" }) }),
          /* @__PURE__ */ jsx107(GridItem23, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx107(
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
                label: "T\xEDtulo del mensaje de advertencia"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx107(GridItem23, { colSpan: { md: 2 }, children: "Contenido del mensaje de advertencia" }),
          /* @__PURE__ */ jsx107(GridItem23, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx107(
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
          /* @__PURE__ */ jsx107(GridItem23, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx107(Divider9, {}) }),
          /* @__PURE__ */ jsx107(GridItem23, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx107(
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
                label: "T\xEDtulo del mensaje de inhabilitaci\xF3n"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx107(GridItem23, { colSpan: { md: 2 }, children: "Contenido del mensaje de inhabilitaci\xF3n" }),
          /* @__PURE__ */ jsx107(GridItem23, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx107(
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
    /* @__PURE__ */ jsx107(CommonCard, { children: /* @__PURE__ */ jsx107(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};

// src/app/routes/_admin.settings.misc/components/index.tsx
import { jsx as jsx108 } from "react/jsx-runtime";
var FormMisc = () => {
  let { state, retry } = useDXTApiFetch({
    ...API_SETTINGS_MISC,
    silent: !0
  });
  return state.map({
    loading: (_14) => /* @__PURE__ */ jsx108(Loading9, {}),
    error: ({ error }) => /* @__PURE__ */ jsx108(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx108(Success12, { stateData: state2.data })
  });
};

// src/app/routes/_admin.settings.misc/route.tsx
import { Fragment as Fragment33, jsx as jsx109, jsxs as jsxs72 } from "react/jsx-runtime";
function Misc() {
  let navigate = useNavigate16();
  return /* @__PURE__ */ jsxs72(Fragment33, { children: [
    /* @__PURE__ */ jsx109(
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
    /* @__PURE__ */ jsx109(FormMisc, {})
  ] });
}

// src/app/routes/api.draft.$id_pedido.ts
var api_draft_id_pedido_exports = {};
__export(api_draft_id_pedido_exports, {
  action: () => action19,
  loader: () => loader20
});
var loader20 = unimplementedApiResponse;
async function action19({ request, params }) {
  return await mapEndpoint(request, params, {
    delete: cancelDraftEndpoint,
    patch: updateDraftEndpoint
  });
}

// src/app/routes/api.pedido.renglones.ts
var api_pedido_renglones_exports = {};
__export(api_pedido_renglones_exports, {
  action: () => action20,
  loader: () => loader21
});
async function loader21({ request, params }) {
  return await getOrderRowsEndpoint.run(request, params);
}
var action20 = unimplementedApiResponse;

// src/app/routes/api.pedido.start_new.ts
var api_pedido_start_new_exports = {};
__export(api_pedido_start_new_exports, {
  action: () => action21,
  loader: () => loader22
});
async function loader22({ request, params }) {
  return await startNewOrderEndpoint.get(request, params);
}
var action21 = unimplementedApiResponse;

// src/app/routes/api.draft.renglones.ts
var api_draft_renglones_exports = {};
__export(api_draft_renglones_exports, {
  action: () => action22,
  loader: () => loader23
});
async function loader23({ request, params }) {
  return await getDraftRowsEndpoint.run(request, params);
}
var action22 = unimplementedApiResponse;

// src/app/routes/api.draft.start_new.ts
var api_draft_start_new_exports = {};
__export(api_draft_start_new_exports, {
  action: () => action23,
  loader: () => loader24
});
async function loader24({ request, params }) {
  return await startNewDraftEndpoint.get(request, params);
}
var action23 = unimplementedApiResponse;

// src/app/routes/api.tango.vendedor.ts
var api_tango_vendedor_exports = {};
__export(api_tango_vendedor_exports, {
  action: () => action24,
  loader: () => loader25
});

// src/code.server/api/company/utils.ts
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
      let {
        offset,
        limit
        /*, order*/
      } = req.validated.query;
      return await repository.getAll({
        offset,
        limit
        /*, order*/
      });
    }
    /* *************************************************************************************************************** */
  );
}

// src/code.server/api/user/endpoints/index.ts
var tangoClienteGetAllEndpoint = createCompanyGetAllEndpoint(
  adminRootController,
  clienteRepository
), tangoVendedorGetAllEndpoint = createCompanyGetAllEndpoint(
  adminRootController,
  vendedorRepository
);

// src/app/routes/api.tango.vendedor.ts
var loader25 = async (o) => await tangoVendedorGetAllEndpoint.get(o.request, o.params), action24 = unimplementedApiResponse;

// src/app/routes/api.auth.password.ts
var api_auth_password_exports = {};
__export(api_auth_password_exports, {
  action: () => action25,
  loader: () => loader26
});

// src/domain/auth/inputs/change_password.input.ts
var changePasswordInputValidationSchema = {
  old_password: (v) => new VODXTPassword(v),
  new_password: (v) => new VODXTPassword(v)
}, validateChangePasswordInput = (input) => validateInput(
  changePasswordInputValidationSchema,
  input
);

// src/code.server/api/auth/utils/index.ts
async function authPrivateResultToPublic(auth) {
  let {
    auth_token,
    user
  } = auth;
  return {
    auth_token,
    user: await userEntityToPublicInfo(user)
  };
}
async function userEntityToPublicInfo(user) {
  let { user_warning_message_title: title, user_warning_message_content: content } = await settingsService.getMiscSettings(), userUnsafe = user.toUnsafe(), { password_hash, email, mostrar_mensaje_de_advertencia, ...remaining } = userUnsafe;
  return {
    ...remaining,
    ...mostrar_mensaje_de_advertencia && { message: {
      type: "warning",
      title,
      content
    } }
  };
}

// src/code.server/api/auth/endpoints/change_password.ts
var authChangePasswordEndpoint = createApiEndpoint(
  authenticatedRootController,
  /* *************************************************************************************************************** */
  {
    validation: {
      body: (input) => validateChangePasswordInput(input)
    }
  },
  /* *************************************************************************************************************** */
  async (req) => {
    let { old_password, new_password } = req.validated.body, { user, auth_token } = req.auth;
    return await authService.changePassword(
      user,
      old_password,
      new_password
    ), authPrivateResultToPublic(
      await authService.connect(auth_token)
    );
  }
  /* *************************************************************************************************************** */
);

// src/app/routes/api.auth.password.ts
var loader26 = unimplementedApiResponse;
async function action25({ request, params }) {
  return await authChangePasswordEndpoint.patch(request, params);
}

// src/app/routes/api.settings.misc.ts
var api_settings_misc_exports = {};
__export(api_settings_misc_exports, {
  action: () => action26,
  loader: () => loader27
});

// src/code.server/api/settings/endpoints/getMisc.ts
var getMiscSettingsEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => {
    let {
      admin_password_hash,
      ...remaining
    } = await settingsService.getMiscSettings(!0);
    return remaining;
  }
);

// src/domain/settings/inputs/index.ts
var dbSettingsInputSchema = {
  db_host: (v) => new VONotEmptyString(v),
  db_port: (v) => new VOTCPPort(v),
  db_user: (v) => new VONotEmptyString(v),
  db_password: (v) => new VOString(v.trim()),
  db_connection_timeout_seconds: (v) => new VOIntegerRange(v, 0, 300),
  tango_dictionary: (v) => new VOMSSqlDBName(v)
}, miscSettingsInputSchema = {
  smtp_host: (v) => new VOHost(v),
  smtp_username: (v) => new VOString(v.trim()),
  smtp_password: (v) => new VOString(v.trim()),
  smtp_port: (v) => new VOTCPPort(v),
  smtp_use_tls: (v) => new VOBoolean(v),
  auth_expiration_days: (v) => new VOIntegerRange(v, 1, 365),
  user_warning_message_title: (v) => new VONotEmptyString(v.trim()),
  user_warning_message_content: (v) => new VONotEmptyString(v.trim()),
  user_disabled_message_title: (v) => new VONotEmptyString(v.trim()),
  user_disabled_message_content: (v) => new VONotEmptyString(v.trim()),
  admin_email: (v) => new VOString(v.trim() === "" ? "" : new VOEmailAddress(v).valueOf())
}, validateDBSettingsInput = (input) => validateInput(dbSettingsInputSchema, input), validateMiscSettingsInput = (input) => validateInput(miscSettingsInputSchema, input);

// src/code.server/api/settings/endpoints/updateMisc.ts
var updateMiscSettingsEndpoint = createApiEndpoint(
  adminRootController,
  /* *************************************************************************************************************** */
  {
    validation: {
      body: validateMiscSettingsInput
    }
  },
  /* *************************************************************************************************************** */
  async (req) => {
    let { body } = req.validated, oldSettings = await settingsService.getMiscSettings(), newSettingsDTO = new StoredMiscSettingsDTO({
      admin_password_hash: oldSettings.admin_password_hash,
      ...body
    }), newSettings = await settingsService.setMiscSettings(newSettingsDTO), { auth_expiration_days: oldAuthExpirationDays } = oldSettings, { auth_expiration_days: newAuthExpirationDays } = newSettings, newAuthExpiration = oldAuthExpirationDays !== newAuthExpirationDays;
    return newAuthExpiration && emitBusEvent(
      new MiscSettingsChangedEvent({
        newAuthExpiration
      })
    ), body;
  }
  /* *************************************************************************************************************** */
);

// src/app/routes/api.settings.misc.ts
async function loader27({ request, params }) {
  return await getMiscSettingsEndpoint.get(request, params);
}
async function action26({ request, params }) {
  return await updateMiscSettingsEndpoint.post(request, params);
}

// src/app/routes/api.tango.cliente.ts
var api_tango_cliente_exports = {};
__export(api_tango_cliente_exports, {
  action: () => action27,
  loader: () => loader28
});
var loader28 = async (o) => await tangoClienteGetAllEndpoint.get(o.request, o.params), action27 = unimplementedApiResponse;

// src/app/routes/api.admin.status.ts
var api_admin_status_exports = {};
__export(api_admin_status_exports, {
  action: () => action28,
  loader: () => loader29
});

// src/code.server/api/admin/endpoints/getStatus.ts
var getAdminStatusEndpoint = createApiEndpoint(
  adminRootController,
  /* *************************************************************************************************************** */
  void 0,
  /* *************************************************************************************************************** */
  async (req) => {
    let dbSettings = await settingsService.getDBSettings(!0), miscSettings = await settingsService.getMiscSettings(!0), dictionary_ok = !0, dictionary_error, company_ok = !0, company_error, company_error_details, tangoError, companies;
    try {
      companies = await dictionaryRepository.getCompanies();
    } catch (e) {
      companies = null, dictionary_ok = !1, dictionary_error = exceptionToDXTErrorInfo(e).error_description, isDXTException(e, 200001 /* TANGO_DB_ACCESS_ERROR */) && (tangoError = e);
    }
    try {
      if (tangoError != null)
        throw tangoError;
      await tangoRepository.getCompany();
    } catch (e) {
      company_ok = !1;
      let errorInfo = exceptionToDXTErrorInfo(e);
      company_error = errorInfo.error_description, company_error_details = errorInfo.extra;
    }
    let { admin_password_hash, ...misc } = miscSettings;
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

// src/app/routes/api.admin.status.ts
async function loader29({ request, params }) {
  return await getAdminStatusEndpoint.get(request, params);
}
var action28 = unimplementedApiResponse;

// src/app/routes/api.auth.connect.ts
var api_auth_connect_exports = {};
__export(api_auth_connect_exports, {
  action: () => action29,
  loader: () => loader30
});

// src/code.server/api/auth/endpoints/connect.ts
var authConnectEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => authPrivateResultToPublic(req.auth)
);

// src/app/routes/api.auth.connect.ts
var loader30 = unimplementedApiResponse;
async function action29({ request, params }) {
  return await authConnectEndpoint.post(request, params);
}

// src/app/routes/api.dxt.vendedor.ts
var api_dxt_vendedor_exports = {};
__export(api_dxt_vendedor_exports, {
  action: () => action30,
  loader: () => loader31
});
async function loader31({ request, params }) {
  return await dxtVendedorGetAllEndpoint.get(request, params);
}
async function action30({ request, params }) {
  return await dxtVendedorCreateEndpoint.post(request, params);
}

// src/app/routes/api.tango.perfil.ts
var api_tango_perfil_exports = {};
__export(api_tango_perfil_exports, {
  action: () => action31,
  loader: () => loader32
});

// src/code.server/api/auxiliar/endpoints/index.ts
var tangoPerfilGetAllEndpoint = createCompanyGetAllEndpoint(
  authenticatedRootController,
  perfilRepository
), tangoListaDePreciosAllEndpoint = createCompanyGetAllEndpoint(
  authenticatedRootController,
  listaRepository
);

// src/app/routes/api.tango.perfil.ts
var loader32 = async (o) => await tangoPerfilGetAllEndpoint.get(o.request, o.params), action31 = unimplementedApiResponse;

// src/app/routes/api.auth.logout.ts
var api_auth_logout_exports = {};
__export(api_auth_logout_exports, {
  action: () => action32,
  loader: () => loader33
});

// src/code.server/api/auth/endpoints/logout.ts
var authLogoutEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => (await authService.logout(req.auth.auth_token), { ok: !0 })
);

// src/app/routes/api.auth.logout.ts
var loader33 = unimplementedApiResponse;
async function action32({ request, params }) {
  return await authLogoutEndpoint.post(request, params);
}

// src/app/routes/api.dxt.cliente.ts
var api_dxt_cliente_exports = {};
__export(api_dxt_cliente_exports, {
  action: () => action33,
  loader: () => loader34
});
async function loader34({ request, params }) {
  return await dxtClienteGetAllEndpoint.get(request, params);
}
async function action33({ request, params }) {
  return await dxtClienteCreateEndpoint.post(request, params);
}

// src/app/routes/api.settings.db.ts
var api_settings_db_exports = {};
__export(api_settings_db_exports, {
  action: () => action34,
  loader: () => loader35
});

// src/code.server/api/settings/endpoints/getDB.ts
var getDBSettingsEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => {
    let storedDBSettings = await settingsService.getDBSettings(!0), {
      tango_active_company,
      ...remaining
    } = storedDBSettings;
    return remaining;
  }
);

// src/code.server/api/settings/endpoints/updateDB.ts
import _13 from "lodash";
var updateDBSettingsEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      body: validateDBSettingsInput
    }
  },
  async (req) => {
    let { body } = req.validated, oldSettings = await settingsService.getDBSettings(), newSettings = {
      ...body,
      tango_active_company: oldSettings.tango_active_company
    }, { db_connection_timeout_seconds: oldTimeout, tango_active_company: oldCompany, ...oldRemainingData } = oldSettings, { db_connection_timeout_seconds: newTimeout, tango_active_company: ignoredCompany, ...newRemainingData } = newSettings, thereIsANewDictionary = !_13.isEqual(oldRemainingData, newRemainingData), newCompany = thereIsANewDictionary ? "" : oldCompany, finalSettings = {
      ...body,
      tango_active_company: newCompany
    }, finalSettingsDTO = new StoredDBSettingsDTO(finalSettings), thereIsANewCompany = oldCompany !== newCompany, passiveDBChanges = oldTimeout !== newTimeout && !thereIsANewDictionary && !thereIsANewCompany, anyChange = passiveDBChanges || thereIsANewDictionary || thereIsANewCompany;
    await settingsService.setDBSettings(finalSettingsDTO), anyChange && emitBusEvent(
      new DBSettingsChangedEvent({
        passiveDBChanges,
        newDictionary: thereIsANewDictionary,
        newCompany: thereIsANewCompany,
        resetCache: thereIsANewCompany
      })
    );
    let {
      tango_active_company,
      ...remaining
    } = finalSettings;
    return remaining;
  }
);

// src/app/routes/api.settings.db.ts
async function loader35({ request, params }) {
  return await getDBSettingsEndpoint.get(request, params);
}
async function action34({ request, params }) {
  return await updateDBSettingsEndpoint.post(request, params);
}

// src/app/routes/api.tango.lista.ts
var api_tango_lista_exports = {};
__export(api_tango_lista_exports, {
  action: () => action35,
  loader: () => loader36
});
var loader36 = async (o) => await tangoListaDePreciosAllEndpoint.get(o.request, o.params), action35 = unimplementedApiResponse;

// src/app/routes/api.auth.login.ts
var api_auth_login_exports = {};
__export(api_auth_login_exports, {
  action: () => action36,
  loader: () => loader37
});

// src/domain/auth/inputs/login_user.input.ts
var loginUserInputValidationSchema = {
  username: (v) => new VOUserName(v),
  password: (v) => new VOString(v)
}, validateLoginUserInput = (input) => validateInput(loginUserInputValidationSchema, input);

// src/code.server/api/auth/endpoints/login.ts
var authLoginEndpoint = createApiEndpoint(
  rootController,
  {
    validation: {
      body: (input) => validateLoginUserInput(input)
    }
  },
  async (req) => {
    let { username, password } = req.validated.body;
    return await authPrivateResultToPublic(
      await authService.login(username, password)
    );
  }
);

// src/app/routes/api.auth.login.ts
var loader37 = unimplementedApiResponse;
async function action36({ request, params }) {
  return await authLoginEndpoint.post(request, params);
}

// src/app/routes/api.dictionary.ts
var api_dictionary_exports = {};
__export(api_dictionary_exports, {
  action: () => action37,
  loader: () => loader38
});

// src/code.server/api/dictionary/endpoints/getCompanies.ts
var getCompaniesEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => await dictionaryRepository.getCompanies()
);

// src/app/routes/api.dictionary.ts
async function loader38({ request, params }) {
  return await getCompaniesEndpoint.get(request, params);
}
var action37 = unimplementedApiResponse;

// src/app/routes/_authorized/route.tsx
var route_exports20 = {};
__export(route_exports20, {
  default: () => AuthorizedLayout
});
import { Outlet as Outlet2 } from "@remix-run/react";

// src/code.client/auth/AuthGuard.tsx
import { useEffect as useEffect17 } from "react";
import { useLocation as useLocation2, useNavigate as useNavigate17 } from "@remix-run/react";
import { Fragment as Fragment34, jsx as jsx110 } from "react/jsx-runtime";
var AuthGuard = (props) => {
  let { children } = props, { state: authState, dispatch: authDispatch } = useAuth(), navigate = useNavigate17(), location = useLocation2();
  if (useEffect17(() => {
    if (authState instanceof AuthStateLoggedIn) {
      authDispatch(new AuthActionRefreshAll(authState.userInfo));
      return;
    }
    authState.isDisconnectedAndNotRedirecting() && redirectLoginWithReturnUrl(navigate);
  }, [location, authState.constructor.name]), authState.isLoggedIn())
    return /* @__PURE__ */ jsx110(Fragment34, { children });
};

// src/code.client/hooks/useHydrated.ts
import { useSyncExternalStore } from "react";
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => !0,
    () => !1
  );
}

// src/app/components/ClientOnly.tsx
import { Fragment as Fragment35, jsx as jsx111 } from "react/jsx-runtime";
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? /* @__PURE__ */ jsx111(Fragment35, { children }) : /* @__PURE__ */ jsx111(Fragment35, { children: fallback });
}

// src/app/components/Navbar.tsx
import { useNavigate as useNavigate18 } from "@remix-run/react";
import {
  Box as Box33,
  Flex as Flex10,
  HStack as HStack14,
  IconButton as IconButton7,
  Menu as Menu2,
  MenuButton as MenuButton2,
  MenuDivider as MenuDivider2,
  MenuItem as MenuItem2,
  MenuList as MenuList2,
  Text as Text10,
  useColorModeValue as useColorModeValue10
} from "@chakra-ui/react";
import MenuIcon from "mdi-react/MenuIcon.js";

// src/texts/users.ts
var USER_ROLE_CUSTOMER = "Cliente", USER_ROLE_VENDOR = "Vendedor", USER_ROLE_ADMIN = "Administrador";

// src/domain/user/utils/index.ts
function getUserRoleText(role) {
  switch (role) {
    case 0 /* customer */:
      return USER_ROLE_CUSTOMER;
    case 1 /* vendor */:
      return USER_ROLE_VENDOR;
    default:
      return USER_ROLE_ADMIN;
  }
}

// src/app/components/ColorModeSelector.tsx
import { Icon as Icon10, IconButton as IconButton6, useColorMode } from "@chakra-ui/react";
import MoonWaningCrescentIcon from "mdi-react/MoonWaningCrescentIcon.js";
import WeatherSunnyIcon from "mdi-react/WeatherSunnyIcon.js";
import { jsx as jsx112 } from "react/jsx-runtime";
var ColorModeSelector = () => {
  let { colorMode, toggleColorMode } = useColorMode();
  return /* @__PURE__ */ jsx112(
    IconButton6,
    {
      "aria-label": CHANGE_COLOR_MODE,
      onClick: toggleColorMode,
      isRound: !0,
      icon: /* @__PURE__ */ jsx112(
        Icon10,
        {
          as: colorMode === "light" ? MoonWaningCrescentIcon : WeatherSunnyIcon
        }
      )
    }
  );
};

// src/app/components/LogoImage.tsx
import { Image, useColorModeValue as useColorModeValue9 } from "@chakra-ui/react";
import { jsx as jsx113 } from "react/jsx-runtime";
var LogoImage = (props) => {
  let logo = useColorModeValue9("/logo-light.svg", "/logo-dark.svg");
  return /* @__PURE__ */ jsx113(Image, { src: logo, ...props });
};

// src/app/components/SystemMessageToUser.tsx
import {
  Alert as Alert10,
  AlertDescription as AlertDescription8,
  AlertIcon as AlertIcon9,
  AlertTitle as AlertTitle2,
  Flex as Flex9
} from "@chakra-ui/react";
import { jsx as jsx114, jsxs as jsxs73 } from "react/jsx-runtime";
var MessageToUser = (props) => {
  let { type, title, content } = props;
  return /* @__PURE__ */ jsxs73(
    Alert10,
    {
      status: type,
      sx: {
        justifyContent: "center"
      },
      children: [
        /* @__PURE__ */ jsx114(
          AlertIcon9,
          {
            sx: {
              boxSize: { base: 8, md: 5 }
            }
          }
        ),
        /* @__PURE__ */ jsxs73(Flex9, { flexDirection: { base: "column", md: "row" }, children: [
          /* @__PURE__ */ jsx114(AlertTitle2, { children: title }),
          /* @__PURE__ */ jsx114(AlertDescription8, { children: content })
        ] })
      ]
    }
  );
};

// src/app/components/Navbar.tsx
import { Fragment as Fragment36, jsx as jsx115, jsxs as jsxs74 } from "react/jsx-runtime";
var Navbar = () => {
  let { state: authState, dispatch: authDispatch } = useAuth(), navigate = useNavigate18(), user = authState.userOrNull(), systemMessage = user?.message, userRoleText = user?.role != null ? getUserRoleText(user?.role) : "", _username = user?.screen_name.trim() ?? "", userLabel = authState.isAdmin() ? _username : `${userRoleText} ${_username}`;
  return /* @__PURE__ */ jsxs74(Fragment36, { children: [
    /* @__PURE__ */ jsx115(
      Box33,
      {
        bg: useColorModeValue10("gray.100", "gray.900"),
        sx: {
          px: 4
        },
        children: /* @__PURE__ */ jsxs74(Flex10, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxs74(HStack14, { spacing: 4, alignItems: "center", children: [
            /* @__PURE__ */ jsxs74(Menu2, { isLazy: !0, id: "menu", children: [
              /* @__PURE__ */ jsx115(
                MenuButton2,
                {
                  as: IconButton7,
                  "aria-label": OPTIONS,
                  icon: /* @__PURE__ */ jsx115(MenuIcon, {}),
                  variant: "outline"
                }
              ),
              /* @__PURE__ */ jsxs74(MenuList2, { rootProps: { zIndex: 2e3 }, children: [
                /* @__PURE__ */ jsx115(
                  MenuItem2,
                  {
                    onClick: () => {
                      navigate(URL_PEDIDOS_PATH);
                    },
                    children: PEDIDOS
                  }
                ),
                !authState.isAdmin() && /* @__PURE__ */ jsx115(
                  MenuItem2,
                  {
                    onClick: () => {
                      navigate(URL_BORRADORES_PATH);
                    },
                    children: BORRADORES
                  }
                ),
                /* @__PURE__ */ jsx115(MenuDivider2, {}),
                authState.isAdmin() && /* @__PURE__ */ jsx115(
                  MenuItem2,
                  {
                    onClick: () => {
                      navigate(URL_SETTINGS_PATH);
                    },
                    children: ADMINISTRACION
                  }
                ),
                /* @__PURE__ */ jsx115(
                  MenuItem2,
                  {
                    onClick: () => {
                      navigate(URL_AUTH_CHANGE_PASSWORD_PATH);
                    },
                    children: CHANGE_PASSWORD
                  }
                ),
                /* @__PURE__ */ jsx115(MenuDivider2, {}),
                /* @__PURE__ */ jsx115(
                  MenuItem2,
                  {
                    onClick: async () => {
                      await authDispatch(new AuthActionLogout());
                    },
                    children: LOGOUT
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx115(Box33, { children: /* @__PURE__ */ jsx115(LogoImage, { height: "20px", alt: "" }) })
          ] }),
          /* @__PURE__ */ jsx115(Flex10, { alignItems: "center", children: /* @__PURE__ */ jsxs74(HStack14, { spacing: 4, children: [
            /* @__PURE__ */ jsx115(
              Box33,
              {
                display: {
                  base: "none",
                  md: "block"
                },
                children: /* @__PURE__ */ jsx115(Text10, { children: userLabel })
              }
            ),
            /* @__PURE__ */ jsx115(ColorModeSelector, {})
          ] }) })
        ] })
      }
    ),
    systemMessage != null && systemMessage != null && /* @__PURE__ */ jsx115(MessageToUser, { ...systemMessage }),
    /* @__PURE__ */ jsx115(Box33, {})
  ] });
};

// src/app/routes/_authorized/route.tsx
import { jsx as jsx116, jsxs as jsxs75 } from "react/jsx-runtime";
function AuthorizedLayout() {
  return /* @__PURE__ */ jsx116(ClientOnly, { children: /* @__PURE__ */ jsxs75(AuthGuard, { children: [
    /* @__PURE__ */ jsx116(Navbar, {}),
    /* @__PURE__ */ jsx116(Outlet2, {})
  ] }) });
}

// src/app/routes/api.pedido.ts
var api_pedido_exports = {};
__export(api_pedido_exports, {
  action: () => action38,
  loader: () => loader39
});
async function loader39({ request, params }) {
  return await getAllOrdersEndpoint.get(request, params);
}
async function action38({ request, params }) {
  return await createOrderEndpoint.post(request, params);
}

// src/app/routes/api.draft.ts
var api_draft_exports = {};
__export(api_draft_exports, {
  action: () => action39,
  loader: () => loader40
});
async function loader40({ request, params }) {
  return await getAllDraftsEndpoint.get(request, params);
}
async function action39({ request, params }) {
  return await createDraftEndpoint.post(request, params);
}

// src/app/routes/_admin/route.tsx
var route_exports21 = {};
__export(route_exports21, {
  default: () => AdminLayout
});
import { Outlet as Outlet3 } from "@remix-run/react";
import { Container as Container10 } from "@chakra-ui/react";
import { jsx as jsx117, jsxs as jsxs76 } from "react/jsx-runtime";
function AdminLayout() {
  return /* @__PURE__ */ jsx117(ClientOnly, { children: /* @__PURE__ */ jsxs76(AuthGuard, { children: [
    /* @__PURE__ */ jsx117(Navbar, {}),
    /* @__PURE__ */ jsx117(Container10, { maxW: "2xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx117(Outlet3, {}) })
  ] }) });
}

// src/app/routes/_index/route.tsx
var route_exports22 = {};
__export(route_exports22, {
  default: () => Index
});
import { useEffect as useEffect18 } from "react";
import {
  Alert as Alert11,
  Box as Box35,
  Button as Button12,
  Card as Card4,
  CardBody as CardBody4,
  CardHeader,
  Center,
  Container as Container11,
  Heading as Heading16,
  Icon as Icon12,
  InputLeftElement as InputLeftElement2,
  ListItem as ListItem3,
  UnorderedList as UnorderedList2,
  VStack as VStack8
} from "@chakra-ui/react";
import { yupResolver as yupResolver11 } from "@hookform/resolvers/yup";
import * as yup12 from "yup";
import AccountIcon from "mdi-react/AccountIcon.js";
import LockIcon from "mdi-react/LockIcon.js";
import { useForm as useForm12 } from "react-hook-form";

// src/app/components/MessageToUserAlert.tsx
import { Box as Box34, Heading as Heading15, Icon as Icon11, Text as Text11 } from "@chakra-ui/react";
import WarningIcon from "mdi-react/AlertOutlineIcon.js";
import ErrorIcon from "mdi-react/CloseOctagonOutlineIcon.js";
import InfoIcon from "mdi-react/InformationVariantCircleOutlineIcon.js";
import { jsx as jsx118, jsxs as jsxs77 } from "react/jsx-runtime";
var MessageToUserAlert = (props) => {
  let { type, title, content } = props, IconType = {
    info: InfoIcon,
    warning: WarningIcon,
    error: ErrorIcon
  }[type] ?? null;
  return /* @__PURE__ */ jsxs77(Box34, { textAlign: "center", py: 10, px: 6, children: [
    IconType != null && /* @__PURE__ */ jsx118(Icon11, { as: IconType, boxSize: 12 }),
    /* @__PURE__ */ jsx118(Heading15, { as: "h2", size: "xl", mt: 4, mb: 2, children: title }),
    /* @__PURE__ */ jsx118(Text11, { color: "gray.500", children: content })
  ] });
};

// src/app/dialogs/MessageToUserDialog.tsx
import { useModal as useModal2 } from "react-hooks-async-modal";
import { jsx as jsx119 } from "react/jsx-runtime";
var MessageToUserDialog = ({
  title,
  message,
  onResolve
}) => /* @__PURE__ */ jsx119(
  CustomDialog,
  {
    isOpen: !0,
    dialogTitle: title,
    dialogContents: message,
    hideButtons: !0,
    handleCancel: () => {
      onResolve(0 /* close */);
    },
    handleCancelWording: CLOSE
  }
);
function useMessageToUserDialog() {
  return useModal2(
    MessageToUserDialog
  );
}

// src/app/routes/_index/route.tsx
import { Fragment as Fragment37, jsx as jsx120, jsxs as jsxs78 } from "react/jsx-runtime";
var validationSchema = yup12.object({
  username: yup12.string().required("Ingrese su nombre de usuario").test("test", "Usuario no valido", (v) => yupVOValidation(VOUserName, v)),
  password: yup12.string().required("Ingrese su contrase\xF1a")
}).required();
function Index() {
  let { state: authState, dispatch: authDispatch } = useAuth(), dialogCall = useMessageToUserDialog(), {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm12({
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: yupResolver11(validationSchema)
  }), onSubmit = async (data) => {
    let dataToSubmit = {
      username: data.username,
      password: data.password
    };
    await authDispatch(new AuthActionLogin(dataToSubmit));
  };
  return useEffect18(() => {
    if (authState instanceof AuthStateDisconnected) {
      let messageToUser = authState.errorOrNull()?.message_to_user;
      messageToUser != null && dialogCall({
        message: /* @__PURE__ */ jsx120(MessageToUserAlert, { ...messageToUser })
      });
    }
  }, [authState]), /* @__PURE__ */ jsxs78(Fragment37, { children: [
    /* @__PURE__ */ jsx120(
      Box35,
      {
        sx: {
          position: "absolute",
          top: 3,
          right: 4
        },
        children: /* @__PURE__ */ jsx120(ColorModeSelector, {})
      }
    ),
    /* @__PURE__ */ jsx120(
      Box35,
      {
        sx: {
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ jsx120(
          Container11,
          {
            maxWidth: "sm",
            sx: {
              alignSelf: "center"
            },
            children: /* @__PURE__ */ jsxs78(Card4, { children: [
              /* @__PURE__ */ jsx120(CardHeader, { children: /* @__PURE__ */ jsx120(Center, { children: /* @__PURE__ */ jsx120(LogoImage, { width: "160px", alt: "" }) }) }),
              /* @__PURE__ */ jsx120(CardBody4, { children: /* @__PURE__ */ jsx120("form", { noValidate: !0, onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs78(VStack8, { spacing: 4, children: [
                /* @__PURE__ */ jsx120(
                  Heading16,
                  {
                    size: "sm",
                    sx: {
                      textAlign: "center",
                      pb: 2
                    },
                    children: WELCOME
                  }
                ),
                (Object.keys(errors).length || authState.errorOrNull()) && /* @__PURE__ */ jsx120(Box35, { width: "full", children: /* @__PURE__ */ jsx120(Alert11, { status: "error", children: /* @__PURE__ */ jsxs78(
                  UnorderedList2,
                  {
                    fontSize: "sm",
                    styleType: "none",
                    sx: { m: 0 },
                    children: [
                      Object.keys(errors).length && Object.values(errors).map((error, key) => /* @__PURE__ */ jsx120(ListItem3, { children: error.message }, key)),
                      authState.errorOrNull() && /* @__PURE__ */ jsx120(ListItem3, { children: authState.errorOrNull()?.error_description }, "api_error")
                    ]
                  }
                ) }) }),
                /* @__PURE__ */ jsx120(
                  ControlledInput,
                  {
                    formControlInnerProps: {
                      icon: /* @__PURE__ */ jsx120(InputLeftElement2, { pointerEvents: "none", children: /* @__PURE__ */ jsx120(Icon12, { as: AccountIcon }) })
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
                /* @__PURE__ */ jsx120(
                  ControlledInput,
                  {
                    formControlInnerProps: {
                      icon: /* @__PURE__ */ jsx120(InputLeftElement2, { pointerEvents: "none", children: /* @__PURE__ */ jsx120(Icon12, { as: LockIcon }) })
                    },
                    fieldProps: {
                      name: "password",
                      id: "password",
                      type: "password",
                      placeholder: "Contrase\xF1a"
                    },
                    formControlProps: {
                      isDisabled: isSubmitting
                    },
                    control
                  }
                ),
                /* @__PURE__ */ jsx120(Button12, { type: "submit", width: "full", colorScheme: "blue", isLoading: isSubmitting, children: "Ingresar" })
              ] }) }) })
            ] })
          }
        )
      }
    )
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7VKAAQTY.js", imports: ["/build/_shared/chunk-AKS5FTSF.js", "/build/_shared/chunk-3PZF3L6F.js", "/build/_shared/chunk-P3O6KQPX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YBI4HAXM.js", imports: ["/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/_admin": { id: "routes/_admin", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_admin-WR3AV3V6.js", imports: ["/build/_shared/chunk-DFO4U6L5.js", "/build/_shared/chunk-6PYVCHKS.js", "/build/_shared/chunk-YLOLV3SN.js", "/build/_shared/chunk-5LJ5WJLW.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings._index": { id: "routes/_admin.settings._index", parentId: "routes/_admin", path: "settings", index: !0, caseSensitive: void 0, module: "/build/routes/_admin.settings._index-6VGGSGQI.js", imports: ["/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.company": { id: "routes/_admin.settings.company", parentId: "routes/_admin", path: "settings/company", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.company-3BRMVCSY.js", imports: ["/build/_shared/chunk-FTQA2WXA.js", "/build/_shared/chunk-3VJFON6W.js", "/build/_shared/chunk-GZQJXPBT.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-3CMSTGAX.js", "/build/_shared/chunk-YCTICJS5.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.misc": { id: "routes/_admin.settings.misc", parentId: "routes/_admin", path: "settings/misc", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.misc-NH2F7W6F.js", imports: ["/build/_shared/chunk-73FNT72E.js", "/build/_shared/chunk-XMOVTS3H.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-XUADHUV5.js", "/build/_shared/chunk-CWO7YRBZ.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-3CMSTGAX.js", "/build/_shared/chunk-YCTICJS5.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.product_list.$type": { id: "routes/_admin.settings.product_list.$type", parentId: "routes/_admin", path: "settings/product_list/:type", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.product_list.$type-Z345PQGJ.js", imports: ["/build/_shared/chunk-HGHDHVAI.js", "/build/_shared/chunk-GV4MR7RK.js", "/build/_shared/chunk-XUADHUV5.js", "/build/_shared/chunk-CWO7YRBZ.js", "/build/_shared/chunk-GH6O753Y.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-3CMSTGAX.js", "/build/_shared/chunk-YCTICJS5.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.tango": { id: "routes/_admin.settings.tango", parentId: "routes/_admin", path: "settings/tango", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.tango-MPBWTB5R.js", imports: ["/build/_shared/chunk-73FNT72E.js", "/build/_shared/chunk-XMOVTS3H.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-CWO7YRBZ.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-3CMSTGAX.js", "/build/_shared/chunk-YCTICJS5.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.users.$type._index": { id: "routes/_admin.settings.users.$type._index", parentId: "routes/_admin", path: "settings/users/:type", index: !0, caseSensitive: void 0, module: "/build/routes/_admin.settings.users.$type._index-NCO2NXIX.js", imports: ["/build/_shared/chunk-W7TKRMHI.js", "/build/_shared/chunk-BV3PCMJP.js", "/build/_shared/chunk-L3E3UBE3.js", "/build/_shared/chunk-RALSDSOB.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-CWO7YRBZ.js", "/build/_shared/chunk-GH6O753Y.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-YCTICJS5.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.users.customers.$id.edit": { id: "routes/_admin.settings.users.customers.$id.edit", parentId: "routes/_admin", path: "settings/users/customers/:id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.users.customers.$id.edit-JZDPTWAC.js", imports: ["/build/_shared/chunk-64XZOYW7.js", "/build/_shared/chunk-UDK6EQ5D.js", "/build/_shared/chunk-X4IR7ZYM.js", "/build/_shared/chunk-FTQA2WXA.js", "/build/_shared/chunk-6ETWAEBC.js", "/build/_shared/chunk-XMOVTS3H.js", "/build/_shared/chunk-L3E3UBE3.js", "/build/_shared/chunk-RALSDSOB.js", "/build/_shared/chunk-3VJFON6W.js", "/build/_shared/chunk-GZQJXPBT.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-CWO7YRBZ.js", "/build/_shared/chunk-GH6O753Y.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-3CMSTGAX.js", "/build/_shared/chunk-YCTICJS5.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.users.customers.add": { id: "routes/_admin.settings.users.customers.add", parentId: "routes/_admin", path: "settings/users/customers/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.users.customers.add-NBAKM5JN.js", imports: ["/build/_shared/chunk-X4IR7ZYM.js", "/build/_shared/chunk-FTQA2WXA.js", "/build/_shared/chunk-6ETWAEBC.js", "/build/_shared/chunk-XMOVTS3H.js", "/build/_shared/chunk-L3E3UBE3.js", "/build/_shared/chunk-RALSDSOB.js", "/build/_shared/chunk-3VJFON6W.js", "/build/_shared/chunk-GZQJXPBT.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-3CMSTGAX.js", "/build/_shared/chunk-YCTICJS5.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.users.vendors.$id.edit": { id: "routes/_admin.settings.users.vendors.$id.edit", parentId: "routes/_admin", path: "settings/users/vendors/:id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.users.vendors.$id.edit-UFLYYI3O.js", imports: ["/build/_shared/chunk-64XZOYW7.js", "/build/_shared/chunk-UDK6EQ5D.js", "/build/_shared/chunk-X4IR7ZYM.js", "/build/_shared/chunk-FTQA2WXA.js", "/build/_shared/chunk-6ETWAEBC.js", "/build/_shared/chunk-XMOVTS3H.js", "/build/_shared/chunk-L3E3UBE3.js", "/build/_shared/chunk-RALSDSOB.js", "/build/_shared/chunk-3VJFON6W.js", "/build/_shared/chunk-GZQJXPBT.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-CWO7YRBZ.js", "/build/_shared/chunk-GH6O753Y.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-3CMSTGAX.js", "/build/_shared/chunk-YCTICJS5.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.users.vendors.add": { id: "routes/_admin.settings.users.vendors.add", parentId: "routes/_admin", path: "settings/users/vendors/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.users.vendors.add-4ILFL6FH.js", imports: ["/build/_shared/chunk-X4IR7ZYM.js", "/build/_shared/chunk-FTQA2WXA.js", "/build/_shared/chunk-6ETWAEBC.js", "/build/_shared/chunk-XMOVTS3H.js", "/build/_shared/chunk-L3E3UBE3.js", "/build/_shared/chunk-RALSDSOB.js", "/build/_shared/chunk-3VJFON6W.js", "/build/_shared/chunk-GZQJXPBT.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-3CMSTGAX.js", "/build/_shared/chunk-YCTICJS5.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized": { id: "routes/_authorized", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_authorized-NSYJMHUL.js", imports: ["/build/_shared/chunk-DFO4U6L5.js", "/build/_shared/chunk-6PYVCHKS.js", "/build/_shared/chunk-YLOLV3SN.js", "/build/_shared/chunk-5LJ5WJLW.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.change_password": { id: "routes/_authorized.change_password", parentId: "routes/_authorized", path: "change_password", index: void 0, caseSensitive: void 0, module: "/build/routes/_authorized.change_password-XCFBISW4.js", imports: ["/build/_shared/chunk-6ETWAEBC.js", "/build/_shared/chunk-XMOVTS3H.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-3CMSTGAX.js", "/build/_shared/chunk-YCTICJS5.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.drafts.$client.add": { id: "routes/_authorized.drafts.$client.add", parentId: "routes/_authorized", path: "drafts/:client/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_authorized.drafts.$client.add-3HIBHXSS.js", imports: ["/build/_shared/chunk-OUVXPO5I.js", "/build/_shared/chunk-6TZYW5IW.js", "/build/_shared/chunk-5UHTFQTM.js", "/build/_shared/chunk-BV3PCMJP.js", "/build/_shared/chunk-UDK6EQ5D.js", "/build/_shared/chunk-3VJFON6W.js", "/build/_shared/chunk-GZQJXPBT.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-GV4MR7RK.js", "/build/_shared/chunk-XUADHUV5.js", "/build/_shared/chunk-GH6O753Y.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.drafts.$id_pedido.edit": { id: "routes/_authorized.drafts.$id_pedido.edit", parentId: "routes/_authorized", path: "drafts/:id_pedido/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_authorized.drafts.$id_pedido.edit-CMPEZFKZ.js", imports: ["/build/_shared/chunk-OUVXPO5I.js", "/build/_shared/chunk-6TZYW5IW.js", "/build/_shared/chunk-5UHTFQTM.js", "/build/_shared/chunk-BV3PCMJP.js", "/build/_shared/chunk-UDK6EQ5D.js", "/build/_shared/chunk-3VJFON6W.js", "/build/_shared/chunk-GZQJXPBT.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-GV4MR7RK.js", "/build/_shared/chunk-XUADHUV5.js", "/build/_shared/chunk-GH6O753Y.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.drafts._index": { id: "routes/_authorized.drafts._index", parentId: "routes/_authorized", path: "drafts", index: !0, caseSensitive: void 0, module: "/build/routes/_authorized.drafts._index-274A6JTF.js", imports: ["/build/_shared/chunk-2UOAYYIE.js", "/build/_shared/chunk-5PSQ5JF7.js", "/build/_shared/chunk-UJ67EMTT.js", "/build/_shared/chunk-W7TKRMHI.js", "/build/_shared/chunk-6TZYW5IW.js", "/build/_shared/chunk-5UHTFQTM.js", "/build/_shared/chunk-BV3PCMJP.js", "/build/_shared/chunk-RALSDSOB.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-CWO7YRBZ.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.drafts.add": { id: "routes/_authorized.drafts.add", parentId: "routes/_authorized", path: "drafts/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_authorized.drafts.add-KLZ5WIAB.js", imports: ["/build/_shared/chunk-OUVXPO5I.js", "/build/_shared/chunk-6TZYW5IW.js", "/build/_shared/chunk-5UHTFQTM.js", "/build/_shared/chunk-BV3PCMJP.js", "/build/_shared/chunk-UDK6EQ5D.js", "/build/_shared/chunk-3VJFON6W.js", "/build/_shared/chunk-GZQJXPBT.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-GV4MR7RK.js", "/build/_shared/chunk-XUADHUV5.js", "/build/_shared/chunk-GH6O753Y.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.orders.$client.add": { id: "routes/_authorized.orders.$client.add", parentId: "routes/_authorized", path: "orders/:client/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_authorized.orders.$client.add-L6G7KPSL.js", imports: ["/build/_shared/chunk-OUVXPO5I.js", "/build/_shared/chunk-6TZYW5IW.js", "/build/_shared/chunk-5UHTFQTM.js", "/build/_shared/chunk-BV3PCMJP.js", "/build/_shared/chunk-UDK6EQ5D.js", "/build/_shared/chunk-3VJFON6W.js", "/build/_shared/chunk-GZQJXPBT.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-GV4MR7RK.js", "/build/_shared/chunk-XUADHUV5.js", "/build/_shared/chunk-GH6O753Y.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.orders.$id_pedido.edit": { id: "routes/_authorized.orders.$id_pedido.edit", parentId: "routes/_authorized", path: "orders/:id_pedido/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_authorized.orders.$id_pedido.edit-Q6LCAXGI.js", imports: ["/build/_shared/chunk-OUVXPO5I.js", "/build/_shared/chunk-6TZYW5IW.js", "/build/_shared/chunk-5UHTFQTM.js", "/build/_shared/chunk-BV3PCMJP.js", "/build/_shared/chunk-UDK6EQ5D.js", "/build/_shared/chunk-3VJFON6W.js", "/build/_shared/chunk-GZQJXPBT.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-GV4MR7RK.js", "/build/_shared/chunk-XUADHUV5.js", "/build/_shared/chunk-GH6O753Y.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.orders._index": { id: "routes/_authorized.orders._index", parentId: "routes/_authorized", path: "orders", index: !0, caseSensitive: void 0, module: "/build/routes/_authorized.orders._index-72TIEGJR.js", imports: ["/build/_shared/chunk-2UOAYYIE.js", "/build/_shared/chunk-5PSQ5JF7.js", "/build/_shared/chunk-UJ67EMTT.js", "/build/_shared/chunk-W7TKRMHI.js", "/build/_shared/chunk-6TZYW5IW.js", "/build/_shared/chunk-5UHTFQTM.js", "/build/_shared/chunk-BV3PCMJP.js", "/build/_shared/chunk-RALSDSOB.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-CWO7YRBZ.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.orders.add": { id: "routes/_authorized.orders.add", parentId: "routes/_authorized", path: "orders/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_authorized.orders.add-KR7IF4QM.js", imports: ["/build/_shared/chunk-OUVXPO5I.js", "/build/_shared/chunk-6TZYW5IW.js", "/build/_shared/chunk-5UHTFQTM.js", "/build/_shared/chunk-BV3PCMJP.js", "/build/_shared/chunk-UDK6EQ5D.js", "/build/_shared/chunk-3VJFON6W.js", "/build/_shared/chunk-GZQJXPBT.js", "/build/_shared/chunk-U6GMCTV4.js", "/build/_shared/chunk-74FFW6IE.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-V4GV7RJE.js", "/build/_shared/chunk-GV4MR7RK.js", "/build/_shared/chunk-XUADHUV5.js", "/build/_shared/chunk-GH6O753Y.js", "/build/_shared/chunk-DPMSINRD.js", "/build/_shared/chunk-DGTHX2SG.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-TWIFHJP5.js", "/build/_shared/chunk-UZUU2BD7.js", "/build/_shared/chunk-VIEJRPHH.js", "/build/_shared/chunk-DP2TJOZR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-GOGUQOOB.js", imports: ["/build/_shared/chunk-6PYVCHKS.js", "/build/_shared/chunk-UJ67EMTT.js", "/build/_shared/chunk-XMOVTS3H.js", "/build/_shared/chunk-4PX4OOS6.js", "/build/_shared/chunk-R3EIFBBN.js", "/build/_shared/chunk-5LJ5WJLW.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.admin.status": { id: "routes/api.admin.status", parentId: "root", path: "api/admin/status", index: void 0, caseSensitive: void 0, module: "/build/routes/api.admin.status-FRS5P2G5.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.connect": { id: "routes/api.auth.connect", parentId: "root", path: "api/auth/connect", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.connect-W5Z2JFG5.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.login": { id: "routes/api.auth.login", parentId: "root", path: "api/auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.login-GZAA62GZ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.logout": { id: "routes/api.auth.logout", parentId: "root", path: "api/auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.logout-G5J7MHFJ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.password": { id: "routes/api.auth.password", parentId: "root", path: "api/auth/password", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.password-VAEKHUHE.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dictionary": { id: "routes/api.dictionary", parentId: "root", path: "api/dictionary", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dictionary-CCSD6TWZ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dictionary.active_company": { id: "routes/api.dictionary.active_company", parentId: "routes/api.dictionary", path: "active_company", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dictionary.active_company-6Q76BQSE.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.draft": { id: "routes/api.draft", parentId: "root", path: "api/draft", index: void 0, caseSensitive: void 0, module: "/build/routes/api.draft-U46N3CKR.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.draft.$id_pedido": { id: "routes/api.draft.$id_pedido", parentId: "routes/api.draft", path: ":id_pedido", index: void 0, caseSensitive: void 0, module: "/build/routes/api.draft.$id_pedido-PB2MLXKQ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.draft.$id_pedido.start_copy": { id: "routes/api.draft.$id_pedido.start_copy", parentId: "routes/api.draft.$id_pedido", path: "start_copy", index: void 0, caseSensitive: void 0, module: "/build/routes/api.draft.$id_pedido.start_copy-4ANLQWD5.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.draft.$id_pedido.start_new_order": { id: "routes/api.draft.$id_pedido.start_new_order", parentId: "routes/api.draft.$id_pedido", path: "start_new_order", index: void 0, caseSensitive: void 0, module: "/build/routes/api.draft.$id_pedido.start_new_order-MO3YHE5C.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.draft.$id_pedido.start_update": { id: "routes/api.draft.$id_pedido.start_update", parentId: "routes/api.draft.$id_pedido", path: "start_update", index: void 0, caseSensitive: void 0, module: "/build/routes/api.draft.$id_pedido.start_update-R5IEQE3K.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.draft.renglones": { id: "routes/api.draft.renglones", parentId: "routes/api.draft", path: "renglones", index: void 0, caseSensitive: void 0, module: "/build/routes/api.draft.renglones-OY2LLFJC.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.draft.start_new": { id: "routes/api.draft.start_new", parentId: "routes/api.draft", path: "start_new", index: void 0, caseSensitive: void 0, module: "/build/routes/api.draft.start_new-FDGCFEUA.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.draft.start_new.$id_cliente": { id: "routes/api.draft.start_new.$id_cliente", parentId: "routes/api.draft.start_new", path: ":id_cliente", index: void 0, caseSensitive: void 0, module: "/build/routes/api.draft.start_new.$id_cliente-WXXXGHN2.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.articulo.edit_list": { id: "routes/api.dxt.articulo.edit_list", parentId: "root", path: "api/dxt/articulo/edit_list", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.articulo.edit_list-FU2IZVAR.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.articulo.print_list": { id: "routes/api.dxt.articulo.print_list", parentId: "root", path: "api/dxt/articulo/print_list", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.articulo.print_list-HZ3TTIEH.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.articulo.print_list.ids": { id: "routes/api.dxt.articulo.print_list.ids", parentId: "routes/api.dxt.articulo.print_list", path: "ids", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.articulo.print_list.ids-EWN7NFPS.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.cliente": { id: "routes/api.dxt.cliente", parentId: "root", path: "api/dxt/cliente", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.cliente-NZSBSNCI.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.cliente.$id_cliente": { id: "routes/api.dxt.cliente.$id_cliente", parentId: "routes/api.dxt.cliente", path: ":id_cliente", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.cliente.$id_cliente-VFG73GIB.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.usuario.auxiliares": { id: "routes/api.dxt.usuario.auxiliares", parentId: "root", path: "api/dxt/usuario/auxiliares", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.usuario.auxiliares-4VY7BCXW.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.vendedor": { id: "routes/api.dxt.vendedor", parentId: "root", path: "api/dxt/vendedor", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.vendedor-ZOD5J5SN.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.vendedor.$id_vendedor": { id: "routes/api.dxt.vendedor.$id_vendedor", parentId: "routes/api.dxt.vendedor", path: ":id_vendedor", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.vendedor.$id_vendedor-77QWCEJN.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.vendedor.cliente": { id: "routes/api.dxt.vendedor.cliente", parentId: "routes/api.dxt.vendedor", path: "cliente", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.vendedor.cliente-LM4FI5TP.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido": { id: "routes/api.pedido", parentId: "root", path: "api/pedido", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido-4DGYT3EG.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido.$id_pedido": { id: "routes/api.pedido.$id_pedido", parentId: "routes/api.pedido", path: ":id_pedido", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido.$id_pedido-KJETRUGV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido.$id_pedido.start_copy": { id: "routes/api.pedido.$id_pedido.start_copy", parentId: "routes/api.pedido.$id_pedido", path: "start_copy", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido.$id_pedido.start_copy-7DQCXQ7C.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido.$id_pedido.start_new_draft": { id: "routes/api.pedido.$id_pedido.start_new_draft", parentId: "routes/api.pedido.$id_pedido", path: "start_new_draft", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido.$id_pedido.start_new_draft-65JDVHD4.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido.$id_pedido.start_update": { id: "routes/api.pedido.$id_pedido.start_update", parentId: "routes/api.pedido.$id_pedido", path: "start_update", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido.$id_pedido.start_update-6NIMTD6Q.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido.renglones": { id: "routes/api.pedido.renglones", parentId: "routes/api.pedido", path: "renglones", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido.renglones-EHFXVNTM.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido.start_new": { id: "routes/api.pedido.start_new", parentId: "routes/api.pedido", path: "start_new", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido.start_new-I5X4PLAU.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido.start_new.$id_cliente": { id: "routes/api.pedido.start_new.$id_cliente", parentId: "routes/api.pedido.start_new", path: ":id_cliente", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido.start_new.$id_cliente-7PAACJJD.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.settings.config_file": { id: "routes/api.settings.config_file", parentId: "root", path: "api/settings/config_file", index: void 0, caseSensitive: void 0, module: "/build/routes/api.settings.config_file-TJ6FBNSB.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.settings.db": { id: "routes/api.settings.db", parentId: "root", path: "api/settings/db", index: void 0, caseSensitive: void 0, module: "/build/routes/api.settings.db-C5XU2RGJ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.settings.misc": { id: "routes/api.settings.misc", parentId: "root", path: "api/settings/misc", index: void 0, caseSensitive: void 0, module: "/build/routes/api.settings.misc-IH3ITAJF.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.tango.cliente": { id: "routes/api.tango.cliente", parentId: "root", path: "api/tango/cliente", index: void 0, caseSensitive: void 0, module: "/build/routes/api.tango.cliente-E7MDEYDM.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.tango.lista": { id: "routes/api.tango.lista", parentId: "root", path: "api/tango/lista", index: void 0, caseSensitive: void 0, module: "/build/routes/api.tango.lista-M6NFNJQJ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.tango.perfil": { id: "routes/api.tango.perfil", parentId: "root", path: "api/tango/perfil", index: void 0, caseSensitive: void 0, module: "/build/routes/api.tango.perfil-63SMEZ5Y.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.tango.vendedor": { id: "routes/api.tango.vendedor", parentId: "root", path: "api/tango/vendedor", index: void 0, caseSensitive: void 0, module: "/build/routes/api.tango.vendedor-WKOHEH6Y.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "36d016c9", hmr: void 0, url: "/build/manifest-36D016C9.js" };

// server-entry-module:@remix-run/dev/server-build
var mode4 = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_admin.settings.users.customers.$id.edit": {
    id: "routes/_admin.settings.users.customers.$id.edit",
    parentId: "routes/_admin",
    path: "settings/users/customers/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/_admin.settings.users.vendors.$id.edit": {
    id: "routes/_admin.settings.users.vendors.$id.edit",
    parentId: "routes/_admin",
    path: "settings/users/vendors/:id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/api.pedido.$id_pedido.start_new_draft": {
    id: "routes/api.pedido.$id_pedido.start_new_draft",
    parentId: "routes/api.pedido.$id_pedido",
    path: "start_new_draft",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_id_pedido_start_new_draft_exports
  },
  "routes/api.draft.$id_pedido.start_new_order": {
    id: "routes/api.draft.$id_pedido.start_new_order",
    parentId: "routes/api.draft.$id_pedido",
    path: "start_new_order",
    index: void 0,
    caseSensitive: void 0,
    module: api_draft_id_pedido_start_new_order_exports
  },
  "routes/_admin.settings.users.customers.add": {
    id: "routes/_admin.settings.users.customers.add",
    parentId: "routes/_admin",
    path: "settings/users/customers/add",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/_admin.settings.product_list.$type": {
    id: "routes/_admin.settings.product_list.$type",
    parentId: "routes/_admin",
    path: "settings/product_list/:type",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports4
  },
  "routes/_admin.settings.users.$type._index": {
    id: "routes/_admin.settings.users.$type._index",
    parentId: "routes/_admin",
    path: "settings/users/:type",
    index: !0,
    caseSensitive: void 0,
    module: route_exports5
  },
  "routes/_authorized.drafts.$id_pedido.edit": {
    id: "routes/_authorized.drafts.$id_pedido.edit",
    parentId: "routes/_authorized",
    path: "drafts/:id_pedido/edit",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports6
  },
  "routes/_authorized.orders.$id_pedido.edit": {
    id: "routes/_authorized.orders.$id_pedido.edit",
    parentId: "routes/_authorized",
    path: "orders/:id_pedido/edit",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports7
  },
  "routes/api.pedido.$id_pedido.start_update": {
    id: "routes/api.pedido.$id_pedido.start_update",
    parentId: "routes/api.pedido.$id_pedido",
    path: "start_update",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_id_pedido_start_update_exports
  },
  "routes/_admin.settings.users.vendors.add": {
    id: "routes/_admin.settings.users.vendors.add",
    parentId: "routes/_admin",
    path: "settings/users/vendors/add",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports8
  },
  "routes/api.draft.$id_pedido.start_update": {
    id: "routes/api.draft.$id_pedido.start_update",
    parentId: "routes/api.draft.$id_pedido",
    path: "start_update",
    index: void 0,
    caseSensitive: void 0,
    module: api_draft_id_pedido_start_update_exports
  },
  "routes/api.pedido.$id_pedido.start_copy": {
    id: "routes/api.pedido.$id_pedido.start_copy",
    parentId: "routes/api.pedido.$id_pedido",
    path: "start_copy",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_id_pedido_start_copy_exports
  },
  "routes/api.pedido.start_new.$id_cliente": {
    id: "routes/api.pedido.start_new.$id_cliente",
    parentId: "routes/api.pedido.start_new",
    path: ":id_cliente",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_start_new_id_cliente_exports
  },
  "routes/api.draft.$id_pedido.start_copy": {
    id: "routes/api.draft.$id_pedido.start_copy",
    parentId: "routes/api.draft.$id_pedido",
    path: "start_copy",
    index: void 0,
    caseSensitive: void 0,
    module: api_draft_id_pedido_start_copy_exports
  },
  "routes/api.draft.start_new.$id_cliente": {
    id: "routes/api.draft.start_new.$id_cliente",
    parentId: "routes/api.draft.start_new",
    path: ":id_cliente",
    index: void 0,
    caseSensitive: void 0,
    module: api_draft_start_new_id_cliente_exports
  },
  "routes/api.dxt.articulo.print_list.ids": {
    id: "routes/api.dxt.articulo.print_list.ids",
    parentId: "routes/api.dxt.articulo.print_list",
    path: "ids",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_articulo_print_list_ids_exports
  },
  "routes/_authorized.drafts.$client.add": {
    id: "routes/_authorized.drafts.$client.add",
    parentId: "routes/_authorized",
    path: "drafts/:client/add",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports9
  },
  "routes/_authorized.orders.$client.add": {
    id: "routes/_authorized.orders.$client.add",
    parentId: "routes/_authorized",
    path: "orders/:client/add",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports10
  },
  "routes/api.dictionary.active_company": {
    id: "routes/api.dictionary.active_company",
    parentId: "routes/api.dictionary",
    path: "active_company",
    index: void 0,
    caseSensitive: void 0,
    module: api_dictionary_active_company_exports
  },
  "routes/api.dxt.vendedor.$id_vendedor": {
    id: "routes/api.dxt.vendedor.$id_vendedor",
    parentId: "routes/api.dxt.vendedor",
    path: ":id_vendedor",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_vendedor_id_vendedor_exports
  },
  "routes/_authorized.change_password": {
    id: "routes/_authorized.change_password",
    parentId: "routes/_authorized",
    path: "change_password",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports11
  },
  "routes/api.dxt.articulo.print_list": {
    id: "routes/api.dxt.articulo.print_list",
    parentId: "root",
    path: "api/dxt/articulo/print_list",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_articulo_print_list_exports
  },
  "routes/api.dxt.cliente.$id_cliente": {
    id: "routes/api.dxt.cliente.$id_cliente",
    parentId: "routes/api.dxt.cliente",
    path: ":id_cliente",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_cliente_id_cliente_exports
  },
  "routes/api.dxt.articulo.edit_list": {
    id: "routes/api.dxt.articulo.edit_list",
    parentId: "root",
    path: "api/dxt/articulo/edit_list",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_articulo_edit_list_exports
  },
  "routes/api.dxt.usuario.auxiliares": {
    id: "routes/api.dxt.usuario.auxiliares",
    parentId: "root",
    path: "api/dxt/usuario/auxiliares",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_usuario_auxiliares_exports
  },
  "routes/_authorized.drafts._index": {
    id: "routes/_authorized.drafts._index",
    parentId: "routes/_authorized",
    path: "drafts",
    index: !0,
    caseSensitive: void 0,
    module: route_exports12
  },
  "routes/_authorized.orders._index": {
    id: "routes/_authorized.orders._index",
    parentId: "routes/_authorized",
    path: "orders",
    index: !0,
    caseSensitive: void 0,
    module: route_exports13
  },
  "routes/api.dxt.vendedor.cliente": {
    id: "routes/api.dxt.vendedor.cliente",
    parentId: "routes/api.dxt.vendedor",
    path: "cliente",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_vendedor_cliente_exports
  },
  "routes/api.settings.config_file": {
    id: "routes/api.settings.config_file",
    parentId: "root",
    path: "api/settings/config_file",
    index: void 0,
    caseSensitive: void 0,
    module: api_settings_config_file_exports
  },
  "routes/_admin.settings.company": {
    id: "routes/_admin.settings.company",
    parentId: "routes/_admin",
    path: "settings/company",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports14
  },
  "routes/_admin.settings._index": {
    id: "routes/_admin.settings._index",
    parentId: "routes/_admin",
    path: "settings",
    index: !0,
    caseSensitive: void 0,
    module: route_exports15
  },
  "routes/_authorized.drafts.add": {
    id: "routes/_authorized.drafts.add",
    parentId: "routes/_authorized",
    path: "drafts/add",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports16
  },
  "routes/_authorized.orders.add": {
    id: "routes/_authorized.orders.add",
    parentId: "routes/_authorized",
    path: "orders/add",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports17
  },
  "routes/_admin.settings.tango": {
    id: "routes/_admin.settings.tango",
    parentId: "routes/_admin",
    path: "settings/tango",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports18
  },
  "routes/api.pedido.$id_pedido": {
    id: "routes/api.pedido.$id_pedido",
    parentId: "routes/api.pedido",
    path: ":id_pedido",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_id_pedido_exports
  },
  "routes/_admin.settings.misc": {
    id: "routes/_admin.settings.misc",
    parentId: "routes/_admin",
    path: "settings/misc",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports19
  },
  "routes/api.draft.$id_pedido": {
    id: "routes/api.draft.$id_pedido",
    parentId: "routes/api.draft",
    path: ":id_pedido",
    index: void 0,
    caseSensitive: void 0,
    module: api_draft_id_pedido_exports
  },
  "routes/api.pedido.renglones": {
    id: "routes/api.pedido.renglones",
    parentId: "routes/api.pedido",
    path: "renglones",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_renglones_exports
  },
  "routes/api.pedido.start_new": {
    id: "routes/api.pedido.start_new",
    parentId: "routes/api.pedido",
    path: "start_new",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_start_new_exports
  },
  "routes/api.draft.renglones": {
    id: "routes/api.draft.renglones",
    parentId: "routes/api.draft",
    path: "renglones",
    index: void 0,
    caseSensitive: void 0,
    module: api_draft_renglones_exports
  },
  "routes/api.draft.start_new": {
    id: "routes/api.draft.start_new",
    parentId: "routes/api.draft",
    path: "start_new",
    index: void 0,
    caseSensitive: void 0,
    module: api_draft_start_new_exports
  },
  "routes/api.tango.vendedor": {
    id: "routes/api.tango.vendedor",
    parentId: "root",
    path: "api/tango/vendedor",
    index: void 0,
    caseSensitive: void 0,
    module: api_tango_vendedor_exports
  },
  "routes/api.auth.password": {
    id: "routes/api.auth.password",
    parentId: "root",
    path: "api/auth/password",
    index: void 0,
    caseSensitive: void 0,
    module: api_auth_password_exports
  },
  "routes/api.settings.misc": {
    id: "routes/api.settings.misc",
    parentId: "root",
    path: "api/settings/misc",
    index: void 0,
    caseSensitive: void 0,
    module: api_settings_misc_exports
  },
  "routes/api.tango.cliente": {
    id: "routes/api.tango.cliente",
    parentId: "root",
    path: "api/tango/cliente",
    index: void 0,
    caseSensitive: void 0,
    module: api_tango_cliente_exports
  },
  "routes/api.admin.status": {
    id: "routes/api.admin.status",
    parentId: "root",
    path: "api/admin/status",
    index: void 0,
    caseSensitive: void 0,
    module: api_admin_status_exports
  },
  "routes/api.auth.connect": {
    id: "routes/api.auth.connect",
    parentId: "root",
    path: "api/auth/connect",
    index: void 0,
    caseSensitive: void 0,
    module: api_auth_connect_exports
  },
  "routes/api.dxt.vendedor": {
    id: "routes/api.dxt.vendedor",
    parentId: "root",
    path: "api/dxt/vendedor",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_vendedor_exports
  },
  "routes/api.tango.perfil": {
    id: "routes/api.tango.perfil",
    parentId: "root",
    path: "api/tango/perfil",
    index: void 0,
    caseSensitive: void 0,
    module: api_tango_perfil_exports
  },
  "routes/api.auth.logout": {
    id: "routes/api.auth.logout",
    parentId: "root",
    path: "api/auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: api_auth_logout_exports
  },
  "routes/api.dxt.cliente": {
    id: "routes/api.dxt.cliente",
    parentId: "root",
    path: "api/dxt/cliente",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_cliente_exports
  },
  "routes/api.settings.db": {
    id: "routes/api.settings.db",
    parentId: "root",
    path: "api/settings/db",
    index: void 0,
    caseSensitive: void 0,
    module: api_settings_db_exports
  },
  "routes/api.tango.lista": {
    id: "routes/api.tango.lista",
    parentId: "root",
    path: "api/tango/lista",
    index: void 0,
    caseSensitive: void 0,
    module: api_tango_lista_exports
  },
  "routes/api.auth.login": {
    id: "routes/api.auth.login",
    parentId: "root",
    path: "api/auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: api_auth_login_exports
  },
  "routes/api.dictionary": {
    id: "routes/api.dictionary",
    parentId: "root",
    path: "api/dictionary",
    index: void 0,
    caseSensitive: void 0,
    module: api_dictionary_exports
  },
  "routes/_authorized": {
    id: "routes/_authorized",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route_exports20
  },
  "routes/api.pedido": {
    id: "routes/api.pedido",
    parentId: "root",
    path: "api/pedido",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_exports
  },
  "routes/api.draft": {
    id: "routes/api.draft",
    parentId: "root",
    path: "api/draft",
    index: void 0,
    caseSensitive: void 0,
    module: api_draft_exports
  },
  "routes/_admin": {
    id: "routes/_admin",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route_exports21
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports22
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode4 as mode,
  publicPath,
  routes
};
