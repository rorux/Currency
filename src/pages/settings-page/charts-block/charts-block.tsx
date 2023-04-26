import { uniqueId } from "lodash";
import { Col, Row } from "react-bootstrap";
import { ChartsBlockItem } from "./charts-block-item";
import { ChartsBlockProps } from "./types";

export const ChartsBlock = ({
  charts,
}: ChartsBlockProps): React.ReactElement => {
  return (
    <Row className="py-4">
      {charts.length > 0 ? (
        charts.map((chart) => (
          <Col
            key={uniqueId("chart_")}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-4"
          >
            <ChartsBlockItem chart={chart} />
          </Col>
        ))
      ) : (
        <p>The chart list is empty...</p>
      )}
    </Row>
  );
};
