import RoomList from './pages/RoomList/RoomList';
import Home from "./pages/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/HomeComponent/Header/Header";
import Nav from "./components/Shared/Nav/Nav";
import { useInView } from 'react-intersection-observer';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";


function App() {

  const [ref, inView] = useInView({
    threshold: .9,
  });

  return (
    <BrowserRouter>
      <Nav isInview={inView} />
      <Header propRef={ref} />
      <Routes>
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
