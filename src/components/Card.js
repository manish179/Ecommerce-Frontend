import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const show=props.item
  return (
    <>
 
          <div className="col">
            <div className="card shadow-lg">
              <div className="custom-card-img ">
                <img
                       src={` http://localhost:8000/${show.product_image}`}

                  className="card-img-top custom-img"
                  alt={show.product_name}
                
                />
              </div>
              <div className="card-body">
                <center>
                  {" "}
                  <h5 className="card-title">{show.product_name}</h5>
                  <h5 className="card-title">Rs.{show.product_price}</h5>

                </center>
                <center>
                  <Link className="text-decoration-none" to={`/productdetails/${show._id}`}>

                  <button className="btn btn-success">View Details</button>
                  </Link>
                </center>
              </div>
            </div>
          </div>
          
      
    </>
  );
};

export default Card;
