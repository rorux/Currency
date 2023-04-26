import { PAGE_NAMES, ROUTES } from "@router";

export type HeaderLinkProps = {
  route: ROUTES;
  name: PAGE_NAMES;
  isActive: boolean;
};
