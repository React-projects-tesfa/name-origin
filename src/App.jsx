import React, {useState} from 'react';
import Header from './components/Header';
import OriginLists from './components/OriginLists';
import './App.css';

export default function App() {
  const [nameOrigins, setNameOrigins] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  
  const getNameOrigins = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(
      data => setNameOrigins(data.country)
      )
  }
  const handleChange = (e) => {
    var searchQuery = e.target.value
    console.log(searchQuery)
    setSearchedName(searchQuery)
    var url = `https://api.nationalize.io/?name=${searchedName}`
    getNameOrigins(url)
  }

  const handleSubmit = (e) => {

  }

  return (
    <div className='App-header'>
      <Header />
      <div className='form-wrapper'>
        <form onSubmit={handleSubmit} id="form">
              <div>
                <input onChange={handleChange} value={searchedName} className="form-control" id="title" name='namesearched' type="text" placeholder='Search name here'/>
              </div>
        </form>
      </div>

      <OriginLists nameOrigins={nameOrigins} />
    </div>
  )
}