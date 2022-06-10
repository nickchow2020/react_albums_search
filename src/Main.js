import React from "react";
import Card from "./Card";
import AddMore from "./AddMore";
import SearchSummary from "./SearchSummary";
import Loading from "./Loading";

class Main extends React.Component{
  render(){
    const {data,addOn,searchKey,loading} = this.props

    return (
      <main className="wrapper">
          {
            loading ? <SearchSummary keyword={searchKey} count={data.resultCount} /> :  <Loading /> 
          }
          <main className="main__main">
            {
              data.results ? data.results.map( data => <Card data={data}/>) : null
            }
          </main>
          {
            data.results ? <AddMore addOn={addOn} /> : null
          }
          
      </main>
    )
  }
}

export default Main