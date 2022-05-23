import { Carousel } from 'react-responsive-carousel';
import { getAll, getID, createRecord } from "../services/products";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Card from '../components/Card';

const Home = () => {

    const style = {
        carousel: {
            display: 'flex',
            justifyContent: 'center',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)'
        }
    }

    const [records, setRecords] = useState([]);

    useEffect(() => {
        (async () => { // anon async func
            setRecords(await getAll()); // update state to await'd records
        })(); // call anon func immediately
    }, []); // call useEffect only on mount


    return (
        <>
            <section style={style.carousel}>
                <Carousel autoPlay stopOnHover infiniteLoop>
                    <div>
                        <img src='https://cdn3.centrecom.com.au/images/upload/0123971_0.jpeg' />
                    </div>
                    <div>
                        <img src="https://cdn1.centrecom.com.au/images/upload/0124037_0.jpeg" />
                    </div>
                    <div>
                        <img src="https://cdn1.centrecom.com.au/images/upload/0124205_0.jpeg" />
                    </div>
                    <div>
                        <img src="https://cdn0.centrecom.com.au/images/upload/0123492_0.jpeg" />
                    </div>
                    <div>
                        <img src="https://cdn2.centrecom.com.au/images/upload/0122522_0.jpeg" />
                    </div>
                    <div>
                        <img src="https://cdn2.centrecom.com.au/images/upload/0120978_0.jpeg" />
                    </div>
                </Carousel>
            </section>

            <section style={style.grid}>
                {records.length && records.map((record, index) => (
                    <Card 
                    id={record.id}
                    name={record.name}
                    description={record.description}
                    image={record.image}
                    price={record.price}
                    variants={record.variants}

                    key={index}
                    />
                ))}
            </section>
        </>
    )
}

export default Home;