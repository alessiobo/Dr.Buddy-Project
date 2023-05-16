import { BrowserRouter } from "react-router-dom";
import App from "./App";
import i18next from './i18n';
import { I18nextProvider } from 'react-i18next';

function Root() {
  return (
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
}

export default Root;
