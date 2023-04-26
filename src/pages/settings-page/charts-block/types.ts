import { Chart } from "@features/charts";

export type ChartsBlockProps = {
  charts: Chart[];
};

export type ChartsBlockItemProps = {
  chart: Chart;
};

export type DeleteChartDialogProps = {
  chart: Chart;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
