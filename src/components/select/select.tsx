import { Form } from "react-bootstrap";
import { SelectProps } from "./types";

export const Select = ({
  data,
  selected,
  handleChange,
}: SelectProps): React.ReactElement => {
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={handleChange}
      defaultValue={selected}
    >
      <option>Choose a currency</option>
      {data.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Form.Select>
  );
};
