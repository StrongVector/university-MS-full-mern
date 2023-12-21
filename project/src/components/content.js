

import React from 'react';
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
