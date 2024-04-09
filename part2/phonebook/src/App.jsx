import { useEffect, useState } from "react";
import axios from "axios";
import { Persons } from "./Persons";
import { PersonsForm } from "./PersonsForm";
import { Filter } from "./Filter";
import numbersService from "./services/numbers"

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
		numbersService.getAll().then((initPersons) => {
			setPersons(initPersons);
		});
	}, []); 

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber
    }

    const existingPerson = persons.find((person) => person.name === newName);

    if (!existingPerson) {
      numbersService.create(personObject).then((newNumber) => {
        setPersons(persons.concat(newNumber));
        setNewName("");
        setNewNumber("");
      })
    } else {
      updatePerson(personObject, existingPerson);
    }
  }

  const updatePerson = (personObject, existingPerson) => {
		if (window.confirm(`${existingPerson.name} is already added to the phonebook, replace old number with a new one ? (id : ${existingPerson.id})`)) {
			numbersService.update(existingPerson.id, personObject).then(() => {
				setPersons(persons.map((person) => (person.id === existingPerson.id ? { ...person, number: personObject.number } : person)));
				setNewName("");
				setNewNumber("");
			});
		}
	};
			
  const personsToShow = newFilter === '' 
    ? persons
    : persons.filter((person) => person.name.toLowerCase().match(newFilter.toLowerCase())); 

  const deletePerson = (id) => {
		if (window.confirm(`Do you really want to delete this person ? (id : ${id})`)) {
			numbersService
				.deleteNumber(id)
				.then(setPersons(persons.filter((p) => p.id !== id)))
				.catch((error) => {
					console.error("Error: ", error);
				});
		}
	};

  return(
    
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      
      <h2>add a new</h2>
      
      <PersonsForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>

      <Persons personsToShow={personsToShow} action={(id) => deletePerson(id)} />

    </div>
  )

}

export default App


