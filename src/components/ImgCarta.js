
function ImgCarta() {
  return(
    <div>
      <style type="text/css">
        {`
          @media (max-width: 768px) {
            .imgCarta {
              width: 150px;
            }
          }
        `}
      </style>
      <div style={{position: "fixed", width: "100%", bottom: "0", display: "flex", justifyContent: "space-between", zIndex: "-10"}}>
        <img className="imgCarta" src="img/imgpoker.png" width="350" alt="cartas poker" style={{display: "block", transform: "translateX(-70px) rotate(35deg)"}}/>
        <img className="imgCarta" src="img/imgpoker.png" width="350" alt="cartas poker" style={{display: "block", transform: "translateX(70px) rotate(-35deg)"}}/>
      </div>
    </div>
    
  )
}

export default ImgCarta