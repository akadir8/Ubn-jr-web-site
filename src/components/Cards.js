import { useState } from "react";
import Modal from "react-modal";

function Card(props) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  const cardStyle = {
    position: "absolute",
    ...props.position,
    width: props.width,
    height: props.height,
  };

  return (
    <>
      <div
  className="card bg-white border border-gray-300 rounded-lg"
  style={cardStyle}
>
  <h2 className="text-center font-bold" style={{ marginTop: "20px" }}>
    Lorem, ipsum.
  </h2>
  <div
    className={`card-content ${
      showModal ? "card-content-show" : "card-content-opacity"
    }`}
    style={{ overflow: "hidden" }}
  >
    <p className="text-left" style={{ marginTop: "-10px" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a eros vitae
      nunc bibendum suscipit ac eget purus. Sed ac eros nibh. In aliquam augue
      vel est fringilla vehicula. Proin eu leo quam. Etiam porta sem malesuada
      magna mollis euismod.
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
          <h2 className="text-center text-2xl font-bold" style={{ marginTop: "15px", marginBottom: "10px" }}>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            eveniet dolorem ipsam quibusdam dolorum, quae itaque necessitatibus
            eum alias nemo provident nulla voluptatem minima sunt, ex sequi at!
          </p>
          <button
            type="button"
            className=" bg-cyan-600 hover:bg-[#569DAA] text-white font-bold py-1 px-2 rounded"
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
