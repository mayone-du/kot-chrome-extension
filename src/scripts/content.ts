// eslint-disable-next-line no-console
console.log("call content script!", document.body);

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  // eslint-disable-next-line no-console
  console.log("call content onMessage", msg, sender, sendResponse);
  sendResponse("hoge");
});

export {};
