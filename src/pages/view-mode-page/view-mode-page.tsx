import { Container } from "react-bootstrap";
import { Header } from "@widgets/header";

export const ViewModePage = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Container>
        <h1>View Mode</h1>
      </Container>
    </>
  );
};
