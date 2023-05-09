import { useState } from 'react';
import Modal from 'react-modal';

function Card() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <div className="card fixed bottom-10 left-10 bg-white p-4 border border-gray-300 rounded-lg cursor-pointer" onClick={toggleModal}>
        <h2 className='text-left font-bold'>Lorem, ipsum.</h2>
        <div className="card-content" style={{ maxHeight: showModal ? 'none' : '50px', overflow: 'hidden' }}>
          <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a eros vitae nunc bibendum suscipit ac eget purus. Sed ac eros nibh. In aliquam augue vel est fringilla vehicula. Proin eu leo quam. Etiam porta sem malesuada magna mollis euismod.</p>
        </div>
        <button
          type="button"
          className="ml-20 mt-3 bg-cyan-600 hover:bg-[#569DAA] text-white font-bold py-1 px-2 rounded"
          onClick={toggleModal}
        >
          Devamı..
        </button>
      </div>
      <Modal isOpen={showModal} onRequestClose={toggleModal} contentLabel="Card Content">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h1 className='text-xl font-bold'>Lorem, ipsum.</h1>
            <div className='text-right'>
            <button
              type="button"
              className="inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={toggleModal}
            >
              X
            </button>
            </div>
          </div>
          <div className="modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a eros vitae nunc bibendum suscipit ac eget purus. Sed ac eros nibh. In aliquam augue vel est fringilla vehicula. Proin eu leo quam. Etiam porta sem malesuada magna mollis euismod.</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Card;
