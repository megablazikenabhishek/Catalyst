import "./home.css"

import React from 'react';

// import Sidebar from '../../Components/Images/Sidebar/sidebar';
import Chat from '../../Components/Images/Chat_section/chat'
import Navbar from '../../Components/Images/Navbar/navbar';

const Home = () => {
    return (
        <>
        <Navbar/>
        {/* <Sidebar/> */}
        <Chat/>
        </>
    );
}

export default Home;
