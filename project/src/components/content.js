// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Content() {
//     return (
//         <div>
//             {/* Ttitle */}
//             {/* <h1>Hello World!</h1> */}
//             {/* get's  current date and time */}
//             {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
//             <div id="map-container-google-1" class="z-depth-1-half map-container" >
//                 <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
//             </div>


//         </div>

//     );
// }
// export default Content;

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Content() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Content;

import React from 'react';
// import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

import potHoles from './potholes.PNG';
import streetLights from './street-light.PNG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import banner from './logobanner.jpg';


export function Content() {
    return (
        <div>

            <Container fluid="md">

                <Row>
                    <Col>
                        <br/><br/>
                        <img src={banner} width="500px"></img>
                        <br/><br/>
                    </Col>
                    <Col>
                        <br/><br/>
                        <h2>What is FixMyStreets.ie?</h2><br />
                        <p>FixMyStreets.ie is a website setup for residents of cities, towns and villages to have the opportunity to report broken insfrasture in their area in order to have council officials be made aware of these issues as quickly as possible.</p>
                        <hr/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <center>
                        <img src={potHoles} width="150px"></img>
                        <br /><small>You may report potholes or broken road on this web applicaion</small>
                        </center>
                        </Col>
                    <Col>
                        <center>
                        <img src={streetLights} width="150px"></img>
                        <br /><small>You may report Broken public appliances or broken lights on this web applicaion</small>
                        </center>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Content;
