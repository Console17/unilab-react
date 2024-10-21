import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx";
import Registration from "./pages/registration.jsx";
import Category from "./pages/category.jsx";
import Contact from "./pages/contact.jsx";
import Details from "./pages/details.jsx";
import Chat from "./pages/chat.jsx";
import { UserProvider } from "./components/UserContext.jsx";

function App() {
  return (
    <>
      <div>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route index path="" element={<Landing />} />
              <Route path="/home" element={<Landing />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/category" element={<Category />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/details" element={<Details />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </div>
    </>
  );
}

export default App;
