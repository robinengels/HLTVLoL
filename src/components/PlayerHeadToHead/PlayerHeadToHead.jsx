import React, { useEffect, useState } from 'react'
import './PlayerHeadToHead.css'
import * as teamAPI from 'services/teamApi'
import Player from './Player'
import * as sub from 'const/substitute'
import { Container, Row } from 'react-bootstrap'


const POS = ["top","jun","mid","adc","sup"]

const PlayerHeadToHead = ({team1Image,team2Image,team1ID,team2ID}) => {

    const [team1,setTeam1] = useState(null)
    const [team2,setTeam2] = useState(null)

    useEffect(() => {
        teamAPI.getTeamByID(team1ID).then((data) => {setTeam1(data)}).catch(err => console.error(err))  
        teamAPI.getTeamByID(team2ID).then((data) => {setTeam2(data)}).catch(err => console.error(err))  
    },[])

    console.log("team1",team1, "team2",team2)


    if(team1 == null || team2==null) {
        return (<p>loading ...</p>)
    }
    else{
        var t1Players = team1.players.sort((a,b) => {return POS.indexOf(a.role) - POS.indexOf(b.role)})
        var t2Players = team2.players.sort((a,b) => {return POS.indexOf(a.role) - POS.indexOf(b.role)})

        t1Players = t1Players.filter((a) => !sub.substitute.includes(a.id))
        t2Players = t2Players.filter((a) => !sub.substitute.includes(a.id))

        return(
        <Container className="justify-content-center" id="PlayerContainer">
            <Row className="justify-content-md-center border border-dark rounded m-1" >
                {t1Players.map((player) => <Player player={player}/>)}
            </Row>
            <Row className="justify-content-md-center border border-dark rounded m-1">
                {t2Players.map((player) => <Player player={player}/>)}
            </Row>
        </Container>
        )
    }
}

export default PlayerHeadToHead