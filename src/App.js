import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search_box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    //Bind - For a given function, creates a bound function that has the same body as the original function.
    this.handleChange = this.handleChange.bind(this)
  }
  //fetch the api to retrieve monsters
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {

    //filter the monsters
    const { monsters, searchField } = this.state;
    const filter_monsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <h1> Monsters-Roledex</h1>
        <SearchBox placeholder='search monsters'
          handleChange={this.handleChange} />
        <CardList monsters={filter_monsters} />
      </div>
    );
  }
}

//this represents the context that it´s involved 
export default App;
