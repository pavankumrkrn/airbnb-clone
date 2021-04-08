import './search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import React from 'react';
import { People } from '@material-ui/icons';
import { Button } from '@material-ui/core';

export const Search = (props) => {
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const selectionRange = {
        startDate,
        endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>Number of Guests <People /></h2>
            <input type="number" min={0} defaultValue={2} />
            <Button>Search Airbnb</Button>
        </div>
    )
}