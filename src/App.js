import UserProfile from './Components/UserProfile/index'
import {Component} from 'react'

const userDetailsList = [
  {
    uniqueId: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Engineer',
  },
  {
    uniqueId: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueId: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueId: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: ''}
  
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
 render(){
    const {searchInput} = this.state
    console.log(searchInput)
  }
    const searchInput = userDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="search-container">
        <h1 className="main -head">Users List</h1>
        <input type="search" onClick={this.onChangeSearchInput} />
      </div>
    )
  }
}
;<ul>
  {userResults.map(eachItem => (
    <UserProfile userDetails={eachItem} key={eachItem.uniqueId} />
  ))}
</ul>

export default App
