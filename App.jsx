import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Web12801 } from './components/Web12801'
import { Web12802 } from "./components/Web12802"
import { IPadNexus91 } from './components/IPadNexus91'
import { IPadNexus92 } from './components/IPadNexus92'
import { IPhone678SE1 } from './components/IPhone678SE1'
import { IPhone678SE2 }  from './components/IPhone678SE2'
import Media from 'react-media';

const App = () => {
    /* the goal is to route from page 1 to page 2, but the routing is borked */
    return (
    <Router basename="/">
    

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
      <Switch>
        /* the goal is to route from page 1 to page 2, but the routing is borked */
        <Route exact path="/web-1280-1" component={Web12801} />
        <Route exact path="/web-1280-2" component={Web12802} />
        <Route exact path="/ipadnexus91" component={IPadNexus91} />
        <Route exact path="/ipadnexus91" component={IPadNexus92} />
        <Route exact path="/iphone678se1" component={IPhone678SE1} />
        <Route exact path="/iphone678se2" component={IPhone678SE2} />
      </Switch>
    </Router>
  );
}

export default App;
