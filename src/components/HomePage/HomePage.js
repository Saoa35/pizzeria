import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Restaurants from '../Restaurants/Restaurants';
import SearchInput from '../SearchInput/SearchInput';
import SerchList from '../SerchList/SerchList';


const HomePage = () => {

    const [serch, setSerch] = useState('');

    const handleChange = (e) => {
        setSerch(e.target.value)
    }

    return (
        <>
            <Banner/>
            <section className="restaurants">
                <SearchInput value={serch} onChange={handleChange}/>
                <SerchList />
                <Restaurants/>
            </section>    
        </>
    )
}

export default HomePage;