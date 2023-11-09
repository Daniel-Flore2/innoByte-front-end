import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import UserRegister from './components/UserRegister';
import UserValidation from "./components/UserValidation";
import UserPreview from "./components/UserPreview"; // Importa el componente UserPreview
import UserVote from "./components/UserVote";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserValidation />} />

          <Route path="/preview" element={<UserPreview />} />

          <Route path="/uservote" element={<UserVote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
