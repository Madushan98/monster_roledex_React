import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.components'
import { SearchBox } from './components/searchBox/search-box'


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [

      ],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(
      Response => Response.json())
      .then(users => this.setState({ monsters: users }));

  }

  render() {
    const { monsters, searchField } = this.state;

    var filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );

    if (searchField == null) {
      filteredMonsters = monsters;
    }




    return (

      <div className="App">

        <h1>Monster Roldex</h1>
        <SearchBox placeholder='search monsters' handleChange={e =>
          this.setState({ searchField: e.target.value.toString().toLowerCase() })} />


        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}


export default App;
