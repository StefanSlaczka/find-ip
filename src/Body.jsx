import React, { useState } from "react";

const GeoLocation = () => {
  const [details, setDetails] = useState(null);
  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  return (
    <>
      <React.Fragment>
        <h1 className='title'>
          Learn about your location
          <hr className='line' />
        </h1>
        <h3 className='about'>
          This website can help you find your city's and country's name and your
          latitude and longitude on earth and finally your IP
        </h3>
        <br />
        <button className="btn btn-dark" onClick={getUserGeolocationDetails}>Find My Location</button>
        <br />
        {details && (
          <div className='box'>
            <h3>Your Personal information</h3>
            <ul className='list-group'>
              Location :{" "}
              {`${details.city}, ${details.country_name}(${details.country_code})`}
              <br></br>
              {` latitude ${details.latitude}, longitude  ${details.longitude}`}
              <br></br>
              {details.IPv4}
            </ul>
          </div>
        )}
      </React.Fragment>
    </>
  );
};

export default GeoLocation;
