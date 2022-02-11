import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player'; 
import { useStateContext } from '../context/StateContextProvider';
import Loading from './Loading';

const Results = () => {

    const { results, loading, getResults, searchTerm } = useStateContext();
    const location = useLocation();
    console.log(location.pathname)

    // if(isLoading) return <Loading/>

    // switch (location.pathname) {
    //     case '/search':{
    //         console.log("se")
    //         return "Search";
    //     }
    //     case '/results':{
    //         return "Results";
    //     }
    //     default:{
    //         return "Error";
    //     }
    //}
    return "hello";
}

export default Results;
