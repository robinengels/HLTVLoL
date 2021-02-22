// @ts-nocheck
import React,{useEffect, useState} from 'react'
import * as matchAPI from 'services/matchApi'
import PlayerHeadToHead from 'components/PlayerHeadToHead/PlayerHeadToHead'
import {
    useParams
  } from "react-router-dom";
import './MatchPage.css'

const MatchPage = () => {
    var param = useParams()
    const [match,setMatch] = useState()
    useEffect(() => {
        matchAPI.getMatchWithID(param.id).then(
            data => {
                setMatch(data)
            }
        )
    },[])

    console.log(match)

    if(match != null){
        return(
            <div className="matchPage">
                <div id="header">
                    <img className="teamLogoMatchPage" src={match.opponents[0].opponent.image_url} alt="team 1"/>
                    <div className="teamName"> {match.name} </div>
                    <img className="teamLogoMatchPage" src={match.opponents[1].opponent.image_url} alt="team 2"/>
                </div>
                <PlayerHeadToHead team1Image={match.opponents[0].opponent.image_url} team2Image={match.opponents[1].opponent.image_url} team1ID={match.opponents[0].opponent.id} team2ID={match.opponents[1].opponent.id}/>
            </div>
        )
    }
    else{
        return(<p>Loading ...</p>)
    }
}

export default MatchPage