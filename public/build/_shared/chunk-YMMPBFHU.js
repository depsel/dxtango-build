import {
  API_TANGO_CLIENTE,
  API_TANGO_VENDEDOR
} from "/build/_shared/chunk-JJ4SMVFI.js";
import {
  useTangoList
} from "/build/_shared/chunk-LKDVMBGW.js";
import {
  API_DXT_CUSTOMERS,
  API_DXT_CUSTOMERS_ID,
  API_DXT_VENDORS,
  API_DXT_VENDORS_ID,
  require_AccountCancelIcon
} from "/build/_shared/chunk-FO6D3CQX.js";
import {
  useDXTApiFetch
} from "/build/_shared/chunk-MQDBQWEI.js";
import {
  Icon,
  URL_SETTINGS_CUSTOMERS_ADD_PATH,
  URL_SETTINGS_CUSTOMERS_EDIT_PATH,
  URL_SETTINGS_CUSTOMERS_PATH,
  URL_SETTINGS_VENDORS_ADD_PATH,
  URL_SETTINGS_VENDORS_EDIT_PATH,
  URL_SETTINGS_VENDORS_PATH,
  dxtApiRequest
} from "/build/_shared/chunk-47TYDRZU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-C6PYO3SA.js";
import {
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// src/code.client/crud_configs/users/index.tsx
init_Buffer();
var import_AccountCancelIcon = __toESM(require_AccountCancelIcon(), 1);

// src/api-client/dxt/user/requests.ts
init_Buffer();
var customerCreateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      url: API_DXT_CUSTOMERS,
      data: input,
      method: "POST",
      silent: true
    },
    app
  );
};
var customerUpdateRequest = async (id, input, app) => {
  return await dxtApiRequest(
    {
      url: API_DXT_CUSTOMERS_ID,
      pathParams: { id },
      data: input,
      method: "PATCH",
      silent: true
    },
    app
  );
};
var customerDeleteRequest = async (id, input, app) => await dxtApiRequest(
  {
    url: API_DXT_CUSTOMERS_ID,
    pathParams: { id },
    data: input,
    method: "DELETE",
    silent: true
  },
  app
);
var vendorCreateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      url: API_DXT_VENDORS,
      data: input,
      method: "POST",
      silent: true
    },
    app
  );
};
var vendorDeleteRequest = async (id, input, app) => await dxtApiRequest(
  {
    url: API_DXT_VENDORS_ID,
    pathParams: { id },
    data: input,
    method: "DELETE",
    silent: true
  },
  app
);
var vendorUpdateRequest = async (id, input, app) => {
  return await dxtApiRequest(
    {
      url: API_DXT_VENDORS_ID,
      pathParams: { id },
      data: input,
      method: "PATCH",
      silent: true
    },
    app
  );
};

// src/code.client/crud_configs/users/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var settings = {
  customers: {
    api: {
      getAll: () => {
        return useDXTApiFetch({
          url: API_DXT_CUSTOMERS,
          silent: true
        });
      },
      getOne: (id) => {
        return useDXTApiFetch({
          url: API_DXT_CUSTOMERS_ID,
          pathParams: { id },
          silent: true
        });
      },
      getRelation: () => {
        return useTangoList({
          url: API_TANGO_CLIENTE,
          fieldsMap: {
            label: "screen_name",
            value: "id",
            isEnabled: "habilitado"
          },
          disabledIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { as: import_AccountCancelIcon.default, color: "red.400", ml: 2, boxSize: 5 }, void 0, false, {
            fileName: "src/code.client/crud_configs/users/index.tsx",
            lineNumber: 140,
            columnNumber: 13
          }, this)
        });
      },
      post: async (input, app) => {
        return customerCreateRequest(input, app);
      },
      patch: async (id, input, app) => {
        return customerUpdateRequest(id, input, app);
      },
      delete: async (id, input, app) => {
        return customerDeleteRequest(id, input, app);
      }
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
      getAll: () => {
        return useDXTApiFetch({
          url: API_DXT_VENDORS,
          silent: true
        });
      },
      getOne: (id) => {
        return useDXTApiFetch({
          url: API_DXT_VENDORS_ID,
          pathParams: { id },
          silent: true
        });
      },
      getRelation: () => {
        return useTangoList({
          url: API_TANGO_VENDEDOR,
          fieldsMap: {
            label: "screen_name",
            value: "id",
            isEnabled: "habilitado"
          },
          disabledIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { as: import_AccountCancelIcon.default, color: "red.400", ml: 2, boxSize: 5 }, void 0, false, {
            fileName: "src/code.client/crud_configs/users/index.tsx",
            lineNumber: 198,
            columnNumber: 13
          }, this)
        });
      },
      post: async (input, app) => {
        return vendorCreateRequest(input, app);
      },
      patch: async (id, input, app) => {
        return vendorUpdateRequest(id, input, app);
      },
      delete: async (id, input, app) => {
        return vendorDeleteRequest(id, input, app);
      }
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

export {
  settings
};
//# sourceMappingURL=/build/_shared/chunk-YMMPBFHU.js.map
