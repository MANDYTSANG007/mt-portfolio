import React from "react";
import mandy from "../../assets/utahHorseRiding.jpg";
import react from "../../assets/icon/i-react.png";
import css from "../../assets/icon/i-css.png";
import bootstrap from "../../assets/icon/i-bootstrap1.png";
import html from "../../assets/icon/i-html.png";
import express from "../../assets/icon/i-Express.png";
import jquery from "../../assets/icon/i-jQuery.png";
import mysql from "../../assets/icon/i-mysql2.png";
import handlebars from "../../assets/icon/i-handlebars2.png";
import mongodb from "../../assets/icon/i-mongodb1.png";
import js from "../../assets/icon/i-js1.png";
import node from "../../assets/icon/i-nodejs8.png";
import github from "../../assets/icon/i-GitHub1.png";

import "./header.css";

const Header = () => {
    return (
        <header>
            <article>
                <div className="mandy">
                    <img src={mandy} alt="Mandy was doing horse riding" />
                </div>
                <div className="content">
                <div className="header__content">
                    <h1 className="name">Mandy Tsang</h1>
                    <div className="header__message">
                        <br></br>
                        <h3 className="message"> Hi! </h3>
                        <h4 className="message">Hello and welcome to my website! I hope you'll take some time to look around and 
                            enjoy the projects that I've been working on. Thanks for stopping by.
                        </h4>
                        
                        <br></br>
                        <br></br>
                        <hr className="dividers"></hr>
                        <br></br>
                        <h3 className="message">About Me</h3>
                        <h4 className="message"> I love to build things with my computer. For the last several years, I've had the privilege
                            of workign at the highly-regulated financial industry. My main focus these days is
                            building accessible and user-friendly products. 
                        </h4>
                        <br></br>
                        <hr className="dividers"></hr>
                        <br></br>
                        <h3 className="message">Technologies</h3>
                        <h4 className="message"> I've always eager to learn more in new technologies. 
                            Here are some technologies I've worked with: </h4>
                        <div className="grid__container">
                            <img className="header__icon" src={react} alt="icon"></img>
                            <img className="header__icon" src={css} alt="icon"></img>
                            <img className="header__icon" src={html} alt="icon"></img>
                            <img className="header__icon" src={mongodb} alt="icon"></img>
                            <img className="header__icon" src={jquery} alt="icon"></img>
                            <img className="header__icon" src={bootstrap} alt="icon"></img>
                            <img className="header__icon" src={node} alt="icon"></img>
                            <img className="header__icon" src={js} alt="icon"></img>
                            <img className="header__icon" src={handlebars} alt="icon"></img>
                            <img className="header__icon" src={express} alt="icon"></img>
                            <img className="header__icon" src={mysql} alt="icon"></img>
                            <img className="header__icon" src={github} alt="icon"></img>
                        </div>
                    </div>
                </div>
                </div>
                </article>
        </header>
    )
}

export default Header;