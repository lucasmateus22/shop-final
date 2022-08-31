import React from "react"
import "./style.css"

export default function Filter(props){
    return(
        <div className="filters">
            <nav className="menu">
                
                    <a href="#">Placa mãe</a>
                    <a href="#">Processador</a>
                    <a href="#">Memória RAM</a>
                    <a href="#">Armazenamento</a>
                    <a href="#">Acessórios</a>
                    <a className="faleC" href="">Fale conosco</a>
                
            </nav>
        </div>
    );
}