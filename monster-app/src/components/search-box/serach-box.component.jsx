import {Component} from 'react';
import './search-box.style.css'

class SearchBox extends Component {
    render(){
        const {onChangeHandler, className, placeholder} = this.props
        return(
            <input 
            placeholder={placeholder}
            className={`search-box ${className}`}
            type="search" 
            onChange={onChangeHandler}/>
        )
    }

}


export default SearchBox