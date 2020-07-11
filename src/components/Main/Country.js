import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import {startCase} from '../../utils/utils'
const Country = () => {
  const { country , changeCountry} = useContext(DataContext);

    if(!country) return <div>No country choosed</div>
    const mapedCounty = {
        confirmed_cases :country.confirmed_cases,
        daily_confirmed_cases :country.daily_confirmed_cases,
        daily_deaths :country.daily_deaths,
        deaths :country.deaths,
        population :country.pop_data_2019,
    }
    return ( 
        <div className="country-table">
            <div className="flex">
                    <h3>{country.countries_and_territories}</h3>
                <button onClick={()=>changeCountry(null)} className="close-btn">🗙</button>
            </div>
            <table className="table">
                <thead>
                    <tr className="table__tr">
                        {Object.keys(mapedCounty).map(key=> <th className="table__th" key={key}>{startCase(key)}</th>)}
                    </tr>
                </thead>
                <tbody>
                <tr className="table__tr">
                    {Object.entries(mapedCounty).map(([key, value])=> <td className="table__td" key={key}>{value}</td>)}
                </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default Country;

// "date": "2020-05-01",
//     "day": "1",
//     "month": "5",
//     "year": "2020",
//     "daily_confirmed_cases": "2",
//     "daily_deaths": "0",
//     "confirmed_cases": "745",
//     "deaths": "42",
//     "countries_and_territories": "Andorra",
//     "geo_id": "AD",
//     "country_territory_code": "AND",
//     "pop_data_2019": "76177"