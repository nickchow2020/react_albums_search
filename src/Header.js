import React from "react";
import SearchForm from "./SearchForm";

class Header extends React.Component{
  render(){
    return(
      <header className="header__body">
          <div className="wrapper ">
            <SearchForm fetchData={this.props.fetchData}/>
          </div>
      </header>
    )
  }
}


export default Header;
