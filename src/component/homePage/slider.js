import React,{Component} from 'react';

export default class Slider extends Component {
    render(){

    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner"  style={{height:"650px"}}>
                <div className="carousel-item active">
                <img className="d-block w-100" src={require("../../assets/images/slider/cal.jpg")} alt="First slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={require("../../assets/images/slider/bal.jpg")} alt="Second slide" />
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={require("../../assets/images/slider/lal.jpg")} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
}
