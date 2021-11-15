import React from 'react';
import image1 from '../img/VENMURASU4.jpg';
import image2 from '../img/VENMURASU2.jpg';
import image3 from '../img/VENMURASU4.jpg';
import './HomepageCarousel.css';

const HomepageCarousel = props => {
    return (
        <React.Fragment>
            <div className="container">
                <h2>Catalogue</h2>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={image1} alt="Venmurasu1" />
                        </div>

                        <div className="item">
                            <img src={image2} alt="Venmurasu2" />
                        </div>

                        <div className="item">
                            <img src={image3} alt="Venmurasu3" />
                        </div>
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default HomepageCarousel;