import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import { useAppSelector } from "@store";
import { Header } from "@widgets/header";
import { NewChartDialog } from "./new-chart-dialog";
import { ChartsBlock } from "./charts-block";

export const SettingsPage = (): React.ReactElement => {
  const [show, setShow] = useState(false);
  const { data: charts } = useAppSelector((state) => state.charts);

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
        <ChartsBlock charts={charts} />
      </Container>
      <NewChartDialog show={show} setShow={setShow} />
    </>
  );
};
