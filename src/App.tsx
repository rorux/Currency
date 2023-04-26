import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import { Router } from "@router";
import { useCurrencies } from "@hooks";
import { Loader } from "@components";

function App() {
  const { loading } = useCurrencies();

  return (
    <>
      <BrowserRouter>{loading ? <Loader /> : <Router />}</BrowserRouter>
      <ToastContainer
        transition={Flip}
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
