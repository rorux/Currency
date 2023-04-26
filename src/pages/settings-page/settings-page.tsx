import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import { Header } from "@widgets/header";
import { NewChartDialog } from "./new-chart-dialog";

export const SettingsPage = (): React.ReactElement => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Header />
      <Container className="py-4">
        <h2 className="mb-4 text-center">Settings</h2>
        <Button
          className="d-flex justify-content-center align-items-center ps-2 pe-3"
          variant="success"
          onClick={() => setShow(true)}
        >
          <BsPlus className="me-1" /> New chart
        </Button>
      </Container>
      <NewChartDialog show={show} setShow={setShow} />
    </>
  );
};
