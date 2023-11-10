import React from 'react'
import"./footer.css"

export const Footer = () => {
    const start = {
        color: "rgba(235, 21, 170, 0.624)",
        padding: "20px",
        cursor: "pointer",
        fontSize: "25px",
        width: "300px",
        height: "63px",
        display: "flex",
        flexDirection: "row",
        position: "relative",
        right: "50%",
        left: "50%",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid rgba(235, 21, 170, 0.624)",
        borderRadius: "12px"
    }
  return (
     <footer>
        <p style={start}>2023 - yoo fin!</p>
     </footer>
  )
}
