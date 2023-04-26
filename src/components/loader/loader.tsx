import Spinner from "react-bootstrap/Spinner";

export const Loader = (): React.ReactElement => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};
