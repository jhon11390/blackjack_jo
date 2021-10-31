import { Button } from 'react-bootstrap';

function Table() {
  return (
  
    <div style={{width: "100%"}}>
      <style type="text/css">
        {`
          .cartaPoker{
            background-image: url("img/carta.jpg");
            background-repeat: no-repeat;
            background-size: 95%;
            background-position: center;
          }

          .cartaPoker:nth-child(2){
            transform-origin: center 250px;
            transform: rotate(60deg);
          }

          .cartaPoker:nth-child(3){
            transform-origin: center 250px;
            transform: rotate(120deg);
          }

          .cartaPoker:nth-child(4){
            transform-origin: center 250px;
            transform: rotate(180deg);
          }

          .cartaPoker:nth-child(5){
            transform-origin: center 250px;
            transform: rotate(240deg);
          }

          .cartaPoker:nth-child(6){
            transform-origin: center 250px;
            transform: rotate(300deg);
          }
        `}
      </style>
      <div style={{border: "1px solid red", height: "100vh", display: "flex", justifyContent: "center"}}>
        <div style={{width: "200px", height: "200px", margin: "auto", border: "1px solid green", borderRadius: "50%", position: "relative", display: "flex"}}>
          <Button variant="dark" style={{margin: "auto", display: "block", width: "150px"}}>Iniciar Juego</Button>
          <div className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
          <div className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
          <div className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
          <div className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
          <div className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
          <div className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
        </div>
      </div>
    </div>
  )
}

export default Table;