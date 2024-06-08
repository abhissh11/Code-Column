import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentorshipBookingPage from "./pages/MentorshipBookingPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-mentor" element={<MentorshipBookingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
