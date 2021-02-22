import React, {useEffect, useState} from 'react'
import Matches from 'components/Pages/AllMatchesPage/AllMatchesPage'
import MatchPage from 'components/Pages/MatchPage/MatchPage'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as matchAPI from 'services/matchApi'

function App() {
  const [matches,setMatches] = useState(null)
  const [liveMatches,setLiveMatches] = useState(null)

  const getMatches = () => {
    matchAPI.getUpcomingMacthes().then(data => setMatches(data))
    matchAPI.getLiveMatchByLeagueID(4197).then(data => setLiveMatches(data))
  }

  useEffect(getMatches,[])

  console.log(matches)
  return (
    <div className="App">
      <Router>
        <nav>
          <ul id="navbar">
            <li className="navItem"><Link  to="/">Matches</Link></li>
            <li className="navItem"><Link  to="/result">Result</Link></li>
            <li className="navItem"><Link  to="/standing">Standing</Link></li>
          </ul>
        </nav>
      <Switch>
        <Route path="/standing">
          <p>Standing</p>
        </Route>
        <Route path="/result">
          <p>Result</p>
        </Route>
        <Route path="/match/:id"> 
          <MatchPage/>
        </Route>
        <Route path="/">
          <Matches allMatches={matches} liveMatches={liveMatches}/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
