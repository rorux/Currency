export type SelectProps = {
  data: string[];
  selected?: string;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
