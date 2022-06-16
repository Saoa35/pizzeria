import React, { useState } from "react";

const SerchList = ({ value }) => {

    const [data, setData] = useState(null);

    useEffect(() => {

        firebase
          .database()
          .ref()
          .once('value')
          .then(data => setData(data.val()))
    
       }, []);

    return(
        <div className="cards cards-menu">

        </div>
    )
}

export default SerchList;