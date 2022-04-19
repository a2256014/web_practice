import { Routes, Route } from "react-router-dom";

import Benner from "./Components/Organisms/Benner";
import Header from "./Components/Organisms/Header";
import HomePage from "./Components/Pages/Home";
import LoginPage from "./Components/Pages/Login";

const App = () => {
  return (
    <>
      <Benner />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
