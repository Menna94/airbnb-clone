import React from 'react'

export const Amenities = (formData , setForm ,navigation) => {
    const {wifi}= formData;
   
    return (
        <div class="container">
            <div class="row description">
                <div class="col-md-6 offset-md-3">
                    <h4 className="price_p">What amenities do you offer?</h4>
                    <h6 className="price_p">These are just the amenities guests usually expect, but you can add even more after you publish.</h6>
                    <form >
                      
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="wifi"  onChange={setForm} id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                wifi
                            </label>
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
