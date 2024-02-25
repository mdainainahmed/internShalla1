import {Link} from "react-router-dom"
import Input from "../Input.jsx"
import "./Header.css"

function Header() {
  return (
    <div id="container">
      <Input bdrColor="#E1E4E6" width="258px" height="37px"/>
      <Link to="" className="custom-link">categories</Link>
      <Link to="" className="custom-link">website builders</Link>
      <Link to="" className="custom-link">today&apos;s deal</Link>
    </div>
  )
}

export default Header