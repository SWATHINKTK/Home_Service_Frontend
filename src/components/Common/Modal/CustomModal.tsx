import React from 'react';
import Modal from 'react-modal';
import { RxCross2 } from "react-icons/rx";

import './customModal.css';

interface CustomModalProps {
    modalIsOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ modalIsOpen, setIsOpen, children }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={() => {}}
            onRequestClose={() => setIsOpen(false)}
            className="ReactModal__Content"
            overlayClassName="ReactModal__Overlay"
        >
            <button className='absolute md:-right-8 right-0 md:top-0 -top-9 bg-white rounded-full p-0.5 shadow-md' onClick={() => setIsOpen(false)}><RxCross2 size={22} /></button>
            {children}
        </Modal>
    );
};

export default CustomModal;
