import React, { useEffect } from "react";
import starSticker from "../../img/sticker/star.png";
import personSticker from "../../img/sticker/person.png";
import likeSticker from "../../img/sticker/like.png"
import Aos from "aos";


const Testimonial = () => {
  useEffect( () => {
    Aos.init({duration: 1000})
  },[])
  return (
    <div className="testimonial-section">
      <div className="sticker">
        <img data-aos="fade-left" className="starSticker" src={starSticker} alt="" />
        <img data-aos="fade-up" className="personSticker" src={personSticker} alt="" />
        <img data-aos="flip-right" className="likeSticker" src={likeSticker} alt="" />
      </div>
      <div className="testimonial-container container d-flex">
          <div className="testimonial-text text-white">
              <h4 data-aos="fade-up" className="fs-1">Happy Clients <br /> About Us</h4>
              <p data-aos="fade-up">See! What Do Our Clients Say About Us!</p>
          </div>
          <div className="testimonials">
          <div
        id="carouselExampleIndicators"
        className="carousel slide h-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner  h-100">
          <div className="carousel-item testimonial-slider position-relative active ">
            <div className="carousel-text">
            <h5>Moshiour, He is a Young, Talented and Professional guy. He really helped us a lot to Digitize our business. We generated 3.5x client after taking services from Avista Digital . Best Wishes</h5>
            <h6>Abdul Hamid</h6>
            <p>Chairman, HB Logistic Canada</p>
            </div>
          </div>
          <div className="carousel-item  testimonial-slider ">
          <div className="carousel-text">
            <h5>Moshiour Rahman is the best guy for digital marketing I have been working with him since 2019 and getting a good response so far, my site is always showing the first page of Google I'm highly recommended him.</h5>
            <h6>Mike Devis</h6>
            <p>Founder Company Owner, NY</p>
            </div>
          </div>
          <div className="carousel-item  testimonial-slider ">
            <div className="carousel-text">
            <h5>Moshiour Bhai is an excellent person from Avista Digital. He got my site ranked within 4 months. Avista Digital is the best SEO services company in Bangladesh. I recommend them for web design and SEO services. They helped me to get my logo, business website and SEO. They provide a complete business startup solution. I wish them Good Luck 🙂</h5>
            <h6>Arfin Nayeem Leo</h6>
            <p>CEO & Founder, Leo Tech Solutions</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
          </div>
      </div>
    </div>
  );
};

export default Testimonial;
