import { Chart } from "@features/charts";
import { HistoricalData } from "@features/historical";

export type LinearChartsBlockProps = {
  charts: Chart[];
  historicalData: HistoricalData;
};
