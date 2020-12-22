import React from 'react'

export const Amenities = ({formData , setForm ,navigation}) => {
    const {wifi ,isAccept}= formData;
    console.log(formData)

   
    return (
        <div className="container">
            <div className="row description">
                <div className="col-md-6 offset-md-3">
                    <h4 className="price_p">What amenities do you offer?</h4>
                    <h6 className="price_p">These are just the amenities guests usually expect, but you can add even more after you publish.</h6>
                    <form >
                      
                        {/* <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="wifi" value={wifi} onChange={setForm} id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                wifi
                            </label>
                        </div> */}

                        <div className="checkbox">
                            <input type="checkbox" value="true"  name="isAccept" checked={isAccept === true} onChange={setForm} /> I
                            accept and agree Terms &amp; Conditions.
                      </div>

                        <div className="d-flex justify-content-between">
                            <p className="myLink" onClick={()=>navigation.previous()}><b><a  target="_blank" className="back_a">Back</a></b></p>
                            <button className="btn btn_start" onClick={()=>navigation.next()}>next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
