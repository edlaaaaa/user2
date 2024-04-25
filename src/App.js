import UserProfile from './Components/UserProfile/index'

const userDetailsList = {
  uniqueId:1,
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name: 'Esther Howard',
  role: 'Software Engineer',
},


{   uniqueId:2,
    imageUrl:'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },

const App = () =>(
    <ul>
    {userDetailsList.map((eachItem)=>(
        <UserProfile userDetails={eachItem} key={eachItem.uniqueId}/>
    
    )}
    
</ul>
    )
export default App
