import type { Response, SendMessage } from "src/types";

// パスの解決ができなくなるため、絶対パスではなく相対パスで指定
import { ONE_DAY_WORK_TIME } from "../constants/ONE_DAY_WORK_TIME";
import { calcWorkAvarage } from "../functions/calcWorkAvarage";

chrome.runtime.onMessage.addListener((request: SendMessage, sender, sendResponse) => {
  // KOTのDOMからコンテンツを取得して返却
  if (request.type === "getWorkData") {
    // すでに働いた日数
    const workDayCount = Number(document.querySelector("div.work_count")?.textContent);

    // すでに働いた時間
    const workTime = Number(document.querySelector("td.fixed_work")?.textContent);

    // その月に働くはずである時間
    const stdMonthWorkTime = Number(
      document.querySelector("td.htBlock-normalTable_splitter")?.textContent,
    );

    // その月に働くはずである日数
    const stdMonthWorkDays = stdMonthWorkTime / ONE_DAY_WORK_TIME;

    // 残りの出勤日数
    const remainingDays = stdMonthWorkDays - workDayCount;

    // 平均で働いている時間
    const workTimeAvarage = calcWorkAvarage(workTime, workDayCount);

    const response: Response = {
      workDayCount,
      workTime,
      stdMonthWorkTime,
      stdMonthWorkDays,
      remainingDays,
      workTimeAvarage,
    };

    sendResponse(response);
  }
});

export {};
