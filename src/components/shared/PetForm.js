import { 
    Form,
    Button, 
} from 'react-bootstrap'

const PetForm = (props) => {
    const { pet, handleChange } = props

    return (
        <Form>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
                placeholder="What is your pet's name?"
                name="name"
                id="name"
                value={ pet.name }
                onChange={ handleChange }
            />
            <Form.Label htmlFor="type">Type</Form.Label>
            <Form.Control
                placeholder="What kind of pet is this?"
                name="type"
                id="type"
                value={ pet.type }
                onChange={ handleChange }
            />
            <Form.Label htmlFor="age">Age</Form.Label>
            <Form.Control
                placeholder="How old is your pet?"
                type="number"
                name="age"
                id="age"
                value={ pet.age }
                onChange={ handleChange }
            />
            <Form.Check
                label="Is this pet adoptable?"
                name="adoptable"
                defaultChecked={ pet.adoptable  }
                onChange={ handleChange }
            />
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default PetForm