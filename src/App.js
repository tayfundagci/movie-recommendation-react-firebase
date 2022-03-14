import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./components/List";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./components/MovieDetail";
import { useTheme } from "./context/ThemeContext";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const { theme } = useTheme();

  const hr = theme === "dark" && "rgb(220,220,220)";

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`body ${theme}`}>
      <Router>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/AddMovie">
            <AddMovie />
          </Route>
          <Route path="/movie/:movie_id">
            <MovieDetail />
          </Route>
        </Switch>
      </Router>
      <hr style={{ color: hr }} />
      <Footer />
    </div>
  );
}

export default App;
