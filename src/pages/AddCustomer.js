import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCustomer() {
    const navigate = useNavigate();
    const[inputs, setInput] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values,[name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/Labbapi/customers/save',inputs)
        .then(function(res){
            console.log(res.data);
            if(res.data.success === 1){
                alert(res.data.msg_success);
            }else{
                alert(res.data.msg_error);
            }
            navigate('/customers');
        });
    }

  return (
    <>
        <h5>New Customer</h5>
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input type="text" onChange={handleChange} className="form-control" name="name" id="name" placeholder="Customer Name" required/>
                <label for="name" className='fs-6'>Customer Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" onChange={handleChange} className="form-control" name="phone" id="phone" placeholder="Phone" required/>
                <label for="phone" className='fs-6'>Phone</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" onChange={handleChange} className="form-control" name="email" id="email" placeholder="Email" required/>
                <label for="email" className='fs-6'>Email</label>
            </div>
            <button class="btn btn-primary">Save</button>
        </form>
    </>
  )
}

export default AddCustomer;