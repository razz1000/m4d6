import { Component } from "react";
import {Form, Button} from "react-bootstrap"




class SearchComponent extends Component {

    
 
/* 
    onChangeFunction = async () => {
      
      
        const response = await fetch("http://www.omdbapi.com/?apikey=593bbdc9&s=" + this.props.searchQuery)
       
        const parsedBody = await response.json();
        if(parsedBody.Response) {`

        `}
        console.log(parsedBody)
      
     
    
    }

 componentDidMount=()=>{

 } */


    render () {
    return (
        <div>
            <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control type="text" placeholder="Search here"
                            
                            onChange={(e)=> this.props.setSearchQuery({searchQuery: e.target.value})} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
            </Form>   
       </div>
    )
}
}




export default SearchComponent