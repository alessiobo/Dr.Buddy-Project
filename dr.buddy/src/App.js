import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer"
function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;