import { useState } from 'react'

import LoadingScreen from '../shared/LoadingScreen'

// PetsIndex should make a request to the api
// To get all pets
// Then display them when it gets them

const PetsIndex = (props) => {
    const [pets, setPets] = useState(null)

    // If pets haven't been loaded yet, show a loading message
    if (!pets) {
        return <LoadingScreen />
    }

    return <h1>This is the pets index component</h1>
}

export default PetsIndex