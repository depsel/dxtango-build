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

// empty-module:./PDFRenderer.client
var require_PDFRenderer = __commonJS({
  "empty-module:./PDFRenderer.client"(exports, module) {
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
import createEmotionCache from "@emotion/cache";
import { CacheProvider as EmotionCacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";

// src/@core/http/utils.ts
function isHttpServerError(status) {
  return status >= 500 && status <= 599;
}

// src/@core/objects/index.ts
function isRealObject(value) {
  return typeof value == "object" && !Array.isArray(value) && value !== null;
}
function isObj(value) {
  return typeof value == "object" && !Array.isArray(value) && value !== null;
}

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

// src/domain/shared/errors/base.ts
var HTTP_STATUS_UNAVAILABLE = -1;
var _API_ERROR_MESSAGES = /* @__PURE__ */ new Map([
  [0 /* UNEXPECTED_ERROR */, "Error inesperado"],
  [1e4 /* BAD_REQUEST */, "Petici\xF3n incorrecta"],
  [10001 /* INVALID_PARAMETER */, "Par\xE1metro inv\xE1lido"],
  [10002 /* INSUFFICIENT_PARAMS */, "Par\xE1metros insuficientes"],
  [11e3 /* NOT_FOUND */, "No encontrado"],
  [11001 /* DXT_CUSTOMER_NOT_FOUND */, "Cliente DXTango ya no existe"],
  [11002 /* DXT_VENDOR_NOT_FOUND */, "Vendedor DXTango ya no existe"],
  [12e3 /* NOT_IMPLEMENTED */, "Acci\xF3n no implementada"],
  [13e3 /* TOO_MANY_REQUESTS */, "Demasiadas peticiones"],
  [14e3 /* CONFLICT */, "Conflicto"],
  [14001 /* DUPLICATED_TABLE_RECORD */, "Ya existe un registro con los datos que intenta ingresar"],
  [15e3 /* PAYLOAD_TOO_LARGE */, "Paquete de datos demasiado grande"],
  [16e3 /* UNPROCESSABLE_ENTITY */, "Entidad no procesable"],
  [1e5 /* UNAUTHORIZED */, "No autorizado"],
  [100001 /* INVALID_USERNAME_OR_PASSWORD */, "Usuario o contrase\xF1a incorrectos"],
  [100002 /* INVALID_AUTH_TOKEN */, "Token de autorizaci\xF3n no v\xE1lido"],
  [100003 /* EXPIRED_AUTH_TOKEN */, "Token de autorizaci\xF3n caducado"],
  [100004 /* MISSING_AUTH_TOKEN */, "Falta token de autorizaci\xF3n"],
  [100005 /* DXT_USER_DISABLED */, "El usuario est\xE1 inhabilitado en nuestro sistema"],
  [100006 /* TANGO_USER_DISABLED */, "El usuario est\xE1 inhabilitado en TANGO"],
  [101e3 /* FORBIDDEN */, "Acceso prohibido"],
  [101001 /* CUSTOMER_ROLE_REQUIRED */, "Acceso solo para clientes"],
  [101002 /* SELLER_ROLE_REQUIRED */, "Acceso solo para vendedores"],
  [101003 /* ADMIN_ROLE_REQUIRED */, "Acceso solo para administradores"],
  [101004 /* INSUFFICIENT_PRIVILEGES */, "Permisos insuficientes"],
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
  return _API_ERROR_MESSAGES.get(errorCode)?.toString() ?? errorCode.toString();
}
function getHttpStatusFromErrorCode(errorCode) {
  let generalErrorCode = getGenericErrorCode(errorCode);
  return _API_ERROR_HTTP_STATUS.get(generalErrorCode) ?? 500 /* INTERNAL_SERVER_ERROR */;
}
function getErrorCodeFromHttpStatus(status) {
  return _HTTP_STATUS_TO_API_ERRORS.get(status) ?? 0 /* UNEXPECTED_ERROR */;
}
function requiresContactingAdmin(errorCode) {
  return _ERRORS_REQUIRING_CONTACTING_ADMIN.includes(errorCode) || _ERRORS_REQUIRING_CONTACTING_ADMIN.includes(getGenericErrorCode(errorCode));
}
var DXTError = class {
  constructor(errorCode, options) {
    this.errorCode = errorCode;
    this.genericErrorCode = getGenericErrorCode(errorCode), this.error = getDXTErrorDescription(errorCode), this.status = getHttpStatusFromErrorCode(this.errorCode), this.extra = options?.extra, this.isSilent = options?.isSilent, this.messageToUser = options?.messageToUser;
  }
}, DXTApiMalformedResponse = class extends Error {
  constructor(status) {
    super();
    this.status = status;
  }
}, DXTException = class extends Error {
  constructor(error, customMessage) {
    let dxtError = error instanceof DXTError ? error : new DXTError(error, { extra: customMessage });
    super(dxtError.error);
    this.name = this.constructor.name.toString(), this.dxtError = dxtError;
  }
  isUnexpected() {
    return isHttpServerError(this.dxtError.status);
  }
};

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
    let status = Number.isFinite(e?.status) ? e?.status : 500 /* INTERNAL_SERVER_ERROR */;
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
    if (body != null && (result.body = this._validateRequestValue(req.bodyJson, body)), query != null && (result.query = this._validateRequestValues(req.query, query)), params != null && (result.params = this._validateRequestValues(req.params, params)), !(result.body === void 0 && result.query === void 0 && result.params === void 0))
      return result;
  }
  _validateRequestValues(values, validators) {
    let result = {};
    return Object.entries(validators).forEach(([key, validatorFunction]) => {
      if (typeof validatorFunction != "function")
        return;
      let validatedValue = this._validateRequestValue(values[key], validatorFunction);
      result[key] = validatedValue;
    }), result;
  }
  _validateRequestValue(value, validatorFunction) {
    if (typeof validatorFunction == "function")
      return validatorFunction(value);
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

// src/@core/strings/index.ts
var isStr = (value) => typeof value == "string";
function valueToString(value, includeStringQuotes) {
  return Array.isArray(value) || isObj(value) ? stringifyJSON(value) : typeof value == "string" && (includeStringQuotes ?? !1) ? `'${value}'` : value === null ? "[null]" : value?.toString?.() ?? "[undefined]";
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

// src/domain/shared/errors/errors.utils.ts
function isErrorInfo(data) {
  let errorInfo = data;
  if (!isRealObject(errorInfo))
    return !1;
  let { status, errorCode, error } = errorInfo, statusNumber = status && typeof status == "number" ? status : Number.parseInt(status?.toString()), errorCodeNumber = errorCode && typeof errorCode == "number" ? errorCode : Number.parseInt(errorCode?.toString());
  return Number.isInteger(statusNumber) && Number.isInteger(errorCodeNumber) && typeof error == "string";
}
function exceptionToDXTErrorInfo(error) {
  let originalErrorInfo = error?.originalError?.response?.data;
  if (isErrorInfo(originalErrorInfo))
    return originalErrorInfo;
  if (error instanceof DXTException)
    return error.dxtError;
  if (error instanceof ValidationException) {
    let statusCode = 400 /* BAD_REQUEST */, errorCode2 = getErrorCodeFromHttpStatus(statusCode);
    return {
      status: statusCode,
      error: getDXTErrorDescription(errorCode2),
      errorCode: errorCode2,
      extra: error.message
    };
  }
  if (error instanceof HttpException) {
    let { statusCode } = error, errorCode2 = getErrorCodeFromHttpStatus(statusCode);
    return {
      status: statusCode,
      error: getDXTErrorDescription(errorCode2),
      errorCode: errorCode2,
      extra: error.message
    };
  }
  let isInternetAlive = null;
  if (error instanceof AxiosRequestPlusError && (isInternetAlive = error.isInternetAlive, error = error.originalError), error instanceof DXTApiMalformedResponse) {
    let errorCode2 = 899001 /* FATAL_MALFORMED_SERVER_RESPONSE */;
    return {
      status: error.status,
      error: getDXTErrorDescription(errorCode2),
      errorCode: errorCode2
    };
  }
  if (error instanceof AxiosError2) {
    let errorCode2 = isInternetAlive ?? !1 ? 899e3 /* INTERNAL_SERVER_ERROR */ : 7e5 /* CLIENT_CONNECTION_ERROR */;
    return {
      status: error.response?.status ?? getHttpStatusFromErrorCode(errorCode2),
      error: getDXTErrorDescription(errorCode2),
      errorCode: errorCode2,
      extra: error.message
    };
  }
  let errorCode = 0 /* UNEXPECTED_ERROR */;
  return {
    errorCode,
    error: getDXTErrorDescription(errorCode),
    status: getHttpStatusFromErrorCode(errorCode),
    extra: error.message
  };
}
function isDXTException(e, errorCode) {
  return e instanceof DXTException && (errorCode == null || e.dxtError.errorCode === errorCode || e.dxtError.genericErrorCode === errorCode);
}
function isNotFoundException(e) {
  return isDXTException(e, 11e3 /* NOT_FOUND */);
}

// src/api-universal/utils.ts
async function errorApiResponse(errorCode) {
  let error = new DXTException(errorCode), { status } = error.dxtError;
  return jsonResponse(
    {
      status,
      error: error.message
    },
    { status }
  );
}
var notFoundApiResponse = async () => errorApiResponse(11e3 /* NOT_FOUND */), unimplementedApiResponse = async () => errorApiResponse(12e3 /* NOT_IMPLEMENTED */);

// src/@core/environemnt/index.ts
function isNavigator() {
  return typeof window < "u" && isRealObject(window.location);
}
function isNode() {
  return typeof process < "u" && typeof process.versions?.node == "string";
}

// src/@core/transformation/index.ts
import { toBigIntBE, toBigIntLE, toBufferBE, toBufferLE } from "bigint-buffer";
import validator2 from "validator";

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
    let shellRendered = !1, emotionCache = createEmotionCache({ key: "css" }), { pipe, abort } = renderToPipeableStream(
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
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
import { useMemo as useMemo2 } from "react";

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-2ZBAPZ6C.css";

// src/app/root.tsx
import { Outlet, useLoaderData } from "@remix-run/react";

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
};
var VOBigIntRange = class extends ValueObjectBase {
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
    return typeof input != "string" && this.throwError(input), input;
  }
};

// src/@core/value_objects/vo_not_empty_string.ts
var VONotEmptyString = class extends ValueObject {
  validate(input) {
    if (typeof input == "string") {
      let value = input.trim();
      if (value !== "")
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

// src/@core/time/index.ts
var HOUR_IN_MINUTES = 60, DAY_IN_MINUTES = HOUR_IN_MINUTES * 24, WEEK_IN_MINUTES = DAY_IN_MINUTES * 7, MINUTE_IN_SECONDS = 60, TEN_MINUTES_IN_SECONDS = MINUTE_IN_SECONDS * 10, HOUR_IN_SECONDS = HOUR_IN_MINUTES * 60, DAY_IN_SECONDS = DAY_IN_MINUTES * 60, WEEK_IN_SECONDS = WEEK_IN_MINUTES * 60, MINUTE_IN_MILLISECONDS = MINUTE_IN_SECONDS * 1e3, TEN_MINUTES_IN_MILLISECONDS = MINUTE_IN_MILLISECONDS * 10, HOUR_IN_MILLISECONDS = HOUR_IN_SECONDS * 1e3, DAY_IN_MILLISECONDS = DAY_IN_SECONDS * 1e3, WEEK_IN_MILLISECONDS = WEEK_IN_SECONDS * 1e3;
function now() {
  return Date.now();
}

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
var DUMMY_MD5 = "12345678901234567890123456789012", VOMD5 = class extends ValueObject {
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

// src/@core/value_objects/vo_sha1.ts
import validator5 from "validator";
var VOSHA1 = class extends ValueObject {
  validate(input) {
    let value;
    if (Buffer.isBuffer(input) && (value = input.toString("hex")), typeof input == "string" && (value = input.trim().toLowerCase()), typeof value == "string" && validator5.isHash(value, "sha1"))
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
  constructor(userId, random2, roleNumber) {
    this.userId = new VOUInt32(userId), this.random = new VOAuthRandom(random2), this.roleNumber = new VOUInt16(roleNumber);
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
        if (parts.length === 4) {
          let userId = Number.parseInt("0x" + parts[0]), random2 = BigInt("0x" + parts[1]), roleNumber = Number.parseInt(parts[2]);
          return this.verificationHash = new VOSHA1(parts[3]), new AuthTokenProps(
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
    let userId = this.value.userId.valueOf().toString(16), randomNumber = this.value.random.valueOf().toString(16), roleNumber = this.value.roleNumber.valueOf();
    return `${userId}-${randomNumber}-${roleNumber}`;
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
      orElse: (_11) => {
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
  userOrNull() {
    return this instanceof AuthStateLoggedIn ? this.userInfo : null;
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
    let isDisconnected = this instanceof AuthStateDisconnected, silent = isDisconnected && typeof this.error?.isSilent == "boolean" && this.error?.isSilent;
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
  isError() {
    return this instanceof DXTApiRequestStateError;
  }
  errorOrNull() {
    return this instanceof DXTApiRequestStateError ? this.error : null;
  }
  flat() {
    return this.map({
      error: (errorState) => errorState.error,
      success: (successState) => successState.data
    });
  }
}, DXTApiRequestStateError = class extends DXTApiRequestState {
  constructor(error, originalRequest) {
    super(originalRequest);
    this.error = error;
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
          new DXTError(dxtApiError.errorCode, {
            extra: dxtApiError.extra,
            isSilent: dxtApiError.isSilent
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
      if (!app || !isBasicAppResources(app) || (params?.silent ?? !1) || (retry = typeof app.retryCallback == "function" && await app.retryCallback({ message: dxtApiError.error }), !retry))
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

// src/api-client/shared/apiPath.ts
import { join } from "path";
function apiPath(path5) {
  return join(API_BASE_PATH, path5);
}

// src/api-client/auth/paths.ts
var API_AUTH_LOGIN = apiPath("/auth/login"), API_AUTH_LOGOUT = apiPath("/auth/logout"), API_AUTH_CONNECT = apiPath("/auth/connect");

// src/api-client/auth/requests.ts
var userAuthConnectRequest = async (token, app, silent) => {
  let originalUserInfo = token === app.authState?.authToken ? app.authState?.userInfo : null, user_info_updated_at = originalUserInfo ? originalUserInfo.timestamp_modificacion : 0;
  return (await dxtApiRequest(
    {
      url: API_AUTH_CONNECT,
      method: "POST",
      headers: { authorization: token },
      params: {
        user_info_updated_at
      },
      silent
    },
    app
  )).map({
    error: (errorState) => new DXTApiRequestStateError(
      errorState.error,
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
}, userLoginRequest = async (input, app) => await dxtApiRequest(
  {
    url: API_AUTH_LOGIN,
    data: input,
    method: "POST",
    silent: !0
  },
  app
), userLogoutRequest = async (app) => await dxtApiRequest(
  {
    url: API_AUTH_LOGOUT,
    method: "POST"
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
    setAuthState(new AuthStateLoading()), (await userLoginRequest(this.params, app)).map({
      success: async (successState) => {
        let { user, auth_token } = successState.data;
        setAuthState(new AuthStateLoggedIn(auth_token, user));
      },
      error: async (errorState) => {
        let apiError = errorState.error;
        setAuthState(new AuthStateDisconnected(apiError)), this.errorCallback && this.errorCallback(apiError);
      }
    });
  }
};

// src/code.client/utils/index.ts
import { join as join2 } from "path";

// src/texts/common.ts
var RETRY = "Reintentar", CANCEL = "Cancelar";
var DELETE = "Eliminar", NO_NAME = "Sin nombre", NO_DATE = "Sin fecha";
var NONE_M = "Ninguno", NONEXISTENT_PRODUCT = "Art\xEDculo inexistente";

// src/code.client/utils/index.ts
var dateToLocale = (value) => value == null ? NO_DATE : (value instanceof Date ? value : new Date(value)).toLocaleDateString("es-AR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});
function appPath(path5) {
  return join2(URL_ROOT_PATH, path5);
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

// src/config/url_paths.ts
import path2 from "path";
var URL_ROOT_PATH = "/", URL_AUTH_BASE_PATH = path2.join(URL_ROOT_PATH, "auth"), URL_AUTH_LOGIN_PATH = appPath("/"), URL_PEDIDOS_PATH = appPath("/orders"), URL_MAIN_PATH = URL_PEDIDOS_PATH, URL_PEDIDOS_ADD_PATH = appPath("/orders/:client/add"), URL_PEDIDOS_EDIT_PATH = appPath("/orders/:id/edit"), URL_SETTINGS_PATH = appPath("/settings"), URL_SETTINGS_TANGO_PATH = appPath("/settings/tango"), URL_SETTINGS_COMPANY_PATH = appPath("/settings/company"), URL_SETTINGS_MISC_PATH = appPath("/settings/misc"), URL_SETTINGS_CUSTOMERS_PATH = appPath("/settings/users/customers"), URL_SETTINGS_CUSTOMERS_ADD_PATH = appPath("/settings/users/customers/add"), URL_SETTINGS_CUSTOMERS_EDIT_PATH = appPath("/settings/users/customers/:id/edit"), URL_SETTINGS_VENDORS_PATH = appPath("/settings/users/vendors"), URL_SETTINGS_VENDORS_ADD_PATH = appPath("/settings/users/vendors/add"), URL_SETTINGS_VENDORS_EDIT_PATH = appPath("/settings/users/vendors/:id/edit"), URL_SETTINGS_ARTICULOS_PRINT = appPath("/settings/lists/print"), URL_SETTINGS_ARTICULOS_SCREEN = appPath("/settings/lists/screen");

// src/code.client/auth/auth_context/actions/logout.ts
var AuthActionLogout = class extends AuthAction {
  // doNotCallAPI: used when user token has already expired or is invalid
  // one less call to the API since user is in fact unauthorized
  constructor(avoidCallingAPI) {
    super();
    this.avoidCallingAPI = avoidCallingAPI ?? !1;
  }
  async run(authState, setAuthState, app, onRetryCallback) {
    authState instanceof AuthStateLoggedIn && !this.avoidCallingAPI && await userLogoutRequest({
      ...app,
      authState
    }), setAuthState(new AuthStateDisconnected(void 0)), app.navigate(URL_AUTH_LOGIN_PATH);
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
    (await userAuthConnectRequest(newToken, app, !0)).map({
      success: (stateSuccess) => {
        let userInfo = stateSuccess.data.user;
        setAuthState(
          new AuthStateLoggedIn(newToken, userInfo)
        );
      },
      error: (errorState) => {
        let apiError = errorState.error;
        setAuthState(new AuthStateDisconnected(apiError)), this.errorCallback && this.errorCallback(apiError);
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
    (await userAuthConnectRequest(authState.authToken, app, !0)).map({
      error: (errorState) => {
        let apiError = errorState.error;
        isTokenError(apiError.status) && setAuthState(new AuthStateDisconnected());
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
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button
} from "@chakra-ui/react";

// src/app/theme/index.ts
import {
  extendTheme
} from "@chakra-ui/react";

// src/app/theme/components/input.ts
import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { getColorVar, mode } from "@chakra-ui/theme-tools";
var { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys), variantOutlineStyle = definePartsStyle((props) => {
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
}, inputTheme = defineMultiStyleConfig({ variants });

// src/app/theme/components/table.ts
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

// src/app/theme/index.ts
var config = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: !1,
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: props.colorMode === "dark" ? "gray.900" : "gray.300"
      }
    })
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, sans-serif"
  },
  components: {
    Table: tableTheme,
    Input: inputTheme
  }
}), theme = extendTheme(config);

// src/app/dialogs/CustomDialog.tsx
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function CustomDialog(props) {
  let {
    dialogTitle,
    dialogContents,
    dialogSize,
    isOpen,
    handleCancel,
    handleCancelWording,
    handleAccept,
    handleAcceptWording
  } = props, cancelRef = useRef(null), maxWidth = theme.sizes?.container?.[dialogSize ?? "sm"];
  return /* @__PURE__ */ jsx2(
    AlertDialog,
    {
      onClose: handleCancel,
      "aria-labelledby": "customized-dialog-title",
      isOpen,
      leastDestructiveRef: cancelRef,
      children: /* @__PURE__ */ jsx2(
        AlertDialogOverlay,
        {
          bg: "blackAlpha.300",
          backdropFilter: "auto",
          backdropInvert: "80%",
          backdropBlur: "2px",
          children: /* @__PURE__ */ jsxs2(AlertDialogContent, { maxWidth, children: [
            dialogTitle != null && /* @__PURE__ */ jsx2(AlertDialogHeader, { sx: { m: 0, p: 3 }, children: dialogTitle ?? /* @__PURE__ */ jsx2(Fragment, { children: "\xA0" }) }),
            /* @__PURE__ */ jsx2(AlertDialogBody, { children: dialogContents ?? /* @__PURE__ */ jsx2(Fragment, { children: "\xA0" }) }),
            /* @__PURE__ */ jsxs2(AlertDialogFooter, { children: [
              /* @__PURE__ */ jsx2(
                Button,
                {
                  ref: cancelRef,
                  variant: "contained",
                  color: "darkGrey",
                  onClick: handleCancel,
                  children: handleCancelWording ?? CANCEL
                }
              ),
              handleAccept && /* @__PURE__ */ jsx2(
                Button,
                {
                  variant: "contained",
                  color: "primary",
                  onClick: handleAccept,
                  children: handleAcceptWording ?? RETRY
                }
              )
            ] })
          ] })
        }
      )
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
  dispatch: async (action25) => {
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
  let [authState, setAuthState] = useState2(_resolveState()), lastAction = useRef2(null), app = useBasicAppResources(authState), appRef = useRef2(app), forceLogoutAlreadyVerified = useRef2(!1), tokenExistence = useTokenExistenceCheck(), dispatch = async (action25) => {
    lastAction.current = action25, await action25.run(authState, setAuthState, appRef.current, onRetry);
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
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
  useConst
} from "@chakra-ui/react";
import { ModalProvider } from "react-hooks-async-modal";

// src/app/RootDocument.tsx
import { useContext as useContext2, useEffect as useEffect3 } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { withEmotionCache } from "@emotion/react";

// src/code.client/contexts/ServerStyleContext.tsx
import { createContext as createContext2 } from "react";
var ServerStyleContext = createContext2(null), ClientStyleContext = createContext2(
  null
);

// src/app/RootDocument.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var RootDocument = withEmotionCache(
  ({ children, colorMode }, emotionCache) => {
    let serverStyleData = useContext2(ServerStyleContext), clientStyleData = useContext2(ClientStyleContext);
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
                children,
                /* @__PURE__ */ jsx5(ScrollRestoration, {}),
                /* @__PURE__ */ jsx5(Scripts, {}),
                /* @__PURE__ */ jsx5(LiveReload, {})
              ]
            }
          )
        ]
      }
    );
  }
);

// src/app/root.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
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
  function getColorMode(cookies2) {
    let match = cookies2.match(
      new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`)
    );
    return match?.[2];
  }
  let DEFAULT_COLOR_MODE = theme.config.initialColorMode, CHAKRA_COOKIE_COLOR_KEY = "chakra-ui-color-mode", cookies = useLoaderData();
  typeof document < "u" && (cookies = document.cookie);
  let colorMode = useMemo2(() => {
    let color = getColorMode(cookies);
    return color == null && DEFAULT_COLOR_MODE && (cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`, color = DEFAULT_COLOR_MODE), color;
  }, [cookies]), cookieManager = useConst(cookieStorageManagerSSR(cookies));
  return /* @__PURE__ */ jsx6(RootDocument, { colorMode, children: /* @__PURE__ */ jsx6(
    ChakraProvider,
    {
      theme,
      colorModeManager: typeof cookies == "string" ? cookieManager : localStorageManager,
      toastOptions: {
        defaultOptions: {
          position: "bottom",
          duration: 2500,
          isClosable: !0
        }
      },
      children: /* @__PURE__ */ jsx6(ModalProvider, { children: /* @__PURE__ */ jsx6(AuthProvider, { children: /* @__PURE__ */ jsx6(Outlet, {}) }) })
    }
  ) });
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
      orElse: (_11) => {
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
    retry
  };
}

// src/code.client/hooks/useDXTApiFetch.ts
function useDXTApiFetch(params) {
  let app = useBasicAppResources(), retryCallback = app.retryCallback, dxtApiParams = createDXTApiParams(app, params), { state, retry } = useAxiosFetch(
    dxtApiParams,
    (axiosError) => exceptionToDXTErrorInfo(axiosError)
  );
  return useEffect5(() => {
    (async () => {
      if ((params?.silent ?? !1) || !(state instanceof FetchStateError))
        return;
      let stateError = state.error;
      await checkTokenErrorAndRedirect(app, stateError.status) || retryCallback && await retryCallback({
        message: stateError.error
      }) && retry();
    })();
  }, [state]), {
    state,
    retry
  };
}

// src/code.client/hooks/useTangoList.tsx
var buildSelectOptions = (props) => {
  let { data, fieldsMap, disabledIcon } = props, result = [];
  return data.length && data.forEach((data2) => {
    result.push({
      label: data2[fieldsMap?.label ?? "name"],
      value: data2[fieldsMap?.value ?? "id"],
      ...fieldsMap?.isActive != null && {
        isActive: data2[fieldsMap.isActive]
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
  let { url, params, fieldsMap, disabledIcon } = props, { state, retry } = useDXTApiFetch({
    url,
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

// src/api-client/tango/paths.ts
var API_TANGO_PERFIL = apiPath("/tango/perfil"), API_TANGO_CLIENTE = apiPath("/tango/cliente"), API_TANGO_VENDEDOR = apiPath("/tango/vendedor"), API_TANGO_AUXILIARES = apiPath("/tango/auxiliares");

// src/api-client/dxt/user/paths.ts
var API_DXT_CUSTOMERS = apiPath("/dxt/cliente"), API_DXT_CUSTOMERS_ID = apiPath("/dxt/cliente/:id"), API_DXT_VENDORS = apiPath("/dxt/vendedor"), API_DXT_VENDORS_ID = apiPath("/dxt/vendedor/:id"), API_DXT_VENDOR_CUSTOMERS = apiPath("/dxt/vendedor/cliente");

// src/api-client/dxt/user/requests.ts
var customerCreateRequest = async (input, app) => await dxtApiRequest(
  {
    url: API_DXT_CUSTOMERS,
    data: input,
    method: "POST",
    silent: !0
  },
  app
), customerUpdateRequest = async (id, input, app) => await dxtApiRequest(
  {
    url: API_DXT_CUSTOMERS_ID,
    pathParams: { id },
    data: input,
    method: "PATCH",
    silent: !0
  },
  app
), customerDeleteRequest = async (id, input, app) => await dxtApiRequest(
  {
    url: API_DXT_CUSTOMERS_ID,
    pathParams: { id },
    data: input,
    method: "DELETE",
    silent: !0
  },
  app
), vendorCreateRequest = async (input, app) => await dxtApiRequest(
  {
    url: API_DXT_VENDORS,
    data: input,
    method: "POST",
    silent: !0
  },
  app
), vendorDeleteRequest = async (id, input, app) => await dxtApiRequest(
  {
    url: API_DXT_VENDORS_ID,
    pathParams: { id },
    data: input,
    method: "DELETE",
    silent: !0
  },
  app
), vendorUpdateRequest = async (id, input, app) => await dxtApiRequest(
  {
    url: API_DXT_VENDORS_ID,
    pathParams: { id },
    data: input,
    method: "PATCH",
    silent: !0
  },
  app
);

// src/code.client/crud_configs/users/index.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var settings = {
  customers: {
    api: {
      getAll: () => useDXTApiFetch({
        url: API_DXT_CUSTOMERS,
        silent: !0
      }),
      getOne: (id) => useDXTApiFetch({
        url: API_DXT_CUSTOMERS_ID,
        pathParams: { id },
        silent: !0
      }),
      getRelation: () => useTangoList({
        url: API_TANGO_CLIENTE,
        fieldsMap: {
          label: "screen_name",
          value: "id",
          isEnabled: "habilitado"
        },
        disabledIcon: /* @__PURE__ */ jsx7(Icon, { as: AccountCancelIcon, color: "red.400", ml: 2, boxSize: 5 })
      }),
      post: async (input, app) => customerCreateRequest(input, app),
      patch: async (id, input, app) => customerUpdateRequest(id, input, app),
      delete: async (id, input, app) => customerDeleteRequest(id, input, app)
    },
    userType: "cliente",
    titles: {
      common: "Gesti\xF3n de Clientes",
      create: "Crear Cliente",
      edit: "Editar Cliente"
    },
    actionButtonNavigateTo: URL_SETTINGS_CUSTOMERS_ADD_PATH,
    cancelButtonNavigateTo: URL_SETTINGS_CUSTOMERS_PATH,
    editButtonNavigateTo: URL_SETTINGS_CUSTOMERS_EDIT_PATH,
    tangoRelatedFields: {
      placeholder: "Seleccione un Cliente",
      label: "Cliente Tango",
      empty: "No hay clientes disponibles"
    }
  },
  vendors: {
    api: {
      getAll: () => useDXTApiFetch({
        url: API_DXT_VENDORS,
        silent: !0
      }),
      getOne: (id) => useDXTApiFetch({
        url: API_DXT_VENDORS_ID,
        pathParams: { id },
        silent: !0
      }),
      getRelation: () => useTangoList({
        url: API_TANGO_VENDEDOR,
        fieldsMap: {
          label: "screen_name",
          value: "id",
          isEnabled: "habilitado"
        },
        disabledIcon: /* @__PURE__ */ jsx7(Icon, { as: AccountCancelIcon, color: "red.400", ml: 2, boxSize: 5 })
      }),
      post: async (input, app) => vendorCreateRequest(input, app),
      patch: async (id, input, app) => vendorUpdateRequest(id, input, app),
      delete: async (id, input, app) => vendorDeleteRequest(id, input, app)
    },
    userType: "vendedor",
    titles: {
      common: "Gesti\xF3n de Vendedores",
      create: "Crear Vendedor",
      edit: "Editar Vendedor"
    },
    actionButtonNavigateTo: URL_SETTINGS_VENDORS_ADD_PATH,
    cancelButtonNavigateTo: URL_SETTINGS_VENDORS_PATH,
    editButtonNavigateTo: URL_SETTINGS_VENDORS_EDIT_PATH,
    tangoRelatedFields: {
      placeholder: "Seleccione un Vendedor",
      label: "Vendedor Tango",
      empty: "No hay vendedores disponibles"
    }
  }
};

// src/@core/validate_schema/schema_validators.ts
var integerValidator = (v) => new VOInteger(v).valueOf();
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
  for (let [field, validator7] of entries) {
    let valIsObject = isObj(validator7), fieldName = valIsObject && "n" in validator7 ? validator7.n : field, validatorFuncion = valIsObject && "f" in validator7 ? validator7.f : validator7;
    if (typeof validatorFuncion != "function")
      throw new InvalidSchemaValidatorFunctionException(fieldName);
    let inputValue = inputIsObject ? input[field] : void 0;
    try {
      let result = validatorFuncion(inputValue);
      result instanceof ValueObjectBase && (result = result.valueOf()), invalidValues.length === 0 && (validatedResult[i++] = [
        field,
        result
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
  return Object.fromEntries(validatedResult);
}

// src/app/components/CommonErrors.tsx
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button as Button2
} from "@chakra-ui/react";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var CommonErrors = ({ error, buttonProps }) => /* @__PURE__ */ jsx8(
  Box,
  {
    width: "full",
    sx: {
      mt: 6
    },
    children: /* @__PURE__ */ jsxs4(
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
import { Button as Button3, Flex, Heading, Spacer } from "@chakra-ui/react";

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

// src/app/components/SettingsFormHeading.tsx
import { Fragment as Fragment2, jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var SettingsFormHeading = (props) => {
  let { title, actionButton } = props;
  return /* @__PURE__ */ jsx10(CommonCard, { children: /* @__PURE__ */ jsxs5(Flex, { direction: "row", alignItems: "center", children: [
    /* @__PURE__ */ jsx10(Heading, { size: "md", textTransform: "uppercase", children: title }),
    actionButton && /* @__PURE__ */ jsxs5(Fragment2, { children: [
      /* @__PURE__ */ jsx10(Spacer, {}),
      /* @__PURE__ */ jsx10(
        Button3,
        {
          size: "sm",
          colorScheme: "green",
          ...actionButton.buttonProps,
          sx: {
            textTransform: "uppercase"
          },
          children: actionButton.label
        }
      )
    ] })
  ] }) });
};

// src/app/components/ApiErrors.tsx
import { useNavigate as useNavigate2 } from "@remix-run/react";
import {
  Alert as Alert2,
  AlertDescription as AlertDescription2,
  AlertIcon as AlertIcon2,
  AlertTitle,
  Box as Box2,
  Button as Button4,
  HStack
} from "@chakra-ui/react";
import { Fragment as Fragment3, jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var ApiErrors = ({
  error,
  retry,
  cancelAndNavigateTo
}) => {
  let navigate = useNavigate2();
  return /* @__PURE__ */ jsx11(
    Box2,
    {
      width: "full",
      sx: {
        mt: 6
      },
      children: /* @__PURE__ */ jsxs6(
        Alert2,
        {
          status: "error",
          variant: "subtle",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          height: "200px",
          children: [
            /* @__PURE__ */ jsx11(AlertIcon2, { boxSize: "40px", sx: { mr: 0, mb: 4 } }),
            error.message_to_user ? /* @__PURE__ */ jsxs6(Fragment3, { children: [
              /* @__PURE__ */ jsx11(AlertTitle, { mt: 4, mb: 1, fontSize: "lg", children: error.message_to_user?.title }),
              /* @__PURE__ */ jsx11(AlertDescription2, { maxWidth: "sm", children: error.message_to_user?.content })
            ] }) : /* @__PURE__ */ jsx11(AlertDescription2, { maxWidth: "sm", children: error.error }),
            /* @__PURE__ */ jsxs6(
              HStack,
              {
                sx: {
                  mt: 4
                },
                spacing: 4,
                children: [
                  retry && /* @__PURE__ */ jsx11(Button4, { onClick: retry, colorScheme: "green", children: "Reintentar" }),
                  cancelAndNavigateTo != null && /* @__PURE__ */ jsx11(
                    Button4,
                    {
                      onClick: () => {
                        navigate(cancelAndNavigateTo);
                      },
                      colorScheme: "red",
                      children: "Cancelar"
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
};

// src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx
import { Box as Box3, Divider, Grid, GridItem, HStack as HStack2, Stack } from "@chakra-ui/react";

// src/app/components/form_elements/FormSkeletons.tsx
import { Skeleton } from "@chakra-ui/react";
import { jsx as jsx12 } from "react/jsx-runtime";
var FormInputSkeleton = ({ height }) => /* @__PURE__ */ jsx12(Skeleton, { width: "full", height: height ?? "36px", borderRadius: "md" }), FormTextareaSkeleton = ({ height }) => /* @__PURE__ */ jsx12(Skeleton, { width: "full", height: height ?? "80px", borderRadius: "md" });

// src/app/routes/_admin.settings.users.customers.$id.edit/components/loading.tsx
import { jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
var Loading = () => /* @__PURE__ */ jsx13(
  Box3,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs7(
      Grid,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx13(Divider, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx13(Divider, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx13(Divider, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs7(Stack, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx13(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx13(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx13(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx13(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx13(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx13(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx13(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx13(HStack2, { spacing: 4, children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) })
          ] }) }),
          /* @__PURE__ */ jsx13(GridItem, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx13(Divider, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, {}),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx13(GridItem, { children: /* @__PURE__ */ jsx13(FormInputSkeleton, {}) })
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

// src/code.client/utils/promise_based_toast.ts
var promiseBasedToast = async (props) => {
  let { toast, result, messages } = props, resultToast = new Promise((resolve, reject) => {
    result.map({
      success: () => {
        resolve(200);
      },
      error: (state) => {
        reject(new Error(state.error.error));
      }
    });
  });
  return toast.promise(resultToast, {
    success: { title: messages.success.title },
    error: (e) => ({ title: messages.error.title, description: e.message }),
    loading: {
      title: messages.loading.title,
      description: "Aguarde unos instantes"
    }
  }), resultToast;
};

// src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx
import {
  Badge as Badge2,
  Box as Box6,
  Divider as Divider2,
  Grid as Grid2,
  GridItem as GridItem2,
  Heading as Heading2,
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
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var ControlledInput = (props) => {
  let { fieldProps, formControlProps, formControlInnerProps, control } = props, {
    field: { ref, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController({
    name: fieldProps.name,
    control
  }), { label, helperText, icon } = formControlInnerProps || {};
  return /* @__PURE__ */ jsxs8(FormControl, { ...formControlProps, isInvalid: invalid, children: [
    label != null && /* @__PURE__ */ jsx14(
      FormLabel,
      {
        htmlFor: fieldProps.name,
        sx: fieldProps.variant === "flushed" ? { fontSize: "sm", mb: 0 } : {},
        children: label
      }
    ),
    /* @__PURE__ */ jsxs8(InputGroup, { children: [
      icon,
      /* @__PURE__ */ jsx14(Input, { ...fieldProps, onChange, value, ref })
    ] }),
    helperText != null && /* @__PURE__ */ jsx14(FormHelperText, { children: helperText })
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
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var ControlledRadio = (props) => {
  let {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    stackProps,
    radioProps,
    control
  } = props, { name } = fieldProps, { helperText } = formControlInnerProps || {}, {
    field: { ref, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController2({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs9(FormControl2, { ...formControlProps, isInvalid: invalid, children: [
    /* @__PURE__ */ jsx15(
      RadioGroup,
      {
        ...fieldProps,
        onChange,
        value: value.toString(),
        ref,
        children: /* @__PURE__ */ jsx15(Stack2, { direction: "row", spacing: 4, ...stackProps, children: fieldProps.options.map((option, index) => /* @__PURE__ */ jsx15(
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
    helperText != null && /* @__PURE__ */ jsx15(FormHelperText2, { children: helperText })
  ] });
};

// src/app/components/form_elements/ControlledSelect.tsx
import { Children } from "react";
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
  useBreakpointValue,
  useMultiStyleConfig,
  useTheme
} from "@chakra-ui/react";
import { jsx as jsx16 } from "react/jsx-runtime";
var isSize = (size) => typeof size == "string" && ["sm", "md", "lg"].includes(size), getDefaultSize = (size) => isSize(size) ? size : size === "xs" ? "sm" : size === "xl" ? "lg" : "md", useSize = (size) => {
  let chakraTheme = useTheme(), defaultSize = getDefaultSize(
    chakraTheme.components.Input.defaultProps.size
  ), definedSize = size ?? defaultSize;
  return useBreakpointValue(
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
  return /* @__PURE__ */ jsx16(
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
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
var CustomMenuList = (props) => {
  let { children, ...restProps } = props, itemHeight = 35, { options, maxHeight, getValue } = props, [value] = getValue(), valueIndexOf = options.indexOf(value), itemsPerPage = Math.floor(maxHeight / itemHeight), initialOffset = valueIndexOf > itemsPerPage ? valueIndexOf * itemHeight : 0, minHeight = Math.min(options.length * itemHeight, maxHeight);
  return /* @__PURE__ */ jsx17(ChakraReactSelectCustomMenuList, { ...props, children: /* @__PURE__ */ jsx17(
    FixedSizeList,
    {
      height: minHeight + 2,
      itemCount: Children.count(children),
      itemSize: itemHeight,
      initialScrollOffset: initialOffset,
      width: "100%",
      outerRef: props.innerRef,
      children: ({ index, style }) => /* @__PURE__ */ jsx17("div", { style, children: Children.toArray(children)[index] })
    }
  ) });
}, ControlledSelect = (props) => {
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
    field: { ref, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController3({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs10(FormControl3, { ...formControlProps, isInvalid: invalid, children: [
    /* @__PURE__ */ jsx17(
      FormLabel2,
      {
        sx: fieldProps.variant === "flushed" ? { fontSize: "sm", mb: 0 } : {},
        children: label
      }
    ),
    /* @__PURE__ */ jsx17(
      Select,
      {
        ...fieldProps,
        ref,
        value: fieldProps.options.find((option) => option.value === value),
        filterOption: createFilter({ ignoreAccents: !1 }),
        onChange: (newValue, actionMeta) => onChange(newValue.value),
        useBasicStyles: !0,
        isSearchable: fieldProps.isSearchable,
        instanceId: fieldProps.name,
        chakraStyles: {
          option: (provided, state) => ({
            ...provided,
            fontSize: { base: "xs", sm: "sm", md: "md" }
          })
        },
        components: {
          MenuList: CustomMenuList,
          Option: ({ children, ...props2 }) => {
            delete props2.innerProps.onMouseMove, delete props2.innerProps.onMouseOver;
            let propsData = props2.data;
            return /* @__PURE__ */ jsxs10(chakraComponents.Option, { ...props2, children: [
              children,
              " ",
              propsData.icon != null && propsData.icon
            ] });
          }
        }
      }
    ),
    helperText != null && /* @__PURE__ */ jsx17(FormHelperText3, { children: helperText })
  ] });
};

// src/app/components/form_elements/ControlledSwitch.tsx
import {
  FormControl as FormControl4,
  FormLabel as FormLabel3,
  Switch
} from "@chakra-ui/react";
import { useController as useController4 } from "react-hook-form";
import { jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
var ControlledSwitch = (props) => {
  let {
    fieldProps,
    formControlProps,
    formControlInnerProps,
    control,
    watch
  } = props, { label } = formControlInnerProps || {}, {
    field: { ref, onChange, onBlur, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController4({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs11(
    FormControl4,
    {
      display: "flex",
      alignItems: "center",
      ...formControlProps,
      isInvalid: invalid,
      children: [
        /* @__PURE__ */ jsx18(
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
        label != null && /* @__PURE__ */ jsx18(
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
import { Fragment as Fragment4, jsx as jsx19 } from "react/jsx-runtime";
var FormErrors = ({ errors }) => {
  let formErrorsRef = useRef3(null);
  return Object.keys(errors).length ? /* @__PURE__ */ jsx19(
    Box5,
    {
      width: "full",
      sx: {
        mb: 4
      },
      ref: formErrorsRef,
      children: /* @__PURE__ */ jsx19(Alert3, { status: "error", variant: "left-accent", sx: { p: 4 }, children: /* @__PURE__ */ jsx19(UnorderedList, { fontSize: "sm", styleType: "none", sx: { m: 0 }, children: Object.values(errors).map((error, key) => /* @__PURE__ */ jsx19(ListItem, { children: error?.message?.toString() }, key)) }) })
    }
  ) : /* @__PURE__ */ jsx19(Fragment4, {});
};

// src/app/components/InlineError.tsx
import { Badge } from "@chakra-ui/react";
import { jsx as jsx20 } from "react/jsx-runtime";
var InlineError = ({ error }) => /* @__PURE__ */ jsx20(
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

// src/app/components/SettingsFormButtons.tsx
import { useNavigate as useNavigate3 } from "@remix-run/react";
import { Button as Button5, Stack as Stack3 } from "@chakra-ui/react";
import { Fragment as Fragment5, jsx as jsx21, jsxs as jsxs12 } from "react/jsx-runtime";
var SettingsFormsButtons = (props) => {
  let { isLoading, buttonActionText, buttonCancelUrl } = props, navigate = useNavigate3();
  return /* @__PURE__ */ jsx21(Fragment5, { children: /* @__PURE__ */ jsxs12(Stack3, { direction: { base: "column", md: "row" }, children: [
    /* @__PURE__ */ jsx21(
      Button5,
      {
        type: "submit",
        colorScheme: "blue",
        width: "full",
        isLoading,
        children: buttonActionText ?? "Actualizar"
      }
    ),
    /* @__PURE__ */ jsx21(
      Button5,
      {
        type: "button",
        colorScheme: "gray",
        width: "full",
        isLoading,
        onClick: () => navigate(buttonCancelUrl ?? URL_SETTINGS_PATH),
        children: "Cancelar"
      }
    )
  ] }) });
};

// src/app/routes/_admin.settings.users.customers.$id.edit/validation.ts
import { useState as useState4 } from "react";
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
function validateInput(schema, values) {
  return validateSchema(
    schema,
    values,
    {
      onUnknownKeys: (unknownKeys, _11) => new DXTException(
        new DXTError(
          1e4 /* BAD_REQUEST */,
          {
            extra: `Par\xE1metros desconocidos: ${unknownKeys.join(", ")}`
          }
        )
      ),
      onInvalidValues: (invalidsValues, _11) => new DXTException(
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
  let [passwordStatus, setPasswordStatus] = useState4(null), customValidationSchema = yup2.object({
    password: yup2.string().test("password", "Formato de contrase\xF1a no v\xE1lido", (v) => {
      if (v != null && v != "") {
        let newPasswordStatus = dxtPasswordStatus(v);
        return _2.isEqual(passwordStatus, newPasswordStatus) || setPasswordStatus(newPasswordStatus), yupVOValidation(VODXTPassword, v);
      }
      return setPasswordStatus(null), !0;
    }),
    password_repeat: yup2.string().when("password", {
      is: (value) => value != null && value != "",
      then: (schema) => schema.required("Repita la contrase\xF1a")
    }).test(
      "passwords-match",
      "Las contrase\xF1as no coinciden",
      function(value) {
        return this.parent.password != null && this.parent.password != "" ? this.parent.password === value : !0;
      }
    )
  }).required();
  return { yupValidationSchema: commonValidationSchema.concat(customValidationSchema), passwordStatus };
};

// src/app/routes/_admin.settings.users.customers.$id.edit/components/success.tsx
import { jsx as jsx22, jsxs as jsxs13 } from "react/jsx-runtime";
var Success = (props) => {
  let { stateData, typeSettings } = props, updateData = {
    ...stateData
  }, app = useAppResources(), toast = useToast(), { yupValidationSchema: yupValidationSchema6, passwordStatus } = useCustomValidationSchema(), { state: statePerfiles, result: resultPerfiles } = useTangoList({
    url: API_TANGO_PERFIL,
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
    resolver: yupResolver(yupValidationSchema6)
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
  return /* @__PURE__ */ jsx22("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let { password_repeat, ...data } = dataUnsafe;
    data.email === "" && delete data.email, data.password === "" && delete data.password;
    let input = data, result = await typeSettings.api.patch(updateData.id, input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: { title: "Usuario actualizado" },
        error: { title: "Ha ocurrido un error" },
        loading: { title: "Actualizando usuario" }
      }
    }).then(() => {
      app.navigate(URL_SETTINGS_CUSTOMERS_PATH);
    }).catch((e) => {
      setError("root", { message: e });
    });
  }), children: /* @__PURE__ */ jsxs13(Box6, { children: [
    /* @__PURE__ */ jsx22(FormErrors, { errors }),
    /* @__PURE__ */ jsx22(CommonCard, { children: /* @__PURE__ */ jsxs13(
      Grid2,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx22(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx22(Heading2, { size: "sm", textTransform: "uppercase", children: "Informaci\xF3n del Cliente" }) }),
          /* @__PURE__ */ jsxs13(GridItem2, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx22(
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
                  isLoading: stateRelationship instanceof FetchStateLoading
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
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx22(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx22(GridItem2, { children: /* @__PURE__ */ jsx22(
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
          /* @__PURE__ */ jsx22(GridItem2, { children: /* @__PURE__ */ jsx22(
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
          /* @__PURE__ */ jsx22(GridItem2, { children: /* @__PURE__ */ jsx22(
            ControlledInput,
            {
              fieldProps: {
                name: "password",
                id: "password",
                type: "password"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Nueva contrase\xF1a"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx22(GridItem2, { children: /* @__PURE__ */ jsx22(
            ControlledInput,
            {
              fieldProps: {
                name: "password_repeat",
                id: "password_repeat",
                type: "password"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Confirmaci\xF3n de Contrase\xF1a"
              },
              control
            }
          ) }),
          passwordStatus != null && /* @__PURE__ */ jsxs13(GridItem2, { colSpan: { md: 2 }, children: [
            passwordStatus.tooShort && /* @__PURE__ */ jsx22(Badge2, { colorScheme: "red", children: "Contrase\xF1a muy corta" }),
            passwordStatus.tooLong && /* @__PURE__ */ jsx22(Badge2, { colorScheme: "red", children: "Contrase\xF1a muy larga" }),
            passwordStatus.invalidCharsPresent && /* @__PURE__ */ jsx22(Badge2, { colorScheme: "red", children: "Evite caracteres no v\xE1lidos" })
          ] }),
          /* @__PURE__ */ jsx22(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx22(Divider2, {}) }),
          /* @__PURE__ */ jsxs13(GridItem2, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx22(
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
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx22(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx22(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx22(Divider2, {}) }),
          /* @__PURE__ */ jsx22(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx22(Heading2, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx22(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx22(
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
          /* @__PURE__ */ jsx22(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx22(Divider2, {}) }),
          /* @__PURE__ */ jsx22(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx22(Heading2, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }) }),
          /* @__PURE__ */ jsx22(GridItem2, { children: /* @__PURE__ */ jsx22(
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
    /* @__PURE__ */ jsx22(CommonCard, { children: /* @__PURE__ */ jsxs13(
      Grid2,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx22(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx22(Heading2, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx22(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs13(Stack4, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx22(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx22(
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
            /* @__PURE__ */ jsx22(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx22(
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
            /* @__PURE__ */ jsx22(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx22(
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
            /* @__PURE__ */ jsx22(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx22(
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
            /* @__PURE__ */ jsx22(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx22(
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
            /* @__PURE__ */ jsx22(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx22(
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
            /* @__PURE__ */ jsx22(HStack3, { spacing: 4, children: /* @__PURE__ */ jsx22(
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
          /* @__PURE__ */ jsx22(GridItem2, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx22(Divider2, {}) }),
          /* @__PURE__ */ jsx22(GridItem2, { children: /* @__PURE__ */ jsx22(
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
          /* @__PURE__ */ jsx22(GridItem2, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx22(CommonCard, { children: /* @__PURE__ */ jsx22(
      SettingsFormsButtons,
      {
        buttonActionText: "Actualizar",
        isLoading: disableForm
      }
    ) })
  ] }) });
};

// src/app/routes/_admin.settings.users.customers.$id.edit/components/index.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
var FormEdit = (props) => {
  let { typeSettings, id } = props, { state, retry } = typeSettings.api.getOne(id);
  return state.map({
    loading: (_11) => /* @__PURE__ */ jsx23(Loading, {}),
    error: ({ error }) => /* @__PURE__ */ jsx23(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx23(Success, { stateData: state2.data, typeSettings })
  });
};

// src/app/routes/_admin.settings.users.customers.$id.edit/route.tsx
import { Fragment as Fragment6, jsx as jsx24, jsxs as jsxs14 } from "react/jsx-runtime";
function Edit() {
  let navigate = useNavigate4(), { id } = useParams(), typeSettings = settings.customers;
  try {
    if (integerValidator(id))
      return /* @__PURE__ */ jsxs14(Fragment6, { children: [
        /* @__PURE__ */ jsx24(
          SettingsFormHeading,
          {
            title: typeSettings.titles.edit,
            actionButton: {
              label: "Cancelar",
              buttonProps: {
                colorScheme: "gray",
                onClick: () => {
                  navigate(URL_SETTINGS_CUSTOMERS_PATH);
                }
              }
            }
          }
        ),
        /* @__PURE__ */ jsx24(FormEdit, { typeSettings, id })
      ] });
  } catch {
    return /* @__PURE__ */ jsx24(
      CommonErrors,
      {
        error: "Usuario no encontrado",
        buttonProps: {
          label: "Volver a Configuraci\xF3n",
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
import { jsx as jsx25, jsxs as jsxs15 } from "react/jsx-runtime";
var Loading2 = () => /* @__PURE__ */ jsx25(
  Box7,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs15(
      Grid3,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx25(Divider3, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx25(Divider3, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx25(Divider3, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs15(Stack5, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx25(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx25(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx25(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx25(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx25(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx25(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx25(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx25(HStack4, { spacing: 4, children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) })
          ] }) }),
          /* @__PURE__ */ jsx25(GridItem3, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx25(Divider3, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, {}),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx25(GridItem3, { children: /* @__PURE__ */ jsx25(FormInputSkeleton, {}) })
        ]
      }
    )
  }
);

// src/app/routes/_admin.settings.users.vendors.$id.edit/components/success.tsx
import { useEffect as useEffect7 } from "react";
import {
  Badge as Badge3,
  Box as Box8,
  Divider as Divider4,
  Grid as Grid4,
  GridItem as GridItem4,
  Heading as Heading3,
  HStack as HStack5,
  Stack as Stack6,
  useToast as useToast2
} from "@chakra-ui/react";
import { yupResolver as yupResolver2 } from "@hookform/resolvers/yup";
import { useForm as useForm2 } from "react-hook-form";

// src/app/routes/_admin.settings.users.vendors.$id.edit/validation.ts
import { useState as useState5 } from "react";
import _3 from "lodash";
import * as yup3 from "yup";
var useCustomValidationSchema2 = () => {
  let [passwordStatus, setPasswordStatus] = useState5(null), customValidationSchema = yup3.object({
    password: yup3.string().test("password", "Formato de contrase\xF1a no v\xE1lido", (v) => {
      if (v != null && v != "") {
        let newPasswordStatus = dxtPasswordStatus(v);
        return _3.isEqual(passwordStatus, newPasswordStatus) || setPasswordStatus(newPasswordStatus), yupVOValidation(VODXTPassword, v);
      }
      return setPasswordStatus(null), !0;
    }),
    password_repeat: yup3.string().when("password", {
      is: (value) => value != null && value != "",
      then: (schema) => schema.required("Repita la contrase\xF1a")
    }).test(
      "passwords-match",
      "Las contrase\xF1as no coinciden",
      function(value) {
        return this.parent.password != null && this.parent.password != "" ? this.parent.password === value : !0;
      }
    )
  }).required();
  return { yupValidationSchema: commonValidationSchema.concat(customValidationSchema), passwordStatus };
};

// src/app/routes/_admin.settings.users.vendors.$id.edit/components/success.tsx
import { jsx as jsx26, jsxs as jsxs16 } from "react/jsx-runtime";
var Success2 = (props) => {
  let { stateData, typeSettings } = props, updateData = {
    ...stateData
  }, app = useAppResources(), toast = useToast2(), { yupValidationSchema: yupValidationSchema6, passwordStatus } = useCustomValidationSchema2(), { state: statePerfiles, result: resultPerfiles } = useTangoList({
    url: API_TANGO_PERFIL,
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
    resolver: yupResolver2(yupValidationSchema6)
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
  return /* @__PURE__ */ jsx26("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let { password_repeat, ...data } = dataUnsafe;
    data.email === "" && delete data.email, data.password === "" && delete data.password;
    let input = data, result = await typeSettings.api.patch(updateData.id, input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: { title: "Usuario actualizado" },
        error: { title: "Ha ocurrido un error" },
        loading: { title: "Actualizando usuario" }
      }
    }).then(() => {
      app.navigate(URL_SETTINGS_VENDORS_PATH);
    }).catch((e) => {
      setError("root", { message: e });
    });
  }), children: /* @__PURE__ */ jsxs16(Box8, { children: [
    /* @__PURE__ */ jsx26(FormErrors, { errors }),
    /* @__PURE__ */ jsx26(CommonCard, { children: /* @__PURE__ */ jsxs16(
      Grid4,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx26(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx26(Heading3, { size: "sm", textTransform: "uppercase", children: "Informaci\xF3n del Vendedor" }) }),
          /* @__PURE__ */ jsxs16(GridItem4, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx26(
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
                  isLoading: stateRelationship instanceof FetchStateLoading
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
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx26(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx26(GridItem4, { children: /* @__PURE__ */ jsx26(
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
          /* @__PURE__ */ jsx26(GridItem4, { children: /* @__PURE__ */ jsx26(
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
          /* @__PURE__ */ jsx26(GridItem4, { children: /* @__PURE__ */ jsx26(
            ControlledInput,
            {
              fieldProps: {
                name: "password",
                id: "password",
                type: "password"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Nueva contrase\xF1a"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx26(GridItem4, { children: /* @__PURE__ */ jsx26(
            ControlledInput,
            {
              fieldProps: {
                name: "password_repeat",
                id: "password_repeat",
                type: "password"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Confirmaci\xF3n de Contrase\xF1a"
              },
              control
            }
          ) }),
          passwordStatus != null && /* @__PURE__ */ jsxs16(GridItem4, { colSpan: { md: 2 }, children: [
            passwordStatus.tooShort && /* @__PURE__ */ jsx26(Badge3, { colorScheme: "red", children: "Contrase\xF1a muy corta" }),
            passwordStatus.tooLong && /* @__PURE__ */ jsx26(Badge3, { colorScheme: "red", children: "Contrase\xF1a muy larga" }),
            passwordStatus.invalidCharsPresent && /* @__PURE__ */ jsx26(Badge3, { colorScheme: "red", children: "Evite caracteres no v\xE1lidos" })
          ] }),
          /* @__PURE__ */ jsx26(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx26(Divider4, {}) }),
          /* @__PURE__ */ jsxs16(GridItem4, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx26(
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
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx26(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx26(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx26(Divider4, {}) }),
          /* @__PURE__ */ jsx26(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx26(Heading3, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx26(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx26(
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
          /* @__PURE__ */ jsx26(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx26(Divider4, {}) }),
          /* @__PURE__ */ jsx26(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx26(Heading3, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }) }),
          /* @__PURE__ */ jsx26(GridItem4, { children: /* @__PURE__ */ jsx26(
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
    /* @__PURE__ */ jsx26(CommonCard, { children: /* @__PURE__ */ jsxs16(
      Grid4,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx26(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx26(Heading3, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx26(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs16(Stack6, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx26(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx26(
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
            /* @__PURE__ */ jsx26(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx26(
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
            /* @__PURE__ */ jsx26(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx26(
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
            /* @__PURE__ */ jsx26(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx26(
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
            /* @__PURE__ */ jsx26(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx26(
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
            /* @__PURE__ */ jsx26(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx26(
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
            /* @__PURE__ */ jsx26(HStack5, { spacing: 4, children: /* @__PURE__ */ jsx26(
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
          /* @__PURE__ */ jsx26(GridItem4, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx26(Divider4, {}) }),
          /* @__PURE__ */ jsx26(GridItem4, { children: /* @__PURE__ */ jsx26(
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
          /* @__PURE__ */ jsx26(GridItem4, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx26(CommonCard, { children: /* @__PURE__ */ jsx26(
      SettingsFormsButtons,
      {
        buttonActionText: "Actualizar",
        isLoading: disableForm
      }
    ) })
  ] }) });
};

// src/app/routes/_admin.settings.users.vendors.$id.edit/components/index.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
var FormEdit2 = (props) => {
  let { typeSettings, id } = props, { state, retry } = typeSettings.api.getOne(id);
  return state.map({
    loading: (_11) => /* @__PURE__ */ jsx27(Loading2, {}),
    error: ({ error }) => /* @__PURE__ */ jsx27(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx27(Success2, { stateData: state2.data, typeSettings })
  });
};

// src/app/routes/_admin.settings.users.vendors.$id.edit/route.tsx
import { Fragment as Fragment7, jsx as jsx28, jsxs as jsxs17 } from "react/jsx-runtime";
function Edit2() {
  let navigate = useNavigate5(), { id } = useParams2(), typeSettings = settings.vendors;
  try {
    if (integerValidator(id))
      return /* @__PURE__ */ jsxs17(Fragment7, { children: [
        /* @__PURE__ */ jsx28(
          SettingsFormHeading,
          {
            title: typeSettings.titles.edit,
            actionButton: {
              label: "Cancelar",
              buttonProps: {
                colorScheme: "gray",
                onClick: () => {
                  navigate(URL_SETTINGS_VENDORS_PATH);
                }
              }
            }
          }
        ),
        /* @__PURE__ */ jsx28(FormEdit2, { typeSettings, id })
      ] });
  } catch {
    return /* @__PURE__ */ jsx28(
      CommonErrors,
      {
        error: "Usuario no encontrado",
        buttonProps: {
          label: "Volver a Configuraci\xF3n",
          colorScheme: "green",
          onClick: () => {
            navigate(URL_SETTINGS_PATH);
          }
        }
      }
    );
  }
}

// src/app/routes/api.dxt.pedido.articulos.screen_list.ts
var api_dxt_pedido_articulos_screen_list_exports = {};
__export(api_dxt_pedido_articulos_screen_list_exports, {
  action: () => action,
  loader: () => loader2
});

// src/domain/user/types/index.ts
var UserRole = /* @__PURE__ */ ((UserRole2) => (UserRole2[UserRole2.customer = 0] = "customer", UserRole2[UserRole2.vendor = 1] = "vendor", UserRole2[UserRole2.admin = 2] = "admin", UserRole2))(UserRole || {});

// src/code.server/api/root.controller.ts
var RootController = class extends ApiController {
  async onError(e, req) {
    let finalE = e instanceof ValidationException && isProduction() ? new ValidationException(VALIDATION_ERROR) : e, dxtError = exceptionToDXTErrorInfo(finalE), {
      status: originalStatus,
      errorCode,
      extra
    } = dxtError, status = originalStatus === HTTP_STATUS_UNAVAILABLE ? getHttpStatusFromErrorCode(errorCode) : originalStatus, errorDescription = getDXTErrorDescription(errorCode);
    return requiresContactingAdmin(errorCode) && (errorDescription = errorDescription.toLocaleUpperCase() + ". Si el problema persiste contacte al administrador."), jsonResponse(
      {
        status,
        error: errorDescription,
        errorCode,
        extra
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

// src/@depsel-nodejs/system/index.ts
function halt(code, message) {
  console.error(`${_haltCodeDescription(code)}: ${message}`), process.exit(code);
}
var _haltCodeDescriptions = {
  [-1 /* INVALID_SETTINGS */]: "Invalid settings",
  [-2 /* INITIALIZATION_ERROR */]: "Initialization error",
  [-3 /* CRITICAL_ERROR */]: "Critical error "
};
function _haltCodeDescription(code) {
  return _haltCodeDescriptions[code] ?? _haltCodeDescriptions[-3 /* CRITICAL_ERROR */];
}

// src/code.server/api/auth/consts/index.ts
var AUTH_SECRET = process.env.AUTH_SECRET ?? "";
(typeof AUTH_SECRET != "string" || AUTH_SECRET.length < 10) && halt(-2 /* INITIALIZATION_ERROR */, "Invalid AUTH_SECRET");

// src/code.server/api/auth/value_objects/vo_auth_token.ts
var VOAuthToken = class extends VOWeakCheckAuthToken {
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

// src/domain/user/validation/index.ts
function isUserName(value) {
  let re = /^[a-zA-Z0-9_]+$/iu;
  return typeof value == "string" && value.length >= 2 && value.length <= 60 && re.test(value);
}

// src/code.server/infrastucture/user/models/user_base.model.ts
var userBaseTableCreationFieldsSQL = {
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
  timestamp_modificacion: "bigint NOT NULL"
};

// src/code.server/infrastucture/dxt/models/dxt_cliente.model.ts
var DXT_CLIENTE_TABLE = "dxt_cliente", DXT_CLIENTE_ID_FIELD = "dxt_cliente_id", dxtClienteTableCreationFieldsSQL = {
  dxt_cliente_id: "int IDENTITY(1,1) NOT NULL",
  password_hash: `varchar(${MD5_LENGTH}) NOT NULL`,
  ...userBaseTableCreationFieldsSQL
}, dxtClienteTableCreationIndexesSQL = [
  "CONSTRAINT pk_dxt_cliente_username UNIQUE (username)",
  "CONSTRAINT pk_dxt_cliente_id PRIMARY KEY (dxt_cliente_id)"
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

// src/code.server/infrastucture/auxiliar/models/vendedor.model.ts
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

// src/code.server/infrastucture/auxiliar/models/cliente.model.ts
var CLIENTE_TABLE = "GVA14", CLIENTE_ID_FIELD = "ID_GVA14", CLIENTE_CODE_FIELD = "COD_CLIENT", clienteModelColumns = [
  CLIENTE_ID_FIELD,
  CLIENTE_CODE_FIELD,
  VENDEDOR_ID_FIELD,
  VENDEDOR_CODE_FIELD,
  TRANSPORTE_ID_FIELD,
  TRANSPORTE_CODE_FIELD,
  "NOM_COM",
  "RAZON_SOCI",
  "HABILITADO",
  "FECHA_INHA"
], CLIENTE_NAME_COLUMNS = ["RAZON_SOCI", "NOM_COM"], fullClienteModelColumns = [
  ...clienteModelColumns,
  "SOBRE_II",
  "SOBRE_IVA",
  "COND_VTA",
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

// src/code.server/infrastucture/settings/settings.repository.ts
import path3 from "path";

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

// src/code.server/infrastucture/auth/utils.ts
import md52 from "md5";

// src/domain/auth/validation/index.ts
import validator6 from "validator";
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
};

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
      timestamp_modificacion
    } = unsafe;
    if (this.username = new VOUserName(username), this.screenName = new VOString(screen_name), typeof email == "string" && (this.email = new VOString(email.trim() !== "" ? new VOEmailAddress(email).valueOf() : "")), this.passwordHash = new VOMD5(password_hash), this.role = new VOUserRole(numberToUserRole(role)), this.habilitado_en_dxt = new VOBoolean(habilitado_en_dxt), this.puedeCrearPedido = new VOBoolean(puede_crear_pedido), this.puedeEditarPedido = new VOBoolean(puede_editar_pedido), this.puedeAnularPedido = new VOBoolean(puede_anular_pedido), this.borrarPedidoAlAnular = new VOBoolean(borrar_pedido_al_anular), this.perfilFacturacionId = new VOUInt32(perfil_facturacion_id), this.aprobarPedidoAlCrear = new VOBoolean(aprobar_pedido_al_crear), this.verPedidosCumplidos = new VOBoolean(ver_pedidos_cumplidos), this.diaDeEntrega = new VOInteger(dia_de_entrega), this.verSinPrecio = new VOBoolean(ver_sin_precio), this.mostrarMensajeDeAdvertencia = new VOBoolean(mostrar_mensaje_de_advertencia), this.timestampModificacion = new VOInteger(timestamp_modificacion), this.role.valueOf() !== 2 /* admin */ && tango_id == null)
      throw new DXTException(
        new DXTError(16e3 /* UNPROCESSABLE_ENTITY */, {
          extra: "tango_id missing in UserEntity"
        })
      );
    this.tangoId = tango_id != null ? new VOUInt32(tango_id) : void 0, this.habilitado_en_tango = habilitado_en_tango != null ? new VOBoolean(habilitado_en_tango) : void 0;
  }
  toUnsafe() {
    return {
      ...this.parentToUnsafe(),
      username: this.username.valueOf(),
      tango_id: this.tangoId?.valueOf(),
      habilitado_en_tango: this.habilitado_en_tango?.valueOf(),
      screen_name: this.screenName.valueOf(),
      email: this.email?.valueOf() ?? null,
      password_hash: this.passwordHash.valueOf(),
      role: userRoleToNumber(this.role.valueOf()),
      habilitado_en_dxt: this.habilitado_en_dxt.valueOf(),
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
      timestamp_modificacion: this.timestampModificacion.valueOf()
    };
  }
  tangoUserExists() {
    return this.habilitado_en_tango != null;
  }
  habilitado() {
    return this.habilitado_en_dxt.valueOf() && this.habilitado_en_tango != null && this.habilitado_en_tango.valueOf();
  }
  toPublicInfo() {
    let { password_hash, email, ...remaining } = this.toUnsafe();
    return remaining;
  }
  fromPublicInfo(publicInfo, options) {
    return new UserEntity({
      ...publicInfo,
      email: options?.email ?? null,
      password_hash: options?.password_hash ?? DUMMY_MD5
    });
  }
  hasAdminAccess() {
    return this.role.valueOf() === 2 /* admin */;
  }
};

// src/code.server/infrastucture/settings/consts/index.ts
var DEFAULT_DB_HOST = "localhost", DEFAULT_DB_PORT = 1433, DEFAULT_DB_USER = "sa", DEFAULT_DB_PASSWORD = "Axoft1988", DEFAULT_DB_CONNECTION_TIMEOUT_SECONDS = 30, DEFAULT_TANGO_DICTIONARY = "Diccionario", DEFAULT_SMTP_HOST = "localhost", DEFAULT_SMTP_PORT = 587, DEFAULT_SMTP_USE_TLS = !1, DEFAULT_AUTH_EXPIRATION_DAYS = 365, DEFAULT_USER_WARNING_MESSAGE_TITLE = "Atenci\xF3n", DEFAULT_USER_WARNING_MESSAGE_CONTENT = "Comun\xEDquese con el administrador", DEFAULT_USER_DISABLED_MESSAGE_TITLE = "Atenci\xF3n", DEFAULT_USER_DISABLED_MESSAGE_CONTENT = "Usuario deshabilitado. Comun\xEDquese con el administrador", DEFAULT_ADMIN_NAME = "Administrador", DEFAULT_ADMIN_PASSWORD = "admin";

// src/code.server/infrastucture/auth/utils.ts
function createAdminUserEntity(email) {
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
    password_hash: DUMMY_MD5,
    timestamp_modificacion: 0
  });
}
async function resolveUserStateException(user, tangoUserNotFoundErrorCode) {
  if (!user.tangoUserExists())
    return new DXTException(tangoUserNotFoundErrorCode);
  let userDisabled = !1, errorCode;
  if (user.habilitado_en_tango?.valueOf() === !1 ? (errorCode = 100006 /* TANGO_USER_DISABLED */, userDisabled = !0) : user.habilitado_en_dxt.valueOf() || (errorCode = 100005 /* DXT_USER_DISABLED */, userDisabled = !0), errorCode != null) {
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

// src/code.server/infrastucture/settings/dtos/index.ts
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
}, storedMiscSettingsSchema = {
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
}, StoredDBSettingsDTO = class extends DTO {
  validate(input) {
    return validateInput(storedDBSettingsSchema, input);
  }
  toUnsafe() {
    return this.data;
  }
}, StoredMiscSettingsDTO = class extends DTO {
  validate(input) {
    return validateInput(storedMiscSettingsSchema, input);
  }
  toUnsafe() {
    return this.data;
  }
};

// src/code.server/infrastucture/settings/settings.repository.ts
import { mkdir, readFile, writeFile } from "fs/promises";
import { parse as parseINI, stringify as stringifyINI } from "ini";
var dbIniFilename = path3.join(configPath, "db_settings.ini"), miscIniFilename = path3.join(configPath, "misc_settings.ini");
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
async function _saveDTOToINI(filename, dto) {
  let iniFileContent = stringifyINI(dto.toUnsafe());
  return await mkdir(path3.dirname(filename), { recursive: !0 }), await writeFile(filename, iniFileContent, { encoding: "utf-8" }), dto;
}
var SettingsService = class {
  constructor() {
    this._accessError = null;
    this._dbSettings = null;
    this._miscSettings = null;
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
  async _loadDBSettings() {
    return await _createDTOFromINI(dbIniFilename, (data) => new StoredDBSettingsDTO(data));
  }
  async _loadMiscSettings() {
    return await _createDTOFromINI(miscIniFilename, (data) => new StoredMiscSettingsDTO(data));
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
  async initializeKnex(dbName, dbSettings, unknownDBError) {
    let originalConnectionChangeRequired = this.connectionChangeRequired;
    this.connectionChangeRequired = 0 /* none */;
    let { db_host, db_port, db_user, db_password, db_connection_timeout_seconds } = dbSettings, knexInstance = knex({
      dialect: "mssql",
      client: "mssql",
      connection: {
        server: db_host,
        port: db_port,
        user: db_user,
        password: db_password,
        connectionTimeout: db_connection_timeout_seconds * 1e3,
        requestTimeout: db_connection_timeout_seconds * 1e3,
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
    if (knexInstance == null)
      return knexInstance;
    try {
      let connectionCheck = await knexInstance.raw("select (1+1) as two");
      if (!(Array.isArray(connectionCheck) && connectionCheck.length > 0 && connectionCheck[0]?.two?.toString() === "2"))
        throw this._lastConnectionError = new DXTException(200001 /* TANGO_DB_ACCESS_ERROR */), this._lastConnectionError;
    } catch (e) {
      throw this._lastConnectionError = new DXTException(200001 /* TANGO_DB_ACCESS_ERROR */, e?.message?.toString()), this._lastConnectionError;
    }
    try {
      let result = await knexInstance.raw(`use ${dbName}`);
    } catch (e) {
      throw this._lastConnectionError = new DXTException(unknownDBError, e?.message?.toString()), this._lastConnectionError;
    }
    return this.connectionChangeRequired = originalConnectionChangeRequired, knexInstance;
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

// src/code.server/infrastucture/dxt/models/dxt_vendedor.model.ts
var DXT_VENDEDOR_TABLE = "dxt_vendedor", DXT_VENDEDOR_ID_FIELD = "dxt_vendedor_id", dxtVendedorTableCreationFieldsSQL = {
  dxt_vendedor_id: "int IDENTITY(1,1) NOT NULL",
  password_hash: `varchar(${MD5_LENGTH}) NOT NULL`,
  ...userBaseTableCreationFieldsSQL
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
var isCacheEnabledGlobally = tryVO(() => new VOBoolean(process.env.ENABLE_CACHE), new VOBoolean(!1)).valueOf(), MemoryCache = class {
  constructor(_cacheOwnerStatus) {
    this._cacheOwnerStatus = _cacheOwnerStatus;
    this._byIdCache = /* @__PURE__ */ new Map();
    this._metadataCache = /* @__PURE__ */ new Map();
    isCacheEnabledGlobally && (eventBus.on(DBSettingsChangedEvent.NAME, this.onDBSettingsChanged.bind(this)), eventBus.on(DBTablesChangedEvent.NAME, this.onTablesChanged.bind(this)));
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
    let { payload: tablesChanged } = event, dependencies = this._cacheOwnerStatus.getTableDependencies();
    tablesChanged.findIndex((table) => dependencies.includes(table)) >= 0 && this.clear();
  }
  async isEnabled() {
    return isCacheEnabledGlobally && await this._cacheOwnerStatus.isReady();
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

// src/code.server/infrastucture/dxt/pedido/models/dxt_pedido_articulo_print.model.ts
var DXT_PEDIDO_ARTICULOS_PRINT_TABLE = "dxt_pedido_articulos_print";

// src/code.server/infrastucture/dxt/pedido/models/dxt_pedido_articulo.model.ts
var DXT_PEDIDO_ARTICULOS_CODE_FIELD = "codigo_articulo", DXT_PEDIDO_ARTICULOS_ID_FIELD = "id", dxtPedidoArticuloCreationFieldsSQL = {
  id: "int IDENTITY(0,1) NOT NULL",
  codigo_articulo: "varchar(100) COLLATE Latin1_General_BIN NOT NULL",
  params: "varchar(500) COLLATE Latin1_General_BIN NULL"
}, dxtPedidoArticuloCreationIndexesSQL = [];

// src/code.server/infrastucture/dxt/pedido/models/dxt_pedido_articulo_screen.model.ts
var DXT_PEDIDO_ARTICULOS_SCREEN_TABLE = "dxt_pedido_articulos_screen";

// src/code.server/infrastucture/dictionary/models/dataset.model.ts
var DATASET_TABLE = "Dataset";

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
var ASIENTO_TABLE = "GVA25", ASIENTO_ID_FIELD = "ID_GVA25", ASIENTO_CODE_FIELD = "COD_GVA25", asientoModelColumns = [
  ASIENTO_ID_FIELD,
  ASIENTO_CODE_FIELD,
  "RENGLON",
  "COD_CUENTA",
  "CONC_ASI",
  "CONC_MOV",
  "DEBE",
  "HABER",
  "TIPO_ASIEN",
  "COD_IMPUES"
];

// src/code.server/infrastucture/auxiliar/models/condicion.model.ts
var CONDICION_TABLE = "GVA01", CONDICION_ID_FIELD = "ID_GVA01", CONDICION_CODE_FIELD = "COND_VTA", condicionModelColumns = [
  CONDICION_ID_FIELD,
  CONDICION_CODE_FIELD,
  "ACEPTA_CONTADO",
  "PORC_MIN_CONTADO",
  "ACEPTA_CTA",
  "OBLIGA_CONTADO",
  "DESC_COND",
  "FAC_CREDIT",
  "NRO_DE_LIS",
  "PAGO_CF",
  "APLICA_MORA",
  "ID_INTERES_POR_MORA",
  "GENERA_FECHAS_ALTERNATIVAS",
  "FECHA_VIGENCIA_DESDE",
  "FECHA_VIGENCIA_HASTA",
  "CONTADO",
  "CALCULA_INTERESES",
  "ID_GVA10",
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

// src/code.server/infrastucture/auxiliar/models/parametros.model.ts
var TANGO_PARAMETROS_TABLE = "GVA16", TANGO_PARAMETROS_ID_FIELD = "ID_GVA16", tangoParametrosModelColumns = [
  TANGO_PARAMETROS_ID_FIELD,
  "PED_APR_CO",
  "PED_AUT_CO",
  "PED_FECHA",
  "PROX_NDOC"
];

// src/code.server/infrastucture/auxiliar/models/perfil.model.ts
var PERFIL_TABLE = "GVA51", PERFIL_ID_FIELD = "ID_GVA51", PERFIL_CODE_FIELD = "COD_PERFIL", perfilModelColumns = [
  PERFIL_CODE_FIELD,
  PERFIL_ID_FIELD,
  "DESCRIPCIO",
  "BONIFIC",
  "COND_VENTA",
  "D_TAL_FACT",
  "D_TIPO_ASI",
  "D_TRANSPOR",
  "DEPOSITO",
  "FECHA",
  "TAL_FACTUR",
  "TAL_PEDIDO",
  "TAL_REMITO",
  "TIPO_ASIEN"
];

// src/code.server/infrastucture/auxiliar/models/talonario.model.ts
var TALONARIO_TABLE = "GVA43", TALONARIO_CODE_FIELD = "TALONARIO", TALONARIO_ID_FIELD = "ID_GVA43", talonarioModelColumns = [
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

// src/code.server/infrastucture/pedido/models/pedido.model.ts
var PEDIDO_TABLE = "GVA21", PEDIDO_ID_FIELD = "ID_GVA21", PEDIDO_CODE_FIELD = "NRO_PEDIDO", pedidoModelColumns = [
  PEDIDO_ID_FIELD,
  PEDIDO_CODE_FIELD,
  CLIENTE_ID_FIELD,
  CLIENTE_CODE_FIELD,
  VENDEDOR_ID_FIELD,
  VENDEDOR_CODE_FIELD,
  DEPOSITO_CODE_FIELD,
  TRANSPORTE_CODE_FIELD,
  TRANSPORTE_ID_FIELD,
  "FECHA_PEDI",
  "FECHA_ENTR",
  "LEYENDA_4",
  "LEYENDA_5",
  "TOTAL_PEDI",
  "PORC_DESC",
  "ESTADO"
], fullPedidoModelColumns = [
  ...pedidoModelColumns,
  "APRUEBA",
  "EXPORTADO",
  "FECHA_APRU",
  "HORA_APRUE",
  "ID_EXTERNO",
  "NRO_O_COMP",
  "NRO_SUCURS",
  "ORIGEN",
  "REVISO_FAC",
  "REVISO_STK",
  "N_REMITO"
];

// src/code.server/infrastucture/dictionary/models/campo.model.ts
var CAMPO_TABLE = "Campo";

// src/code.server/infrastucture/dictionary/models/empresa.model.ts
var EMPRESA_TABLE = "Empresa";

// src/domain/dictionary/entities/dataset.unsafe.ts
var DatasetIDField = "IDDataset";

// src/code.server/infrastucture/dictionary/dictionary.provider.ts
var DictionaryProvider = class extends TDBProvider {
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
    this._knexInstance = void 0, this._numeroPedidoRange = void 0, this._tangoCompanies.clear(), await originalKnexInstance?.destroy();
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
  async _prepareNumeroPedido(q) {
    this._numeroPedidoRange = void 0;
    let result = await q(DATASET_TABLE).first("*").where({ Dataset: PEDIDO_TABLE });
    if (result == null)
      throw new DXTException(0 /* UNEXPECTED_ERROR */, "DictionaryProvider._prepareNumeroPedido");
    let datasetId = result[DatasetIDField], campos = await q(CAMPO_TABLE).select("*").where({
      [DatasetIDField]: datasetId,
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
        `Error en longitud para el n\xFAmero de remito: \xABLongitud\xBB es menor a ${12}.`
      );
    this._numeroPedidoRange = {
      min: BigInt(1),
      max: BigInt(10) ** BigInt(nroPedidoLongitud) - BigInt(1)
    };
  }
  async _loadCompaniesFromDictionary(q) {
    this._tangoCompanies.clear();
    let empresas = await q(EMPRESA_TABLE).select("*"), currentCompany = (await settingsService.getDBSettings()).tango_active_company;
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
  async getNumeroPedidoRange() {
    if (await this.getDictionary(), !this._numeroPedidoRange)
      throw new DXTException(0 /* UNEXPECTED_ERROR */, "DictionaryProvider.getNumeroPedidoRange");
    return this._numeroPedidoRange;
  }
};

// src/code.server/infrastucture/dictionary/dictionary.repository.ts
var DictionaryRepository = class extends DictionaryProvider {
}, dictionaryRepository = new DictionaryRepository();

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
    if (!isCacheEnabledGlobally)
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
    await this._initializeTable(knex2, DXT_CLIENTE_TABLE, dxtClienteTableCreationFieldsSQL, dxtClienteTableCreationIndexesSQL), await this._initializeTable(knex2, DXT_VENDEDOR_TABLE, dxtVendedorTableCreationFieldsSQL, dxtVendedorTableCreationIndexesSQL), await this._initializeTable(knex2, DXT_PEDIDO_ARTICULOS_PRINT_TABLE, dxtPedidoArticuloCreationFieldsSQL, dxtPedidoArticuloCreationIndexesSQL), await this._initializeTable(knex2, DXT_PEDIDO_ARTICULOS_SCREEN_TABLE, dxtPedidoArticuloCreationFieldsSQL, dxtPedidoArticuloCreationIndexesSQL);
  }
  async _initializeTable(knex2, tableName, fields, indexes) {
    let tableExists = !1, tableWithUnknownColumns = !1;
    try {
      let count = await knex2.count().from(tableName);
      tableExists = Array.isArray(count) && count.length > 0;
    } catch (e) {
      console.error(e);
    }
    if (tableExists)
      try {
        let requiredFields = Object.keys(fields);
        await knex2.select(...requiredFields).from(tableName).first();
        return;
      } catch (e) {
        console.error(e), tableWithUnknownColumns = !0;
      }
    if (tableWithUnknownColumns)
      throw new DXTException(200008 /* TANGO_COMPANY_INITIALIZATION_ERROR */, `Tabla con formato no v\xE1lido: ${tableName}`);
    let allDefinitions = [...Object.entries(fields).map(([field, sql]) => `${field} ${sql}`), ...indexes].join(","), creationSql = `CREATE TABLE ${tableName} (${allDefinitions});`;
    await knex2.raw(creationSql);
  }
};

// src/code.server/infrastucture/company/company.provider.ts
var CompanyProvider = class extends CompanyInitProvider {
  constructor(config2) {
    super();
    this.config = config2, this._tableDependencies = [
      this.config.mainTable,
      ...this.config.tableDependencies ?? []
    ], this.cache = new MemoryCache(this), eventBus.on(DBSettingsChangedEvent.NAME, this.onDBSettingsChanged.bind(this));
  }
  getTableName() {
    return this.config.mainTable;
  }
  getTableDependencies() {
    return this._tableDependencies;
  }
  async isReady() {
    return await this.getCompany(), !0;
  }
  async getById(id, options) {
    let q = await this.getCompany(), useCache = options?.useCache ?? !0;
    if (useCache) {
      let cachedData = await this.cache.getById(id);
      if (cachedData != null)
        return cachedData;
    }
    let { mainTable, mainIdField, columns } = this.config, data = await q(mainTable).first(...columns ?? "*").where(mainIdField, id);
    if (data == null)
      throw new DXTException(11e3 /* NOT_FOUND */);
    let result = this.toResult(data);
    return useCache && await this.cache.setById(id, result), result;
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
    return `${mainTable}_BU_${role}_${tangoUserId ?? "A"}`;
  }
  getAllCacheKey(options) {
    if (!(options?.useCache ?? !0))
      return null;
    let { mainTable } = this.config;
    if (options == null)
      return mainTable;
    let {
      offset,
      limit,
      where,
      whereIn
    } = options, chunks = [
      offset ?? "O",
      limit ?? "L",
      where?.field ?? "W",
      where?.value ?? "V",
      whereIn?.field ?? "I",
      whereIn?.values.join("-") ?? "V"
    ];
    return `${mainTable}_ALL_${chunks.join("_")}`;
  }
};

// src/code.server/infrastucture/auxiliar/tango.provider.ts
var TangoProvider = class extends CompanyProvider {
  toResultWithoutDisposables(m) {
    let { FILLER, OBSERVACIONES, ROW_VERSION, CAMPOS_ADICIONALES, ...remaining } = m;
    return {
      ...remaining
    };
  }
};

// src/code.server/infrastucture/auxiliar/utils.ts
function createTangoRepository(mainTable, mainIdField, modelMapper, columns) {
  return new class extends TangoProvider {
    constructor() {
      super({
        mainTable,
        mainIdField,
        columns
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

// src/code.server/infrastucture/dxt/dxt_user.repository.ts
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
    let { mainIdField } = this.config, q = await this.getCompany();
    return await this._getUserWithRelationsByWhere(q, mainIdField, id, relationRequired);
  }
  async getUserWithRelationsByName(username, relationRequired) {
    relationRequired = relationRequired ?? !0;
    let cache = await this.cache.getByIdBuffer();
    if (cache) {
      for (let [key, user] of cache)
        if (user.username.toLowerCase() === username.toLowerCase())
          return user;
    }
    let q = await this.getCompany();
    return await this._getUserWithRelationsByWhere(q, "username", username, relationRequired);
  }
  async _getUserWithRelationsByWhere(knexInstance, field, value, relationRequired) {
    let q = knexInstance, { mainTable, mainIdField, tangoTable, tangoIdField, dxtUserNotFoundErrorCode, tangoUserNotFoundErrorCode } = this.config, modelAndRelations = await q(mainTable).joinRaw(
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
  async create(input) {
    let q = await this.getCompany(), inputModel = this._userInputToModel(input), { mainTable, mainIdField } = this.config;
    try {
      let id = (await q(mainTable).returning(mainIdField).insert(inputModel))[0][mainIdField];
      return await this.getById(id);
    } catch (e) {
      throw dbErrorToDXTException(e);
    }
  }
  async update(id, input) {
    let q = await this.getCompany(), inputModel = this._userInputToModel(input), { mainTable, mainIdField } = this.config;
    try {
      if (await q(mainTable).where(mainIdField, id).update(inputModel) <= 0)
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

// src/code.server/infrastucture/dxt/dxt_cliente.repository.ts
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
      sortField: "RAZON_SOCI"
    });
  }
  toResult(m) {
    let { habilitado_en_dxt } = m;
    return {
      ...m,
      screen_name: m.username,
      role: userRoleToNumber(0 /* customer */),
      id: m.dxt_cliente_id,
      habilitado_en_dxt
    };
  }
  toResultWithRelations(cliente) {
    let { mainIdField } = this.config, { habilitado_en_dxt, HABILITADO: habilitado_en_tango, ...remaining } = cliente, id = cliente[mainIdField];
    return {
      ...remaining,
      id,
      role: 0 /* customer */,
      screen_name: this.getScreenName(cliente),
      habilitado_en_tango: habilitado_en_tango !== null ? habilitado_en_tango : void 0,
      habilitado_en_dxt
    };
  }
}, dxtClienteRepository = new DXTClienteRepository();

// src/code.server/infrastucture/dxt/dxt_vendedor.repository.ts
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
      sortField: "NOMBRE_VEN"
    });
  }
  toResult(m) {
    let { habilitado_en_dxt } = m;
    return {
      ...m,
      id: m.dxt_vendedor_id,
      screen_name: m.username,
      role: userRoleToNumber(1 /* vendor */),
      habilitado_en_dxt
    };
  }
  toResultWithRelations(vendedor) {
    let { dxt_vendedor_id: id, habilitado_en_dxt, INHABILITA: inhabilitado_en_tango, ...remaining } = vendedor;
    return {
      ...remaining,
      id,
      role: 1 /* vendor */,
      screen_name: this.getScreenName(vendedor),
      habilitado_en_tango: inhabilitado_en_tango != null ? !inhabilitado_en_tango : void 0,
      habilitado_en_dxt
    };
  }
}, dxtVendedorRepository = new DXTVendedorRepository();

// src/code.server/infrastucture/auth/auth_token.repository.ts
import path4, { join as join3 } from "path";
import { mkdir as mkdir2, open, opendir, stat, unlink } from "fs/promises";
var _tokensPath = path4.join(cachePath, "tokens"), AuthTokenRepository = class {
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
  let tokenProps = token.valueOf(), userId = tokenProps.userId.valueOf(), role = numberToUserRole(tokenProps.roleNumber.valueOf());
  if (role === 2 /* admin */) {
    let settings3 = await settingsService.getMiscSettings();
    return {
      auth_token: authTokenString,
      user: createAdminUserEntity(settings3.admin_email)
    };
  }
  let result;
  if (role === 0 /* customer */)
    return await _testUserConnect(dxtClienteRepository, userId, token, 200009 /* TANGO_CUSTOMER_NO_LONGER_EXISTS */);
  if (role === 1 /* vendor */)
    return await _testUserConnect(dxtVendedorRepository, userId, token, 200010 /* TANGO_VENDOR_NO_LONGER_EXISTS */);
  throw new DXTException(100004 /* MISSING_AUTH_TOKEN */);
}
async function _testUserConnect(repository, userId, authToken, tangoUserNotFoundErrorCode) {
  let userUnsafe = await repository.getUserWithRelationsById(userId, !1), userEntity;
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
      let user = createAdminUserEntity(settings3.admin_email);
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
  let userInfo = await authTokenRepository.createUserAuthToken(user);
  if (user.mostrarMensajeDeAdvertencia.valueOf()) {
    let miscSettings = await settingsService.getMiscSettings();
    userInfo.message_to_user = {
      type: "warning",
      title: miscSettings.user_warning_message_title,
      content: miscSettings.user_warning_message_content
    };
  }
  return userInfo;
}

// src/code.server/infrastucture/auth/workers/change_password.worker.ts
async function changePasswordWorker(role, id, password) {
  let passwordHash = getPasswordHash(password);
  switch (role) {
    case 2 /* admin */: {
      let settings3 = await settingsService.getMiscSettings();
      await settingsService.setMiscSettings(
        new StoredMiscSettingsDTO({
          ...settings3,
          admin_password_hash: passwordHash
        })
      );
      return;
    }
    case 0 /* customer */:
      await dxtClienteRepository.changePassword(id, passwordHash);
      return;
    case 1 /* vendor */:
      await dxtVendedorRepository.changePassword(id, passwordHash);
      return;
  }
  throw new DXTException(0 /* UNEXPECTED_ERROR */, "AuthRepository.changepassword");
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

// src/code.server/api/admin_root.controller.ts
var AdminRootController = class extends AuthenticatedRootController {
  async onRequest(req) {
    if (await super.onRequest(req), req.auth.user.role.valueOf() !== 2 /* admin */)
      throw new DXTException(101003 /* ADMIN_ROLE_REQUIRED */);
  }
}, adminRootController = new AdminRootController();

// src/code.server/infrastucture/dxt/pedido/dxt_pedido_articulo.repository.ts
var DXTPedidoArticuloRepository = class extends CompanyProvider {
  constructor(config2) {
    super({
      mainIdField: DXT_PEDIDO_ARTICULOS_CODE_FIELD,
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
    let finalList = list.filter((e) => e.codigo_articulo.trim().length > 0), { mainTable } = this.config, trx = await (await this.getCompany()).transaction();
    return await trx(mainTable).truncate(), await trx.batchInsert(mainTable, finalList, 500), await trx.commit(), emitBusEvent(
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

// src/code.server/infrastucture/articulo/models/articulo.model.ts
var ARTICULO_TABLE = "STA11", ARTICULO_ID_FIELD = "ID_STA11", ARTICULO_CODE_FIELD = "COD_ARTICU";
var ARTICULO_NAME_COLUMNS = ["DESCRIPCIO", "DESC_ADIC"];

// src/domain/dxt/pedido/utils/index.ts
function _getDXTPedidoArticuloParam(s) {
  let chunks = s.split("=", 2);
  if (chunks.length != 2)
    return null;
  let key = chunks[0].trim().toLowerCase(), value = chunks[1].trim();
  return key.length == 0 ? null : { key, value };
}
function strToDXTPedidoArticuloRecord(s) {
  if (!isStr(s))
    return null;
  let p = s.indexOf(";");
  p <= 0 && (p = s.length);
  let codigo_articulo = s.substring(0, p).trimEnd();
  if (codigo_articulo.length == 0)
    return null;
  let params = s.substring(p + 1).trim();
  return params.length == 0 ? { codigo_articulo } : {
    codigo_articulo,
    params
  };
}
function strToDXTPedidoArticuloParams(paramsStr) {
  if (paramsStr == null)
    return;
  let result = {}, emptyParams = !0;
  return paramsStr.split(";").forEach((s, i) => {
    let paramEntry = _getDXTPedidoArticuloParam(s);
    if (paramEntry == null)
      return;
    let { key, value } = paramEntry;
    result[key] = value, emptyParams = !1;
  }), emptyParams ? void 0 : result;
}

// src/code.server/infrastucture/dxt/pedido/dxt_pedido_articulo_print.repository.ts
var DXTPedidoArticuloPrintRepository = class extends DXTPedidoArticuloRepository {
  constructor() {
    super({
      mainTable: DXT_PEDIDO_ARTICULOS_PRINT_TABLE,
      tableDependencies: [ARTICULO_TABLE]
    });
    this.mainColumns = [`${DXT_PEDIDO_ARTICULOS_PRINT_TABLE}.*`], this.articuloColumns = [ARTICULO_ID_FIELD].map((c) => `${ARTICULO_TABLE}.${c}`);
  }
  async getIdsWithParams(paramsToReturn) {
    let cacheKey = `ids_${paramsToReturn?.join(".")}`, resultFromCache = await this.cache.getMetadata(cacheKey);
    if (resultFromCache != null)
      return resultFromCache;
    let { mainTable } = this.config, rawData = await (await this.getCompany())(mainTable).select(...this.mainColumns, ...this.articuloColumns).innerJoin(ARTICULO_TABLE, `${mainTable}.${DXT_PEDIDO_ARTICULOS_CODE_FIELD}`, `${ARTICULO_TABLE}.${ARTICULO_CODE_FIELD}`).orderBy(DXT_PEDIDO_ARTICULOS_ID_FIELD);
    if (rawData == null)
      throw new DXTException(11e3 /* NOT_FOUND */);
    let data = rawData.map((m) => this.toArticuloIdResult(m, paramsToReturn));
    return await this.cache.setMetadata(cacheKey, data), data;
  }
  toArticuloIdResult(m, paramsToReturn) {
    let { [ARTICULO_ID_FIELD]: id_articulo } = m, params = strToDXTPedidoArticuloParams(m.params);
    if (paramsToReturn.length == 0)
      return params != null ? [id_articulo, params] : id_articulo;
    let filteredParamsEntries = params == null ? null : Object.entries(params).filter(
      ([key, _11]) => paramsToReturn.includes(key)
    );
    return filteredParamsEntries != null && filteredParamsEntries.length > 0 ? [id_articulo, Object.fromEntries(filteredParamsEntries)] : id_articulo;
  }
}, dxtPedidoArticuloPrintRepository = new DXTPedidoArticuloPrintRepository();

// src/code.server/infrastucture/dxt/pedido/dxt_pedido_articulo_screen.repository.ts
var DXTPedidoArticulosScreenRepository = class extends DXTPedidoArticuloRepository {
  constructor() {
    super({
      mainTable: DXT_PEDIDO_ARTICULOS_SCREEN_TABLE,
      tableDependencies: [ARTICULO_TABLE]
    });
  }
}, dxtPedidoArticuloScreenRepository = new DXTPedidoArticulosScreenRepository();

// src/domain/dxt/pedido/value_objects/VOPedidoArticuloRecords.ts
var VOPedidoArticuloRecords = class extends ValueObject {
  validate(rawValue) {
    Array.isArray(rawValue) || this.throwError(rawValue);
    for (let e in rawValue)
      typeof e != "string" && this.throwError(rawValue);
    return rawValue.map(
      (s) => strToDXTPedidoArticuloRecord(s)
    ).filter((e) => e != null);
  }
};

// src/domain/dxt/pedido/input/index.ts
var setPedidoArticulosInputSchema = {
  data: (v) => new VOPedidoArticuloRecords(v)
}, validatePedidoArticulosInput = (input) => validateInput(setPedidoArticulosInputSchema, input);

// src/domain/shared/validate_schema/index.ts
var optionalStringsValidator = (v, def) => v == null ? def : new VOStrings(v).valueOf();

// src/code.server/api/dxt/pedido/endpoints/index.ts
var dxtPedidoGetArticulosPrintListEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => await dxtPedidoArticuloPrintRepository.getList()
), dxtPedidoGetArticulosScreenListEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => await dxtPedidoArticuloScreenRepository.getList()
), dxtPedidoSetArticulosPrintListEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      body: validatePedidoArticulosInput
    }
  },
  async (req) => (await dxtPedidoArticuloPrintRepository.setList(req.validated.body.data), { ok: !0 })
), dxtPedidoSetArticulosScreenListEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      body: validatePedidoArticulosInput
    }
  },
  async (req) => (await dxtPedidoArticuloScreenRepository.setList(req.validated.body.data), { ok: !0 })
), dxtPedidoGetArticulosPrintIdsEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      query: {
        param: optionalStringsValidator
      }
    }
  },
  async (req) => {
    let { param: params } = req.validated.query, paramsToReturn = (params ?? []).map((p) => p.trim().toLowerCase()).filter((p) => p != null && p.length > 0);
    return await dxtPedidoArticuloPrintRepository.getIdsWithParams(paramsToReturn);
  }
);

// src/app/routes/api.dxt.pedido.articulos.screen_list.ts
async function loader2({ request, params }) {
  return await dxtPedidoGetArticulosScreenListEndpoint.get(request, params);
}
async function action({ request, params }) {
  return await dxtPedidoSetArticulosScreenListEndpoint.post(request, params);
}

// src/app/routes/_admin.settings.users.customers.add/route.tsx
var route_exports3 = {};
__export(route_exports3, {
  default: () => Add
});
import { useNavigate as useNavigate6 } from "@remix-run/react";

// src/app/routes/_admin.settings.users.customers.add/components/success.tsx
import { useEffect as useEffect8 } from "react";
import {
  Badge as Badge4,
  Box as Box9,
  Divider as Divider5,
  Grid as Grid5,
  GridItem as GridItem5,
  Heading as Heading4,
  HStack as HStack6,
  Stack as Stack7,
  useToast as useToast3
} from "@chakra-ui/react";
import { yupResolver as yupResolver3 } from "@hookform/resolvers/yup";
import { useForm as useForm3 } from "react-hook-form";

// src/app/routes/_admin.settings.users.customers.add/validation.ts
import { useState as useState6 } from "react";
import * as yup4 from "yup";
import _4 from "lodash";
var useCustomValidationSchema3 = () => {
  let [passwordStatus, setPasswordStatus] = useState6(null), customValidationSchema = yup4.object({
    password: yup4.string().required("Ingrese una contrase\xF1a").test("password", "Formato de contrase\xF1a no v\xE1lido", (v) => {
      if (v != "" && v != null) {
        let newPasswordStatus = dxtPasswordStatus(v);
        return _4.isEqual(passwordStatus, newPasswordStatus) || setPasswordStatus(newPasswordStatus), yupVOValidation(VODXTPassword, v);
      }
      return !0;
    }),
    password_repeat: yup4.string().required("Repita la contrase\xF1a").test(
      "passwords-match",
      "Las contrase\xF1as no coinciden",
      function(value) {
        return this.parent.password === value;
      }
    )
  }).required();
  return { yupValidationSchema: commonValidationSchema.concat(customValidationSchema), passwordStatus };
};

// src/app/routes/_admin.settings.users.customers.add/components/success.tsx
import { jsx as jsx29, jsxs as jsxs18 } from "react/jsx-runtime";
var Success3 = (props) => {
  let { typeSettings } = props, app = useAppResources(), toast = useToast3(), { yupValidationSchema: yupValidationSchema6, passwordStatus } = useCustomValidationSchema3(), { state: statePerfiles, result: resultPerfiles } = useTangoList({
    url: API_TANGO_PERFIL,
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
      habilitado_en_dxt: !0,
      puede_crear_pedido: !0,
      puede_editar_pedido: !0,
      ver_pedidos_cumplidos: !0,
      ver_sin_precio: !1,
      mostrar_mensaje_de_advertencia: !1,
      puede_anular_pedido: !1,
      borrar_pedido_al_anular: !1,
      aprobar_pedido_al_crear: !1
    },
    resolver: yupResolver3(yupValidationSchema6)
  }), watchPuedeAnularPedido = watch("puede_anular_pedido");
  useEffect8(() => {
    watchPuedeAnularPedido === !1 && resetField("borrar_pedido_al_anular", { defaultValue: !1 });
  }, [watchPuedeAnularPedido]);
  let disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx29("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let { password_repeat, ...data } = dataUnsafe;
    data.email === "" && delete data.email;
    let input = data, result = await typeSettings.api.post(input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: { title: "Usuario creado" },
        error: { title: "Ha ocurrido un error" },
        loading: { title: "Creando usuario" }
      }
    }).then(() => {
      app.navigate(URL_SETTINGS_CUSTOMERS_PATH);
    }).catch((e) => {
      setError("root", { message: e });
    });
  }), children: /* @__PURE__ */ jsxs18(Box9, { children: [
    /* @__PURE__ */ jsx29(FormErrors, { errors }),
    /* @__PURE__ */ jsx29(CommonCard, { children: /* @__PURE__ */ jsxs18(
      Grid5,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx29(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx29(Heading4, { size: "sm", textTransform: "uppercase", children: "Informaci\xF3n del Cliente" }) }),
          /* @__PURE__ */ jsxs18(GridItem5, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx29(
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
                  isLoading: stateRelationship instanceof FetchStateLoading
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
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx29(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx29(GridItem5, { children: /* @__PURE__ */ jsx29(
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
          /* @__PURE__ */ jsx29(GridItem5, { children: /* @__PURE__ */ jsx29(
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
          /* @__PURE__ */ jsx29(GridItem5, { children: /* @__PURE__ */ jsx29(
            ControlledInput,
            {
              fieldProps: {
                name: "password",
                id: "password",
                type: "password"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Contrase\xF1a"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx29(GridItem5, { children: /* @__PURE__ */ jsx29(
            ControlledInput,
            {
              fieldProps: {
                name: "password_repeat",
                id: "password_repeat",
                type: "password"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Confirmaci\xF3n de Contrase\xF1a"
              },
              control
            }
          ) }),
          passwordStatus != null && /* @__PURE__ */ jsxs18(GridItem5, { colSpan: { md: 2 }, children: [
            passwordStatus.tooShort && /* @__PURE__ */ jsx29(Badge4, { colorScheme: "red", children: "Contrase\xF1a muy corta" }),
            passwordStatus.tooLong && /* @__PURE__ */ jsx29(Badge4, { colorScheme: "red", children: "Contrase\xF1a muy larga" }),
            passwordStatus.invalidCharsPresent && /* @__PURE__ */ jsx29(Badge4, { colorScheme: "red", children: "Evite caracteres no v\xE1lidos" })
          ] }),
          /* @__PURE__ */ jsx29(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx29(Divider5, {}) }),
          /* @__PURE__ */ jsxs18(GridItem5, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx29(
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
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx29(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx29(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx29(Divider5, {}) }),
          /* @__PURE__ */ jsx29(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx29(Heading4, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx29(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx29(
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
          /* @__PURE__ */ jsx29(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx29(Divider5, {}) }),
          /* @__PURE__ */ jsx29(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx29(Heading4, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }) }),
          /* @__PURE__ */ jsx29(GridItem5, { children: /* @__PURE__ */ jsx29(
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
    /* @__PURE__ */ jsx29(CommonCard, { children: /* @__PURE__ */ jsxs18(
      Grid5,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx29(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx29(Heading4, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx29(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs18(Stack7, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx29(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx29(
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
            /* @__PURE__ */ jsx29(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx29(
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
            /* @__PURE__ */ jsx29(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx29(
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
            /* @__PURE__ */ jsx29(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx29(
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
            /* @__PURE__ */ jsx29(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx29(
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
            /* @__PURE__ */ jsx29(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx29(
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
            /* @__PURE__ */ jsx29(HStack6, { spacing: 4, children: /* @__PURE__ */ jsx29(
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
          /* @__PURE__ */ jsx29(GridItem5, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx29(Divider5, {}) }),
          /* @__PURE__ */ jsx29(GridItem5, { children: /* @__PURE__ */ jsx29(
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
          /* @__PURE__ */ jsx29(GridItem5, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx29(CommonCard, { children: /* @__PURE__ */ jsx29(
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
import { jsx as jsx30 } from "react/jsx-runtime";
var Form = (props) => {
  let { typeSettings } = props;
  return /* @__PURE__ */ jsx30(Success3, { typeSettings });
};

// src/app/routes/_admin.settings.users.customers.add/route.tsx
import { Fragment as Fragment8, jsx as jsx31, jsxs as jsxs19 } from "react/jsx-runtime";
function Add() {
  let typeSettings = settings.customers, navigate = useNavigate6();
  return /* @__PURE__ */ jsxs19(Fragment8, { children: [
    /* @__PURE__ */ jsx31(
      SettingsFormHeading,
      {
        title: typeSettings.titles.create,
        actionButton: {
          label: "Cancelar",
          buttonProps: {
            colorScheme: "gray",
            onClick: () => {
              navigate(URL_SETTINGS_CUSTOMERS_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx31(Form, { typeSettings })
  ] });
}

// src/app/routes/api.dxt.pedido.articulos.print_list.ts
var api_dxt_pedido_articulos_print_list_exports = {};
__export(api_dxt_pedido_articulos_print_list_exports, {
  action: () => action2,
  loader: () => loader3
});
async function loader3({ request, params }) {
  return await dxtPedidoGetArticulosPrintListEndpoint.get(request, params);
}
async function action2({ request, params }) {
  return await dxtPedidoSetArticulosPrintListEndpoint.post(request, params);
}

// src/app/routes/_admin.settings.users.$type._index/route.tsx
var route_exports4 = {};
__export(route_exports4, {
  default: () => Lists
});
import { useNavigate as useNavigate7, useParams as useParams3 } from "@remix-run/react";
import { Icon as Icon5 } from "@chakra-ui/react";
import AccountPlusIcon from "mdi-react/AccountPlusIcon.js";

// src/app/routes/_admin.settings.users.$type._index/components/loading.tsx
import { Box as Box10, Grid as Grid6, GridItem as GridItem6 } from "@chakra-ui/react";
import { jsx as jsx32, jsxs as jsxs20 } from "react/jsx-runtime";
var Loading3 = () => /* @__PURE__ */ jsx32(
  Box10,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs20(Grid6, { templateColumns: "1fr", gap: { base: 2, md: 4 }, children: [
      /* @__PURE__ */ jsx32(GridItem6, { children: /* @__PURE__ */ jsx32(FormInputSkeleton, {}) }),
      /* @__PURE__ */ jsx32(GridItem6, { children: /* @__PURE__ */ jsx32(FormInputSkeleton, {}) }),
      /* @__PURE__ */ jsx32(GridItem6, { children: /* @__PURE__ */ jsx32(FormTextareaSkeleton, { height: "400px" }) }),
      /* @__PURE__ */ jsx32(GridItem6, { children: /* @__PURE__ */ jsx32(FormInputSkeleton, {}) })
    ] })
  }
);

// src/app/routes/_admin.settings.users.$type._index/components/success.tsx
import { useMemo as useMemo5, useRef as useRef6, useState as useState9 } from "react";

// src/code.client/hooks/useSearchField.ts
import _5 from "lodash";
import { useState as useState7 } from "react";
function useSearchField(data, fieldsToFilter) {
  let [isFiltering, setIsFiltering] = useState7(!1), [filteredData, setFilteredData] = useState7(data);
  return { filteredData, handleSearchInputChange: (query) => {
    if (setIsFiltering(query != null && query !== ""), _5.isArray(data)) {
      let filterApplied = [...data];
      query != null && Array.isArray(data) && (filterApplied = _5.filter(data, (obj) => _5.some(fieldsToFilter, (prop) => String(_5.get(obj, prop)).toLowerCase().includes(query.toLowerCase())))), setFilteredData(filterApplied);
      return;
    } else if (_5.isObject(data)) {
      let filterApplied = { ...data };
      query != null && _5.forEach(data, (array, key) => {
        let filteredArray = _5.filter(array, (obj) => _5.some(fieldsToFilter, (prop) => String(_5.get(obj, prop)).toLowerCase().includes(query.toLowerCase())));
        filterApplied[key] = filteredArray;
      }), setFilteredData(filterApplied);
      return;
    }
    setFilteredData(data);
  }, isFiltering };
}

// src/app/routes/_admin.settings.users.$type._index/components/success.tsx
import {
  Box as Box11,
  Flex as Flex3,
  Grid as Grid7,
  GridItem as GridItem7,
  HStack as HStack8,
  Icon as Icon4,
  IconButton as IconButton3,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast as useToast4
} from "@chakra-ui/react";
import AccountCancelIcon2 from "mdi-react/AccountCancelIcon.js";
import AccountCheckIcon from "mdi-react/AccountCheckIcon.js";
import PencilIcon from "mdi-react/PencilIcon.js";
import TrashIcon from "mdi-react/TrashIcon.js";

// src/app/components/DeleteDialog.tsx
import { useRef as useRef4 } from "react";
import {
  AlertDialog as AlertDialog2,
  AlertDialogBody as AlertDialogBody2,
  AlertDialogContent as AlertDialogContent2,
  AlertDialogFooter as AlertDialogFooter2,
  AlertDialogHeader as AlertDialogHeader2,
  AlertDialogOverlay as AlertDialogOverlay2,
  Button as Button6
} from "@chakra-ui/react";
import { jsx as jsx33, jsxs as jsxs21 } from "react/jsx-runtime";
var DeleteDialog = ({
  isOpen,
  onClose,
  handleDeletion,
  message
}) => {
  let cancelRef = useRef4();
  return /* @__PURE__ */ jsx33(
    AlertDialog2,
    {
      isOpen,
      leastDestructiveRef: cancelRef,
      onClose,
      motionPreset: "slideInBottom",
      isCentered: !0,
      children: /* @__PURE__ */ jsx33(AlertDialogOverlay2, { children: /* @__PURE__ */ jsxs21(AlertDialogContent2, { children: [
        /* @__PURE__ */ jsx33(AlertDialogHeader2, { fontSize: "lg", fontWeight: "bold", children: message.title }),
        /* @__PURE__ */ jsx33(AlertDialogBody2, { children: message.body }),
        /* @__PURE__ */ jsxs21(AlertDialogFooter2, { children: [
          /* @__PURE__ */ jsx33(Button6, { ref: cancelRef, onClick: onClose, children: CANCEL }),
          /* @__PURE__ */ jsx33(Button6, { colorScheme: "red", onClick: handleDeletion, ml: 3, children: DELETE })
        ] })
      ] }) })
    }
  );
};

// src/code.client/hooks/usePagination.ts
import { useMemo as useMemo4 } from "react";
var DOTS_LEFT = "{left}", DOTS_RIGHT = "{right}", range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_11, idx) => idx + start);
}, usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => useMemo4(() => {
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
import { Button as Button7, HStack as HStack7, Icon as Icon2, IconButton, VStack } from "@chakra-ui/react";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon.js";
import ChevronRightIcon from "mdi-react/ChevronRightIcon.js";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon.js";
import { jsx as jsx34, jsxs as jsxs22 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs22(VStack, { children: [
    /* @__PURE__ */ jsx34(HStack7, { spacing: 1, wrap: "wrap", justifyContent: "center", children: paginationRange.map((pageNumber) => pageNumber === DOTS_LEFT || pageNumber === DOTS_RIGHT ? /* @__PURE__ */ jsx34(
      Icon2,
      {
        as: DotsHorizontalIcon,
        boxSize: 3
      },
      `page-${pageNumber}`
    ) : /* @__PURE__ */ jsx34(
      Button7,
      {
        colorScheme: pageNumber === currentPage ? "blue" : "gray",
        size: { base: "sm", md: "md" },
        onClick: () => onPageChange(pageNumber),
        children: pageNumber
      },
      `button-${pageNumber}`
    )) }),
    /* @__PURE__ */ jsxs22(HStack7, { children: [
      /* @__PURE__ */ jsx34(
        IconButton,
        {
          "aria-label": "Anterior",
          size: { base: "sm", md: "md" },
          onClick: onPrevious,
          isDisabled: currentPage === 1,
          children: /* @__PURE__ */ jsx34(Icon2, { as: ChevronLeftIcon })
        }
      ),
      /* @__PURE__ */ jsx34(
        IconButton,
        {
          "aria-label": "Siguiente",
          size: { base: "sm", md: "md" },
          onClick: onNext,
          isDisabled: currentPage === lastPage,
          children: /* @__PURE__ */ jsx34(Icon2, { as: ChevronRightIcon })
        }
      )
    ] })
  ] });
};

// src/app/components/SearchField.tsx
import { useRef as useRef5, useState as useState8 } from "react";
import {
  Icon as Icon3,
  Input as Input2,
  InputGroup as InputGroup2,
  InputLeftElement,
  InputRightElement
} from "@chakra-ui/react";
import CloseIcon from "mdi-react/CloseIcon.js";
import MagnifyIcon from "mdi-react/MagnifyIcon.js";
import { jsx as jsx35, jsxs as jsxs23 } from "react/jsx-runtime";
var SearchField = ({
  handleSearchInputChange,
  inputProps
}) => {
  let [searchValue, setSearchValue] = useState8(null), inputRef = useRef5(null), inputChangeRef = useRef5(), handleSearchReset = () => {
    setSearchValue(null), handleSearchInputChange(), inputChangeRef.current && clearTimeout(inputChangeRef.current), inputRef.current && inputRef.current.focus();
  };
  return /* @__PURE__ */ jsxs23(InputGroup2, { children: [
    /* @__PURE__ */ jsx35(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ jsx35(Icon3, { as: MagnifyIcon, boxSize: 4 }) }),
    /* @__PURE__ */ jsx35(
      Input2,
      {
        ref: inputRef,
        type: "text",
        name: "filter",
        placeholder: "Filtrar...",
        value: searchValue ?? "",
        onChange: (e) => {
          setSearchValue(e.target.value), inputChangeRef.current && clearTimeout(inputChangeRef.current), inputChangeRef.current = setTimeout(() => {
            handleSearchInputChange(e.target.value);
          }, 1e3);
        },
        ...inputProps
      }
    ),
    searchValue !== "" && searchValue != null ? /* @__PURE__ */ jsx35(InputRightElement, { cursor: "pointer", children: /* @__PURE__ */ jsx35(Icon3, { as: CloseIcon, onClick: handleSearchReset }) }) : /* @__PURE__ */ jsx35(InputRightElement, {})
  ] });
};

// src/app/components/TextWordBreak.tsx
import { Text } from "@chakra-ui/react";
import { jsx as jsx36 } from "react/jsx-runtime";
var TextWordBreak = ({
  children,
  breakType,
  props
}) => /* @__PURE__ */ jsx36(
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

// src/app/routes/_admin.settings.users.$type._index/components/success.tsx
import { Fragment as Fragment9, jsx as jsx37, jsxs as jsxs24 } from "react/jsx-runtime";
var Success4 = (props) => {
  let { stateData, retry, typeSettings } = props, app = useAppResources(), { isOpen, onOpen, onClose } = useDisclosure(), toast = useToast4(), selectedUser = useRef6(null), { filteredData, handleSearchInputChange } = useSearchField(stateData, [
    "screen_name",
    "username"
  ]), [currentPage, setCurrentPage] = useState9(1), PageSize = 10, currentTableData = useMemo5(() => {
    let firstPageIndex = (currentPage - 1) * PageSize, lastPageIndex = firstPageIndex + PageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData]), handleDeleteDialog = (id, username) => () => {
    selectedUser.current = { id, username }, onOpen();
  }, handleEdit = (id) => () => {
    app.navigate(pathParamsToUrl(typeSettings.editButtonNavigateTo, { id }));
  };
  return /* @__PURE__ */ jsxs24(Fragment9, { children: [
    /* @__PURE__ */ jsx37(
      DeleteDialog,
      {
        isOpen,
        onClose,
        handleDeletion: async () => {
          if (selectedUser.current != null) {
            let { id, username } = selectedUser.current;
            selectedUser.current = null;
            let result = await typeSettings.api.delete(id, { username }, app), finalResult = await promiseBasedToast({
              toast,
              result,
              messages: {
                success: { title: "Usuario eliminado" },
                error: { title: "Error al eliminar usuario" },
                loading: { title: "Eliminando usuario" }
              }
            }).then(() => {
              stateData.splice(
                stateData.findIndex((object12) => object12.id === id),
                1
              ), handleSearchInputChange();
            }).catch((e) => {
            });
            onClose();
          }
        },
        message: {
          title: "Eliminar usuario",
          body: "\xBFEst\xE1 seguro que desea eliminar este usuario? Esta acci\xF3n no se puede deshacer."
        }
      }
    ),
    /* @__PURE__ */ jsxs24(CommonCard, { children: [
      /* @__PURE__ */ jsx37(Box11, { sx: { pb: 4 }, children: /* @__PURE__ */ jsx37(SearchField, { handleSearchInputChange }) }),
      /* @__PURE__ */ jsx37(Box11, { children: /* @__PURE__ */ jsxs24(Table, { variant: "grayOverCard", size: "md", children: [
        /* @__PURE__ */ jsx37(Thead, { children: /* @__PURE__ */ jsx37(Tr, { children: /* @__PURE__ */ jsx37(
          Th,
          {
            sx: {
              p: { base: 2, md: 4 }
            },
            children: /* @__PURE__ */ jsxs24(
              Grid7,
              {
                templateColumns: {
                  base: "3fr 1fr 2fr",
                  md: "3fr 3fr 1fr 2fr"
                },
                gap: { base: 2, md: 4 },
                children: [
                  /* @__PURE__ */ jsx37(GridItem7, { children: "Nombre completo" }),
                  /* @__PURE__ */ jsx37(GridItem7, { sx: { display: { base: "none", md: "block" } }, children: "Nombre de usuario" }),
                  /* @__PURE__ */ jsx37(GridItem7, { textAlign: "center", children: "Estado" }),
                  /* @__PURE__ */ jsx37(GridItem7, {})
                ]
              }
            )
          }
        ) }) }),
        /* @__PURE__ */ jsx37(Tbody, { children: currentTableData.length > 0 && currentTableData.map((user) => /* @__PURE__ */ jsx37(Tr, { children: /* @__PURE__ */ jsx37(
          Td,
          {
            sx: {
              p: { base: 2, md: 4 }
            },
            children: /* @__PURE__ */ jsxs24(
              Grid7,
              {
                templateColumns: {
                  base: "3fr 1fr 2fr",
                  md: "3fr 3fr 1fr 2fr"
                },
                gap: { base: 2, md: 4 },
                alignItems: "center",
                children: [
                  /* @__PURE__ */ jsx37(GridItem7, { children: /* @__PURE__ */ jsx37(TextWordBreak, { breakType: "normal", children: user.screen_name }) }),
                  /* @__PURE__ */ jsx37(
                    GridItem7,
                    {
                      sx: { display: { base: "none", md: "block" } },
                      children: /* @__PURE__ */ jsx37(TextWordBreak, { breakType: "normal", children: user.username })
                    }
                  ),
                  /* @__PURE__ */ jsx37(GridItem7, { textAlign: "center", children: /* @__PURE__ */ jsx37(
                    Icon4,
                    {
                      as: user.habilitado_en_dxt && user.usuario_tango_existe && user.habilitado_en_tango === !0 ? AccountCheckIcon : AccountCancelIcon2,
                      boxSize: 6,
                      color: resolveUserStatusColor(user)
                    }
                  ) }),
                  /* @__PURE__ */ jsx37(GridItem7, { children: /* @__PURE__ */ jsxs24(HStack8, { justifyContent: "center", children: [
                    /* @__PURE__ */ jsx37(
                      IconButton3,
                      {
                        "aria-label": "Eliminar",
                        size: "sm",
                        colorScheme: "red",
                        onClick: handleDeleteDialog(
                          user.id,
                          user.username
                        ),
                        children: /* @__PURE__ */ jsx37(Icon4, { as: TrashIcon, boxSize: 4 })
                      }
                    ),
                    /* @__PURE__ */ jsx37(
                      IconButton3,
                      {
                        "aria-label": "Editar",
                        size: "sm",
                        colorScheme: "blue",
                        onClick: handleEdit(user.id),
                        children: /* @__PURE__ */ jsx37(Icon4, { as: PencilIcon, boxSize: 4 })
                      }
                    )
                  ] }) })
                ]
              }
            )
          }
        ) }, `row_${user.id}`)) })
      ] }) }),
      /* @__PURE__ */ jsx37(Flex3, { sx: { pt: 4, justifyContent: "center" }, children: /* @__PURE__ */ jsx37(
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
import { jsx as jsx38 } from "react/jsx-runtime";
var ListsUsers = (props) => {
  let { typeSettings } = props, { state, retry } = typeSettings.api.getAll();
  return state.map({
    loading: (_11) => /* @__PURE__ */ jsx38(Loading3, {}),
    error: ({ error }) => /* @__PURE__ */ jsx38(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx38(
      Success4,
      {
        stateData: state2.data,
        retry,
        typeSettings
      }
    )
  });
};

// src/app/routes/_admin.settings.users.$type._index/route.tsx
import { Fragment as Fragment10, jsx as jsx39, jsxs as jsxs25 } from "react/jsx-runtime";
function Lists() {
  let navigate = useNavigate7(), { type } = useParams3(), typeSettings = settings[type];
  return type != null && typeSettings != null ? /* @__PURE__ */ jsxs25(Fragment10, { children: [
    /* @__PURE__ */ jsx39(
      SettingsFormHeading,
      {
        title: typeSettings.titles.common,
        actionButton: {
          label: typeSettings.titles.create,
          buttonProps: {
            leftIcon: /* @__PURE__ */ jsx39(Icon5, { as: AccountPlusIcon }),
            onClick: () => {
              typeSettings.actionButtonNavigateTo != null && navigate(typeSettings.actionButtonNavigateTo);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx39(ListsUsers, { typeSettings })
  ] }) : /* @__PURE__ */ jsx39(
    CommonErrors,
    {
      error: "Tipo de lista no v\xE1lida",
      buttonProps: {
        label: "Volver a Configuraci\xF3n",
        colorScheme: "green",
        onClick: () => {
          navigate(URL_SETTINGS_PATH);
        }
      }
    }
  );
}

// src/app/routes/api.dxt.pedido.articulos.print_ids.ts
var api_dxt_pedido_articulos_print_ids_exports = {};
__export(api_dxt_pedido_articulos_print_ids_exports, {
  action: () => action3,
  loader: () => loader4
});
async function loader4({ request, params }) {
  return await dxtPedidoGetArticulosPrintIdsEndpoint.get(request, params);
}
var action3 = unimplementedApiResponse;

// src/app/routes/_admin.settings.users.vendors.add/route.tsx
var route_exports5 = {};
__export(route_exports5, {
  default: () => Add2
});
import { useNavigate as useNavigate8 } from "@remix-run/react";

// src/app/routes/_admin.settings.users.vendors.add/components/success.tsx
import { useEffect as useEffect9 } from "react";
import {
  Badge as Badge5,
  Box as Box12,
  Divider as Divider6,
  Grid as Grid8,
  GridItem as GridItem8,
  Heading as Heading5,
  HStack as HStack9,
  Stack as Stack8,
  useToast as useToast5
} from "@chakra-ui/react";
import { yupResolver as yupResolver4 } from "@hookform/resolvers/yup";
import { useForm as useForm4 } from "react-hook-form";

// src/app/routes/_admin.settings.users.vendors.add/validation.ts
import { useState as useState10 } from "react";
import * as yup5 from "yup";
import _6 from "lodash";
var useCustomValidationSchema4 = () => {
  let [passwordStatus, setPasswordStatus] = useState10(null), customValidationSchema = yup5.object({
    password: yup5.string().required("Ingrese una contrase\xF1a").test("password", "Formato de contrase\xF1a no v\xE1lido", (v) => {
      if (v != "" && v != null) {
        let newPasswordStatus = dxtPasswordStatus(v);
        return _6.isEqual(passwordStatus, newPasswordStatus) || setPasswordStatus(newPasswordStatus), yupVOValidation(VODXTPassword, v);
      }
      return !0;
    }),
    password_repeat: yup5.string().required("Repita la contrase\xF1a").test(
      "passwords-match",
      "Las contrase\xF1as no coinciden",
      function(value) {
        return this.parent.password === value;
      }
    )
  }).required();
  return { yupValidationSchema: commonValidationSchema.concat(customValidationSchema), passwordStatus };
};

// src/app/routes/_admin.settings.users.vendors.add/components/success.tsx
import { jsx as jsx40, jsxs as jsxs26 } from "react/jsx-runtime";
var Success5 = (props) => {
  let { typeSettings } = props, app = useAppResources(), toast = useToast5(), { yupValidationSchema: yupValidationSchema6, passwordStatus } = useCustomValidationSchema4(), { state: statePerfiles, result: resultPerfiles } = useTangoList({
    url: API_TANGO_PERFIL,
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
  } = useForm4({
    defaultValues: {
      habilitado_en_dxt: !0,
      puede_crear_pedido: !0,
      puede_editar_pedido: !0,
      ver_pedidos_cumplidos: !0,
      ver_sin_precio: !1,
      mostrar_mensaje_de_advertencia: !1,
      puede_anular_pedido: !1,
      borrar_pedido_al_anular: !1,
      aprobar_pedido_al_crear: !1
    },
    resolver: yupResolver4(yupValidationSchema6)
  }), watchPuedeAnularPedido = watch("puede_anular_pedido");
  useEffect9(() => {
    watchPuedeAnularPedido === !1 && resetField("borrar_pedido_al_anular", { defaultValue: !1 });
  }, [watchPuedeAnularPedido]);
  let disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx40("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let { password_repeat, ...data } = dataUnsafe;
    data.email === "" && delete data.email;
    let input = data, result = await typeSettings.api.post(input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: { title: "Usuario creado" },
        error: { title: "Ha ocurrido un error" },
        loading: { title: "Creando usuario" }
      }
    }).then(() => {
      app.navigate(URL_SETTINGS_VENDORS_PATH);
    }).catch((e) => {
      setError("root", { message: e });
    });
  }), children: /* @__PURE__ */ jsxs26(Box12, { children: [
    /* @__PURE__ */ jsx40(FormErrors, { errors }),
    /* @__PURE__ */ jsx40(CommonCard, { children: /* @__PURE__ */ jsxs26(
      Grid8,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx40(GridItem8, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx40(Heading5, { size: "sm", textTransform: "uppercase", children: "Informaci\xF3n del Vendedor" }) }),
          /* @__PURE__ */ jsxs26(GridItem8, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx40(
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
                  isLoading: stateRelationship instanceof FetchStateLoading
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
            stateRelationship instanceof FetchStateError && /* @__PURE__ */ jsx40(InlineError, { error: stateRelationship.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx40(GridItem8, { children: /* @__PURE__ */ jsx40(
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
          /* @__PURE__ */ jsx40(GridItem8, { children: /* @__PURE__ */ jsx40(
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
          /* @__PURE__ */ jsx40(GridItem8, { children: /* @__PURE__ */ jsx40(
            ControlledInput,
            {
              fieldProps: {
                name: "password",
                id: "password",
                type: "password"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Contrase\xF1a"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx40(GridItem8, { children: /* @__PURE__ */ jsx40(
            ControlledInput,
            {
              fieldProps: {
                name: "password_repeat",
                id: "password_repeat",
                type: "password"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Confirmaci\xF3n de Contrase\xF1a"
              },
              control
            }
          ) }),
          passwordStatus != null && /* @__PURE__ */ jsxs26(GridItem8, { colSpan: { md: 2 }, children: [
            passwordStatus.tooShort && /* @__PURE__ */ jsx40(Badge5, { colorScheme: "red", children: "Contrase\xF1a muy corta" }),
            passwordStatus.tooLong && /* @__PURE__ */ jsx40(Badge5, { colorScheme: "red", children: "Contrase\xF1a muy larga" }),
            passwordStatus.invalidCharsPresent && /* @__PURE__ */ jsx40(Badge5, { colorScheme: "red", children: "Evite caracteres no v\xE1lidos" })
          ] }),
          /* @__PURE__ */ jsx40(GridItem8, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx40(Divider6, {}) }),
          /* @__PURE__ */ jsxs26(GridItem8, { colSpan: { md: 2 }, children: [
            /* @__PURE__ */ jsx40(
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
            statePerfiles instanceof FetchStateError && /* @__PURE__ */ jsx40(InlineError, { error: statePerfiles.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx40(GridItem8, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx40(Divider6, {}) }),
          /* @__PURE__ */ jsx40(GridItem8, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx40(Heading5, { size: "sm", textTransform: "uppercase", children: "Estado" }) }),
          /* @__PURE__ */ jsx40(GridItem8, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx40(
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
          /* @__PURE__ */ jsx40(GridItem8, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx40(Divider6, {}) }),
          /* @__PURE__ */ jsx40(GridItem8, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx40(Heading5, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }) }),
          /* @__PURE__ */ jsx40(GridItem8, { children: /* @__PURE__ */ jsx40(
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
    /* @__PURE__ */ jsx40(CommonCard, { children: /* @__PURE__ */ jsxs26(
      Grid8,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx40(GridItem8, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx40(Heading5, { size: "sm", textTransform: "uppercase", children: "Pedidos" }) }),
          /* @__PURE__ */ jsx40(GridItem8, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsxs26(Stack8, { spacing: 4, direction: { base: "column" }, children: [
            /* @__PURE__ */ jsx40(HStack9, { spacing: 4, children: /* @__PURE__ */ jsx40(
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
            /* @__PURE__ */ jsx40(HStack9, { spacing: 4, children: /* @__PURE__ */ jsx40(
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
            /* @__PURE__ */ jsx40(HStack9, { spacing: 4, children: /* @__PURE__ */ jsx40(
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
            /* @__PURE__ */ jsx40(HStack9, { spacing: 4, children: /* @__PURE__ */ jsx40(
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
            /* @__PURE__ */ jsx40(HStack9, { spacing: 4, children: /* @__PURE__ */ jsx40(
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
            /* @__PURE__ */ jsx40(HStack9, { spacing: 4, children: /* @__PURE__ */ jsx40(
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
            /* @__PURE__ */ jsx40(HStack9, { spacing: 4, children: /* @__PURE__ */ jsx40(
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
          /* @__PURE__ */ jsx40(GridItem8, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx40(Divider6, {}) }),
          /* @__PURE__ */ jsx40(GridItem8, { children: /* @__PURE__ */ jsx40(
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
          /* @__PURE__ */ jsx40(GridItem8, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx40(CommonCard, { children: /* @__PURE__ */ jsx40(
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
import { jsx as jsx41 } from "react/jsx-runtime";
var Form2 = (props) => {
  let { typeSettings } = props;
  return /* @__PURE__ */ jsx41(Success5, { typeSettings });
};

// src/app/routes/_admin.settings.users.vendors.add/route.tsx
import { Fragment as Fragment11, jsx as jsx42, jsxs as jsxs27 } from "react/jsx-runtime";
function Add2() {
  let typeSettings = settings.vendors, navigate = useNavigate8();
  return /* @__PURE__ */ jsxs27(Fragment11, { children: [
    /* @__PURE__ */ jsx42(
      SettingsFormHeading,
      {
        title: typeSettings.titles.create,
        actionButton: {
          label: "Cancelar",
          buttonProps: {
            colorScheme: "gray",
            onClick: () => {
              navigate(URL_SETTINGS_VENDORS_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx42(Form2, { typeSettings })
  ] });
}

// src/app/routes/_authorized.orders.$client.add/route.tsx
var route_exports6 = {};
__export(route_exports6, {
  default: () => OrdersAdd
});

// src/app/routes/_authorized.orders.$client.add/components/loading.tsx
import { Fragment as Fragment12, jsx as jsx43 } from "react/jsx-runtime";
var Loading4 = () => /* @__PURE__ */ jsx43(Fragment12, { children: "Loading Skeletons here" });

// src/app/routes/_authorized.orders.$client.add/components/success.tsx
import { useState as useState12 } from "react";
import { Box as Box16 } from "@chakra-ui/react";
import { yupResolver as yupResolver5 } from "@hookform/resolvers/yup";
import _9 from "lodash";
import { FormProvider, useForm as useForm5 } from "react-hook-form";

// src/fake_data/edit_order.data.ts
var idArticulo = 1, fakeData = {
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
import { useNavigate as useNavigate9 } from "@remix-run/react";
import { Box as Box13, Flex as Flex4, HStack as HStack10, useColorModeValue as useColorModeValue2 } from "@chakra-ui/react";
import CloseIcon2 from "mdi-react/CloseIcon.js";
import FormatListCheckboxIcon from "mdi-react/FormatListCheckboxIcon.js";
import PlusIcon from "mdi-react/PlusIcon.js";

// src/app/components/ResponsiveIconButton.tsx
import {
  Button as Button8,
  Icon as Icon6,
  IconButton as IconButton4,
  useBreakpointValue as useBreakpointValue2
} from "@chakra-ui/react";
import { Fragment as Fragment13, jsx as jsx44 } from "react/jsx-runtime";
var ResponsiveIconButton = (props) => {
  let { text, icon, iconProps, sharedProps, buttonProps, iconButtonProps } = props, buttonInjection = useBreakpointValue2({
    base: /* @__PURE__ */ jsx44(
      IconButton4,
      {
        "aria-label": text,
        ...sharedProps,
        ...iconButtonProps,
        icon: /* @__PURE__ */ jsx44(Icon6, { as: icon, ...iconProps })
      }
    ),
    md: /* @__PURE__ */ jsx44(
      Button8,
      {
        ...sharedProps,
        ...buttonProps,
        ...icon && { leftIcon: /* @__PURE__ */ jsx44(Icon6, { as: icon, ...iconProps }) },
        children: text
      }
    )
  });
  return /* @__PURE__ */ jsx44(Fragment13, { children: buttonInjection });
};

// src/app/components/orders/OrdersAddNav.tsx
import { Fragment as Fragment14, jsx as jsx45, jsxs as jsxs28 } from "react/jsx-runtime";
var OrdersAddNav = (props) => {
  let navigate = useNavigate9(), { isDisabled, ...searchFieldProps } = props;
  return /* @__PURE__ */ jsx45(Fragment14, { children: /* @__PURE__ */ jsx45(
    Box13,
    {
      bg: useColorModeValue2("white", "blue.900"),
      sx: {
        px: 4,
        position: "sticky",
        zIndex: 1e3,
        top: 0
      },
      children: /* @__PURE__ */ jsxs28(Flex4, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxs28(HStack10, { spacing: { base: 2, sm: 3 }, alignItems: "center", children: [
          /* @__PURE__ */ jsx45(
            ResponsiveIconButton,
            {
              icon: PlusIcon,
              text: "Crear",
              sharedProps: {
                size: "sm",
                fontWeight: "400",
                colorScheme: "green",
                type: "submit",
                isDisabled
              },
              iconProps: {
                boxSize: {
                  base: 5,
                  md: 4
                }
              }
            }
          ),
          /* @__PURE__ */ jsx45(
            ResponsiveIconButton,
            {
              icon: CloseIcon2,
              text: "Cancelar",
              sharedProps: {
                size: "sm",
                fontWeight: "400",
                colorScheme: "red",
                isDisabled,
                onClick: () => {
                  navigate(URL_PEDIDOS_PATH);
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
          /* @__PURE__ */ jsx45(
            ResponsiveIconButton,
            {
              icon: FormatListCheckboxIcon,
              text: "Ver resumen",
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
        /* @__PURE__ */ jsx45(
          Flex4,
          {
            alignItems: "center",
            sx: {
              ms: { base: 2, sm: 3 }
            },
            children: /* @__PURE__ */ jsx45(SearchField, { ...searchFieldProps })
          }
        )
      ] })
    }
  ) });
};

// src/app/routes/_authorized.orders.$client.add/validation.ts
import * as yup6 from "yup";
var yupValidationSchema = yup6.object({
  alta: yup6.string().required("Ingrese fecha de Alta"),
  entrega: yup6.string().required(""),
  condicion_venta: yup6.number().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido"),
  tipo_de_asiento: yup6.number().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido"),
  transporte: yup6.number().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido"),
  talonario: yup6.number().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido"),
  deposito: yup6.number().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido"),
  bonificacion: yup6.string(),
  comentarios: yup6.string(),
  quantities: yup6.object().required()
}).required();

// src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx
import {
  Box as Box14,
  Collapse,
  Grid as Grid9,
  GridItem as GridItem9,
  Heading as Heading6,
  useDisclosure as useDisclosure2
} from "@chakra-ui/react";
import _7 from "lodash";
import { useFormContext, useWatch } from "react-hook-form";

// src/app/components/form_elements/ControlledTextarea.tsx
import {
  FormControl as FormControl5,
  FormHelperText as FormHelperText4,
  FormLabel as FormLabel4,
  Textarea
} from "@chakra-ui/react";
import { useController as useController5 } from "react-hook-form";
import { jsx as jsx46, jsxs as jsxs29 } from "react/jsx-runtime";
var ControlledTextarea = (props) => {
  let { fieldProps, formControlProps, formControlInnerProps, control } = props, { label, helperText, icon } = formControlInnerProps || {}, {
    field: { ref, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController5({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs29(FormControl5, { ...formControlProps, isInvalid: invalid, children: [
    label != null && /* @__PURE__ */ jsx46(
      FormLabel4,
      {
        htmlFor: fieldProps.name,
        sx: fieldProps.variant === "flushed" ? { fontSize: "sm", mb: 0 } : {},
        children: label
      }
    ),
    /* @__PURE__ */ jsx46(Textarea, { ...fieldProps, onChange, value, ref }),
    helperText != null && /* @__PURE__ */ jsx46(FormHelperText4, { children: helperText })
  ] });
};

// src/app/components/TextPrice.tsx
import { Text as Text2 } from "@chakra-ui/react";
import { Fragment as Fragment15, jsxs as jsxs30 } from "react/jsx-runtime";
function formatNumber(num) {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
var TextPrice = ({ precio, moneda, textProps }) => /* @__PURE__ */ jsxs30(Text2, { textAlign: "right", ...textProps, children: [
  moneda != null && moneda + " ",
  formatNumber(precio)
] }), TextPriceNative = ({
  precio,
  moneda,
  textProps
}) => /* @__PURE__ */ jsxs30(Fragment15, { children: [
  moneda != null && moneda + " ",
  formatNumber(precio)
] });

// src/app/routes/_authorized.orders.$client.add/components/OrderInfo.tsx
import { Fragment as Fragment16, jsx as jsx47, jsxs as jsxs31 } from "react/jsx-runtime";
var calculateTotals = (quantities, prices, discount) => {
  let total = 0;
  return _7.forOwn(quantities, (quantity, id) => {
    total += quantity * prices[id];
  }), total - total * discount / 100;
}, OrderInfo = (props) => {
  let { cabecera, auxData, disableForm, prices } = props, {
    control,
    formState: { isSubmitted, isSubmitting }
  } = useFormContext(), quantitiesWatch = useWatch({ control, name: "quantities" }), total = calculateTotals(quantitiesWatch, prices, cabecera.bonificacion), transporteOptions = buildSelectOptions({
    data: auxData.transportes,
    fieldsMap: {
      label: "nombre",
      value: "id"
    }
  }), condicionVentaOptions = buildSelectOptions({
    data: auxData.condiciones
  }), tipoAsientoOptions = buildSelectOptions({
    data: auxData.asientos,
    fieldsMap: { value: "tipo" }
  }), talonarioOptions = buildSelectOptions({
    data: auxData.talonarios
  }), depositoOptions = buildSelectOptions({
    data: auxData.depositos
  }), { isOpen, onToggle } = useDisclosure2({
    defaultIsOpen: !0
  });
  return /* @__PURE__ */ jsx47(Fragment16, { children: /* @__PURE__ */ jsx47(Box14, { children: /* @__PURE__ */ jsxs31(CommonCard, { children: [
    /* @__PURE__ */ jsxs31(
      Grid9,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        onClick: onToggle,
        cursor: "pointer",
        children: [
          /* @__PURE__ */ jsxs31(GridItem9, { children: [
            /* @__PURE__ */ jsx47(Heading6, { size: "xs", children: "Cliente:" }),
            /* @__PURE__ */ jsx47(Heading6, { size: "md", textTransform: "uppercase", sx: { mt: 1 }, children: cabecera.cliente })
          ] }),
          /* @__PURE__ */ jsxs31(GridItem9, { textAlign: { md: "end" }, children: [
            /* @__PURE__ */ jsxs31(Heading6, { textTransform: "uppercase", size: "xs", children: [
              "Total (Sin IVA) - Bonif. ",
              cabecera.bonificacion,
              "%"
            ] }),
            /* @__PURE__ */ jsx47(
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
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx47(Collapse, { in: isOpen, animateOpacity: !0, style: { overflow: "inherit" }, children: /* @__PURE__ */ jsxs31(
      Grid9,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        sx: { mt: 4 },
        children: [
          /* @__PURE__ */ jsx47(GridItem9, { children: /* @__PURE__ */ jsx47(
            ControlledInput,
            {
              fieldProps: {
                name: "alta",
                id: "alta",
                type: "text"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Alta"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx47(GridItem9, { children: /* @__PURE__ */ jsx47(
            ControlledSelect,
            {
              fieldProps: {
                name: "condicion_venta",
                id: "condicion_venta",
                placeholder: "Seleccione una condici\xF3n",
                options: condicionVentaOptions,
                noOptionsMessage(obj) {
                  return "No hay condiciones disponibles";
                },
                selectedOptionStyle: "check"
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
          /* @__PURE__ */ jsx47(GridItem9, { children: /* @__PURE__ */ jsx47(
            ControlledInput,
            {
              fieldProps: {
                name: "entrega",
                id: "entrega",
                type: "text"
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Entrega"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx47(GridItem9, { children: /* @__PURE__ */ jsx47(
            ControlledSelect,
            {
              fieldProps: {
                name: "tipo_de_asiento",
                id: "tipo_de_asiento",
                placeholder: "Seleccione un tipo de asiento",
                options: tipoAsientoOptions,
                noOptionsMessage(obj) {
                  return "No hay tipos disponibles";
                },
                selectedOptionStyle: "check"
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
          /* @__PURE__ */ jsx47(GridItem9, { children: /* @__PURE__ */ jsx47(
            ControlledSelect,
            {
              fieldProps: {
                name: "transporte",
                id: "transporte",
                placeholder: "Seleccione un transporte",
                options: transporteOptions,
                noOptionsMessage(obj) {
                  return "No hay transportes disponibles";
                },
                selectedOptionStyle: "check"
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
          /* @__PURE__ */ jsx47(GridItem9, { children: /* @__PURE__ */ jsx47(
            ControlledSelect,
            {
              fieldProps: {
                name: "talonario",
                id: "talonario",
                placeholder: "Seleccione un talonario",
                options: talonarioOptions,
                noOptionsMessage(obj) {
                  return "No hay talonarios disponibles";
                },
                selectedOptionStyle: "check"
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
          /* @__PURE__ */ jsx47(GridItem9, { children: /* @__PURE__ */ jsx47(
            ControlledSelect,
            {
              fieldProps: {
                name: "deposito",
                id: "deposito",
                placeholder: "Seleccione un dep\xF3sito",
                options: depositoOptions,
                noOptionsMessage(obj) {
                  return "No hay dep\xF3sitos disponibles";
                },
                selectedOptionStyle: "check"
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
          /* @__PURE__ */ jsx47(GridItem9, { children: /* @__PURE__ */ jsx47(
            ControlledInput,
            {
              fieldProps: {
                name: "bonificacion",
                id: "bonificacion",
                type: "text",
                htmlSize: 5,
                width: "auto",
                isReadOnly: !0
              },
              formControlProps: {
                isDisabled: disableForm
              },
              formControlInnerProps: {
                label: "Bonificaci\xF3n"
              },
              control
            }
          ) }),
          /* @__PURE__ */ jsx47(GridItem9, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx47(
            ControlledTextarea,
            {
              fieldProps: {
                name: "comentarios",
                id: "comentarios"
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
  ] }) }) });
};

// src/app/routes/_authorized.orders.$client.add/components/ProductsTable.tsx
import {
  forwardRef,
  useEffect as useEffect10,
  useRef as useRef7,
  useState as useState11
} from "react";
import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert as Alert4,
  AlertIcon as AlertIcon3,
  Badge as Badge6,
  Box as Box15,
  Heading as Heading7,
  useBreakpointValue as useBreakpointValue3,
  useColorModeValue as useColorModeValue3
} from "@chakra-ui/react";
import { useScroll } from "@use-gesture/react";
import _8 from "lodash";
import { useFormContext as useFormContext2, useWatch as useWatch2 } from "react-hook-form";
import { FixedSizeList as FixedSizeList2 } from "react-window";
import { Fragment as Fragment17, jsx as jsx48, jsxs as jsxs32 } from "react/jsx-runtime";
var CategoryAccordionButton = (props) => {
  let { control } = useFormContext2(), { categoryName, articulos } = props, categoryTotal = articulos?.map(({ id, precio }) => useWatch2({ control, name: `quantities.${id}` }) * precio), categorySum = _8.sum(categoryTotal);
  return /* @__PURE__ */ jsxs32(AccordionButton, { sx: { p: 0 }, children: [
    /* @__PURE__ */ jsx48(AccordionIcon, { sx: { me: 2 } }),
    /* @__PURE__ */ jsx48(Box15, { as: "span", flex: "1", textAlign: "left", children: /* @__PURE__ */ jsx48(
      Heading7,
      {
        size: ["sm", "md"],
        sx: {
          textTransform: "uppercase"
        },
        children: categoryName
      }
    ) }),
    categorySum != 0 && /* @__PURE__ */ jsx48(Box15, { children: /* @__PURE__ */ jsx48(Badge6, { variant: "subtle", colorScheme: "yellow", fontSize: "0.9em", children: /* @__PURE__ */ jsx48(TextPriceNative, { precio: categorySum, moneda: "$" }) }) })
  ] });
}, ProductsRow = (props) => {
  let { id, codigo, nombre, precio } = props.product, index = props.index, style = props.style, rowColor = useColorModeValue3(
    "var(--chakra-colors-yellow-100)",
    "var(--chakra-colors-green-900)"
  ), inputBorderColor = useColorModeValue3(
    "var(--chakra-colors-blackAlpha-800)",
    "var(--chakra-colors-whiteAlpha-300)"
  ), {
    control,
    register,
    formState: { isSubmitted, isSubmitting }
  } = useFormContext2(), productSum = useWatch2({ control, name: `quantities.${id}` }) * precio, inputFieldProps = {
    type: "number",
    min: 0,
    inputMode: "tel",
    size: 5,
    onKeyDown: (e) => {
      /^(\.|,|-|\+)$/.test(e.key) && e.preventDefault();
    },
    onChange: (e) => parseInt(e.target.value),
    onFocus: (e) => {
      e.target.select();
    },
    className: "quantity",
    style: {
      borderColor: inputBorderColor
    },
    disabled: isSubmitted || isSubmitting
  };
  return /* @__PURE__ */ jsxs32(
    "div",
    {
      className: "grid",
      style: { ...style, ...productSum && { backgroundColor: rowColor } },
      children: [
        /* @__PURE__ */ jsxs32("div", { className: "word-break-all", children: [
          codigo,
          " - ",
          nombre
        ] }),
        /* @__PURE__ */ jsx48("div", { className: "text-right hidden-on-base", children: precio != null && /* @__PURE__ */ jsx48(TextPriceNative, { precio, moneda: "$" }) }),
        /* @__PURE__ */ jsx48("div", { className: "text-center", children: /* @__PURE__ */ jsx48("input", { ...inputFieldProps, ...register(`quantities.${id}`) }) }),
        /* @__PURE__ */ jsx48("div", { className: "text-right", children: productSum != null && /* @__PURE__ */ jsx48(TextPriceNative, { precio: productSum, moneda: "$" }) })
      ]
    }
  );
}, emptyFunction = () => {
}, OuterElement = forwardRef(
  ({ onScroll, children }, forwardedRef) => {
    let containerRef = useRef7(null);
    return useScroll(
      () => {
        if (!(onScroll instanceof Function))
          return;
        let {
          clientWidth,
          clientHeight,
          scrollLeft,
          scrollTop,
          scrollHeight,
          scrollWidth
        } = document.documentElement;
        onScroll?.({
          currentTarget: {
            clientHeight,
            clientWidth,
            scrollLeft,
            addEventListener: emptyFunction,
            removeEventListener: emptyFunction,
            dispatchEvent: () => !1,
            scrollTop: scrollTop - (containerRef.current ? containerRef.current.getBoundingClientRect().top + scrollTop : 0),
            scrollHeight,
            scrollWidth
          }
        });
      },
      { target: window }
    ), forwardedRef != null && !(forwardedRef instanceof Function) && (forwardedRef.current = document.documentElement), /* @__PURE__ */ jsx48("div", { ref: containerRef, children });
  }
), InnerElement = ({
  children,
  ...rest
}) => {
  let rowColor = useColorModeValue3(
    "var(--chakra-colors-gray-200)",
    "var(--chakra-colors-black)"
  );
  return /* @__PURE__ */ jsx48(Fragment17, { children: /* @__PURE__ */ jsxs32("div", { ...rest, children: [
    /* @__PURE__ */ jsxs32(
      "div",
      {
        className: "grid heading",
        style: { backgroundColor: `${rowColor}` },
        children: [
          /* @__PURE__ */ jsx48("div", { children: /* @__PURE__ */ jsx48("strong", { children: "Art\xEDculo" }) }),
          /* @__PURE__ */ jsx48("div", { className: "text-center hidden-on-base", children: /* @__PURE__ */ jsx48("strong", { children: "Precio" }) }),
          /* @__PURE__ */ jsx48("div", { className: "text-center", children: /* @__PURE__ */ jsx48("strong", { children: "Cantidad" }) }),
          /* @__PURE__ */ jsx48("div", { className: "text-center", children: /* @__PURE__ */ jsx48("strong", { children: "Subtotal" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx48("div", { style: { position: "relative" }, children })
  ] }) });
}, Row = ({
  style,
  index,
  data
}) => {
  let product = data?.[index];
  return product && /* @__PURE__ */ jsx48(
    ProductsRow,
    {
      index,
      product,
      style
    },
    `product-row-${product.id}`
  );
}, ProductsTable = (props) => {
  let { disableForm, unfilteredProducts, filteredProducts, isFiltering } = props, [index, setIndex] = useState11(null), ITEM_HEIGHT = useBreakpointValue3(
    {
      base: 70,
      md: 46
    },
    {
      fallback: "md"
    }
  ), totalCategories = _8.keys(filteredProducts).length, filledUpCategories = _8.keys(
    _8.pickBy(
      filteredProducts,
      (value) => Array.isArray(value) && value.length > 0
    )
  );
  return useEffect10(() => {
    setIndex(isFiltering ? _8.range(totalCategories) : null);
  }, [isFiltering]), filledUpCategories.length ? /* @__PURE__ */ jsx48(
    Accordion,
    {
      allowMultiple: !0,
      reduceMotion: !0,
      ...totalCategories === 1 ? { defaultIndex: [0] } : {},
      ...index != null && { index },
      onChange: setIndex,
      children: _8.map(filteredProducts, (articulos, categoria) => {
        let categoryName = categoria === "_" ? "Varios" : categoria.replace(/_/g, " ");
        return articulos.length ? /* @__PURE__ */ jsx48(AccordionItem, { sx: { border: "none" }, children: /* @__PURE__ */ jsxs32(
          CommonCard,
          {
            cardProps: {
              borderWidth: "1px"
            },
            children: [
              /* @__PURE__ */ jsx48(
                CategoryAccordionButton,
                {
                  categoryName,
                  articulos: unfilteredProducts[categoria]
                }
              ),
              /* @__PURE__ */ jsx48(AccordionPanel, { sx: { p: 0, mt: 4 }, children: /* @__PURE__ */ jsx48(
                FixedSizeList2,
                {
                  height: window.innerHeight,
                  outerElementType: OuterElement,
                  innerElementType: InnerElement,
                  overscanCount: 10,
                  itemCount: articulos?.length + 1,
                  itemSize: ITEM_HEIGHT,
                  itemData: articulos,
                  width: window.innerWidth,
                  children: Row
                }
              ) })
            ]
          }
        ) }, `accordion-${categoria}`) : /* @__PURE__ */ jsx48(React.Fragment, {}, `accordion-${categoria}`);
      })
    }
  ) : /* @__PURE__ */ jsxs32(Alert4, { status: "info", children: [
    /* @__PURE__ */ jsx48(AlertIcon3, {}),
    "La b\xFAsqueda no produjo resultados."
  ] });
};

// src/app/routes/_authorized.orders.$client.add/components/success.tsx
import { Fragment as Fragment18, jsx as jsx49, jsxs as jsxs33 } from "react/jsx-runtime";
var Success6 = (props) => {
  let { auxData } = props, [filteredData, setFilteredData] = useState12(
    fakeData.articulos
  ), quantities = {}, prices = {};
  _9.forOwn(fakeData.articulos, (articulos) => {
    articulos.forEach((product) => {
      prices[product.id] = product.precio, quantities[product.id] = "";
    });
  });
  let formMethods = useForm5({
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
    resolver: yupResolver5(yupValidationSchema)
  }), {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = formMethods, disableForm = isSubmitSuccessful || isSubmitting, onSubmit = (data) => {
    console.log(data);
  }, {
    filteredData: filteredProducts,
    handleSearchInputChange,
    isFiltering
  } = useSearchField(fakeData.articulos, ["codigo", "nombre"]);
  return /* @__PURE__ */ jsx49(Fragment18, { children: /* @__PURE__ */ jsx49(FormProvider, { ...formMethods, children: /* @__PURE__ */ jsxs33("form", { noValidate: !0, onSubmit: handleSubmit(onSubmit), children: [
    /* @__PURE__ */ jsx49(
      OrdersAddNav,
      {
        isDisabled: disableForm,
        handleSearchInputChange
      }
    ),
    /* @__PURE__ */ jsxs33(Box16, { sx: { my: 4 }, children: [
      /* @__PURE__ */ jsx49(FormErrors, { errors }),
      /* @__PURE__ */ jsx49(
        OrderInfo,
        {
          cabecera: fakeData.cabecera,
          auxData,
          disableForm,
          prices
        }
      ),
      /* @__PURE__ */ jsx49(
        ProductsTable,
        {
          disableForm,
          unfilteredProducts: fakeData.articulos,
          filteredProducts,
          isFiltering
        }
      )
    ] })
  ] }) }) });
};

// src/app/routes/_authorized.orders.$client.add/route.tsx
import { jsx as jsx50 } from "react/jsx-runtime";
function OrdersAdd() {
  let { state, retry } = useDXTApiFetch({
    url: API_TANGO_AUXILIARES,
    silent: !0
  });
  return state.map({
    loading: (_11) => /* @__PURE__ */ jsx50(Loading4, {}),
    error: ({ error }) => /* @__PURE__ */ jsx50(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_PEDIDOS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx50(Success6, { auxData: state2.data })
  });
}

// src/app/routes/api.dictionary.active_company.ts
var api_dictionary_active_company_exports = {};
__export(api_dictionary_active_company_exports, {
  action: () => action4,
  loader: () => loader5
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
var loader5 = unimplementedApiResponse;
async function action4({ request, params }) {
  return await setActiveCompanyEndpoint.post(request, params);
}

// src/app/routes/_admin.settings.lists.$type/route.tsx
var route_exports7 = {};
__export(route_exports7, {
  default: () => Lists2
});
import { useNavigate as useNavigate10, useParams as useParams4 } from "@remix-run/react";

// src/api-client/dxt/pedido/paths.ts
var API_DXT_PEDIDO_PRODUCT_PRINT = apiPath("/dxt/pedido/articulos/print_list"), API_DXT_PEDIDO_PRODUCT_SCREEN = apiPath("/dxt/pedido/articulos/screen_list"), API_DXT_PEDIDO_PRODUCT_PRINT_IDS = apiPath("/dxt/pedido/articulos/print_ids");

// src/api-client/dxt/pedido/requests.ts
var dxtPedidoArticulosPrintUpdateRequest = async (input, app) => await dxtApiRequest(
  {
    url: API_DXT_PEDIDO_PRODUCT_PRINT,
    data: input,
    method: "POST",
    silent: !0
  },
  app
), dxtPedidoArticulosScreenUpdateRequest = async (input, app) => await dxtApiRequest(
  {
    url: API_DXT_PEDIDO_PRODUCT_SCREEN,
    data: input,
    method: "POST",
    silent: !0
  },
  app
);

// src/code.client/crud_configs/lists.tsx
import { Fragment as Fragment19, jsx as jsx51, jsxs as jsxs34 } from "react/jsx-runtime";
var settings2 = {
  screen: {
    api: {
      getAll: () => useDXTApiFetch({
        url: API_DXT_PEDIDO_PRODUCT_SCREEN,
        silent: !0
      }),
      post: async (input, app) => dxtPedidoArticulosScreenUpdateRequest(input, app)
    },
    title: "Lista de Art\xEDculos para Visualizaci\xF3n",
    description: /* @__PURE__ */ jsxs34(Fragment19, { children: [
      "Ingrese en la lista los c\xF3digos de art\xEDculo en el \xF3rden en quedesea que aparezcan durante la creaci\xF3n o edici\xF3n de un pedido.",
      /* @__PURE__ */ jsx51("br", {}),
      /* @__PURE__ */ jsx51("br", {}),
      "Cualquier l\xEDnea que ingrese, que no contenga ning\xFAn c\xF3digo de art\xEDculo, ser\xE1 considerada como t\xEDtulo de grupo."
    ] })
  },
  print: {
    api: {
      getAll: () => useDXTApiFetch({
        url: API_DXT_PEDIDO_PRODUCT_PRINT,
        silent: !0
      }),
      post: async (input, app) => dxtPedidoArticulosPrintUpdateRequest(input, app)
    },
    title: "Lista de Art\xEDculos para Impresi\xF3n",
    description: /* @__PURE__ */ jsxs34(Fragment19, { children: [
      "Ingrese en la lista los c\xF3digos de art\xEDculo en el \xF3rden en que desea que aparezcan durante la impresi\xF3n de un pedido.",
      /* @__PURE__ */ jsx51("br", {}),
      /* @__PURE__ */ jsx51("br", {}),
      "Cualquier l\xEDnea que ingrese, que no contenga ning\xFAn c\xF3digo de art\xEDculo, ser\xE1 considerada como t\xEDtulo de grupo."
    ] })
  }
};

// src/app/routes/_admin.settings.lists.$type/components/loading.tsx
import { Box as Box17, Grid as Grid10, GridItem as GridItem10, Text as Text3 } from "@chakra-ui/react";
import { jsx as jsx52, jsxs as jsxs35 } from "react/jsx-runtime";
var Loading5 = (props) => {
  let { typeSettings } = props;
  return /* @__PURE__ */ jsx52(
    Box17,
    {
      width: "full",
      sx: {
        mt: 8,
        mb: 4
      },
      children: /* @__PURE__ */ jsxs35(
        Grid10,
        {
          templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
          alignItems: "start",
          gap: 4,
          children: [
            /* @__PURE__ */ jsx52(GridItem10, { children: /* @__PURE__ */ jsx52(FormTextareaSkeleton, { height: "380px" }) }),
            /* @__PURE__ */ jsx52(GridItem10, { children: /* @__PURE__ */ jsx52(Text3, { fontSize: "sm", children: typeSettings.description }) }),
            /* @__PURE__ */ jsx52(GridItem10, { children: /* @__PURE__ */ jsx52(FormInputSkeleton, {}) }),
            /* @__PURE__ */ jsx52(GridItem10, { children: /* @__PURE__ */ jsx52(FormInputSkeleton, {}) })
          ]
        }
      )
    }
  );
};

// src/app/routes/_admin.settings.lists.$type/components/success.tsx
import { Box as Box18, Grid as Grid11, GridItem as GridItem11, Text as Text4, useToast as useToast6 } from "@chakra-ui/react";
import { yupResolver as yupResolver6 } from "@hookform/resolvers/yup";
import { useForm as useForm6 } from "react-hook-form";

// src/app/routes/_admin.settings.lists.$type/validation.ts
import * as yup7 from "yup";
var yupValidationSchema2 = yup7.object({
  list: yup7.string().required("Debe ingresar al menos un c\xF3digo de art\xEDculo")
}).required();

// src/app/routes/_admin.settings.lists.$type/components/success.tsx
import { jsx as jsx53, jsxs as jsxs36 } from "react/jsx-runtime";
var Success7 = (props) => {
  let { stateData, typeSettings } = props, app = useAppResources(), toast = useToast6(), {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm6({
    defaultValues: {
      list: stateData?.join(`\r
`) || ""
    },
    resolver: yupResolver6(yupValidationSchema2)
  }), disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx53("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let input = { data: dataUnsafe.list.split(`
`) }, result = await typeSettings.api.post(input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: { title: "Lista actualizada" },
        error: { title: "Ha ocurrido un error" },
        loading: { title: "Actualizando lista" }
      }
    }).then(() => {
      app.navigate(URL_SETTINGS_PATH);
    }).catch((e) => {
      setError("root", { message: e });
    });
  }), children: /* @__PURE__ */ jsxs36(Box18, { children: [
    /* @__PURE__ */ jsx53(FormErrors, { errors }),
    /* @__PURE__ */ jsx53(CommonCard, { children: /* @__PURE__ */ jsxs36(
      Grid11,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "start",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx53(GridItem11, { children: /* @__PURE__ */ jsx53(
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
          /* @__PURE__ */ jsx53(GridItem11, { children: /* @__PURE__ */ jsx53(Text4, { fontSize: "sm", children: typeSettings.description }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx53(CommonCard, { children: /* @__PURE__ */ jsx53(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};

// src/app/routes/_admin.settings.lists.$type/components/index.tsx
import { jsx as jsx54 } from "react/jsx-runtime";
var FormLists = (props) => {
  let { typeSettings } = props, { state, retry } = typeSettings.api.getAll();
  return state.map({
    loading: (_11) => /* @__PURE__ */ jsx54(Loading5, { typeSettings }),
    error: ({ error }) => /* @__PURE__ */ jsx54(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx54(Success7, { stateData: state2.data, typeSettings })
  });
};

// src/app/routes/_admin.settings.lists.$type/route.tsx
import { Fragment as Fragment20, jsx as jsx55, jsxs as jsxs37 } from "react/jsx-runtime";
function Lists2() {
  let navigate = useNavigate10(), { type } = useParams4(), typeSettings = settings2[type];
  return type != null && typeSettings != null ? /* @__PURE__ */ jsxs37(Fragment20, { children: [
    /* @__PURE__ */ jsx55(
      SettingsFormHeading,
      {
        title: typeSettings.title,
        actionButton: {
          label: "Cancelar",
          buttonProps: {
            colorScheme: "gray",
            onClick: () => {
              navigate(URL_SETTINGS_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx55(FormLists, { typeSettings })
  ] }) : /* @__PURE__ */ jsx55(
    CommonErrors,
    {
      error: "Tipo de lista no v\xE1lida",
      buttonProps: {
        label: "Volver a Configuraci\xF3n",
        colorScheme: "green",
        onClick: () => {
          navigate(URL_SETTINGS_PATH);
        }
      }
    }
  );
}

// src/app/routes/_authorized.change_password/route.tsx
var route_exports8 = {};
__export(route_exports8, {
  default: () => ChangePassword
});
import { Fragment as Fragment21, jsx as jsx56 } from "react/jsx-runtime";
function ChangePassword() {
  return /* @__PURE__ */ jsx56(Fragment21, { children: "Change password" });
}

// src/app/routes/_authorized.orders._index/route.tsx
var route_exports9 = {};
__export(route_exports9, {
  default: () => OrdersList
});

// src/api-client/pedido/paths.ts
var API_PEDIDO_GET_ALL = apiPath("/pedido"), API_PEDIDO_GET_ONE = apiPath("/pedido/:id"), API_PEDIDO_GET_ALL_ROWS = apiPath("/pedido/renglones");

// src/app/routes/_authorized.orders._index/components/loading.tsx
import { Box as Box19, Grid as Grid12, GridItem as GridItem12 } from "@chakra-ui/react";
import { jsx as jsx57, jsxs as jsxs38 } from "react/jsx-runtime";
var Loading6 = () => /* @__PURE__ */ jsx57(
  Box19,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs38(Grid12, { templateColumns: "1fr", alignItems: "center", gap: 4, children: [
      /* @__PURE__ */ jsx57(GridItem12, { children: /* @__PURE__ */ jsx57(FormInputSkeleton, {}) }),
      /* @__PURE__ */ jsx57(GridItem12, { children: /* @__PURE__ */ jsx57(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx57(GridItem12, { children: /* @__PURE__ */ jsx57(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx57(GridItem12, { children: /* @__PURE__ */ jsx57(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx57(GridItem12, { children: /* @__PURE__ */ jsx57(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx57(GridItem12, { children: /* @__PURE__ */ jsx57(FormTextareaSkeleton, { height: "120px" }) }),
      /* @__PURE__ */ jsx57(GridItem12, { children: /* @__PURE__ */ jsx57(FormTextareaSkeleton, { height: "120px" }) })
    ] })
  }
);

// src/app/routes/_authorized.orders._index/components/success.tsx
import { useState as useState15 } from "react";

// src/app/components/orders/OrdersNav.tsx
import { useState as useState13 } from "react";
import { useNavigate as useNavigate11 } from "@remix-run/react";
import {
  Box as Box21,
  Flex as Flex5,
  HStack as HStack11,
  Icon as Icon8,
  Input as Input5,
  InputGroup as InputGroup5,
  InputLeftElement as InputLeftElement4,
  Tag,
  TagLabel,
  useColorModeValue as useColorModeValue4,
  useDisclosure as useDisclosure3
} from "@chakra-ui/react";
import MagnifyIcon2 from "mdi-react/MagnifyIcon.js";
import PlusIcon2 from "mdi-react/PlusIcon.js";
import PrinterIcon from "mdi-react/PrinterIcon.js";
import TrashIcon2 from "mdi-react/TrashIcon.js";

// src/app/components/orders/ClientsListModal.tsx
import { useRef as useRef9 } from "react";
import {
  Box as Box20,
  Link,
  List,
  ListIcon,
  ListItem as ListItem2,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton as Skeleton2,
  VStack as VStack2
} from "@chakra-ui/react";
import AccountCancelIcon3 from "mdi-react/AccountCancelIcon.js";
import AccountCheckIcon2 from "mdi-react/AccountCheckIcon.js";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as FixedSizeList3 } from "react-window";
import { Fragment as Fragment22, jsx as jsx58, jsxs as jsxs39 } from "react/jsx-runtime";
var ClientsListModal = (props) => {
  let { isOpen, onClose } = props, stateData = useRef9(), { state, retry } = useDXTApiFetch({
    url: API_DXT_VENDOR_CUSTOMERS,
    silent: !0
  }), SearchableList = () => {
    let { filteredData, handleSearchInputChange } = useSearchField(stateData.current ?? [], ["screen_name"]), itemHeight = 30, Row2 = ({ style, index, data }) => {
      let client = data?.[index];
      return client != null ? /* @__PURE__ */ jsx58(Fragment22, { children: /* @__PURE__ */ jsx58(ListItem2, { style, children: client.habilitado ? /* @__PURE__ */ jsx58(
        Link,
        {
          href: pathParamsToUrl(URL_PEDIDOS_ADD_PATH, {
            client: client.id
          }),
          children: /* @__PURE__ */ jsxs39(Box20, { children: [
            /* @__PURE__ */ jsx58(ListIcon, { as: AccountCheckIcon2, color: "green.400" }),
            client.screen_name
          ] })
        }
      ) : /* @__PURE__ */ jsxs39(Box20, { color: "gray.400", children: [
        /* @__PURE__ */ jsx58(ListIcon, { as: AccountCancelIcon3, color: "red.400" }),
        client.screen_name
      ] }) }, client.id) }) : /* @__PURE__ */ jsx58(Fragment22, {});
    };
    return /* @__PURE__ */ jsxs39(Fragment22, { children: [
      /* @__PURE__ */ jsx58(Box20, { sx: { pb: 4 }, children: /* @__PURE__ */ jsx58(SearchField, { handleSearchInputChange }) }),
      /* @__PURE__ */ jsx58(AutoSizer, { children: ({ height, width }) => /* @__PURE__ */ jsx58(
        FixedSizeList3,
        {
          height: height - 60,
          itemCount: filteredData.length ?? 0,
          itemSize: itemHeight,
          innerElementType: List,
          width,
          itemData: filteredData,
          children: Row2
        }
      ) })
    ] });
  };
  return /* @__PURE__ */ jsxs39(
    Modal,
    {
      isCentered: !0,
      isOpen,
      onClose,
      scrollBehavior: "inside",
      size: { base: "full", sm: "md", md: "lg" },
      children: [
        /* @__PURE__ */ jsx58(ModalOverlay, {}),
        /* @__PURE__ */ jsxs39(
          ModalContent,
          {
            sx: {
              maxHeight: "auto"
            },
            children: [
              /* @__PURE__ */ jsx58(ModalHeader, { children: "Seleccione el cliente" }),
              /* @__PURE__ */ jsx58(ModalCloseButton, {}),
              /* @__PURE__ */ jsx58(ModalBody, { minHeight: { base: "auto", sm: "420px !important" }, children: state.map({
                loading: (_11) => /* @__PURE__ */ jsxs39(VStack2, { spacing: 4, children: [
                  /* @__PURE__ */ jsx58(Skeleton2, { width: "full", height: "36px", borderRadius: "md" }),
                  /* @__PURE__ */ jsx58(Skeleton2, { width: "full", height: "250px", borderRadius: "md" })
                ] }),
                error: ({ error }) => /* @__PURE__ */ jsx58(
                  ApiErrors,
                  {
                    error,
                    retry,
                    cancelAndNavigateTo: URL_SETTINGS_PATH
                  }
                ),
                success: (state2) => (stateData.current = state2.data, /* @__PURE__ */ jsx58(SearchableList, {}))
              }) })
            ]
          }
        )
      ]
    }
  );
};

// src/app/components/orders/OrdersNav.tsx
import { Fragment as Fragment23, jsx as jsx59, jsxs as jsxs40 } from "react/jsx-runtime";
var OrdersNav = ({ selected }) => {
  let navigate = useNavigate11(), { isOpen, onOpen, onClose } = useDisclosure3(), [create, setCreate] = useState13(!1), handleCreate = () => {
    setCreate(!0), onOpen();
  }, handleOnClose = () => {
    onClose(), setCreate(!1);
  }, selectedInfo = selected == null || selected <= 0 ? void 0 : selected == 1 ? "1 seleccionado" : `${selected} seleccionados`;
  return /* @__PURE__ */ jsxs40(Fragment23, { children: [
    /* @__PURE__ */ jsx59(
      Box21,
      {
        bg: useColorModeValue4("white", "blue.900"),
        sx: {
          px: 4,
          position: "sticky",
          zIndex: 1e3,
          top: 0
        },
        children: /* @__PURE__ */ jsxs40(Flex5, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsxs40(HStack11, { spacing: { base: 2, sm: 3 }, alignItems: "center", children: [
            /* @__PURE__ */ jsx59(
              ResponsiveIconButton,
              {
                icon: TrashIcon2,
                text: "Eliminar",
                sharedProps: {
                  size: "sm",
                  fontWeight: "400",
                  colorScheme: "red"
                },
                iconProps: {
                  boxSize: {
                    base: 5,
                    md: 4
                  }
                }
              }
            ),
            /* @__PURE__ */ jsx59(
              ResponsiveIconButton,
              {
                icon: PrinterIcon,
                text: "Imprimir",
                sharedProps: {
                  size: "sm",
                  fontWeight: "400",
                  colorScheme: "blue"
                },
                iconProps: {
                  boxSize: {
                    base: 5,
                    md: 4
                  }
                }
              }
            ),
            /* @__PURE__ */ jsx59(
              ResponsiveIconButton,
              {
                icon: PlusIcon2,
                text: "Crear",
                sharedProps: {
                  size: "sm",
                  fontWeight: "400",
                  colorScheme: "green",
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
            ),
            selectedInfo != null && /* @__PURE__ */ jsxs40(Fragment23, { children: [
              /* @__PURE__ */ jsx59(
                Tag,
                {
                  display: { base: "none", sm: "inherited" },
                  height: 8,
                  borderRadius: 40,
                  size: "md",
                  variant: "solid",
                  colorScheme: "blue",
                  children: /* @__PURE__ */ jsx59(TagLabel, { marginX: 1, children: selectedInfo })
                }
              ),
              /* @__PURE__ */ jsx59(
                Tag,
                {
                  display: { base: "inherited", sm: "none" },
                  height: 8,
                  borderRadius: 40,
                  size: "md",
                  variant: "solid",
                  colorScheme: "blue",
                  children: /* @__PURE__ */ jsx59(TagLabel, { marginX: 1, children: selected })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx59(Flex5, { alignItems: "center", marginLeft: 4, children: /* @__PURE__ */ jsx59(HStack11, { spacing: { base: 2, md: 4 }, children: /* @__PURE__ */ jsx59(Box21, { children: /* @__PURE__ */ jsxs40(InputGroup5, { children: [
            /* @__PURE__ */ jsx59(InputLeftElement4, { pointerEvents: "none", children: /* @__PURE__ */ jsx59(Icon8, { as: MagnifyIcon2 }) }),
            /* @__PURE__ */ jsx59(Input5, { type: "text", placeholder: "Filtrar..." })
          ] }) }) }) })
        ] })
      }
    ),
    create && /* @__PURE__ */ jsx59(ClientsListModal, { isOpen, onClose: handleOnClose })
  ] });
};

// src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx
import { useCallback as useCallback2, useState as useState14 } from "react";
import {
  Alert as Alert7,
  AlertDescription as AlertDescription5,
  AlertIcon as AlertIcon6,
  Box as Box23,
  Checkbox,
  Collapse as Collapse2,
  Grid as Grid15,
  GridItem as GridItem15,
  Heading as Heading9,
  Table as Table3,
  TableContainer as TableContainer2,
  Tbody as Tbody3,
  Td as Td3,
  Text as Text6,
  Tr as Tr3,
  useColorModeValue as useColorModeValue5
} from "@chakra-ui/react";

// src/app/components/BadgePedidosEstado.tsx
import { Badge as Badge7 } from "@chakra-ui/react";

// src/texts/pedidos.ts
var PEDIDO_INVALIDO = "Inv\xE1lido", PEDIDO_INGRESADO = "Ingresado", PEDIDO_APROBADO = "Visto", PEDIDO_CUMPLIDO = "Cumplido", PEDIDO_CERRADO = "Cerrado", PEDIDO_ANULADO = "Anulado";

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
function numberToEstadoPedido(value) {
  if (!Number.isFinite(value))
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
import { jsx as jsx60 } from "react/jsx-runtime";
var BadgePedidosEstado = ({ estado }) => {
  let name = getEstadoPedidoText(estado), colorScheme = getEstadoPedidoColor(estado);
  return /* @__PURE__ */ jsx60(Badge7, { fontSize: "1em", variant: "solid", colorScheme, lineHeight: "1.5em", children: name });
};

// src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesEmpty.tsx
import {
  Alert as Alert5,
  AlertDescription as AlertDescription3,
  AlertIcon as AlertIcon4
} from "@chakra-ui/react";
import { jsx as jsx61, jsxs as jsxs41 } from "react/jsx-runtime";
var RenglonesEmpty = () => /* @__PURE__ */ jsxs41(Alert5, { status: "warning", children: [
  /* @__PURE__ */ jsx61(AlertIcon4, {}),
  /* @__PURE__ */ jsx61(AlertDescription3, { children: "El pedido no cuenta con productos." })
] });

// src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesError.tsx
import { Alert as Alert6, AlertDescription as AlertDescription4, AlertIcon as AlertIcon5 } from "@chakra-ui/react";
import { jsx as jsx62, jsxs as jsxs42 } from "react/jsx-runtime";
var RenglonesError = () => /* @__PURE__ */ jsxs42(Alert6, { status: "error", children: [
  /* @__PURE__ */ jsx62(AlertIcon5, {}),
  /* @__PURE__ */ jsx62(AlertDescription4, { children: "Ocurri\xF3 un error al cargar los detalles del pedido." })
] });

// src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesLoading.tsx
import { Box as Box22, Grid as Grid13, GridItem as GridItem13 } from "@chakra-ui/react";
import { jsx as jsx63, jsxs as jsxs43 } from "react/jsx-runtime";
var RenglonesLoading = () => /* @__PURE__ */ jsx63(
  Box22,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs43(Grid13, { templateColumns: "1fr", alignItems: "center", gap: 2, children: [
      /* @__PURE__ */ jsx63(GridItem13, { children: /* @__PURE__ */ jsx63(FormInputSkeleton, { height: "20px" }) }),
      /* @__PURE__ */ jsx63(GridItem13, { children: /* @__PURE__ */ jsx63(FormInputSkeleton, { height: "20px" }) }),
      /* @__PURE__ */ jsx63(GridItem13, { children: /* @__PURE__ */ jsx63(FormInputSkeleton, { height: "20px" }) }),
      /* @__PURE__ */ jsx63(GridItem13, { children: /* @__PURE__ */ jsx63(FormInputSkeleton, { height: "20px" }) })
    ] })
  }
);

// src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx
import {
  Grid as Grid14,
  GridItem as GridItem14,
  Heading as Heading8,
  Table as Table2,
  TableContainer,
  Tbody as Tbody2,
  Td as Td2,
  Text as Text5,
  Th as Th2,
  Thead as Thead2,
  Tr as Tr2
} from "@chakra-ui/react";

// src/domain/articulo/utils/index.ts
function formatNombreArticulo(nombre, descriptionAdicional) {
  let adicional = (descriptionAdicional ?? "").trim(), result = nombre.trim();
  return adicional.length > 0 && (result = `${result} (${adicional})`.trim()), result;
}

// src/app/routes/_authorized.orders._index/components/PedidoList/RenglonesPedido.tsx
import { jsx as jsx64, jsxs as jsxs44 } from "react/jsx-runtime";
var RenglonesPedido = ({
  nro_pedido,
  renglones
}) => /* @__PURE__ */ jsx64(TableContainer, { sx: { p: 0, m: 0 }, children: /* @__PURE__ */ jsxs44(
  Table2,
  {
    variant: "stripedHoverOverCard",
    colorScheme: "gray",
    size: "sm",
    borderWidth: "1px",
    children: [
      /* @__PURE__ */ jsx64(Thead2, { children: /* @__PURE__ */ jsx64(Tr2, { children: /* @__PURE__ */ jsx64(Th2, { sx: { py: 2 }, children: /* @__PURE__ */ jsxs44(
        Grid14,
        {
          templateColumns: { base: "1fr 1fr 1fr", md: "4fr 1fr 1fr 1fr" },
          gap: 6,
          children: [
            /* @__PURE__ */ jsx64(GridItem14, { children: /* @__PURE__ */ jsx64(Heading8, { fontSize: { base: "xs", md: "sm" }, children: "Art\xEDculo" }) }),
            /* @__PURE__ */ jsx64(
              GridItem14,
              {
                sx: {
                  display: { base: "none", md: "block" }
                },
                children: /* @__PURE__ */ jsx64(
                  Heading8,
                  {
                    fontSize: { base: "xs", md: "sm" },
                    textAlign: "center",
                    children: "Precio"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx64(GridItem14, { children: /* @__PURE__ */ jsx64(
              Heading8,
              {
                fontSize: { base: "xs", md: "sm" },
                textAlign: "center",
                children: "Cantidad"
              }
            ) }),
            /* @__PURE__ */ jsx64(GridItem14, { children: /* @__PURE__ */ jsx64(
              Heading8,
              {
                fontSize: { base: "xs", md: "sm" },
                textAlign: "center",
                children: "Subtotal"
              }
            ) })
          ]
        }
      ) }) }) }),
      /* @__PURE__ */ jsx64(Tbody2, { children: renglones.map(
        ({ id_articulo, nombre_articulo, descripcion_adicional, precio, cantidad, subtotal }) => /* @__PURE__ */ jsx64(Tr2, { children: /* @__PURE__ */ jsx64(Td2, { children: /* @__PURE__ */ jsxs44(
          Grid14,
          {
            templateColumns: {
              base: "1fr 1fr 1fr",
              md: "4fr 1fr 1fr 1fr"
            },
            gap: 6,
            children: [
              /* @__PURE__ */ jsx64(GridItem14, { children: /* @__PURE__ */ jsx64(TextWordBreak, { children: formatNombreArticulo(nombre_articulo, descripcion_adicional) }) }),
              /* @__PURE__ */ jsx64(
                GridItem14,
                {
                  sx: {
                    display: { base: "none", md: "block" }
                  },
                  children: /* @__PURE__ */ jsx64(TextPrice, { precio })
                }
              ),
              /* @__PURE__ */ jsx64(GridItem14, { children: /* @__PURE__ */ jsx64(Text5, { textAlign: "center", children: cantidad }) }),
              /* @__PURE__ */ jsx64(GridItem14, { children: /* @__PURE__ */ jsx64(TextPrice, { precio: subtotal, moneda: "$" }) })
            ]
          }
        ) }) }, `details-${nro_pedido}-${id_articulo}`)
      ) })
    ]
  }
) });

// src/app/routes/_authorized.orders._index/components/PedidoList/index.tsx
import { Fragment as Fragment24, jsx as jsx65, jsxs as jsxs45 } from "react/jsx-runtime";
function PedidoList({ pedidos, handleSelect }) {
  let { state: stateRenglones } = useDXTApiFetch({
    url: API_PEDIDO_GET_ALL_ROWS,
    silent: !0,
    transformResponse: (data) => (Object.values(data).forEach(
      (rows) => {
        Array.isArray(rows) && rows.sort((a, b) => a.renglon - b.renglon);
      }
    ), data)
  }), [isOpen, setIsOpen] = useState14({}), handleToggleDetails = useCallback2(
    (id) => {
      setIsOpen((prev_state) => ({ [id]: !prev_state[id] }));
    },
    [isOpen]
  );
  return /* @__PURE__ */ jsx65(TableContainer2, { sx: { p: 0, m: 0 }, children: /* @__PURE__ */ jsx65(
    Table3,
    {
      variant: "stripedOverCard",
      colorScheme: "gray",
      size: "md",
      sx: {
        borderCollapse: "separate",
        borderSpacing: "0 1rem"
      },
      children: /* @__PURE__ */ jsx65(Tbody3, { children: pedidos.map(
        ({
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
        }) => /* @__PURE__ */ jsx65(Tr3, { children: /* @__PURE__ */ jsxs45(
          Td3,
          {
            sx: {
              py: 6,
              position: "relative",
              borderTopWidth: { base: "3px", md: "8px" },
              borderTopStyle: "solid",
              borderTopColor: `${getEstadoPedidoColor(estado, ".500 !important")}`
            },
            children: [
              /* @__PURE__ */ jsx65(
                Box23,
                {
                  sx: {
                    position: "absolute",
                    right: 5,
                    top: 5
                  },
                  children: /* @__PURE__ */ jsx65(
                    Checkbox,
                    {
                      size: "lg",
                      colorScheme: "green",
                      sx: {
                        borderColor: useColorModeValue5("gray.800", "white")
                      },
                      onChange: (e) => {
                        handleSelect(e.target.checked ? 1 : -1);
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs45(
                Grid15,
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
                    handleToggleDetails(id);
                  },
                  children: [
                    /* @__PURE__ */ jsxs45(GridItem15, { children: [
                      /* @__PURE__ */ jsx65(Heading9, { size: "sm", children: "Pedido" }),
                      /* @__PURE__ */ jsx65(Text6, { children: numero_pedido })
                    ] }),
                    /* @__PURE__ */ jsxs45(GridItem15, { children: [
                      /* @__PURE__ */ jsx65(Heading9, { size: "sm", children: "Estado" }),
                      /* @__PURE__ */ jsx65(BadgePedidosEstado, { estado })
                    ] }),
                    /* @__PURE__ */ jsxs45(GridItem15, { children: [
                      /* @__PURE__ */ jsx65(Heading9, { size: "sm", children: "Emisi\xF3n" }),
                      /* @__PURE__ */ jsx65(Text6, { children: dateToLocale(fecha_emision) })
                    ] }),
                    /* @__PURE__ */ jsxs45(GridItem15, { children: [
                      /* @__PURE__ */ jsx65(Heading9, { size: "sm", children: "Entrega" }),
                      /* @__PURE__ */ jsx65(Text6, { children: dateToLocale(fecha_entrega) })
                    ] }),
                    /* @__PURE__ */ jsxs45(GridItem15, { children: [
                      /* @__PURE__ */ jsx65(Heading9, { size: "sm", children: "Cliente" }),
                      /* @__PURE__ */ jsx65(TextWordBreak, { children: `${codigo_cliente} - ${nombre_cliente}` })
                    ] }),
                    /* @__PURE__ */ jsxs45(GridItem15, { children: [
                      /* @__PURE__ */ jsx65(Heading9, { size: "sm", children: "Vendedor" }),
                      /* @__PURE__ */ jsx65(TextWordBreak, { children: codigo_vendedor != null && nombre_vendedor != null ? `${codigo_vendedor} - ${nombre_vendedor}` : NONE_M })
                    ] }),
                    /* @__PURE__ */ jsxs45(GridItem15, { children: [
                      /* @__PURE__ */ jsx65(Heading9, { size: "sm", children: "Transporte" }),
                      /* @__PURE__ */ jsx65(TextWordBreak, { children: codigo_transporte != null && nombre_transporte != null ? `${codigo_transporte} - ${nombre_transporte}` : NONE_M })
                    ] }),
                    /* @__PURE__ */ jsxs45(GridItem15, { children: [
                      /* @__PURE__ */ jsxs45(
                        Heading9,
                        {
                          size: "md",
                          sx: {
                            textTransform: "uppercase",
                            color: estado === 2 /* APROBADO */ && "green.400"
                          },
                          children: [
                            "Total",
                            descuento != null && /* @__PURE__ */ jsxs45(Fragment24, { children: [
                              " ",
                              `-${descuento}%`
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx65(
                        Heading9,
                        {
                          size: "md",
                          sx: {
                            fontWeight: "bolder",
                            color: estado === 2 /* APROBADO */ && "green.400"
                          },
                          children: /* @__PURE__ */ jsx65(TextPriceNative, { precio: total, moneda: "$" })
                        }
                      )
                    ] }),
                    comentarios != null && comentarios.length > 0 && /* @__PURE__ */ jsx65(
                      GridItem15,
                      {
                        colSpan: {
                          base: 2,
                          md: 4
                        },
                        children: /* @__PURE__ */ jsxs45(Alert7, { status: "info", children: [
                          /* @__PURE__ */ jsx65(AlertIcon6, {}),
                          /* @__PURE__ */ jsx65(AlertDescription5, { children: comentarios })
                        ] })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx65(Box23, { children: /* @__PURE__ */ jsx65(Collapse2, { in: isOpen[id], animateOpacity: !0, children: /* @__PURE__ */ jsxs45(Box23, { sx: { mt: 6 }, children: [
                stateRenglones.isLoading() && /* @__PURE__ */ jsx65(RenglonesLoading, {}),
                stateRenglones.isError() && /* @__PURE__ */ jsx65(RenglonesError, {}),
                stateRenglones.isSuccess() && Array.isArray(stateRenglones.data?.[id]) ? /* @__PURE__ */ jsx65(
                  RenglonesPedido,
                  {
                    nro_pedido: numero_pedido,
                    renglones: stateRenglones.data[id]
                  }
                ) : /* @__PURE__ */ jsx65(RenglonesEmpty, {})
              ] }) }) }, `pedido-details-${numero_pedido}`)
            ]
          }
        ) }, `pedido-${numero_pedido}`)
      ) })
    }
  ) });
}

// src/app/routes/_authorized.orders._index/components/success.tsx
import { Fragment as Fragment25, jsx as jsx66, jsxs as jsxs46 } from "react/jsx-runtime";
var Success8 = (props) => {
  let { pedidos } = props, [selected, setSelected] = useState15(0);
  return /* @__PURE__ */ jsxs46(Fragment25, { children: [
    /* @__PURE__ */ jsx66(OrdersNav, { selected }),
    /* @__PURE__ */ jsx66(PedidoList, { pedidos, handleSelect: (operation) => {
      setSelected(selected + operation);
    } })
  ] });
};

// src/app/routes/_authorized.orders._index/route.tsx
import { jsx as jsx67 } from "react/jsx-runtime";
function OrdersList() {
  let { state, retry } = useDXTApiFetch({
    url: API_PEDIDO_GET_ALL,
    silent: !0
  });
  return state.map({
    loading: (_11) => /* @__PURE__ */ jsx67(Loading6, {}),
    error: ({ error }) => /* @__PURE__ */ jsx67(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_PEDIDOS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx67(Success8, { pedidos: state2.data })
  });
}

// src/app/routes/api.dxt.vendedor.cliente.ts
var api_dxt_vendedor_cliente_exports = {};
__export(api_dxt_vendedor_cliente_exports, {
  action: () => action5,
  loader: () => loader6
});

// src/code.server/api/validation/validators.ts
var paginationOffsetValidator = (v) => v != null ? new VOIntegerRange(v, 0, 1e9).valueOf() : void 0, paginationLimitValidator = (v) => v != null ? new VOIntegerRange(v, 1, 1e3).valueOf() : void 0, tangoIdValidator = (v) => new VOUInt32(v).valueOf();

// src/code.server/infrastucture/auxiliar/model_mappers/index.ts
var tangoClienteModelMapper = (m) => {
  let { [CLIENTE_ID_FIELD]: id, COD_CLIENT, HABILITADO } = m, screen_name = resolveScreenName(
    CLIENTE_NAME_COLUMNS,
    m,
    COD_CLIENT
  );
  return { id, screen_name, habilitado: HABILITADO };
}, tangoVendedorModelMapper = (m) => {
  let { [VENDEDOR_ID_FIELD]: id, COD_VENDED, INHABILITA } = m, screen_name = resolveScreenName(
    VENDEDOR_NAME_COLUMNS,
    m,
    COD_VENDED
  );
  return { id, screen_name, habilitado: !(INHABILITA ?? !1) };
}, tangoPerfilModelMapper = (m) => {
  let { [PERFIL_CODE_FIELD]: code, [PERFIL_ID_FIELD]: id, DESCRIPCIO } = m;
  return { code, id, name: DESCRIPCIO };
}, tangoTransporteModelMapper = (m) => {
  let { [TRANSPORTE_ID_FIELD]: id, [TRANSPORTE_CODE_FIELD]: codigoTransporte, NOMBRE_TRA } = m;
  return { id, name: NOMBRE_TRA ?? codigoTransporte };
}, tangoDepositoModelMapper = (m) => {
  let { [DEPOSITO_CODE_FIELD]: code, NOMBRE_SUC } = m;
  return { code, name: NOMBRE_SUC ?? code };
}, tangoCondicionModelMapper = (m) => {
  let { [CONDICION_ID_FIELD]: id, DESC_COND } = m;
  return { id, name: DESC_COND ?? id.toString() };
}, tangoAsientoModelMapper = (m) => {
  let { [ASIENTO_ID_FIELD]: id, TIPO_ASIEN: tipo, CONC_ASI, CONC_MOV } = m, name = CONC_ASI ?? "";
  return CONC_MOV != null && (name += " " + CONC_MOV), name == "" && (name = tipo ?? ""), { id, tipo: tipo ?? "", name };
}, tangoTalonarioModelMapper = (m) => {
  let { [TALONARIO_CODE_FIELD]: code, DESCRIP } = m;
  return { code, name: DESCRIP ?? code.toString() };
}, tangoAlicuotaModelMapper = (m) => {
  let { [ALICUOTA_CODE_FIELD]: code, DESCRIPCIO } = m;
  return { code, name: DESCRIPCIO ?? code.toString() };
}, tangoParametrosModelMapper = (m) => {
  let { PED_AUT_CO, PROX_NDOC } = m, idsPedidosAutomaticos = toBoolean(PED_AUT_CO, !1), proximoId = PROX_NDOC;
  if (proximoId == null || Number.isFinite(proximoId))
    throw new DXTException(200002 /* TANGO_DB_INVALID_DATA */, "tangoParametrosModelMapper");
  return {
    idsPedidosAutomaticos,
    proximoId
  };
};

// src/code.server/infrastucture/auxiliar/base.repositories.ts
var tangoParametrosRepository = createTangoRepository(TANGO_PARAMETROS_TABLE, TANGO_PARAMETROS_ID_FIELD, tangoParametrosModelMapper, tangoParametrosModelColumns), alicuotaRepository = createTangoRepository(ALICUOTA_TABLE, ALICUOTA_ID_FIELD, tangoAlicuotaModelMapper, alicuotaModelColumns), asientoRepository = createTangoRepository(ASIENTO_TABLE, ASIENTO_ID_FIELD, tangoAsientoModelMapper, asientoModelColumns), condicionRepository = createTangoRepository(CONDICION_TABLE, CONDICION_ID_FIELD, tangoCondicionModelMapper, condicionModelColumns), depositoRepository = createTangoRepository(DEPOSITO_TABLE, DEPOSITO_ID_FIELD, tangoDepositoModelMapper, depositoModelColumns), perfilRepository = createTangoRepository(PERFIL_TABLE, PERFIL_ID_FIELD, tangoPerfilModelMapper, perfilModelColumns), talonarioRepository = createTangoRepository(TALONARIO_TABLE, TALONARIO_ID_FIELD, tangoTalonarioModelMapper, talonarioModelColumns), transporteRepository = createTangoRepository(TRANSPORTE_TABLE, TRANSPORTE_ID_FIELD, tangoTransporteModelMapper, transporteModelColumns), vendedorRepository = createTangoRepository(VENDEDOR_TABLE, VENDEDOR_ID_FIELD, tangoVendedorModelMapper, vendedorModelColumns);

// src/code.server/infrastucture/auxiliar/cliente.repository.ts
var ClienteRepository = class extends TangoProvider {
  constructor() {
    super({
      mainTable: CLIENTE_TABLE,
      mainIdField: CLIENTE_ID_FIELD,
      columns: clienteModelColumns,
      sortField: "RAZON_SOCI"
    });
  }
  async getAllByVendor(vendorId) {
    let cacheKey = `byVendor_${vendorId}`, cachedData = await this.cache.getMetadata(cacheKey);
    if (cachedData)
      return cachedData;
    let { mainTable, columns } = this.config, result = (await (await this.getCompany())(mainTable).select(...columns ?? "*").where({
      [VENDEDOR_ID_FIELD]: vendorId
    })).map((m) => this.toResult(m));
    return await this.cache.setMetadata(cacheKey, result), result;
  }
  toResult(m) {
    return tangoClienteModelMapper(m);
  }
}, clienteRepository = new ClienteRepository();

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
  habilitado_en_dxt: (v) => new VOBoolean(v)
}, insertUserInputSchema = {
  ...updateUserInputSchema,
  password: (v) => new VODXTPassword(v)
}, deleteUserInputSchema = {
  username: (v) => new VONotEmptyString(v)
}, validateDeleteUserInput = (input) => validateInput(deleteUserInputSchema, input);

// src/domain/dxt/inputs/cliente.ts
var updateClienteInputSchema = updateUserInputSchema, insertClienteInputSchema = insertUserInputSchema, validateUpdateClienteInput = (input) => validateInput(updateClienteInputSchema, input), validateInsertClienteInput = (input) => validateInput(insertClienteInputSchema, input);

// src/domain/dxt/inputs/vendedor.ts
var updateVendedorInputSchema = updateUserInputSchema, insertVendedorInputSchema = insertUserInputSchema, validateUpdateVendedorInput = (input) => validateInput(updateVendedorInputSchema, input), validateInsertVendedorInput = (input) => validateInput(insertVendedorInputSchema, input);

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
  { validation: { params: { id: tangoIdValidator } } },
  async (req) => clienteToSafeOutput(await dxtClienteRepository.getById(req.validated.params.id))
), dxtClienteCreateEndpoint = createApiEndpoint(
  adminRootController,
  { validation: { body: validateInsertClienteInput } },
  async (req) => clienteToSafeOutput(await dxtClienteRepository.create(req.validated.body))
), dxtClienteUpdateEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id: tangoIdValidator },
      body: validateUpdateClienteInput
    }
  },
  async (req) => clienteToSafeOutput(await dxtClienteRepository.update(req.validated.params.id, req.validated.body))
), dxtClienteDeleteEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id: tangoIdValidator },
      body: validateDeleteUserInput
    }
  },
  async (req) => (await dxtClienteRepository.delete(req.validated.params.id, req.validated.body.username), { ok: !0 })
), dxtVendedorGetAllEndpoint = createDXTUserGetAllEndpoint(dxtVendedorRepository), dxtVendedorGetOneEndpoint = createApiEndpoint(
  adminRootController,
  { validation: { params: { id: tangoIdValidator } } },
  async (req) => vendedorToSafeOutput(await dxtVendedorRepository.getById(req.validated.params.id))
  //async (req): Promise<DXTVendedorResult> => vendedorToSafeOutput( await dxtVendedorRepository.getUserWithRelationsById(req.validated.params.id, false) ),
), dxtVendedorCreateEndpoint = createApiEndpoint(
  adminRootController,
  { validation: { body: validateInsertVendedorInput } },
  async (req) => vendedorToSafeOutput(await dxtVendedorRepository.create(req.validated.body))
), dxtVendedorUpdateEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id: tangoIdValidator },
      body: validateUpdateVendedorInput
    }
  },
  async (req) => vendedorToSafeOutput(await dxtVendedorRepository.update(req.validated.params.id, req.validated.body))
), dxtVendedorDeleteEndpoint = createApiEndpoint(
  adminRootController,
  {
    validation: {
      params: { id: tangoIdValidator },
      body: validateDeleteUserInput
    }
  },
  async (req) => (await dxtVendedorRepository.delete(req.validated.params.id, req.validated.body.username), { ok: !0 })
), dxtVendedorGetCustomersEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => {
    let { user } = req.auth, role = user.role.valueOf(), tangoId = user.tangoId?.valueOf();
    if (role !== 1 /* vendor */)
      throw new DXTException(101002 /* SELLER_ROLE_REQUIRED */);
    if (typeof tangoId != "number")
      throw new DXTException(0 /* UNEXPECTED_ERROR */, "dxtVendedorGetCustomersEndpoint");
    return await clienteRepository.getAllByVendor(tangoId);
  }
);

// src/app/routes/api.dxt.vendedor.cliente.ts
async function loader6({ request, params }) {
  return await dxtVendedorGetCustomersEndpoint.get(request, params);
}
var action5 = unimplementedApiResponse;

// src/app/routes/_admin.settings.company/route.tsx
var route_exports10 = {};
__export(route_exports10, {
  default: () => Company
});
import { useNavigate as useNavigate12 } from "@remix-run/react";

// src/app/routes/_admin.settings.company/components/success.tsx
import { useEffect as useEffect13 } from "react";
import { Box as Box24, Grid as Grid16, GridItem as GridItem16, useToast as useToast7 } from "@chakra-ui/react";
import { yupResolver as yupResolver7 } from "@hookform/resolvers/yup";
import { useForm as useForm7 } from "react-hook-form";

// src/api-client/company/paths.ts
var API_DICTIONARY = apiPath("/dictionary"), API_ACTIVE_COMPANY = apiPath("/dictionary/active_company");

// src/api-client/company/requests.tsx
var companyUpdateRequest = async (input, app) => await dxtApiRequest(
  {
    url: API_ACTIVE_COMPANY,
    params: input,
    method: "POST",
    silent: !0
  },
  app
);

// src/app/routes/_admin.settings.company/validation.ts
import * as yup8 from "yup";
var yupValidationSchema3 = yup8.object({
  company: yup8.string().required("Seleccione una empresa activa")
}).required();

// src/app/routes/_admin.settings.company/components/success.tsx
import { jsx as jsx68, jsxs as jsxs47 } from "react/jsx-runtime";
var Success9 = () => {
  let app = useAppResources(), toast = useToast7(), { state: stateDictionary, result: resultDictionary } = useTangoList({
    url: API_DICTIONARY,
    fieldsMap: {
      label: "name",
      value: "db_name",
      isActive: "is_active"
    }
  }), {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm7({
    defaultValues: {
      company: ""
    },
    resolver: yupResolver7(yupValidationSchema3)
  }), disableForm = isSubmitSuccessful || isSubmitting;
  return useEffect13(() => {
    if (stateDictionary instanceof FetchStateSuccess) {
      let selectedIndex = resultDictionary.findIndex(
        (x) => x.isActive === !0
      );
      selectedIndex >= 0 && reset({
        company: resultDictionary[selectedIndex].value
      });
    }
  }, [stateDictionary]), /* @__PURE__ */ jsx68("form", { noValidate: !0, onSubmit: handleSubmit(async (data) => {
    let input = {
      company: data.company
    }, result = await companyUpdateRequest(input, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: { title: "Empresa actualizada" },
        error: { title: "Ha ocurrido un error" },
        loading: { title: "Actualizando empresa" }
      }
    }).then(() => {
      app.navigate(URL_SETTINGS_PATH);
    }).catch((e) => {
      setError("root", { message: e });
    });
  }), children: /* @__PURE__ */ jsxs47(Box24, { children: [
    /* @__PURE__ */ jsx68(FormErrors, { errors }),
    /* @__PURE__ */ jsx68(CommonCard, { children: /* @__PURE__ */ jsxs47(
      Grid16,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsxs47(GridItem16, { children: [
            /* @__PURE__ */ jsx68(
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
            stateDictionary instanceof FetchStateError && /* @__PURE__ */ jsx68(InlineError, { error: stateDictionary.errorOrNull().error })
          ] }),
          /* @__PURE__ */ jsx68(GridItem16, {})
        ]
      }
    ) }),
    /* @__PURE__ */ jsx68(CommonCard, { children: /* @__PURE__ */ jsx68(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};

// src/app/routes/_admin.settings.company/components/index.tsx
import { jsx as jsx69 } from "react/jsx-runtime";
var FormCompany = () => /* @__PURE__ */ jsx69(Success9, {});

// src/app/routes/_admin.settings.company/route.tsx
import { Fragment as Fragment26, jsx as jsx70, jsxs as jsxs48 } from "react/jsx-runtime";
function Company() {
  let navigate = useNavigate12();
  return /* @__PURE__ */ jsxs48(Fragment26, { children: [
    /* @__PURE__ */ jsx70(
      SettingsFormHeading,
      {
        title: "Empresa",
        actionButton: {
          label: "Cancelar",
          buttonProps: {
            colorScheme: "gray",
            onClick: () => {
              navigate(URL_SETTINGS_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx70(FormCompany, {})
  ] });
}

// src/app/routes/_admin.settings._index/route.tsx
var route_exports11 = {};
__export(route_exports11, {
  default: () => Settings
});

// src/api-client/admin/paths.ts
var API_ADMIN_STATUS = apiPath("/admin/status");

// src/app/routes/_admin.settings._index/components/loading.tsx
import { Skeleton as Skeleton3, VStack as VStack3 } from "@chakra-ui/react";
import { Fragment as Fragment27, jsx as jsx71, jsxs as jsxs49 } from "react/jsx-runtime";
var Loading7 = () => /* @__PURE__ */ jsx71(Fragment27, { children: /* @__PURE__ */ jsxs49(VStack3, { spacing: 4, width: "full", children: [
  /* @__PURE__ */ jsx71(Skeleton3, { width: "full", height: "70px", borderRadius: "md" }),
  /* @__PURE__ */ jsx71(Skeleton3, { width: "full", height: "70px", borderRadius: "md" }),
  /* @__PURE__ */ jsx71(Skeleton3, { width: "full", height: "120px", borderRadius: "md" }),
  /* @__PURE__ */ jsx71(Skeleton3, { width: "full", height: "70px", borderRadius: "md" })
] }) });

// src/app/routes/_admin.settings._index/components/success.tsx
import { useNavigate as useNavigate13 } from "@remix-run/react";
import { Box as Box25, Card as Card3, CardBody as CardBody3, Grid as Grid18, GridItem as GridItem18, VStack as VStack4 } from "@chakra-ui/react";

// src/app/components/SettingsListButton.tsx
import { Button as Button9 } from "@chakra-ui/react";

// src/app/components/SettingsListItem.tsx
import {
  Badge as Badge8,
  Card as Card2,
  CardBody as CardBody2,
  Grid as Grid17,
  GridItem as GridItem17,
  Heading as Heading10,
  HStack as HStack12,
  Icon as Icon9
} from "@chakra-ui/react";
import CheckCircleIcon from "mdi-react/CheckCircleIcon.js";
import CloseCircleIcon from "mdi-react/CloseCircleIcon.js";
import { jsx as jsx72, jsxs as jsxs50 } from "react/jsx-runtime";
var SettingsListItem = (props) => {
  let { status, title, subtitle, actionButtonState, actionButtonOnClick } = props;
  return /* @__PURE__ */ jsx72(Card2, { children: /* @__PURE__ */ jsx72(CardBody2, { children: /* @__PURE__ */ jsxs50(
    Grid17,
    {
      templateColumns: { base: "1fr", md: "6fr 1fr" },
      alignItems: "center",
      gap: 4,
      children: [
        /* @__PURE__ */ jsx72(GridItem17, { children: /* @__PURE__ */ jsxs50(HStack12, { justifyContent: { base: "center", md: "start" }, children: [
          status != null && (status === 1 /* success */ ? /* @__PURE__ */ jsx72(Icon9, { as: CheckCircleIcon, color: "green.500", boxSize: 8 }) : /* @__PURE__ */ jsx72(Icon9, { as: CloseCircleIcon, color: "red.500", boxSize: 8 })),
          /* @__PURE__ */ jsxs50("div", { children: [
            /* @__PURE__ */ jsx72(Heading10, { size: "md", textTransform: "uppercase", children: title }),
            subtitle != null && /* @__PURE__ */ jsx72(Badge8, { colorScheme: "red", children: subtitle })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx72(GridItem17, { textAlign: { base: "center", md: "start" }, children: /* @__PURE__ */ jsx72(
          SettingsListButton,
          {
            buttonState: actionButtonState,
            onClick: actionButtonOnClick,
            children: "Configurar"
          }
        ) })
      ]
    }
  ) }) });
};

// src/app/components/SettingsListButton.tsx
import { jsx as jsx73 } from "react/jsx-runtime";
var SettingsListButton = (props) => {
  let { buttonState, onClick, children } = props;
  return /* @__PURE__ */ jsx73(
    Button9,
    {
      onClick,
      ...buttonState === 1 /* disabled */ ? {
        isDisabled: !0
      } : {
        colorScheme: "blue"
      },
      width: "full",
      children
    }
  );
};

// src/app/routes/_admin.settings._index/components/success.tsx
import { Fragment as Fragment28, jsx as jsx74, jsxs as jsxs51 } from "react/jsx-runtime";
var Success10 = (props) => {
  let { stateData } = props, navigate = useNavigate13(), configSuccessful = stateData.dictionary_ok && stateData.company_ok;
  return /* @__PURE__ */ jsx74(Fragment28, { children: /* @__PURE__ */ jsxs51(VStack4, { spacing: 4, width: "full", children: [
    /* @__PURE__ */ jsx74(Box25, { width: "full", children: /* @__PURE__ */ jsx74(
      SettingsListItem,
      {
        title: "Conexi\xF3n a Tango",
        subtitle: stateData.dictionary_error,
        status: stateData.dictionary_ok ? 1 /* success */ : 0 /* error */,
        actionButtonState: 0 /* enabled */,
        actionButtonOnClick: () => {
          navigate(URL_SETTINGS_TANGO_PATH);
        }
      }
    ) }),
    /* @__PURE__ */ jsx74(Box25, { width: "full", children: /* @__PURE__ */ jsx74(
      SettingsListItem,
      {
        title: "Empresa",
        subtitle: stateData.company_error,
        status: stateData.company_ok ? 1 /* success */ : 0 /* error */,
        actionButtonState: stateData.dictionary_ok ? 0 /* enabled */ : 1 /* disabled */,
        actionButtonOnClick: () => {
          navigate(URL_SETTINGS_COMPANY_PATH);
        }
      }
    ) }),
    /* @__PURE__ */ jsx74(Box25, { width: "full", children: /* @__PURE__ */ jsx74(Card3, { children: /* @__PURE__ */ jsx74(CardBody3, { children: /* @__PURE__ */ jsxs51(
      Grid18,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        gap: 4,
        children: [
          /* @__PURE__ */ jsx74(GridItem18, { textAlign: "center", children: /* @__PURE__ */ jsx74(
            SettingsListButton,
            {
              buttonState: configSuccessful ? 0 /* enabled */ : 1 /* disabled */,
              onClick: () => {
                navigate(URL_SETTINGS_CUSTOMERS_PATH);
              },
              children: "Gesti\xF3n de Clientes"
            }
          ) }),
          /* @__PURE__ */ jsx74(GridItem18, { textAlign: "center", children: /* @__PURE__ */ jsx74(
            SettingsListButton,
            {
              buttonState: configSuccessful ? 0 /* enabled */ : 1 /* disabled */,
              onClick: () => {
                navigate(URL_SETTINGS_VENDORS_PATH);
              },
              children: "Gesti\xF3n de Vendedores"
            }
          ) }),
          /* @__PURE__ */ jsx74(GridItem18, { textAlign: "center", children: /* @__PURE__ */ jsx74(
            SettingsListButton,
            {
              buttonState: configSuccessful ? 0 /* enabled */ : 1 /* disabled */,
              onClick: () => {
                navigate(URL_SETTINGS_ARTICULOS_SCREEN);
              },
              children: "Tablas para Visualizaci\xF3n"
            }
          ) }),
          /* @__PURE__ */ jsx74(GridItem18, { textAlign: "center", children: /* @__PURE__ */ jsx74(
            SettingsListButton,
            {
              buttonState: configSuccessful ? 0 /* enabled */ : 1 /* disabled */,
              onClick: () => {
                navigate(URL_SETTINGS_ARTICULOS_PRINT);
              },
              children: "Tablas para Impresi\xF3n"
            }
          ) })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx74(Box25, { width: "full", children: /* @__PURE__ */ jsx74(
      SettingsListItem,
      {
        title: "Correo Saliente y Sesiones",
        actionButtonState: 0 /* enabled */,
        actionButtonOnClick: () => {
          navigate(URL_SETTINGS_MISC_PATH);
        }
      }
    ) })
  ] }) });
};

// src/app/routes/_admin.settings._index/components/index.tsx
import { Fragment as Fragment29, jsx as jsx75 } from "react/jsx-runtime";
var SettingsHome = () => {
  let { state, retry } = useDXTApiFetch({
    url: API_ADMIN_STATUS,
    silent: !0
  });
  return /* @__PURE__ */ jsx75(Fragment29, { children: state.map({
    loading: (_11) => /* @__PURE__ */ jsx75(Loading7, {}),
    error: ({ error }) => /* @__PURE__ */ jsx75(ApiErrors, { error, retry }),
    success: (state2) => /* @__PURE__ */ jsx75(Success10, { stateData: state2.data })
  }) });
};

// src/app/routes/_admin.settings._index/route.tsx
import { jsx as jsx76 } from "react/jsx-runtime";
function Settings() {
  return /* @__PURE__ */ jsx76(SettingsHome, {});
}

// src/app/routes/_admin.settings.tango/route.tsx
var route_exports12 = {};
__export(route_exports12, {
  default: () => Tango
});
import { useNavigate as useNavigate14 } from "@remix-run/react";

// src/api-client/settings/paths.ts
var API_SETTINGS_DB = apiPath("/settings/db"), API_SETTINGS_MISC = apiPath("/settings/misc");

// src/app/routes/_admin.settings.tango/components/loading.tsx
import { Box as Box26, Grid as Grid19, GridItem as GridItem19 } from "@chakra-ui/react";
import { jsx as jsx77, jsxs as jsxs52 } from "react/jsx-runtime";
var Loading8 = () => /* @__PURE__ */ jsx77(
  Box26,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs52(
      Grid19,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx77(GridItem19, { children: /* @__PURE__ */ jsx77(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx77(GridItem19, { children: /* @__PURE__ */ jsx77(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx77(GridItem19, { children: /* @__PURE__ */ jsx77(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx77(GridItem19, { children: /* @__PURE__ */ jsx77(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx77(GridItem19, { children: /* @__PURE__ */ jsx77(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx77(GridItem19, { children: /* @__PURE__ */ jsx77(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx77(GridItem19, { children: /* @__PURE__ */ jsx77(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx77(GridItem19, { children: /* @__PURE__ */ jsx77(FormInputSkeleton, {}) })
        ]
      }
    )
  }
);

// src/app/routes/_admin.settings.tango/components/success.tsx
import { Box as Box27, Grid as Grid20, GridItem as GridItem20, useToast as useToast8 } from "@chakra-ui/react";
import { yupResolver as yupResolver8 } from "@hookform/resolvers/yup";
import { useForm as useForm8 } from "react-hook-form";

// src/api-client/settings/requests.ts
var settingsDBUpdateRequest = async (input, app) => await dxtApiRequest(
  {
    url: API_SETTINGS_DB,
    data: input,
    method: "POST",
    silent: !0
  },
  app
), settingsMiscUpdateRequest = async (input, app) => await dxtApiRequest(
  {
    url: API_SETTINGS_MISC,
    data: input,
    method: "POST",
    silent: !0
  },
  app
);

// src/app/routes/_admin.settings.tango/validation.ts
import * as yup9 from "yup";
var yupValidationSchema4 = yup9.object({
  db_host: yup9.string().required("Ingrese el host de la base de datos"),
  db_port: yup9.number().required("Ingrese un puerto").typeError("Ingrese un n\xFAmero de puerto v\xE1lido").test(
    "is-port",
    "Ingrese un puerto v\xE1lido",
    (v) => yupVOValidation(VOTCPPort, v)
  ),
  db_user: yup9.string().required("Ingrese el usuario de la base de datos"),
  db_password: yup9.string().required("Ingrese la contrase\xF1a de la base de datos"),
  tango_dictionary: yup9.string().required("Ingrese el diccionario base de Tango").test(
    "mssql-db-name",
    "Ingrese un nombre de Diccionario base v\xE1lido",
    (v) => yupVOValidation(VOMSSqlDBName, v)
  ),
  db_connection_timeout_seconds: yup9.number().min(
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
import { jsx as jsx78, jsxs as jsxs53 } from "react/jsx-runtime";
var Success11 = (props) => {
  let { stateData } = props, app = useAppResources(), toast = useToast8(), {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm8({
    defaultValues: stateData,
    resolver: yupResolver8(yupValidationSchema4)
  }), disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx78("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let result = await settingsDBUpdateRequest(dataUnsafe, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: { title: "Conexi\xF3n a Tango actualizada" },
        error: { title: "Ha ocurrido un error" },
        loading: { title: "Actualizando conexi\xF3n a Tango" }
      }
    }).then(() => {
      app.navigate(URL_SETTINGS_PATH);
    }).catch((e) => {
      setError("root", { message: e });
    });
  }), children: /* @__PURE__ */ jsxs53(Box27, { children: [
    /* @__PURE__ */ jsx78(FormErrors, { errors }),
    /* @__PURE__ */ jsx78(CommonCard, { children: /* @__PURE__ */ jsxs53(
      Grid20,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx78(GridItem20, { children: /* @__PURE__ */ jsx78(
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
          /* @__PURE__ */ jsx78(GridItem20, { children: /* @__PURE__ */ jsx78(
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
          /* @__PURE__ */ jsx78(GridItem20, { children: /* @__PURE__ */ jsx78(
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
          /* @__PURE__ */ jsx78(GridItem20, { children: /* @__PURE__ */ jsx78(
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
          /* @__PURE__ */ jsx78(GridItem20, { children: /* @__PURE__ */ jsx78(
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
          /* @__PURE__ */ jsx78(GridItem20, { children: /* @__PURE__ */ jsx78(
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
    /* @__PURE__ */ jsx78(CommonCard, { children: /* @__PURE__ */ jsx78(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};

// src/app/routes/_admin.settings.tango/components/index.tsx
import { jsx as jsx79 } from "react/jsx-runtime";
var FormTango = () => {
  let { state, retry } = useDXTApiFetch({
    url: API_SETTINGS_DB,
    silent: !0
  });
  return state.map({
    loading: (_11) => /* @__PURE__ */ jsx79(Loading8, {}),
    error: ({ error }) => /* @__PURE__ */ jsx79(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx79(Success11, { stateData: state2.data })
  });
};

// src/app/routes/_admin.settings.tango/route.tsx
import { Fragment as Fragment30, jsx as jsx80, jsxs as jsxs54 } from "react/jsx-runtime";
function Tango() {
  let navigate = useNavigate14();
  return /* @__PURE__ */ jsxs54(Fragment30, { children: [
    /* @__PURE__ */ jsx80(
      SettingsFormHeading,
      {
        title: "Conexi\xF3n a Tango",
        actionButton: {
          label: "Cancelar",
          buttonProps: {
            colorScheme: "gray",
            onClick: () => {
              navigate(URL_SETTINGS_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx80(FormTango, {})
  ] });
}

// src/app/routes/_admin.settings.misc/route.tsx
var route_exports13 = {};
__export(route_exports13, {
  default: () => Misc
});
import { useNavigate as useNavigate15 } from "@remix-run/react";

// src/app/routes/_admin.settings.misc/components/loading.tsx
import { Box as Box28, Divider as Divider7, Grid as Grid21, GridItem as GridItem21 } from "@chakra-ui/react";
import { jsx as jsx81, jsxs as jsxs55 } from "react/jsx-runtime";
var Loading9 = () => /* @__PURE__ */ jsx81(
  Box28,
  {
    width: "full",
    sx: {
      mt: 8,
      mb: 4
    },
    children: /* @__PURE__ */ jsxs55(
      Grid21,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx81(GridItem21, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx81(Divider7, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx81(Divider7, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx81(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx81(FormTextareaSkeleton, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx81(Divider7, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx81(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx81(FormTextareaSkeleton, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, {}) }),
          /* @__PURE__ */ jsx81(GridItem21, { children: /* @__PURE__ */ jsx81(FormInputSkeleton, {}) })
        ]
      }
    )
  }
);

// src/app/routes/_admin.settings.misc/components/success.tsx
import {
  Box as Box29,
  Divider as Divider8,
  Grid as Grid22,
  GridItem as GridItem22,
  Heading as Heading11,
  useToast as useToast9
} from "@chakra-ui/react";
import { yupResolver as yupResolver9 } from "@hookform/resolvers/yup";
import { useForm as useForm9 } from "react-hook-form";

// src/app/components/form_elements/ControlledCheckbox.tsx
import {
  Checkbox as Checkbox2,
  Flex as Flex6,
  FormControl as FormControl6,
  FormHelperText as FormHelperText5
} from "@chakra-ui/react";
import { useController as useController6 } from "react-hook-form";
import { jsx as jsx82, jsxs as jsxs56 } from "react/jsx-runtime";
var ControlledCheckbox = (props) => {
  let { fieldProps, formControlProps, formControlInnerProps, control } = props, { name } = fieldProps, { text, helperText, helperAction } = formControlInnerProps || {}, {
    field: { ref, onChange, value },
    fieldState: { invalid },
    formState: { errors }
  } = useController6({
    name: fieldProps.name,
    control
  });
  return /* @__PURE__ */ jsxs56(FormControl6, { ...formControlProps, isInvalid: invalid, ref, children: [
    /* @__PURE__ */ jsxs56(Flex6, { alignItems: "center", children: [
      /* @__PURE__ */ jsx82(Checkbox2, { ...fieldProps, onChange, isChecked: value, children: text }),
      helperAction
    ] }),
    helperText != null && /* @__PURE__ */ jsx82(FormHelperText5, { children: helperText })
  ] });
};

// src/app/routes/_admin.settings.misc/validation.ts
import * as yup10 from "yup";
var yupValidationSchema5 = yup10.object({
  smtp_host: yup10.string().required("Ingrese el host SMTP").test(
    "valid-host",
    "Ingrese un host SMTP v\xE1lido",
    (v) => yupVOValidation(VOHost, v)
  ),
  smtp_username: yup10.string().required("Ingrese el usuario SMTP"),
  smtp_password: yup10.string().required("Ingrese la contrase\xF1a SMTP"),
  smtp_port: yup10.number().required("Ingrese el puerto SMTP").typeError("Ingrese un n\xFAmero de puerto SMTP v\xE1lido").test(
    "is-port",
    "Ingrese un puerto SMTP v\xE1lido",
    (v) => yupVOValidation(VOTCPPort, v)
  ),
  smtp_use_tls: yup10.boolean().required(),
  auth_expiration_days: yup10.number().min(
    1,
    `El tiempo de espera debe ser mayor a ${1}`
  ).max(
    365,
    `El tiempo de espera debe ser menor a ${365}`
  ).required("Ingrese el tiempo de espera para logout").typeError("Ingrese el tiempo de espera para logout"),
  admin_email: yup10.string().required("Ingrese el correo electr\xF3nico del Administrador").email("Ingrese un correo electr\xF3nico v\xE1lido"),
  user_warning_message_title: yup10.string().required("Ingrese el t\xEDtulo del mensaje de advertencia"),
  user_warning_message_content: yup10.string().required("Ingrese el contenido del mensaje de advertencia"),
  user_disabled_message_title: yup10.string().required("Ingrese el t\xEDtulo del mensaje de inhabilitaci\xF3n"),
  user_disabled_message_content: yup10.string().required("Ingrese el contenido del mensaje de inhabilitaci\xF3n")
}).required();

// src/app/routes/_admin.settings.misc/components/success.tsx
import { jsx as jsx83, jsxs as jsxs57 } from "react/jsx-runtime";
var Success12 = (props) => {
  let { stateData } = props, app = useAppResources(), toast = useToast9(), {
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm9({
    defaultValues: stateData,
    resolver: yupResolver9(yupValidationSchema5)
  }), disableForm = isSubmitSuccessful || isSubmitting;
  return /* @__PURE__ */ jsx83("form", { noValidate: !0, onSubmit: handleSubmit(async (dataUnsafe) => {
    let result = await settingsMiscUpdateRequest(dataUnsafe, app);
    await promiseBasedToast({
      toast,
      result,
      messages: {
        success: { title: "Configuraciones actualizadas" },
        error: { title: "Ha ocurrido un error" },
        loading: { title: "Actualizando configuraciones" }
      }
    }).then(() => {
      app.navigate(URL_SETTINGS_PATH);
    }).catch((e) => {
      setError("root", { message: e });
    });
  }), children: /* @__PURE__ */ jsxs57(Box29, { children: [
    /* @__PURE__ */ jsx83(FormErrors, { errors }),
    /* @__PURE__ */ jsx83(CommonCard, { children: /* @__PURE__ */ jsxs57(
      Grid22,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx83(GridItem22, { children: /* @__PURE__ */ jsx83(
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
          /* @__PURE__ */ jsx83(GridItem22, { children: /* @__PURE__ */ jsx83(
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
          /* @__PURE__ */ jsx83(GridItem22, { children: /* @__PURE__ */ jsx83(
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
          /* @__PURE__ */ jsx83(GridItem22, { children: /* @__PURE__ */ jsx83(
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
          /* @__PURE__ */ jsx83(GridItem22, { children: /* @__PURE__ */ jsx83(
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
          /* @__PURE__ */ jsx83(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx83(Divider8, {}) }),
          /* @__PURE__ */ jsx83(GridItem22, { children: /* @__PURE__ */ jsx83(
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
          /* @__PURE__ */ jsx83(GridItem22, { children: /* @__PURE__ */ jsx83(
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
    /* @__PURE__ */ jsx83(CommonCard, { children: /* @__PURE__ */ jsxs57(
      Grid22,
      {
        templateColumns: { base: "1fr", md: "repeat(2,1fr)" },
        alignItems: "center",
        gap: 4,
        children: [
          /* @__PURE__ */ jsx83(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx83(Heading11, { size: "sm", textTransform: "uppercase", children: "Comunicaci\xF3n" }) }),
          /* @__PURE__ */ jsx83(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx83(
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
          /* @__PURE__ */ jsx83(GridItem22, { colSpan: { md: 2 }, children: "Contenido del mensaje de advertencia" }),
          /* @__PURE__ */ jsx83(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx83(
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
          /* @__PURE__ */ jsx83(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx83(Divider8, {}) }),
          /* @__PURE__ */ jsx83(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx83(
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
          /* @__PURE__ */ jsx83(GridItem22, { colSpan: { md: 2 }, children: "Contenido del mensaje de inhabilitaci\xF3n" }),
          /* @__PURE__ */ jsx83(GridItem22, { colSpan: { md: 2 }, children: /* @__PURE__ */ jsx83(
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
    /* @__PURE__ */ jsx83(CommonCard, { children: /* @__PURE__ */ jsx83(SettingsFormsButtons, { isLoading: disableForm }) })
  ] }) });
};

// src/app/routes/_admin.settings.misc/components/index.tsx
import { jsx as jsx84 } from "react/jsx-runtime";
var FormMisc = () => {
  let { state, retry } = useDXTApiFetch({
    url: API_SETTINGS_MISC,
    silent: !0
  });
  return state.map({
    loading: (_11) => /* @__PURE__ */ jsx84(Loading9, {}),
    error: ({ error }) => /* @__PURE__ */ jsx84(
      ApiErrors,
      {
        error,
        retry,
        cancelAndNavigateTo: URL_SETTINGS_PATH
      }
    ),
    success: (state2) => /* @__PURE__ */ jsx84(Success12, { stateData: state2.data })
  });
};

// src/app/routes/_admin.settings.misc/route.tsx
import { Fragment as Fragment31, jsx as jsx85, jsxs as jsxs58 } from "react/jsx-runtime";
function Misc() {
  let navigate = useNavigate15();
  return /* @__PURE__ */ jsxs58(Fragment31, { children: [
    /* @__PURE__ */ jsx85(
      SettingsFormHeading,
      {
        title: "Correo saliente y sesiones",
        actionButton: {
          label: "Cancelar",
          buttonProps: {
            colorScheme: "gray",
            onClick: () => {
              navigate(URL_SETTINGS_PATH);
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx85(FormMisc, {})
  ] });
}

// src/app/routes/api.dxt.vendedor.$id.ts
var api_dxt_vendedor_id_exports = {};
__export(api_dxt_vendedor_id_exports, {
  action: () => action6,
  loader: () => loader7
});
async function loader7({ request, params }) {
  return await dxtVendedorGetOneEndpoint.get(request, params);
}
async function action6({ request, params }) {
  return request.method === "DELETE" ? await dxtVendedorDeleteEndpoint.delete(request, params) : await dxtVendedorUpdateEndpoint.patch(request, params);
}

// src/app/routes/api.pedido.renglones.ts
var api_pedido_renglones_exports = {};
__export(api_pedido_renglones_exports, {
  action: () => action7,
  loader: () => loader8
});

// src/code.server/infrastucture/pedido/models/renglon_pedido.model.ts
var RENGLON_PEDIDO_TABLE = "GVA03", RENGLON_PEDIDO_ID_FIELD = "ID_GVA03";
var renglonPedidoModelColumns = [
  RENGLON_PEDIDO_ID_FIELD,
  PEDIDO_ID_FIELD,
  PEDIDO_CODE_FIELD,
  "N_RENGLON",
  ARTICULO_ID_FIELD,
  ARTICULO_CODE_FIELD,
  "CANT_A_DES",
  "CANT_A_FAC",
  "CANT_PEDID",
  "PRECIO",
  "DESCUENTO",
  "PRECIO_LISTA",
  "PRECIO_BONIF",
  "DESCUENTO_PARAM"
], fullRenglonPedidoModelColumns = [
  ...renglonPedidoModelColumns,
  "CAN_EQUI_V",
  "CANT_PEN_D",
  "CANT_PEN_F",
  "PEN_REM_FC",
  "PEN_FAC_RE",
  "TALON_PED",
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
  "RENGL_PADR",
  "PROMOCION",
  "ID_NEXO_PEDIDOS_RENGLON_ORDEN",
  "ROW_VERSION",
  "CANT_A_DES_EXPORTADA",
  "CANT_A_FAC_EXPORTADA",
  "CANT_A_DES_2_EXPORTADA",
  "CANT_A_FAC_2_EXPORTADA",
  "COD_DEPOSI",
  "ID_GVA21",
  "ID_STA22"
];

// src/code.server/infrastucture/pedido/utils/index.ts
function getUserRoleWhere(role, tangoUserId) {
  switch (role.valueOf()) {
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

// src/code.server/infrastucture/pedido/model_mappers/renglon_pedido.model_mapper.ts
var renglonPedidoModelMapper = (m) => {
  let {
    [RENGLON_PEDIDO_ID_FIELD]: id,
    [ARTICULO_CODE_FIELD]: codigoArticulo,
    PRECIO,
    CANT_PEDID,
    N_RENGLON
  } = m, precio = PRECIO ?? 0, cantidad = CANT_PEDID ?? 0, subtotal = precio * cantidad;
  return {
    id_articulo: id,
    renglon: N_RENGLON ?? 0,
    precio,
    cantidad,
    subtotal
  };
}, renglonPedidoAndRelationsModelMapper = (m) => {
  let r = renglonPedidoModelMapper(m), { [ARTICULO_CODE_FIELD]: codigoArticulo, DESCRIPCIO, DESC_ADIC: descripcion_adicional } = m, nombre_articulo = DESCRIPCIO ?? (codigoArticulo == null ? NONEXISTENT_PRODUCT : NO_NAME);
  return {
    ...r,
    nombre_articulo,
    descripcion_adicional
  };
};

// src/code.server/infrastucture/pedido/renglon_pedido.repository.ts
var RenglonPedidoRepository = class extends CompanyProvider {
  constructor() {
    super({
      mainTable: RENGLON_PEDIDO_TABLE,
      mainIdField: RENGLON_PEDIDO_ID_FIELD,
      columns: renglonPedidoModelColumns,
      tableDependencies: [
        ARTICULO_TABLE
      ]
    });
    let filteredColumns = renglonPedidoModelColumns.filter((c) => c != PEDIDO_ID_FIELD && c != ARTICULO_CODE_FIELD);
    this.mainColumns = filteredColumns.map((c) => `${RENGLON_PEDIDO_TABLE}.${c}`), this.pedidoColumns = [`${PEDIDO_TABLE}.${PEDIDO_ID_FIELD}`], this.articuloColumns = [...ARTICULO_NAME_COLUMNS, ARTICULO_CODE_FIELD].map((c) => `${ARTICULO_TABLE}.${c}`);
  }
  async _getByWhere(whereColumn, whereValue) {
    let cacheKey = `byWhere_${whereColumn ?? "x"}_${whereValue ?? "x"}`, resultFromCache = await this.cache.getMetadata(cacheKey);
    if (resultFromCache != null)
      return resultFromCache;
    let { mainTable, columns } = this.config, query = (await this.getCompany())(mainTable);
    whereColumn != null && (query = query.where(whereColumn, whereValue));
    let rawData = await query.select(...this.mainColumns, ...this.articuloColumns, ...this.pedidoColumns).leftOuterJoin(ARTICULO_TABLE, `${mainTable}.${ARTICULO_ID_FIELD}`, `${ARTICULO_TABLE}.${ARTICULO_ID_FIELD}`).innerJoin(PEDIDO_TABLE, `${mainTable}.${PEDIDO_CODE_FIELD}`, `${PEDIDO_TABLE}.${PEDIDO_CODE_FIELD}`).orderBy(PEDIDO_ID_FIELD);
    if (rawData == null)
      throw new DXTException(11e3 /* NOT_FOUND */);
    let data = rawData.map((renglonPedido) => this.toRenglonWithIdPedido(renglonPedido)), result = {}, sliceBegin = 0, idPedidoPrev;
    return data.forEach((renglon, index) => {
      if (idPedidoPrev != null && idPedidoPrev != renglon.id_pedido) {
        let sliceEnd = index;
        result[idPedidoPrev] = data.slice(sliceBegin, sliceEnd), sliceBegin = sliceEnd;
      }
      idPedidoPrev = renglon.id_pedido;
    }), idPedidoPrev != null && (result[idPedidoPrev] = data.slice(sliceBegin, data.length)), await this.cache.setMetadata(cacheKey, result), result;
  }
  async getByIdPedido(idPedido) {
    return (await this._getByWhere(PEDIDO_ID_FIELD, idPedido))[idPedido] ?? [];
  }
  async getByNumeroPedido(numeroPedido) {
    let data = await this._getByWhere(PEDIDO_CODE_FIELD, numeroPedido);
    return Object.values(data)[0] ?? [];
  }
  async getAllByUser(role, tangoUserId, options) {
    let where = getUserRoleWhere(role, tangoUserId);
    return await this._getByWhere(where?.field, where?.value);
  }
  toResult(m) {
    return renglonPedidoModelMapper(m);
  }
  toResultAndRelations(m) {
    return renglonPedidoAndRelationsModelMapper(m);
  }
  toRenglonWithIdPedido(m) {
    let id_pedido = m[PEDIDO_ID_FIELD];
    if (id_pedido == null)
      throw new DXTException(200002 /* TANGO_DB_INVALID_DATA */, "RenglonPedidoRepository.toRenglonWithIdPedido");
    return {
      ...renglonPedidoAndRelationsModelMapper(m),
      id_pedido
    };
  }
}, renglonPedidoRepository = new RenglonPedidoRepository();

// src/code.server/api/pedido/services/getAllPedidosRows.ts
async function getAllRowsPedidos(user) {
  let role = user.role.valueOf(), tangoId = user.tangoId?.valueOf();
  return await renglonPedidoRepository.getAllByUser(
    role,
    tangoId
  );
}

// src/code.server/api/pedido/endpoints/getRows.ts
var pedidoGetRowsEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  // {
  //   validation: {
  //     params: {
  //       id: optionalIntegersValidator,
  //       print: optionalBooleanValidator
  //     }
  //   }
  // },
  async (req) => await getAllRowsPedidos(
    req.auth.user
  )
);

// src/app/routes/api.pedido.renglones.ts
async function loader8({ request, params }) {
  return await pedidoGetRowsEndpoint.run(request, params);
}
var action7 = unimplementedApiResponse;

// src/app/routes/api.tango.auxiliares.ts
var api_tango_auxiliares_exports = {};
__export(api_tango_auxiliares_exports, {
  action: () => action8,
  loader: () => loader9
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

// src/code.server/api/tango/endpoints/index.ts
var tangoClienteGetAllEndpoint = createCompanyGetAllEndpoint(
  adminRootController,
  clienteRepository
), tangoVendedorGetAllEndpoint = createCompanyGetAllEndpoint(
  adminRootController,
  vendedorRepository
), tangoPerfilGetAllEndpoint = createCompanyGetAllEndpoint(
  authenticatedRootController,
  perfilRepository
), auxiliaresGetAllEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => {
    let [
      transportes,
      depositos,
      condiciones,
      asientos,
      talonarios
    ] = await Promise.all([
      transporteRepository.getAll(),
      depositoRepository.getAll(),
      condicionRepository.getAll(),
      asientoRepository.getAll(),
      talonarioRepository.getAll()
    ]);
    return {
      transportes,
      depositos,
      condiciones,
      asientos,
      talonarios
    };
  }
);

// src/app/routes/api.tango.auxiliares.ts
var loader9 = async (o) => await auxiliaresGetAllEndpoint.get(o.request, o.params), action8 = unimplementedApiResponse;

// src/app/routes/api.dxt.cliente.$id.ts
var api_dxt_cliente_id_exports = {};
__export(api_dxt_cliente_id_exports, {
  action: () => action9,
  loader: () => loader10
});
async function loader10({ request, params }) {
  return await dxtClienteGetOneEndpoint.get(request, params);
}
async function action9({ request, params }) {
  return request.method === "DELETE" ? await dxtClienteDeleteEndpoint.delete(request, params) : await dxtClienteUpdateEndpoint.patch(request, params);
}

// src/app/routes/api.pedido.$id.edit.ts
var api_pedido_id_edit_exports = {};

// src/app/routes/api.tango.vendedor.ts
var api_tango_vendedor_exports = {};
__export(api_tango_vendedor_exports, {
  action: () => action10,
  loader: () => loader11
});
var loader11 = async (o) => await tangoVendedorGetAllEndpoint.get(o.request, o.params), action10 = unimplementedApiResponse;

// src/app/routes/api.auth.password.ts
var api_auth_password_exports = {};
__export(api_auth_password_exports, {
  action: () => action11,
  loader: () => loader12
});

// src/domain/auth/inputs/change_password.input.ts
var changePasswordInputValidationSchema = {
  password: (v) => new VODXTPassword(v)
}, validateChangePasswordInput = (input) => validateInput(changePasswordInputValidationSchema, input);

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
    let { password } = req.validated.body, { user } = req.auth;
    return await authService.changePassword(
      user.role.valueOf(),
      user.id.valueOf(),
      password
    ), { ok: !0 };
  }
  /* *************************************************************************************************************** */
);

// src/app/routes/api.auth.password.ts
var loader12 = unimplementedApiResponse;
async function action11({ request, params }) {
  return await authChangePasswordEndpoint.post(request, params);
}

// src/app/routes/api.pedido.create.ts
var api_pedido_create_exports = {};
__export(api_pedido_create_exports, {
  action: () => action12,
  loader: () => loader13
});

// src/code.server/api/pedido/endpoints/create.ts
var pedidoCreateEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => {
  }
);

// src/app/routes/api.pedido.create.ts
var loader13 = unimplementedApiResponse;
async function action12({ request, params }) {
  return await pedidoCreateEndpoint.post(request, params);
}

// src/app/routes/api.settings.misc.ts
var api_settings_misc_exports = {};
__export(api_settings_misc_exports, {
  action: () => action13,
  loader: () => loader14
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
async function loader14({ request, params }) {
  return await getMiscSettingsEndpoint.get(request, params);
}
async function action13({ request, params }) {
  return await updateMiscSettingsEndpoint.post(request, params);
}

// src/app/routes/api.tango.cliente.ts
var api_tango_cliente_exports = {};
__export(api_tango_cliente_exports, {
  action: () => action14,
  loader: () => loader15
});
var loader15 = async (o) => await tangoClienteGetAllEndpoint.get(o.request, o.params), action14 = unimplementedApiResponse;

// src/app/routes/api.admin.status.ts
var api_admin_status_exports = {};
__export(api_admin_status_exports, {
  action: () => action15,
  loader: () => loader16
});

// src/code.server/infrastucture/company/company.repository.ts
var CompanyRepository = class extends CompanyProvider {
  constructor() {
    super({
      mainTable: TANGO_PARAMETROS_TABLE,
      mainIdField: TANGO_PARAMETROS_ID_FIELD,
      columns: [TANGO_PARAMETROS_ID_FIELD]
    });
  }
  toResult(m) {
    return tangoParametrosModelMapper(m);
  }
}, companyRepository = new CompanyRepository();

// src/code.server/api/admin/endpoints/getStatus.ts
var getAdminStatusEndpoint = createApiEndpoint(
  adminRootController,
  /* *************************************************************************************************************** */
  void 0,
  /* *************************************************************************************************************** */
  async (req) => {
    let dbSettings = await settingsService.getDBSettings(!0), miscSettings = await settingsService.getMiscSettings(!0), dictionary_ok = !0, dictionary_error, company_ok = !0, company_error, tangoError, companies;
    try {
      companies = await dictionaryRepository.getCompanies();
    } catch (e) {
      companies = null, dictionary_ok = !1, dictionary_error = exceptionToDXTErrorInfo(e).error, isDXTException(e, 200001 /* TANGO_DB_ACCESS_ERROR */) && (tangoError = e);
    }
    try {
      if (tangoError != null)
        throw tangoError;
      await companyRepository.getCompany();
    } catch (e) {
      company_ok = !1, company_error = exceptionToDXTErrorInfo(e).error;
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
      companies
    };
  }
  /* *************************************************************************************************************** */
);

// src/app/routes/api.admin.status.ts
async function loader16({ request, params }) {
  return await getAdminStatusEndpoint.get(request, params);
}
var action15 = unimplementedApiResponse;

// src/app/routes/api.auth.connect.ts
var api_auth_connect_exports = {};
__export(api_auth_connect_exports, {
  action: () => action16,
  loader: () => loader17
});

// src/code.server/api/auth/utils/index.ts
function authPrivateResultToPublic(auth) {
  let {
    auth_token,
    user,
    message_to_user
  } = auth;
  return {
    auth_token,
    user: user.toPublicInfo(),
    message_to_user
  };
}

// src/code.server/api/auth/endpoints/connect.ts
var authConnectEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => authPrivateResultToPublic(req.auth)
);

// src/app/routes/api.auth.connect.ts
var loader17 = unimplementedApiResponse;
async function action16({ request, params }) {
  return await authConnectEndpoint.post(request, params);
}

// src/app/routes/api.dxt.vendedor.ts
var api_dxt_vendedor_exports = {};
__export(api_dxt_vendedor_exports, {
  action: () => action17,
  loader: () => loader18
});
async function loader18({ request, params }) {
  return await dxtVendedorGetAllEndpoint.get(request, params);
}
async function action17({ request, params }) {
  return await dxtVendedorCreateEndpoint.post(request, params);
}

// src/app/routes/api.tango.perfil.ts
var api_tango_perfil_exports = {};
__export(api_tango_perfil_exports, {
  action: () => action18,
  loader: () => loader19
});
var loader19 = async (o) => await tangoPerfilGetAllEndpoint.get(o.request, o.params), action18 = unimplementedApiResponse;

// src/app/routes/api.auth.logout.ts
var api_auth_logout_exports = {};
__export(api_auth_logout_exports, {
  action: () => action19,
  loader: () => loader20
});

// src/code.server/api/auth/endpoints/logout.ts
var authLogoutEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => (await authService.logout(req.auth.auth_token), { ok: !0 })
);

// src/app/routes/api.auth.logout.ts
var loader20 = unimplementedApiResponse;
async function action19({ request, params }) {
  return await authLogoutEndpoint.post(request, params);
}

// src/app/routes/api.dxt.cliente.ts
var api_dxt_cliente_exports = {};
__export(api_dxt_cliente_exports, {
  action: () => action20,
  loader: () => loader21
});
async function loader21({ request, params }) {
  return await dxtClienteGetAllEndpoint.get(request, params);
}
async function action20({ request, params }) {
  return await dxtClienteCreateEndpoint.post(request, params);
}

// src/app/routes/api.settings.db.ts
var api_settings_db_exports = {};
__export(api_settings_db_exports, {
  action: () => action21,
  loader: () => loader22
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
import _10 from "lodash";
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
    }, { db_connection_timeout_seconds: oldTimeout, tango_active_company: oldCompany, ...oldRemainingData } = oldSettings, { db_connection_timeout_seconds: newTimeout, tango_active_company: ignoredCompany, ...newRemainingData } = newSettings, thereIsANewDictionary = !_10.isEqual(oldRemainingData, newRemainingData), newCompany = thereIsANewDictionary ? "" : oldCompany, finalSettings = {
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
async function loader22({ request, params }) {
  return await getDBSettingsEndpoint.get(request, params);
}
async function action21({ request, params }) {
  return await updateDBSettingsEndpoint.post(request, params);
}

// src/app/routes/api.auth.login.ts
var api_auth_login_exports = {};
__export(api_auth_login_exports, {
  action: () => action22,
  loader: () => loader23
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
    return authPrivateResultToPublic(
      await authService.login(username, password)
    );
  }
);

// src/app/routes/api.auth.login.ts
var loader23 = unimplementedApiResponse;
async function action22({ request, params }) {
  return await authLoginEndpoint.post(request, params);
}

// src/app/routes/api.dictionary.ts
var api_dictionary_exports = {};
__export(api_dictionary_exports, {
  action: () => action23,
  loader: () => loader24
});

// src/code.server/api/dictionary/endpoints/getCompanies.ts
var getCompaniesEndpoint = createApiEndpoint(
  adminRootController,
  void 0,
  async (req) => await dictionaryRepository.getCompanies()
);

// src/app/routes/api.dictionary.ts
async function loader24({ request, params }) {
  return await getCompaniesEndpoint.get(request, params);
}
var action23 = unimplementedApiResponse;

// src/app/routes/_authorized/route.tsx
var route_exports14 = {};
__export(route_exports14, {
  default: () => AuthorizedLayout
});
import { Outlet as Outlet2 } from "@remix-run/react";

// src/code.client/auth/AuthGuard.tsx
import { useEffect as useEffect14 } from "react";
import { useLocation as useLocation2, useNavigate as useNavigate16 } from "@remix-run/react";
import { Fragment as Fragment32, jsx as jsx86 } from "react/jsx-runtime";
var AuthGuard = (props) => {
  let { children } = props, { state: authState, dispatch: authDispatch } = useAuth(), navigate = useNavigate16(), location = useLocation2();
  if (useEffect14(() => {
    authState instanceof AuthStateLoggedIn ? (async () => {
      await authDispatch(new AuthActionRefreshAll(authState.userInfo));
    })().catch((_11) => {
    }) : authState.isDisconnectedAndNotRedirecting() && redirectLoginWithReturnUrl(navigate);
  }, [location, authState.constructor.name]), authState.isLoggedIn())
    return /* @__PURE__ */ jsx86(Fragment32, { children });
};

// src/app/routes/_authorized/route.tsx
import { Container as Container2 } from "@chakra-ui/react";

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
import { Fragment as Fragment33, jsx as jsx87 } from "react/jsx-runtime";
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? /* @__PURE__ */ jsx87(Fragment33, { children }) : /* @__PURE__ */ jsx87(Fragment33, { children: fallback });
}

// src/app/components/Navbar.tsx
import { useNavigate as useNavigate17 } from "@remix-run/react";
import {
  Box as Box30,
  Flex as Flex7,
  HStack as HStack13,
  Icon as Icon11,
  IconButton as IconButton6,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text as Text8,
  useColorModeValue as useColorModeValue7
} from "@chakra-ui/react";
import LogoutIcon from "mdi-react/LogoutIcon.js";
import MenuIcon from "mdi-react/MenuIcon.js";

// src/app/components/ColorModeSelector.tsx
import { Icon as Icon10, IconButton as IconButton5, useColorMode } from "@chakra-ui/react";
import MoonWaningCrescentIcon from "mdi-react/MoonWaningCrescentIcon.js";
import WeatherSunnyIcon from "mdi-react/WeatherSunnyIcon.js";
import { jsx as jsx88 } from "react/jsx-runtime";
var ColorModeSelector = () => {
  let { colorMode, toggleColorMode } = useColorMode();
  return /* @__PURE__ */ jsx88(
    IconButton5,
    {
      "aria-label": "Cambiar modo de color",
      onClick: toggleColorMode,
      isRound: !0,
      icon: /* @__PURE__ */ jsx88(
        Icon10,
        {
          as: colorMode === "light" ? MoonWaningCrescentIcon : WeatherSunnyIcon
        }
      )
    }
  );
};

// src/app/components/LogoImage.tsx
import { Image, useColorModeValue as useColorModeValue6 } from "@chakra-ui/react";
import { jsx as jsx89 } from "react/jsx-runtime";
var LogoImage = (props) => {
  let logo = useColorModeValue6("/logo-light.svg", "/logo-dark.svg");
  return /* @__PURE__ */ jsx89(Image, { src: logo, ...props });
};

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

// src/app/components/Navbar.tsx
import { jsx as jsx90, jsxs as jsxs59 } from "react/jsx-runtime";
var Navbar = () => {
  let { state: authState, dispatch: authDispatch } = useAuth(), navigate = useNavigate17(), user = authState.userOrNull(), userRoleText = user?.role != null ? getUserRoleText(user?.role) : "", _username = user?.screen_name.trim() ?? "", userLabel = user?.role === 2 /* admin */ ? _username : `${userRoleText} ${_username}`;
  return /* @__PURE__ */ jsx90(
    Box30,
    {
      bg: useColorModeValue7("gray.100", "gray.900"),
      sx: {
        px: 4
      },
      children: /* @__PURE__ */ jsxs59(Flex7, { h: 16, alignItems: "center", justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxs59(HStack13, { spacing: 4, alignItems: "center", children: [
          /* @__PURE__ */ jsxs59(Menu, { isLazy: !0, id: "menu", children: [
            /* @__PURE__ */ jsx90(
              MenuButton,
              {
                as: IconButton6,
                "aria-label": "Options",
                icon: /* @__PURE__ */ jsx90(MenuIcon, {}),
                variant: "outline"
              }
            ),
            /* @__PURE__ */ jsxs59(MenuList, { rootProps: { zIndex: 2e3 }, children: [
              /* @__PURE__ */ jsx90(
                MenuItem,
                {
                  onClick: () => {
                    navigate(URL_PEDIDOS_PATH);
                  },
                  children: "Pedidos"
                }
              ),
              /* @__PURE__ */ jsx90(
                MenuItem,
                {
                  onClick: () => {
                    navigate(URL_SETTINGS_PATH);
                  },
                  children: "Configuraciones"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx90(Box30, { children: /* @__PURE__ */ jsx90(LogoImage, { width: "80px", alt: "" }) })
        ] }),
        /* @__PURE__ */ jsx90(Flex7, { alignItems: "center", children: /* @__PURE__ */ jsxs59(HStack13, { spacing: 4, children: [
          /* @__PURE__ */ jsx90(
            Box30,
            {
              display: {
                base: "none",
                md: "block"
              },
              children: /* @__PURE__ */ jsx90(Text8, { children: userLabel })
            }
          ),
          /* @__PURE__ */ jsx90(
            IconButton6,
            {
              "aria-label": "Desconectarse",
              onClick: async () => {
                await authDispatch(new AuthActionLogout());
              },
              isRound: !0,
              icon: /* @__PURE__ */ jsx90(Icon11, { as: LogoutIcon })
            }
          ),
          /* @__PURE__ */ jsx90(ColorModeSelector, {})
        ] }) })
      ] })
    }
  );
};

// src/app/routes/_authorized/route.tsx
import { jsx as jsx91, jsxs as jsxs60 } from "react/jsx-runtime";
function AuthorizedLayout() {
  return /* @__PURE__ */ jsx91(ClientOnly, { children: /* @__PURE__ */ jsxs60(AuthGuard, { children: [
    /* @__PURE__ */ jsx91(Navbar, {}),
    /* @__PURE__ */ jsx91(Container2, { maxW: "6xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx91(Outlet2, {}) })
  ] }) });
}

// src/app/routes/api.pedido.tsx
var api_pedido_exports = {};
__export(api_pedido_exports, {
  action: () => action24,
  loader: () => loader25
});

// src/code.server/infrastucture/pedido/model_mappers/pedido.model_mapper.ts
var pedidoModelMapper = (m) => {
  let {
    [PEDIDO_ID_FIELD]: idPedido,
    NRO_PEDIDO,
    [CLIENTE_ID_FIELD]: id_cliente,
    [CLIENTE_CODE_FIELD]: codigo_cliente,
    [DEPOSITO_CODE_FIELD]: codigo_deposito,
    [VENDEDOR_ID_FIELD]: id_vendedor,
    [VENDEDOR_CODE_FIELD]: codigo_vendedor,
    [TRANSPORTE_ID_FIELD]: id_transporte,
    [TRANSPORTE_CODE_FIELD]: codigo_transporte,
    FECHA_PEDI,
    FECHA_ENTR,
    LEYENDA_4,
    LEYENDA_5,
    TOTAL_PEDI,
    PORC_DESC,
    ESTADO
  } = m;
  if (codigo_cliente == null)
    throw new DXTException(200002 /* TANGO_DB_INVALID_DATA */, "pedidoModelMapper");
  return {
    id: idPedido,
    numero_pedido: NRO_PEDIDO,
    estado: numberToEstadoPedido(ESTADO),
    codigo_cliente,
    codigo_vendedor,
    codigo_transporte,
    fecha_emision: FECHA_PEDI != null ? new Date(FECHA_PEDI) : void 0,
    fecha_entrega: FECHA_ENTR != null ? new Date(FECHA_ENTR) : void 0,
    comentarios: LEYENDA_4 ?? "" + LEYENDA_5 ?? "",
    total: TOTAL_PEDI ?? 0,
    descuento: PORC_DESC ?? 0
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

// src/code.server/infrastucture/pedido/pedido.repository.ts
var PedidoRepository = class extends CompanyProvider {
  constructor() {
    super({
      mainTable: PEDIDO_TABLE,
      mainIdField: PEDIDO_ID_FIELD,
      columns: pedidoModelColumns,
      tableDependencies: [
        CLIENTE_TABLE,
        VENDEDOR_TABLE,
        TRANSPORTE_TABLE
      ]
    });
  }
  async getAllByUser(role, tangoUserId, options) {
    let cacheKey = this.getAllByUserCacheKey(role, tangoUserId, options);
    if (cacheKey != null) {
      let cachedData = await this.cache.getMetadata(cacheKey);
      if (cachedData)
        return cachedData;
    }
    let { mainTable, columns } = this.config, q = await this.getCompany(), where = getUserRoleWhere(role, tangoUserId), query = q(mainTable);
    where != null && (query = query.where(
      `${mainTable}.${where.field}`,
      where.value
    ));
    let mainColumns = (columns ?? ["*"]).map((c) => `${mainTable}.${c}`), clienteNombreColumns = CLIENTE_NAME_COLUMNS.map((c) => `${CLIENTE_TABLE}.${c}`), vendedorNombreColumns = VENDEDOR_NAME_COLUMNS.map((c) => `${VENDEDOR_TABLE}.${c}`), transporteNombreColumns = TRANSPORTE_NAME_COLUMNS.map((c) => `${TRANSPORTE_TABLE}.${c}`), data = await query.select(...mainColumns, ...clienteNombreColumns, ...vendedorNombreColumns, ...transporteNombreColumns).leftOuterJoin(CLIENTE_TABLE, `${mainTable}.${CLIENTE_ID_FIELD}`, `${CLIENTE_TABLE}.${CLIENTE_ID_FIELD}`).leftOuterJoin(VENDEDOR_TABLE, `${mainTable}.${VENDEDOR_ID_FIELD}`, `${VENDEDOR_TABLE}.${VENDEDOR_ID_FIELD}`).leftOuterJoin(TRANSPORTE_TABLE, `${mainTable}.${TRANSPORTE_ID_FIELD}`, `${TRANSPORTE_TABLE}.${TRANSPORTE_ID_FIELD}`);
    if (data == null)
      throw new DXTException(11e3 /* NOT_FOUND */);
    let result = data.map((p) => this.toResultWithRelations(p));
    return cacheKey != null && await this.cache.setMetadata(cacheKey, result), result;
  }
  toResult(m) {
    return pedidoModelMapper(m);
  }
  toResultWithRelations(m) {
    return pedidoAndRelationsModelMapper(m);
  }
}, pedidoRepository = new PedidoRepository();

// src/code.server/api/pedido/services/getAllPedidos.ts
async function getAllPedidos(user) {
  let role = user.role.valueOf(), tangoId = user.tangoId?.valueOf(), { verPedidosCumplidos } = user;
  return (await pedidoRepository.getAllByUser(
    role,
    tangoId
  )).filter((pedido) => {
    let { estado } = pedido;
    return estado == 5 /* ANULADO */ || estado == 0 /* INVALIDO */ ? !1 : estado == 4 /* CERRADO */ || estado == 3 /* CUMPLIDO */ ? verPedidosCumplidos : !0;
  });
}

// src/code.server/api/pedido/endpoints/getAll.ts
var pedidoGetAllEndpoint = createApiEndpoint(
  authenticatedRootController,
  void 0,
  async (req) => await getAllPedidos(req.auth.user)
);

// src/app/routes/api.pedido.tsx
async function loader25({ request, params }) {
  return await pedidoGetAllEndpoint.get(request, params);
}
var action24 = unimplementedApiResponse;

// src/app/routes/_admin/route.tsx
var route_exports15 = {};
__export(route_exports15, {
  default: () => AdminLayout
});
import { Outlet as Outlet3 } from "@remix-run/react";
import { Container as Container3 } from "@chakra-ui/react";
import { jsx as jsx92, jsxs as jsxs61 } from "react/jsx-runtime";
function AdminLayout() {
  return /* @__PURE__ */ jsx92(ClientOnly, { children: /* @__PURE__ */ jsxs61(AuthGuard, { children: [
    /* @__PURE__ */ jsx92(Navbar, {}),
    /* @__PURE__ */ jsx92(Container3, { maxW: "2xl", sx: { my: 4 }, children: /* @__PURE__ */ jsx92(Outlet3, {}) })
  ] }) });
}

// src/app/routes/_index/route.tsx
var route_exports16 = {};
__export(route_exports16, {
  default: () => Index
});
import {
  Alert as Alert8,
  Box as Box31,
  Button as Button10,
  Card as Card4,
  CardBody as CardBody4,
  CardHeader,
  Center,
  Container as Container4,
  Heading as Heading12,
  Icon as Icon12,
  InputLeftElement as InputLeftElement5,
  ListItem as ListItem3,
  UnorderedList as UnorderedList2,
  VStack as VStack5
} from "@chakra-ui/react";
import { yupResolver as yupResolver10 } from "@hookform/resolvers/yup";
import * as yup11 from "yup";
import AccountIcon from "mdi-react/AccountIcon.js";
import LockIcon from "mdi-react/LockIcon.js";
import { useForm as useForm10 } from "react-hook-form";

// src/texts/app.ts
var appTexts = {
  welcome: "Bienvenido al sistema de pedidos de Sorbalok Pinturas."
};

// src/app/routes/_index/route.tsx
import { Fragment as Fragment34, jsx as jsx93, jsxs as jsxs62 } from "react/jsx-runtime";
var validationSchema = yup11.object({
  username: yup11.string().required("Ingrese su nombre de usuario").test("test", "Usuario no valido", (v) => yupVOValidation(VOUserName, v)),
  password: yup11.string().required("Ingrese su contrase\xF1a")
}).required();
function Index() {
  let { state: authState, dispatch: authDispatch } = useAuth(), isSubmitting = authState.isLoading(), {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm10({
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: yupResolver10(validationSchema)
  });
  return /* @__PURE__ */ jsxs62(Fragment34, { children: [
    /* @__PURE__ */ jsx93(
      Box31,
      {
        sx: {
          position: "absolute",
          top: 3,
          right: 4
        },
        children: /* @__PURE__ */ jsx93(ColorModeSelector, {})
      }
    ),
    /* @__PURE__ */ jsx93(
      Box31,
      {
        sx: {
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ jsx93(
          Container4,
          {
            maxWidth: "sm",
            sx: {
              alignSelf: "center"
            },
            children: /* @__PURE__ */ jsxs62(Card4, { children: [
              /* @__PURE__ */ jsx93(CardHeader, { children: /* @__PURE__ */ jsx93(Center, { children: /* @__PURE__ */ jsx93(LogoImage, { width: "160px", alt: "" }) }) }),
              /* @__PURE__ */ jsx93(CardBody4, { children: /* @__PURE__ */ jsx93("form", { noValidate: !0, onSubmit: handleSubmit(async (data) => {
                let dataToSubmit = {
                  username: data.username,
                  password: data.password
                };
                await authDispatch(new AuthActionLogin(dataToSubmit));
              }), children: /* @__PURE__ */ jsxs62(VStack5, { spacing: 4, children: [
                /* @__PURE__ */ jsx93(
                  Heading12,
                  {
                    size: "sm",
                    sx: {
                      textAlign: "center",
                      pb: 2
                    },
                    children: appTexts.welcome
                  }
                ),
                (Object.keys(errors).length || authState.errorOrNull()) && /* @__PURE__ */ jsx93(Box31, { width: "full", children: /* @__PURE__ */ jsx93(Alert8, { status: "error", variant: "top-accent", children: /* @__PURE__ */ jsxs62(
                  UnorderedList2,
                  {
                    fontSize: "sm",
                    styleType: "none",
                    sx: { m: 0 },
                    children: [
                      Object.keys(errors).length && Object.values(errors).map((error, key) => /* @__PURE__ */ jsx93(ListItem3, { children: error.message }, key)),
                      authState.errorOrNull() && /* @__PURE__ */ jsx93(ListItem3, { children: authState.errorOrNull()?.error }, "api_error")
                    ]
                  }
                ) }) }),
                /* @__PURE__ */ jsx93(
                  ControlledInput,
                  {
                    formControlInnerProps: {
                      icon: /* @__PURE__ */ jsx93(InputLeftElement5, { pointerEvents: "none", children: /* @__PURE__ */ jsx93(Icon12, { as: AccountIcon }) })
                    },
                    fieldProps: {
                      name: "username",
                      id: "username",
                      type: "text",
                      placeholder: "Usuario"
                    },
                    formControlProps: {
                      isDisabled: isSubmitting
                    },
                    control
                  }
                ),
                /* @__PURE__ */ jsx93(
                  ControlledInput,
                  {
                    formControlInnerProps: {
                      icon: /* @__PURE__ */ jsx93(InputLeftElement5, { pointerEvents: "none", children: /* @__PURE__ */ jsx93(Icon12, { as: LockIcon }) })
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
                /* @__PURE__ */ jsx93(Button10, { type: "submit", width: "full", isLoading: isSubmitting, children: "Ingresar" })
              ] }) }) })
            ] })
          }
        )
      }
    )
  ] });
}

// src/app/routes/pdf/route.tsx
var route_exports17 = {};
__export(route_exports17, {
  default: () => Index2
});
import { lazy as lazy2, Suspense as Suspense2 } from "react";
import { jsx as jsx94 } from "react/jsx-runtime";
var PDFRenderer = lazy2(() => Promise.resolve().then(() => __toESM(require_PDFRenderer(), 1)));
function Index2() {
  return /* @__PURE__ */ jsx94(ClientOnly, { children: /* @__PURE__ */ jsx94(Suspense2, { fallback: /* @__PURE__ */ jsx94("div", { children: "Loading..." }), children: /* @__PURE__ */ jsx94(PDFRenderer, {}) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HIWV3NCU.js", imports: ["/build/_shared/chunk-OHSBC2MA.js", "/build/_shared/chunk-E43VAFT6.js", "/build/_shared/chunk-J7TISYNY.js", "/build/_shared/chunk-AXWLPIOK.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VOLKNGUZ.js", imports: ["/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin": { id: "routes/_admin", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_admin-RIQKX334.js", imports: ["/build/_shared/chunk-OXD53MKU.js", "/build/_shared/chunk-I7NA2BKF.js", "/build/_shared/chunk-INOJYLBZ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings._index": { id: "routes/_admin.settings._index", parentId: "routes/_admin", path: "settings", index: !0, caseSensitive: void 0, module: "/build/routes/_admin.settings._index-QLLK2SAZ.js", imports: ["/build/_shared/chunk-Y6HZBLWM.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.company": { id: "routes/_admin.settings.company", parentId: "routes/_admin", path: "settings/company", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.company-5AJDV63N.js", imports: ["/build/_shared/chunk-GIECF5JH.js", "/build/_shared/chunk-QYNV6ZXS.js", "/build/_shared/chunk-QR3HCVRD.js", "/build/_shared/chunk-DFN4Z3JB.js", "/build/_shared/chunk-TWC63WIN.js", "/build/_shared/chunk-SD3IP6KZ.js", "/build/_shared/chunk-COC53NOQ.js", "/build/_shared/chunk-NHHPDOFU.js", "/build/_shared/chunk-OFDOSXRQ.js", "/build/_shared/chunk-MZS6CHAS.js", "/build/_shared/chunk-VTMMMSTK.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.lists.$type": { id: "routes/_admin.settings.lists.$type", parentId: "routes/_admin", path: "settings/lists/:type", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.lists.$type-EMZOR4AS.js", imports: ["/build/_shared/chunk-BR2XK6R6.js", "/build/_shared/chunk-DFN4Z3JB.js", "/build/_shared/chunk-TWC63WIN.js", "/build/_shared/chunk-SD3IP6KZ.js", "/build/_shared/chunk-N7LHE6QJ.js", "/build/_shared/chunk-CLUXRPU5.js", "/build/_shared/chunk-Y6HZBLWM.js", "/build/_shared/chunk-MZS6CHAS.js", "/build/_shared/chunk-VTMMMSTK.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.misc": { id: "routes/_admin.settings.misc", parentId: "routes/_admin", path: "settings/misc", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.misc-SRFOTT4V.js", imports: ["/build/_shared/chunk-7SVGYDSH.js", "/build/_shared/chunk-BR2XK6R6.js", "/build/_shared/chunk-EZL2WUID.js", "/build/_shared/chunk-6I6UQKKH.js", "/build/_shared/chunk-DFN4Z3JB.js", "/build/_shared/chunk-TWC63WIN.js", "/build/_shared/chunk-SD3IP6KZ.js", "/build/_shared/chunk-CLUXRPU5.js", "/build/_shared/chunk-Y6HZBLWM.js", "/build/_shared/chunk-MZS6CHAS.js", "/build/_shared/chunk-VTMMMSTK.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.tango": { id: "routes/_admin.settings.tango", parentId: "routes/_admin", path: "settings/tango", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.tango-VW3FGIUZ.js", imports: ["/build/_shared/chunk-7SVGYDSH.js", "/build/_shared/chunk-EZL2WUID.js", "/build/_shared/chunk-6I6UQKKH.js", "/build/_shared/chunk-DFN4Z3JB.js", "/build/_shared/chunk-TWC63WIN.js", "/build/_shared/chunk-SD3IP6KZ.js", "/build/_shared/chunk-CLUXRPU5.js", "/build/_shared/chunk-Y6HZBLWM.js", "/build/_shared/chunk-MZS6CHAS.js", "/build/_shared/chunk-VTMMMSTK.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.users.$type._index": { id: "routes/_admin.settings.users.$type._index", parentId: "routes/_admin", path: "settings/users/:type", index: !0, caseSensitive: void 0, module: "/build/routes/_admin.settings.users.$type._index-WGKRMG2H.js", imports: ["/build/_shared/chunk-GYVXVRJN.js", "/build/_shared/chunk-4W7VMVIZ.js", "/build/_shared/chunk-N7LHE6QJ.js", "/build/_shared/chunk-CLUXRPU5.js", "/build/_shared/chunk-Y6HZBLWM.js", "/build/_shared/chunk-PV3Q4SPS.js", "/build/_shared/chunk-VP5EY3GX.js", "/build/_shared/chunk-OFDOSXRQ.js", "/build/_shared/chunk-MZS6CHAS.js", "/build/_shared/chunk-VTMMMSTK.js", "/build/_shared/chunk-I5EGJ5XA.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.users.customers.$id.edit": { id: "routes/_admin.settings.users.customers.$id.edit", parentId: "routes/_admin", path: "settings/users/customers/:id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.users.customers.$id.edit-UBKHCRH6.js", imports: ["/build/_shared/chunk-KIK5IFRE.js", "/build/_shared/chunk-YUPDQZ23.js", "/build/_shared/chunk-GIECF5JH.js", "/build/_shared/chunk-EZL2WUID.js", "/build/_shared/chunk-QYNV6ZXS.js", "/build/_shared/chunk-QR3HCVRD.js", "/build/_shared/chunk-6I6UQKKH.js", "/build/_shared/chunk-DFN4Z3JB.js", "/build/_shared/chunk-TWC63WIN.js", "/build/_shared/chunk-SD3IP6KZ.js", "/build/_shared/chunk-COC53NOQ.js", "/build/_shared/chunk-NHHPDOFU.js", "/build/_shared/chunk-N7LHE6QJ.js", "/build/_shared/chunk-CLUXRPU5.js", "/build/_shared/chunk-Y6HZBLWM.js", "/build/_shared/chunk-PV3Q4SPS.js", "/build/_shared/chunk-VP5EY3GX.js", "/build/_shared/chunk-OFDOSXRQ.js", "/build/_shared/chunk-MZS6CHAS.js", "/build/_shared/chunk-VTMMMSTK.js", "/build/_shared/chunk-I5EGJ5XA.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.users.customers.add": { id: "routes/_admin.settings.users.customers.add", parentId: "routes/_admin", path: "settings/users/customers/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.users.customers.add-KZBSSFR4.js", imports: ["/build/_shared/chunk-YUPDQZ23.js", "/build/_shared/chunk-GIECF5JH.js", "/build/_shared/chunk-EZL2WUID.js", "/build/_shared/chunk-QYNV6ZXS.js", "/build/_shared/chunk-QR3HCVRD.js", "/build/_shared/chunk-6I6UQKKH.js", "/build/_shared/chunk-DFN4Z3JB.js", "/build/_shared/chunk-TWC63WIN.js", "/build/_shared/chunk-SD3IP6KZ.js", "/build/_shared/chunk-COC53NOQ.js", "/build/_shared/chunk-NHHPDOFU.js", "/build/_shared/chunk-PV3Q4SPS.js", "/build/_shared/chunk-VP5EY3GX.js", "/build/_shared/chunk-OFDOSXRQ.js", "/build/_shared/chunk-MZS6CHAS.js", "/build/_shared/chunk-VTMMMSTK.js", "/build/_shared/chunk-I5EGJ5XA.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.users.vendors.$id.edit": { id: "routes/_admin.settings.users.vendors.$id.edit", parentId: "routes/_admin", path: "settings/users/vendors/:id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.users.vendors.$id.edit-UHVT3ULB.js", imports: ["/build/_shared/chunk-KIK5IFRE.js", "/build/_shared/chunk-YUPDQZ23.js", "/build/_shared/chunk-GIECF5JH.js", "/build/_shared/chunk-EZL2WUID.js", "/build/_shared/chunk-QYNV6ZXS.js", "/build/_shared/chunk-QR3HCVRD.js", "/build/_shared/chunk-6I6UQKKH.js", "/build/_shared/chunk-DFN4Z3JB.js", "/build/_shared/chunk-TWC63WIN.js", "/build/_shared/chunk-SD3IP6KZ.js", "/build/_shared/chunk-COC53NOQ.js", "/build/_shared/chunk-NHHPDOFU.js", "/build/_shared/chunk-N7LHE6QJ.js", "/build/_shared/chunk-CLUXRPU5.js", "/build/_shared/chunk-Y6HZBLWM.js", "/build/_shared/chunk-PV3Q4SPS.js", "/build/_shared/chunk-VP5EY3GX.js", "/build/_shared/chunk-OFDOSXRQ.js", "/build/_shared/chunk-MZS6CHAS.js", "/build/_shared/chunk-VTMMMSTK.js", "/build/_shared/chunk-I5EGJ5XA.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_admin.settings.users.vendors.add": { id: "routes/_admin.settings.users.vendors.add", parentId: "routes/_admin", path: "settings/users/vendors/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_admin.settings.users.vendors.add-4YWO5WOS.js", imports: ["/build/_shared/chunk-YUPDQZ23.js", "/build/_shared/chunk-GIECF5JH.js", "/build/_shared/chunk-EZL2WUID.js", "/build/_shared/chunk-QYNV6ZXS.js", "/build/_shared/chunk-QR3HCVRD.js", "/build/_shared/chunk-6I6UQKKH.js", "/build/_shared/chunk-DFN4Z3JB.js", "/build/_shared/chunk-TWC63WIN.js", "/build/_shared/chunk-SD3IP6KZ.js", "/build/_shared/chunk-COC53NOQ.js", "/build/_shared/chunk-NHHPDOFU.js", "/build/_shared/chunk-PV3Q4SPS.js", "/build/_shared/chunk-VP5EY3GX.js", "/build/_shared/chunk-OFDOSXRQ.js", "/build/_shared/chunk-MZS6CHAS.js", "/build/_shared/chunk-VTMMMSTK.js", "/build/_shared/chunk-I5EGJ5XA.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized": { id: "routes/_authorized", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_authorized-HTSRVLY3.js", imports: ["/build/_shared/chunk-OXD53MKU.js", "/build/_shared/chunk-I7NA2BKF.js", "/build/_shared/chunk-INOJYLBZ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.change_password": { id: "routes/_authorized.change_password", parentId: "routes/_authorized", path: "change_password", index: void 0, caseSensitive: void 0, module: "/build/routes/_authorized.change_password-4IRT4NE7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.orders.$client.add": { id: "routes/_authorized.orders.$client.add", parentId: "routes/_authorized", path: "orders/:client/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_authorized.orders.$client.add-XL5WWNI6.js", imports: ["/build/_shared/chunk-BR2XK6R6.js", "/build/_shared/chunk-DKRRW7RQ.js", "/build/_shared/chunk-QYNV6ZXS.js", "/build/_shared/chunk-QR3HCVRD.js", "/build/_shared/chunk-6I6UQKKH.js", "/build/_shared/chunk-TWC63WIN.js", "/build/_shared/chunk-SD3IP6KZ.js", "/build/_shared/chunk-COC53NOQ.js", "/build/_shared/chunk-NHHPDOFU.js", "/build/_shared/chunk-4W7VMVIZ.js", "/build/_shared/chunk-Y6HZBLWM.js", "/build/_shared/chunk-VP5EY3GX.js", "/build/_shared/chunk-OFDOSXRQ.js", "/build/_shared/chunk-VTMMMSTK.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_authorized.orders._index": { id: "routes/_authorized.orders._index", parentId: "routes/_authorized", path: "orders", index: !0, caseSensitive: void 0, module: "/build/routes/_authorized.orders._index-7ZC7ZKWS.js", imports: ["/build/_shared/chunk-DKRRW7RQ.js", "/build/_shared/chunk-COC53NOQ.js", "/build/_shared/chunk-NHHPDOFU.js", "/build/_shared/chunk-GYVXVRJN.js", "/build/_shared/chunk-4W7VMVIZ.js", "/build/_shared/chunk-CLUXRPU5.js", "/build/_shared/chunk-Y6HZBLWM.js", "/build/_shared/chunk-I5EGJ5XA.js", "/build/_shared/chunk-SWYAOCMN.js", "/build/_shared/chunk-GMXXJD7U.js", "/build/_shared/chunk-MUTVBZ6W.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-PQYEZ7HG.js", imports: ["/build/_shared/chunk-I7NA2BKF.js", "/build/_shared/chunk-EZL2WUID.js", "/build/_shared/chunk-6I6UQKKH.js", "/build/_shared/chunk-SD3IP6KZ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.admin.status": { id: "routes/api.admin.status", parentId: "root", path: "api/admin/status", index: void 0, caseSensitive: void 0, module: "/build/routes/api.admin.status-CCN3NEQQ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.connect": { id: "routes/api.auth.connect", parentId: "root", path: "api/auth/connect", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.connect-SVPWINZZ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.login": { id: "routes/api.auth.login", parentId: "root", path: "api/auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.login-3AZOWS4T.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.logout": { id: "routes/api.auth.logout", parentId: "root", path: "api/auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.logout-UDESGTPA.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.auth.password": { id: "routes/api.auth.password", parentId: "root", path: "api/auth/password", index: void 0, caseSensitive: void 0, module: "/build/routes/api.auth.password-QRM7UL6D.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dictionary": { id: "routes/api.dictionary", parentId: "root", path: "api/dictionary", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dictionary-TAUNT5F4.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dictionary.active_company": { id: "routes/api.dictionary.active_company", parentId: "routes/api.dictionary", path: "active_company", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dictionary.active_company-73LF4H7F.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.cliente": { id: "routes/api.dxt.cliente", parentId: "root", path: "api/dxt/cliente", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.cliente-DSEUCYC3.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.cliente.$id": { id: "routes/api.dxt.cliente.$id", parentId: "routes/api.dxt.cliente", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.cliente.$id-ZTGH5R4W.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.pedido.articulos.print_ids": { id: "routes/api.dxt.pedido.articulos.print_ids", parentId: "root", path: "api/dxt/pedido/articulos/print_ids", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.pedido.articulos.print_ids-YOGOXLUQ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.pedido.articulos.print_list": { id: "routes/api.dxt.pedido.articulos.print_list", parentId: "root", path: "api/dxt/pedido/articulos/print_list", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.pedido.articulos.print_list-GU7KLJQE.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.pedido.articulos.screen_list": { id: "routes/api.dxt.pedido.articulos.screen_list", parentId: "root", path: "api/dxt/pedido/articulos/screen_list", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.pedido.articulos.screen_list-K2BAX63P.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.vendedor": { id: "routes/api.dxt.vendedor", parentId: "root", path: "api/dxt/vendedor", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.vendedor-ECRHX6EP.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.vendedor.$id": { id: "routes/api.dxt.vendedor.$id", parentId: "routes/api.dxt.vendedor", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.vendedor.$id-SA2Y634F.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.dxt.vendedor.cliente": { id: "routes/api.dxt.vendedor.cliente", parentId: "routes/api.dxt.vendedor", path: "cliente", index: void 0, caseSensitive: void 0, module: "/build/routes/api.dxt.vendedor.cliente-IVWYBE65.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido": { id: "routes/api.pedido", parentId: "root", path: "api/pedido", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido-UJ5V3F6P.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido.$id.edit": { id: "routes/api.pedido.$id.edit", parentId: "routes/api.pedido", path: ":id/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido.$id.edit-HXRVCL76.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido.create": { id: "routes/api.pedido.create", parentId: "routes/api.pedido", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido.create-DKEKATWN.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.pedido.renglones": { id: "routes/api.pedido.renglones", parentId: "routes/api.pedido", path: "renglones", index: void 0, caseSensitive: void 0, module: "/build/routes/api.pedido.renglones-ISI4QT6Q.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.settings.db": { id: "routes/api.settings.db", parentId: "root", path: "api/settings/db", index: void 0, caseSensitive: void 0, module: "/build/routes/api.settings.db-62WCAYJO.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.settings.misc": { id: "routes/api.settings.misc", parentId: "root", path: "api/settings/misc", index: void 0, caseSensitive: void 0, module: "/build/routes/api.settings.misc-ILHISSIZ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.tango.auxiliares": { id: "routes/api.tango.auxiliares", parentId: "root", path: "api/tango/auxiliares", index: void 0, caseSensitive: void 0, module: "/build/routes/api.tango.auxiliares-HQ4NIVVL.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.tango.cliente": { id: "routes/api.tango.cliente", parentId: "root", path: "api/tango/cliente", index: void 0, caseSensitive: void 0, module: "/build/routes/api.tango.cliente-KSUQHV66.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.tango.perfil": { id: "routes/api.tango.perfil", parentId: "root", path: "api/tango/perfil", index: void 0, caseSensitive: void 0, module: "/build/routes/api.tango.perfil-IMCA3YCV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.tango.vendedor": { id: "routes/api.tango.vendedor", parentId: "root", path: "api/tango/vendedor", index: void 0, caseSensitive: void 0, module: "/build/routes/api.tango.vendedor-IYUMAEPM.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/pdf": { id: "routes/pdf", parentId: "root", path: "pdf", index: void 0, caseSensitive: void 0, module: "/build/routes/pdf-Y7GLSEAM.js", imports: ["/build/_shared/chunk-INOJYLBZ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "87e32ae5", hmr: void 0, url: "/build/manifest-87E32AE5.js" };

// server-entry-module:@remix-run/dev/server-build
var mode2 = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
  "routes/api.dxt.pedido.articulos.screen_list": {
    id: "routes/api.dxt.pedido.articulos.screen_list",
    parentId: "root",
    path: "api/dxt/pedido/articulos/screen_list",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_pedido_articulos_screen_list_exports
  },
  "routes/_admin.settings.users.customers.add": {
    id: "routes/_admin.settings.users.customers.add",
    parentId: "routes/_admin",
    path: "settings/users/customers/add",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/api.dxt.pedido.articulos.print_list": {
    id: "routes/api.dxt.pedido.articulos.print_list",
    parentId: "root",
    path: "api/dxt/pedido/articulos/print_list",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_pedido_articulos_print_list_exports
  },
  "routes/_admin.settings.users.$type._index": {
    id: "routes/_admin.settings.users.$type._index",
    parentId: "routes/_admin",
    path: "settings/users/:type",
    index: !0,
    caseSensitive: void 0,
    module: route_exports4
  },
  "routes/api.dxt.pedido.articulos.print_ids": {
    id: "routes/api.dxt.pedido.articulos.print_ids",
    parentId: "root",
    path: "api/dxt/pedido/articulos/print_ids",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_pedido_articulos_print_ids_exports
  },
  "routes/_admin.settings.users.vendors.add": {
    id: "routes/_admin.settings.users.vendors.add",
    parentId: "routes/_admin",
    path: "settings/users/vendors/add",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports5
  },
  "routes/_authorized.orders.$client.add": {
    id: "routes/_authorized.orders.$client.add",
    parentId: "routes/_authorized",
    path: "orders/:client/add",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports6
  },
  "routes/api.dictionary.active_company": {
    id: "routes/api.dictionary.active_company",
    parentId: "routes/api.dictionary",
    path: "active_company",
    index: void 0,
    caseSensitive: void 0,
    module: api_dictionary_active_company_exports
  },
  "routes/_admin.settings.lists.$type": {
    id: "routes/_admin.settings.lists.$type",
    parentId: "routes/_admin",
    path: "settings/lists/:type",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports7
  },
  "routes/_authorized.change_password": {
    id: "routes/_authorized.change_password",
    parentId: "routes/_authorized",
    path: "change_password",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports8
  },
  "routes/_authorized.orders._index": {
    id: "routes/_authorized.orders._index",
    parentId: "routes/_authorized",
    path: "orders",
    index: !0,
    caseSensitive: void 0,
    module: route_exports9
  },
  "routes/api.dxt.vendedor.cliente": {
    id: "routes/api.dxt.vendedor.cliente",
    parentId: "routes/api.dxt.vendedor",
    path: "cliente",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_vendedor_cliente_exports
  },
  "routes/_admin.settings.company": {
    id: "routes/_admin.settings.company",
    parentId: "routes/_admin",
    path: "settings/company",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports10
  },
  "routes/_admin.settings._index": {
    id: "routes/_admin.settings._index",
    parentId: "routes/_admin",
    path: "settings",
    index: !0,
    caseSensitive: void 0,
    module: route_exports11
  },
  "routes/_admin.settings.tango": {
    id: "routes/_admin.settings.tango",
    parentId: "routes/_admin",
    path: "settings/tango",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports12
  },
  "routes/_admin.settings.misc": {
    id: "routes/_admin.settings.misc",
    parentId: "routes/_admin",
    path: "settings/misc",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports13
  },
  "routes/api.dxt.vendedor.$id": {
    id: "routes/api.dxt.vendedor.$id",
    parentId: "routes/api.dxt.vendedor",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_vendedor_id_exports
  },
  "routes/api.pedido.renglones": {
    id: "routes/api.pedido.renglones",
    parentId: "routes/api.pedido",
    path: "renglones",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_renglones_exports
  },
  "routes/api.tango.auxiliares": {
    id: "routes/api.tango.auxiliares",
    parentId: "root",
    path: "api/tango/auxiliares",
    index: void 0,
    caseSensitive: void 0,
    module: api_tango_auxiliares_exports
  },
  "routes/api.dxt.cliente.$id": {
    id: "routes/api.dxt.cliente.$id",
    parentId: "routes/api.dxt.cliente",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: api_dxt_cliente_id_exports
  },
  "routes/api.pedido.$id.edit": {
    id: "routes/api.pedido.$id.edit",
    parentId: "routes/api.pedido",
    path: ":id/edit",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_id_edit_exports
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
  "routes/api.pedido.create": {
    id: "routes/api.pedido.create",
    parentId: "routes/api.pedido",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_create_exports
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
    module: route_exports14
  },
  "routes/api.pedido": {
    id: "routes/api.pedido",
    parentId: "root",
    path: "api/pedido",
    index: void 0,
    caseSensitive: void 0,
    module: api_pedido_exports
  },
  "routes/_admin": {
    id: "routes/_admin",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route_exports15
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: route_exports16
  },
  "routes/pdf": {
    id: "routes/pdf",
    parentId: "root",
    path: "pdf",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports17
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode2 as mode,
  publicPath,
  routes
};
