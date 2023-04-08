import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
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
    <form onSubmit={handleSubmit}>
       <boddy>
        <div>
       <h1> <label htmlFor="name" >ISIM :  </label> </h1>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <br>
      </br>
      <div>
        <h1> <label htmlFor="surname">SOY ISIM :  </label></h1>
        <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} />
      </div>
      <br>
      </br>
      <div>
       <h1>  <label htmlFor="email">E MAIL :  </label></h1>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <br>
      </br>
      <div>
        <h1> <label htmlFor="message">MESSAGE :  </label></h1>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
      </div></boddy> <br></br>
    <button className='button'>GÖNDER</button>
    </form>
  );
};
export default Form;