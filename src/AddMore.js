import React from "react";

class AddMore extends React.Component{
  render(){
    const {addOn} = this.props

    return (
      <button onClick={addOn}>Add More</button>
    )
  }
}


export default AddMore