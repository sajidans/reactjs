
import 'bootstrap/dist/css/bootstrap.min.css';
import firstImage from "../../assets/banner-1.jpg";
import secondImage from "../../assets/banner-2.jpg";
import thirdImage from "../../assets/banner-3.png";
import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [banners3, setUsers] = useState([]);
  const [banners4, setUsers1] = useState([]);
  const [banners6, setUsers2] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/banners/10');
        console.log(response);
        setUsers(response?.data?.Data);
    };

    fetchUsers();
    
}, []);
useEffect(() => {
  const fetchUsers1 = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/admin/banners/11');
      console.log(response);
      setUsers1(response?.data?.Data);
  };

  fetchUsers1();
  
}, []);
useEffect(() => {
  const fetchUsers2 = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/admin/banners/12');
      console.log(response);
      setUsers2(response?.data?.Data);
  };

  fetchUsers2();
  
}, []);

  return (
    

    <>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={firstImage} className="d-block w-100" alt="First Slide" />
          </div>
          <div className="carousel-item">
            <img src={secondImage} className="d-block w-100" alt="Second Slide" />
          </div>
          <div className="carousel-item">
            <img src={thirdImage} className="d-block w-100" alt="Third Slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <p className="height15">&nbsp;</p>
      <div className='row'>
          {banners3.map((banner, index) => (
            <div 
                className="col-md-4 col-4 wow fadeIn banner3" 
                key={index} 
                data-wow-delay={`${0.2 + index * 0.1}s`} // Adjusting delay based on index
                style={{ visibility: 'visible', animationDelay: '0.1s' }} // Added 's' for seconds
            >
                <a href={banner.co4_page_link}>
                    <img src={'https://ssecarts.com/application/banner/'+banner.co4_banner} className="d-block w-100 pb" alt="Banner" />
                </a>
            </div>
        ))}
      </div>
      <p className="height15">&nbsp;</p>
      <div className='row'>
          {banners4.map((banner, index) => (
            <div 
                key={index} 
                className="col-md-3 col-6 wow fadeIn" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}
            >
                <a href={banner.co4_page_link}>
                    <img src={'https://ssecarts.com/application/banner/'+banner.co4_banner} className="d-block w-100 pb" alt="Banner" />
                </a>
            </div>
        ))}
      </div>
      <p className="height15">&nbsp;</p>
      
      <div className="row justify-content-center">
      {banners6.map((banner, index) => (
        <div
          key={index}
          className={`col-md-2 col-6 wow fadeIn`}
          data-wow-delay=".2s"
          style={{ visibility: 'visible', animationDelay: `${(index + 1) * 0.2}s` }}
        >
          <a href="#">
            <img src={'https://ssecarts.com/application/banner/'+banner.co4_banner} className="d-block w-100 pb" alt="..." />
          </a>
        </div>
      ))}
    </div>
    
    

      <div className="card" style={{ width: '18rem' }}>
        <img src={firstImage} className="card-img-top" alt="Placeholder" />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={secondImage} className="card-img-top" alt="Placeholder" />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={thirdImage} className="card-img-top" alt="Placeholder" />
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>


      

    </>
  );
}
