import React, { useState } from 'react';

const BlueButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  function toggleModal() {
    setShowPopup(!showPopup);
  }

  return (
    <div>
      <button
        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"
        onClick={handleButtonClick}
      >
        <span className="text-xl mb-1">+</span>
      </button>
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
          <button
            type="button"
            className=" bg-cyan-600 hover:bg-[#569DAA] text-white font-bold py-1 px-2 rounded"
            onClick={toggleModal}
            style={{ marginTop: "-18px" }}
          >
            X
          </button>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="font-bold">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full border rounded-md py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="font-bold">
                  Content:
                </label>
                <textarea
                  id="content"
                  name="content"
                  className="w-full border rounded-md py-2 px-3"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="author" className="font-bold">
                  Author:
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="w-full border rounded-md py-2 px-3"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlueButton;
