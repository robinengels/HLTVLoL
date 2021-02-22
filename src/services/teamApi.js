import axios from "axios";

const token = "tBIW6i1Iqo6lf6ZQ74wMa2G6J0U0PN8U_qCfduchCqe-_dmoj2k"

const client = axios.create({
    baseURL: `https://api.pandascore.co/`
})

const getTeamByID = (id) => {
    return client.get(`/teams/${id}?token=${token}`).then(response => {return response.data});
}


export {
    getTeamByID
}