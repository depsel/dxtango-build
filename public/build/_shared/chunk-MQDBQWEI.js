import {
  AxiosRequestPlusError,
  axiosRequestPlus,
  checkTokenErrorAndRedirect,
  createDXTApiParams,
  exceptionToDXTErrorInfo,
  useBasicAppResources
} from "/build/_shared/chunk-47TYDRZU.js";
import {
  require_react
} from "/build/_shared/chunk-MIDFM7PG.js";
import {
  __toESM,
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// src/code.client/hooks/useDXTApiFetch.ts
init_Buffer();
var import_react2 = __toESM(require_react(), 1);

// src/@core/react-hooks/useAxiosFetch.ts
init_Buffer();
var import_react = __toESM(require_react(), 1);
var FetchState = class {
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
      orElse: (_) => {
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
};
var FetchStateLoading = class extends FetchState {
  constructor(originalRequest) {
    super(originalRequest);
  }
};
var FetchStateError = class extends FetchState {
  constructor(error, originalRequest) {
    super(originalRequest);
    this.error = error;
  }
};
var FetchStateSuccess = class extends FetchState {
  constructor(data, originalRequest) {
    super(originalRequest);
    this.data = data;
  }
};
function useAxiosFetch(params, ...args) {
  const [fetchState, setFetchState] = (0, import_react.useState)(
    new FetchStateLoading(params)
  );
  const retry = async () => {
    setFetchState(new FetchStateLoading(fetchState.originalRequest));
    await makeRequest();
  };
  const makeRequest = async () => {
    const params2 = fetchState.originalRequest;
    try {
      const response = await axiosRequestPlus(params2);
      const data = response?.data?.data ?? response?.data;
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
  (0, import_react.useEffect)(() => {
    makeRequest();
  }, []);
  return {
    state: fetchState,
    retry
  };
}

// src/code.client/hooks/useDXTApiFetch.ts
function useDXTApiFetch(params) {
  const app = useBasicAppResources();
  const retryCallback = app.retryCallback;
  const dxtApiParams = createDXTApiParams(app, params);
  const { state, retry } = useAxiosFetch(
    dxtApiParams,
    (axiosError) => {
      return exceptionToDXTErrorInfo(axiosError);
    }
  );
  (0, import_react2.useEffect)(() => {
    (async () => {
      const isSilent = params?.silent ?? false;
      if (isSilent)
        return;
      if (!(state instanceof FetchStateError))
        return;
      const stateError = state.error;
      const isTokenError = await checkTokenErrorAndRedirect(app, stateError.status);
      if (isTokenError)
        return;
      if (retryCallback && await retryCallback({
        message: stateError.error
      }))
        retry();
    })();
  }, [state]);
  return {
    state,
    retry
  };
}

export {
  FetchStateLoading,
  FetchStateError,
  FetchStateSuccess,
  useDXTApiFetch
};
//# sourceMappingURL=/build/_shared/chunk-MQDBQWEI.js.map
