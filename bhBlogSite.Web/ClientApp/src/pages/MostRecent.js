import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'

const MostRecent = () => {
    const [newestId, setNewestId] = useState()
    const history = useHistory()
    useEffect(() => {


        const getNewestId = async () => {
            const { data } = await axios.get('/api/blogsite/getnewestid')
            history.push(`/viewpost/${data}`)

        }
        getNewestId()

    }, [])
    return (<>Loading</>)
}

export default MostRecent;