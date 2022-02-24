import React from 'react'
import Persons from './Persons'

function NameList() {

    const persons = [
        {
            id: 1,
            name: 'Fahad',
            age: 23,
            skill: 'React JS'
        },
        {
            id: 2,
            name: 'Zahid',
            age: 24,
            skill: 'WordPress'
        },
        {
            id: 3,
            name: 'Umer',
            age: 25,
            skill: 'JavaScript'
        },
        {
            id: 4,
            name: 'Bilal',
            age: 22,
            skill: 'SQL'
        },
        {
            id: 5,
            name: 'Frasat',
            age: 23,
            skill: 'Oracle'
        }
    ]

    const personList = persons.map(person => <Persons key={person.id} person={person} />)
    // const names = ['Fahad', 'Zahid', 'Umer', 'Sufyan', 'Ali']

    // const nameList = names.map(name => <h2>{name}</h2>)

  return (
    <div>
       {personList}
        {/* {nameList} */}
        {/* {names.map(name => <h2>{name}</h2>)} */}
    </div>
  )
}

export default NameList