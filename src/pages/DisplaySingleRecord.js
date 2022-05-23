import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getID } from "../services/products";

import SingleCard from "../components/SingleCard";

const DisplaySingleRecord = () => {
    const [record, setRecord] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        (async () => { // anon async func
            setRecord(await getID(id)); // update state to await'd record
        })(); // call anon func immediately
    }, [id]); // call useEffect on {id} change

    if(record) {
        return (
            <>
                <SingleCard 
                id={record.id}
                name={record.name}
                description={record.description}
                image={record.image}
                price={record.price}
                variants={record.variants}
                quantity={record.quantity}
                fav={record.favourited}
                />
        </>
        )
    } else {
            return (
        <>
            <h1>404: A record with id: {id} could not be found</h1>
        </>
    )
    }

}

export default DisplaySingleRecord;