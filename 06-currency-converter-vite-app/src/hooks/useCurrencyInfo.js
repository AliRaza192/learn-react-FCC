// import {useState, useEffect}  from "react"

// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//         useEffect(() => {
//             fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currency}.json`)
//             .then((res) => res.json())
//             .then((res) => setData(res[currency]))
//         }, [currency])

//         console.log(data);
        
//         return data
    
// }

// export default useCurrencyInfo

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates));
    }, [currency]);

    console.log(data);

    return data;
}

export default useCurrencyInfo;
