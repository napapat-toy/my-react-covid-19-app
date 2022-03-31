import { Box, Container } from '@mui/material';
import { useState } from 'react';

import './App.css';
import useFetch from './api/useFetch';
import Appbar from './components/Appbar';
import CountryDetailTables from './components/CountryStatistics/CountryDetailTables';
import CountrySumDashboard from './components/CountryStatistics/CountrySumDashboard';
import SelectCountry from './components/SelectCountry';

function App() {

  const [country, setCountry] = useState([])
  const [countries, setCountries] = useState([])

  //Get all country name
  const getData = useFetch({ options: 'countries' })

  const handleCountry = (country) => {
    setCountry(country)
    //For add more country
    if (countries.indexOf(country) === 0) {
      setCountries([...countries])
    }
    else {
      setCountries([...countries, country])
    }
  }

  const handleDelete = (countryTarget) => {
    setCountries(countries.filter(country => country !== countryTarget));
  }

  return (
    <Box className="App">
      <Appbar />
      <Container maxWidth="xl">
        <CountrySumDashboard />
        <SelectCountry countries={getData} handleCountry={handleCountry} />
        {country.length > 0 && <CountryDetailTables countries={countries} handleDelete={handleDelete} />}
      </Container>
    </Box >
  );
}

export default App;
