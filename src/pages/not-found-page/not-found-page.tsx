import { Container } from "react-bootstrap";
import { Header } from "@widgets/header";

export const NotFoundPage = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Container>
        <h1>Page is not found...</h1>
      </Container>
    </>
  );
};
