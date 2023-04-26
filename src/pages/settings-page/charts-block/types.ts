import { Chart } from "@features/charts";

export type ChartsBlockProps = {
  charts: Chart[];
};

export type ChartsBlockItemProps = {
  chart: Chart;
};

export type DeleteChartDialogProps = {
  currency: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
