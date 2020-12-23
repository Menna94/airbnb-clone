import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const PropertyType = ({formData , setForm ,navigation}) => {
    const {type}= formData;
    console.log(type)
    return (
        <>
        <ProgressBar now={25}/>
        <div class="container">
            <div class="row description">
            <div class="col-md-6 offset-md-3">
                <h4 className="price_p">What kind of place are you listing?</h4>
                <h6>Choose a property type</h6>
                <form >
                    <div className="form-group">
                            <select class="form-select" class="form-control" type="text"  class="price" id="type" aria-describedby="type"   placeholder="Proberty address" name="type" value={type}  onChange={setForm}>
                                <option value="apartment">Apartment</option>
                                <option value="room">Room</option>
                                <option value="house">House</option>
                             </select>
                    </div>
                    <div className="d-flex justify-content-between">
                    <p className="myLink" onClick={()=>navigation.previous()}><b><a  target="_blank" className="back_a">Back</a></b></p>
                        <button class="btn btn_start" onClick={()=>navigation.next()}>next</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}
