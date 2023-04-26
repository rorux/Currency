import { useState } from "react";
import { useAppSelector } from "@store";

export const useCurrency = (): {
  selectedCurrency: string | null;
  currencies: string[];
  changeCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
} => {
  const [currency, setCurrency] = useState<string | null>(null);
  const { data } = useAppSelector((state) => state.currencies);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currency =
      e.target.value === "Choose a currency" ? null : e.target.value;
    setCurrency(currency);
  };

  return {
    selectedCurrency: currency,
    currencies: data,
    changeCurrency: handleChange,
  };
};
