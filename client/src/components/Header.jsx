import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="App-header">
      <div className="logo">
        <Link to="/">
          <img src="./src/assets/images/logo.png" alt="logo" />
        </Link>
        <h2>Includify</h2>
      </div>
    </div>
  );
}

export default Header;
