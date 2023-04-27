import { Card, Col, Row } from "react-bootstrap";
import { LinearChart } from "@components";
import { LinearChartsBlockProps } from "./types";

export const LinearChartsBlock = ({
  charts,
  historicalData,
}: LinearChartsBlockProps): React.ReactElement => {
  return (
    <Row>
      {charts.map((chart) => (
        <Col key={chart.id} xs={12} xl={6} className="mb-3">
          <Card>
            <Card.Header>
              <strong>USD/{chart.currency}</strong>
            </Card.Header>
            <Card.Body style={{ height: "300px" }}>
              <LinearChart
                data={[
                  {
                    id: chart.currency,
                    color: chart.lineColor,
                    data: historicalData?.[chart.currency] ?? [],
                  },
                ]}
              />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
