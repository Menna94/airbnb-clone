import React from 'react'

let style = {
    transition: 'all 0.5s ease',
    display: 'block',
    width: '35%',
    height: '48px',
    backgroundSize: '200% 200%',
    fontSize: '16px',
    border: 0,
    borderRadius: '8px',
    fontWeight: 600,
    color: '#ffffff',
    marginTop: '20px',
    backgroundImage: `radial-gradient(
        circle at center center,
        rgb(255, 56, 92) 0%,
        rgb(230, 30, 77) 27.5%,
        rgb(227, 28, 95) 40%,
        rgb(215, 4, 102) 57.5%,
        rgb(189, 30, 89) 75%,
        rgb(189, 30, 89) 100%
    )`
}

const PayingForm = () => {

    return (
        <React.Fragment>
            <form>
                <div class="form-group">
                    <label for="inputCardNumber">Card Number</label>
                    <input type="number" class="form-control" id="inputCardNumber" placeholder="0000 0000 0000 0000" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputExpiration">Expiration</label>
                        <input type="date" class="form-control" id="inputExpiration" placeholder="MM / YY" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputCVV">CVV</label>
                        <input type="number" class="form-control" id="inputCVV" placeholder="CVV" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputStreet">Street Address</label>
                    <input type="text" class="form-control" id="inputStreet" placeholder="Street Address" />
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Apt or suite number</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apt or suite number" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                </div>
                <h5 className='my-4' style={{ height: '1px', backgroundColor: '#ddd' }}></h5>
                <h4 className="pb-2">Required For Your Trip</h4>
                <h6>Message The Host</h6>
                <p>Let the host know why you're traveling and when you'll check in.</p>
                <div class="jumbotron p-3 row">
                    <div className="col-2">
                        <img src="imgs/5.jpg" style={{ width: '75px', borderRadius: '50%' }} />
                    </div>
                    <div className='col-10'>
                        <h6>Name here</h6>
                        <span class="lead" style={{ fontSize: '16px' }}>
                            Thank you for your interest in our flat and we hope to enjoy your stay with us :)
                        </span>
                    </div>
                </div>
                <button style={style}>Confirm and Pay</button>
            </form>
        </React.Fragment>
    )
}

export default PayingForm
