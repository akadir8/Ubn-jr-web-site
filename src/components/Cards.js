import { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

function Card(props) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/mongo/abdulkadir");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="card bg-white border border-gray-300 rounded-lg" style={cardStyle}>
        {data && data.title && (
          <h2 className="text-center font-bold" style={{ marginTop: "20px" }}>
            {data.title}
          </h2>
        )}
        <div
          className={`card-content ${showModal ? "card-content-show" : "card-content-opacity"}`}
          style={{ overflow: "hidden" }}
        >
          {data && data.content && (
            <p className="text-left" style={{ marginTop: "-10px" }}>
              {data.content}
            </p>
          )}
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
          {data && data.title && (
            <h2 className="text-center text-2xl font-bold" style={{ marginTop: "15px", marginBottom: "10px" }}>
              {data.title}
            </h2>
          )}
          {data && data.content && <p>{data.content}</p>}
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
