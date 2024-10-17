import 'bootstrap/dist/css/bootstrap.min.css';
import firstImage from "../../assets/banner-1.jpg";
import secondImage from "../../assets/banner-2.jpg";
import thirdImage from "../../assets/banner-3.png";

export default function Home() {
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
