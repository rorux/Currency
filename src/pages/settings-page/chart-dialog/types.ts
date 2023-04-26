export type NewChartDialogProps = {
  id?: string;
  currency?: string;
  lColor?: string;
  fColor?: string;
  title: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
