import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DropMenu from "./Components/Molecules/DropDownModal";
import Modal from "./Components/Molecules/SearchModal";

import Benner from "./Components/Organisms/Benner";
import Footers from "./Components/Organisms/Footer";
import Header from "./Components/Organisms/Header";
import ExpertPage from "./Components/Pages/Experts";
import HomePage from "./Components/Pages/Home";
import LoginPage from "./Components/Pages/Login";
import SignUpPage from "./Components/Pages/SignUp";
import StorePage from "./Components/Pages/Store";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
      {openModal && <Modal modal={{ openModal, setOpenModal }} />}
      <Benner />
      <Header
        modal={{ openModal, setOpenModal }}
        drop={{ isDrop, setIsDrop }}
        visible={{ visible, setVisible }}
      />
      {isDrop && (
        <DropMenu
          drop={{ isDrop, setIsDrop }}
          visible={{ visible, setVisible }}
        />
      )}
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/store/*" element={<StorePage />} />
        <Route path="/experts/*" element={<ExpertPage />} />
      </Routes>
      <Footers />
    </>
  );
};

export default App;
