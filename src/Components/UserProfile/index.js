const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails

  return (
    <div className="user-app-container">
      <img src={imageUrl} className="image" alt="avatar" />

      <div className="list-container">
        <h1 className="heading">{name}</h1>
        <p className="detail">{role}</p>
      </div>
    </div>
  )
}

export default UserProfile
