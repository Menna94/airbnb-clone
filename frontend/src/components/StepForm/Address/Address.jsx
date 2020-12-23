import React from 'react'
import './Address.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

export const Address = ({formData , setForm ,navigation}) => {
    const {address}= formData;
    console.log(address)
   
    return (
        <>
            <ProgressBar now={12.5}/>
        <div class="container">
          <div class="row description">
                <div class="col-6 ">
                    <h4 className="price_p">Let’s get started listing your space.</h4>
                    <h6>Where’s your place located?</h6>
                    <form >
                    <div class="form-group">
                            <input type="text"  class="price" id="address" aria-describedby="address"   placeholder="Proberty address" name="address" value={address}  onChange={setForm}/>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button class="btn btn_start" onClick={()=>navigation.next()}>continue</button>
                        </div>
                    </form>
                </div>
                <div class="col-6 d-none d-md-block">
                    <img src={`../imgs/startForm.png`}  className="start_img"/>
                </div>
        </div>
    </div>
        </>
    )
}
