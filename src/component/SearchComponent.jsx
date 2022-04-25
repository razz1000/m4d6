import { Component } from "react";
import {Form, Button} from "react-bootstrap"




class SearchComponent extends Component {

    
    state = {
        searchQuery: ""
    }

    onChangeFunction = async (event) => {
      if (event.target.value.lenght > 5) {   
        this.setState({
        ...this.state,
        searchQuery:event.target.value})  
        event.preventDefault()
        const response = await fetch("http://www.omdbapi.com/?apikey=593bbdc9&s=" + this.state.searchQuery)
       
        const parsedBody = await response.json();
        console.log(parsedBody)
        console.log(event.target.value)
        this.setState({searchQuery: event.target.value})
    } else (console.log(event.target.value.length))
    }

 componentDidMount=()=>{
 }


    render () {
    return (
        <div>
            <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control type="text" placeholder="Search here"
                            
                            onChange={this.onChangeFunction} />
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