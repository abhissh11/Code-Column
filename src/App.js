import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentorshipBookingPage from "./pages/MentorshipBookingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResourceHub from "./pages/ResourceHub";
import Interview from "./pages/Interview";
import Courses from "./pages/Courses";
import Community from "./pages/Community";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-mentor" element={<MentorshipBookingPage />} />
          <Route path="/resource-hub" element={<ResourceHub />} />
          <Route path="/interview-ques" element={<Interview />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
