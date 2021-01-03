import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>How To's</h2>
            <p>
              Here are some of the functionalities of the BulkWhatsAppSender and how to use them.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-6">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tkjiO1QhVvE">  
                    </iframe>
                    {" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-6">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/92IKJF-I0HA">  
                    </iframe>
                    {" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-6">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/BFqfxVGLbWA">  
                    </iframe>
                    {" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-6">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/dFVdXixi1Ic">  
                    </iframe>
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
