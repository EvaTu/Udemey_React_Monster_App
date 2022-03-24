import {useState, useEffect} from "react"

import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/serach-box.component"
import './App.css';
// import {Component} from 'react' => this is for class component





function App (){
  const[ monsters, setMonsters] =useState([])
  const[ search, setSearch] = useState("")
  const[ filterArr, setFilterArr ] = useState(monsters) //setting this is because the need to use useEffect...
  


  useEffect(()=>{
    fetch("http://jsonplaceholder.typicode.com/users")
   .then(resp=>resp.json())
   .then(users => setMonsters(users))
  }, [])

  useEffect(()=>{
    const filterData = monsters.filter(monster => monster.name.toLowerCase().includes(search))
    setFilterArr(filterData)
  },[monsters, search])
  

  const onSearchChange = function(e){
    let searchValue = e.target.value.toLocaleLowerCase()
    setSearch(searchValue)
  }

  // const onStringChange = function(e){
  //   setString(e.target.value)
  // }

  // presenting the need to move the searchFilter inside the useEffect to prevent it keeps re-rendering...
  // let searchFilter = monsters.filter(monster => monster.name.toLowerCase().includes(search))
  // console.log(searchFilter)

  return (
    <div className="App">
      <h1 className="app-title">Monsters Institute of Technology</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters..." className="monster-search-box"/>
      {/* <SearchBox onChangeHandler={onStringChange} placeholder="Type String" /> */}
      <CardList monsters={filterArr}/>
    </div>
  )
}




// from here below is for class component
// class App extends Component {
//   constructor(){
//     super()
//     this.state ={
//       monsters: [],
//       searchValue: ""
//     }
//   }

// componentDidMount(){
//   fetch("http://jsonplaceholder.typicode.com/users")
//   .then(resp=>resp.json())
//   .then(users => this.setState(()=>{return {monsters: users}}))
// }

// onSearchChange = (e)=>{
//   let searchValue = e.target.value.toLocaleLowerCase()
//   this.setState(()=> {return {searchValue}})
// }

//   render() {
//     const {searchValue, monsters} = this.state
//     const {onSearchChange} = this

//     let searchFilter = monsters.filter(monster => {return monster.name.toLowerCase().includes(searchValue)})

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Institute of Technology</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters..." className="monster-search-box"/>
//         {/* {searchFilter.map((monster)=><h1 key={monster.id}>{monster.name}</h1>)} */}
//         <CardList monsters={searchFilter}/>
//       </div>
      
//     );
//   }
// }

// from here above is for class component

export default App;
