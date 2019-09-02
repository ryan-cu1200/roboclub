import React, { Component } from "react";
import { CardList } from "./components/cards";
import { SearchBox } from "../src/components/SearchBox/";
import '../src/components/cards/card.css'

class App extends Component {
  state = {
    monsters: [],
    searchFiled: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters,searchFiled} = this.state;
    const filterRobots = monsters.filter(monsters  =>
      monsters.name.toLowerCase().includes(searchFiled.toLowerCase())
      )
    return (
      <div className="divv text-center">
      <h1 className ="hp">RobotsClub</h1>
        
        <SearchBox

         placeholder="search"
          handlerChange={e => this.setState({ searchFiled: e.target.value })}

        />

        <h1>
          <CardList monsters={filterRobots}></CardList>
        </h1>
      </div>
    );
  }
}

export default App;
