import axios from "axios";

const token = "tBIW6i1Iqo6lf6ZQ74wMa2G6J0U0PN8U_qCfduchCqe-_dmoj2k"

const client = axios.create({
    baseURL: `https://api.pandascore.co/`
})

const getUpcomingMacthes = () => {
    return client.get(`/lol/matches/upcoming?sort=begin_at&filter[league_id]=4197&token=${token}`).then(response => response);
}

const getMatchWithID = (id) => {
    return client.get(`/matches/${id}?token=${token}`).then(res => {return res.data})
}

const getLiveMatchByLeagueID = (league_id) => { 
    return client.get(`/lives?token=${token}`).then(res =>  {return res.data.filter(el => el.match.league_id == league_id)})
}

export {
    getUpcomingMacthes,
    getMatchWithID,
    getLiveMatchByLeagueID
}