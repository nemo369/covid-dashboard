import { NUM_OF_COUNTRIES } from "../const/const"

export const topCases = ( countries ) =>{
    if(!countries){
        return []
    }
    const lastDate = countries[countries.length -1].date
    const byCases =[...countries].filter(country => country.date === lastDate).sort((a,b) => b.confirmed_cases -a.confirmed_cases)
    const noDuplicate = uniqeBy(byCases, `country_territory_code`)
    return noDuplicate.slice( 0, NUM_OF_COUNTRIES )

}
export const topIncrease = ( countries ) =>{
    if(!countries){
        return []
    }

    const mapedCountries = mapWithIncrease(countries).sort((a,b) => b.increaseRate -a.increaseRate);
    const noDuplicate = uniqeBy(mapedCountries, `country_territory_code`)
    return noDuplicate.slice( 0, NUM_OF_COUNTRIES )

}
export const topStable = ( countries ) =>{
    if(!countries){
        return []
    }
    const mapedCountries = mapWithIncrease(countries).sort((a,b) =>  Math.abs(1-a.increaseRate) - Math.abs(1-b.increaseRate));
    const noDuplicate = uniqeBy(mapedCountries, `country_territory_code`)
    return [...noDuplicate].slice( 0, NUM_OF_COUNTRIES )
}

const mapWithIncrease = (countries) =>{
    const firstDate = countries[0].date;
    // const lastDate = countries[1].date; 
    const lastDate = countries[countries.length -1].date; 
    return countries
                    .filter(country => country.date === firstDate || country.date === lastDate)
                    .map((country,idx, arr) => {
                        let increaseRate;
                        if( arr[idx+1] && country.geo_id === arr[idx+1].geo_id){
                            increaseRate = percentage(+country.deaths ,+arr[idx+1].deaths );
                        } else if(arr[idx-1] && country.geo_id === arr[idx-1].geo_id){
                            increaseRate = percentage(++arr[idx-1].deaths,country.deaths );
                        }
                        return {...country,increaseRate};
                    })
}


// HELPERS 
 const uniqeBy = (array, key) =>{
    return array.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[key]).indexOf(obj[key]) === pos;
    });
}

const percentage  = (a, b) => {
    let percent;
    if(b !== 0) {
        if(a !== 0) {
            percent = (b - a) / a * 100;
        } else {
            percent = b * 100;
        }
    } else {
        percent = - a * 100;            
    }       
    return Math.floor(percent);
}


export const startCase = (str) =>{
    return  str
            .split('_')
            .map(str => {
                const word = str.toLowerCase()
                return word.charAt(0).toUpperCase() + word.slice(1)
                })
            .join(' ')
}