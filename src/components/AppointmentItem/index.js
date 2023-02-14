// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {appointment, markAsFavorite} = props
  const {id, title, date, isStared} = appointment

  const markAsStared = () => {
    markAsFavorite(id)
  }

  const updateImage = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="activity-container">
      <div className="activity">
        <p className="activity-name"> {title} </p>
        <button className="start-btn" type="button" onClick={markAsStared}>
          <img src={updateImage} alt="star" className="star-logo" />
        </button>
      </div>
      <p className="activity-date"> {date} </p>
    </li>
  )
}

export default AppointmentItem

