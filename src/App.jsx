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
  const [loadingCountryName, setLoadingCountryName] = useState(true)

  const getCountryName = (countrycodes) =>{
    setLoadingCountryName(true)
    for (let i = 0; i < countrycodes.length; i++) {
      console.log("finding")
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `https://restcountries.com/v3.1/alpha/${countrycodes[i].country_id}`, [false]);
      xhr.send()
      xhr.onload = function() {
       const countryName = JSON.parse(xhr.response)[0].name.common
       setLabelsState(labelsState => [...labelsState, countryName]);
      };
  }
  setLoadingCountryName(false)
  }
  const getNameOrigins = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(
      data => {
        setNameOrigins(data.country)
        getCountryName(data.country)
      })
  }

  const handleChange = (e) => {
    setSearchedName(e.target.value)
    e.preventDefault()
  }

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode)
  }

  const toggleShowMore = () =>{
    setShowMore(!showMore)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(labelsState)
    setLabelsState(labelsState => []);
    var url = `https://api.nationalize.io/?name=${searchedName}`
    console.log('here', searchedName)
    setShowMore(false)
    getNameOrigins(url)
  }

  return (
    <div className={darkMode ? 'dark': ""}>
      <div className=' bg-gradient-to-b from-teal-600 to-teal-800 min-h-screen dark:bg-gray-700'>
      <Header toggle={toggleDarkMode}/>
      <div className='form-wrapper'>
        <form onSubmit={handleSubmit} id="form">
            <label>
            <input onChange={handleChange} value={searchedName} className="form-control" id="title" name='namesearched' type="text" placeholder='Search name here'/>
            </label>
            <input className='text-white bg-green-400 ml-2 p-2 rounded text-sm' type="submit" value="Look up" />
        </form>
      </div>

      { loadingCountryName ? 
      <div><h1 className=' text-white'>loading....</h1></div> :
      <OriginLists nameOrigins={nameOrigins} showMoreToggle={toggleShowMore} showMore={showMore} getCountryName={getCountryName} label={labelsState}/> 
        }
      <div className=' mt-5 flex flex-col items-center'>
      {showMore ? <Graph nameOrigins={nameOrigins} labelsState={labelsState}/> : ""}
      </div>
      </div>
    </div>
  )
}