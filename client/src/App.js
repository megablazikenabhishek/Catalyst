import "./App.css";

import Chat from "./Pages/Home/Chat.js";
import Community from "./Pages/Home/Community.js";
import Nav from "./Pages/Home/Nav.js";
import Navvertical from "./Pages/Home/Navvertical.js";

function App() {
  return (
    <div>
      <Nav />
      <div class="dashboard">
        <Navvertical />
        <Community />
        <Chat />
      </div>
    </div>
  );
}

export default App;
