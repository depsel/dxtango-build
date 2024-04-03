import {
  init_Buffer
} from "/build/_shared/chunk-6OOH3HNM.js";

// src/yup/utils.ts
init_Buffer();
function yupVOValidation(VO, value) {
  try {
    new VO(value);
    return true;
  } catch (_) {
    return false;
  }
}

export {
  yupVOValidation
};
//# sourceMappingURL=/build/_shared/chunk-WNBLH7AI.js.map
