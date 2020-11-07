import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from "@material-ui/core";
import Search from "../../components/search/Search";


const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    {/* <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link> */}

                </div>
                <div className="home__headerRight">
                    <Link to='/gamil'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Googl Logo" />
                <div className="home__inputContainer">
                    <Search />
                    {/* To hide search button
                    pass the prop to Search >>> hideButtons
                    */}
                </div>
            </div>
        </div>
    );
};

export default Home;
