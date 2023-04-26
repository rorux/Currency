import { useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { appTitle } from "@constants";
import { PAGE_NAMES, ROUTES } from "@router";
import { HeaderLink } from "./header-link";

export const Header = (): React.ReactElement => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="flex-grow-1">{appTitle}</Navbar.Brand>
        <Nav className="me-auto">
          <HeaderLink
            route={ROUTES.MAIN}
            name={PAGE_NAMES.MAIN}
            isActive={location.pathname === ROUTES.MAIN}
          />
          <HeaderLink
            route={ROUTES.SETTINGS}
            name={PAGE_NAMES.SETTINGS}
            isActive={location.pathname === ROUTES.SETTINGS}
          />
        </Nav>
      </Container>
    </Navbar>
  );
};
