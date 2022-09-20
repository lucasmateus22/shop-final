import React from "react"
import Header from "./componentes/Header/index";
import Filter from "./componentes/Filter/index"
import Bod from "./componentes/Box/index";
import Listagem from "./componentes/Listagem";
import Footer from "./componentes/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Filter/>
      <Listagem/>
      <Footer/>
      

    </div>
  );
}

export default App;
