import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import { Dashboard, Login, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
