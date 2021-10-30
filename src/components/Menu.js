import {Navbar, Container, Nav} from 'react-bootstrap'

function Menu () {
  return (
    <div style={{position: "fixed", width: "100%", top: "0", zIndex: "10"}}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#Start">
          <img
            src="img/logoblanco.png"
            width="120"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            {/*<Nav.Link href="#About-me">BlackJack</Nav.Link>*/}
            <h1 style={{color: 'white', fontFamily: 'Henny Penny', fontSize: '25px', marginTop: '20px'}}>BlackJack por {`=>`} Jhon Ortega</h1>

          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu;