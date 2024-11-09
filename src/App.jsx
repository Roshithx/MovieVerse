import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import History from "./Pages/History";
import Home from "./Pages/Home";
import Upload from "./Pages/Upload";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
