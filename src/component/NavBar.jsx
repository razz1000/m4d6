import { Navbar, Nav, Form, FormControl, Dropdown } from "react-bootstrap";

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        src="netflix_logo.png"
        alt=""
        style={{ width: "89px", height: "35px" }}
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#Homes" className="text-white">
          Home
        </Nav.Link>
        <Nav.Link href="#TV Shows" className="text-white">
          TV Shows
        </Nav.Link>
        <Nav.Link href="#Movies" className="text-white">
          Movies
        </Nav.Link>
        <Nav.Link href="#Recently Added" className="text-white">
          Recently Added
        </Nav.Link>
        <Nav.Link href="#My List" className="text-white">
          My List
        </Nav.Link>
      </Nav>
      <Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
        </Form>
        <Nav.Link href="#deets">KIDS</Nav.Link>
        <i class="bi bi-alarm-fill"></i>
        <Dropdown className="mr-2">
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            <img
              src="avatar.png"
              alt=""
              style={{ width: "30px", height: "30px" }}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default NavBar;
