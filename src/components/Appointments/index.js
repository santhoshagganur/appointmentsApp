// Write your code here
import {Component} from 'react'
import './index.css'

class Appointments extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="upper-part">
            <div>
              <form className="form-control">
                <h1 className="heading"> Add Appointment </h1>
                <label htmlFor="title" className="label-el">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Title"
                  className="input-el"
                />
                <label htmlFor="date" className="label-el">
                  DATE
                </label>
                <input
                  id="date"
                  type="Date"
                  placeholder="dd/mm/yyyy"
                  className="input-el"
                />
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="appointment-logo"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="separator" />
          <div>
            <div className="bottom-heading">
              <h1 className="heading-2"> Appointments </h1>
              <button className="mark-star" type="button">
                Starred
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
