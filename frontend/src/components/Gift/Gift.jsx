import React from 'react'
import './gift.css'
export default function Gift() {
    return (
        <div className="container ">
            <div class="card text-white my-5">
                <img className="card-img" src="./imgs/gift.jpg" alt="Card image " />
                <div className="card-img-overlay">
                    <h2 className="card-text">Still after that </h2>
                    <h2 className="card-text"> perfect gift?</h2>
                    <p>Surprise them with an Airbnb gift card.</p>
                    <button type="button" class=" btn btn_learn">
                        learn more
                    </button>
                </div>
            </div>
            <h3 className="join_p">Join millions of hosts on Airbnb</h3>

            <div class="row">
                <div class="col-sm">
                    <div class="card mb-3">
                        <img class="card-img-top" src="./imgs/image.jpg" alt="..." />
                    </div>
                    <h5 class="card-title">Host Your Home</h5>
                </div>
                <div class="col-sm">
                    <div class="card mb-3">
                        <img class="card-img-top" src="./imgs/image (1).jpg" alt="..." />
                    </div>
                    <h5 class="card-title">Host an Online Experience</h5>
                </div>
                <div class="col-sm">
                    <div class="card mb-3">
                        <img class="card-img-top" src="./imgs/image (2).jpg" alt="..." />
                    </div>
                    <h5 class="card-title">Host An Experience</h5>
                </div>
            </div>
        </div>
    )
}
