import { Routes, Route } from "react-router-dom";

import Benner from "./Components/Organisms/Benner";
import Header from "./Components/Organisms/Header";
import ExpertPage from "./Components/Pages/Experts";
import HomePage from "./Components/Pages/Home";
import LoginPage from "./Components/Pages/Login";
import SignUpPage from "./Components/Pages/SignUp";
import StorePage from "./Components/Pages/Store";

const App = () => {
  return (
    <>
      <Benner />
      <Header />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/store/*" element={<StorePage />} />
        <Route path="/experts/*" element={<ExpertPage />} />
      </Routes>
    </>
  );
};

export default App;
