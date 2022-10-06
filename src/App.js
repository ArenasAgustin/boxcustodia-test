import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
