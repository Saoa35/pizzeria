import React from 'react';
import Banner from '../Banner/Banner';
import Restaurants from '../Restaurants/Restaurants';
import SearchInput from '../SearchInput/SearchInput';


const HomePage = () => {

    return (
        <>
            <Banner/>
            <section className="restaurants">
                <SearchInput />
                <Restaurants/>
            </section>    
        </>
    )
}

export default HomePage;