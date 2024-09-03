import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      {/* <TrustedBy /> */}
      <Slide slidesToShow={4} arrowsScroll={4}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Access an entire realm of freelance expertise right at your fingertips.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./explore/Video.mp4" autoPlay muted loop/>
            {/* <iframe width="600" height="500" src="https://www.youtube.com/embed/QsY8fnvMn6c?si=fjWGWww14l6rWZoi" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img src="./explore/graphics-design.svg" alt="" />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img src="./explore/online-marketing.svg" alt="" />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img src="./explore/writing-translation.svg" alt="" />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img src="./explore/video-animation.svg" alt="" />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img src="./explore/music-audio.svg" alt="" />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img src="./explore/programming.svg" alt="" />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img src="./explore/data.svg" alt="" />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img src="./explore/photography.svg" alt="" />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              DevStudio<i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven talents
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore DevStudio Business</button>
          </div>
          <div className="item">
            <img src="./explore/business-desktop.png" alt="" />
          </div>
        </div>
      </div>
      <div className="slider">
        <Slide slidesToShow={4} arrowsScroll={4}>
          {projects.map((card) => (
            <ProjectCard key={card.id} card={card} />
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Home;
