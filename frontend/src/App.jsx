import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Login from "./pages/admin/Login";
import AdminLayout from "./pages/admin/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes - no Navbar/Footer */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/*" element={<AdminLayout />} />

        {/* Public routes - with Navbar/Footer */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <main className="pt-16">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/clases" element={<Classes />} />
                  <Route path="/clases/:section" element={<Classes />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
