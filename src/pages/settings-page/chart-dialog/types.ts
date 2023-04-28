export type NewChartDialogProps = {
  id?: string;
  currency?: string;
  lColor?: string;
  pColor?: string;
  title: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
