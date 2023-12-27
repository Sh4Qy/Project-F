import React from 'react';

const AddDishForm = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    onClose();
  };

  return (
    <div>
      <h2>Add Dish</h2>
      <form onSubmit={handleSubmit}>
      <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDishForm;