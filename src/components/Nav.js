import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

function Nav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button variant="contained" color="secondary" component={Link} to="/">
          Home
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/new"
        >
          New Exercise Plan
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
