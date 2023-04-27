import { format, formatRelative, isValid, subMonths } from "date-fns";
import * as l from "date-fns/locale";

export const ShortLocalizedDateFormatter = (
  value: Date | string,
  shortFormat: string
): string => {
  if (!value) return "-";

  return typeof value === "string"
    ? format(new Date(value), shortFormat, { locale: l["ru"] })
    : isValid(value)
    ? format(value, shortFormat, { locale: l["ru"] })
    : "-";
};

export const LongLocalizedDateFormatter = (value: Date | string): string => {
  return typeof value === "string"
    ? format(new Date(value), "P", { locale: l["ru"] })
    : isValid(value)
    ? format(value, "P", { locale: l["ru"] })
    : "-";
};

export const getDateStringOfPassedMonths = (
  value: Date,
  monthsCountAgo: number
): string => {
  return formatRelative(subMonths(value, monthsCountAgo), new Date());
};
