import { Container } from "react-bootstrap";
import { useAppSelector } from "@store";
import { selectStringifiedChartsList } from "@features/charts";
import { Header } from "@widgets/header";
import { DatePickersPanel } from "./date-pickers-panel";

export const ViewModePage = (): React.ReactElement => {
  const stringifiedChartsList = useAppSelector(selectStringifiedChartsList);

  return (
    <>
      <Header />
      <Container className="py-4">
        <h2 className="mb-4 text-center">View Mode</h2>
        {stringifiedChartsList && <DatePickersPanel />}
      </Container>
    </>
  );
};
