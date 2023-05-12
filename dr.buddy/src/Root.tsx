import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n"

function Root() {
  return (
    <BrowserRouter>
      <App/> 
    </BrowserRouter>
  );
}

export default Root;
