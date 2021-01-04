import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import './SearchBar.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { withRouter } from 'react-router';
import {useHistory } from 'react-router-dom';

const SearchBar = (props) => {
    const history = useHistory();

    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [guests, setGuests] = useState('1');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log(location, startDate, endDate, guests);
        console.log(props);
        if(!location || !startDate || !endDate ||!guests){
            alert('please enter location and dates and guests');
            return;
        }
        history.push(`/search?city=${location}&guests=${guests}&startDate=${startDate}&endDate=${endDate}`, {city: location, startDate, endDate, guests});
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
                            value={location} onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="searchBar__item searchBar__item--checkIn">
                        <label htmlFor="startDate">Check in</label>
                        <DatePicker
                            id="startDate"
                            selected={startDate}
                            onChange={(date) => {console.log("staaaaaaaart", date);setStartDate(date)}}
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
                            min={1}
                            defaultValue={guests}
                            autoComplete="off"
                            onChange={(e) => setGuests(e.target.value)}
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
