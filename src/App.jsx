import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Table from "./table";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioPostAPI from "./PostForm";

function App() {
  return (
    <>
      <main>
        <div className="jumbotron text-center">
          <img src="/Logo.webp"></img>
          <h1>Desafio Técnico Idata</h1>
          <p>Tabela COMEX</p>
        </div>
        <div className="tabela">
          <Table></Table>
        </div>
        <div className="PostForm">
          <h2>Utilize o formulário abaixo para inserir Dados</h2>
          <FormularioPostAPI></FormularioPostAPI>
        </div>
      </main>
    </>
  );
}

export default App;
