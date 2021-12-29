import React from 'react'
import { Fragment } from 'react'

import CarouselCustom from '../Carousel/CarouselCustom'
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';




function Home() {
    return ( 
        <Fragment>
            <CarouselCustom />
            <Cards />
            <Footer />
        </Fragment>
    )
}

export default Home;