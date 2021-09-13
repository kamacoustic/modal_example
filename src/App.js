import React, { useState } from 'react'
import Modal from './components/Modal';
import doompic from './components/images/doomzu.png'
import './App.css';

function App() {

  const [openModal, setOpenModal ] = useState(false)


  return (
    <div className="App">
     <h1>Click image to open Modal</h1>
     <div className="img_container">
      <img
        src={doompic}
        alt="doomzu"
        onClick={() => {setOpenModal(true)}}>
        </img>
      </div>
      {openModal && <Modal
         modal_link={"http://themojoworks.com/doomzu/index.html"}
         closeModal={setOpenModal}
         modal_title={"FYI!!!!"}
         modal_p={"Page will open in new tab"}
          />}
     
    </div>
  );
}

export default App;
