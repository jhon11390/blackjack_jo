import {Navbar, Container, Nav} from 'react-bootstrap'

function Menu () {
  return (
    <div style={{position: "fixed", width: "100%", top: "0", zIndex: "10"}}>
       <style type="text/css">
        {`
          #titleGame {
            font-size: 25px;
          }

          @media (max-width: 768px) {
            #titleGame {
              font-size: 20px;
            }
          }

          @media (max-width: 576px) {
            #titleGame {
              font-size: 12px;
            }
          }

        `}
      </style>
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
          <Nav className="">
            <h1 id="titleGame" style={{color: 'white', fontFamily: 'Henny Penny', marginTop: '20px'}}>BlackJack por {`=>`} Jhon Ortega</h1>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu;