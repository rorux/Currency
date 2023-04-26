export type Chart = {
  id: string;
  currency: string;
  lineColor: string;
  fillColor: string;
};

export type ChartsState = {
  data: Chart[];
};
