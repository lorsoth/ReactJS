import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditCustomer() {
    const navigate = useNavigate();
    const[inputs, setInput] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        getCustomer();
      },[]);
    
      function getCustomer(){
        axios.get(`http://localhost/Labbapi/customers/${id}`).then(function(res){
          console.log(res.data);
          setInput(res.data);
        });
      }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values,[name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost/Labbapi/customers/${id}/edit`,inputs)
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
        <h5>Update Customer Info</h5>
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input type="text" onChange={handleChange} className="form-control" name="name" value={inputs.name} id="name" placeholder="Customer Name" required/>
                <label for="name" className='fs-6'>Customer Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" onChange={handleChange} className="form-control" name="phone" value={inputs.phone} id="phone" placeholder="Phone" required/>
                <label for="phone" className='fs-6'>Phone</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" onChange={handleChange} className="form-control" name="email" value={inputs.email} id="email" placeholder="Email" required/>
                <label for="email" className='fs-6'>Email</label>
            </div>
            <button class="btn btn-primary">Save Change</button>
        </form>
    </>
  )
}

export default EditCustomer;