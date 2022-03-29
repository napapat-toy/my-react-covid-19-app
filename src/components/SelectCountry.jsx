import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useState } from 'react'

function SelectCountry({ countries, country, handleCountry }) {

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
        //Search and suggest country    ***WIP and need to fix display MenuItem
        <FormControl variant="filled" fullWidth sx={{ mb: 2, minWidth: 250 }}>
            <TextField
                id="search-country"
                value={search}
                onChange={handleSearch}
                onKeyDown={handleEnter}
                label="Search Country"
                variant='filled'
            />
            {/* <Button variant='contained' onClick={() => handleCountry(search)} sx={{ mt: 0 }}>Search</Button> */}
            {filteredSearch && filteredSearch.map((country, index) =>
                <MenuItem key={index} value={country} onClick={() => clickFilteredSearch(country)}>
                    {country}
                </MenuItem>
            )}

            {/* <InputLabel id="select-country">Select Country</InputLabel>
            <Select
                labelId='select-country'
                id="select-country"
                value={country ? country : ''}
                onChange={handleCountry}
                label="Select Country"
                variant='filled'
            >
                {countries.length > 0 && countries.map((item, index) =>
                    <MenuItem key={index} value={item} >
                        {item}
                    </MenuItem>
                )}
            </Select> */}
        </FormControl>
    )
}

export default SelectCountry