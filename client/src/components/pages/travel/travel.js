import { Carousel } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './travel.css'



    const isInViewport = el => {
        const rect = el.getBoundingClientRect()
        const vertInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0)
        const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0)
        return (vertInView && horInView)
    }


function ControlledCarousel() {

    return (
        <>
            <Carousel className="fixedCar" interval="2000" >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
                        alt="India"
                    />
                    <Carousel.Caption className="caption">
                        <h3>INDIA</h3>
                        <p>India, officially the Republic of India, is a country in South Asia. It is the second-most populous country, the seventh-largest country by land area, and the most populous democracy in the world.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1526392060635-9d6019884377?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                        alt="Peru"
                    />

                    <Carousel.Caption className="caption">
                        <h3>PERU</h3>
                        <p>Peru is a country in South America that's home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains. The region around Machu Picchu, including the Sacred Valley, Inca Trail and colonial city of Cusco, is rich in archaeological sites.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                        alt="Tanzania"
                    />

                    <Carousel.Caption className="caption">
                        <h3>TANZANIA</h3>
                        <p>Tanzania is an East African country known for its vast wilderness areas. They include the plains of Serengeti National Park, a safari mecca populated by the “big five” game (elephant, lion, leopard, buffalo, rhino), and Kilimanjaro National Park, home to Africa’s highest mountain. Offshore lie the tropical islands of Zanzibar, with Arabic influences, and Mafia, with a marine park home to whale sharks and coral reefs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1446&q=80"
                        alt="Australia"
                    />

                    <Carousel.Caption className="caption">
                        <h3>AUSTRALIA</h3>
                        <p>Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                        <h3>THAILAND</h3>
                        <p>Thailand is a Southeast Asian country. It´s known for tropical beaches, opulent royal palaces, ancient ruines and ornate temples displaying figures of Buddha. In Bangkok, the capital , an ultramodern cityscape rises next to quiet canalside beach resorts include bustling Pattaya and fashinable Hua Hin.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1470043201067-764120126eb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                        <h3>SLOVAKIA</h3>
                        <p>Slovakia, officially the Slovak Republic, is a landlocked country in Central Europe. It is bordered by Poland to the north, Ukraine to the east, Hungary to the south, Austria to the southwest, and the Czech Republic to the northwest.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1497538932936-43bfc596c94f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1498&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                        <h3>LEBANON</h3>
                        <p>Lebanon is a mountainous country in the Levant with a coastline on the eastern Mediterranean Sea; it borders Israel in the south and Syria in the north. The Anti-Lebanon mountain range forms long stretches of the border between Lebanon and Syria in the east. The country also shares maritime borders with Cyprus.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Link className="explore btn btn-light" to='/jobs'> Explore!</Link>
        </>

    )

}

export default ControlledCarousel