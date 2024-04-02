import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guest, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <>
      <header>
        <section>
          <form action="">
            <feildset>
              <div>
                <label htmlFor="book-date">Choose Date</label>
                <input
                  id="book-date"
                  value={date}
                  onChange={(e) => handleChange(e.target.value)}
                  type="date"
                  required
                />
              </div>
              {/* for time selection */}
              <div>
                <label htmlFor="book-time">Choose Time:</label>
                <select
                  id="book-time"
                  value={times}
                  onChange={(e) => setTimes(e.target.value)}
                >
                  <option value={""}>Select a Time</option>
                  {/* {props.availableTimes.availabelTimes.map((availabelTimes) => {
                    return (
                      <option key={availabelTimes}> {availabelTimes} </option>
                    );
                  })} */}
                </select>
              </div>
              {/* For Number Of Guests */}
              <div>
                <label htmlFor="book-guests">Number of Guests:</label>
                <input
                  id="book-guest"
                  value={guest}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>

              {/* for  occasion feilds*/}
              <div>
                <label htmlFor="book-occassion">Occasion:</label>
                <select
                  id="book-occasion"
                  key={occasion}
                  value={occasion}
                  onChange={(e) =>setOccasion(e.target.value)}
                >
                  <option>Birthday</option>
                  <option>Anniversery</option>
                </select>
              </div>
              {/* submit Button */}
              <div className="btnReceive">
                <input
                  type="submit"
                  aria-label="On Click"
                  value={"Make Your Reservation"}
                />
              </div>
            </feildset>
          </form>
        </section>
      </header>
    </>
  );
};

export default BookingForm;
