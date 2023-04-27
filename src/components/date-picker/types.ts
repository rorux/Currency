export type DatePickerProps = {
  name: string;
  label: string;
  defaultValue: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  min?: string;
  max?: string;
};
