import { Container } from "react-bootstrap";
import { Header } from "@widgets/header";

export const SettingsPage = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Container>
        <h1>Settings</h1>
      </Container>
    </>
  );
};
