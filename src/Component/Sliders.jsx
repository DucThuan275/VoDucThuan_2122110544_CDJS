import React from 'react'

import slider_1 from "../imgs/slider_1.webp";
import slider_2 from "../imgs/slider_2.webp";
import slider_3 from "../imgs/slider_3.webp";

const Sliders = () => {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slider_1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={slider_2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={slider_3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </div>
  )
}

export default Sliders
