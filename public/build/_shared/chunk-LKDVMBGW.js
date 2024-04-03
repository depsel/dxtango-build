import {
  useDXTApiFetch
} from "/build/_shared/chunk-MQDBQWEI.js";
import {
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// src/code.client/hooks/useTangoList.tsx
init_Buffer();
var buildSelectOptions = (props) => {
  const { data, fieldsMap, disabledIcon } = props;
  const result = [];
  data.length && data.forEach((data2) => {
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
  });
  return result;
};
function useTangoList(props) {
  const { url, params, fieldsMap, disabledIcon } = props;
  const { state, retry } = useDXTApiFetch({
    url,
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

export {
  buildSelectOptions,
  useTangoList
};
//# sourceMappingURL=/build/_shared/chunk-LKDVMBGW.js.map
