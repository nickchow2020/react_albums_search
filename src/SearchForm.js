import React from "react"
import { FaSearchDollar } from 'react-icons/fa';

class SearchForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchData(this.state.value)
  }

  render(){
    return (
      <form action="" className="search__form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search..." className="search__input" value={this.state.value} onChange={this.handleChange}/>
        <button className="search__btn">
            <FaSearchDollar />
        </button>
      </form>
    )
  }
}

export default SearchForm