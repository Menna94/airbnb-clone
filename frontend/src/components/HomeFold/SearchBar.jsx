import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const SearchBar = () => {
    const [startDate, setStartDate] = useState(new Date('2014/02/08'))
    const [endDate, setEndDate] = useState(new Date('2014/02/10'))

    return (
        <div className="searchBar">
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />

            <h2>no. of guests</h2>
            <input type="number" min={0} defaultValue={2} />
            <button>search</button>
        </div>
    )
}

export default SearchBar
