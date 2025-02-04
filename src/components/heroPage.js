import heroImage from '../images/hero-bg.png'
import tomato from '../images/Tomato.png'
import brocolli from '../images/Broccoli.png'
import frame from '../images/Frame-1.png'
import Button from 'react-bootstrap/Button';
export default function HeroPage() {
  return <>
    <div className="container">
      <div className="row justify-content-center mx-auto">
        <div className="col-md-6 col-12 mt-md-5 mt-0 pt-5 ">
          <h1 className="fw-bolder p-2 fs-1">COOKING MADE FUN AND EASY: UNLEASH <br/>  YOU INNER CHEF</h1>
          <div className="fw-lighter fs-6 mt-3 p-1 text-wrap">
            Discover more than
            <span className="fw-lighter p-2 fs-6" style={{'color': 'orange'}}>10,000 recipes </span>
            in your hand with the best recipe<br/>
            <span className="fs-6">Help you to find the easiest way to cook.</span>
          </div>
          <br/>
          <div className="col">
              <Button variant="warning" className="p-3 mt-4 rounded-3" style={{ width: '14rem'}}>Explore Recipes</Button>
          </div>
        </div>
        <div className="col-md-6 mb-sm-5 d-lg-block d-none mt-5">
          <div className="" style={{marginBottom: '-10rem'}}>
            <img src={tomato} className="img-fluid" style={{'width': '12%'}} alt="hero image"/>
          </div>
          <img src={heroImage} className="img-fluid" style={{'width': '100%'}} alt="hero image"/>
          <img src={frame} className="img-fluid" style={{'width': '30%','marginTop': '-23rem'}} alt="hero image"/>
          <div className="text-end" style={{marginTop: '-10rem'}}>
            <img src={brocolli} className="img-fluid" style={{'width': '13%'}} alt="hero image"/>
          </div>
        </div>
      </div>
    </div>
  </>
 }
