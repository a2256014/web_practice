import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Organisms/NavBar";
import AboutPage from "./Pages/AboutPage";
import AboutPostPage from "./Pages/AboutPostPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:id" element={<AboutPostPage />} />
      </Routes>
    </>
  );
}

export default App;
