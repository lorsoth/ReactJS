import { Button, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';

function Customers() {
  const[loading,setLoading] = useState(false);
  const[dataSource,setDataSource] = useState([]);
  const navigate = useNavigate();

  const gotoAddCustomer = () =>{
    navigate('create');
  }

  useEffect(()=>{
    setLoading(true);
    getCustomers();
  },[]);

  function getCustomers(){
    axios.get('http://localhost/Labbapi/customers').then(function(res){
      console.log(res.data);
      setDataSource(res.data);
      setLoading(false);
    });
  }

  const deleteCustomer = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      axios.delete(`http://localhost/Labbapi/customers/${id}/delete`)
      .then(function(res){
        console.log(res.data);
        getCustomers();
      });
    }
  }

  return (
    <>
      <div className='d-flex justify-content-between mb-3'>
        <h5>List of Customers</h5>
        <Button onClick={gotoAddCustomer}>New Customer</Button>
      </div>
      <Table
        loading = {loading}
        columns = {[{
          title: "ID",
          dataIndex: "id",
        },
        {
          title: "Customer Name",
          dataIndex: "name",
        },
        {
          title: "Phone",
          dataIndex: "phone",
        },
        {
          title: "Email",
          dataIndex: "email",
        },
        {
          title: "Actions",
          width: "100px",
          render: (record) =>{
            return <>
              <Link to={`${record.id}/edit`}><i class='bi bi-pencil me-3 text-info'></i></Link>
              <i role='button' onClick={() => {deleteCustomer(record.id)}} class='bi bi-trash text-danger'></i>
            </>
          },
        },
        ]}
        dataSource = {dataSource}
        pagination = {{
          pageSize: 6,
        }}
      ></Table>
    </>
  )
}

export default Customers;