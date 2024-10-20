// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props

  return (
    <li className="app-card mr-3 mb-3">
      <img
        src={appDetails.imageUrl}
        alt={appDetails.appName}
        className="card-img mb-3"
      />
      <p className="app-name">{appDetails.appName}</p>
    </li>
  )
}

export default AppItem
