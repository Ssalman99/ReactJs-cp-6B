// Write your code here
import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChanging = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="container">
          <div className="search-container">
            <input
              type="search"
              placeholder="Search"
              className="search-box"
              onChange={this.onChanging}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>

        <ul className="places-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              imgUrl={eachDestination.imgUrl}
              name={eachDestination.name}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
