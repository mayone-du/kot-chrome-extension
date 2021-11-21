export type SendMessage = {
  type: "getWorkData";
};

export type HourAndMinutes = {
  hour: number;
  minutes: number;
};

export type Response = {
  workDayCount: number;
  workTimeMinutes: number;
  stdMonthWorkTime: number;
  stdMonthWorkDays: number;
  remainingDays: number;
  workTimeAvarage: HourAndMinutes;
  remainingWorkTimeMinutes: number;
  remainingWorkTimes: HourAndMinutes;
};
