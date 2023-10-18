import React from 'react'
import { Link } from 'react-router-dom';
function SideBar() {
  return (
    <div>
        <div className='m-2'>
            <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
            <span className='brand-name fs-4'>BMCLabB</span>
        </div>
        <div className="list-group list-group-flush">
            <Link className="list-group-item py-2 list-group-item-action" to='/'>
                <i className='bi bi-speedometer2 fs-5 me-2'></i>
                <span>Dashboard</span>
            </Link>
            <Link className="list-group-item py-2 list-group-item-action" to='/products'>
                <i className='bi bi-table fs-5 me-2'></i>
                <span>Products</span>
            </Link>
            <Link className="list-group-item py-2 list-group-item-action" to='/suppliers'>
                <i className='bi bi-people fs-5 me-2'></i>
                <span>Suppliers</span>
            </Link>
            <Link className="list-group-item py-2 list-group-item-action" to='/customers'>
                <i className='bi bi-people fs-5 me-2'></i>
                <span>Customers</span>
            </Link>
            <Link className="list-group-item py-2 list-group-item-action" to='/orders'>
                <i className='bi bi-cart fs-5 me-2'></i>
                <span>Orders</span>
            </Link>
            <Link className="list-group-item py-2 list-group-item-action" to='/reports'>
                <i className='bi bi-clipboard-data fs-5 me-2'></i>
                <span>Reports</span>
            </Link>
            <Link className="list-group-item py-2 list-group-item-action" to='/logout'>
                <i className='bi bi-power fs-5 me-2'></i>
                <span>Logout</span>
            </Link>
        </div>
    </div>
  )
}
export default SideBar;