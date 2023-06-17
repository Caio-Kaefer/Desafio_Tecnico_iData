import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Table from "./table";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioPostAPI from "./postform";
function App() {
  return (
    <>
      <main>
        <div className="jumbotron text-center">
          <h1>Desafio Técnico Idata</h1>
          <p>Tabela COMEX</p>
        </div>
        <div className="tabela">
          <Table></Table>
        </div>
        <div className="PostForm">
          <FormularioPostAPI></FormularioPostAPI>
        </div>
      </main>
    </>
  );
}

export default App;
