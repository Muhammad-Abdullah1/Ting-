import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
    <div className='bg-width'>
    <section className='navbar-bg'>
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
   <Link to='/Home' class="navbar-brand text-white"> Ting</Link>
    <button class="navbar-toggler" type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse  ${show ? "show" : ""}`}  >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/Home" class="nav-link active text-white">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/Home/feed" class="nav-link active text-white">Feed</Link>
        </li>
        <li class="nav-item">
        <Link to="/Home/Events" class="nav-link active text-white">Events</Link>
        </li>
        <li class="nav-item">
        <Link to="/Home/offers" class="nav-link active text-white">offers</Link>
        </li>
        <li class="nav-item">
          <Link to="/Home/team" class="nav-link active text-white">Team</Link>
        </li>
      </ul>
      {/* <form class="d-flex">
        <button class="btn btn-Style" type="submit">Sign Out</button>
      </form> */}
    </div>
  </div>
</nav>
</section>
</div>
  )
}

export default Navbar;