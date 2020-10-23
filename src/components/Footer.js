import React from "react"
import "../css/components/Footer.css"
import FooterAddress from "./FooterAddress"
import FooterIcon from "./FooterIcon"
import FooterMail from "./FooterMail"
function Footer() {
  return (
    <footer id="footer">
      <FooterAddress />
      <FooterIcon />
      <FooterMail />
    </footer>
  )
}
export default Footer
