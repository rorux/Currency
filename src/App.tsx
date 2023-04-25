import { BrowserRouter } from "react-router-dom";
import { Router } from "@router";
import { useCurrencies } from "./hooks/use-currencies";

function App() {
  useCurrencies();

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
