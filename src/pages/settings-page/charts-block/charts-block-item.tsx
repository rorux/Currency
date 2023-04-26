import { useState } from "react";
import { Card, Col, Placeholder, Row } from "react-bootstrap";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { DeleteChartDialog } from "./delete-chart-dialog";
import { ChartsBlockItemProps } from "./types";

export const ChartsBlockItem = ({
  chart,
}: ChartsBlockItemProps): React.ReactElement => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  return (
    <Card>
      <Card.Header className="d-flex align-items-center">
        <span className="flex-grow-1">{chart.currency}</span>
        <BsPencilSquare className="me-2 cursor-pointer" />
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
        currency={chart.currency}
      />
    </Card>
  );
};
