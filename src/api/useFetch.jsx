import { useEffect, useState } from 'react'
import axios from 'axios'

// const urlPathOptions = ['countries', 'history', 'statistics']

function useFetch({ options, params, refresh }) {

    const [data, setData] = useState([])

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://covid-193.p.rapidapi.com/${options}`,
            params: params ? { country: params } : '',
            headers: {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        }).then(({ data }) => setData(data.response))
    }, [options, params, refresh])

    return data
}

export default useFetch