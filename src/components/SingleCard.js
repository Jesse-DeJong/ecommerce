import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateRecord } from "../services/products";

const SingleCard = ({
    id,
    name,
    description,
    image,
    price,
    variants,
    quantity,
    fav
}) => {

    const style = {
        section: {
            display: 'flex',
            justifyContent: 'center',
            margin: '2% 0'
        },
        div: {
            width: "36rem"
        },
        column: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        span: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%"
        },
        count: {
            width: "100px",
            marginTop: "15px"
        }
    } 

    const [count, setCount] = useState(0);
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        if(isFav != fav) {
            setIsFav(fav);
        }
    }, [])

    const inc = () => {
        setCount(count + 1);
    }
    const dec = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }
    const updateFav = () => {
        updateRecord(id, "favourited", !isFav);
        setIsFav(!isFav);
    }

    return (
        <>
        <section style={style.section}>
            <div className="card" style={style.div}>
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body" style={style.column}>
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{description}</p>
                  <span className="card-text">Add to Cart</span>
                  <div style={style.span}>
                    <span className="card-text">${price}</span>
                        <div style={style.count} className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="decrement" onClick={dec}>-</button>
                        <div type="number" className="form-control">{count}</div>
                        <button className="btn btn-outline-secondary" type="button" id="increment" onClick={inc}>+</button>
                    </div>
                    <span className="card-text">Qty: {quantity}</span>
                  </div>
                  <br></br>
                  <p className="card-text">Variants:</p>
                  <ul>
                      {variants.map((variant, index) => (
                            <div className="form-check" key={index}>
                                <input className="form-check-input" 
                                    type="radio" name={`flexRadio${index}`} 
                                    id={`flexRadio${index}`}></input>
                                <label className="form-check-label" htmlFor={`flexRadio${index}`}>
                                    {variant}
                                </label>
                            </div>
                      ))}
                  </ul>
                  {
                      isFav 
                      ? <button className="btn btn-outline-danger" type="button" id="decrement" onClick={updateFav}>Remove Favourite</button>
                      : <button className="btn btn-outline-success" type="button" id="decrement" onClick={updateFav}>Add Favourite</button>
                  }
                  

                    <Link to='/ecommerce'>Return</Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default SingleCard;