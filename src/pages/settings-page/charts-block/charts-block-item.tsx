import { Card, Col, Placeholder, Row } from "react-bootstrap";
import { ChartsBlockItemProps } from "./types";

export const ChartsBlockItem = ({
  chart,
}: ChartsBlockItemProps): React.ReactElement => {
  return (
    <Card>
      <Card.Header>{chart.currency}</Card.Header>
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
    </Card>
  );
};
