import React from "react"
import "./style.css"
import image from '../../assets/image.png'

export default function Header(Props){
    return(
        <>
        <div className="header">
            <div className="logo-box">
                <img className="image-logo" src= {image}></img>

            </div>
            <h1>
                Projeto Shop
            </h1>
            

            <div className="input-box">
                
            <input className="busca"></input>
            <button className="buscaBut"><strong>busca</strong></button>

            </div>
            

        </div>
    </>
    );
}