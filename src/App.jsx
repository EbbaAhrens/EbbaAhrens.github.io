import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { PersonalLetterPage } from "./Pages/PersonalLetterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/personal-letter" element={<PersonalLetterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
