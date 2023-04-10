import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <body className="flex justify-center items-center h-screen bg-blue-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md shadow-lg p-8"
      >
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-2">ISIM :</h1>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-2">SOY ISIM :</h1>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-2">E MAIL :</h1>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-2">MESSAGE :</h1>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-400 p-2 w-full rounded-md"
          />
        </div>
        <button className="button">GÖNDER</button>
      </form>
    </body>
  );
};
export default Form;
