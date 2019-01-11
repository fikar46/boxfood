import React, { Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import "../../support/css/font-awesome.min.css";
import "../../support/css/bootstrap.min.css";
import "../../support/css/bootsnav.css";
import "../../support/css/custom.css";
import "../../support/custom-font/fonts.css";
import "../../support/css/jquery.fancybox.css?v=2.1.5";




class Home extends Component{
    state= {
        listProduk: []
    };
    componentWillMount(){
        axios.get('http://localhost:1997/produk')
        .then((data)=> {
            console.log(data.data)
            this.setState({listProduk:data.data})
        }).catch((err)=>{
            console.log(err)
        })
    }
    renderListProduk = ()=>{
        var listJSXProduk = this.state.listProduk.map((item)=>{
            return(
                <div>
                    <div className='box'>
                        <h3>{item.nama_produk}</h3>
                        <div className='description'>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return listJSXProduk
    }
    render(){
        return(
    //         <div className='home'>
    //         <div className="row align-items-center justify-content-between">
    //     <div className="col-lg-6 col-md-6 home-about-left">
    //       <img className="img-fluid" src="https://colorlib.com/preview/theme/personal/img/about-img.png" alt />
    //     </div>
    //     <div className="col-lg-5 col-md-6 home-about-right">
    //       <h1 className="text-uppercase">Choose your meals</h1>
    //       <p>
    //       Our chef-designed recipes include balanced Mediterranean meals, quick one-pan dinners, and top-rated customer favorites.
    //       </p>  
    //     </div>
      
      
    //   <div className="col-lg-6 col-md-6 home-about-right">
    //         <img className="img-fluid" src="https://colorlib.com/preview/theme/personal/img/about-img.png" alt />
    //     </div>
    //     <div className="col-lg-5 col-md-6 home-about-left">
    //         <h1 className="text-uppercase">Unpack your box</h1>
    //         <p>
    //         We guarantee the freshness of all our ingredients and deliver them in an insulated box right to your door.
    //         </p>
    //     </div>

    //     <div className="col-lg-6 col-md-6 home-about-right">
    //       <img className="img-fluid" src="https://colorlib.com/preview/theme/personal/img/about-img.png" alt />
    //     </div>
    //     <div className="col-lg-5 col-md-6 home-about-left">
    //       <h1 className="text-uppercase">Create magic</h1>
    //       <p>
    //       Following our step-by-step instructions you’ll experience the magic of cooking recipes that our chefs create with your family’s tastes in mind.
    //       </p>
    //     </div>
    //     </div>
        
    //     <div className='container'>
    //         <div className="row">
    //             <img src="https://image-service.blueapron.com/render/q/quality/75/src/https%3A%2F%2Fmedia.blueapron.com%2Fhome_page%2FWhatsInTheDelivery%2F20171213_HomepageUpdate_WhatsInside_1200_Desktop.jpg" className="background-image" alt="image"/>
    //         </div>
    //     </div>
        
            
    //     </div>
    
    <div>
        
    {/* About */}
    <section id="about">
      <div className="container about_bg">
        <div className="row">
          <div className="col-lg-7 col-md-6">
            <div className="about_content">
              <h2>Welcome to Our Company</h2>
              <h3>Aliquam lacus purus, auctor malesuada</h3>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
              <p>sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
              <a className="btn know_btn">know more</a>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-lg-offset-3">
            <div className="about_banner">
              <img src="image/boxfood.jpg" className="boxfood-image" alt />
            </div>
          </div>
        </div>
      </div>
    </section>{/* About end */}
    {/* Services */}
    <section id="services">
      <div className="container">
        <h2>How to use BOXFOOD</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="service_item">
              <img src="image/service_img1.jpg" alt="Our Services" />
              <h3>Choose your meals</h3>
              <p>Our chef-designed recipes include balanced Mediterranean meals, quick one-pan dinners, and top-rated customer favorites.</p>
              <a href="#services" className="btn know_btn">know more</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service_item">
              <img src="image/service_img2.jpg" alt="Our Services" />
              <h3>Unpack your box</h3>
              <p>We guarantee the freshness of all our ingredients and deliver them in an insulated box right to your door.</p>
              <a href="#services" className="btn know_btn">know more</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service_item">
              <img src="image/service_img3.jpg" alt="Our Services" />
              <h3>Create magic</h3>
              <p>Following our step-by-step instructions you’ll experience the magic of cooking recipes that our chefs create with your family’s tastes in mind.</p>
              <a href="#services" className="btn know_btn">know more</a>
            </div>
          </div>
        </div>
      </div>
    </section>{/* Services end */}
    {/* Why us */}
    <section id="why_us">
      <div className="container text-center">
      <h2>WHAT'S INSIDE A BOXFOOD</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="why_us_item">
              <span className="fa fa-leaf" />
              <h4>Delicious, chef-designed recipes</h4>
              <p>With step-by-step instructions so you never miss a beat (or beet) </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="why_us_item">
              <span className="fa fa-futbol-o" />
              <h4>Responsibly-sourced, quality ingredients</h4>
              <p>Like fresh produce, sustainable seafood and exclusive spice blends</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="why_us_item">
              <span className="fa fa-group" />
              <h4>Perfectly-portioned amounts</h4>
              <p>So no morsels or dollops go to waste</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="why_us_item">
              <span className="fa fa-line-chart" />
              <h4>Recyclable ice packs and packaging</h4>
              <p>To ensure your ingredients stay fresh until you’re home and ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* Why us end */}
       {/* Testimonial */}
    <section id="testimonial">
      <div className="container text-center testimonial_area">
        <h2>Customer Reviews</h2>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial_item">
              <div className="testimonial_content text-left">
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
              </div>
              <img src="image/testimonial_img1.png" alt="Testimonial" />
              <p className="worker_name">john smith</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial_item">
              <div className="testimonial_content">
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
              </div>
              <img src="image/testimonial_img2.png" alt="Testimonial" />
              <p className="worker_name">john smith</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial_item">
              <div className="testimonial_content">
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</p>
              </div>
              <img src="image/testimonial_img1.png" alt="Testimonial" />
              <p className="worker_name">john smith</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* Testimonial end */}
    <a id="scrollUp" href="#top" style={{position: 'fixed', zIndex: 2147483647, display: 'block'}} />
  </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        blackpink: state.blackpink
    };
}
export default connect(mapStateToProps)(Home);