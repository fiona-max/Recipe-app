import Card from 'react-bootstrap/Card';
import thai from '../images/thai.png';

export default function Meals() {
  return <>
    <div className="container m-2">
      <h2 style={{fontStyle: 'Montez', fontWeight:'50'}}> Cuisines</h2>
      <div className="row">
        <div className="col-md-4 col-12 mb-3">
          <Card className="mb-3 rounded-0 border-0">
              <Card.Img variant="top" className="rounded-0" src={thai} width="100%"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-12">
          <Card>
            <Card.Img variant="top" src={thai} width="100%"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-12">
          <Card>
            <Card.Img variant="top" src={thai} width="100%"/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </>
}
