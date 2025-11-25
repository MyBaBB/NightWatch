import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NetherlandsFirst from "./Pages/NetherlandsFirst_Folder/FrontPage";
import OpenSource from "./Components/OpenSource_Folder/OpenSource";
import "./App.css";
import Zenith from "./Pages/Zenith";

const App = () => {
  return (
    <main className="h-full w-screen overflow-hidden text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Zenith />} />
          <Route path="/NetherlandsFirst" element={<NetherlandsFirst />} />
          <Route path="/openSource" element={<OpenSource />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
