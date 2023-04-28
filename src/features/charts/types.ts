export type Chart = {
  id: string;
  currency: string;
  lineColor: string;
  pointColor: string;
};

export type ChartsState = {
  data: Chart[];
};
