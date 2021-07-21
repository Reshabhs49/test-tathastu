import React,{ Component } from 'react'
class Footer extends Component {
    render(){
        return (
            <footer className="page-footer font-small indigo" id="contact" >
    <br /><br />
        <div className="container">
          <div className="row text-center d-flex justify-content-center">
    
            <div className="col-md-12">
                <a href="index.html"><span className="text-light footer-logo"><u>अन्नpoorna Kitchen</u></span></a>
            </div>
    
          </div>
          <div className="row d-flex text-center justify-content-center mb-md-0 pb-4">
    
            <div className="col-md-8 col-12">
              <address style={{color:"black"}}>
                  <p><span>Annapoorna Tiffin Service, 483 Shyam Nagar, Kanpur</span><br />
                  <span>Opening Hours : Mo-Su 8:00 a.m.-9:00 p.m.</span><br />
                  <span>Call for Offline Bookings : 831 806 8232</span></p>
              </address>
            </div>
    
          </div>
          </div>
      </footer>
        );
    }
    }
    export default Footer;