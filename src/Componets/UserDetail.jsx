import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ComponetsStyle/userdetail.css';
import { useSelector } from 'react-redux';

const UserDetail = () => {
  const details = useSelector((state) => state.detail.data);
  console.log(details)
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }




  return (
    <div className="container">

      <button className="backButton" onClick={back}>Back</button>
      <h1 className="title">User Details</h1>
      <div className="card">
        <p className="detail"><strong>Name:</strong> {details.name}</p>
        <p className="detail"><strong>Username:</strong> {details.username}</p>
        <p className="detail"><strong>Email:</strong> {details.email}</p>
        <div className="addressContainer">
          <p className="detail"><strong>Address:</strong></p>
          <ul className="addressList">
            <li className="addressItem"><strong>Street:</strong> {details.address.street}</li>
            <li className="addressItem"><strong>Suite:</strong> {details.address.suite}</li>
            <li className="addressItem"><strong>City:</strong> {details.address.city}</li>
            <li className="addressItem"><strong>Zipcode:</strong> {details.address.zipcode}</li>
          </ul>
        </div>
        <div className="geoContainer">
          <p className="detail"><strong>Geo Coordinates:</strong></p>
          <ul className="geoList">
            <li className="geoItem"><strong>Latitude:</strong> {details.address.geo.lat}</li>
            <li className="geoItem"><strong>Longitude:</strong> {details.address.geo.lng}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
