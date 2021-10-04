const axios = require("axios");


axios.post('http://family-promise-dev.us-east-1.elasticbeanstalk.com/geocode/', ({
    "address": "20 W 34th St",
    "address_line2": "",
    "city": "New York City",
    "state": "NY",
    "zip": "10001",
    "country": "United States"
  }))
  .then( (res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
