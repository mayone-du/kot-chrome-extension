// Chrome拡張ではWASMサポートが完璧ではないため、まだ型としてしか使用しない
import type { HourAndMinutes } from "src/types";

// import type { calc_work_avarage } from "wasm/pkg/wasm_bg";
import { ONE_HOUR_MINUTES } from "../constants/ONE_HOUR_MINUTES";

// TODO: 理想はtypeで使用するか、直接wasm使いたい → const calcWorkAvarage: typeof calc_work_avarage = ...
export const calcWorkAvarage = (workTimeMinutes: number, workDayCount: number): HourAndMinutes => {
  const hour = Math.floor(workTimeMinutes / workDayCount / ONE_HOUR_MINUTES);
  // 下回るのが怖いから切り捨て
  const minutes = Math.floor((workTimeMinutes / workDayCount) % ONE_HOUR_MINUTES);

  return { hour, minutes };
};
