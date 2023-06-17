import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from 'axios';

function Table() {
  const [rowData, setRowData] = useState([]);

  const [columnDefs, setColumnDefs] = useState([
    { field: "id", sortable: true, filter: true },
    { field: "processo", sortable: true, filter: true },
    { field: "processoAno", sortable: true, filter: true },
    { field: "modalidade", sortable: true, filter: true },
    { field: "tipo", sortable: true, filter: true },
    { field: "localDesembaraco", sortable: true, filter: true },
    { field: "canal", sortable: true, filter: true },
    { field: "due", sortable: true, filter: true },
    { field: "dataRegistroDue", sortable: true, filter: true },
    { field: "exportador", sortable: true, filter: true },
    { field: "fatura", sortable: true, filter: true },
    { field: "dataDeAbertura", sortable: true, filter: true },
    { field: "dataDeEmbarque", sortable: true, filter: true },
    { field: "descricao", sortable: true, filter: true },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://portal.comex360.idata.com.br:8789/process"
      );
      result.json().then((rowData) => {
        setRowData(rowData);
      });
    };
    fetchData();
    
  }, []);

  

  
  return (
    <div className="ag-theme-alpine">
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
    
  );
}

export default Table;

