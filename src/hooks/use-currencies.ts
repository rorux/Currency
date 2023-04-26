import { useAppDispatch, useAppSelector } from "@store";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { cleanCurrenciesError, getCurrenciesList } from "@features/currencies";

export const useCurrencies = (): { loading: boolean } => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.currencies);

  if (error) {
    toast.error(error);
    dispatch(cleanCurrenciesError());
  }

  useEffect(() => {
    dispatch(getCurrenciesList());
  }, []);

  return { loading };
};
