import { Home } from "./components/home/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Popup } from "./components/Popup";
import "./styles/global.scss";
import { useState } from "react";

export function App() {
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }
  return (
    <>
      {isOpen && <Popup handleClose={handleClose} />}
      <Header />
      <Home />
      <Footer />
    </>
  );
}
