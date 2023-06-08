import * as React from 'react';
import './App.css';

function App() {

  function apiCall() {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": 1,
  "available": "sfalse",
  "brand": "Lamborgini",
  "color": "Yellow",
  "first_release_date": "2010-09-17",
  "price": 11436,
  "type": "MPV",
  "additional_features": [
    "GPS",
    "Alarm"
  ],
  "fuel_type": "Petrol",
  "horse_power": 197,
  "serial_number": "SN0000001",
  "tyres": [
    {
      "manafacturer": "Apollo",
      "diameter": 17
    },
    {
      "manafacturer": "Dunlop",
      "diameter": 17
    },
    {
      "manafacturer": "Goodyear",
      "diameter": 16
    }
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://api.34.100.229.30.sslip.io/api/v1/user/fail/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>API Test</h1>
        <button type="button" onClick={apiCall}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
