import { LinearPoint } from "@features/historical";

export type LinearChartProps = {
  pointColor: string;
  data: {
    id: string;
    color: string;
    data: LinearPoint[];
  }[];
};
