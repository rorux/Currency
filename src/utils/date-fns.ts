import { format, formatRelative, isValid, subMonths } from "date-fns";

export const ShortLocalizedDateFormatter = (
  value: Date | string,
  shortFormat: string
): string => {
  if (!value) return "-";

  return typeof value === "string"
    ? format(new Date(value), shortFormat)
    : isValid(value)
    ? format(value, shortFormat)
    : "-";
};

export const getDateStringOfPassedMonths = (
  value: Date,
  monthsCountAgo: number
): string => {
  return formatRelative(subMonths(value, monthsCountAgo), new Date());
};
