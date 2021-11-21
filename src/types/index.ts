export type SendMessage = {
  type: "getWorkData";
};

export type WorkTimeAvarage = {
  hour: number;
  minutes: number;
};

export type Response = {
  workDayCount: number;
  workTimeMinutes: number;
  stdMonthWorkTime: number;
  stdMonthWorkDays: number;
  remainingDays: number;
  workTimeAvarage: WorkTimeAvarage;
  remainingWorkTimeMinutes: number;
};
