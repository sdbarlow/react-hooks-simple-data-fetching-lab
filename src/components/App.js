
import React, { useEffect, useState } from "react";



function App(){

const [Image, setImage] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then( resp => resp.json())
        .then(data => setImage(data.message))
    }, []);

    if (!Image) return <p>Loading...</p>;

    return <img alt={"A Random Dog"} src={Image}/>;
}

export default App;