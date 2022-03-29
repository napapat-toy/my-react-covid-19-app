import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/history',
  params: { country: 'usa', day: '2020-06-02' },
  headers: {
    'x-rapidapi-host': 'covid-193.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_API_KEY
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});