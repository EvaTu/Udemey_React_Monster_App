import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/serach-box.component"
import './App.css';
import {Component} from 'react'

class App extends Component {
  constructor(){
    super()
    this.state ={
      monsters: [],
      searchValue: ""
    }
  }

componentDidMount(){
  fetch("http://jsonplaceholder.typicode.com/users")
  .then(resp=>resp.json())
  .then(users => this.setState(()=>{return {monsters: users}}))
}

onSearchChange = (e)=>{
  let searchValue = e.target.value.toLocaleLowerCase()
  this.setState(()=> {return {searchValue}})
}

  render() {
    const {searchValue, monsters} = this.state
    const {onSearchChange} = this

    let searchFilter = monsters.filter(monster => {return monster.name.toLowerCase().includes(searchValue)})

    return (
      <div className="App">
        <h1 className="app-title">Monsters Institute of Technology</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters..." className="monster-search-box"/>
        {/* {searchFilter.map((monster)=><h1 key={monster.id}>{monster.name}</h1>)} */}
        <CardList monsters={searchFilter}/>
      </div>
      
    );
  }
}

export default App;
