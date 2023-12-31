import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function KeratonFAQ() {

  return (
    <div className="keraton-sponsors" style={{ paddingTop: "2rem", paddingBottom: "2rem", backgroundImage: "url(https://www.transparenttextures.com/patterns/arabesque.png)"}}>
      <Container >
        <Row className="text-center keraton-sponsors-row">
          <Col>
            <img src="../images/keraton/sponsors/1-csf.png" style={{maxWidth: "15%"}} alt=""></img>
          </Col>
        </Row>
        <Row className="text-center keraton-sponsors-row">
          <Col>
            <img src="../images/keraton/sponsors/gpss.png" style={{maxWidth: "18%", margin: "0px 30px"}} alt=""></img>
            <img src="../images/keraton/sponsors/2-deltagro.png" style={{maxWidth: "18%", margin: "0px 30px"}} alt=""></img>
            <img src="../images/keraton/sponsors/4-indomie.png" style={{maxWidth: "10%", margin: "5px 20px"}} alt=""></img>
          </Col>
        </Row>
        {/* <Row className="text-center keraton-sponsors-row">
          <Col>
            <img src="../images/keraton/sponsors/3-asuw.png" style={{maxWidth: "18%"}} alt=""></img>
            <img src="../images/keraton/sponsors/3-asmaja.png" style={{maxWidth: "14%"}} alt=""></img>
            <img src="../images/keraton/sponsors/3-tgi.png" style={{maxWidth: "18%"}} alt=""></img>
          </Col>
        </Row> */}
        <Row className="text-center keraton-sponsors-row">
          <Col sm={6} className="keraton-sponsors-row-first">
            <img src="../images/keraton/sponsors/4-hub.png" style={{width: `10%`, margin: "5px 20px"}} alt=""></img>
            <img src="../images/keraton/sponsors/4-kjri.png" style={{maxWidth: "10%", margin: "5px 20px"}} alt=""></img>
          </Col>
          <Col sm={6} className="keraton-sponsors-row-second">
            <img src="../images/keraton/sponsors/4-uwaa.png" style={{width: `10%`, margin: "5px 20px"}} alt=""></img>
            <img src="../images/keraton/sponsors/pln.png" style={{maxWidth: "10%", margin: "5px 20px"}} alt=""></img>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default KeratonFAQ;