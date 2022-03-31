import { Card, CardContent, Typography } from '@mui/material';
import useFetch from '../../api/useFetch';

function CountryAllSum() {
    const data = useFetch({ options: 'statistics' })

    //Sum each value
    const totalPopulation = data.reduce((previous, current) => previous + current.population, 0)

    const totalCases = data.reduce((previous, current) => previous + current.cases?.total, 0)

    const totalRecover = data.reduce((previous, current) => previous + current.cases?.recovered, 0)

    const totalActive = data.reduce((previous, current) => previous + current.cases?.active, 0)

    const totalDeaths = data.reduce((previous, current) => previous + current.deaths?.total, 0)

    const totalTests = data.reduce((previous, current) => previous + current.tests?.total, 0)

    //Set DateTime to thailand
    const time = data.find(data => data.country === 'Thailand')?.time
    const dateFormat = new Date(`${time}`).toDateString()
    const timeFormat = new Date(`${time}`).toLocaleTimeString()

    // Set Timezone to user country  ****WIP
    const today = new Date()
    const formatToday = today.getTimezoneOffset()
    // console.log(formatToday);

    return (
        <Card sx={{ maxWidth: 600, minWidth: 200, m: 2, p: 1, mx: 'auto' }} elevation={3}>
            <CardContent>
                {data.length > 0 ? (
                    <>
                        <Typography variant='h6'>Total Population : {totalPopulation.toLocaleString('en-US')}</Typography>
                        <Typography variant='h6'>Total Cases : {totalCases.toLocaleString('en-US')}</Typography>
                        <Typography variant='h6'>Total Tests : {totalTests.toLocaleString('en-US')}</Typography>
                        <Typography variant='h6'>Total Active : {totalActive.toLocaleString('en-US')}</Typography>
                        <Typography variant='h6'>Total Recover : {totalRecover.toLocaleString('en-US')}</Typography>
                        <Typography variant='h6'>Total Deaths : {totalDeaths.toLocaleString('en-US')}</Typography>
                        <Typography variant='h6'>Updated Date : {dateFormat}</Typography>
                        <Typography variant='h6'>Updated Time(UTC+7) : {timeFormat}</Typography>
                    </>
                ) : (
                    <Typography variant='h5'>Loading...</Typography>
                )}

            </CardContent>
        </Card>
    )
}

export default CountryAllSum