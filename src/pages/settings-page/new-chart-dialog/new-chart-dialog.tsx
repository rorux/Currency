import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Row } from "react-bootstrap";
import { uniqueId } from "lodash";
import { useAppDispatch } from "@store";
import { addChart } from "@features/charts";
import { Dialog, Select } from "@components";
import { ChartColorPicker } from "../chart-color-picker";
import { useCurrency } from "./use-currency";
import { NewChartDialogProps } from "./types";

const defaultColor = "#888";

export const NewChartDialog = ({
  show,
  setShow,
}: NewChartDialogProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const [lineColor, setLineColor] = useState(defaultColor);
  const [fillColor, setFillColor] = useState(defaultColor);
  const { selectedCurrency, setCurrency, currencies, changeCurrency } =
    useCurrency();

  const handleClose = () => setShow(false);

  const handleClick = () => {
    if (!selectedCurrency) {
      toast.error("Choose a currency!");
    } else {
      const newChart = {
        id: uniqueId("chart_"),
        currency: selectedCurrency,
        lineColor,
        fillColor,
      };
      dispatch(addChart(newChart));
      setLineColor(defaultColor);
      setFillColor(defaultColor);
      setCurrency(null);
      setShow(false);
    }
  };

  return (
    <Dialog title="New Chart Settings" show={show} handleClose={handleClose}>
      <Select data={currencies} handleChange={changeCurrency} />
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
            title="Set the fill color"
            color={fillColor}
            setColor={setFillColor}
          />
        </Col>
      </Row>

      <div className="text-center mb-2">
        <Button variant="primary" className="mt-4" onClick={handleClick}>
          Add chart
        </Button>
      </div>
    </Dialog>
  );
};
