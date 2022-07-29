import { 
    useState,
    useEffect, 
} from 'react'

import { useParams } from 'react-router-dom'
// this will allow us to see our parameters

import LoadingScreen from '../shared/LoadingScreen'
import { getOnePet } from '../../api/pets'

// We need to get the pet's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component

const ShowPet = (props) => {
    const [pet, setPet] = useState(null)

    const { id } = useParams()
    // destructuring to get the id value from our route parameters

    useEffect(() => {
        getOnePet(id)
            .then(res => setPet(res.data.pet))
    }, [])

    if (!pet) {
        return <LoadingScreen />
    }

    return <p>This is the show pet component for { id }</p>
}

export default ShowPet