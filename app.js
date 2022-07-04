const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=23ebbd571beb253c199d45cc3c5996ed&query=21.0278,105.8342'

request( {url}, (err, res) => {
    const data = JSON.parse(res.body)
    console.log(data.current.observation_time);
})