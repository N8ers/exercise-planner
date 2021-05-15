import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/new">Build</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
