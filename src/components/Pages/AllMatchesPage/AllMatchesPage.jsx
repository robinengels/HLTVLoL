import MatchItem from 'components/MatchList/MatchListItem/MatchListItem'
import React from 'react'
import MatchList from '../../MatchList/MatchList'
import './AllMatchesPage.css'

const MatchesPage = ({allMatches,liveMatches}) => {
    if(allMatches != null){
        const matchesPerDay = allMatches.data.reduce((acc,value) => {
            var startTime = new Date(Date.parse(value.begin_at))
            var day = new Date(startTime.getFullYear(),startTime.getMonth() , startTime.getDate())
            if(!acc[day]){
                acc[day] = []
            }
    
            acc[day].push(value)
            return acc;
        },{})
    console.log(liveMatches,"Live is null"," ",liveMatches)
    return(
        <div className="allMatchesPage">
            <div id="liveMatches">
                {liveMatches.length > 0 && <MatchItem match={liveMatches[0].match} isLive={true}/>}
            </div>
            <div className="matches">
            {Object.keys(matchesPerDay).map(key =>{
                return <MatchList key={key} matches={matchesPerDay[key]} day={key}/>}
                )}
            </div>
        </div>
    )
    }
    else{
        return(
            <p>Loading ...</p>
        )
    }
}

export default MatchesPage