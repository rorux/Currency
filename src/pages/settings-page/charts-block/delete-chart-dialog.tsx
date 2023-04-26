import { Button, Col, Row } from "react-bootstrap";
import { useAppDispatch } from "@store";
import { removeChart } from "@features/charts";
import { Dialog } from "@components";
import { DeleteChartDialogProps } from "./types";

export const DeleteChartDialog = ({
  currency,
  show,
  setShow,
}: DeleteChartDialogProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removeChart(currency));
    setShow(false);
  };

  return (
    <Dialog
      title={<span>Delete chart {currency}?</span>}
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
