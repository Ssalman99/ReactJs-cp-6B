// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <li className="image-container">
      <img className="place-image" src={imgUrl} alt={name} />

      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
