import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Row } from "react-bootstrap";
import { uniqueId } from "lodash";
import { useAppDispatch } from "@store";
import { addChart, updateChart } from "@features/charts";
import { Dialog, Select } from "@components";
import { ChartColorPicker } from "../chart-color-picker";
import { useCurrency } from "./use-currency";
import { NewChartDialogProps } from "./types";

const defaultLineColor = "#888";
const defaultPointColor = "#fff";

export const ChartDialog = ({
  id,
  currency,
  lColor,
  pColor,
  title,
  show,
  setShow,
}: NewChartDialogProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const [lineColor, setLineColor] = useState(lColor ?? defaultLineColor);
  const [pointColor, setPointColor] = useState(pColor ?? defaultPointColor);
  const { selectedCurrency, setCurrency, currencies, changeCurrency } =
    useCurrency(currency);

  const handleClose = () => setShow(false);

  const handleClick = () => {
    if (!selectedCurrency) {
      toast.error("Choose a currency!");
    } else {
      const newChart = {
        id: id ?? uniqueId("chart_"),
        currency: selectedCurrency,
        lineColor,
        pointColor,
      };
      dispatch(id ? updateChart(newChart) : addChart(newChart));
      setLineColor(defaultLineColor);
      setPointColor(defaultPointColor);
      setCurrency(null);
      setShow(false);
    }
  };

  return (
    <Dialog title={title} show={show} handleClose={handleClose}>
      <Select
        data={currencies}
        selected={currency}
        handleChange={changeCurrency}
      />
      <Row className="mt-4">
        <Col className="mb-4 mb-sm-0">
          <ChartColorPicker
            title="Set the line color"
            color={lineColor}
            setColor={setLineColor}
          />
        </Col>
        <Col>
          <ChartColorPicker
            title="Set the points color"
            color={pointColor}
            setColor={setPointColor}
          />
        </Col>
      </Row>

      <div className="text-center mb-2">
        <Button variant="primary" className="mt-4" onClick={handleClick}>
          {id ? "Update" : "Add"} chart
        </Button>
      </div>
    </Dialog>
  );
};
