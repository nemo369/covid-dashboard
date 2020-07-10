import React, { useContext } from 'react';
import Chart from './Chart';
import { topCases, topStable, topIncrease } from '../../utils/utils';
import useInfo from '../../data/useInfo';
import Table from './Table';
import { DataContext } from '../../contexts/DataContext';

const Main = () => {
  const { dataType} = useContext(DataContext);
    const { info, loading, error } = useInfo();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;
    const countries=getCountries(info, dataType.type)
    return ( 
    <main className="main">
        <Chart countries={countries}/>
        <Table countries={countries}/>
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
