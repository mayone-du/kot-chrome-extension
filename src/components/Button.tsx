import { useState } from "react";
import type { Response, SendMessage } from "src/types";

export const Button: React.VFC = () => {
  const [timeAvg, setTimeAvg] = useState<number | null>(null);
  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage<SendMessage>(
        tabs[0].id ?? 0,
        { type: "getWorkData" },
        (res: Response) => {
          setTimeAvg(res.workTimeAvarage);
        },
      );
    });
  };
  return (
    <button onClick={handleClick} className="block p-2 m-2 mx-auto rounded border">
      Click me!
      {timeAvg && <span className="ml-2 font-bold text-blue-400">{timeAvg}</span>}
    </button>
  );
};
