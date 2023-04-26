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
      <div className="mb-2 h6 ps-1">{title}</div>
      <Placeholder
        className="mb-2 opacity-100"
        xs={12}
        style={{ backgroundColor: color }}
      />
      <ColorPicker colorHexCode={color} setColorHexCode={setColor} />
    </>
  );
};
