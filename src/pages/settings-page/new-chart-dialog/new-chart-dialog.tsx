import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Col, Row } from "react-bootstrap";
import { useAppDispatch } from "@store";
import { addChart } from "@features/charts";
import { Dialog, Select } from "@components";
import { ChartColorPicker } from "../chart-color-picker";
import { useCurrency } from "./use-currency";
import { NewChartDialogProps } from "./types";

export const NewChartDialog = ({
  show,
  setShow,
}: NewChartDialogProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const [lineColor, setLineColor] = useState("#888");
  const [fillColor, setFillColor] = useState("#888");
  const { selectedCurrency, currencies, changeCurrency } = useCurrency();

  const handleClose = () => setShow(false);

  const handleClick = () => {
    if (!selectedCurrency) {
      toast.error("Choose a currency!");
    } else {
      const newChart = {
        currency: selectedCurrency,
        lineColor,
        fillColor,
      };
      dispatch(addChart(newChart));
    }
  };

  return (
    <Dialog title="New Chart Settings" show={show} handleClose={handleClose}>
      <Select data={currencies} handleChange={changeCurrency} />
      <Row className="mt-3">
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
