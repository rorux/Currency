import { HistoricalDto } from "@features/historical";

const API_URL = "https://api.freecurrencyapi.com/v1";

export const api = {
  currencies: `${API_URL}/currencies?apikey=${import.meta.env.VITE_API_KEY}`,
  historical: ({ currencies, dateFrom, dateTo }: HistoricalDto) =>
    `${API_URL}/historical?apikey=${
      import.meta.env.VITE_API_KEY
    }&currencies=${currencies}&date_from=${dateFrom}&date_to=${dateTo}`,
};
