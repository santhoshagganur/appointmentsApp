// Write your code here
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: []}

  addToList = event => {
    event.preventDefault()
    const {title, date} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStared: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeDate = event => {
    const appointmentDate = format(
      new Date(event.target.value),
      'dd MMMM yyyy, EEEE',
    )
    this.setState({date: appointmentDate})
    console.log(appointmentDate)
  }

  markAsFavorite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {...each, isStared: !each.isStared}
        }
        return each
      }),
    }))
  }

  getStaredItems = () => {
    const {appointmentsList} = this.setState
    const filteredData = appointmentsList.filter(each => each.isStared === true)
    this.setState({appointmentsList: filteredData})
  }

  render() {
    const {title, date, appointmentsList} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="upper-part">
            <div>
              <form className="form-control" onSubmit={this.addToList}>
                <h1 className="heading"> Add Appointment </h1>
                <label htmlFor="title" className="label-el">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Title"
                  className="input-el"
                  onChange={this.changeTitle}
                  value={title}
                />
                <label htmlFor="date" className="label-el">
                  DATE
                </label>
                <input
                  id="date"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="input-el"
                  onChange={this.changeDate}
                  value={date}
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
              <button
                className="mark-star"
                type="button"
                onClick={this.getStaredItems}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-container">
              {appointmentsList.map(each => (
                <AppointmentItem
                  appointment={each}
                  key={each.id}
                  markAsFavorite={this.markAsFavorite}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
