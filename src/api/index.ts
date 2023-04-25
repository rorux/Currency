const API_URL = "https://api.freecurrencyapi.com/v1";

export const api = {
  currencies: `${API_URL}/currencies?apikey=${import.meta.env.VITE_API_KEY}`,
};
