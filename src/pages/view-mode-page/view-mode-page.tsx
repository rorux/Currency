import { Container } from "react-bootstrap";
import { useAppSelector } from "@store";
import { Header } from "@widgets/header";
import { Loader } from "@components";
import { DatePickersPanel } from "./date-pickers-panel";
import { LinearChartsBlock } from "./linear-charts-block";

export const ViewModePage = (): React.ReactElement => {
  const { data: charts } = useAppSelector((state) => state.charts);
  const { data: historicalData, loading } = useAppSelector(
    (state) => state.historical
  );

  return (
    <>
      <Header />
      <Container className="py-4">
        <h2 className="mb-4 text-center">View Mode</h2>
        <DatePickersPanel />
        {loading ? (
          <Loader />
        ) : (
          charts.length > 0 && (
            <LinearChartsBlock
              charts={charts}
              historicalData={historicalData}
            />
          )
        )}
      </Container>
    </>
  );
};
