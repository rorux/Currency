import { LinearPoint } from "@features/historical";

export type LinearChartProps = {
  data: {
    id: string;
    color: string;
    data: LinearPoint[];
  }[];
};
