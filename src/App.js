import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./Components/Portfolio";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme as createMuiTheme,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: `"Exo 2", "monospace"`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App row" id="app">
          <Switch>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route path="/profile" component={Profile}></Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
