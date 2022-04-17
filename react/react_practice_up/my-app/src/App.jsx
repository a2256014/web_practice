import { Route, Routes } from "react-router-dom";
import Header from "./Components/Organisms/Header";
import AboutPage from "./Pages/AboutPage";
import AboutPostPage from "./Pages/AboutPostPage";
import HomePage from "./Pages/HomePage";
import PublicRoute from "./Components/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute";
import LoginPage from "./Pages/LoginPage";
import MyPage from "./Pages/MyPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          restricted={false}
          path="/login"
          element={<PublicRoute component={<LoginPage />} />} //로그인 페이지
        />
        <Route
          restricted={false}
          path="/"
          element={<PublicRoute component={<HomePage />} />} //로그인 페이지
        />
        <Route
          restricted={true}
          path="/about"
          element={<PrivateRoute component={<AboutPage />} />}
        />
        <Route
          restricted={true}
          path="/about/:id"
          element={<PrivateRoute component={<AboutPostPage />} />}
        />
        <Route
          restricted={true}
          path="/mypage"
          element={<PrivateRoute component={<MyPage />} />}
        />
      </Routes>
    </>
  );
}

export default App;
