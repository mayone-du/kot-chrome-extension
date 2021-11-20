import type { SendMessage } from "src/types/sendMessage";

chrome.runtime.onMessage.addListener((request: SendMessage, sender, sendResponse) => {
  // KOTのDOMからコンテンツを取得して返却
  if (request.type === "getWorkData") {
    const workDayCount = Number(document.querySelector("div.work_count")?.textContent);
    const workTime = Number(document.querySelector("td.fixed_work")?.textContent);
    // const calcedWorkTime = Math.round((workTime / workDayCount) * 10) / 10; // 桁数調整
    // eslint-disable-next-line no-console
    // console.log("element: ", workTime, "count: ", workDayCount, "calced: ", calcedWorkTime);
    sendResponse({
      workDayCount,
      workTime,
    });
  }
});

export {};
