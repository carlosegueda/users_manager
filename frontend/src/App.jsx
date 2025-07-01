// src/App.jsx
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import DashboardPage from "./pages/dashboardPage";
import NotFound from "./pages/notFound";
import "./css/theme.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dash" element={<DashboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

