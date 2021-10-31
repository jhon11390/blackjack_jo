
function ImgCarta() {
  return(
    <div style={{position: "fixed", width: "100%", bottom: "0", display: "flex", justifyContent: "space-between"}}>
      <img src="img/imgpoker.png" width="350" alt="cartas poker" style={{display: "block", transform: "translateX(-70px) rotate(35deg)"}}/>
      <img src="img/imgpoker.png" width="350" alt="cartas poker" style={{display: "block", transform: "translateX(70px) rotate(-35deg)"}}/>
    </div>
  )
}

export default ImgCarta