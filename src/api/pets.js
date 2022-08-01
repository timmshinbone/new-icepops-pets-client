import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllPets = () => {
    return axios(`${apiUrl}/pets`)
}

export const getOnePet = (id) => {
    return axios(`${apiUrl}/pets/${id}`)
}

export const createPet = (user, newPet) => {
    // console.log('createPet in api was hit')
    // in our createpet form, we're building an object
    // when we pass that object into the api createPet function,
    // it's going to look like the pets in our database
    // we're going to refer to this as newPet
    // console.log('this is user', user)
    // console.log('this is newPet', newPet)
	return axios({
		url: apiUrl + '/pets',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { pet: newPet }
	})
}

export const updatePet = (user, updatedPet) => {
    // console.log('createPet in api was hit')
    // in our createpet form, we're building an object
    // when we pass that object into the api createPet function,
    // it's going to look like the pets in our database
    // we're going to refer to this as newPet
    // console.log('this is user', user)
    console.log('this is updatedPet', updatedPet)
	return axios({
		url: `${apiUrl}/pets/${updatedPet.id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { pet: updatedPet }
	})
}