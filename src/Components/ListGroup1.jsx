import React from "react"
import {Card, ListGroup} from "react-bootstrap"



let ListGroup1 = (props) => {
    return (
        
            <Card className="card1">

                    <ListGroup className="list-group" variant="flush" style={{border: "none"}}>
                        <ListGroup.Item className="list-group-item">{props.ListGroup1}</ListGroup.Item>
                        <ListGroup.Item className="list-group-item">{props.ListGroup2}</ListGroup.Item>
                        <ListGroup.Item className="list-group-item">{props.ListGroup3}</ListGroup.Item>
                        <ListGroup.Item className="list-group-item">{props.ListGroup4}</ListGroup.Item>
 
                    </ListGroup>

                </Card>
        
    )
}

export default ListGroup1