import React from "react";
import Navi from "./Navi";

export default function Background() {
  return (
    <div>
      <section>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div
                  class="img-fluid"
                  style={{
                    backgroundImage: "url(divan-edebiyati.jpg)",
                    height: "100vh",
                  }}
                >
                  <div className="carousel-caption d-none d-md-block text-black">
                    <h1><strong>Divan Edebiyatı</strong></h1>
                  </div>
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.3)" }}
                    ></div>
                  </a>
                 
           
                </div>
              </div>
            </div>  
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div
                  class="img-fluid"
                  style={{
                    backgroundImage: "url(türkhalkedebiyatı.jpg)",
                    height: "100vh",
                  }}
                >
                  <div className="carousel-caption d-none d-md-block text-black">
                    <h1><strong>Halk Edebiyatı</strong></h1>
                  </div>
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.3)" }}
                    ></div>
                  </a>
             
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
