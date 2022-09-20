import React from "react"
import "./style.css"

export default function Filter(props){
    return(
        <div className="filters">
            <nav className="menu">
                
                    <a className="link-menu-header" href="#">Placa mãe</a>
                    <a className="link-menu-header" href="#">Processador</a>
                    <a className="link-menu-header" href="#">Memória RAM</a>
                    <a className="link-menu-header" href="#">Armazenamento</a>
                    <a className="link-menu-header" href="#">Acessórios</a>
                    <a className="link-menu-header" href="">Fale conosco</a>
                
            </nav>
        </div>
    );
}