import { ResponsiveLine } from "@nivo/line";
import { LongLocalizedDateFormatter } from "@utils/date-fns";
import { LinearChartProps } from "./types";

const getTicksLabelsPeriodicity = (ticksCount: number): string => {
  if (ticksCount < 40) {
    return "every week";
  } else if (ticksCount < 120) {
    return "every month";
  } else if (ticksCount < 300) {
    return "every 3 months";
  } else if (ticksCount < 700) {
    return "every 6 months";
  } else return "every year";
};

export const LinearChart = ({ data }: LinearChartProps): React.ReactElement => {
  const ticksCount = data[0].data.length;

  return (
    <ResponsiveLine
      data={data}
      colors={{ datum: "color" }}
      xScale={{
        type: "time",
        format: "%Y-%m-%d",
        useUTC: false,
        precision: "day",
      }}
      margin={{ top: 50, right: 20, bottom: 60, left: 60 }}
      xFormat={(value) => LongLocalizedDateFormatter(value as Date)}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: getTicksLabelsPeriodicity(ticksCount),
        format: (value) => LongLocalizedDateFormatter(value),
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      pointSize={10}
      pointColor={"white"}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      enableArea={true}
      areaOpacity={0.3}
      curve="monotoneX"
      enableSlices="x"
      sliceTooltip={({ slice }) => {
        return (
          <div
            className="px-2 py-1"
            style={{ backgroundColor: "#f7f7f7", border: "1px dashed #aaa" }}
          >
            {slice.points.map((point) => (
              <small key={point.id}>
                <span>{point.data.xFormatted as string}:</span>{" "}
                <strong>{point.data.y as string}</strong>
              </small>
            ))}
          </div>
        );
      }}
    />
  );
};
