import { Link } from "react-router-dom";
import logo from  '../../../assets/logo/logo.png'
const Header = () => {
  return (
    <header className="main1 font1">
      <section className="top bg-blue">
        <div className="row align-items-center">
          <div className="col-5 col-lg-2 col-md-3 wow zoomIn logo" data-wow-duration=".2s">
            <Link to="/">
              <img src={logo} width="70" className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="col-7 col-lg-2 col-md-4 wow zoomIn" data-wow-duration=".2s">
            <Link to="#" className="m-0 p-0 text-white">
              <i className="far fa-compass"></i> Select Address
              <i className="ps-2 fa fa-angle-down" aria-hidden="true"></i>
             
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 wow zoomIn" data-wow-duration=".4s">
            <div className="row main_header-row">
              <div className="col-md-12 bg-yellow rounded p-0">
                <div className="input-group" style={{ padding: '2px' }}>
                  <input
                    type="text"
                    className="form-control border-0 rounded font2 ps-3"
                    placeholder="Search for products and items"
                  />
                  <span className="input-group-text bg-yellow text-white px-3 border-0 cusorp marin_search">
                    <i className="fas fa-search"></i> Search
                  </span>
                  <div id="searchResults" style={{ padding: '4px', backgroundColor: '#ffffff' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 wow zoomIn" data-wow-duration=".6s">
            <ul className="list-inline text-end">
              <li className="list-inline-item">
                <Link to="/partner/login">Sell On Site_Name</Link>
              </li>
         
                <li className="list-inline-item dropdown">
                  <Link className="dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="me-2">My Account</span>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end itemsize">
                    <li><Link className="text-dark dropdown-item" to="/customer/profile">My Account</Link></li>
                    <li><Link className="text-dark dropdown-item" to="#">+91-</Link></li>
                    <li className="mt-4"><Link className="text-dark dropdown-item" to="/customer/my-orders">Order History</Link></li>
                    <li><Link className="text-dark dropdown-item" to="/customer/my-wishlist">My Wishlist</Link></li>
                    <li><Link className="text-dark dropdown-item" to="/customer/my-review-and-ratings">My Review & Ratings</Link></li>
                    <li><Link className="text-dark dropdown-item" to="/customer/my-address">My Addresses</Link></li>
                    <li><Link className="text-dark dropdown-item" to="/contact-us">Contact Us</Link></li>
                    <li><Link className="text-dark dropdown-item" to="/logout">Logout</Link></li>
                  </ul>
                </li>
              
                <li className="list-inline-item">
                  <Link to="#" data-bs-toggle="modal" data-bs-target="#LogIn">
                    <i className="far fa-user"></i> Log In | Sign Up
                  </Link>
                </li>
              
              <li className="list-inline-item position-relative">
                <Link to="/cart">
                  <img src="" alt="Cart" />
                  Cart
                  <sup>
                    <span className="badge bg-white p-1 color-blue">01</span>
                  </sup>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header