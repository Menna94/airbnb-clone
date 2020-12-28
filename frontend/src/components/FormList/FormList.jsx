import React from 'react';
import './FormList.css'

export default function FormList() {
    return (
            <div className="row Form">
                <div class="col-6 d-xs-none ">
                    <div class="FormText">
                        <h6>
                        SEE WHAT’S POSSIBLE
                        </h6>
                        <h3>
                        Earn up to $717 a month 
                        </h3>
                        <h3>
                        hosting in Cairo
                        </h3>
                    </div> 
                </div>
                <div class="col-6 ">
                       <div class="form-group">
                        <form class="allSides">
                        <h6>Tell us more about your place and we'll update your estimate</h6>
                            <div class="smallForm">
                                <div class="address">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="address"/>
                                </div>
                                <div>
                                    <select class="form-select" class="form-control" >
                                        <option selected>Entire place</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div>
                                    <select class="form-select" class="form-control" >
                                        <option selected>guest</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="smallForm">
                                <div>
                                    <select class="form-select" class="form-control" >
                                        <option selected>Entire place</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div>
                                    <select class="form-select" class="form-control" >
                                        <option selected>Entire place</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div>
                                    <select class="form-select" class="form-control" >
                                        <option selected>guest</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <button type="button" class=" btn Formstart_btn">Start your listing</button>
                    </form>
                </div>
             </div>
         </div>   
    )
}
