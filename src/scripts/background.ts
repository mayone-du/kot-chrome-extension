// eslint-disable-next-line no-console
console.log("background script");

// chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
//   // eslint-disable-next-line no-console
//   console.log(req, sender, sendRes, document.body);
//   sendRes();
//   return;
//   // return true;
// });

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  // eslint-disable-next-line no-console
  console.log(tabs);
});
export {};
