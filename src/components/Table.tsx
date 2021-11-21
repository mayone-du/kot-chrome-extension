import { useEffect, useState } from "react";
import type { Response, SendMessage } from "src/types";

export const Table: React.VFC = () => {
  const [res, setRes] = useState<Response | null>(null);
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage<SendMessage>(
        tabs[0].id ?? 0,
        { type: "getWorkData" },
        (res: Response) => {
          setRes(res);
        },
      );
    });
  }, []);

  if (!res) return <div>Calculating...</div>;

  return (
    <div>
      <table className="border">
        <tbody>
          <tr>
            <td>平均勤務時間</td>
            <td>{res.workTimeAvarage}</td>
          </tr>
          <tr>
            <td>残りの1日あたり平均勤務時間</td>
            <td>{res.remainingWorkTime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
