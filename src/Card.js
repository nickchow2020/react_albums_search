import React from "react";

class Card extends React.Component{

  render(){
    const {data} = this.props
    return (
      <div class="card">
        <div class="card__cover">
          <img src={data.artworkUrl100} alt={data.amgArtistId} />
        </div>
    
        <div class="card__album">
          <p>
            {data.collectionCensoredName}
          </p>
        </div>
      </div>
    )
  }
}

export default Card