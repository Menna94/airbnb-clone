import React from 'react'

export const Location = ({formData , setForm ,navigation}) => {
    const {country,city,street}= formData;
    return (
        <div class="container">
            <div class="row description">
                <div class="col-md-6 offset-md-3">
                    <h4 className="price_p">Where’s your place located?</h4>
                    <h6 className="price_p">Guests will only get your exact address once they’ve booked a reservation.</h6>
                    <form >
                        <div class="form-group">
                            <label >country</label>
                            <input type="text"  class="price" id="country" aria-describedby="country"   name="country" value={country}  onChange={setForm}/>
                        </div>
                        <div class="form-group">
                            <label >city</label>
                            <input type="text"  class="price" id="city" aria-describedby="city"   placeholder="city" name="city" value={city}  onChange={setForm}/>
                        </div>
                        <div class="form-group">
                            <label >street</label>
                            <input type="text"  class="price" id="street" aria-describedby="street"   placeholder="street" name="street" value={street}  onChange={setForm}/>
                        </div>
                        <div className="d-flex justify-content-between">
                        <p className="myLink" onClick={()=>navigation.previous()}><b><a  target="_blank" className="back_a">Back</a></b></p>
                            <button class="btn btn_start" onClick={()=>navigation.next()}>next</button>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    
    )
}
