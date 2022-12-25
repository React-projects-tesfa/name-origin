import React, {useState} from 'react';
import Header from './components/Header';
import OriginLists from './components/OriginLists';
import Graph from './components/Graph';
import './App.css';

export default function App() {
  const [nameOrigins, setNameOrigins] = useState([]);
  const [searchedName, setSearchedName] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [labelsState, setLabelsState] = useState([])

  const getCountryName = (countrycodes) =>{
    //console.log(countrycodes)
    const labelTempStore = []
    for (let i = 0; i < countrycodes.length; i++) {
      var country_api_url = `https://restcountries.com/v3.1/alpha/${countrycodes[i].country_id}`
      fetch(country_api_url)
          //.then(res => res.json())
          .then(data => data.json())
          .then(data => {
            console.log(data[0].name.common)
            labelTempStore.push(data[0].name.common)
          })
    }
    setLabelsState(labelTempStore)
  }
  const getNameOrigins = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(
      data => {
        console.log(data.country)
        setNameOrigins(data.country)
        getCountryName(data.country)
      }
      )
  }

  const handleChange = (e) => {
    console.log(searchedName)
    setSearchedName(e.target.value)
  }

  const toggleDarkMode = () =>{
    //console.log(darkMode)
    setDarkMode(!darkMode)
  }

  const toggleShowMore = () =>{
    setShowMore(!showMore)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    var url = `https://api.nationalize.io/?name=${searchedName}`
    console.log('here', searchedName)
    getNameOrigins(url)
  }

  return (
    <div className={darkMode ? 'dark': ""}>
      <div className=' bg-gray-700 min-h-screen dark:bg-black'>
      <Header toggle={toggleDarkMode}/>
      <div className='form-wrapper'>
        <form onSubmit={handleSubmit} id="form">
            <label>
            <input onChange={handleChange} value={searchedName} className="form-control" id="title" name='namesearched' type="text" placeholder='Search name here'/>
            </label>
            <input className='text-white bg-green-400 ml-2 p-2 rounded text-sm' type="submit" value="Look up" />
        </form>
      </div>

      <OriginLists nameOrigins={nameOrigins} showMoreToggle={toggleShowMore} showMore={showMore} getCountryName={getCountryName} label={labelsState}/>
      <div className=' mt-5 flex flex-col items-center'>
      {showMore ? <Graph nameOrigins={nameOrigins} labelsState={labelsState}/> : ""}
      </div>
      </div>
    </div>
  )
}