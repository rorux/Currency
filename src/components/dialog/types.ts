import { PropsWithChildren } from "react";

export type DialogProps = {
  title: JSX.Element | string;
  show: boolean;
  handleClose: () => void;
} & PropsWithChildren;
