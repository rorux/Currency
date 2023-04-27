import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { DatePicker } from "@components";
import {
  getDateStringOfPassedMonths,
  ShortLocalizedDateFormatter,
} from "@utils/date-fns";
import { yesterday } from "@constants";
import { useHistorical } from "./use-historical";

const monthsCountAgo = 1;
const beginDate = ShortLocalizedDateFormatter(
  getDateStringOfPassedMonths(yesterday, monthsCountAgo),
  "yyyy-MM-dd"
);
const endDate = ShortLocalizedDateFormatter(yesterday, "yyyy-MM-dd");

export const DatePickersPanel = (): React.ReactElement => {
  const [dateFrom, setDateFrom] = useState(beginDate);
  const [dateTo, setDateTo] = useState(endDate);
  useHistorical(dateFrom, dateTo);

  return (
    <Row>
      <Col>
        <DatePicker
          name="begin"
          setDate={setDateFrom}
          defaultValue={dateFrom}
        />
      </Col>
      <Col>
        <DatePicker
          name="end"
          setDate={setDateTo}
          defaultValue={dateTo}
          max={endDate}
        />
      </Col>
    </Row>
  );
};
