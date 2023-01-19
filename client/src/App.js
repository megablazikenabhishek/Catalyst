import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { AppContext, socket } from "./context/appContext";
import PropagateLoader from "react-spinners/PropagateLoader";


const override= {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    margin: "40vh auto",
    borderColor: "red",
  };
  


function App() {
    const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
    const user = useSelector((state) => state.user);

    const [loading, setloading] = useState(false);

    useEffect(() => {
      setloading(true)
     setTimeout(()=>{
      setloading(false)
     },3000)
    }, []);
    return (
        <div className="temp">
        <AppContext.Provider value={{ socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
        {loading  ?  
    <PropagateLoader
    color={"#060708"}
    loading={loading}
    cssOverride={override}
    size={45}
    aria-label="Loading Spinner"
    data-testid="loader"
  />:
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {!user && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </>
                    )}
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </BrowserRouter>
}
        </AppContext.Provider>
        </div>
    );
}

export default App;
