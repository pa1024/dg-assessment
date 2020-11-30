import React from 'react';
import Header from '../components/header';
import ScrollableGrid from '../components/scrollable_grid'

class LandingPage extends React.Component {
  constructor() {
    super()
    this.gridRef = React.createRef()
    this.state = {
      isInputVisible: false
    }
  }
  
  filterItems(){
    this.setState({
      isInputVisible: this.state.isInputVisible ? false : true
    })
  }

  filterByInput(e) {
    let input = e.target.value;
    this.gridRef.current.filterItems(input)
  }

  render() {
    return (
      <div className={'mainContainer'}>
        <Header searchHandler={this.filterItems.bind(this)}/>
        <div className={this.state.isInputVisible ? 'searchbar' : 'hidden'} style={{minWidth: "300px"}}>
            <input 
              onChange={this.filterByInput.bind(this)} 
              style={{width: "100%", padding: '0 10px', fontSize: '20px'}} 
              placeholder='search' 
              type='text'/>
        </div>
        <ScrollableGrid ref={this.gridRef}/>
      </div>
    );
  }
}

export default LandingPage