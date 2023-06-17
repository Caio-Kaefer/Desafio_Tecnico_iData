import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


const FormularioPostAPI = () => {
  const [dadosFormulario, setDadosFormulario] = useState({
    processo: 0,
    processoAno: 0,
    modalidade: '',
    tipo: '',
    localDesembaraco: '',
    canal: '',
    due: '',
    dataRegistroDue: '',
    exportador: '',
    fatura: '',
    dataDeAbertura: '',
    dataDeEmbarque: '',
    descricao: ''
  });

  const handleChange = (event) => {
    setDadosFormulario({
      ...dadosFormulario,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // window.location.reload();
    

    try {
      const response = await axios.post('https://portal.comex360.idata.com.br:8789/process', dadosFormulario);
      console.log(response.data); // Tratar a resposta da API como desejado
      if(response.status == 200){
        dialog('informações adicionadas com sucesso');
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form id="postForm" onSubmit={handleSubmit} style={styles.form}>
      <h2>Inserir Dados</h2>
      <div style={styles.formGroup}>
        <label>Processo:</label>
        <input
          type="number"
          name="processo"
          value={dadosFormulario.processo}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Ano do Processo:</label>
        <input
          type="number"
          name="processoAno"
          value={dadosFormulario.processoAno}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Modalidade:</label>
        <input
          type="text"
          name="modalidade"
          value={dadosFormulario.modalidade}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Tipo:</label>
        <input
          type="text"
          name="tipo"
          value={dadosFormulario.tipo}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Local de Desembaraço:</label>
        <input
          type="text"
          name="localDesembaraco"
          value={dadosFormulario.localDesembaraco}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Canal:</label>
        <input
          type="text"
          name="canal"
          value={dadosFormulario.canal}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>DUE:</label>
        <input
          type="text"
          name="due"
          value={dadosFormulario.due}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Data de Registro da DUE:</label>
        <input
          type="datetime-local"
          name="dataRegistroDue"
          value={dadosFormulario.dataRegistroDue}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Exportador:</label>
        <input
          type="text"
          name="exportador"
          value={dadosFormulario.exportador}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Fatura:</label>
        <input
          type="text"
          name="fatura"
          value={dadosFormulario.fatura}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Data de Abertura:</label>
        <input
          type="datetime-local"
          name="dataDeAbertura"
          value={dadosFormulario.dataDeAbertura}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Data de Embarque:</label>
        <input
          type="datetime-local"
          name="dataDeEmbarque"
          value={dadosFormulario.dataDeEmbarque}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <label>Descrição:</label>
        <textarea
          name="descricao"
          value={dadosFormulario.descricao}
          onChange={handleChange}
        />
      </div>
      <div style={styles.formGroup}>
        <button type="submit" style={styles.submitButton}>
          Enviar
        </button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: '#f9f9f9',
    color: 'black'
    
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'center', 
  },

  input: {
    background: '#bdb6af'
  },
  submitButton: {
    padding: '10px 20px',
    background: '#f69231',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};





export default FormularioPostAPI;
