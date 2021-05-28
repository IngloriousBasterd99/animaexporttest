import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Web12801 from "./components/Web12801";
import Web12802 from "./components/Web12802";
import IPadNexus91 from "./components/IPadNexus91";
import IPadNexus92 from "./components/IPadNexus92";
import IPhone678SE1 from "./components/IPhone678SE1";
import IPhone678SE2 from "./components/IPhone678SE2";
import Media from 'react-media';

function App() {
    /* the goal is to route from page 1 to page 2, but the routing is borked */
    return (
    <Router>
      <Switch>
        <Route path="/">
        <Media queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)"
            }}>
              {matches => (
                <>
                  {matches.large && <Web12801>1280</Web12801>}
                  {matches.medium && <IPadNexus91>768</IPadNexus91>}
                  {matches.small && <IPhone678SE1>375</IPhone678SE1>}
                </>
              )}
            </Media>
        </Route>
        /* the goal is to route from page 1 to page 2, but the routing is borked */
        <Route path="/web-1280-2">
          <Web12802>1280</Web12802>
        </Route>
        <Route path="/ipad-nexus-9-2">
          <IPadNexus92>768</IPadNexus92>
        </Route>
        <Route path="/iphone-6-7-8-se-2">
          <IPhone678SE2>375</IPhone678SE2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
