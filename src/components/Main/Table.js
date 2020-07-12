import React, { useState , useEffect ,useContext} from 'react';
import { DataContext } from '../../contexts/DataContext';

const Table = ({countries}) => {
  const { changeCountry , country:currentCountry} = useContext(DataContext);
    useEffect(()=>{
        setSort({by:'countries_and_territories', isDescSort: true})
        const newCountries = [...countries].sort((a, b) => a.countries_and_territories-b.countries_and_territories )
        setSortedCountries(newCountries) 
    },[countries]);
    
    const [sort, setSort] = useState({by:'countries_and_territories', isDescSort: true});
    const [sortedCountries, setSortedCountries] = useState(countries);

    const rows = [
        {header: `Country Name`, prop:`countries_and_territories`},
        {header: `Cases`, prop:`confirmed_cases`},
        {header: `Deaths`, prop:`deaths`},
    ];

    const sortTable = (by, isDesc) =>{
        setSort({by, isDescSort:isDesc});
        let newCountries = [...countries];
        if(by === 'countries_and_territories'){
            newCountries.sort((a, b) => sortAlphabetically(a, b, isDesc, by) )

        } else{
            newCountries.sort((a, b) => isDesc ? a[by]-b[by] : b[by]-a[by] )
        }
        setSortedCountries(newCountries)        
    }
    const sortAlphabetically = (a ,b ,isDesc, by) =>{
        if(a[by] < b[by]) { return isDesc ? -1 : 1; }
        if(a[by] > b[by]) { return isDesc ? 1 : -1 }
        return 0;
    }

    return (  
        <table className="table">
            <thead>
                <tr className="table__tr">
                    {rows.map(row => (
                        <th className="table__th" key={row.prop}>
                            <button 
                            className={row.prop === sort.by ? 'active' : ''}
                            onClick={()=>sortTable(row.prop, !sort.isDescSort)}
                            >{row.header}
                            {row.prop === sort.by ? <span className={sort.isDescSort ? 'arrow desc': 'arrow asc'}>←</span> : ''}
                            </button>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {sortedCountries.map((country) => ( 
                        <tr className="table__tr" key={country.geo_id + country.date}>
                        {rows.map(row => (<td 
                        className={`table__td ${currentCountry && country.geo_id === currentCountry.geo_id ? 'active' : ''} `} 
                        key={row.prop} onClick={() =>changeCountry(country)}>{country[row.prop]}</td>
                        ))}
                </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default Table;