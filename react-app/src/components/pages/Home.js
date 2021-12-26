import React from 'react'
import { Fragment } from 'react'

import CarouselCustom from '../CarouselCustom'
import Cards from '../Cards';
import Footer from '../Footer';




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