import React from "react";
import Summary from "./Summary";
import DefaultSummary from "./DefaultSummary";

class SearchSummary extends React.Component{
  render(){

    const {keyword,count} = this.props

    return (
      <header className="main__header">
        {
          keyword && count ? <Summary keyword={keyword} count={count}/> : <DefaultSummary />
        }
      </header>
    )
  }
}

export default SearchSummary