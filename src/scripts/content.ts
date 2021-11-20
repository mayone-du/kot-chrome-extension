import type { SendMessage } from "src/types/sendMessage";

chrome.runtime.onMessage.addListener((request: SendMessage, sender, sendResponse) => {
  // KOTのDOMからコンテンツを取得して返却
  if (request.type === "getDocumentBody") {
    const workTimeElements = document.querySelectorAll(".all_work_time");
    // eslint-disable-next-line no-console
    console.log("element: ", workTimeElements);
    sendResponse(workTimeElements);
  }
});

export {};
