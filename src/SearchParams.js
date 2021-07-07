import { useState, useEffect, useContext } from 'react';
import useBreedList from './useBreedList'
import Results from './Results'
import ThemeContext from './ThemeContext'

const ANIMALS = ['Eagle', 'Lion', 'Cheetah', 'Horse', 'dog']

const SearchParams = () => {
    const [location, setLocation ] = useState('Seattle, WA')
    const [animal, setAnimal ] = useState('')
    const [breed, setBreed ] = useState('')
    const [pets, setPets] = useState([])
    const [breeds] = useBreedList(animal)
    const [theme, setTheme] = useContext(ThemeContext)

    useEffect(() => {
        requestPets()
    },[]) //eslint-disable-line react-hooks/exhaustive-deps
    // the square brackets is telling the useeffects to run just once

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json()
        console.log(json);

        setPets(json.pets)
    }

    // const location = 
    return (
        <div className="search-params">
            <form
                onSubmit={e => {
                    e.preventDefault()
                    requestPets()
                }}
            >
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={(e) => setLocation(e.target.value)}jgj placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)} onBlur={(e) => setAnimal(e.target.value)}>
                        <option />
                            {ANIMALS.map((animal) => {
                               return <option value={animal} key={animal}>
                                   {animal}
                                </option>
                            })}
                    </select>
                </label>
                <label htmlFor="animal">
                    Breed
                    <select id="breed" value={breed} onChange={(e) => setBreed(e.target.value)} onBlur={(e) => setBreed(e.target.value)}>
                        <option />
                            {breeds.map((breed) => {
                               return <option value={breed} key={breed}>
                                   {breed}
                                </option>
                            })}
                    </select>
                </label>
                <label>
                    Theme
                    <select
                        value={theme}
                        onChange={(e) => {
                            setTheme(e.target.value)
                        }}
                        onBlur={(e) => {
                            setTheme(e.target.value)
                        }}>
                        <option value="darkblue">Dark Blue</option>
                        <option value="peru">Peru</option>
                        <option value="chartreuse">chartreuse</option>
                        <option value="mediumorchid">Medium Orchid</option>  
                    </select>
                </label>
                <button style={{ backgroundColor: theme }}>Submit</button>
            </form>
           <Results pets={pets} />
        </div>
    )
}

export default SearchParams;