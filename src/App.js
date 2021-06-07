import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {

    //filter the monsters
    const { monsters, searchField } = this.state;
    const filter_monsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <input type='search'
          placeholder='search for players'
          onChange={e => this.setState({ searchField: e.target.value })}
        />


        <CardList monsters={filter_monsters} />

      </div>
    );
  }
}


export default App;
