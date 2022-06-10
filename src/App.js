import React from 'react';
import './css/App.css'; 
import Header from './Header';
import Main from './Main';
let defaultDisplay = 20;
let addOn = 10;


class App extends React.Component{


  constructor(){
    super()
    this.state = {
      fetchData : {},
      neededData: {},
      searchKey: "",
      loading: true
    }

    this.fetchData = this.fetchData.bind(this)
    this.addMore = this.addMore.bind(this)
  }

  async fetchData(name){

    this.setState({
      loading: false,
    })
    
    let  URL = `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=200`
    try{
        await fetch(URL)
        .then( data => data.json())
        .then( data => {
          this.setState({
            fetchData:data,
            searchKey:name,
            loading: !this.state.loading,
            neededData:{
              resultCount : data.results.slice(0,defaultDisplay).length,
              results: data.results.slice(0,defaultDisplay)
            }
          })
        })
        
    }catch(err){
        throw err
    }
  }

  addMore(){
    defaultDisplay += addOn
    this.setState({
      neededData:{
        resultCount : this.state.fetchData.results.slice(0, defaultDisplay).length,
        results: this.state.fetchData.results.slice(0, defaultDisplay)
      }
    })
  }

  render() {
    return (
      <>
      <Header fetchData={this.fetchData}/>
      <Main loading={this.state.loading} addOn={this.addMore} data={this.state.neededData} searchKey={this.state.searchKey}/>
      </>
    )
  }
}


export default App;
