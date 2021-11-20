export type SendMessage = {
  type: "getWorkData";
};

export type SendResponse = {
  workDayCount: number;
  workTime: number;
};
