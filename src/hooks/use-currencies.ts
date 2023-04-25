import { useAppDispatch } from "@store";
import { useEffect } from "react";
import { getCurrenciesList } from "@features/currencies";

export const useCurrencies = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrenciesList());
  }, []);
};
