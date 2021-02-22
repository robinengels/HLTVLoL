import React from 'react'
import { Container,Col,Image } from 'react-bootstrap'
import './PlayerHeadToHead.css'

const Player = ({player}) => {
    console.log(player)
    return(
        <Col md="auto" className="justify-content-center align-items-center d-flex flex-column">
            <Image width="100px" src={player.image_url} alt={player.name}/>
            <div>{player.name}</div>
            <Image width="35px" src={`https://www.countryflags.io/${player.nationality}/flat/64.png`}/>
        </Col>
    )
}

export default Player