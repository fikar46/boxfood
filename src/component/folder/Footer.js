import React, {Component} from 'react';
import "../../support/css/font-awesome.min.css";
import "../../support/css/bootstrap.min.css";
import "../../support/css/bootsnav.css";
import "../../support/css/custom.css";
import "../../support/custom-font/fonts.css";
import "../../support/css/jquery.fancybox.css?v=2.1.5";
class Footer extends Component{
    render(){
        return(
        <div>
            <footer className="footer-distributed">
  {/* Footer top */}
  <div className="container footer_top">
        <div className="row">
          <div className="col-lg-4 col-sm-7">
            <div className="footer_item">
              <h4>About Company</h4>
              <img className="logo" src="image/logo.png" alt="Construction" />
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem</p>
              <ul className="list-inline footer_social_icon">
                <li><a href><span className="fa fa-facebook" /></a></li>
                <li><a href><span className="fa fa-twitter" /></a></li>
                <li><a href><span className="fa fa-youtube" /></a></li>
                <li><a href><span className="fa fa-google-plus" /></a></li>
                <li><a href><span className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-5">
            <div className="footer_item">
              <h4>Explore link</h4>
              <ul className="list-unstyled footer_menu">
                <li><a href><span className="fa fa-play" /> Our services</a>
                </li><li><a href><span className="fa fa-play" /> Meet our team</a>
                </li><li><a href><span className="fa fa-play" /> Forum</a>
                </li><li><a href><span className="fa fa-play" /> Help center</a>
                </li><li><a href><span className="fa fa-play" /> Contact Cekas</a>
                </li><li><a href><span className="fa fa-play" /> Privacy Policy</a>
                </li><li><a href><span className="fa fa-play" /> Cekas terms</a>
                </li><li><a href><span className="fa fa-play" /> Site map</a>
                </li></ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-7">
            <div className="footer_item">
              <h4>Latest post</h4>
              <ul className="list-unstyled post">
                <li><a href><span className="date">20 <small>AUG</small></span>  Luptatum omittantur duo ne mpetus indoctum</a></li>
                <li><a href><span className="date">20 <small>AUG</small></span>  Luptatum omittantur duo ne mpetus indoctum</a></li>
                <li><a href><span className="date">20 <small>AUG</small></span>  Luptatum omittantur duo ne mpetus indoctum</a></li>
                <li><a href><span className="date">20 <small>AUG</small></span>  Luptatum omittantur duo ne mpetus indoctum</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-5">
            <div className="footer_item">
              <h4>Contact us</h4>
              <ul className="list-unstyled footer_contact">
                <li><a href><span className="fa fa-map-marker" /> 124 New Line, London UK</a></li>
                <li><a href><span className="fa fa-envelope" /> hello@psdfreebies.com</a></li>
                <li><a href><span className="fa fa-mobile" /><p>+44 00 00 1234 <br />+44 00 00 1234</p></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>{/* Footer top end */}
      </footer>
        </div>
        )
    }
}
export default Footer;