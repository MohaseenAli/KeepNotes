import React from 'react'
import "../css/footer.css"

const Footer = () => {
  let myStyle = {
    color:"white",
    backgroundColor:"black",
    padding:"15px",
    position:"relative",
    bottom:"-133px",
  }
  return (
    <div style={myStyle}>
      <div className="text-center">
        Copyright &copy; KeepNotes.com
      </div>
    </div>
  )
}

export default Footer
