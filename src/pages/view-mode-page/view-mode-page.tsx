import { Container } from "react-bootstrap";
import { useAppSelector } from "@store";
import { selectStringifiedChartsList } from "@features/charts";
import { Header } from "@widgets/header";

export const ViewModePage = (): React.ReactElement => {
  const stringifiedChartsList = useAppSelector(selectStringifiedChartsList);
  console.log(stringifiedChartsList);

  return (
    <>
      <Header />
      <Container>
        <h1>View Mode</h1>
      </Container>
    </>
  );
};
