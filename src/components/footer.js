import {useState} from "react";

export const Footer = () => {
    const [email, setEmail] = useState('');
  return <footer>
      <nav>
          <div className="row p-2 mb-4">
              <div className="col-md-3">
                  <h4 className="p-2 fs-5" style={{color: 'orange'}}>CulinaryDelight</h4>
                  <div className="fw-lighter p-3">
                      Discover amazing recipes <br/>from around the world
                  </div>
              </div>
              <div className="col-md-2">
                  <h4 className="p-2 fs-5">Quick Links</h4>
                  <div className="fw-lighter p-3 text-dark">
                      <a href="#" className="text-decoration-none text-dark">Home</a><br/>
                      <a href="#" className="text-decoration-none text-dark">Recipes</a><br/>
                      <a href="#" className="text-decoration-none text-dark">Categories</a><br/>
                      <a href="#" className="text-decoration-none text-dark'">About Us</a><br/>
                  </div>
              </div>
              <div className="col-md-3">
                  <h4 className="fs-5 p-2">Follow Us</h4>
                  <div className="flex">

                  </div>
              </div>
              <div className="col-md-3">
                  <h4 className="p-2 fs-5">NewsLetter</h4>
                  <div className="">
                      <input className="form-control" placeholder="Please enter your email" onChange={() => {}}/>
                  </div>
              </div>
          </div>
          <hr style={{color: 'orange', backgroundColor: 'white', height: '5px', width: '100%'}}/>
          <div className="align-text-bottom text-center mb-4">© 2025 CulinaryDelight.  All rights reserved.</div>
      </nav>
  </footer>
}