import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './MatchListItem.css'

const MatchItem = ({match,isLive = false}) => {
    const history = useHistory()
    const checkTime = (i) => {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }

    const handleClick = () => {
        history.push(`/match/${match.id}`)
    }
    const team1 = match.opponents[0].opponent
    const team2 = match.opponents[1].opponent
    var startTime = new Date(Date.parse(match.begin_at))

    return(
        <div className="listItem" onClick={handleClick}>
            <div className="matchInfo">
                
                {isLive ? 
                <div id="liveHeader">
                    LIVE
                </div> : 
                <div id="dateHeader">
                    {checkTime(startTime.getHours())}:{checkTime(startTime.getMinutes())}
                </div>
                }

                <div className="teamInfo">
                    <img width="45" src={team1.image_url} alt="Logo"/>
                    <p className="teamName">{team1.name}</p>
                </div>

                <div className="teamInfo"> 
                    <img width="45" src={team2.image_url} alt="Logo"/>
                    <p className="teamName">{team2.name}</p>
                </div>
            </div>
            <div className="">
                <img width="75" src={match.league.image_url} />
                <div>{match.league.name}</div>
            </div>
        </div>
    )
}

export default MatchItem