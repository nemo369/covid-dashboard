import React, { useState , useEffect } from 'react';

const Table = ({countries}) => {
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
        setSort({by, isDescSort:isDesc})
        const newCountries = [...countries].sort((a, b) => isDesc ? a[by]-b[by] : b[by]-a[by] )
        setSortedCountries(newCountries)        
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
                        {rows.map(row => (<td className="table__td" key={row.prop}>{country[row.prop]}</td>))}
                </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default Table;