import React from "react";
import Navbar from "./Navbar";
const Home = (props) => {
    return(<div className="Home-container">
        <Navbar/>
        <h1>{props.title}</h1>
        </div>
    )
}
export default Home;