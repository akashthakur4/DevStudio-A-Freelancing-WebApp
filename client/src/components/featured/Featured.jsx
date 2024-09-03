import React, { useState, useEffect } from 'react';
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
//imageSlider
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['./img/User5.png', './img/man.png'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

//imageSlider

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your needs.
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular :</span>
            <button>Graphic Design</button>
            <button>Website Development</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        </div>
      </div>
    </div>
  );
}

export default Featured;
