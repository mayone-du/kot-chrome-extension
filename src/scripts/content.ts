import type { SendMessage, SendResponse } from "src/types/sendMessage";

chrome.runtime.onMessage.addListener((request: SendMessage, sender, sendResponse) => {
  // KOTのDOMからコンテンツを取得して返却
  if (request.type === "getWorkData") {
    const workDayCount = Number(document.querySelector("div.work_count")?.textContent);
    const workTime = Number(document.querySelector("td.fixed_work")?.textContent);
    const response: SendResponse = {
      workDayCount,
      workTime,
    };
    sendResponse(response);
  }
});

export {};
