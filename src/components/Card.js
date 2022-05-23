import { Link } from "react-router-dom";

const Card = ({
    id,
    name,
    description,
    image,
    price
}) => {

    const style = {
        div: {
            width: "18rem"
        }
    } 

    return (
        <div className="card" style={style.div}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">${price}</p>
              <Link to={id}>View Product Page</Link>
            </div>
        </div>
    )
}

export default Card;