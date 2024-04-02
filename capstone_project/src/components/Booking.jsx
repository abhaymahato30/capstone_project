import React from 'react'
import BookingForm from './BookingForm'

const Booking = (props) => {
  return (
      <BookingForm availabelTimes={props.availabelTimes} dispatch ={props.dispatch} submitForm={
        props.SubmitForm
      }/>
  )
}

export default Booking
  