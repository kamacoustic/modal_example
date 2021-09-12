import React, { useState } from 'react'
import Modal from './components/Modal';
import './App.css';

function App() {

  const [openModal, setOpenModal ] = useState(false)


  return (
    <div className="App">
     <h1>Click button to open Modal</h1>
     <button 
      className="openModalBtn"
      onClick={() => {setOpenModal(true)}}>Open
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
     
    </div>
  );
}

export default App;
