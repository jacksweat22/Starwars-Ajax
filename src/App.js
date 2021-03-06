import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import getStarships from "./services/sw-api.js";
import StarshipPage from "./Pages/StarshipPage/StarshipPage";

class App extends Component {
  state = {
    starships: [],
  };

  getStarship = (idx) => {
    return this.state.starships[idx];
  };

  async componentDidMount() {
    const starships = await getStarships();
    this.setState({ starships: starships.results });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="Header">STAR WARS STARSHIPS</header>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <section  className="starshipboard">
                  {this.state.starships.map((starship) => (
                    <Link className="Link"
                      to={{
                        pathname: "/starships",
                        state: starship,
                      }}
                      key={starship.name}
                    >
                      {starship.name}
                    </Link>
                  ))}
                </section>
              )}
            />
            <Route
              path="/starships"
              render={({ location }) => <StarshipPage location={location} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;