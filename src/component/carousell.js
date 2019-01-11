import React, { Component } from 'react';
class Carousell extends Component{
    render(){
        return(
            <div>
               
               
            
            
            <section id="home" className="home">
            {/* Carousel */}
            <div id="carousel" className="carousel slide" data-ride="carousel">
              {/* Carousel-inner */}
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                <video className="video-carousell" poster="https://image-service.blueapron.com/render/q/quality/75/src/https%3A%2F%2Fmedia.blueapron.com%2Fhome_page%2FSplash%2Fbrand-hero-poster.jpg" preload="auto" autoPlay loop muted>
                            <source src="https://media.blueapron.com/home_page/Splash/brand-hero.mp4" type="video/mp4" />
                </video>
                  <div className="overlay">
                    <div className="carousel-caption">
                      <h1>Order our top-rated</h1>
                      <h1 className="second_heading">recipes &amp; today!</h1>
                      <a className="btn know_btn">Get started</a>
                    </div>					
                  </div>
                </div>
                
              </div>{/* Carousel-inner end */}
              {/* Controls */}
            </div>{/* Carousel end*/}
          </section>
          </div>
        );
    }
}
export default Carousell
