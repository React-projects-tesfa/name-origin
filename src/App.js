import React from 'react';
import './App.css';
import Hello from './components/Hello';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nameorigins : [],
      name : '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleChange(e){
    var searchedName = e.target.value
    console.log(searchedName)
    this.setState({
      name : searchedName,
    })

    var url = `https://api.nationalize.io/?name=${searchedName}`
    fetch(url)
    .then(response => response.json())
    .then(
      data => 
      //console.log('Data', data.country)
      this.setState({
        nameorigins:data.country
      })
      )
  }

  handleSubmit(e){
    e.preventDefault()
    var nameSearched = e.target.value
    console.log("form submitted")
    console.log("Name searched: ", nameSearched)
    var url = `https://api.nationalize.io/?name=${nameSearched}`

    fetch(url)
    .then(response => response.json())
    .then(
      data => 
      //console.log('Data', data.country)
      this.setState({
        nameorigins:data.country
      })
      )
  }


  render(){
    //var self = this
    var or = this.state.nameorigins
    return (
      <div className="App-header">
        <header>
          <div className="header">Name Origin</div>
        </header>
        <div className='form-wrapper'>
        <form onSubmit={this.handleSubmit} id="form">
              <div>
                <input onChange={this.handleChange} value={this.state.name} className="form-control" id="title" name='namesearched' type="text" placeholder='Search name here'/>
                {/* <input id="submit" className="btn btn-warning" type="submit"/> */}
              </div>
          </form>
        </div>

        <div id="list-wrapper">
        {or.map(function(origins, index){
              return(
                <div key={index} className="task-wrapper">
                
                <div>
                  <button className="btn btn-sm btn-outline-info disabled country">{index+1}. {origins.country_id} </button>
                  <button className="btn btn-sm btn-outline-warning disabled probability">{Math.round(origins.probability*100)} %</button>
                </div>
              </div>
              )
            })}
            
          </div>



      </div>

    )
  }
}

export default App;