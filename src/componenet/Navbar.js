import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Creative Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <div className="nav-item ">
              <Nav.Link>
                <div className="nav-link mx-2 active" href="#">
                  Home
                </div>
              </Nav.Link>
            </div>
            <div className="nav-item ">
              <Nav.Link>
                <div className="nav-link mx-2" href="#">
                  Caregory
                </div>
              </Nav.Link>
            </div>
            <div className="nav-item ">
              <Nav.Link>
                <div className="nav-link mx-2 " href="#">
                  Product
                </div>
              </Nav.Link>
            </div>

            <li className="d-flex align-item-center ">
              <button className="btnIcon mx-2">
                <i className="bi bi-bag position-relative">
                  <div className="circleBadge position-absolute top-0 end-0"></div>
                </i>{" "}
              </button>
            </li>

            
          </Nav>
          <div className="d-flex">
          <button className="me-2 secondaryBtn ">Sign Up</button>
          <button className="primaryBtn">Login</button>
        </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default BasicExample;
