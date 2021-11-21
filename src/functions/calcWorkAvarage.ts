// Chrome拡張ではWASMサポートが完璧ではないため、まだ型としてしか使用しない
import type { WorkTimeAvarage } from "src/types";
// eslint-disable-next-line
import type { calc_work_avarage } from "wasm/pkg/wasm_bg";

import { ONE_HOUR_MINUTES } from "../constants/ONE_HOUR_MINUTES";

// TODO: 理想はtypeで使用するか、直接wasm使いたい → const calcWorkAvarage: typeof calc_work_avarage = ...
export const calcWorkAvarage = (workTimeMinutes: number, workDayCount: number): WorkTimeAvarage => {
  const hour = Math.floor(Math.round(workTimeMinutes / workDayCount) / ONE_HOUR_MINUTES);
  const minutes = Math.ceil(Math.round(workTimeMinutes / workDayCount) % ONE_HOUR_MINUTES);

  return { hour, minutes };
};
