import { Form } from "react-bootstrap";
import { DatePickerProps } from "./types";

export const DatePicker = ({
  name,
  label,
  setDate,
  defaultValue,
  min,
  max,
}: DatePickerProps): React.ReactElement => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDate(e.target.value);

  return (
    <Form.Group controlId={name}>
      <Form.Label>
        <small>{label}</small>
      </Form.Label>
      <Form.Control
        type="date"
        name={name}
        defaultValue={defaultValue}
        onChange={handleChange}
        min={min}
        max={max}
      />
    </Form.Group>
  );
};
