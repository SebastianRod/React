import React from 'react'
import { useParams } from 'react-router-dom'

const Service = () => {

    const {id} = useParams();
    //console.log(id);

    const [service, setService] = React.useState([])

    React.useEffect(() => {
        getServiceById(id)
    }, [])

    const getServiceById = async (id) => {
        const data = await fetch('/api/services/getById?id='+ id)
        const service = await data.json()
        setService(service)

        console.log(service)
    }

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default Service
