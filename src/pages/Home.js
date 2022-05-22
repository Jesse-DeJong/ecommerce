import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {

    const style = {
        carousel: {
            display: 'flex',
            justifyContent: 'center',
        }
    }

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
        </>
    )
}

export default Home;