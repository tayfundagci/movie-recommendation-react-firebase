import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar({ search, setSearch }) {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <div className="d-flex">
              <Link className="nav-link active text-light navbarr" to="/">
                Movie List
              </Link>

              <Link
                to="/AddMovie"
                className="nav-link active text-light navbarr"
              >
                Add Movie
              </Link>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"></li>
              </ul>

              <button
                className="me-3 themebutton"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                style={{ height: "35px" }}
              >
                🌙
              </button>

              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
