import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import './SearchBar.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { withRouter } from 'react-router'

const SearchBar = (props) => {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        props.history.push('/search')
    }

    return (
        <>
            <form onSubmit={handleSearchSubmit}>
                <div className="searchBar">
                    <div className="searchBar__item searchBar__item--location">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="where are you going?"
                            autoComplete="off"
                        />
                    </div>
                    <div className="searchBar__item searchBar__item--checkIn">
                        <label htmlFor="startDate">Check in</label>
                        <DatePicker
                            id="startDate"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            minDate={new Date()}
                            placeholderText="Add dates"
                            autoComplete="off"
                            isClearable
                        />
                    </div>
                    <div className="searchBar__item searchBar__item--checkOut">
                        <label htmlFor="endDate">Check out</label>
                        <DatePicker
                            id="endDate"
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate || new Date()}
                            placeholderText="Add dates"
                            autoComplete="off"
                            isClearable
                        />
                    </div>
                    <div className="searchBar__item searchBar__item--guests">
                        <label htmlFor="guests">Guests</label>
                        <input
                            type="number"
                            id="guests"
                            name="guests"
                            min={0}
                            defaultValue={1}
                            autoComplete="off"
                        />
                    </div>
                    <button type="submit" className="searchBar__submit">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        </>
    )
}

export default withRouter(SearchBar)
