// Chrome拡張ではWASMサポートが完璧ではないため、まだ型としてしか使用しない
import type { calc_work_avarage } from "wasm/pkg/wasm_bg";

export const calcWorkAvarage: typeof calc_work_avarage = (workDayCount, workTime) => {
  const result = Math.round((workTime / workDayCount) * 10) / 10;
  return result;
};
