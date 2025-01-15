import React from 'react'
import '../ComponetsStyle/userCart.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDetail } from '../redux/detailSlice';
const UserCart = ({ el }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleShow = (el) => {
    dispatch(setDetail(el))
    navigate("/detail")
  }
  return (
    <div>
      <div className="cart-box" onClick={() => handleShow(el)}>
        <p>Name :- <span>{el.name}</span></p>
        <p>Email :- <span>{el.email}</span></p>
        <p>City :- <span>{el.address.city}</span></p>
      </div>
    </div>
  )
}

export default UserCart
