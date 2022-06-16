import React, { useEffect, useState } from "react";
import firebase from '../../utils/fb-config';
import ProductCard from "../ProductCard/ProductCard";

const SerchList = ({ value }) => {

    const [data, setData] = useState(null);

    useEffect(() => {

        firebase
          .database()
          .ref()
          .once('value')
          .then(data => setData(data.val()))
    
       }, []);

        const allData = data && Object.values(data)
                                    .map(product => product.data)
                                    .filter(Boolean)
                                    .flat(Infinity)
                                    .filter(product => product.name.toUpperCase().includes(value.toUpperCase()))
        console.log(allData);

    return(
        <div className="cards cards-menu">
            {allData?.map(card => {
                return <ProductCard key={card.id} {...card}/>
            })}
        </div>
    )
}

export default SerchList;