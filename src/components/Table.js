import { Button } from 'react-bootstrap';


function Table() {
  
  


  const iniciarJuego = (e) => {
    const cartas = document.querySelectorAll('.cartaPoker')
    const botonesJuego = document.querySelector('#buttonsCards') 
    

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
          if(i === 1){
            cartas[i].style.top = '-120px'
            cartas[i].style.right = '100px'
            setTimeout(() => {
              cartas[i].style.transform = 'rotateY(360deg)';
              cartas[i].style.backgroundImage = 'url("img/cartas/corazonesA.png")';
            },500);
          } else if (i === 0){
            cartas[i].style.top = '-120px'
            cartas[i].style.left = '100px'
          } else if (i === 1){
            cartas[i].style.top = '170px'
            cartas[i].style.right = '100px'
            setTimeout(() => {
              cartas[i].style.transform = 'rotateY(360deg)';
              cartas[i].style.backgroundImage = 'url("img/cartas/corazones2.png")';
            }, 500);
          } else if (i === 3){
            cartas[i].style.top = '170px'
            cartas[i].style.right = '100px'
            setTimeout(() => {
              cartas[i].style.transform = 'rotateY(360deg)';
              cartas[i].style.backgroundImage = 'url("img/cartas/corazones3.png")';
            }, 500);
          } else {
            cartas[i].style.top = '170px'
            cartas[i].style.left = '100px'
            setTimeout(() => {
              cartas[i].style.transform = 'rotateY(360deg)';
              cartas[i].style.backgroundImage = 'url("img/cartas/corazones4.png")';
            }, 500);
          }
          
        }
      }, 500);
    }, 500);

    setTimeout(() => {
      botonesJuego.style.display = 'block';
    }, 3000);
    
  }

  const recarga = () => {
    window.location.reload(true);
  }

  return (
    <>
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

          #buttonsCards {
            display: none;
          }


        `}
      </style>
      <div style={{display: "flex", justifyContent: "center", marginTop: "205px"}}>
        <div style={{width: "200px", height: "200px", margin: "auto", borderRadius: "50%", position: "relative", display: "flex"}}>
          <Button id="btnGame" variant="dark" style={{margin: "auto", display: "block", width: "150px"}} onClick={iniciarJuego}>Iniciar Juego</Button>
          <div id ="carta1" className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
          <div id ="carta2" className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
          <div id ="carta3" className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
          <div id ="carta4" className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
          <div id ="carta5" className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
          <div id ="carta6" className="cartaPoker" style={{width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}></div>
        </div>
      </div>
    </div>
    <div id="buttonsCards">
      <div style={{marginTop: "150px", display: "flex", justifyContent: "center"}}>
        <Button id="btnGame" variant="success" style={{margin: "5px", width: "150px"}}>Carta</Button>
        <Button id="btnGame" variant="warning" style={{margin: "5px", width: "150px"}}>Plantar</Button>
        <Button id="btnGame" variant="danger" style={{margin: "5px", width: "150px"}} onClick={recarga}>Reiniciar</Button>
      </div>
    </div>
    
    </>
    
  )
}

export default Table;