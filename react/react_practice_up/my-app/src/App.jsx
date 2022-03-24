import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import AboutPostPage from "./Pages/AboutPostPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/about/:name" element={<AboutPostPage />} />
    </Routes>
  );
}

export default App;
