import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Dialog, Select } from "@components";
import { ChartColorPicker } from "../chart-color-picker";
import { useCurrency } from "./use-currency";
import { NewChartDialogProps } from "./types";

export const NewChartDialog = ({
  show,
  setShow,
}: NewChartDialogProps): React.ReactElement => {
  const [lineColor, setLineColor] = useState("#888");
  const [fillColor, setFillColor] = useState("#888");
  const { selectedCurrency, currencies, changeCurrency } = useCurrency();

  const handleClose = () => setShow(false);

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
        <Button variant="primary" className="mt-4">
          Add chart
        </Button>
      </div>
    </Dialog>
  );
};
