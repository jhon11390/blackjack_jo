import { Button } from 'react-bootstrap';


function Table() {
  
  


  const iniciarJuego = (e) => {
    const cartas = document.querySelectorAll('.cartaPoker')
    
    for (let i = 0; i < cartas.length; i++) {
      cartas[i].style.transform = 'rotate(0deg)'
    }
    
    e.target.style.display = 'none' 

    setTimeout(() => {
      for (let i = 0; i < cartas.length; i++) {
        cartas[i].style.top = '25px'
      }
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
          if(i === 0){
            cartas[i].style.top = '-120px'
            cartas[i].style.right = '100px'
          } else if (i === 1){
            cartas[i].style.top = '-120px'
            cartas[i].style.left = '100px'
          } else if (i === 2){
            cartas[i].style.top = '170px'
            cartas[i].style.right = '100px'
          } else if (i === 1){
          } else {
            cartas[i].style.top = '170px'
            cartas[i].style.left = '100px'
          }
          
        }
      }, 1500);
    }, 1500);

    
  }


  return (
  
    <div style={{width: "100%"}}>
      
      <style type="text/css">
        {`
          .cartaPoker{
            background-image: url("img/carta.jpg");
            background-repeat: no-repeat;
            background-size: 95%;
            background-position: center;
            transition: all .7s;
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
          <Button id="btnGame" variant="dark" style={{margin: "auto", display: "block", width: "150px"}} onClick={iniciarJuego}>Iniciar Juego</Button>
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