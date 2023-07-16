import React from 'react';
import '../sponsers/sponsers.css';
import logo from '../sponsers/fineartscollege.png';

function Sponsers() {
    return (
        <div className="container cards-container-sponser">
            <h2 className="text-center  section-title mb-4">محطات ابداعية</h2>
            <div className="row cardsrow justify-content-center">
                <div className="col-md-3">
                    <div className=" card-size mb-2 border-0">
                        <img src={logo} className="card-img-top bg-transparent" alt="Card" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" card-size mb-2 border-0">
                        <img src={logo} className="card-img-top" alt="Card" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" card-size mb-2 border-0">
                        <img src={logo} className="card-img-top" alt="Card" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=" card-size mb-2 border-0">
                        <img src={logo} className="card-img-top" alt="Card" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsers;
