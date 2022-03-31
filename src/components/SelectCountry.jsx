import { FormControl, MenuItem, Paper, TextField } from '@mui/material'
import { useState } from 'react'

function SelectCountry({ countries, handleCountry }) {

    const [search, setSearch] = useState('')
    const [filteredSearch, setFilteredSearch] = useState([])

    const handleSearch = (e) => {

        if (!e.target.value) {
            setFilteredSearch([])
        }
        else {
            const filterSearch = countries.filter(searchCountry => searchCountry.toString().toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
            setFilteredSearch(filterSearch)
        }
        setSearch(e.target.value)
    }

    const clickFilteredSearch = (country) => {
        setSearch(country)
        handleCountry(country)
        setFilteredSearch([])
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') handleCountry(search)
    }

    return (
        //Search and suggest country
        <FormControl variant="filled" fullWidth sx={{ mb: 2, minWidth: 250 }}>
            <TextField
                id="search-country"
                value={search}
                onChange={handleSearch}
                onKeyDown={handleEnter}
                label="Search Country"
                variant='filled'
            />
            <Paper sx={{ position: 'absolute', top: 56, maxHeight: 300, minWidth: 250, overflow: 'auto' }}>
                {filteredSearch && filteredSearch.map((country, index) =>
                    <MenuItem key={index} value={country} onClick={() => clickFilteredSearch(country)}>
                        {country}
                    </MenuItem>
                )}
            </Paper>
        </FormControl>
    )
}

export default SelectCountry