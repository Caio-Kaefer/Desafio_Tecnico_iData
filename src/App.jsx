import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function App() {
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
    { field: "dataDeAbertura", sortable: true, filter: true },
    { field: "dataDeEmbarque", sortable: true, filter: true },
  ]);

  useEffect(() => {
    fetch("https://portal.comex360.idata.com.br:8789/process")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }),
    [];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1000 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowSelection={"multiple"}
        animateRows={true}
        rowMultiSelectWithClick={true}
      ></AgGridReact>
    </div>
  );
}

export default App;
