import { useState } from "react";
import Modal from "react-modal";

function Card({ cardContent }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  const cardStyle = {
    position: "absolute",
    ...cardContent.position,
    width: cardContent.width,
    height: cardContent.height,
  };

  return (
    <>
      <div className="card bg-white border border-gray-300 rounded-lg" style={cardStyle}>
        <h2 className="text-center font-bold" style={{ marginTop: "20px" }}>
          {cardContent.title}
        </h2>
        <div className={`card-content ${showModal ? "card-content-show" : "card-content-opacity"}`} style={{ overflow: "hidden" }}>
          <p className="text-left" style={{ marginTop: "-10px" }}>
            {cardContent.content}
          </p>
        </div>
        <button
          type="button"
          className="bg-cyan-600 hover:bg-[#569DAA] text-white font-bold py-1 px-2 rounded"
          onClick={toggleModal}
          style={{ position: "absolute", bottom: "10px", right: "10px" }}
        >
          Devamı..
        </button>
      </div>

      <Modal isOpen={showModal} onRequestClose={toggleModal}>
        <div className="modal-content">
          <h2 className="text-center text-2xl font-bold" style={{ marginTop: "15px", marginBottom: "10px" }}>
            {cardContent.title}
          </h2>
          <p>
            {cardContent.content}
          </p>
          <p>Yazan: {cardContent.author}</p>
          <button
            type="button"
            className="bg-cyan-600 hover:bg-[#569DAA] text-white font-bold py-1 px-2 rounded"
            onClick={toggleModal}
            style={{ marginTop: "-18px" }}
          >
            X
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Card;
