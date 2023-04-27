import { Container } from "react-bootstrap";
import { useAppSelector } from "@store";
import { selectStringifiedChartsList } from "@features/charts";
import { Header } from "@widgets/header";
import { Loader } from "@components";
import { DatePickersPanel } from "./date-pickers-panel";
import { LinearChartsBlock } from "./linear-charts-block";

export const ViewModePage = (): React.ReactElement => {
  const stringifiedChartsList = useAppSelector(selectStringifiedChartsList);
  const { data: charts } = useAppSelector((state) => state.charts);
  const { data: historicalData, loading } = useAppSelector(
    (state) => state.historical
  );

  return (
    <>
      <Header />
      <Container className="py-4">
        <h2 className="mb-4 text-center">View Mode</h2>
        {stringifiedChartsList ? (
          <DatePickersPanel />
        ) : (
          <p className="text-center">
            There are no charts. Configure charts on the "Settings" page.
          </p>
        )}
        {loading ? (
          <Loader />
        ) : (
          <LinearChartsBlock charts={charts} historicalData={historicalData} />
        )}
      </Container>
    </>
  );
};
