

function Table() {
  return (
  
    <div>
      <style type="text/css">
        {`
          .cartaPoker:nth-child(2){
            
          }
        `}
      </style>
      <div style={{border: "1px solid red", height: "100vh", display: "flex", justifyContent: "center"}}>
        <div style={{width: "200px", height: "200px", margin: "auto", border: "1px solid green", borderRadius: "50%", position: "relative"}}>
          <div className="cartaPoker" style={{border: "1px solid blue", width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}>carta 1</div>
          <div className="cartaPoker" style={{border: "1px solid blue", width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}>carta 1</div>
          <div className="cartaPoker" style={{border: "1px solid blue", width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}>carta 1</div>
          <div className="cartaPoker" style={{border: "1px solid blue", width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}>carta 1</div>
          <div className="cartaPoker" style={{border: "1px solid blue", width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}>carta 1</div>
          <div className="cartaPoker" style={{border: "1px solid blue", width: "100px", height: "150px", position: "absolute", top: "-150px", right: "50px"}}>carta 1</div>
        </div>
      </div>
    </div>
  )
}

export default Table;