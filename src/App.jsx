import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Browser from "./pages/Browser";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Program from "./pages/Program";
import Keunggulan from "./pages/Keunggulan";
import SambutanKepalaSekolah from "./pages/beranda/SambutanKepalaSekolah";
import VideoProfilSekolah from "./pages/beranda/VideoProfilSekolah";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main>
                <Welcome />
                <SambutanKepalaSekolah />
                <VideoProfilSekolah />
                <Browser />
                <Program />
                <Keunggulan />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
