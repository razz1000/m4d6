
import { Component } from "react"
import {Card, ListGroup, Container, Row, Col, Button} from "react-bootstrap"
import ListGroup1 from "./ListGroup1"



class Footer extends Component {
    render () {
    return (
          
            <Container >
                <div className="icons">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-youtube"></i>
                </div>
                <Row>

                <Col className="col-3">   
       
                 <ListGroup1 
                 ListGroup1="Audio and Subtitles"
                 ListGroup2="Media Center"
                 ListGroup3="Privacy"
                 ListGroup4="Contact Us"
                 
                 
                 
                 />
                 <div className="button-div">
                             <Button variant="light" className="ml-0 button1">Service Code</Button>
                </div>
                </Col >
                <Col className="col-3">       
                <ListGroup1 
                ListGroup1="Audio Description"
                ListGroup2="Investor Relations"
                ListGroup3="Legal Notices"
                
                />
                </Col>
                <Col className="col-3">       
                 <ListGroup1 
                 ListGroup1="Help Center"
                 ListGroup2="Jobs"
                 ListGroup3="Cookie Preferences"
                 ListGroup4=""
                 />
                </Col>
                <Col className="col-3">       
                 <ListGroup1 
                 ListGroup1="Gift Cards"
                 ListGroup2="Terms of Use"
                 ListGroup3="Corporate Information"
                 ListGroup4=""
                 />
                </Col>
            </Row>
            <p className="button-text">©1997-2022 Netflix, Inc.</p>

            
            </Container>


        
    )
}
}
export default Footer