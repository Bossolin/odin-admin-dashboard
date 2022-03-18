import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Icon from "@mdi/react";
import { mdiViewDashboard } from "@mdi/js";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="sm:w-screen sm:h-screen sm:grid sm:grid-cols-[3fr_11fr] sm:grid-rows-[2fr_11fr]">
      <Sidebar openModal={openModal} setOpenModal={setOpenModal} />
      <Header />
      <Main />
      <button
        className={`
        ${openModal ? "hidden" : "block"}
        sm:hidden fixed`}
        onClick={() => setOpenModal(!openModal)}
      >
        <Icon path={mdiViewDashboard} title="Dashboard" size={2} />
      </button>
    </div>
  );
}

export default App;
