import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { HeaderLinkProps } from "./types";

export const HeaderLink = (props: HeaderLinkProps): React.ReactElement => (
  <>
    {props.isActive ? (
      <Nav className="nav-link active">{props.name}</Nav>
    ) : (
      <Link to={props.route}>
        <Nav className="nav-link">{props.name}</Nav>
      </Link>
    )}
  </>
);
