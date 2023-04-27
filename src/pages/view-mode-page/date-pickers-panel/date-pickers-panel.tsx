import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
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
    <Card className="p-3 pt-2 mb-4" style={{ backgroundColor: "#f7f7f7" }}>
      <Row>
        <Col>
          <DatePicker
            name="begin"
            label="Beginning"
            setDate={setDateFrom}
            defaultValue={dateFrom}
          />
        </Col>
        <Col>
          <DatePicker
            name="end"
            label="Ending"
            setDate={setDateTo}
            defaultValue={dateTo}
            max={endDate}
          />
        </Col>
      </Row>
    </Card>
  );
};
