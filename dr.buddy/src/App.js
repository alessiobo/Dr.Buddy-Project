import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Navbar from "./Navbar/Navbar";

function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
    </div>
  );
}

export default App;