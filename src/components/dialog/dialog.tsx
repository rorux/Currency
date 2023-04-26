import { Modal } from "react-bootstrap";
import { DialogProps } from "./types";

export const Dialog = ({
  title,
  show,
  handleClose,
  children,
}: DialogProps): React.ReactElement => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
