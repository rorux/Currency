export type Currency = {
  symbol: string;
  name: string;
  symbolNative: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  namePlural: string;
};

export type CurrenciesState = {
  data: string[];
  loading: boolean;
  error: string | null | undefined;
};
