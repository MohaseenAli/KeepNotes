import React from 'react'

const Footer = () => {
  let footerStyle = {
    width: "100%",
    border: "2px solid grey"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; KeepNotes.com
      </p>
    </footer>
  )
}

export default Footer
