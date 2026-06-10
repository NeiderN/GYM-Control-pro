import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/Login/Login";
import Inicio from "./page/Inicio/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;