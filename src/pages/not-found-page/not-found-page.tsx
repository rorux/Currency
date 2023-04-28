import { Container } from "react-bootstrap";
import { Header } from "@widgets/header";

export const NotFoundPage = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Container className="py-4">
        <h2 className="text-center">Page is not found...</h2>
      </Container>
    </>
  );
};
