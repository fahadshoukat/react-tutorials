import React from 'react'
import Persons from './Persons'

function NameList() {

    const persons = [
        {
            name: 'Fahad',
            age: 23,
            skill: 'React JS'
        },
        {
            name: 'Zahid',
            age: 24,
            skill: 'WordPress'
        },
        {
            name: 'Umer',
            age: 25,
            skill: 'JavaScript'
        },
        {
            name: 'Bilal',
            age: 22,
            skill: 'SQL'
        },
        {
            name: 'Frasat',
            age: 23,
            skill: 'Oracle'
        }
    ]

    const personList = persons.map(person => <Persons person={person} />)
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