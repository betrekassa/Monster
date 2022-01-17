import React, {Component} from 'react';
import CardList  from './component/card/CardList';
import {Search} from './component/search/Search';

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state ={
      monsters :[],
      searchfeild:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }));
  }

// define function 

  handleChange = (e) =>{

    this.setState({ searchfeild: e.target.value})

  }

  render()  {
    const {monsters, searchfeild} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfeild.toLocaleLowerCase()));

      return(  
        <div className='App'>
          <h1>Monsters Rolodex</h1>
        {/* <Search placeholder='search monsters' handleChange={e => this.setState({ searchfeild: e.target.value})}/> */}
        <Search placeholder='search monsters' handleChange={this.handleChange}/>
        {/* <CardList monstersList={this.state.monsters}></CardList> */}
        <CardList monstersList={filteredMonsters}></CardList> 
      </div>
      );
  }
}

export default App;
