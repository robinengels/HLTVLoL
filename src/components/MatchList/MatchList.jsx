import React from 'react'
import MatchItem from 'components/MatchList/MatchListItem/MatchListItem'
import './MatchList.css'

const MatchList = ({matches,day}) => {
    var date = new Date(day)
    var dateString = date.toLocaleDateString('en-en',{weekday:'long'})
    dateString += " "+date.toISOString().split('T')[0]
    var currMatches = matches.map(match => {
        return(
        <li className="list-group-item rounded-0" key={match.id}>
            <MatchItem match={match} />
        </li>)
    })


    return(
        <div>
            <div className="listHeader">
                <h3 className="">{dateString}</h3>
            </div>
            <div className="">
                <ul id="matchList">
                    {currMatches}
                </ul>
            </div>
        </div>
    )
}

export default MatchList