import React, { useEffect } from 'react'
import { ExternalLink } from 'react-external-link'
import './Modal.css'

const Modal = ( { closeModal, modal_link, modal_title, modal_p }) => {



    React.useEffect(() => {
        window.addEventListener('click', (e) => {
            const modalBackground = document.getElementById("modal")


            if (e.target == modalBackground) {
                closeModal(false)
            }
        })
    })

    return(
        <div className="modalBackground" id="modal">
            <div className="modalContainer">
            
                <div className="title">
                    <h1>{modal_title}</h1>
                </div>
                <div className="body">
                    <p>{modal_p}</p>
                    <h3>{modal_link} </h3>
                </div>
                <div className="footer"> 
                
                    <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                   
                    <ExternalLink href={modal_link}>
                        <button>Continue</button>
                    </ExternalLink>
                 </div>
                      
                    
                
            </div>
        </div>
    )
}

export default Modal