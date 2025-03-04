import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Vikas ELECTRONICS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" 
                href="/">
                   
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/laptop">
                   laptops
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ac">
                   air conditioners
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/tv">
                   Television
                </a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="/phone">
                   mobiles
                </a>
              </li> 
              

            </ul>
          </div>
        </div>
      </nav>
      <h5>#AD</h5>
      <img src="https://bajajdigital-cdn-endpoint.azureedge.net/product/15ba6aa8-6079-4cc0-8b18-8d67097fc14b" className="img-fluid" alt="..."></img>
      
      <p><h5>Shop By Brands</h5></p>
      <img src="https://cdn.bajajelectronics.com/product/BEProduction-16490.png" className="img-fluid" alt="..."></img>
      <img src="https://cdn.bajajelectronics.com/product/BEProduction-16512.png" className="img-fluid" alt="..."></img>
      <img src="https://cdn.bajajelectronics.com/product/BEProduction-16523.png" className="img-fluid" alt="..."></img>
      <img src="https://cdn.bajajelectronics.com/product/BEProduction-16525.png" className="img-fluid" alt="..."></img>
      <img src="https://cdn.bajajelectronics.com/product/BEProduction-16509.png" className="img-fluid" alt="..."></img>
      <img src="https://cdn.bajajelectronics.com/product/BEProduction-16496.png" className="img-fluid" alt="..."></img>
      <img src="https://cdn.bajajelectronics.com/product/BEProduction-16489.png" className="img-fluid" alt="..."></img>
      <img src="https://cdn.bajajelectronics.com/product/BEProduction-16532.png" className="img-fluid" alt="..."></img>
      <img src="https://cdn.bajajelectronics.com/product/BEProduction-16518.png" className="img-fluid" alt="..."></img>
      <img src="https://cdn.bajajelectronics.com/product/BEProduction-16533.png" className="img-fluid" alt="..."></img>
      <img src="https://cdn.bajajelectronics.com/images/Health-banner-compressed.png" className="img-fluid" alt="..."></img>
    </div>
  );
}