import React from "react";
import Modal from "react-modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./css/workerMoreInfoModal.css"; // Import your CSS file with scrollbar styles
import { IWorker } from "../../@types/worker";



interface WorkerMoreInfoModalProps {
  modalIsOpen: boolean;
  closeModal: (isOpen: boolean) => void;
  data:IWorker
}

const customStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "28rem",
    maxHeight: "80vh",
    overflowY: "auto",
    borderRadius:"10px"
  },
};

const WorkerMoreInfoModal: React.FC<WorkerMoreInfoModalProps> = ({
  modalIsOpen,
  closeModal,
  data
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => closeModal(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-WixMadeForDisplay font-bold text-[1.3rem] text-[#00215E]">
            Worker More Information
          </h1>
          <IoCloseCircleOutline
            size={28}
            className="text-[#00215E]"
            onClick={() => closeModal(false)}
          />
        </div>
        <div className="mt-7">
          <div>
            <span className="font-bold">Qualification</span>
            <span className="mx-2">:</span>
            <span>{data.qualification}</span>
          </div>
          <div className="mt-0.5">
            <span className="font-bold">Experience</span>
            <span className="ml-6">:</span>
            <span className="ml-2">{data.experience}</span>
          </div>
          <div className="mt-0.5">
            <span className="font-bold">Certificate</span>
            <div>
              <img
                className="h-[16rem] w-auto"
                src={
                  typeof data.certificate === "string" ? data.certificate : ""
                }
                alt="Certificate Image"
              />
            </div>
          </div>
          <div className="mt-9">
            <span className="font-bold">ID Proof</span>
            <div>
              <img
                className="h-[16rem] w-auto"
                src={typeof data.idProof === "string" ? data.idProof : ""}
                alt="ID Proof Image"
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WorkerMoreInfoModal;
