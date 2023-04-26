import { Button, Col, Row } from "react-bootstrap";
import { useAppDispatch } from "@store";
import { removeChart } from "@features/charts";
import { Dialog } from "@components";
import { DeleteChartDialogProps } from "./types";

export const DeleteChartDialog = ({
  chart,
  show,
  setShow,
}: DeleteChartDialogProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removeChart(chart.id));
    setShow(false);
  };

  return (
    <Dialog
      title={<span>Delete chart {chart.currency}?</span>}
      show={show}
      handleClose={() => setShow(false)}
    >
      <Row>
        <Col>
          <Button className="w-100" variant="success" onClick={handleClick}>
            Yes
          </Button>
        </Col>
        <Col>
          <Button
            className="w-100"
            variant="danger"
            onClick={() => setShow(false)}
          >
            No
          </Button>
        </Col>
      </Row>
    </Dialog>
  );
};
