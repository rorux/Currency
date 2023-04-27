import { useState } from "react";
import { Card, Col, Placeholder, Row } from "react-bootstrap";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { DeleteChartDialog } from "./delete-chart-dialog";
import { ChartDialog } from "../chart-dialog";
import { ChartsBlockItemProps } from "./types";

export const ChartsBlockItem = ({
  chart,
}: ChartsBlockItemProps): React.ReactElement => {
  const [showUpdatedChartDialog, setShowUpdatedChartDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <Card>
      <Card.Header className="d-flex align-items-center">
        <span className="flex-grow-1">
          <strong>{chart.currency}</strong>
        </span>
        <BsPencilSquare
          className="me-2 cursor-pointer"
          onClick={() => setShowUpdatedChartDialog(true)}
        />
        <BsFillTrashFill
          className="cursor-pointer"
          onClick={() => setShowDeleteDialog(true)}
        />
      </Card.Header>
      <Card.Body>
        <Row className="mb-2">
          <Col>Line color</Col>
          <Col>
            <Placeholder
              className="opacity-100"
              xs={12}
              style={{ backgroundColor: chart.lineColor, cursor: "default" }}
            />
          </Col>
        </Row>
        <Row>
          <Col>Fill color</Col>
          <Col>
            <Placeholder
              className="opacity-100"
              xs={12}
              style={{ backgroundColor: chart.fillColor, cursor: "default" }}
            />
          </Col>
        </Row>
      </Card.Body>
      <DeleteChartDialog
        show={showDeleteDialog}
        setShow={setShowDeleteDialog}
        chart={chart}
      />
      <ChartDialog
        show={showUpdatedChartDialog}
        setShow={setShowUpdatedChartDialog}
        title="Update chart"
        id={chart.id}
        currency={chart.currency}
        lColor={chart.lineColor}
        fColor={chart.fillColor}
      />
    </Card>
  );
};
