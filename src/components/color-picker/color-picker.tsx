import { ColorResult, SketchPicker } from "react-color";
import { ColorPickerProps } from "./types";

export const ColorPicker = ({
  colorHexCode,
  setColorHexCode,
}: ColorPickerProps) => {
  return (
    <SketchPicker
      color={colorHexCode}
      onChange={(e: ColorResult) => setColorHexCode(e.hex)}
    />
  );
};
