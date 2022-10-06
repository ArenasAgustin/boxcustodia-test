import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Documents from "./pages/documents";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/documents/" element={<Documents />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
