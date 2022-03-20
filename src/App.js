import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="block min-h-screen sm:w-screen sm:h-screen sm:grid sm:grid-cols-[3fr_11fr] sm:grid-rows-[2fr_11fr] bg-slate-200 font-roboto">
      <Sidebar openModal={openModal} setOpenModal={setOpenModal} />
      <Header openModal={openModal} setOpenModal={setOpenModal} />
      <Main />
    </div>
  );
}

export default App;
