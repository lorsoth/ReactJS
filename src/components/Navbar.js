import React from 'react';

function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-white">
        <div class="container-fluid">
            <i class="navbar-brand bi bi-justify-left fs-4"></i>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
  )
}

export default NavBar;