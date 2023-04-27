export type LinearPoint = {
  x: string;
  y: number;
};

export type HistoricalData = Record<string, LinearPoint[]> | null;

export type HistoricalState = {
  data: HistoricalData;
  loading: boolean;
  error: string | null | undefined;
};

export type HistoricalDto = {
  currencies: string;
  dateFrom: string;
  dateTo: string;
};
