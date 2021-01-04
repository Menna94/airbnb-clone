import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import './House.css'
import { AppContext } from '../../contexts/AppContext';
import axios from 'axios';


const House = (props) => {
    const {token} = useContext(AppContext);
    const [show, setShow] = useState('table-row');
    console.log(999, token);
    const handleApprove = () => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/v1/places/approve`, { _id: props.place._id }, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(()=>{
            setShow('none')
        })
    }
    const handleReject = () => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/v1/places/reject`, { _id: props.place._id }, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(()=>{
            setShow('none')
        })
    }
    return (
        <tr style={{display:show}}>
            <td className="align-middle"><img src={`${process.env.REACT_APP_BACKEND_URL}/uploads/${props.place.images[0]}`} alt='pics' /></td>
            <td className="align-middle">{props.place.bedroom}</td>
            <td className="align-middle">{props.place.beds}</td>
            <td className="align-middle">{props.place.baths}</td>
            <td className="align-middle">
                <Button className='btn btn-success btn-sm' onClick={handleApprove}>Approve Request</Button>
            </td>
            <td className="align-middle">
                <Button className='btn btn-danger btn-sm' onClick={handleReject}>Reject Request</Button>
            </td>
        </tr>
    )

}

export default House
