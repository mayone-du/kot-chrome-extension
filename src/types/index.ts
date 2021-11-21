export type SendMessage = {
  type: "getWorkData";
};

export type Response = {
  workDayCount: number;
  workTime: number;
  stdMonthWorkTime: number;
  stdMonthWorkDays: number;
  remainingDays: number;
  workTimeAvarage: number;
  remainingWorkTime: number;
};
