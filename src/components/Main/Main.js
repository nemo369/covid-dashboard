import React, { useContext, useState, useEffect } from 'react';
import Chart from './Chart';
import { topCases, topStable, topIncrease } from '../../utils/utils';
import useInfo from '../../data/useInfo';
import Table from './Table';
import { DataContext } from '../../contexts/DataContext';
import Country from './Country';

const Main = () => {
    const { dataType} = useContext(DataContext);
    const { info, loading, error } = useInfo();
    const [countries, setCountries] = useState();
            useEffect(()=>{
                var t0 = performance.now()
                setCountries(getCountries(info, dataType.type));
                var t1 = performance.now()
                console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
          
            },[dataType.type, info])
    if (loading) {return <p>Loading...</p>};
    if (error) {return <p>Error...</p>};
    return ( 
    <main className="main">
        <Chart countries={countries}/>
        <Table countries={countries}/>
        <Country/>
    </main> 
    );
}
 
export default Main;

const getCountries = (info,type)=> {
    switch (type) {
        case `cases`:
            return topCases(info)
        case `increase`:
            return topIncrease(info)
        case `stable`:
            return topStable(info)
            default:
                return []
    }
}
