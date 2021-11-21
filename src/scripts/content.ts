import type { Response, SendMessage } from "src/types";

// パスの解決ができなくなるため、絶対パスではなく相対パスで指定
import { ONE_DAY_WORK_TIME } from "../constants/ONE_DAY_WORK_TIME";
import { ONE_HOUR_MINUTES } from "../constants/ONE_HOUR_MINUTES";
import { calcWorkAvarage } from "../functions/calcWorkAvarage";

// TODO: KOTは8.00で8時間、7.55で7時間55分という感じで表示されることの考慮
// TODO: リファクタ
chrome.runtime.onMessage.addListener((request: SendMessage, sender, sendResponse) => {
  // KOTのDOMからコンテンツを取得して返却
  if (request.type === "getWorkData") {
    // すでに働いた日数
    const workDayCount = Number(document.querySelector("div.work_count")?.textContent);

    // すでに働いた時間と分数 10時間20分の場合→10.20 で取得される
    const workTime = Number(document.querySelector("td.fixed_work")?.textContent);
    // すでに働いた分数
    const workTimeMinutes = workTime
      .toString()
      .split(".")
      .map((v, index) => {
        if (index === 0) {
          return Number(v) * ONE_HOUR_MINUTES;
        } else {
          return Number(v);
        }
      })
      .reduce((current, next) => {
        return current + next;
      });

    // その月に働くはずである時間
    const stdMonthWorkTime = Number(
      document.querySelector("td.htBlock-normalTable_splitter")?.textContent,
    );

    // その月に働くはずである日数
    const stdMonthWorkDays = stdMonthWorkTime / ONE_DAY_WORK_TIME;

    // 残りの出勤日数
    const remainingDays = stdMonthWorkDays - workDayCount;

    // 平均で働いている時間
    // 8, 8.20 → 480, 500 | result: 490
    const workTimeAvarage = calcWorkAvarage(workTimeMinutes, workDayCount);

    // 残りの1日あたりに働けば良い平均勤務分数
    const remainingWorkTimeMinutes = Math.ceil(
      (stdMonthWorkTime * ONE_HOUR_MINUTES - workTimeMinutes) / remainingDays,
    );

    const remainingWorkTimes = {
      hour: Math.floor(remainingWorkTimeMinutes / ONE_HOUR_MINUTES),
      minutes: Math.ceil(remainingWorkTimeMinutes % ONE_HOUR_MINUTES),
    };

    const response: Response = {
      workDayCount,
      workTimeMinutes,
      stdMonthWorkTime,
      stdMonthWorkDays,
      remainingDays,
      workTimeAvarage,
      remainingWorkTimeMinutes,
      remainingWorkTimes,
    };

    sendResponse(response);
  }
});

export {};
