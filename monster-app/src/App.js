import logo from './logo.svg';
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
  .then(users => this.setState(()=>{return {monsters: users}},()=>console.log(this.state)))
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
        <input placeholder="Search Monsters..." className="search-box" tupe="search" onChange={onSearchChange }/>
        {searchFilter.map((monster)=><h1 key={monster.id}>{monster.name}</h1>)}
        
      </div>
      
    );
  }
}

export default App;
