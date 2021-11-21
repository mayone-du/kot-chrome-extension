import { useEffect, useState } from "react";
import { KOT_URL } from "src/constants/KOT_URL";
import type { Response, SendMessage } from "src/types";

export const Table: React.VFC = () => {
  const [res, setRes] = useState<Response | null>(null);
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      if (!currentTab.url?.includes(KOT_URL)) return;
      // eslint-disable-next-line no-console
      console.log("currentTab: ", currentTab);
      chrome.tabs.sendMessage<SendMessage>(
        currentTab.id ?? 0,
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
