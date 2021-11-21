// Chrome拡張ではWASMサポートが完璧ではないため、まだ型としてしか使用しない
import type { calc_work_avarage } from "wasm/pkg/wasm_bg";

export const calcWorkAvarage: typeof calc_work_avarage = (workTime, workDayCount) => {
  const result = Math.round((workTime / workDayCount) * 100) / 100;
  return result;
};
