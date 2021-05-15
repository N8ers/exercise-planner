import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/new">New Exercise Plan</Link>
      </nav>
    </header>
  );
}

export default Nav;
