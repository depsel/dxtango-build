import {
  ValueObject,
  apiPath,
  dxtApiRequest,
  isTCPPort
} from "/build/_shared/chunk-47TYDRZU.js";
import {
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// src/api-client/settings/paths.ts
init_Buffer();
var API_SETTINGS_DB = apiPath("/settings/db");
var API_SETTINGS_MISC = apiPath("/settings/misc");

// src/api-client/settings/requests.ts
init_Buffer();
var settingsDBUpdateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      url: API_SETTINGS_DB,
      data: input,
      method: "POST",
      silent: true
    },
    app
  );
};
var settingsMiscUpdateRequest = async (input, app) => {
  return await dxtApiRequest(
    {
      url: API_SETTINGS_MISC,
      data: input,
      method: "POST",
      silent: true
    },
    app
  );
};

// src/@core/value_objects/vo_tcp_port.ts
init_Buffer();
var VOTCPPort = class extends ValueObject {
  validate(input) {
    let value = input;
    if (typeof value === "string")
      value = Number.parseInt(value);
    if (typeof value === "number" && isTCPPort(value))
      return value;
    this.throwError(input);
  }
};

// src/domain/settings/consts/index.ts
init_Buffer();
var DB_CONNECTION_TIMEOUT_MIN_SECONDS = 0;
var DB_CONNECTION_TIMEOUT_MAX_SECONDS = 300;
var AUTH_EXPIRATION_MIN_DAYS = 1;
var AUTH_EXPIRATION_MAX_DAYS = 365;

export {
  VOTCPPort,
  API_SETTINGS_DB,
  API_SETTINGS_MISC,
  settingsDBUpdateRequest,
  settingsMiscUpdateRequest,
  DB_CONNECTION_TIMEOUT_MIN_SECONDS,
  DB_CONNECTION_TIMEOUT_MAX_SECONDS,
  AUTH_EXPIRATION_MIN_DAYS,
  AUTH_EXPIRATION_MAX_DAYS
};
//# sourceMappingURL=/build/_shared/chunk-UAH53UTH.js.map
