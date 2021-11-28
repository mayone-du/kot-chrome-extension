import { useEffect, useState } from "react";
import { KOT_URL } from "src/constants/KOT_URL";
import type { Response, SendGetStorage, SendMessage } from "src/types";

export const Table: React.VFC = () => {
  const [res, setRes] = useState<Response | null>(null);
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const currentTabId = currentTab.id ?? 0;
      if (!currentTab.url?.includes(KOT_URL)) {
        chrome.tabs.sendMessage<SendGetStorage>(
          currentTabId,
          { type: "getStorage" },
          async (res: Response) => {
            setRes(res);
          },
        );
      }
      chrome.tabs.sendMessage<SendMessage>(
        currentTabId,
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
            <td>{`${res.workTimeAvarage.hour}時間 ${res.workTimeAvarage.minutes}分`}</td>
          </tr>
          <tr>
            <td>残りの1日あたり平均勤務時間</td>
            <td>{`${res.remainingWorkTimes.hour}時間 ${res.remainingWorkTimes.minutes}分`}</td>
          </tr>
          <tr>
            <td>今月の残りの勤務時間</td>
            <td>{`${res.remainingDays}日で ${res.remainingWorkTimes.hour}時間${res.remainingWorkTimes.minutes}分`}</td>
          </tr>
          <tr>
            <td>今月の貯金 or マイナス時間</td>
            <td>{`${res.roomMinutes}分`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
