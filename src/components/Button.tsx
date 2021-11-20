import type { SendMessage } from "src/types/sendMessage";

export const Button: React.VFC = () => {
  const handleClick = () => {
    // chrome.runtime.sendMessage<SendMessage>({ type: "getDocumentBody" }, (res) => {
    //   // eslint-disable-next-line no-console
    //   console.log("click res:", res);
    // });
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage<SendMessage>(tabs[0].id ?? 0, { type: "getDocumentBody" }, (res) => {
        // eslint-disable-next-line no-console
        console.log("sendMessage res:", res);
      });
    });
  };
  return (
    <button onClick={handleClick} className="block p-2 m-2 mx-auto rounded border">
      Click me!
    </button>
  );
};
