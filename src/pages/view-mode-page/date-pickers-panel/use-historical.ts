import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store";
import { selectStringifiedChartsList } from "@features/charts";
import { getHistoricalData } from "@features/historical";

export const useHistorical = (dateFrom: string, dateTo: string): boolean => {
  const dispatch = useAppDispatch();
  const stringifiedChartsList = useAppSelector(selectStringifiedChartsList);

  useEffect(() => {
    if (stringifiedChartsList)
      dispatch(
        getHistoricalData({
          currencies: stringifiedChartsList,
          dateFrom,
          dateTo,
        })
      );
  }, [stringifiedChartsList, dateFrom, dateTo]);

  return !!stringifiedChartsList;
};
