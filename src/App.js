import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Documents from "./pages/documents";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <div className="container-app">
      <div className="container-pages">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/documents" element={<Documents />} />

          <Route path="/documents/:id" element={<Documents />} />
        </Routes>
      </div>

      <div className="container-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
