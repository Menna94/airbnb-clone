import React from 'react'
import Confirmmodal from './Modal';
import { Button } from 'react-bootstrap';



export default function Property(props) {

    
        const [modalShow, setModalShow] = React.useState(false);
        return (
            <React.Fragment>
                <tr>
                    <td className="align-middle">{props.data._id}</td>
                    <td className="align-middle" style={{ width: '100px' }}><img src={props.data.img} style={{ height: '100px' }} />{props.data.type}</td>
                    <td className="align-middle">{props.data.bedrooms}</td>
                    <td className="align-middle">{props.data.beds}</td>
                    <td className="align-middle">{props.data.baths}</td>
                    <td className="align-middle">{props.data.location}</td>
                    {/* <td className="align-middle"><button className="btn btn-danger" onClick={() => { this.props.onDelete(this.props.data) }}>Delete</button></td> */}
                    <td className="align-middle">
                        <Button variant="primary" onClick={() => setModalShow(true)} className="btn btn-danger">
                            Delete
                        </Button>
                    </td>
                    <Confirmmodal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        delete={() => {props.onDelete(props.data)}}
                    />
                    <td className="align-middle"><button className="btn btn-secondary" onClick={() => { this.props.onEdit(this.props.data) }}>Edit</button></td>
                </tr>
            </React.Fragment>
        )
    
}
