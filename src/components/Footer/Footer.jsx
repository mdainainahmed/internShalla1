/*
height : 452px
 bgColor = #212731
 color: #B6BDC4
 Hcolor: #FFFFFF
 Scolor: #D1D6DA
*/
import { Link } from "react-router-dom"
import "./Footer.css";

function Footer() {
  return (
    <div id="footer-container">
      <div id="footer-content">
      <div id="category">
        <Link className="custom-link" to="/category">category</Link>
        <ul>
          <li>web builder</li>
          <li>hosting</li>
          <li>data center</li>
          <li>robotic automation</li>
          <li></li>
        </ul>
      </div>
      <div id="contact">
      <Link className="custom-link" to="/contact">contact</Link>
        <ul>
          <li>contact</li>
          <li>private policy</li>
          <li>terms of service</li>
          <li>category</li>
          <li>about</li>
        </ul>
      </div>
      <div id="country">
      <div className="heading">United State</div>
      </div>
      </div>
    </div>
  )
}

export default Footer