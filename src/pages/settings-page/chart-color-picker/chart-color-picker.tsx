import { Placeholder } from "react-bootstrap";
import { ColorPicker } from "@components";
import { ChartColorPickerProps } from "./types";

export const ChartColorPicker = ({
  color,
  setColor,
  title,
}: ChartColorPickerProps): React.ReactElement => {
  return (
    <>
      <div className="mb-3 h6 ps-1">{title}</div>
      <Placeholder
        className="mb-3 opacity-100"
        xs={12}
        style={{ backgroundColor: color, cursor: "default" }}
      />
      <ColorPicker colorHexCode={color} setColorHexCode={setColor} />
    </>
  );
};
