import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

class App extends Component {
  constructor(){
    super()
    this.state ={
      monsters: []
    }
  }

componentDidMount(){
  fetch("http://jsonplaceholder.typicode.com/users")
  .then(resp=>resp.json())
  .then(users => this.setState(()=>{return {monsters: users}},()=>console.log(this.state)))
}

  render() {
    return (
      <div className="App">
        <input placeholder="Search Monsters..." className="search-box" tupe="search" onChange={
          (e)=>{
          let searchFilter = this.state.monsters.filter(monster =>  {return monster.name.toLowerCase().includes(e.target.value)})
          this.setState(()=>{return {monsters:searchFilter}})
        }}/>
        {this.state.monsters.map((monster)=><h1 key={monster.id}>{monster.name}</h1>)}
        
      </div>
      
    );
  }
}

export default App;
