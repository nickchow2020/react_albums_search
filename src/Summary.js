import React from "react";

class Summary extends React.Component{
  render(){
    const {count,keyword} = this.props

    return (
      <>
        <p>{count} results for "{keyword}"</p>
      </>
    )
  }
}

export default Summary